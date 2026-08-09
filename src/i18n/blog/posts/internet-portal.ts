import type { BlogPost } from "../../../data/blog";

/** EN overlay for internet-portal — same structure as RU JSON. */
export const internetPortalEn: BlogPost = {
  slug: "internet-portal",
  title: "Internet portal: structure, types, and how it differs from a site",
  date: "2021-02-02",
  category: "Digital marketing",
  cover: "/images/blog/internet-portal/cover-en.webp",
  excerpt:
    "What an internet portal is, how it differs from a regular site, how structure and types break down — and when a business needs a portal versus a services site.",
  lead: [
    "An internet portal is a large multi-function platform: news, tools, accounts, catalogs, and services in one ecosystem. People arrive to orient themselves and stay to finish several jobs in a row.",
    "Below: how a portal is built, how it differs from a company site, and which types show up in practice. This is not a “build the next Google in a month” brief — a portal is scale, editorial capacity, and product logic.",
    "If you need a services site or a lead landing, simpler and cheaper usually wins. A portal pays off when the value is the bundle of sections and services, not one page with a form.",
  ],
  faq: [
    {
      q: "How does a portal differ from a site?",
      a: "A site usually covers one role — storefront, shop, or blog. A portal combines several services and journeys under one entry and navigation.",
    },
    {
      q: "Is a portal the same as a marketplace?",
      a: "Not necessarily. A marketplace is one type. A portal can be news, corporate, industry, government services, or media plus tools.",
    },
    {
      q: "Does a portal need SEO?",
      a: "Yes: sections, snippets, speed, indexing. Success still leans harder on product, content, and retention inside the ecosystem.",
    },
    {
      q: "How long does a launch take?",
      a: "An MVP for a narrow industry portal takes months. A large ecosystem takes years of iteration. SEO prep and page-one visibility for sections are different clocks.",
    },
    {
      q: "Can a regular corporate site be called a portal?",
      a: "Marketers sometimes stretch the word. In substance — no, if there is no multi-service depth and a deep section map.",
    },
    {
      q: "What matters more: design or structure?",
      a: "Structure and journeys. Pretty UI without a clear section map becomes a maze.",
    },
    {
      q: "Do you need a personal account?",
      a: "Often yes: personalization, saved data, requests, subscriptions. See the personal-account article.",
    },
    {
      q: "Should a portal chase head terms?",
      a: "Big head terms are crowded. A working plan is clusters per section and service, plus brand. Visibility for the core set is planned over months of work — often 2–6 months for commercial clusters.",
    },
  ],
  sections: [
    {
      title: "What users expect from a portal",
      level: 2,
      paras: [
        "On a portal people finish several jobs without ten tabs: news, a directory, a personal service, section search, sometimes payment or a request. The expectation is “everything I need on this topic lives here.”",
        "That is why a single entry point, a clear menu, sitewide search, and a sense that sections connect — not randomly glued — matter so much.",
      ],
      lists: [
        {
          intro: "Typical journeys:",
          items: [
            "read a news item and dive into a guide",
            "find a service or product and take action",
            "open the account and check status",
            "use a calculator, map, or catalog",
          ],
        },
      ],
    },
    {
      title: "Site vs portal: the difference",
      level: 2,
      paras: [
        "A company site answers “who you are and how to buy.” A portal answers “how to live in this topic”: information, tools, and community or services.",
        "The line is blurry. A large media site with subscriptions sits close to a portal. A three-page “portal” is usually just a loud label.",
      ],
      lists: [
        {
          intro: "Practical differences:",
          items: [
            "depth of sections and services",
            "personal account and user roles",
            "editorial, moderation, and update cadence",
            "integrations — payment, CRM, partner APIs",
            "load and architecture above a business-card site",
          ],
        },
      ],
      links: [
        {
          label: "Personal account",
          href: "/en/blog/lichnyy-kabinet/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Structure: what it’s built from",
      level: 2,
      paras: [
        "The frame is a section map, page-type templates, global navigation, search, and an account. Separately — permissions: guest, user, editor, admin.",
        "Content lives by categories and entities — articles, cards, events. Services are products inside the product: each has its own entry and metrics.",
      ],
      lists: [
        {
          intro: "Core blocks:",
          items: [
            "home as navigator",
            "content sections",
            "catalogs and databases",
            "service tools",
            "account and notifications",
            "help, FAQ, support",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Shipping “everything at once” without prioritizing journeys. Better to launch one or two strong services and grow than a half-empty zoo of sections.",
        },
      ],
    },
    {
      title: "Portal types",
      level: 2,
      paras: [
        "By audience: horizontal (broad topic) and vertical (industry). By model: media, services, marketplaces, corporate or intranet, government.",
        "Businesses usually care about industry and corporate builds: expertise, account, leads — without pretending to be the whole internet.",
      ],
      lists: [
        {
          intro: "Logic examples (not a brand ranking):",
          items: [
            "news or media portal — editorial and reach",
            "service portal — utilities and return visits",
            "commerce — catalog and deals",
            "corporate — employees and documents",
            "industry — narrow audience and leads",
          ],
        },
      ],
    },
    {
      title: "When a business needs a portal",
      level: 2,
      paras: [
        "It makes sense when the value is the ecosystem: knowledge base, client accounts, partner catalog, requests. If the goal is one service and a call, a site or landing is cheaper.",
        "Count support cost: editorial, moderation, development, security. A portal without updates looks dead fast.",
      ],
      lists: [
        {
          intro: "Before you start, answer:",
          items: [
            "which three journeys are required in the MVP",
            "who fills content every week",
            "how you measure success — not traffic alone",
            "whether the budget covers a year or more of support",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
      ],
    },
    {
      title: "SEO and analytics on a portal",
      level: 2,
      paras: [
        "Split keyword sets by section, avoid thin category duplicates, watch pagination and filters. On the tech side: speed, mobile, indexing, error logs.",
        "In analytics look past entry pages — paths through services and account conversions. Structure prep takes weeks. Building visibility for commercial clusters is planned over 2–6 months.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "landing map for clusters",
            "canonical and parameter policy",
            "separate goals for key services",
            "404 and 5xx monitoring on templates",
          ],
        },
      ],
      links: [
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Shipping a portal MVP is not the same as sections ranking on page one. Product and indexing first, then grow visibility for the keyword set.",
        },
      ],
    },
  ],
};

/** ES overlay for internet-portal — same structure as RU JSON / EN. */
export const internetPortalEs: BlogPost = {
  slug: "internet-portal",
  title: "Portal de internet: estructura, tipos y cómo se diferencia de un sitio",
  date: "2021-02-02",
  category: "Digital marketing",
  cover: "/images/blog/internet-portal/cover.webp",
  excerpt:
    "Qué es un portal de internet, cómo se diferencia de un sitio normal, cómo se parten estructura y tipos — y cuándo un negocio necesita un portal frente a un sitio de servicios.",
  lead: [
    "Un portal de internet es una plataforma grande y multifunción: noticias, tools, cuentas, catálogos y servicios en un ecosistema. La gente llega para orientarse y se queda a terminar varios trabajos seguidos.",
    "Abajo: cómo se arma un portal, cómo se diferencia de un sitio de empresa y qué tipos aparecen en la práctica. No es un brief de «monta el próximo Google en un mes» — un portal es escala, capacidad editorial y lógica de producto.",
    "Si necesitas un sitio de servicios o un landing de leads, lo más simple y barato suele ganar. Un portal compensa cuando el valor es el paquete de secciones y servicios, no una página con un formulario.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un portal de un sitio?",
      a: "Un sitio suele cubrir un rol — escaparate, tienda o blog. Un portal combina varios servicios y recorridos bajo una entrada y navegación.",
    },
    {
      q: "¿Un portal es lo mismo que un marketplace?",
      a: "No necesariamente. Un marketplace es un tipo. Un portal puede ser de noticias, corporativo, de industria, de servicios públicos, o media más tools.",
    },
    {
      q: "¿Un portal necesita SEO?",
      a: "Sí: secciones, snippets, velocidad, indexación. El éxito sigue apoyándose más en producto, contenido y retención dentro del ecosistema.",
    },
    {
      q: "¿Cuánto tarda un lanzamiento?",
      a: "Un MVP de un portal de industria estrecho lleva meses. Un ecosistema grande, años de iteración. La prep SEO y la visibilidad en primera página de las secciones son relojes distintos.",
    },
    {
      q: "¿Se puede llamar portal a un sitio corporativo normal?",
      a: "A veces marketing estira la palabra. En sustancia — no, si no hay profundidad multi-servicio y un mapa profundo de secciones.",
    },
    {
      q: "¿Qué importa más: diseño o estructura?",
      a: "Estructura y recorridos. Una UI bonita sin un mapa claro de secciones se vuelve un laberinto.",
    },
    {
      q: "¿Hace falta una cuenta personal?",
      a: "A menudo sí: personalización, datos guardados, solicitudes, suscripciones. Ver el artículo de cuenta personal.",
    },
    {
      q: "¿Debe un portal perseguir términos head?",
      a: "Los head grandes están saturados. Un plan que funciona son clusters por sección y servicio, más marca. La visibilidad del set núcleo se planifica a meses de trabajo — a menudo 2–6 meses para clusters comerciales.",
    },
  ],
  sections: [
    {
      title: "Qué esperan los usuarios de un portal",
      level: 2,
      paras: [
        "En un portal la gente termina varios trabajos sin diez pestañas: noticias, un directorio, un servicio personal, búsqueda por sección, a veces pago o una solicitud. La expectativa es «todo lo que necesito de este tema vive aquí».",
        "Por eso importan tanto una entrada única, un menú claro, búsqueda en todo el sitio y la sensación de que las secciones conectan — no están pegadas al azar.",
      ],
      lists: [
        {
          intro: "Recorridos típicos:",
          items: [
            "leer una noticia y entrar en una guía",
            "encontrar un servicio o producto y actuar",
            "abrir la cuenta y revisar el estado",
            "usar una calculadora, mapa o catálogo",
          ],
        },
      ],
    },
    {
      title: "Sitio vs portal: la diferencia",
      level: 2,
      paras: [
        "Un sitio de empresa responde «quién eres y cómo comprar». Un portal responde «cómo vivir en este tema»: información, tools y comunidad o servicios.",
        "La línea es borrosa. Un media grande con suscripciones se acerca a un portal. Un «portal» de tres páginas suele ser solo una etiqueta ruidosa.",
      ],
      lists: [
        {
          intro: "Diferencias prácticas:",
          items: [
            "profundidad de secciones y servicios",
            "cuenta personal y roles de usuario",
            "editorial, moderación y ritmo de updates",
            "integraciones — pago, CRM, APIs de partners",
            "carga y arquitectura por encima de un sitio tarjeta de visita",
          ],
        },
      ],
      links: [
        {
          label: "Cuenta personal",
          href: "/es/blog/lichnyy-kabinet/",
        },
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Estructura: de qué se construye",
      level: 2,
      paras: [
        "El marco es un mapa de secciones, plantillas de tipos de página, navegación global, búsqueda y una cuenta. Aparte — permisos: invitado, usuario, editor, admin.",
        "El contenido vive por categorías y entidades — artículos, fichas, eventos. Los servicios son productos dentro del producto: cada uno tiene su entrada y métricas.",
      ],
      lists: [
        {
          intro: "Bloques núcleo:",
          items: [
            "home como navegador",
            "secciones de contenido",
            "catálogos y bases de datos",
            "tools de servicio",
            "cuenta y notificaciones",
            "ayuda, FAQ, soporte",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Entregar «todo a la vez» sin priorizar recorridos. Mejor lanzar uno o dos servicios fuertes y crecer que un zoológico a medias de secciones.",
        },
      ],
    },
    {
      title: "Tipos de portal",
      level: 2,
      paras: [
        "Por audiencia: horizontal (tema amplio) y vertical (industria). Por modelo: media, servicios, marketplaces, corporativo o intranet, gobierno.",
        "A los negocios suele importarles builds de industria y corporativos: expertise, cuenta, leads — sin pretender ser todo internet.",
      ],
      lists: [
        {
          intro: "Ejemplos de lógica (no un ranking de marcas):",
          items: [
            "portal de noticias o media — editorial y reach",
            "portal de servicios — utilidades y visitas de retorno",
            "comercio — catálogo y deals",
            "corporativo — empleados y documentos",
            "industria — audiencia estrecha y leads",
          ],
        },
      ],
    },
    {
      title: "Cuándo un negocio necesita un portal",
      level: 2,
      paras: [
        "Tiene sentido cuando el valor es el ecosistema: knowledge base, cuentas de cliente, catálogo de partners, solicitudes. Si el objetivo es un servicio y una llamada, un sitio o landing sale más barato.",
        "Cuenta el coste de soporte: editorial, moderación, desarrollo, seguridad. Un portal sin updates se ve muerto rápido.",
      ],
      lists: [
        {
          intro: "Antes de empezar, responde:",
          items: [
            "qué tres recorridos son obligatorios en el MVP",
            "quién llena contenido cada semana",
            "cómo mides el éxito — no solo tráfico",
            "si el presupuesto cubre un año o más de soporte",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/es/blog/lending/",
        },
        {
          label: "Agencia digital",
          href: "/es/blog/didzhital-agentstvo/",
        },
      ],
    },
    {
      title: "SEO y analytics en un portal",
      level: 2,
      paras: [
        "Parte los sets de keywords por sección, evita duplicados thin de categoría, vigila paginación y filtros. En lo técnico: velocidad, móvil, indexación, logs de error.",
        "En analytics mira más allá de las páginas de entrada — caminos por servicios y conversiones de cuenta. La prep de estructura lleva semanas. Construir visibilidad para clusters comerciales se planifica a 2–6 meses.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "mapa de landings por clusters",
            "política de canonical y parámetros",
            "objetivos separados para servicios clave",
            "monitoreo 404 y 5xx en plantillas",
          ],
        },
      ],
      links: [
        {
          label: "Paginación",
          href: "/es/blog/paginatsiya/",
        },
        {
          label: "SEO DIY",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Entregar el MVP de un portal no es lo mismo que que las secciones rankeen en primera página. Primero producto e indexación, luego crece la visibilidad del set de keywords.",
        },
      ],
    },
  ],
};
