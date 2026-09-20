import { getSharedDefs, renderSparkle, escapeXml, theme } from './theme.js';

export function generateAchievementsSvg(data) {
  const width = 940;
  const height = 350;

  // Shambhavi has won exactly 2 hackathons:
  const hackathons = [
    {
      id: '01',
      event: "TECHFIESTA '26",
      place: '1ST PLACE // WINNER',
      domain: 'AGRICULTURE DOMAIN',
      project: 'KrishiSahAI',
      scope: '600+ Competing Engineering Teams',
      summary: 'AI Agricultural Decision Support & Farm Telemetry',
      badge: '1ST PLACE WINNER · 🏆',
      accent: theme.colors.barbiePink,
      pillFill: 'url(#ach_barbieGrad)',
      borderAccent: theme.colors.barbiePink,
      boxBg: 'rgba(224, 33, 138, 0.08)',
      boxStroke: 'rgba(224, 33, 138, 0.28)'
    },
    {
      id: '02',
      event: 'PUNE AGRI HACKATHON',
      place: 'NATIONAL RUNNER-UP',
      domain: 'PRECISION AGRITECH & AI',
      project: 'Krishi Prabandh & NDVI',
      scope: 'National Competition vs Startups · ₹15L Grant',
      summary: 'Presented to Hon. Maharashtra CM · Satellite NDVI',
      badge: 'NATIONAL RUNNER-UP · ₹15L GRANT · 🥈',
      accent: theme.colors.retroMagenta,
      pillFill: 'url(#ach_runnerUpGrad)',
      borderAccent: theme.colors.retroMagenta,
      boxBg: 'rgba(199, 21, 133, 0.08)',
      boxStroke: 'rgba(199, 21, 133, 0.28)'
    }
  ];

  const cardWidth = 422;
  const cardHeight = 254;
  const startX = 36;
  const startY = 68;
  const cardGap = 24;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('ach_')}

    <defs>
      <!-- Dreamhouse Rose Satin Card 01 Gradient -->
      <linearGradient id="ach_card01Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFF9FC" />
        <stop offset="50%" stop-color="#FFEBF4" />
        <stop offset="100%" stop-color="#FFD9EA" />
      </linearGradient>

      <!-- Dreamhouse Rose Satin Card 02 Gradient -->
      <linearGradient id="ach_card02Grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFF9FC" />
        <stop offset="50%" stop-color="#FFEAF3" />
        <stop offset="100%" stop-color="#FFD6E8" />
      </linearGradient>

      <!-- Runner Up Magenta Gradient -->
      <linearGradient id="ach_runnerUpGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#D6188A" />
        <stop offset="50%" stop-color="#C71585" />
        <stop offset="100%" stop-color="#9E0E68" />
      </linearGradient>
    </defs>
    
    <!-- Dreamhouse Pink Studio Canvas Base (Eliminating White Element) -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card}" fill="url(#ach_canvasPinkGrad)" />
    <rect width="${width}" height="${height}" rx="${theme.radius.card}" fill="url(#ach_radialAura)" />

    <!-- Outer Structural Frame with Luminous Pink Border & Glow -->
    <rect x="14" y="14" width="${width - 28}" height="${height - 28}" rx="${theme.radius.card}"
          fill="url(#ach_blushGrad)" stroke="${theme.colors.barbiePink}" stroke-width="1.5" filter="url(#ach_cardShadow)" />

    <!-- Section Header Tag -->
    <g transform="translate(36, 40)">
      <text x="0" y="0" class="code-mono" font-size="11" font-weight="800" fill="${theme.colors.retroMagenta}" letter-spacing="0.14em">
        THE WINS // 2 ACCREDITED HACKATHONS
      </text>
    </g>

    <g transform="translate(${width - 36}, 40)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9.5" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.08em">
        OFFICIALLY ACCREDITED · <tspan fill="${theme.colors.malibuCyan}" font-weight="800">● 100% VERIFIED MILESTONES</tspan>
      </text>
    </g>

    <!-- Header Pink Gradient Line -->
    <line x1="36" y1="52" x2="${width - 36}" y2="52" stroke="url(#ach_barbieGrad)" stroke-width="1.5" />

    <!-- The 2 Prestigious Hackathon Award Plaques -->
    ${hackathons.map((ach, idx) => {
      const x = startX + idx * (cardWidth + cardGap);
      const y = startY;
      const isWinner = idx === 0;

      return `
        <!-- Hackathon Plaque ${ach.id} -->
        <g transform="translate(${x}, ${y})">
          <!-- Card Base in Dreamhouse Rose Satin with Rich Pink Border -->
          <rect x="0" y="0" width="${cardWidth}" height="${cardHeight}" rx="22"
                fill="url(#${isWinner ? 'ach_card01Grad' : 'ach_card02Grad'})"
                stroke="${ach.borderAccent}" stroke-width="2" filter="url(#ach_cardShadow)" />

          <!-- Top Accent Ribbon in Hot Pink / Magenta -->
          <rect x="0" y="0" width="${cardWidth}" height="5" rx="2.5" fill="${isWinner ? 'url(#ach_barbieGrad)' : 'url(#ach_runnerUpGrad)'}" />

          <!-- Edition Tag & Trophy/Medal Icon -->
          <text x="20" y="32" class="display-title" font-size="18" font-weight="800" fill="${ach.accent}">
            ${ach.id}
          </text>
          <text x="48" y="31" class="code-mono" font-size="10" font-weight="700" fill="${theme.colors.textMuted}" letter-spacing="0.1em">
            // HACKATHON WIN
          </text>
          <text x="${cardWidth - 20}" y="32" text-anchor="end" font-size="18">
            ${isWinner ? '🏆' : '🥈'}
          </text>

          <!-- Hairline Divider -->
          <line x1="20" y1="42" x2="${cardWidth - 20}" y2="42" stroke="${ach.boxStroke}" stroke-width="0.8" />

          <!-- Event Name -->
          <text x="20" y="68" class="display-title" font-size="17" font-weight="800" fill="${theme.colors.deepCharcoal}" letter-spacing="0.02em">
            ${escapeXml(ach.event)}
          </text>

          <!-- Place / Ranking -->
          <text x="20" y="88" class="code-mono" font-size="11" font-weight="800" fill="${ach.accent}" letter-spacing="0.06em">
            ${escapeXml(ach.place)}
          </text>

          <!-- Domain -->
          <text x="20" y="105" class="code-mono" font-size="9" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.06em">
            ${escapeXml(ach.domain)}
          </text>

          <!-- Project Showcase Box (Translucent Pink Glass) -->
          <g transform="translate(20, 118)">
            <rect x="0" y="0" width="${cardWidth - 40}" height="76" rx="14"
                  fill="${ach.boxBg}" stroke="${ach.boxStroke}" stroke-width="1" />

            <!-- Project Title -->
            <text x="14" y="24" class="code-mono" font-size="9" font-weight="700" fill="${ach.accent}" letter-spacing="0.08em">
              FLAGSHIP SOLUTION:
            </text>
            <text x="145" y="24" class="editorial-sans" font-size="13" font-weight="800" fill="${theme.colors.deepCharcoal}">
              ${escapeXml(ach.project)}
            </text>

            <!-- Scope / Metric -->
            <text x="14" y="44" class="editorial-sans" font-size="10.5" font-weight="700" fill="${theme.colors.retroMagenta}">
              ★ ${escapeXml(ach.scope)}
            </text>

            <!-- Summary / Impact -->
            <text x="14" y="62" class="code-mono" font-size="9" font-weight="600" fill="${theme.colors.deepCharcoal}">
              ✦ ${escapeXml(ach.summary)}
            </text>
          </g>

          <!-- Barbiecore Pill Button CTA -->
          <g transform="translate(20, 206)">
            <rect x="0" y="0" width="${cardWidth - 40}" height="34" rx="17"
                  fill="${ach.pillFill}" stroke="${theme.colors.plasticWhite}" stroke-width="0.8" filter="url(#ach_pinkGlow)" />
            <text x="${(cardWidth - 40) / 2}" y="22" text-anchor="middle"
                  class="code-mono" font-size="10" font-weight="800" fill="#FFFFFF" letter-spacing="0.12em">
              ${escapeXml(ach.badge)}
            </text>
          </g>
        </g>
      `;
    }).join('')}

    <!-- Luxury Sparkles placed safely without text collisions -->
    ${renderSparkle(260, 38, 12, theme.colors.barbiePink)}
    ${renderSparkle(width - 24, height - 24, 12, theme.colors.barbiePink)}
    ${renderSparkle(24, height - 24, 10, theme.colors.dreamhouseBlush)}
  </svg>`;
}
