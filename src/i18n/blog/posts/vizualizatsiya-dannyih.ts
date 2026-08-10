import type { BlogPost } from "../../../data/blog";

/** EN overlay for vizualizatsiya-dannyih — same structure as RU JSON. */
export const vizualizatsiyaDannyihEn: BlogPost = {
  slug: "vizualizatsiya-dannyih",
  title: "Data visualization tools: a marketing overview",
  date: "2019-06-17",
  category: "Content marketing",
  cover: "/images/blog/vizualizatsiya-dannyih/cover-en.webp",
  excerpt:
    "Looker Studio, Power BI, Tableau, and other tools for reports and dashboards — how to choose without outdated 2019 prices and without confusing them with article infographics.",
  lead: [
    "Data visualization in marketing means turning exports from analytics, ads, and CRM into readable reports and dashboards. That isn’t the same as infographics for an article — here connectors, refresh schedules, and filters matter.",
    "Below: orientation on popular platforms. Pricing and product names change (Google Data Studio → Looker Studio); check current terms on vendor sites. Mentions of Instagram* and Facebook* Ads are informational. See the Meta note on this page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is this different from infographics?",
      a: "Infographics are static or editorial diagrams for a story. Visualization tools here mean reports and dashboards, often with live data and link-based access.",
    },
    {
      q: "Where should a beginner start?",
      a: "With Looker Studio (formerly Data Studio) or a similar tool with ready connectors to Yandex Metrika/Analytics — a free entry point without code.",
    },
    {
      q: "Do I need Power BI or Tableau right away?",
      a: "If you have many sources, corporate access controls, and complex models — yes. For a simple marketing report they’re often overkill.",
    },
    {
      q: "Are prices from old roundups still valid?",
      a: "No. Use the vendor’s current price list; what follows is selection logic only — no locked 2019 dollar figures.",
    },
    {
      q: "Can I do this without a developer?",
      a: "Basic dashboards — yes. Complex models, ETL, and custom connectors often need an analyst.",
    },
    {
      q: "How do you deliver a report to a client?",
      a: "A view-only link, PDF export, or an embedded iframe — follow the company’s data policy.",
    },
    {
      q: "What matters more than pretty charts?",
      a: "Correct metrics, time period, filters, and a label for “what we’re counting.” Pretty garbage is more dangerous than boring truth.",
    },
  ],
  sections: [
    {
      title: "The job and selection criteria",
      level: 2,
      paras: [
        "First, lock down: which sources (Yandex Metrika, ad accounts, CRM, spreadsheets), who reads the report, how often to refresh, and whether shared access is needed.",
        "Check: out-of-the-box connectors, free-tier limits, export and sharing options, Cyrillic support, and local sources (Yandex).",
      ],
      links: [
        {
          label: "Infographics",
          href: "/en/blog/infografika/",
        },
      ],
    },
    {
      title: "Looker Studio (Google Data Studio)",
      level: 2,
      paras: [
        "A free report builder with connectors to Google products and many partner sources (including ad accounts and spreadsheets). Easy to share by link and schedule by email.",
        "Pros: fast no-code start, templates, Google ecosystem fit. Cons: limits on heavy calculations; some partner connectors are paid or quota-bound.",
      ],
      notes: [
        {
          title: "Renaming",
          kind: "tip",
          text: "In the UI and docs, look for Looker Studio — same logic as older Data Studio guides.",
        },
      ],
    },
    {
      title: "Power BI and Tableau",
      level: 2,
      paras: [
        "Power BI (Microsoft) is strong if the team already lives in Excel, Azure, or SQL Server: rich visuals, cloud hosting, source comparison. A free tier exists; corporate features sit in paid SKUs. Cons: heavy volumes and some Yandex/Google connectors need extra setup.",
        "Tableau offers strong visual analytics and multi-source work, plus team access and publishing. Full power is in paid editions; for a light marketing PDF it’s often more than you need.",
      ],
    },
    {
      title: "Light chart builders",
      level: 2,
      paras: [
        "ChartBlocks, Plotly, Infogram, and similar tools fit when you need an embeddable chart or interactive graph for a site or presentation — not a full BI stack.",
        "Check: free-plan limits, watermarks, Cyrillic fonts, export formats (PNG, SVG, HTML), and publishing rights. Prices and limits age fast — verify before you choose.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "one chart in an article — light builder or Excel/Sheets",
            "weekly marketing report — Looker Studio or Power BI",
            "corporate analytics with roles — Power BI or Tableau",
            "scientific or custom charts — Plotly and code",
          ],
        },
      ],
    },
    {
      title: "All-in-one dashboards",
      level: 2,
      paras: [
        "Tools like DataDeck and peers collect widgets from ads, analytics, and spreadsheets into one near-real-time panel. Handy for ops control; check connector coverage and whether your metrics exist.",
        "Don’t confuse a pile of pretty widgets with management insight: KPIs and the manager’s questions come first, charts second.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Tool choice = sources + report audience + license budget.",
        "Metric meaning beats a gallery of chart types.",
        "Content infographics and a BI dashboard are different jobs.",
      ],
    },
  ],
  closing: [
    "Build one report from two sources you already use (e.g., Yandex Metrika plus a plan spreadsheet), then decide whether you need paid BI.",
  ],
  related: [
    "infografika",
    "kontent-marketing-metrika",
    "idei-kontent-prodvizheniya",
    "matritsa-kontenta",
    "google-analytics",
    "metrika-ustanovka",
  ],
};

