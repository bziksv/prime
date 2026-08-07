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
    "Looker Studio (before 2022 — Google Data Studio) is a free report builder: tables, charts, and filters on top of data from analytics, spreadsheets, and ad accounts.",
    "It’s a presentation layer, not a magic full-funnel switch: without linking spend, the site, and CRM, pretty charts stay site analytics. UI and connectors change — lean on the logic, not 2020 screenshots.",
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
            "traffic and conversion summary for a client;",
            "channel comparison on one screen;",
            "monitoring 5–10 KPIs without weekly exports;",
            "simple blended reports from several sources.",
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
            "spend from ad accounts;",
            "site behavior and goals (Metrica / GA4);",
            "leads and payments from CRM;",
            "consistent UTMs and attribution rules;",
            "a dashboard where those fields already align.",
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
            "lock 5–7 KPIs;",
            "connect one reliable source;",
            "build an overview page;",
            "add date and channel filters;",
            "give the team view-only access;",
            "reconcile numbers with the source account.",
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
            "budget and many channels;",
            "a long sales cycle;",
            "you need payments and margin from CRM;",
            "manual exports take hours every week.",
          ],
        },
      ],
    },
    {
      title: "Visuals and filters",
      level: 2,
      paras: [
        "KPI cards, daily trends, a campaign table, a channel pie, a period filter — the basic set. Don’t overload page one: a manager should see “good / bad / where to look” in 30 seconds.",
        "Interactive filters (channel, region, device) make the report a work tool, not a picture. Label axes and lock definitions: what counts as a lead and a conversion.",
      ],
      lists: [
        {
          intro: "Common design mistakes:",
          items: [
            "ten charts with no question;",
            "different definitions of one metric across pages;",
            "default period “all time”;",
            "edit access for the whole company.",
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
            "do spend totals match ad accounts;",
            "do payment counts match CRM;",
            "is the time zone consistent;",
            "are there duplicate UTMs and tags.",
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
