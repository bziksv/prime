import type { BlogPost } from "../../../data/blog";

/** EN overlay for turgenev — same structure as RU JSON. */
export const turgenevEn: BlogPost = {
  slug: "turgenev",
  title: "Turgenev: checking copy for over-optimization risk",
  date: "2018-04-27",
  category: "SEO",
  cover: "/images/blog/turgenev/cover-en.webp",
  excerpt:
    "What Ashmanov & Partners’ Turgenev checks: text-spam risk, nausea, water, and style — how to read scores, and why it is not a “Baden-Baden button” or a ranking guarantee.",
  lead: [
    "Turgenev is an online text checker built around risks similar to text spam — including the risk cluster people linked to Yandex’s Baden-Baden algorithm. It scores overstuffing, water, style, and a total risk score.",
    "Below: who it helps, how the scoring logic works, and how to edit from the report. Score scales and UI have changed since 2018 — focus on the meaning of the recommendations and current service Help. A high score is not an automatic filter; a zero score is not relevance or page-one visibility.",
  ],
  faq: [
    {
      q: "Is Turgenev the same as Baden-Baden?",
      a: "No. It is a third-party risk estimate. Yandex’s decision is broader: meaning, behavior, site quality. The service is an editor’s helper.",
    },
    {
      q: "Do all texts need zero risk?",
      a: "No. Catalogs and specs naturally repeat terms. Chase readability and usefulness, not “0 at any cost.”",
    },
    {
      q: "How is it different from Advego / text.ru?",
      a: "Different formulas and focus. Turgenev leans on over-optimization risk and style; Advego — nausea; text.ru — uniqueness / spamminess.",
    },
    {
      q: "If you fixed the score, will rankings grow?",
      a: "Not guaranteed. Clearing clear overstuffing helps UX and lowers risk. Core visibility takes planned months of work — not one check.",
    },
    {
      q: "Can you trust Turgenev alone?",
      a: "Better as a bundle: page meaning + another density / uniqueness tool + an editor’s common sense.",
    },
  ],
  sections: [
    {
      title: "Why use Turgenev",
      level: 2,
      paras: [
        "After waves of text filters, teams needed a fast checklist: does the copy sound like a keyword dump, is there water and bureaucratese, is “spamminess” risk inflated.",
        "The tool helps SEO, authors, and clients as a shared brief language: “lower risk / cut water,” not endless “I feel there aren’t enough keywords.”",
      ],
      lists: [
        {
          intro: "Who usually reads the report:",
          items: [
            "editors — accepting copy",
            "SEO — auditing old landings",
            "authors — self-check before delivery",
            "site owners — when informational pages drop",
          ],
        },
      ],
      links: [
        {
          label: "Text nausea",
          href: "/en/blog/toshnota-teksta/",
        },
        {
          label: "Uniqueness checks",
          href: "/en/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "How scoring works (as far as known)",
      level: 2,
      paras: [
        "At the core — heuristics for text traits associated with over-optimization sanctions, plus comparison to “human” samples. The service looks not only at keyword frequency, but style, water, and unnatural phrasing.",
        "The result is a sum of penalty points by blocks. Historical ranges (low / medium / high / critical) guided edits; check exact thresholds in the current UI — they may have shifted.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Don’t confuse with a search verdict",
          text: "A site with a “high” score is sometimes visible in the results, and “green” copy without meaning is not. The score is an edit signal, not an auto filter diagnosis.",
        },
      ],
    },
    {
      title: "How to check text",
      level: 2,
      paras: [
        "Open the current service site (historically turgenev.ashmanov.com), sign up if needed, paste text or a URL per the service rules, and run analysis.",
        "Do not watch only the total: expand notes on water, stop words, keywords, and style. Edit surgically — cutting every term repeat on a product card often hurts.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "check the draft before publish",
            "fix critical notes",
            "reread aloud / on mobile",
            "verify uniqueness with a separate tool",
            "do not chase zero at the topic’s expense",
          ],
        },
      ],
    },
    {
      title: "What to do at high risk",
      level: 2,
      paras: [
        "Remove unnatural keyword chains, dilute water with facts and examples, rewrite bureaucratese. Break a wall of text with subheads. On commercial pages keep needed terms — cut pushy “buy buy buy.”",
        "If a URL group dropped after an update — first confirm tech and indexing, then mass-run texts through the service. One rewritten homepage does not heal the whole site.",
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Service limits",
      level: 2,
      paras: [
        "Not all page types score the same: lists, menus, SKU specs naturally repeat words. Blind “lower risk” can kill relevance.",
        "The service does not replace niche experts and does not see the whole site (links, speed, commercial factors). Use it as an editorial layer with analytics and Webmaster.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Turgenev helps catch overstuffing and heavy style before publish. Scores are a brief compass, not a ranking law.",
        "Edit for people and topic clarity; zero risk at any cost and “it will lift Baden-Baden” promises are bad goals.",
      ],
    },
  ],
  closing: [
    "Run disputed SEO texts through Turgenev, close clear water and keyword notes, and reread with human eyes — that is how the service works as an editorial filter, not a replacement for a promotion strategy.",
  ],
  related: [
    "toshnota-teksta",
    "proverka-unikalnosti",
    "filtry-poiskovikov",
    "kopirayting",
    "dlina-seo-teksta",
    "zaspamlennost-teksta",
  ],
};

