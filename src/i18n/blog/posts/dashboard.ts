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
    "This guide covers who needs a dashboard, what kinds exist, how to build one, and which tools fit. Service pricing changes — metric logic matters more than a BI brand name.",
  ],
  faq: [
    {
      q: "How is a dashboard different from an Excel report?",
      a: "A report is often one-off. A dashboard is a live view: data refreshes, filters are interactive, and the focus is KPIs — not a wall of numbers.",
    },
    {
      q: "Where should a beginner start?",
      a: "With 5–7 metrics tied to one goal and a simple sheet or Looker Studio. Don’t dump “all the data in the world” on the first screen.",
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
            "which sources (analytics, ad accounts, CRM, sheets)",
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
          text: "Dumping 40 widgets “just in case.” One screen, one role. Everything else belongs on separate tabs or reports.",
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
