import type { BlogPost } from "../../../data/blog";

/** EN overlay for instrumenty-veb-analitiki — same structure as RU JSON. */
export const instrumentyVebAnalitikiEn: BlogPost = {
  slug: "instrumenty-veb-analitiki",
  title: "Web analytics tools: tags, logs, and dashboards",
  date: "2018-11-16",
  category: "SEO",
  cover: "/images/blog/instrumenty-veb-analitiki/cover-en.webp",
  excerpt:
    "What analytics systems give you, how JS tags differ from log analyzers, why Metrica and Google Analytics, and how not to drown in reports without goals.",
  lead: [
    "Web analytics means collecting and reading data on visitors and site behavior so you can decide where budget goes, what to fix on pages, and which channels pay off.",
    "Tags and log analyzers answer different questions; most teams start with Yandex Metrica and Google Analytics, then grow into BI when the volume warrants it. The analyst role and dashboards are covered nearby; here we focus on tools and data.",
  ],
  faq: [
    {
      q: "Should you use a tag or a log analyzer?",
      a: "A JS tag sees in-browser behavior and suits marketing. Server logs are stronger on tech and bots. In practice you often need both.",
    },
    {
      q: "Is Metrica alone enough?",
      a: "For many RU projects — yes as a base. GA4 helps in parallel if you watch Google traffic and that report ecosystem.",
    },
    {
      q: "What should you set up first?",
      a: "Code on all needed URLs, goals/events, filter your own IPs, UTMs on ads. Without goals, pretty charts don’t decide anything.",
    },
    {
      q: "Does analytics replace an SEO audit?",
      a: "No. It shows symptoms (bounces, sources, load speed as users feel it). Tech and indexing still need a crawler and Webmaster / Search Console.",
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
      q: "Will analytics put you in the TOP?",
      a: "Not directly. It speeds decisions. Rankings come from site work: prep first, then a planned 2–6 month climb after SEO starts — not overnight from charts alone.",
    },
  ],
  sections: [
    {
      title: "What web analytics is",
      level: 2,
      paras: [
        "It’s a loop: data → meaning → action. You watch audience, sources, paths, conversions, and tech signals (speed, errors) to change ads, content, and UX.",
        "Without regular review, analytics becomes “we installed a tag and forgot.” Agree business goals before wiring reports.",
      ],
      lists: [
        {
          intro: "What it’s for:",
          items: [
            "channel and CPA evaluation;",
            "finding weak landings;",
            "checking hypotheses and releases;",
            "reporting for the team and client.",
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
        "Base: visits and users, sources and queries (where available), devices, geo, pageviews, time, events and goals. Then funnels, ecommerce, cohorts.",
        "Tech slice: load speed as users feel it, failures, sometimes overlap with server data. Marketing slice: which ads and landings bring leads.",
      ],
      lists: [
        {
          intro: "Minimum weekly review:",
          items: [
            "traffic by channel;",
            "conversions and CR;",
            "top landings and bounces;",
            "anomalies after releases/promos.",
          ],
        },
      ],
    },
    {
      title: "Tags and log analyzers",
      level: 2,
      paras: [
        "A tag is a script in pages: handy reports, segments, goals, session replay. Downside: depends on JS, blockers, and cookie consent.",
        "A log analyzer reads server journals: full request flow, bots, response statuses, load. Downside: weaker on human in-browser behavior. For SEO tech, logs are often essential.",
      ],
      lists: [
        {
          intro: "When to use which:",
          items: [
            "tag — marketing and CRO;",
            "logs — bots, crawling, 5xx;",
            "both — disputed traffic spikes;",
            "don’t confuse bots with “organic growth”.",
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
        "In RU, teams often start with Metrica: goals, segments, session replay, easy link to Yandex Direct. Google Analytics (GA4) is the Google ecosystem standard and cross-project comparisons.",
        "Install the code correctly, set key events/goals, mark your own visits. Then UTMs and end-to-end logic with CRM if you count sales.",
      ],
      lists: [
        {
          intro: "Day-one start:",
          items: [
            "tag on site templates;",
            "2–5 goals (lead, call, purchase);",
            "real-time check;",
            "team access with the right roles.",
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
        "Tools speed decisions but don’t replace site and ad work. Organic TOP for a keyword set is a separate horizon: months after SEO starts, following prep — not a chart shortcut.",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "daily — anomalies and ads;",
            "weekly — channels and goals;",
            "monthly — trends and hypotheses;",
            "after release — traffic and error smoke.",
          ],
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
