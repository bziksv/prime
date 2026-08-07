import type { BlogPost } from "../../../data/blog";

/** EN overlay for poiskovye-sistemy — same structure as RU JSON. */
export const poiskovyeSistemyEn: BlogPost = {
  slug: "poiskovye-sistemy",
  title: "Search engines: not only Google and Yandex",
  date: "2020-06-26",
  category: "SEO",
  cover: "/images/blog/poiskovye-sistemy/cover-en.webp",
  excerpt:
    "Which search engines exist beyond Google and Yandex: Bing, DuckDuckGo, historic Rambler and Mail, Baidu. Why that matters for SEO in Russia-facing markets — without outdated market-share figures.",
  lead: [
    "Google and Yandex cover most search in Russia, but the search world is wider: Bing, DuckDuckGo, vertical and regional engines, historic brands like Rambler. Strategy should follow your analytics and GEO — not the myth that “only two exist.”",
    "Below — a short map of players and what marketers should take from it. We don’t copy 2020 market shares or the fate of “Sputnik”/Nigma as facts for today — check fresh measurements.",
  ],
  faq: [
    {
      q: "Do you need Bing SEO in Russia?",
      a: "Sometimes: share is small, but checking GSC/Bing Webmaster and snippets is free. Priority is where your audience sits in Metrica/GA.",
    },
    {
      q: "Does DuckDuckGo matter for business?",
      a: "For mass e‑commerce in Russia — rarely. It matters for privacy-minded audiences and as an alternate entry point.",
    },
    {
      q: "Are Rambler and Mail still “search engines”?",
      a: "More portals/ecosystems with a search box. As a standalone SEO channel for most niches they’re secondary.",
    },
    {
      q: "Does everyone need Baidu?",
      a: "No. Only if the goal is China / a Chinese-speaking audience. There’s a separate piece on Baidu.",
    },
    {
      q: "Same SEO for every engine?",
      a: "The base is shared: useful pages, tech, clear intent. Accents and panels differ — see the Yandex vs Google comparison.",
    },
    {
      q: "Site directories instead of search?",
      a: "Historically directories came before full-text search. Today niche directories aren’t an SEO substitute.",
    },
    {
      q: "Should you chase exotic engines?",
      a: "First close Yandex/Google and conversions. Exotic engines only if data shows traffic or a new market.",
    },
    {
      q: "Where do I see my search-engine share?",
      a: "In Metrica/GA: sources → search engines. Not someone else’s “2019 ranking.”",
    },
  ],
  sections: [
    {
      title: "Why search engines appeared",
      level: 2,
      paras: [
        "When sites were few, bookmarks and directories were enough. Web growth made hand-built lists useless — systems appeared that crawl pages, index them, and rank an answer to a query.",
        "Early engines returned a raw URL list; modern ones weigh relevance, quality, locality, behavior, and hundreds of other signals.",
      ],
      lists: [],
      links: [
        {
          label: "Site directories today",
          href: "/blog/katalogi-saytov/",
        },
      ],
    },
    {
      title: "Leaders for Russia: Yandex and Google",
      level: 2,
      paras: [
        "In commercial SEO for Russia you usually watch both. Share between them drifts by niche, device, and region — your analytics is the only guide, not someone else’s “50/50 from an article.”",
        "Differences in accents (locality, commercial factors, webmaster panels) live in a separate comparison.",
      ],
      lists: [],
      links: [
        {
          label: "SEO for Yandex and Google",
          href: "/blog/seo-yandex-google/",
        },
        {
          label: "Runet",
          href: "/en/blog/runet/",
        },
      ],
    },
    {
      title: "Other engines people ask about",
      level: 2,
      paras: [
        "Bing (Microsoft) — a notable player in some countries and the Windows ecosystem; in Russia share is usually modest, but Webmaster Tools is free.",
        "DuckDuckGo — privacy-first; results often ride partner indexes. Useful for brands as a signal that “there’s audience outside YA/Google.”",
        "Mail.ru / Rambler — strong as media portals; search for SEO is often secondary. Historic Nigma, “Sputnik,” and 2010s roundup peers shouldn’t enter a media plan without checking they’re still a live channel.",
        "Classic Yahoo is barely relevant for Russia-facing SEO; Baidu is a separate market.",
      ],
      lists: [],
      notes: [
        {
          title: "Don’t copy 2020 shares",
          text: "Figures like “Yandex +10% vs Google” and Rambler traffic from old texts go stale. Use fresh research or your own counter.",
        },
      ],
      links: [
        {
          label: "Baidu",
          href: "/blog/baidu/",
        },
      ],
    },
    {
      title: "Practical takeaway for a site",
      level: 2,
      paras: [
        "Close tech, content, and the core for Yandex and Google. Add Bing Webmaster if you see visits or plan an EN/global contour.",
        "Don’t spread budget across “promotion in ten dead search engines.”",
        "International markets need a separate map: language, hosting, payments, the local search leader.",
      ],
      lists: [
        {
          intro: "Mini checklist:",
          items: [
            "YA/Google share in Metrica;",
            "Webmaster + Search Console;",
            "Bing Webmaster when needed;",
            "exotic engines — only with data or a new GEO.",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "There are many search engines; for Russia the core is Yandex and Google.",
        "Bing and privacy search are optional, data-driven.",
        "Historic brands are useful context, not a required channel.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Open the search-engines report in Metrica for a quarter — you’ll see faster whether anything beyond Yandex and Google is worth thinking about on your site.",
  ],
  related: [
    "seo-yandex-google",
    "baidu",
    "runet",
    "wordstat",
    "katalogi-saytov",
    "poiskovye-podskazki",
  ],
};