/** ES overlay for vizualizatsiya-dannyih — same structure as RU JSON / EN. */
export const vizualizatsiyaDannyihEs: BlogPost = {
  slug: "vizualizatsiya-dannyih",
  title: "Herramientas de visualización de datos: panorama para marketing",
  date: "2019-06-17",
  category: "Content marketing",
  cover: "/images/blog/vizualizatsiya-dannyih/cover-es.webp",
  excerpt:
    "Looker Studio, Power BI, Tableau y otras herramientas para informes y dashboards — cómo elegir sin precios obsoletos de 2019 y sin confundirlas con infografías de artículo.",
  lead: [
    "La visualización de datos en marketing significa convertir exports de analítica, ads y CRM en informes y dashboards legibles. No es lo mismo que una infografía para un artículo — aquí importan conectores, calendarios de refresh y filtros.",
    "Abajo: orientación sobre plataformas populares. Precios y nombres de producto cambian (Google Data Studio → Looker Studio); revisa las condiciones actuales en los sitios de los vendors. Las menciones de Instagram* y Facebook* Ads son informativas. Ver la nota Meta en esta página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* y Facebook* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia de las infografías?",
      a: "Las infografías son diagramas estáticos o editoriales para una historia. Las herramientas de visualización aquí son informes y dashboards, a menudo con datos en vivo y acceso por enlace.",
    },
    {
      q: "¿Por dónde empieza un principiante?",
      a: "Con Looker Studio (antes Data Studio) o una herramienta similar con conectores listos a Yandex Metrika/Analytics — punto de entrada gratis sin código.",
    },
    {
      q: "¿Necesito Power BI o Tableau ya?",
      a: "Si tienes muchas fuentes, controles de acceso corporativos y modelos complejos — sí. Para un informe de marketing simple suelen ser excesivos.",
    },
    {
      q: "¿Siguen valiendo los precios de resúmenes viejos?",
      a: "No. Usa la lista de precios actual del vendor; lo que sigue es solo lógica de selección — sin cifras en dólares fijadas de 2019.",
    },
    {
      q: "¿Se puede sin developer?",
      a: "Dashboards básicos — sí. Modelos complejos, ETL y conectores custom a menudo necesitan un analista.",
    },
    {
      q: "¿Cómo entregas un informe al cliente?",
      a: "Enlace solo lectura, export PDF o iframe embebido — sigue la política de datos de la empresa.",
    },
    {
      q: "¿Qué importa más que gráficos bonitos?",
      a: "Métricas correctas, periodo, filtros y una etiqueta de «qué estamos contando». La basura bonita es más peligrosa que la verdad aburrida.",
    },
  ],
  sections: [
    {
      title: "El trabajo y los criterios de selección",
      level: 2,
      paras: [
        "Primero fija: qué fuentes (Yandex Metrika, cuentas de ads, CRM, hojas), quién lee el informe, con qué frecuencia refrescar y si hace falta acceso compartido.",
        "Revisa: conectores out-of-the-box, límites del plan gratis, opciones de export y sharing, soporte de cirílico y fuentes locales (Yandex).",
      ],
      links: [
        {
          label: "Infografías",
          href: "/es/blog/infografika/",
        },
      ],
    },
    {
      title: "Looker Studio (Google Data Studio)",
      level: 2,
      paras: [
        "Un constructor de informes gratis con conectores a productos Google y muchas fuentes partner (incluidas cuentas de ads y hojas). Fácil de compartir por enlace y programar por email.",
        "Pros: arranque rápido sin código, plantillas, encaje con el ecosistema Google. Contras: límites en cálculos pesados; algunos conectores partner son de pago o con cuota.",
      ],
      notes: [
        {
          title: "Cambio de nombre",
          kind: "tip",
          text: "En la UI y la docs busca Looker Studio — misma lógica que las guías viejas de Data Studio.",
        },
      ],
    },
    {
      title: "Power BI y Tableau",
      level: 2,
      paras: [
        "Power BI (Microsoft) es fuerte si el equipo ya vive en Excel, Azure o SQL Server: visuals ricos, hosting en la nube, comparación de fuentes. Existe un plan gratis; las features corporativas van en SKUs de pago. Contras: volúmenes pesados y algunos conectores Yandex/Google necesitan setup extra.",
        "Tableau ofrece analítica visual fuerte y trabajo multi-fuente, más acceso de equipo y publicación. La potencia completa está en ediciones de pago; para un PDF de marketing ligero a menudo es más de lo que necesitas.",
      ],
    },
    {
      title: "Constructores ligeros de gráficos",
      level: 2,
      paras: [
        "ChartBlocks, Plotly, Infogram y similares encajan cuando necesitas un gráfico embebible o interactivo para un sitio o presentación — no un stack BI completo.",
        "Revisa: límites del plan gratis, watermarks, fuentes cirílicas, formatos de export (PNG, SVG, HTML) y derechos de publicación. Precios y límites envejecen rápido — verifica antes de elegir.",
      ],
      lists: [
        {
          intro: "Escenarios típicos:",
          items: [
            "un gráfico en un artículo — constructor ligero o Excel/Sheets",
            "informe de marketing semanal — Looker Studio o Power BI",
            "analítica corporativa con roles — Power BI o Tableau",
            "gráficos científicos o custom — Plotly y código",
          ],
        },
      ],
    },
    {
      title: "Dashboards todo-en-uno",
      level: 2,
      paras: [
        "Herramientas como DataDeck y pares reúnen widgets de ads, analítica y hojas en un panel casi en tiempo real. Práctico para control operativo; revisa cobertura de conectores y si existen tus métricas.",
        "No confundas un montón de widgets bonitos con insight de gestión: primero KPIs y las preguntas del manager, los gráficos después.",
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Elegir herramienta = fuentes + audiencia del informe + presupuesto de licencia.",
        "El significado de la métrica gana a una galería de tipos de gráfico.",
        "Infografía de contenido y dashboard BI son trabajos distintos.",
      ],
    },
  ],
  closing: [
    "Arma un informe con dos fuentes que ya uses (p. ej. Yandex Metrika más una hoja de plan), y luego decide si necesitas BI de pago.",
  ],
  related: [
    "infografika",
    "kontent-marketing-metrika",
    "idei-kontent-prodvizheniya",
    "matritsa-kontenta",
    "google-analytics",
    "metrika-ustanovka",
  ],
};
