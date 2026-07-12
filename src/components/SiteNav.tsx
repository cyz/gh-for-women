'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function SiteNav() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link className="site-logo" href="/">
          <span className="logo-mark">⚡</span>
          <span>GitHub Copilot</span>
        </Link>
        <div className="site-nav-right">
          <div className="lang-selector">
            <button
              className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
              onClick={() => setLanguage('pt')}
              title="Português"
            >
              🇧🇷 PT
            </button>
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              title="English"
            >
              🇺🇸 EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
