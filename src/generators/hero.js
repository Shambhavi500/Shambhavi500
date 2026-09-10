import { getSharedDefs, renderSparkle, renderAbstractSilhouette, escapeXml, theme } from './theme.js';

export function generateHeroSvg(data) {
  const width = 940;
  const height = 340;
  const username = data.username || 'Shambhavi500';
  const name = data.name || 'Shambhavi Patil';
  const shortDiscipline = (data.shortDiscipline || 'ENTC').toUpperCase();

  // Top languages
  const topLanguages = (data.languageDistribution || [])
    .slice(0, 3)
    .map(l => l.language.toUpperCase())
    .join(' · ') || 'PYTHON · TYPESCRIPT · JAVASCRIPT';

  const publicRepos = data.stats && data.stats.publicRepos ? data.stats.publicRepos : 14;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('hero_')}
    
    <!-- Light Studio Canvas Base -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="${theme.colors.background}" />
    <rect width="${width}" height="${height}" rx="${theme.radius.card + 2}" fill="url(#hero_radialAura)" />

    <!-- Architectural Background Hairline Grid -->
    <g stroke="rgba(224, 33, 138, 0.05)" stroke-width="0.8">
      <line x1="56" y1="0" x2="56" y2="${height}" />
      <line x1="${width - 56}" y1="0" x2="${width - 56}" y2="${height}" />
      <line x1="0" y1="46" x2="${width}" y2="46" />
      <line x1="0" y1="${height - 56}" x2="${width}" y2="${height - 56}" />
      <circle cx="${width - 180}" cy="${height / 2}" r="140" stroke="rgba(255, 45, 135, 0.04)" fill="none" />
    </g>

    <!-- Main Pure White Surface Card with Soft Shadow -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="${theme.radius.card}"
          fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="1" filter="url(#hero_cardShadow)" />

    <!-- Abstract Barbie Silhouette / Ponytail Flowing Vector Graphic (Ambient Composition) -->
    ${renderAbstractSilhouette(width - 290, 20, 1.05, 0.065, theme.colors.accent)}

    <!-- Corner Editorial Framing Accents -->
    <g stroke="${theme.colors.accentHot}" stroke-width="1.5" stroke-opacity="0.45" fill="none">
      <path d="M 26 38 L 26 26 L 38 26" />
      <path d="M ${width - 38} 26 L ${width - 26} 26 L ${width - 26} 38" />
      <path d="M 26 ${height - 38} L 26 ${height - 26} L 38 ${height - 26}" />
      <path d="M ${width - 38} ${height - 26} L ${width - 26} ${height - 26} L ${width - 26} ${height - 38}" />
    </g>

    <!-- Header Brand Bar -->
    <g transform="translate(46, 42)">
      <!-- Brand Pill -->
      <rect x="0" y="0" width="232" height="24" rx="12" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
      <circle cx="12" cy="12" r="3.5" fill="${theme.colors.accentHot}">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="24" y="15.5" class="code-mono" font-size="9" font-weight="700" fill="${theme.colors.textPink}" letter-spacing="0.12em">
        ATELIER NO. 500 · AI/ML &amp; SYSTEMS
      </text>
    </g>

    <!-- Right Telemetry Badge -->
    <g transform="translate(${width - 46}, 42)">
      <text x="0" y="15.5" text-anchor="end" class="code-mono" font-size="9.5" fill="${theme.colors.textMuted}" letter-spacing="0.14em">
        @${escapeXml(username)} // PICT ENTC
      </text>
    </g>

    <!-- Flowing Decorative Accent Ribbon -->
    <path d="M 46 80 C 120 74, 200 86, 280 80" stroke="url(#hero_barbieGrad)" stroke-width="2" stroke-linecap="round" opacity="0.85" />

    <!-- Main Editorial Heading: Hi, I'm Shambhavi. -->
    <g transform="translate(46, 126)">
      <text x="0" y="0" class="display-title" font-size="42" fill="${theme.colors.textPrimary}">
        Hi, I&apos;m <tspan fill="${theme.colors.accentHot}">${escapeXml(name.split(' ')[0])}</tspan><tspan fill="${theme.colors.textPrimary}">.</tspan>
      </text>
    </g>

    <!-- Subtitle: Disciplines & Domains -->
    <g transform="translate(46, 160)">
      <text x="0" y="0" class="code-mono" font-size="12" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.08em">
        AI/ML • SOFTWARE ENGINEERING • ELECTRONICS &amp; TELECOMMUNICATION
      </text>
    </g>

    <!-- Mission Statement -->
    <g transform="translate(46, 192)">
      <text x="0" y="0" class="editorial-sans" font-size="15" fill="${theme.colors.textSecondary}">
        Building intelligent systems with real-world impact.
      </text>
    </g>

    <!-- Interactive Navigation / Action Pills -->
    <g transform="translate(46, 218)">
      <!-- GitHub Button -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="104" height="28" rx="14" fill="${theme.colors.textPrimary}" />
        <text x="52" y="18" text-anchor="middle" class="code-mono" font-size="10" font-weight="700" fill="#FFFFFF" letter-spacing="0.05em">
          GITHUB &#8599;
        </text>
      </g>

      <!-- LinkedIn Button -->
      <g transform="translate(116, 0)">
        <rect x="0" y="0" width="112" height="28" rx="14" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="1" />
        <text x="56" y="18" text-anchor="middle" class="code-mono" font-size="10" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.05em">
          LINKEDIN &#8599;
        </text>
      </g>

      <!-- Projects Button -->
      <g transform="translate(240, 0)">
        <rect x="0" y="0" width="112" height="28" rx="14" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="1" />
        <text x="56" y="18" text-anchor="middle" class="code-mono" font-size="10" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.05em">
          PROJECTS &#8595;
        </text>
      </g>

      <!-- Hackathons Plaque Button -->
      <g transform="translate(364, 0)">
        <rect x="0" y="0" width="128" height="28" rx="14" fill="url(#hero_barbieGrad)" />
        <text x="64" y="18" text-anchor="middle" class="code-mono" font-size="9.5" font-weight="700" fill="#FFFFFF" letter-spacing="0.06em">
          ★ AWARDS 2026
        </text>
      </g>
    </g>

    <!-- Bottom Telemetry Specs Strip -->
    <g transform="translate(46, 292)">
      <!-- Separator line -->
      <line x1="0" y1="-14" x2="${width - 92}" y2="-14" stroke="${theme.colors.borderSubtle}" stroke-width="1" />

      <text x="0" y="0" class="code-mono" font-size="9.5" fill="${theme.colors.textMuted}" letter-spacing="0.06em">
        STATUS: <tspan fill="${theme.colors.success}" font-weight="700">● LIVE</tspan>
      </text>

      <text x="140" y="0" class="code-mono" font-size="9.5" fill="${theme.colors.textMuted}" letter-spacing="0.06em">
        REPOSITORIES: <tspan fill="${theme.colors.accentHot}" font-weight="700">${publicRepos} SHIPPED</tspan>
      </text>

      <text x="340" y="0" class="code-mono" font-size="9.5" fill="${theme.colors.textMuted}" letter-spacing="0.06em">
        CORE STACK: <tspan fill="${theme.colors.textPrimary}" font-weight="700">${escapeXml(topLanguages)}</tspan>
      </text>

      <text x="${width - 92}" y="0" text-anchor="end" class="code-mono" font-size="9.5" font-weight="700" fill="${theme.colors.accent}" letter-spacing="0.1em">
        HAUTE COUTURE ENGINEERING
      </text>
    </g>

    <!-- Restrained Luxury Glint Sparkles -->
    ${renderSparkle(width - 80, 110, 14, theme.colors.accentHot)}
    ${renderSparkle(width - 190, 180, 11, theme.colors.accentSoft)}
    ${renderSparkle(width - 110, 240, 10, '#CBD5E1')}
    ${renderSparkle(310, 78, 9, theme.colors.accentHot)}
  </svg>`;
}
