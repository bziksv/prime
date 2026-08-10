import type { BlogPost } from "../../../data/blog";

/** EN overlay for chastotnost-zaprosov — same structure as RU JSON. */
export const chastotnostZaprosovEn: BlogPost = {
  slug: "chastotnost-zaprosov",
  title: "Search query frequency: types and how to measure it",
  date: "2022-01-21",
  category: "SEO",
  cover: "/images/blog/chastotnost-zaprosov/cover-en.webp",
  excerpt:
    "High-, mid-, and low-frequency queries; base vs exact frequency in Yandex Wordstat; demand checks in Google — how to read the numbers without fooling yourself.",
  lead: [
    "Query frequency is how often people type a phrasing into search over a given period. Skip it, and a keyword set balloons with flashy head terms that don’t convert — or you miss the long-tail phrases that actually bring traffic.",
    "Below: frequency types, how to pull figures in Yandex Wordstat and Google, and which operators give numbers you can trust.",
  ],
  faq: [
    {
      q: "What is query frequency?",
      a: "An estimate of how many times a phrasing (and its variants — depending on the operator) was searched in a chosen period, most often a month.",
    },
    {
      q: "How do high-frequency terms differ from long-tail?",
      a: "Head terms are shorter and more competitive, with broader demand; long-tail is longer and more specific — usually easier for targeted traffic early on.",
    },
    {
      q: "Why does a “raw” Wordstat number mislead?",
      a: "A basic entry without operators sums many tails and word forms. For a keyword set, use exact and refined frequency.",
    },
    {
      q: "Is Google Keyword Planner enough instead of Wordstat?",
      a: "For Russia-focused work, Wordstat is usually the main Yandex demand source; Planner and Trends give a second look at Google and seasonality — not a full replacement.",
    },
    {
      q: "How does frequency tie into a keyword set?",
      a: "Frequency helps prioritize clusters, but it doesn’t replace intent and landings. Building the set is covered in a separate piece.",
    },
  ],
  sections: [
    {
      title: "Frequency types",
      level: 2,
      paras: [
        "How popular a phrasing is depends on the niche: some queries get a handful of searches a month, others tens of thousands. The more often a word or group is typed, the higher the frequency.",
        "In practice queries are split into high-, mid-, and low-frequency. Thresholds are relative and niche-dependent; competition and intent matter more than a magic cutoff.",
      ],
      notes: [
        {
          title: "Link to the keyword set",
          kind: "tip",
          text: "Frequency is one filter when building a semantic keyword set — not the goal itself. How to collect and cluster is covered in the semantic keyword set article.",
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "High-frequency queries (HF)",
      level: 3,
      paras: [
        "Short broad phrasings: a brand in a general sense, a product category, a subject “as a whole.” Often one or two words; demand from thousands to tens of thousands of searches a month (order depends on niche and region).",
        "On a new site, HF rarely delivers fast results: competition is high, and strong domains own the SERP. Cover them with landings and link or behavioral work later — don’t center month one on head terms alone. Rankings across the set usually build over a planned 2–6 months after work starts.",
      ],
      lists: [
        {
          intro: "Typical HF signs:",
          items: [
            "short phrasing with little detail",
            "broad intent (many needs in one phrase)",
            "high SERP competition",
          ],
        },
      ],
    },
    {
      title: "Mid-frequency queries (MF)",
      level: 3,
      paras: [
        "Several words, more specific: service plus a qualifier, product plus an attribute. Often thousands of searches a month. They map well onto section structure and help at different stages of promotion.",
      ],
    },
    {
      title: "Low-frequency queries (LF)",
      level: 3,
      paras: [
        "Three or more words, narrow intent: model, city, “price,” “with delivery.” Example: “Samsung smartphone price in Voronezh.”",
        "Demand is lower, but the chance of a relevant SERP and targeted traffic is higher. LF suits both new and mature projects — especially with solid landings.",
      ],
    },
    {
      title: "Overall stats in Yandex Wordstat",
      level: 2,
      paras: [
        "Wordstat is the basic free tool for Yandex demand: phrase ideas, region, devices, and dynamics.",
        "After sign-in, open word selection, enter a marker phrase, and check the left column (variants and tails) plus frequencies. Default is all regions; for local business, narrow geo first.",
        "A number without operators is not “exact searches for this phrase,” but a broad-match estimate. For a keyword set you almost always need operators.",
      ],
    },
    {
      title: "Frequency modes in Wordstat",
      level: 2,
      paras: [
        "These are the working modes teams use when cleaning and prioritizing a keyword set.",
      ],
    },
    {
      title: "Base frequency",
      level: 3,
      paras: [
        "A phrase with no quotes or special characters. Wordstat returns broad stats across tails and matches. Good for gauging interest in a field (“smartphones” as a category); risky as a traffic budget for one landing.",
      ],
    },
    {
      title: "Exact frequency",
      level: 3,
      paras: [
        "A phrase in quotation marks: “plastic windows.” Same words in different order and word forms count. Closer to reality than base, and often used as the working estimate for a cluster.",
      ],
    },
    {
      title: "Refined frequency",
      level: 3,
      paras: [
        "Locking word forms with the “!” operator (and quote combinations) — check current Wordstat Help: UI and operator nuances change. The point is the narrowest estimate of a specific spelling without extra tails.",
        "By trying variants (“buy windows” / “windows buy” / with a city) you pick the phrasing people actually type — not the one that reads nicely in a brief.",
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Building briefs and forecasts only on base frequency. Then the set fills with inflated numbers, and landings don’t deliver the expected traffic.",
        },
      ],
      tables: [
        {
          caption: "How to read the modes (schematic)",
          headers: ["Mode", "What it roughly shows", "When to use"],
          rows: [
            ["Base", "Whole field + tails", "Field sizing, brainstorm"],
            ['Exact "…"', "Phrase words, forms/order", "Working estimate for a cluster"],
            ["Refined (!)", "Narrow spelling", "Checking Title/H1 phrasings"],
          ],
        },
      ],
    },
    {
      title: "Measuring frequency in Google",
      level: 2,
      paras: [
        "Google Keyword Planner (inside a Google Ads account) gives keyword ideas, frequency ranges, and forecasts — with the caveat that figures are often coarse and ad-oriented.",
        "Google Trends is useful for dynamics and comparing phrasings by region, but those are relative indexes, not absolute search volumes.",
        "For Russia-focused projects, a common split is: Wordstat → keyword set for Yandex; Planner/Trends → Google and seasonality checks.",
      ],
    },
    {
      title: "Other tools",
      level: 2,
      paras: [
        "Alongside Wordstat and Google, teams use combiners and cloud suites: Key Collector, Rush Analytics, Keys.so / Serpstat, and platform modules like Titlo. They speed collection and rollups, but Yandex ground truth is still checked against Wordstat.",
      ],
      lists: [
        {
          intro: "What’s often used together:",
          items: [
            "Key Collector — bulk collection and cleanup",
            "Rush Analytics and peers — clustering and harvest",
            "Titlo — semantics modules and list comparison",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set — collection and clusters",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
  ],
};

/** ES overlay for chastotnost-zaprosov — same structure as RU JSON / EN. */
export const chastotnostZaprosovEs: BlogPost = {
  slug: "chastotnost-zaprosov",
  title: "Frecuencia de consultas de búsqueda: tipos y cómo medirla",
  date: "2022-01-21",
  category: "SEO",
  cover: "/images/blog/chastotnost-zaprosov/cover-es.webp",
  excerpt:
    "Consultas de alta, media y baja frecuencia; frecuencia base vs exacta en Yandex Wordstat; checks de demanda en Google — cómo leer los números sin engañarte.",
  lead: [
    "La frecuencia de consulta es cuántas veces la gente escribe una redacción en búsqueda en un periodo dado. Si la saltas, el set de keywords se infla con head terms vistosos que no convierten — o te pierdes las frases long-tail que de verdad traen tráfico.",
    "Abajo: tipos de frecuencia, cómo sacar cifras en Yandex Wordstat y Google, y qué operadores dan números en los que puedes confiar.",
  ],
  faq: [
    {
      q: "¿Qué es la frecuencia de consulta?",
      a: "Una estimación de cuántas veces se buscó una redacción (y sus variantes — según el operador) en un periodo elegido, casi siempre un mes.",
    },
    {
      q: "¿En qué se diferencian los términos de alta frecuencia del long-tail?",
      a: "Los head terms son más cortos y competitivos, con demanda más amplia; el long-tail es más largo y específico — suele ser más fácil para tráfico dirigido al inicio.",
    },
    {
      q: "¿Por qué engaña un número «crudo» de Wordstat?",
      a: "Una entrada básica sin operadores suma muchas colas y formas de palabra. Para un set de keywords, usa frecuencia exacta y refinada.",
    },
    {
      q: "¿Basta Google Keyword Planner en vez de Wordstat?",
      a: "Para trabajo centrado en Rusia, Wordstat suele ser la fuente principal de demanda Yandex; Planner y Trends dan una segunda mirada a Google y estacionalidad — no un reemplazo completo.",
    },
    {
      q: "¿Cómo se ata la frecuencia a un set de keywords?",
      a: "La frecuencia ayuda a priorizar clusters, pero no sustituye intención y landings. Armar el set está en una pieza aparte.",
    },
  ],
  sections: [
    {
      title: "Tipos de frecuencia",
      level: 2,
      paras: [
        "Cuán popular es una redacción depende del nicho: algunas consultas tienen un puñado de búsquedas al mes, otras decenas de miles. Cuanto más a menudo se escribe una palabra o grupo, más alta la frecuencia.",
        "En la práctica las consultas se parten en alta, media y baja frecuencia. Los umbrales son relativos y dependen del nicho; importan más la competencia y la intención que un corte mágico.",
      ],
      notes: [
        {
          title: "Vínculo con el set de keywords",
          kind: "tip",
          text: "La frecuencia es un filtro al armar un set semántico — no el goal en sí. Cómo recolectar y clusterizar está en el artículo del set semántico.",
        },
      ],
      links: [
        {
          label: "Set semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Consultas de alta frecuencia (HF)",
      level: 3,
      paras: [
        "Redacciones cortas y amplias: una marca en sentido general, una categoría de producto, un tema «en conjunto». A menudo una o dos palabras; demanda de miles a decenas de miles de búsquedas al mes (el orden depende del nicho y la región).",
        "En un sitio nuevo, HF rara vez da resultados rápidos: la competencia es alta y dominios fuertes poseen el SERP. Cúbrelas con landings y trabajo de enlaces o comportamiento más tarde — no centres el mes uno solo en head terms. El ranking del set suele construirse en un horizonte planificado de 2–6 meses tras empezar el trabajo.",
      ],
      lists: [
        {
          intro: "Señales típicas de HF:",
          items: [
            "redacción corta con poco detalle",
            "intención amplia (muchas necesidades en una frase)",
            "alta competencia en el SERP",
          ],
        },
      ],
    },
    {
      title: "Consultas de media frecuencia (MF)",
      level: 3,
      paras: [
        "Varias palabras, más específicas: servicio más un calificador, producto más un atributo. A menudo miles de búsquedas al mes. Encajan bien en la estructura de secciones y ayudan en distintas etapas de la promoción.",
      ],
    },
    {
      title: "Consultas de baja frecuencia (LF)",
      level: 3,
      paras: [
        "Tres o más palabras, intención estrecha: modelo, ciudad, «precio», «con entrega». Ejemplo: «precio smartphone Samsung en Vorónezh».",
        "La demanda es menor, pero la chance de un SERP relevante y tráfico dirigido es mayor. LF encaja en proyectos nuevos y maduros — sobre todo con landings sólidas.",
      ],
    },
    {
      title: "Stats generales en Yandex Wordstat",
      level: 2,
      paras: [
        "Wordstat es la tool gratuita básica para demanda Yandex: ideas de frase, región, dispositivos y dinámica.",
        "Tras iniciar sesión, abre selección de palabras, introduce una frase marcador y revisa la columna izquierda (variantes y colas) más frecuencias. Por defecto son todas las regiones; para negocio local, estrecha el geo primero.",
        "Un número sin operadores no es «búsquedas exactas de esta frase», sino una estimación broad-match. Para un set de keywords casi siempre necesitas operadores.",
      ],
    },
    {
      title: "Modos de frecuencia en Wordstat",
      level: 2,
      paras: [
        "Estos son los modos de trabajo que usan los equipos al limpiar y priorizar un set de keywords.",
      ],
    },
    {
      title: "Frecuencia base",
      level: 3,
      paras: [
        "Una frase sin comillas ni caracteres especiales. Wordstat devuelve stats amplias de colas y matches. Bien para medir interés en un campo («smartphones» como categoría); arriesgado como presupuesto de tráfico para una sola landing.",
      ],
    },
    {
      title: "Frecuencia exacta",
      level: 3,
      paras: [
        "Una frase entre comillas: «ventanas de plástico». Cuentan las mismas palabras en distinto orden y formas. Más cerca de la realidad que la base, y a menudo se usa como estimación de trabajo para un cluster.",
      ],
    },
    {
      title: "Frecuencia refinada",
      level: 3,
      paras: [
        "Fijar formas de palabra con el operador «!» (y combinaciones de comillas) — revisa la Ayuda actual de Wordstat: la UI y los matices de operadores cambian. El punto es la estimación más estrecha de una ortografía concreta sin colas extra.",
        "Probando variantes («comprar ventanas» / «ventanas comprar» / con ciudad) eliges la redacción que la gente de verdad escribe — no la que suena bien en un brief.",
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "tip",
          text: "Armar briefs y forecasts solo con frecuencia base. Entonces el set se llena de números inflados y las landings no entregan el tráfico esperado.",
        },
      ],
      tables: [
        {
          caption: "Cómo leer los modos (esquema)",
          headers: ["Modo", "Qué muestra a grosso modo", "Cuándo usarlo"],
          rows: [
            ["Base", "Todo el campo + colas", "Dimensionar el campo, brainstorm"],
            ['Exacta "…"', "Palabras de la frase, formas/orden", "Estimación de trabajo para un cluster"],
            ["Refinada (!)", "Ortografía estrecha", "Chequear redacciones de Title/H1"],
          ],
        },
      ],
    },
    {
      title: "Medir frecuencia en Google",
      level: 2,
      paras: [
        "Google Keyword Planner (dentro de una cuenta Google Ads) da ideas de keywords, rangos de frecuencia y forecasts — con la salvedad de que las cifras suelen ser gruesas y orientadas a ads.",
        "Google Trends sirve para dinámica y comparar redacciones por región, pero son índices relativos, no volúmenes absolutos de búsqueda.",
        "En proyectos centrados en Rusia, un corte habitual es: Wordstat → set de keywords para Yandex; Planner/Trends → checks de Google y estacionalidad.",
      ],
    },
    {
      title: "Otras tools",
      level: 2,
      paras: [
        "Junto a Wordstat y Google, los equipos usan combinadores y suites en la nube: Key Collector, Rush Analytics, Keys.so / Serpstat y módulos de plataforma como Titlo. Aceleran recolección y rollups, pero la verdad de suelo Yandex se sigue chequeando contra Wordstat.",
      ],
      lists: [
        {
          intro: "Qué se usa a menudo junto:",
          items: [
            "Key Collector — recolección y limpieza en lote",
            "Rush Analytics y pares — clustering y harvest",
            "Titlo — módulos de semántica y comparación de listas",
          ],
        },
      ],
      links: [
        {
          label: "Set semántico — recolección y clusters",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
  ],
};
