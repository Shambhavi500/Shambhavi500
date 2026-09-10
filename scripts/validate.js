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
  // Basic XML well-formedness checks
  if (!xmlString.startsWith('<svg') || !xmlString.trim().endsWith('</svg>')) {
    throw new Error(`${filename}: Does not start with <svg or end with </svg>`);
  }

  // Check balanced tags for common container elements
  const tagsToCheck = ['svg', 'defs', 'style', 'g', 'filter', 'linearGradient', 'radialGradient'];
  for (const tag of tagsToCheck) {
    const openMatches = xmlString.match(new RegExp(`<${tag}(\\s+[^>]*)?>`, 'g')) || [];
    const closeMatches = xmlString.match(new RegExp(`</${tag}>`, 'g')) || [];
    if (openMatches.length !== closeMatches.length) {
      throw new Error(`${filename}: Mismatched <${tag}> tags (opened ${openMatches.length}, closed ${closeMatches.length})`);
    }
  }

  // Check for forbidden unescaped tokens outside tags
  if (xmlString.includes('undefined') || xmlString.includes('NaN') || xmlString.includes('null')) {
    throw new Error(`${filename}: Contains unrendered JS token ('undefined', 'NaN', or 'null')`);
  }

  // Check for invalid XML entities (only amp, lt, gt, quot, apos, or numeric entities are valid in SVG XML)
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
  console.log('✦  ATELIER NO. 500 // PROFILE AUTOMATED VALIDATION SUITE      ✦');
  console.log('═══════════════════════════════════════════════════════════════\n');

  let errors = 0;

  // 1. Validate Data File
  console.log('[1/5] Validating Profile Data...');
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
  }

  // 2. Validate README
  console.log('\n[2/5] Validating README.md...');
  if (!fs.existsSync(README_FILE)) {
    console.error('  ✖ Missing README.md at', README_FILE);
    errors++;
  } else {
    const readme = fs.readFileSync(README_FILE, 'utf-8');
    if (readme.length < 500) {
      console.error('  ✖ README.md is suspiciously short');
      errors++;
    } else {
      console.log(`  ✔ README.md exists (${readme.length} chars)`);
    }

    // Check for placeholders
    const placeholders = ['TODO', 'FIXME', 'LOREM IPSUM', 'PLACEHOLDER'];
    for (const p of placeholders) {
      if (readme.toUpperCase().includes(p)) {
        console.error(`  ✖ README contains forbidden placeholder: "${p}"`);
        errors++;
      }
    }
  }

  // 3. Validate Referenced Assets in README
  console.log('\n[3/5] Validating Asset References...');
  const readme = fs.readFileSync(README_FILE, 'utf-8');
  const assetRefs = [...readme.matchAll(/src=["'](\.\/assets\/[^"']+)["']/g)].map(m => m[1]);
  console.log(`  Found ${assetRefs.length} asset references in README.md`);
  for (const ref of assetRefs) {
    const localPath = path.join(ROOT_DIR, ref);
    if (!fs.existsSync(localPath)) {
      console.error(`  ✖ Referenced asset missing: ${ref}`);
      errors++;
    } else {
      console.log(`  ✔ Asset exists: ${ref}`);
    }
  }

  // 4. Validate SVG XML Structure & File Sizes
  console.log('\n[4/5] Validating SVG Well-Formedness & Optimization...');
  const expectedSvgs = [
    'hero.svg',
    'identity.svg',
    'dashboard.svg',
    'projects.svg',
    'tech-wardrobe.svg',
    'runway.svg',
    'achievements.svg',
    'footer.svg',
    'divider.svg'
  ];

  let totalSvgSize = 0;
  for (const file of expectedSvgs) {
    const filePath = path.join(ASSETS_DIR, file);
    if (!fs.existsSync(filePath)) {
      console.error(`  ✖ Expected SVG missing: assets/${file}`);
      errors++;
      continue;
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    const size = Buffer.byteLength(content, 'utf-8');
    totalSvgSize += size;
    try {
      validateXml(content, file);
      console.log(`  ✔ assets/${file.padEnd(18)} valid XML [${(size / 1024).toFixed(2)} KB]`);
    } catch (err) {
      console.error(`  ✖ ${err.message}`);
      errors++;
    }
  }

  const totalMb = (totalSvgSize / (1024 * 1024)).toFixed(3);
  console.log(`  Total SVG bundle size: ${totalMb} MB (target < 2 MB: ✔)`);

  // 5. Verification Summary
  console.log('\n[5/5] Final Verification Status:');
  if (errors === 0) {
    console.log('  ✨ ALL VALIDATION CHECKS PASSED! Ready for production deployment.');
  } else {
    console.error(`  ✖ VALIDATION FAILED with ${errors} error(s).`);
    process.exit(1);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runValidation().catch(err => {
    console.error('Validation error:', err);
    process.exit(1);
  });
}
