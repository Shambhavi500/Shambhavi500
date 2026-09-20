import React from 'react';
import { SHOWCASE_PROJECTS } from '../data/projects';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="SELECTED WORK"
          title="Engineered Solutions &amp;"
          highlightWord="Real-World Impact"
          subtitle="Practical software systems, AI/ML models, and agricultural platforms built with clean architecture and empirical testing."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {SHOWCASE_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
