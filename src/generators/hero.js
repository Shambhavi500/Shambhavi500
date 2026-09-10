import { getSharedDefs, renderSparkle, escapeXml, COLORS } from './theme.js';

export function generateHeroSvg(data) {
  const width = 940;
  const height = 330;
  const username = data.username || 'Shambhavi500';
  const name = (data.name || 'SHAMBHAVI PATIL').toUpperCase();
  const discipline = 'ELECTRONICS & TELECOMMUNICATIONS · AUTONOMOUS AGENTS · AGRI-AI';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('hero_')}
    
    <!-- Deep Haute Couture Studio Background -->
    <rect width="${width}" height="${height}" rx="16" fill="${COLORS.surfaceDark}" />
    <rect width="${width}" height="${height}" rx="16" fill="url(#hero_radialAura)" />
    
    <!-- Architectural Dreamhouse Subtle Grid Lines -->
    <g stroke="rgba(224, 33, 138, 0.07)" stroke-width="0.8">
      <line x1="60" y1="0" x2="60" y2="${height}" />
      <line x1="880" y1="0" x2="880" y2="${height}" />
      <line x1="0" y1="50" x2="${width}" y2="50" />
      <line x1="0" y1="280" x2="${width}" y2="280" />
      <circle cx="${width / 2}" cy="${height / 2}" r="180" stroke="rgba(255, 45, 135, 0.05)" fill="none" />
      <circle cx="${width / 2}" cy="${height / 2}" r="260" stroke="rgba(255, 45, 135, 0.03)" fill="none" />
    </g>

    <!-- Outer Precision Frame with Chrome / Rose Gradient -->
    <rect x="18" y="18" width="${width - 36}" height="${height - 36}" rx="12"
          fill="${COLORS.surfaceLightGlass}" stroke="url(#hero_borderGrad)" stroke-width="1.2" />

    <!-- Corner Couture Framing Accents -->
    <g stroke="url(#hero_chromeGrad)" stroke-width="2" fill="none">
      <path d="M 28 42 L 28 28 L 42 28" />
      <path d="M ${width - 42} 28 L ${width - 28} 28 L ${width - 28} 42" />
      <path d="M 28 ${height - 42} L 28 ${height - 28} L 42 ${height - 28}" />
      <path d="M ${width - 42} ${height - 28} L ${width - 28} ${height - 28} L ${width - 28} ${height - 42}" />
    </g>

    <!-- Header Atelier Monogram & Badge -->
    <g transform="translate(45, 44)">
      <!-- Mini Badge -->
      <rect x="0" y="0" width="220" height="22" rx="11" fill="rgba(224, 33, 138, 0.15)" stroke="rgba(255, 45, 135, 0.4)" stroke-width="0.8"/>
      <circle cx="12" cy="11" r="3.5" fill="#FF2D87">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="24" y="14.5" class="code-mono" font-size="9.5" font-weight="600" fill="#FF85C0" letter-spacing="0.12em">
        ATELIER NO. 500 · 2026 COUTURE
      </text>
    </g>

    <g transform="translate(${width - 215}, 44)">
      <text x="170" y="14.5" text-anchor="end" class="code-mono" font-size="9.5" fill="#A89EAE" letter-spacing="0.14em">
        @${escapeXml(username)} // DEPLOYED
      </text>
    </g>

    <!-- Main Editorial Display Name -->
    <g transform="translate(${width / 2}, 142)">
      <!-- Chrome Mirror Shadow Glow -->
      <text x="0" y="0" text-anchor="middle" class="editorial-title" font-size="44" fill="#FF2D87" opacity="0.3" filter="url(#hero_glowFilter)">
        ${escapeXml(name)}
      </text>
      <!-- Main Text in Chrome & Platinum Gradient -->
      <text x="0" y="0" text-anchor="middle" class="editorial-title" font-size="44" fill="url(#hero_chromeGrad)">
        ${escapeXml(name)}
      </text>
    </g>

    <!-- Subtitle Editorial Script Tagline -->
    <g transform="translate(${width / 2}, 184)">
      <text x="0" y="0" text-anchor="middle" class="editorial-script" font-size="16" fill="#F3E8FF" letter-spacing="0.04em">
        The Dreamhouse of Autonomous Intelligence &amp; Precision Engineering
      </text>
    </g>

    <!-- Technical Discipline Spec Ribbon -->
    <g transform="translate(${width / 2}, 226)">
      <rect x="-310" y="-14" width="620" height="28" rx="14"
            fill="rgba(21, 17, 34, 0.85)" stroke="rgba(224, 33, 138, 0.4)" stroke-width="0.8" />
      <text x="0" y="4.5" text-anchor="middle" class="code-mono" font-size="10.5" font-weight="600" fill="#FF85C0" letter-spacing="0.15em">
        ${escapeXml(discipline)}
      </text>
    </g>

    <!-- Dynamic Metrics Preview Bar -->
    <g transform="translate(60, 266)">
      <text x="0" y="10" class="code-mono" font-size="9.5" fill="#8E8597" letter-spacing="0.1em">
        SYSTEM: <tspan fill="#FDFBFD" font-weight="600">ONLINE</tspan>
      </text>
      <text x="210" y="10" class="code-mono" font-size="9.5" fill="#8E8597" letter-spacing="0.1em">
        CORE REPOSITORIES: <tspan fill="#FF2D87" font-weight="600">14 LIVE</tspan>
      </text>
      <text x="450" y="10" class="code-mono" font-size="9.5" fill="#8E8597" letter-spacing="0.1em">
        STACK: <tspan fill="#FDFBFD" font-weight="600">PYTHON · TYPESCRIPT · KOTLIN</tspan>
      </text>
      <text x="${width - 120}" y="10" text-anchor="end" class="code-mono" font-size="9.5" fill="#FF85C0" letter-spacing="0.12em">
        BARBIE COUTURE EDITION
      </text>
    </g>

    <!-- Haute Sparkles -->
    ${renderSparkle(115, 110, 16, '#FFFFFF')}
    ${renderSparkle(width - 130, 125, 18, '#FF85C0')}
    ${renderSparkle(width / 2 - 280, 180, 11, '#FF2D87')}
    ${renderSparkle(width / 2 + 270, 160, 13, '#FFFFFF')}
    ${renderSparkle(210, 240, 9, '#FFA8D3')}
    ${renderSparkle(width - 240, 245, 10, '#FF85C0')}
  </svg>`;
}
