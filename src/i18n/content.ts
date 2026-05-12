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
      title: 'LOLO\'s Bake — Pasteles Personalizados en Miami',
      description: 'Pasteles personalizados para bodas, cumpleaños y celebraciones. Swiss buttercream artesanal, hechos a la orden en Miami.',
    },
    en: {
      title: 'LOLO\'s Bake — Custom Cakes in Miami',
      description: 'Custom cakes for weddings, birthdays and celebrations. Artisanal Swiss buttercream, made-to-order in Miami.',
    },
  },
  nav: {
    es: { home: 'Inicio', gallery: 'Galería', contact: 'Contacto', order: 'Pedir Cotización' },
    en: { home: 'Home', gallery: 'Gallery', contact: 'Contact', order: 'Request Quote' },
  },
  hero: {
    es: {
      eyebrow: 'Pasteles Personalizados en Miami',
      headline: 'Celebraciones inolvidables,\nhechas con amor y buttercream artesanal.',
      subheadline: 'Diseños únicos para bodas, cumpleaños y momentos especiales. Frescos, personalizados y entregados en Miami.',
      cta_primary: 'Pedir Cotización',
      cta_secondary: 'Ver Galería',
      delivery_note: 'Entregas en Miami-Dade y Broward',
    },
    en: {
      eyebrow: 'Custom Cakes in Miami',
      headline: 'Unforgettable celebrations,\ncrafted with love and artisanal buttercream.',
      subheadline: 'Unique designs for weddings, birthdays and special moments. Fresh, custom and delivered in Miami.',
      cta_primary: 'Request Quote',
      cta_secondary: 'View Gallery',
      delivery_note: 'Delivery in Miami-Dade and Broward',
    },
  },
  about: {
    es: {
      label: 'Nuestra Historia',
      headline: 'Dulces creaciones para\ntus momentos más especiales',
      body: 'En LOLO\'s Bake, cada pastel es una obra de arte comestible. Nos especializamos en pasteles decorados a mano con nuestro signature Swiss buttercream — más ligero, más suave y más estable que el buttercream americano tradicional.\n\nCada celebración merece un postre que cuente su propia historia. Trabajamos de cerca contigo para crear diseños que reflejen tu visión, tus colores y tu estilo. Desde primeros cumpleaños hasta bodas elegantes, estamos aquí para hacer realidad tu idea.',
      cta: 'Conoce más en Instagram',
    },
    en: {
      label: 'Our Story',
      headline: 'Sweet creations for\nyour most special moments',
      body: 'At LOLO\'s Bake, every cake is an edible work of art. We specialize in hand-decorated cakes with our signature Swiss buttercream — lighter, smoother, and more stable than traditional American buttercream.\n\nEvery celebration deserves a dessert that tells its own story. We work closely with you to create designs that reflect your vision, your colors, and your style. From first birthdays to elegant weddings, we\'re here to bring your idea to life.',
      cta: 'See more on Instagram',
    },
  },
  trust: {
    es: {
      label: '¿Por Qué LOLO\'s Bake?',
      headline: 'La diferencia está en los detalles',
      items: [
        { icon: 'butterfly', title: 'Swiss Buttercream Signature', desc: 'Nuestra receta propia: más ligera, suave y estable. El finish que distingue nuestros pasteles.' },
        { icon: 'palette', title: 'Decoración 100% Personalizada', desc: 'Cada diseño se crea exclusivamente para tu celebración. No usamos moldes genéricos.' },
        { icon: 'sparkles', title: 'Hechos a la Orden', desc: 'Tu pastel se prepara con ingredientes frescos el día de tu evento. Nada de inventario.' },
        { icon: 'map', title: 'Entregas en Miami', desc: 'Servicio de entrega confiable en Miami-Dade y Broward County para tu tranquilidad.' },
      ],
    },
    en: {
      label: 'Why LOLO\'s Bake?',
      headline: 'The difference is in the details',
      items: [
        { icon: 'butterfly', title: 'Signature Swiss Buttercream', desc: 'Our own recipe: lighter, smoother, and more stable. The finish that sets our cakes apart.' },
        { icon: 'palette', title: '100% Custom Decoration', desc: 'Every design is created exclusively for your celebration. No generic molds.' },
        { icon: 'sparkles', title: 'Made-to-Order', desc: 'Your cake is made with fresh ingredients on the day of your event. No inventory.' },
        { icon: 'map', title: 'Miami Delivery', desc: 'Reliable delivery service in Miami-Dade and Broward County for your peace of mind.' },
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
      headline: 'Cuéntanos sobre tu celebración',
      subheadline: 'Escríbenos o escríbenos por WhatsApp. Responderemos pronto con ideas y opciones para tu pastel perfecto.',
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
      headline: 'Tell us about your celebration',
      subheadline: 'Send us a message or reach out on WhatsApp. We\'ll get back to you soon with ideas and options for your perfect cake.',
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
      tagline: 'Pasteles personalizados para celebraciones inolvidables en Miami.',
      instagram: 'Síguenos en @lolos.bake',
      copyright: '© 2024 LOLO\'s Bake. Hecho con amor en Miami.',
      made_with: 'Hecho a la orden, con cariño.',
    },
    en: {
      tagline: 'Custom cakes for unforgettable celebrations in Miami.',
      instagram: 'Follow us at @lolos.bake',
      copyright: '© 2024 LOLO\'s Bake. Made with love in Miami.',
      made_with: 'Made-to-order, with care.',
    },
  },
};
