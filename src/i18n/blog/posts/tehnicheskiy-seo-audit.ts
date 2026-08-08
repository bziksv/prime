import type { BlogPost } from "../../../data/blog";

/** EN overlay for tehnicheskiy-seo-audit — same structure as RU JSON. */
export const tehnicheskiySeoAuditEn: BlogPost = {
  slug: "tehnicheskiy-seo-audit",
  title: "Technical SEO audit: goals, scope, and a DIY start",
  date: "2021-07-22",
  category: "SEO",
  cover: "/images/blog/tehnicheskiy-seo-audit/cover-en.webp",
  excerpt:
    "Why a technical SEO audit matters, what to check, and whether you can run a basic pass yourself.",
  lead: [
    "If the site stalls despite content and ad spend, it’s often not “SERP magic” but tech: indexing, speed, duplicates, status codes, mobile layout.",
    "Below: how a technical audit differs from other checks, what you can inspect yourself, and when it’s smarter to hand the work to specialists.",
  ],
  faq: [
    {
      q: "What is a technical SEO audit?",
      a: "A check of how the site is served to crawlers and users: crawl, indexing, status codes, speed, mobile readiness, utility files, and critical layout/server errors.",
    },
    {
      q: "How is it different from a full SEO audit?",
      a: "Tech is the foundation. Separately you review keywords, copy, links, and usability. Without tech, even a strong keyword set rarely becomes stable rankings.",
    },
    {
      q: "Can I audit it myself?",
      a: "A basic loop — yes: webmaster panels, a crawler, PageSpeed/CWV, robots and sitemap checks. Deep niche work and prioritization is usually faster with an experienced specialist.",
    },
    {
      q: "Where should I start if time is short?",
      a: "Indexing and duplicates, 4xx/5xx, redirects, mobile version, LCP/INP, HTTPS, and access to key landings.",
    },
    {
      q: "When is it better to postpone an audit?",
      a: "If there’s no budget for fixes, the site is obsolete and easier to rebuild, or the priority is a short paid cycle without relying on organic.",
    },
  ],
  sections: [
    {
      title: "What a site audit is for",
      level: 2,
      paras: [
        "An audit is a systematic review: tech, structure, content, usability, and search visibility. The goal — see if the resource is ready for promotion or needs fixes first.",
        "The technical loop answers: can a crawler stably crawl and index the right URLs, and can a user get the page quickly without failures.",
      ],
      lists: [],
    },
    {
      title: "What an SEO audit should deliver",
      level: 2,
      paras: [
        "The main job is to gather facts about the site’s state and weak spots — not to “find someone to blame.”",
        "Afterwards you prioritize fixes: what blocks indexing and conversion now, what can wait. Demand, competition, and UX are assessed too — but those sit next to pure tech.",
      ],
      lists: [
        {
          intro: "An audit usually delivers:",
          items: [
            "a list of critical errors with priority",
            "a map of what blocks traffic and lead growth",
            "a clear work plan for the next iterations",
          ],
        },
      ],
    },
    {
      title: "Audit types",
      level: 2,
      paras: [
        "In practice there are several types. Usability and marketing are narrow slices. Technical looks at hosting, code, crawl, and page delivery. Search (on-page / SEO) — meta, headings, internal links, content duplicates — more often after tech isn’t in the way.",
        "An express check before promotion covers only critical issues. A full review needs a crawler and webmaster panels. Tools include Screaming Frog, Netpeak Spider, Titlo, plus Google Search Console and Yandex Webmaster.",
      ],
      lists: [
        {
          intro: "Basic classification:",
          items: [
            "technical",
            "search (on-page / SEO)",
            "usability",
            "marketing / competitive",
          ],
        },
      ],
    },
    {
      title: "Technical (under the hood)",
      level: 3,
      paras: [
        "A technical audit checks how the site works under the hood. Server errors, a broken robots file, duplicates, and a slow mobile version hurt visibility more than one missing paragraph of copy.",
      ],
      lists: [
        {
          intro: "What is usually checked:",
          items: [
            "2xx / 3xx / 4xx / 5xx status codes and redirect chains",
            "robots.txt and XML sitemap",
            "indexing of key URLs (webmaster / Search Console)",
            "canonicals and duplicates (WWW, HTTP/HTTPS, parameters)",
            "speed and Core Web Vitals (LCP, INP, CLS)",
            "mobile layout and viewport",
            "HTTPS and mixed content",
            "availability of important resources (JS/CSS), critical layout errors",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Dumping brand metrics, the link profile, and “ranking factors” into “tech” all at once. Those are related report blocks; first remove what breaks crawl and indexing.",
        },
      ],
      tables: [
        {
          caption: "Express-audit mini-checklist",
          headers: ["Check", "Where to look", "Severity"],
          rows: [
            ["Homepage and services indexed", "Webmaster / GSC", "high"],
            ["404 on important URLs", "Crawler", "high"],
            ["robots blocks needed URLs", "robots.txt", "high"],
            ["Slow mobile LCP", "PageSpeed / CWV", "medium/high"],
            ["Duplicates without canonical", "Crawler", "high"],
          ],
        },
      ],
    },
    {
      title: "Search audit (on-page)",
      level: 3,
      paras: [
        "After tech, check how ready pages are to rank: meta, headings, internal linking, content duplicates, image optimization.",
      ],
      lists: [
        {
          intro: "Typical scope:",
          items: [
            "indexing settings and duplicate hunt",
            "Title / Description meta tags",
            "H1–H3 hierarchy",
            "internal linking",
            "alt on meaningful images",
            "filters and sharp drops — separately, by evidence",
            "positions and traffic vs competitors — as context, not as “tech”",
          ],
        },
      ],
    },
    {
      title: "Usability",
      level: 3,
      paras: [
        "Usability is convenience for people: speed, mobile readiness, clear navigation, no empty sections. Some metrics overlap with tech (speed, SSL), some with the product (lead flow).",
      ],
      lists: [
        {
          intro: "What to look at:",
          items: [
            "load speed and UI stability",
            "display on phone and tablet",
            "HTTPS",
            "logical hierarchy and no placeholders",
            "bounces, depth, devices, and browsers — in analytics",
          ],
        },
      ],
    },
    {
      title: "Content and site fill",
      level: 3,
      paras: [
        "A separate slice: uniqueness and freshness of copy, information gaps, keyword effectiveness on landings, outdated pages to delete or update.",
        "Strong content doesn’t cancel tech: if a page isn’t indexed or returns 500, the text won’t save it.",
      ],
      lists: [],
    },
    {
      title: "Basic vs full audit",
      level: 2,
      paras: [
        "A basic (express) pass covers critical issues: server errors, 404/redirects, meta on key URLs, indexing. It doesn’t claim a full competition or design review.",
        "A full audit — tech + on-page + keywords/structure + usability and competitive context. That’s a turnkey work plan, not one checklist.",
      ],
      lists: [
        {
          intro: "When an audit is especially useful:",
          items: [
            "site launch or relaunch",
            "the site hasn’t been maintained for a long time",
            "promotion stopped and metrics dropped",
            "you need vendor oversight",
            "low traffic, high bounce, rising 404s",
          ],
        },
        {
          intro: "When an SEO audit can wait:",
          items: [
            "no budget for fixes afterward",
            "the resource is obsolete and better replaced",
            "priority is a short paid cycle without organic",
          ],
        },
      ],
    },
    {
      title: "DIY or with a vendor",
      level: 2,
      paras: [
        "Your own loop helps: learn to read webmaster tools, crawl the site, fix robots and meta. It takes time and someone who will finish the fixes.",
        "A vendor spots systemic errors faster, separates critical issues from noise, and ties tech to keywords and structure. It makes sense when downtime costs more than the audit.",
      ],
      lists: [
        {
          intro: "Arguments for an external audit:",
          items: [
            "an independent view without habit blindness",
            "work priorities, not an endless list of tiny issues",
            "practical alignment with search-engine requirements",
          ],
        },
      ],
      notes: [
        {
          title: "Practical compromise",
          kind: "tip",
          text: "Run an express pass yourself and log critical issues. Order a deep report and roadmap if growth still hits a ceiling after basic fixes.",
        },
      ],
    },
    {
      title: "What to do after the audit",
      level: 2,
      paras: [
        "An audit without implementation is just a PDF. Next: fix critical issues, then structure and landing keywords, then content and growth work.",
      ],
      lists: [],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A technical audit is a fast way to see if the site is breaking its own promotion. Start with indexing, status codes, and speed; go deeper as resources allow. If you need a second pair of eyes — review the report with a specialist and budget for fixes right away.",
      ],
      lists: [],
    },
  ],
};
