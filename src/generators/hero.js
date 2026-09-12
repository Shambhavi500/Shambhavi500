import { getSharedDefs, renderSparkle, renderAbstractSilhouette, escapeXml, theme } from './theme.js';

export function generateHeroSvg(data) {
  const width = 940;
  const height = 340;
  const username = data.username || 'Shambhavi500';
  const name = data.name || 'Shambhavi Patil';

  // Top languages
  const topLanguages = (data.languageDistribution || [])
    .slice(0, 3)
    .map(l => l.language.toUpperCase())
    .join(' · ') || 'PYTHON · TYPESCRIPT · JAVASCRIPT';

  const publicRepos = data.stats && data.stats.publicRepos ? data.stats.publicRepos : 14;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('hero_')}
    
    <!-- Light Studio Canvas Base with 24px Glam Radius -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card}" fill="${theme.colors.background}" />
    <rect width="${width}" height="${height}" rx="${theme.radius.card}" fill="url(#hero_radialAura)" />

    <!-- Architectural Background Hairline Grid -->
    <g stroke="rgba(224, 33, 138, 0.06)" stroke-width="0.8">
      <line x1="56" y1="0" x2="56" y2="${height}" />
      <line x1="${width - 56}" y1="0" x2="${width - 56}" y2="${height}" />
      <line x1="0" y1="46" x2="${width}" y2="46" />
      <line x1="0" y1="${height - 56}" x2="${width}" y2="${height - 56}" />
      <circle cx="${width - 180}" cy="${height / 2}" r="140" stroke="rgba(224, 33, 138, 0.05)" fill="none" />
    </g>

    <!-- Main Pure White Surface Card with Glam Drop Shadow -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="${theme.radius.card}"
          fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="1" filter="url(#hero_cardShadow)" />

    <!-- Abstract Barbie Silhouette / Ponytail Flowing Vector Graphic -->
    ${renderAbstractSilhouette(width - 290, 20, 1.05, 0.07, theme.colors.barbiePink)}

    <!-- Corner Editorial Framing Accents -->
    <g stroke="${theme.colors.barbiePink}" stroke-width="1.5" stroke-opacity="0.45" fill="none">
      <path d="M 28 40 L 28 28 L 40 28" />
      <path d="M ${width - 40} 28 L ${width - 28} 28 L ${width - 28} 40" />
      <path d="M 28 ${height - 40} L 28 ${height - 28} L 40 ${height - 28}" />
      <path d="M ${width - 40} ${height - 28} L ${width - 28} ${height - 28} L ${width - 28} ${height - 40}" />
    </g>

    <!-- Header Brand Bar -->
    <g transform="translate(46, 42)">
      <!-- Brand Pill -->
      <rect x="0" y="0" width="248" height="24" rx="12" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
      <circle cx="12" cy="12" r="3.5" fill="${theme.colors.barbiePink}">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="24" y="15.5" class="code-mono" font-size="9" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.12em">
        ATELIER NO. 500 · AI/ML &amp; SYSTEMS
      </text>
    </g>

    <!-- Right Telemetry Badge -->
    <g transform="translate(${width - 46}, 42)">
      <text x="0" y="15.5" text-anchor="end" class="code-mono" font-size="9.5" fill="${theme.colors.textMuted}" letter-spacing="0.14em">
        @${escapeXml(username)} // PICT ENTC &apos;28
      </text>
    </g>

    <!-- Flowing Decorative Accent Ribbon -->
    <path d="M 46 80 C 120 74, 200 86, 290 80" stroke="url(#hero_barbieGrad)" stroke-width="2.5" stroke-linecap="round" opacity="0.9" />

    <!-- Main Editorial Heading: Hi, I'm Shambhavi. -->
    <g transform="translate(46, 126)">
      <text x="0" y="0" class="display-title" font-size="42" fill="${theme.colors.deepCharcoal}">
        Hi, I&apos;m <tspan fill="${theme.colors.barbiePink}">${escapeXml(name.split(' ')[0])}</tspan><tspan fill="${theme.colors.deepCharcoal}">.</tspan>
      </text>
    </g>

    <!-- Subtitle: Disciplines & Domains -->
    <g transform="translate(46, 160)">
      <text x="0" y="0" class="code-mono" font-size="11.5" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.08em">
        AI/ML RESEARCH &amp; DEVELOPMENT • SOFTWARE SYSTEMS • SATELLITE AGRITECH
      </text>
    </g>

    <!-- Mission Statement -->
    <g transform="translate(46, 190)">
      <text x="0" y="0" class="editorial-sans" font-size="14" fill="${theme.colors.textSecondary}">
        Building intelligent, data-driven autonomous systems with real-world impact.
      </text>
    </g>

    <!-- Editorial Status & Credential Telemetry Badges (Clear Non-Deceptive Indicators) -->
    <g transform="translate(46, 218)">
      <!-- Badge 1: Mindstrix Role -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="205" height="26" rx="13" fill="${theme.colors.primary}" />
        <circle cx="12" cy="13" r="3" fill="${theme.colors.malibuCyan}" />
        <text x="22" y="16.5" class="code-mono" font-size="8.5" font-weight="700" fill="#FFFFFF" letter-spacing="0.04em">
          AI/ML R&amp;D INTERN @ MINDSTRIX
        </text>
      </g>

      <!-- Badge 2: Academic Pedigree -->
      <g transform="translate(215, 0)">
        <rect x="0" y="0" width="145" height="26" rx="13" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="1" />
        <text x="72.5" y="16.5" text-anchor="middle" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.04em">
          PICT ENTC · CGPA 8.6
        </text>
      </g>

      <!-- Badge 3: TechFiesta Win -->
      <g transform="translate(370, 0)">
        <rect x="0" y="0" width="168" height="26" rx="13" fill="url(#hero_barbieGrad)" />
        <text x="84" y="16.5" text-anchor="middle" class="code-mono" font-size="8.5" font-weight="700" fill="#FFFFFF" letter-spacing="0.04em">
          ★ TECHFIESTA &apos;26 WINNER
        </text>
      </g>

      <!-- Badge 4: Pune Agri Hackathon -->
      <g transform="translate(548, 0)">
        <rect x="0" y="0" width="162" height="26" rx="13" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1" />
        <text x="81" y="16.5" text-anchor="middle" class="code-mono" font-size="8.5" font-weight="700" fill="#B45309" letter-spacing="0.04em">
          ★ ₹15L GRANT · AGRI HACK
        </text>
      </g>
    </g>

    <!-- Bottom Telemetry Specs Strip -->
    <g transform="translate(46, 292)">
      <!-- Separator line -->
      <line x1="0" y1="-14" x2="${width - 92}" y2="-14" stroke="${theme.colors.borderSubtle}" stroke-width="1" />

      <text x="0" y="0" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.06em">
        STATUS: <tspan fill="${theme.colors.success}" font-weight="700">● ACTIVE IN R&amp;D</tspan>
      </text>

      <text x="145" y="0" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.06em">
        REPOSITORIES: <tspan fill="${theme.colors.barbiePink}" font-weight="700">${publicRepos} PUBLIC</tspan>
      </text>

      <text x="325" y="0" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.06em">
        CORE STACK: <tspan fill="${theme.colors.deepCharcoal}" font-weight="700">${escapeXml(topLanguages)}</tspan>
      </text>

      <text x="${width - 92}" y="0" text-anchor="end" class="code-mono" font-size="9" font-weight="700" fill="${theme.colors.barbiePink}" letter-spacing="0.1em">
        HAUTE COUTURE ENGINEERING
      </text>
    </g>

    <!-- Restrained Luxury Glint Sparkles -->
    ${renderSparkle(width - 80, 110, 14, theme.colors.barbiePink)}
    ${renderSparkle(width - 190, 180, 11, theme.colors.dreamhouseBlush)}
    ${renderSparkle(width - 110, 240, 10, theme.colors.malibuCyan)}
    ${renderSparkle(310, 78, 9, theme.colors.barbiePink)}
  </svg>`;
}
