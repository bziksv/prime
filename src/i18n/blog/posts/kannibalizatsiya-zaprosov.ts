import type { BlogPost } from "../../../data/blog";

/** EN overlay for kannibalizatsiya-zaprosov — same structure as RU JSON. */
export const kannibalizatsiyaZaprosovEn: BlogPost = {
  slug: "kannibalizatsiya-zaprosov",
  title: "Keyword cannibalization: how to find and fix it",
  date: "2019-08-08",
  category: "SEO",
  cover: "/images/blog/kannibalizatsiya-zaprosov/cover-en.webp",
  excerpt:
    "When several site pages fight for one query, why it hurts, how to spot the conflict, and what to do: merge, separate intents, or strengthen one URL.",
  lead: [
    "Query cannibalization is when several URLs on one site are optimized for the same (or almost the same) phrase and block each other in the SERP. Search engines can’t tell which document is primary; link equity and clicks get smeared.",
    "Consequences show up in unstable rankings; prevent it during keyword research, find conflicts early, and fix them cleanly. Page duplicates are related; cannibalization is more about competing intents than copy-pasted HTML alone.",
  ],
  faq: [
    {
      q: "How does cannibalization differ from duplicates?",
      a: "Duplicates — nearly identical content on different URLs. Cannibalization — different (or similar) pages fight for one query. They often overlap, but treatments differ.",
    },
    {
      q: "Are two pages with one key always bad?",
      a: "Not always. Sometimes intents differ (informational vs commercial). The problem is when meaning and snippets compete without separation.",
    },
    {
      q: "Does search always keep one page?",
      a: "It often shows one, but the pick may be the wrong one. Sometimes both are weaker than competitors without cannibalization. Check Webmaster/GSC and the SERP.",
    },
    {
      q: "Does a 301 to the homepage help?",
      a: "Only if the extra URLs truly aren’t needed. Blindly merging everything to home breaks structure. Merge onto the strong relevant cluster URL.",
    },
    {
      q: "What about an online store?",
      a: "Category vs cards vs tags: different roles. Don’t push 10 lookalike listings with one head term. SKU/attributes in title help tell cards apart, but don’t replace clustering.",
    },
    {
      q: "Can I use canonical instead of deletion?",
      a: "If both URLs are needed for users but only one should index: canonical + indexing settings. If the URL is obsolete — 301.",
    },
    {
      q: "How do I avoid creating the problem upfront?",
      a: "Core clustering: one main intent — one landing. Unique title/description. Strong internal linking to the cluster canon.",
    },
    {
      q: "Is cannibalization a quick fix?",
      a: "Diagnosis — days. Merges and reindexing — weeks. In parallel the site is prepared for promotion; TOP for the core — planned 2–6 months of work, not “after one redirect”.",
    },
  ],
  sections: [
    {
      title: "What query cannibalization is",
      level: 2,
      paras: [
        "You optimize several pages for one phrase: matching titles, overlapping copy, similar anchors. For the bot that’s several candidates without a clear leader.",
        "Search scenarios: show one (sometimes weak) or split attention so none builds resilience against sites with one strong URL.",
      ],
      lists: [
        {
          intro: "Typical sources:",
          items: [
            "a blog post + a commercial service under one head term;",
            "two categories/tags with one meaning;",
            "filters and sorts in the index;",
            "landing copies “for every key” without unique value.",
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
    {
      title: "Why it hurts",
      level: 2,
      paras: [
        "Relevance blurs: the SERP may show the wrong landing (lower conversion, higher bounce). Internal and external links split equity among in-site competitors instead of strengthening one URL.",
        "In analytics, goals are “smeared” across pages — harder to measure content and link effect. Users see lookalike snippets from one domain and trust the structure less.",
      ],
      lists: [
        {
          intro: "Effects:",
          items: [
            "jumping URLs in the top for one phrase;",
            "weaker total click than one leader;",
            "wasted spend on links “to nowhere”;",
            "confusion in the content plan and writer briefs.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Cannibalization isn’t a separate everyday “penalty filter” — it’s your own documents competing. Fix structure, not fake engagement.",
        },
      ],
    },
    {
      title: "How to prevent it at the start",
      level: 2,
      paras: [
        "Keyword research and clustering before mass publish: one landing — one main intent. Title and description unique. Section and blog map aligned.",
        "Don’t spawn “almost identical” landings for every key variation. Better one strong URL with a natural long-tail than ten thin copies.",
      ],
      lists: [
        {
          intro: "Content-plan rules:",
          items: [
            "cluster → one canon URL;",
            "adjacent phrases — in the canon’s H2/FAQ, not new URLs without need;",
            "commercial and info — different URLs if intent differs;",
            "before publish — search “do we already have a page on this”.",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Entry points",
          href: "/en/blog/tochki-vhoda/",
        },
      ],
    },
    {
      title: "How to find cannibalization",
      level: 2,
      paras: [
        "Small site: a URL × main key × title table. Hunt repeats. In the SERP: `site:` + phrase; Webmaster/GSC — which URLs get impressions for the query.",
        "A crawler and rank reports show several URLs with overlapping queries. Audit tools sometimes highlight “keyword cannibalization” — treat as a hypothesis and verify intent by hand.",
      ],
      lists: [
        {
          intro: "Diagnosis:",
          items: [
            "two+ URLs in the top-20 for one phrase;",
            "frequent URL swaps in the SERP;",
            "nearly identical titles;",
            "internal linking with one anchor to different targets.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
    {
      title: "How to resolve the conflict",
      level: 2,
      paras: [
        "Pick the cluster winner (traffic, conversion, links, completeness). The rest: 301 to the canon, or change intent/keys, or noindex/canonical — by URL role.",
        "Strengthen the canon: content, linking, external links to it. For a store: clearly separate category, card, and filter; don’t index endless parameter combos.",
      ],
      lists: [
        {
          intro: "Treatment options:",
          items: [
            "301 the extra onto the strong URL;",
            "canonical if both URLs are needed in the UI;",
            "separate topics (rewrite for another intent);",
            "merge texts into one piece;",
            "fix internal-link anchors.",
          ],
        },
      ],
      tables: [
        {
          caption: "Quick action choice",
          headers: ["Situation", "Action"],
          rows: [
            ["Copy / obsolete landing", "301 to the canon"],
            ["Both URLs needed in the UI", "canonical + clear intent"],
            ["Info and commercial overlapped", "Separate copy and keys"],
            ["Thin “for every key” pages", "Merge into one strong URL"],
          ],
        },
      ],
      links: [
        {
          label: "301 in .htaccess",
          href: "/en/blog/htaccess-301/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Control after fixes",
      level: 2,
      paras: [
        "Request recrawl of the canon and merged URLs. Watch whether the URL stabilized in the SERP and whether total cluster visibility grew. Don’t expect instant TOP: first the address “jump” fades, then the rank builds.",
        "Return to the content plan: ban spawning duplicate clusters without review. Once a quarter — selective head-term checks for multiple URLs.",
      ],
      lists: [
        {
          intro: "Case-close checklist:",
          items: [
            "canon chosen and strengthened;",
            "redirects/canonical work;",
            "sitemap without extra URLs;",
            "linking points to the canon;",
            "in GSC/Webmaster impressions converge on one URL.",
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
    "dubli-stranits",
    "semanticheskoe-yadro",
    "kanonicheskiy-teg",
    "vnutrennyaya-perelinkovka",
    "htaccess-301",
    "tochki-vhoda",
  ],
};
