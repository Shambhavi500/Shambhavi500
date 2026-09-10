// Barbie Haute Couture Design System for Shambhavi500

export const COLORS = {
  // Signature Barbie Palette
  barbiePink: '#E0218A',
  hotPink: '#FF2D87',
  magenta: '#D4145A',
  deepRose: '#A6195D',
  paleBlush: '#FFF0F5',
  softLavender: '#F3E8FF',
  pearlWhite: '#FDFBFD',
  
  // Luxury Dark & Glass Surfaces
  surfaceDark: '#0D0B14',
  surfaceCard: '#151122',
  surfaceCardGlass: 'rgba(21, 17, 34, 0.75)',
  surfaceLightGlass: 'rgba(255, 240, 245, 0.04)',
  
  // High-End Borders & Accents
  borderPink: 'rgba(224, 33, 138, 0.35)',
  borderLight: 'rgba(255, 255, 255, 0.10)',
  borderChrome: 'rgba(226, 232, 240, 0.30)',
  
  // Typography
  textPrimary: '#FFFFFF',
  textSecondary: '#E2D9E8',
  textMuted: '#9D93A8',
  textPink: '#FF6EB4',
  textAccent: '#FF85C0',
  
  // Chrome & Metal Accents
  chromeLight: '#FFFFFF',
  chromeMid: '#CBD5E1',
  chromeDark: '#64748B'
};

export function getSharedDefs(idPrefix = '') {
  return `
    <defs>
      <!-- Embedded Styles in XML CDATA -->
      <style type="text/css"><![CDATA[
        .editorial-title {
          font-family: 'Cinzel', 'Didot', 'Bodoni MT', 'Playfair Display', Georgia, serif;
          font-weight: 700;
          letter-spacing: 0.12em;
        }
        .editorial-script {
          font-family: 'Playfair Display', 'Didot', Georgia, serif;
          font-style: italic;
        }
        .editorial-sans {
          font-family: 'Outfit', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .code-mono {
          font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', Menlo, Consolas, monospace;
        }
        
        /* Subtle Shimmer & Pulse Keyframes */
        @keyframes shimmerPulse {
          0% { stop-color: #E0218A; stop-opacity: 0.85; }
          50% { stop-color: #FF2D87; stop-opacity: 1; }
          100% { stop-color: #E0218A; stop-opacity: 0.85; }
        }
        @keyframes sparkleGlint {
          0%, 100% { transform: scale(0.85) rotate(0deg); opacity: 0.7; }
          50% { transform: scale(1.15) rotate(15deg); opacity: 1; }
        }
        @keyframes runwayGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; filter: drop-shadow(0 0 6px #FF2D87); }
        }
        
        .sparkle-anim {
          animation: sparkleGlint 4s ease-in-out infinite;
          transform-origin: center;
        }
        .runway-glow {
          animation: runwayGlow 3s ease-in-out infinite;
        }
      ]]></style>

      <!-- Barbie Chrome Metallic Gradient -->
      <linearGradient id="${idPrefix}chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="25%" stop-color="#FFD6E8" />
        <stop offset="50%" stop-color="#FFFFFF" />
        <stop offset="75%" stop-color="#E2E8F0" />
        <stop offset="100%" stop-color="#FFA8D3" />
      </linearGradient>

      <!-- Signature Barbie Dreamhouse Pink Gradient -->
      <linearGradient id="${idPrefix}barbieGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#D4145A" />
        <stop offset="50%" stop-color="#E0218A" />
        <stop offset="100%" stop-color="#FF2D87" />
      </linearGradient>

      <!-- Satin Rose Glow Gradient -->
      <linearGradient id="${idPrefix}roseSatin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF2D87" stop-opacity="0.3" />
        <stop offset="50%" stop-color="#7928CA" stop-opacity="0.1" />
        <stop offset="100%" stop-color="#151122" stop-opacity="0.8" />
      </linearGradient>

      <!-- Glassmorphic Card Fill -->
      <linearGradient id="${idPrefix}cardGlass" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1B162B" stop-opacity="0.92" />
        <stop offset="100%" stop-color="#100D1C" stop-opacity="0.96" />
      </linearGradient>

      <!-- Subtle Accent Border Gradient -->
      <linearGradient id="${idPrefix}borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF2D87" stop-opacity="0.7" />
        <stop offset="30%" stop-color="#FFFFFF" stop-opacity="0.4" />
        <stop offset="70%" stop-color="#E0218A" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#A6195D" stop-opacity="0.5" />
      </linearGradient>

      <!-- Soft Radial Dreamhouse Glow -->
      <radialGradient id="${idPrefix}radialAura" cx="50%" cy="0%" r="70%">
        <stop offset="0%" stop-color="#FF2D87" stop-opacity="0.22" />
        <stop offset="60%" stop-color="#E0218A" stop-opacity="0.06" />
        <stop offset="100%" stop-color="#0D0B14" stop-opacity="0" />
      </radialGradient>

      <!-- Star / Sparkle Filter -->
      <filter id="${idPrefix}glowFilter" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  `;
}

// 4-pointed luxury starburst SVG helper
export function renderSparkle(cx, cy, size = 12, color = '#FF85C0', className = 'sparkle-anim') {
  const half = size / 2;
  const inner = size * 0.2;
  return `
    <g class="${className}" style="transform-origin: ${cx}px ${cy}px;">
      <path d="
        M ${cx} ${cy - half}
        Q ${cx + inner} ${cy - inner} ${cx + half} ${cy}
        Q ${cx + inner} ${cy + inner} ${cx} ${cy + half}
        Q ${cx - inner} ${cy + inner} ${cx - half} ${cy}
        Q ${cx - inner} ${cy - inner} ${cx} ${cy - half}
        Z"
        fill="${color}"
        opacity="0.9"
      />
      <circle cx="${cx}" cy="${cy}" r="${size * 0.15}" fill="#FFFFFF" />
    </g>
  `;
}

// Luxury Fashion Tag / Pill
export function renderPill(x, y, text, category = '', width = 110, height = 24) {
  return `
    <g transform="translate(${x}, ${y})">
      <rect x="0" y="0" width="${width}" height="${height}" rx="12"
            fill="rgba(224, 33, 138, 0.12)" stroke="rgba(255, 45, 135, 0.4)" stroke-width="0.8" />
      <text x="${width / 2}" y="15.5" text-anchor="middle"
            class="code-mono" font-size="10" font-weight="600" fill="#FF85C0" letter-spacing="0.08em">
        ${escapeXml(text)}
      </text>
    </g>
  `;
}

// XML Escaping
export function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
