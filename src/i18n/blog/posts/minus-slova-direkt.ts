import type { BlogPost } from "../../../data/blog";

/** EN overlay for minus-slova-direkt — same structure as RU JSON. */
export const minusSlovaDirektEn: BlogPost = {
  slug: "minus-slova-direkt",
  title: "Negative keywords in Yandex Direct: how to cut non-target demand",
  date: "2018-10-25",
  category: "Paid search",
  cover: "/images/blog/minus-slova-direkt/cover-en.webp",
  excerpt:
    "How to set negative keywords and phrases in Yandex Direct: add levels, word-form operators, cross-negatives, and caution in the Display Network — without blindly copying “universal lists” from the web.",
  lead: [
    "Negative keywords in Direct are exclusions: which queries (and close phrasings) shouldn’t show the ad. That narrows the audience toward more qualified demand and saves budget on “download,” “free,” competitor brands, and irrelevant modifiers.",
    "Below: what the tool does, where to add exclusions, word-form nuances, and cross-negatives. Account menu labels change; use campaign / ad group / keywords. Treat ready-made “500 negatives” lists as drafts — check them against your offer.",
  ],
  faq: [
    {
      q: "Are a negative keyword and a negative phrase the same?",
      a: "A word is one exclusion; a phrase is a combination. Both cut non-target demand phrasings.",
    },
    {
      q: "Can I paste a universal negative list?",
      a: "As a draft — yes. As the final set — no: you can easily cut useful demand or leave niche junk.",
    },
    {
      q: "What wins when a keyword and a negative conflict?",
      a: "If a negative matches a keyword, the keyword usually wins (account logic). Don’t add a negative that kills your own phrase.",
    },
    {
      q: "Why use cross-negatives?",
      a: "So head and refined keywords don’t compete inside the campaign: a broad phrase doesn’t steal traffic from a narrow one.",
    },
    {
      q: "Are aggressive negatives risky in the Display Network?",
      a: "Yes if overdone: placement themes depend heavily on keywords. A harsh negative can shrink reach too far.",
    },
  ],
  sections: [
    {
      title: "Why negative keywords matter",
      level: 2,
      paras: [
        "Wordstat and the search-terms report show tails that don’t lead to leads: informational (“DIY”), wrong geo, used goods when you sell new only, job seekers for a B2B service.",
        "Negatives are part of semantics alongside the core. Without them, broad keywords burn budget even with a strong-looking CTR.",
      ],
      lists: [
        {
          intro: "Typical negative candidates:",
          items: [
            "free / download / torrent",
            "job / vacancy / courses (if not your service)",
            "used / classifieds (if not your channel)",
            "competitor brands and cities outside delivery",
            "irrelevant modifiers from Wordstat",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Where to add: campaign, group, keywords",
      level: 2,
      paras: [
        "Shared exclusions (universal junk) fit at campaign level. Cluster refinements — at the ad group. Point keyword conflicts — on keywords or via cross-negatives.",
        "Don’t paste the same giant list everywhere without need: harder to maintain and easier to err when editing.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "pull negatives from the search-terms report",
            "split shared vs cluster",
            "check that keywords aren’t killed",
            "export search terms again in a week",
          ],
        },
      ],
    },
    {
      title: "Word forms and operators",
      level: 2,
      paras: [
        "A negative usually covers word forms (gender, number, case). For one exact form only — use locking operators (historically `!` before the word; check current Direct Help syntax).",
        "Negative phrases cut combinations as a whole. A bad phrase can cut more than you planned — validate on sample queries.",
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "warning",
          text: "Paste a “for every niche” list and kill half of commercial demand. Start from your own stats queries.",
        },
      ],
    },
    {
      title: "Cross-negatives",
      level: 2,
      paras: [
        "If you have “rent a house” and “rent a house SPb,” minus geo/refinements on the broad phrase so narrow-keyword traffic isn’t intercepted. That lowers internal ad competition.",
        "Do cross-negatives deliberately by cluster tree — not by minusing everything. In auto strategies and unified performance campaigns, overlap logic may differ — check current Yandex guidance.",
      ],
      lists: [
        {
          intro: "When cross-negatives help:",
          items: [
            "clear head → mid → long-tail hierarchy",
            "different landings for refinements",
            "need ad-copy control per query",
          ],
        },
      ],
    },
    {
      title: "Search vs Display Network",
      level: 2,
      paras: [
        "In search, negatives cut query phrasings. In Display, keywords shape placement themes more: an aggressive negative can remove useful inventory.",
        "For networks, start with a soft list and watch placements/display conditions — don’t copy search negatives one-to-one.",
      ],
      links: [
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Click price in Yandex",
          href: "/en/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Negative keywords are a living list from your reports — not a one-time ritual. Universal negatives are a draft; cross-negatives fight keyword cannibalization.",
        "Export search terms regularly and clean: that’s how Direct feeds less non-target demand.",
      ],
    },
  ],
  closing: [
    "Build negatives from Wordstat and the search-terms report, place them by campaign level, check word forms and cross-negatives between clusters — and don’t trust downloaded “universal” lists blindly.",
  ],
  related: [
    "strategii-yandeks-direkt",
    "semanticheskoe-yadro",
    "audit-reklamnoy-kampanii",
    "tsena-klika-yandeks",
    "ab-testy-reklamy",
    "klyuchi-google-ads",
  ],
};

