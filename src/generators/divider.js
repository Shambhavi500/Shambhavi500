import { getSharedDefs, renderSparkle } from './theme.js';

export function generateDividerSvg() {
  const width = 940;
  const height = 36;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('div_')}
    
    <!-- Central Ribbon Line -->
    <line x1="42" y1="18" x2="420" y2="18" stroke="url(#div_barbieGrad)" stroke-width="0.8" opacity="0.6" />
    <line x1="520" y1="18" x2="${width - 42}" y2="18" stroke="url(#div_barbieGrad)" stroke-width="0.8" opacity="0.6" />

    <!-- Center Faceted Haute Diamond -->
    <g transform="translate(${width / 2}, 18)">
      <circle cx="0" cy="0" r="12" fill="#130F1E" stroke="rgba(255, 45, 135, 0.4)" stroke-width="0.8" />
      <polygon points="0,-6 6,0 0,6 -6,0" fill="url(#div_chromeGrad)" />
      <circle cx="0" cy="0" r="1.5" fill="#FF2D87" />
    </g>

    ${renderSparkle(width / 2 - 60, 18, 9, '#FFFFFF')}
    ${renderSparkle(width / 2 + 60, 18, 9, '#FF85C0')}
  </svg>`;
}
