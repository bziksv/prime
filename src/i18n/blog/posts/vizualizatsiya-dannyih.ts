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
