import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-vebmaster — same structure as RU JSON. */
export const yandeksVebmasterEn: BlogPost = {
  slug: "yandeks-vebmaster",
  title: "Yandex Webmaster: how to connect and what to watch",
  date: "2020-01-23",
  category: "SEO",
  cover: "/images/blog/yandeks-vebmaster/cover-en.webp",
  excerpt:
    "Why Yandex Webmaster matters, how to verify a site, which sections to watch (overview, diagnostics, index, queries, links, tools), and how not to confuse reports with a ranking switch.",
  lead: [
    "Yandex Webmaster is the panel that connects your site to Yandex Search: indexing, errors, queries, sitemap, security, and service settings. Without it, site fixes often stay blind — the bot crawls differently than you think.",
    "Below: how to add a property, which blocks to check regularly, and how to read data without obsessing over positions. Menus and tab names move — lean on report meaning and current Yandex Help. Webmaster does not manually push a site up the results.",
  ],
  faq: [
    {
      q: "Does Webmaster replace Google Search Console?",
      a: "No. For an RU audience you usually need both tracks: Yandex and Google.",
    },
    {
      q: "Do I need a Yandex email?",
      a: "You need a Yandex account. Verification — meta tag, HTML file, or DNS TXT (current methods are listed in the UI when you add the site).",
    },
    {
      q: "Is a sitemap required?",
      a: "Not the only URL source, but it helps mid-size and large sites. List it in robots.txt and add it in Webmaster.",
    },
    {
      q: "Does a recrawl request mean instant page-one rankings?",
      a: "No. It’s a request to look at a URL sooner. Rankings depend on page quality, competition, and time; planned share of the core on page one often grows over two to six months after work starts — prep is not the same as rankings.",
    },
    {
      q: "Does IQS still matter?",
      a: "Yandex’s public Site Quality Index badge is long gone from the familiar view. Watch diagnostics, index, clicks, and security — don’t chase outdated badges from old guides.",
    },
    {
      q: "Are Turbo pages required?",
      a: "No. They historically sped content in results; the product and priorities changed. First make a fast, usable main site; add Turbo only if current Help still makes it relevant.",
    },
    {
      q: "Where should I write if a status is unclear?",
      a: "Self-check reports first. Then support via Webmaster Help. A separate article on tickets — Yandex support.",
    },
    {
      q: "How often should I check?",
      a: "After releases — right away. On a plan, weekly: diagnostics, index, queries. Not hourly for a rank jump.",
    },
  ],
  sections: [
    {
      title: "Why Webmaster matters",
      level: 2,
      paras: [
        "You see how Yandex crawls and indexes the site, which URLs are in search, where errors and violations are, which queries drive impressions and clicks, and how external links and service files look. That’s a base for tech and content — not a replacement for semantics and copy.",
        "The panel helps at launch (verify the site, submit a sitemap, catch mirrors) and in ongoing work (index drops, malware, moves, query rises and falls). Without it it’s hard to prove the problem is in search — not only in gut feel.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "verify ownership and set the region",
            "watch the index and exclusions",
            "catch diagnostic and security errors",
            "review query stats",
            "manage moves, crawl rate, notifications",
          ],
        },
      ],
      links: [
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Setup and ownership verification",
      level: 2,
      paras: [
        "Sign in to a Yandex account, add the site URL, and verify ownership. Usually available: meta tag in `<head>`, HTML file in the root, or DNS TXT. After verification, reports and tools open.",
        "Add the canonical host (https, www or non-www — as you’ll live going forward) and check mirror gluing right away. Mistakes here later hurt moves and stats.",
      ],
      lists: [
        {
          intro: "Right after adding:",
          items: [
            "submit a sitemap",
            "check robots.txt with the tool",
            "turn on email notifications",
            "delegate access to a vendor if needed",
          ],
        },
      ],
      links: [
        {
          label: "XML sitemap",
          href: "/en/blog/karta-sayta/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "Overview, quality, and diagnostics",
      level: 2,
      paras: [
        "Overview is a quick pulse: issues, search updates, clicks, crawls, links. Don’t dig everything at once: critical and fatal errors, security and violations first, then possible notes.",
        "Diagnostics flags typical holes (empty descriptions, availability, certificate, and the like) and points to fixes. It’s a health checklist — not a score of how high you rank. Some old quality badges and IQS from 2019–2020 guides are obsolete — lean on current screens.",
      ],
      lists: [
        {
          intro: "Triage priority:",
          items: [
            "security and violations",
            "errors that block crawl or index",
            "mass page exclusions",
            "then snippet cosmetics and tips",
          ],
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: "Snippets",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "Indexing: crawls, sitemap, moves",
      level: 2,
      paras: [
        "The indexing section shows what the bot crawled, what’s in search, why a URL is excluded, and how structure looks from search’s view. CSV and XLS exports help catch duplicates, utility pages, and sudden dropouts.",
        "Useful: recrawl important URLs, monitor key pages, manage crawl rate under server load, and the move wizard (domain, www, https) — only to verified addresses. Linking Metrica can hint popular sections for crawl — a signal, not a ranking guarantee.",
      ],
      lists: [
        {
          intro: "Check regularly:",
          items: [
            "pages in search vs expectation",
            "exclusion reasons",
            "sitemap status",
            "status codes on key URLs",
            "the mirror after a release or move",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
        {
          label: "Installing Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Search queries and links",
      level: 2,
      paras: [
        "Query stats: impressions, clicks, CTR, average positions. Query groups help watch the core and landings. Recommended tips are ideas for semantics and ads, not an autopilot for rankings — check intent and competition.",
        "In links, watch external donor growth and anchors; internals help find broken links. A sharp spammy spike is a reason to audit the profile — not to celebrate “we’re being linked.”",
      ],
      lists: [
        {
          intro: "How to read queries:",
          items: [
            "impressions up, clicks flat — snippet or intent",
            "clicks down at the same impressions — SERP or competitors",
            "commercial-core groups — separate monitoring",
            "don’t confuse average position with a forever place",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
      ],
    },
    {
      title: "Site info and tools",
      level: 2,
      paras: [
        "Region, original texts, how the name shows in results, sitelinks, products and prices (YML) — ways to describe the site more clearly to search. For stores, Market and feed links often matter more than clicking every button by hand.",
        "Tools: check robots.txt, sitemap, server response, mobile usability, markup and feed validators, URL removal from search. Use them after fixes and before a support ticket — requests get shorter and more useful.",
      ],
      lists: [
        {
          intro: "Post-release mini set:",
          items: [
            "robots and sitemap error-free",
            "200/301 checks on key URLs",
            "mobile fitness of critical landings",
            "structured data if you claim rich snippets",
          ],
        },
      ],
      links: [
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
      notes: [
        {
          title: "Turbo and outdated blocks",
          kind: "tip",
          text: "Sections like Turbo pages and old quality badges are detailed in old guides; in the 2020s Yandex priorities changed. Before implementing, check Help — don’t copy a 2019 checklist verbatim.",
        },
      ],
    },
    {
      title: "Settings, support, and place in SEO",
      level: 2,
      paras: [
        "In settings turn on critical-issue notifications, delegate access to an agency, link Metrica if needed. Don’t give full access to everyone — only people who actually run the site.",
        "Webmaster is a diagnostic track. Site prep (tech, semantics, copy) may take about a month; ranking buildup for the core is a different horizon — more often two to six months after work starts. If a panel status is unclear after self-check — write support with facts, not a demand to “put us on page one.”",
      ],
      lists: [
        {
          intro: "Weekly ritual:",
          items: [
            "diagnostics and security",
            "pages-in-search dynamics",
            "leading queries and CTR anomalies",
            "open tickets from findings",
          ],
        },
      ],
      links: [
        {
          label: "Yandex support",
          href: "/en/blog/podderzhka-yandeks/",
        },
        {
          label: "Why the site isn’t ranking",
          href: "/en/blog/sayt-ne-v-top/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Webmaster reports are not page-one rankings. Prep and index are one thing; lasting core rankings build over months — typically two to six after work starts.",
        },
      ],
    },
  ],
  related: [
    "google-search-console",
    "podderzhka-yandeks",
    "karta-sayta",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
    "metrika-ustanovka",
  ],
};
