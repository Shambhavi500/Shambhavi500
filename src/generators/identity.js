import { getSharedDefs, renderSparkle, escapeXml, theme } from './theme.js';

const DEFAULT_ABOUT_ME = [
  "I’m a third-year Electronics and Telecommunication Engineering student at PICT, Pune, with a strong interest in Software Development, AI/ML, and Data Structures & Algorithms. Although my academic background is in ENTC, I’ve been actively exploring the software and AI space through projects, hackathons, research, and hands-on learning.",
  "I enjoy building practical solutions that use technology to solve real-world problems. My work has included AI-driven agricultural systems, computer vision, mobile applications, and cybersecurity-focused projects. I’ve worked with technologies such as C++, Python, Java, JavaScript, Git/GitHub, Android, and machine learning tools, while continuously improving my problem-solving and DSA skills.",
  "Hackathons have been an important part of my learning journey. I was part of the winning team at TechFiesta 2026 in the Agriculture domain and also secured Runner-Up at the Pune Agri International Hackathon, where our AI-powered agricultural governance solution was presented to senior government officials. These experiences have taught me how to work in a team, build under deadlines, take an idea from a problem statement to a working prototype, and improve it through testing and feedback.",
  "I believe the best way to learn engineering is by building, experimenting, debugging, and improving real systems rather than only studying theory. Currently, I’m focused on strengthening my software, AI/ML and DSA fundamentals, gaining industry experience through internships, and building technically strong projects that have real-world impact. In the long term, I want to build a strong career in technology and continue growing as an engineer."
];

