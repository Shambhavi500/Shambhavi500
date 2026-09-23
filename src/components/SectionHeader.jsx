import React from 'react';
import DecorativeSparkle from './DecorativeSparkle';

export default function SectionHeader({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  align = 'center',
  className = ''
}) {
  return (
    <div
      className={`section-header ${className}`}
      style={{
        textAlign: align,
        marginBottom: '44px',
        maxWidth: align === 'center' ? '820px' : '100%',
        marginInline: align === 'center' ? 'auto' : '0'
      }}
    >
      {eyebrow && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px'
          }}
        >
          <DecorativeSparkle size={12} color="var(--primary-hot-pink)" />
          <span
            className="mono-label"
            style={{
              color: 'var(--deep-pink)',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.12em'
            }}
          >
            {eyebrow}
          </span>
          <DecorativeSparkle size={12} color="var(--primary-hot-pink)" />
        </div>
      )}

      <h2
        style={{
          fontSize: 'clamp(26px, 4vw, 38px)',
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: subtitle ? '14px' : '0',
          letterSpacing: '-0.02em',
          color: 'var(--text-main)'
        }}
      >
        {title}{' '}
        {highlightWord && (
          <span className="text-hot-pink">
            {highlightWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            margin: align === 'center' ? '0 auto' : '0',
            lineHeight: 1.6
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
