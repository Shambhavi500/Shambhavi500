import { getSharedDefs, renderSparkle, escapeXml, theme } from './theme.js';

const LANG_COLORS = {
  'Python': '#3572A5',
  'TypeScript': '#3178C6',
  'JavaScript': '#F1E05A',
  'Kotlin': '#A97BFF',
  'Java': '#B07219',
  'C': '#555555',
  'C++': '#F34B7D',
  'HTML': '#E34C26',
  'CSS': '#563D7C'
};

export function generateDashboardSvg(data) {
  const width = 940;
  const height = 310;
  const stats = data.stats || {};
  const reposCount = stats.publicRepos || (data.projects ? data.projects.length : 14);
  const starsCount = stats.totalStars || 0;
  const forksCount = stats.totalForks || 0;
  const followers = stats.followers || 4;
  const following = stats.following || 4;

  const distribution = data.languageDistribution || [
    { language: 'Python', count: 4, percentage: 33.3 },
    { language: 'TypeScript', count: 4, percentage: 33.3 },
    { language: 'JavaScript', count: 3, percentage: 25.0 },
    { language: 'Kotlin', count: 1, percentage: 8.4 }
  ];

  // Calculate dynamic bar segments across 820px
  const barWidth = 820;
  let currentX = 0;
  const barSegmentsSvg = distribution.map((item, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === distribution.length - 1;
    let segWidth = Math.round((item.percentage / 100) * barWidth);
    if (isLast) {
      segWidth = Math.max(4, barWidth - currentX);
    }
    const color = LANG_COLORS[item.language] || theme.colors.accentHot;
    const rx = (isFirst || isLast) ? 4 : 0;
    const rect = `<rect x="${currentX}" y="0" width="${segWidth}" height="10" rx="${rx}" fill="${color}" />`;
    currentX += segWidth;
    return rect;
  }).join('\n        ');

  // Dynamic Legend Items
  const legendSpacing = Math.floor(barWidth / Math.min(4, distribution.length));
  const legendSvg = distribution.slice(0, 4).map((item, idx) => {
    const x = idx * legendSpacing;
    const color = LANG_COLORS[item.language] || theme.colors.accentHot;
    return `<g transform="translate(${x}, 0)">
        <circle cx="5" cy="5" r="4.5" fill="${color}" />
        <text x="16" y="8.5" class="code-mono" font-size="9" fill="${theme.colors.textPrimary}" font-weight="700">
          ${escapeXml(item.language)}
        </text>
        <text x="16" y="22" class="code-mono" font-size="8.5" fill="${theme.colors.textMuted}">
          ${item.percentage}% · ${item.count} Repos
        </text>
      </g>`;
  }).join('\n        ');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('dash_')}
    
    <!-- Light Studio Canvas Base -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="${theme.colors.background}" />
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="url(#dash_radialAura)" />

    <!-- Outer Structural Frame with Soft Shadow -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="${theme.radius.card}"
          fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="1" filter="url(#dash_cardShadow)" />

    <!-- Header Section -->
    <g transform="translate(42, 42)">
      <text x="0" y="0" class="code-mono" font-size="10.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.14em">
        THE TELEMETRY // REPOSITORY METRICS &amp; STACK DISTRIBUTION
      </text>
    </g>

    <g transform="translate(${width - 42}, 42)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.1em">
        DATA SOURCE: API.GITHUB.COM · <tspan fill="${theme.colors.success}" font-weight="700">● LIVE</tspan>
      </text>
    </g>

    <!-- Header Divider Line -->
    <line x1="42" y1="54" x2="${width - 42}" y2="54" stroke="${theme.colors.borderSubtle}" stroke-width="1" />

    <!-- Top 4 Metric Tiles Grid -->
    <g transform="translate(42, 74)">
      <!-- Tile 1: Public Repos -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="200" height="92" rx="${theme.radius.md}" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
        <text x="14" y="22" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.1em">
          01 // REPOSITORIES
        </text>
        <!-- Important Statistics in Barbie Pink -->
        <text x="14" y="58" class="display-title" font-size="32" font-weight="800" fill="${theme.colors.accentHot}">
          ${reposCount}
        </text>
        <text x="14" y="78" class="code-mono" font-size="8.5" font-weight="600" fill="${theme.colors.textSecondary}">
          PUBLIC REPOSITORIES
        </text>
      </g>

      <!-- Tile 2: Total Stargazers -->
      <g transform="translate(220, 0)">
        <rect x="0" y="0" width="200" height="92" rx="${theme.radius.md}" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
        <text x="14" y="22" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.1em">
          02 // STARGAZERS
        </text>
        <text x="14" y="58" class="display-title" font-size="32" font-weight="800" fill="${theme.colors.accentHot}">
          ${starsCount}
        </text>
        <text x="14" y="78" class="code-mono" font-size="8.5" font-weight="600" fill="${theme.colors.textSecondary}">
          COMMUNITY STARS
        </text>
      </g>

      <!-- Tile 3: Total Forks -->
      <g transform="translate(440, 0)">
        <rect x="0" y="0" width="200" height="92" rx="${theme.radius.md}" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
        <text x="14" y="22" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.1em">
          03 // FORKS &amp; LABS
        </text>
        <text x="14" y="58" class="display-title" font-size="32" font-weight="800" fill="${theme.colors.accentHot}">
          ${forksCount}
        </text>
        <text x="14" y="78" class="code-mono" font-size="8.5" font-weight="600" fill="${theme.colors.textSecondary}">
          BRANCHED FORKS
        </text>
      </g>

      <!-- Tile 4: Network -->
      <g transform="translate(660, 0)">
        <rect x="0" y="0" width="196" height="92" rx="${theme.radius.md}" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
        <text x="14" y="22" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.1em">
          04 // NETWORK
        </text>
        <text x="14" y="58" class="display-title" font-size="32" font-weight="800" fill="${theme.colors.accentHot}">
          ${followers}
        </text>
        <text x="14" y="78" class="code-mono" font-size="8.5" font-weight="600" fill="${theme.colors.textSecondary}">
          ${followers} FOLLOWERS · ${following} FOLLOWING
        </text>
      </g>
    </g>

    <!-- Lower Panel: Dynamic Language Spectrum Progress Bar & Legend -->
    <g transform="translate(42, 186)">
      <rect x="0" y="0" width="856" height="94" rx="${theme.radius.md}" fill="#FFFFFF" stroke="${theme.colors.border}" stroke-width="0.8" />
      
      <!-- Panel Title -->
      <text x="18" y="24" class="code-mono" font-size="9" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.12em">
        LANGUAGE SPECTRUM BREAKDOWN
      </text>
      <text x="838" y="24" text-anchor="end" class="code-mono" font-size="8.5" fill="${theme.colors.textMuted}">
        DYNAMIC REPOSITORY AUDIT
      </text>

      <!-- Dynamic Progress Bar -->
      <g transform="translate(18, 36)">
        ${barSegmentsSvg}
      </g>

      <!-- Dynamic Legend Row -->
      <g transform="translate(18, 58)">
        ${legendSvg}
      </g>
    </g>

    <!-- Restrained Luxury Glint Sparkles -->
    ${renderSparkle(width - 50, 48, 12, theme.colors.accentHot)}
    ${renderSparkle(width / 2, 44, 9, theme.colors.accentSoft)}
  </svg>`;
}
