import type { BlogPost } from "../../../data/blog";

/** EN overlay for dashboard — same structure as RU JSON. */
export const dashboardEn: BlogPost = {
  slug: "dashboard",
  title: "Dashboards: what they are and why businesses need them",
  date: "2021-11-13",
  category: "Digital marketing",
  cover: "/images/blog/dashboard/cover-en.webp",
  excerpt:
    "What a dashboard is: why pull metrics into one panel, who uses it, what types exist, and where to start — from spreadsheets to BI.",
  lead: [
    "A dashboard is a panel where key metrics live in one place: charts, tables, statuses. Instead of a dozen exports, you see the picture right now and decide faster.",
    "Below: who needs a dashboard, what kinds exist, how to build one, and which tools fit. Service pricing changes — metric logic matters more than a BI brand name.",
  ],
  faq: [
    {
      q: "How is a dashboard different from an Excel report?",
      a: "A report is often one-off. A dashboard is a live view: data refreshes, filters are interactive, and the focus is KPIs — not a wall of numbers.",
    },
    {
      q: "Where should a beginner start?",
      a: "With 5–7 metrics tied to one goal and a simple sheet or Looker Studio. Don’t dump all the data in the world on the first screen.",
    },
    {
      q: "Who needs BI tools like Tableau?",
      a: "When you have many sources, large datasets, and complex viz or access rights. A small project often does fine with spreadsheets.",
    },
    {
      q: "How often should it refresh?",
      a: "It depends on the decision: ads often need day or hour updates; strategy can live on a weekly or monthly cadence. Shared metric definitions matter more than the refresh rate alone.",
    },
    {
      q: "Can a polished dashboard mislead you?",
      a: "Yes. Check sources, the period, and anomalies — and stay skeptical of “perfect” trends that haven’t been reconciled against raw data.",
    },
  ],
  sections: [
    {
      title: "What a dashboard is",
      level: 2,
      paras: [
        "It’s a monitoring UI: raw data from ads, CRM, the site, and the warehouse get pulled together and shown clearly — charts, KPI cards, tables.",
        "The goal is to shorten the path from “what’s happening?” to a decision. It doesn’t replace an analyst — it gives the team a shared language of numbers.",
      ],
      lists: [
        {
          intro: "What a good panel usually delivers:",
          items: [
            "one place for key metrics",
            "period and segment comparison",
            "less manual report assembly",
            "faster spotting of a drop or a spike",
          ],
        },
      ],
    },
    {
      title: "Who uses it",
      level: 2,
      paras: [
        "Marketing watches traffic, CAC, conversions, and reach. Sales watches the funnel, deals, and reply speed. Leadership watches revenue, margin, and plan delivery. Product and SaaS watch activation, retention, and errors.",
      ],
      lists: [
        {
          intro: "Roles and focus:",
          items: [
            "marketer — channels and cost per lead",
            "sales — plan vs. actual and CRM stages",
            "executive — a summary without excess detail",
            "product — usage and service quality",
          ],
        },
      ],
    },
    {
      title: "Dashboard types",
      level: 2,
      paras: [
        "Pick the type for the job: operational (today / right now), analytical (why), or strategic (quarter / year).",
      ],
      lists: [
        {
          intro: "Examples:",
          items: [
            "marketing — ads, site, leads",
            "sales — funnel and reps",
            "finance — revenue, spend, cash",
            "product — DAU/MAU and the product funnel",
          ],
        },
      ],
    },
    {
      title: "How to build one",
      level: 2,
      paras: [
        "Questions and KPIs first, then sources, then the tool. Otherwise you get pretty chaos.",
      ],
      lists: [
        {
          intro: "Step by step:",
          items: [
            "why the panel exists and which decisions it supports",
            "which sources (Metrika, ad accounts, CRM, sheets)",
            "shared metric names and formulas",
            "screen layout: KPIs on top, detail below",
            "access rights for colleagues",
            "a number check on a control sample",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "warning",
          text: "Dumping 40 widgets just in case. One screen, one role. Everything else belongs on separate tabs or reports.",
        },
      ],
    },
    {
      title: "Tools",
      level: 2,
      paras: [
        "Start with Google Sheets or Excel plus pivots. Next up: Looker Studio (formerly Data Studio), Power BI, Tableau, and cloud builders like Klipfolio. The choice depends on data volume, budget, and IT bandwidth.",
        "Pricing and product names change — check current terms. Stable connectors and a clear data model matter more.",
      ],
      lists: [
        {
          intro: "Complexity guide:",
          items: [
            "spreadsheets — small volume, fast start",
            "Looker Studio and similar tools — marketing with a free entry point",
            "Power BI / Tableau — complex models and company-wide access rights",
            "custom BI or product builds — when stock connectors aren’t enough",
          ],
        },
      ],
    },
    {
      title: "Data hygiene rules",
      level: 2,
      paras: [
        "A dashboard lies if the sources or periods lie. Reconcile anomalies and name who owns data quality.",
      ],
      lists: [
        {
          intro: "Minimum hygiene:",
          items: [
            "one definition of truth for each metric",
            "a clear period and timezone",
            "default filters that don’t hide failures",
            "docs for where each number comes from",
            "skepticism toward “perfect” charts that haven’t been checked",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for dashboard — same structure as RU JSON / EN. */
export const dashboardEs: BlogPost = {
  slug: "dashboard",
  title: "Dashboards: qué son y por qué los necesita el negocio",
  date: "2021-11-13",
  category: "Digital marketing",
  cover: "/images/blog/dashboard/cover.webp",
  excerpt:
    "Qué es un dashboard: por qué juntar métricas en un solo panel, quién lo usa, qué tipos existen y por dónde empezar — de hojas de cálculo a BI.",
  lead: [
    "Un dashboard es un panel donde viven las métricas clave en un solo sitio: gráficos, tablas, estados. En lugar de una docena de exports, ves la foto ahora mismo y decides más rápido.",
    "Abajo: quién necesita un dashboard, qué tipos hay, cómo armar uno y qué herramientas encajan. Los precios de los servicios cambian — la lógica de métricas importa más que el nombre de marca del BI.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un dashboard de un informe en Excel?",
      a: "Un informe a menudo es puntual. Un dashboard es una vista viva: los datos se refrescan, los filtros son interactivos y el foco son KPIs — no un muro de números.",
    },
    {
      q: "¿Por dónde debería empezar un principiante?",
      a: "Con 5–7 métricas atadas a un goal y una hoja simple o Looker Studio. No vuelques todos los datos del mundo en la primera pantalla.",
    },
    {
      q: "¿Quién necesita herramientas BI como Tableau?",
      a: "Cuando hay muchas fuentes, datasets grandes y viz o permisos de acceso complejos. Un proyecto pequeño a menudo se apaña con hojas.",
    },
    {
      q: "¿Cada cuánto debería refrescarse?",
      a: "Depende de la decisión: los ads a menudo necesitan updates diarios o por hora; la estrategia puede vivir en un ritmo semanal o mensual. Las definiciones compartidas de métricas importan más que la tasa de refresh sola.",
    },
    {
      q: "¿Puede un dashboard pulido engañarte?",
      a: "Sí. Revisa fuentes, el periodo y anomalías — y mantén escepticismo ante tendencias «perfectas» que no se han reconciliado con datos en bruto.",
    },
  ],
  sections: [
    {
      title: "Qué es un dashboard",
      level: 2,
      paras: [
        "Es una UI de monitorización: datos en bruto de ads, CRM, sitio y warehouse se juntan y se muestran con claridad — gráficos, tarjetas KPI, tablas.",
        "El objetivo es acortar el camino de «¿qué pasa?» a una decisión. No sustituye a un analista — da al equipo un lenguaje compartido de números.",
      ],
      lists: [
        {
          intro: "Qué suele entregar un buen panel:",
          items: [
            "un sitio para métricas clave",
            "comparación de periodos y segmentos",
            "menos montaje manual de informes",
            "detectar más rápido una caída o un pico",
          ],
        },
      ],
    },
    {
      title: "Quién lo usa",
      level: 2,
      paras: [
        "Marketing mira tráfico, CAC, conversiones y alcance. Ventas mira el funnel, tratos y velocidad de respuesta. Dirección mira ingresos, margen y cumplimiento del plan. Producto y SaaS miran activación, retention y errores.",
      ],
      lists: [
        {
          intro: "Roles y foco:",
          items: [
            "marketer — canales y coste por lead",
            "ventas — plan vs. real y stages del CRM",
            "ejecutivo — un resumen sin exceso de detalle",
            "producto — uso y calidad del servicio",
          ],
        },
      ],
    },
    {
      title: "Tipos de dashboard",
      level: 2,
      paras: [
        "Elige el tipo según el trabajo: operativo (hoy / ahora mismo), analítico (por qué) o estratégico (trimestre / año).",
      ],
      lists: [
        {
          intro: "Ejemplos:",
          items: [
            "marketing — ads, sitio, leads",
            "ventas — funnel y reps",
            "finanzas — ingresos, gasto, cash",
            "producto — DAU/MAU y el funnel de producto",
          ],
        },
      ],
    },
    {
      title: "Cómo armar uno",
      level: 2,
      paras: [
        "Primero preguntas y KPIs, luego fuentes, luego la herramienta. Si no, obtienes caos bonito.",
      ],
      lists: [
        {
          intro: "Paso a paso:",
          items: [
            "por qué existe el panel y qué decisiones apoya",
            "qué fuentes (Metrica, cuentas de ads, CRM, hojas)",
            "nombres y fórmulas compartidos de métricas",
            "layout de pantalla: KPIs arriba, detalle abajo",
            "permisos de acceso para colegas",
            "chequeo de números en una muestra de control",
          ],
        },
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "warning",
          text: "Volcar 40 widgets por si acaso. Una pantalla, un rol. Todo lo demás va en pestañas o informes aparte.",
        },
      ],
    },
    {
      title: "Herramientas",
      level: 2,
      paras: [
        "Empieza con Google Sheets o Excel más pivots. Siguiente nivel: Looker Studio (antes Data Studio), Power BI, Tableau y constructores cloud como Klipfolio. La elección depende del volumen de datos, presupuesto y ancho de banda de IT.",
        "Precios y nombres de producto cambian — revisa términos actuales. Importan más connectors estables y un modelo de datos claro.",
      ],
      lists: [
        {
          intro: "Guía de complejidad:",
          items: [
            "hojas — volumen pequeño, arranque rápido",
            "Looker Studio y herramientas similares — marketing con entrada gratuita",
            "Power BI / Tableau — modelos complejos y permisos a escala empresa",
            "BI custom o builds de producto — cuando los connectors de stock no bastan",
          ],
        },
      ],
    },
    {
      title: "Reglas de higiene de datos",
      level: 2,
      paras: [
        "Un dashboard miente si mienten las fuentes o los periodos. Reconcilia anomalías y nombra quién posee la calidad de los datos.",
      ],
      lists: [
        {
          intro: "Higiene mínima:",
          items: [
            "una definición de verdad para cada métrica",
            "periodo y zona horaria claros",
            "filtros por defecto que no oculten fallos",
            "docs de de dónde sale cada número",
            "escepticismo ante gráficos «perfectos» que no se han comprobado",
          ],
        },
      ],
    },
  ],
};
