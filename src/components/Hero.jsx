import React from 'react';
import {
  Sparkles,
  Linkedin,
  Mail,
  Github,
  Code2,
  GraduationCap,
  MapPin,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import { SOCIAL_LINKS } from '../data/socialLinks';
import ActionButton from './ActionButton';
import DecorativeSparkle from './DecorativeSparkle';

export default function Hero() {
  return (
    <header
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '60px',
        overflow: 'hidden'
      }}
    >


      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(32px, 5vw, 56px) clamp(24px, 5vw, 48px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Top Status Badge */}
          <div
            style={{
              position: 'absolute',
              top: '18px',
              right: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span
              className="mono-label"
              style={{
                fontSize: '10px',
                color: 'var(--deep-pink)',
                background: 'rgba(224, 33, 138, 0.08)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(224, 33, 138, 0.2)'
              }}
            >
              PICT PUNE · ENTC &apos;28
            </span>
          </div>

          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#FFEBF3',
              border: '1px solid rgba(224, 33, 138, 0.25)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              marginBottom: '20px'
            }}
          >
            <DecorativeSparkle size={12} color="var(--primary-hot-pink)" />
            <span
              className="mono-label"
              style={{
                color: 'var(--deep-pink)',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.1em'
              }}
            >
              ENGINEERING PORTFOLIO
            </span>
          </div>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '14px',
              color: 'var(--text-main)'
            }}
          >
            Hi, I&apos;m{' '}
            <span
              style={{
                color: 'var(--primary-hot-pink)',
                position: 'relative',
                display: 'inline-block'
              }}
            >
              Shambhavi Patil.
              <span
                style={{
                  position: 'absolute',
                  bottom: '4px',
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--primary-hot-pink), var(--barbie-pink), transparent)',
                  borderRadius: '2px',
                  opacity: 0.7
                }}
              />
            </span>
          </h1>

          {/* Supporting Discipline Subtitle */}
          <div
            style={{
              fontSize: 'clamp(14px, 2vw, 17px)',
              fontWeight: 700,
              color: 'var(--deep-pink)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em',
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            <span>Software Development</span>
            <span style={{ color: 'var(--soft-pink)' }}>·</span>
            <span>AI/ML</span>
            <span style={{ color: 'var(--soft-pink)' }}>·</span>
            <span>Data Structures &amp; Algorithms</span>
          </div>

          {/* Mission Tagline */}
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              marginBottom: '26px',
              fontWeight: 500,
              lineHeight: 1.55
            }}
          >
            Third-year Electronics &amp; Telecommunication student at PICT, Pune. Building practical solutions that use technology to solve real-world problems.
          </p>

          {/* Academic & Hackathon Highlights */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '32px'
            }}
          >
            <div className="barbie-badge">
              <GraduationCap size={13} strokeWidth={2.2} />
              <span>PICT Pune (CGPA 8.6)</span>
            </div>
            <div className="barbie-badge">
              <Trophy size={13} strokeWidth={2.2} style={{ color: 'var(--primary-hot-pink)' }} />
              <span>TechFiesta &apos;26 Winner</span>
            </div>
            <div className="barbie-badge">
              <Trophy size={13} strokeWidth={2.2} style={{ color: 'var(--primary-hot-pink)' }} />
              <span>Pune Agri Hackathon (₹15L Grant)</span>
            </div>
            <div className="barbie-badge">
              <MapPin size={13} strokeWidth={2.2} />
              <span>Pune, India</span>
            </div>
          </div>

          {/* Clean Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center'
            }}
          >
            <ActionButton
              href="#projects"
              variant="primary"
              icon={Sparkles}
            >
              SELECTED WORK
            </ActionButton>

            <ActionButton
              href={SOCIAL_LINKS.linkedin.url}
              variant="secondary"
              icon={Linkedin}
            >
              LINKEDIN
            </ActionButton>

            <ActionButton
              href={SOCIAL_LINKS.github.url}
              variant="secondary"
              icon={Github}
            >
              GITHUB
            </ActionButton>

            <ActionButton
              href={SOCIAL_LINKS.email.url}
              variant="secondary"
              icon={Mail}
            >
              EMAIL
            </ActionButton>
          </div>
        </div>
      </div>
    </header>
  );
}
