import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { PROFILE_CONFIG } from '../src/config/profile.config.js';
import { GitHubService } from '../src/services/github-service.js';
import { AnalyzerService } from '../src/services/analyzer-service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '..', 'src', 'data', 'profile-data.json');

export async function refreshProfileData(forceRefresh = false) {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('✦  ATELIER NO. 500 // DYNAMIC GITHUB DATA & RANKING PIPELINE   ✦');
  console.log('═══════════════════════════════════════════════════════════════');

  const username = PROFILE_CONFIG.targetUsername;
  console.log(`[1/4] Initializing GitHub telemetry service for @${username}...`);

  const ghService = new GitHubService();
  const telemetry = await ghService.getLiveTelemetry(username, forceRefresh);

  console.log(`[2/4] Analyzing ${telemetry.repos.length} repositories and documentation...`);
  const profileData = AnalyzerService.buildProfileData(telemetry, PROFILE_CONFIG);

  console.log(`[3/4] Ranking and curation complete.`);
  console.log(`      • Featured Showcase Projects (${profileData.projects.length}):`);
  profileData.projects.forEach(p => {
    console.log(`        [${p.id}] ${p.name.padEnd(20)} | Score: ${p.scoreData.totalScore.toString().padEnd(3)} | Lang: ${p.language.padEnd(11)} | Tag: ${p.tag}`);
  });

  console.log(`      • Language Spectrum:`);
  profileData.languageDistribution.forEach(l => {
    console.log(`        - ${l.language.padEnd(12)}: ${l.count} repos (${l.percentage}%)`);
  });

  console.log(`      • Contributions Telemetry:`);
  console.log(`        - Total Contributions: ${profileData.stats.totalContributions}`);
  console.log(`        - Active Days:         ${profileData.stats.activeDaysCount}`);

  // Write to src/data/profile-data.json
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(profileData, null, 2), 'utf-8');
  console.log(`[4/4] Successfully saved normalized ProfileData to: ${DATA_FILE}`);

  return profileData;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const force = process.argv.includes('--force');
  refreshProfileData(force).catch(err => {
    console.error('Data pipeline error:', err);
    process.exit(1);
  });
}
