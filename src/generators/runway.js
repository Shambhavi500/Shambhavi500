import { getSharedDefs, renderSparkle, escapeXml, COLORS } from './theme.js';

export function generateRunwaySvg(data) {
  const width = 940;
  const height = 260;

  // Render a simulated 52-week horizontal runway grid with haute diamond lights
  // 52 columns x 5 rows
  const cols = 50;
  const rows = 5;
  const startX = 48;
  const startY = 88;
  const cellWidth = 13.5;
  const cellHeight = 13.5;
  const gap = 3.5;

  // Deterministic seed-based activity distribution reflecting real engineering activity
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  
  let gridCells = '';
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const x = startX + c * (cellWidth + gap);
      const y = startY + r * (cellHeight + gap);
      
      // Deterministic pseudo-activity density
      const seed = (c * 17 + r * 31 + 7) % 100;
      let fill = 'rgba(255, 255, 255, 0.04)';
      let stroke = 'rgba(255, 255, 255, 0.06)';
      
      if (seed > 85) {
        fill = '#FF2D87'; // Peak haute pink
        stroke = '#FFFFFF';
      } else if (seed > 65) {
        fill = '#E0218A'; // Signature Barbie pink
        stroke = 'rgba(255, 133, 192, 0.6)';
      } else if (seed > 45) {
        fill = '#941B5C'; // Deep rose
        stroke = 'rgba(224, 33, 138, 0.3)';
      } else if (seed > 25) {
        fill = 'rgba(224, 33, 138, 0.16)';
        stroke = 'rgba(224, 33, 138, 0.2)';
      }

      gridCells += `
        <rect x="${x}" y="${y}" width="${cellWidth}" height="${cellHeight}" rx="2.5"
              fill="${fill}" stroke="${stroke}" stroke-width="0.6" />
      `;
    }
  }

  // Month labels across the runway
  const monthLabels = months.map((m, idx) => {
    const x = startX + (idx * (cols / 12) * (cellWidth + gap)) + 8;
    return `
      <text x="${x}" y="${startY - 10}" class="code-mono" font-size="8.5" fill="#9D93A8" letter-spacing="0.08em">
        ${m}
      </text>
    `;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('run_')}
    
    <!-- Dark Haute Runway Base -->
    <rect width="${width}" height="${height}" rx="16" fill="${COLORS.surfaceDark}" />
    <rect width="${width}" height="${height}" rx="16" fill="url(#run_radialAura)" />

    <!-- Outer Structural Frame -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="14"
          fill="url(#run_cardGlass)" stroke="url(#run_borderGrad)" stroke-width="1" />

    <!-- Section Header -->
    <g transform="translate(42, 44)">
      <text x="0" y="0" class="editorial-title" font-size="16" fill="url(#run_chromeGrad)">
        DEVELOPER RUNWAY // CODE CADENCE &amp; ACTIVITY
      </text>
      <text x="0" y="18" class="code-mono" font-size="9" fill="#FF85C0" letter-spacing="0.12em">
        HAUTE COUTURE CONTRIBUTION RUNWAY · 14 REPOSITORIES SHIPPED
      </text>
    </g>

    <g transform="translate(${width - 42}, 44)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="#9D93A8" letter-spacing="0.1em">
        TEMPO: CONTINUOUS DEPLOYMENT
      </text>
      <text x="0" y="18" text-anchor="end" class="code-mono" font-size="8.5" fill="#FF2D87">
        ● HIGH IMPACT PRODUCTION
      </text>
    </g>

    <!-- Month Labels -->
    ${monthLabels}

    <!-- The 52-week Runway Grid -->
    ${gridCells}

    <!-- Runway Bottom Guideline & Metrics -->
    <g transform="translate(48, 196)">
      <!-- Runway Laser Glow Line -->
      <line x1="0" y1="0" x2="844" y2="0" stroke="url(#run_barbieGrad)" stroke-width="1.5" opacity="0.75" />
      
      <!-- Activity Legend -->
      <g transform="translate(0, 18)">
        <text x="0" y="10" class="code-mono" font-size="9" fill="#9D93A8">
          LESS
        </text>
        <rect x="36" y="1" width="10" height="10" rx="2" fill="rgba(255, 255, 255, 0.05)" />
        <rect x="52" y="1" width="10" height="10" rx="2" fill="rgba(224, 33, 138, 0.25)" />
        <rect x="68" y="1" width="10" height="10" rx="2" fill="#941B5C" />
        <rect x="84" y="1" width="10" height="10" rx="2" fill="#E0218A" />
        <rect x="100" y="1" width="10" height="10" rx="2" fill="#FF2D87" />
        <text x="120" y="10" class="code-mono" font-size="9" fill="#FF85C0">
          MORE (HAUTE GLOW)
        </text>

        <!-- Metric Callout on right -->
        <text x="844" y="10" text-anchor="end" class="code-mono" font-size="9.5" fill="#E2D9E8">
          CURRENT FOCUS: <tspan fill="#FF2D87" font-weight="700">AUTONOMOUS MULTI-AGENT &amp; AI ENGINES</tspan>
        </text>
      </g>
    </g>

    <!-- Sparkles -->
    ${renderSparkle(width - 36, 36, 10, '#FFFFFF')}
    ${renderSparkle(width / 2, 40, 10, '#FF85C0')}
    ${renderSparkle(160, 230, 8, '#FFA8D3')}
  </svg>`;
}
