import type { BlogPost } from "../../../data/blog";

/** EN overlay for skorost-sayta — same structure as RU JSON. */
export const skorostSaytaEn: BlogPost = {
  slug: "skorost-sayta",
  title: "How to check site speed: measurements, CWV, and tools",
  date: "2018-06-15",
  category: "SEO",
  cover: "/images/blog/skorost-sayta/cover-en.webp",
  excerpt:
    "How to measure page load: lab vs field data, Core Web Vitals, PageSpeed Insights, and what to do with the report — without a cult of “100 points” or a dusty 2018 tools top-10.",
  lead: [
    "A slow page loses people and search signals. Speed checks aren’t a race to a hundred in PageSpeed — they’re figuring out what blocks (server, images, JS) and on which URLs it hurts.",
    "Below: lab vs field, which metrics matter, a lean tool set, and how to read recommendations. We don’t reprint a ten-tool price list from 2018 — some aged out, some changed products. Speeding up WordPress is a separate article.",
  ],
  faq: [
    {
      q: "Do I need 100 in PageSpeed?",
      a: "No. What matters more is LCP / INP / CLS in the green zone on mobile for key URLs — and real UX.",
    },
    {
      q: "Are lab and field the same?",
      a: "No. Lab (Lighthouse) is a controlled run. Field (CrUX) is real-user data. Watch both.",
    },
    {
      q: "Is Webmaster enough?",
      a: "Helpful for availability and some diagnostics — it doesn’t replace PSI / CWV for how load feels.",
    },
    {
      q: "Does speed equal rankings?",
      a: "Indirectly, via UX and crawl. Core positions take planned months of work — not “ran PSI, hit page one.”",
    },
    {
      q: "Which URL should I start with?",
      a: "Home, top landings from ads or organic, product or service page, checkout.",
    },
  ],
  sections: [
    {
      title: "Why measure speed",
      level: 2,
      paras: [
        "Users rarely wait forever: bounces rise and conversion falls. For SEO, page-experience signals matter — and bots and people should get content without pain.",
        "Don’t treat the myth “top sites load in 0.38 s” from old posts as a KPI. Measure your templates on mobile networks and compare competitors on substance, not someone else’s magic number.",
      ],
      links: [
        {
          label: "Mobile-First Index",
          href: "/en/blog/mobile-first-indeks/",
        },
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Lab and field: two layers of truth",
      level: 2,
      paras: [
        "Lab (PageSpeed Insights / Lighthouse, WebPageTest): reproducible conditions, waterfall, “what to remove” tips. Handy for regressions after a release.",
        "Field (Chrome UX Report, Search Console reports): how it really loads for your audience. Sometimes lab is green and field is red — different geography, devices, cache.",
      ],
      tables: [
        {
          caption: "What to treat as the base",
          headers: ["Layer", "When"],
          rows: [
            ["Lab", "Debugging, before/after fix comparison"],
            ["Field", "Real UX and SEO-signal assessment"],
            ["Both", "Releases and “we’re already fast” debates"],
          ],
        },
      ],
    },
    {
      title: "Which metrics to watch",
      level: 2,
      paras: [
        "Core Web Vitals: LCP (largest content), INP (responsiveness), CLS (layout stability). Nearby — TTFB as a server/backend signal.",
        "Don’t fix everything at once. First LCP on mobile for a key URL, then INP/CLS, then score cosmetics.",
      ],
      lists: [
        {
          intro: "Common culprits:",
          items: [
            "heavy hero without dimensions",
            "blocking JS/CSS",
            "slow TTFB / hosting",
            "third-party widgets and tags",
            "fonts without font-display",
          ],
        },
      ],
    },
    {
      title: "A lean tool set",
      level: 2,
      paras: [
        "PageSpeed Insights — quick lab start plus a field summary where available. WebPageTest — deep waterfall and region comparison. Google Search Console — page experience across the site.",
        "Also: DevTools Performance/Network locally, uptime monitoring (Pingdom and peers — as alerting, not as the only SEO meter). Extra “sitespeed” checkers as a second look, not as truth.",
      ],
      notes: [
        {
          title: "About that 2018 top-10",
          text: "Don’t copy YSlow, old GTMetrix/Pingdom plans, or a “PageSpeed extension” blindly. Refresh the measurement stack yearly.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Speeding up WordPress",
          href: "/en/blog/uskorenie-wordpress/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Reading the report — then acting",
      level: 2,
      paras: [
        "Lock the URL, device (mobile), date, and a screenshot or export. List the top three recommendations with effort estimates. Ship → remeasure in a day (field catches up slower).",
        "High TTFB — hosting, cache, backend. LCP — images, SSR/critical CSS, load priority. CLS — media and ad-slot dimensions.",
      ],
      lists: [
        {
          intro: "Monthly mini-ritual:",
          items: [
            "PSI on 3–5 key URLs",
            "GSC: URLs with poor experience",
            "compare with last month",
            "1–2 fixes into the sprint",
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
      title: "What to remember",
      level: 2,
      paras: [
        "Speed is measured with perception and server metrics — not a pile of ten bookmarks. Lab for debugging, field for user truth.",
        "After measuring — find the bottleneck and fix it. Racing to 100 points without better UX isn’t the job.",
      ],
    },
  ],
  closing: [
    "Run key URLs in PageSpeed on mobile, check field in Search Console, and close one main brake (TTFB or LCP) — that turns a speed check into work, not a ritual of “one more tool from the list.”",
  ],
  related: [
    "uskorenie-wordpress",
    "mobile-first-indeks",
    "tehnicheskiy-seo-audit",
    "google-search-console",
    "adaptivnyy-sayt",
    "ustarevshiy-sayt",
  ],
};
