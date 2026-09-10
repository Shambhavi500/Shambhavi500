import { getSharedDefs, renderSparkle, escapeXml, COLORS } from './theme.js';

export function generateIdentitySvg(data) {
  const width = 940;
  const height = 300;
  const username = data.username || 'Shambhavi500';
  const name = data.name || 'Shambhavi Patil';
  const bio = data.bio || 'ENTC undergraduate | Curious about technology, systems, and their real-world impact | Learning by building projects';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('ident_')}
    
    <!-- Deep Glass Container -->
    <rect width="${width}" height="${height}" rx="16" fill="${COLORS.surfaceDark}" />
    <rect width="${width}" height="${height}" rx="16" fill="url(#ident_radialAura)" />
    
    <!-- Subtle Architectural Background Ribbons -->
    <g stroke="rgba(224, 33, 138, 0.08)" stroke-width="0.8">
      <line x1="330" y1="20" x2="330" y2="${height - 20}" stroke-dasharray="4 4" />
      <line x1="20" y1="56" x2="${width - 20}" y2="56" />
    </g>

    <!-- Outer Frame -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="14"
          fill="url(#ident_cardGlass)" stroke="url(#ident_borderGrad)" stroke-width="1" />

    <!-- Section Header Tag -->
    <g transform="translate(42, 38)">
      <text x="0" y="0" class="code-mono" font-size="10" font-weight="600" fill="#FF85C0" letter-spacing="0.14em">
        DOSSIER NO. 01 // PROFILE IDENTITY &amp; CORE FOCUS
      </text>
    </g>
    <g transform="translate(${width - 42}, 38)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="#9D93A8" letter-spacing="0.12em">
        AUTONOMOUS SYSTEMS ATELIER
      </text>
    </g>

    <!-- Left Column: Stylized Haute Avatar Frame -->
    <g transform="translate(45, 78)">
      <!-- Outer Chrome Bezel -->
      <rect x="0" y="0" width="245" height="184" rx="12" fill="#130F1E" stroke="rgba(255, 45, 135, 0.35)" stroke-width="1" />
      
      <!-- Inner Fashion Portrait Badge -->
      <rect x="12" y="12" width="221" height="114" rx="8" fill="url(#ident_roseSatin)" />
      
      <!-- Minimalist Haute Silhouette / Monogram Art -->
      <circle cx="122.5" cy="56" r="32" fill="#1A1428" stroke="url(#ident_chromeGrad)" stroke-width="1.5" />
      <text x="122.5" y="65" text-anchor="middle" class="editorial-title" font-size="24" fill="url(#ident_chromeGrad)">
        SP
      </text>
      
      <!-- Verification Badge Pill -->
      <rect x="52" y="100" width="141" height="20" rx="10" fill="rgba(13, 11, 20, 0.9)" stroke="#FF2D87" stroke-width="0.8" />
      <circle cx="64" cy="110" r="3" fill="#00E676" />
      <text x="74" y="113.5" class="code-mono" font-size="8.5" font-weight="600" fill="#FFFFFF" letter-spacing="0.08em">
        VERIFIED BUILDER
      </text>

      <!-- Identity Meta beneath photo -->
      <text x="122.5" y="145" text-anchor="middle" class="editorial-sans" font-size="13" font-weight="700" fill="#FFFFFF">
        ${escapeXml(name)}
      </text>
      <text x="122.5" y="162" text-anchor="middle" class="code-mono" font-size="9.5" fill="#FF85C0" letter-spacing="0.08em">
        @${escapeXml(username)} · ENTC
      </text>
    </g>

    <!-- Right Column: Editorial Bio & Core Engineering Pillars -->
    <g transform="translate(325, 78)">
      <!-- Main Statement -->
      <text x="0" y="18" class="editorial-title" font-size="18" fill="url(#ident_chromeGrad)">
        ARCHITECTING IMPACT THROUGH CODE &amp; SILICON
      </text>
      
      <!-- Real Bio Quote Card -->
      <g transform="translate(0, 32)">
        <rect x="0" y="0" width="565" height="54" rx="8" fill="rgba(255, 240, 245, 0.03)" stroke="rgba(255, 255, 255, 0.06)" stroke-width="1" />
        <text x="16" y="24" class="editorial-sans" font-size="11.5" fill="#E2D9E8" font-style="italic">
          &quot;${escapeXml(bio)}&quot;
        </text>
        <text x="16" y="42" class="code-mono" font-size="9.5" fill="#A6195D" font-weight="600" letter-spacing="0.08em">
          // ACADEMIC &amp; RESEARCH FOCUS: ELECTRONICS &amp; TELECOMMUNICATION ENGINEERING
        </text>
      </g>

      <!-- 3 Key Pillars of Shambhavi's Work -->
      <g transform="translate(0, 102)">
        <!-- Pillar 1: Autonomous AI -->
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="178" height="80" rx="8" fill="#130F1E" stroke="rgba(224, 33, 138, 0.25)" stroke-width="0.8" />
          <text x="12" y="20" class="code-mono" font-size="8.5" font-weight="600" fill="#FF85C0" letter-spacing="0.1em">
            01 / AGENTIC AI
          </text>
          <text x="12" y="38" class="editorial-sans" font-size="12" font-weight="600" fill="#FFFFFF">
            Autonomous Systems
          </text>
          <text x="12" y="54" class="editorial-sans" font-size="9.5" fill="#9D93A8">
            Multi-agent workflows &amp;
          </text>
          <text x="12" y="68" class="editorial-sans" font-size="9.5" fill="#9D93A8">
            intelligent automation (Ovio)
          </text>
        </g>

        <!-- Pillar 2: AgriTech -->
        <g transform="translate(193, 0)">
          <rect x="0" y="0" width="178" height="80" rx="8" fill="#130F1E" stroke="rgba(224, 33, 138, 0.25)" stroke-width="0.8" />
          <text x="12" y="20" class="code-mono" font-size="8.5" font-weight="600" fill="#FF85C0" letter-spacing="0.1em">
            02 / EARTH &amp; AGRI
          </text>
          <text x="12" y="38" class="editorial-sans" font-size="12" font-weight="600" fill="#FFFFFF">
            Precision AgriTech
          </text>
          <text x="12" y="54" class="editorial-sans" font-size="9.5" fill="#9D93A8">
            Satellite spectral analysis &amp;
          </text>
          <text x="12" y="68" class="editorial-sans" font-size="9.5" fill="#9D93A8">
            AI advisory (KrishiSahAI)
          </text>
        </g>

        <!-- Pillar 3: FinTech & RL -->
        <g transform="translate(386, 0)">
          <rect x="0" y="0" width="178" height="80" rx="8" fill="#130F1E" stroke="rgba(224, 33, 138, 0.25)" stroke-width="0.8" />
          <text x="12" y="20" class="code-mono" font-size="8.5" font-weight="600" fill="#FF85C0" letter-spacing="0.1em">
            03 / QUANT &amp; FINTECH
          </text>
          <text x="12" y="38" class="editorial-sans" font-size="12" font-weight="600" fill="#FFFFFF">
            Autonomous FinTech
          </text>
          <text x="12" y="54" class="editorial-sans" font-size="9.5" fill="#9D93A8">
            Reinforcement learning &amp;
          </text>
          <text x="12" y="68" class="editorial-sans" font-size="9.5" fill="#9D93A8">
            revenue recovery OS (AIRA)
          </text>
        </g>
      </g>
    </g>

    <!-- Sparkles -->
    ${renderSparkle(width - 55, 65, 12, '#FFFFFF')}
    ${renderSparkle(280, 240, 10, '#FF85C0')}
    ${renderSparkle(width - 70, 255, 14, '#FFA8D3')}
  </svg>`;
}
