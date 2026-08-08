import type { BlogPost } from "../../../data/blog";

/** EN overlay for uznat-cms — same structure as RU JSON. */
export const uznatCmsEn: BlogPost = {
  slug: "uznat-cms",
  title: "How to tell a site’s CMS: code, clues, and tools",
  date: "2020-08-24",
  category: "SEO",
  cover: "/images/blog/uznat-cms/cover-en.webp",
  excerpt:
    "How to identify a site engine from HTML, meta generator, paths, cookies, and online detectors — and what to do if the CMS is hidden or custom.",
  lead: [
    "Knowing a competitor’s or another project’s CMS helps estimate the stack, plugins, and typical SEO limits. That’s open-signal reconnaissance — not hacking.",
    "Below: manual code review, what to check in robots and URLs, online detectors, and why “nothing found” often means custom code or a well-hidden generator. For a nearby WP article without the `-2` suffix, treat this as the canon.",
  ],
  faq: [
    {
      q: "Why know the CMS?",
      a: "To understand URL templates, typical SEO modules, how fast edits go live, and risks (outdated plugins). For a bid — estimate work complexity.",
    },
    {
      q: "Is it legal?",
      a: "Reading public HTML and headers is normal practice. Breaking into admin, brute force, and exploits are not.",
    },
    {
      q: "Is meta generator always there?",
      a: "No. WordPress and others often disable it. Missing generator doesn’t mean “not a CMS.”",
    },
    {
      q: "Which CMS get detected most?",
      a: "WordPress, Bitrix, OpenCart, Joomla, MODX, Tilda/builders — via asset paths and typical markers.",
    },
    {
      q: "Do tools get it wrong?",
      a: "Yes. Cross-check two sources and the code by eye. Custom Laravel/Next may show as “unknown.”",
    },
    {
      q: "Does robots.txt help?",
      a: "Sometimes: `/wp-admin`, `/bitrix/`, `/catalog/` paths reveal the ecosystem. Not always.",
    },
    {
      q: "What do cookies show?",
      a: "Names like `PHPSESSID`, `BITRIX_SM_…`, `wp-settings-` are hints, not a verdict.",
    },
    {
      q: "What if nothing is visible?",
      a: "Likely custom, headless, or heavily cleaned markers. Then look at the stack via JS bundles and server headers — carefully, without vulnerability scanning.",
    },
  ],
  sections: [
    {
      title: "Manual HTML review",
      level: 2,
      paras: [
        "Open the source (View Source / Ctrl+U). Look for `meta name=\"generator\"`, paths `/wp-content/`, `/bitrix/`, `/skin/frontend/`, template comments, typical body classes.",
        "In DevTools → Network check static URLs: `wp-includes`, `catalog/view/theme`, `tildacdn` and similar. One marker isn’t proof — collect matches.",
      ],
      lists: [
        {
          intro: "Quick Ctrl+F:",
          items: [
            "`generator`",
            "`wp-content` / `wp-includes`",
            "`bitrix`",
            "`opencart` / `catalog/view`",
            "`tilda`, `wix`, `shopify`",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Seeing jQuery and deciding it’s a “jQuery engine.” A library ≠ a CMS.",
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "URL, robots, and headers",
      level: 2,
      paras: [
        "`/robots.txt` and the sitemap sometimes contain admin paths or system directories. Pretty URLs like `/index.php?route=` hint at OpenCart; `/blog/2020/05/post/` often WP — but not always.",
        "`X-Powered-By`, cookie names, login redirects — extra clues. Don’t mix up the web server (nginx) with the CMS.",
      ],
      lists: [
        {
          intro: "What to record:",
          items: [
            "public paths from robots",
            "product/article URL pattern",
            "cookie names in Application",
            "login/admin response without password guessing — only that a public URL exists if it’s open",
          ],
        },
      ],
    },
    {
      title: "Online tools and extensions",
      level: 2,
      paras: [
        "Detectors (WhatCMS, BuiltWith, Wappalyzer and similar) speed screening: CMS, CDN, analytics, JS frameworks. Results diverge — cross-check.",
        "Browser extensions help across a series of sites. Don’t rely on one verdict for a client contract.",
      ],
      lists: [
        {
          intro: "Practical tips:",
          items: [
            "run the URL in 1–2 tools",
            "confirm with code markers",
            "record a version only if it’s explicit",
            "don’t scan the admin with vulnerability scanners “while you’re at it”",
          ],
        },
      ],
    },
    {
      title: "If the CMS is hidden or custom",
      level: 2,
      paras: [
        "Framework sites (Laravel, Django, Next.js) often have no classic CMS. Builders may mask traces. Then front/back stack and hosting matter more than a “WordPress” label.",
        "For an SEO audit it’s enough to know limits: normal Title templates, filters, speed, code access.",
      ],
      lists: [
        {
          intro: "Takeaway for the work:",
          items: [
            "does the client have code/admin access",
            "need a CMS or custom developer",
            "typical SEO modules yes/no",
            "hour estimate for the stack",
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
      title: "Typical markers of popular systems",
      level: 2,
      paras: [
        "WordPress: `/wp-content/`, `/wp-json/`, sometimes generator. 1C-Bitrix: `/bitrix/`, `BITRIX_*` cookies. OpenCart: `route=product/`, themes in `catalog/view`. Joomla: `/components/`, `/media/jui/`. Tilda: `tildacdn.com`, `t-` classes.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "markers get faked and stripped",
            "multisite and headless confuse detection",
            "CMS version in generator meta can be stale",
            "plugins ≠ proof of the core, but strengthen the hypothesis",
          ],
        },
      ],
    },
    {
      title: "Ethics and boundaries",
      level: 2,
      paras: [
        "The goal is to understand the platform for analysis and scoping. Don’t use CMS knowledge to hunt holes, guess passwords, or attack. For your own site, check the admin and hosting docs — more reliable than any detector.",
        "In a client report write: “markers X look like Y; confirm with access.”",
      ],
      lists: [
        {
          intro: "Recon checklist:",
          items: [
            "View Source + Network",
            "robots/sitemap",
            "1–2 external detectors",
            "CMS hypothesis + confidence",
            "no vulnerability scans",
          ],
        },
      ],
      notes: [
        {
          title: "In practice",
          kind: "tip",
          text: "“Detect CMS” ≠ get access. Public markers are the ceiling of legal recon.",
        },
      ],
      links: [
        {
          label: "Website security",
          href: "/en/blog/bezopasnost-sayta/",
        },
      ],
    },
  ],
  related: [
    "ishodnyy-kod",
    "tehnicheskiy-seo-audit",
    "bezopasnost-sayta",
    "seo-bitrix",
    "zakrytie-ot-indeksatsii",
  ],
};
