import React, { useState, useEffect } from 'react';
import { GitBranch, GitCommit, GraduationCap, Award, Users, Trophy } from 'lucide-react';
import { GitHubApiService } from '../services/githubApi';
import SectionHeader from './SectionHeader';
import StatCard from './StatCard';

export default function StatsSection() {
  const [stats, setStats] = useState({
    publicRepos: 14,
    totalContributions: 117,
    activeDaysCount: 30
  });

  useEffect(() => {
    GitHubApiService.getProfileStats().then((data) => {
      setStats({
        publicRepos: data.publicRepos,
        totalContributions: data.totalContributions || 117,
        activeDaysCount: data.activeDaysCount || 30
      });
    });
  }, []);

  return (
    <section id="telemetry" className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="AT A GLANCE"
          title="Academic &amp;"
          highlightWord="Engineering Highlights"
          subtitle="Real-world metrics and benchmarks derived from live GitHub data and academic milestones."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}
        >
          <StatCard
            label="PUBLIC REPOSITORIES"
            value={stats.publicRepos}
            sublabel="Analyzed &amp; Maintained"
            icon={GitBranch}
          />

          <StatCard
            label="CODE CONTRIBUTIONS"
            value={stats.totalContributions}
            sublabel="Active Developer Commits"
            icon={GitCommit}
          />

          <StatCard
            label="ACADEMIC CGPA"
            value="8.6"
            sublabel="PICT Pune ENTC"
            icon={GraduationCap}
          />

          <StatCard
            label="DEVELOPMENT GRANT"
            value="₹15L"
            sublabel="Pune Agri Hackathon"
            icon={Award}
          />

          <StatCard
            label="COMPETITIVE SCALE"
            value="600+"
            sublabel="Teams Outperformed"
            icon={Users}
          />
        </div>
      </div>
    </section>
  );
}
