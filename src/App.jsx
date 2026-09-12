import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import RepositoriesSection from './components/RepositoriesSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Subtle Grid Overlay */}
      <div className="editorial-grid-overlay" aria-hidden="true" />

      {/* Fixed Navigation */}
      <Navigation />

      {/* Main Content Flow */}
      <main id="main-content">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <ExperienceSection />
        <SkillsSection />
        <RepositoriesSection />
        <StatsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
