import React from 'react';
import { Mail, Linkedin, Github, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { SOCIAL_LINKS } from '../data/socialLinks';
import ActionButton from './ActionButton';
import DecorativeSparkle from './DecorativeSparkle';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{ position: 'relative', overflow: 'hidden', paddingTop: '40px', paddingBottom: '60px' }}>
      <div className="container">
        {/* Closing CTA Box */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(40px, 6vw, 64px) clamp(24px, 5vw, 48px)',
            borderRadius: 'var(--radius-card)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 235, 245, 0.95) 100%)',
            border: '1.5px solid rgba(224, 33, 138, 0.35)',
            boxShadow: '0 20px 50px rgba(224, 33, 138, 0.14)',
            textAlign: 'center',
            marginBottom: '60px',
            position: 'relative'
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-pill)',
              background: '#FFEBF3',
              border: '1px solid rgba(224, 33, 138, 0.25)',
              marginBottom: '20px'
            }}
          >
            <DecorativeSparkle size={12} color="var(--primary-hot-pink)" />
            <span className="mono-label" style={{ color: 'var(--deep-pink)', fontSize: '11px', fontWeight: 700 }}>
              INQUIRIES &amp; COLLABORATION
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4.5vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              color: 'var(--text-main)',
              lineHeight: 1.2
            }}
          >
            Let&apos;s Build Something That{' '}
            <span className="text-gradient-pink editorial-accent">
              Matters.
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 17px)',
              color: 'var(--text-secondary)',
              maxWidth: '620px',
              margin: '0 auto 32px auto',
              lineHeight: 1.6
            }}
          >
            Open to high-impact software engineering roles, AI/ML research internships, and ambitious engineering
            collaborations.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ActionButton
              href={SOCIAL_LINKS.email.url}
              variant="primary"
              icon={Mail}
            >
              SEND DIRECT EMAIL
            </ActionButton>

            <ActionButton
              href={SOCIAL_LINKS.linkedin.url}
              variant="secondary"
              icon={Linkedin}
            >
              CONNECT ON LINKEDIN
            </ActionButton>

            <ActionButton
              href={SOCIAL_LINKS.github.url}
              variant="secondary"
              icon={Github}
            >
              FOLLOW ON GITHUB
            </ActionButton>
          </div>
        </div>

        {/* Footer Meta & Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(224, 33, 138, 0.16)',
            paddingTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          {/* Brand & Attribution */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.06em',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '4px'
              }}
            >
              <span>SHAMBHAVI PATIL</span>
              <span style={{ color: 'var(--primary-hot-pink)' }}>//</span>
              <span style={{ color: 'var(--deep-pink)', fontSize: '11px' }}>PICT PUNE • ENTC</span>
            </div>
            <p
              style={{
                fontSize: '12px',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-editorial)'
              }}
            >
              Curated with intention &amp; precision by Shambhavi Patil.
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: 'var(--radius-pill)',
              background: '#FFFFFF',
              border: '1px solid var(--border-pink)',
              color: 'var(--deep-pink)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-subtle)',
              transition: 'all 0.18s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
              e.currentTarget.style.color = 'var(--primary-hot-pink)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-pink)';
              e.currentTarget.style.color = 'var(--deep-pink)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
