import React from 'react';
import { Code2, Brain, Cpu, Terminal, Layers, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';
import SectionHeader from './SectionHeader';
import SkillBadge from './SkillBadge';

const CATEGORY_ICONS = {
  'PROGRAMMING LANGUAGES': Code2,
  'AI & MACHINE LEARNING': Brain,
  'DEVELOPMENT & EMBEDDED': Cpu,
  'TOOLS & INFRASTRUCTURE': Terminal,
  'CORE ENGINEERING & FOUNDATIONS': Layers
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="TECH STACK &amp; SKILLS"
          title="Technical Stack &amp;"
          highlightWord="Engineering Fundamentals"
          subtitle="Core languages, AI/ML tools, and frameworks applied across software systems, mobile apps, and hackathon projects."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.category] || Sparkles;

            return (
              <div
                key={cat.category}
                className="glass-panel"
                style={{
                  padding: '28px 24px',
                  borderRadius: 'var(--radius-card)',
                  background: '#FFFFFF',
                  border: '1px solid var(--border-pink)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '10px'
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(224, 33, 138, 0.08)',
                      border: '1px solid var(--border-pink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-hot-pink)'
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '15px',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-main)',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '12.5px',
                    color: 'var(--text-secondary)',
                    marginBottom: '18px',
                    lineHeight: 1.5
                  }}
                >
                  {cat.description}
                </p>

                {/* Badges Container */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginTop: 'auto'
                  }}
                >
                  {cat.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
