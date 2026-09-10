import { getSharedDefs, renderSparkle, escapeXml, COLORS } from './theme.js';

export function generateFooterSvg(data) {
  const width = 940;
  const height = 180;
  const username = data.username || 'Shambhavi500';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('foot_')}
    
    <!-- Dark Studio Base -->
    <rect width="${width}" height="${height}" rx="16" fill="${COLORS.surfaceDark}" />
    <rect width="${width}" height="${height}" rx="16" fill="url(#foot_radialAura)" />

    <!-- Outer Frame with Chrome Bevel -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="14"
          fill="url(#foot_cardGlass)" stroke="url(#foot_borderGrad)" stroke-width="1" />

    <!-- Centerpiece Closing Editorial Statement -->
    <g transform="translate(${width / 2}, 64)">
      <text x="0" y="0" text-anchor="middle" class="editorial-script" font-size="22" fill="#FFFFFF">
        &quot;Welcome to Shambhavi&apos;s Dreamhouse.&quot;
      </text>
      <text x="0" y="24" text-anchor="middle" class="code-mono" font-size="10" font-weight="600" fill="#FF85C0" letter-spacing="0.16em">
        WHERE AUTONOMOUS INTELLIGENCE MEETS HAUTE COUTURE ENGINEERING
      </text>
    </g>

    <!-- Bottom Colophon Row -->
    <g transform="translate(42, 136)">
      <text x="0" y="0" class="code-mono" font-size="9" fill="#9D93A8" letter-spacing="0.12em">
        ATELIER @${escapeXml(username)} · ELECTRONICS &amp; TELECOMMUNICATION
      </text>
    </g>

    <g transform="translate(${width - 42}, 136)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="#E2D9E8" letter-spacing="0.1em">
        DESIGNED WITH INTENTION · BUILT WITH CODE
      </text>
    </g>

    <!-- Sparkles -->
    ${renderSparkle(width / 2 - 240, 60, 12, '#FFFFFF')}
    ${renderSparkle(width / 2 + 240, 60, 14, '#FF85C0')}
    ${renderSparkle(width - 60, 48, 10, '#FFA8D3')}
  </svg>`;
}
