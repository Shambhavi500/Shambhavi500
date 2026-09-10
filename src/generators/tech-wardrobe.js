import { getSharedDefs, renderSparkle, escapeXml, theme } from './theme.js';

export function generateTechWardrobeSvg(data) {
  const width = 940;
  const height = 400;

  const verified = data.verifiedSkills || {};

  const categories = [
    {
      title: '01 / CORE LANGUAGES',
      subtitle: 'Verified & Production',
      items: (verified.languages || ['Python', 'TypeScript', 'JavaScript', 'C / C++', 'Java', 'Kotlin']).slice(0, 5)
    },
    {
      title: '02 / AI & INTELLIGENCE',
      subtitle: 'Autonomous Workflows & ML',
      items: [
        'Reinforcement Learning',
        'Machine Learning Models',
        'Multi-Agent Workflows',
        'Spectral Remote Sensing',
        'Gymnasium Simulation'
      ]
    },
    {
      title: '03 / EMBEDDED & HARDWARE',
      subtitle: 'PICT ENTC Foundation',
      items: [
        'Arduino & Embedded C',
        'Sensors & Interfacing',
        'Circuit Design',
        'Proteus & Tinkercad',
        'Hardware-Software I/O'
      ]
    },
    {
      title: '04 / DEV TOOLS & SDLC',
      subtitle: 'Engineering Infrastructure',
      items: [
        'Docker Containerization',
        'Git & GitHub Pipelines',
        'SDLC & Agile Workflows',
        'API Design & Integration',
        'DaVinci Resolve API'
      ]
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
                fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
          <circle cx="12" cy="13" r="2.5" fill="${theme.colors.accentHot}" />
          <text x="22" y="16.5" class="code-mono" font-size="8.8" font-weight="700" fill="${theme.colors.textPrimary}">
            ${escapeXml(item)}
          </text>
        </g>
      `;
    }).join('');

    return `
      <!-- Column ${idx + 1}: ${escapeXml(cat.title)} -->
      <g transform="translate(${x}, ${startY})">
        <rect x="0" y="0" width="${colWidth}" height="${colHeight}" rx="${theme.radius.card}"
              fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="0.8" />

        <!-- Column Top Trim -->
        <rect x="0" y="0" width="${colWidth}" height="3" rx="1.5" fill="url(#ward_barbieGrad)" />

        <g transform="translate(14, 28)">
          <text x="0" y="0" class="code-mono" font-size="9" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.1em">
            ${escapeXml(cat.title)}
          </text>
          <text x="0" y="16" class="editorial-sans" font-size="11" font-weight="600" fill="${theme.colors.textSecondary}">
            ${escapeXml(cat.subtitle)}
          </text>
          <line x1="0" y1="28" x2="${colWidth - 28}" y2="28" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />
        </g>

        ${itemsSvg}
      </g>
    `;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('ward_')}
    
    <!-- Light Studio Canvas Base -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="${theme.colors.background}" />
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="url(#ward_radialAura)" />

    <!-- Outer Structural Frame with Soft Shadow -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="${theme.radius.card}"
          fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="1" filter="url(#ward_cardShadow)" />

    <!-- Editorial Header Line -->
    <g transform="translate(42, 44)">
      <text x="0" y="0" class="code-mono" font-size="10.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.14em">
        THE LAB // AI/ML &amp; ENGINEERING STACK
      </text>
      <text x="0" y="18" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.08em">
        CURATED LANGUAGES, ENTC EMBEDDED SYSTEMS &amp; AUTONOMOUS AI STACK
      </text>
    </g>

    <g transform="translate(${width - 42}, 44)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.1em">
        PICT ENTC &amp; PRODUCTION VERIFIED
      </text>
      <text x="0" y="18" text-anchor="end" class="code-mono" font-size="8.5" fill="${theme.colors.success}" font-weight="700">
        ● ALL SKILLS VALIDATED
      </text>
    </g>

    <!-- Header Divider Line -->
    <line x1="42" y1="68" x2="${width - 42}" y2="68" stroke="${theme.colors.borderSubtle}" stroke-width="1" />

    <!-- 4 Wardrobe Columns -->
    ${columnsSvg}

    <!-- Restrained Luxury Glint Sparkles -->
    ${renderSparkle(width - 36, 42, 10, theme.colors.accentHot)}
    ${renderSparkle(width / 2, 44, 10, theme.colors.accentSoft)}
  </svg>`;
}
