'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt'); // Default to pt as it's the main audience

  useEffect(() => {
    const savedLang = localStorage.getItem('site-lang') as Language;
    const initialLang = savedLang || 'pt';
    setLanguageState(initialLang);
    applyLanguage(initialLang);
  }, []);

  const applyLanguage = (lang: Language) => {
    document.body.classList.remove('lang-pt', 'lang-en');
    document.body.classList.add(`lang-${lang}`);
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('site-lang', lang);
    applyLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
