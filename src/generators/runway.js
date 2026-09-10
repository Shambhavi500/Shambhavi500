import { getSharedDefs, renderSparkle, escapeXml, theme } from './theme.js';

export function generateRunwaySvg(data) {
  const width = 940;
  const height = 260;

  const contributions = data.contributions || {};
  const weeks = contributions.weeks || [];
  const totalContributions = (data.stats && data.stats.totalContributions) || contributions.totalContributions || 115;
  const activeDays = (data.stats && data.stats.activeDaysCount) || contributions.activeDaysCount || 35;

  // 52 columns x 7 days real contribution grid
  const cols = Math.min(52, weeks.length > 0 ? weeks.length : 52);
  const rows = 7;
  const startX = 48;
  const startY = 82;
  const cellWidth = 12.5;
  const cellHeight = 10.5;
  const gapX = 3.6;
  const gapY = 2.8;

  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  let gridCells = '';
  for (let c = 0; c < cols; c++) {
    const weekDays = weeks[c] || [];
    for (let r = 0; r < rows; r++) {
      const x = startX + c * (cellWidth + gapX);
      const y = startY + r * (cellHeight + gapY);

      const day = weekDays[r] || { level: 0 };
      const level = day.level || 0;

      let fill = '#F1F5F9';
      let stroke = '#E2E8F0';

      if (level >= 4) {
        fill = theme.colors.accentHot; // Hot Barbie pink
        stroke = '#FFFFFF';
      } else if (level === 3) {
        fill = theme.colors.accent; // Signature Barbie pink
        stroke = theme.colors.accentHot;
      } else if (level === 2) {
        fill = '#F472B6'; // Rose pink
        stroke = theme.colors.accent;
      } else if (level === 1) {
        fill = theme.colors.accentBlush; // Soft blush
        stroke = theme.colors.borderPink;
      }

      gridCells += `
        <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${cellWidth}" height="${cellHeight}" rx="2"
              fill="${fill}" stroke="${stroke}" stroke-width="0.6" />
      `;
    }
  }

  // Month labels across the runway
  const monthLabels = months.map((m, idx) => {
    const x = startX + (idx * (cols / 12) * (cellWidth + gapX)) + 4;
    return `
      <text x="${x.toFixed(1)}" y="${startY - 9}" class="code-mono" font-size="8.5" fill="${theme.colors.textMuted}" letter-spacing="0.08em">
        ${m}
      </text>
    `;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('run_')}
    
    <!-- Light Studio Canvas Base -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="${theme.colors.background}" />
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="url(#run_radialAura)" />

    <!-- Outer Structural Frame with Soft Shadow -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="${theme.radius.card}"
          fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="1" filter="url(#run_cardShadow)" />

    <!-- Section Header Tag -->
    <g transform="translate(42, 42)">
      <text x="0" y="0" class="code-mono" font-size="10.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.14em">
        THE BUILD LOG // ACTIVITY RUNWAY &amp; CODE CADENCE
      </text>
      <text x="0" y="18" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.08em">
        GENUINE 52-WEEK COMMIT CADENCE · ${totalContributions} CONTRIBUTIONS IN THE LAST YEAR
      </text>
    </g>

    <g transform="translate(${width - 42}, 42)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.1em">
        TEMPO: CONTINUOUS DEPLOYMENT
      </text>
      <text x="0" y="18" text-anchor="end" class="code-mono" font-size="8.5" fill="${theme.colors.success}" font-weight="700">
        ● ${activeDays} ACTIVE DAYS
      </text>
    </g>

    <!-- Month Labels -->
    ${monthLabels}

    <!-- The 52-week Runway Grid -->
    ${gridCells}

    <!-- Runway Bottom Guideline & Metrics -->
    <g transform="translate(48, 198)">
      <!-- Runway Accent Line -->
      <line x1="0" y1="0" x2="844" y2="0" stroke="url(#run_barbieGrad)" stroke-width="1.5" opacity="0.65" />
      
      <!-- Activity Legend -->
      <g transform="translate(0, 16)">
        <text x="0" y="10" class="code-mono" font-size="9" font-weight="600" fill="${theme.colors.textMuted}">
          LESS
        </text>
        <rect x="36" y="1" width="10" height="10" rx="2" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="0.6" />
        <rect x="52" y="1" width="10" height="10" rx="2" fill="${theme.colors.accentBlush}" stroke="${theme.colors.borderPink}" stroke-width="0.6" />
        <rect x="68" y="1" width="10" height="10" rx="2" fill="#F472B6" />
        <rect x="84" y="1" width="10" height="10" rx="2" fill="${theme.colors.accent}" />
        <rect x="100" y="1" width="10" height="10" rx="2" fill="${theme.colors.accentHot}" stroke="#FFFFFF" stroke-width="0.5" />
        <text x="120" y="10" class="code-mono" font-size="9" font-weight="700" fill="${theme.colors.accent}">
          MORE (HAUTE GLOW)
        </text>

        <!-- Metric Callout on right -->
        <text x="844" y="10" text-anchor="end" class="code-mono" font-size="9.5" fill="${theme.colors.textSecondary}">
          CURRENT FOCUS: <tspan fill="${theme.colors.accentHot}" font-weight="700">AUTONOMOUS MULTI-AGENT &amp; AGRITECH AI</tspan>
        </text>
      </g>
    </g>

    <!-- Restrained Luxury Glint Sparkles -->
    ${renderSparkle(width - 36, 42, 10, theme.colors.accentHot)}
    ${renderSparkle(width / 2, 44, 10, theme.colors.accentSoft)}
  </svg>`;
}
