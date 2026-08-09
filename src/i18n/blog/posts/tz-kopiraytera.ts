import type { BlogPost } from "../../../data/blog";

/** EN overlay for tz-kopiraytera — same structure as RU JSON. */
export const tzKopirayteraEn: BlogPost = {
  slug: "tz-kopiraytera",
  title: "How to write a brief for a copywriter",
  date: "2020-06-24",
  category: "Content marketing",
  cover: "/images/blog/tz-kopiraytera/cover-en.webp",
  excerpt:
    "A copywriter brief that covers goal, audience, outline, facts, stop-list, and acceptance criteria — for sales, SEO, and homepage copy, without treating “95% uniqueness” as the only KPI.",
  lead: [
    "Weak copy often starts with a vague order: “write about wallpaper, make it nice, add keywords.” A clear brief cuts revisions — even with a mid-level writer.",
    "Below: why you need a brief, a framework for sales copy, homepage and SEO nuances, and basic acceptance rules. Types of copy and how to hire live in our general copywriting guide; if you’re writing yourself, use the article-writing algorithm instead.",
  ],
  faq: [
    {
      q: "Can I skip a brief on a freelance marketplace?",
      a: "You can, but you’ll usually get generic copy — not what the business needs. A short brief costs less than a rewrite cycle.",
    },
    {
      q: "What should every brief include?",
      a: "Goal, audience, length and format, tone, must-have facts, a stop-list, acceptance criteria, and a deadline.",
    },
    {
      q: "Do I need keywords in the brief?",
      a: "For SEO pages — yes: the cluster, preferred forms, and where they belong. Without a keyword set and intent, a keyword list is almost useless.",
    },
    {
      q: "What uniqueness score should I require?",
      a: "A checker percentage isn’t gospel. No copy-paste and real usefulness matter more. Treat uniqueness-tool numbers as a check, not the only KPI.",
    },
    {
      q: "How many characters should I specify?",
      a: "Match the page job — not “more is better.” Often 2–4k characters with spaces for a block; go longer only when you need real depth.",
    },
    {
      q: "Who should write the brief — marketing or SEO?",
      a: "Better together: offer and audience from marketing, cluster and page type from SEO.",
    },
    {
      q: "How is this different from the “Copywriting” article?",
      a: "That piece covers text types and choosing a writer. This one is about assembling the brief itself.",
    },
    {
      q: "Do I need style examples?",
      a: "Yes. One or two “do this” and “don’t do this” links align tone faster than adjectives alone.",
    },
  ],
  sections: [
    {
      title: "Why a detailed brief",
      level: 2,
      paras: [
        "It locks expectations before work starts, so you hear fewer “I meant something else.”",
        "You reach an acceptable draft faster and cheaper than waiting for a “perfect” author with no brief.",
        "It gives acceptance criteria: you revise on substance, not endless taste debates.",
      ],
    },
    {
      title: "Framework for sales copy",
      level: 2,
      paras: [
        "Collect offer pros and cons from sales or marketing. Lock the goal (lead, trial, call), the audience, a draft outline with headings, theses, and the questions the text must answer.",
        "Add stop-rules (fluff, clichés, promises you can’t keep) and how you differ from competitors on page one — in your own words and with real facts.",
      ],
      lists: [
        {
          intro: "Minimum blocks in the brief:",
          items: [
            "goal and CTA",
            "reader persona",
            "outline / H2s",
            "must-have facts and figures",
            "objection checklist",
            "stop-words and banned tactics",
            "length, tone, deadline, revision limit",
          ],
        },
      ],
      notes: [
        {
          title: "Logic example",
          kind: "tip",
          text: "Language school: goal is to book a level test; audience is people who studied before; outline runs problem → benefit of knowing the language → why know your level → CTA; ban openers like “everyone knows…”",
        },
      ],
    },
    {
      title: "Homepage and SEO copy",
      level: 2,
      paras: [
        "Homepage: hand over advantage theses, services, facts, reviews, client FAQ, and competitor notes yourself — don’t expect the writer to invent the brand from a Google search. See also the homepage-copy article.",
        "SEO: attach the cluster, page intent, and placement guidance without stuffing. An SEO consult before the brief saves rewrites.",
      ],
      links: [
        {
          label: "Homepage copy",
          href: "/en/blog/tekst-glavnoy-stranitsy/",
        },
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Basic acceptance requirements",
      level: 2,
      paras: [
        "Structure: subheads, lists, readable paragraphs. Tone: company voice or impersonal; keep the “you” form consistent throughout.",
        "Check uniqueness with the tool named in the brief, but don’t chase 100% at the cost of meaning. Attach style references in advance.",
      ],
      links: [
        {
          label: "Uniqueness checks",
          href: "/en/blog/proverka-unikalnosti/",
        },
        {
          label: "Copywriting types",
          href: "/en/blog/kopirayting/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Brief = goal + audience + facts + stop-list + acceptance.",
        "For homepage and SEO pages the brief is thicker than “just an article.”",
        "An anti-plagiarism percentage is a guide, not the only goal.",
      ],
    },
  ],
  closing: [
    "Before the next order, fill one brief template against a past successful page — then reuse it as a checklist for future copy.",
  ],
  related: [
    "kopirayting",
    "seo-kopirayting",
    "kak-napisat-statyu",
    "zakazchiki-kopiraytera",
    "tekst-glavnoy-stranitsy",
    "proverka-unikalnosti",
  ],
};

/** ES overlay for tz-kopiraytera — same structure as RU JSON / EN. */
export const tzKopirayteraEs: BlogPost = {
  slug: "tz-kopiraytera",
  title: "Cómo escribir un brief para un copywriter",
  date: "2020-06-24",
  category: "Content marketing",
  cover: "/images/blog/tz-kopiraytera/cover.webp",
  excerpt:
    "Un brief de copywriter que cubre objetivo, audiencia, esquema, hechos, stop-list y criterios de aceptación — para copy de venta, SEO y homepage, sin tratar el «95% de unicidad» como único KPI.",
  lead: [
    "El copy débil a menudo empieza con un pedido vago: «escribe sobre papel pintado, que quede bonito, añade keywords». Un brief claro corta revisiones — incluso con un escritor de nivel medio.",
    "Abajo: por qué hace falta un brief, un marco para copy de venta, matices de homepage y SEO, y reglas básicas de aceptación. Los tipos de copy y cómo contratar viven en nuestra guía general de copywriting; si escribes tú, usa el algoritmo de escritura de artículos.",
  ],
  faq: [
    {
      q: "¿Puedo saltarme el brief en un marketplace freelance?",
      a: "Puedes, pero suele salir copy genérico — no lo que el negocio necesita. Un brief corto cuesta menos que un ciclo de rewrites.",
    },
    {
      q: "¿Qué debe incluir todo brief?",
      a: "Objetivo, audiencia, longitud y formato, tono, hechos imprescindibles, una stop-list, criterios de aceptación y un deadline.",
    },
    {
      q: "¿Hacen falta keywords en el brief?",
      a: "Para páginas SEO — sí: el cluster, formas preferidas y dónde van. Sin un set de keywords e intención, una lista de keywords casi no sirve.",
    },
    {
      q: "¿Qué puntuación de unicidad debo exigir?",
      a: "El porcentaje de un checker no es evangelio. Importan más no hacer copy-paste y la utilidad real. Trata las cifras de herramientas de unicidad como un chequeo, no el único KPI.",
    },
    {
      q: "¿Cuántos caracteres debo indicar?",
      a: "Cuadra con el trabajo de la página — no «más es mejor». A menudo 2–4k caracteres con espacios para un bloque; alarga solo cuando haga falta profundidad real.",
    },
    {
      q: "¿Quién escribe el brief — marketing o SEO?",
      a: "Mejor juntos: oferta y audiencia desde marketing, cluster y tipo de página desde SEO.",
    },
    {
      q: "¿En qué se diferencia del artículo «Copywriting»?",
      a: "Esa pieza cubre tipos de texto y elegir un escritor. Esta va de armar el brief en sí.",
    },
    {
      q: "¿Hacen falta ejemplos de estilo?",
      a: "Sí. Uno o dos enlaces de «haz esto» y «no hagas esto» alinean el tono más rápido que solo adjetivos.",
    },
  ],
  sections: [
    {
      title: "Por qué un brief detallado",
      level: 2,
      paras: [
        "Fija expectativas antes de empezar el trabajo, así oyes menos «yo quería otra cosa».",
        "Llegas a un borrador aceptable más rápido y barato que esperar a un autor «perfecto» sin brief.",
        "Da criterios de aceptación: revisas por sustancia, no por debates eternos de gusto.",
      ],
    },
    {
      title: "Marco para copy de venta",
      level: 2,
      paras: [
        "Recoge pros y contras de la oferta desde ventas o marketing. Fija el objetivo (lead, trial, llamada), la audiencia, un esquema borrador con encabezados, tesis y las preguntas que el texto debe responder.",
        "Añade stop-rules (fluff, clichés, promesas que no puedes cumplir) y en qué te diferencias de los competidores al inicio — con tus palabras y hechos reales.",
      ],
      lists: [
        {
          intro: "Bloques mínimos del brief:",
          items: [
            "objetivo y CTA",
            "persona del lector",
            "esquema / H2s",
            "hechos y cifras imprescindibles",
            "checklist de objeciones",
            "stop-words y tácticas prohibidas",
            "longitud, tono, deadline, límite de revisiones",
          ],
        },
      ],
      notes: [
        {
          title: "Ejemplo de lógica",
          kind: "tip",
          text: "Escuela de idiomas: el objetivo es reservar un test de nivel; la audiencia son personas que ya estudiaron; el esquema va problema → beneficio de saber el idioma → por qué conocer tu nivel → CTA; prohíbe aperturas tipo «todo el mundo sabe…».",
        },
      ],
    },
    {
      title: "Copy de homepage y SEO",
      level: 2,
      paras: [
        "Homepage: entrega tú mismo tesis de ventaja, servicios, hechos, reseñas, FAQ del cliente y notas de competidores — no esperes que el escritor invente la marca desde una búsqueda en Google. Ver también el artículo de copy de homepage.",
        "SEO: adjunta el cluster, la intención de la página y guía de placement sin stuffing. Una consultoría SEO antes del brief ahorra rewrites.",
      ],
      links: [
        {
          label: "Copy de homepage",
          href: "/es/blog/tekst-glavnoy-stranitsy/",
        },
        {
          label: "SEO copywriting",
          href: "/blog/seo-kopirayting/",
        },
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Requisitos básicos de aceptación",
      level: 2,
      paras: [
        "Estructura: subtítulos, listas, párrafos legibles. Tono: voz de la empresa o impersonal; mantén la forma de «tú/usted» coherente en todo el texto.",
        "Comprueba unicidad con la herramienta nombrada en el brief, pero no persigas el 100% a costa del sentido. Adjunta referencias de estilo de antemano.",
      ],
      links: [
        {
          label: "Comprobaciones de unicidad",
          href: "/es/blog/proverka-unikalnosti/",
        },
        {
          label: "Tipos de copywriting",
          href: "/es/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Brief = objetivo + audiencia + hechos + stop-list + aceptación.",
        "Para homepage y páginas SEO el brief es más grueso que «solo un artículo».",
        "Un porcentaje anti-plagio es una guía, no el único objetivo.",
      ],
    },
  ],
  closing: [
    "Antes del próximo pedido, rellena una plantilla de brief contra una página exitosa del pasado — luego reutilízala como checklist para el copy futuro.",
  ],
  related: [
    "kopirayting",
    "kak-napisat-statyu",
    "tekst-glavnoy-stranitsy",
    "proverka-unikalnosti",
    "semanticheskoe-yadro",
    "kontent-plan",
  ],
};
