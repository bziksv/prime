import type { BlogPost } from "../../../data/blog";

/** EN overlay for indeksatsiya-sayta — same structure as RU JSON. */
export const indeksatsiyaSaytaEn: BlogPost = {
  slug: "indeksatsiya-sayta",
  title: "What site indexing means",
  date: "2018-03-16",
  category: "SEO",
  cover: "/images/blog/indeksatsiya-sayta/cover-en.webp",
  excerpt:
    "How search engines crawl and add pages to the index: what affects getting into the database, robots and sitemap, Webmaster / Search Console, coverage checks — without 2010s social bookmarks or buying links “for indexing.”",
  lead: [
    "Indexing is when a bot crawls open URLs, parses the content, and puts (or updates) documents in the search database. Without an index a page almost never shows in organic results for queries.",
    "Below: how the process works, what a site needs to get found, and how to check status. Blocking from the index and robot log analysis are in related articles. We don’t recommend outdated social bookmarks or mass link buying just to get crawled.",
  ],
  faq: [
    {
      q: "Is indexing the same as page-one rankings?",
      a: "No. The index is entry into the database. Positions depend on relevance and competition.",
    },
    {
      q: "Does robots.txt “allow indexing”?",
      a: "User-agent: * without Disallow doesn’t block crawling. For indexing, URL availability, links, sitemap, and no accidental noindex matter more.",
    },
    {
      q: "Do I need to buy links to get indexed?",
      a: "Not as a required step. Adding the site to Webmaster/GSC, submitting a sitemap, and solid internal linking are enough. Buying for “speed” is risk and noise.",
    },
    {
      q: "How do I check that a page is indexed?",
      a: "The site: operator and coverage reports in Yandex Webmaster / Google Search Console — more reliable than third-party toolbars.",
    },
    {
      q: "Why isn’t part of the site indexed?",
      a: "noindex, Disallow, duplicates, thin content, bad response codes, weak discoverability, or crawl budget limits.",
    },
    {
      q: "Do social networks speed up indexing?",
      a: "They can bring visits and mentions, but they don’t replace Search Console and internal linking. Short redirect links are a weak signal for the bot.",
    },
    {
      q: "How is this different from blocking indexing?",
      a: "Here — how pages get into the database. There — when and how to keep them out on purpose.",
    },
  ],
  sections: [
    {
      title: "Index and crawl in plain words",
      level: 2,
      paras: [
        "The search database is a huge catalog of documents with addresses. A query doesn’t search the live internet — it searches this index.",
        "Bots (crawlers) follow links, fetch HTML and related resources, and pass data for processing. New and updated URLs enter the recrawl queue.",
        "Crawl depth and frequency depend on site quality, errors, crawl budget, and how you point to important URLs yourself.",
      ],
      links: [
        {
          label: "Server logs and bots",
          href: "/en/blog/logi-servera/",
        },
        {
          label: "Search engines",
          href: "/en/blog/poiskovye-sistemy/",
        },
      ],
    },
    {
      title: "What you need for the site to get indexed",
      level: 2,
      paras: [
        "Pages should return 200 (or a deliberate redirect), be available without mandatory login, and not be closed with noindex if the goal is organic.",
        "robots.txt mustn’t accidentally block needed sections. A sitemap helps discover URLs but doesn’t force junk into the index.",
        "Internal links and a normal structure beat external submission runs. Add the site to Yandex Webmaster and Google Search Console and submit the sitemap.",
      ],
      lists: [
        {
          intro: "A basic set:",
          items: [
            "reachable hosting and correct responses",
            "a sensible robots.txt",
            "sitemap in webmaster panels",
            "internal links to important URLs",
            "useful content without mass duplicates",
          ],
        },
      ],
      links: [
        {
          label: "Blocking from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "What’s outdated and what to avoid",
      level: 2,
      paras: [
        "Social bookmarks, directory runs, and buying links “so the spider comes faster” are noisy 2010s habits. For indexing they don’t replace webmaster panels.",
        "Don’t confuse indexing with behavioral manipulation and link spam — different risks and different articles.",
        "If a page is indexed but doesn’t grow — look at relevance, tech, and competition, not “add to bookmarks again.”",
      ],
      links: [
        {
          label: "Link types",
          href: "/en/blog/tipy-ssylok/",
        },
      ],
    },
    {
      title: "How to check indexing",
      level: 2,
      paras: [
        "In Webmaster and Search Console look at coverage/pages: how many discovered, excluded, and why.",
        "A query like site:example.com/page gives a quick slice, but panels are more precise on exclusion reasons.",
        "Crawlers like Screaming Frog / Netpeak Spider help find noindex, broken responses, and internal-link gaps on your side — before blaming “search won’t take it.”",
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Time to index isn’t guaranteed. New sites and weak URLs wait longer. Don’t promise a client “indexing in N hours” without caveats.",
  },
  closing: [
    "Connect Webmaster and Search Console, submit a sitemap, and open one important page in the coverage report — so indexing stops being abstract and becomes a working URL status.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "logi-servera",
    "yandeks-vebmaster",
    "tehnicheskiy-seo-audit",
    "screaming-frog",
    "poiskovye-sistemy",
  ],
};
