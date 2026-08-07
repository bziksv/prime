import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-bitrix — same structure as RU JSON. */
export const seoBitrixEn: BlogPost = {
  slug: "seo-bitrix",
  title: "SEO in 1C-Bitrix: robots, meta, and baseline setup",
  date: "2021-06-22",
  category: "SEO",
  cover: "/images/blog/seo-bitrix/cover-en.webp",
  excerpt:
    "What the built-in 1C-Bitrix SEO module gives you, how to handle robots.txt, meta templates, and counters carefully — without treating Marketplace paid modules as the only solution.",
  lead: [
    "1C-Bitrix covers many jobs out of the box, but SEO doesn’t configure itself: you need robots/sitemap, title/description templates, clean URLs, counters, and duplicate control.",
    "Here’s a baseline SEO setup for a Bitrix portal. Menu labels and module names shift between editions—follow the current admin UI and docs.",
  ],
  faq: [
    {
      q: "Is the built-in SEO module enough without Marketplace?",
      a: "For a start often yes: meta, properties, some reports. Take paid modules only for a specific gap — not “a pack for SEO.”",
    },
    {
      q: "Should I edit robots.txt in Bitrix by hand?",
      a: "Yes, if the template/module serves a wrong file. After edits, check in Webmaster tools. See also the closing from indexing article.",
    },
    {
      q: "Are meta keywords still needed?",
      a: "As a ranking factor for major search engines — no. Focus on Title, Description, H1, and useful text.",
    },
    {
      q: "How is this different from a tech audit?",
      a: "Here — CMS settings. A tech audit looks at server responses, speed, and the index more broadly, not only the Bitrix panel.",
    },
    {
      q: "Can I promote a site with modules alone?",
      a: "No. Modules help manage fields; rankings come from content, links, tech, and demand.",
    },
  ],
  sections: [
    {
      title: "What to set up first",
      level: 2,
      paras: [
        "Enable and check clean URLs, sitemap, robots.txt, and a home/sections setup without duplicates (www/HTTPS, trailing slash, filter params). Then — meta templates for sections and infoblock items.",
        "Put Yandex Metrica / Analytics counters once in the template or via the stock mechanism — no double inserts.",
      ],
      lists: [
        {
          intro: "Launch minimum:",
          items: [
            "HTTPS and mirror consolidation;",
            "current robots.txt and XML sitemap;",
            "Title/Description templates without junk;",
            "canonical where duplicates exist;",
            "Yandex Webmaster and Search Console.",
          ],
        },
      ],
      links: [
        {
          label: "Closing from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "robots.txt and crawling",
      level: 2,
      paras: [
        "Bitrix serves robots from a file/settings; after updates and custom edits, verify needed sections aren’t blocked and service paths aren’t open (`/bitrix/`, admin, service scripts — per project policy).",
        "Disallow ≠ “remove from the index.” To drop from results you need noindex/URL removal, and the bot must still fetch the document.",
      ],
      lists: [],
      notes: [
        {
          title: "Practice",
          text: "A check in Webmaster tools and a test crawl beat a “pretty” robots file copied from someone else’s guide.",
        },
      ],
    },
    {
      title: "Meta, infoblocks, and clean URLs",
      level: 2,
      paras: [
        "A solid path is SEO-property templates at section/infoblock-type level with inheritance — not hand-editing hundreds of cards. Build Title and Description from meaningful fields, not a keyword sheet.",
        "Set symbolic codes (clean URLs) to be readable and stable. A sharp URL change without 301s breaks positions.",
      ],
      lists: [
        {
          intro: "Meta control list:",
          items: [
            "Title uniqueness within a section;",
            "Description without “buy buy” template paste;",
            "H1 aligned with Title;",
            "no indexing of empty/thin filters without need.",
          ],
        },
      ],
      links: [
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Marketplace modules: careful",
      level: 2,
      paras: [
        "Marketplace has many SEO extensions (meta, redirects, text blocks). Take them for a concrete gap in the built-in module; check Bitrix edition support and catalog load.",
        "Don’t replace a promotion strategy by installing “one more SEO plugin.” Content, structure, and tech come first.",
      ],
      lists: [],
    },
    {
      title: "Analytics and Webmaster tools",
      level: 2,
      paras: [
        "Metrica and Search Console / Webmaster show what is actually indexed and how users behave. Internal SEO-module reports are an extra layer, not a replacement.",
        "Bitrix doesn’t “rank itself”: field setup is faster than on a custom CMS, but results depend on the specialist and the process.",
      ],
      lists: [
        {
          intro: "After baseline setup:",
          items: [
            "reconcile sitemap with the index;",
            "noindex service duplicates;",
            "smoke-test key card templates;",
            "lock a Bitrix update checklist.",
          ],
        },
      ],
    },
  ],
};
