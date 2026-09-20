import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { generateReadme } from '../src/generators/readme.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const DATA_FILE = path.join(ROOT_DIR, 'src', 'data', 'profile-data.json');

export async function generateAll() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('✦  SHAMBHAVI PATIL // BARBIECORE EDITORIAL GENERATOR         ✦');
  console.log('═══════════════════════════════════════════════════════════════');

  if (!fs.existsSync(DATA_FILE)) {
    throw new Error(`Profile data file not found at ${DATA_FILE}.`);
  }

  const profileData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  console.log(`[+] Loaded Profile Data for: ${profileData.name} (@${profileData.username})`);

  fs.mkdirSync(ASSETS_DIR, { recursive: true });

  // Generate root README.md
  console.log('\n[+] Synchronizing GitHub Profile README.md...');
  const readmeContent = generateReadme(profileData).trim() + '\n';
  const readmePath = path.join(ROOT_DIR, 'README.md');
  fs.writeFileSync(readmePath, readmeContent, 'utf-8');
  const readmeSizeKb = (Buffer.byteLength(readmeContent, 'utf-8') / 1024).toFixed(2);
  console.log(`  ✔ README.md                  [${readmeSizeKb} KB]`);

  console.log('\n✨ Generation complete! All assets and README are synchronized.');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateAll().catch(err => {
    console.error('Generation failed:', err);
    process.exit(1);
  });
}
