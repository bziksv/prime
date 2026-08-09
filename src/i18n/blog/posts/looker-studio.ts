import type { BlogPost } from "../../../data/blog";

/** EN overlay for looker-studio — same structure as RU JSON. */
export const lookerStudioEn: BlogPost = {
  slug: "looker-studio",
  title: "Looker Studio (Google Data Studio): reports and full-funnel analytics",
  date: "2020-05-13",
  category: "Analytics",
  cover: "/images/blog/looker-studio/cover-en.webp",
  excerpt:
    "What Looker Studio (formerly Google Data Studio) is: how to build dashboards, connect sources, and how visualization differs from true full-funnel analytics with CRM.",
  lead: [
    "Looker Studio (before 2022 — Google Data Studio) is a free report builder: tables, charts, and filters over data from analytics, spreadsheets, and ad accounts.",
    "Below: how the product works, how to assemble a marketing dashboard, and where the line is — Data Studio alone doesn’t “switch on” full-funnel analytics without linking spend, the site, and CRM. UI and connectors change — lean on the logic, not 2020 screenshots.",
  ],
  faq: [
    {
      q: "Are Data Studio and Looker Studio the same?",
      a: "Yes: the product was renamed. Older Data Studio articles describe the same class of tool.",
    },
    {
      q: "Does it replace Google Analytics?",
      a: "No. Analytics (GA4) and Yandex Metrica collect events. Looker Studio draws reports from already collected data and other sources.",
    },
    {
      q: "Can I do full-funnel analytics only in Looker Studio?",
      a: "Visualization — yes. An end-to-end “ads → lead → payment” picture — only if sources already have spend, leads, and revenue with shared keys (client id, phone, order id).",
    },
    {
      q: "How does it differ from an Excel dashboard?",
      a: "Live connectors, link sharing, team filters. Excel is still handy for one-off summaries and complex hand-built models.",
    },
    {
      q: "Do I need BigQuery?",
      a: "Not always. For a start, GA4/sheets/ad connectors are enough. BigQuery and ETL help with large volumes, unsampled history, and complex joins.",
    },
    {
      q: "Why don’t Looker Studio numbers match other reports?",
      a: "Different attribution models, sampling, time zones, duplicate UTMs, leads off-site (chat, phone). Cross-check with CRM and raw ad accounts.",
    },
    {
      q: "Is the service available in Russia?",
      a: "Access to Google products depends on account, policy, and infrastructure. Plan reporting around the accounts the team actually uses; if needed, mirror critical KPIs in Metrica/sheets.",
    },
  ],
  sections: [
    {
      title: "What Looker Studio can do",
      level: 2,
      paras: [
        "The product connects to sources via connectors, builds visuals, and shares the report with view or edit rights. Data refreshes on the source schedule — the report feels more like a live dashboard than a one-off PDF.",
        "It’s a presentation layer. It doesn’t replace correct goal tagging, UTMs, and CRM tracking. Don’t confuse Looker Studio with Urchin / early Analytics history: different products.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "traffic and conversion summary for a client",
            "channel comparison on one screen",
            "monitoring 5–10 KPIs without weekly exports",
            "simple blended reports from several sources",
          ],
        },
      ],
      links: [
        {
          label: "Business dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
      ],
    },
    {
      title: "End-to-end analytics: the report’s role",
      level: 2,
      paras: [
        "End-to-end analytics answers which channel and campaign led to a lead and money — not only a click. That needs user/deal IDs and joining ad spend with CRM.",
        "Looker Studio shows the join result. If sources lack payments and deal statuses, a pretty chart stays “site” analytics, not end-to-end.",
      ],
      lists: [
        {
          intro: "Minimum full-funnel setup:",
          items: [
            "spend from ad accounts",
            "site behavior and goals (Metrica / GA4)",
            "leads and payments from CRM",
            "consistent UTMs and attribution rules",
            "a dashboard where those fields already align",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Looker Studio alone won’t fix broken UTMs or messenger-only leads with no tracking. Data and a metric dictionary first — then visualization.",
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Google Analytics",
          href: "/en/blog/google-analytics/",
        },
      ],
    },
    {
      title: "How to build the first report",
      level: 2,
      paras: [
        "You need a Google account and source access. Create a report → connect a source (e.g. GA4 or Google Sheets) → add 3–5 visuals for one goal: not “every metric in the world,” but business questions.",
        "Menu labels change. Orient on: data source, report page, chart/table, metric and dimension, date filter, email access.",
      ],
      lists: [
        {
          intro: "Start order:",
          items: [
            "lock 5–7 KPIs",
            "connect one reliable source",
            "build an overview page",
            "add date and channel filters",
            "give the team view-only access",
            "reconcile numbers with the source account",
          ],
        },
      ],
    },
    {
      title: "Sources, blending, and “heavy” end-to-end",
      level: 2,
      paras: [
        "For a simple marketing report, analytics, ads, and sheet connectors often suffice. Blending helps align fields on a shared key — be careful with grain and duplicates.",
        "When data is large or you need unsampled history and complex joins with CRM/call tracking, teams usually move raw data to a warehouse (e.g. BigQuery) or an ETL pipeline and keep Looker Studio as the storefront. A specific ETL vendor isn’t required — a controlled pipeline is.",
      ],
      lists: [
        {
          intro: "When to complicate the architecture:",
          items: [
            "budget and many channels",
            "a long sales cycle",
            "you need payments and margin from CRM",
            "manual exports take hours every week",
          ],
        },
      ],
    },
    {
      title: "Visuals and filters",
      level: 2,
      paras: [
        "KPI cards, daily trends, a campaign table, a channel pie, a period filter — the basic set. Don’t overload the first page: a manager should see “good / bad / where to look” in 30 seconds.",
        "Interactive filters (channel, region, device) make the report a work tool, not a picture. Label axes and lock definitions: what counts as a lead and a conversion.",
      ],
      lists: [
        {
          intro: "Common design mistakes:",
          items: [
            "ten charts with no question",
            "different definitions of one metric across pages",
            "default period “all time”",
            "edit access for the whole company",
          ],
        },
      ],
    },
    {
      title: "Access, data quality, and alternatives",
      level: 2,
      paras: [
        "Sharing is by email with viewer/editor roles or by link under your security policy. For clients, view-only and a pre-agreed KPI set are more common.",
        "Reconcile the report with raw accounts and CRM: gaps from attribution, bots, cookie consent, and offline leads are normal — but must be explainable. Don’t rely on one visualizer alone: Metrica, ad accounts, and a deals “source of truth” sheet protect decisions.",
      ],
      lists: [
        {
          intro: "Before trusting the dashboard:",
          items: [
            "do spend totals match ad accounts",
            "do payment counts match CRM",
            "is the time zone consistent",
            "are there duplicate UTMs and tags",
          ],
        },
      ],
      links: [
        {
          label: "Excel and Google Sheets",
          href: "/en/blog/excel-google-tablitsy/",
        },
      ],
    },
  ],
  closing: [
    "Looker Studio works well as a storefront for marketing data. End-to-end analytics starts by joining ads, the site, and CRM; the report only makes that join readable for the team and the client.",
  ],
};

