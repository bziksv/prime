import type { BlogPost } from "../../../data/blog";

/** EN overlay for obnovlenie-kontenta — same structure as RU JSON. */
export const obnovlenieKontentaEn: BlogPost = {
  slug: "obnovlenie-kontenta",
  title: "How to refresh old blog posts and win traffic back",
  date: "2021-07-08",
  category: "Content marketing",
  cover: "/images/blog/obnovlenie-kontenta/cover-en.webp",
  excerpt:
    "Find posts that still have search demand, decide what to update first, improve the writing and the page, then promote again — without promising “2× traffic in 90 days for every site.”",
  lead: [
    "A lot of blog traffic is already sitting in articles you published years ago. They still match real searches, but the copy is stale, competitors outrank you, or the page slipped down the results. Refreshing those URLs often beats writing everything from scratch.",
    "Below is a practical workflow: pick the right URLs, prioritize, improve the content and the technical basics, then ask search engines to recrawl. Numbers like “+139% in a quarter” come from one team’s case study — not a forecast for your site. Ranking gains after content work are planned over months; prep alone is not an overnight jump to page one.",
  ],
  faq: [
    {
      q: "Can you promise double traffic in three months?",
      a: "Not as a universal rule. Sites with a solid archive and pages already near page one can see a clear lift within a quarter. Brand-new sites with no keyword base and no links should not plan on those timelines.",
    },
    {
      q: "What should I update first?",
      a: "Pages that get impressions or clicks but sit outside the top results; pages that already convert; topics where search intent hasn’t changed. Dead URLs with no demand belong in a merge or noindex pile — not a cosmetic rewrite.",
    },
    {
      q: "Should I change the publish date to today?",
      a: "Only if the update is real. Bumping the date with no substance looks manipulative. Prefer an honest “last updated” line, a real refresh, and a sitemap signal.",
    },
    {
      q: "How is this different from publishing a new article?",
      a: "You strengthen a URL that already has history and links. Write something new when the intent is different or the old URL can’t be saved.",
    },
    {
      q: "Which tools help with content updates?",
      a: "Search Console (or your local webmaster tools), analytics, a rankings export (Ahrefs, Keys.so, and similar), plus a manual look at the current top 10. Exact product names and UIs change — the workflow doesn’t.",
    },
  ],
  sections: [
    {
      title: "Why refresh old posts instead of only writing new ones",
      level: 2,
      paras: [
        "A new blog usually takes months before organic traffic feels stable. If you already have an archive, strong pieces with falling clicks are often cheaper to revive than to ignore.",
        "In published content-team case studies, double-digit to triple-digit organic growth in a quarter usually came from a package of updates — not one heroic post. How far you get depends on the niche, the competition, and how thorough the edits are.",
      ],
      lists: [
        {
          intro: "Good candidates:",
          items: [
            "impressions are there, but the average position is outside the top results",
            "people still search the topic",
            "the page already drives leads or sign-ups",
            "competitors beat you on freshness.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Building an update package takes weeks to a few months of work. Steady traffic and ranking growth is planned over 2–6 months. A contract that “guarantees 2× by a fixed date” is not acceptable.",
        },
      ],
    },
    {
      title: "How to choose and prioritize URLs",
      level: 2,
      paras: [
        "Export clicks, impressions, and average position from Search Console or your webmaster tools. Keep pages in striking distance of page one, and pages with impressions but almost no clicks because the snippet is weak.",
        "For each URL, add the main query, demand, and a competition score from an SEO tool. Simple rule: higher demand with relatively low difficulty goes earlier in the queue. Set impression thresholds to match the size of your blog.",
      ],
      lists: [
        {
          intro: "A useful tracking table includes:",
          items: [
            "URL and title",
            "impressions / clicks / position",
            "target query",
            "demand and difficulty scores",
            "whether the page matters for conversion (yes/no)",
            "update status.",
          ],
        },
      ],
    },
    {
      title: "How to improve the article",
      level: 2,
      paras: [
        "Compare the page with today’s top 10: what’s missing on depth, structure, examples, dates, and facts. Strengthen the copy, add the gaps, cut filler, and refresh screenshots and numbers.",
        "For readers: clear subheads, lists, a table of contents, and enough breathing room that people finish the piece. For tech: fix broken links, confirm HTTPS, write alt text, shrink heavy images, check title/description length, and make sure the page works on mobile.",
      ],
      lists: [
        {
          intro: "Three layers of edits:",
          items: [
            "meaning and completeness versus competitors",
            "readability and how long people stay",
            "technical hygiene of the URL.",
          ],
        },
      ],
      links: [
        {
          label: "On-page optimization for a query",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Keyword stuffing in copy",
          href: "/en/blog/zaspamlennost-teksta/",
        },
      ],
    },
    {
      title: "Promote the update and watch the results",
      level: 2,
      paras: [
        "After you publish the refresh, tell people: social posts, topic communities, and internal links from newer articles. A mass “we updated a post” blast with no value is usually just noise — lead with a short benefit instead.",
        "Watch rankings and clicks for 4–12 weeks. If nothing moves, revisit intent, the snippet, or the competitive set. A quarterly pass over your best archive URLs protects traffic better than one-off sprints.",
      ],
      lists: [
        {
          intro: "After the update:",
          items: [
            "point more internal links at this URL",
            "check the search snippet in 1–2 weeks",
            "log before/after metrics",
            "schedule the next batch of URLs.",
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
