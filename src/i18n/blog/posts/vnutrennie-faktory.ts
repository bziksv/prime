import type { BlogPost } from "../../../data/blog";

/** EN overlay for vnutrennie-faktory — same structure as RU JSON. */
export const vnutrennieFaktoryEn: BlogPost = {
  slug: "vnutrennie-faktory",
  title: "Internal ranking factors: what to fix on the site",
  date: "2019-07-17",
  category: "SEO",
  cover: "/images/blog/vnutrennie-faktory/cover-en.webp",
  excerpt:
    "On-page SEO without mystique: content, structure, internal linking, HTTPS, speed, and mobile — what to control on your side and in what order.",
  lead: [
    "Internal ranking factors are everything you can improve on the site itself: copy and media, URL structure, headings and snippets, internal linking, HTTPS, speed, mobile, and usability.",
    "External signals (links, mentions, some behavioral effects) take longer and are harder to control directly. Below — a practical on-page map: what to check, where to dig deeper, and how not to confuse prep with promising TOP “next week”.",
  ],
  faq: [
    {
      q: "How do internal factors differ from external?",
      a: "Internal — on your domain: content, tech, structure, UX. External — links and signals off-site. Both matter; without an on-page base, external efforts often stall.",
    },
    {
      q: "Where to start if the site is raw?",
      a: "Indexing and status codes, HTTPS, mobile, unique title/H1 on money URLs, basic structure and speed. Then content depth and internal linking.",
    },
    {
      q: "Is this the same as a technical SEO audit?",
      a: "They overlap. An audit is a check method; internal factors are an influence map. The audit answers “what’s broken”; this article — “what counts as on-page”.",
    },
    {
      q: "Must every item be perfect?",
      a: "No. Prioritize by business impact: money landings and crawl. Snippet cosmetics without indexing are useless.",
    },
    {
      q: "Do images and video matter?",
      a: "Yes: meaning (alt, context), file weight (speed), and time on page. Heavy uncompressed media hits CWV and UX.",
    },
    {
      q: "Is internal linking an internal factor?",
      a: "Yes. It passes equity and helps bots and people find important URLs. Without it, clusters live in isolation.",
    },
    {
      q: "Is usability SEO?",
      a: "There’s no direct “button score”, but convenience affects behavior and conversion. Bad UX eats the effect even with good ranks.",
    },
    {
      q: "When to expect rank growth after fixes?",
      a: "On-page prep and cleanup — a guide of weeks–month. Core TOP buildup planned 2–6 months after systematic work starts, not “tomorrow after HTTPS”.",
    },
  ],
  sections: [
    {
      title: "Map: internal vs external",
      level: 2,
      paras: [
        "Search evaluates the document and the site as a whole. Simply: internal factors are what you edit in the CMS, templates, and on the server; external — links, mentions, signals around the domain.",
        "A classic mistake is chasing links onto a raw site: slow, without HTTPS, with duplicates and empty landings. First make the resource readable for bots and people, then strengthen the external track.",
      ],
      lists: [
        {
          intro: "Internal usually includes:",
          items: [
            "content: copy, media, uniqueness, and intent match;",
            "meta and headings: title, description, H1–H3;",
            "URL structure and navigation;",
            "internal linking;",
            "HTTPS, speed, mobile-friendly;",
            "basic UX: forms, readability, clickability.",
          ],
        },
        {
          intro: "External — rough guides:",
          items: [
            "quality and diversity of inbound links;",
            "brand mentions;",
            "some behavioral effects outside your direct control.",
          ],
        },
      ],
      links: [
        {
          label: "Backlink profile analysis",
          href: "/en/blog/ssylochnyy-profil/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Content, headings, and snippets",
      level: 2,
      paras: [
        "The page should answer the query: not “stuff the key”, but close the user’s job. One clear H1, a logical H2–H3 hierarchy, title and description that aren’t copies of each other.",
        "Media support meaning: clear file names, sensible alt, reasonable weight. Empty filler and template duplicates are weaker than unique materials for the cluster.",
      ],
      lists: [
        {
          intro: "Landing minimum:",
          items: [
            "unique title and description;",
            "one H1, no competing copies;",
            "copy/media matched to cluster intent;",
            "no cannibalization with neighboring URLs.",
          ],
        },
      ],
      links: [
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
        {
          label: "Query cannibalization",
          href: "/en/blog/kannibalizatsiya-zaprosov/",
        },
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "Site structure, URLs, and internal linking",
      level: 2,
      paras: [
        "Clean URLs and short readable paths help people and the snippet. Breadcrumbs and clear navigation reduce “getting lost” on the site.",
        "Internal links build clusters: from overviews to detail, from related pages to the intent canon. Menu and footer shouldn’t spawn thousands of weak links to junk URLs.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "section map under semantics, not “whatever the CMS made”;",
            "Latin URLs, no junk params in the canon;",
            "linking to money and answers, not only home;",
            "duplicates and pagination under control (canonical / noindex by scenario).",
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Page duplicates",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "Tech: HTTPS, speed, mobile",
      level: 2,
      paras: [
        "HTTPS is a baseline expectation for browsers and users: no mixed content, a correct certificate, and http→https redirect. Speed (Core Web Vitals and felt load) affects bounces and crawl.",
        "Mobile-first: templates must work on a phone — taps, forms, readability. A separate “2012 mobile version” with cut content is a risk.",
      ],
      lists: [
        {
          intro: "Control list:",
          items: [
            "valid SSL and chain;",
            "no mixed content on key templates;",
            "image compression, cache, sensible JS;",
            "responsive without horizontal scroll and micro-buttons.",
          ],
        },
      ],
      links: [
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
        {
          label: "Common SEO mistakes",
          href: "/en/blog/seo-oshibki/",
        },
      ],
    },
    {
      title: "Usability and on-site behavior",
      level: 2,
      paras: [
        "Usability isn’t “bought” with fake engagement. Readable copy, a clear CTA, working forms, and no pop-up traps cut irritation and help conversion.",
        "If the user can’t find an answer or hits a 500 — ranks and ads won’t save you. UX is part of internal factors in a broad sense: you control the template and content.",
      ],
      lists: [
        {
          intro: "What to check by hand:",
          items: [
            "the first screen explains the offer;",
            "contacts and forms work on mobile;",
            "no aggressive overlays covering content;",
            "404s and empty sections don’t dead-end without navigation.",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t confuse UX improvement with schemes that fake behavioral signals — different things and different risks.",
        },
      ],
    },
    {
      title: "Site-wide settings",
      level: 2,
      paras: [
        "Some factors hit the whole domain: robots.txt, sitemap, template canonicals, language/region in panels, a consistent title style, indexing policy for filters and site search.",
        "A template mistake (e.g. noindex on a whole section or canonical “everything to home”) hits thousands of URLs at once. So global-track edits need a backup and a smoke check after deploy.",
      ],
      lists: [
        {
          intro: "Global checklist:",
          items: [
            "robots doesn’t block what’s needed;",
            "sitemap is current and in Webmaster/GSC;",
            "canonical and pagination aligned;",
            "utility/filter URLs under control.",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Work order and timeline expectations",
      level: 2,
      paras: [
        "First remove crawl and trust blockers, then strengthen content and structure of money clusters, and monitor cabinets in parallel. Connect the external track (links) when the base isn’t collapsing.",
        "On-page fixes are part of prep. Core ranking buildup after systematic work starts planned takes months: a TOP horizon of 2–6 months, not “turned on HTTPS — top-3 tomorrow”.",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "a backlog prioritized by business impact;",
            "a crawl after major releases;",
            "once a month — error review in Webmaster/GSC;",
            "track prep and rank dynamics separately.",
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
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "seo-oshibki",
    "seo-struktura-sayta",
    "https-seo",
    "ssylochnyy-profil",
    "samostoyatelnoe-seo",
  ],
};
