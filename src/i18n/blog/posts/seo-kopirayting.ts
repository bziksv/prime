import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-kopirayting — same structure as RU JSON. */
export const seoKopiraytingEn: BlogPost = {
  slug: "seo-kopirayting",
  title: "SEO copywriting: rules, LSI, and a practical checklist",
  date: "2019-12-07",
  category: "SEO",
  cover: "/images/blog/seo-kopirayting/cover-en.webp",
  excerpt:
    "What SEO copywriting is, how it differs from “just text,” a brief glossary for briefs, LSI, a creation checklist, and common mistakes — without a keyword-density cult.",
  lead: [
    "SEO copywriting is copy that answers a person’s search and stays clear to engines: structure, meaning, and natural phrasing from your keyword research. It isn’t a bolded keyword in every paragraph or filler “for the bot.”",
    "Below: a definition, a short glossary, who should write these pages, the role of LSI, a checklist, and common mistakes. Copywriting types and choosing an author live in the general copywriting article; here the focus is search-oriented pages.",
  ],
  faq: [
    {
      q: "Does SEO copy have to be boring?",
      a: "No. Boring text raises bounces. Write for people and weave keywords in naturally.",
    },
    {
      q: "Should I bold the keywords?",
      a: "No. That’s an outdated trick and an over-optimization risk. Highlight meaning for the reader, not “markers for the bot.”",
    },
    {
      q: "What is LSI in plain English?",
      a: "Related words and phrasing around the topic — not only the exact keyword — that help you cover the intent more fully.",
    },
    {
      q: "Is the meta keywords tag required?",
      a: "For Yandex and Google, practically no. Focus on title, description, and the page copy.",
    },
    {
      q: "Is a content marketplace a good source?",
      a: "Sometimes for simple jobs. For expert and commercial pages, an author with a niche portfolio and a clear brief is more reliable.",
    },
    {
      q: "How many keywords should I insert?",
      a: "As many as you need for the topic to be clear — without stuffing. Watch density/spam scores and readability, not “density for density’s sake.”",
    },
    {
      q: "Will one SEO article put me on page one?",
      a: "Rarely. You also need site structure, tech, relevance, and time: prep about a month; ranking growth for the set planned over 2–6 months.",
    },
    {
      q: "How does SEO copywriting differ from sales copy?",
      a: "Plenty of overlap. SEO adds work with a query cluster and a landing matched to intent; sales copy pushes harder on offer and CTA.",
    },
  ],
  sections: [
    {
      title: "What SEO copywriting is",
      level: 2,
      paras: [
        "It’s writing so the page answers search demand: the topic is clear, the structure is scannable, and the phrasing matches how the audience talks. Search also weighs tech, links, and behavior — copy is one layer.",
        "The goal is relevance to the query and value for the visitor. The crawler indexes the page; in results it competes with other answers to the same intent. Stuffing keywords without meaning tends to hurt today.",
      ],
      lists: [
        {
          intro: "How it differs from “just an article”:",
          items: [
            "a cluster and intent exist before writing",
            "H1 and subheads align with the queries",
            "title and description shaped for the snippet",
            "uniqueness and stuffing checks before publish",
          ],
        },
      ],
      links: [
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Glossary for the brief",
      level: 2,
      paras: [
        "Keywords — search terms people use. A cluster — queries with one intent for one landing. Density and spam scores measure overload by repetition; “fluff” is low-meaning filler. H1 is the main page heading (usually one); H2–H3 structure the blocks.",
        "Title and description are meta for the snippet (search may still pick another fragment). Word count is a guide by task and competitive pages — not a sacred number. Uniqueness means no copy-paste; facts and expertise beat a tool percentage.",
      ],
      lists: [
        {
          intro: "In the author brief, specify:",
          items: [
            "page goal and audience",
            "main keyword plus LSI / extra phrasing",
            "required facts and CTA",
            "word-count guide and outline",
            "competitor examples (for reference, not copy-paste)",
          ],
        },
      ],
      links: [
        {
          label: "Text “nausea” / density",
          href: "/en/blog/toshnota-teksta/",
        },
        {
          label: "Keyword stuffing",
          href: "/en/blog/zaspamlennost-teksta/",
        },
        {
          label: "SEO text length",
          href: "/en/blog/dlina-seo-teksta/",
        },
      ],
    },
    {
      title: "Who writes it — and where to order",
      level: 2,
      paras: [
        "Good SEO writers are rarer than “we write per 1,000 characters.” Look for a portfolio matched to the page type, ability to work from a brief, and willingness to revise. Content marketplaces suit simple jobs; for services, medicine, finance, and complex B2B, expertise beats price per character.",
        "The SEO specialist prepares the keyword set and criteria; the copywriter builds the text. Blurry ownership (“find the keywords yourself and guess the offer”) almost always yields a weak result.",
      ],
      lists: [
        {
          intro: "Vendor red flags:",
          items: [
            "page-one rankings promised by text alone",
            "refusal to revise",
            "competitor copy-paste",
            "bold keywords and “5% density” as a method",
          ],
        },
      ],
      links: [
        {
          label: "Uniqueness check",
          href: "/en/blog/proverka-unikalnosti/",
        },
        {
          label: "Sales copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "LSI and meaning instead of stuffing",
      level: 2,
      paras: [
        "In practice, LSI copywriting means covering the topic through related concepts, questions, and phrasing from suggestions and the SERP — not only exact keyword matches. The text answers intent more fully and looks less like spam.",
        "Pull ideas from Wordstat, search suggestions, related queries, and strong ranking pages — then write in your voice with brand facts.",
      ],
      lists: [
        {
          intro: "LSI practice:",
          items: [
            "collect nearby phrasing",
            "answer frequent questions in an FAQ block",
            "don’t repeat one keyword mechanically",
            "check readability out loud",
          ],
        },
      ],
      links: [
        {
          label: "Site content",
          href: "/en/blog/napolnenie-sayta/",
        },
      ],
    },
    {
      title: "Checklist and common mistakes",
      level: 2,
      paras: [
        "Before handoff: intent covered, one purposeful H1, logical subheads, natural keywords, no fluff for volume, uniqueness and facts checked, title/description aligned with the page, CTA in place.",
        "Mistakes: copy-paste, stuffing, bold keywords, ignoring structure, text off-cluster, promising “page one from one article.” SEO content works inside a system with tech and time — not as a one-off spell.",
      ],
      lists: [
        {
          intro: "Handoff checklist:",
          items: [
            "match to the brief and cluster",
            "H1–H3 structure",
            "snippet meta without clickbait",
            "density / fluff check",
            "proofread and verify facts",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Publishing copy is not the same as ranking on page one. Indexing takes days to weeks; ranking growth for the keyword set is planned over months after work starts.",
        },
      ],
      links: [
        {
          label: "Snippets",
          href: "/en/blog/snippet/",
        },
        {
          label: "H1 tag",
          href: "/en/blog/teg-h1/",
        },
        {
          label: "Why the site isn’t ranking",
          href: "/en/blog/sayt-ne-v-top/",
        },
      ],
    },
  ],
  related: [
    "kopirayting",
    "semanticheskoe-yadro",
    "dlina-seo-teksta",
    "toshnota-teksta",
    "napolnenie-sayta",
    "prodayushchie-teksty",
  ],
};

/** ES overlay for seo-kopirayting — same structure as RU JSON / EN. */
export const seoKopiraytingEs: BlogPost = {
  slug: "seo-kopirayting",
  title: "Copywriting SEO: reglas, LSI y checklist práctico",
  date: "2019-12-07",
  category: "SEO",
  cover: "/images/blog/seo-kopirayting/cover-es.webp",
  excerpt:
    "Qué es el copywriting SEO, en qué se diferencia de «solo texto», un glosario corto para briefs, LSI, un checklist de creación y errores habituales — sin culto a la densidad de keywords.",
  lead: [
    "El copywriting SEO es copy que responde a la búsqueda de una persona y se mantiene claro para los motores: estructura, sentido y phrasing natural de tu investigación de keywords. No es una keyword en negrita en cada párrafo ni filler «para el bot».",
    "Abajo: una definición, un glosario corto, quién debería escribir estas páginas, el rol del LSI, un checklist y errores habituales. Los tipos de copywriting y elegir autor viven en el artículo general de copywriting; aquí el foco son páginas orientadas a búsqueda.",
  ],
  faq: [
    {
      q: "¿El copy SEO tiene que ser aburrido?",
      a: "No. El texto aburrido sube los bounces. Escribe para personas y teje las keywords de forma natural.",
    },
    {
      q: "¿Debo poner las keywords en negrita?",
      a: "No. Es un truco obsoleto y un riesgo de sobreoptimización. Destaca el sentido para el lector, no «marcadores para el bot».",
    },
    {
      q: "¿Qué es LSI en claro?",
      a: "Palabras y phrasing relacionados alrededor del tema — no solo la keyword exacta — que ayudan a cubrir la intención con más plenitud.",
    },
    {
      q: "¿Es obligatorio el meta keywords?",
      a: "Para Yandex y Google, prácticamente no. Enfócate en title, description y el copy de la página.",
    },
    {
      q: "¿Un marketplace de contenido es buena fuente?",
      a: "A veces para trabajos simples. Para páginas expertas y comerciales, un autor con portfolio de nicho y un brief claro es más fiable.",
    },
    {
      q: "¿Cuántas keywords debo insertar?",
      a: "Las que hagan falta para que el tema quede claro — sin stuffing. Mira scores de densidad/spam y legibilidad, no «densidad por la densidad».",
    },
    {
      q: "¿Un artículo SEO me pone en primera página?",
      a: "Rara vez. También hacen falta estructura del sitio, tech, relevancia y tiempo: prep de cerca de un mes; crecimiento de rankings del set planificado a 2–6 meses.",
    },
    {
      q: "¿En qué se diferencia el copywriting SEO del copy de venta?",
      a: "Hay bastante solape. El SEO añade trabajo con un cluster de queries y una landing alineada a la intención; el copy de venta empuja más en oferta y CTA.",
    },
  ],
  sections: [
    {
      title: "Qué es el copywriting SEO",
      level: 2,
      paras: [
        "Es escribir para que la página responda a la demanda de búsqueda: el tema queda claro, la estructura se escanea y el phrasing encaja con cómo habla la audiencia. La búsqueda también pesa tech, enlaces y comportamiento — el copy es una capa.",
        "El objetivo es relevancia a la query y valor para el visitante. El crawler indexa la página; en resultados compite con otras respuestas a la misma intención. Meter keywords sin sentido hoy suele hacer daño.",
      ],
      lists: [
        {
          intro: "En qué se diferencia de «solo un artículo»:",
          items: [
            "existe un cluster e intención antes de escribir",
            "H1 y subtítulos se alinean con las queries",
            "title y description pensados para el snippet",
            "chequeos de unicidad y stuffing antes de publicar",
          ],
        },
      ],
      links: [
        {
          label: "Copywriting",
          href: "/es/blog/kopirayting/",
        },
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Glosario para el brief",
      level: 2,
      paras: [
        "Keywords — términos de búsqueda que usa la gente. Un cluster — queries con una intención para una landing. Densidad y scores de spam miden la sobrecarga por repetición; el «fluff» es filler de poco sentido. H1 es el heading principal de la página (suele ser uno); H2–H3 estructuran los bloques.",
        "Title y description son meta para el snippet (la búsqueda aún puede elegir otro fragmento). El conteo de palabras es una guía por tarea y páginas competitivas — no un número sagrado. Unicidad significa sin copy-paste; hechos y expertise ganan a un porcentaje de tool.",
      ],
      lists: [
        {
          intro: "En el brief al autor, especifica:",
          items: [
            "objetivo de la página y audiencia",
            "keyword principal más LSI / phrasing extra",
            "hechos obligatorios y CTA",
            "guía de conteo de palabras y outline",
            "ejemplos de competidores (de referencia, no para copy-paste)",
          ],
        },
      ],
      links: [
        {
          label: "«Náusea» / densidad del texto",
          href: "/es/blog/toshnota-teksta/",
        },
        {
          label: "Keyword stuffing",
          href: "/es/blog/zaspamlennost-teksta/",
        },
        {
          label: "Longitud del texto SEO",
          href: "/es/blog/dlina-seo-teksta/",
        },
      ],
    },
    {
      title: "Quién lo escribe — y dónde encargarlo",
      level: 2,
      paras: [
        "Los buenos writers SEO son más raros que «escribimos por cada 1.000 caracteres». Busca un portfolio alineado al tipo de página, capacidad de trabajar desde un brief y disposición a revisar. Los marketplaces de contenido valen para trabajos simples; para servicios, medicina, finanzas y B2B complejo, la expertise gana al precio por carácter.",
        "El especialista SEO prepara el set de keywords y los criterios; el copywriter arma el texto. Una propiedad borrosa («busca las keywords tú y adivina la oferta») casi siempre da un resultado débil.",
      ],
      lists: [
        {
          intro: "Banderas rojas del vendor:",
          items: [
            "rankings de primera página prometidos solo con texto",
            "negativa a revisar",
            "copy-paste de competidores",
            "keywords en negrita y «densidad 5%» como método",
          ],
        },
      ],
      links: [
        {
          label: "Chequeo de unicidad",
          href: "/es/blog/proverka-unikalnosti/",
        },
        {
          label: "Copy de venta",
          href: "/es/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "LSI y sentido en lugar de stuffing",
      level: 2,
      paras: [
        "En la práctica, el copywriting LSI significa cubrir el tema con conceptos relacionados, preguntas y phrasing de sugerencias y del SERP — no solo coincidencias exactas de keyword. El texto responde la intención con más plenitud y se ve menos spam.",
        "Saca ideas de Wordstat, sugerencias de búsqueda, queries relacionadas y páginas fuertes que ya rankean — luego escribe con tu voz y hechos de marca.",
      ],
      lists: [
        {
          intro: "Práctica LSI:",
          items: [
            "recoger phrasing cercano",
            "responder preguntas frecuentes en un bloque FAQ",
            "no repetir una keyword de forma mecánica",
            "chequear legibilidad en voz alta",
          ],
        },
      ],
      links: [
        {
          label: "Contenido del sitio",
          href: "/es/blog/napolnenie-sayta/",
        },
      ],
    },
    {
      title: "Checklist y errores habituales",
      level: 2,
      paras: [
        "Antes del handoff: intención cubierta, un H1 con propósito, subtítulos lógicos, keywords naturales, sin fluff por volumen, unicidad y hechos chequeados, title/description alineados con la página, CTA en su sitio.",
        "Errores: copy-paste, stuffing, keywords en negrita, ignorar la estructura, texto fuera de cluster, prometer «primera página con un artículo». El contenido SEO trabaja dentro de un sistema con tech y tiempo — no como un hechizo puntual.",
      ],
      lists: [
        {
          intro: "Checklist de handoff:",
          items: [
            "encaje con el brief y el cluster",
            "estructura H1–H3",
            "meta del snippet sin clickbait",
            "chequeo de densidad / fluff",
            "corrección y verificación de hechos",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          text: "Publicar copy no es lo mismo que rankear en primera página. La indexación lleva de días a semanas; el crecimiento de rankings del set de keywords se planifica a meses tras el arranque del trabajo.",
        },
      ],
      links: [
        {
          label: "Snippets",
          href: "/es/blog/snippet/",
        },
        {
          label: "Tag H1",
          href: "/es/blog/teg-h1/",
        },
        {
          label: "Por qué el sitio no rankea",
          href: "/es/blog/sayt-ne-v-top/",
        },
      ],
    },
  ],
  related: [
    "kopirayting",
    "semanticheskoe-yadro",
    "dlina-seo-teksta",
    "toshnota-teksta",
    "napolnenie-sayta",
    "prodayushchie-teksty",
  ],
};
