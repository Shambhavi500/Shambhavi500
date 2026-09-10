import { getSharedDefs, renderSparkle, escapeXml, COLORS } from './theme.js';

export function generateAchievementsSvg(data) {
  const width = 940;
  const height = 290;
  const achievements = data.achievements || [];

  const cardWidth = 200;
  const cardHeight = 180;
  const startX = 42;
  const startY = 74;
  const gap = 16;

  const cardsSvg = achievements.map((ach, idx) => {
    const x = startX + idx * (cardWidth + gap);

    return `
      <!-- Achievement Card ${idx + 1}: ${escapeXml(ach.title)} -->
      <g transform="translate(${x}, ${startY})">
        <!-- Card Base -->
        <rect x="0" y="0" width="${cardWidth}" height="${cardHeight}" rx="12"
              fill="#130F1E" stroke="rgba(224, 33, 138, 0.28)" stroke-width="0.9" />

        <!-- Top Accent Strip -->
        <rect x="0" y="0" width="${cardWidth}" height="3" rx="1.5" fill="url(#ach_barbieGrad)" />

        <!-- Edition Tag -->
        <g transform="translate(14, 24)">
          <rect x="0" y="0" width="84" height="18" rx="9" fill="rgba(255, 45, 135, 0.15)" stroke="rgba(255, 45, 135, 0.4)" stroke-width="0.7" />
          <text x="42" y="12" text-anchor="middle" class="code-mono" font-size="8" font-weight="700" fill="#FF85C0" letter-spacing="0.1em">
            ${escapeXml(ach.code)}
          </text>
        </g>

        <!-- Medal / Badge Emblem in Chrome -->
        <g transform="translate(156, 26)">
          <circle cx="16" cy="7" r="14" fill="rgba(255, 255, 255, 0.03)" stroke="url(#ach_chromeGrad)" stroke-width="1" />
          <polygon points="16,0 18,5 23,6 19,10 20,15 16,12 12,15 13,10 9,6 14,5" fill="#FF2D87" />
        </g>

        <!-- Title -->
        <g transform="translate(14, 70)">
          <text x="0" y="0" class="editorial-title" font-size="12" fill="url(#ach_chromeGrad)">
            ${escapeXml(ach.title.split(' ')[0])}
          </text>
          <text x="0" y="16" class="editorial-title" font-size="12" fill="url(#ach_chromeGrad)">
            ${escapeXml(ach.title.split(' ').slice(1).join(' '))}
          </text>
        </g>

        <!-- Description -->
        <g transform="translate(14, 110)">
          <text x="0" y="0" class="editorial-sans" font-size="10" fill="#E2D9E8" opacity="0.9">
            ${escapeXml(ach.description.slice(0, 32))}
          </text>
          <text x="0" y="14" class="editorial-sans" font-size="10" fill="#E2D9E8" opacity="0.9">
            ${escapeXml(ach.description.slice(32, 64))}
          </text>
          <text x="0" y="28" class="editorial-sans" font-size="10" fill="#E2D9E8" opacity="0.9">
            ${escapeXml(ach.description.slice(64))}
          </text>
        </g>

        <!-- Metric Footer -->
        <g transform="translate(14, 162)">
          <text x="0" y="0" class="code-mono" font-size="8.5" font-weight="600" fill="#00E676">
            &#10003; ${escapeXml(ach.metric)}
          </text>
        </g>
      </g>
    `;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('ach_')}
    
    <!-- Dark Studio Base -->
    <rect width="${width}" height="${height}" rx="16" fill="${COLORS.surfaceDark}" />
    <rect width="${width}" height="${height}" rx="16" fill="url(#ach_radialAura)" />

    <!-- Outer Structural Frame -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="14"
          fill="url(#ach_cardGlass)" stroke="url(#ach_borderGrad)" stroke-width="1" />

    <!-- Section Header -->
    <g transform="translate(42, 44)">
      <text x="0" y="0" class="editorial-title" font-size="16" fill="url(#ach_chromeGrad)">
        CAREER EDITION // ATELIER MILESTONES
      </text>
      <text x="0" y="18" class="code-mono" font-size="9" fill="#FF85C0" letter-spacing="0.12em">
        VERIFIED REPOSITORY RELEASES, ARCHITECTURAL DESIGNS &amp; IMPACT DOMAINS
      </text>
    </g>

    <g transform="translate(${width - 42}, 44)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="#9D93A8" letter-spacing="0.1em">
        4 VERIFIED BADGES
      </text>
      <text x="0" y="18" text-anchor="end" class="code-mono" font-size="8.5" fill="#00E676">
        ● AUTHENTIC CRITERIA MET
      </text>
    </g>

    <!-- 4 Achievement Cards -->
    ${cardsSvg}

    <!-- Sparkles -->
    ${renderSparkle(width - 36, 36, 10, '#FFFFFF')}
    ${renderSparkle(width / 2, 40, 10, '#FF85C0')}
    ${renderSparkle(width - 60, height - 25, 11, '#FFA8D3')}
  </svg>`;
}
