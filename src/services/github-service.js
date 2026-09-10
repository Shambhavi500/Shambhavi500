import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CACHE_DIR = path.join(__dirname, '..', '..', '.cache');
const CACHE_FILE = path.join(CACHE_DIR, 'github-cache.json');

/**
 * Robust GitHub API & Telemetry Service with Caching and Rate-Limit Fallback
 */
export class GitHubService {
  constructor(options = {}) {
    this.token = process.env.GITHUB_TOKEN || null;
    this.cacheTtlMs = options.cacheTtlMs || 60 * 60 * 1000; // 1 hour default
    this.userAgent = 'Barbie-Haute-Couture-Profile-Generator';
  }

  getHeaders() {
    const headers = {
      'User-Agent': this.userAgent,
      'Accept': 'application/vnd.github.v3+json'
    };
    if (this.token) {
      headers['Authorization'] = `token ${this.token}`;
    }
    return headers;
  }

  loadCache() {
    try {
      if (fs.existsSync(CACHE_FILE)) {
        const raw = fs.readFileSync(CACHE_FILE, 'utf-8');
        return JSON.parse(raw);
      }
    } catch (err) {
      console.warn('[Cache] Could not read cache file:', err.message);
    }
    return null;
  }

  saveCache(data) {
    try {
      fs.mkdirSync(CACHE_DIR, { recursive: true });
      fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2), 'utf-8');
    } catch (err) {
      console.warn('[Cache] Could not save cache file:', err.message);
    }
  }

  async fetchUserProfile(username) {
    const url = `https://api.github.com/users/${username}`;
    console.log(`  [GH API] Requesting user profile: ${url}`);
    const res = await fetch(url, { headers: this.getHeaders() });
    if (!res.ok) {
      throw new Error(`GitHub User API error (${res.status}): ${res.statusText}`);
    }
    return await res.json();
  }

  async fetchUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;
    console.log(`  [GH API] Requesting user repositories: ${url}`);
    const res = await fetch(url, { headers: this.getHeaders() });
    if (!res.ok) {
      throw new Error(`GitHub Repos API error (${res.status}): ${res.statusText}`);
    }
    return await res.json();
  }

  async fetchRepoReadme(username, repoName, defaultBranch = 'main') {
    // 1. Try GitHub API
    try {
      const apiUrl = `https://api.github.com/repos/${username}/${repoName}/readme`;
      const res = await fetch(apiUrl, { headers: this.getHeaders() });
      if (res.ok) {
        const data = await res.json();
        if (data.content && data.encoding === 'base64') {
          return Buffer.from(data.content, 'base64').toString('utf-8');
        }
      }
    } catch (err) {
      // ignore and try raw
    }

    // 2. Fallback to raw GitHub content
    try {
      const branches = [defaultBranch, 'main', 'master'];
      for (const branch of branches) {
        const rawUrl = `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/README.md`;
        const res = await fetch(rawUrl, { headers: { 'User-Agent': this.userAgent } });
        if (res.ok) {
          return await res.text();
        }
      }
    } catch (err) {
      // ignore
    }

    return null;
  }

  async fetchContributions(username) {
    try {
      const url = `https://github.com/users/${username}/contributions`;
      console.log(`  [GH Scrape] Requesting public contribution telemetry: ${url}`);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.warn(`  [GH Scrape] Contributions page returned ${res.status}`);
        return null;
      }
      const html = await res.text();

      // Parse total contributions in last year
      const totalMatch = html.match(/([\d,]+)\s+contributions\s+in\s+the\s+last\s+year/i);
      const totalContributions = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ''), 10) : 0;

      // Parse days
      const days = [];
      const cellRegex = /data-date="([^"]+)"[^>]*data-level="([^"]+)"/g;
      let match;
      while ((match = cellRegex.exec(html)) !== null) {
        days.push({
          date: match[1],
          level: parseInt(match[2], 10)
        });
      }

      // Group into 52 weeks (approx 7 days each, take last 52*7 = 364 days)
      const recentDays = days.slice(-364);
      const weeks = [];
      for (let i = 0; i < recentDays.length; i += 7) {
        weeks.push(recentDays.slice(i, i + 7));
      }

      return {
        totalContributions,
        daysCount: days.length,
        activeDaysCount: days.filter(d => d.level > 0).length,
        weeks: weeks.slice(-52) // exactly 52 weeks
      };
    } catch (err) {
      console.warn('  [GH Scrape] Could not fetch contribution calendar:', err.message);
      return null;
    }
  }

  /**
   * Fetches all live GitHub data with caching and fallback
   */
  async getLiveTelemetry(username, forceRefresh = false) {
    const cached = this.loadCache();
    const now = Date.now();

    if (!forceRefresh && cached && cached.username === username && (now - cached.cachedAt) < this.cacheTtlMs) {
      console.log(`[Cache] Using cached GitHub data from ${new Date(cached.cachedAt).toLocaleTimeString()}`);
      return cached;
    }

    try {
      console.log(`[GitHub API] Fetching fresh telemetry for @${username}...`);
      const user = await this.fetchUserProfile(username);
      const rawRepos = await this.fetchUserRepos(username);

      console.log(`[GitHub API] Retrieved ${rawRepos.length} repositories. Fetching READMEs...`);
      const readmes = {};
      for (const repo of rawRepos) {
        const readme = await this.fetchRepoReadme(username, repo.name, repo.default_branch);
        if (readme) {
          readmes[repo.name] = readme;
        }
      }

      const contributions = await this.fetchContributions(username);

      const result = {
        username,
        cachedAt: now,
        user,
        repos: rawRepos,
        readmes,
        contributions
      };

      this.saveCache(result);
      return result;
    } catch (err) {
      console.warn(`[GitHub API] Failed to fetch live data: ${err.message}`);
      if (cached) {
        console.warn('[Cache] Falling back to previously cached GitHub telemetry.');
        return cached;
      }
      throw err;
    }
  }
}
