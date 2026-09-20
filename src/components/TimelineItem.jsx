import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function TimelineItem({
  role,
  institution,
  period,
  badge,
  location,
  highlights = []
}) {
  return (
    <div
      className="glass-panel"
      style={{
        padding: '28px 24px',
        borderRadius: 'var(--radius-card)',
        background: '#FFFFFF',
        border: '1px solid var(--border-pink)',
        position: 'relative'
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '12px'
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 800,
              color: 'var(--text-main)',
              marginBottom: '4px'
            }}
          >
            {role}
          </h3>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--primary-hot-pink)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {institution}
          </div>
        </div>

        {badge && (
          <span
            style={{
              padding: '4px 12px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(224, 33, 138, 0.08)',
              border: '1px solid rgba(224, 33, 138, 0.25)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--deep-pink)'
            }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Meta Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '12px',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)',
          marginBottom: '16px'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Calendar size={13} style={{ color: 'var(--primary-hot-pink)' }} />
          <span>{period}</span>
        </span>
        {location && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={13} style={{ color: 'var(--primary-hot-pink)' }} />
            <span>{location}</span>
          </span>
        )}
      </div>

      {/* Highlights List */}
      {highlights.length > 0 && (
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            fontSize: '13.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}
        >
          {highlights.map((h, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <CheckCircle2
                size={15}
                style={{ color: 'var(--primary-hot-pink)', flexShrink: 0, marginTop: '3px' }}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
