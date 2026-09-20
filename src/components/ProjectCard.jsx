import React from 'react';
import { Github, Trophy, ArrowUpRight, Code2 } from 'lucide-react';
import DecorativeSparkle from './DecorativeSparkle';

export default function ProjectCard({ project }) {
  const isAwardWinning =
    project.badge?.includes('WINNER') ||
    project.badge?.includes('1st Place') ||
    project.badge?.includes('1ST PLACE') ||
    project.badge?.includes('Runner-Up') ||
    project.badge?.includes('RUNNER-UP');

  return (
    <div
      className="glass-panel"
      style={{
        padding: '28px 24px',
        borderRadius: 'var(--radius-card)',
        background: '#FFFFFF',
        border: `1px solid ${isAwardWinning ? 'rgba(224, 33, 138, 0.35)' : 'var(--border-pink)'}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        height: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(224, 33, 138, 0.12)';
        e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
        e.currentTarget.style.borderColor = isAwardWinning ? 'rgba(224, 33, 138, 0.35)' : 'var(--border-pink)';
      }}
    >
      <div>
        {/* Category & Badge Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '14px'
          }}
        >
          <span
            className="mono-label"
            style={{
              fontSize: '10.5px',
              color: 'var(--deep-pink)',
              fontWeight: 700,
              letterSpacing: '0.06em',
              background: 'rgba(224, 33, 138, 0.08)',
              padding: '3px 8px',
              borderRadius: '4px'
            }}
          >
            {project.category}
          </span>

          {project.badge && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '10.5px',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                padding: '3px 10px',
                borderRadius: 'var(--radius-pill)',
                background: isAwardWinning ? '#FFFBEB' : '#FFEBF3',
                color: isAwardWinning ? '#B45309' : 'var(--primary-hot-pink)',
                border: `1px solid ${isAwardWinning ? 'rgba(245, 158, 11, 0.35)' : 'rgba(224, 33, 138, 0.25)'}`
              }}
            >
              {isAwardWinning ? <Trophy size={11} /> : <DecorativeSparkle size={10} />}
              <span>{project.badge}</span>
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontSize: '21px',
            fontWeight: 800,
            color: 'var(--text-main)',
            marginBottom: '10px'
          }}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              transition: 'color 0.15s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary-hot-pink)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
          >
            {project.name}
          </a>
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '18px'
          }}
        >
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '20px'
          }}
        >
          {(project.technologies || []).map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                color: 'var(--text-main)',
                background: '#FFF5FA',
                border: '1px solid var(--border-pink)',
                padding: '3px 8px',
                borderRadius: '6px'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Controls: Language & Real Repo Action */}
      <div
        style={{
          borderTop: '1px solid rgba(224, 33, 138, 0.12)',
          paddingTop: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <span
          className="mono-label"
          style={{
            fontSize: '11px',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Code2 size={13} style={{ color: 'var(--primary-hot-pink)' }} />
          <span>{project.language || 'Code'}</span>
        </span>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 14px',
            borderRadius: 'var(--radius-pill)',
            background: 'linear-gradient(135deg, #E0218A 0%, #C21875 100%)',
            color: '#FFFFFF',
            fontSize: '11.5px',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 8px rgba(224, 33, 138, 0.2)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(224, 33, 138, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(224, 33, 138, 0.2)';
          }}
        >
          <Github size={13} />
          <span>Repository</span>
          <ArrowUpRight size={12} />
        </a>
      </div>
    </div>
  );
}