/** ES overlay for turgenev — same structure as RU JSON / EN. */
export const turgenevEs: BlogPost = {
  slug: "turgenev",
  title: "Turgenev: comprobar el copy por riesgo de sobreoptimización",
  date: "2018-04-27",
  category: "SEO",
  cover: "/images/blog/turgenev/cover-es.webp",
  excerpt:
    "Qué revisa el Turgenev de Ashmanov & Partners: riesgo de text-spam, náusea, agua y estilo — cómo leer las puntuaciones, y por qué no es un «botón Baden-Baden» ni una garantía de ranking.",
  lead: [
    "Turgenev es un checker online de texto pensado en torno a riesgos parecidos al text-spam — incluido el cluster de riesgo que la gente asociaba al algoritmo Baden-Baden de Yandex. Puntúa overstuffing, agua, estilo y una puntuación total de riesgo.",
    "Abajo: a quién ayuda, cómo funciona la lógica de scoring y cómo editar a partir del informe. Las escalas de puntuación y la UI han cambiado desde 2018 — céntrate en el sentido de las recomendaciones y en la Help actual del servicio. Una puntuación alta no es un filtro automático; un cero no es relevancia ni visibilidad en primera página.",
  ],
  faq: [
    {
      q: "¿Turgenev es lo mismo que Baden-Baden?",
      a: "No. Es una estimación de riesgo de terceros. La decisión de Yandex es más amplia: sentido, comportamiento, calidad del sitio. El servicio es un ayudante del editor.",
    },
    {
      q: "¿Todos los textos necesitan riesgo cero?",
      a: "No. Catálogos y fichas repiten términos de forma natural. Persigue legibilidad y utilidad, no «0 a cualquier precio».",
    },
    {
      q: "¿En qué se diferencia de Advego / text.ru?",
      a: "Fórmulas y foco distintos. Turgenev se inclina al riesgo de sobreoptimización y al estilo; Advego — náusea; text.ru — unicidad / spamminess.",
    },
    {
      q: "Si arreglaste la puntuación, ¿subirán los rankings?",
      a: "No está garantizado. Limpiar overstuffing claro ayuda a la UX y baja el riesgo. La visibilidad del núcleo lleva meses de trabajo planificados — no un solo chequeo.",
    },
    {
      q: "¿Se puede confiar solo en Turgenev?",
      a: "Mejor en paquete: sentido de la página + otra herramienta de densidad / unicidad + sentido común del editor.",
    },
  ],
  sections: [
    {
      title: "Por qué usar Turgenev",
      level: 2,
      paras: [
        "Tras olas de filtros de texto, los equipos necesitaban un checklist rápido: ¿el copy suena a volcado de keywords, hay agua y burocratés, está inflado el riesgo de «spamminess»?",
        "La herramienta ayuda a SEO, autores y clientes como lenguaje compartido de brief: «baja el riesgo / corta agua», no un eterno «siento que faltan keywords».",
      ],
      lists: [
        {
          intro: "Quién suele leer el informe:",
          items: [
            "editores — al aceptar copy",
            "SEO — auditando landings viejas",
            "autores — autocontrol antes de entregar",
            "dueños de sitio — cuando caen páginas informativas",
          ],
        },
      ],
      links: [
        {
          label: "Náusea del texto",
          href: "/es/blog/toshnota-teksta/",
        },
        {
          label: "Chequeos de unicidad",
          href: "/es/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "Cómo funciona el scoring (hasta donde se sabe)",
      level: 2,
      paras: [
        "En el núcleo — heurísticas sobre rasgos de texto asociados a sanciones por sobreoptimización, más comparación con muestras «humanas». El servicio no mira solo la frecuencia de keywords, sino estilo, agua y wording antinatural.",
        "El resultado es una suma de puntos de penalización por bloques. Rangos históricos (bajo / medio / alto / crítico) guiaban las ediciones; comprueba umbrales exactos en la UI actual — pueden haber cambiado.",
      ],
      notes: [
        {
          kind: "tip",
          title: "No lo confundas con un veredicto de búsqueda",
          text: "Un sitio con puntuación «alta» a veces se ve en los resultados, y un copy «verde» sin sentido no. La puntuación es una señal de edición, no un diagnóstico de filtro automático.",
        },
      ],
    },
    {
      title: "Cómo comprobar el texto",
      level: 2,
      paras: [
        "Abre el sitio actual del servicio (históricamente turgenev.ashmanov.com), regístrate si hace falta, pega el texto o una URL según las reglas del servicio y lanza el análisis.",
        "No mires solo el total: abre las notas sobre agua, stop words, keywords y estilo. Edita con cirugía — cortar cada repetición de término en una ficha de producto a menudo perjudica.",
      ],
      lists: [
        {
          intro: "Orden práctico:",
          items: [
            "revisar el borrador antes de publicar",
            "arreglar notas críticas",
            "releer en voz alta / en móvil",
            "verificar unicidad con otra herramienta",
            "no perseguir el cero a costa del tema",
          ],
        },
      ],
    },
    {
      title: "Qué hacer con riesgo alto",
      level: 2,
      paras: [
        "Quita cadenas antinaturales de keywords, diluye el agua con hechos y ejemplos, reescribe el burocratés. Rompe un muro de texto con subtítulos. En páginas comerciales mantén los términos necesarios — corta el «compra compra compra» insistente.",
        "Si un grupo de URLs cayó tras una update — primero confirma técnica e indexación, luego pasa textos en masa por el servicio. Una homepage reescrita no cura todo el sitio.",
      ],
      links: [
        {
          label: "Filtros de buscadores",
          href: "/es/blog/filtry-poiskovikov/",
        },
        {
          label: "Copywriting",
          href: "/es/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Límites del servicio",
      level: 2,
      paras: [
        "No todos los tipos de página puntúan igual: listas, menús, specs de SKU repiten palabras de forma natural. Un «baja el riesgo» a ciegas puede matar la relevancia.",
        "El servicio no sustituye a expertos de nicho ni ve el sitio entero (enlaces, velocidad, factores comerciales). Úsalo como capa editorial junto a analítica y Webmaster.",
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Turgenev ayuda a pillar overstuffing y estilo pesado antes de publicar. Las puntuaciones son una brújula de brief, no una ley de ranking.",
        "Edita para personas y claridad del tema; riesgo cero a cualquier precio y promesas de «levantará Baden-Baden» son malos objetivos.",
      ],
    },
  ],
  closing: [
    "Pasa por Turgenev los textos SEO disputados, cierra notas claras de agua y keywords, y relee con ojos humanos — así el servicio funciona como filtro editorial, no como sustituto de una estrategia de promoción.",
  ],
  related: [
    "toshnota-teksta",
    "proverka-unikalnosti",
    "filtry-poiskovikov",
    "kopirayting",
    "dlina-seo-teksta",
    "zaspamlennost-teksta",
  ],
};
