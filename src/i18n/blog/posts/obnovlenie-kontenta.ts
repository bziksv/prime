import type { BlogPost } from "../../../data/blog";

/** EN overlay for obnovlenie-kontenta — same structure as RU JSON. */
export const obnovlenieKontentaEn: BlogPost = {
  slug: "obnovlenie-kontenta",
  title: "How to refresh old blog posts and win traffic back",
  date: "2021-07-08",
  category: "Content marketing",
  cover: "/images/blog/obnovlenie-kontenta/cover-en.webp",
  excerpt:
    "Find posts that still have search demand, decide what to update first, improve the writing and the page, then promote again — without promising “2× traffic in 90 days for every site.”",
  lead: [
    "A lot of blog traffic is already sitting in articles you published years ago. They still match real searches, but the copy is stale, competitors outrank you, or the page slipped down the results. Refreshing those URLs often beats writing everything from scratch.",
    "Below is a practical workflow: pick the right URLs, prioritize, improve the content and the technical basics, then ask search engines to recrawl. Numbers like “+139% in a quarter” come from one team’s case study — not a forecast for your site. Ranking gains after content work are planned over months; prep alone is not an overnight jump to page one.",
  ],
  faq: [
    {
      q: "Can you promise double traffic in three months?",
      a: "Not as a universal rule. Sites with a solid archive and pages already near page one can see a clear lift within a quarter. Brand-new sites with no keyword base and no links should not plan on those timelines.",
    },
    {
      q: "What should I update first?",
      a: "Pages that get impressions or clicks but sit outside the top results; pages that already convert; topics where search intent hasn’t changed. Dead URLs with no demand belong in a merge or noindex pile — not a cosmetic rewrite.",
    },
    {
      q: "Should I change the publish date to today?",
      a: "Only if the update is real. Bumping the date with no substance looks manipulative. Prefer an honest “last updated” line, a real refresh, and a sitemap signal.",
    },
    {
      q: "How is this different from publishing a new article?",
      a: "You strengthen a URL that already has history and links. Write something new when the intent is different or the old URL can’t be saved.",
    },
    {
      q: "Which tools help with content updates?",
      a: "Search Console (or your local webmaster tools), analytics, a rankings export (Ahrefs, Keys.so, and similar), plus a manual look at the current top 10. Exact product names and UIs change — the workflow doesn’t.",
    },
  ],
  sections: [
    {
      title: "Why refresh old posts instead of only writing new ones",
      level: 2,
      paras: [
        "A new blog usually takes months before organic traffic feels stable. If you already have an archive, strong pieces with falling clicks are often cheaper to revive than to ignore.",
        "In published content-team case studies, double-digit to triple-digit organic growth in a quarter usually came from a package of updates — not one heroic post. How far you get depends on the niche, the competition, and how thorough the edits are.",
      ],
      lists: [
        {
          intro: "Good candidates:",
          items: [
            "impressions are there, but the average position is outside the top results",
            "people still search the topic",
            "the page already drives leads or sign-ups",
            "competitors beat you on freshness.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Building an update package takes weeks to a few months of work. Steady traffic and ranking growth is planned over 2–6 months. A contract that “guarantees 2× by a fixed date” is not acceptable.",
        },
      ],
    },
    {
      title: "How to choose and prioritize URLs",
      level: 2,
      paras: [
        "Export clicks, impressions, and average position from Search Console or your webmaster tools. Keep pages in striking distance of page one, and pages with impressions but almost no clicks because the snippet is weak.",
        "For each URL, add the main query, demand, and a competition score from an SEO tool. Simple rule: higher demand with relatively low difficulty goes earlier in the queue. Set impression thresholds to match the size of your blog.",
      ],
      lists: [
        {
          intro: "A useful tracking table includes:",
          items: [
            "URL and title",
            "impressions / clicks / position",
            "target query",
            "demand and difficulty scores",
            "whether the page matters for conversion (yes/no)",
            "update status.",
          ],
        },
      ],
    },
    {
      title: "How to improve the article",
      level: 2,
      paras: [
        "Compare the page with today’s top 10: what’s missing on depth, structure, examples, dates, and facts. Strengthen the copy, add the gaps, cut filler, and refresh screenshots and numbers.",
        "For readers: clear subheads, lists, a table of contents, and enough breathing room that people finish the piece. For tech: fix broken links, confirm HTTPS, write alt text, shrink heavy images, check title/description length, and make sure the page works on mobile.",
      ],
      lists: [
        {
          intro: "Three layers of edits:",
          items: [
            "meaning and completeness versus competitors",
            "readability and how long people stay",
            "technical hygiene of the URL.",
          ],
        },
      ],
      links: [
        {
          label: "On-page optimization for a query",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Keyword stuffing in copy",
          href: "/en/blog/zaspamlennost-teksta/",
        },
      ],
    },
    {
      title: "Promote the update and watch the results",
      level: 2,
      paras: [
        "After you publish the refresh, tell people: social posts, topic communities, and internal links from newer articles. A mass “we updated a post” blast with no value is usually just noise — lead with a short benefit instead.",
        "Watch rankings and clicks for 4–12 weeks. If nothing moves, revisit intent, the snippet, or the competitive set. A quarterly pass over your best archive URLs protects traffic better than one-off sprints.",
      ],
      lists: [
        {
          intro: "After the update:",
          items: [
            "point more internal links at this URL",
            "check the search snippet in 1–2 weeks",
            "log before/after metrics",
            "schedule the next batch of URLs.",
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
  ],
};

/** ES overlay for obnovlenie-kontenta — same structure as RU JSON / EN. */
export const obnovlenieKontentaEs: BlogPost = {
  slug: "obnovlenie-kontenta",
  title: "Cómo refrescar posts antiguos del blog y recuperar tráfico",
  date: "2021-07-08",
  category: "Content marketing",
  cover: "/images/blog/obnovlenie-kontenta/cover-es.webp",
  excerpt:
    "Encuentra posts que aún tienen demanda de búsqueda, decide qué actualizar primero, mejora el texto y la página, y vuelve a promover — sin prometer «2× de tráfico en 90 días para cualquier sitio».",
  lead: [
    "Gran parte del tráfico del blog ya está en artículos que publicaste hace años. Siguen coincidiendo con búsquedas reales, pero el copy está viejo, los competidores te superan o la página bajó en los resultados. Refrescar esas URLs a menudo gana a escribirlo todo desde cero.",
    "Abajo hay un flujo práctico: elegir las URLs correctas, priorizar, mejorar el contenido y lo técnico básico, y pedir a los buscadores que recrawleen. Cifras como «+139% en un trimestre» vienen del caso de un equipo — no son un forecast para tu sitio. Las ganancias de ranking tras trabajo de contenido se planifican en meses; la preparación sola no es un salto nocturno a la primera página.",
  ],
  faq: [
    {
      q: "¿Se puede prometer el doble de tráfico en tres meses?",
      a: "No como regla universal. Sitios con un archivo sólido y páginas ya cerca de la primera página pueden ver un lift claro en un trimestre. Sitios nuevos sin base de keywords ni enlaces no deberían planear esos plazos.",
    },
    {
      q: "¿Qué actualizar primero?",
      a: "Páginas con impresiones o clics pero fuera de los primeros resultados; páginas que ya convierten; temas donde la intención de búsqueda no ha cambiado. URLs muertas sin demanda van a merge o noindex — no a un rewrite cosmético.",
    },
    {
      q: "¿Debo cambiar la fecha de publicación a hoy?",
      a: "Solo si la actualización es real. Subir la fecha sin sustancia parece manipulación. Prefiere una línea honesta de «última actualización», un refresh de verdad y una señal en el sitemap.",
    },
    {
      q: "¿En qué se diferencia de publicar un artículo nuevo?",
      a: "Refuerzas una URL que ya tiene historial y enlaces. Escribe algo nuevo cuando la intención es distinta o la URL antigua no se puede salvar.",
    },
    {
      q: "¿Qué herramientas ayudan con las actualizaciones de contenido?",
      a: "Search Console (o tus herramientas locales de webmaster), analítica, un export de rankings (Ahrefs, Keys.so y similares), más una mirada manual a los 10 primeros actuales. Los nombres de producto y las UIs cambian — el flujo no.",
    },
  ],
  sections: [
    {
      title: "Por qué refrescar posts antiguos en vez de solo escribir nuevos",
      level: 2,
      paras: [
        "Un blog nuevo suele tardar meses antes de que el tráfico orgánico se sienta estable. Si ya tienes un archivo, las piezas fuertes con clics a la baja a menudo son más baratas de revivir que de ignorar.",
        "En casos publicados de equipos de contenido, el crecimiento orgánico de dos o tres dígitos en un trimestre suele venir de un paquete de updates — no de un post heroico. Hasta dónde llegas depende del nicho, la competencia y lo a fondo que edites.",
      ],
      lists: [
        {
          intro: "Buenos candidatos:",
          items: [
            "hay impresiones, pero la posición media está fuera de los primeros resultados",
            "la gente sigue buscando el tema",
            "la página ya trae leads o registros",
            "los competidores te ganan en frescura.",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          text: "Montar un paquete de updates lleva de semanas a unos meses de trabajo. El crecimiento estable de tráfico y rankings se planifica a 2–6 meses. Un contrato que «garantiza 2× en una fecha fija» no es aceptable.",
        },
      ],
    },
    {
      title: "Cómo elegir y priorizar URLs",
      level: 2,
      paras: [
        "Exporta clics, impresiones y posición media desde Search Console o tus herramientas de webmaster. Quédate con páginas a tiro de la primera página, y páginas con impresiones pero casi sin clics porque el snippet es flojo.",
        "Por cada URL, suma la consulta principal, la demanda y una puntuación de competencia de una herramienta SEO. Regla simple: más demanda con dificultad relativamente baja va antes en la cola. Ajusta umbrales de impresiones al tamaño de tu blog.",
      ],
      lists: [
        {
          intro: "Una tabla de seguimiento útil incluye:",
          items: [
            "URL y title",
            "impresiones / clics / posición",
            "consulta objetivo",
            "puntuaciones de demanda y dificultad",
            "si la página importa para conversión (sí/no)",
            "estado del update.",
          ],
        },
      ],
    },
    {
      title: "Cómo mejorar el artículo",
      level: 2,
      paras: [
        "Compara la página con los 10 primeros de hoy: qué falta en profundidad, estructura, ejemplos, fechas y hechos. Refuerza el copy, cierra huecos, corta relleno y actualiza capturas y cifras.",
        "Para lectores: subtítulos claros, listas, tabla de contenidos y aire suficiente para que terminen la pieza. Para técnica: arregla enlaces rotos, confirma HTTPS, escribe alt text, reduce imágenes pesadas, revisa longitud de title/description y asegúrate de que la página funcione en móvil.",
      ],
      lists: [
        {
          intro: "Tres capas de edición:",
          items: [
            "sentido y completitud frente a competidores",
            "legibilidad y cuánto tiempo se queda la gente",
            "higiene técnica de la URL.",
          ],
        },
      ],
      links: [
        {
          label: "Optimización on-page para una consulta",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Keyword stuffing en el copy",
          href: "/es/blog/zaspamlennost-teksta/",
        },
      ],
    },
    {
      title: "Promueve el update y mira los resultados",
      level: 2,
      paras: [
        "Tras publicar el refresh, avisa: posts en redes, comunidades del tema y enlaces internos desde artículos más nuevos. Un blast masivo de «actualizamos un post» sin valor suele ser solo ruido — lidera con un beneficio corto.",
        "Vigila rankings y clics 4–12 semanas. Si no se mueve nada, revisa intención, snippet o el set competitivo. Un pase trimestral por las mejores URLs del archivo protege el tráfico mejor que sprints puntuales.",
      ],
      lists: [
        {
          intro: "Después del update:",
          items: [
            "apunta más enlaces internos a esta URL",
            "revisa el snippet de búsqueda en 1–2 semanas",
            "registra métricas antes/después",
            "programa el siguiente lote de URLs.",
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
  ],
};
