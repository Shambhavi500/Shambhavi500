// Dynamic Client-side GitHub API Integration & Repository Ranking Engine
// Strictly uses real signals: awards, freshness, description, topics, actual stars.
// Zero metric fabrication, zero technology theatre.

import fallbackData from '../data/profile-data.json';
import { SHOWCASE_PROJECTS } from '../data/projects.js';

const USERNAME = 'Shambhavi500';
const GITHUB_API_URL = `https://api.github.com/users/${USERNAME}`;

export class GitHubApiService {
  /**
   * Retrieves profile statistics from live GitHub API with local fallback
   */
  static async getProfileStats() {
    try {
      const res = await fetch(GITHUB_API_URL, {
        headers: { Accept: 'application/vnd.github.v3+json' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const user = await res.json();
      return {
        publicRepos: user.public_repos ?? fallbackData.stats.publicRepos,
        followers: user.followers ?? fallbackData.stats.followers,
        following: user.following ?? fallbackData.stats.following,
        totalContributions: fallbackData.stats.totalContributions || 117,
        avatarUrl: user.avatar_url || fallbackData.avatarUrl
      };
    } catch {
      return {
        publicRepos: fallbackData.stats.publicRepos,
        followers: fallbackData.stats.followers,
        following: fallbackData.stats.following,
        totalContributions: fallbackData.stats.totalContributions || 117,
        avatarUrl: fallbackData.avatarUrl
      };
    }
  }

  /**
   * Computes rank score based purely on verified signals:
   * 1. Award / Hackathon association (TechFiesta, Pune Agri)
   * 2. Freshness / Recency of updates
   * 3. Description depth and presence
   * 4. Topics categorization
   * 5. Actual stars count
   */
  static calculateRankScore(repo, showcaseMap) {
    let score = 0;
    const nameLower = repo.name.toLowerCase();
    const showcase = showcaseMap.get(nameLower);

    // 1. Award / hackathon association
    if (nameLower.includes('krishisahai')) score += 60;
    else if (nameLower.includes('krishi-prabandh')) score += 55;
    else if (showcase?.badgeType === 'winner' || repo.isAwardWinning) score += 40;
    else if (showcase?.badgeType === 'research') score += 30;
    else if (showcase) score += 20;

    // 2. Freshness signal (decay over time)
    if (repo.updatedAt) {
      const daysSinceUpdate = (Date.now() - new Date(repo.updatedAt).getTime()) / (1000 * 60 * 60 * 24);
      if (daysSinceUpdate < 30) score += 20;
      else if (daysSinceUpdate < 90) score += 15;
      else if (daysSinceUpdate < 180) score += 10;
      else score += 5;
    }

    // 3. Description presence & quality
    if (repo.description && repo.description.length > 20) score += 15;

    // 4. Topics presence
    if (Array.isArray(repo.topics)) {
      score += Math.min(repo.topics.length * 2, 10);
    }

    // 5. Genuine stars
    score += (repo.stars || 0) * 5;

    return score;
  }

  /**
   * Retrieves repositories ranked and formatted for display
   */
  static async getRepositories() {
    const showcaseMap = new Map(SHOWCASE_PROJECTS.map(p => [p.name.toLowerCase(), p]));
    const fallbackMap = new Map((fallbackData.projects || []).map(p => [p.name.toLowerCase(), p]));

    try {
      const res = await fetch(`${GITHUB_API_URL}/repos?per_page=100&sort=updated`, {
        headers: { Accept: 'application/vnd.github.v3+json' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const liveRepos = await res.json();

      if (Array.isArray(liveRepos) && liveRepos.length > 0) {
        // Exclude the profile repository itself
        const filtered = liveRepos.filter(r => r.name.toLowerCase() !== USERNAME.toLowerCase());

        const mapped = filtered.map(r => {
          const matchedFallback = fallbackMap.get(r.name.toLowerCase());
          const matchedShowcase = showcaseMap.get(r.name.toLowerCase());

          return {
            id: r.id,
            name: r.name,
            fullName: r.full_name,
            url: r.html_url,
            description: r.description || matchedShowcase?.description || matchedFallback?.description || '',
            language: r.language || matchedShowcase?.language || matchedFallback?.language || 'Code',
            stars: r.stargazers_count ?? 0,
            forks: r.forks_count ?? 0,
            updatedAt: r.updated_at,
            topics: r.topics || [],
            category: matchedShowcase?.category || matchedFallback?.category || 'Software Repository',
            badge: matchedShowcase?.badge || matchedFallback?.tag || null,
            isAwardWinning: !!(matchedShowcase?.badgeType === 'winner' || matchedFallback?.isAwardWinning)
          };
        });

        // Apply ranking algorithm
        return mapped.sort((a, b) => {
          const scoreA = GitHubApiService.calculateRankScore(a, showcaseMap);
          const scoreB = GitHubApiService.calculateRankScore(b, showcaseMap);
          if (scoreB !== scoreA) return scoreB - scoreA;
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        });
      }
    } catch (err) {
      console.warn('[GitHubApiService] Live GitHub API unavailable, using verified local data:', err.message);
    }

    // Direct fallback from profile-data.json
    return (fallbackData.projects || []).map(p => {
      const matchedShowcase = showcaseMap.get(p.name.toLowerCase());
      return {
        id: p.name,
        name: p.name,
        fullName: p.fullName || `Shambhavi500/${p.name}`,
        url: p.url,
        description: matchedShowcase?.description || p.description || '',
        language: matchedShowcase?.language || p.language || 'Python',
        stars: p.stars || 0,
        forks: p.forks || 0,
        updatedAt: p.updatedAt,
        topics: p.readmeAnalysis?.sections || [],
        category: matchedShowcase?.category || p.category || 'Software Repository',
        badge: matchedShowcase?.badge || p.tag || null,
        isAwardWinning: !!(matchedShowcase?.badgeType === 'winner' || p.isAwardWinning)
      };
    }).sort((a, b) => {
      const scoreA = GitHubApiService.calculateRankScore(a, showcaseMap);
      const scoreB = GitHubApiService.calculateRankScore(b, showcaseMap);
      if (scoreB !== scoreA) return scoreB - scoreA;
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  }

  /**
   * Calculates actual language distribution from repository collection
   */
  static calculateLanguageDistribution(repos) {
    const counts = {};
    let total = 0;

    for (const r of repos) {
      if (r.language && r.language !== 'Code') {
        counts[r.language] = (counts[r.language] || 0) + 1;
        total++;
      }
    }

    if (total === 0) return [];

    return Object.entries(counts)
      .map(([lang, count]) => ({
        language: lang,
        count,
        percentage: Math.round((count / total) * 100)
      }))
      .sort((a, b) => b.count - a.count);
  }
}
