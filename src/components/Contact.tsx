import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../i18n/content';

const WHATSAPP_NUMBER = '17862966190';

export default function Contact() {
  const { lang } = useLanguage();
  const c = content.contact[lang];
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    date: '',
    guests: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission — connect to Formspree or backend for production
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="section-label">{c.label}</p>
          <h2 className="section-title">{c.headline}</h2>
          <p className="text-charcoal/60 max-w-xl mx-auto mt-2">{c.subheadline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3 bg-white rounded-3xl shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl font-serif font-bold text-charcoal mb-2">{c.form_success}</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-rose underline text-sm">
                  {lang === 'en' ? 'Send another request' : 'Enviar otra solicitud'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-1">{c.form_name} *</label>
                    <input name="name" required value={form.name} onChange={handleChange}
                      className="w-full border border-charcoal/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all"
                      placeholder="Tu nombre / Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-1">{c.form_email} *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      className="w-full border border-charcoal/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all"
                      placeholder="correo@ejemplo.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-1">{c.form_phone}</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      className="w-full border border-charcoal/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all"
                      placeholder="+1 (305) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-1">{c.form_occasion} *</label>
                    <select name="occasion" required value={form.occasion} onChange={handleChange}
                      className="w-full border border-charcoal/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all bg-white">
                      <option value="">--</option>
                      {c.occasions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-1">{c.form_date}</label>
                    <input name="date" type="date" value={form.date} onChange={handleChange}
                      className="w-full border border-charcoal/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-1">{c.form_guests}</label>
                    <input name="guests" type="number" min="1" value={form.guests} onChange={handleChange}
                      className="w-full border border-charcoal/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all"
                      placeholder="10, 50, 100..." />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-1">{c.form_message} *</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handleChange}
                    className="w-full border border-charcoal/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all resize-none"
                    placeholder={lang === 'en' ? 'Describe your dream cake... colors, theme, flavors...' : 'Describe tu pastel ideal... colores, tema, sabores...'} />
                </div>
                <button type="submit" className="btn-primary w-full text-center mt-2">
                  {c.form_submit}
                </button>
              </form>
            )}
          </div>

          {/* WhatsApp side */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center flex-1 flex flex-col justify-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-charcoal mb-2">{lang === 'en' ? 'Prefer to chat?' : '¿Prefieres chatear?'}</h3>
              <p className="text-sm text-charcoal/60 mb-6">{c.whatsapp_label}</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lang === 'en'
                  ? "Hi! I'd like to request a quote for a custom cake."
                  : "¡Hola! Me gustaría pedir una cotización para un pastel personalizado.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
              <a
                href="https://instagram.com/lolos.bake"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose font-semibold hover:underline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @lolos.bake
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
