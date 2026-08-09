import type { BlogPost } from "../../../data/blog";

/** EN overlay for novostnoy-sayt — same structure as RU JSON. */
export const novostnoySaytEn: BlogPost = {
  slug: "novostnoy-sayt",
  title: "How to grow a news site: queries, tech, and distribution",
  date: "2019-07-15",
  category: "SEO",
  cover: "/images/blog/novostnoy-sayt/cover-en.webp",
  excerpt:
    "What news SEO actually needs: a steady stream of fresh URLs, clean templates without duplicates, mobile-first reading, internal links, RSS/push, and aggregators — without “double the audience in a week.”",
  lead: [
    "A news site runs on speed and volume. Building a keyword list once and treating it as finished rarely works. You need fresh URLs, solid tech, comfortable mobile reading, and distribution across search, social, email, and aggregators.",
    "Below: common media SEO traps and a practical work frame. Cleaning tech and templates usually takes weeks. Steady visibility on informational and branded queries is planned over months — not overnight after one tweak.",
  ],
  faq: [
    {
      q: "How is news SEO different from a commercial site?",
      a: "More short-lived queries and daily URLs. Freshness, section structure, and publish speed matter more. You rely less on a single service landing that sits for years.",
    },
    {
      q: "Do you still need a keyword core?",
      a: "Yes — a different kind. Pillars for sections and geo (“city news,” beat topics), names, brands, and events, plus day-of language around breaking stories. Do not try to lock every phrase in advance.",
    },
    {
      q: "Is social enough?",
      a: "No. Social drives quick touches. Durable search traffic and return visits need the site itself, clean tech, and a habit of coming direct or by brand.",
    },
    {
      q: "Are news aggregators worth it?",
      a: "When you meet each platform’s rules — yes, as an extra channel. They do not replace your own audience or the quality of the reporting.",
    },
    {
      q: "How long until search moves?",
      a: "Tech and templates can be put in order in weeks. Stable visibility across pillars and sections is planned over 2–6 months, in step with the publish cadence.",
    },
  ],
  sections: [
    {
      title: "What makes a news property different",
      level: 2,
      paras: [
        "Exclusive and breaking pieces, comments, and tens of thousands of URLs over time. Audience size depends on geo and beat: a local paper and a national feed are different attention economies.",
        "Stories age fast. Value sits in timing, facts, and easy navigation by topic — not in a “forever” commercial landing page.",
      ],
    },
    {
      title: "Typical SEO problems in media",
      level: 2,
      paras: [
        "Without ownership of templates and duplicates, a portal stacks technical debt that hurts crawl and trust.",
      ],
      lists: [
        {
          intro: "A frequent mix:",
          items: [
            "duplicate URLs and boilerplate meta",
            "copy-paste with no added value",
            "weak mobile layout",
            "broken internal links and 404s",
            "slow rendering",
            "flaky hosting, missing HTTPS",
            "no clear robot paths (robots.txt / sitemap)",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Queries and freshness",
      level: 2,
      paras: [
        "Keep pillar queries for sections and geo (“news of …,” beat topics). In parallel, catch long-tail event, name, and brand phrasings — that stream is unpredictable.",
        "The real lever is publishing unique pieces on time, at a steady pace. Keyword research without an editorial rhythm does little.",
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Expectations",
          paras: [
            "A spike on one news hook is not the same as steady page-one coverage on every high-volume news query. Watch section share in the results, return rate, and direct or branded visits.",
          ],
        },
      ],
    },
    {
      title: "Technical frame",
      level: 2,
      paras: [
        "robots.txt without an accidental Disallow of the whole site; current XML sitemaps (news and by section when the CMS allows).",
        "Canonicals and redirects against duplicates — pagination, GET params, several URLs for one story. Unique title and description from a template: headline + section or geo.",
        "Fix broken links and image alt text. HTTPS and stable hosting are baseline hygiene.",
      ],
      lists: [
        {
          intro: "Minimum checklist:",
          items: [
            "404 and speed monitoring",
            "meta templates that do not copy-paste",
            "sitemap submitted in Search Console / webmaster tools",
            "mobile usability of the main templates",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap",
          href: "/en/blog/karta-sayta/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
        {
          label: "Site speed",
          href: "/en/blog/skorost-sayta/",
        },
      ],
    },
    {
      title: "Mobile and internal linking",
      level: 2,
      paras: [
        "Most news is read on phones: responsive layout, readable type, and fast LCP matter more than a polished desktop skin.",
        "Internal links: related blocks, sections, and tags — without spammy identical anchors or links to 404s. The goal is finish the piece and go deeper, not link for link’s sake.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "packs of identical links on one page",
            "orphan stories with no entry path",
            "self-links",
            "outbound clutter with no reader value",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Distribution: RSS, push, social, aggregators",
      level: 2,
      paras: [
        "RSS and email or push bring loyal readers back — without spam or clickbait on unverified sensations.",
        "Social and messengers drive fast traffic and discussion; style link previews carefully. Ranking impact comes mostly through visits and brand, not “like weight.”",
        "Aggregators and news surfaces follow their own quality and format rules. Treat them as an extra channel, not the whole strategy.",
      ],
      links: [
        {
          label: "Social and SEO",
          href: "/en/blog/socseti-i-seo/",
        },
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
        {
          label: "Yandex Zen",
          href: "/en/blog/yandeks-dzen/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "News SEO is fresh content, tech without duplicates, mobile comfort, and smart distribution.",
        "Clear indexing debt and templates first, then grow publish rhythm and channels.",
        "Do not confuse one viral story with steady visibility by section.",
      ],
    },
  ],
  closing: [
    "This week: confirm one story is not living on several URLs, the sitemap is served, and the mobile story card is usable — that beats arguing about “magic aggregators.”",
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
    "semanticheskoe-yadro",
    "vnutrennyaya-perelinkovka",
    "socseti-i-seo",
    "yandeks-dzen",
  ],
};

/** ES overlay for novostnoy-sayt — same structure as RU JSON / EN. */
export const novostnoySaytEs: BlogPost = {
  slug: "novostnoy-sayt",
  title: "Cómo crecer un sitio de noticias: consultas, técnica y distribución",
  date: "2019-07-15",
  category: "SEO",
  cover: "/images/blog/novostnoy-sayt/cover.webp",
  excerpt:
    "Qué necesita de verdad el SEO de noticias: un flujo constante de URLs frescas, plantillas limpias sin duplicados, lectura mobile-first, enlaces internos, RSS/push y agregadores — sin «duplicar la audiencia en una semana».",
  lead: [
    "Un sitio de noticias corre con velocidad y volumen. Armar una lista de keywords una vez y tratarla como acabada rara vez funciona. Hacen falta URLs frescas, técnica sólida, lectura móvil cómoda y distribución en búsqueda, redes, email y agregadores.",
    "Abajo: trampas habituales del SEO de media y un marco de trabajo práctico. Limpiar técnica y plantillas suele llevar semanas. La visibilidad estable en consultas informativas y de marca se planifica a lo largo de meses — no de la noche a la mañana tras un retoque.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el SEO de noticias del de un sitio comercial?",
      a: "Más consultas de corta vida y URLs diarias. Importan más la frescura, la estructura de secciones y la velocidad de publicación. Te apoyas menos en un solo landing de servicio que se queda años.",
    },
    {
      q: "¿Sigue haciendo falta un núcleo de keywords?",
      a: "Sí — de otro tipo. Pilares para secciones y geo («noticias de la ciudad», beats), nombres, marcas y eventos, más el lenguaje del día alrededor de breaking stories. No intentes fijar cada frase de antemano.",
    },
    {
      q: "¿Basta con las redes?",
      a: "No. Las redes dan toques rápidos. El tráfico de búsqueda durable y las visitas de retorno necesitan el propio sitio, técnica limpia y el hábito de venir directo o por marca.",
    },
    {
      q: "¿Merecen la pena los agregadores de noticias?",
      a: "Cuando cumples las reglas de cada plataforma — sí, como canal extra. No sustituyen tu propia audiencia ni la calidad del reportaje.",
    },
    {
      q: "¿Cuánto tarda en moverse la búsqueda?",
      a: "Técnica y plantillas se pueden poner en orden en semanas. La visibilidad estable entre pilares y secciones se planifica a 2–6 meses, al ritmo de la cadencia de publicación.",
    },
  ],
  sections: [
    {
      title: "Qué hace distinto a un medio de noticias",
      level: 2,
      paras: [
        "Piezas exclusivas y breaking, comentarios y decenas de miles de URLs con el tiempo. El tamaño de audiencia depende del geo y del beat: un periódico local y un feed nacional son economías de atención distintas.",
        "Las historias envejecen rápido. El valor está en el timing, los hechos y la navegación fácil por tema — no en un landing comercial «para siempre».",
      ],
    },
    {
      title: "Problemas SEO típicos en media",
      level: 2,
      paras: [
        "Sin ownership de plantillas y duplicados, un portal acumula deuda técnica que daña el crawl y la confianza.",
      ],
      lists: [
        {
          intro: "Una mezcla frecuente:",
          items: [
            "URLs duplicadas y meta boilerplate",
            "copy-paste sin valor añadido",
            "layout móvil flojo",
            "enlaces internos rotos y 404s",
            "render lento",
            "hosting inestable, HTTPS ausente",
            "sin caminos claros para el robot (robots.txt / sitemap)",
          ],
        },
      ],
      links: [
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Consultas y frescura",
      level: 2,
      paras: [
        "Mantén consultas pilar para secciones y geo («noticias de…», beats). En paralelo, captura long-tails de eventos, nombres y marcas — ese stream es impredecible.",
        "La palanca real es publicar piezas únicas a tiempo, a un ritmo constante. La investigación de keywords sin ritmo editorial hace poco.",
      ],
      links: [
        {
          label: "Set semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Expectativas",
          paras: [
            "Un pico por un gancho de noticia no es lo mismo que cobertura estable de primera página en cada consulta de noticias de alto volumen. Mira la cuota de sección en los resultados, la tasa de retorno y las visitas directas o de marca.",
          ],
        },
      ],
    },
    {
      title: "Marco técnico",
      level: 2,
      paras: [
        "robots.txt sin un Disallow accidental de todo el sitio; sitemaps XML actuales (noticias y por sección cuando el CMS lo permite).",
        "Canonicals y redirects contra duplicados — paginación, params GET, varias URLs para una historia. Title y description únicos desde una plantilla: titular + sección o geo.",
        "Arregla enlaces rotos y alt de imágenes. HTTPS y hosting estable son higiene baseline.",
      ],
      lists: [
        {
          intro: "Checklist mínimo:",
          items: [
            "monitoreo de 404 y velocidad",
            "plantillas de meta que no hacen copy-paste",
            "sitemap enviado en Search Console / herramientas de webmaster",
            "usabilidad móvil de las plantillas principales",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap",
          href: "/es/blog/karta-sayta/",
        },
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
        {
          label: "Velocidad del sitio",
          href: "/es/blog/skorost-sayta/",
        },
      ],
    },
    {
      title: "Móvil y enlazado interno",
      level: 2,
      paras: [
        "La mayor parte de las noticias se lee en el teléfono: layout responsive, tipografía legible y LCP rápido importan más que una piel de desktop pulida.",
        "Enlaces internos: bloques relacionados, secciones y tags — sin anclas idénticas spam ni enlaces a 404s. El objetivo es terminar la pieza e ir más profundo, no enlazar por enlazar.",
      ],
      lists: [
        {
          intro: "Evita:",
          items: [
            "packs de enlaces idénticos en una página",
            "historias huérfanas sin camino de entrada",
            "self-links",
            "ruido de salida sin valor para el lector",
          ],
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Enlazado interno",
          href: "/es/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Distribución: RSS, push, redes, agregadores",
      level: 2,
      paras: [
        "RSS y email o push traen de vuelta a lectores leales — sin spam ni clickbait sobre sensaciones no verificadas.",
        "Redes y messengers dan tráfico rápido y discusión; cuida con estilo los previews de enlaces. El impacto en rankings llega sobre todo por visitas y marca, no por «peso de likes».",
        "Agregadores y superficies de noticias siguen sus propias reglas de calidad y formato. Trátalos como un canal extra, no como toda la estrategia.",
      ],
      links: [
        {
          label: "Redes y SEO",
          href: "/es/blog/socseti-i-seo/",
        },
        {
          label: "Open Graph",
          href: "/es/blog/open-graph/",
        },
        {
          label: "Yandex Zen",
          href: "/es/blog/yandeks-dzen/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "El SEO de noticias es contenido fresco, técnica sin duplicados, comodidad móvil y distribución inteligente.",
        "Primero limpia deuda de indexación y plantillas, luego crece el ritmo de publicación y los canales.",
        "No confundas una historia viral con visibilidad estable por sección.",
      ],
    },
  ],
  closing: [
    "Esta semana: confirma que una historia no vive en varias URLs, que el sitemap se sirve y que la tarjeta de historia móvil se puede usar — eso gana a discutir sobre «agregadores mágicos».",
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
    "semanticheskoe-yadro",
    "vnutrennyaya-perelinkovka",
    "socseti-i-seo",
    "yandeks-dzen",
  ],
};
