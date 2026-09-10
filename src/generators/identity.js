import { getSharedDefs, renderSparkle, escapeXml, theme } from './theme.js';

export function generateIdentitySvg(data) {
  const width = 940;
  const height = 310;
  const username = data.username || 'Shambhavi500';
  const name = data.name || 'Shambhavi Patil';
  const bio = data.bio || 'ENTC undergraduate | Curious about technology, systems, and their real-world impact | Learning by building projects';
  const institution = data.education ? data.education.institution : 'Pune Institute of Computer Technology (PICT)';
  const degree = data.education ? data.education.shortDegree : 'B.Tech ENTC';
  const cgpa = data.education ? data.education.cgpa : '8.6';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('ident_')}
    
    <!-- Light Studio Canvas Base -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="${theme.colors.background}" />
    
    <!-- Outer Card with Soft Shadow -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="${theme.radius.card}"
          fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="1" filter="url(#ident_cardShadow)" />

    <!-- Section Header Tag -->
    <g transform="translate(42, 40)">
      <text x="0" y="0" class="code-mono" font-size="10.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.14em">
        THE PERSON // ENGINEERING PROFILE &amp; FOCUS
      </text>
    </g>
    <g transform="translate(${width - 42}, 40)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.12em">
        ATELIER NO. 500 · PUNE, INDIA
      </text>
    </g>

    <!-- Header Divider Line -->
    <line x1="42" y1="52" x2="${width - 42}" y2="52" stroke="${theme.colors.borderSubtle}" stroke-width="1" />

    <!-- Left Column: Editorial Builder Card -->
    <g transform="translate(42, 68)">
      <!-- Outer Frame -->
      <rect x="0" y="0" width="245" height="206" rx="${theme.radius.md}" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
      
      <!-- Inner White Portrait Bezel -->
      <rect x="12" y="12" width="221" height="126" rx="8" fill="#FFFFFF" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />
      
      <!-- Monogram Art with Barbie Pink Accent Circle -->
      <circle cx="122.5" cy="62" r="34" fill="${theme.colors.accentBlush}" stroke="${theme.colors.borderPink}" stroke-width="1.5" />
      <text x="122.5" y="70" text-anchor="middle" class="editorial-title" font-size="22" font-weight="800" fill="${theme.colors.textPrimary}">
        SP
      </text>
      
      <!-- Verification Badge Pill -->
      <rect x="36" y="108" width="173" height="20" rx="10" fill="#FFFFFF" stroke="${theme.colors.borderPink}" stroke-width="0.8" />
      <circle cx="48" cy="118" r="3" fill="${theme.colors.success}" />
      <text x="58" y="121.5" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.textPrimary}" letter-spacing="0.06em">
        VERIFIED BUILDER · CGPA ${escapeXml(cgpa)}
      </text>

      <!-- Identity Meta beneath portrait -->
      <text x="122.5" y="164" text-anchor="middle" class="editorial-sans" font-size="14" font-weight="800" fill="${theme.colors.textPrimary}">
        ${escapeXml(name)}
      </text>
      <text x="122.5" y="184" text-anchor="middle" class="code-mono" font-size="9" font-weight="600" fill="${theme.colors.accent}" letter-spacing="0.06em">
        @${escapeXml(username)} · ${escapeXml(degree)}
      </text>
    </g>

    <!-- Right Column: Editorial Bio & 3 Engineering Pillars -->
    <g transform="translate(315, 68)">
      <!-- Statement Heading -->
      <text x="0" y="18" class="display-title" font-size="18" font-weight="800" fill="${theme.colors.textPrimary}">
        ARCHITECTING IMPACT THROUGH CODE &amp; SILICON
      </text>
      
      <!-- Bio Quote Card with Pink Hairline Accent -->
      <g transform="translate(0, 32)">
        <rect x="0" y="0" width="583" height="56" rx="8" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
        <line x1="0" y1="0" x2="0" y2="56" stroke="url(#ident_barbieGrad)" stroke-width="4" />
        <text x="16" y="24" class="editorial-sans" font-size="11.5" fill="${theme.colors.textSecondary}" font-style="italic">
          &quot;${escapeXml(bio)}&quot;
        </text>
        <text x="16" y="44" class="code-mono" font-size="9" fill="${theme.colors.accent}" font-weight="700" letter-spacing="0.06em">
          // ${escapeXml(institution.toUpperCase())} · ${escapeXml(degree.toUpperCase())}
        </text>
      </g>

      <!-- 3 Strategic Pillars of Shambhavi's Work -->
      <g transform="translate(0, 106)">
        <!-- Pillar 1: Autonomous AI -->
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="186" height="92" rx="8" fill="#FFFFFF" stroke="${theme.colors.border}" stroke-width="0.8" />
          <text x="14" y="22" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.1em">
            01 / AGENTIC AI
          </text>
          <text x="14" y="42" class="editorial-sans" font-size="12" font-weight="700" fill="${theme.colors.textPrimary}">
            Autonomous Systems
          </text>
          <text x="14" y="60" class="editorial-sans" font-size="9.5" fill="${theme.colors.textSecondary}">
            Multi-agent workflows &amp;
          </text>
          <text x="14" y="74" class="editorial-sans" font-size="9.5" fill="${theme.colors.textMuted}">
            intelligent automation (Ovio)
          </text>
        </g>

        <!-- Pillar 2: AgriTech -->
        <g transform="translate(198, 0)">
          <rect x="0" y="0" width="186" height="92" rx="8" fill="#FFFFFF" stroke="${theme.colors.border}" stroke-width="0.8" />
          <text x="14" y="22" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.1em">
            02 / EARTH &amp; AGRI
          </text>
          <text x="14" y="42" class="editorial-sans" font-size="12" font-weight="700" fill="${theme.colors.textPrimary}">
            Precision AgriTech
          </text>
          <text x="14" y="60" class="editorial-sans" font-size="9.5" fill="${theme.colors.textSecondary}">
            Satellite spectral analysis &amp;
          </text>
          <text x="14" y="74" class="editorial-sans" font-size="9.5" fill="${theme.colors.textMuted}">
            AI advisory (KrishiSahAI)
          </text>
        </g>

        <!-- Pillar 3: FinTech & RL -->
        <g transform="translate(396, 0)">
          <rect x="0" y="0" width="186" height="92" rx="8" fill="#FFFFFF" stroke="${theme.colors.border}" stroke-width="0.8" />
          <text x="14" y="22" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.1em">
            03 / QUANT &amp; FINTECH
          </text>
          <text x="14" y="42" class="editorial-sans" font-size="12" font-weight="700" fill="${theme.colors.textPrimary}">
            Autonomous FinTech
          </text>
          <text x="14" y="60" class="editorial-sans" font-size="9.5" fill="${theme.colors.textSecondary}">
            Reinforcement learning &amp;
          </text>
          <text x="14" y="74" class="editorial-sans" font-size="9.5" fill="${theme.colors.textMuted}">
            revenue recovery OS (AIRA)
          </text>
        </g>
      </g>
    </g>

    <!-- Restrained Luxury Glint Sparkles -->
    ${renderSparkle(width - 45, 65, 12, theme.colors.accentHot)}
    ${renderSparkle(278, 260, 9, theme.colors.accentSoft)}
  </svg>`;
}