function wrapText(text, maxChars = 82) {
  const words = text.split(' ');
  const lines = [];
  let current = '';

  for (const w of words) {
    if ((current + (current ? ' ' : '') + w).length <= maxChars) {
      current += (current ? ' ' : '') + w;
    } else {
      if (current) lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export function generateIdentitySvg(data = {}) {
  const width = 940;
  const height = 650;
  const username = data.username || 'Shambhavi500';
  const name = data.name || 'Shambhavi Patil';
  const institution = data.education ? data.education.institution : 'Pune Institute of Computer Technology (PICT)';
  const degree = data.education ? data.education.shortDegree : 'B.Tech ENTC';
  const cgpa = data.education ? data.education.cgpa : '8.6';

  const paragraphs = data.aboutMe || DEFAULT_ABOUT_ME;

  // Render paragraphs into SVG text lines
  let textY = 24;
  const lineHeight = 15.5;
  const paraGap = 10;
  let paragraphElements = '';

  paragraphs.forEach((p, pIdx) => {
    const lines = wrapText(p, 82);
    lines.forEach((line) => {
      paragraphElements += `
        <text x="20" y="${textY}" class="editorial-sans" font-size="10.8" fill="${theme.colors.deepCharcoal}" line-height="1.4">
          ${escapeXml(line)}
        </text>`;
      textY += lineHeight;
    });
    if (pIdx < paragraphs.length - 1) {
      textY += paraGap;
    }
  });

  const cardInnerHeight = Math.max(380, textY + 14);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" fill="none">
    ${getSharedDefs('ident_')}

    <!-- Light Studio Canvas Base -->
    <rect width="${width}" height="${height}" rx="${theme.radius.card}" fill="${theme.colors.background}" />

    <!-- Outer Card with Soft Glam Shadow -->
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" rx="${theme.radius.card}"
          fill="${theme.colors.surface}" stroke="${theme.colors.border}" stroke-width="1" filter="url(#ident_cardShadow)" />

    <!-- Section Header Tag -->
    <g transform="translate(42, 40)">
      <text x="0" y="0" class="code-mono" font-size="10.5" font-weight="700" fill="${theme.colors.retroMagenta}" letter-spacing="0.14em">
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
      <rect x="0" y="0" width="245" height="544" rx="16" fill="${theme.colors.accentBlush}" stroke="${theme.colors.border}" stroke-width="0.8" />

      <!-- Inner White Portrait Bezel -->
      <rect x="12" y="12" width="221" height="186" rx="12" fill="#FFFFFF" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />

      <!-- Monogram Art with Barbie Pink Accent Circle -->
      <circle cx="122.5" cy="58" r="32" fill="${theme.colors.accentBlush}" stroke="${theme.colors.borderPink}" stroke-width="1.5" />
      <text x="122.5" y="66" text-anchor="middle" class="editorial-title" font-size="20" font-weight="800" fill="${theme.colors.deepCharcoal}">
        SP
      </text>

      <!-- Verification Badge Pill -->
      <rect x="36" y="102" width="173" height="20" rx="10" fill="#FFFFFF" stroke="${theme.colors.borderPink}" stroke-width="0.8" />
      <circle cx="48" cy="112" r="3" fill="${theme.colors.success}" />
      <text x="58" y="115.5" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.deepCharcoal}" letter-spacing="0.06em">
        VERIFIED BUILDER · CGPA ${escapeXml(cgpa)}
      </text>

      <!-- Identity Meta beneath portrait -->
      <text x="122.5" y="146" text-anchor="middle" class="editorial-sans" font-size="15" font-weight="800" fill="${theme.colors.deepCharcoal}">
        ${escapeXml(name)}
      </text>
      <text x="122.5" y="166" text-anchor="middle" class="code-mono" font-size="9" font-weight="600" fill="${theme.colors.barbiePink}" letter-spacing="0.06em">
        @${escapeXml(username)} · ${escapeXml(degree)}
      </text>

      <!-- Quick Specs Card inside left column -->
      <g transform="translate(12, 210)">
        <rect x="0" y="0" width="221" height="152" rx="12" fill="#FFFFFF" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />
        <text x="14" y="20" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.barbiePink}" letter-spacing="0.1em">
          // ACADEMIC &amp; R&amp;D SNAPSHOT
        </text>

        <text x="14" y="42" class="editorial-sans" font-size="11" font-weight="700" fill="${theme.colors.deepCharcoal}">
          PICT Pune · B.Tech ENTC
        </text>
        <text x="14" y="58" class="code-mono" font-size="9" fill="${theme.colors.textMuted}">
          Third-Year Undergrad · CGPA 8.6
        </text>

        <line x1="14" y1="70" x2="207" y2="70" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />

        <text x="14" y="88" class="editorial-sans" font-size="11" font-weight="700" fill="${theme.colors.deepCharcoal}">
          Mindstrix Technologies LLP
        </text>
        <text x="14" y="104" class="code-mono" font-size="9" fill="${theme.colors.textMuted}">
          AI/ML R&amp;D Intern (Mar 2026–)
        </text>

        <line x1="14" y1="116" x2="207" y2="116" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />

        <text x="14" y="134" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.retroMagenta}">
          ★ TechFiesta '26 Winner · ₹15L Grant
        </text>
      </g>

      <!-- Domains Card inside left column -->
      <g transform="translate(12, 374)">
        <rect x="0" y="0" width="221" height="158" rx="12" fill="#FFFFFF" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />
        <text x="14" y="20" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.barbiePink}" letter-spacing="0.1em">
          // CORE COMPETENCIES
        </text>

        <text x="14" y="42" class="editorial-sans" font-size="10.5" font-weight="700" fill="${theme.colors.deepCharcoal}">
          Software Dev &amp; Systems
        </text>
        <text x="14" y="56" class="code-mono" font-size="9" fill="${theme.colors.textMuted}">
          C++, Python, Java, JavaScript
        </text>

        <line x1="14" y1="68" x2="207" y2="68" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />

        <text x="14" y="86" class="editorial-sans" font-size="10.5" font-weight="700" fill="${theme.colors.deepCharcoal}">
          AI/ML &amp; Computer Vision
        </text>
        <text x="14" y="100" class="code-mono" font-size="9" fill="${theme.colors.textMuted}">
          Reinforcement Learning, NDVI
        </text>

        <line x1="14" y1="112" x2="207" y2="112" stroke="${theme.colors.borderSubtle}" stroke-width="0.8" />

        <text x="14" y="130" class="editorial-sans" font-size="10.5" font-weight="700" fill="${theme.colors.deepCharcoal}">
          DSA &amp; Practical Problem Solving
        </text>
        <text x="14" y="144" class="code-mono" font-size="9" fill="${theme.colors.textMuted}">
          Git/GitHub, Android, Real Systems
        </text>
      </g>
    </g>

    <!-- Right Column: Editorial Bio & 3 Engineering Pillars -->
    <g transform="translate(315, 68)">
      <!-- Statement Heading -->
      <text x="0" y="18" class="display-title" font-size="18" font-weight="800" fill="${theme.colors.deepCharcoal}">
        ARCHITECTING IMPACT THROUGH CODE &amp; SILICON
      </text>
      <text x="0" y="34" class="code-mono" font-size="9" fill="${theme.colors.barbiePink}" font-weight="700" letter-spacing="0.08em">
        // ${escapeXml(institution.toUpperCase())} · ${escapeXml(degree.toUpperCase())}
      </text>

      <!-- Full About Me Narrative Card with Barbie Pink Hairline Accent -->
      <g transform="translate(0, 46)">
        <rect x="0" y="0" width="583" height="394" rx="12" fill="#FFFFFF" stroke="${theme.colors.border}" stroke-width="0.8" />
        <line x1="0" y1="0" x2="0" y2="394" stroke="url(#ident_barbieGrad)" stroke-width="4" />
        
        <!-- Render All 4 Paragraphs -->
        ${paragraphElements}
      </g>

      <!-- 3 Strategic Pillars of Shambhavi's Work -->
      <g transform="translate(0, 452)">
        <!-- Pillar 1: Autonomous AI -->
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="186" height="92" rx="12" fill="#FFFFFF" stroke="${theme.colors.border}" stroke-width="0.8" />
          <text x="14" y="22" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.barbiePink}" letter-spacing="0.1em">
            01 / AGENTIC AI
          </text>
          <text x="14" y="42" class="editorial-sans" font-size="12" font-weight="700" fill="${theme.colors.deepCharcoal}">
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
          <rect x="0" y="0" width="186" height="92" rx="12" fill="#FFFFFF" stroke="${theme.colors.border}" stroke-width="0.8" />
          <text x="14" y="22" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.barbiePink}" letter-spacing="0.1em">
            02 / EARTH &amp; AGRI
          </text>
          <text x="14" y="42" class="editorial-sans" font-size="12" font-weight="700" fill="${theme.colors.deepCharcoal}">
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
          <rect x="0" y="0" width="186" height="92" rx="12" fill="#FFFFFF" stroke="${theme.colors.border}" stroke-width="0.8" />
          <text x="14" y="22" class="code-mono" font-size="8.5" font-weight="700" fill="${theme.colors.barbiePink}" letter-spacing="0.1em">
            03 / QUANT &amp; FINTECH
          </text>
          <text x="14" y="42" class="editorial-sans" font-size="12" font-weight="700" fill="${theme.colors.deepCharcoal}">
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
    ${renderSparkle(width - 45, 65, 12, theme.colors.barbiePink)}
    ${renderSparkle(278, 600, 9, theme.colors.dreamhouseBlush)}
  </svg>`;
}
