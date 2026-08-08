import type { BlogPost } from "../../../data/blog";

/** EN overlay for metategi — same structure as RU JSON. */
export const metategiEn: BlogPost = {
  slug: "metategi",
  title: "Meta tags and SEO: title, description, robots, and keywords",
  date: "2021-03-18",
  category: "SEO",
  cover: "/images/blog/metategi/cover-en.webp",
  excerpt:
    "What HTML meta tags are: why title and description matter, how robots control indexing, why keywords barely help — without ranking “secrets” or outdated character limits.",
  lead: [
    "Meta tags are machine-facing fields in the page `<head>`: they don’t draw a block on screen, but help the browser and search engine understand the document. For SEO people usually mean title, description, and robots directives; keywords have long been secondary.",
    "Below: a map of the tags, what actually affects SERPs and snippets, and what to leave alone. We don’t copy hard “exactly N characters = page one” rules or 2021 CMS screenshots: truncation length floats, plugin UIs change.",
  ],
  faq: [
    {
      q: "Do meta tags alone put a page on page one?",
      a: "No. Title and content help relevance and snippet clicks; ranking is broader — the page, links, tech, behavior.",
    },
    {
      q: "How is title different from H1?",
      a: "Title is the tab and snippet headline. H1 is the heading on the page. Align them by meaning; they don’t have to match word for word.",
    },
    {
      q: "Do I need meta keywords?",
      a: "As a ranking factor for Google and Yandex — no. Spend time on title, description, and body copy instead.",
    },
    {
      q: "Are meta robots and robots.txt the same?",
      a: "Related but different levels: robots.txt hints paths to the crawler; meta robots are directives for a specific HTML page (and sometimes X-Robots-Tag in HTTP).",
    },
    {
      q: "Does description always appear in the snippet?",
      a: "Not always: the engine may pull a page fragment. A good description raises the chance your own text shows in results.",
    },
    {
      q: "Where do I edit meta tags?",
      a: "In the theme template, an SEO plugin, or CMS fields. Button paths depend on the system — check current Help, not a 2021 screenshot.",
    },
    {
      q: "Should one title cover the whole site?",
      a: "No: commercial URLs need unique wording for each page’s intent.",
    },
    {
      q: "What should I read next?",
      a: "Separate pieces: title length, meta description, excluding pages from the index, snippets, and Open Graph.",
    },
  ],
  sections: [
    {
      title: "What counts as meta tags",
      level: 2,
      paras: [
        "Broadly — `<head>` elements that describe the document: charset, viewport, title, meta name/property, link rel, and more. In SEO slang “meta tags” often narrow to title + description + robots + outdated keywords.",
        "They don’t replace content and URL structure. An empty page with a perfect title still isn’t a landing page.",
      ],
      lists: [
        {
          intro: "Basic indexing minimum:",
          items: [
            "a unique title",
            "a meaningful description",
            "a clear H1 and body text",
            "correct robots directives if the page shouldn’t rank",
          ],
        },
      ],
    },
    {
      title: "Title",
      level: 2,
      paras: [
        "Title shows in the browser tab and as the blue (or other) headline in results. It’s one of the strongest “meta” signals for what the URL is about.",
        "Write for people and the query: brand, gist, sometimes geo or a USP — not a keyword dump. The old “under 80 characters” guide is a truncation hint, not a law.",
        "Use competitors in the SERP as a tone reference, not a copy-paste template.",
      ],
      links: [
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
        {
          label: "The H1 tag",
          href: "/en/blog/teg-h1/",
        },
      ],
    },
    {
      title: "Description",
      level: 2,
      paras: [
        "Meta description is a candidate for the text under the headline in the snippet. It usually isn’t a direct ranking score; it works indirectly via CTR and click expectations.",
        "State the benefit and match the page. Clickbait the URL doesn’t deliver hurts trust.",
      ],
      links: [
        {
          label: "Meta description in depth",
          href: "/en/blog/meta-description/",
        },
        {
          label: "Snippets in search results",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "Robots: meta and neighboring tools",
      level: 2,
      paras: [
        "Meta robots (and the HTTP header) set whether to index the page and follow links: `noindex`, `nofollow`, combinations, `all`/`none` in older cheat sheets.",
        "Don’t confuse with Disallow in robots.txt: blocking a path in txt may keep the crawler away; putting noindex on HTML means the page may still be crawled but shouldn’t enter the index (when handled correctly).",
        "Utility pages, duplicates, carts, thin filters — typical candidates to noindex. Don’t noindex commercial landings just in case.",
      ],
      notes: [
        {
          title: "Check in the panels",
          kind: "tip",
          text: "After changing directives, look in Search Console / Webmaster and Inspect URL / crawl-as-bot tools — not only the source in your IDE.",
        },
      ],
      links: [
        {
          label: "Closing pages from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Keywords and other myths",
      level: 2,
      paras: [
        "Meta keywords once tried to feed engines a keyword list. Today for major systems they barely affect rankings; stuffing keywords achieves nothing.",
        "Same for “secret” meta that supposedly boost PageRank: ignore it. Put your effort into content, internal links, speed, and the snippet.",
        "For social sharing, look at Open Graph / Twitter Cards separately from the search description.",
      ],
      links: [
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
    },
    {
      title: "How to add them on a site",
      level: 2,
      paras: [
        "By hand in the `<head>` template, via a CMS SEO module, or “SEO title / description” fields on the item. On site builders — the page settings block.",
        "Watch that the plugin doesn’t duplicate titles or stamp one template across a thousand cards without uniqueness.",
        "After edits — spot-check page source and the live snippet over days/weeks (not instantly).",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Meta tags are a machine layer in `<head>`; for SEO the core is title, description, and sensible robots.",
        "Keywords don’t save rankings; don’t copy “secrets” from 2010s posts.",
        "Go deeper in separate guides on title, description, and closing from index — this piece is a map, not a substitute.",
      ],
    },
  ],
  closing: [
    "Walk five commercial URLs: unique title, honest description, no accidental noindex — faster than hunting a “secret” meta keywords tag.",
  ],
  related: [
    "meta-description",
    "dlina-title",
    "zakrytie-ot-indeksatsii",
    "snippet",
    "teg-h1",
    "open-graph",
  ],
};
