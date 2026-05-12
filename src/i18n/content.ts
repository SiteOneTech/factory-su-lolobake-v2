// Bilingual content for LOLO's Bake — ES/EN
// All copy is localized (not machine-translated) per PRD requirements

export type Lang = 'es' | 'en';

export interface Content {
  meta: { [key in Lang]: { title: string; description: string } };
  nav: { [key in Lang]: { home: string; gallery: string; contact: string; order: string } };
  hero: { [key in Lang]: { eyebrow: string; headline: string; subheadline: string; cta_primary: string; cta_secondary: string; delivery_note: string } };
  about: { [key in Lang]: { label: string; headline: string; body: string; cta: string } };
  trust: { [key in Lang]: { label: string; headline: string; items: Array<{ icon: string; title: string; desc: string }> } };
  gallery: { [key in Lang]: { label: string; headline: string; subheadline: string; cta: string; categories: { [key: string]: string } } };
  occasions: { [key in Lang]: { label: string; headline: string; items: Array<{ title: string; desc: string; image: string }> } };
  contact: { [key in Lang]: { label: string; headline: string; subheadline: string; form_name: string; form_email: string; form_phone: string; form_occasion: string; form_date: string; form_guests: string; form_message: string; form_submit: string; form_success: string; whatsapp_label: string; occasions: string[] } };
  footer: { [key in Lang]: { tagline: string; instagram: string; copyright: string; made_with: string } };
}

