import React from 'react';
import SectionHeader from './SectionHeader';
import TimelineItem from './TimelineItem';
import { PROFILE } from '../data/profile';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="EXPERIENCE &amp; EDUCATION"
          title="Industry Experience &amp;"
          highlightWord="Academic Pedigree"
          subtitle="Applied R&amp;D engineering experience combined with rigorous technical education at PICT Pune."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {/* Industry Experience */}
          <TimelineItem
            role="AI/ML Research &amp; Development Intern"
            institution="Mindstrix Technologies LLP"
            period="Mar 2026 – Ongoing"
            badge="CURRENT INTERNSHIP"
            location="Remote / Hybrid"
            highlights={[
              'Contribute to application software development across the SDLC on live AI/ML and software platform projects under mentor guidance.',
              'Design and code program modules for data processing, model training, and system integration; prepare test data and execute test cases.',
              'Collaborate in an Agile team environment through technical reviews, brainstorming sessions, and cross-functional product development.'
            ]}
          />

          {/* Academic Pedigree */}
          <TimelineItem
            role="B.Tech in Electronics &amp; Telecommunication"
            institution="Pune Institute of Computer Technology (PICT)"
            period="2024 – 2028"
            badge="CGPA: 8.6 / 10"
            location="Pune, Maharashtra"
            highlights={[
              'Third-year undergraduate specializing in signal processing, communication systems, embedded hardware, and algorithmic computation.',
              'Higher Secondary Certificate (HSC): 89.83% | Secondary School Certificate (SSC): 96.40%.',
              'Active in competitive coding, technical hackathons, and hardware-software system integration.'
            ]}
          />
        </div>
      </div>
    </section>
  );
}
