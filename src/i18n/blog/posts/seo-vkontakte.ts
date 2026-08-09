import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-vkontakte — same structure as RU JSON. */
export const seoVkontakteEn: BlogPost = {
  slug: "seo-vkontakte",
  title: "VK community SEO: search and SMM in one loop",
  date: "2020-10-15",
  category: "SMM",
  cover: "/images/blog/seo-vkontakte/cover-en.webp",
  excerpt:
    "Why optimize a VK group for Yandex and Google, who it fits, how to work with name, description, content, and indexing — and how VK SEO differs from growing subscribers.",
  lead: [
    "VK communities sometimes appear in search for informational and local queries. SEO here isn’t “a site inside a social network” — careful packaging of name, description, content, and links so the community page and posts are clear to people and bots.",
    "Below: who it makes sense for, what to configure, and how to tie it to regular SMM. Audience growth and targeting are in related posts; here the focus is VK search visibility.",
  ],
  faq: [
    {
      q: "Does VK SEO replace a website?",
      a: "No. Complex sales, a catalog, and analytics need a site. The community is a trust and content channel and sometimes extra search traffic.",
    },
    {
      q: "Who benefits most?",
      a: "Local businesses, experts, niches with strong branded and informational demand where people look for a public page in the SERP.",
    },
    {
      q: "Do Yandex and Google index VK?",
      a: "Yes — public pages and some content can enter the index. Closed communities and privacy limits cut crawl.",
    },
    {
      q: "Do I need a keyword set?",
      a: "Yes, a short one: how people name the service or area, how they search “group/public + topic.” Don’t stuff 50 keywords into the name.",
    },
    {
      q: "How is it different from growing a group?",
      a: "Growth is subscribers, engagement rate, and reach. VK SEO is search visibility and snippets. They work together, but metrics differ.",
    },
    {
      q: "Do post links to the site help?",
      a: "As clicks and awareness — yes. As classic link equity — don’t count on it; a clear path to the site matters more.",
    },
    {
      q: "How long until I see an effect?",
      a: "Like regular search: weeks and months for recrawl — not “page one tomorrow.” Packaging and useful content first.",
    },
    {
      q: "Can commercial “buy” queries rank via VK?",
      a: "Often weaker than a site. More realistic: informational, branded, and local scenarios plus a handoff to the site or messenger.",
    },
  ],
  sections: [
    {
      title: "Why SEO for a VK community",
      level: 2,
      paras: [
        "People don’t only search sites: “brand name vk,” “auto shop district group,” reviews and how-tos. If the public is packaged clearly, the chance to appear in the SERP and take part of demand is higher.",
        "Extra: search traffic into the community can lead to the site, build trust, and feed behavior on your pages — a bonus, not magic.",
      ],
      lists: [
        {
          intro: "Pros of search + VK:",
          items: [
            "an extra entry next to the site",
            "live content and social proof",
            "cheaper start for small local business",
            "content can be reused on the site",
          ],
        },
      ],
    },
    {
      title: "Who it fits — and who it doesn’t",
      level: 2,
      paras: [
        "It works well in niches where the audience lives on VK and looks for contacts, reviews, events. Worse for complex B2B with a long deal cycle only via catalog and proposals: there the community supports, it isn’t the only channel.",
        "VK UI downside for hard sales: cart, filters, thousands of SEO landings — that’s site territory.",
      ],
      lists: [
        {
          intro: "Cues:",
          items: [
            "local and “nearby” services",
            "expert publics",
            "brands with a community",
            "not a store replacement",
          ],
        },
      ],
      links: [
        {
          label: "Growing a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Basic community optimization",
      level: 2,
      paras: [
        "Name: clear, pronounceable, with a moderate keyword if needed (“Studio N — apartment renovation”). Description and status — who you are, for whom, geo, how you help. Cover and avatar read in the snippet and feed.",
        "Page address (screen name) better short and stable. Contacts, action button, current products/services — no placeholder copy.",
      ],
      lists: [
        {
          intro: "Internal minimum:",
          items: [
            "needed sections public",
            "menu and pin with the offer",
            "consistent post style",
            "spam moderation",
            "site link in an obvious place",
          ],
        },
      ],
    },
    {
      title: "Keywords, posts, and indexing",
      level: 2,
      paras: [
        "Build a short set: brand, services, geo, informational topics. Spread across name, description, pinned and regular posts — without stuffing every paragraph.",
        "Article-style posts with structure and unique meaning have a better search chance than one-liners. Don’t rely on closed albums and Stories as SEO URLs.",
      ],
      lists: [
        {
          intro: "Content practice:",
          items: [
            "one post — one topic",
            "headline or first line matches query meaning",
            "value + CTA to site or message",
            "consistency beats bursts",
            "refresh outdated guides",
          ],
        },
      ],
      links: [
        {
          label: "VK article",
          href: "/en/blog/statya-vk/",
        },
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Behavior, links, and the site",
      level: 2,
      paras: [
        "Comment replies, response speed, useful discussions — part of community quality. For site SEO, VK links help as traffic and brand — not as a substitute for a normal backlink profile.",
        "Send people to a relevant landing, not always the homepage. UTM for analytics — yes; indexable site duplicates with tags — close with canonical.",
      ],
      lists: [
        {
          intro: "SMM ↔ SEO loop:",
          items: [
            "post topics ← site clusters",
            "VK cases → site articles",
            "search enters the public → public warms the lead",
            "metrics separate: rankings/traffic vs engagement rate/subscribers",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Stuffing a commercial keyword into the name and waiting for “buy” rankings without a site or offer. VK amplifies — it doesn’t replace the funnel.",
        },
      ],
    },
    {
      title: "Recommendations and control",
      level: 2,
      paras: [
        "Quarterly: description freshness, broken links, outdated promos in the pin, which posts from search actually bring people (Search Console / webmaster tools + VK stats).",
        "Don’t confuse subscriber spam with SEO: a dead audience hurts social signals and trust. Grow with live methods and content.",
      ],
      lists: [
        {
          intro: "Month checklist:",
          items: [
            "name/description without junk",
            "5–8 strong evergreen posts",
            "links to key site URLs",
            "`site:` check for the community URL",
            "topic plan from keywords, not whatever comes up",
          ],
        },
      ],
      links: [
        {
          label: "VK views",
          href: "/en/blog/prosmotry-vk/",
        },
      ],
    },
  ],
  related: [
    "raskrutka-gruppy-vk",
    "statya-vk",
    "semanticheskoe-yadro",
    "prosmotry-vk",
    "kontent-plan",
  ],
};

/** ES overlay for seo-vkontakte — same structure as RU JSON / EN. */
export const seoVkontakteEs: BlogPost = {
  slug: "seo-vkontakte",
  title: "SEO de comunidades VK: búsqueda y SMM en un mismo loop",
  date: "2020-10-15",
  category: "SMM",
  cover: "/images/blog/seo-vkontakte/cover.webp",
  excerpt:
    "Por qué optimizar un grupo de VK para Yandex y Google, a quién le encaja, cómo trabajar nombre, descripción, contenido e indexación — y en qué se diferencia el SEO de VK de crecer suscriptores.",
  lead: [
    "Las comunidades de VK a veces aparecen en la búsqueda por consultas informativas y locales. El SEO aquí no es «un sitio dentro de una red social» — es empaquetar con cuidado nombre, descripción, contenido y enlaces para que la página de la comunidad y los posts sean claros para personas y bots.",
    "Abajo: a quién le tiene sentido, qué configurar y cómo atarlo al SMM habitual. El crecimiento de audiencia y el targeting están en posts relacionados; aquí el foco es la visibilidad de VK en búsqueda.",
  ],
  faq: [
    {
      q: "¿El SEO de VK sustituye a un sitio web?",
      a: "No. Ventas complejas, un catálogo y analítica necesitan un sitio. La comunidad es un canal de confianza y contenido y a veces tráfico extra de búsqueda.",
    },
    {
      q: "¿Quién se beneficia más?",
      a: "Negocios locales, expertos, nichos con fuerte demanda de marca e informativa donde la gente busca una página pública en la SERP.",
    },
    {
      q: "¿Yandex y Google indexan VK?",
      a: "Sí — las páginas públicas y parte del contenido pueden entrar en el índice. Las comunidades cerradas y los límites de privacidad recortan el crawl.",
    },
    {
      q: "¿Hace falta un set de keywords?",
      a: "Sí, uno corto: cómo nombran el servicio o la zona, cómo buscan «grupo/público + tema». No metas 50 keywords en el nombre.",
    },
    {
      q: "¿En qué se diferencia de crecer un grupo?",
      a: "Crecer es suscriptores, engagement rate y alcance. El SEO de VK es visibilidad en búsqueda y snippets. Van juntos, pero las métricas difieren.",
    },
    {
      q: "¿Ayudan los enlaces de posts al sitio?",
      a: "Como clics y awareness — sí. Como equity clásico de enlaces — no cuentes con ello; importa más un camino claro al sitio.",
    },
    {
      q: "¿Cuánto tarda en verse un efecto?",
      a: "Como en la búsqueda habitual: semanas y meses para el recrawl — no «primera página mañana». Primero el empaquetado y el contenido útil.",
    },
    {
      q: "¿Pueden rankear consultas comerciales de «comprar» vía VK?",
      a: "A menudo más débiles que un sitio. Más realista: escenarios informativos, de marca y locales más un handoff al sitio o al messenger.",
    },
  ],
  sections: [
    {
      title: "Por qué SEO para una comunidad VK",
      level: 2,
      paras: [
        "La gente no busca solo sitios: «nombre de marca vk», «taller de autos grupo del barrio», reseñas y how-tos. Si el público está empaquetado con claridad, sube la chance de aparecer en la SERP y llevarse parte de la demanda.",
        "Extra: el tráfico de búsqueda hacia la comunidad puede llevar al sitio, construir confianza y alimentar el comportamiento en tus páginas — un bonus, no magia.",
      ],
      lists: [
        {
          intro: "Pros de búsqueda + VK:",
          items: [
            "una entrada extra junto al sitio",
            "contenido vivo y prueba social",
            "arranque más barato para un pequeño negocio local",
            "el contenido se puede reutilizar en el sitio",
          ],
        },
      ],
    },
    {
      title: "A quién le encaja — y a quién no",
      level: 2,
      paras: [
        "Funciona bien en nichos donde la audiencia vive en VK y busca contactos, reseñas, eventos. Peor para B2B complejo con un ciclo de deal largo solo vía catálogo y propuestas: ahí la comunidad apoya, no es el único canal.",
        "El downside de la UI de VK para ventas duras: carrito, filtros, miles de landings SEO — eso es territorio del sitio.",
      ],
      lists: [
        {
          intro: "Señales:",
          items: [
            "servicios locales y «cerca»",
            "públicos de expertos",
            "marcas con comunidad",
            "no un reemplazo de tienda",
          ],
        },
      ],
      links: [
        {
          label: "Crecer un grupo de VK",
          href: "/es/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Optimización básica de la comunidad",
      level: 2,
      paras: [
        "Nombre: claro, pronunciable, con un keyword moderado si hace falta («Studio N — reforma de pisos»). Descripción y estado — quiénes sois, para quién, geo, cómo ayudáis. Cover y avatar se leen en el snippet y en el feed.",
        "La dirección de la página (screen name) mejor corta y estable. Contactos, botón de acción, productos/servicios actuales — sin copy placeholder.",
      ],
      lists: [
        {
          intro: "Mínimo interno:",
          items: [
            "secciones necesarias públicas",
            "menú y pin con la oferta",
            "estilo de post coherente",
            "moderación de spam",
            "enlace al sitio en un sitio obvio",
          ],
        },
      ],
    },
    {
      title: "Keywords, posts e indexación",
      level: 2,
      paras: [
        "Arma un set corto: marca, servicios, geo, temas informativos. Repártelos en nombre, descripción, posts fijados y habituales — sin stuffing en cada párrafo.",
        "Los posts estilo artículo con estructura y sentido único tienen mejor chance en búsqueda que las frases de una línea. No cuentes con álbumes cerrados y Stories como URLs SEO.",
      ],
      lists: [
        {
          intro: "Práctica de contenido:",
          items: [
            "un post — un tema",
            "el titular o la primera línea encaja con el sentido de la consulta",
            "valor + CTA al sitio o al mensaje",
            "la consistencia gana a los bursts",
            "refresca guías desactualizadas",
          ],
        },
      ],
      links: [
        {
          label: "Artículo en VK",
          href: "/es/blog/statya-vk/",
        },
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Comportamiento, enlaces y el sitio",
      level: 2,
      paras: [
        "Respuestas a comentarios, velocidad de respuesta, discusiones útiles — parte de la calidad de la comunidad. Para el SEO del sitio, los enlaces de VK ayudan como tráfico y marca — no como sustituto de un perfil de backlinks normal.",
        "Manda a la gente a un landing relevante, no siempre a la homepage. UTM para analítica — sí; duplicados indexables del sitio con tags — cierra con canonical.",
      ],
      lists: [
        {
          intro: "Loop SMM ↔ SEO:",
          items: [
            "temas de posts ← clusters del sitio",
            "casos de VK → artículos del sitio",
            "la búsqueda entra al público → el público calienta el lead",
            "métricas aparte: rankings/tráfico vs engagement rate/suscriptores",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Meter un keyword comercial en el nombre y esperar rankings de «comprar» sin sitio ni oferta. VK amplifica — no sustituye el funnel.",
        },
      ],
    },
    {
      title: "Recomendaciones y control",
      level: 2,
      paras: [
        "Trimestral: frescura de la descripción, enlaces rotos, promos desactualizadas en el pin, qué posts desde la búsqueda traen gente de verdad (Search Console / herramientas de webmaster + stats de VK).",
        "No confundas spam de suscriptores con SEO: una audiencia muerta daña señales sociales y confianza. Crece con métodos vivos y contenido.",
      ],
      lists: [
        {
          intro: "Checklist del mes:",
          items: [
            "nombre/descripción sin basura",
            "5–8 posts evergreen fuertes",
            "enlaces a URLs clave del sitio",
            "check `site:` de la URL de la comunidad",
            "plan de temas desde keywords, no lo que salga",
          ],
        },
      ],
      links: [
        {
          label: "Vistas en VK",
          href: "/es/blog/prosmotry-vk/",
        },
      ],
    },
  ],
  related: [
    "raskrutka-gruppy-vk",
    "statya-vk",
    "semanticheskoe-yadro",
    "prosmotry-vk",
    "kontent-plan",
  ],
};
