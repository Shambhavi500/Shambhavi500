import { getSharedDefs, renderSparkle, escapeXml, theme } from './theme.js';

function wrapText(text, maxLine = 48) {
  const words = (text || '').split(' ');
  const lines = [];
  let current = '';
  for (const w of words) {
    if ((current + ' ' + w).trim().length <= maxLine) {
      current = (current + ' ' + w).trim();
    } else {
      if (current) lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export function generateProjectCardSvg(p, index = 0) {
  const width = 440;
  const height = 210;
  const idPrefix = `pcard_${index}_`;

  const rawDesc = p.highlight || p.description || '';
  const wrappedLines = wrapText(rawDesc, 46);
  const line1 = wrappedLines[0] || '';
  const line2 = wrappedLines.length > 1 ? (wrappedLines.slice(1).join(' ').length > 46 ? wrappedLines[1] + '...' : wrappedLines.slice(1).join(' ')) : '';

  const langName = p.language || 'Code';
  const langPillWidth = Math.max(70, langName.length * 7 + 24);

  const tagText = p.tag || 'OPEN SOURCE';
  const isSpecialAward = p.isAwardWinning || tagText.includes('1ST') || tagText.includes('RUNNER-UP') || tagText.includes('FLAGSHIP');
  const tagPillWidth = Math.min(185, Math.max(85, tagText.length * 6.2 + 20));

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs(idPrefix)}
    
    <!-- Base Background with 24px Glam Radius -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card}" fill="${theme.colors.surface}" />
    <rect width="${width}" height="${height}" rx="${theme.radius.card}" fill="url(#${idPrefix}radialAura)" />

    <!-- Card Frame with Glam Drop Shadow -->
    <rect x="8" y="8" width="${width - 16}" height="${height - 16}" rx="${theme.radius.card - 4}"
          fill="${theme.colors.surface}" stroke="${isSpecialAward ? theme.colors.barbiePink : theme.colors.border}"
          stroke-width="${isSpecialAward ? '1.4' : '0.9'}" filter="url(#${idPrefix}cardShadow)" />

    <!-- Signature Pink Accent Line along Top -->
    <rect x="8" y="8" width="${width - 16}" height="3.5" rx="1.75" fill="url(#${idPrefix}barbieGrad)" />

    <!-- Subtle Silhouette-Inspired Flowing Curve Art (Top Right) -->
    <path d="
      M ${width - 100} 18
      C ${width - 70} 12, ${width - 48} 24, ${width - 32} 38
      C ${width - 16} 54, ${width - 14} 78, ${width - 24} 94
      C ${width - 34} 110, ${width - 52} 118, ${width - 68} 124
    " fill="none" stroke="${theme.colors.barbiePink}" stroke-width="1.2" stroke-linecap="round" opacity="0.12" />

    <!-- Category & Number Header -->
    <g transform="translate(24, 34)">
      <text x="0" y="0" class="code-mono" font-size="9" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.12em">
        ${escapeXml(p.category || 'SYSTEM')}
      </text>
      <text x="${width - 48}" y="0" text-anchor="end" class="code-mono" font-size="9.5" font-weight="800" fill="${theme.colors.barbiePink}">
        // NO. ${escapeXml(p.id || String(index + 1).padStart(2, '0'))}
      </text>
    </g>

    <!-- Project Title -->
    <g transform="translate(24, 68)">
      <text x="0" y="0" class="display-title" font-size="20" font-weight="800" fill="${theme.colors.deepCharcoal}">
        ${escapeXml(p.name)}
      </text>
    </g>

    <!-- Project Description -->
    <g transform="translate(24, 98)">
      <text x="0" y="0" class="editorial-sans" font-size="12" fill="${theme.colors.textSecondary}">
        ${escapeXml(line1)}
      </text>
      <text x="0" y="20" class="editorial-sans" font-size="12" fill="${theme.colors.textSecondary}">
        ${escapeXml(line2)}
      </text>
    </g>

    <!-- Bottom Metadata Footer -->
    <g transform="translate(24, 172)">
      <!-- Language Tag Pill -->
      <rect x="0" y="-14" width="${langPillWidth}" height="22" rx="11" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
      <circle cx="10" cy="-3" r="3.2" fill="${theme.colors.barbiePink}" />
      <text x="18" y="0.5" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.deepCharcoal}">
        ${escapeXml(langName)}
      </text>

      <!-- Dynamic Badge Pill -->
      <rect x="${langPillWidth + 10}" y="-14" width="${tagPillWidth}" height="22" rx="11"
            fill="${isSpecialAward ? theme.colors.dreamhouseBlush : '#F8FAFC'}"
            stroke="${isSpecialAward ? theme.colors.barbiePink : theme.colors.borderSubtle}" stroke-width="0.8" />
      <text x="${langPillWidth + 10 + tagPillWidth / 2}" y="0.5" text-anchor="middle"
            class="code-mono" font-size="8" font-weight="700" fill="${isSpecialAward ? theme.colors.retroMagenta : theme.colors.textMuted}" letter-spacing="0.04em">
        ${escapeXml(tagText)}
      </text>

      <!-- Action Indicator -->
      <text x="${width - 48}" y="0.5" text-anchor="end" class="code-mono" font-size="9" font-weight="800" fill="${theme.colors.barbiePink}">
        VIEW REPO &#8599;
      </text>
    </g>

    <!-- Subtle Luxury Glint Sparkle -->
    ${renderSparkle(width - 42, 64, 11, theme.colors.barbiePink)}
  </svg>`;
}

export function generateProjectsSvg(data) {
  const width = 940;
  const height = 660;
  const projects = (data.projects || []).slice(0, 6);

  // 6 cards organized in a 2-column x 3-row editorial grid
  const cardWidth = 416;
  const cardHeight = 168;
  const startX = 42;
  const startY = 82;
  const gapX = 24;
  const gapY = 22;

  const projectCardsSvg = projects.map((p, index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    const rawDesc = p.highlight || p.description || '';
    const wrappedLines = wrapText(rawDesc, 46);
    const line1 = wrappedLines[0] || '';
    const line2 = wrappedLines.length > 1 ? (wrappedLines.slice(1).join(' ').length > 46 ? wrappedLines[1] + '...' : wrappedLines.slice(1).join(' ')) : '';

    const langName = p.language || 'Code';
    const langPillWidth = Math.max(70, langName.length * 7 + 22);

    const tagText = p.tag || 'OPEN SOURCE';
    const isSpecialAward = p.isAwardWinning || tagText.includes('1ST') || tagText.includes('RUNNER-UP') || tagText.includes('FLAGSHIP');
    const tagPillWidth = Math.min(185, Math.max(85, tagText.length * 6.2 + 20));

    return `
      <!-- Project Card ${p.id}: ${escapeXml(p.name)} -->
      <g transform="translate(${x}, ${y})">
        <!-- Pure White Card Backing with Subtle Pink Hairline -->
        <rect x="0" y="0" width="${cardWidth}" height="${cardHeight}" rx="${theme.radius.card}"
              fill="${theme.colors.surface}" stroke="${isSpecialAward ? theme.colors.barbiePink : theme.colors.border}" stroke-width="${isSpecialAward ? '1.2' : '0.8'}" />

        <!-- Signature Pink Accent Line along Top -->
        <rect x="0" y="0" width="${cardWidth}" height="3" rx="1.5" fill="url(#proj_barbieGrad)" />

        <!-- Subtle Silhouette-Inspired Flowing Curve Art (Top Right) -->
        <path d="
          M ${cardWidth - 95} 12
          C ${cardWidth - 65} 6, ${cardWidth - 45} 18, ${cardWidth - 30} 32
          C ${cardWidth - 15} 46, ${cardWidth - 12} 70, ${cardWidth - 20} 85
          C ${cardWidth - 28} 100, ${cardWidth - 45} 110, ${cardWidth - 60} 115
        " fill="none" stroke="${theme.colors.barbiePink}" stroke-width="1.2" stroke-linecap="round" opacity="0.12" />

        <!-- Category & Number Header -->
        <g transform="translate(16, 24)">
          <text x="0" y="0" class="code-mono" font-size="9" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.12em">
            ${escapeXml(p.category || 'SYSTEM')}
          </text>
          <text x="${cardWidth - 32}" y="0" text-anchor="end" class="code-mono" font-size="9.5" font-weight="800" fill="${theme.colors.barbiePink}">
            // NO. ${escapeXml(p.id)}
          </text>
        </g>

        <!-- Project Title -->
        <g transform="translate(16, 52)">
          <text x="0" y="0" class="display-title" font-size="18" font-weight="800" fill="${theme.colors.deepCharcoal}">
            ${escapeXml(p.name)}
          </text>
        </g>

        <!-- Project Description -->
        <g transform="translate(16, 74)">
          <text x="0" y="0" class="editorial-sans" font-size="11.5" fill="${theme.colors.textSecondary}">
            ${escapeXml(line1)}
          </text>
          <text x="0" y="17" class="editorial-sans" font-size="11.5" fill="${theme.colors.textSecondary}">
            ${escapeXml(line2)}
          </text>
        </g>

        <!-- Bottom Metadata Footer -->
        <g transform="translate(16, 138)">
          <!-- Language Tag Pill -->
          <rect x="0" y="-14" width="${langPillWidth}" height="20" rx="10" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
          <circle cx="10" cy="-4" r="3" fill="${theme.colors.barbiePink}" />
          <text x="18" y="-0.5" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.deepCharcoal}">
            ${escapeXml(langName)}
          </text>

          <!-- Dynamic Badge Pill -->
          <rect x="${langPillWidth + 10}" y="-14" width="${tagPillWidth}" height="20" rx="10"
                fill="${isSpecialAward ? theme.colors.dreamhouseBlush : '#F8FAFC'}"
                stroke="${isSpecialAward ? theme.colors.barbiePink : theme.colors.borderSubtle}" stroke-width="0.8" />
          <text x="${langPillWidth + 10 + tagPillWidth / 2}" y="-0.5" text-anchor="middle"
                class="code-mono" font-size="8" font-weight="700" fill="${isSpecialAward ? theme.colors.retroMagenta : theme.colors.textMuted}" letter-spacing="0.05em">
            ${escapeXml(tagText)}
          </text>

          <!-- Action Indicator -->
          <text x="${cardWidth - 32}" y="-0.5" text-anchor="end" class="code-mono" font-size="9" font-weight="700" fill="${theme.colors.barbiePink}">
            VIEW REPOSITORY &#8599;
          </text>
        </g>
      </g>
    `;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('proj_')}
    
    <!-- Light Studio Canvas Base -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card}" fill="${theme.colors.background}" />
    <rect width="${width}" height="${height}" rx="${theme.radius.card}" fill="url(#proj_radialAura)" />

    <!-- Outer Frame with Soft Glam Shadow -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="${theme.radius.card}"
          fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="1" filter="url(#proj_cardShadow)" />

    <!-- Section Header Tag -->
    <g transform="translate(42, 44)">
      <text x="0" y="0" class="code-mono" font-size="10.5" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.14em">
        THE WORK // FEATURED PROJECTS &amp; ARCHITECTURES
      </text>
      <text x="0" y="18" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.08em">
        AUTONOMOUS AI AGENTS • SATELLITE AGRITECH • QUANTITATIVE RL ENGINES
      </text>
    </g>

    <g transform="translate(${width - 42}, 44)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9.5" fill="${theme.colors.textMuted}" letter-spacing="0.1em">
        6 DYNAMICALLY RANKED PROJECTS
      </text>
      <text x="0" y="18" text-anchor="end" class="code-mono" font-size="8.5" fill="${theme.colors.success}" font-weight="700">
        ● ALL PRODUCTION REPOSITORIES
      </text>
    </g>

    <!-- Header Divider Line -->
    <line x1="42" y1="68" x2="${width - 42}" y2="68" stroke="${theme.colors.borderSubtle}" stroke-width="1" />

    <!-- The 6 Project Cards -->
    ${projectCardsSvg}

    <!-- Restrained Luxury Glint Sparkles -->
    ${renderSparkle(width - 36, 42, 11, theme.colors.barbiePink)}
    ${renderSparkle(width / 2 + 50, 44, 9, theme.colors.dreamhouseBlush)}
  </svg>`;
}
