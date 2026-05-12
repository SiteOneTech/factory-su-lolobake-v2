import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../i18n/content';

const WHATSAPP_NUMBER = '13057000000';

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content.nav[lang];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-serif font-bold text-rose">LOLO's</span>
            <span className="text-xl md:text-2xl font-serif text-charcoal">Bake</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-charcoal hover:text-rose transition-colors">{t.home}</a>
            <a href="#gallery" className="text-sm font-medium text-charcoal hover:text-rose transition-colors">{t.gallery}</a>
            <a href="#contact" className="text-sm font-medium text-charcoal hover:text-rose transition-colors">{t.contact}</a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lang === 'en' ? "Hi! I'd like to request a quote for a custom cake." : "¡Hola! Me gustaría pedir una cotización para un pastel personalizado.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              {t.order}
            </a>
          </nav>

          {/* Lang toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="text-sm font-semibold border border-charcoal/20 rounded-full px-3 py-1 hover:bg-charcoal hover:text-white transition-all"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-charcoal"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-cream py-4 space-y-3">
            <a href="#home" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-charcoal hover:text-rose font-medium">{t.home}</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-charcoal hover:text-rose font-medium">{t.gallery}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-charcoal hover:text-rose font-medium">{t.contact}</a>
            <div className="px-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center"
                onClick={() => setMenuOpen(false)}
              >
                {t.order}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
