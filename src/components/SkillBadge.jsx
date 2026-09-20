import React from 'react';

export default function SkillBadge({ skill }) {
  const isPrimary = skill.primary;

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        padding: '8px 14px',
        borderRadius: '12px',
        background: isPrimary ? 'rgba(255, 255, 255, 0.95)' : '#FFF5FA',
        border: `1px solid ${isPrimary ? 'rgba(224, 33, 138, 0.35)' : 'var(--border-pink)'}`,
        boxShadow: isPrimary ? '0 2px 10px rgba(224, 33, 138, 0.08)' : 'none',
        transition: 'all 0.18s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(224, 33, 138, 0.16)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isPrimary ? 'rgba(224, 33, 138, 0.35)' : 'var(--border-pink)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = isPrimary ? '0 2px 10px rgba(224, 33, 138, 0.08)' : 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: isPrimary ? 'var(--primary-hot-pink)' : 'var(--deep-pink)',
            display: 'inline-block'
          }}
        />
        <span
          style={{
            fontSize: '13px',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-main)'
          }}
        >
          {skill.name}
        </span>
      </div>

      {skill.note && (
        <span
          style={{
            fontSize: '10.5px',
            color: 'var(--text-secondary)',
            marginTop: '3px'
          }}
        >
          {skill.note}
        </span>
      )}
    </div>
  );
}
