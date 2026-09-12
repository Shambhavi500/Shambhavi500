import React, { useState, useEffect } from 'react';
import { Search, Github, ArrowUpRight, Filter, Sparkles } from 'lucide-react';
import { GitHubApiService } from '../services/githubApi';
import { SOCIAL_LINKS } from '../data/socialLinks';
import SectionHeader from './SectionHeader';
import RepositoryCard from './RepositoryCard';

export default function RepositoriesSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLang, setSelectedLang] = useState('ALL');
  const [search, setSearch] = useState('');

  useEffect(() => {
    let mounted = true;
    GitHubApiService.getRepositories().then((data) => {
      if (mounted) {
        setRepos(data);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, []);

  const languages = ['ALL', ...new Set(repos.map(r => r.language).filter(Boolean))];

  const filteredRepos = repos.filter(r => {
    const matchesLang = selectedLang === 'ALL' || r.language === selectedLang;
    const matchesSearch = search === '' ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(search.toLowerCase()));
    return matchesLang && matchesSearch;
  });

  return (
    <section id="repositories" className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="PUBLIC REPOSITORIES"
          title="Source Code &amp;"
          highlightWord="GitHub Repositories"
          subtitle="Dynamic catalog of public repositories, open-source code, and software experiments directly from GitHub."
        />

        {/* Filter & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '32px',
            background: '#FFFFFF',
            padding: '16px 20px',
            borderRadius: 'var(--radius-card)',
            border: '1px solid var(--border-pink)',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          {/* Language Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span
              className="mono-label"
              style={{
                fontSize: '11px',
                color: 'var(--text-secondary)',
                marginRight: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Filter size={13} style={{ color: 'var(--primary-hot-pink)' }} />
              <span>LANG:</span>
            </span>
            {languages.map(lang => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  border: `1px solid ${selectedLang === lang ? 'var(--primary-hot-pink)' : 'var(--border-pink)'}`,
                  background: selectedLang === lang ? 'linear-gradient(135deg, #E0218A 0%, #C21875 100%)' : '#FFF5FA',
                  color: selectedLang === lang ? '#FFFFFF' : 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.18s ease'
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#FFF5FA',
              border: '1px solid var(--border-pink)',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 14px',
              minWidth: '240px'
            }}
          >
            <Search size={14} style={{ color: 'var(--text-secondary)' }} />
            <input
              type="text"
              placeholder="Search repositories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-main)',
                width: '100%'
              }}
            />
          </div>
        </div>

        {/* Repository Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
            <Sparkles className="sparkle-anim" size={28} style={{ color: 'var(--primary-hot-pink)', marginBottom: '12px' }} />
            <div className="mono-label">LOADING REPOSITORIES FROM GITHUB...</div>
          </div>
        ) : filteredRepos.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {filteredRepos.map(repo => (
              <RepositoryCard key={repo.name} repo={repo} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '48px 0',
              background: '#FFFFFF',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--border-pink)'
            }}
          >
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
              No repositories match the selected filters.
            </p>
          </div>
        )}

        {/* View All Repositories Link */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <a
            href={SOCIAL_LINKS.repositories.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              borderRadius: 'var(--radius-pill)',
              background: '#FFFFFF',
              border: '1.5px solid var(--primary-hot-pink)',
              color: 'var(--primary-hot-pink)',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 800,
              textDecoration: 'none',
              letterSpacing: '0.06em',
              boxShadow: '0 4px 16px rgba(224, 33, 138, 0.1)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #E0218A 0%, #C21875 100%)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(224, 33, 138, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = 'var(--primary-hot-pink)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(224, 33, 138, 0.1)';
            }}
          >
            <Github size={15} />
            <span>BROWSE ALL REPOSITORIES ON GITHUB</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
