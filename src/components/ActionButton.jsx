import React from 'react';

export default function ActionButton({
  href,
  onClick,
  target,
  rel,
  children,
  icon: Icon,
  variant = 'primary',
  className = '',
  style = {}
}) {
  const isExternal = href && (href.startsWith('http') || href.startsWith('mailto:'));
  const targetAttr = target || (isExternal && !href.startsWith('mailto:') ? '_blank' : undefined);
  const relAttr = rel || (targetAttr === '_blank' ? 'noopener noreferrer' : undefined);

  // Variant styling
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isOutline = variant === 'outline';

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '9px',
    padding: '12px 22px',
    borderRadius: 'var(--radius-pill)',
    fontSize: '13px',
    fontWeight: 700,
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    border: 'none',
    ...style
  };

  let variantStyles = {};
  if (isPrimary) {
    variantStyles = {
      background: 'linear-gradient(135deg, #E0218A 0%, #C21875 100%)',
      color: '#FFFFFF',
      boxShadow: '0 4px 18px rgba(224, 33, 138, 0.32)',
      border: '1px solid rgba(255, 255, 255, 0.4)'
    };
  } else if (isSecondary) {
    variantStyles = {
      background: 'rgba(255, 255, 255, 0.92)',
      color: 'var(--primary-hot-pink)',
      border: '1px solid var(--border-pink-strong)',
      boxShadow: '0 4px 14px rgba(224, 33, 138, 0.08)'
    };
  } else if (isOutline) {
    variantStyles = {
      background: 'transparent',
      color: 'var(--text-main)',
      border: '1px solid var(--border-pink)',
      boxShadow: 'none'
    };
  }

  const handleSmoothScroll = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <a
      href={href || '#'}
      onClick={handleSmoothScroll}
      target={targetAttr}
      rel={relAttr}
      className={`action-btn-barbie ${className}`}
      style={{
        ...baseStyles,
        ...variantStyles
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
        if (isPrimary) {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(224, 33, 138, 0.45)';
        } else {
          e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(224, 33, 138, 0.18)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = variantStyles.boxShadow || 'none';
        e.currentTarget.style.borderColor = variantStyles.border?.split(' ')[2] || 'transparent';
      }}
    >
      {Icon && <Icon size={16} strokeWidth={2.4} aria-hidden="true" />}
      <span>{children}</span>
    </a>
  );
}
