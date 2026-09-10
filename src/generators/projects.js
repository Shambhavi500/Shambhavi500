import { getSharedDefs, renderSparkle, escapeXml, COLORS } from './theme.js';

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

    // Truncate long descriptions cleanly for SVG rendering
    let desc = p.highlight || p.description || '';
    if (desc.length > 95) {
      desc = desc.substring(0, 92) + '...';
    }

    return `
      <!-- Project Card ${p.id}: ${escapeXml(p.name)} -->
      <g transform="translate(${x}, ${y})">
        <!-- Card Backing -->
        <rect x="0" y="0" width="${cardWidth}" height="${cardHeight}" rx="10"
              fill="#130F1E" stroke="rgba(224, 33, 138, 0.28)" stroke-width="0.9" />

        <!-- Top Accent Bar -->
        <rect x="0" y="0" width="${cardWidth}" height="3" rx="1.5" fill="url(#proj_barbieGrad)" opacity="0.8" />

        <!-- Category & Number Header -->
        <g transform="translate(16, 22)">
          <text x="0" y="0" class="code-mono" font-size="9" font-weight="600" fill="#FF85C0" letter-spacing="0.12em">
            ${escapeXml(p.category || 'SYSTEM')}
          </text>
          <text x="${cardWidth - 32}" y="0" text-anchor="end" class="code-mono" font-size="9.5" font-weight="700" fill="#FF2D87">
            // NO. ${escapeXml(p.id)}
          </text>
        </g>

        <!-- Project Title -->
        <g transform="translate(16, 52)">
          <text x="0" y="0" class="editorial-title" font-size="19" fill="url(#proj_chromeGrad)">
            ${escapeXml(p.name)}
          </text>
        </g>

        <!-- Project Description -->
        <g transform="translate(16, 74)">
          <text x="0" y="0" class="editorial-sans" font-size="11.5" fill="#E2D9E8" opacity="0.95">
            ${escapeXml(desc.slice(0, 48))}
          </text>
          <text x="0" y="17" class="editorial-sans" font-size="11.5" fill="#E2D9E8" opacity="0.95">
            ${escapeXml(desc.slice(48))}
          </text>
        </g>

        <!-- Bottom Metadata Footer -->
        <g transform="translate(16, 138)">
          <!-- Language Tag Pill -->
          <rect x="0" y="-14" width="90" height="20" rx="10" fill="rgba(255, 45, 135, 0.12)" stroke="rgba(255, 45, 135, 0.35)" stroke-width="0.7" />
          <circle cx="10" cy="-4" r="3" fill="#FF2D87" />
          <text x="18" y="-0.5" class="code-mono" font-size="8.5" font-weight="600" fill="#FFFFFF">
            ${escapeXml(p.language)}
          </text>

          <!-- Edition Tag -->
          <rect x="100" y="-14" width="130" height="20" rx="10" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="0.7" />
          <text x="165" y="-0.5" text-anchor="middle" class="code-mono" font-size="8" fill="#A89EAE" letter-spacing="0.06em">
            ${escapeXml(p.tag || 'OPEN SOURCE')}
          </text>

          <!-- Action Indicator -->
          <text x="${cardWidth - 32}" y="-0.5" text-anchor="end" class="code-mono" font-size="9" font-weight="600" fill="#FF85C0">
            VIEW REPO &#8599;
          </text>
        </g>
      </g>
    `;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('proj_')}
    
    <!-- Deep Container Background -->
    <rect width="${width}" height="${height}" rx="16" fill="${COLORS.surfaceDark}" />
    <rect width="${width}" height="${height}" rx="16" fill="url(#proj_radialAura)" />

    <!-- Outer Structural Frame -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="14"
          fill="url(#proj_cardGlass)" stroke="url(#proj_borderGrad)" stroke-width="1" />

    <!-- Editorial Section Header -->
    <g transform="translate(42, 44)">
      <text x="0" y="0" class="editorial-title" font-size="16" fill="url(#proj_chromeGrad)">
        DREAM PROJECTS // THE ATELIER COLLECTION
      </text>
      <text x="0" y="18" class="code-mono" font-size="9" fill="#FF85C0" letter-spacing="0.12em">
        FEATURED AUTONOMOUS AGENTS, AGRITECH PLATFORMS &amp; QUANT ENGINES
      </text>
    </g>

    <g transform="translate(${width - 42}, 44)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9.5" fill="#9D93A8" letter-spacing="0.1em">
        6 CURATED ARCHITECTURES
      </text>
      <text x="0" y="18" text-anchor="end" class="code-mono" font-size="8.5" fill="#00E676">
        ● ALL PRODUCTION REPOSITORIES
      </text>
    </g>

    <!-- The 6 Project Cards -->
    ${projectCardsSvg}

    <!-- Sparkles -->
    ${renderSparkle(width - 36, 36, 11, '#FFFFFF')}
    ${renderSparkle(width / 2, 40, 10, '#FF85C0')}
    ${renderSparkle(width - 55, height - 30, 12, '#FFA8D3')}
  </svg>`;
}
