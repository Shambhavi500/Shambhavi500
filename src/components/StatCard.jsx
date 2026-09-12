import React from 'react';

export default function StatCard({
  value,
  label,
  sublabel,
  icon: Icon,
  trend
}) {
  return (
    <div
      className="glass-panel"
      style={{
        padding: '24px 20px',
        borderRadius: 'var(--radius-card)',
        background: '#FFFFFF',
        border: '1px solid var(--border-pink)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(224, 33, 138, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border-pink)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span
          className="mono-label"
          style={{
            fontSize: '10.5px',
            color: 'var(--text-secondary)',
            letterSpacing: '0.08em'
          }}
        >
          {label}
        </span>
        {Icon && (
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(224, 33, 138, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-hot-pink)'
            }}
          >
            <Icon size={16} />
          </div>
        )}
      </div>

      <div>
        <div
          style={{
            fontSize: 'clamp(28px, 3.5vw, 36px)',
            fontWeight: 800,
            fontFamily: 'var(--font-display)',
            color: 'var(--primary-hot-pink)',
            lineHeight: 1.1,
            marginBottom: '4px'
          }}
        >
          {value}
        </div>

        {sublabel && (
          <div
            style={{
              fontSize: '12px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
}
