import type { BlogPost } from "../../../data/blog";

/** EN overlay for cheklist-sayta — same structure as RU JSON. */
export const cheklistSaytaEn: BlogPost = {
  slug: "cheklist-sayta",
  title: "Website checklist: must-haves before launch and audit",
  date: "2018-09-24",
  category: "Websites",
  cover: "/images/blog/cheklist-sayta/cover-en.webp",
  excerpt:
    "Speed, HTTPS, clean URLs, 404 pages, responsive layout, contacts, offer, forms, reviews, privacy policy, and other blocks — a practical checklist without “50 items or failure” panic.",
  lead: [
    "Small-business sites differ, but a base set repeats: the site must load fast, make sense on a phone, build trust, and lead to action.",
    "Below: a grouped checklist (tech, brand, trust, content, conversion). Not everything from long 2018 lists is critical today (social widgets — only if you need them), and “doomed without item #37” is hyperbole: prioritize what breaks leads and SEO.",
  ],
  faq: [
    {
      q: "Do I need all 50 items at once?",
      a: "No. First cover speed, mobile, contacts, offer, and forms. The rest depends on the business model.",
    },
    {
      q: "Is SSL required?",
      a: "Yes for forms, payment, and trust. Without HTTPS, modern browsers and search treat the site worse.",
    },
    {
      q: "Is a privacy policy required?",
      a: "If you collect personal data — yes. Plus clear consent in forms.",
    },
    {
      q: "Do I need Share buttons and social widgets?",
      a: "Optional. Messenger, phone, and a working CTA matter more than a row of icons for show.",
    },
    {
      q: "Do I need a cookie banner for every visitor?",
      a: "It depends on your audience and the metrics or ads you use. For EU/UK audiences and some scenarios — yes; confirm with counsel.",
    },
    {
      q: "Where should I start auditing an old site?",
      a: "Mobile UX, speed, broken links and 404s, contacts, and whether landings still match your ads.",
    },
  ],
  sections: [
    {
      title: "Tech and navigation",
      level: 2,
      paras: [
        "Speed and stable hosting affect bounce and indexation. HTTPS protects data exchange. Clean URLs are easier to read and share.",
        "XML and HTML sitemaps plus a thoughtful 404 page return people into the structure. Responsive layout is required: the site must work on a smartphone — not as a compressed desktop.",
      ],
      lists: [
        {
          intro: "Tech minimum:",
          items: [
            "acceptable mobile speed",
            "HTTPS",
            "readable URLs",
            "sitemap and robots in order",
            "a useful 404 page",
            "responsive layout",
          ],
        },
      ],
      links: [
        {
          label: "Responsive website",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Outdated website",
          href: "/en/blog/ustarevshiy-sayt/",
        },
      ],
    },
    {
      title: "Brand, trust, and contacts",
      level: 2,
      paras: [
        "One visual system, logo, tidy palette, and your own quality images (no other people’s watermarks) support recognition.",
        "Trust: About, address, map, entrance photo, hours, phone, email, contact form, privacy policy, and terms. For offline — how to find the door; for online — how to reach you fast.",
        "Legal blocks (terms, copyright, affiliate disclosures) — by need and industry, not everything from the checklist at once.",
      ],
      lists: [
        {
          intro: "Contacts in view:",
          items: [
            "phone and messenger",
            "email or form",
            "address and map for an offline location",
            "business hours",
          ],
        },
      ],
      links: [
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
        {
          label: "Lead-capture forms",
          href: "/en/blog/formy-zahvata/",
        },
      ],
    },
    {
      title: "Content and conversion",
      level: 2,
      paras: [
        "Home with a clear offer, understandable menu, landings for ads and demand, a services or catalog page, USP, and site search for a large assortment.",
        "Social proof: reviews, awards, “press about us” — only real ones. FAQ, guides, blog, and video — if they answer audience questions.",
        "CTA: one clear action button beats a scatter. Chat and subscribe — if someone replies and the email has value. Don’t replace a lead with a dozen widgets.",
      ],
      notes: [
        {
          title: "Priority",
          kind: "tip",
          text: "First the path “understood the offer → contacted.” Then blog, careers, and an events calendar.",
        },
      ],
      links: [
        {
          label: "Traffic without leads",
          href: "/en/blog/trafik-bez-lidov/",
        },
        {
          label: "USP",
          href: "/en/blog/utp/",
        },
      ],
    },
  ],
  closing: [
    "A checklist is a prioritization tool, not a verdict. Cover tech, trust, and the path to a lead; grow the rest by business need — and don’t copy someone else’s “50 must-haves” literally.",
  ],
  related: [
    "ustarevshiy-sayt",
    "adaptivnyy-sayt",
    "formy-zahvata",
    "trafik-bez-lidov",
    "tehnicheskiy-seo-audit",
    "aydentika-brenda",
  ],
};

