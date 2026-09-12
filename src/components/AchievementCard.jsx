import React from 'react';
import { Trophy, Award, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import DecorativeSparkle from './DecorativeSparkle';

export default function AchievementCard({ achievement }) {
  const isWinner = achievement.result === 'WINNER';

  return (
    <div
      className="glass-panel"
      style={{
        padding: '32px 28px',
        borderRadius: 'var(--radius-card)',
        background: isWinner
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 245, 250, 0.95) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 248, 252, 0.95) 100%)',
        border: `1.5px solid ${isWinner ? 'rgba(224, 33, 138, 0.38)' : 'rgba(224, 33, 138, 0.25)'}`,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Corner Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: isWinner
            ? 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(224, 33, 138, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div>
        {/* Top Badges Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '16px'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              background: isWinner ? 'linear-gradient(135deg, #FFFBEB, #FEF3C7)' : '#FFEBF3',
              border: `1px solid ${isWinner ? 'rgba(245, 158, 11, 0.4)' : 'rgba(224, 33, 138, 0.3)'}`,
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 800,
              color: isWinner ? '#B45309' : 'var(--deep-pink)',
              letterSpacing: '0.06em'
            }}
          >
            {isWinner ? (
              <Trophy size={14} style={{ color: '#D97706' }} />
            ) : (
              <Award size={14} style={{ color: 'var(--primary-hot-pink)' }} />
            )}
            <span>{achievement.resultBadge}</span>
          </div>

          <div
            className="mono-label"
            style={{
              fontSize: '11px',
              color: 'var(--text-secondary)',
              background: 'rgba(224, 33, 138, 0.06)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-hairline)'
            }}
          >
            {achievement.year}
          </div>
        </div>

        {/* Event Title */}
        <h3
          style={{
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            fontWeight: 800,
            color: 'var(--text-main)',
            marginBottom: '8px',
            lineHeight: 1.2
          }}
        >
          {achievement.event}
        </h3>

        {/* Domain & Scope */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '16px'
          }}
        >
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--primary-hot-pink)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em'
            }}
          >
            DOMAIN: {achievement.domain}
          </span>
          <span style={{ color: 'var(--border-pink)' }}>•</span>
          <span
            style={{
              fontSize: '12px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {achievement.scope}
          </span>
        </div>

        {/* Summary Description */}
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '20px'
          }}
        >
          {achievement.summary}
        </p>

        {/* Special Highlight Callout */}
        {achievement.presentationNote && (
          <div
            style={{
              padding: '12px 14px',
              borderRadius: '12px',
              background: 'rgba(224, 33, 138, 0.05)',
              border: '1px solid rgba(224, 33, 138, 0.2)',
              marginBottom: '20px',
              fontSize: '12.5px',
              fontWeight: 600,
              color: 'var(--deep-pink)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <CheckCircle2 size={16} style={{ color: 'var(--primary-hot-pink)', flexShrink: 0 }} />
            <span>{achievement.presentationNote}</span>
          </div>
        )}

        {achievement.grant && (
          <div
            style={{
              padding: '12px 14px',
              borderRadius: '12px',
              background: 'linear-gradient(90deg, rgba(254, 243, 199, 0.5), rgba(255, 235, 243, 0.5))',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              marginBottom: '20px',
              fontSize: '12.5px',
              fontWeight: 700,
              color: '#92400E',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Sparkles size={16} style={{ color: '#D97706', flexShrink: 0 }} />
            <span>Grant Secured: {achievement.grant}</span>
          </div>
        )}
      </div>

      {/* Footer / Associated Project CTA */}
      <div
        style={{
          borderTop: '1px solid rgba(224, 33, 138, 0.16)',
          paddingTop: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
            CHAMPION PROJECT:
          </span>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>
            {achievement.project}
          </div>
        </div>

        {achievement.projectUrl && (
          <a
            href={achievement.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(224, 33, 138, 0.08)',
              color: 'var(--primary-hot-pink)',
              border: '1px solid var(--border-pink-strong)',
              fontSize: '12px',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              textDecoration: 'none',
              transition: 'all 0.18s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-hot-pink)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(224, 33, 138, 0.08)';
              e.currentTarget.style.color = 'var(--primary-hot-pink)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>VIEW CODEBASE</span>
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}
