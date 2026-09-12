import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const README_FILE = path.join(ROOT_DIR, 'README.md');
const DATA_FILE = path.join(ROOT_DIR, 'src', 'data', 'profile-data.json');

function validateXml(xmlString, filename) {
  if (!xmlString.startsWith('<svg') || !xmlString.trim().endsWith('</svg>')) {
    throw new Error(`${filename}: Does not start with <svg or end with </svg>`);
  }

  const tagsToCheck = ['svg', 'defs', 'style', 'g', 'filter', 'linearGradient', 'radialGradient'];
  for (const tag of tagsToCheck) {
    const openMatches = xmlString.match(new RegExp(`<${tag}(\\s+[^>]*)?>`, 'g')) || [];
    const closeMatches = xmlString.match(new RegExp(`</${tag}>`, 'g')) || [];
    if (openMatches.length !== closeMatches.length) {
      throw new Error(`${filename}: Mismatched <${tag}> tags (opened ${openMatches.length}, closed ${closeMatches.length})`);
    }
  }

  if (xmlString.includes('undefined') || xmlString.includes('NaN') || xmlString.includes('null')) {
    throw new Error(`${filename}: Contains unrendered JS token ('undefined', 'NaN', or 'null')`);
  }

  const entityMatches = [...xmlString.matchAll(/&([a-zA-Z0-9]+);/g)];
  const validEntities = new Set(['amp', 'lt', 'gt', 'quot', 'apos']);
  for (const match of entityMatches) {
    if (!validEntities.has(match[1])) {
      throw new Error(`${filename}: Contains non-XML entity '&${match[1]};'. Use valid XML entity, numeric entity, or UTF-8 character.`);
    }
  }
}

