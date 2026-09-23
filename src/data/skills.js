// Verified Technical Skills Stack for Shambhavi Patil
// Strictly categorizes technologies with verified usage across projects, hackathons, and resume.
// No fake percentages or ungrounded proficiency claims.

import { 
  SiCplusplus, SiPython, SiJavascript, SiC, SiHtml5, SiCss3,
  SiScikitlearn, SiOpencv, SiAndroid, SiArduino,
  SiGit, SiGithub, SiDocker
} from 'react-icons/si';

import { 
  FaJava, FaBrain, FaRobot, FaNetworkWired, FaSatellite,
  FaMicrochip, FaCodeBranch, FaBroadcastTower,
  FaServer, FaVial, FaSync
} from 'react-icons/fa';

export const SKILL_CATEGORIES = [
  {
    category: 'PROGRAMMING LANGUAGES',
    description: 'Core languages used for systems, algorithms, and application engineering',
    skills: [
      { name: 'C++', note: 'DSA, Systems, Competitive Programming', primary: true, icon: SiCplusplus },
      { name: 'Python', note: 'AI/ML, RL Research, Computer Vision', primary: true, icon: SiPython },
      { name: 'Java', note: 'Object-Oriented Design, Enterprise Fundamentals', primary: true, icon: FaJava },
      { name: 'JavaScript', note: 'Frontend, Full-Stack, GEE Remote Sensing', primary: true, icon: SiJavascript },
      { name: 'C', note: 'Low-Level Hardware, Embedded Systems', icon: SiC },
      { name: 'HTML & CSS', note: 'Web Design', icon: SiHtml5 }
    ]
  },
  {
    category: 'AI & MACHINE LEARNING',
    description: 'Applied intelligence and modeling',
    skills: [
      { name: 'AI / ML', note: 'Algorithms, Training & Inference Pipelines', primary: true, icon: FaBrain },
      { name: 'Machine Learning', note: 'Scikit-learn, Predictive Modeling', primary: true, icon: SiScikitlearn },
      { name: 'Computer Vision', note: 'Image Processing, OCR', primary: true, icon: SiOpencv },
      { name: 'Reinforcement Learning', note: 'Gymnasium Environments', icon: FaRobot },
      { name: 'Multi-Agent Systems', note: 'Workflow Automation', icon: FaNetworkWired },
      { name: 'NDVI Spectral Analysis', note: 'Satellite Remote Sensing & GIS', icon: FaSatellite }
    ]
  },
  {
    category: 'DEVELOPMENT & EMBEDDED',
    description: 'Hardware-software co-design and mobile development',
    skills: [
      { name: 'Android Development', note: 'Native Mobile Engineering', primary: true, icon: SiAndroid },
      { name: 'Embedded C & Arduino', note: 'Microcontrollers, Sensor Interfacing', primary: true, icon: SiArduino },
      { name: 'Circuit Design', note: 'Schematics, Telecommunication Circuits', icon: FaMicrochip },
      { name: 'Proteus & Tinkercad', note: 'Hardware Simulation & Validation', icon: FaMicrochip }
    ]
  },
  {
    category: 'TOOLS & INFRASTRUCTURE',
    description: 'Engineering workflows, version control, and containerization',
    skills: [
      { name: 'Git', note: 'Version Control', primary: true, icon: SiGit },
      { name: 'GitHub', note: 'Collaboration', primary: true, icon: SiGithub },
      { name: 'Docker', note: 'Containerization', icon: SiDocker },
      { name: 'SDLC & Agile', note: 'Sprint Planning, Technical Code Reviews', icon: FaSync },
      { name: 'Test Plan Design', note: 'Test Case Execution', icon: FaVial }
    ]
  },
  {
    category: 'CORE ENGINEERING & FOUNDATIONS',
    description: 'Academic rigor and algorithmic problem solving',
    skills: [
      { name: 'Data Structures & Algorithms', note: 'Algorithmic problem solving', primary: true, icon: FaCodeBranch },
      { name: 'Electronics & Telecomm (ENTC)', note: 'Signal Processing, Communication Theory', icon: FaBroadcastTower },
      { name: 'System Architecture', note: 'System Design', icon: FaServer }
    ]
  }
];
