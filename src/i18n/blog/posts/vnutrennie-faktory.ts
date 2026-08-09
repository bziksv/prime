import type { BlogPost } from "../../../data/blog";

/** EN overlay for vnutrennie-faktory — same structure as RU JSON. */
export const vnutrennieFaktoryEn: BlogPost = {
  slug: "vnutrennie-faktory",
  title: "Internal ranking factors: what to fix on the site",
  date: "2019-07-17",
  category: "SEO",
  cover: "/images/blog/vnutrennie-faktory/cover-en.webp",
  excerpt:
    "On-page SEO without mystique: content, structure, internal linking, HTTPS, speed, and mobile — what to control on your side and in what order.",
  lead: [
    "Internal ranking factors are everything you can improve on the site itself: copy and media, URL structure, headings and snippets, internal linking, HTTPS, speed, mobile, and usability.",
    "External signals (links, mentions, some behavioral effects) take longer and are harder to control directly. Below: a practical on-page map — what to check, where to dig deeper, and how not to confuse prep work with promising page one “next week.”",
  ],
  faq: [
    {
      q: "How do internal factors differ from external ones?",
      a: "Internal — on your domain: content, tech, structure, UX. External — links and signals off-site. Both matter; without an on-page base, external efforts often stall.",
    },
    {
      q: "Where do I start if the site is raw?",
      a: "Indexing and status codes, HTTPS, mobile, unique title/H1 on commercial URLs, basic structure and speed. Then content depth and internal linking.",
    },
    {
      q: "Is this the same as a technical SEO audit?",
      a: "They overlap. An audit is a check method; internal factors are an influence map. The audit answers “what’s broken”; this article covers “what counts as on-page.”",
    },
    {
      q: "Must every item be perfect?",
      a: "No. Prioritize by business impact: commercial landing pages and crawl paths first. Snippet cosmetics without indexing are useless.",
    },
    {
      q: "Do images and video matter?",
      a: "Yes: meaning (alt text, context), file weight (speed), and time on page. Heavy uncompressed media hurts Core Web Vitals and UX.",
    },
    {
      q: "Is internal linking an internal factor?",
      a: "Yes. It passes equity and helps bots and people find important URLs. Without it, clusters live in isolation.",
    },
    {
      q: "Is usability SEO?",
      a: "There’s no direct “button score,” but convenience affects behavior and conversion. Bad UX eats the benefit even with good rankings.",
    },
    {
      q: "When should I expect rank growth after fixes?",
      a: "On-page prep and cleanup — typically a few weeks to about a month. A meaningful share of the core set on page one is typically planned for 2–6 months after systematic work starts — not “tomorrow after HTTPS.”",
    },
  ],
  sections: [
    {
      title: "Map: internal vs. external",
      level: 2,
      paras: [
        "Search evaluates the page and the site as a whole. Simply put: internal factors are what you edit in the CMS, templates, and on the server; external — links, mentions, signals around the domain.",
        "A classic mistake is chasing links onto a raw site: slow, without HTTPS, with duplicates and empty landing pages. First make the resource readable for bots and people, then strengthen off-site signals.",
      ],
      lists: [
        {
          intro: "Internal factors usually include:",
          items: [
            "content: copy, media, uniqueness, and intent match",
            "meta and headings: title, description, H1–H3",
            "URL structure and navigation",
            "internal linking",
            "HTTPS, speed, mobile-friendly",
            "basic UX: forms, readability, clickability",
          ],
        },
        {
          intro: "External — rough guide:",
          items: [
            "quality and diversity of inbound links",
            "brand mentions",
            "some behavioral effects outside your direct control",
          ],
        },
      ],
      links: [
        {
          label: "Backlink profile analysis",
          href: "/en/blog/ssylochnyy-profil/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Content, headings, and snippets",
      level: 2,
      paras: [
        "The page should answer the query — not “stuff the keyword,” but close the user’s job. One clear H1, a logical H2–H3 hierarchy, title and description that aren’t copies of each other.",
        "Media should support meaning: clear file names, sensible alt text, reasonable weight. Empty filler and template duplicates are weaker than unique materials for the cluster.",
      ],
      lists: [
        {
          intro: "Landing page minimum:",
          items: [
            "unique title and description",
            "one H1, no competing copies",
            "copy and media matched to cluster intent",
            "no cannibalization with neighboring URLs",
          ],
        },
      ],
      links: [
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
        {
          label: "Query cannibalization",
          href: "/en/blog/kannibalizatsiya-zaprosov/",
        },
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "Site structure, URLs, and internal linking",
      level: 2,
      paras: [
        "Clean URLs and short readable paths help people and the snippet. Breadcrumbs and clear navigation reduce “getting lost” on the site.",
        "Internal links build clusters: from overviews to detail, from related pages to the intent anchor. Menu and footer shouldn’t spawn thousands of weak links to junk URLs.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "section map built around keywords, not “whatever the CMS made”",
            "Latin URLs, no junk params in the canonical",
            "linking to commercial pages and answers, not only home",
            "duplicates and pagination under control (canonical / noindex by scenario)",
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Page duplicates",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "Tech: HTTPS, speed, mobile",
      level: 2,
      paras: [
        "HTTPS is a baseline expectation for browsers and users: no mixed content, a valid certificate, and http→https redirect. Speed (Core Web Vitals and felt load) affects bounces and crawl.",
        "Mobile-first: templates must work on a phone — taps, forms, readability. A separate “2012 mobile version” with cut content is a risk.",
      ],
      lists: [
        {
          intro: "Control list:",
          items: [
            "valid SSL and chain",
            "no mixed content on key templates",
            "image compression, cache, sensible JS",
            "responsive layout without horizontal scroll and micro-buttons",
          ],
        },
      ],
      links: [
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
        {
          label: "Common SEO mistakes",
          href: "/en/blog/seo-oshibki/",
        },
      ],
    },
    {
      title: "Usability and on-site behavior",
      level: 2,
      paras: [
        "Usability isn’t “bought” with fake engagement. Readable copy, a clear CTA, working forms, and no pop-up traps cut irritation and help conversion.",
        "If the user can’t find an answer or hits a 500 error — rankings and ads won’t save you. UX is part of internal factors in a broad sense: you control the template and content.",
      ],
      lists: [
        {
          intro: "What to check by hand:",
          items: [
            "the first screen explains the offer",
            "contacts and forms work on mobile",
            "no aggressive overlays covering content",
            "404s and empty sections don’t dead-end without navigation",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
      ],
      notes: [
        {
          title: "Note",
          kind: "tip",
          text: "Don’t confuse UX improvement with schemes that fake behavioral signals — different things and different risks.",
        },
      ],
    },
    {
      title: "Site-wide settings",
      level: 2,
      paras: [
        "Some factors hit the whole domain: robots.txt, sitemap, template canonicals, language/region in Search Console, a consistent title style, indexing policy for filters and site search.",
        "A template mistake (e.g., noindex on a whole section or canonical “everything to home”) hits thousands of URLs at once. Sitewide template edits need a backup and a smoke check after deploy.",
      ],
      lists: [
        {
          intro: "Global checklist:",
          items: [
            "robots.txt doesn’t block what’s needed",
            "sitemap is current and in Search Console",
            "canonical and pagination aligned",
            "utility and filter URLs under control",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Work order and timeline expectations",
      level: 2,
      paras: [
        "First remove crawl and trust blockers, then strengthen content and structure of commercial keyword clusters, and monitor Search Console in parallel. Start link building when the on-page base isn’t collapsing.",
        "On-page fixes are part of prep. Core ranking buildup after systematic work starts takes months: page one for a meaningful share of the set is typically planned for 2–6 months — not “turned on HTTPS — #1–3 tomorrow.”",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "a backlog prioritized by business impact",
            "a crawl after major releases",
            "once a month — error review in Search Console",
            "track prep and rank dynamics separately",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "seo-oshibki",
    "seo-struktura-sayta",
    "https-seo",
    "ssylochnyy-profil",
    "samostoyatelnoe-seo",
  ],
};

/** ES overlay for vnutrennie-faktory — same structure as RU JSON / EN. */
export const vnutrennieFaktoryEs: BlogPost = {
  slug: "vnutrennie-faktory",
  title: "Factores internos de ranking: qué arreglar en el sitio",
  date: "2019-07-17",
  category: "SEO",
  cover: "/images/blog/vnutrennie-faktory/cover.webp",
  excerpt:
    "SEO on-page sin mística: contenido, estructura, enlaces internos, HTTPS, velocidad y móvil — qué controlas de tu lado y en qué orden.",
  lead: [
    "Los factores internos de ranking son todo lo que puedes mejorar en el propio sitio: copy y media, estructura de URLs, headings y snippets, enlaces internos, HTTPS, velocidad, móvil y usabilidad.",
    "Las señales externas (enlaces, menciones, algunos efectos de comportamiento) tardan más y son más difíciles de controlar de forma directa. Abajo: un mapa on-page práctico — qué revisar, dónde profundizar y cómo no confundir la prep con prometer primera página «la semana que viene».",
  ],
  faq: [
    {
      q: "¿En qué se diferencian los factores internos de los externos?",
      a: "Internos — en tu dominio: contenido, tech, estructura, UX. Externos — enlaces y señales off-site. Ambos importan; sin base on-page, el esfuerzo externo a menudo se estanca.",
    },
    {
      q: "¿Por dónde empiezo si el sitio está crudo?",
      a: "Indexación y códigos de estado, HTTPS, móvil, title/H1 únicos en URLs comerciales, estructura básica y velocidad. Luego profundidad de contenido y enlaces internos.",
    },
    {
      q: "¿Es lo mismo que un audit SEO técnico?",
      a: "Se solapan. Un audit es un método de chequeo; los factores internos son un mapa de influencia. El audit responde «qué está roto»; este artículo cubre «qué cuenta como on-page».",
    },
    {
      q: "¿Debe cada ítem estar perfecto?",
      a: "No. Prioriza por impacto de negocio: primero landings comerciales y caminos de crawl. Cosméticos de snippet sin indexación no sirven.",
    },
    {
      q: "¿Importan imágenes y vídeo?",
      a: "Sí: sentido (alt text, contexto), peso del archivo (velocidad) y tiempo en página. Media pesada sin comprimir daña Core Web Vitals y UX.",
    },
    {
      q: "¿El enlazado interno es un factor interno?",
      a: "Sí. Pasa equity y ayuda a bots y personas a encontrar URLs importantes. Sin él, los clusters viven aislados.",
    },
    {
      q: "¿La usabilidad es SEO?",
      a: "No hay un «score de botón» directo, pero la comodidad afecta comportamiento y conversión. Un UX malo se come el beneficio incluso con buenos rankings.",
    },
    {
      q: "¿Cuándo esperar crecimiento de ranking tras los fixes?",
      a: "Prep on-page y limpieza — típicamente de unas semanas a cerca de un mes. Una cuota significativa del set núcleo en primera página se planifica normalmente a 2–6 meses tras el arranque del trabajo sistemático — no «mañana tras el HTTPS».",
    },
  ],
  sections: [
    {
      title: "Mapa: interno vs. externo",
      level: 2,
      paras: [
        "La búsqueda evalúa la página y el sitio en conjunto. En simple: los factores internos son lo que editas en el CMS, las plantillas y el servidor; externos — enlaces, menciones, señales alrededor del dominio.",
        "Un error clásico es perseguir enlaces sobre un sitio crudo: lento, sin HTTPS, con duplicados y landings vacías. Primero haz el recurso legible para bots y personas, luego refuerza señales off-site.",
      ],
      lists: [
        {
          intro: "Los factores internos suelen incluir:",
          items: [
            "contenido: copy, media, unicidad y encaje de intención",
            "meta y headings: title, description, H1–H3",
            "estructura de URLs y navegación",
            "enlazado interno",
            "HTTPS, velocidad, mobile-friendly",
            "UX básico: formularios, legibilidad, clicabilidad",
          ],
        },
        {
          intro: "Externos — guía aproximada:",
          items: [
            "calidad y diversidad de enlaces entrantes",
            "menciones de marca",
            "algunos efectos de comportamiento fuera de tu control directo",
          ],
        },
      ],
      links: [
        {
          label: "Análisis del perfil de backlinks",
          href: "/es/blog/ssylochnyy-profil/",
        },
        {
          label: "Audit SEO técnico",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Contenido, headings y snippets",
      level: 2,
      paras: [
        "La página debe responder a la query — no «meter la keyword», sino cerrar el trabajo del usuario. Un H1 claro, una jerarquía lógica H2–H3, title y description que no sean copias el uno del otro.",
        "La media debe apoyar el sentido: nombres de archivo claros, alt text sensato, peso razonable. El filler vacío y los duplicados de plantilla son más débiles que materiales únicos para el cluster.",
      ],
      lists: [
        {
          intro: "Mínimo de landing:",
          items: [
            "title y description únicos",
            "un H1, sin copias que compitan",
            "copy y media alineados a la intención del cluster",
            "sin canibalización con URLs vecinas",
          ],
        },
      ],
      links: [
        {
          label: "Longitud del title",
          href: "/es/blog/dlina-title/",
        },
        {
          label: "Canibalización de queries",
          href: "/es/blog/kannibalizatsiya-zaprosov/",
        },
        {
          label: "Copywriting SEO",
          href: "/es/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "Estructura del sitio, URLs y enlazado interno",
      level: 2,
      paras: [
        "URLs limpias y paths cortos legibles ayudan a personas y al snippet. Breadcrumbs y navegación clara reducen «perderse» en el sitio.",
        "Los enlaces internos construyen clusters: de overviews al detalle, de páginas relacionadas al ancla de intención. Menú y footer no deberían spawnear miles de enlaces débiles a URLs basura.",
      ],
      lists: [
        {
          intro: "En la práctica:",
          items: [
            "mapa de secciones alrededor de keywords, no «lo que hizo el CMS»",
            "URLs en latín, sin params basura en el canonical",
            "enlazar a páginas comerciales y respuestas, no solo a home",
            "duplicados y paginación bajo control (canonical / noindex según escenario)",
          ],
        },
      ],
      links: [
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
        {
          label: "Duplicados de página",
          href: "/es/blog/dubli-stranits/",
        },
        {
          label: "Paginación",
          href: "/es/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "Tech: HTTPS, velocidad, móvil",
      level: 2,
      paras: [
        "HTTPS es una expectativa base para navegadores y usuarios: sin mixed content, certificado válido y redirect http→https. La velocidad (Core Web Vitals y carga percibida) afecta bounces y crawl.",
        "Mobile-first: las plantillas deben funcionar en un teléfono — toques, formularios, legibilidad. Una «versión móvil 2012» aparte con contenido recortado es un riesgo.",
      ],
      lists: [
        {
          intro: "Lista de control:",
          items: [
            "SSL válido y cadena",
            "sin mixed content en plantillas clave",
            "compresión de imágenes, cache, JS sensato",
            "layout responsive sin scroll horizontal ni micro-botones",
          ],
        },
      ],
      links: [
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
        {
          label: "Certificado SSL",
          href: "/es/blog/ssl-sertifikat/",
        },
        {
          label: "Errores SEO habituales",
          href: "/es/blog/seo-oshibki/",
        },
      ],
    },
    {
      title: "Usabilidad y comportamiento on-site",
      level: 2,
      paras: [
        "La usabilidad no se «compra» con engagement falso. Copy legible, CTA claro, formularios que funcionan y sin trampas de pop-up cortan irritación y ayudan a la conversión.",
        "Si el usuario no encuentra una respuesta o choca con un error 500 — rankings y ads no te salvan. UX es parte de los factores internos en sentido amplio: controlas la plantilla y el contenido.",
      ],
      lists: [
        {
          intro: "Qué revisar a mano:",
          items: [
            "la primera pantalla explica la oferta",
            "contactos y formularios funcionan en móvil",
            "sin overlays agresivos que tapen el contenido",
            "404s y secciones vacías no son callejones sin navegación",
          ],
        },
      ],
      links: [
        {
          label: "Enlaces rotos",
          href: "/es/blog/bitye-ssylki/",
        },
      ],
      notes: [
        {
          title: "Nota",
          kind: "tip",
          text: "No confundas mejorar UX con esquemas que falsifican señales de comportamiento — cosas distintas y riesgos distintos.",
        },
      ],
    },
    {
      title: "Ajustes a nivel de sitio",
      level: 2,
      paras: [
        "Algunos factores pegan a todo el dominio: robots.txt, sitemap, canonicals de plantilla, idioma/región en Search Console, un estilo de title coherente, política de indexación de filtros y búsqueda del sitio.",
        "Un error de plantilla (p. ej. noindex en toda una sección o canonical «todo a home») pega a miles de URLs a la vez. Los edits de plantilla sitewide necesitan backup y un smoke check tras el deploy.",
      ],
      lists: [
        {
          intro: "Checklist global:",
          items: [
            "robots.txt no bloquea lo necesario",
            "sitemap actual y en Search Console",
            "canonical y paginación alineados",
            "URLs de utilidad y filtros bajo control",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Orden de trabajo y expectativas de plazo",
      level: 2,
      paras: [
        "Primero quita bloqueadores de crawl y confianza, luego refuerza contenido y estructura de clusters comerciales de keywords, y monitoriza Search Console en paralelo. Empieza el link building cuando la base on-page no se esté derrumbando.",
        "Los fixes on-page son parte de la prep. La construcción de rankings del núcleo tras el arranque del trabajo sistemático lleva meses: primera página para una cuota significativa del set se planifica normalmente a 2–6 meses — no «encendí HTTPS — n.º 1–3 mañana».",
      ],
      lists: [
        {
          intro: "Ritmo:",
          items: [
            "un backlog priorizado por impacto de negocio",
            "un crawl tras releases mayores",
            "una vez al mes — revisión de errores en Search Console",
            "seguir prep y dinámica de rankings por separado",
          ],
        },
      ],
      links: [
        {
          label: "SEO DIY",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "seo-oshibki",
    "seo-struktura-sayta",
    "https-seo",
    "ssylochnyy-profil",
    "samostoyatelnoe-seo",
  ],
};
