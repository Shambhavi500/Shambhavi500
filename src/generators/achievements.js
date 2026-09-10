import { getSharedDefs, renderSparkle, escapeXml, theme } from './theme.js';

export function generateAchievementsSvg(data) {
  const width = 940;
  const height = 370;
  const achievements = (data.achievements && data.achievements.length >= 4)
    ? data.achievements
    : [
        {
          id: '01',
          event: "TECHFIESTA '26",
          place: '1ST PLACE',
          domain: 'AGRICULTURE DOMAIN',
          project: 'KrishiSahAI',
          metric: '600+ teams',
          badge: 'WINNER',
          accent: theme.colors.accentHot
        },
        {
          id: '02',
          event: 'PUNE AGRI HACKATHON',
          place: 'NATIONAL RUNNER-UP',
          domain: 'PRECISION AGRITECH',
          project: 'Krishi Prabandh',
          metric: '₹15L grant',
          badge: 'RUNNER-UP',
          accent: theme.colors.accent
        },
        {
          id: '03',
          event: 'AUTONOMOUS AI',
          place: 'FLAGSHIP AGENT',
          domain: 'AGENTIC WORKFLOWS',
          project: 'Ovio (DaVinci)',
          metric: 'Agentic OS',
          badge: 'ARCHITECT',
          accent: theme.colors.accentSoft
        },
        {
          id: '04',
          event: 'QUANTITATIVE RL',
          place: 'SYSTEMS ENGINE',
          domain: 'ALGORITHMIC TRADING',
          project: 'AlphaTrader-RL',
          metric: '5+ Yrs NSE Data',
          badge: 'ALGO LAB',
          accent: theme.colors.textPrimary
        }
      ];

  const cardWidth = 203;
  const cardHeight = 270;
  const cardGap = 16;
  const startX = 40;
  const startY = 72;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('ach_')}
    
    <!-- Light Studio Canvas Base -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="${theme.colors.background}" />
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="url(#ach_radialAura)" />

    <!-- Outer Structural Frame with Soft Shadow -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="${theme.radius.card}"
          fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="1" filter="url(#ach_cardShadow)" />

    <!-- Section Header Tag -->
    <g transform="translate(40, 42)">
      <text x="0" y="0" class="code-mono" font-size="10.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.14em">
        THE WINS // HACKATHONS &amp; ENGINEERING HONORS
      </text>
    </g>

    <g transform="translate(${width - 40}, 42)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.1em">
        OFFICIALLY ACCREDITED · <tspan fill="${theme.colors.success}" font-weight="700">● VERIFIED MILESTONES</tspan>
      </text>
    </g>

    <!-- Header Divider Line -->
    <line x1="40" y1="54" x2="${width - 40}" y2="54" stroke="${theme.colors.borderSubtle}" stroke-width="1" />

    <!-- 4 Fashion-Tech Award Plaques -->
    ${achievements.slice(0, 4).map((ach, idx) => {
      const x = startX + idx * (cardWidth + cardGap);
      const y = startY;
      const isWinner = idx === 0;
      const isRunnerUp = idx === 1;
      const accentColor = isWinner ? theme.colors.accentHot : (isRunnerUp ? theme.colors.accent : theme.colors.textPrimary);
      const badgeFill = isWinner ? theme.colors.accentHot : theme.colors.accentBlush;
      const badgeText = isWinner ? '#FFFFFF' : theme.colors.accent;

      return `
        <!-- Plaque Card ${ach.id || (idx + 1)} -->
        <g transform="translate(${x}, ${y})">
          <!-- Card Base -->
          <rect x="0" y="0" width="${cardWidth}" height="${cardHeight}" rx="${theme.radius.card}"
                fill="${theme.colors.surface}" stroke="${isWinner ? theme.colors.accentHot : theme.colors.border}" stroke-width="${isWinner ? '1.5' : '1'}" />

          <!-- Top Accent Ribbon -->
          <rect x="0" y="0" width="${cardWidth}" height="4" rx="2" fill="${isWinner ? 'url(#ach_barbieGrad)' : theme.colors.border}" />

          <!-- Plaque Number '01' -->
          <text x="18" y="32" class="display-title" font-size="16" font-weight="800" fill="${accentColor}">
            ${escapeXml(ach.id || `0${idx + 1}`)}
          </text>

          <!-- Trophy / Medal Mini Icon -->
          <text x="${cardWidth - 18}" y="32" text-anchor="end" font-size="14">
            ${isWinner ? '🏆' : (isRunnerUp ? '🥈' : '✦')}
          </text>

          <!-- Hairline Divider -->
          <line x1="18" y1="44" x2="${cardWidth - 18}" y2="44" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />

          <!-- Event Name -->
          <text x="18" y="70" class="display-title" font-size="13" font-weight="800" fill="${theme.colors.textPrimary}" letter-spacing="0.02em">
            ${escapeXml(ach.event || ach.title)}
          </text>

          <!-- Place / Ranking -->
          <text x="18" y="92" class="code-mono" font-size="10.5" font-weight="800" fill="${accentColor}" letter-spacing="0.05em">
            ${escapeXml(ach.place || (isWinner ? '1ST PLACE' : 'RUNNER-UP'))}
          </text>

          <!-- Domain -->
          <text x="18" y="112" class="code-mono" font-size="8.5" font-weight="600" fill="${theme.colors.textMuted}" letter-spacing="0.06em">
            ${escapeXml(ach.domain || 'SYSTEMS')}
          </text>

          <!-- Subtle Center Decor Line -->
          <line x1="18" y1="130" x2="${cardWidth - 18}" y2="130" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />

          <!-- Associated Project -->
          <text x="18" y="156" class="code-mono" font-size="8.5" fill="${theme.colors.textMuted}" letter-spacing="0.06em">
            PROJECT
          </text>
          <text x="18" y="174" class="editorial-sans" font-size="13" font-weight="700" fill="${theme.colors.textPrimary}">
            ${escapeXml(ach.project || ach.associatedRepo || 'KrishiSahAI')}
          </text>

          <!-- Competition Scale / Metric -->
          <text x="18" y="200" class="code-mono" font-size="11" font-weight="700" fill="${theme.colors.textSecondary}">
            ${escapeXml(ach.metric || ach.scope || '600+ teams')}
          </text>

          <!-- Badge Pill -->
          <g transform="translate(18, 222)">
            <rect x="0" y="0" width="${cardWidth - 36}" height="26" rx="13"
                  fill="${badgeFill}" stroke="${isWinner ? theme.colors.accentHot : theme.colors.border}" stroke-width="0.8" />
            <text x="${(cardWidth - 36) / 2}" y="17" text-anchor="middle"
                  class="code-mono" font-size="9" font-weight="800" fill="${badgeText}" letter-spacing="0.1em">
              [${escapeXml(ach.badge || (isWinner ? 'WINNER' : 'RECOGNIZED'))}]
            </text>
          </g>
        </g>
      `;
    }).join('')}

    <!-- Restrained Luxury Glint Sparkles -->
    ${renderSparkle(width - 50, 40, 12, theme.colors.accentHot)}
    ${renderSparkle(width / 2 + 30, 42, 10, theme.colors.accentSoft)}
  </svg>`;
}
