// Centralized Design-Token System for Shambhavi500 Haute Couture Barbie-Inspired Engineering Portfolio

export const theme = {
  colors: {
    primary: '#111116',            // Deep Onyx Black for titles and prominent headings
    accent: '#E0218A',             // Iconic Barbie Pink
    accentHot: '#FF2D87',          // Hot Pink for stats and highlights
    accentSoft: '#FF85C0',         // Soft Rose for badge accents
    accentBlush: '#FFF5F8',        // Very light blush for subtle card surfaces
    background: '#FAFAFC',         // Crisp studio background
    surface: '#FFFFFF',            // Pure white card surface
    surfaceCard: '#FFFFFF',
    surfaceDark: '#0D0B14',        // Deep Obsidian for Haute dark backgrounds
    surfaceDarkGlass: '#130F1E',    // Dark glass tile surface
    surfaceLightGlass: 'rgba(255, 255, 255, 0.03)',
    surfaceCardGlass: 'rgba(255, 255, 255, 0.94)',
    surfaceSoft: '#FDF7FA',
    border: 'rgba(224, 33, 138, 0.18)',      // Subtle pink hairline border
    borderSubtle: 'rgba(17, 17, 22, 0.08)',  // Subtle slate hairline
    borderChrome: 'rgba(203, 213, 225, 0.7)',
    borderPink: 'rgba(224, 33, 138, 0.28)',
    textPrimary: '#111116',        // Dark / black headings
    textSecondary: '#4A4A58',      // Charcoal body text
    textMuted: '#7A7A8E',          // Muted slate
    textPink: '#E0218A',           // Signature Barbie Pink
    chromeLight: '#FFFFFF',
    chromeMid: '#E2E8F0',
    chromeDark: '#94A3B8',
    success: '#00E676',            // Verifiable green
    gold: '#FFD700'                // Subtle trophy gold
  },
  typography: {
    display: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    editorial: "'Cinzel', 'Playfair Display', 'Didot', Georgia, serif",
    script: "'Playfair Display', 'Dancing Script', 'Brush Script MT', Georgia, cursive",
    mono: "'JetBrains Mono', 'SF Mono', 'Fira Code', Menlo, Consolas, monospace",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  radius: {
    sm: 6,
    md: 10,
    card: 14,
    pill: 20
  },
  shadows: {
    card: '0 4px 24px rgba(224, 33, 138, 0.06)',
    glow: '0 0 16px rgba(224, 33, 138, 0.22)'
  }
};

// Backward-compatible alias for existing imports
export const COLORS = theme.colors;

export function getSharedDefs(idPrefix = '') {
  return `
    <defs>
      <!-- Embedded Styles in XML CDATA -->
      <style type="text/css"><![CDATA[
        .display-title {
          font-family: ${theme.typography.display};
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .editorial-title {
          font-family: ${theme.typography.editorial};
          font-weight: 700;
          letter-spacing: 0.08em;
        }
        .editorial-script {
          font-family: ${theme.typography.script};
          font-style: italic;
          letter-spacing: 0.02em;
        }
        .editorial-sans {
          font-family: ${theme.typography.body};
          font-weight: 500;
        }
        .code-mono {
          font-family: ${theme.typography.mono};
        }
        
        /* Subtle Shimmer & Pulse Keyframes */
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
        @keyframes glint {
          0%, 100% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        
        .pulse-anim {
          animation: subtlePulse 3s ease-in-out infinite;
        }
        .glint-anim {
          animation: glint 3.5s ease-in-out infinite;
          transform-origin: center;
        }
      ]]></style>

      <!-- Signature Barbie Gradient (Hot Pink to Barbie Pink to Magenta) -->
      <linearGradient id="${idPrefix}barbieGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FF2D87" />
        <stop offset="50%" stop-color="#E0218A" />
        <stop offset="100%" stop-color="#C2185B" />
      </linearGradient>

      <!-- Card Glass Backdrop Gradient -->
      <linearGradient id="${idPrefix}cardGlass" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#151122" stop-opacity="0.94" />
        <stop offset="100%" stop-color="#0E0B16" stop-opacity="0.97" />
      </linearGradient>

      <!-- Rose Satin Monogram Gradient -->
      <linearGradient id="${idPrefix}roseSatin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2D1124" />
        <stop offset="100%" stop-color="#1A0D18" />
      </linearGradient>

      <!-- Light Rose Ambient Surface Gradient -->
      <linearGradient id="${idPrefix}lightSurfaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#FFF5F8" />
      </linearGradient>

      <!-- Delicate Pink Hairline Gradient -->
      <linearGradient id="${idPrefix}borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF2D87" stop-opacity="0.45" />
        <stop offset="40%" stop-color="#FF85C0" stop-opacity="0.20" />
        <stop offset="70%" stop-color="#CBD5E1" stop-opacity="0.30" />
        <stop offset="100%" stop-color="#E0218A" stop-opacity="0.35" />
      </linearGradient>

      <!-- Platinum / Chrome Luxury Accent Gradient -->
      <linearGradient id="${idPrefix}chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="35%" stop-color="#F1F5F9" />
        <stop offset="70%" stop-color="#CBD5E1" />
        <stop offset="100%" stop-color="#E2E8F0" />
      </linearGradient>

      <!-- Winner Gold Accent Gradient -->
      <linearGradient id="${idPrefix}goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDE68A" />
        <stop offset="50%" stop-color="#F59E0B" />
        <stop offset="100%" stop-color="#D97706" />
      </linearGradient>

      <!-- Soft Ambient Radial Aura (Haute Dark Mode) -->
      <radialGradient id="${idPrefix}radialAura" cx="80%" cy="10%" r="70%">
        <stop offset="0%" stop-color="#E0218A" stop-opacity="0.14" />
        <stop offset="40%" stop-color="#FF2D87" stop-opacity="0.06" />
        <stop offset="100%" stop-color="#0D0B14" stop-opacity="0" />
      </radialGradient>

      <!-- Card Soft Shadow Filter -->
      <filter id="${idPrefix}cardShadow" x="-5%" y="-5%" width="110%" height="115%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#E0218A" flood-opacity="0.06" />
      </filter>

      <!-- Subtle Plaque Glow Filter -->
      <filter id="${idPrefix}pinkGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      <filter id="${idPrefix}glowFilter" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  `;
}

// Abstract Barbie Silhouette Vector Graphic (Feminine Profile & Ponytail S-Curve)
export function renderAbstractSilhouette(cx, cy, scale = 1, opacity = 0.08, color = theme.colors.accent) {
  return `
    <g transform="translate(${cx}, ${cy}) scale(${scale})" opacity="${opacity}" fill="${color}">
      <path d="
        M 10 90
        C 15 65, 30 45, 55 35
        C 80 25, 110 30, 125 50
        C 140 70, 135 100, 115 125
        C 105 138, 95 155, 95 175
        C 95 195, 105 210, 120 225
        C 100 220, 80 210, 68 190
        C 58 175, 58 150, 68 130
        C 75 115, 78 95, 65 80
        C 52 65, 35 68, 25 78
        C 18 85, 14 90, 10 90
        Z
      " />
      <path d="
        M 120 45
        C 145 20, 185 15, 215 35
        C 245 55, 260 95, 240 135
        C 225 165, 195 195, 180 230
        C 170 255, 175 275, 195 295
        C 170 285, 155 260, 155 235
        C 155 205, 180 175, 200 145
        C 220 115, 220 80, 195 60
        C 175 45, 145 42, 120 45
        Z
      " />
      <path d="
        M 68 190
        C 80 220, 105 250, 140 270
        C 115 265, 90 250, 75 230
        C 65 215, 62 200, 68 190
        Z
      " />
    </g>
  `;
}

// 4-pointed luxury starburst SVG helper
export function renderSparkle(cx, cy, size = 12, color = theme.colors.accent, className = 'glint-anim') {
  const half = size / 2;
  const inner = size * 0.22;
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
        opacity="0.85"
      />
      <circle cx="${cx}" cy="${cy}" r="${size * 0.14}" fill="#FFFFFF" />
    </g>
  `;
}

// Luxury Fashion Tag / Pill
export function renderPill(x, y, text, category = '', width = 110, height = 24) {
  return `
    <g transform="translate(${x}, ${y})">
      <rect x="0" y="0" width="${width}" height="${height}" rx="${height / 2}"
            fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
      <text x="${width / 2}" y="${height / 2 + 3.5}" text-anchor="middle"
            class="code-mono" font-size="9" font-weight="600" fill="${theme.colors.textPink}" letter-spacing="0.08em">
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
