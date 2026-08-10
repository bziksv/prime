import type { BlogPost } from "../../../data/blog";

/** EN overlay for bystrye-otvety-google — same structure as RU JSON. */
export const bystryeOtvetyGoogleEn: BlogPost = {
  slug: "bystrye-otvety-google",
  title: "Google featured snippets: how to get in and what to watch",
  date: "2019-07-19",
  category: "Digital marketing",
  cover: "/images/blog/bystrye-otvety-google/cover-en.webp",
  excerpt:
    "How Google’s featured snippet block works: formats, the role of question long-tails, answer structure on the page — with no “position zero” guarantee and an eye on AI Overviews.",
  lead: [
    "A featured snippet is a highlighted Google results block with a short answer from a page: paragraph, list, table, sometimes video. People often call it “position zero,” though it’s not a classic top-ten slot.",
    "Below: what raises the odds, how to gather question long-tails, and how to format the answer. Title/description and schema are in the snippet piece; the SERP changes (including AI Overviews) — no guarantees.",
  ],
  faq: [
    {
      q: "Is a featured snippet the same as a regular snippet?",
      a: "No. A regular snippet is title + description on a result. A featured snippet is a separate answer block, often above organic.",
    },
    {
      q: "Do you need to be in the top 3?",
      a: "Pages already visible for the query are taken more often, but not always #1. Without relevance and basic visibility the odds are weak.",
    },
    {
      q: "How many characters should the answer have?",
      a: "A cue is a short paragraph (about 40–60 words), not a wall of text. Exact limits float; what matters is a clear answer right under the question.",
    },
    {
      q: "Is FAQ markup enough?",
      a: "FAQPage can unlock another rich type. For a featured snippet the on-page text and structure matter more than JSON-LD alone.",
    },
    {
      q: "What about AI Overviews?",
      a: "Google tests and shows summarized answers. Classic featured snippets aren’t gone everywhere, but competition for zero-click grew. Watch Search Console and the SERP for your core.",
    },
    {
      q: "Is long-tail alone enough?",
      a: "Question low-frequency queries are a good entry. You still need a full piece, clear structure, and value after the click.",
    },
  ],
  sections: [
    {
      title: "Which blocks exist",
      level: 2,
      paras: [
        "Common formats: definition paragraph, numbered/bulleted list, table, video fragment. Length is limited — extras get cut.",
        "You don’t assign the block with a panel button. The algorithm picks the fragment that best answers the query intent.",
      ],
    },
    {
      title: "Question long-tails",
      level: 2,
      paras: [
        "A long tail (3+ words, often with “how,” “what,” “why,” “how much”) is closer to a featured snippet than one-word brands. Gather questions from search suggestions, “People also ask,” planners, and competitor semantics.",
        "Link to a long-form piece: one strong article covers a question cluster with question subheads and a short answer right under each.",
      ],
      lists: [
        {
          intro: "How to gather questions:",
          items: [
            "search suggestions on your topic",
            "the “related questions” block",
            "question words + niche core",
            "Wordstat / planner / competitor exports",
          ],
        },
      ],
      links: [
        {
          label: "Search suggestions",
          href: "/en/blog/poiskovye-podskazki/",
        },
      ],
    },
    {
      title: "How to format the answer on the page",
      level: 2,
      paras: [
        "Under an H2/H3 with the question, give a direct answer in 1–2 sentences, then expansion, a list, or a table. Don’t hide the point at the end of the article.",
        "Behavior metrics affect things indirectly: useful material is kept longer. But you can’t inflate bounce for a snippet — that’s harm and risk.",
      ],
      lists: [
        {
          intro: "Mini-checklist:",
          items: [
            "question in the subhead matches the query wording",
            "short answer right under it",
            "list/table when the intent is “how/steps/compare”",
            "unique depth beyond competitors",
            "mobile readability",
          ],
        },
      ],
      notes: [
        {
          title: "Timing and expectations",
          kind: "tip",
          text: "Getting into the block isn’t a guarantee of commercial page one and doesn’t replace site prep. Core ranks grow over months by plan; a featured snippet may appear earlier on an info cluster — or not at all.",
        },
      ],
      links: [
        {
          label: "Snippet and rich results",
          href: "/en/blog/snippet/",
        },
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
  ],
  closing: [
    "Google’s quick answer likes a clear question and a short precise fragment on a strong page. Gather long-tails, format answers under headings, and watch SERP changes — with no “position zero in a week” promises.",
  ],
  related: [
    "snippet",
    "poiskovye-podskazki",
    "optimizatsiya-stranitsy",
    "trendy-seo",
    "korporativnyy-blog",
    "kontent-plan",
  ],
};

/** ES overlay for bystrye-otvety-google — same structure as RU JSON / EN. */
export const bystryeOtvetyGoogleEs: BlogPost = {
  slug: "bystrye-otvety-google",
  title: "Featured snippets de Google: cómo entrar y qué vigilar",
  date: "2019-07-19",
  category: "Digital marketing",
  cover: "/images/blog/bystrye-otvety-google/cover-es.webp",
  excerpt:
    "Cómo funciona el bloque featured snippet de Google: formatos, el rol de las long-tails de pregunta, estructura de la respuesta en la página — sin garantía de «posición cero» y con ojo a AI Overviews.",
  lead: [
    "Un featured snippet es un bloque destacado de resultados de Google con una respuesta corta de una página: párrafo, lista, tabla, a veces vídeo. La gente suele llamarlo «posición cero», aunque no es un slot clásico de los primeros diez.",
    "Abajo: qué sube las odds, cómo reunir long-tails de pregunta y cómo formatear la respuesta. Title/description y schema están en la pieza del snippet; la SERP cambia (incluidos AI Overviews) — sin garantías.",
  ],
  faq: [
    {
      q: "¿Un featured snippet es lo mismo que un snippet habitual?",
      a: "No. Un snippet habitual es title + description en un resultado. Un featured snippet es un bloque de respuesta aparte, a menudo por encima de lo orgánico.",
    },
    {
      q: "¿Hay que estar en los primeros 3?",
      a: "Las páginas ya visibles para la consulta se toman más a menudo, pero no siempre el #1. Sin relevancia y visibilidad básica las odds son flojas.",
    },
    {
      q: "¿Cuántos caracteres debe tener la respuesta?",
      a: "Una pista es un párrafo corto (unas 40–60 palabras), no un muro de texto. Los límites exactos flotan; lo que importa es una respuesta clara justo bajo la pregunta.",
    },
    {
      q: "¿Basta el markup FAQ?",
      a: "FAQPage puede desbloquear otro tipo rich. Para un featured snippet el texto on-page y la estructura importan más que el JSON-LD solo.",
    },
    {
      q: "¿Y los AI Overviews?",
      a: "Google prueba y muestra respuestas resumidas. Los featured snippets clásicos no han desaparecido en todos lados, pero creció la competencia por zero-click. Mira Search Console y la SERP de tu núcleo.",
    },
    {
      q: "¿Basta la long-tail sola?",
      a: "Las consultas de pregunta de baja frecuencia son una buena entrada. Aun así hace falta una pieza completa, estructura clara y valor tras el clic.",
    },
  ],
  sections: [
    {
      title: "Qué bloques existen",
      level: 2,
      paras: [
        "Formatos habituales: párrafo de definición, lista numerada/con viñetas, tabla, fragmento de vídeo. La longitud es limitada — lo extra se corta.",
        "No asignas el bloque con un botón del panel. El algoritmo elige el fragmento que mejor responde a la intención de la consulta.",
      ],
    },
    {
      title: "Long-tails de pregunta",
      level: 2,
      paras: [
        "Una long tail (3+ palabras, a menudo con «cómo», «qué», «por qué», «cuánto») está más cerca de un featured snippet que marcas de una palabra. Reúne preguntas de sugerencias de búsqueda, «People also ask», planners y semántica de competidores.",
        "Enlaza a una pieza larga: un artículo fuerte cubre un cluster de preguntas con subtítulos de pregunta y una respuesta corta justo bajo cada uno.",
      ],
      lists: [
        {
          intro: "Cómo reunir preguntas:",
          items: [
            "sugerencias de búsqueda de tu tema",
            "el bloque de «preguntas relacionadas»",
            "palabras de pregunta + núcleo del nicho",
            "exports de Wordstat / planner / competidores",
          ],
        },
      ],
      links: [
        {
          label: "Sugerencias de búsqueda",
          href: "/es/blog/poiskovye-podskazki/",
        },
      ],
    },
    {
      title: "Cómo formatear la respuesta en la página",
      level: 2,
      paras: [
        "Bajo un H2/H3 con la pregunta, da una respuesta directa en 1–2 oraciones, luego expansión, una lista o una tabla. No escondas el punto al final del artículo.",
        "Las métricas de comportamiento afectan de forma indirecta: el material útil se retiene más. Pero no puedes inflar el rebote por un snippet — eso es daño y riesgo.",
      ],
      lists: [
        {
          intro: "Mini-checklist:",
          items: [
            "la pregunta en el subtítulo encaja con el wording de la consulta",
            "respuesta corta justo debajo",
            "lista/tabla cuando la intención es «cómo/pasos/comparar»",
            "profundidad única más allá de los competidores",
            "legibilidad móvil",
          ],
        },
      ],
      notes: [
        {
          title: "Timing y expectativas",
          kind: "tip",
          text: "Entrar en el bloque no es garantía de primera página comercial y no sustituye la preparación del sitio. Los ranks del núcleo crecen a lo largo de meses según el plan; un featured snippet puede aparecer antes en un cluster informativo — o no aparecer.",
        },
      ],
      links: [
        {
          label: "Snippet y rich results",
          href: "/es/blog/snippet/",
        },
        {
          label: "Optimización de página",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
  ],
  closing: [
    "La respuesta rápida de Google gusta de una pregunta clara y un fragmento corto y preciso en una página fuerte. Reúne long-tails, formatea respuestas bajo headings y mira los cambios de la SERP — sin promesas de «posición cero en una semana».",
  ],
  related: [
    "snippet",
    "poiskovye-podskazki",
    "optimizatsiya-stranitsy",
    "trendy-seo",
    "korporativnyy-blog",
    "kontent-plan",
  ],
};
