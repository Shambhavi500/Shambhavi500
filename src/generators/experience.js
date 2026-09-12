import { getSharedDefs, renderSparkle, escapeXml, theme } from './theme.js';

export function generateExperienceSvg(data) {
  const width = 940;
  const height = 320;
  const exp = (data.experience && data.experience[0]) || {
    company: 'Mindstrix Technologies LLP',
    role: 'AI/ML Research & Development Intern',
    status: 'Mar 2026 – Ongoing',
    mode: 'Remote / Hybrid'
  };
  const edu = data.education || {
    institution: 'Pune Institute of Computer Technology (PICT)',
    degree: 'B.Tech in Electronics & Telecommunication Engineering',
    period: 'Aug 2024 – May 2028',
    cgpa: '8.6',
    location: 'Pune, Maharashtra',
    schooling: { hsc: '89.83%', ssc: '96.40%' }
  };
  const schooling = edu.schooling || { hsc: '89.83%', ssc: '96.40%' };

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('exp_')}
    
    <!-- Light Studio Canvas Base -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card}" fill="${theme.colors.background}" />
    <rect width="${width}" height="${height}" rx="${theme.radius.card}" fill="url(#exp_radialAura)" />

    <!-- Outer Frame with Soft Glam Shadow -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="${theme.radius.card}"
          fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="1" filter="url(#exp_cardShadow)" />

    <!-- Section Header Line -->
    <g transform="translate(42, 42)">
      <text x="0" y="0" class="code-mono" font-size="10.5" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.14em">
        PROFESSIONAL EDIT // INDUSTRY APPOINTMENT &amp; ACADEMICS
      </text>
      <text x="0" y="18" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.08em">
        AI/ML R&amp;D INTERNSHIP · PICT ENTC UNDERGRADUATE PEDIGREE · APPLIED SYSTEMS
      </text>
    </g>

    <g transform="translate(${width - 42}, 42)">
      <text x="0" y="0" text-anchor="end" class="code-mono" font-size="9" fill="${theme.colors.textMuted}" letter-spacing="0.1em">
        CURRENT CADENCE
      </text>
      <text x="0" y="18" text-anchor="end" class="code-mono" font-size="8.5" fill="${theme.colors.success}" font-weight="700">
        ● ACTIVE ENGAGEMENTS
      </text>
    </g>

    <!-- Header Divider Line -->
    <line x1="42" y1="68" x2="${width - 42}" y2="68" stroke="${theme.colors.borderSubtle}" stroke-width="1" />

    <!-- Card 1: Internship (Mindstrix Technologies LLP) -->
    <g transform="translate(42, 82)">
      <rect x="0" y="0" width="460" height="212" rx="20" fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="0.9" />
      <rect x="0" y="0" width="460" height="3.5" rx="1.75" fill="url(#exp_barbieGrad)" />

      <!-- Edition Tag -->
      <g transform="translate(16, 22)">
        <rect x="0" y="0" width="168" height="20" rx="10" fill="${theme.colors.accentBlush}" stroke="${theme.colors.borderPink}" stroke-width="0.8" />
        <circle cx="10" cy="10" r="3" fill="${theme.colors.success}">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="20" y="13.5" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.1em">
          INDUSTRY R&amp;D INTERNSHIP
        </text>
      </g>

      <!-- Company & Role -->
      <g transform="translate(16, 66)">
        <text x="0" y="0" class="display-title" font-size="18" font-weight="800" fill="${theme.colors.deepCharcoal}">
          ${escapeXml(exp.company.toUpperCase())}
        </text>
        <text x="0" y="20" class="editorial-sans" font-size="13" font-weight="700" fill="${theme.colors.barbiePink}">
          ${escapeXml(exp.role)}
        </text>
        <text x="0" y="36" class="code-mono" font-size="9" fill="${theme.colors.textMuted}">
          ${escapeXml(exp.status)} · ${escapeXml(exp.mode)}
        </text>
      </g>

      <!-- Verified Responsibilities -->
      <g transform="translate(16, 126)">
        <circle cx="4" cy="5" r="2.5" fill="${theme.colors.barbiePink}" />
        <text x="14" y="8" class="editorial-sans" font-size="10.5" fill="${theme.colors.textSecondary}">
          Full SDLC contribution on live AI/ML &amp; software platform projects.
        </text>

        <circle cx="4" cy="25" r="2.5" fill="${theme.colors.barbiePink}" />
        <text x="14" y="28" class="editorial-sans" font-size="10.5" fill="${theme.colors.textSecondary}">
          Designing modules for data processing, model training &amp; integration.
        </text>

        <circle cx="4" cy="45" r="2.5" fill="${theme.colors.barbiePink}" />
        <text x="14" y="48" class="editorial-sans" font-size="10.5" fill="${theme.colors.textSecondary}">
          Agile technical reviews, test execution &amp; cross-functional teamwork.
        </text>
      </g>

      <!-- Verified Metric Footer -->
      <g transform="translate(16, 186)">
        <rect x="0" y="-12" width="200" height="22" rx="11" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />
        <circle cx="12" cy="-1" r="3" fill="${theme.colors.barbiePink}" />
        <text x="22" y="2.5" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.deepCharcoal}">
          SDLC · ML MODEL PIPELINES
        </text>
        <text x="428" y="2.5" text-anchor="end" class="code-mono" font-size="8.5" fill="${theme.colors.success}" font-weight="700">
          ● ONGOING PRACTICE
        </text>
      </g>
    </g>

    <!-- Card 2: Academic Pedigree (PICT) -->
    <g transform="translate(522, 82)">
      <rect x="0" y="0" width="376" height="212" rx="20" fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="0.9" />
      <rect x="0" y="0" width="376" height="3.5" rx="1.75" fill="url(#exp_barbieGrad)" />

      <!-- Edition Tag -->
      <g transform="translate(16, 22)">
        <rect x="0" y="0" width="168" height="20" rx="10" fill="${theme.colors.accentBlush}" stroke="${theme.colors.borderPink}" stroke-width="0.8" />
        <circle cx="10" cy="10" r="3" fill="${theme.colors.barbiePink}" />
        <text x="20" y="13.5" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.1em">
          ACADEMIC FOUNDATION
        </text>
      </g>

      <!-- University & Degree -->
      <g transform="translate(16, 66)">
        <text x="0" y="0" class="display-title" font-size="16" font-weight="800" fill="${theme.colors.deepCharcoal}">
          PICT PUNE
        </text>
        <text x="0" y="20" class="editorial-sans" font-size="12" font-weight="700" fill="${theme.colors.deepCharcoal}">
          B.Tech, Electronics &amp; Telecommunication
        </text>
        <text x="0" y="36" class="code-mono" font-size="9" fill="${theme.colors.textMuted}">
          ${escapeXml(edu.period)} · ${escapeXml(edu.location)}
        </text>
      </g>

      <!-- Academic Standing & Extracurriculars -->
      <g transform="translate(16, 126)">
        <rect x="0" y="-8" width="140" height="24" rx="12" fill="${theme.colors.accentBlush}" stroke="${theme.colors.borderPink}" stroke-width="0.8" />
        <text x="70" y="8" text-anchor="middle" class="code-mono" font-size="10" font-weight="800" fill="${theme.colors.barbiePink}">
          CGPA: ${escapeXml(edu.cgpa)} / 10.0
        </text>

        <text x="0" y="32" class="code-mono" font-size="9" fill="${theme.colors.textMuted}">
          HSC: ${escapeXml(schooling.hsc)} · SSC: ${escapeXml(schooling.ssc)}
        </text>

        <text x="0" y="48" class="editorial-sans" font-size="10.5" fill="${theme.colors.textSecondary}">
          Extracurricular: Volunteer @ NGO UPAY · Zonal Chess
        </text>
      </g>

      <!-- Verified Metric Footer -->
      <g transform="translate(16, 186)">
        <rect x="0" y="-12" width="160" height="22" rx="11" fill="#F8FAFC" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />
        <circle cx="12" cy="-1" r="3" fill="${theme.colors.barbiePink}" />
        <text x="22" y="2.5" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.deepCharcoal}">
          CLASS OF 2028 · ENTC
        </text>
        <text x="344" y="2.5" text-anchor="end" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.barbiePink}">
          VERIFIED &#10003;
        </text>
      </g>
    </g>

    <!-- Restrained Luxury Glint Sparkles -->
    ${renderSparkle(width - 36, 42, 11, theme.colors.barbiePink)}
    ${renderSparkle(width / 2, 44, 10, theme.colors.dreamhouseBlush)}
  </svg>`;
}
