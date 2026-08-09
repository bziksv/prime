import type { BlogPost } from "../../../data/blog";

/** EN overlay for napolnenie-sayta — same structure as RU JSON. */
export const napolnenieSaytaEn: BlogPost = {
  slug: "napolnenie-sayta",
  title: "How to fill a site with content: unique material and publishing rules",
  date: "2020-10-19",
  category: "Content marketing",
  cover: "/images/blog/napolnenie-sayta/cover-en.webp",
  excerpt:
    "How to pick topics and formats, study competitors for ideas, build a content plan, write a brief, and publish on a steady rhythm — without auto-fill scrapers or copy-paste.",
  lead: [
    "An empty or thin site holds people poorly and barely builds useful URLs in search. Filling a site isn’t “write 50 articles in a week” — it’s a system: niche, audience, idea sources, plan, brief, and publishing rhythm.",
    "Below: a practical path from topic to go-live. The content plan as a table and scraper auto-fill are covered separately; here — how to give the site real meaning. The old WP slug with “open-graph” was a mislabel: this is about content, not OG tags.",
  ],
  faq: [
    {
      q: "Where should you start if the site is new?",
      a: "Lock niche and audience, a list of required pages (services, about, contacts), and 8–15 first blog or catalog topics. Then plan and briefs — not the other way around.",
    },
    {
      q: "Can you copy competitors’ texts?",
      a: "Not as a base. Studying structure and topics — yes; publishing theirs or “synonymizing” — risk and weak results. See uniqueness checks.",
    },
    {
      q: "How is this different from a content plan?",
      a: "A plan is the “what/when” calendar. This article is where meaning comes from, how to brief writers, and which publishing rules to keep.",
    },
    {
      q: "Will auto-generated content save you?",
      a: "For a commercial site usually no. Better fewer, but your own materials for query clusters.",
    },
    {
      q: "How often should you publish?",
      a: "A rhythm you can hold for 2–3 months. One strong piece a week beats daily thin spam.",
    },
    {
      q: "Do you need images and video?",
      a: "Yes if they add meaning: diagrams, product photos, short clips. Generic filler images with no context barely help.",
    },
    {
      q: "Who should write: in-house or a copywriter?",
      a: "Expertise inside plus edit/copy outside against a brief. Without a brief, “pretty text” often misses semantics and the offer.",
    },
    {
      q: "When is there enough content?",
      a: "When commercial clusters and support pages (FAQ, how-tos) are covered. Then — updates and new demand, not endless volume for its own sake.",
    },
  ],
  sections: [
    {
      title: "Niche, audience, and content type",
      level: 2,
      paras: [
        "First answer: does the site sell services, products, expertise, or media? A store needs cards, categories, buying guides; services — landings, cases, FAQ; a blog — query clusters and series.",
        "Build an audience picture: jobs, objections, language, geo. Without that, topics stay generic and convert poorly.",
      ],
      lists: [
        {
          intro: "Lock at the start:",
          items: [
            "offer and USP",
            "3–5 audience segments",
            "required pages",
            "formats (article, card, video, checklist)",
            "what we never publish (off-limits topics)",
          ],
        },
      ],
      links: [
        {
          label: "Keyword set (semantic core)",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Ideas: competitors and demand",
      level: 2,
      paras: [
        "Review 3–5 strong competitors: which sections exist, which articles are indexed, what’s in the menu and blog. Look beyond copy — headlines, media, CTAs, FAQ depth.",
        "Add demand: keyword tools and suggestions, client questions, support, reviews. Social and media trends are angle sources — not one-to-one copy of other people’s posts.",
      ],
      lists: [
        {
          intro: "What to extract from competitors:",
          items: [
            "topics with traffic or visibility",
            "gaps (they have it — you don’t)",
            "weak pages you can beat",
            "presentation formats that work in the niche",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Collecting 200 “everyone has this” topics with no tie to clusters and commercial goals. You get a draft graveyard.",
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Content plan and priorities",
      level: 2,
      paras: [
        "Queue topics: money first (services/categories), then decision support, then expert blog. Inside the blog — one strong URL per cluster, without cannibalization.",
        "Keep a simple plan: topic, draft URL, key/cluster, status, deadline, owner. Table details are in the content-plan article.",
      ],
      lists: [
        {
          intro: "30-day priority:",
          items: [
            "finish commercial landings",
            "5–10 demand-led articles",
            "internal links between them",
            "refresh About and contacts",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Brief and text quality",
      level: 2,
      paras: [
        "Quality starts with a brief: page goal, audience, required blocks, keywords without stuffing, expert facts/numbers, CTA, uniqueness and length requirements.",
        "Acceptance criteria: answers the query, scannable structure (H2/H3), no fluff, verifiable facts, uniqueness OK, media that fit.",
      ],
      lists: [
        {
          intro: "In the copywriter brief include:",
          items: [
            "draft title and H2 skeleton",
            "what must not be invented",
            "competitors as orientation — don’t copy",
            "where the CTA goes",
            "deadline and delivery format",
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
      title: "Media, UGC, and supporting the text",
      level: 2,
      paras: [
        "Text without visuals on commercial pages is often weaker: work photos, process diagrams, comparison tables, short video. User content (reviews, cases, Q&A) is a strong trust layer if you moderate and format it.",
        "Don’t replace meaning with generic filler and clickbait. Keep one style for blog covers and illustrations.",
      ],
      lists: [
        {
          intro: "Minimum for an article or landing:",
          items: [
            "1 main visual that matches meaning",
            "captions for complex blocks",
            "alt text on important images",
            "no heavy unoptimized files",
          ],
        },
      ],
    },
    {
      title: "Publishing rules and an example",
      level: 2,
      paras: [
        "Before go-live: title/description, clean URL, internal links, indexability, share preview, mobile check. After — monitor rankings and bounce, and schedule updates.",
        "Example logic for a niche store (flowers, etc.): categories and cards → “how to choose” guides → seasonal picks → delivery FAQ. Rhythm: cards in batches with assortment; expert pieces on a demand calendar.",
      ],
      lists: [
        {
          intro: "Release checklist:",
          items: [
            "meaning and facts approved",
            "uniqueness OK",
            "links to commercial pages",
            "no duplicate URL",
            "planned publish date met",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "Publishing without semantics and structure is content for content’s sake. Topic map first, then volume.",
        },
      ],
      links: [
        {
          label: "Site auto-fill",
          href: "/en/blog/avtonapolnenie-sayta/",
        },
        {
          label: "Content updates",
          href: "/en/blog/obnovlenie-kontenta/",
        },
      ],
    },
  ],
  related: [
    "kontent-plan",
    "semanticheskoe-yadro",
    "proverka-unikalnosti",
    "avtonapolnenie-sayta",
    "obnovlenie-kontenta",
  ],
};

/** ES overlay for napolnenie-sayta — same structure as RU JSON / EN. */
export const napolnenieSaytaEs: BlogPost = {
  slug: "napolnenie-sayta",
  title: "Cómo llenar un sitio de contenido: material único y reglas de publicación",
  date: "2020-10-19",
  category: "Content marketing",
  cover: "/images/blog/napolnenie-sayta/cover.webp",
  excerpt:
    "Cómo elegir temas y formatos, estudiar competidores para ideas, montar un plan de contenidos, escribir un brief y publicar con ritmo estable — sin scrapers de autorelleno ni copy-paste.",
  lead: [
    "Un sitio vacío o fino retiene mal a la gente y apenas construye URLs útiles en búsqueda. Llenar un sitio no es «escribir 50 artículos en una semana» — es un sistema: nicho, audiencia, fuentes de ideas, plan, brief y ritmo de publicación.",
    "Abajo: un camino práctico del tema al go-live. El plan de contenidos como tabla y el autorelleno con scrapers se cubren aparte; aquí — cómo darle sentido real al sitio. El viejo slug de WP con «open-graph» era una etiqueta errónea: esto va de contenido, no de etiquetas OG.",
  ],
  faq: [
    {
      q: "¿Por dónde empezar si el sitio es nuevo?",
      a: "Fija nicho y audiencia, una lista de páginas necesarias (servicios, nosotros, contactos) y 8–15 primeros temas de blog o catálogo. Luego plan y briefs — no al revés.",
    },
    {
      q: "¿Se pueden copiar textos de competidores?",
      a: "No como base. Estudiar estructura y temas — sí; publicar los suyos o «sinonimizarlos» — riesgo y resultados flojos. Ver comprobaciones de unicidad.",
    },
    {
      q: "¿En qué se diferencia de un plan de contenidos?",
      a: "Un plan es el calendario de «qué/cuándo». Este artículo es de dónde sale el sentido, cómo briefar a redactores y qué reglas de publicación mantener.",
    },
    {
      q: "¿El contenido auto-generado te salva?",
      a: "Para un sitio comercial normalmente no. Mejor menos, pero materiales propios para clusters de consultas.",
    },
    {
      q: "¿Con qué frecuencia publicar?",
      a: "Un ritmo que puedas sostener 2–3 meses. Una pieza fuerte a la semana gana a spam fino diario.",
    },
    {
      q: "¿Hacen falta imágenes y vídeo?",
      a: "Sí si aportan sentido: diagramas, fotos de producto, clips cortos. Imágenes de relleno genéricas sin contexto apenas ayudan.",
    },
    {
      q: "¿Quién debe escribir: in-house o un copywriter?",
      a: "Expertise dentro más edición/copy fuera contra un brief. Sin brief, el «texto bonito» a menudo falla en semántica y en la oferta.",
    },
    {
      q: "¿Cuándo hay contenido suficiente?",
      a: "Cuando están cubiertos los clusters comerciales y las páginas de apoyo (FAQ, how-tos). Luego — updates y nueva demanda, no volumen infinito por sí mismo.",
    },
  ],
  sections: [
    {
      title: "Nicho, audiencia y tipo de contenido",
      level: 2,
      paras: [
        "Primera respuesta: ¿el sitio vende servicios, productos, expertise o media? Una tienda necesita fichas, categorías, guías de compra; servicios — landings, casos, FAQ; un blog — clusters de consultas y series.",
        "Arma un retrato de audiencia: trabajos, objeciones, lenguaje, geo. Sin eso, los temas se quedan genéricos y convierten mal.",
      ],
      lists: [
        {
          intro: "Fija al inicio:",
          items: [
            "oferta y USP",
            "3–5 segmentos de audiencia",
            "páginas necesarias",
            "formatos (artículo, ficha, vídeo, checklist)",
            "qué nunca publicamos (temas vedados)",
          ],
        },
      ],
      links: [
        {
          label: "Set de keywords (núcleo semántico)",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Ideas: competidores y demanda",
      level: 2,
      paras: [
        "Revisa 3–5 competidores fuertes: qué secciones existen, qué artículos están indexados, qué hay en el menú y el blog. Mira más allá del copy — titulares, media, CTAs, profundidad del FAQ.",
        "Suma demanda: herramientas de keywords y sugerencias, preguntas de clientes, soporte, reseñas. Tendencias en redes y media son fuentes de ángulo — no copia uno a uno de posts ajenos.",
      ],
      lists: [
        {
          intro: "Qué extraer de competidores:",
          items: [
            "temas con tráfico o visibilidad",
            "huecos (ellos lo tienen — tú no)",
            "páginas flojas que puedes superar",
            "formatos de presentación que funcionan en el nicho",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Recoger 200 temas de «todo el mundo tiene esto» sin vínculo a clusters y objetivos comerciales. Acabas con un cementerio de borradores.",
        },
      ],
      links: [
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Plan de contenidos y prioridades",
      level: 2,
      paras: [
        "Encola temas: primero dinero (servicios/categorías), luego apoyo a la decisión, luego blog experto. Dentro del blog — una URL fuerte por cluster, sin canibalización.",
        "Mantén un plan simple: tema, URL borrador, keyword/cluster, estado, deadline, responsable. El detalle de tabla está en el artículo del plan de contenidos.",
      ],
      lists: [
        {
          intro: "Prioridad a 30 días:",
          items: [
            "terminar landings comerciales",
            "5–10 artículos guiados por demanda",
            "enlaces internos entre ellos",
            "actualizar Nosotros y contactos",
          ],
        },
      ],
      links: [
        {
          label: "Plan de contenidos",
          href: "/es/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Brief y calidad del texto",
      level: 2,
      paras: [
        "La calidad empieza con un brief: objetivo de la página, audiencia, bloques necesarios, keywords sin stuffing, hechos/números de experto, CTA, requisitos de unicidad y longitud.",
        "Criterios de aceptación: responde a la consulta, estructura escaneable (H2/H3), sin relleno, hechos verificables, unicidad OK, media que encaja.",
      ],
      lists: [
        {
          intro: "En el brief del copywriter incluye:",
          items: [
            "título borrador y esqueleto H2",
            "qué no se puede inventar",
            "competidores como orientación — no copiar",
            "dónde va el CTA",
            "deadline y formato de entrega",
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
      title: "Media, UGC y apoyo al texto",
      level: 2,
      paras: [
        "Texto sin visuales en páginas comerciales suele ser más débil: fotos de trabajo, diagramas de proceso, tablas comparativas, vídeo corto. Contenido de usuarios (reseñas, casos, Q&A) es una capa fuerte de confianza si lo moderas y formateas.",
        "No sustituyas sentido por relleno genérico y clickbait. Mantén un estilo para portadas e ilustraciones del blog.",
      ],
      lists: [
        {
          intro: "Mínimo para un artículo o landing:",
          items: [
            "1 visual principal que encaje con el sentido",
            "pies de foto para bloques complejos",
            "alt text en imágenes importantes",
            "nada de archivos pesados sin optimizar",
          ],
        },
      ],
    },
    {
      title: "Reglas de publicación y un ejemplo",
      level: 2,
      paras: [
        "Antes del go-live: title/description, URL limpia, enlaces internos, indexabilidad, preview para compartir, revisión móvil. Después — monitorizar rankings y rebote, y programar updates.",
        "Lógica de ejemplo para una tienda de nicho (flores, etc.): categorías y fichas → guías «cómo elegir» → selecciones de temporada → FAQ de entrega. Ritmo: fichas por lotes con el surtido; piezas expertas en un calendario de demanda.",
      ],
      lists: [
        {
          intro: "Checklist de publicación:",
          items: [
            "sentido y hechos aprobados",
            "unicidad OK",
            "enlaces a páginas comerciales",
            "sin URL duplicada",
            "fecha de publicación planificada cumplida",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "Publicar sin semántica ni estructura es contenido por el contenido. Primero mapa de temas, luego volumen.",
        },
      ],
      links: [
        {
          label: "Autorelleno del sitio",
          href: "/es/blog/avtonapolnenie-sayta/",
        },
        {
          label: "Actualización de contenidos",
          href: "/es/blog/obnovlenie-kontenta/",
        },
      ],
    },
  ],
  related: [
    "kontent-plan",
    "semanticheskoe-yadro",
    "proverka-unikalnosti",
    "avtonapolnenie-sayta",
    "obnovlenie-kontenta",
  ],
};
