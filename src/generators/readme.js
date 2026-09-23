// Barbiecore Editorial GitHub Profile README Generator for Shambhavi Patil (@Shambhavi500)
// Preserves Shambhavi's custom capsule-render profile README

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const README_FILE = path.join(__dirname, '..', '..', 'README.md');

export function generateReadme(data = {}) {
  if (fs.existsSync(README_FILE)) {
    return fs.readFileSync(README_FILE, 'utf-8');
  }
  return '';
}
