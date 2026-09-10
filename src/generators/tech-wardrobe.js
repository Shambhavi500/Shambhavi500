import { getSharedDefs, renderSparkle, escapeXml, COLORS } from './theme.js';

export function generateTechWardrobeSvg(data) {
  const width = 940;
  const height = 400;

  const categories = [
    {
      title: '01 / CORE LANGUAGES',
      subtitle: 'Polyglot Foundations',
      items: ['Python', 'TypeScript', 'JavaScript', 'Kotlin', 'C / C++', 'SQL']
    },
    {
      title: '02 / AGENTIC & AI SYSTEMS',
      subtitle: 'Autonomous Workflows & ML',
      items: ['Multi-Agent Systems', 'Reinforcement Learning', 'Computer Vision', 'LLM Orchestration', 'NDVI Spectral AI']
    },
    {
      title: '03 / FRONTEND & DESIGN',
      subtitle: 'Modern Interfaces',
      items: ['React.js', 'Next.js', 'Vite', 'Tailwind CSS', 'Responsive UI', 'Haute SVG Systems']
    },
    {
      title: '04 / BACKEND & PLATFORMS',
      subtitle: 'Distributed Architecture',
      items: ['FastAPI', 'Node.js', 'Express', 'Blockchain (Web3)', 'REST APIs', 'PostgreSQL']
    }
  ];

  const colWidth = 200;
  const colGap = 16;
  const startX = 42;
  const startY = 82;
  const colHeight = 280;

  const columnsSvg = categories.map((cat, idx) => {
    const x = startX + idx * (colWidth + colGap);

    const itemsSvg = cat.items.map((item, itemIdx) => {
      const itemY = 86 + itemIdx * 34;
      return `
        <!-- Pill ${escapeXml(item)} -->
        <g transform="translate(14, ${itemY})">
          <rect x="0" y="0" width="172" height="26" rx="13"
                fill="rgba(255, 45, 135, 0.08)" stroke="rgba(255, 45, 135, 0.28)" stroke-width="0.8" />
          <circle cx="12" cy="13" r="2.5" fill="#FF2D87" />
          <text x="22" y="16.5" class="code-mono" font-size="9" font-weight="600" fill="#FDFBFD">
            ${escapeXml(item)}
          </text>
        </g>
      `;
    }).join('');

    return `
      <!-- Column ${idx + 1}: ${escapeXml(cat.title)} -->
      <g transform="translate(${x}, ${startY})">
        <rect x="0" y="0" width="${colWidth}" height="${colHeight}" rx="12"
              fill="#130F1E" stroke="rgba(224, 33, 138, 0.28)" stroke-width="0.9" />

        <!-- Column Top Trim -->
        <rect x="0" y="0" width="${colWidth}" height="3" rx="1.5" fill="url(#ward_barbieGrad)" />

        <g transform="translate(14, 28)">
          <text x="0" y="0" class="code-mono" font-size="9" font-weight="600" fill="#FF85C0" letter-spacing="0.1em">
            ${escapeXml(cat.title)}
          </text>
          <text x="0" y="16" class="editorial-sans" font-size="11" font-weight="500" fill="#A89EAE">
            ${escapeXml(cat.subtitle)}
          </text>
          <line x1="0" y1="28" x2="${colWidth - 28}" y2="28" stroke="rgba(255, 255, 255, 0.08)" stroke-width="0.8" />
        </g>

        ${itemsSvg}
      </g>
    `;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('ward_')}
    
    <!-- Background Canvas -->
    <rect width="${width}" height="${height}" rx="16" fill="${COLORS.surfaceDark}" />
    <rect width="${width}" height="${height}" rx="16" fill="url(#ward_radialAura)" />

    <!-- Outer Structural Frame -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="14"
          fill="url(#ward_cardGlass)" stroke="url(#ward_borderGrad)" stroke-width="1" />

    <!-- Editorial Header Line -->
    <g transform="translate(42, 44)">
      <text x="0" y="0" class="editorial-title" font-size="16" fill="url(#ward_chromeGrad)">
        TECH WARDROBE // THE ENGINEERING ENSEMBLE
      </text>
      <text x="0" y="18" class="code-mono" font-size="9" fill="#FF85C0" letter-spacing="0.12em">
        CURATED LANGUAGES, ARCHITECTURAL FRAMEWORKS &amp; AUTONOMOUS TOOLING
      </text>
    </g>

    <g transform="translate(${width - 42}, 44)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="#9D93A8" letter-spacing="0.1em">
        HAUTE COUTURE STACK
      </text>
      <text x="0" y="18" text-anchor="end" class="code-mono" font-size="8.5" fill="#00E676">
        ● ALL PRODUCTION TESTED
      </text>
    </g>

    <!-- 4 Wardrobe Columns -->
    ${columnsSvg}

    <!-- Sparkles -->
    ${renderSparkle(width - 36, 36, 10, '#FFFFFF')}
    ${renderSparkle(width / 2, 40, 10, '#FF85C0')}
    ${renderSparkle(45, height - 30, 10, '#FFA8D3')}
  </svg>`;
}
