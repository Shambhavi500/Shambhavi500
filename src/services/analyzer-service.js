/**
 * Repository Analyzer & Project Ranking Engine
 * Deterministically evaluates repository documentation quality, technical substance,
 * and contextual achievement impact.
 */

export class AnalyzerService {
  /**
   * Analyzes README documentation quality
   */
  static analyzeReadme(repoName, content) {
    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return {
        hasReadme: false,
        length: 0,
        lines: 0,
        sections: [],
        hasVisuals: false,
        hasCodeBlocks: false,
        hasDemoLink: false,
        score: 0,
        badge: 'NO README'
      };
    }

    const trimmed = content.trim();
    const length = trimmed.length;
    const lines = trimmed.split('\n').length;

    // Detect key technical documentation sections
    const sectionPatterns = [
      { name: 'Overview / About', regex: /#+\s*(overview|about|problem|introduction|background)/i },
      { name: 'Architecture / System', regex: /#+\s*(architecture|system|topology|design|modules|workflow)/i },
      { name: 'Features', regex: /#+\s*(features|capabilities|core features|what it does)/i },
      { name: 'Tech Stack', regex: /#+\s*(tech stack|technologies|built with|dependencies)/i },
      { name: 'Getting Started / Install', regex: /#+\s*(getting started|installation|setup|prerequisites|run)/i },
      { name: 'Usage / Quickstart', regex: /#+\s*(usage|quickstart|examples|commands)/i },
      { name: 'API / Endpoints', regex: /#+\s*(api|endpoints|routes|contracts)/i },
      { name: 'Reward / Evaluation', regex: /#+\s*(reward|observation|evaluation|benchmark|tasks)/i }
    ];

    const detectedSections = sectionPatterns
      .filter(p => p.regex.test(trimmed))
      .map(p => p.name);

    // Detect visuals (images, logos, diagrams)
    const hasVisuals = /<img\s+[^>]*src=|\!\[[^\]]*\]\([^)]+\)/i.test(trimmed);

    // Detect code blocks
    const hasCodeBlocks = /```[a-z0-9]*\n[\s\S]+?```/i.test(trimmed);

    // Detect live demo links or HuggingFace/Vercel/domain links
    const hasDemoLink = /https?:\/\/[^\s)]+(huggingface\.co|vercel\.app|github\.io|streamlit\.app|ngrok)/i.test(trimmed);

    // Scoring Formula (Max ~45 pts)
    let score = 10; // Base points for having a README

    // Length points (tiered)
    if (length > 15000) score += 15;
    else if (length > 5000) score += 10;
    else if (length > 1000) score += 5;

    // Detected sections: +2 pts each (up to 12 pts)
    score += Math.min(12, detectedSections.length * 2);

    // Visuals & Diagrams: +4 pts
    if (hasVisuals) score += 4;

    // Code blocks & commands: +3 pts
    if (hasCodeBlocks) score += 3;

    // Live demo / deployment link: +3 pts
    if (hasDemoLink) score += 3;

    let badge = 'BASIC';
    if (score >= 35) badge = 'COMPREHENSIVE';
    else if (score >= 25) badge = 'DETAILED';
    else if (score >= 15) badge = 'STANDARD';

    return {
      hasReadme: true,
      length,
      lines,
      sections: detectedSections,
      hasVisuals,
      hasCodeBlocks,
      hasDemoLink,
      score,
      badge
    };
  }

  /**
   * Calculates comprehensive project score
   */
  static calculateProjectScore(repo, readmeAnalysis, curatedContext = {}) {
    const isProfileRepo = repo.name.toLowerCase() === 'shambhavi500';
    if (isProfileRepo) {
      return {
        totalScore: -100,
        isFeaturedEligible: false,
        breakdown: { profileRepoPenalty: -100 }
      };
    }

    let readmeScore = readmeAnalysis.score || 0;
    let descScore = 0;
    let sizeScore = 0;
    let recencyScore = 0;
    let socialScore = 0;
    let achievementScore = curatedContext.achievementBoost || 0;

    // Description quality (Max 15 pts)
    const desc = repo.description || '';
    if (desc.trim().length >= 80) descScore = 15;
    else if (desc.trim().length >= 40) descScore = 10;
    else if (desc.trim().length >= 15) descScore = 6;

    // Codebase Substance & Language (Max 15 pts)
    const sizeKb = repo.size || 0;
    if (sizeKb > 10000) sizeScore = 10;
    else if (sizeKb > 1000) sizeScore = 7;
    else if (sizeKb > 100) sizeScore = 4;
    else if (sizeKb < 20 && !readmeAnalysis.hasReadme) sizeScore = -20; // empty stub penalty

    if (repo.language) {
      sizeScore += 5; // Has recognized language
    }

    // Recency (Max 10 pts)
    const updatedDate = new Date(repo.updated_at);
    const daysSinceUpdate = (Date.now() - updatedDate.getTime()) / (1000 * 60 * 60 * 24);
    if (daysSinceUpdate <= 30) recencyScore = 10;
    else if (daysSinceUpdate <= 90) recencyScore = 7;
    else if (daysSinceUpdate <= 180) recencyScore = 4;
    else recencyScore = 2;

    // Social engagement (Max 10 pts)
    socialScore = Math.min(10, (repo.stargazers_count || 0) * 3 + (repo.forks_count || 0) * 5);

    const totalScore = readmeScore + descScore + sizeScore + recencyScore + socialScore + achievementScore;
    const isFeaturedEligible = totalScore >= 20;

    return {
      totalScore,
      isFeaturedEligible,
      breakdown: {
        readmeScore,
        descScore,
        sizeScore,
        recencyScore,
        socialScore,
        achievementScore
      }
    };
  }

  /**
   * Ranks all repositories and formats featured project items
   */
  static rankProjects(repos, readmes, profileConfig) {
    const scoredList = repos.map(repo => {
      const readmeContent = readmes[repo.name] || null;
      const readmeAnalysis = this.analyzeReadme(repo.name, readmeContent);
      const curated = profileConfig.repoContext[repo.name] || {};
      const scoreData = this.calculateProjectScore(repo, readmeAnalysis, curated);

      // Determine clean summary description
      let displayDesc = repo.description;
      if (!displayDesc || displayDesc.trim().length < 20) {
        if (curated.specialHighlight) {
          displayDesc = curated.specialHighlight;
        } else if (readmeAnalysis.hasReadme) {
          displayDesc = `${repo.name} - Open source repository in ${repo.language || 'software engineering'}.`;
        } else {
          displayDesc = `Open source development project.`;
        }
      }

      // Determine category and tag
      const category = curated.category || (repo.language ? `${repo.language.toUpperCase()} / SYSTEMS` : 'SYSTEMS');
      const tag = curated.customBadge || (repo.forks_count > 0 ? 'RESEARCH LAB' : 'OPEN SOURCE');
      const highlight = curated.specialHighlight || displayDesc;

      return {
        name: repo.name,
        fullName: repo.full_name,
        url: repo.html_url,
        description: displayDesc,
        highlight,
        language: repo.language || 'Multi-stack',
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        updatedAt: repo.updated_at,
        createdAt: repo.created_at,
        sizeKb: repo.size,
        category,
        tag,
        isAwardWinning: !!curated.customBadge && (curated.customBadge.includes('1ST') || curated.customBadge.includes('RUNNER-UP')),
        readmeAnalysis,
        scoreData
      };
    });

    // Sort descending by total score
    scoredList.sort((a, b) => b.scoreData.totalScore - a.scoreData.totalScore);

    // Pick top 6 for featured showcase
    const featuredProjects = scoredList
      .filter(p => p.scoreData.isFeaturedEligible)
      .slice(0, 6)
      .map((p, idx) => ({
        ...p,
        id: `0${idx + 1}`,
        isPinned: true
      }));

    return {
      allRanked: scoredList,
      featuredProjects
    };
  }

  /**
   * Aggregates languages and calculates real percentage distribution
   */
  static calculateLanguageDistribution(repos) {
    const langCounts = {};
    let total = 0;

    repos.forEach(repo => {
      if (repo.name.toLowerCase() === 'shambhavi500') return; // ignore profile repo
      if (repo.language) {
        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
        total++;
      }
    });

    // Sort by count descending
    const sorted = Object.entries(langCounts).sort((a, b) => b[1] - a[1]);

    const distribution = sorted.map(([lang, count]) => {
      const percentage = total > 0 ? (count / total) * 100 : 0;
      return {
        language: lang,
        count,
        percentage: parseFloat(percentage.toFixed(1))
      };
    });

    return {
      counts: langCounts,
      totalCount: total,
      distribution
    };
  }

  /**
   * Compiles the unified ProfileData model
   */
  static buildProfileData(telemetry, profileConfig) {
    const user = telemetry.user;
    const repos = telemetry.repos || [];
    const readmes = telemetry.readmes || {};
    const contributions = telemetry.contributions || {
      totalContributions: 115,
      daysCount: 365,
      activeDaysCount: 35,
      weeks: []
    };

    const { allRanked, featuredProjects } = this.rankProjects(repos, readmes, profileConfig);
    const langTelemetry = this.calculateLanguageDistribution(repos);

    // Calculate total stars and forks
    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
    const totalForks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);

    return {
      // Identity
      username: user.login,
      name: profileConfig.canonicalName || user.name || 'Shambhavi Patil',
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
      bio: (user.bio || '').trim() || 'ENTC undergraduate | Curious about technology, systems, and their real-world impact | Learning by building projects',
      discipline: profileConfig.education.degree,
      shortDiscipline: profileConfig.education.shortDegree,
      headline: 'Architecting Autonomous Systems, AI Engines & High-Impact AgriTech',
      location: profileConfig.location,
      email: profileConfig.email,
      linkedinUrl: profileConfig.linkedinUrl,

      // Verified Academic & Professional Experience
      education: profileConfig.education,
      experience: profileConfig.experience,
      achievements: profileConfig.achievements,
      verifiedSkills: profileConfig.verifiedSkills,
      extracurricular: profileConfig.extracurricular,

      // Telemetry & Dynamic Statistics
      stats: {
        publicRepos: user.public_repos || repos.length,
        totalStars,
        totalForks,
        followers: user.followers,
        following: user.following,
        totalContributions: contributions.totalContributions || 115,
        activeDaysCount: contributions.activeDaysCount || 35,
        accountCreatedAt: user.created_at,
        activeYears: '2025 - Present'
      },

      // Language Distribution
      languages: langTelemetry.counts,
      languageDistribution: langTelemetry.distribution,

      // Ranked Projects
      projects: featuredProjects,
      allRankedProjects: allRanked,

      // Contribution Activity Calendar
      contributions,

      // Provenance Metadata
      updatedAt: new Date().toISOString()
    };
  }
}