export const content: Content = {
  meta: {
    es: {
      title: 'LOLO\'s Bake — Postres premium artesanales en Miami',
      description: 'Postres premium artesanales para compradores bilingües en South Florida que buscan más cuidado, confianza y una experiencia restriction-aware.',
    },
    en: {
      title: 'LOLO\'s Bake — Premium artisanal desserts in Miami',
      description: 'Premium artisanal desserts for bilingual South Florida buyers who want more care, more trust, and a restriction-aware experience.',
    },
  },
  nav: {
    es: { home: 'Inicio', gallery: 'Galería', contact: 'Contacto', order: 'Pedir Cotización' },
    en: { home: 'Home', gallery: 'Gallery', contact: 'Contact', order: 'Request Quote' },
  },
  hero: {
    es: {
      eyebrow: 'Postres premium artesanales en South Florida',
      headline: 'Postres hermosos,\nhechos con más cuidado y confianza.',
      subheadline: 'Una experiencia bilingüe, premium y trust-first para familias y compradores que buscan indulgencia con más atención a sus necesidades.',
      cta_primary: 'Pedir Cotización',
      cta_secondary: 'Ver Galería',
      delivery_note: 'Entregas en Miami-Dade y Broward',
    },
    en: {
      eyebrow: 'Premium artisanal desserts in South Florida',
      headline: 'Beautiful desserts,\nmade with more care and confidence.',
      subheadline: 'A bilingual, premium and trust-first experience for families and buyers who want indulgence with more attention to their needs.',
      cta_primary: 'Request Quote',
      cta_secondary: 'View Gallery',
      delivery_note: 'Delivery in Miami-Dade and Broward',
    },
  },
  about: {
    es: {
      label: 'Nuestra Historia',
      headline: 'Una marca artesanal para\npedir con más tranquilidad',
      body: 'En LOLO\'s Bake combinamos estética premium, trabajo artesanal y una atención más cuidadosa a lo que cada cliente necesita. Nuestro signature Swiss buttercream ofrece un acabado ligero y refinado, mientras nuestra experiencia bilingüe facilita conversaciones claras desde el primer mensaje.\n\nNo prometemos imposibles ni hablamos con claims vacíos. Guiamos cada pedido con honestidad, calidez y una mentalidad trust-first para que cada familia pueda preguntar con confianza y encontrar la mejor opción para su ocasión o necesidad.',
      cta: 'Conoce más en Instagram',
    },
    en: {
      label: 'Our Story',
      headline: 'An artisanal brand for\nordering with more peace of mind',
      body: 'At LOLO\'s Bake, we combine premium aesthetics, artisanal execution, and a more thoughtful approach to what each client needs. Our signature Swiss buttercream delivers a lighter, refined finish, while our bilingual experience makes the conversation easier from the first message.\n\nWe do not make inflated claims or promise what we cannot support. We guide each order with honesty, warmth, and a trust-first mindset so families can ask with confidence and find the best fit for their occasion or dietary-aware needs.',
      cta: 'See more on Instagram',
    },
  },
  trust: {
    es: {
      label: '¿Por qué inspira confianza?',
      headline: 'Más cuidado, claridad y guía personalizada',
      items: [
        { icon: 'butterfly', title: 'Signature Swiss Buttercream', desc: 'Nuestra receta distintiva ofrece un acabado premium, ligero y elegante sin perder indulgencia.' },
        { icon: 'palette', title: 'Consulta Bilingüe y Personalizada', desc: 'Te guiamos en inglés o español para entender tu ocasión, preferencias y necesidades antes de cotizar.' },
        { icon: 'sparkles', title: 'Hecho con Más Cuidado', desc: 'Cada pedido se prepara a la orden con una conversación clara sobre lo que sí podemos adaptar y cómo trabajamos.' },
        { icon: 'map', title: 'Trust-First Delivery', desc: 'Atención confiable en Miami-Dade y Broward con una ruta simple de lead generation vía WhatsApp.' },
      ],
    },
    en: {
      label: 'Why it feels trustworthy',
      headline: 'More care, clarity, and personal guidance',
      items: [
        { icon: 'butterfly', title: 'Signature Swiss Buttercream', desc: 'Our signature recipe delivers a premium, lighter, refined finish without losing indulgence.' },
        { icon: 'palette', title: 'Bilingual Personal Guidance', desc: 'We guide you in English or Spanish to understand your occasion, preferences, and needs before quoting.' },
        { icon: 'sparkles', title: 'Made with More Care', desc: 'Every order is made to order with a clear conversation about what we can adapt and how we work.' },
        { icon: 'map', title: 'Trust-First Delivery', desc: 'Reliable service in Miami-Dade and Broward with a simple WhatsApp-led path to start the conversation.' },
      ],
    },
  },
  gallery: {
    es: {
      label: 'Galería',
      headline: 'Diseños que inspiran',
      subheadline: 'Cada pastel cuenta una historia. Aquí puedes ver una selección de lo que hacemos.',
      cta: 'Ver más en Instagram',
      categories: { all: 'Todos', birthday: 'Cumpleaños', wedding: 'Bodas', shower: 'Baby Showers', special: 'Celebraciones' },
    },
    en: {
      label: 'Gallery',
      headline: 'Designs that inspire',
      subheadline: 'Every cake tells a story. Here is a selection of what we create.',
      cta: 'See more on Instagram',
      categories: { all: 'All', birthday: 'Birthdays', wedding: 'Weddings', shower: 'Baby Showers', special: 'Celebrations' },
    },
  },
  occasions: {
    es: {
      label: 'Ocasiones',
      headline: 'Celebramos todo tipo de momentos',
      items: [
        { title: 'Cumpleaños', desc: 'Primer año o el número que prefieras. Diseños que hacen la fiesta.', image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&q=80' },
        { title: 'Bodas', desc: 'Pasteles elegantes que complementan tu día especial con estilo y sabor.', image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80' },
        { title: 'Baby Showers', desc: 'Celebraciones tiernas con diseños suaves y llenos de detalle.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
        { title: 'Celebraciones', desc: 'Grados, bautizos, anniversarios y más. Cada momento merece un pastel especial.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80' },
      ],
    },
    en: {
      label: 'Occasions',
      headline: 'We celebrate all kinds of moments',
      items: [
        { title: 'Birthdays', desc: 'First year or your favorite number. Designs that make the party.', image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&q=80' },
        { title: 'Weddings', desc: 'Elegant cakes that complement your special day with style and flavor.', image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80' },
        { title: 'Baby Showers', desc: 'Tender celebrations with soft, detail-filled designs.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
        { title: 'Celebrations', desc: 'Graduations, baptisms, anniversaries and more. Every moment deserves a special cake.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80' },
      ],
    },
  },
  contact: {
    es: {
      label: 'Cotiza tu pastel',
      headline: 'Cuéntanos qué necesitas',
      subheadline: 'Escríbenos por WhatsApp o déjanos tu solicitud. Te guiaremos con una respuesta cálida, clara y enfocada en la mejor opción para tu ocasión.',
      form_name: 'Nombre',
      form_email: 'Correo electrónico',
      form_phone: 'Teléfono / WhatsApp',
      form_occasion: 'Ocasión',
      form_date: 'Fecha del evento',
      form_guests: 'Cantidad de invitados',
      form_message: 'Cuéntanos sobre tu idea (diseño, sabores, colores...)',
      form_submit: 'Enviar Solicitud',
      form_success: '¡Recibido! Te contactaremos pronto.',
      whatsapp_label: 'O escríbenos directo:',
      occasions: ['Cumpleaños', 'Boda', 'Baby Shower', 'Grado', 'Bautizo', 'Aniversario', 'Otro'],
    },
    en: {
      label: 'Get Your Quote',
      headline: 'Tell us what you need',
      subheadline: 'Message us on WhatsApp or send your request. We will guide you with a warm, clear response focused on the best fit for your occasion.',
      form_name: 'Name',
      form_email: 'Email',
      form_phone: 'Phone / WhatsApp',
      form_occasion: 'Occasion',
      form_date: 'Event Date',
      form_guests: 'Number of Guests',
      form_message: 'Tell us about your idea (design, flavors, colors...)',
      form_submit: 'Send Request',
      form_success: 'Received! We\'ll be in touch soon.',
      whatsapp_label: 'Or message us directly:',
      occasions: ['Birthday', 'Wedding', 'Baby Shower', 'Graduation', 'Baptism', 'Anniversary', 'Other'],
    },
  },
  footer: {
    es: {
      tagline: 'Postres premium artesanales para pedir con más confianza en Miami.',
      instagram: 'Síguenos en @lolos.bake',
      copyright: '© 2024 LOLO\'s Bake. Hecho con amor en Miami.',
      made_with: 'desarrollado por: SitioUno Factory',
    },
    en: {
      tagline: 'Premium artisanal desserts you can order with more confidence in Miami.',
      instagram: 'Follow us at @lolos.bake',
      copyright: '© 2024 LOLO\'s Bake. Made with love in Miami.',
      made_with: 'desarrollado por: SitioUno Factory',
    },
  },
};
