// Curated External Context Layer for Shambhavi Patil
// Only contains verified facts from Resume (F24ET194_ShambhaviPatil_resume.pdf.pdf)
// and LinkedIn (shambhavi-patil05).
// All GitHub metrics, repos, languages, and activity are fetched dynamically.

export const PROFILE_CONFIG = {
  // Identity & Socials
  targetUsername: 'Shambhavi500',
  canonicalName: 'Shambhavi Patil',
  email: 'shambhavipatil5631@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/shambhavi-patil05/',
  location: 'Pune, Maharashtra, India',

  // Verified Academic Pedigree (from Resume)
  education: {
    institution: 'Pune Institute of Computer Technology (PICT)',
    degree: 'B.Tech in Electronics & Telecommunication Engineering',
    shortDegree: 'B.Tech ENTC',
    period: 'Aug 2024 – May 2028',
    cgpa: '8.6',
    location: 'Pune, Maharashtra',
    schooling: {
      hsc: '89.83%',
      ssc: '96.40%'
    }
  },

  // Verified Professional Experience (from Resume & LinkedIn)
  experience: [
    {
      company: 'Mindstrix Technologies LLP',
      role: 'AI/ML Research & Development Intern',
      status: 'Mar 2026 – Ongoing',
      mode: 'Remote / Hybrid',
      highlights: [
        'Contribute to application software development across the SDLC on live AI/ML and software platform projects under mentor guidance.',
        'Design and code program modules for data processing, model training, and system integration; prepare test data and execute test cases.',
        'Collaborate in an Agile team environment through technical reviews, brainstorming sessions, and cross-functional product development.'
      ]
    }
  ],

  // Verified Major Achievements (from Resume & Hackathons)
  achievements: [
    {
      id: '01',
      edition: '01',
      event: "TECHFIESTA '26",
      title: "TECHFIESTA '26",
      place: '1ST PLACE',
      domain: 'AGRICULTURE DOMAIN',
      project: 'KrishiSahAI',
      scope: 'PICT ENTC · 600+ Participating Teams',
      year: '2026',
      grantOrPrize: '1st Place out of 600+ Teams',
      summary: 'Secured 1st place among 600+ participating teams for building KrishiSahAI, an AI-driven agricultural assistance platform.',
      metric: '600+ teams',
      badge: 'WINNER'
    },
    {
      id: '02',
      edition: '02',
      event: 'PUNE AGRI HACKATHON',
      title: 'PUNE AGRI INTL HACKATHON',
      place: 'NATIONAL RUNNER-UP',
      domain: 'PRECISION AGRITECH',
      project: 'Krishi Prabandh & NDVI',
      scope: 'National Competition vs Startups & Companies',
      year: 'May 2026',
      grantOrPrize: 'INR 15L Government Development Grant',
      summary: 'Secured National Runner-Up vs professional startups presenting Krishi Prabandh (AI governance & satellite NDVI validation) to Maharashtra CM.',
      metric: '₹15L grant',
      badge: 'RUNNER-UP'
    },
    {
      id: '03',
      edition: '03',
      event: 'MULTI-AGENT ARCHITECT',
      title: 'MULTI-AGENT ARCHITECT',
      place: 'FLAGSHIP AGENT',
      domain: 'AUTONOMOUS WORKFLOWS',
      project: 'Ovio (DaVinci Resolve)',
      scope: 'Autonomous Video Editing & Orchestration',
      year: '2026',
      grantOrPrize: 'Cinema-Grade AI Pipeline',
      summary: 'Engineered Ovio: Autonomous DaVinci Resolve agent orchestration engine with multi-modal tools and video editing automation.',
      metric: 'Agentic OS',
      badge: 'ARCHITECT'
    },
    {
      id: '04',
      edition: '04',
      event: 'QUANTITATIVE RL LAB',
      title: 'QUANTITATIVE RL LAB',
      place: 'SYSTEMS ENGINE',
      domain: 'ALGORITHMIC TRADING',
      project: 'AlphaTrader-RL & AIRA',
      scope: 'NSE Market Simulation & Revenue Recovery',
      year: '2025 - 2026',
      grantOrPrize: 'Gymnasium & Distributed FinTech',
      summary: 'Developed AlphaTrader-RL custom Gymnasium environment with 50-dim observation space on NSE data & AIRA fintech recovery OS.',
      metric: '5+ Yrs NSE',
      badge: 'ALGO LAB'
    }
  ],

  // Verified Curated Project Context (to augment canonical GitHub repo data)
  repoContext: {
    'KrishiSahAI': {
      category: 'AGRITECH / AI ADVISORY',
      customBadge: "1ST PLACE · TECHFIESTA '26",
      specialHighlight: 'Flagship AI agriculture platform for crop recommendations, soil telemetry & rural decision support.',
      achievementBoost: 30
    },
    'KRISHI-PRABANDH': {
      category: 'GOV-TECH / AGRONOMY',
      customBadge: 'NATIONAL RUNNER-UP · ₹15L GRANT',
      specialHighlight: 'AI governance layer with OCR fraud detection & satellite NDVI spectral validation.',
      achievementBoost: 25
    },
    'AlphaTrader-RL': {
      category: 'QUANT / REINFORCEMENT LEARNING',
      customBadge: 'FLAGSHIP RL RESEARCH',
      specialHighlight: 'Gymnasium RL trading environment on 5+ yrs NSE data with 50-dim observation space and Docker.',
      achievementBoost: 20
    },
    'Ovio': {
      category: 'AI / MULTI-AGENT',
      customBadge: 'AUTONOMOUS WORKFLOW',
      specialHighlight: 'Cinema-grade AI DaVinci Resolve editing assistant & multi-agent workflow engine.',
      achievementBoost: 15
    },
    'Aira': {
      category: 'FINTECH / AUTONOMOUS OS',
      customBadge: 'SYSTEM ARCHITECTURE',
      specialHighlight: 'Autonomous Revenue Recovery Operating System for Indian fintech ecosystem & payment pipelines.',
      achievementBoost: 15
    },
    'NDVI_satellite': {
      category: 'EARTH OBSERVATION / GIS',
      customBadge: 'SPECTRAL REMOTE SENSING',
      specialHighlight: 'Vegetation index analysis using satellite spectral bands and Google Earth Engine.',
      achievementBoost: 10
    },
    'EPeekPahani': {
      category: 'MOBILE / ANDROID',
      customBadge: 'FIELD OPERATIONS',
      specialHighlight: 'Digital agricultural crop inspection and digital survey application for ground truth.',
      achievementBoost: 10
    }
  },

  // Verified Resume Skill Stack (cross-referenced with GitHub languages)
  verifiedSkills: {
    languages: ['C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'Java'],
    aiMl: [
      'Machine Learning Fundamentals',
      'Reinforcement Learning (Gymnasium)',
      'Model Integration',
      'Multi-Agent Orchestration',
      'NDVI Spectral Analysis'
    ],
    embeddedElectronics: [
      'Arduino',
      'Embedded C',
      'Sensors & Interfacing',
      'Circuit Design',
      'Proteus & Tinkercad'
    ],
    softwareEng: [
      'SDLC & Agile',
      'Test Plan Design & Execution',
      'API Integration',
      'Docker Containerization',
      'Git & GitHub'
    ],
    creativeTools: ['DaVinci Resolve 19', 'Canva']
  },

  // Extracurriculars verified from resume
  extracurricular: [
    { title: 'Volunteer, NGO UPAY', detail: 'Taught basic technology and digital skills to underprivileged students.' },
    { title: 'Chess: Zonal Level Representative', detail: 'Developed strategic thinking and analytical skills competing at zonal levels.' }
  ]
};
