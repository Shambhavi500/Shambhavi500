import { escapeXml } from './theme.js';

export function generateReadme(data) {
  const username = data.username || 'Shambhavi500';
  const name = data.name || 'Shambhavi Patil';
  const email = data.email || 'shambhavipatil5631@gmail.com';
  const linkedinUrl = data.linkedinUrl || 'https://www.linkedin.com/in/shambhavi-patil05/';
  const projects = data.projects || [];

  // Generate dynamic markdown table rows from ranked showcase projects
  const projectRows = projects.map(p => {
    const badgeText = p.tag ? ` \`${p.tag}\`` : '';
    const cleanDesc = (p.highlight || p.description || '').replace(/\|/g, '\\|');
    return `| **[${p.name}](https://github.com/${username}/${p.name})** | \`${p.category}\` | **${p.language}** | ${cleanDesc}${badgeText} |`;
  }).join('\n');

  return `<div align="center">

<!-- 01. HERO SECTION // ATELIER NO. 500 -->
<a href="https://github.com/${username}">
  <img src="./assets/hero.svg" alt="${name} - Luxury Barbie-Inspired Engineering Portfolio" width="100%" />
</a>

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 02. THE PERSON // ENGINEERING PROFILE & FOCUS -->
<a href="https://github.com/${username}">
  <img src="./assets/identity.svg" alt="The Person - Shambhavi Patil Profile &amp; Focus" width="100%" />
</a>

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 03. THE WINS // HACKATHONS & ENGINEERING HONORS -->
<a href="https://github.com/${username}">
  <img src="./assets/achievements.svg" alt="The Wins - Hackathon Honors &amp; Recognitions" width="100%" />
</a>

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 04. PROFESSIONAL EDIT // INDUSTRY APPOINTMENT & ACADEMICS -->
<a href="${linkedinUrl}">
  <img src="./assets/experience.svg" alt="Professional Edit - Mindstrix Technologies LLP AI/ML Intern &amp; PICT ENTC" width="100%" />
</a>

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 05. THE WORK // FEATURED PROJECTS & ARCHITECTURES -->
<a href="https://github.com/${username}?tab=repositories">
  <img src="./assets/projects.svg" alt="The Work - Featured Projects &amp; Architectures" width="100%" />
</a>

</div>

### ✦ Curated Atelier Architectures

| Project | Domain / Category | Primary Architecture | Description & Recognition |
| :--- | :--- | :--- | :--- |
${projectRows}

<div align="center">

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 06. THE TELEMETRY // SYSTEM METRICS & TECH DISTRIBUTION -->
<a href="https://github.com/${username}?tab=repositories">
  <img src="./assets/dashboard.svg" alt="The Telemetry - System Metrics &amp; Stack Distribution" width="100%" />
</a>

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 07. THE LAB // AI/ML & ENGINEERING STACK -->
<a href="https://github.com/${username}?tab=repositories">
  <img src="./assets/tech-wardrobe.svg" alt="The Lab - AI/ML &amp; Engineering Stack" width="100%" />
</a>

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 08. THE BUILD LOG // ACTIVITY RUNWAY & CADENCE -->
<a href="https://github.com/${username}">
  <img src="./assets/runway.svg" alt="The Build Log - Activity Runway &amp; Cadence" width="100%" />
</a>

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 09. THE CLOSING // HAUTE COUTURE SIGNATURE -->
<a href="mailto:${email}">
  <img src="./assets/footer.svg" alt="The Closing - Shambhavi Patil Portfolio" width="100%" />
</a>

<br/><br/>

[![GitHub](https://img.shields.io/badge/GitHub-Shambhavi500-E0218A?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${username})
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Shambhavi_Patil-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](${linkedinUrl})
[![Email](https://img.shields.io/badge/Email-shambhavipatil5631%40gmail.com-111116?style=for-the-badge&logo=gmail&logoColor=FF2D87)](mailto:${email})
[![Status](https://img.shields.io/badge/Status-AI%2FML_R%26D_Intern_%40Mindstrix-E0218A?style=for-the-badge)](https://github.com/${username})

<br/><br/>

<sub>Curated with intention &amp; precision in the <b>Atelier No. 500</b>. Where Autonomous Intelligence Meets Haute Couture Engineering.</sub>

</div>
`;
}
