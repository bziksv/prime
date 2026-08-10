import type { BlogPost } from "../../../data/blog";

/** EN overlay for algoritm-korolyov — same structure as RU JSON. */
export const algoritmKorolyovEn: BlogPost = {
  slug: "algoritm-korolyov",
  title: "Yandex Korolyov algorithm: what it was and what still matters",
  date: "2017-08-30",
  category: "SEO",
  cover: "/images/blog/algoritm-korolyov/cover-en.webp",
  excerpt:
    "What the 2017 Korolyov algorithm announced after Palekh, why Yandex pushed neural nets in search, and the lasting SEO takeaway: page meaning and usefulness beat keyword stuffing.",
  lead: [
    "In August 2017 Yandex presented the Korolyov algorithm as a continuation of the Palekh line: lean harder on query and text meaning, not only exact wording matches. The launch came with neural-net hype — for SEO the lasting priority shift matters more.",
    "Below: what they promised then, how to read it today, and what specialists should focus on. Update names change; the logic “answer intent with useful content” does not.",
  ],
  faq: [
    {
      q: "What is Korolyov?",
      a: "Yandex’s 2017 announcement of stronger meaning match between query and page via neural approaches — a continuation of Palekh ideas.",
    },
    {
      q: "Are Palekh and Korolyov the same?",
      a: "No. Palekh earlier worked more on titles/essence in a narrower scope; Korolyov was positioned as scaling meaning matching.",
    },
    {
      q: "Does this cancel keywords?",
      a: "No. Keywords and clusters are still needed to understand demand. But sheets of exact matches and density for density’s sake stopped being the main bet even then.",
    },
    {
      q: "Should I optimize “for Korolyov” now?",
      a: "Not for a 2017 update brand. Optimize for current practice: intent, structure, useful copy, tech, commercial signals — see related guides.",
    },
    {
      q: "What about assessors and Toloka?",
      a: "The announcement stressed crowd evaluation of SERPs. For a site that’s indirect: answer quality for the user beats guessing the formula.",
    },
    {
      q: "Does this relate to LSI copywriting?",
      a: "In practice — covering the topic with related concepts and questions, not density of one keyword. See SEO copywriting.",
    },
    {
      q: "When should I expect rankings after “semantic” copy?",
      a: "Prep takes weeks. Share of the core is typically planned for two to six months. One update doesn’t put a site on page one overnight.",
    },
    {
      q: "Where can I see Yandex vs Google differences?",
      a: "In the Yandex and Google SEO post: shared base, different accents.",
    },
  ],
  sections: [
    {
      title: "What was announced in 2017",
      level: 2,
      paras: [
        "Yandex positioned Korolyov as a step toward understanding meaning: match the query not only to an exact keyword in the title, but to document content. The name nods to S. P. Korolyov; the presentation came with loud production.",
        "For the industry the signal was clearer than the hype: semantic fit and answer usefulness keep rising; the cult of exact matches and formal spamminess metrics as the only criterion keeps weakening.",
      ],
      lists: [
        {
          intro: "Line context:",
          items: [
            "Palekh — meaning/titles in a narrower scope",
            "Korolyov — claimed scaling of neural matching",
            "in parallel — pressure on over-optimized texts (including filter lines)",
          ],
        },
      ],
      links: [
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "What people expected from the update",
      level: 2,
      paras: [
        "Better find pages where meaning matches the query even if wording differs. Rank “keywords stuffed, little value” weaker.",
        "Yandex messaging mentioned neural nets, a larger training set, and user SERP evaluation (Toloka) alongside assessors. Internal weight details aren’t public — and you shouldn’t build SEO on press rumors about “200 thousand pages.”",
      ],
      notes: [
        {
          title: "Historical context",
          kind: "tip",
          text: "2017 figures and slides are an archive. Work today from webmaster docs, page quality, and analytics — not that summer’s presentation PDF.",
        },
      ],
    },
    {
      title: "What it meant for SEO practice",
      level: 2,
      paras: [
        "Briefs like “4% density, nausea in a corridor, keyword in every paragraph” lost sense as the only strategy. Intent, answer completeness, structure, commercial factors, and tech moved up.",
        "Semantics is still collected and clustered — but the page is written for the human job, not an occurrence counter.",
      ],
      lists: [
        {
          intro: "Practical shift:",
          items: [
            "cluster + intent before copy",
            "useful blocks and FAQ instead of filler",
            "less exact-match spam",
            "SERP check: which document type wins",
          ],
        },
      ],
      links: [
        {
          label: "User intent",
          href: "/en/blog/user-intent/",
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
      title: "How to treat updates today",
      level: 2,
      paras: [
        "Don’t chase every algorithm name. Watch symptoms in Webmaster and analytics: cluster drops, SERP-type shifts, bounce growth on thin URLs.",
        "Systemic work — structure, intent-led content, speed, mobile, commercial signals, a careful backlink profile — outlives marketing names of updates.",
      ],
      lists: [
        {
          intro: "Checklist after any noisy update:",
          items: [
            "ranks and organic by cluster",
            "top-URL intent vs SERP",
            "cleanup of spam and thin pages",
            "tech and mobile UX without regressions",
          ],
        },
      ],
      links: [
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Reacting to an update and reworking pages takes weeks. Core recovery/growth again lives in months (often two to six), not page one by Monday. Prep is not rankings.",
        },
      ],
    },
  ],
  related: [
    "seo-yandex-google",
    "user-intent",
    "seo-kopirayting",
    "semanticheskoe-yadro",
    "filtry-poiskovikov",
    "effektivnost-seo",
  ],
};

/** ES overlay for algoritm-korolyov — same structure as RU JSON / EN. */
export const algoritmKorolyovEs: BlogPost = {
  slug: "algoritm-korolyov",
  title: "Algoritmo Korolyov de Yandex: qué fue y qué sigue importando",
  date: "2017-08-30",
  category: "SEO",
  cover: "/images/blog/algoritm-korolyov/cover-es.webp",
  excerpt:
    "Qué anunció el algoritmo Korolyov de 2017 tras Palekh, por qué Yandex empujó redes neuronales en la búsqueda, y el takeaway SEO que dura: el sentido y la utilidad de la página ganan al stuffing de keywords.",
  lead: [
    "En agosto de 2017 Yandex presentó el algoritmo Korolyov como continuación de la línea Palekh: apoyarse más en el sentido de la consulta y del texto, no solo en coincidencias exactas de wording. El lanzamiento vino con hype de redes neuronales — para SEO importa más el cambio de prioridad que dura.",
    "Abajo: qué prometieron entonces, cómo leerlo hoy y en qué deben enfocarse los especialistas. Los nombres de updates cambian; la lógica «responde a la intención con contenido útil» no.",
  ],
  faq: [
    {
      q: "¿Qué es Korolyov?",
      a: "El anuncio de Yandex de 2017 de un match de sentido más fuerte entre consulta y página vía enfoques neuronales — una continuación de las ideas de Palekh.",
    },
    {
      q: "¿Palekh y Korolyov son lo mismo?",
      a: "No. Palekh antes trabajaba más sobre títulos/esencia en un alcance más estrecho; Korolyov se posicionó como escalar el matching de sentido.",
    },
    {
      q: "¿Esto cancela las keywords?",
      a: "No. Las keywords y los clusters siguen haciendo falta para entender la demanda. Pero las hojas de exact matches y la densidad por la densidad dejaron de ser la apuesta principal ya entonces.",
    },
    {
      q: "¿Debo optimizar «para Korolyov» ahora?",
      a: "No por la marca de una update de 2017. Optimiza para la práctica actual: intención, estructura, copy útil, técnica, señales comerciales — mira las guías relacionadas.",
    },
    {
      q: "¿Y los assessors y Toloka?",
      a: "El anuncio subrayó la evaluación crowd de las SERPs. Para un sitio eso es indirecto: la calidad de la respuesta al usuario gana a adivinar la fórmula.",
    },
    {
      q: "¿Esto se relaciona con el copywriting LSI?",
      a: "En la práctica — cubrir el tema con conceptos y preguntas relacionadas, no densidad de una sola keyword. Mira SEO copywriting.",
    },
    {
      q: "¿Cuándo esperar rankings tras un copy «semántico»?",
      a: "La preparación lleva semanas. La cuota del núcleo se planifica típicamente a dos a seis meses. Una update no pone un sitio en primera página de la noche a la mañana.",
    },
    {
      q: "¿Dónde ver diferencias Yandex vs Google?",
      a: "En el post de SEO para Yandex y Google: base compartida, acentos distintos.",
    },
  ],
  sections: [
    {
      title: "Qué se anunció en 2017",
      level: 2,
      paras: [
        "Yandex posicionó Korolyov como un paso hacia entender el sentido: casar la consulta no solo con una keyword exacta en el título, sino con el contenido del documento. El nombre hace guiño a S. P. Korolyov; la presentación vino con producción ruidosa.",
        "Para la industria la señal fue más clara que el hype: el encaje semántico y la utilidad de la respuesta siguen subiendo; el culto a los exact matches y a métricas formales de spamminess como único criterio sigue debilitándose.",
      ],
      lists: [
        {
          intro: "Contexto de la línea:",
          items: [
            "Palekh — sentido/títulos en un alcance más estrecho",
            "Korolyov — scaling declarado del matching neuronal",
            "en paralelo — presión sobre textos sobre-optimizados (incluidas líneas de filtros)",
          ],
        },
      ],
      links: [
        {
          label: "SEO para Yandex y Google",
          href: "/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "Qué se esperaba de la update",
      level: 2,
      paras: [
        "Encontrar mejor páginas cuyo sentido casa con la consulta aunque el wording difiera. Rankear más débil «keywords metidas, poco valor».",
        "El messaging de Yandex mencionó redes neuronales, un set de entrenamiento mayor y evaluación de SERP por usuarios (Toloka) junto a assessors. Los detalles internos de pesos no son públicos — y no deberías armar SEO sobre rumores de prensa sobre «200 mil páginas».",
      ],
      notes: [
        {
          title: "Contexto histórico",
          kind: "tip",
          text: "Cifras y slides de 2017 son archivo. Trabaja hoy desde docs de webmaster, calidad de página y analítica — no el PDF de aquella presentación de verano.",
        },
      ],
    },
    {
      title: "Qué significó para la práctica SEO",
      level: 2,
      paras: [
        "Briefs del tipo «densidad 4%, náusea en un corredor, keyword en cada párrafo» perdieron sentido como única estrategia. Subieron intención, completitud de la respuesta, estructura, factores comerciales y técnica.",
        "La semántica se sigue recogiendo y agrupando en clusters — pero la página se escribe para el trabajo humano, no para un contador de ocurrencias.",
      ],
      lists: [
        {
          intro: "Cambio práctico:",
          items: [
            "cluster + intención antes del copy",
            "bloques útiles y FAQ en vez de relleno",
            "menos spam de exact-match",
            "check de SERP: qué tipo de documento gana",
          ],
        },
      ],
      links: [
        {
          label: "Intención del usuario",
          href: "/es/blog/user-intent/",
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
      title: "Cómo tratar las updates hoy",
      level: 2,
      paras: [
        "No persigas cada nombre de algoritmo. Mira síntomas en Webmaster y analítica: caídas por cluster, cambios de tipo de SERP, subida de rebotes en URLs finas.",
        "El trabajo sistémico — estructura, contenido guiado por intención, velocidad, móvil, señales comerciales, un perfil de backlinks cuidadoso — sobrevive a los nombres de marketing de las updates.",
      ],
      lists: [
        {
          intro: "Checklist tras cualquier update ruidosa:",
          items: [
            "ranks y orgánico por cluster",
            "intención de la URL principal vs SERP",
            "limpieza de spam y páginas finas",
            "técnica y UX móvil sin regresiones",
          ],
        },
      ],
      links: [
        {
          label: "Eficacia del SEO",
          href: "/es/blog/effektivnost-seo/",
        },
        {
          label: "Filtros de buscadores",
          href: "/es/blog/filtry-poiskovikov/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Reaccionar a una update y rehacer páginas lleva semanas. La recuperación/crecimiento del núcleo de nuevo vive en meses (a menudo dos a seis), no primera página para el lunes. Preparación no es rankings.",
        },
      ],
    },
  ],
  related: [
    "seo-yandex-google",
    "user-intent",
    "seo-kopirayting",
    "semanticheskoe-yadro",
    "filtry-poiskovikov",
    "effektivnost-seo",
  ],
};
