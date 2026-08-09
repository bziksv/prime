import type { BlogPost } from "../../../data/blog";

/** EN overlay for filtry-poiskovikov — same structure as RU JSON. */
export const filtryPoiskovikovEn: BlogPost = {
  slug: "filtry-poiskovikov",
  title: "Search engine filters: how to stay clean and what to do",
  date: "2021-06-03",
  category: "SEO",
  cover: "/images/blog/filtry-poiskovikov/cover-en.webp",
  excerpt:
    "Why sites lose rankings to filters and algorithm updates, how to diagnose the problem, and how to grow organic with white-hat methods — without bypass tricks or gray schemes.",
  lead: [
    "Filters and updates cut sites for stuffing, thin content, manipulative links, and poor UX. “Bypassing” the system with gray tricks leads to new penalties.",
    "Below: how to assess the state, check tech and demand, and strengthen content and links within the rules. This is not a guide to dodging filters.",
  ],
  faq: [
    {
      q: "Is this a guide to tricking Yandex/Google?",
      a: "No. Only diagnosis and white-hat optimization. We don’t cover or recommend gray filter bypasses.",
    },
    {
      q: "How do I tell a filter from seasonality?",
      a: "Compare Wordstat year over year, Webmaster (security, quality), and core dynamics. Seasonality is gradual; a filter often hits commercial queries sharply.",
    },
    {
      q: "Is site speed related to filters?",
      a: "There may be no direct “speed filter,” but a slow site hurts behavior and growth. Speed is required hygiene.",
    },
    {
      q: "Will bulk link buying “restore” rankings?",
      a: "Often it makes things worse. Fix the cause: content, spam links, over-optimization.",
    },
    {
      q: "How long does recovery take?",
      a: "Depends on the cause and recrawl. Don’t promise a page-one date; log fixes and monitor the keyword set monthly.",
    },
    {
      q: "Should I rebuild the whole site at once?",
      a: "No. Confirm hypotheses with data first and remove critical causes. Mass unrelated changes muddy diagnosis.",
    },
    {
      q: "Can I delete all external links?",
      a: "Don’t act blind. Assess quality, origin, and link dynamics; when needed, handle them per search-engine rules.",
    },
  ],
  sections: [
    {
      title: "Diagnosis first, not “schemes”",
      level: 2,
      paras: [
        "Take a baseline before any changes: visibility and positions by query groups, organic traffic, conversions, indexing, webmaster-panel messages, and key-page availability. First separate a real drop from broken analytics, seasonality, or demand shift.",
        "Match the drop date to project history: redesign, URL migration, template release, mass page generation, robots.txt change, link spike, or CMS switch. The cause is often in that list — not an abstract “filter.”",
        "Compare not one query, but clusters and page types. If only product cards fell, check the catalog template and stock — don’t rewrite the blog first.",
      ],
      lists: [
        {
          intro: "Basic inspection:",
          items: [
            "availability and mirrors",
            "PageSpeed / real measurements",
            "security and quality in panels",
            "demand seasonality",
            "link profile for spam",
          ],
        },
      ],
      links: [
        {
          label: "Traffic drops",
          href: "/en/blog/snizhenie-trafika/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Check the technical foundation",
      level: 2,
      paras: [
        "The crawler needs a correct server response, an accessible page, and a clear canonical URL. Bad redirects, accidental noindex, blocked CSS/JS, parameter duplicates, and slow load can crush visibility with no sanction at all.",
        "Start with critical templates: home, categories, product cards, services, articles, and pagination. Check them in the browser, URL inspection tools, and server logs if available. Log fixes so you can see the link between a change and the trend.",
        "Mobile shouldn’t be a stripped desktop with different navigation and hidden content. User path, speed, and form accessibility matter for visitors and for steady organic growth.",
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Strengthen content and intent",
      level: 2,
      paras: [
        "A page should solve a real user job: help choose, compare, learn terms, buy, or get an answer. Cut template paragraphs, repeating key phrases, and empty subheads that exist only for length.",
        "Check cannibalization: several URLs shouldn’t fight for the same commercial query with nearly identical content. Sometimes growth comes not from a new page, but from merging duplicates, a clean 301, and strengthening one canonical piece.",
        "Expertise shows in authorship, sources, clear terms, current prices, and practical detail. Copying a competitor’s structure without your own experience doesn’t make a page useful.",
      ],
      lists: [
        {
          intro: "Work plan:",
          items: [
            "clusters and commercial/info intents",
            "unique strong landings",
            "cleanup of toxic factors",
            "technical debt",
            "core monitoring after fixes",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "An old title about “bypassing filters” is misleading. The working strategy is following the rules — not dodging them.",
        },
      ],
    },
    {
      title: "Handle links and reputation carefully",
      level: 2,
      paras: [
        "External links can help when they come from useful content, partnerships, brand mentions, or industry publications. A sudden buy of same-type links with commercial anchors is a risky signal — not a quick ranking restore.",
        "Build a list of suspicious domains; assess topic, dynamics, and link character. Don’t waste endless time on every random link: prioritize your own actions, site quality, and clearly artificial campaigns you controlled.",
        "In parallel grow assets people naturally link to: studies, calculators, guides, cases, and useful roundups. Slower than a “link pack,” more durable.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "An old title about “bypassing filters” misleads. Sustainable recovery comes from removing causes and following rules — not masking signals.",
        },
      ],
    },
    {
      title: "Measure recovery the right way",
      level: 2,
      paras: [
        "Track organic traffic, organic conversion, visibility of priority clusters, pages in the index, crawl errors, and speed. A dashboard of a few stable metrics beats a hundred unread reports.",
        "After fixes, give search engines time to recrawl and reassess. Project prep — audit, tech fixes, semantics, and content — usually takes weeks or about a month; a noticeable share of the keyword set reaching page one is planned for 2–6 months and depends on competition.",
        "Don’t declare recovery from one lucky day. Watch month-to-month dynamics, year-over-year comparison, and lead quality. Domain age alone doesn’t heal problems — consistent improvements do.",
      ],
    },
  ],
};

/** ES overlay for filtry-poiskovikov — same structure as RU JSON / EN. */
export const filtryPoiskovikovEs: BlogPost = {
  slug: "filtry-poiskovikov",
  title: "Filtros de buscadores: cómo mantenerte limpio y qué hacer",
  date: "2021-06-03",
  category: "SEO",
  cover: "/images/blog/filtry-poiskovikov/cover.webp",
  excerpt:
    "Por qué los sitios pierden rankings por filtros y actualizaciones de algoritmo, cómo diagnosticar el problema y cómo crecer en orgánico con métodos white-hat — sin trucos de bypass ni esquemas grises.",
  lead: [
    "Los filtros y las updates recortan sitios por stuffing, contenido fino, enlaces manipulativos y UX floja. «Saltar» el sistema con trucos grises lleva a nuevas sanciones.",
    "Abajo: cómo evaluar el estado, revisar técnica y demanda, y reforzar contenido y enlaces dentro de las reglas. Esto no es una guía para eludir filtros.",
  ],
  faq: [
    {
      q: "¿Es una guía para engañar a Yandex/Google?",
      a: "No. Solo diagnóstico y optimización white-hat. No cubrimos ni recomendamos bypasses grises de filtros.",
    },
    {
      q: "¿Cómo distinguir un filtro de la estacionalidad?",
      a: "Compara Wordstat año a año, Webmaster (seguridad, calidad) y la dinámica del núcleo. La estacionalidad es gradual; un filtro a menudo golpea fuerte las consultas comerciales.",
    },
    {
      q: "¿La velocidad del sitio tiene que ver con filtros?",
      a: "Puede no haber un «filtro de velocidad» directo, pero un sitio lento daña comportamiento y crecimiento. La velocidad es higiene obligatoria.",
    },
    {
      q: "¿Comprar enlaces a granel «restaura» rankings?",
      a: "A menudo empeora las cosas. Arregla la causa: contenido, enlaces spam, sobreoptimización.",
    },
    {
      q: "¿Cuánto tarda la recuperación?",
      a: "Depende de la causa y el recrawl. No prometas fecha de primera página; registra fixes y monitoriza el set de keywords mes a mes.",
    },
    {
      q: "¿Debo reconstruir todo el sitio de una vez?",
      a: "No. Confirma hipótesis con datos primero y elimina causas críticas. Cambios masivos sin relación enturbian el diagnóstico.",
    },
    {
      q: "¿Puedo borrar todos los enlaces externos?",
      a: "No actúes a ciegas. Evalúa calidad, origen y dinámica de enlaces; cuando haga falta, trátalos según las reglas del buscador.",
    },
  ],
  sections: [
    {
      title: "Primero diagnóstico, no «esquemas»",
      level: 2,
      paras: [
        "Toma una línea base antes de cualquier cambio: visibilidad y posiciones por grupos de consultas, tráfico orgánico, conversiones, indexación, mensajes del panel de webmaster y disponibilidad de páginas clave. Primero separa una caída real de analítica rota, estacionalidad o cambio de demanda.",
        "Empareja la fecha de la caída con la historia del proyecto: rediseño, migración de URLs, release de plantilla, generación masiva de páginas, cambio de robots.txt, pico de enlaces o cambio de CMS. La causa suele estar en esa lista — no en un «filtro» abstracto.",
        "Compara no una consulta, sino clusters y tipos de página. Si solo cayeron las fichas de producto, revisa la plantilla del catálogo y el stock — no reescribas el blog primero.",
      ],
      lists: [
        {
          intro: "Inspección básica:",
          items: [
            "disponibilidad y espejos",
            "PageSpeed / mediciones reales",
            "seguridad y calidad en paneles",
            "estacionalidad de la demanda",
            "perfil de enlaces por spam",
          ],
        },
      ],
      links: [
        {
          label: "Caídas de tráfico",
          href: "/es/blog/snizhenie-trafika/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Revisa la base técnica",
      level: 2,
      paras: [
        "El crawler necesita una respuesta correcta del servidor, una página accesible y una URL canónica clara. Redirects malos, noindex accidental, CSS/JS bloqueados, duplicados por parámetros y carga lenta pueden aplastar la visibilidad sin sanción alguna.",
        "Empieza por plantillas críticas: home, categorías, fichas de producto, servicios, artículos y paginación. Revísalas en el navegador, herramientas de inspección de URL y logs del servidor si están disponibles. Registra los fixes para ver el vínculo entre un cambio y la tendencia.",
        "El móvil no debería ser un desktop recortado con navegación distinta y contenido oculto. El camino del usuario, la velocidad y la accesibilidad de formularios importan para visitantes y para un crecimiento orgánico estable.",
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Refuerza contenido e intención",
      level: 2,
      paras: [
        "Una página debería resolver un trabajo real del usuario: ayudar a elegir, comparar, aprender términos, comprar u obtener una respuesta. Corta párrafos plantilla, frases clave repetidas y subtítulos vacíos que existen solo por longitud.",
        "Revisa la canibalización: varias URLs no deberían pelear por la misma consulta comercial con contenido casi idéntico. A veces el crecimiento no viene de una página nueva, sino de fusionar duplicados, un 301 limpio y reforzar una pieza canónica.",
        "La expertise se ve en autoría, fuentes, términos claros, precios actuales y detalle práctico. Copiar la estructura del competidor sin experiencia propia no hace útil una página.",
      ],
      lists: [
        {
          intro: "Plan de trabajo:",
          items: [
            "clusters e intents comerciales/informativos",
            "landings fuertes y únicas",
            "limpieza de factores tóxicos",
            "deuda técnica",
            "monitoreo del núcleo tras los fixes",
          ],
        },
      ],
      links: [
        {
          label: "Investigación semántica de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Optimización de página",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Un título antiguo sobre «saltar filtros» engaña. La estrategia que funciona es seguir las reglas — no eludirlas.",
        },
      ],
    },
    {
      title: "Trata enlaces y reputación con cuidado",
      level: 2,
      paras: [
        "Los enlaces externos ayudan cuando vienen de contenido útil, partnerships, menciones de marca o publicaciones de industria. Una compra brusca de enlaces del mismo tipo con anclas comerciales es una señal de riesgo — no una restauración rápida de rankings.",
        "Arma una lista de dominios sospechosos; evalúa tema, dinámica y carácter del enlace. No gastes tiempo infinito en cada enlace aleatorio: prioriza tus propias acciones, la calidad del sitio y campañas claramente artificiales que controlaste.",
        "En paralelo crece activos a los que la gente enlaza de forma natural: estudios, calculadoras, guías, casos y recopilaciones útiles. Más lento que un «pack de enlaces», más duradero.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Un título antiguo sobre «saltar filtros» engaña. La recuperación sostenible viene de quitar causas y seguir reglas — no de enmascarar señales.",
        },
      ],
    },
    {
      title: "Mide la recuperación como toca",
      level: 2,
      paras: [
        "Sigue tráfico orgánico, conversión orgánica, visibilidad de clusters prioritarios, páginas en el índice, errores de crawl y velocidad. Un dashboard de unas pocas métricas estables gana a cien informes sin leer.",
        "Tras los fixes, da tiempo a los buscadores para recrawlear y reevaluar. La preparación del proyecto — auditoría, fixes técnicos, semántica y contenido — suele llevar semanas o alrededor de un mes; una cuota notable del set de keywords llegando a la primera página se planifica a 2–6 meses y depende de la competencia.",
        "No declares recuperación por un día de suerte. Mira la dinámica mes a mes, la comparación año a año y la calidad del lead. La antigüedad del dominio sola no cura problemas — las mejoras constantes sí.",
      ],
    },
  ],
};
