import React, { useState } from 'react';
import type { Lang } from '../i18n/content';
import { LanguageContext } from './language-context';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const toggleLang = () => setLang(prev => prev === 'en' ? 'es' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
