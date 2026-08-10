import type { BlogPost } from "../../../data/blog";

/** EN overlay for algoritmy-google — same structure as RU JSON. */
export const algoritmyGoogleEn: BlogPost = {
  slug: "algoritmy-google",
  title: "Google algorithms: grow without penalties",
  date: "2018-09-20",
  category: "SEO",
  cover: "/images/blog/algoritmy-google/cover-en.webp",
  excerpt:
    "Why Google updates search and what Panda, Penguin, Hummingbird, mobile-first, and RankBrain meant for sites: content quality, links, query meaning, and UX — without outdated uniqueness norms or filter-bypass tricks.",
  lead: [
    "Search constantly rebuilds ranking: it cuts thin and spammy content, manipulative links, and better understands query meaning and mobile experience. Ranking without penalties isn’t a trick — it’s aligning with the same signals.",
    "Below: why updates exist, a short tour of known names (Panda, Penguin, and others), and practical takeaways. Many separate 2010s updates now live inside core. Figures like “95% uniqueness” or “one keyword per 300 characters” are outdated heuristics, not Google law.",
  ],
  faq: [
    {
      q: "How is this different from the filters article?",
      a: "That one covers diagnosing a drop and white-hat recovery. This piece is an overview of Google’s algorithm logic and what to strengthen early.",
    },
    {
      q: "Do I need to memorize every update name?",
      a: "No. Principles matter more: content, links, relevance, mobile UX. Names are a handy history map.",
    },
    {
      q: "Are Panda and Penguin still separate systems?",
      a: "The ideas live in core and spam systems. Don’t wait for a 2011-style “Panda day” calendar — fix quality continuously.",
    },
    {
      q: "Does “1 keyword per 400 characters” help?",
      a: "Not as a rule. Write for meaning and the reader; overstuffing hurts, but there’s no magic density.",
    },
    {
      q: "Is mobile-first required?",
      a: "For Google the mobile version is critical: speed, readability, tap targets. The separate 2015 mobile update is now baseline.",
    },
    {
      q: "Is RankBrain a separate ranking lever?",
      a: "It’s an ML layer for understanding queries. Practical takeaway: cover intent, synonyms, and a useful answer — not only exact match.",
    },
    {
      q: "How do I avoid penalties?",
      a: "White-hat SEO: strong pages, natural links, no cloaking or thin spam. After a drop — diagnose filters.",
    },
  ],
  sections: [
    {
      title: "Why Google changes algorithms",
      level: 2,
      paras: [
        "The goal is useful, reliable results while cutting copypasta, link spam, pirated content, and pages built for ads.",
        "For a site owner that means: improve the page for the user and intent — not chase yesterday’s list of named filters.",
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "Content quality and the spirit of Panda",
      level: 2,
      paras: [
        "Panda-style logic hits thin, duplicate, and overstuffed pages. The fix is original value, solid snippets, fewer clones and doorway pages with no meaning.",
        "Don’t rely on a “95% uniqueness” threshold from content exchanges: answer completeness and E-E-A-T signals matter more than an anti-plagiarism percentage.",
      ],
      links: [
        {
          label: "On-page factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
      ],
    },
    {
      title: "Links and Penguin logic",
      level: 2,
      paras: [
        "Penguin and modern spam systems cut unnatural and low-quality links: irrelevant donors, over-optimized anchors, schemes.",
        "Prefer a natural profile and brand/naked URLs mixed with rare exact anchors. Mass “recovery” buying often makes things worse.",
      ],
      links: [
        {
          label: "Link types",
          href: "/en/blog/tipy-ssylok/",
        },
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Query meaning, local, and mobile",
      level: 2,
      paras: [
        "Hummingbird and later layers strengthen meaning: synonyms, related entities, intent — not only exact keyword match.",
        "Local signals (historically Pigeon and beyond) matter for geo businesses: maps, NAP, local pages without spam.",
        "Mobile-friendly / mobile-first: responsive layout, speed, easy taps. Without that, competing in Google is hard even with “perfect” keywords.",
      ],
    },
    {
      title: "Ad spam, RankBrain, and practice",
      level: 2,
      paras: [
        "Updates like Fred hit pages where ads and affiliate noise beat usefulness. Don’t turn an article into a banner dump or inflate outbound spam.",
        "RankBrain and other ML components help with rare and ambiguous queries. Practice: a clear answer, structure, related questions — not a keyword list.",
        "Pirated and illegal content is a separate demotion risk. Don’t mix SEO growth with gray file-sharing schemes.",
      ],
      lists: [
        {
          intro: "A practical minimum:",
          items: [
            "strong pages for intent",
            "a clean backlink profile",
            "mobile UX and speed",
            "moderate ads on content URLs",
            "monitoring the keyword set after major updates",
          ],
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "2011–2017 update names are a history map. Check current Google Search docs for rules; after a sharp drop use filter diagnosis — not a bypass.",
  },
  closing: [
    "Lock content, links, and mobile hygiene — so you match why Google changes algorithms, without chasing outdated uniqueness percentages.",
  ],
  related: [
    "filtry-poiskovikov",
    "tipy-ssylok",
    "ssylochnyy-profil",
    "seo-yandex-google",
    "vnutrennie-faktory",
    "pokupka-ssylok",
  ],
};

/** ES overlay for algoritmy-google — same structure as RU JSON / EN. */
export const algoritmyGoogleEs: BlogPost = {
  slug: "algoritmy-google",
  title: "Algoritmos de Google: crecer sin penalizaciones",
  date: "2018-09-20",
  category: "SEO",
  cover: "/images/blog/algoritmy-google/cover-es.webp",
  excerpt:
    "Por qué Google actualiza la búsqueda y qué significaron Panda, Penguin, Hummingbird, mobile-first y RankBrain para los sitios: calidad de contenido, enlaces, sentido de la consulta y UX — sin normas de unicidad obsoletas ni trucos para saltar filtros.",
  lead: [
    "La búsqueda reconstruye el ranking sin parar: corta contenido fino y spam, enlaces manipulativos, y entiende mejor el sentido de la consulta y la experiencia móvil. Rankear sin penalizaciones no es un truco — es alinearse con las mismas señales.",
    "Abajo: por qué existen las updates, un tour corto de nombres conocidos (Panda, Penguin y otros) y takeaways prácticos. Muchas updates sueltas de los 2010 ahora viven dentro del core. Cifras como «95% de unicidad» o «una keyword cada 300 caracteres» son heurísticas viejas, no ley de Google.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia del artículo de filtros?",
      a: "Aquel cubre diagnosticar una caída y la recuperación white-hat. Esta pieza es un overview de la lógica de algoritmos de Google y qué reforzar pronto.",
    },
    {
      q: "¿Hay que memorizar cada nombre de update?",
      a: "No. Importan más los principios: contenido, enlaces, relevancia, UX móvil. Los nombres son un mapa histórico útil.",
    },
    {
      q: "¿Panda y Penguin siguen siendo sistemas aparte?",
      a: "Las ideas viven en el core y en los sistemas de spam. No esperes un calendario de «día Panda» al estilo 2011 — arregla la calidad de continuo.",
    },
    {
      q: "¿Ayuda «1 keyword cada 400 caracteres»?",
      a: "No como regla. Escribe para el sentido y el lector; el stuffing perjudica, pero no hay una densidad mágica.",
    },
    {
      q: "¿Es obligatorio el mobile-first?",
      a: "Para Google la versión móvil es crítica: velocidad, legibilidad, targets táctiles. La update móvil aparte de 2015 ahora es baseline.",
    },
    {
      q: "¿RankBrain es una palanca de ranking aparte?",
      a: "Es una capa de ML para entender consultas. Takeaway práctico: cubre intención, sinónimos y una respuesta útil — no solo exact match.",
    },
    {
      q: "¿Cómo evitar penalizaciones?",
      a: "SEO white-hat: páginas fuertes, enlaces naturales, sin cloaking ni spam fino. Tras una caída — diagnostica filtros.",
    },
  ],
  sections: [
    {
      title: "Por qué Google cambia los algoritmos",
      level: 2,
      paras: [
        "El objetivo son resultados útiles y fiables, cortando copypasta, spam de enlaces, contenido pirateado y páginas hechas para anuncios.",
        "Para el dueño del sitio eso significa: mejorar la página para el usuario y la intención — no perseguir la lista de filtros con nombre de ayer.",
      ],
      links: [
        {
          label: "Filtros de buscadores",
          href: "/es/blog/filtry-poiskovikov/",
        },
        {
          label: "SEO para Yandex y Google",
          href: "/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "Calidad de contenido y el espíritu de Panda",
      level: 2,
      paras: [
        "La lógica estilo Panda golpea páginas finas, duplicadas y con stuffing. La solución es valor original, snippets sólidos, menos clones y doorways sin sentido.",
        "No te apoyes en un umbral de «95% de unicidad» de exchanges de contenido: la completitud de la respuesta y las señales E-E-A-T importan más que un porcentaje anti-plagio.",
      ],
      links: [
        {
          label: "Factores on-page",
          href: "/blog/vnutrennie-faktory/",
        },
      ],
    },
    {
      title: "Enlaces y la lógica de Penguin",
      level: 2,
      paras: [
        "Penguin y los sistemas modernos de spam cortan enlaces antinaturales y de baja calidad: donors irrelevantes, anclas sobre-optimizadas, esquemas.",
        "Prefiere un perfil natural y URLs de marca/desnudas mezcladas con anclas exactas raras. Comprar «recuperación» a masa a menudo empeora las cosas.",
      ],
      links: [
        {
          label: "Tipos de enlaces",
          href: "/es/blog/tipy-ssylok/",
        },
        {
          label: "Perfil de backlinks",
          href: "/es/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Sentido de la consulta, local y móvil",
      level: 2,
      paras: [
        "Hummingbird y capas posteriores refuerzan el sentido: sinónimos, entidades relacionadas, intención — no solo exact keyword match.",
        "Las señales locales (históricamente Pigeon y más allá) importan para negocios geo: mapas, NAP, páginas locales sin spam.",
        "Mobile-friendly / mobile-first: layout responsive, velocidad, taps fáciles. Sin eso, competir en Google es duro incluso con keywords «perfectas».",
      ],
    },
    {
      title: "Spam de anuncios, RankBrain y práctica",
      level: 2,
      paras: [
        "Updates como Fred golpean páginas donde anuncios y ruido affiliate ganan a la utilidad. No conviertas un artículo en un vertedero de banners ni infles spam de salida.",
        "RankBrain y otros componentes de ML ayudan con consultas raras y ambiguas. Práctica: una respuesta clara, estructura, preguntas relacionadas — no una lista de keywords.",
        "El contenido pirateado e ilegal es un riesgo de democión aparte. No mezcles crecimiento SEO con esquemas grises de file-sharing.",
      ],
      lists: [
        {
          intro: "Un mínimo práctico:",
          items: [
            "páginas fuertes para la intención",
            "un perfil de backlinks limpio",
            "UX móvil y velocidad",
            "anuncios moderados en URLs de contenido",
            "monitorear el set de keywords tras updates mayores",
          ],
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "Los nombres de updates 2011–2017 son un mapa histórico. Revisa la documentación actual de Google Search para las reglas; tras una caída brusca usa diagnóstico de filtros — no un bypass.",
  },
  closing: [
    "Fija higiene de contenido, enlaces y móvil — para encajar con por qué Google cambia algoritmos, sin perseguir porcentajes de unicidad obsoletos.",
  ],
  related: [
    "filtry-poiskovikov",
    "tipy-ssylok",
    "ssylochnyy-profil",
    "seo-yandex-google",
    "vnutrennie-faktory",
    "pokupka-ssylok",
  ],
};
