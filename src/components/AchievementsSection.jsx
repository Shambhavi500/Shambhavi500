import React from 'react';
import { ACHIEVEMENTS } from '../data/achievements';
import SectionHeader from './SectionHeader';
import AchievementCard from './AchievementCard';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-spacing" style={{ position: 'relative' }}>
      <span id="wins" style={{ position: 'absolute', top: '-100px', visibility: 'hidden' }} aria-hidden="true" />
      <div className="container">
        <SectionHeader
          eyebrow="HACKATHONS &amp; HONORS"
          title="Competitions &amp;"
          highlightWord="Achievements"
          subtitle="Building projects from ideas to working prototypes under deadlines."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px'
          }}
        >
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
