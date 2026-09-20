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
          eyebrow="ACHIEVEMENTS &amp; HONORS"
          title="Hackathon Victories &amp;"
          highlightWord="National Grants"
          subtitle="Proven track record in competitive hackathons, transforming ideas from problem statements into working prototypes under strict deadlines."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
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
