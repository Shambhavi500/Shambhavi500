import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Sparkles,
  Award,
  Github,
  Linkedin,
  Mail,
  Code2,
  Brain,
  Globe,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import { SOCIAL_LINKS } from '../data/socialLinks';
import SectionHeader from './SectionHeader';
import DecorativeSparkle from './DecorativeSparkle';

export default function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="ABOUT ME"
          title="Engineering Practical Solutions for"
          highlightWord="Real-World Impact"
          subtitle="Third-year ENTC undergraduate at PICT Pune with a focus on Software Development, AI/ML, and Data Structures & Algorithms."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start',
            marginBottom: '40px'
          }}
          className="about-grid-layout"
        >
          {/* LEFT: Profile Identity Card */}
          <div
            className="glass-panel"
            style={{
              padding: '36px 28px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5FA 100%)',
              border: '1px solid rgba(224, 33, 138, 0.28)'
            }}
          >
            {/* Top Decorative Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(224, 33, 138, 0.08)',
                border: '1px solid rgba(224, 33, 138, 0.2)',
                marginBottom: '20px'
              }}
            >
              <DecorativeSparkle size={10} color="var(--primary-hot-pink)" />
              <span className="mono-label" style={{ fontSize: '10px', color: 'var(--deep-pink)', letterSpacing: '0.08em' }}>
                SHAMBHAVI PATIL · PICT PUNE
              </span>
            </div>

            {/* Avatar / Monogram */}
            <div
              style={{
                width: '110px',
                height: '110px',
                margin: '0 auto 20px auto',
                borderRadius: '50%',
                padding: '4px',
                background: 'linear-gradient(135deg, var(--barbie-pink) 0%, var(--primary-hot-pink) 50%, var(--deep-pink) 100%)',
                boxShadow: '0 8px 24px rgba(224, 33, 138, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {!imgError ? (
                <img
                  src={PROFILE.avatarUrl}
                  alt={PROFILE.name}
                  onError={() => setImgError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    background: '#FFFFFF'
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FFEBF3, #FFF0F6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: 800,
                    color: 'var(--primary-hot-pink)'
                  }}
                >
                  {PROFILE.initials}
                </div>
              )}
            </div>

            {/* Name & Academic Title */}
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: 'var(--text-main)',
                marginBottom: '6px'
              }}
            >
              {PROFILE.name}
            </h3>

            <p
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--primary-hot-pink)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.04em',
                marginBottom: '4px'
              }}
            >
              {PROFILE.education.yearLevel}
            </p>

            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                marginBottom: '16px'
              }}
            >
              {PROFILE.education.institution}
            </p>

            {/* Verification Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                background: '#FFFFFF',
                border: '1px solid var(--border-pink)',
                marginBottom: '20px',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00E676' }} />
              <span
                className="mono-label"
                style={{ fontSize: '11px', color: 'var(--text-main)', fontWeight: 700 }}
              >
                VERIFIED BUILDER · CGPA {PROFILE.education.cgpa}
              </span>
            </div>

            {/* Core Pill */}
            <div
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-pill)',
                background: '#FFEBF3',
                border: '1px solid rgba(224, 33, 138, 0.24)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--deep-pink)',
                marginBottom: '24px',
                letterSpacing: '0.04em'
              }}
            >
              AI/ML • SOFTWARE DEVELOPMENT • DSA
            </div>

            {/* Key Metadata Stack */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                textAlign: 'left',
                marginBottom: '24px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid var(--border-pink)'
                }}
              >
                <GraduationCap size={18} style={{ color: 'var(--primary-hot-pink)', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    ACADEMICS
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                    B.Tech ENTC (CGPA: {PROFILE.education.cgpa})
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid var(--border-pink)'
                }}
              >
                <Briefcase size={18} style={{ color: 'var(--primary-hot-pink)', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    INDUSTRY R&amp;D INTERN
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                    Mindstrix Technologies LLP
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid var(--border-pink)'
                }}
              >
                <MapPin size={18} style={{ color: 'var(--primary-hot-pink)', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    LOCATION
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                    Pune, Maharashtra, India
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Action Links */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'center'
              }}
            >
              <a
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid var(--border-pink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'all 0.18s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
                  e.currentTarget.style.color = 'var(--primary-hot-pink)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-pink)';
                  e.currentTarget.style.color = 'var(--text-main)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Github size={17} />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid var(--border-pink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'all 0.18s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
                  e.currentTarget.style.color = 'var(--primary-hot-pink)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-pink)';
                  e.currentTarget.style.color = 'var(--text-main)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={17} />
              </a>

              <a
                href={SOCIAL_LINKS.email.url}
                title="Email Direct"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid var(--border-pink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'all 0.18s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
                  e.currentTarget.style.color = 'var(--primary-hot-pink)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-pink)';
                  e.currentTarget.style.color = 'var(--text-main)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* RIGHT: About Content & Verified Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Statement Header */}
            <div style={{ marginBottom: '4px' }}>
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  letterSpacing: '-0.01em',
                  marginBottom: '4px'
                }}
              >
                ARCHITECTING IMPACT THROUGH CODE &amp; SILICON
              </div>
              <div
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--primary-hot-pink)',
                  fontWeight: 700,
                  letterSpacing: '0.08em'
                }}
              >
                // PUNE INSTITUTE OF COMPUTER TECHNOLOGY (PICT) · B.TECH ENTC
              </div>
            </div>

            {/* Narrative Card 1: Academic & Focus */}
            <div
              className="glass-panel"
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-card)',
                borderLeft: '4px solid var(--primary-hot-pink)',
                background: '#FFFFFF'
              }}
            >
              <p style={{ fontSize: '14.5px', color: 'var(--text-main)', lineHeight: 1.75 }}>
                I’m a third-year Electronics and Telecommunication Engineering student at{' '}
                <strong style={{ color: 'var(--deep-pink)' }}>PICT, Pune</strong>, with a strong interest in{' '}
                <span className="barbie-highlight">Software Development</span>,{' '}
                <span className="barbie-highlight">AI/ML</span>, and{' '}
                <span className="barbie-highlight">Data Structures &amp; Algorithms</span>. Although my academic
                background is in <strong style={{ color: 'var(--deep-pink)' }}>ENTC</strong>, I’ve been actively exploring
                the software and AI space through <span className="barbie-highlight">projects</span>,{' '}
                <span className="barbie-highlight">hackathons</span>, <span className="barbie-highlight">research</span>,
                and hands-on learning.
              </p>
            </div>

            {/* Narrative Card 2: Practical Solutions & Tech */}
            <div
              className="glass-panel"
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-card)',
                borderLeft: '4px solid var(--barbie-pink)',
                background: '#FFFFFF'
              }}
            >
              <p style={{ fontSize: '14.5px', color: 'var(--text-main)', lineHeight: 1.75 }}>
                I enjoy building practical solutions that use technology to solve{' '}
                <span className="barbie-highlight">real-world problems</span>. My work has included AI-driven agricultural
                systems, <span className="barbie-highlight">Computer Vision</span>, mobile applications, and{' '}
                <span className="barbie-highlight">Cybersecurity</span>-focused projects. I’ve worked with technologies such
                as <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>C++</code>,{' '}
                <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>Python</code>,{' '}
                <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>Java</code>,{' '}
                <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>JavaScript</code>,{' '}
                <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>Git/GitHub</code>,{' '}
                <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>Android</code>, and
                machine learning tools, while continuously improving my problem-solving and DSA skills.
              </p>
            </div>

            {/* Narrative Card 3: Hackathon Learning & Leadership */}
            <div
              className="glass-panel"
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-card)',
                borderLeft: '4px solid var(--primary-hot-pink)',
                background: '#FFFFFF'
              }}
            >
              <p style={{ fontSize: '14.5px', color: 'var(--text-main)', lineHeight: 1.75 }}>
                <span className="barbie-highlight">Hackathons</span> have been an important part of my learning journey.
                I was part of the winning team at <strong style={{ color: 'var(--deep-pink)' }}>TechFiesta 2026</strong> in
                the Agriculture domain and also secured <strong style={{ color: 'var(--deep-pink)' }}>Runner-Up</strong> at
                the <strong style={{ color: 'var(--deep-pink)' }}>Pune Agri International Hackathon</strong>, where our
                AI-powered agricultural governance solution was presented to senior government officials. These experiences
                have taught me how to work in a team, build under deadlines, take an idea from a problem statement to a
                working prototype, and improve it through testing and feedback.
              </p>
            </div>

            {/* Narrative Card 4: Philosophy & Career Vision */}
            <div
              className="glass-panel"
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-card)',
                borderLeft: '4px solid var(--deep-pink)',
                background: '#FFFFFF'
              }}
            >
              <p style={{ fontSize: '14.5px', color: 'var(--text-main)', lineHeight: 1.75 }}>
                I believe the best way to learn engineering is by building, experimenting, debugging, and improving real
                systems rather than only studying theory. Currently, I’m focused on strengthening my software, AI/ML and DSA
                fundamentals, gaining industry experience through internships, and building technically strong projects that
                have <span className="barbie-highlight">real-world impact</span>. In the long term, I want to build a strong
                career in technology and continue growing as an engineer.
              </p>
            </div>

            {/* 3 Strategic Pillars Row matching the Identity Card */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                marginTop: '10px'
              }}
            >
              {/* Pillar 1 */}
              <a
                href="https://github.com/Shambhavi500/Ovio"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-pink)',
                  borderRadius: '14px',
                  padding: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.18s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-subtle)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(224, 33, 138, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-pink)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span className="mono-label" style={{ fontSize: '10px', color: 'var(--primary-hot-pink)', fontWeight: 700 }}>
                    01 / AGENTIC AI
                  </span>
                  <Brain size={14} style={{ color: 'var(--primary-hot-pink)' }} />
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
                  Autonomous Systems
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  Multi-agent workflows &amp; intelligent automation (Ovio)
                </div>
              </a>

              {/* Pillar 2 */}
              <a
                href="https://github.com/Shambhavi500/KrishiSahAI"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-pink)',
                  borderRadius: '14px',
                  padding: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.18s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-subtle)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(224, 33, 138, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-pink)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span className="mono-label" style={{ fontSize: '10px', color: 'var(--primary-hot-pink)', fontWeight: 700 }}>
                    02 / EARTH &amp; AGRI
                  </span>
                  <Globe size={14} style={{ color: 'var(--primary-hot-pink)' }} />
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
                  Precision AgriTech
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  Satellite spectral analysis &amp; AI advisory (KrishiSahAI)
                </div>
              </a>

              {/* Pillar 3 */}
              <a
                href="https://github.com/Shambhavi500/Aira"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-pink)',
                  borderRadius: '14px',
                  padding: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.18s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-subtle)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(224, 33, 138, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-pink)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span className="mono-label" style={{ fontSize: '10px', color: 'var(--primary-hot-pink)', fontWeight: 700 }}>
                    03 / QUANT &amp; FINTECH
                  </span>
                  <TrendingUp size={14} style={{ color: 'var(--primary-hot-pink)' }} />
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
                  Autonomous FinTech
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  Reinforcement learning &amp; revenue recovery OS (AIRA)
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .barbie-highlight {
          color: var(--deep-pink);
          font-weight: 700;
          background: rgba(224, 33, 138, 0.08);
          padding: 1px 6px;
          border-radius: 4px;
          border-bottom: 2px solid var(--primary-hot-pink);
        }
        @media (min-width: 900px) {
          .about-grid-layout {
            grid-template-columns: 340px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
