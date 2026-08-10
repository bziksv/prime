import type { BlogPost } from "../../../data/blog";

/** EN overlay for baden-baden — same structure as RU JSON. */
export const badenBadenEn: BlogPost = {
  slug: "baden-baden",
  title: "Yandex Baden-Baden and copy without keyword stuffing",
  date: "2017-04-27",
  category: "SEO",
  cover: "/images/blog/baden-baden/cover-en.webp",
  excerpt:
    "What the Baden-Baden algorithm did: fighting over-optimized text, how to write useful content, and how “LSI” differs from a synonym cult — next to filters and Turgenev.",
  lead: [
    "Baden-Baden was a Yandex wave against stuffing and keyword sheets: useful text beats phrase density. Since 2017 that logic lives in content quality — not a “filter day” calendar.",
    "Below: what got demoted, how to lower risk, and what people usually mean by LSI copywriting. This isn’t a bypass guide and isn’t a ranking promise. Drop diagnosis is in the filters piece; over-optimization checks are in Turgenev.",
  ],
  faq: [
    {
      q: "Does Baden-Baden still turn on on a schedule?",
      a: "The name is historical. Yandex weighs text spam continuously. Don’t wait for an update date as the only lever.",
    },
    {
      q: "How is it different from Minusinsk?",
      a: "Minusinsk was tied to link spam. Baden-Baden — to over-optimized text.",
    },
    {
      q: "Is Turgenev the same as Baden-Baden?",
      a: "No. Turgenev is a third-party risk checker. Search’s decision is broader.",
    },
    {
      q: "Does LSI guarantee growth?",
      a: "No. Synonyms and related terms help cover a topic; treating “LSI phrases” as a stuffing checklist is spam again.",
    },
    {
      q: "Is a keyword sheet dangerous?",
      a: "Yes as UX and as a low-quality signal. Prefer structure, lists, meaning, and moderate occurrences.",
    },
    {
      q: "Is zero keyword density required?",
      a: "No. Niche terms repeat. Chase readability, not a magic percentage.",
    },
    {
      q: "What should I do if I suspect a text filter?",
      a: "Remove stuffing, strengthen page value, check Webmaster. Don’t buy “filter removal.”",
    },
  ],
  sections: [
    {
      title: "Why Baden-Baden existed",
      level: 2,
      paras: [
        "Yandex increased pressure on sites with repeating keywords, long meaningless text, and weak structure — content for the bot, not for people.",
        "The idea is close to Google’s fight with thin/spammy text: meaning and usefulness beat exact match.",
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Google algorithms",
          href: "/en/blog/algoritmy-google/",
        },
      ],
    },
    {
      title: "How to lower risk",
      level: 2,
      paras: [
        "Write an answer to intent: subheads, paragraphs, lists, tables, and images that earn their place — not a keyword sheet.",
        "Cut unnatural repeats of commercial phrases. One clear H1 and normal language beat telegraphic spam.",
        "Check disputed copy with density/risk tools, but edit for the reader — not for a zero score.",
      ],
      lists: [
        {
          intro: "Red flags in text:",
          items: [
            "the same phrase in every sentence",
            "no structure or meaning",
            "keywords instead of answers",
            "a page for SEO with no offer/value",
          ],
        },
      ],
      links: [
        {
          label: "Text spamminess",
          href: "/en/blog/zaspamlennost-teksta/",
        },
        {
          label: "Text keyword density",
          href: "/en/blog/toshnota-teksta/",
        },
        {
          label: "Turgenev tool",
          href: "/en/blog/turgenev/",
        },
      ],
    },
    {
      title: "LSI without the cult",
      level: 2,
      paras: [
        "In practice “LSI” usually means covering the topic: synonyms, related concepts, answers to side questions — people’s language, not a generator list.",
        "Synonyms for a checkbox hurt as much as exact-match stuffing. Topic and value first, then natural wording.",
        "Quality copy costs more than exchange “SEO for pennies” — and that’s fine if the page should work for years.",
      ],
      links: [
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "User intent",
          href: "/en/blog/user-intent/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Baden-Baden 2017 is a historical name for a wave against text spam. Check current quality rules in Yandex Help; don’t buy “remove Baden-Baden” services.",
  },
  closing: [
    "Read one commercial URL out loud: if the keyword phrase breaks meaning — fix the copy; that matches why Baden-Baden was introduced, without hunting a mythical LSI dictionary.",
  ],
  related: [
    "filtry-poiskovikov",
    "turgenev",
    "zaspamlennost-teksta",
    "toshnota-teksta",
    "user-intent",
    "kopirayting",
  ],
};

/** ES overlay for baden-baden — same structure as RU JSON / EN. */
export const badenBadenEs: BlogPost = {
  slug: "baden-baden",
  title: "Baden-Baden de Yandex y copy sin stuffing de keywords",
  date: "2017-04-27",
  category: "SEO",
  cover: "/images/blog/baden-baden/cover-es.webp",
  excerpt:
    "Qué hizo el algoritmo Baden-Baden: combatir texto sobre-optimizado, cómo escribir contenido útil, y en qué se diferencia el «LSI» de un culto a sinónimos — junto a filtros y Turgenev.",
  lead: [
    "Baden-Baden fue una ola de Yandex contra el stuffing y las hojas de keywords: el texto útil gana a la densidad de frases. Desde 2017 esa lógica vive en la calidad del contenido — no en un calendario de «día de filtro».",
    "Abajo: qué se demoteó, cómo bajar el riesgo y qué suele significar la gente por copywriting LSI. No es una guía de bypass ni una promesa de rankings. El diagnóstico de caídas está en la pieza de filtros; los checks de sobre-optimización, en Turgenev.",
  ],
  faq: [
    {
      q: "¿Baden-Baden sigue activándose con calendario?",
      a: "El nombre es histórico. Yandex pesa el spam de texto de continuo. No esperes una fecha de update como única palanca.",
    },
    {
      q: "¿En qué se diferencia de Minusinsk?",
      a: "Minusinsk iba ligado al spam de enlaces. Baden-Baden — al texto sobre-optimizado.",
    },
    {
      q: "¿Turgenev es lo mismo que Baden-Baden?",
      a: "No. Turgenev es un checker de riesgo de terceros. La decisión del buscador es más amplia.",
    },
    {
      q: "¿El LSI garantiza crecimiento?",
      a: "No. Sinónimos y términos relacionados ayudan a cubrir un tema; tratar «frases LSI» como checklist de stuffing es spam otra vez.",
    },
    {
      q: "¿Una hoja de keywords es peligrosa?",
      a: "Sí como UX y como señal de baja calidad. Prefiere estructura, listas, sentido y ocurrencias moderadas.",
    },
    {
      q: "¿Hace falta densidad cero de keywords?",
      a: "No. Los términos del nicho se repiten. Persigue legibilidad, no un porcentaje mágico.",
    },
    {
      q: "¿Qué hacer si sospecho un filtro de texto?",
      a: "Quita stuffing, refuerza el valor de la página, revisa Webmaster. No compres «quitar el filtro».",
    },
  ],
  sections: [
    {
      title: "Por qué existió Baden-Baden",
      level: 2,
      paras: [
        "Yandex aumentó la presión sobre sitios con keywords que se repiten, texto largo sin sentido y estructura floja — contenido para el bot, no para personas.",
        "La idea está cerca de la lucha de Google contra texto fino/spam: el sentido y la utilidad ganan al exact match.",
      ],
      links: [
        {
          label: "Filtros de buscadores",
          href: "/es/blog/filtry-poiskovikov/",
        },
        {
          label: "Algoritmos de Google",
          href: "/es/blog/algoritmy-google/",
        },
      ],
    },
    {
      title: "Cómo bajar el riesgo",
      level: 2,
      paras: [
        "Escribe una respuesta a la intención: subtítulos, párrafos, listas, tablas e imágenes que se ganen el sitio — no una hoja de keywords.",
        "Corta repeticiones antinaturales de frases comerciales. Un H1 claro y lenguaje normal ganan al spam telegráfico.",
        "Revisa copy dudoso con herramientas de densidad/riesgo, pero edita para el lector — no para un score cero.",
      ],
      lists: [
        {
          intro: "Banderas rojas en el texto:",
          items: [
            "la misma frase en cada oración",
            "sin estructura ni sentido",
            "keywords en vez de respuestas",
            "una página para SEO sin oferta/valor",
          ],
        },
      ],
      links: [
        {
          label: "Spamminess del texto",
          href: "/es/blog/zaspamlennost-teksta/",
        },
        {
          label: "Densidad de keywords en el texto",
          href: "/es/blog/toshnota-teksta/",
        },
        {
          label: "Herramienta Turgenev",
          href: "/es/blog/turgenev/",
        },
      ],
    },
    {
      title: "LSI sin el culto",
      level: 2,
      paras: [
        "En la práctica «LSI» suele significar cubrir el tema: sinónimos, conceptos relacionados, respuestas a preguntas laterales — el lenguaje de la gente, no una lista de generador.",
        "Los sinónimos por checkbox perjudican tanto como el stuffing de exact-match. Primero tema y valor, luego wording natural.",
        "El copy de calidad cuesta más que el «SEO por céntimos» de exchanges — y está bien si la página debe trabajar años.",
      ],
      links: [
        {
          label: "Copywriting",
          href: "/es/blog/kopirayting/",
        },
        {
          label: "Intención del usuario",
          href: "/es/blog/user-intent/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "Baden-Baden 2017 es un nombre histórico de una ola contra el spam de texto. Revisa las reglas de calidad actuales en la Ayuda de Yandex; no compres servicios de «quitar Baden-Baden».",
  },
  closing: [
    "Lee en voz alta una URL comercial: si la frase keyword rompe el sentido — arregla el copy; eso encaja con por qué se introdujo Baden-Baden, sin cazar un diccionario LSI mítico.",
  ],
  related: [
    "filtry-poiskovikov",
    "turgenev",
    "zaspamlennost-teksta",
    "toshnota-teksta",
    "user-intent",
    "kopirayting",
  ],
};
