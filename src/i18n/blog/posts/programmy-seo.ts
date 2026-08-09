import type { BlogPost } from "../../../data/blog";

/** EN overlay for programmy-seo — same structure as RU JSON. */
export const programmySeoEn: BlogPost = {
  slug: "programmy-seo",
  title: "SEO software and services: a stack by task",
  date: "2020-03-05",
  category: "SEO",
  cover: "/images/blog/programmy-seo/cover-en.webp",
  excerpt:
    "Which tools you need for SEO: keywords, analytics, copy checks, tech audit, links, and extensions — a stack by task without a cult of one all-in-one or instant ranking promises.",
  lead: [
    "SEO is a set of jobs, not one button. Each job has its tool class: building a keyword core, on-site behavior, copy checks, technical crawls, backlink slices, webmaster panels.",
    "Below: a practical stack by area. Service names and trial limits change — check current plans on their sites. Competitor analysis as a method is a separate article; here the focus is tooling. Software doesn’t replace strategy: rankings for the core build over months after prep.",
  ],
  faq: [
    {
      q: "Do I need a paid all-in-one from day one?",
      a: "No. At the start Wordstat, Webmaster, Metrika/GA, and a free crawler often suffice. Add paid tools when you hit limits.",
    },
    {
      q: "How does Key Collector differ from Wordstat?",
      a: "Wordstat is Yandex frequency data. Key Collector and peers are a workstation: export, grouping, negatives, batch work.",
    },
    {
      q: "Screaming Frog or an online audit?",
      a: "A desktop crawler is handy for your site and exports. Online tools — for quick slices and the cloud. Teams often use both.",
    },
    {
      q: "Is a uniqueness check “SEO”?",
      a: "It’s content hygiene. Uniqueness doesn’t guarantee page-one rankings, but copy-paste and stuffing hurt.",
    },
    {
      q: "Is Ahrefs alone enough?",
      a: "Strong on links and organic, but for an RU core you still need Wordstat/local tools and your own counters.",
    },
    {
      q: "Can Titlo be mentioned next to others?",
      a: "As one tool in the lineup — yes, neutrally. No featured promo and no “best of all” claims.",
    },
    {
      q: "Will software put me on page one in a week?",
      a: "No. Tools speed up data gathering. Prep — weeks; share of the core is typically planned for two to six months after work starts.",
    },
    {
      q: "What should I install in the browser?",
      a: "Extensions for meta, redirects, and quick page metrics. They don’t replace a full crawl and webmaster panels.",
    },
  ],
  sections: [
    {
      title: "How to build the stack",
      level: 2,
      paras: [
        "List project tasks first, then tools. Otherwise you buy subscriptions just in case. One service rarely covers keywords, logs, and content at once.",
        "Keep a table: task → tool → who pays → limits. Every quarter, cut unused licenses.",
      ],
      lists: [
        {
          intro: "Starter minimum:",
          items: [
            "Wordstat + a spreadsheet",
            "Yandex Webmaster / Google Search Console",
            "Metrika and/or GA4",
            "a crawler (Screaming Frog or peer)",
            "copy checks against the brief",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "Keywords and demand",
      level: 2,
      paras: [
        "Yandex Wordstat is the frequency base for RU. Google Keyword Planner and Trends — Google demand and seasonality. Key Collector / Keys.so / Serpstat / Semrush — batch collection, clustering, competition estimates.",
        "AnswerThePublic and search suggest feed FAQ and structure questions. Don’t chase “10,000 keys” generators: intent and landings first.",
      ],
      lists: [
        {
          intro: "Typical set:",
          items: [
            "Wordstat",
            "Key Collector or a cloud peer",
            "Serpstat / Keys.so / Semrush — by budget",
            "Trends + Planner for the Google track",
            "a cluster spreadsheet",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Google stats for sales",
          href: "/en/blog/statistika-google-prodazhi/",
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "One frequency source in the author brief — otherwise fights over different tool numbers.",
        },
      ],
    },
    {
      title: "Behavior analytics",
      level: 2,
      paras: [
        "Yandex Metrika and Google Analytics show what people do on the site: sources, goals, funnels. Without goals the software is useless — mark conversions first.",
        "Session Replay and recordings are for UX hypotheses, not daily spying. Build dashboards for KPIs — not every report at once.",
      ],
      lists: [
        {
          intro: "The link-up:",
          items: [
            "Metrika / GA4",
            "goals and events",
            "Webmaster / Search Console",
            "BI/dashboard when needed",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Metrika",
          href: "/en/blog/metrika-tseli/",
        },
        {
          label: "GA4 conversions",
          href: "/en/blog/google-analytics-tseli/",
        },
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
      ],
    },
    {
      title: "Copy and stuffing",
      level: 2,
      paras: [
        "Uniqueness checkers (Advego, eTXT and peers) and tools like Turgenev help catch copy-paste and over-optimization. Numbers are a brief guide — not a ranking law.",
        "The main tool is still a human read-through. Software won’t save empty or misleading copy.",
      ],
      lists: [
        {
          intro: "For the editorial team:",
          items: [
            "uniqueness in the chosen tool",
            "nausea/spamminess inside the brief corridor",
            "read aloud",
            "alignment with cluster intent",
          ],
        },
      ],
      links: [
        {
          label: "Text nausea",
          href: "/en/blog/toshnota-teksta/",
        },
        {
          label: "Spamminess",
          href: "/en/blog/zaspamlennost-teksta/",
        },
        {
          label: "Uniqueness check",
          href: "/en/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "Technical audit and crawl",
      level: 2,
      paras: [
        "Screaming Frog, Netpeak Spider and peers crawl the site: statuses, duplicate title/H1, broken links. Search Console and Yandex Webmaster — index and crawl errors through search’s eyes.",
        "Extensions like Redirect Path / Link Redirect Trace help spot-check chains. Server logs (when available) show how the bot really walks.",
      ],
      lists: [
        {
          intro: "Tech stack:",
          items: [
            "crawler",
            "Webmaster + GSC",
            "redirect checks",
            "log analysis when needed",
            "recrawl after fixes",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Links, visibility, extensions",
      level: 2,
      paras: [
        "Ahrefs, Serpstat, MegaIndex, Linkpad/PR-CY-class tools — backlink and visibility slices. Use them for profile audits and ideas, not mass spam. Rankings — Topvisor and peers on a schedule.",
        "Browser bars (RDS bar and peers) speed eyeballing SERPs, but easily breed a cult of “IQS on an icon.” Decide from tasks and full reports.",
      ],
      lists: [
        {
          intro: "External track:",
          items: [
            "a backlink tool",
            "rank tracking",
            "an extension for meta/redirects",
            "a visibility-change sheet",
          ],
        },
      ],
      links: [
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Subscriptions speed the work. Page-one share of the core is a months-long horizon after work starts — not a plugin-install effect. Prep is not rankings; typically two to six months after start.",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "screaming-frog",
    "tehnicheskiy-seo-audit",
    "analiz-konkurentov",
    "samostoyatelnoe-seo",
    "dashboard",
  ],
};

/** ES overlay for programmy-seo — same structure as RU JSON / EN. */
export const programmySeoEs: BlogPost = {
  slug: "programmy-seo",
  title: "Software y servicios SEO: un stack por tarea",
  date: "2020-03-05",
  category: "SEO",
  cover: "/images/blog/programmy-seo/cover.webp",
  excerpt:
    "Qué tools necesitas para SEO: keywords, analítica, checks de copy, auditoría técnica, enlaces y extensions — un stack por tarea sin culto a un all-in-one ni promesas de ranking instantáneo.",
  lead: [
    "El SEO es un set de trabajos, no un botón. Cada trabajo tiene su clase de tool: armar un núcleo de keywords, comportamiento on-site, checks de copy, crawls técnicos, cortes de backlinks, paneles de webmaster.",
    "Abajo: un stack práctico por área. Nombres de servicios y límites de trial cambian — revisa planes actuales en sus sitios. El análisis de competidores como método es un artículo aparte; aquí el foco es el tooling. El software no sustituye la estrategia: el ranking del núcleo se construye en meses tras la prep.",
  ],
  faq: [
    {
      q: "¿Necesito un all-in-one de pago desde el día uno?",
      a: "No. Al empezar suelen bastar Wordstat, Webmaster, Metrika/GA y un crawler gratis. Añade tools de pago cuando toques límites.",
    },
    {
      q: "¿En qué se diferencia Key Collector de Wordstat?",
      a: "Wordstat es dato de frecuencia de Yandex. Key Collector y pares son una estación de trabajo: export, agrupación, negativas, trabajo en lote.",
    },
    {
      q: "¿Screaming Frog o una auditoría online?",
      a: "Un crawler de escritorio es práctico para tu sitio y exports. Tools online — para cortes rápidos y la nube. Los equipos a menudo usan ambos.",
    },
    {
      q: "¿Un check de unicidad es «SEO»?",
      a: "Es higiene de contenido. La unicidad no garantiza ranking en primera página, pero el copy-paste y el stuffing duelen.",
    },
    {
      q: "¿Basta Ahrefs solo?",
      a: "Fuerte en enlaces y orgánico, pero para un núcleo RU sigues necesitando Wordstat/tools locales y tus propios contadores.",
    },
    {
      q: "¿Se puede mencionar Titlo junto a otros?",
      a: "Como una tool en la línea — sí, con neutralidad. Sin promo destacada ni claims de «el mejor de todos».",
    },
    {
      q: "¿El software me pone en primera página en una semana?",
      a: "No. Las tools aceleran la recolección de datos. Prep — semanas; la cuota del núcleo se planifica típicamente a dos a seis meses tras empezar el trabajo.",
    },
    {
      q: "¿Qué instalo en el navegador?",
      a: "Extensions para meta, redirects y métricas rápidas de página. No sustituyen un crawl completo ni los paneles de webmaster.",
    },
  ],
  sections: [
    {
      title: "Cómo armar el stack",
      level: 2,
      paras: [
        "Lista primero las tareas del proyecto, luego las tools. Si no, compras suscripciones por si acaso. Un servicio rara vez cubre keywords, logs y contenido a la vez.",
        "Mantén una tabla: tarea → tool → quién paga → límites. Cada trimestre, corta licencias sin uso.",
      ],
      lists: [
        {
          intro: "Mínimo de arranque:",
          items: [
            "Wordstat + una hoja",
            "Yandex Webmaster / Google Search Console",
            "Metrika y/o GA4",
            "un crawler (Screaming Frog o peer)",
            "checks de copy contra el brief",
          ],
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "Keywords y demanda",
      level: 2,
      paras: [
        "Yandex Wordstat es la base de frecuencia para RU. Google Keyword Planner y Trends — demanda Google y estacionalidad. Key Collector / Keys.so / Serpstat / Semrush — recolección en lote, clustering, estimaciones de competencia.",
        "AnswerThePublic y las sugerencias de búsqueda alimentan FAQ y preguntas de estructura. No persigas generadores de «10.000 keys»: primero intención y landings.",
      ],
      lists: [
        {
          intro: "Set típico:",
          items: [
            "Wordstat",
            "Key Collector o un peer en la nube",
            "Serpstat / Keys.so / Semrush — según presupuesto",
            "Trends + Planner para la pista Google",
            "una hoja de clusters",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Stats de Google para ventas",
          href: "/blog/statistika-google-prodazhi/",
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Una sola fuente de frecuencia en el brief del autor — si no, peleas por números distintos de cada tool.",
        },
      ],
    },
    {
      title: "Analítica de comportamiento",
      level: 2,
      paras: [
        "Yandex Metrika y Google Analytics muestran qué hace la gente en el sitio: fuentes, goals, funnels. Sin goals el software no sirve — marca conversiones primero.",
        "Session Replay y grabaciones son para hipótesis UX, no espionaje diario. Arma dashboards para KPIs — no todos los informes a la vez.",
      ],
      lists: [
        {
          intro: "El enlace:",
          items: [
            "Metrika / GA4",
            "goals y eventos",
            "Webmaster / Search Console",
            "BI/dashboard cuando haga falta",
          ],
        },
      ],
      links: [
        {
          label: "Goals en Metrika",
          href: "/es/blog/metrika-tseli/",
        },
        {
          label: "Conversiones GA4",
          href: "/es/blog/google-analytics-tseli/",
        },
        {
          label: "Dashboard",
          href: "/es/blog/dashboard/",
        },
      ],
    },
    {
      title: "Copy y stuffing",
      level: 2,
      paras: [
        "Checkers de unicidad (Advego, eTXT y pares) y tools como Turgenev ayudan a pillar copy-paste y sobre-optimización. Los números son una guía del brief — no una ley de ranking.",
        "La tool principal sigue siendo una lectura humana. El software no salva copy vacío o engañoso.",
      ],
      lists: [
        {
          intro: "Para el equipo editorial:",
          items: [
            "unicidad en la tool elegida",
            "náusea/spamminess dentro del corredor del brief",
            "leer en voz alta",
            "alineación con la intención del cluster",
          ],
        },
      ],
      links: [
        {
          label: "Náusea del texto",
          href: "/es/blog/toshnota-teksta/",
        },
        {
          label: "Spamminess",
          href: "/es/blog/zaspamlennost-teksta/",
        },
        {
          label: "Check de unicidad",
          href: "/es/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "Auditoría técnica y crawl",
      level: 2,
      paras: [
        "Screaming Frog, Netpeak Spider y pares rastrean el sitio: estados, title/H1 duplicados, enlaces rotos. Search Console y Yandex Webmaster — errores de índice y crawl a ojos de la búsqueda.",
        "Extensions como Redirect Path / Link Redirect Trace ayudan a chequear cadenas al momento. Logs del servidor (cuando hay) muestran cómo camina de verdad el bot.",
      ],
      lists: [
        {
          intro: "Stack técnico:",
          items: [
            "crawler",
            "Webmaster + GSC",
            "checks de redirect",
            "análisis de logs cuando haga falta",
            "recrawl tras arreglos",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Enlaces, visibilidad, extensions",
      level: 2,
      paras: [
        "Ahrefs, Serpstat, MegaIndex, tools tipo Linkpad/PR-CY — cortes de backlinks y visibilidad. Úsalos para auditorías de perfil e ideas, no spam masivo. Rankings — Topvisor y pares con calendario.",
        "Barras del navegador (RDS bar y pares) aceleran el ojazo a SERPs, pero fácilmente crían un culto al «IQS en un icono». Decide desde tareas e informes completos.",
      ],
      lists: [
        {
          intro: "Pista externa:",
          items: [
            "una tool de backlinks",
            "seguimiento de ranks",
            "una extension para meta/redirects",
            "una hoja de cambios de visibilidad",
          ],
        },
      ],
      links: [
        {
          label: "Perfil de backlinks",
          href: "/es/blog/ssylochnyy-profil/",
        },
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Las suscripciones aceleran el trabajo. La cuota del núcleo en primera página es un horizonte de meses tras empezar el trabajo — no un efecto de instalar un plugin. Prep no es ranking; típicamente dos a seis meses tras el arranque.",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "screaming-frog",
    "tehnicheskiy-seo-audit",
    "analiz-konkurentov",
    "samostoyatelnoe-seo",
    "dashboard",
  ],
};
