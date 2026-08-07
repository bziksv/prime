import type { BlogPost } from "../../../data/blog";

/** EN overlay for samostoyatelnoe-seo — same structure as RU JSON. */
export const samostoyatelnoeSeoEn: BlogPost = {
  slug: "samostoyatelnoe-seo",
  title: "DIY website SEO: where to start",
  date: "2021-04-30",
  category: "SEO",
  cover: "/images/blog/samostoyatelnoe-seo/cover-en.webp",
  excerpt:
    "A step-by-step DIY SEO plan for a site owner: prep, tech, keywords, content, and off-site factors — without “TOP in a week” promises or buying spam links.",
  lead: [
    "You can promote a site yourself: it’s work and discipline, not a “secret button.” Beginners often rush into links and forget tech, the keyword set, and pages.",
    "Here’s a practical work order plus links to deeper guides. Getting a commercial keyword set into the TOP is planned in months, not days.",
  ],
  faq: [
    {
      q: "Is DIY SEO realistic?",
      a: "For a simple site and a local niche — yes, if you have time to learn. Tough competitive topics more often need a specialist.",
    },
    {
      q: "What should I start with in month one?",
      a: "Indexing, Webmaster/Search Console, analytics, tech, a draft keyword set, and priority landings. Not buying links.",
    },
    {
      q: "When should I expect TOP-10?",
      a: "Site prep takes weeks. Building positions across the set is planned for 2–6 months of work. Prep ≠ TOP date.",
    },
    {
      q: "Do I need to buy links?",
      a: "Mass buying is a risk. Content and natural mentions first; links — deliberately and with quality.",
    },
    {
      q: "How is this different from “SEO from zero”?",
      a: "That article is a path into the profession. This one is an owner checklist of work steps.",
    },
    {
      q: "How often should I check results?",
      a: "Tech and critical errors — regularly; positions and traffic — usually monthly. Judge dynamics by query clusters and inquiries, not one phrase.",
    },
  ],
  sections: [
    {
      title: "Prep and diagnosis",
      level: 2,
      paras: [
        "Lock goals (leads, calls, sales), region, and a priority service list. Check whether the site is open for indexing and free of critical errors.",
      ],
      lists: [
        {
          intro: "Start:",
          items: [
            "Webmaster and Search Console;",
            "Yandex Metrica / analytics;",
            "regional signals and contacts;",
            "a tech look: speed, mobile, 404s, redirects.",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "On-page optimization",
      level: 2,
      paras: [
        "Build a keyword set, section structure, and content for queries. Title, description, headings, internal linking — after a clear page map.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "keyword set and clusters;",
            "URL structure and menu;",
            "copy and media on landings;",
            "snippets without stuffing;",
            "internal linking.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "SEO from zero",
          href: "/en/blog/seo-s-nulya/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Prep (tech, keywords, copy) often takes about a month. TOP across the set is a separate stage of 2–6 months of growing positions.",
        },
      ],
    },
    {
      title: "Off-site and analytics",
      level: 2,
      paras: [
        "Mentions, partnerships, and quality publications beat packs of exchange links. Once a month review core positions, traffic, conversions, and Webmaster errors.",
      ],
      lists: [
        {
          intro: "Don’t do early on:",
          items: [
            "mass “automatic” link buying;",
            "cloning someone else’s copy;",
            "expecting TOP a week after Title edits;",
            "ignoring the mobile version.",
          ],
        },
      ],
      links: [
        {
          label: "Traffic drop",
          href: "/en/blog/snizhenie-trafika/",
        },
      ],
    },
    {
      title: "Check the technical base",
      level: 2,
      paras: [
        "Search engines must crawl and index useful pages without blockers. Check robots.txt, sitemap, status codes, parameter duplicates, mobile, speed, and correct canonical URLs. Don’t fix everything at once without priorities: first remove errors that block access to important pages.",
        "Collect basics in Yandex Webmaster and Google Search Console if the service fits your audience. They show crawl issues, excluded pages, and queries where the site is already visible.",
      ],
      lists: [
        {
          intro: "Critical minimum:",
          items: [
            "pages return correct 200, 301, 404 codes;",
            "no accidental indexing block;",
            "the site is usable and loads on mobile;",
            "HTTPS and the main mirror are set consistently.",
          ],
        },
      ],
    },
    {
      title: "Build keywords and a page map",
      level: 2,
      paras: [
        "A keyword set isn’t a word list for frequency’s sake — it’s a map of user intent. Split informational, commercial, and navigational queries; don’t try to push every demand variant with one service page without shared intent.",
        "After clustering, map each group to an existing page or a task to create a new one. Then you see where a landing is missing, where a useful piece is needed, and where improving a working URL is enough.",
      ],
      lists: [
        {
          intro: "For each group lock:",
          items: [
            "intent and query region;",
            "target page;",
            "key user questions;",
            "priority by demand and business value.",
          ],
        },
      ],
    },
    {
      title: "Run the work and timelines realistically",
      level: 2,
      paras: [
        "Build a backlog: tech tasks, landing updates, content, internal linking, and analytics. Note change dates and expected effect — easier to see what moved traffic instead of repeating actions at random.",
        "Site prep — tech, keywords, copy, and CTAs — often takes about a month. Rankings grow later and unevenly: a noticeable chunk of the set may start moving around months 2–3, and the planned TOP horizon is 2–6 months, with no guaranteed date.",
      ],
      lists: [
        {
          intro: "A healthy monthly report includes:",
          items: [
            "organic traffic and conversions;",
            "cluster visibility, not one “main” phrase;",
            "fixed errors and new tasks;",
            "lead quality and sales feedback.",
          ],
        },
      ],
    },
  ],
};