/** ES overlay for minus-slova-direkt — same structure as RU JSON / EN. */
export const minusSlovaDirektEs: BlogPost = {
  slug: "minus-slova-direkt",
  title: "Keywords negativas en Yandex Direct: cómo cortar demanda no objetivo",
  date: "2018-10-25",
  category: "Paid search",
  cover: "/images/blog/minus-slova-direkt/cover.webp",
  excerpt:
    "Cómo configurar keywords y frases negativas en Yandex Direct: niveles de alta, operadores de formas, cross-negatives y precaución en Display Network — sin copiar a ciegas «listas universales» de la web.",
  lead: [
    "Las keywords negativas en Direct son exclusiones: qué consultas (y formulaciones cercanas) no deben mostrar el anuncio. Eso estrecha la audiencia hacia demanda más cualificada y ahorra presupuesto en «download», «gratis», marcas de competidores y modificadores irrelevantes.",
    "Abajo: qué hace la herramienta, dónde añadir exclusiones, matices de formas y cross-negatives. Las etiquetas del menú de la cuenta cambian; usa campaña / grupo de anuncios / keywords. Trata las listas ya hechas de «500 negativas» como borradores — compruébalas contra tu oferta.",
  ],
  faq: [
    {
      q: "¿Una keyword negativa y una frase negativa son lo mismo?",
      a: "Una palabra es una exclusión; una frase es una combinación. Ambas cortan formulaciones de demanda no objetivo.",
    },
    {
      q: "¿Puedo pegar una lista universal de negativas?",
      a: "Como borrador — sí. Como set final — no: puedes cortar fácil demanda útil o dejar basura de nicho.",
    },
    {
      q: "¿Qué gana cuando una keyword y una negativa chocan?",
      a: "Si una negativa coincide con una keyword, suele ganar la keyword (lógica de la cuenta). No añadas una negativa que mate tu propia frase.",
    },
    {
      q: "¿Por qué usar cross-negatives?",
      a: "Para que keywords head y refinadas no compitan dentro de la campaña: una frase amplia no robe tráfico a una estrecha.",
    },
    {
      q: "¿Las negativas agresivas son arriesgadas en Display Network?",
      a: "Sí si te pasas: los temas de emplazamiento dependen mucho de las keywords. Una negativa dura puede encoger el alcance demasiado.",
    },
  ],
  sections: [
    {
      title: "Por qué importan las keywords negativas",
      level: 2,
      paras: [
        "Wordstat y el informe de search terms muestran colas que no llevan a leads: informacionales («DIY»), geo equivocado, usados cuando solo vendes nuevo, buscadores de empleo para un servicio B2B.",
        "Las negativas son parte de la semántica junto al núcleo. Sin ellas, las keywords amplias queman presupuesto aunque el CTR se vea fuerte.",
      ],
      lists: [
        {
          intro: "Candidatos típicos a negativas:",
          items: [
            "gratis / download / torrent",
            "empleo / vacante / cursos (si no es tu servicio)",
            "usado / clasificados (si no es tu canal)",
            "marcas de competidores y ciudades fuera de entrega",
            "modificadores irrelevantes de Wordstat",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Estrategias de Yandex Direct",
          href: "/es/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Dónde añadir: campaña, grupo, keywords",
      level: 2,
      paras: [
        "Exclusiones compartidas (basura universal) encajan a nivel campaña. Refinamientos de cluster — en el grupo de anuncios. Conflictos puntuales de keyword — en keywords o vía cross-negatives.",
        "No pegues la misma lista gigante en todos lados sin necesidad: más duro de mantener y más fácil errar al editar.",
      ],
      lists: [
        {
          intro: "Orden práctico:",
          items: [
            "sacar negativas del informe de search terms",
            "partir compartidas vs cluster",
            "comprobar que no matas keywords",
            "exportar search terms otra vez en una semana",
          ],
        },
      ],
    },
    {
      title: "Formas y operadores",
      level: 2,
      paras: [
        "Una negativa suele cubrir formas (género, número, caso). Para una sola forma exacta — usa operadores de bloqueo (históricamente `!` delante de la palabra; revisa la sintaxis actual en la Ayuda de Direct).",
        "Las frases negativas cortan combinaciones como un todo. Una frase mala puede cortar más de lo planeado — valida en consultas de muestra.",
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "warning",
          text: "Pegar una lista «para cualquier nicho» y matar la mitad de la demanda comercial. Empieza por las consultas de tus propias stats.",
        },
      ],
    },
    {
      title: "Cross-negatives",
      level: 2,
      paras: [
        "Si tienes «alquilar casa» y «alquilar casa SPb», minus geo/refinamientos en la frase amplia para que el tráfico de la keyword estrecha no se intercepte. Eso baja la competencia interna de ads.",
        "Haz cross-negatives a propósito por el árbol de clusters — no restando todo. En auto-estrategias y campañas de performance unificadas, la lógica de solape puede diferir — revisa la guía actual de Yandex.",
      ],
      lists: [
        {
          intro: "Cuándo ayudan las cross-negatives:",
          items: [
            "jerarquía clara head → mid → long-tail",
            "landings distintas para refinamientos",
            "necesitas control de copy por consulta",
          ],
        },
      ],
    },
    {
      title: "Búsqueda vs Display Network",
      level: 2,
      paras: [
        "En búsqueda, las negativas cortan formulaciones de consulta. En Display, las keywords moldean más los temas de emplazamiento: una negativa agresiva puede quitar inventario útil.",
        "Para redes, empieza con una lista suave y mira emplazamientos/condiciones de display — no copies las negativas de búsqueda uno a uno.",
      ],
      links: [
        {
          label: "Auditoría de campaña de ads",
          href: "/es/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Precio del clic en Yandex",
          href: "/es/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Las keywords negativas son una lista viva de tus informes — no un ritual de una sola vez. Las negativas universales son un borrador; las cross-negatives combaten la canibalización de keywords.",
        "Exporta search terms con regularidad y limpia: así Direct alimenta menos demanda no objetivo.",
      ],
    },
  ],
  closing: [
    "Arma negativas desde Wordstat y el informe de search terms, colócalas por nivel de campaña, revisa formas y cross-negatives entre clusters — y no confíes a ciegas en listas «universales» descargadas.",
  ],
  related: [
    "strategii-yandeks-direkt",
    "semanticheskoe-yadro",
    "audit-reklamnoy-kampanii",
    "tsena-klika-yandeks",
    "ab-testy-reklamy",
    "klyuchi-google-ads",
  ],
};
