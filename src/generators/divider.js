import { getSharedDefs, renderSparkle, theme } from './theme.js';

export function generateDividerSvg() {
  const width = 940;
  const height = 36;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('div_')}
    
    <!-- Left Flowing Pink Curve -->
    <path d="M 42 18 C 160 12, 280 24, 430 18" stroke="url(#div_barbieGrad)" stroke-width="1.2" stroke-linecap="round" opacity="0.65" />
    <path d="M 120 18 C 220 22, 320 14, 410 18" stroke="${theme.colors.borderPink}" stroke-width="0.8" stroke-linecap="round" opacity="0.5" />

    <!-- Center Editorial Monogram Knot -->
    <g transform="translate(${width / 2}, 18)">
      <circle cx="0" cy="0" r="10" fill="#FFFFFF" stroke="${theme.colors.borderPink}" stroke-width="1" />
      <polygon points="0,-4.5 4.5,0 0,4.5 -4.5,0" fill="${theme.colors.accentHot}" />
      <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
    </g>

    <!-- Right Flowing Pink Curve -->
    <path d="M 510 18 C 660 12, 780 24, ${width - 42} 18" stroke="url(#div_barbieGrad)" stroke-width="1.2" stroke-linecap="round" opacity="0.65" />
    <path d="M 530 18 C 620 22, 720 14, 820 18" stroke="${theme.colors.borderPink}" stroke-width="0.8" stroke-linecap="round" opacity="0.5" />

    <!-- Restrained Sparkles -->
    ${renderSparkle(width / 2 - 50, 18, 8, theme.colors.accentHot)}
    ${renderSparkle(width / 2 + 50, 18, 8, theme.colors.accentSoft)}
  </svg>`;
}
