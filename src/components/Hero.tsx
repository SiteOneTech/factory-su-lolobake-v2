import { useLanguage } from '../context/LanguageContext';
import { content } from '../i18n/content';

export default function Hero() {
  const { lang } = useLanguage();
  const h = content.hero[lang];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-white to-rose/10">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-rose/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center">
        {/* Eyebrow */}
        <p className="section-label mb-4">{h.eyebrow}</p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-charcoal leading-tight mb-6">
          {h.headline.split('\n').map((line, i) => (
            <span key={i} className={i === 1 ? 'text-rose' : ''}>{line}<br /></span>
          ))}
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          {h.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="btn-primary text-lg px-8 py-4"
          >
            {h.cta_primary}
          </a>
          <a
            href="#gallery"
            className="btn-outline text-lg px-8 py-4"
          >
            {h.cta_secondary}
          </a>
        </div>

        {/* Delivery note */}
        <p className="text-sm text-charcoal/50 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {h.delivery_note}
        </p>

        {/* Hero cake image */}
        <div className="mt-12 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-rose/20 mx-auto max-w-2xl">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=85"
              alt="LOLO's Bake custom cake"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 md:right-8 bg-white rounded-2xl shadow-lg px-4 py-3 text-left">
            <p className="text-xs text-charcoal/50 uppercase tracking-wider">Instagram</p>
            <p className="font-semibold text-charcoal">@lolos.bake</p>
          </div>
        </div>
      </div>
    </section>
  );
}
