import type { BlogPost } from "../../../data/blog";

/** EN overlay for proverka-indeksatsii — same structure as RU JSON. */
export const proverkaIndeksatsiiEn: BlogPost = {
  slug: "proverka-indeksatsii",
  title: "Checking site indexing in Google and Yandex",
  date: "2018-11-30",
  category: "SEO",
  cover: "/images/blog/proverka-indeksatsii/cover-en.webp",
  excerpt:
    "How to check whether pages are in the Google and Yandex index: Webmaster and Search Console, the site: operator, extensions, and typical reasons a URL isn’t indexed — without confusing crawl with index.",
  lead: [
    "Indexing means a URL enters the search database used for results. A crawl is faster and doesn’t guarantee the page stays in the index.",
    "Below — how to check status in webmaster cabinets, via `site:`, and related tools, and what to fix when things fail. Not the whole site must be indexed: utility URLs are closed separately. Webmaster/GSC UI changes — report meaning matters more.",
  ],
  faq: [
    {
      q: "Are crawl and indexing the same?",
      a: "No. A robot can visit and still not put the URL in the index (quality, duplicate, noindex, unavailability).",
    },
    {
      q: "Does site: show an exact page count?",
      a: "An order-of-magnitude guide, not accounting. More accurate — Webmaster and Search Console reports.",
    },
    {
      q: "New site not indexed — panic?",
      a: "First check availability, sitemap, robots, and recrawl requests. Timelines differ by project; “exactly two weeks” isn’t law.",
    },
    {
      q: "Everything is indexed but no traffic?",
      a: "Index ≠ rankings and clicks. Look at demand, snippets, competition, and content. Core TOP takes planned months of work.",
    },
    {
      q: "Must everything be indexed?",
      a: "No. Filters, carts, and account areas are often closed. See the piece on blocking from indexing.",
    },
  ],
  sections: [
    {
      title: "Webmaster cabinets",
      level: 2,
      paras: [
        "Yandex Webmaster and Google Search Console are the owner’s main source of truth: pages in search / index coverage, exclusions, crawl errors, dynamics.",
        "Verify site ownership, review indexed/excluded URL lists and reasons (noindex, soft 404, duplicate, discovered — not indexed, etc. — wording drifts). Index history helps catch sudden drops.",
      ],
      lists: [
        {
          intro: "Check first:",
          items: [
            "home and key landings in the index;",
            "4xx/5xx crawl errors;",
            "sitemap accepted;",
            "no mass noindex;",
            "“was → is” dynamics over the period.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "The site: operator and URL spot-checks",
      level: 2,
      paras: [
        "In the search box: `site:example.com` — a rough picture of indexed URLs. A huge Yandex vs Google gap is a reason to dig into tech and quality.",
        "Check a specific page by pasting the full URL or `site:` + path. Empty results don’t always mean “forever out of index”: delays, regionality, cache reset. For a decision — URL inspection in GSC / page check in Webmaster.",
      ],
      lists: [
        {
          intro: "Quick checks:",
          items: [
            "`site:domain` in both engines;",
            "exact page URL;",
            "branded query for the home page;",
            "cross-check with the webmaster cabinet.",
          ],
        },
      ],
      links: [
        {
          label: "Search operators",
          href: "/en/blog/operatory-poiska/",
        },
      ],
    },
    {
      title: "Extensions and monitoring tools",
      level: 2,
      paras: [
        "SEO browser extensions speed up glances at title, meta robots, canonical, and a quick `site:`. They don’t replace the webmaster and don’t give “secret” engine data.",
        "Crawlers and SEO platforms help mass-check: robots, sitemap, status codes, duplicates. Free “everything at once” almost doesn’t exist — pick for site size.",
      ],
      links: [
        {
          label: "Chrome extensions for SEO",
          href: "/en/blog/chrome-rasshireniya-seo/",
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t treat one RDS-bar or peer as index truth. The search engine cabinet beats a plugin.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Why pages index poorly",
      level: 2,
      paras: [
        "A new site or section — normal delay. Speed-ups: internal links, sitemap, quality content, recrawl requests. No “in N days” guarantees.",
        "Typical blockers: Disallow in robots.txt, meta robots noindex, CMS “close the site”, duplicates and thin content, 4xx/5xx, slow server response, broken canonicals.",
      ],
      lists: [
        {
          intro: "Cause checklist:",
          items: [
            "robots.txt and meta robots;",
            "sitemap and internal links;",
            "status codes of key URLs;",
            "duplicates and canonical;",
            "content quality and uniqueness;",
            "Webmaster/GSC errors.",
          ],
        },
      ],
      links: [
        {
          label: "Blocking from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "Indexed — but no traffic",
      level: 2,
      paras: [
        "An indexed page can sit far down or miss demand. Then fix content, snippets, structure, and links — not “hit recrawl again” forever.",
        "Watch dynamics: a sharp drop in indexed URL count is an incident signal (noindex, mirror ban, mass 404s), not a reason to celebrate a “cleanup” without analysis.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Indexing check = webmaster + selective `site:` + understanding exclusion reasons. Crawl ≠ index guarantee.",
        "Fix availability and robot directives, then content and demand. Index is the base — not the SEO finish line.",
      ],
    },
  ],
  closing: [
    "Cross-check key URLs in Webmaster and Search Console, spot-check `site:`, fix robots/noindex and crawl errors — that’s how index control becomes regular hygiene, not a one-off panic.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "yandeks-vebmaster",
    "tehnicheskiy-seo-audit",
    "operatory-poiska",
    "molodoy-sayt",
    "chrome-rasshireniya-seo",
  ],
};
