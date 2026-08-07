import type { BlogPost } from "../../../data/blog";

/** EN overlay for dashboard — same structure as RU JSON. */
export const dashboardEn: BlogPost = {
  slug: "dashboard",
  title: "Dashboard: what it is and why business needs it",
  date: "2021-11-13",
  category: "Internet marketing",
  cover: "/images/blog/dashboard/cover-en.webp",
  excerpt:
    "What a dashboard is: why pull metrics into one panel, who uses it, what types exist, and where to start — from spreadsheets to BI.",
  lead: [
    "A dashboard is a panel where key metrics live in one place: charts, tables, statuses. Instead of a dozen exports you see the picture “here and now” and decide faster.",
    "Below — who needs a dashboard, what kinds exist, how to build one, and tools. Service pricing changes — metric logic matters more than a BI brand.",
  ],
  faq: [
    {
      q: "How is a dashboard different from an Excel report?",
      a: "A report is often one-off. A dashboard is a live shop window: data refreshes, filters are interactive, focus is KPIs — not a “wall of numbers”.",
    },
    {
      q: "Where should a beginner start?",
      a: "With 5–7 metrics under one goal and a simple sheet/Looker Studio. Don’t dump “all the world’s data” on the first screen.",
    },
    {
      q: "Who needs BI like Tableau?",
      a: "When there are many sources, big data, and complex viz/access rights. A small project often does fine with spreadsheets.",
    },
    {
      q: "How often should it refresh?",
      a: "Depends on the decision: ads — often (day/hour), strategy — week/month. What matters is shared metric definitions.",
    },
    {
      q: "Can a pretty dashboard mislead you?",
      a: "Yes. Check sources, period, anomalies, and be skeptical of “perfect” trends without raw-data reconciliation.",
    },
  ],
  sections: [
    {
      title: "What a dashboard is",
      level: 2,
      paras: [
        "It’s a monitoring UI: raw data from ads, CRM, site, warehouse are pulled together and shown clearly — charts, KPI cards, tables.",
        "The goal is to shorten the path from “what’s happening?” to a decision. Not replace an analyst — give the team a shared language of numbers.",
      ],
      lists: [
        {
          intro: "What a good panel usually delivers:",
          items: [
            "one place for key metrics;",
            "period and segment comparison;",
            "less manual report assembly;",
            "faster spotting of a drop or growth.",
          ],
        },
      ],
    },
    {
      title: "Who uses it",
      level: 2,
      paras: [
        "Marketing watches traffic, CAC, conversions, reach. Sales — funnel, deals, reply speed. Leadership — revenue, margin, plan delivery. Product/SaaS — activation, retention, errors.",
      ],
      lists: [
        {
          intro: "Roles and focus:",
          items: [
            "marketer — channels and cost per lead;",
            "sales — plan/actual and CRM stages;",
            "executive — summary without excess detail;",
            "product — usage and service quality.",
          ],
        },
      ],
    },
    {
      title: "Dashboard types",
      level: 2,
      paras: [
        "Pick the type for the job: operational (today/now), analytical (why), strategic (quarter/year).",
      ],
      lists: [
        {
          intro: "Examples:",
          items: [
            "marketing — ads, site, leads;",
            "sales — funnel and managers;",
            "finance — revenue, spend, cash;",
            "product — DAU/MAU, product funnel.",
          ],
        },
      ],
    },
    {
      title: "Build outline",
      level: 2,
      paras: [
        "Questions and KPIs first, then sources, then the tool. Otherwise you get pretty chaos.",
      ],
      lists: [
        {
          intro: "Step by step:",
          items: [
            "why the panel and which decisions it supports;",
            "which sources (analytics, ad accounts, CRM, sheets);",
            "shared metric names and formulas;",
            "screen layout: KPIs on top, detail below;",
            "access rights for colleagues;",
            "number check on a control sample.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Dumping 40 widgets “just in case”. One screen — one role. The rest — separate tabs or reports.",
        },
      ],
    },
    {
      title: "Tools",
      level: 2,
      paras: [
        "Start: Google Sheets / Excel + pivots. Next — Looker Studio (ex Data Studio), Power BI, Tableau, and cloud builders like Klipfolio. Choice depends on data volume, budget, and IT resource.",
        "Pricing and product names change — check current terms. Stable connectors and a clear data model matter more.",
      ],
      lists: [
        {
          intro: "Complexity guides:",
          items: [
            "spreadsheets — small volume, fast start;",
            "Looker Studio / analogues — marketing and a free entry;",
            "Power BI / Tableau — complex model and company access rights;",
            "custom in BI/product — when stock connectors aren’t enough.",
          ],
        },
      ],
    },
    {
      title: "Data hygiene rules",
      level: 2,
      paras: [
        "A dashboard lies if sources or periods lie. Reconcile anomalies; name who owns data quality.",
      ],
      lists: [
        {
          intro: "Minimum hygiene:",
          items: [
            "one truth for each metric;",
            "clear period and timezone;",
            "default filters don’t hide failures;",
            "docs: where the number comes from;",
            "skepticism toward “perfect” charts without a check.",
          ],
        },
      ],
    },
  ],
};
