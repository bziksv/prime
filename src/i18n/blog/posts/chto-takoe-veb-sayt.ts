import type { BlogPost } from "../../../data/blog";

/** EN overlay for chto-takoe-veb-sayt — same structure as RU JSON. */
export const chtoTakoeVebSaytEn: BlogPost = {
  slug: "chto-takoe-veb-sayt",
  title: "What a website is: jobs, types, and how to build one",
  date: "2021-07-02",
  category: "Websites",
  cover: "/images/blog/chto-takoe-veb-sayt/cover-en.webp",
  excerpt:
    "What a website is in plain English: why business needs one, common types (brochure, corporate, store), how to choose a build path, and how pages work at a high level.",
  lead: [
    "A website is a set of linked pages under one address. For visitors it’s one resource: menu, sections, contacts. For business — a storefront, lead channel, and trust point next to ads and social.",
    "Below: why you need a site, which types exist, how to build one (studio, ready-made, builder), and how it works in broad strokes. Layout and server detail live in related posts.",
  ],
  faq: [
    {
      q: "What is a website?",
      a: "A set of web pages with shared logic and an address (domain) that users perceive as one resource.",
    },
    {
      q: "Do I need a site if I already have social profiles?",
      a: "For many niches — yes: catalog, SEO, legal info, and control of the channel. Social complements; it rarely fully replaces a site.",
    },
    {
      q: "How does a brochure site differ from a corporate site?",
      a: "Brochure — short “who we are and contacts.” Corporate — services, forms, content, sometimes an account area. A store adds catalog and checkout.",
    },
    {
      q: "Should I use a builder or a studio?",
      a: "A builder is faster and cheaper at the start. A studio fits complex logic, integrations, and quality control. A ready site from a marketplace risks penalties and someone else’s baggage.",
    },
    {
      q: "Do I need PHP to run a site?",
      a: "For a regular editor — no: a CMS and visual editor are enough. PHP and server work are a developer’s zone when you customize.",
    },
    {
      q: "What should a small business pick?",
      a: "Match type to the job: services → clear landings plus contacts; products → showcase or store. Don’t copy a hypermarket if ten SKUs are enough.",
    },
    {
      q: "Will a site bring clients by itself?",
      a: "No. You need demand, promotion (SEO/ads), and service. A site is infrastructure, not a magic button.",
    },
    {
      q: "How does this tie to SEO?",
      a: "Structure, speed, mobile, and clear URLs are set when you build. Fixing them after launch costs more.",
    },
  ],
  sections: [
    {
      title: "A site as a “book” in the browser",
      level: 2,
      paras: [
        "A useful analogy: the menu is the table of contents, About is the prologue, sections are chapters, contacts are the epilogue. A good site reads in sequence: people know where to go and what to do next.",
        "The domain is like the title on a shelf. Pages link inside; without structure both visitors and search engines get lost.",
      ],
      links: [
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "What jobs it solves",
      level: 2,
      paras: [
        "Inform: what you do, prices, terms. Back ads: where to send traffic from paid and offline. Give a contact channel: forms, phone, chat.",
        "Also — image and marketing: cases, articles, catalog. Firms without a site often lose to whoever shows up in “here and now” search.",
      ],
      lists: [
        {
          intro: "Typical reasons to launch a site:",
          items: [
            "explain the company and services",
            "take inquiries around the clock",
            "support ads with a landing",
            "host a catalog or price list",
            "build trust (details, reviews, cases)",
          ],
        },
      ],
    },
    {
      title: "Types of sites",
      level: 2,
      paras: [
        "By type people often split brochure, corporate, promo landing, showcase, and online store. By goals — commercial and non-commercial; by access — open, registration-gated, and closed.",
      ],
      lists: [
        {
          intro: "Types in short:",
          items: [
            "brochure — fast and short",
            "corporate — full story plus leads",
            "promo — for a campaign, often one-off",
            "showcase — deep on a narrow range",
            "store — catalog, cart, payment and shipping",
          ],
        },
        {
          intro: "By job you also see:",
          items: [
            "news and niche portals",
            "articles / blog",
            "services and personal accounts",
            "entertainment and community platforms",
          ],
        },
      ],
    },
    {
      title: "How to create one",
      level: 2,
      paras: [
        "Studio or freelance — from a brief, less risk of crooked logic, costlier and slower. A ready site from a marketplace saves time but risks filters, security holes, and third-party content.",
        "A DIY builder is a fine start for simple jobs. Free tiers often cut features, templates, and domain; a paid plan is usually more predictable for business.",
      ],
      lists: [
        {
          intro: "Before you pick a path:",
          items: [
            "budget and timeline",
            "whether you need catalog, payment, or integrations",
            "who will update content",
            "whether you need search growth (SEO)",
          ],
        },
      ],
      links: [
        {
          label: "Website layout",
          href: "/en/blog/verstka-saytov/",
        },
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "How it works under the hood",
      level: 2,
      paras: [
        "The user opens a URL in the browser; the request hits a server; the server returns a page (HTML/CSS/JS and data). Updating texts and products is usually a CMS job — a public view plus an admin panel.",
        "An editor only needs the admin. Complex logic, integrations, and performance are development territory. A well-built site doesn’t magnetize clients alone: you still need demand, promotion, and service.",
      ],
      links: [
        {
          label: "What is SEO",
          href: "/en/blog/chto-takoe-seo/",
        },
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
      ],
    },
  ],
  related: [
    "navigatsiya-sayta",
    "seo-struktura-sayta",
    "verstka-saytov",
    "veb-server",
    "chto-takoe-seo",
    "didzhital-agentstvo",
  ],
};

/** ES overlay for chto-takoe-veb-sayt — same structure as RU JSON / EN. */
export const chtoTakoeVebSaytEs: BlogPost = {
  slug: "chto-takoe-veb-sayt",
  title: "Qué es un sitio web: trabajos, tipos y cómo montarlo",
  date: "2021-07-02",
  category: "Websites",
  cover: "/images/blog/chto-takoe-veb-sayt/cover.webp",
  excerpt:
    "Qué es un sitio web en lenguaje claro: por qué lo necesita el negocio, tipos habituales (brochure, corporativo, tienda), cómo elegir vía de construcción y cómo funcionan las páginas a alto nivel.",
  lead: [
    "Un sitio web es un conjunto de páginas enlazadas bajo una dirección. Para los visitantes es un recurso: menú, secciones, contactos. Para el negocio — un escaparate, canal de leads y punto de confianza junto a ads y redes.",
    "Abajo: por qué hace falta un sitio, qué tipos existen, cómo montarlo (estudio, listo, builder) y cómo funciona a grandes rasgos. Detalle de layout y servidor vive en posts relacionados.",
  ],
  faq: [
    {
      q: "¿Qué es un sitio web?",
      a: "Un conjunto de páginas web con lógica compartida y una dirección (dominio) que los usuarios perciben como un solo recurso.",
    },
    {
      q: "¿Hace falta un sitio si ya tengo perfiles en redes?",
      a: "En muchos nichos — sí: catálogo, SEO, info legal y control del canal. Las redes complementan; rara vez sustituyen del todo un sitio.",
    },
    {
      q: "¿En qué se diferencia un sitio brochure de uno corporativo?",
      a: "Brochure — corto «quiénes somos y contactos». Corporativo — servicios, formularios, contenido, a veces un área de cuenta. Una tienda añade catálogo y checkout.",
    },
    {
      q: "¿Builder o estudio?",
      a: "Un builder es más rápido y barato al inicio. Un estudio encaja con lógica compleja, integraciones y control de calidad. Un sitio listo de un marketplace arriesga penalizaciones y bagaje ajeno.",
    },
    {
      q: "¿Hace falta PHP para llevar un sitio?",
      a: "Para un editor habitual — no: bastan un CMS y un editor visual. PHP y el trabajo de servidor son zona de developer cuando personalizas.",
    },
    {
      q: "¿Qué debería elegir un pequeño negocio?",
      a: "Encaja el tipo con el trabajo: servicios → landings claras más contactos; productos → showcase o tienda. No copies un hipermercado si bastan diez SKUs.",
    },
    {
      q: "¿Un sitio traerá clientes solo?",
      a: "No. Hace falta demanda, promoción (SEO/ads) y servicio. Un sitio es infraestructura, no un botón mágico.",
    },
    {
      q: "¿Cómo se ata esto al SEO?",
      a: "Estructura, velocidad, móvil y URLs claras se fijan al construir. Arreglarlas tras el lanzamiento cuesta más.",
    },
  ],
  sections: [
    {
      title: "Un sitio como «libro» en el navegador",
      level: 2,
      paras: [
        "Una analogía útil: el menú es el índice, About es el prólogo, las secciones son capítulos, contactos son el epílogo. Un buen sitio se lee en secuencia: la gente sabe adónde ir y qué hacer después.",
        "El dominio es como el título en una estantería. Las páginas se enlazan por dentro; sin estructura se pierden tanto visitantes como buscadores.",
      ],
      links: [
        {
          label: "Navegación del sitio",
          href: "/es/blog/navigatsiya-sayta/",
        },
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Qué trabajos resuelve",
      level: 2,
      paras: [
        "Informar: qué haces, precios, términos. Respaldar ads: adónde mandar tráfico de pago y offline. Dar un canal de contacto: formularios, teléfono, chat.",
        "También — imagen y marketing: casos, artículos, catálogo. Las firmas sin sitio a menudo pierden frente a quien aparece en la búsqueda «aquí y ahora».",
      ],
      lists: [
        {
          intro: "Motivos típicos para lanzar un sitio:",
          items: [
            "explicar la empresa y los servicios",
            "recibir consultas las 24 horas",
            "soportar ads con un landing",
            "albergar un catálogo o lista de precios",
            "construir confianza (datos, reseñas, casos)",
          ],
        },
      ],
    },
    {
      title: "Tipos de sitios",
      level: 2,
      paras: [
        "Por tipo a menudo se parten brochure, corporativo, landing promo, showcase y tienda online. Por objetivos — comerciales y no comerciales; por acceso — abiertos, con registro y cerrados.",
      ],
      lists: [
        {
          intro: "Tipos en breve:",
          items: [
            "brochure — rápido y corto",
            "corporativo — historia completa más leads",
            "promo — para una campaña, a menudo puntual",
            "showcase — profundo en un rango estrecho",
            "tienda — catálogo, carrito, pago y envío",
          ],
        },
        {
          intro: "Por trabajo también se ven:",
          items: [
            "portales de noticias y de nicho",
            "artículos / blog",
            "servicios y cuentas personales",
            "plataformas de entretenimiento y comunidad",
          ],
        },
      ],
    },
    {
      title: "Cómo crear uno",
      level: 2,
      paras: [
        "Estudio o freelance — desde un brief, menos riesgo de lógica torcida, más caro y lento. Un sitio listo de un marketplace ahorra tiempo pero arriesga filtros, agujeros de seguridad y contenido de terceros.",
        "Un builder DIY es un buen arranque para trabajos simples. Los tiers gratis a menudo recortan funciones, plantillas y dominio; un plan de pago suele ser más predecible para negocio.",
      ],
      lists: [
        {
          intro: "Antes de elegir vía:",
          items: [
            "presupuesto y plazos",
            "si necesitas catálogo, pago o integraciones",
            "quién actualizará el contenido",
            "si necesitas crecimiento en búsqueda (SEO)",
          ],
        },
      ],
      links: [
        {
          label: "Layout de sitios web",
          href: "/es/blog/verstka-saytov/",
        },
        {
          label: "Servidor web",
          href: "/es/blog/veb-server/",
        },
      ],
    },
    {
      title: "Cómo funciona por debajo",
      level: 2,
      paras: [
        "El usuario abre una URL en el navegador; la petición llega a un servidor; el servidor devuelve una página (HTML/CSS/JS y datos). Actualizar textos y productos suele ser trabajo de CMS — una vista pública más un panel de admin.",
        "Un editor solo necesita el admin. Lógica compleja, integraciones y rendimiento son territorio de desarrollo. Un sitio bien montado no atrae clientes solo: aún hacen falta demanda, promoción y servicio.",
      ],
      links: [
        {
          label: "Qué es SEO",
          href: "/es/blog/chto-takoe-seo/",
        },
        {
          label: "Agencia digital",
          href: "/es/blog/didzhital-agentstvo/",
        },
      ],
    },
  ],
  related: [
    "navigatsiya-sayta",
    "seo-struktura-sayta",
    "verstka-saytov",
    "veb-server",
    "chto-takoe-seo",
    "didzhital-agentstvo",
  ],
};
