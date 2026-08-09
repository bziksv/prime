import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-dzen — same structure as RU JSON. */
export const yandeksDzenEn: BlogPost = {
  slug: "yandeks-dzen",
  title: "Yandex Zen: picking a topic, rules, and monetization",
  date: "2021-07-02",
  category: "Content marketing",
  cover: "/images/blog/yandeks-dzen/cover-en.webp",
  excerpt:
    "How Zen works for authors: the recommendation feed, niche choice, publishing rules, and monetization logic — without outdated “in a week” thresholds or advice to copy other people’s texts.",
  lead: [
    "Zen (Yandex Zen) is a recommendation feed for articles and other content. For authors it’s a reach channel: pieces can find people who don’t follow you yet, based on interests and behavior.",
    "Below: why the platform matters, how to pick a topic, which rules matter, and how monetization works in broad strokes. Partner thresholds, UI, and stats change — check current terms in the Zen dashboard.",
  ],
  faq: [
    {
      q: "How is Zen different from a regular site blog?",
      a: "Strong focus on in-platform recommendations. On your own site you depend more on search and your channels; in Zen, on the feed algorithm and read-through.",
    },
    {
      q: "What topic should a beginner pick?",
      a: "One you can write about regularly and with substance. Broad “trending” niches are competitive; narrow expertise often holds up better than clickbait.",
    },
    {
      q: "How many views do I need for monetization?",
      a: "Partner-program thresholds and terms have changed. Don’t treat 2021 guide numbers as the norm — check Zen Help.",
    },
    {
      q: "Can I send traffic to my site?",
      a: "Depends on platform rules and link formats. Don’t build a strategy on dodging moderation and aggressive link spam.",
    },
    {
      q: "Does machine-translating other people’s articles help?",
      a: "As a strategy, no: thin content, claim risk, and weak uniqueness. Better your own experience and verified facts.",
    },
  ],
  sections: [
    {
      title: "What Zen is for an author",
      level: 2,
      paras: [
        "The platform shows materials in a feed by reader interest. For an author that’s a chance at reach without a big follower base — and dependence on the algorithm, read-through quality, and the rules.",
        "Downsides are typical of recommendation systems: opaque impression swings, tech glitches, and no monetization guarantee even with regular publishing.",
      ],
      lists: [
        {
          intro: "Why authors join:",
          items: [
            "reach a new audience",
            "expert or brand awareness",
            "monetization when program terms are met",
            "an extra channel to the site (if rules allow)",
          ],
        },
      ],
    },
    {
      title: "Topic choice and audience",
      level: 2,
      paras: [
        "Aim for steady interest and your expertise, not only what’s spreading right now. Jumping between unrelated niches every day makes it harder for the algorithm and readers to “read” you.",
        "Broad entertainment topics are competitive; narrow utility (hobby, practice, breakdown) may grow slower but more steadily. Watch channel stats and read-through, not only competitors’ headlines.",
      ],
      lists: [
        {
          intro: "Working strategies:",
          items: [
            "niche expert — depth and facts",
            "one broad theme with rubrics inside",
            "careful tests of adjacent formats without losing the core",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "“A bit over 500 words” isn’t a law. Write as much as needed to answer the question; fluff for length is worse than short value.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Rules and publication quality",
      level: 2,
      paras: [
        "The platform cuts copy-paste, clickbait without substance, shock content, hate speech, spam, and misleading headlines. Regional noise with no value for the feed audience also performs poorly.",
        "Regularity matters, but flooding volume at any cost leads to burnout and thin content. Better a rubric plan, your own visuals, and fact-checking.",
      ],
      lists: [
        {
          intro: "Hygiene minimum:",
          items: [
            "your own text or honest rewrite with added value",
            "headline matches content",
            "readable structure and media that serve the piece",
            "no stuffing with third-party links",
            "follow Zen community rules",
          ],
        },
      ],
    },
    {
      title: "Monetization: expectations without myths",
      level: 2,
      paras: [
        "The partner program turns on when current terms are met (views, quality, channel status). Don’t copy old “N views per week” thresholds and “money in a week” promises into your plan.",
        "In practice what helps: a clear topic, regularity, read-through, honest headlines, and a content plan. Don’t rely on machine-translating others’ articles as a business model.",
      ],
      lists: [
        {
          intro: "Before enabling monetization:",
          items: [
            "read current terms in the dashboard",
            "resolve copyright claims",
            "set up stats and rubrics",
            "have a two-to-four-week topic backlog",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
        {
          label: "Refreshing content",
          href: "/en/blog/obnovlenie-kontenta/",
        },
      ],
    },
  ],
};

/** ES overlay for yandeks-dzen — same structure as RU JSON / EN. */
export const yandeksDzenEs: BlogPost = {
  slug: "yandeks-dzen",
  title: "Yandex Zen: elegir tema, reglas y monetización",
  date: "2021-07-02",
  category: "Content marketing",
  cover: "/images/blog/yandeks-dzen/cover.webp",
  excerpt:
    "Cómo funciona Zen para autores: el feed de recomendaciones, elección de nicho, reglas de publicación y lógica de monetización — sin umbrales obsoletos «en una semana» ni consejos de copiar textos ajenos.",
  lead: [
    "Zen (Yandex Zen) es un feed de recomendaciones de artículos y otro contenido. Para autores es un canal de alcance: las piezas pueden encontrar a quien aún no te sigue, según intereses y comportamiento.",
    "Abajo: por qué importa la plataforma, cómo elegir tema, qué reglas importan y cómo funciona la monetización a grandes rasgos. Umbrales de partner, UI y stats cambian — revisa los términos actuales en el panel de Zen.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia Zen de un blog de sitio normal?",
      a: "Fuerte foco en recomendaciones dentro de la plataforma. En tu propio sitio dependes más de la búsqueda y tus canales; en Zen, del algoritmo del feed y del read-through.",
    },
    {
      q: "¿Qué tema debería elegir un principiante?",
      a: "Uno sobre el que puedas escribir con regularidad y sustancia. Los nichos «trending» amplios son competitivos; la expertise estrecha suele aguantar mejor que el clickbait.",
    },
    {
      q: "¿Cuántas vistas hacen falta para monetizar?",
      a: "Los umbrales y términos del programa de partners han cambiado. No trates las cifras de guías de 2021 como norma — revisa la Help de Zen.",
    },
    {
      q: "¿Puedo enviar tráfico a mi sitio?",
      a: "Depende de las reglas de la plataforma y de los formatos de enlace. No montes una estrategia sobre esquivar la moderación y el spam agresivo de enlaces.",
    },
    {
      q: "¿Ayuda traducir a máquina artículos ajenos?",
      a: "Como estrategia, no: contenido fino, riesgo de reclamaciones y poca unicidad. Mejor tu propia experiencia y hechos verificados.",
    },
  ],
  sections: [
    {
      title: "Qué es Zen para un autor",
      level: 2,
      paras: [
        "La plataforma muestra materiales en un feed según el interés del lector. Para un autor eso es una chance de alcance sin una gran base de seguidores — y dependencia del algoritmo, de la calidad del read-through y de las reglas.",
        "Los contras son típicos de los sistemas de recomendación: vaivenes opacos de impresiones, fallos técnicos y ninguna garantía de monetización aunque publiques con regularidad.",
      ],
      lists: [
        {
          intro: "Por qué se unen los autores:",
          items: [
            "alcanzar una audiencia nueva",
            "awareness de expert o de marca",
            "monetización cuando se cumplen los términos del programa",
            "un canal extra hacia el sitio (si las reglas lo permiten)",
          ],
        },
      ],
    },
    {
      title: "Elección de tema y audiencia",
      level: 2,
      paras: [
        "Apunta a interés estable y a tu expertise, no solo a lo que se difunde ahora. Saltar entre nichos sin relación cada día dificulta que el algoritmo y los lectores te «lean».",
        "Los temas amplios de entretenimiento son competitivos; la utilidad estrecha (hobby, práctica, desglose) puede crecer más lento pero más estable. Mira stats del canal y read-through, no solo titulares de competidores.",
      ],
      lists: [
        {
          intro: "Estrategias que funcionan:",
          items: [
            "expert de nicho — profundidad y hechos",
            "un tema amplio con rúbricas dentro",
            "tests cuidadosos de formatos adyacentes sin perder el núcleo",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          text: "«Un poco más de 500 palabras» no es una ley. Escribe lo necesario para responder a la pregunta; fluff por longitud es peor que valor corto.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Reglas y calidad de publicación",
      level: 2,
      paras: [
        "La plataforma corta copy-paste, clickbait sin sustancia, contenido shock, hate speech, spam y titulares engañosos. El ruido regional sin valor para la audiencia del feed también rinde mal.",
        "La regularidad importa, pero inundar volumen a cualquier coste lleva a burnout y contenido fino. Mejor un plan de rúbricas, visuales propios y fact-checking.",
      ],
      lists: [
        {
          intro: "Higiene mínima:",
          items: [
            "texto propio o rewrite honesto con valor añadido",
            "el titular encaja con el contenido",
            "estructura legible y media que sirve a la pieza",
            "sin stuffing de enlaces de terceros",
            "seguir las reglas de comunidad de Zen",
          ],
        },
      ],
    },
    {
      title: "Monetización: expectativas sin mitos",
      level: 2,
      paras: [
        "El programa de partners se activa cuando se cumplen los términos actuales (vistas, calidad, estado del canal). No copies a tu plan umbrales antiguos de «N vistas por semana» ni promesas de «dinero en una semana».",
        "En la práctica ayuda: un tema claro, regularidad, read-through, titulares honestos y un plan de contenido. No te apoyes en traducir a máquina artículos ajenos como modelo de negocio.",
      ],
      lists: [
        {
          intro: "Antes de activar la monetización:",
          items: [
            "leer los términos actuales en el panel",
            "resolver reclamaciones de copyright",
            "montar stats y rúbricas",
            "tener un backlog de temas de dos a cuatro semanas",
          ],
        },
      ],
      links: [
        {
          label: "Plan de contenido",
          href: "/es/blog/kontent-plan/",
        },
        {
          label: "Actualizar contenido",
          href: "/es/blog/obnovlenie-kontenta/",
        },
      ],
    },
  ],
};
