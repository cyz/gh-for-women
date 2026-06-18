'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';

export default function SiteNav() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const isCliActive = pathname === '/cli-guide' || pathname === '/cli-guide-pt';
  const isTrainingActive = pathname === '/women-training';

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link className="site-logo" href="/">
          <span className="logo-mark">⚡</span>
          <span>GitHub Copilot</span>
        </Link>
        <div className="site-nav-right">
          <div className="site-nav-links">
            {language === 'en' ? (
              <Link 
                href="/cli-guide" 
                className={isCliActive ? 'active' : ''}
              >
                CLI Guide
              </Link>
            ) : (
              <Link 
                href="/cli-guide-pt" 
                className={isCliActive ? 'active' : ''}
              >
                Guia CLI
              </Link>
            )}
            <Link 
              href="/women-training" 
              className={isTrainingActive ? 'active' : ''}
            >
              {language === 'en' ? (
                <span>Summary of Training</span>
              ) : (
                <span>Resumo do Treinamento</span>
              )}
            </Link>
          </div>
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
