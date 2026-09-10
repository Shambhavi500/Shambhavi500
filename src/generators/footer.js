import { getSharedDefs, renderSparkle, renderAbstractSilhouette, escapeXml, theme } from './theme.js';

export function generateFooterSvg(data) {
  const width = 940;
  const height = 180;
  const username = data.username || 'Shambhavi500';
  const name = data.name || 'Shambhavi Patil';
  const degree = (data.education && data.education.shortDegree) || 'B.Tech ENTC';
  const location = data.location || 'Pune, India';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('foot_')}
    
    <!-- Light Studio Canvas Base -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="${theme.colors.background}" />
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="url(#foot_radialAura)" />

    <!-- Outer Frame with Soft Shadow -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="${theme.radius.card}"
          fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="1" filter="url(#foot_cardShadow)" />

    <!-- Minimal Abstract Pink Silhouette Signature (Subtle Background Touch) -->
    ${renderAbstractSilhouette(width / 2 - 45, 10, 0.45, 0.08, theme.colors.accent)}

    <!-- Centerpiece Closing Statement -->
    <g transform="translate(${width / 2}, 66)">
      <text x="0" y="0" text-anchor="middle" class="display-title" font-size="20" font-weight="800" fill="${theme.colors.textPrimary}">
        &quot;Crafting intelligent systems with elegance and precision.&quot;
      </text>
      <text x="0" y="24" text-anchor="middle" class="code-mono" font-size="9.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.16em">
        ${escapeXml(name.toUpperCase())} · AI/ML &amp; SYSTEMS ENGINEERING · PICT PUNE
      </text>
    </g>

    <!-- Flowing Pink Curve Signature Line -->
    <path d="M ${width / 2 - 120} 104 C ${width / 2 - 40} 100, ${width / 2 + 40} 108, ${width / 2 + 120} 104"
          stroke="url(#foot_barbieGrad)" stroke-width="1.5" stroke-linecap="round" opacity="0.8" />

    <!-- Bottom Colophon Row -->
    <g transform="translate(42, 136)">
      <text x="0" y="0" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.1em">
        ATELIER @${escapeXml(username)} · ${escapeXml(degree.toUpperCase())} · ${escapeXml(location.toUpperCase())}
      </text>
    </g>

    <g transform="translate(${width - 42}, 136)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" font-weight="600" fill="${theme.colors.accent}" letter-spacing="0.1em">
        DESIGNED WITH INTENTION · BUILT WITH CODE
      </text>
    </g>

    <!-- Restrained Luxury Glint Sparkles -->
    ${renderSparkle(width / 2 - 210, 62, 11, theme.colors.accentHot)}
    ${renderSparkle(width / 2 + 210, 62, 11, theme.colors.accentSoft)}
    ${renderSparkle(width - 55, 42, 9, theme.colors.accentHot)}
  </svg>`;
}
