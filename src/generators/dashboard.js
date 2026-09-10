import { getSharedDefs, renderSparkle, escapeXml, COLORS } from './theme.js';

export function generateDashboardSvg(data) {
  const width = 940;
  const height = 310;
  const stats = data.stats || {};
  const reposCount = stats.publicRepos || 14;
  const languages = data.languages || { Python: 4, TypeScript: 4, JavaScript: 3, Kotlin: 1 };
  const totalLangs = Object.keys(languages).length;
  const topLang = 'Python & TypeScript';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('dash_')}
    
    <!-- Outer Studio Glass Base -->
    <rect width="${width}" height="${height}" rx="16" fill="${COLORS.surfaceDark}" />
    <rect width="${width}" height="${height}" rx="16" fill="url(#dash_radialAura)" />

    <!-- Outer Frame -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="14"
          fill="url(#dash_cardGlass)" stroke="url(#dash_borderGrad)" stroke-width="1" />

    <!-- Dashboard Header Line -->
    <g transform="translate(42, 38)">
      <text x="0" y="0" class="code-mono" font-size="10" font-weight="600" fill="#FF85C0" letter-spacing="0.14em">
        DREAMHOUSE DASHBOARD // TELEMETRY &amp; GITHUB METRICS
      </text>
    </g>
    <g transform="translate(${width - 42}, 38)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="#9D93A8" letter-spacing="0.12em">
        REAL-TIME REPOSITORY TELEMETRY
      </text>
    </g>

    <!-- 4 High-Fashion Statistic Pods in Grid -->
    <!-- Card 1: Public Repositories -->
    <g transform="translate(42, 60)">
      <rect x="0" y="0" width="200" height="120" rx="10" fill="#130F1E" stroke="rgba(224, 33, 138, 0.3)" stroke-width="0.9" />
      <text x="16" y="24" class="code-mono" font-size="9" font-weight="600" fill="#FF85C0" letter-spacing="0.12em">
        PUBLIC REPOSITORIES
      </text>
      <text x="16" y="72" class="editorial-title" font-size="42" fill="url(#dash_chromeGrad)">
        ${reposCount}
      </text>
      <text x="16" y="98" class="code-mono" font-size="9" fill="#9D93A8">
        100% Original Open Source
      </text>
      <circle cx="176" cy="22" r="3.5" fill="#FF2D87" />
    </g>

    <!-- Card 2: Polyglot Architecture -->
    <g transform="translate(260, 60)">
      <rect x="0" y="0" width="200" height="120" rx="10" fill="#130F1E" stroke="rgba(224, 33, 138, 0.3)" stroke-width="0.9" />
      <text x="16" y="24" class="code-mono" font-size="9" font-weight="600" fill="#FF85C0" letter-spacing="0.12em">
        PRIMARY STACK
      </text>
      <text x="16" y="66" class="editorial-sans" font-size="20" font-weight="700" fill="#FFFFFF">
        Py &amp; TS
      </text>
      <text x="16" y="86" class="code-mono" font-size="10" fill="#FF85C0">
        4 Python · 4 TypeScript
      </text>
      <text x="16" y="104" class="code-mono" font-size="9" fill="#9D93A8">
        + JS (3) · Kotlin (1)
      </text>
    </g>

    <!-- Card 3: Domain Specializations -->
    <g transform="translate(478, 60)">
      <rect x="0" y="0" width="200" height="120" rx="10" fill="#130F1E" stroke="rgba(224, 33, 138, 0.3)" stroke-width="0.9" />
      <text x="16" y="24" class="code-mono" font-size="9" font-weight="600" fill="#FF85C0" letter-spacing="0.12em">
        CORE SPECIALTIES
      </text>
      <text x="16" y="68" class="editorial-title" font-size="38" fill="url(#dash_chromeGrad)">
        03
      </text>
      <text x="16" y="92" class="code-mono" font-size="9" fill="#E2D9E8">
        AI Agents · AgriTech
      </text>
      <text x="16" y="106" class="code-mono" font-size="9" fill="#FF85C0">
        · Algo FinTech
      </text>
    </g>

    <!-- Card 4: Engineering Discipline -->
    <g transform="translate(696, 60)">
      <rect x="0" y="0" width="202" height="120" rx="10" fill="#130F1E" stroke="rgba(224, 33, 138, 0.3)" stroke-width="0.9" />
      <text x="16" y="24" class="code-mono" font-size="9" font-weight="600" fill="#FF85C0" letter-spacing="0.12em">
        DISCIPLINE / CADENCE
      </text>
      <text x="16" y="68" class="editorial-title" font-size="28" fill="url(#dash_chromeGrad)">
        ENTC
      </text>
      <text x="16" y="90" class="code-mono" font-size="9" fill="#E2D9E8">
        Systems &amp; Telecomm
      </text>
      <text x="16" y="106" class="code-mono" font-size="9" fill="#00E676">
        ● Active Builder
      </text>
    </g>

    <!-- Lower Panel: Language Proportion Haute Bar -->
    <g transform="translate(42, 200)">
      <rect x="0" y="0" width="856" height="74" rx="10" fill="#130F1E" stroke="rgba(255, 255, 255, 0.08)" stroke-width="0.8" />
      
      <text x="18" y="24" class="code-mono" font-size="9.5" font-weight="600" fill="#FF85C0" letter-spacing="0.12em">
        LANGUAGE SPECTRUM // VERIFIED ARCHITECTURE
      </text>
      <text x="838" y="24" text-anchor="end" class="code-mono" font-size="9" fill="#9D93A8">
        DETERMINISTIC ANALYSIS
      </text>

      <!-- Multi-segment Luxury Progress Bar -->
      <g transform="translate(18, 34)">
        <!-- Bar background -->
        <rect x="0" y="0" width="820" height="8" rx="4" fill="rgba(255, 255, 255, 0.05)" />
        
        <!-- Segment 1: Python (33%) -->
        <rect x="0" y="0" width="270" height="8" rx="4" fill="#FF2D87" />
        <!-- Segment 2: TypeScript (33%) -->
        <rect x="274" y="0" width="270" height="8" rx="4" fill="#E0218A" />
        <!-- Segment 3: JavaScript (23%) -->
        <rect x="548" y="0" width="180" height="8" rx="4" fill="#FFA8D3" />
        <!-- Segment 4: Kotlin (11%) -->
        <rect x="732" y="0" width="88" height="8" rx="4" fill="#7928CA" />
      </g>

      <!-- Legend row -->
      <g transform="translate(18, 60)">
        <circle cx="5" cy="-4" r="3.5" fill="#FF2D87" />
        <text x="14" y="0" class="code-mono" font-size="9" fill="#E2D9E8">Python (33.3%)</text>

        <circle cx="155" cy="-4" r="3.5" fill="#E0218A" />
        <text x="164" y="0" class="code-mono" font-size="9" fill="#E2D9E8">TypeScript (33.3%)</text>

        <circle cx="320" cy="-4" r="3.5" fill="#FFA8D3" />
        <text x="329" y="0" class="code-mono" font-size="9" fill="#E2D9E8">JavaScript (25.0%)</text>

        <circle cx="485" cy="-4" r="3.5" fill="#7928CA" />
        <text x="494" y="0" class="code-mono" font-size="9" fill="#E2D9E8">Kotlin (8.4%)</text>

        <text x="820" y="0" text-anchor="end" class="code-mono" font-size="9" fill="#FF85C0">
          Polyglot Atelier
        </text>
      </g>
    </g>

    <!-- Sparkles -->
    ${renderSparkle(250, 48, 12, '#FFFFFF')}
    ${renderSparkle(width - 50, 195, 14, '#FF85C0')}
  </svg>`;
}
