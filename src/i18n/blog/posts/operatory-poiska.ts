import type { BlogPost } from "../../../data/blog";

/** EN overlay for operatory-poiska — same structure as RU JSON. */
export const operatoryPoiskaEn: BlogPost = {
  slug: "operatory-poiska",
  title: "Search operators in SEO",
  date: "2020-03-03",
  category: "SEO",
  cover: "/images/blog/operatory-poiska/cover-en.webp",
  excerpt:
    "How to use Google and Yandex operators in SEO: site:, intitle:, inurl:, filetype: and combos — for index, duplicates, and research, without outdated “magic” commands.",
  lead: [
    "Operators (query language) refine results: pages of one site, a word in the title, a PDF, an exact phrase. For SEO that’s a quick manual slice of the index and competitors — slower than an API/crawler, but with no subscription.",
    "Below — syntax, practical operators, and scenarios: index checks, duplicates, files, internal linking. Some old Google commands weakened or vanished (`related:`, `cache:` behavior changes) — always verify on the live SERP. This isn’t an audit replacement or a “TOP button”.",
  ],
  faq: [
    {
      q: "Does site: show every indexed page?",
      a: "No — it’s a sample. The number in the SERP header is an estimate. For completeness use Webmaster / Search Console and a crawler.",
    },
    {
      q: "Does cache: still work?",
      a: "Behavior has changed; more reliable is crawl date in webmaster panels and saved copies where available.",
    },
    {
      q: "How does Yandex differ from Google?",
      a: "The operator set is narrower and the syntax differs. Basic ideas (site, exact phrase, filetype) are similar — check Yandex Help.",
    },
    {
      q: "Can you combine operators?",
      a: "Yes: `site:example.com intitle:\"delivery\" -cart`. Mind spaces/quotes; test short queries.",
    },
    {
      q: "related: for finding donors?",
      a: "The operator is unstable/weakened. For sites, prefer topical search, outreach, and backlink tools.",
    },
    {
      q: "Is this legal?",
      a: "Yes for researching public SERPs of your and others’ sites. Don’t use operators as cover for hacking, scraping against rules, or spam.",
    },
    {
      q: "Why operators if you have Screaming Frog?",
      a: "A crawler sees your HTML. Operators show what’s already in the search index — a different slice.",
    },
    {
      q: "Will operators raise rankings?",
      a: "No. They’re diagnostics. Fixes and content are separate; TOP for the core is planned 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "How the syntax works",
      level: 2,
      paras: [
        "Typical form: `operator:value` with no space after the colon. Exact phrase — in quotes. Minus `-word` excludes a term. Parentheses and `OR` group alternatives (`OR` case matters in Google).",
        "Combine carefully: simple query first, then refine. If results are empty — drop an extra operator and check typos.",
      ],
      lists: [
        {
          intro: "Basic moves:",
          items: [
            "`\"exact phrase\"`;",
            "`-minusword`;",
            "`OR` / `|` for alternatives;",
            "`*` as a wildcard (where it still works);",
            "parentheses for grouping.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "A space after `site:` or curly quotes instead of straight ones — the query breaks.",
        },
      ],
    },
    {
      title: "Key Google operators for SEO",
      level: 2,
      paras: [
        "`site:` — domain/path pages in results. `intitle:` / `allintitle:` — word or phrase in the title. `inurl:` / `allinurl:` — in the URL. `intext:` / `allintext:` — in the body (noisier).",
        "`filetype:pdf` (and others) — file search. `before:` / `after:` — document date limits (where supported). Prices via `$` — a narrow unstable case, almost unused for RU stores.",
      ],
      tables: [
        {
          caption: "Common set",
          headers: ["Operator", "Why in SEO"],
          rows: [
            ["site:", "Index slice for a domain/section"],
            ["intitle:", "Pages with a key in the title"],
            ["inurl:", "Pretty URLs, filters, parameters"],
            ["filetype:", "PDF/DOC in the index"],
            ["\"…\"", "Exact match / text duplicates"],
            ["-word", "Minus noise in results"],
          ],
        },
      ],
      notes: [
        {
          title: "Currency",
          kind: "tip",
          text: "Google’s command list shrank for years. Don’t copy “42 operators” from old guides without checking.",
        },
      ],
    },
    {
      title: "Yandex: what to use",
      level: 2,
      paras: [
        "Yandex also has query refiners (site, filetype, exact phrase, and more), but the set and details differ. For an RU project check both tracks: `site:` in Google ≠ the full Yandex picture.",
        "Index counts are more reliable in Yandex Webmaster. Operators are a quick manual check after releases.",
      ],
      lists: [
        {
          intro: "Practice for RU:",
          items: [
            "site: slice in both search engines;",
            "Webmaster + GSC as sources of truth;",
            "Yandex Help on query language — before rare operators.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex support",
          href: "/en/blog/podderzhka-yandeks/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Scenarios: index, duplicates, files",
      level: 2,
      paras: [
        "After launching a section: `site:example.com/catalog/` — are URLs in results. Suspect duplicate titles: `site:example.com intitle:\"same heading\"`. An exact quote in quotes helps find text copies.",
        "Extra PDFs/price lists: `site:example.com filetype:pdf`. Utility paths in the index: `site:example.com inurl:session` or `inurl:sort=` — a reason to close/glue filters.",
      ],
      lists: [
        {
          intro: "Practical checks:",
          items: [
            "new section appears in results;",
            "no pile of duplicate titles;",
            "cart/account not indexed;",
            "extra files aren’t sitting in search;",
            "www and non-www don’t double (after gluing).",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Blocking from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Scenarios: competitors and content",
      level: 2,
      paras: [
        "`site:competitor.com intitle:review` — which content formats they have indexed. Structure ideas, not copy-paste. For internal linking on your site, find strong URLs with `site:` + a key and link deliberately.",
        "Hunting guest sites via `inurl:guest-post` is noisy and often leads to link spam. Prefer topical outreach and live media.",
      ],
      lists: [
        {
          intro: "Ethical boundaries:",
          items: [
            "research the public SERP;",
            "don’t scrape aggressively against rules;",
            "don’t hunt “holes” for hacking;",
            "don’t build strategy on dead operators.",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
      ],
    },
    {
      title: "Limits and place in the process",
      level: 2,
      paras: [
        "Results are personalized and capped. Operators don’t replace a crawler, logs, and webmaster panels. Use them as a cheat sheet on audits and after releases.",
        "Found an issue with an operator — fix with canonical, 301, robots/meta, content. Fix prep — days/weeks; visibility growth for the core — month to month.",
      ],
      lists: [
        {
          intro: "Checklist after a check:",
          items: [
            "log the query and a screenshot;",
            "cross-check Webmaster/GSC;",
            "open a fix ticket;",
            "rerun site:/intitle: after the fix.",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
        {
          label: "SEO software",
          href: "/en/blog/programmy-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Operator diagnostics ≠ TOP. TOP for the core is a separate horizon after the work.",
        },
      ],
    },
  ],
  related: [
    "dubli-stranits",
    "kanonicheskiy-teg",
    "zakrytie-ot-indeksatsii",
    "screaming-frog",
    "google-search-console",
    "analiz-konkurentov",
  ],
};
