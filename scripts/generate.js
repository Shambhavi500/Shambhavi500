import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { generateHeroSvg } from '../src/generators/hero.js';
import { generateIdentitySvg } from '../src/generators/identity.js';
import { generateAchievementsSvg } from '../src/generators/achievements.js';
import { generateExperienceSvg } from '../src/generators/experience.js';
import { generateDashboardSvg } from '../src/generators/dashboard.js';
import { generateProjectsSvg } from '../src/generators/projects.js';
import { generateTechWardrobeSvg } from '../src/generators/tech-wardrobe.js';
import { generateRunwaySvg } from '../src/generators/runway.js';
import { generateFooterSvg } from '../src/generators/footer.js';
import { generateDividerSvg } from '../src/generators/divider.js';
import { generateReadme } from '../src/generators/readme.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const DATA_FILE = path.join(ROOT_DIR, 'src', 'data', 'profile-data.json');

export async function generateAll() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('✦  ATELIER NO. 500 // BARBIE HAUTE COUTURE PROFILE GENERATOR ✦');
  console.log('═══════════════════════════════════════════════════════════════');

  if (!fs.existsSync(DATA_FILE)) {
    throw new Error(`Profile data file not found at ${DATA_FILE}. Run fetch-github-data.js first.`);
  }

  const profileData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  console.log(`[+] Loaded Profile Data for: ${profileData.name} (@${profileData.username})`);
  console.log(`[+] Total Public Repositories: ${profileData.stats.publicRepos}`);

  // Ensure assets directory exists
  fs.mkdirSync(ASSETS_DIR, { recursive: true });

  const tasks = [
    { filename: 'hero.svg', generator: () => generateHeroSvg(profileData) },
    { filename: 'identity.svg', generator: () => generateIdentitySvg(profileData) },
    { filename: 'achievements.svg', generator: () => generateAchievementsSvg(profileData) },
    { filename: 'experience.svg', generator: () => generateExperienceSvg(profileData) },
    { filename: 'projects.svg', generator: () => generateProjectsSvg(profileData) },
    { filename: 'dashboard.svg', generator: () => generateDashboardSvg(profileData) },
    { filename: 'tech-wardrobe.svg', generator: () => generateTechWardrobeSvg(profileData) },
    { filename: 'runway.svg', generator: () => generateRunwaySvg(profileData) },
    { filename: 'footer.svg', generator: () => generateFooterSvg(profileData) },
    { filename: 'divider.svg', generator: () => generateDividerSvg() }
  ];

  console.log('\n[+] Generating Haute Couture SVG Assets...');
  for (const task of tasks) {
    const filePath = path.join(ASSETS_DIR, task.filename);
    const svgContent = task.generator().trim();
    fs.writeFileSync(filePath, svgContent, 'utf-8');
    const sizeKb = (Buffer.byteLength(svgContent, 'utf-8') / 1024).toFixed(2);
    console.log(`  ✔ assets/${task.filename.padEnd(20)} [${sizeKb} KB]`);
  }

  // Generate root README.md
  console.log('\n[+] Generating GitHub Profile README.md...');
  const readmeContent = generateReadme(profileData).trim() + '\n';
  const readmePath = path.join(ROOT_DIR, 'README.md');
  fs.writeFileSync(readmePath, readmeContent, 'utf-8');
  const readmeSizeKb = (Buffer.byteLength(readmeContent, 'utf-8') / 1024).toFixed(2);
  console.log(`  ✔ README.md                  [${readmeSizeKb} KB]`);

  console.log('\n✨ Generation complete! All assets are ready and synchronized.');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateAll().catch(err => {
    console.error('Generation failed:', err);
    process.exit(1);
  });
}
