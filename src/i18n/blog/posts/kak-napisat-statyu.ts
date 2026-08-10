import type { BlogPost } from "../../../data/blog";

/** EN overlay for kak-napisat-statyu — same structure as RU JSON. */
export const kakNapisatStatyuEn: BlogPost = {
  slug: "kak-napisat-statyu",
  title: "How to write a solid article: a beginner’s process",
  date: "2020-07-06",
  category: "Content marketing",
  cover: "/images/blog/kak-napisat-statyu/cover-en.webp",
  excerpt:
    "Step by step: goal and audience, structure, draft, editing, and careful SEO — without magic and without writing just to fill space.",
  lead: [
    "A good article doesn’t start by opening a blank doc. It starts with answers: for whom, why, and what the reader should walk away with. Without that, even clean prose stays empty.",
    "Here’s a practical process for beginners and for clients who write their own copy. Copywriting types and hiring an author live in the general article; keyword nuances for search are in SEO copywriting.",
  ],
  faq: [
    {
      q: "Where do I start if I’m stuck?",
      a: "With goal, audience, and a heading outline. Draft after structure — not the other way around.",
    },
    {
      q: "Do I need competitive analysis?",
      a: "Yes. See what’s already ranking or leading in the niche, which questions are covered, and where you can add your experience and examples.",
    },
    {
      q: "How much editing after the draft?",
      a: "At least one full pass: structure, meaning, fluff, errors. Better to leave the text for a few hours before the final proofread.",
    },
    {
      q: "Is SEO required?",
      a: "If the goal is search traffic — yes: intent, structure, natural wording. Never at the cost of readability.",
    },
    {
      q: "One paragraph — one idea?",
      a: "A reliable rule. Walls of ten ideas in one block scan poorly.",
    },
    {
      q: "Do readability / spam checkers help?",
      a: "As an extra filter — yes. They don’t replace meaning, facts, or value for the audience. Don’t fetishize “water %” numbers from old briefs.",
    },
    {
      q: "How is this different from SEO copywriting?",
      a: "This article is the general writing process. Keyword research, related terms, and typical SEO mistakes live in the SEO copywriting piece.",
    },
    {
      q: "Do real-life examples help?",
      a: "Yes if they improve understanding. Don’t turn an expert piece into a diary.",
    },
  ],
  sections: [
    {
      title: "Think first, type second",
      level: 2,
      paras: [
        "Lock in who reads (client, colleague, beginner), why the piece serves the business (trust, lead, expertise), and what result the reader should get.",
        "Choose tone and how deep you go with terms: explain the hard parts; don’t strip expertise entirely.",
        "Briefly note facts, figures, and examples — or you’ll lose important bits mid-draft.",
      ],
      lists: [
        {
          intro: "Minimum before a draft:",
          items: [
            "goal and audience",
            "the question you answer",
            "rough H2/H3 outline",
            "2–3 sources or your own cases",
          ],
        },
      ],
    },
    {
      title: "Structure",
      level: 2,
      paras: [
        "Go general → specific for an overview; step-by-step in time for a how-to; independent blocks for a roundup.",
        "One meaning block — one heading. Lists and short paragraphs make scanning easier.",
      ],
      links: [
        {
          label: "Copywriting: types and jobs",
          href: "/en/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Draft and editing",
      level: 2,
      paras: [
        "In the draft, write to the outline — don’t freeze on a perfect sentence. One paragraph, one idea; keep transitions logical.",
        "Editing order: structure → meaning and cuts → spelling → examples and media. Don’t publish straight from the first pass.",
      ],
      lists: [
        {
          intro: "Edit checklist:",
          items: [
            "there’s a lead and a clear ending",
            "no duplicates or fluff",
            "examples are concrete",
            "headings match the blocks",
          ],
        },
      ],
      links: [
        {
          label: "Uniqueness check",
          href: "/en/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "SEO without breaking the text",
      level: 2,
      paras: [
        "Optimization sits on top of strong material: query and intent, structure, natural wording. Don’t force awkward keywords at the cost of meaning.",
        "Getting a page ready and ranking the keyword set are different horizons. Ranking growth is planned over months of work — not one article overnight.",
      ],
      links: [
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Goal and audience → outline → draft → edit → publish.",
        "Usefulness and clarity beat “prettiness.”",
        "SEO strengthens finished text; it doesn’t replace it.",
      ],
    },
  ],
  closing: [
    "Before you publish, read the article aloud on a phone. Where you stumble — cut or simplify.",
  ],
  related: [
    "teksty-uzkaya-tematika",
    "kopirayting",
    "seo-kopirayting",
    "zakazchiki-kopiraytera",
    "proverka-unikalnosti",
    "tz-kopiraytera",
  ],
};

/** ES overlay for kak-napisat-statyu — same structure as RU JSON / EN. */
export const kakNapisatStatyuEs: BlogPost = {
  slug: "kak-napisat-statyu",
  title: "Cómo escribir un artículo sólido: proceso para principiantes",
  date: "2020-07-06",
  category: "Content marketing",
  cover: "/images/blog/kak-napisat-statyu/cover-es.webp",
  excerpt:
    "Paso a paso: objetivo y audiencia, estructura, borrador, edición y SEO cuidadoso — sin magia y sin escribir solo para llenar espacio.",
  lead: [
    "Un buen artículo no empieza abriendo un documento en blanco. Empieza con respuestas: para quién, por qué y con qué se va el lector. Sin eso, incluso la prosa limpia se queda vacía.",
    "Aquí un proceso práctico para principiantes y para clientes que escriben su propio copy. Tipos de copywriting y contratar un autor viven en el artículo general; los matices de keywords para búsqueda están en SEO copywriting.",
  ],
  faq: [
    {
      q: "¿Por dónde empiezo si estoy atascado?",
      a: "Con objetivo, audiencia y un esquema de encabezados. El borrador después de la estructura — no al revés.",
    },
    {
      q: "¿Hace falta análisis competitivo?",
      a: "Sí. Mira qué ya rankea o lidera en el nicho, qué preguntas están cubiertas y dónde puedes añadir tu experiencia y ejemplos.",
    },
    {
      q: "¿Cuánta edición tras el borrador?",
      a: "Al menos un pase completo: estructura, sentido, fluff, errores. Mejor dejar el texto unas horas antes de la corrección final.",
    },
    {
      q: "¿Es obligatorio el SEO?",
      a: "Si el objetivo es tráfico de búsqueda — sí: intención, estructura, wording natural. Nunca a costa de la legibilidad.",
    },
    {
      q: "¿Un párrafo — una idea?",
      a: "Una regla fiable. Los muros de diez ideas en un bloque se escanean mal.",
    },
    {
      q: "¿Ayudan los checkers de legibilidad / spam?",
      a: "Como filtro extra — sí. No sustituyen sentido, hechos ni valor para la audiencia. No conviertas en fetiche las cifras de «% de agua» de briefs antiguos.",
    },
    {
      q: "¿En qué se diferencia del SEO copywriting?",
      a: "Este artículo es el proceso general de escritura. Research de keywords, términos relacionados y errores típicos de SEO viven en la pieza de SEO copywriting.",
    },
    {
      q: "¿Ayudan los ejemplos de la vida real?",
      a: "Sí si mejoran la comprensión. No conviertas una pieza experta en un diario.",
    },
  ],
  sections: [
    {
      title: "Piensa primero, teclea después",
      level: 2,
      paras: [
        "Fija quién lee (cliente, colega, principiante), por qué la pieza sirve al negocio (confianza, lead, expertise) y qué resultado debería llevarse el lector.",
        "Elige tono y hasta dónde profundizas con términos: explica lo difícil; no quites del todo la expertise.",
        "Anota en breve hechos, cifras y ejemplos — o perderás piezas importantes a mitad del borrador.",
      ],
      lists: [
        {
          intro: "Mínimo antes de un borrador:",
          items: [
            "objetivo y audiencia",
            "la pregunta que respondes",
            "esquema aproximado de H2/H3",
            "2–3 fuentes o tus propios casos",
          ],
        },
      ],
    },
    {
      title: "Estructura",
      level: 2,
      paras: [
        "Ve de lo general a lo concreto para un overview; paso a paso en el tiempo para un how-to; bloques independientes para un roundup.",
        "Un bloque de sentido — un encabezado. Listas y párrafos cortos facilitan el escaneo.",
      ],
      links: [
        {
          label: "Copywriting: tipos y trabajos",
          href: "/es/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Borrador y edición",
      level: 2,
      paras: [
        "En el borrador, escribe al esquema — no te congeles en una frase perfecta. Un párrafo, una idea; mantén transiciones lógicas.",
        "Orden de edición: estructura → sentido y cortes → ortografía → ejemplos y media. No publiques directo del primer pase.",
      ],
      lists: [
        {
          intro: "Checklist de edición:",
          items: [
            "hay un lead y un cierre claro",
            "sin duplicados ni fluff",
            "los ejemplos son concretos",
            "los encabezados cuadran con los bloques",
          ],
        },
      ],
      links: [
        {
          label: "Comprobación de unicidad",
          href: "/es/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "SEO sin romper el texto",
      level: 2,
      paras: [
        "La optimización se apoya sobre material fuerte: query e intención, estructura, wording natural. No fuerces keywords torpes a costa del sentido.",
        "Preparar una página y rankear el set de keywords son horizontes distintos. El crecimiento de posiciones se planifica a lo largo de meses de trabajo — no un artículo de la noche a la mañana.",
      ],
      links: [
        {
          label: "SEO copywriting",
          href: "/blog/seo-kopirayting/",
        },
        {
          label: "Research de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Objetivo y audiencia → esquema → borrador → edición → publicar.",
        "Utilidad y claridad ganan a la «belleza».",
        "El SEO refuerza el texto terminado; no lo sustituye.",
      ],
    },
  ],
  closing: [
    "Antes de publicar, lee el artículo en voz alta en el teléfono. Donde tropieces — corta o simplifica.",
  ],
  related: [
    "kopirayting",
    "proverka-unikalnosti",
    "semanticheskoe-yadro",
    "kontent-plan",
    "prodayushchie-teksty",
    "gostevoy-post",
  ],
};
