// Centralized Design-Token System for Shambhavi500 Haute Couture Barbie-Inspired Engineering Portfolio

export const theme = {
  colors: {
    // Official Barbiecore Design Tokens
    barbiePink: '#E0218A',         // Primary Barbie Hot Pink
    dreamhouseBlush: '#FFD1DC',    // Secondary Dreamhouse Blush
    retroMagenta: '#C71585',       // Dark Accent Retro Magenta
    malibuCyan: '#00B4D8',         // Accent Malibu Cyan (Tech / Live status)
    plasticWhite: '#FFFFFF',       // Neutral Plastic White
    deepCharcoal: '#2D2D2D',       // Neutral Deep Charcoal for readable body/headings

    // Semantic mappings & compatibility
    primary: '#111116',            // Deep Onyx Black for high-contrast titles
    accent: '#E0218A',             // Signature Barbie Pink
    accentHot: '#FF2D87',          // Electric Hot Pink
    accentSoft: '#FF85C0',         // Soft Rose
    accentBlush: '#FFEBF3',        // Delicate rich blush surface
    background: '#FFF0F6',         // Dreamhouse Blush Studio base (rich pink, eliminates white element)
    surface: '#FFF7FB',            // Soft rose satin card surface
    surfaceCard: '#FFF5FA',
    surfaceDark: '#0D0B14',        // Deep Obsidian
    surfaceDarkGlass: '#130F1E',    // Dark glass tile surface
    surfaceLightGlass: 'rgba(255, 240, 246, 0.92)',
    surfaceCardGlass: 'rgba(255, 235, 244, 0.96)',
    surfaceSoft: '#FFE8F2',
    border: 'rgba(224, 33, 138, 0.35)',      // Luminous pink border
    borderSubtle: 'rgba(224, 33, 138, 0.16)', // Subtle rose hairline
    borderChrome: 'rgba(224, 33, 138, 0.30)',
    borderPink: 'rgba(224, 33, 138, 0.45)',
    textPrimary: '#111116',        // Dark headings
    textSecondary: '#2D2D2D',      // Deep charcoal for high-contrast body
    textMuted: '#6B7280',          // Muted slate
    textPink: '#E0218A',           // Signature Barbie Pink
    chromeLight: '#FFFFFF',
    chromeMid: '#E2E8F0',
    chromeDark: '#94A3B8',
    success: '#00E676',            // Verifiable green
    gold: '#F59E0B'                // Trophy gold
  },
  typography: {
    display: "'Pacifico', 'Cinzel', 'Playfair Display', 'Brush Script MT', cursive, sans-serif",
    editorial: "'Cinzel', 'Playfair Display', 'Didot', Georgia, serif",
    sans: "'Montserrat', 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    body: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', 'SF Mono', 'Fira Code', Menlo, Consolas, monospace"
  },
  radius: {
    sm: 6,
    md: 12,
    card: 24,                      // Official 24px Glam Card Radius
    pill: 50                       // Official 50px Pill Button Radius
  },
  shadows: {
    card: '0 8px 24px rgba(224, 33, 138, 0.16)', // Official Glam Shadow
    glow: '0 0 20px rgba(224, 33, 138, 0.28)'
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
          font-family: ${theme.typography.sans};
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .editorial-title {
          font-family: ${theme.typography.editorial};
          font-weight: 700;
          letter-spacing: 0.08em;
        }
        .editorial-script {
          font-family: ${theme.typography.display};
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

      <!-- Signature Barbie Gradient: Hot Pink -> Barbie Pink -> Retro Magenta -->
      <linearGradient id="${idPrefix}barbieGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FF2D87" />
        <stop offset="50%" stop-color="#E0218A" />
        <stop offset="100%" stop-color="#C71585" />
      </linearGradient>

      <!-- Dreamhouse Canvas Pink Gradient (Eliminates White Element) -->
      <linearGradient id="${idPrefix}canvasPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF0F6" />
        <stop offset="50%" stop-color="#FFE4F0" />
        <stop offset="100%" stop-color="#FFD6EA" />
      </linearGradient>

      <!-- Dreamhouse Blush Satin Gradient -->
      <linearGradient id="${idPrefix}blushGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF5FA" />
        <stop offset="50%" stop-color="#FFEBF3" />
        <stop offset="100%" stop-color="#FFD1DC" />
      </linearGradient>

      <!-- Malibu Cyan Accent Gradient -->
      <linearGradient id="${idPrefix}cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00B4D8" />
        <stop offset="100%" stop-color="#0077B6" />
      </linearGradient>

      <!-- Card Glass Backdrop Gradient -->
      <linearGradient id="${idPrefix}cardGlass" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFF8FA" stop-opacity="0.98" />
        <stop offset="100%" stop-color="#FFE8F2" stop-opacity="0.96" />
      </linearGradient>

      <!-- Delicate Pink Hairline Gradient -->
      <linearGradient id="${idPrefix}borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E0218A" stop-opacity="0.55" />
        <stop offset="45%" stop-color="#FFD1DC" stop-opacity="0.40" />
        <stop offset="75%" stop-color="#00B4D8" stop-opacity="0.30" />
        <stop offset="100%" stop-color="#C71585" stop-opacity="0.50" />
      </linearGradient>

      <!-- Winner Gold Accent Gradient -->
      <linearGradient id="${idPrefix}goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDE68A" />
        <stop offset="50%" stop-color="#F59E0B" />
        <stop offset="100%" stop-color="#D97706" />
      </linearGradient>

      <!-- Soft Ambient Radial Aura -->
      <radialGradient id="${idPrefix}radialAura" cx="85%" cy="15%" r="75%">
        <stop offset="0%" stop-color="#E0218A" stop-opacity="0.18" />
        <stop offset="35%" stop-color="#FFD1DC" stop-opacity="0.12" />
        <stop offset="70%" stop-color="#00B4D8" stop-opacity="0.04" />
        <stop offset="100%" stop-color="#FFF0F6" stop-opacity="0" />
      </radialGradient>

      <!-- Glam Drop Shadow Filter -->
      <filter id="${idPrefix}cardShadow" x="-10%" y="-10%" width="120%" height="125%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#E0218A" flood-opacity="0.14" />
      </filter>

      <!-- Subtle Plaque Glow Filter -->
      <filter id="${idPrefix}pinkGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur" />
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
        opacity="0.88"
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
