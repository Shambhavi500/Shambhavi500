import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'profile-data.json');

async function fetchGitHubData(username = 'Shambhavi500') {
  console.log(`[1/3] Fetching GitHub profile for ${username}...`);
  const headers = {
    'User-Agent': 'Barbie-Profile-Generator',
    'Accept': 'application/vnd.github.v3+json'
  };

  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
  }

  let user = null;
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (res.ok) {
      user = await res.json();
    } else {
      console.warn(`Warning: GitHub user API returned ${res.status}`);
    }
  } catch (err) {
    console.warn('Network error fetching user:', err.message);
  }

  console.log(`[2/3] Fetching repositories for ${username}...`);
  let repos = [];
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers });
    if (res.ok) {
      repos = await res.json();
    } else {
      console.warn(`Warning: GitHub repos API returned ${res.status}`);
    }
  } catch (err) {
    console.warn('Network error fetching repos:', err.message);
  }

  // If live fetch succeeded, format and enrich the data
  let data;
  if (user && Array.isArray(repos) && repos.length > 0) {
    // Language aggregation
    const langCounts = {};
    repos.forEach(r => {
      if (r.language) {
        langCounts[r.language] = (langCounts[r.language] || 0) + 1;
      }
    });

    const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
    const totalForks = repos.reduce((acc, r) => acc + (r.forks_count || 0), 0);

    // Curate top showcase projects with real descriptions and topics
    const featuredRepoNames = [
      'Ovio',
      'Aira',
      'KrishiSahAI',
      'KrishiSetu',
      'AlphaTrader-RL',
      'StockItUp',
      'NDVI_satellite',
      'EPeekPahani'
    ];

    const curatedProjects = featuredRepoNames.map((name, idx) => {
      const repo = repos.find(r => r.name.toLowerCase() === name.toLowerCase());
      if (!repo) return null;

      let category = 'AI / AUTONOMOUS';
      let tag = 'FLAGSHIP';
      let highlight = 'Multi-agent video editing orchestration';

      if (repo.name === 'Ovio') {
        category = 'AI / MULTI-AGENT';
        tag = 'FLAGSHIP COUTURE';
        highlight = 'AI DaVinci Resolve editing assistant & multi-agent workflow engine';
      } else if (repo.name === 'Aira') {
        category = 'FINTECH / AUTONOMOUS';
        tag = 'SYSTEM ARCHITECTURE';
        highlight = 'Autonomous Revenue Recovery OS for Indian Fintech Ecosystem';
      } else if (repo.name === 'KrishiSahAI') {
        category = 'AGRITECH / AI ADVISORY';
        tag = 'MISSION IMPACT';
        highlight = 'Data-driven AI advisory empowering sustainable Indian farmhouses';
      } else if (repo.name === 'KrishiSetu') {
        category = 'BLOCKCHAIN / SUPPLY CHAIN';
        tag = 'DECENTRALIZED';
        highlight = 'Decentralized agri-supply chain ensuring fair price transparency';
      } else if (repo.name === 'AlphaTrader-RL') {
        category = 'QUANTITATIVE / RL';
        tag = 'RESEARCH LAB';
        highlight = 'Reinforcement learning system for algorithmic trading execution';
      } else if (repo.name === 'StockItUp') {
        category = 'FINTECH / REAL-TIME';
        tag = 'DATA VISUALIZATION';
        highlight = 'Live market tracking application with real-time analytics & charts';
      } else if (repo.name === 'NDVI_satellite') {
        category = 'GEO-SPATIAL / REMOTE SENSING';
        tag = 'EARTH OBSERVATION';
        highlight = 'Vegetation index analysis using satellite spectral bands';
      } else if (repo.name === 'EPeekPahani') {
        category = 'MOBILE / ANDROID';
        tag = 'FIELD OPERATIONS';
        highlight = 'Digital agricultural crop inspection & digital survey application';
      }

      return {
        id: `0${idx + 1}`,
        name: repo.name,
        fullName: repo.full_name,
        url: repo.html_url,
        description: repo.description || highlight,
        highlight,
        language: repo.language || 'Multi-stack',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        category,
        tag,
        isPinned: true
      };
    }).filter(Boolean);

    data = {
      username: user.login,
      name: user.name || 'Shambhavi Patil',
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
      bio: user.bio ? user.bio.trim() : 'ENTC undergraduate | Curious about technology, systems, and their real-world impact | Learning by building projects',
      discipline: 'Electronics & Telecommunication Engineering',
      headline: 'Architecting Autonomous Systems, AI Engines & High-Impact AgriTech',
      stats: {
        publicRepos: user.public_repos || repos.length,
        totalStars,
        totalForks,
        followers: user.followers,
        following: user.following,
        activeYears: '2025 - Present',
        verifiedSince: 'July 2025',
        primaryFocus: 'AI Systems & Distributed Engineering'
      },
      languages: langCounts,
      projects: curatedProjects,
      techWardrobe: {
        languages: ['Python', 'TypeScript', 'JavaScript', 'Kotlin', 'C / C++', 'SQL'],
        autonomousAi: ['Multi-Agent Workflows', 'Reinforcement Learning', 'Computer Vision', 'LLM Agents', 'NDVI Remote Sensing'],
        webFrontend: ['React.js', 'Next.js', 'Vite', 'Tailwind CSS', 'Responsive UI', 'Modern SVG Architecture'],
        systemsBackend: ['FastAPI', 'Node.js', 'Express', 'RESTful APIs', 'Blockchain / Smart Contracts', 'PostgreSQL'],
        specialized: ['DaVinci Resolve API', 'Satellite Spectral Imagery', 'Real-Time Financial APIs', 'Android SDK']
      },
      achievements: [
        {
          code: 'EDITION 01',
          title: 'MULTI-AGENT ARCHITECT',
          description: 'Engineered Ovio: Autonomous DaVinci Resolve agent orchestration pipeline.',
          metric: 'Autonomous AI'
        },
        {
          code: 'EDITION 02',
          title: 'AGRITECH IMPACT BUILDER',
          description: 'Designed KrishiSahAI, KrishiSetu & NDVI satellite systems for agricultural intelligence.',
          metric: 'Social & Earth Impact'
        },
        {
          code: 'EDITION 03',
          title: 'FINTECH ALGO ENGINEER',
          description: 'Developed AIRA autonomous recovery OS & AlphaTrader-RL reinforcement learning trading.',
          metric: 'Quantitative Systems'
        },
        {
          code: 'EDITION 04',
          title: 'POLYGLOT ATELIER',
          description: 'Production code spanning Python, TypeScript, Kotlin, JavaScript, and C/C++.',
          metric: '14 Repositories'
        }
      ],
      socials: {
        github: user.html_url,
        email: 'shambhavipatil5631@gmail.com'
      },
      updatedAt: new Date().toISOString()
    };
  } else {
    console.log('Using existing cached profile data if available.');
    if (fs.existsSync(DATA_PATH)) {
      data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    } else {
      throw new Error('No profile data available and API fetch failed.');
    }
  }

  // Ensure data dir exists
  fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`[3/3] Successfully saved profile data to ${DATA_PATH}`);
  return data;
}

// Run when executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  fetchGitHubData().catch(err => {
    console.error('Fetch error:', err);
    process.exit(1);
  });
}

export { fetchGitHubData };
