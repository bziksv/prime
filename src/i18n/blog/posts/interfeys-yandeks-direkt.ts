import type { BlogPost } from "../../../data/blog";

/** EN overlay for interfeys-yandeks-direkt — same structure as RU JSON. */
export const interfeysYandeksDirektEn: BlogPost = {
  slug: "interfeys-yandeks-direkt",
  title: "Yandex Direct interface: from the 2018 beta to stats-first work",
  date: "2018-08-08",
  category: "Paid search",
  cover: "/images/blog/interfeys-yandeks-direkt/cover-en.webp",
  excerpt:
    "What the 2018 Direct redesign actually changed — and what still matters: tables, filters, bulk edits, report-driven decisions — without a pitch to “join the beta.”",
  lead: [
    "In August 2018 Yandex rolled out a beta of a rebuilt Direct UI: tables, filters, speed, and decisions from numbers instead of scattered screens. The old interface was later shut off — there is no “enter the beta” toggle left.",
    "What follows is the idea behind that redesign and how to use today’s account the same way. Menu labels and wizard names moved again; trust section purpose and Direct Help, not 2018 screenshots.",
  ],
  faq: [
    {
      q: "Is the new Direct beta still running?",
      a: "Not as the 2018 open signup. You’re in the current UI; the old/new switch from that era is gone.",
    },
    {
      q: "Why bother with a redesign from 2018?",
      a: "So old guides don’t send you on a click scavenger hunt — and so you keep the real habit: fix campaigns from reports, filters, and bulk actions.",
    },
    {
      q: "Do I still need Commander?",
      a: "For big structural edits, editors and exports still help — check what Yandex ships now. Day-to-day tweaks stay in the web UI.",
    },
    {
      q: "Is the Report Wizard a must?",
      a: "If you need slices beyond the default columns — yes. Without reports you’re guessing.",
    },
    {
      q: "Where should a beginner start?",
      a: "Campaign structure → keywords and ads → analytics goals → a weekly spend-and-conversion report.",
    },
  ],
  sections: [
    {
      title: "What the 2018 beta sold",
      level: 2,
      paras: [
        "Yandex pitched unified formats on one platform and a UI where you decide from numbers: performance on one screen, filters, bulk ops across corners of the account.",
        "Access came in waves (a teaser in the cabinet). Then the new UI became default and the old one was phased out. “Hurry into the beta” lines from old posts are dead.",
      ],
      notes: [
        {
          title: "Historical note",
          text: "Don’t treat 2018 “My campaigns” screenshots and popup editors as a how-to. Check current names in Help.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Decide from the table — the habit that stuck",
      level: 2,
      paras: [
        "The redesign’s core: fewer vanity screens, more campaign / group / keyword tables with metrics, fast filters, and a path into reports. Easier to kill losing slices and scale what works.",
        "In today’s Direct keep spend, clicks, conversions, and CPA or revenue (if goals exist) in view. Set columns for this week’s job — not every metric at once.",
      ],
      lists: [
        {
          intro: "Weekly table checklist:",
          items: [
            "campaigns spending with zero conversions",
            "keywords with high CPC and no leads",
            "ads with a suspiciously low CTR",
            "device and placement cut (search vs networks)",
          ],
        },
      ],
      links: [
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Filters, hierarchy, and bulk edits",
      level: 2,
      paras: [
        "Filtering the campaign list and drilling down (campaign → group → keywords/ads) saves hours. Bulk pause, bid, and copy edits are normal once you have dozens of groups.",
        "Speed isn’t quality: mass-stop obvious junk; run creative tests on purpose.",
      ],
      links: [
        {
          label: "Ad A/B tests",
          href: "/en/blog/ab-testy-reklamy/",
        },
      ],
    },
    {
      title: "Keywords, Wordstat, and negatives in one place",
      level: 2,
      paras: [
        "The beta pushed keyword work into the same flow: bids, ad edits, find/replace, and Wordstat-backed expansion. That still holds — semantics and negatives sit next to performance, not in a separate world.",
        "Export search terms regularly, cut with negatives, grow the phrases that convert. Universal negative lists are a draft, not a finished set.",
      ],
      links: [
        {
          label: "Negatives in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Learning today’s account",
      level: 2,
      paras: [
        "Skip guides that say “click the link at the bottom for the old UI.” Open Help and pin four or five screens: campaigns, ads/keywords, Report Wizard, libraries (negatives, audiences), goal settings.",
        "Beginners learn faster with a small test budget and one funnel than by touring every feature at once. File support tickets for real bugs — not nostalgia for 2017 chrome.",
      ],
      lists: [
        {
          intro: "Team rollout order:",
          items: [
            "one shared report-column standard",
            "an owner for weekly cleanup",
            "documented UTMs and goals",
            "no gut-feel edits without a stats cut",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "The 2018 “new Direct” beta is history. Deciding from the table and the report is still the right habit.",
        "Ignore screenshot click-paths; tune the current UI for CPA and lead quality.",
      ],
    },
  ],
  closing: [
    "Open the campaign list, set columns around conversions, and once a week filter out losing keywords and ads — that is the redesign’s logic, without hunting a beta that no longer exists.",
  ],
  related: [
    "strategii-yandeks-direkt",
    "audit-reklamnoy-kampanii",
    "minus-slova-direkt",
    "metriki-reklamy",
    "ab-testy-reklamy",
    "stavki-direkt",
  ],
};

/** ES overlay for interfeys-yandeks-direkt — same structure as RU JSON / EN. */
export const interfeysYandeksDirektEs: BlogPost = {
  slug: "interfeys-yandeks-direkt",
  title: "Interfaz de Yandex Direct: de la beta de 2018 al trabajo guiado por stats",
  date: "2018-08-08",
  category: "Paid search",
  cover: "/images/blog/interfeys-yandeks-direkt/cover-es.webp",
  excerpt:
    "Qué cambió de verdad el rediseño de Direct de 2018 — y qué sigue importando: tablas, filtros, ediciones masivas, decisiones por informes — sin el pitch de «entra a la beta».",
  lead: [
    "En agosto de 2018 Yandex lanzó una beta de una UI de Direct reconstruida: tablas, filtros, velocidad y decisiones desde números en vez de pantallas dispersas. La interfaz vieja se apagó después — ya no queda un toggle de «entrar a la beta».",
    "Lo que sigue es la idea detrás de ese rediseño y cómo usar la cuenta de hoy del mismo modo. Las etiquetas del menú y los nombres del wizard se movieron otra vez; confía en el propósito de la sección y en Direct Help, no en screenshots de 2018.",
  ],
  faq: [
    {
      q: "¿Sigue corriendo la beta del nuevo Direct?",
      a: "No como el signup abierto de 2018. Estás en la UI actual; el switch viejo/nuevo de esa era ya no existe.",
    },
    {
      q: "¿Por qué molestarse con un rediseño de 2018?",
      a: "Para que las guías viejas no te manden a una cacería de clics — y para que mantengas el hábito real: arreglar campañas desde informes, filtros y acciones masivas.",
    },
    {
      q: "¿Sigo necesitando Commander?",
      a: "Para ediciones estructurales grandes, editores y exports siguen ayudando — mira qué envía Yandex ahora. Los tweaks del día a día se quedan en la UI web.",
    },
    {
      q: "¿El Report Wizard es obligatorio?",
      a: "Si necesitas cortes más allá de las columnas por defecto — sí. Sin informes estás adivinando.",
    },
    {
      q: "¿Por dónde debería empezar un principiante?",
      a: "Estructura de campaña → keywords y anuncios → metas de analytics → un informe semanal de gasto y conversiones.",
    },
  ],
  sections: [
    {
      title: "Qué vendía la beta de 2018",
      level: 2,
      paras: [
        "Yandex vendió formatos unificados en una plataforma y una UI donde decides desde números: rendimiento en una pantalla, filtros, ops masivas por rincones de la cuenta.",
        "El acceso llegó por oleadas (un teaser en el cabinet). Luego la UI nueva pasó a ser default y la vieja se fue retirando. Las líneas de «corre a la beta» de posts viejos están muertas.",
      ],
      notes: [
        {
          title: "Nota histórica",
          text: "No trates screenshots de «Mis campañas» de 2018 y editores popup como un how-to. Revisa los nombres actuales en Help.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Estrategias de Yandex Direct",
          href: "/es/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Decide desde la tabla — el hábito que se quedó",
      level: 2,
      paras: [
        "El núcleo del rediseño: menos pantallas de vanidad, más tablas de campaña / grupo / keyword con métricas, filtros rápidos y un camino a los informes. Más fácil matar slices perdedores y escalar lo que funciona.",
        "En el Direct de hoy mantén a la vista gasto, clics, conversiones y CPA o ingresos (si hay metas). Configura columnas para el trabajo de esta semana — no todas las métricas a la vez.",
      ],
      lists: [
        {
          intro: "Checklist semanal de la tabla:",
          items: [
            "campañas que gastan con cero conversiones",
            "keywords con CPC alto y sin leads",
            "anuncios con un CTR sospechosamente bajo",
            "corte por dispositivo y placement (búsqueda vs redes)",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría de campaña publicitaria",
          href: "/es/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Métricas de publicidad",
          href: "/es/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Filtros, jerarquía y ediciones masivas",
      level: 2,
      paras: [
        "Filtrar la lista de campañas y bajar (campaña → grupo → keywords/anuncios) ahorra horas. Pausar, pujar y copiar en masa es normal cuando tienes docenas de grupos.",
        "Velocidad no es calidad: para basura obvia en masa; corre tests de creativo a propósito.",
      ],
      links: [
        {
          label: "Tests A/B de anuncios",
          href: "/es/blog/ab-testy-reklamy/",
        },
      ],
    },
    {
      title: "Keywords, Wordstat y negativos en un solo lugar",
      level: 2,
      paras: [
        "La beta empujó el trabajo de keywords al mismo flujo: pujas, ediciones de anuncios, find/replace y expansión con Wordstat. Eso sigue: semántica y negativos viven junto al rendimiento, no en un mundo aparte.",
        "Exporta search terms con regularidad, corta con negativos, crece las frases que convierten. Las listas universales de negativos son un borrador, no un set terminado.",
      ],
      links: [
        {
          label: "Negativos en Direct",
          href: "/es/blog/minus-slova-direkt/",
        },
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Aprender la cuenta de hoy",
      level: 2,
      paras: [
        "Sáltate guías que digan «haz clic en el enlace de abajo para la UI vieja». Abre Help y fija cuatro o cinco pantallas: campañas, anuncios/keywords, Report Wizard, bibliotecas (negativos, audiencias), settings de metas.",
        "Los principiantes aprenden más rápido con un presupuesto de test pequeño y un embudo que recorriendo cada feature a la vez. Abre tickets de soporte por bugs reales — no por nostalgia del chrome de 2017.",
      ],
      lists: [
        {
          intro: "Orden de rollout en el equipo:",
          items: [
            "un estándar compartido de columnas de informe",
            "un dueño de la limpieza semanal",
            "UTMs y metas documentados",
            "nada de ediciones a ojo sin un corte de stats",
          ],
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "La beta del «nuevo Direct» de 2018 es historia. Decidir desde la tabla y el informe sigue siendo el hábito correcto.",
        "Ignora click-paths de screenshots; afina la UI actual para CPA y calidad de leads.",
      ],
    },
  ],
  closing: [
    "Abre la lista de campañas, configura columnas alrededor de conversiones y una vez a la semana filtra keywords y anuncios perdedores — esa es la lógica del rediseño, sin cazar una beta que ya no existe.",
  ],
  related: [
    "strategii-yandeks-direkt",
    "audit-reklamnoy-kampanii",
    "minus-slova-direkt",
    "metriki-reklamy",
    "ab-testy-reklamy",
    "stavki-direkt",
  ],
};