/** ES overlay for cheklist-sayta — same structure as RU JSON / EN. */
export const cheklistSaytaEs: BlogPost = {
  slug: "cheklist-sayta",
  title: "Checklist del sitio: lo imprescindible antes del lanzamiento y la auditoría",
  date: "2018-09-24",
  category: "Websites",
  cover: "/images/blog/cheklist-sayta/cover-es.webp",
  excerpt:
    "Velocidad, HTTPS, URLs limpias, páginas 404, layout responsive, contactos, oferta, formularios, reseñas, política de privacidad y otros bloques — un checklist práctico sin pánico de «50 ítems o fracaso».",
  lead: [
    "Los sitios de pequeños negocios difieren, pero se repite una base: el sitio debe cargar rápido, tener sentido en el móvil, generar confianza y llevar a la acción.",
    "Abajo: un checklist agrupado (técnica, marca, confianza, contenido, conversión). No todo de las listas largas de 2018 es crítico hoy (widgets sociales — solo si los necesitas), y «condenado sin el ítem #37» es hipérbole: prioriza lo que rompe leads y SEO.",
  ],
  faq: [
    {
      q: "¿Necesito los 50 ítems de golpe?",
      a: "No. Primero cubre velocidad, móvil, contactos, oferta y formularios. El resto depende del modelo de negocio.",
    },
    {
      q: "¿Es obligatorio el SSL?",
      a: "Sí para formularios, pago y confianza. Sin HTTPS, navegadores modernos y búsqueda tratan peor el sitio.",
    },
    {
      q: "¿Hace falta una política de privacidad?",
      a: "Si recoges datos personales — sí. Más un consentimiento claro en los formularios.",
    },
    {
      q: "¿Hacen falta botones Share y widgets sociales?",
      a: "Opcional. Messenger, teléfono y un CTA que funcione importan más que una fila de iconos de escaparate.",
    },
    {
      q: "¿Hace falta un banner de cookies para cada visitante?",
      a: "Depende de tu audiencia y de las métricas o ads que uses. Para audiencias UE/UK y algunos escenarios — sí; confirma con asesoría legal.",
    },
    {
      q: "¿Por dónde empiezo a auditar un sitio viejo?",
      a: "UX móvil, velocidad, enlaces rotos y 404s, contactos, y si las landings siguen cuadrando con tus ads.",
    },
  ],
  sections: [
    {
      title: "Técnica y navegación",
      level: 2,
      paras: [
        "La velocidad y un hosting estable afectan al bounce y a la indexación. HTTPS protege el intercambio de datos. Las URLs limpias se leen y se comparten mejor.",
        "Sitemaps XML y HTML más una 404 pensada devuelven a la gente a la estructura. Layout responsive es obligatorio: el sitio debe funcionar en el smartphone — no como un desktop comprimido.",
      ],
      lists: [
        {
          intro: "Mínimo técnico:",
          items: [
            "velocidad aceptable en móvil",
            "HTTPS",
            "URLs legibles",
            "sitemap y robots en orden",
            "una 404 útil",
            "layout responsive",
          ],
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Sitio desactualizado",
          href: "/es/blog/ustarevshiy-sayt/",
        },
      ],
    },
    {
      title: "Marca, confianza y contactos",
      level: 2,
      paras: [
        "Un sistema visual, logo, paleta ordenada e imágenes propias de calidad (sin watermarks ajenos) sostienen el reconocimiento.",
        "Confianza: Sobre nosotros, dirección, mapa, foto de entrada, horario, teléfono, email, formulario de contacto, política de privacidad y términos. Para offline — cómo encontrar la puerta; para online — cómo contactarte rápido.",
        "Bloques legales (términos, copyright, disclosures de afiliados) — según necesidad e industria, no todo el checklist de golpe.",
      ],
      lists: [
        {
          intro: "Contactos a la vista:",
          items: [
            "teléfono y messenger",
            "email o formulario",
            "dirección y mapa si hay local offline",
            "horario de atención",
          ],
        },
      ],
      links: [
        {
          label: "Identidad de marca",
          href: "/es/blog/aydentika-brenda/",
        },
        {
          label: "Formularios de captación",
          href: "/es/blog/formy-zahvata/",
        },
      ],
    },
    {
      title: "Contenido y conversión",
      level: 2,
      paras: [
        "Home con oferta clara, menú entendible, landings para ads y demanda, página de servicios o catálogo, USP y búsqueda en el sitio si el surtido es grande.",
        "Prueba social: reseñas, premios, «prensa sobre nosotros» — solo reales. FAQ, guías, blog y vídeo — si responden preguntas de la audiencia.",
        "CTA: un botón de acción claro gana a la dispersión. Chat y suscripción — si alguien responde y el email aporta valor. No sustituyas un lead con una docena de widgets.",
      ],
      notes: [
        {
          title: "Prioridad",
          kind: "tip",
          text: "Primero el camino «entendió la oferta → contactó». Luego blog, empleos y un calendario de eventos.",
        },
      ],
      links: [
        {
          label: "Tráfico sin leads",
          href: "/es/blog/trafik-bez-lidov/",
        },
        {
          label: "USP",
          href: "/es/blog/utp/",
        },
      ],
    },
  ],
  closing: [
    "Un checklist es una herramienta de priorización, no un veredicto. Cubre técnica, confianza y el camino al lead; crece el resto según necesidad del negocio — y no copies al pie de la letra el «50 imprescindibles» de otro.",
  ],
  related: [
    "ustarevshiy-sayt",
    "adaptivnyy-sayt",
    "formy-zahvata",
    "trafik-bez-lidov",
    "tehnicheskiy-seo-audit",
    "aydentika-brenda",
  ],
};
