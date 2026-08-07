import type { BlogPost } from "../../../data/blog";

/** EN overlay for ishodnyy-kod — same structure as RU JSON. */
export const ishodnyyKodEn: BlogPost = {
  slug: "ishodnyy-kod",
  title: "Website source code: why check it and how to open it",
  date: "2021-07-09",
  category: "SEO",
  cover: "/images/blog/ishodnyy-kod/cover-en.webp",
  excerpt:
    "What page source code is, how View Source differs from DevTools, and how to check meta, styles, and scripts — without a full layout course from scratch.",
  lead: [
    "Page source code is the HTML (and related CSS/JS) the browser gets from the server and turns into what you see. For SEO and debugging it helps to open it and find title, meta, markup, and console errors.",
    "Marketers and site owners use it to verify titles, meta, headings, and whether text exists in the DOM — View Source first, then DevTools. A full layout course is a separate article; this is a practical inspection.",
  ],
  faq: [
    {
      q: "How does View Source differ from DevTools?",
      a: "“View Page Source” shows the response HTML (often before heavy script edits). Developer tools show the live tree after JS runs, plus styles, network, and console.",
    },
    {
      q: "Do you need to know layout to read code?",
      a: "Basic tags (title, h1, a, img, meta) are enough for SEO hygiene checks. Building mockups from scratch is a front-end job.",
    },
    {
      q: "Is CSS-hidden content visible in the code?",
      a: "Often yes: text can be in HTML but hidden by styles. Crawlers and people see things differently — don’t use hiding as an SEO trick.",
    },
    {
      q: "Where do I find meta description and robots?",
      a: "In `<head>`: `meta name=\"description\"`, `meta name=\"robots\"`, link rel=\"canonical\". Search with Ctrl+F / Cmd+F.",
    },
    {
      q: "Can I edit someone else’s site via Inspect?",
      a: "DevTools changes are local to you only. They don’t save to the server until you deploy edits in the CMS/repo yourself.",
    },
  ],
  sections: [
    {
      title: "What page source code is",
      level: 2,
      paras: [
        "On a URL request the server returns a document: HTML markup, CSS links, and scripts. The browser parses tags and draws the UI. Users see the result; the code is the score.",
        "Even PHP, Python, or builder sites send HTML to the browser. So you inspect a page the same way — via source and DevTools.",
      ],
      lists: [
        {
          intro: "The code usually includes:",
          items: [
            "HTML structure;",
            "linked CSS;",
            "JavaScript;",
            "meta tags and canonical;",
            "analytics counters and pixels.",
          ],
        },
      ],
      links: [
        {
          label: "Website layout",
          href: "/en/blog/verstka-saytov/",
        },
        {
          label: "Hypertext",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Why look at the code",
      level: 2,
      paras: [
        "To check what search engines and browsers actually get: title, description, h1, noindex, link markup, script weight, broken image paths.",
        "It’s also handy to see how a competitor styled a block (color, font, class) — for a designer brief, not for copying their content.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "audit meta and headings;",
            "find counters and pixels;",
            "check canonical / robots;",
            "debug JS errors in Console;",
            "save CSS/font for analysis.",
          ],
        },
      ],
      links: [
        {
          label: "Page optimization for a query",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "How to open code in the browser",
      level: 2,
      paras: [
        "Chrome / Edge / Firefox: right-click the page → “View Page Source” — a separate tab with text. Or right-click an element → Inspect — the DevTools panel with the block highlighted.",
        "Menu → More tools → Developer tools. Tabs: Elements/Inspector, Sources, Console, Network, Security (certificate). You can move the panel layout if it gets in the way.",
      ],
      lists: [
        {
          intro: "Quick tricks:",
          items: [
            "Ctrl+F / Cmd+F for `title`, `canonical`, `noindex`;",
            "click a node in Elements — highlight on the page;",
            "Sources — script and style files, Save as;",
            "Console — JS errors;",
            "right-click a block on the site → Inspect — jump to the node.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Menu labels depend on browser language and version. Look for meaning: Source, Inspect, DevTools.",
        },
      ],
    },
    {
      title: "What to check in HTML",
      level: 2,
      paras: [
        "`<head>` — utility: title, meta, CSS links, and canonical. `<body>` — what users see: h1–h6 headings, paragraphs, lists, links, images.",
        "Semantic tags (`article`, `section`, `nav`) help structure. `div`/`span` are generic blocks with little meaning. For SEO, a clear h1, meaningful anchors, and image alt matter.",
      ],
      lists: [],
      tables: [
        {
          caption: "Common tags when inspecting",
          headers: ["Tag", "Why check"],
          rows: [
            ["`title`", "Tab title and topic signal"],
            ["`meta description`", "Snippet draft"],
            ["`link rel=canonical`", "Canonical URL"],
            ["`h1`", "Main on-page heading"],
            ["`a href`", "Where links go"],
            ["`img alt`", "Text for the image"],
          ],
        },
      ],
      links: [
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
  ],
};
