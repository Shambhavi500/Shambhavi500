import React from 'react';
import { Star, GitFork, ExternalLink, Calendar, Code } from 'lucide-react';

const LANGUAGE_COLORS = {
  Python: '#3572A5',
  TypeScript: '#3178C6',
  JavaScript: '#F1E05A',
  Kotlin: '#A97BFF',
  'C++': '#F34B7D',
  C: '#555555',
  HTML: '#E34C26',
  'Multi-stack': '#E0218A'
};

export default function RepositoryCard({ repo }) {
  const langColor = LANGUAGE_COLORS[repo.language] || '#E0218A';

  const formattedDate = repo.updatedAt
    ? new Date(repo.updatedAt).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      })
    : 'Recent';

  return (
    <div
      className="glass-panel"
      style={{
        padding: '24px',
        borderRadius: 'var(--radius-card)',
        background: '#FFFFFF',
        border: '1px solid var(--border-pink)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.22s ease',
        height: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(224, 33, 138, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border-pink)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      }}
    >
      <div>
        {/* Repo Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            marginBottom: '10px'
          }}
        >
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--text-main)',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary-hot-pink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-main)';
            }}
          >
            <span>{repo.name}</span>
            <ExternalLink size={14} style={{ color: 'var(--primary-hot-pink)' }} />
          </a>

          {repo.tag && (
            <span
              style={{
                fontSize: '9.5px',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-pill)',
                background: '#FFEBF3',
                color: 'var(--deep-pink)',
                border: '1px solid var(--border-pink)'
              }}
            >
              {repo.tag}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.55,
            marginBottom: '16px'
          }}
        >
          {repo.description}
        </p>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '18px'
            }}
          >
            {repo.topics.slice(0, 4).map((topic, i) => (
              <span
                key={i}
                style={{
                  fontSize: '10.5px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  background: 'rgba(224, 33, 138, 0.05)',
                  border: '1px solid var(--border-hairline)',
                  padding: '2px 8px',
                  borderRadius: '12px'
                }}
              >
                #{topic.toLowerCase().replace(/[^a-z0-9]/g, '')}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Stats Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(224, 33, 138, 0.12)',
          paddingTop: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)'
        }}
      >
        {/* Language */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              width: '9px',
              height: '9px',
              borderRadius: '50%',
              backgroundColor: langColor,
              display: 'inline-block'
            }}
          />
          <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{repo.language}</span>
        </div>

        {/* Metrics */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Star size={13} style={{ color: 'var(--primary-hot-pink)' }} />
            <span>{repo.stars}</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <GitFork size={13} style={{ color: 'var(--text-light)' }} />
            <span>{repo.forks}</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px' }}>
            <Calendar size={12} style={{ color: 'var(--text-light)' }} />
            <span>{formattedDate}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
