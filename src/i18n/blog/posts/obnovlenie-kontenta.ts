import type { BlogPost } from "../../../data/blog";

/** EN overlay for obnovlenie-kontenta — same structure as RU JSON. */
export const obnovlenieKontentaEn: BlogPost = {
  slug: "obnovlenie-kontenta",
  title: "Refreshing old blog posts: how to regain and grow traffic",
  date: "2021-07-08",
  category: "Content marketing",
  cover: "/images/blog/obnovlenie-kontenta/cover-en.webp",
  excerpt:
    "How to find posts with potential, prioritize updates, strengthen copy and UX, fix tech, and promote the piece again — without promising “×2 in 3 months for everyone.”",
  lead: [
    "Part of blog traffic sits in already published articles: they’re relevant to queries but outdated, dropped in the SERP, or lose to fresher competitors. Refreshing that content often pays off faster than writing everything from scratch.",
    "Below — a working process: pick URLs, set priorities, improve copy and tech, reseeding. Figures like “+139% in a quarter” are one methodology case, not a guarantee for every site. For commercial SEO, TOP growth is planned over months; informational URLs with some visibility can move sooner.",
  ],
  faq: [
    {
      q: "Can you promise double traffic in 3 months?",
      a: "Not as a universal rule. In cases with a strong base and pages “almost in TOP,” quarterly growth can be noticeable. For new sites without a core and links, those timelines aren’t realistic.",
    },
    {
      q: "What should you update first?",
      a: "Pages with impressions/clicks but average position outside the top; useful for conversion; topics where intent hasn’t changed. Dead content with no demand is a candidate to merge or noindex — not for cosmetic polish.",
    },
    {
      q: "Should you set the publish date to “today”?",
      a: "Carefully: a fake date bump without real edits looks manipulative. Better an honest last updated / actual refresh and a sitemap signal.",
    },
    {
      q: "How is this different from writing a new article?",
      a: "You strengthen a URL with history and links. A new article is needed when intent differs or the old URL can’t be saved.",
    },
    {
      q: "Which tools?",
      a: "Search Console / webmaster tools, analytics, a rankings export (Ahrefs, Keys.so and peers), manual TOP-10 review. Exact services and UI change.",
    },
  ],
  sections: [
    {
      title: "Why refresh instead of only writing new",
      level: 2,
      paras: [
        "A new blog grows slowly: months to a stable effect. Projects with an archive often have strong texts with falling clicks — cheaper to “pull up” than ignore.",
        "In public content-team cases, organic growth of tens to a hundred percent in a quarter was tied to an update package, not one post. Scale depends on niche, competition, and edit quality.",
      ],
      lists: [
        {
          intro: "Good candidates:",
          items: [
            "impressions exist, but position is outside the top;",
            "the topic is still searched;",
            "the page drives leads/subscribes;",
            "competitors already beat you on freshness.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Prep and an update package take weeks to months of work. Steady traffic and ranking growth is planned month to month; a “guaranteed ×2 by a date” in a contract is not acceptable.",
        },
      ],
    },
    {
      title: "How to pick and prioritize URLs",
      level: 2,
      paras: [
        "Export from Search Console / webmaster tools: clicks, impressions, average position. Filter pages that are “close to success” or have impressions without clicks due to a weak snippet.",
        "For each, add the main query, demand, and competition score (from an SEO tool). Simple priority heuristic: higher demand with relatively low difficulty — earlier in the queue. Tune impression thresholds to your blog’s size.",
      ],
      lists: [
        {
          intro: "A useful table has:",
          items: [
            "URL and title;",
            "impressions / clicks / position;",
            "target query;",
            "demand and difficulty scores;",
            "yes/no conversion value;",
            "update status.",
          ],
        },
      ],
    },
    {
      title: "How to improve the piece",
      level: 2,
      paras: [
        "Compare the page with today’s TOP-10: what’s missing in depth, structure, examples, dates, and facts. Strengthen the copy, add missing blocks, cut fluff, refresh screenshots and numbers.",
        "UX: subheads, lists, TOC, whitespace — so people finish reading. Tech: broken links, HTTPS, alt, image weight, title/description length, mobile readiness.",
      ],
      lists: [
        {
          intro: "Three edit layers:",
          items: [
            "meaning and completeness vs competitors;",
            "readability and retention;",
            "technical hygiene of the URL.",
          ],
        },
      ],
      links: [
        {
          label: "Page optimization for a query",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Keyword spam in text",
          href: "/en/blog/zaspamlennost-teksta/",
        },
      ],
    },
    {
      title: "Seeding and monitoring",
      level: 2,
      paras: [
        "After publishing the update, tell the audience: socials, topical communities, internal links from new materials. A mass “we updated a post” blast without value often just noise — better a short benefit teaser.",
        "Watch positions and clicks for 4–12 weeks. If nothing moves — revisit intent, snippet, or competition. A regular “once a quarter, review the top archive” cycle supports traffic better than one-off sprints.",
      ],
      lists: [
        {
          intro: "After the update:",
          items: [
            "refresh internal links to this URL;",
            "check the SERP snippet in 1–2 weeks;",
            "log before/after metrics;",
            "schedule the next URL package.",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
  ],
};
