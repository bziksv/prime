import type { BlogPost } from "../../../data/blog";

/** EN overlay for obzor-cms — same structure as RU JSON. */
export const obzorCmsEn: BlogPost = {
  slug: "obzor-cms",
  title: "CMS overview: WordPress, Joomla, Bitrix, Drupal, MODX, and DLE",
  date: "2017-01-10",
  category: "Digital marketing",
  cover: "/images/blog/obzor-cms/cover-en.webp",
  excerpt:
    "A look at popular CMS options: WordPress, Joomla, 1C-Bitrix, Drupal, MODX, and DLE — pros, cons, and which jobs they fit, without 2017 market-share charts or the myth that “the engine ranks you.”",
  lead: [
    "A CMS is how you edit pages, catalogs, and media without rewriting the whole site in a text editor. Choice depends on the job, budget, hosting, and who will support the project.",
    "Below is a short tour of six engines people ask about most — not a forever “#1” ranking. Market share and fashion change. For stores, see a separate platform comparison; Bitrix gets a deeper piece of its own.",
  ],
  faq: [
    {
      q: "Which CMS is best?",
      a: "The one that covers the job at acceptable TCO. There is no universal winner.",
    },
    {
      q: "Is a free CMS always cheaper?",
      a: "Entry is cheaper; ownership isn’t: plugins, security, a developer, hosting. Count a year of ownership.",
    },
    {
      q: "Does the CMS put you on page one?",
      a: "No. The engine should not block SEO. Rankings come from content, tech, and months of work — prep ≠ page one. Core growth is planned over 2–6 months after work starts.",
    },
    {
      q: "How do you detect another site’s CMS?",
      a: "From open HTML and path clues — in a separate article. Not hacking.",
    },
    {
      q: "Should I use a site builder instead?",
      a: "For a landing and a simple site — often yes. For a complex catalog and custom integrations — more often a classic CMS or custom build.",
    },
  ],
  sections: [
    {
      title: "What a CMS is in plain English",
      level: 2,
      paras: [
        "A CMS gives you an admin: pages, menus, users, media, sometimes a store and forms. Under the hood — templates, a database, and code that serves HTML to visitors.",
        "Before choosing, lock: brochure, blog, portal, store; whether you need root on the server; who edits content daily.",
      ],
      links: [
        {
          label: "How to detect a CMS",
          href: "/en/blog/uznat-cms/",
        },
        {
          label: "Hosting",
          href: "/en/blog/hosting/",
        },
      ],
    },
    {
      title: "WordPress",
      level: 2,
      paras: [
        "Open source, a huge theme and plugin ecosystem, an easy entry for editors. Blogs, corporate sites, landings; a store — via WooCommerce and solid hosting.",
        "Downsides: popularity attracts attackers (fixed with updates and hygiene); on weak hosting with a plugin pile it’s easy to hit speed limits. No personal vendor support like paid CMS — community and contractors.",
      ],
      lists: [
        {
          intro: "When it fits:",
          items: [
            "content and marketing sites",
            "need a fast admin for editors",
            "budget for plugin care",
            "mid-size Woo store — on purpose",
          ],
        },
      ],
      links: [
        {
          label: "Installing WordPress",
          href: "/en/blog/wordpress-ustanovka/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "Joomla",
      level: 2,
      paras: [
        "A universal open-source CMS: brochure sites, corporate, small catalogs. More flexible “out of the box” in structure than a simple blog, but a higher entry bar than WordPress.",
        "The extension ecosystem is alive but no longer at the center of hype: plan for a specialist and security updates.",
      ],
    },
    {
      title: "1C-Bitrix",
      level: 2,
      paras: [
        "A commercial platform with a strong ecosystem in Russia: roles, modules, corporate and store scenarios, 1C integrations. Hosting and budget needs are higher than a “blog on shared.”",
        "UI and custom work need discipline: chaotic changes make the project heavy. A full pros/cons breakdown is separate; store-context downsides live in the store-engine overview.",
      ],
      links: [
        {
          label: "Bitrix pros and cons",
          href: "/en/blog/bitrix-plyusy-minusy/",
        },
        {
          label: "CMS for an online store",
          href: "/en/blog/cms-internet-magazina/",
        },
      ],
    },
    {
      title: "Drupal",
      level: 2,
      paras: [
        "Closer to a CMF: from modules you assemble portals, complex roles, sometimes stores and internal systems. Powerful and flexible, but costlier to implement and support than “install a theme and write posts.”",
        "DB load and hosting needs are above average — you need a capable admin or a managed environment.",
      ],
    },
    {
      title: "MODX",
      level: 2,
      paras: [
        "A free CMS with strong markup control: handy when layout and structure matter more than a “one-click theme shop.” For beginners the downside is fewer ready “install and forget” templates than WordPress.",
        "Fits sites where clean HTML and custom logic matter with a relatively light core.",
      ],
      links: [
        {
          label: "MODX on localhost",
          href: "/en/blog/modx-local/",
        },
      ],
    },
    {
      title: "DLE (DataLife Engine)",
      level: 2,
      paras: [
        "Historically popular for news and media portals: feeds, categories, load. Check the license model and terms with the vendor; don’t rely on “free nulled” builds.",
        "For beginners the admin and templates are often less friendly than WordPress: some work goes through templates and extra fields. Take it if the team already knows DLE and the job is a media feed.",
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Picking a CMS from a “2017 popularity ranking” article without weighing the team and TCO.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to choose in one pass",
      level: 2,
      paras: [
        "Build a matrix: site type × integrations × who admins × yearly budget × speed and SEO needs. Cut platforms that are too heavy for a landing and too light for a complex B2B catalog.",
        "A demo and pilot on staging beat arguments about which engine is “cooler.”",
      ],
      lists: [
        {
          intro: "Rough compass:",
          items: [
            "blog / marketing site — WordPress",
            "corporate with roles in RU — often Bitrix",
            "complex portal — Drupal or Bitrix",
            "custom layout — MODX / a framework",
            "media feed — DLE if the team knows it",
            "store — a separate store-platform comparison",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A CMS is a tool for the job and the team. Popularity eases hiring but does not cancel security, backups, and speed.",
        "The engine does not replace content and promotion. Requirements first, then license and theme.",
      ],
    },
  ],
  closing: [
    "Describe the job and TCO, compare WordPress, Bitrix, and the rest against the real support team — and only then buy a license or install the “most popular” engine from someone else’s ranking.",
  ],
  related: [
    "uznat-cms",
    "cms-internet-magazina",
    "bitrix-plyusy-minusy",
    "wordpress-ustanovka",
    "hosting",
    "modx-local",
  ],
};

/** ES overlay for obzor-cms — same structure as RU JSON / EN. */
export const obzorCmsEs: BlogPost = {
  slug: "obzor-cms",
  title: "Overview de CMS: WordPress, Joomla, Bitrix, Drupal, MODX y DLE",
  date: "2017-01-10",
  category: "Digital marketing",
  cover: "/images/blog/obzor-cms/cover.webp",
  excerpt:
    "Un repaso a opciones populares de CMS: WordPress, Joomla, 1C-Bitrix, Drupal, MODX y DLE — pros, contras y a qué trabajos encajan, sin charts de cuota de mercado de 2017 ni el mito de que «el motor te posiciona».",
  lead: [
    "Un CMS es cómo editas páginas, catálogos y media sin reescribir todo el sitio en un editor de texto. La elección depende del trabajo, presupuesto, hosting y quién soportará el proyecto.",
    "Abajo va un tour corto de seis motores por los que más preguntan — no un ranking eterno de «número uno». La cuota de mercado y la moda cambian. Para tiendas, hay una comparación de plataformas aparte; Bitrix tiene una pieza más profunda propia.",
  ],
  faq: [
    {
      q: "¿Qué CMS es el mejor?",
      a: "El que cubre el trabajo a un TCO aceptable. No hay un ganador universal.",
    },
    {
      q: "¿Un CMS gratis siempre es más barato?",
      a: "La entrada es más barata; la propiedad no: plugins, seguridad, un desarrollador, hosting. Cuenta un año de ownership.",
    },
    {
      q: "¿El CMS te pone en la primera página?",
      a: "No. El motor no debería bloquear el SEO. Los rankings vienen de contenido, técnica y meses de trabajo — prep ≠ primera página. El crecimiento del núcleo se planifica en 2–6 meses tras empezar el trabajo.",
    },
    {
      q: "¿Cómo detectas el CMS de otro sitio?",
      a: "Desde pistas abiertas de HTML y rutas — en un artículo aparte. No es hacking.",
    },
    {
      q: "¿Debería usar un site builder en su lugar?",
      a: "Para un landing y un sitio simple — a menudo sí. Para un catálogo complejo e integraciones custom — más a menudo un CMS clásico o un build a medida.",
    },
  ],
  sections: [
    {
      title: "Qué es un CMS en palabras simples",
      level: 2,
      paras: [
        "Un CMS te da un admin: páginas, menús, usuarios, media, a veces una tienda y formularios. Por debajo — plantillas, una base de datos y código que sirve HTML a los visitantes.",
        "Antes de elegir, fija: brochure, blog, portal, tienda; si necesitas root en el servidor; quién edita contenido a diario.",
      ],
      links: [
        {
          label: "Cómo detectar un CMS",
          href: "/es/blog/uznat-cms/",
        },
        {
          label: "Hosting",
          href: "/es/blog/hosting/",
        },
      ],
    },
    {
      title: "WordPress",
      level: 2,
      paras: [
        "Open source, un ecosistema enorme de temas y plugins, entrada fácil para editores. Blogs, sitios corporativos, landings; una tienda — vía WooCommerce y hosting sólido.",
        "Contras: la popularidad atrae atacantes (se arregla con updates e higiene); en hosting débil con una pila de plugins es fácil chocar con límites de velocidad. Sin soporte personal del vendor como un CMS de pago — comunidad y contratistas.",
      ],
      lists: [
        {
          intro: "Cuándo encaja:",
          items: [
            "sitios de contenido y marketing",
            "necesitas un admin rápido para editores",
            "presupuesto para cuidado de plugins",
            "tienda Woo de tamaño medio — a propósito",
          ],
        },
      ],
      links: [
        {
          label: "Instalar WordPress",
          href: "/es/blog/wordpress-ustanovka/",
        },
        {
          label: "Seguridad de WordPress",
          href: "/es/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "Joomla",
      level: 2,
      paras: [
        "Un CMS open-source universal: sitios brochure, corporativos, catálogos pequeños. Más flexible «de fábrica» en estructura que un blog simple, pero con una barra de entrada más alta que WordPress.",
        "El ecosistema de extensiones está vivo pero ya no en el centro del hype: planifica un especialista y updates de seguridad.",
      ],
    },
    {
      title: "1C-Bitrix",
      level: 2,
      paras: [
        "Una plataforma comercial con ecosistema fuerte en Rusia: roles, módulos, escenarios corporativos y de tienda, integraciones 1C. Las necesidades de hosting y presupuesto son más altas que un «blog en shared».",
        "La UI y el custom necesitan disciplina: cambios caóticos hacen el proyecto pesado. Un desglose completo de pros/contras es aparte; los contras en contexto de tienda viven en el overview de motores de tienda.",
      ],
      links: [
        {
          label: "Pros y contras de Bitrix",
          href: "/es/blog/bitrix-plyusy-minusy/",
        },
        {
          label: "CMS para una tienda online",
          href: "/es/blog/cms-internet-magazina/",
        },
      ],
    },
    {
      title: "Drupal",
      level: 2,
      paras: [
        "Más cerca de un CMF: desde módulos armas portales, roles complejos, a veces tiendas y sistemas internos. Potente y flexible, pero más caro de implementar y soportar que «instala un tema y escribe posts».",
        "La carga de BD y las necesidades de hosting están por encima de la media — hace falta un admin capaz o un entorno managed.",
      ],
    },
    {
      title: "MODX",
      level: 2,
      paras: [
        "Un CMS gratis con fuerte control del markup: útil cuando layout y estructura importan más que una «tienda de temas de un clic». Para principiantes el contra es menos plantillas listas «instala y olvida» que WordPress.",
        "Encaja en sitios donde importan HTML limpio y lógica custom con un core relativamente ligero.",
      ],
      links: [
        {
          label: "MODX en localhost",
          href: "/es/blog/modx-local/",
        },
      ],
    },
    {
      title: "DLE (DataLife Engine)",
      level: 2,
      paras: [
        "Históricamente popular para portales de noticias y media: feeds, categorías, carga. Revisa el modelo de licencia y los términos con el vendor; no te fíes de builds «nulled gratis».",
        "Para principiantes el admin y las plantillas suelen ser menos amigables que WordPress: parte del trabajo va por plantillas y campos extra. Tómalo si el equipo ya conoce DLE y el trabajo es un feed media.",
      ],
      notes: [
        {
          title: "Error habitual",
          text: "Elegir un CMS desde un artículo de «ranking de popularidad de 2017» sin pesar el equipo y el TCO.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Cómo elegir en un pase",
      level: 2,
      paras: [
        "Arma una matriz: tipo de sitio × integraciones × quién administra × presupuesto anual × necesidades de velocidad y SEO. Corta plataformas demasiado pesadas para un landing y demasiado ligeras para un catálogo B2B complejo.",
        "Una demo y un piloto en staging ganan a discusiones sobre qué motor es «más cool».",
      ],
      lists: [
        {
          intro: "Brújula aproximada:",
          items: [
            "blog / sitio de marketing — WordPress",
            "corporativo con roles en RU — a menudo Bitrix",
            "portal complejo — Drupal o Bitrix",
            "layout custom — MODX / un framework",
            "feed media — DLE si el equipo lo conoce",
            "tienda — una comparación aparte de plataformas de tienda",
          ],
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Un CMS es una herramienta para el trabajo y el equipo. La popularidad facilita contratar, pero no cancela seguridad, backups y velocidad.",
        "El motor no sustituye contenido y promoción. Primero requisitos, luego licencia y tema.",
      ],
    },
  ],
  closing: [
    "Describe el trabajo y el TCO, compara WordPress, Bitrix y el resto contra el equipo de soporte real — y solo entonces compra una licencia o instala el motor «más popular» del ranking de otro.",
  ],
  related: [
    "uznat-cms",
    "cms-internet-magazina",
    "bitrix-plyusy-minusy",
    "wordpress-ustanovka",
    "hosting",
    "modx-local",
  ],
};
