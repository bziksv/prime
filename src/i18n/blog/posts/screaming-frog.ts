import type { BlogPost } from "../../../data/blog";

/** EN overlay for screaming-frog — same structure as RU JSON. */
export const screamingFrogEn: BlogPost = {
  slug: "screaming-frog",
  title: "Screaming Frog SEO Spider: a technical site crawl",
  date: "2020-07-07",
  category: "SEO",
  cover: "/images/blog/screaming-frog/cover-en.webp",
  excerpt:
    "How to run a technical crawl in Screaming Frog: spider settings, status codes, title/H1, images, internal links, broken URLs, and Excel export — without an “one-button audit” cult.",
  lead: [
    "Screaming Frog SEO Spider is a desktop crawler: it walks your site like a bot and collects URLs, statuses, meta, headings, links, and page weight. The free version covers a basic audit; paid removes the URL cap and adds integrations.",
    "Below — key Spider settings, how to read reports, and what to fix from the results. Full audit methodology is in the technical SEO audit canon; here the focus is the tool. Crawl your projects or sites you have permission for; don’t DDoS with crawl speed.",
  ],
  faq: [
    {
      q: "Is the free version enough?",
      a: "For small sites — often yes. On large catalogs you hit the URL limit: then a paid license, segmented Include/Exclude crawls, or a URL list export.",
    },
    {
      q: "Should you disable JS and CSS?",
      a: "For classic HTML audits people sometimes exclude heavy assets to speed the crawl. If JS templates and client render matter — use the rendering mode in your current version.",
    },
    {
      q: "Can you ignore robots.txt?",
      a: "On your staging — yes if utility sections are closed. On production first understand why URLs are blocked; don’t open everything with the crawler “for luck”.",
    },
    {
      q: "Does Screaming Frog replace an SEO audit?",
      a: "No. It collects tech. Next — priorities, content, UX, semantics. See the technical SEO audit article.",
    },
    {
      q: "What crawl speed is safe?",
      a: "One that doesn’t flood 5xx and No Response. On weak hosting lower threads/speed. You can filter your own visits in analytics during the audit.",
    },
    {
      q: "What about duplicate titles?",
      a: "Uniqueize templates or glue duplicates with 301/canonical. Mass identical titles signal thin/template pages.",
    },
    {
      q: "Are broken external links critical?",
      a: "External 404s hurt UX and trust. Fix or remove. Internal broken links rank higher in priority.",
    },
    {
      q: "Does an audit mean TOP in a week?",
      a: "No. Crawl and fixes are prep. Rankings for the core grow month to month; planned 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "Why a crawler and where to start",
      level: 2,
      paras: [
        "A crawler finds what the eye misses: 404s in the menu, duplicate titles, empty HTML, heavy images, odd URLs. Run after major releases and on a schedule.",
        "Set the start URL (prefer canonical https), wait for the queue to stabilize. Export tabs to CSV/Excel — easier to hand tasks to engineering.",
      ],
      lists: [
        {
          intro: "Before you start:",
          items: [
            "access to your site / permission;",
            "clear canonical host;",
            "lower speed on a weak server;",
            "a plan: what you check first.",
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
      title: "Spider settings: Basic, Limits, Advanced",
      level: 2,
      paras: [
        "Configuration → Spider: exclude resource types you don’t need if auditing HTML (legacy Flash/SWF is definitely out). Limits: Search Depth saves huge catalogs — key branches first.",
        "Include/Exclude — crawl only `/blog/` or exclude `/cart/` and infinite filter URLs. Preferences: title, H1, description, URL, alt length thresholds — for your briefs, not as a “Google law”.",
      ],
      lists: [
        {
          intro: "Practical settings minimum:",
          items: [
            "sensible speed / thread count;",
            "depth or Include segment;",
            "respect/ignore robots by task;",
            "meta length thresholds for filters;",
            "check No Response after the run.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Maxing crawl speed on shared hosting and concluding the “site died because of SEO”.",
        },
      ],
    },
    {
      title: "Status codes, meta, and duplicates",
      level: 2,
      paras: [
        "Response Codes: collect 4xx/5xx, redirect chains, Unexpected. Lots of No Response — lower speed and rerun. Internal → HTML: titles, meta descriptions, H1/H2, duplicates and gaps.",
        "Duplicate URLs — Duplicate filter. Empty pages — low Word Count at 200 OK. Don’t blanket-block everything in robots “to hide it”: prefer 301/removal/a proper canonical. Title/description length is a snippet guide, not ranking magic.",
      ],
      lists: [
        {
          intro: "First pass of the report:",
          items: [
            "internal 4xx / 5xx;",
            "missing title / H1;",
            "duplicate title and description;",
            "duplicate URLs;",
            "thin/zero content.",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Images, page weight, internal links",
      level: 2,
      paras: [
        "Images: heavy files and Missing Alt. Compress and set meaningful alt — see the alt canon. Size / Response Time under Internal help find “bricks”, but absolute thresholds like “strictly 200 KB HTML / 6 seconds” are outdated: watch Core Web Vitals and real devices.",
        "Inlinks / Outlinks: important URLs should be reachable from the homepage in a sensible number of clicks and not be “islands”. Outbound spam and broken externals — External tab by status codes.",
      ],
      lists: [
        {
          intro: "What to turn into tickets:",
          items: [
            "images over a sensible weight;",
            "empty alt on informational imgs;",
            "pages with abnormal TTFB/size;",
            "orphans with no internal links;",
            "broken external.",
          ],
        },
      ],
      links: [
        {
          label: "Alt and title on img",
          href: "/en/blog/alt-img/",
        },
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "URLs: hyphens, length, dynamics",
      level: 2,
      paras: [
        "URL tab: Non-ASCII, underscores, dynamic (`?`, `&`), overly long addresses, duplicates. Hyphens beat `_` in pretty URLs; non-Latin in URLs is possible, but Latin is easier for the team — decide by project standard.",
        "Any URL change — 301 to the new canon and fix internal links. Otherwise the crawler shows the same 404s a month later.",
      ],
      lists: [
        {
          intro: "URL filters worth checking:",
          items: [
            "Duplicate;",
            "Underscores;",
            "Non ASCII;",
            "Over N characters;",
            "Parameters / Dynamic.",
          ],
        },
      ],
      links: [
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "How to fold the crawl into the workflow",
      level: 2,
      paras: [
        "Make a checklist: crawl → export → priorities (5xx/404 → duplicates → meta → weight) → tickets → recrawl. Screaming Frog covers the tech layer; semantics, content, and off-site links are other stages.",
        "Prep and fixes — days/weeks. Visibility growth for the core after removing blockers — month to month, planned 2–6 months. Don’t promise “TOP after one Frog run”.",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "crawl after a release;",
            "scheduled monthly/quarterly;",
            "CSV archive with tickets;",
            "recheck closed bugs.",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Parsing: boundaries",
          href: "/en/blog/parsing/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "A technical crawl ≠ TOP. Remove blockers first, then grow rankings.",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "bitye-ssylki",
    "dubli-stranits",
    "kanonicheskiy-teg",
    "razmer-stranitsy",
    "alt-img",
  ],
};
