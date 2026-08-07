import type { BlogPost } from "../../../data/blog";

/** EN overlay for vnutrennyaya-perelinkovka — same structure as RU JSON. */
export const vnutrennyayaPerelinkovkaEn: BlogPost = {
  slug: "vnutrennyaya-perelinkovka",
  title: "Internal linking: anchors, schemes, and practice",
  date: "2020-01-15",
  category: "SEO",
  cover: "/images/blog/vnutrennyaya-perelinkovka/cover-en.webp",
  excerpt:
    "Why internal linking matters, how anchor links differ from bare ones, automation vs manual work, typical schemes for head/mid/long-tail, and mistakes that hurt more than they help.",
  lead: [
    "Internal linking is links between pages of one site. For people it’s a path to the right section and related materials; for search — a hint which URLs matter and how topics connect.",
    "Below — benefits, anchors, auto/manual tracks, schemes by frequency, and a practical order without a cult of “magic equity”. You need a clear section structure first; linking strengthens it — it doesn’t replace it.",
  ],
  faq: [
    {
      q: "How does linking differ from site structure?",
      a: "Structure is the hierarchy of sections and URLs. Linking is concrete links in the menu, breadcrumbs, body copy, and “related” blocks. See the SEO structure article.",
    },
    {
      q: "How many internal links are normal on a page?",
      a: "As many as help navigation. Dozens of lookalike anchors in a paragraph are spam risk. Menu + breadcrumbs + 2–5 fitting contextual links usually suffice.",
    },
    {
      q: "Are exact keyword anchors required?",
      a: "No. A mix of brand, URL, “read more”, and rare exact matches looks more natural than the same commercial anchor everywhere.",
    },
    {
      q: "Are auto plugins enough?",
      a: "For “related” and breadcrumbs — yes as a base. Key commercial URLs are better linked by hand by meaning.",
    },
    {
      q: "Should every outbound link be blocked from indexing?",
      a: "Not as dogma. Useful outbounds are fine; spammy and purely utility ones — nofollow/ugc by case. Don’t confuse that with internal hygiene.",
    },
    {
      q: "Do several links from one page to the same URL count?",
      a: "For passing signals the first in code/context usually matters. Duplicating the same anchor in a pack adds little.",
    },
    {
      q: "Is linking TOP in a month?",
      a: "No. It’s an optimization layer. Site prep — about weeks–month; core ranking buildup planned 2–6 months after work starts.",
    },
    {
      q: "Where to start on an old site?",
      a: "Scan internal links (crawler), map important URLs, fix broken and irrelevant ones, strengthen entries to money pages from related materials.",
    },
  ],
  sections: [
    {
      title: "Why internal linking matters",
      level: 2,
      paras: [
        "It speeds crawling: the bot finds URLs via links, not only through the sitemap. Users reach a service, product card, or article faster and hit fewer dead ends — that supports behavioral signals without fake engagement.",
        "Links help distribute attention across important landings: categories, commercial pages, strong guides. For young sites this is one of the most available levers: external mentions are expensive, and you control internal links yourself.",
      ],
      lists: [
        {
          intro: "Effects with a sensible approach:",
          items: [
            "clearer navigation;",
            "faster discovery of new URLs;",
            "clearer topical clusters;",
            "fewer “orphans” with no inbound links.",
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
      ],
    },
    {
      title: "Anchor and bare links",
      level: 2,
      paras: [
        "An anchor is the link text. A good anchor promises what’s on the target page and fits the paragraph. For a store that may be a category or model name; for an article — a related topic. “Related” and “you may like” blocks work if the list is relevant — not random.",
        "Bare anchors (“here”, “read more”, brand, raw URL) lower over-optimization of the anchor list. Keep balance: don’t turn the whole menu into the same commercial key.",
      ],
      lists: [
        {
          intro: "Anchor practice:",
          items: [
            "unique phrasing to important URLs;",
            "relevance to surrounding text;",
            "no spam of exact matches in every paragraph;",
            "text links in the menu beat unlabeled image “buttons”.",
          ],
        },
      ],
      links: [
        {
          label: "Hypertext",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Automatic and manual linking",
      level: 2,
      paras: [
        "Automation — sitewide elements: menu, breadcrumbs, HTML map, related blocks by tags/categories. Quickly gives a navigation frame on a CMS (including related/breadcrumb plugins). Downside — weak sense control: “related” can lead past intent.",
        "Manual (contextual) — in-body links to related services, categories, and breakdowns. Slower, but more precise. On a new site connect new materials with old ones and vice versa after indexing; on an old site strengthen money URLs from nearest-sense documents.",
      ],
      lists: [
        {
          intro: "A working hybrid:",
          items: [
            "menu + breadcrumbs + sitemap as the base;",
            "related with category filters;",
            "manual links to top commercial pages;",
            "a crawler for broken and orphan URLs.",
          ],
        },
      ],
      links: [
        {
          label: "XML sitemap",
          href: "/en/blog/karta-sayta/",
        },
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
      ],
    },
    {
      title: "Schemes by query frequency",
      level: 2,
      paras: [
        "Schemes are simplified models, not dogma. For head terms people often strengthen the homepage and top sections: lower pages link up the hierarchy. For mid terms (typical store) second-level category weight: home → categories ← cards/subsections. For long-tail, deeper landings matter more — linked from above and from neighboring materials.",
        "Semantics and URL hierarchy first, then the link scheme. Connecting different meanings “for equity” hurts: people and bots expect logic. Watch clicks and bounce — a click map shows which paths are alive.",
      ],
      lists: [
        {
          intro: "Scheme limits:",
          items: [
            "no universal “ring” magic;",
            "link spam on a page hits trust;",
            "one strong contextual link beats five identical ones;",
            "structure matters more than clever arrow geometry.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Ecommerce promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "A practical work order",
      level: 2,
      paras: [
        "1) List priority URLs from the core. 2) Scan current internal links and broken ones. 3) Check: anchor and target page match in meaning. 4) Add contextual ties and fix the menu. 5) Recrawl and monitor index/traffic.",
        "Keep a simple table: URL → target queries → inbound count → notes. That shows “light” pages with 1–2 inbounds and candidates to strengthen.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "the same anchor on every link;",
            "links to irrelevant URLs;",
            "ignoring broken links and redirect chains;",
            "expecting TOP from rearranging links alone.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Linking is a work layer — not a replacement for content and tech. TOP for the core builds over months after promotion starts.",
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "seo-struktura-sayta",
    "navigatsiya-sayta",
    "karta-sayta",
    "chto-takoe-ssylka",
    "screaming-frog",
    "semanticheskoe-yadro",
  ],
};
