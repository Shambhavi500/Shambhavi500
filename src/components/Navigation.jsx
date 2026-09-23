import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socialLinks';

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'SELECTED WORK', href: '#projects', id: 'projects' },
  { label: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
  { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { label: 'TECH STACK', href: '#skills', id: 'skills' },
  { label: 'CONTACT', href: '#contact', id: 'contact' }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = NAV_ITEMS.map(item => item.id);
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled
          ? 'rgba(255, 245, 250, 0.92)'
          : 'rgba(255, 255, 255, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${isScrolled ? 'rgba(224, 33, 138, 0.28)' : 'rgba(224, 33, 138, 0.14)'}`,
        transition: 'all 0.25s ease',
        boxShadow: isScrolled ? '0 4px 20px rgba(224, 33, 138, 0.08)' : 'none'
      }}
      aria-label="Main Navigation"
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px'
        }}
      >
        {/* Brand Logo / Identity */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #E0218A 0%, #C21875 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 2px 10px rgba(224, 33, 138, 0.3)'
            }}
          >
            <Sparkles size={18} />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>SHAMBHAVI PATIL</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px'
          }}
          className="desktop-nav"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: isActive ? 800 : 600,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-pill)',
                  color: isActive ? 'var(--primary-hot-pink)' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(224, 33, 138, 0.09)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(224, 33, 138, 0.28)' : 'transparent'}`,
                  transition: 'all 0.18s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--primary-hot-pink)';
                    e.currentTarget.style.background = 'rgba(224, 33, 138, 0.04)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {item.label}
              </a>
            );
          })}

          {/* Quick CTA */}
          <a
            href={SOCIAL_LINKS.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: '8px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: 'var(--radius-pill)',
              background: 'linear-gradient(135deg, #E0218A 0%, #C21875 100%)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              boxShadow: '0 2px 10px rgba(224, 33, 138, 0.25)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(224, 33, 138, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(224, 33, 138, 0.25)';
            }}
          >
            <span>LINKEDIN</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="mobile-nav-toggle"
          style={{
            background: 'transparent',
            border: '1px solid var(--border-pink)',
            borderRadius: '10px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-hot-pink)',
            cursor: 'pointer'
          }}
          aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div
          style={{
            background: 'rgba(255, 245, 250, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-pink)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  color: isActive ? 'var(--primary-hot-pink)' : 'var(--text-main)',
                  background: isActive ? 'rgba(224, 33, 138, 0.12)' : '#FFFFFF',
                  border: `1px solid ${isActive ? 'var(--border-pink-strong)' : 'var(--border-pink)'}`
                }}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href={SOCIAL_LINKS.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '14px',
              borderRadius: 'var(--radius-pill)',
              background: 'linear-gradient(135deg, #E0218A 0%, #C21875 100%)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.08em',
              marginTop: '8px'
            }}
          >
            <span>CONNECT ON LINKEDIN</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}

      {/* Responsive media query helper injected inline */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
