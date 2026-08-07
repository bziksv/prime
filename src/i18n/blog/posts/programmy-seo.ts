import type { BlogPost } from "../../../data/blog";

/** EN overlay for programmy-seo — same structure as RU JSON. */
export const programmySeoEn: BlogPost = {
  slug: "programmy-seo",
  title: "SEO software and services: a stack by task",
  date: "2020-03-05",
  category: "SEO",
  cover: "/images/blog/programmy-seo/cover-en.webp",
  excerpt:
    "Which tools you need for SEO: semantics, analytics, copy checks, tech audit, links, and extensions — a stack by task without a cult of “one all-in-one” or instant TOP promises.",
  lead: [
    "SEO is a set of jobs, not one button. Each job has its tool class: building a keyword core, on-site behavior, copy checks, technical crawls, backlink slices, webmaster panels.",
    "Below — a practical stack by area. Service names and trial limits change — check current plans on their sites. Competitor analysis as a method is a separate article; here the focus is tooling. Software doesn’t replace strategy: core rankings build over months after prep.",
  ],
  faq: [
    {
      q: "Do you need a paid all-in-one from day one?",
      a: "No. At the start Wordstat, Webmaster, Metrica/GA, and a free crawler often suffice. Add paid tools when you hit limits.",
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
      a: "It’s content hygiene. Uniqueness doesn’t guarantee TOP, but copy-paste and stuffing hurt.",
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
      q: "Will software put you in TOP in a week?",
      a: "No. Tools speed up data gathering. Prep — weeks; TOP for the core is planned 2–6 months after work starts.",
    },
    {
      q: "What to install in the browser?",
      a: "Extensions for meta, redirects, and quick page metrics. They don’t replace a full crawl and webmaster panels.",
    },
  ],
  sections: [
    {
      title: "How to build the stack",
      level: 2,
      paras: [
        "List project tasks first, then tools. Otherwise you buy subscriptions “just in case”. One service rarely covers semantics, logs, and content at once.",
        "Keep a table: task → tool → who pays → limits. Every quarter, cut unused licenses.",
      ],
      lists: [
        {
          intro: "Starter minimum:",
          items: [
            "Wordstat + a spreadsheet;",
            "Yandex Webmaster / Google Search Console;",
            "Metrica and/or GA4;",
            "a crawler (Screaming Frog or peer);",
            "copy checks against the brief.",
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
      title: "Semantics and demand",
      level: 2,
      paras: [
        "Yandex Wordstat is the frequency base for RU. Google Keyword Planner and Trends — Google demand and seasonality. Key Collector / Keys.so / Serpstat / Semrush — batch collection, clustering, competition estimates.",
        "AnswerThePublic and search suggest feed FAQ and structure questions. Don’t chase “10,000 keys” generators: intent and landings first.",
      ],
      lists: [
        {
          intro: "Typical set:",
          items: [
            "Wordstat;",
            "Key Collector or a cloud peer;",
            "Serpstat / Keys.so / Semrush — by budget;",
            "Trends + Planner for the Google track;",
            "a cluster spreadsheet.",
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
        "Yandex Metrica and Google Analytics show what people do on the site: sources, goals, funnels. Without goals the software is useless — mark conversions first.",
        "Session Replay and recordings are for UX hypotheses, not daily “spying”. Build dashboards for KPIs — not every report at once.",
      ],
      lists: [
        {
          intro: "The link-up:",
          items: [
            "Metrica / GA4;",
            "goals and events;",
            "Webmaster / Search Console;",
            "BI/dashboard when needed.",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Metrica",
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
            "uniqueness in the chosen tool;",
            "nausea/spamminess inside the brief corridor;",
            "read aloud;",
            "alignment with cluster intent.",
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
            "crawler;",
            "Webmaster + GSC;",
            "redirect checks;",
            "log analysis when needed;",
            "recrawl after fixes.",
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
        "Browser bars (RDS bar and peers) speed eyeballing SERPs, but easily breed a cult of “IQS on an icon”. Decide from tasks and full reports.",
      ],
      lists: [
        {
          intro: "External track:",
          items: [
            "a backlink tool;",
            "rank tracking;",
            "an extension for meta/redirects;",
            "a visibility-change sheet.",
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
          text: "Subscriptions speed the work. TOP for the core is a months-long horizon after work starts — not a plugin-install effect.",
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