/** ES overlay for looker-studio — same structure as RU JSON / EN. */
export const lookerStudioEs: BlogPost = {
  slug: "looker-studio",
  title: "Looker Studio (Google Data Studio): informes y analytics end-to-end",
  date: "2020-05-13",
  category: "Analytics",
  cover: "/images/blog/looker-studio/cover.webp",
  excerpt:
    "Qué es Looker Studio (antes Google Data Studio): cómo armar dashboards, conectar fuentes y en qué se diferencia la visualización de una verdadera analytics end-to-end con CRM.",
  lead: [
    "Looker Studio (antes de 2022 — Google Data Studio) es un constructor gratuito de informes: tablas, gráficos y filtros sobre datos de analytics, hojas y cuentas de ads.",
    "Abajo: cómo funciona el producto, cómo armar un dashboard de marketing y dónde está la línea — Data Studio solo no «enciende» analytics end-to-end sin unir gasto, sitio y CRM. UI y connectors cambian — apóyate en la lógica, no en capturas de 2020.",
  ],
  faq: [
    {
      q: "¿Data Studio y Looker Studio son lo mismo?",
      a: "Sí: el producto se renombró. Los artículos viejos de Data Studio describen la misma clase de herramienta.",
    },
    {
      q: "¿Sustituye a Google Analytics?",
      a: "No. Analytics (GA4) y Yandex Metrica recogen eventos. Looker Studio dibuja informes desde datos ya recogidos y otras fuentes.",
    },
    {
      q: "¿Puedo hacer analytics end-to-end solo en Looker Studio?",
      a: "Visualización — sí. Una foto completa «ads → lead → pago» — solo si las fuentes ya tienen gasto, leads e ingresos con claves compartidas (client id, teléfono, order id).",
    },
    {
      q: "¿En qué se diferencia de un dashboard en Excel?",
      a: "Connectors en vivo, compartir por enlace, filtros de equipo. Excel sigue siendo cómodo para resúmenes puntuales y modelos hechos a mano complejos.",
    },
    {
      q: "¿Hace falta BigQuery?",
      a: "No siempre. Para empezar bastan connectors de GA4/hojas/ads. BigQuery y ETL ayudan con volúmenes grandes, historial sin sampling y joins complejos.",
    },
    {
      q: "¿Por qué los números de Looker Studio no coinciden con otros informes?",
      a: "Modelos de atribución distintos, sampling, zonas horarias, UTMs duplicadas, leads fuera del sitio (chat, teléfono). Cruza con CRM y cuentas de ads en bruto.",
    },
    {
      q: "¿El servicio está disponible en Rusia?",
      a: "El acceso a productos Google depende de la cuenta, la política y la infraestructura. Planifica reporting alrededor de las cuentas que el equipo usa de verdad; si hace falta, espeja KPIs críticos en Metrica/hojas.",
    },
  ],
  sections: [
    {
      title: "Qué puede hacer Looker Studio",
      level: 2,
      paras: [
        "El producto se conecta a fuentes vía connectors, arma visuals y comparte el informe con derechos de vista o edición. Los datos se refrescan según el schedule de la fuente — el informe se siente más como un dashboard en vivo que un PDF puntual.",
        "Es una capa de presentación. No sustituye el etiquetado correcto de goals, UTMs y tracking en CRM. No confundas Looker Studio con Urchin / la historia temprana de Analytics: productos distintos.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "resumen de tráfico y conversión para un cliente",
            "comparación de canales en una pantalla",
            "monitorizar 5–10 KPIs sin exports semanales",
            "informes blended simples desde varias fuentes",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard de negocio",
          href: "/es/blog/dashboard/",
        },
        {
          label: "Herramientas de web analytics",
          href: "/es/blog/instrumenty-veb-analitiki/",
        },
      ],
    },
    {
      title: "Analytics end-to-end: el rol del informe",
      level: 2,
      paras: [
        "La analytics end-to-end responde qué canal y campaña llevaron a un lead y a dinero — no solo a un clic. Hacen falta IDs de usuario/trato y unir el gasto de ads con el CRM.",
        "Looker Studio muestra el resultado del join. Si las fuentes no tienen pagos ni estados de trato, un gráfico bonito se queda en analytics «del sitio», no end-to-end.",
      ],
      lists: [
        {
          intro: "Setup mínimo end-to-end:",
          items: [
            "gasto de cuentas de ads",
            "comportamiento del sitio y goals (Metrica / GA4)",
            "leads y pagos del CRM",
            "UTMs consistentes y reglas de atribución",
            "un dashboard donde esos campos ya se alinean",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Looker Studio solo no arregla UTMs rotas ni leads solo por messenger sin tracking. Primero datos y un diccionario de métricas — luego visualización.",
        },
      ],
      links: [
        {
          label: "Etiquetas UTM",
          href: "/es/blog/utm-metki/",
        },
        {
          label: "Google Analytics",
          href: "/es/blog/google-analytics/",
        },
      ],
    },
    {
      title: "Cómo armar el primer informe",
      level: 2,
      paras: [
        "Necesitas una cuenta Google y acceso a las fuentes. Crea un informe → conecta una fuente (p. ej. GA4 o Google Sheets) → añade 3–5 visuals para un goal: no «toda métrica del mundo», sino preguntas de negocio.",
        "Las etiquetas de menú cambian. Oriéntate en: data source, página del informe, chart/tabla, métrica y dimensión, filtro de fechas, acceso por email.",
      ],
      lists: [
        {
          intro: "Orden de arranque:",
          items: [
            "fijar 5–7 KPIs",
            "conectar una fuente fiable",
            "armar una página overview",
            "añadir filtros de fecha y canal",
            "dar al equipo acceso solo de vista",
            "reconciliar números con la cuenta fuente",
          ],
        },
      ],
    },
    {
      title: "Fuentes, blending y end-to-end «pesado»",
      level: 2,
      paras: [
        "Para un informe de marketing simple, a menudo bastan connectors de analytics, ads y hojas. El blending ayuda a alinear campos sobre una clave compartida — cuidado con el grain y los duplicados.",
        "Cuando los datos son grandes o necesitas historial sin sampling y joins complejos con CRM/call tracking, los equipos suelen mover datos en bruto a un warehouse (p. ej. BigQuery) o un pipeline ETL y dejar Looker Studio como escaparate. No hace falta un vendor ETL concreto — sí un pipeline controlado.",
      ],
      lists: [
        {
          intro: "Cuándo complicar la arquitectura:",
          items: [
            "presupuesto y muchos canales",
            "un ciclo de venta largo",
            "necesitas pagos y margen del CRM",
            "los exports manuales se llevan horas cada semana",
          ],
        },
      ],
    },
    {
      title: "Visuals y filtros",
      level: 2,
      paras: [
        "Tarjetas KPI, tendencias diarias, tabla de campañas, pie de canales, filtro de periodo — el set básico. No sobrecargues la primera página: un manager debería ver «bien / mal / dónde mirar» en 30 segundos.",
        "Los filtros interactivos (canal, región, dispositivo) hacen del informe una herramienta de trabajo, no una imagen. Etiqueta ejes y fija definiciones: qué cuenta como lead y conversión.",
      ],
      lists: [
        {
          intro: "Errores habituales de diseño:",
          items: [
            "diez gráficos sin pregunta",
            "definiciones distintas de una métrica entre páginas",
            "periodo por defecto «todo el tiempo»",
            "acceso de edición para toda la empresa",
          ],
        },
      ],
    },
    {
      title: "Acceso, calidad de datos y alternativas",
      level: 2,
      paras: [
        "El sharing es por email con roles viewer/editor o por enlace bajo tu política de seguridad. Para clientes, solo vista y un set de KPIs preacordado son más habituales.",
        "Reconcilia el informe con cuentas en bruto y CRM: gaps por atribución, bots, consentimiento de cookies y leads offline son normales — pero deben ser explicables. No te apoyes solo en un visualizador: Metrica, cuentas de ads y una hoja «fuente de verdad» de tratos protegen las decisiones.",
      ],
      lists: [
        {
          intro: "Antes de confiar en el dashboard:",
          items: [
            "¿los totales de gasto coinciden con las cuentas de ads?",
            "¿los conteos de pago coinciden con el CRM?",
            "¿la zona horaria es consistente?",
            "¿hay UTMs y tags duplicados?",
          ],
        },
      ],
      links: [
        {
          label: "Excel y Google Sheets",
          href: "/es/blog/excel-google-tablitsy/",
        },
      ],
    },
  ],
  closing: [
    "Looker Studio funciona bien como escaparate de datos de marketing. La analytics end-to-end empieza uniendo ads, sitio y CRM; el informe solo hace ese join legible para el equipo y el cliente.",
  ],
};
