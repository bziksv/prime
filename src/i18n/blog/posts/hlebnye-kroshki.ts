import type { BlogPost } from "../../../data/blog";

/** EN overlay for hlebnye-kroshki — same structure as RU JSON. */
export const hlebnyeKroshkiEn: BlogPost = {
  slug: "hlebnye-kroshki",
  title: "Breadcrumbs on a website: navigation and SEO",
  date: "2017-12-19",
  category: "SEO",
  cover: "/images/blog/hlebnye-kroshki/cover-en.webp",
  excerpt:
    "What breadcrumbs are, why they matter for UX and SEO, which schemes exist, and how to build the trail: none on the homepage, markup for the snippet, no “TOP via breadcrumbs” promises.",
  lead: [
    "Breadcrumbs are the “where am I” trail: Home → Section → Subsection → Page. Someone from search sees the hierarchy at once and can move one level up in a click.",
    "Below — breadcrumb types, design rules, and the SEO link (internal linking, snippet). This is a navigation layer, not a separate “TOP-1 guarantee” factor.",
  ],
  faq: [
    {
      q: "Need breadcrumbs on a one-pager?",
      a: "Usually no. They make sense on catalogs, nested services, blogs, and portals.",
    },
    {
      q: "Put breadcrumbs on the homepage?",
      a: "No. On the home page the trail is redundant and often looks odd.",
    },
    {
      q: "Is the current page clickable?",
      a: "No: the last item is text without a link to itself. Levels above get links.",
    },
    {
      q: "Do breadcrumbs get you TOP?",
      a: "Not as a “ranking button”. They help UX, internal linking, and sometimes the snippet look with correct markup.",
    },
    {
      q: "Need Schema BreadcrumbList?",
      a: "Preferably: raises the chance of breadcrumbs in SERP. It doesn’t replace clear HTML navigation on the page.",
    },
    {
      q: "Where to place them?",
      a: "Usually above the content, in one place on all templates, contrasty and readable on mobile.",
    },
    {
      q: "How do they differ from the menu?",
      a: "The menu is a section map. Breadcrumbs are the path to the current page in the hierarchy (or a view path — rarer).",
    },
    {
      q: "Is a long trail bad?",
      a: "On deep catalogs shorten the middle (“…”), but keep hierarchy meaning. Better simplify structure than hide chaos.",
    },
  ],
  sections: [
    {
      title: "What they are and where the name comes from",
      level: 2,
      paras: [
        "The term comes from English breadcrumbs — path markers from the fairy tale. In UI it’s a string of levels showing where the page sits in the site structure.",
        "Especially useful when someone lands from search straight on a product card or deep article: breadcrumbs explain “which section I’m in” and open a way to the category without wandering the menu.",
      ],
      lists: [
        {
          intro: "Breadcrumb jobs:",
          items: [
            "orientation (“system status visibility”);",
            "quick move one level up;",
            "extra internal links up the hierarchy;",
            "structure hint in the snippet (with markup).",
          ],
        },
      ],
      links: [
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "UX and SEO: what they really give",
      level: 2,
      paras: [
        "For people breadcrumbs shorten the path: from a vacuum cleaner card into “Vacuum cleaners”, not through the whole catalog again. That cuts friction and supports depth without faking engagement.",
        "For search — extra relevant internal links up the hierarchy and a chance to show the path in the snippet. Don’t confuse with “PageRank magic”: breadcrumbs strengthen a clear structure; they don’t replace content and tech.",
      ],
      lists: [
        {
          intro: "SEO effect that matters:",
          items: [
            "section ↔ page linking;",
            "clearer clusters in structure;",
            "rich breadcrumbs in SERP with valid markup;",
            "no instant-TOP promises.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Adding breadcrumbs is part of UX/structure prep. Core rank buildup planned 2–6 months of systemic work — not “added breadcrumbs — TOP tomorrow”.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
        {
          label: "Snippet",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "What kinds exist",
      level: 2,
      paras: [
        "**Linear (location-based)** — reflect hierarchy: Home → Catalog → Category → Product. The most common and useful option for SEO.",
        "**“Back to…”** — one button to the previous context (handy after on-site search, weaker as a site map). **Hybrid** — trail + a point “back to results” where the path doesn’t match hierarchy.",
      ],
      lists: [
        {
          intro: "What to choose:",
          items: [
            "stores and services — linear hierarchy;",
            "search/filter results — extra “back to results”;",
            "don’t build path-based breadcrumbs just to spam links.",
          ],
        },
      ],
    },
    {
      title: "How to design them right",
      level: 2,
      paras: [
        "Don’t show breadcrumbs on the homepage. The current item isn’t a link. Separators (“/”, “›”) aren’t clickable. The same block on all templates above the content.",
        "Level text — human section names, not “page-id=17”. On mobile the trail shouldn’t break layout: wrapping or careful middle shortening is fine.",
      ],
      lists: [
        {
          intro: "Rules:",
          items: [
            "no breadcrumbs on home;",
            "last item without href to itself;",
            "contrast and a stable place;",
            "names = real sections;",
            "match URL/menu logic.",
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Markup for the snippet",
      level: 2,
      paras: [
        "Add `BreadcrumbList` (JSON-LD or microdata) aligned with the visible trail. Search isn’t obliged to show breadcrumbs, but without markup the odds drop.",
        "Check with validators and how it looks in SERP. Markup must match HTML: mismatches hurt trust in the data.",
      ],
      lists: [
        {
          intro: "Control:",
          items: [
            "JSON-LD = what’s on screen;",
            "absolute canonical URLs in markup;",
            "no breadcrumbs “for the bot only” without UI.",
          ],
        },
      ],
      links: [
        {
          label: "Snippet and schema",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "Typical mistakes",
      level: 2,
      paras: [
        "Breadcrumbs on home, link to the current page, chaotic order, duplicating the whole menu in breadcrumbs, missing on mobile, markup without real navigation.",
        "If site hierarchy is a mess, breadcrumbs only show the mess. Structure sections first — then the trail.",
      ],
      lists: [
        {
          intro: "Rollout checklist:",
          items: [
            "catalog/card/article templates;",
            "check landing from search;",
            "mobile layout;",
            "BreadcrumbList valid;",
            "crawler sees upper-level links.",
          ],
        },
      ],
      links: [
        {
          label: "Page duplicates",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
  ],
  related: [
    "navigatsiya-sayta",
    "vnutrennyaya-perelinkovka",
    "seo-struktura-sayta",
    "snippet",
    "karta-sayta",
    "gipertekst",
  ],
};