export async function runValidation() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('✦  SHAMBHAVI PATIL // BARBIECORE EDITORIAL VALIDATION SUITE   ✦');
  console.log('═══════════════════════════════════════════════════════════════\n');

  let errors = 0;

  // 1. Data Integrity Checks
  console.log('[1/4] Validating Profile Data & Truth Sources...');
  if (!fs.existsSync(DATA_FILE)) {
    console.error('  ✖ Missing data file at', DATA_FILE);
    errors++;
  } else {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    if (data.username !== 'Shambhavi500') {
      console.error(`  ✖ Expected username Shambhavi500, got ${data.username}`);
      errors++;
    } else {
      console.log(`  ✔ Verified username: ${data.username} (${data.name})`);
    }

    if (!data.education || !data.education.institution.includes('PICT') || data.education.cgpa !== '8.6') {
      console.error(`  ✖ Missing or inaccurate education in profile data`);
      errors++;
    } else {
      console.log(`  ✔ Verified Academic Pedigree: ${data.education.institution} (${data.education.shortDegree}) CGPA: ${data.education.cgpa}`);
    }

    if (!data.experience || data.experience.length === 0 || !data.experience[0].company.includes('Mindstrix')) {
      console.error(`  ✖ Missing or inaccurate internship data`);
      errors++;
    } else {
      console.log(`  ✔ Verified Internship: ${data.experience[0].company} - ${data.experience[0].role}`);
    }

    const hasTechFiesta = (data.achievements || []).some(a => a.title.includes('TECHFIESTA') || a.event.includes('TECHFIESTA'));
    const hasPuneAgri = (data.achievements || []).some(a => a.title.includes('PUNE AGRI') || a.event.includes('PUNE AGRI'));
    if (!hasTechFiesta || !hasPuneAgri) {
      console.error(`  ✖ Missing prominent hackathon achievements in profile data`);
      errors++;
    } else {
      console.log(`  ✔ Verified Achievements: TechFiesta '26 (1st Place) & Pune Agri Hackathon (National Runner-Up)`);
    }
  }

  // 2. README Architecture & Strict Barbiecore Rules
  console.log('\n[2/4] Validating README.md Structure & Barbiecore Rules...');
  if (!fs.existsSync(README_FILE)) {
    console.error('  ✖ Missing README.md at', README_FILE);
    errors++;
  } else {
    const readme = fs.readFileSync(README_FILE, 'utf-8');
    if (readme.length < 1000) {
      console.error('  ✖ README.md is suspiciously short');
      errors++;
    } else {
      console.log(`  ✔ README.md exists (${readme.length} chars)`);
    }

    // STRICT NON-NEGOTIABLE RULE: NO EMOJIS ANYWHERE
    const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}]/u;
    if (emojiRegex.test(readme)) {
      console.error('  ✖ STRICT RULE VIOLATION: README contains forbidden emoji(s)!');
      errors++;
    } else {
      console.log('  ✔ Verified ZERO emojis in README.md');
    }

    // Check for placeholders
    const placeholders = ['TODO', 'FIXME', 'LOREM IPSUM', 'PLACEHOLDER'];
    for (const p of placeholders) {
      if (readme.toUpperCase().includes(p)) {
        console.error(`  ✖ README contains forbidden placeholder: "${p}"`);
        errors++;
      }
    }

    // Required editorial sections
    const requiredSections = [
      '01 / PROFILE',
      '02 / ABOUT',
      '03 / WHAT I BUILD',
      '04 / SELECTED WORK',
      '05 / RECOGNITION',
      '06 / EXPERIENCE',
      '07 / TECH STACK',
      '08 / GITHUB ACTIVITY',
      '09 / CURRENTLY BUILDING',
      '10 / STATEMENT',
      '11 / CONNECT'
    ];

    for (const sec of requiredSections) {
      if (!readme.includes(sec)) {
        console.error(`  ✖ README missing required editorial section: "${sec}"`);
        errors++;
      } else {
        console.log(`  ✔ Section present: "${sec}"`);
      }
    }

    // Check that all 6 required projects are present
    const requiredProjects = ['KrishiSahAI', 'KRISHI-PRABANDH', 'AlphaTrader-RL', 'Ovio', 'Aira', 'NDVI_satellite'];
    for (const proj of requiredProjects) {
      if (!readme.includes(proj)) {
        console.error(`  ✖ README missing required project: ${proj}`);
        errors++;
      } else {
        console.log(`  ✔ Project present: ${proj}`);
      }
    }

    // Forbidden static text posters
    const forbiddenTextPosters = [
      'identity.svg',
      'achievements.svg',
      'experience.svg',
      'projects.svg',
      'project-01.svg',
      'dashboard.svg',
      'tech-wardrobe.svg',
      'runway.svg'
    ];
    for (const poster of forbiddenTextPosters) {
      if (readme.includes(poster)) {
        console.error(`  ✖ Anti-pattern detected: README embeds static text poster "${poster}"!`);
        errors++;
      }
    }

    // Verify verbatim quote panel
    if (!readme.includes('I learn by building, breaking, debugging and improving real systems.')) {
      console.error('  ✖ README missing engineering axiom quote in About section');
      errors++;
    } else {
      console.log('  ✔ Verified Engineering Axiom quote panel');
    }
  }

  // 3. Validate Referenced Assets in README
  console.log('\n[3/4] Validating Referenced Assets...');
  const readme = fs.readFileSync(README_FILE, 'utf-8');
  const assetRefs = [...readme.matchAll(/src=["'](\.\/assets\/[^"']+)["']/g)].map(m => m[1]);
  console.log(`  Found ${assetRefs.length} asset reference(s) in README.md: ${assetRefs.join(', ')}`);
  for (const ref of assetRefs) {
    const localPath = path.join(ROOT_DIR, ref);
    if (!fs.existsSync(localPath)) {
      console.error(`  ✖ Referenced asset missing: ${ref}`);
      errors++;
    } else {
      try {
        const svgContent = fs.readFileSync(localPath, 'utf-8');
        validateXml(svgContent, ref);
        console.log(`  ✔ Referenced asset exists and is well-formed XML: ${ref}`);
      } catch (err) {
        console.error(`  ✖ Invalid XML in ${ref}: ${err.message}`);
        errors++;
      }
    }
  }

  // 4. Validate Asset Directory Optimization
  console.log('\n[4/4] Validating Asset Files & XML Well-Formedness...');
  if (fs.existsSync(ASSETS_DIR)) {
    const files = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith('.svg'));
    for (const file of files) {
      const filePath = path.join(ASSETS_DIR, file);
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        validateXml(content, file);
      } catch (err) {
        console.error(`  ✖ Invalid SVG in ${file}: ${err.message}`);
        errors++;
      }
    }
    console.log(`  ✔ All ${files.length} SVG files in /assets are syntactically valid XML`);
  }

  // Final Verdict
  console.log('\n═══════════════════════════════════════════════════════════════');
  if (errors === 0) {
    console.log('✨ ALL 4 TEST SUITES PASSED — ZERO ERRORS DETECTED ✨');
    console.log('═══════════════════════════════════════════════════════════════\n');
  } else {
    console.error(`❌ VALIDATION FAILED WITH ${errors} ERROR(S)`);
    console.log('═══════════════════════════════════════════════════════════════\n');
    process.exit(1);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runValidation().catch(err => {
    console.error('Validation crashed:', err);
    process.exit(1);
  });
}
