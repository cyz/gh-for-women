'use client';

import Link from 'next/link';
import GitHubContributeBadge from '@/components/GitHubContributeBadge';

export default function SiteNav() {
  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link className="site-logo" href="/">
          <span className="logo-mark">⚡</span>
          <span>GitHub for Women</span>
        </Link>
        <GitHubContributeBadge />
      </div>
    </nav>
  );
}
