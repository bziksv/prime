import type { BlogPost } from "../../../data/blog";

/** EN overlay for analiz-konkurentov — same structure as RU JSON. */
export const analizKonkurentovEn: BlogPost = {
  slug: "analiz-konkurentov",
  title: "Competitor site analysis: traffic, visibility, and reputation",
  date: "2021-10-19",
  category: "SEO",
  cover: "/images/blog/analiz-konkurentov/cover-en.webp",
  excerpt:
    "How to estimate competitors’ traffic and visibility: SimilarWeb, Ahrefs, Semrush, and other sources. Why the numbers diverge — and how not to kid yourself.",
  lead: [
    "Competitor analysis is about order-of-magnitude traffic, channels, and strong pages — not copying someone else’s site. Tool numbers are always estimates: cross-check a few sources and watch magnitude, not fake precision.",
    "Below: why look at someone else’s traffic, which tools give a useful cut, and how to read disagreements. Alexa as a mass tool is gone; use current services and common sense.",
  ],
  faq: [
    {
      q: "Why do Ahrefs and Semrush show different traffic?",
      a: "Different indexes, geos, and click models. Look at order of magnitude and trend — not an “exact” headcount.",
    },
    {
      q: "Can I know a competitor’s exact traffic?",
      a: "Without access to their analytics — no. You get estimates and indirect signals: visibility, ads, social proof.",
    },
    {
      q: "Is SimilarWeb alone enough?",
      a: "As a quick channel slice — yes. For the SEO core and links, add Keys.so / Ahrefs / Semrush and a manual SERP review.",
    },
    {
      q: "Should I trust the “for advertisers” block on a site?",
      a: "As the owner’s claim — yes, with caveats. Cross-check with tool estimates and the mediakit update date.",
    },
    {
      q: "How is traffic analysis different from parsing?",
      a: "Here — visit and channel estimates. Parsing is more about collecting prices, catalogs, URLs. See the separate article.",
    },
  ],
  sections: [
    {
      title: "Why look at competitors",
      level: 2,
      paras: [
        "To sense niche size, who takes demand, which channels work (search, direct, social, referral), and where to dig in your own strategy.",
        "Typical goals: pick a traffic benchmark, find page ideas, gauge a site’s ad potential before you buy placement.",
      ],
      lists: [],
    },
    {
      title: "Traffic estimation tools",
      level: 2,
      paras: [
        "SimilarWeb estimates visits, channels, geo, and engagement from panels and open signals. Handy for comparing sites by eye.",
        "Ahrefs, Semrush, SpyFu, and local peers are stronger on organic: keywords, traffic-driving pages, visibility trends. Models differ — numbers won’t match.",
        "Historic Alexa Ranking is no longer a daily pillar: the product left the market. Old Alexa guides are archive reading.",
      ],
      lists: [
        {
          intro: "What people usually check:",
          items: [
            "visit estimate and trend",
            "share of search / direct / social / referral",
            "top countries",
            "rough keywords and landing pages",
            "bounce and depth — only as a coarse signal",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "If one tool shows 20k and another 80k — don’t argue over thousands. Lock the order of magnitude (tens of thousands) and calibrate against your own analytics on your site.",
        },
      ],
    },
    {
      title: "Ad pages and asking directly",
      level: 2,
      paras: [
        "Media and blogs sometimes publish a mediakit: reach, placement price, audience. Handy, but figures can be outdated or dressed up.",
        "A direct ask to the owner with a fair offer sometimes yields an honest order of magnitude. Cross-check the answer with SimilarWeb and SEO tools: a big gap is a reason to doubt.",
      ],
      lists: [
        {
          intro: "Mediakit red flags:",
          items: [
            "no update date",
            "only “likes” with no visits",
            "traffic many times above tool estimates with no explanation",
            "refusal to show even anonymized account screenshots",
          ],
        },
      ],
    },
    {
      title: "Reputation and soft signals",
      level: 2,
      paras: [
        "Besides visits, check reviews, mentions, social activity, content quality, and site speed. High “estimated” traffic with a dead feed and toxic reviews is a weak benchmark.",
      ],
      lists: [
        {
          intro: "Quick reputation checklist:",
          items: [
            "reviews and search mentions",
            "live comments vs bots",
            "content freshness",
            "clear contacts and policies",
          ],
        },
      ],
    },
    {
      title: "How to decide",
      level: 2,
      paras: [
        "Gather two or three sources, lock traffic order of magnitude and strong URLs, write hypotheses for your own site. Don’t copy copy and design one-to-one.",
      ],
      lists: [],
      links: [
        {
          label: "Data parsing",
          href: "/en/blog/parsing/",
        },
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};

/** ES overlay for analiz-konkurentov — same structure as RU JSON / EN. */
export const analizKonkurentovEs: BlogPost = {
  slug: "analiz-konkurentov",
  title: "Análisis del sitio de la competencia: tráfico, visibilidad y reputación",
  date: "2021-10-19",
  category: "SEO",
  cover: "/images/blog/analiz-konkurentov/cover.webp",
  excerpt:
    "Cómo estimar el tráfico y la visibilidad de la competencia: SimilarWeb, Ahrefs, Semrush y otras fuentes. Por qué divergen las cifras — y cómo no engañarte.",
  lead: [
    "El análisis de competidores va de orden de magnitud de tráfico, canales y páginas fuertes — no de copiar el sitio de otro. Las cifras de las herramientas son siempre estimaciones: cruza unas cuantas fuentes y mira la magnitud, no una precisión falsa.",
    "Abajo: por qué mirar el tráfico ajeno, qué herramientas dan un corte útil y cómo leer los desacuerdos. Alexa como herramienta masiva ya no existe; usa servicios actuales y sentido común.",
  ],
  faq: [
    {
      q: "¿Por qué Ahrefs y Semrush muestran tráfico distinto?",
      a: "Índices, geos y modelos de clic distintos. Mira el orden de magnitud y la tendencia — no un headcount «exacto».",
    },
    {
      q: "¿Puedo saber el tráfico exacto de un competidor?",
      a: "Sin acceso a su analytics — no. Obtienes estimaciones y señales indirectas: visibilidad, ads, prueba social.",
    },
    {
      q: "¿Basta SimilarWeb solo?",
      a: "Como corte rápido de canales — sí. Para el núcleo SEO y enlaces, suma Keys.so / Ahrefs / Semrush y una revisión manual del SERP.",
    },
    {
      q: "¿Debo fiarme del bloque «para anunciantes» en un sitio?",
      a: "Como afirmación del dueño — sí, con matices. Cruza con estimaciones de herramientas y la fecha de actualización del mediakit.",
    },
    {
      q: "¿En qué se diferencia el análisis de tráfico del parsing?",
      a: "Aquí — estimaciones de visitas y canales. El parsing va más de recoger precios, catálogos, URLs. Ver el artículo aparte.",
    },
  ],
  sections: [
    {
      title: "Por qué mirar a los competidores",
      level: 2,
      paras: [
        "Para sentir el tamaño del nicho, quién se lleva la demanda, qué canales funcionan (búsqueda, directo, social, referral) y dónde cavar en tu propia estrategia.",
        "Objetivos típicos: fijar un benchmark de tráfico, encontrar ideas de páginas, estimar el potencial publicitario de un sitio antes de comprar placement.",
      ],
      lists: [],
    },
    {
      title: "Herramientas de estimación de tráfico",
      level: 2,
      paras: [
        "SimilarWeb estima visitas, canales, geo y engagement a partir de paneles y señales abiertas. Útil para comparar sitios a ojo.",
        "Ahrefs, Semrush, SpyFu y pares locales son más fuertes en orgánico: keywords, páginas que traen tráfico, tendencias de visibilidad. Los modelos difieren — las cifras no coincidirán.",
        "El Alexa Ranking histórico ya no es un pilar diario: el producto salió del mercado. Las guías viejas de Alexa son lectura de archivo.",
      ],
      lists: [
        {
          intro: "Qué se suele revisar:",
          items: [
            "estimación de visitas y tendencia",
            "cuota de búsqueda / directo / social / referral",
            "principales países",
            "keywords y landings aproximados",
            "bounce y profundidad — solo como señal gruesa",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Si una herramienta muestra 20k y otra 80k — no discutas por miles. Fija el orden de magnitud (decenas de miles) y calibra contra tu propia analytics en tu sitio.",
        },
      ],
    },
    {
      title: "Páginas de ads y preguntar directamente",
      level: 2,
      paras: [
        "Medios y blogs a veces publican un mediakit: reach, precio de placement, audiencia. Útil, pero las cifras pueden estar desfasadas o maquilladas.",
        "Una pregunta directa al dueño con una oferta justa a veces da un orden de magnitud honesto. Cruza la respuesta con SimilarWeb y herramientas SEO: un gran hueco es motivo para dudar.",
      ],
      lists: [
        {
          intro: "Banderas rojas del mediakit:",
          items: [
            "sin fecha de actualización",
            "solo «likes» sin visitas",
            "tráfico muchas veces por encima de las estimaciones de herramientas sin explicación",
            "negativa a mostrar siquiera capturas anonimizadas de la cuenta",
          ],
        },
      ],
    },
    {
      title: "Reputación y señales blandas",
      level: 2,
      paras: [
        "Además de las visitas, revisa reseñas, menciones, actividad social, calidad de contenido y velocidad del sitio. Tráfico «estimado» alto con un feed muerto y reseñas tóxicas es un benchmark flojo.",
      ],
      lists: [
        {
          intro: "Checklist rápido de reputación:",
          items: [
            "reseñas y menciones en búsqueda",
            "comentarios vivos vs bots",
            "frescura del contenido",
            "contactos y políticas claros",
          ],
        },
      ],
    },
    {
      title: "Cómo decidir",
      level: 2,
      paras: [
        "Reúne dos o tres fuentes, fija el orden de magnitud del tráfico y las URLs fuertes, escribe hipótesis para tu propio sitio. No copies copy y diseño uno a uno.",
      ],
      lists: [],
      links: [
        {
          label: "Parsing de datos",
          href: "/es/blog/parsing/",
        },
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};
