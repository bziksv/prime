import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-iks — same structure as RU JSON. */
export const yandeksIksEn: BlogPost = {
  slug: "yandeks-iks",
  title: "Yandex SQI: what the quality index was — and what to watch now",
  date: "2018-09-19",
  category: "SEO",
  cover: "/images/blog/yandeks-iks/cover-en.webp",
  excerpt:
    "What Yandex SQI (IKS) was, how it differed from TIC, and why chasing an outdated score is pointless — plus which Webmaster reports to use instead of a “quality index.”",
  lead: [
    "SQI (site quality index, Russian ИКС) was Yandex’s public score that replaced TIC in 2018. It reflected demand and quality for audiences — not just link weight. The scale was stepped (10, 20, 40…), like old TIC.",
    "The public badge later left the familiar Webmaster UI, so chasing a number from 2018–2019 guides is pointless. Below: why the metric appeared, how it differed from TIC, and what to use now. Webmaster does not place sites by hand; share of a commercial set on page one usually grows over months after work starts.",
  ],
  faq: [
    {
      q: "Is SQI still shown in Webmaster?",
      a: "Not as the familiar public badge. Focus on diagnostics, index, queries, security, and behavior in analytics.",
    },
    {
      q: "Is SQI the same as a search position?",
      a: "No. Even when SQI was live, a high score did not guarantee page-one rankings. Relevance, page quality, and competition still decide.",
    },
    {
      q: "How did SQI differ from TIC?",
      a: "TIC leaned on link citation. SQI shifted toward audience, satisfaction, and trust. The exact formula was never disclosed.",
    },
    {
      q: "Can you inflate SQI?",
      a: "Gaming behavioral and link signals is risky — and pointless for a vanished badge. Improve the site and the business.",
    },
    {
      q: "What should I watch on competitors instead of SQI?",
      a: "Visibility on the shared keyword set, traffic estimates from tools, snippets, content, and commercial factors — not someone’s archived score.",
    },
  ],
  sections: [
    {
      title: "From TIC to SQI: why the metric changed",
      level: 2,
      paras: [
        "TIC (thematic citation index) measured link weight from the late 1990s. By the 2010s directories and link exchanges were built on it, while in general search zero-TIC sites often beat heavily linked ones. The metric stopped explaining quality for users.",
        "In August 2018 Yandex announced the swap: TIC off, SQI on. The idea was to show how useful the site is for audiences and the business around it — not only how many links you bought.",
      ],
      tables: [
        {
          caption: "Rough meaning comparison",
          headers: ["Metric", "Focus", "Limit"],
          rows: [
            ["TIC", "Link citation", "Easy to detach from human value"],
            [
              "SQI",
              "Audience, trust, satisfaction",
              "Closed formula; score ≠ rankings",
            ],
            ["Now", "Webmaster reports + analytics", "No single main number"],
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "How SQI was calculated (as far as known)",
      level: 2,
      paras: [
        "Officially they named directions: audience size, satisfaction, trust. Experts tied growth to the ecosystem (Search, Maps, content surfaces) and behavior — sources, depth, bounce, time — without promised exact weights.",
        "Yandex kept the right to change the method and zero scores for manipulation. Peak SQI from other people’s 2018 screenshots is museum trivia, not an optimization goal.",
      ],
      notes: [
        {
          title: "Not a one-to-one ranking dial",
          kind: "tip",
          text: "Even when SQI was shown, it was a quality and demand indicator — not a knob you turn to buy page-one visibility.",
        },
      ],
    },
    {
      title: "How people used to check SQI",
      level: 2,
      paras: [
        "Historically the score lived in the Webmaster summary, notification emails, and direct check URLs. For other people’s sites they used public checkers and third-party tools — many are outdated now.",
        "If an old report said SQI was missing, the site might be new, weakly present in search, or outside the sample. Today a missing number is normal: the badge metric was removed.",
      ],
    },
    {
      title: "Why “raise SQI” is a bad goal today",
      level: 2,
      paras: [
        "Optimizing for a vanished indicator distracts from indexing, content, commercial factors, and speed. Links for “quality” with no page value risk filters — not a path to better rankings.",
        "After prep, share of a commercial set on page one usually takes months of steady work — often in the 2–6 month range — not “we nudged SQI in a week.”",
      ],
      lists: [
        {
          intro: "What to do instead of chasing the score:",
          items: [
            "fix critical errors in Webmaster",
            "strengthen useful URLs for demand",
            "improve UX and conversion",
            "watch clicks and queries",
            "measure business goals in Metrika or CRM",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Indexing checks",
          href: "/en/blog/proverka-indeksatsii/",
        },
      ],
    },
    {
      title: "What to watch instead of SQI",
      level: 2,
      paras: [
        "In Webmaster: diagnostics and security, pages in search, queries and clicks, sitemap, crawl. In analytics — goal traffic and conversions. On competitors — visibility on the overlapping keyword set, not archived SQI.",
        "Trends and other quality slices in the dashboard (if your version still shows them) beat one historical number: they tie to the site’s current state.",
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Yandex support",
          href: "/en/blog/podderzhka-yandeks/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "SQI tried to replace link-based TIC with a demand indicator. As a public compass it is outdated.",
        "Build quality for people and business, read current Webmaster reports — and do not plan SEO around a score from 2018 articles.",
      ],
    },
  ],
  closing: [
    "If an old audit still says “boost SQI,” rewrite the task to Webmaster diagnostics, indexing important URLs, and conversions — that is the working replacement for the vanished badge.",
  ],
  related: [
    "yandeks-vebmaster",
    "tehnicheskiy-seo-audit",
    "proverka-indeksatsii",
    "podderzhka-yandeks",
    "ssylochnyy-profil",
    "molodoy-sayt",
  ],
};

/** ES overlay for yandeks-iks — same structure as RU JSON / EN. */
export const yandeksIksEs: BlogPost = {
  slug: "yandeks-iks",
  title: "Yandex SQI (ИКС): qué era el índice de calidad — y qué mirar ahora",
  date: "2018-09-19",
  category: "SEO",
  cover: "/images/blog/yandeks-iks/cover-es.webp",
  excerpt:
    "Qué era el SQI (ИКС) de Yandex, en qué se diferenciaba del TIC y por qué perseguir una puntuación obsoleta no tiene sentido — más qué informes de Webmaster usar en lugar de un «índice de calidad».",
  lead: [
    "El SQI (índice de calidad del sitio, en ruso ИКС) fue la puntuación pública de Yandex que sustituyó al TIC en 2018. Reflejaba demanda y calidad para audiencias — no solo peso de enlaces. La escala iba a saltos (10, 20, 40…), como el TIC viejo.",
    "La insignia pública luego salió de la UI familiar de Webmaster, así que perseguir un número de guías de 2018–2019 no tiene sentido. Abajo: por qué apareció la métrica, en qué se diferenciaba del TIC y qué usar ahora. Webmaster no coloca sitios a mano; la cuota de un set comercial en primera página suele crecer a lo largo de meses tras el arranque del trabajo.",
  ],
  faq: [
    {
      q: "¿Sigue mostrándose el SQI en Webmaster?",
      a: "No como la insignia pública familiar. Céntrate en diagnósticos, índice, consultas, seguridad y comportamiento en analítica.",
    },
    {
      q: "¿El SQI es lo mismo que una posición en búsqueda?",
      a: "No. Incluso cuando el SQI estaba vivo, una puntuación alta no garantizaba rankings en primera página. Relevancia, calidad de página y competencia siguen decidiendo.",
    },
    {
      q: "¿En qué se diferenciaba el SQI del TIC?",
      a: "El TIC se inclinaba a la citación por enlaces. El SQI se desplazó hacia audiencia, satisfacción y confianza. La fórmula exacta nunca se divulgó.",
    },
    {
      q: "¿Se puede inflar el SQI?",
      a: "Jugar con señales de comportamiento y enlaces es arriesgado — e inútil para una insignia desaparecida. Mejora el sitio y el negocio.",
    },
    {
      q: "¿Qué mirar en competidores en lugar del SQI?",
      a: "Visibilidad en el set compartido de keywords, estimaciones de tráfico de herramientas, snippets, contenido y factores comerciales — no la puntuación archivada de alguien.",
    },
  ],
  sections: [
    {
      title: "Del TIC al SQI: por qué cambió la métrica",
      level: 2,
      paras: [
        "El TIC (índice temático de citación) midió el peso de enlaces desde finales de los 90. En los 2010 se construyeron PBNs e intercambios de enlaces sobre él, mientras que en la búsqueda general sitios con TIC cero a menudo ganaban a los muy enlazados. La métrica dejó de explicar la calidad para los usuarios.",
        "En agosto de 2018 Yandex anunció el cambio: TIC fuera, SQI dentro. La idea era mostrar cuán útil es el sitio para audiencias y el negocio alrededor — no solo cuántos enlaces compraste.",
      ],
      tables: [
        {
          caption: "Comparación aproximada de sentido",
          headers: ["Métrica", "Foco", "Límite"],
          rows: [
            ["TIC", "Citación por enlaces", "Fácil de despegar del valor humano"],
            [
              "SQI",
              "Audiencia, confianza, satisfacción",
              "Fórmula cerrada; puntuación ≠ rankings",
            ],
            ["Ahora", "Informes de Webmaster + analítica", "Sin un único número principal"],
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Cómo se calculaba el SQI (hasta donde se sabe)",
      level: 2,
      paras: [
        "Oficialmente nombraron direcciones: tamaño de audiencia, satisfacción, confianza. Los expertos ligaron el crecimiento al ecosistema (Búsqueda, Maps, superficies de contenido) y al comportamiento — fuentes, profundidad, bounce, tiempo — sin pesos exactos prometidos.",
        "Yandex se reservó el derecho a cambiar el método y poner a cero puntuaciones por manipulación. El SQI pico de screenshots ajenos de 2018 es trivia de museo, no un objetivo de optimización.",
      ],
      notes: [
        {
          title: "No es un dial de ranking uno a uno",
          kind: "tip",
          text: "Incluso cuando se mostraba el SQI, era un indicador de calidad y demanda — no un mando que giras para comprar visibilidad en primera página.",
        },
      ],
    },
    {
      title: "Cómo se solía consultar el SQI",
      level: 2,
      paras: [
        "Históricamente la puntuación vivía en el resumen de Webmaster, emails de notificación y URLs de chequeo directo. Para sitios ajenos usaban checkers públicos y herramientas de terceros — muchas están obsoletas ahora.",
        "Si un informe viejo decía que faltaba el SQI, el sitio podía ser nuevo, estar débil en búsqueda o fuera de la muestra. Hoy un número ausente es normal: la métrica-insignia se retiró.",
      ],
    },
    {
      title: "Por qué «subir el SQI» es un mal objetivo hoy",
      level: 2,
      paras: [
        "Optimizar por un indicador desaparecido distrae de indexación, contenido, factores comerciales y velocidad. Enlaces por «calidad» sin valor de página arriesgan filtros — no un camino a mejores rankings.",
        "Tras la preparación, la cuota de un set comercial en primera página suele llevar meses de trabajo constante — a menudo en el rango de 2–6 meses — no «empujamos el SQI en una semana».",
      ],
      lists: [
        {
          intro: "Qué hacer en lugar de perseguir la puntuación:",
          items: [
            "arreglar errores críticos en Webmaster",
            "reforzar URLs útiles para la demanda",
            "mejorar UX y conversión",
            "mirar clics y consultas",
            "medir goals de negocio en Metrica o CRM",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Chequeos de indexación",
          href: "/es/blog/proverka-indeksatsii/",
        },
      ],
    },
    {
      title: "Qué mirar en lugar del SQI",
      level: 2,
      paras: [
        "En Webmaster: diagnósticos y seguridad, páginas en búsqueda, consultas y clics, sitemap, crawl. En analítica — tráfico a goals y conversiones. En competidores — visibilidad en el set solapado de keywords, no el SQI archivado.",
        "Tendencias y otros cortes de calidad en el dashboard (si tu versión aún los muestra) ganan a un número histórico: se atan al estado actual del sitio.",
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
        {
          label: "Soporte de Yandex",
          href: "/es/blog/podderzhka-yandeks/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "El SQI intentó sustituir el TIC basado en enlaces por un indicador de demanda. Como brújula pública está obsoleto.",
        "Construye calidad para personas y negocio, lee los informes actuales de Webmaster — y no planifiques SEO alrededor de una puntuación de artículos de 2018.",
      ],
    },
  ],
  closing: [
    "Si una auditoría vieja aún dice «sube el SQI», reescribe la tarea a diagnósticos de Webmaster, indexación de URLs importantes y conversiones — ese es el reemplazo operativo de la insignia desaparecida.",
  ],
  related: [
    "yandeks-vebmaster",
    "tehnicheskiy-seo-audit",
    "proverka-indeksatsii",
    "podderzhka-yandeks",
    "ssylochnyy-profil",
    "molodoy-sayt",
  ],
};
