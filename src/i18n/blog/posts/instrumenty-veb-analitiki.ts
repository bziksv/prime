import type { BlogPost } from "../../../data/blog";

/** EN overlay for instrumenty-veb-analitiki — same structure as RU JSON. */
export const instrumentyVebAnalitikiEn: BlogPost = {
  slug: "instrumenty-veb-analitiki",
  title: "Web analytics tools: tags, logs, and dashboards",
  date: "2018-11-16",
  category: "SEO",
  cover: "/images/blog/instrumenty-veb-analitiki/cover-en.webp",
  excerpt:
    "What analytics systems give you, how JS tags differ from log analyzers, why Metrica and Google Analytics matter, and how not to drown in reports without goals.",
  lead: [
    "Web analytics is collecting and reading data on visitors and how the site behaves — so you can decide where budget goes, what to fix on pages, and which channels pay off.",
    "Below: what systems report, how tags differ from log analyzers, and how to start with Yandex Metrica and Google Analytics. The analyst role and dashboards live in related pieces; here the focus is tools and data.",
  ],
  faq: [
    {
      q: "Tag or log analyzer?",
      a: "A JS tag sees in-browser behavior and suits marketing. Server logs are stronger on tech and bots. In practice you often need both.",
    },
    {
      q: "Is Metrica alone enough?",
      a: "For many RU projects — yes as a base. GA4 helps in parallel if you watch Google traffic and that report ecosystem.",
    },
    {
      q: "What should you set up first?",
      a: "Code on every URL that matters, goals or events, filter your own IPs, UTMs on ads. Without goals, pretty charts do not decide anything.",
    },
    {
      q: "Does analytics replace an SEO audit?",
      a: "No. It shows symptoms — bounces, sources, load speed as users feel it. Tech and indexing still need a crawler and Webmaster / Search Console.",
    },
    {
      q: "Does everyone need session replay?",
      a: "On problem URLs, yes — selectively. Watching every session — no. Numbers first, then a sample of recordings.",
    },
    {
      q: "Why do Metrica and GA numbers diverge?",
      a: "Different session models, bots, cookie consent, and definitions. Compare trends inside one system.",
    },
    {
      q: "When do you need BI / a dashboard?",
      a: "When sources multiply and reports are assembled by hand every week. Start with 5–7 KPIs, then complicate.",
    },
    {
      q: "Will analytics put you on page one?",
      a: "Not directly. It speeds decisions. Rankings come from work on the site; growing a query core is typically planned over months after SEO starts.",
    },
  ],
  sections: [
    {
      title: "What web analytics is",
      level: 2,
      paras: [
        "It is a loop: data → meaning → action. You watch audience, sources, paths, conversions, and tech signals (speed, errors) to change ads, content, and UX.",
        "Without regular review, analytics becomes “we installed a tag and forgot.” Agree business goals before you wire the reports.",
      ],
      lists: [
        {
          intro: "What it is for:",
          items: [
            "channel and CPA evaluation",
            "finding weak landings",
            "checking hypotheses and releases",
            "reporting for the team and client",
          ],
        },
      ],
      links: [
        {
          label: "Web analyst as a role",
          href: "/en/blog/veb-analitik/",
        },
      ],
    },
    {
      title: "What systems report",
      level: 2,
      paras: [
        "Base layer: visits and users, sources and queries (where available), devices, geo, pageviews, time, events and goals. Then funnels, ecommerce, cohorts.",
        "Tech slice: load speed as users feel it, failures, sometimes overlap with server data. Marketing slice: which ads and landings bring leads.",
      ],
      lists: [
        {
          intro: "Minimum weekly review:",
          items: [
            "traffic by channel",
            "conversions and CR",
            "top landings and bounces",
            "anomalies after releases or promos",
          ],
        },
      ],
    },
    {
      title: "Tags and log analyzers",
      level: 2,
      paras: [
        "A tag is a script in pages: handy reports, segments, goals, session replay. Downside: it depends on JS, blockers, and cookie consent.",
        "A log analyzer reads server journals: full request flow, bots, response statuses, load. Downside: weaker on human in-browser behavior. For SEO tech, logs are often essential.",
      ],
      lists: [
        {
          intro: "When to use which:",
          items: [
            "tag — marketing and CRO",
            "logs — bots, crawling, 5xx",
            "both — disputed traffic spikes",
            "do not confuse bots with “organic growth”",
          ],
        },
      ],
      links: [
        {
          label: "Suspicious Google traffic",
          href: "/en/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "Yandex Metrica and Google Analytics",
      level: 2,
      paras: [
        "In RU, teams often start with Metrica: goals, segments, session replay, easy link to Yandex Direct. Google Analytics (GA4) is the Google ecosystem standard and useful for cross-project comparisons.",
        "Install the code correctly, set key events or goals, mark your own visits. Then UTMs and end-to-end logic with CRM if you count sales.",
      ],
      lists: [
        {
          intro: "Day-one start:",
          items: [
            "tag on site templates",
            "2–5 goals (lead, call, purchase)",
            "real-time check",
            "team access with the right roles",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
        {
          label: "Goals in Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "How not to drown in reports",
      level: 2,
      paras: [
        "Pick one main goal for the period and 5–7 metrics. Everything else — on demand. Put KPIs on a simple dashboard so debates are about numbers, not screenshots.",
        "Tools speed decisions but do not replace site and ad work. Growing organic visibility for a query core is a separate horizon — typically months after SEO work starts, following prep.",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "daily — anomalies and ads",
            "weekly — channels and goals",
            "monthly — trends and hypotheses",
            "after release — traffic and error smoke checks",
          ],
        },
      ],
      notes: [
        {
          title: "SEO note",
          kind: "tip",
          text: "Analytics tells you what to fix and where budget leaks. It is not a shortcut to page one: after prep, ranking work for a core is still planned over roughly 2–6 months.",
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "SEO software",
          href: "/en/blog/programmy-seo/",
        },
      ],
    },
  ],
  related: [
    "veb-analitik",
    "dashboard",
    "google-analytics",
    "google-analytics-tseli",
    "metrika-tseli",
    "programmy-seo",
  ],
};

/** ES overlay for instrumenty-veb-analitiki — same structure as RU JSON / EN. */
export const instrumentyVebAnalitikiEs: BlogPost = {
  slug: "instrumenty-veb-analitiki",
  title: "Herramientas de web analytics: tags, logs y dashboards",
  date: "2018-11-16",
  category: "SEO",
  cover: "/images/blog/instrumenty-veb-analitiki/cover-es.webp",
  excerpt:
    "Qué te dan los sistemas de analytics, en qué se diferencian los tags JS de los analizadores de logs, por qué importan Metrica y Google Analytics, y cómo no ahogarte en informes sin goals.",
  lead: [
    "La web analytics es recoger y leer datos sobre visitantes y cómo se comporta el sitio — para decidir a dónde va el presupuesto, qué arreglar en las páginas y qué canales se pagan.",
    "Abajo: qué informan los sistemas, en qué se diferencian tags y analizadores de logs, y cómo empezar con Yandex Metrica y Google Analytics. El rol de analista y los dashboards viven en piezas relacionadas; aquí el foco son herramientas y datos.",
  ],
  faq: [
    {
      q: "¿Tag o analizador de logs?",
      a: "Un tag JS ve comportamiento en el navegador y encaja con marketing. Los logs del servidor son más fuertes en tech y bots. En la práctica a menudo necesitas ambos.",
    },
    {
      q: "¿Basta Metrica sola?",
      a: "Para muchos proyectos RU — sí como base. GA4 ayuda en paralelo si miras tráfico de Google y ese ecosistema de informes.",
    },
    {
      q: "¿Qué configurar primero?",
      a: "Código en cada URL que importe, goals o eventos, filtrar tus propias IPs, UTMs en ads. Sin goals, los gráficos bonitos no deciden nada.",
    },
    {
      q: "¿La analytics sustituye un SEO audit?",
      a: "No. Muestra síntomas — bounces, fuentes, velocidad de carga como la siente el usuario. Tech e indexación siguen necesitando un crawler y Webmaster / Search Console.",
    },
    {
      q: "¿Todo el mundo necesita session replay?",
      a: "En URLs problemáticas, sí — de forma selectiva. Mirar cada sesión — no. Primero números, luego una muestra de grabaciones.",
    },
    {
      q: "¿Por qué divergen los números de Metrica y GA?",
      a: "Modelos de sesión distintos, bots, consentimiento de cookies y definiciones. Compara tendencias dentro de un mismo sistema.",
    },
    {
      q: "¿Cuándo hace falta BI / un dashboard?",
      a: "Cuando se multiplican las fuentes y los informes se arman a mano cada semana. Empieza con 5–7 KPIs, luego complica.",
    },
    {
      q: "¿La analytics te pone en primera página?",
      a: "No de forma directa. Acelera decisiones. Los rankings vienen del trabajo en el sitio; crecer un núcleo de consultas suele planificarse a lo largo de meses tras arrancar el SEO.",
    },
  ],
  sections: [
    {
      title: "Qué es la web analytics",
      level: 2,
      paras: [
        "Es un bucle: datos → sentido → acción. Miras audiencia, fuentes, caminos, conversiones y señales tech (velocidad, errores) para cambiar ads, contenido y UX.",
        "Sin revisión regular, la analytics se vuelve «instalamos un tag y nos olvidamos». Acuerda goals de negocio antes de cablear los informes.",
      ],
      lists: [
        {
          intro: "Para qué sirve:",
          items: [
            "evaluación de canal y CPA",
            "encontrar landings flojas",
            "comprobar hipótesis y releases",
            "reporting para el equipo y el cliente",
          ],
        },
      ],
      links: [
        {
          label: "Web analyst como rol",
          href: "/es/blog/veb-analitik/",
        },
      ],
    },
    {
      title: "Qué informan los sistemas",
      level: 2,
      paras: [
        "Capa base: visitas y usuarios, fuentes y consultas (donde estén), dispositivos, geo, pageviews, tiempo, eventos y goals. Luego funnels, ecommerce, cohorts.",
        "Corte tech: velocidad de carga como la siente el usuario, fallos, a veces solape con datos del servidor. Corte marketing: qué ads y landings traen leads.",
      ],
      lists: [
        {
          intro: "Mínimo de revisión semanal:",
          items: [
            "tráfico por canal",
            "conversiones y CR",
            "principales landings y bounces",
            "anomalías tras releases o promos",
          ],
        },
      ],
    },
    {
      title: "Tags y analizadores de logs",
      level: 2,
      paras: [
        "Un tag es un script en las páginas: informes cómodos, segmentos, goals, session replay. Contra: depende de JS, bloqueadores y consentimiento de cookies.",
        "Un analizador de logs lee journals del servidor: flujo completo de requests, bots, estados de respuesta, carga. Contra: más débil en comportamiento humano en el navegador. Para SEO tech, los logs a menudo son esenciales.",
      ],
      lists: [
        {
          intro: "Cuándo usar cuál:",
          items: [
            "tag — marketing y CRO",
            "logs — bots, crawling, 5xx",
            "ambos — picos de tráfico en disputa",
            "no confundas bots con «crecimiento orgánico»",
          ],
        },
      ],
      links: [
        {
          label: "Tráfico sospechoso de Google",
          href: "/es/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "Yandex Metrica y Google Analytics",
      level: 2,
      paras: [
        "En RU, los equipos a menudo empiezan con Metrica: goals, segmentos, session replay, enlace fácil a Yandex Direct. Google Analytics (GA4) es el estándar del ecosistema Google y útil para comparaciones entre proyectos.",
        "Instala el código bien, configura key events o goals, marca tus propias visitas. Luego UTMs y lógica end-to-end con CRM si cuentas ventas.",
      ],
      lists: [
        {
          intro: "Arranque del día uno:",
          items: [
            "tag en plantillas del sitio",
            "2–5 goals (lead, llamada, compra)",
            "comprobación en realtime",
            "acceso del equipo con los roles correctos",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics",
          href: "/es/blog/google-analytics/",
        },
        {
          label: "Goals en Google Analytics",
          href: "/es/blog/google-analytics-tseli/",
        },
        {
          label: "Goals en Metrica",
          href: "/es/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Cómo no ahogarte en informes",
      level: 2,
      paras: [
        "Elige un goal principal del periodo y 5–7 métricas. Todo lo demás — bajo demanda. Pon KPIs en un dashboard simple para que el debate sea sobre números, no capturas.",
        "Las herramientas aceleran decisiones pero no sustituyen el trabajo en sitio y ads. Crecer la visibilidad orgánica de un núcleo de consultas es un horizonte aparte — normalmente meses tras arrancar el SEO, después de la prep.",
      ],
      lists: [
        {
          intro: "Ritmo:",
          items: [
            "diario — anomalías y ads",
            "semanal — canales y goals",
            "mensual — tendencias e hipótesis",
            "tras release — smoke checks de tráfico y errores",
          ],
        },
      ],
      notes: [
        {
          title: "Nota SEO",
          kind: "tip",
          text: "La analytics te dice qué arreglar y dónde se fuga el presupuesto. No es un atajo a primera página: tras la prep, el trabajo de rankings de un núcleo sigue planificándose a unos 2–6 meses.",
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/es/blog/dashboard/",
        },
        {
          label: "Software SEO",
          href: "/es/blog/programmy-seo/",
        },
      ],
    },
  ],
  related: [
    "veb-analitik",
    "dashboard",
    "google-analytics",
    "google-analytics-tseli",
    "metrika-tseli",
    "programmy-seo",
  ],
};
