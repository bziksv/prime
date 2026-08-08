import type { BlogPost } from "../../../data/blog";

/** EN overlay for optimizatsiya-stranitsy — same structure as RU JSON. */
export const optimizatsiyaStranitsyEn: BlogPost = {
  slug: "optimizatsiya-stranitsy",
  title: "On-page SEO checklist: optimize a page for one search query",
  date: "2021-08-02",
  category: "SEO",
  cover: "/images/blog/optimizatsiya-stranitsy/cover-en.webp",
  excerpt:
    "Tune a landing page for one query: copy, title and H1, meta description, internal links, click depth, URL, and images — without stuffing or the myth that every paragraph needs the keyword.",
  lead: [
    "On-page SEO means one URL clearly answers one main intent. People get the offer; search engines read the topic from the title, headings, body, and links.",
    "Use the checklist below for content and page tech. Lead with meaning and usefulness, then weave keywords in. Getting a landing ready is not the same as ranking: positions usually build over months after work starts.",
  ],
  faq: [
    {
      q: "Should I start with keywords or with the copy?",
      a: "Start with intent and how you’ll answer it. A target keyword sets the topic; write for humans and fold phrases in naturally. See the keyword research guide.",
    },
    {
      q: "Should the title tag and H1 be identical?",
      a: "No. The title tag shapes the search snippet; the H1 is the headline on the page. Same idea, preferably different wording.",
    },
    {
      q: "Must the keyword appear in the first and last paragraph?",
      a: "There’s no hard rule. The topic should be obvious from the first screen. Stuffing the phrase at the start and end “for the checklist” is how you get spammy copy.",
    },
    {
      q: "How long should the title and meta description be?",
      a: "SERP limits shift. Put the main meaning early in the title. Write the description as a useful line with a CTA — not a keyword dump. Check the preview in Search Console or your webmaster tools.",
    },
    {
      q: "How is this different from keyword stuffing?",
      a: "This article is the page framework for a query. Stuffing is about repeating phrases until the text breaks. There’s a separate piece on that.",
    },
  ],
  sections: [
    {
      title: "Write the page for one intent",
      level: 2,
      paras: [
        "One URL, one cluster: commercial (“buy / order”) or informational (“how / what”). Mixing intents on the same page is weaker for readers and for search.",
        "Make the copy unique and readable — lists and subheads help. Use key phrases where they belong in the sentence, not as density targets in every line.",
      ],
      lists: [
        {
          intro: "Copy minimum:",
          items: [
            "answer the query in the first screens",
            "include facts, prices, timelines, or terms when it’s commercial",
            "add a clear CTA without filler",
            "check for stuffing out loud and with a density tool",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Keyword stuffing in copy",
          href: "/en/blog/zaspamlennost-teksta/",
        },
      ],
    },
    {
      title: "Title tag, H1, and subheads",
      level: 2,
      paras: [
        "The title tag is the strongest on-page topic signal. Put the core meaning (and the main phrase) near the start — not a comma soup of “cheap wholesale urgent.”",
        "Use one H1, different from the title tag, written for a human. H2–H3 open subtopics and secondary phrasing; they shouldn’t parrot the same exact-match keyword.",
      ],
      lists: [
        {
          intro: "Guidelines:",
          items: [
            "title: clear benefit or topic, brand if you need it",
            "H1: one, without spam",
            "H2s: real section logic — not “keyword1 / keyword2 / keyword3”",
          ],
        },
      ],
    },
    {
      title: "Snippet and meta description",
      level: 2,
      paras: [
        "Search results usually pull from the title, the meta description, and sometimes body text. The description doesn’t “rank by itself,” but it moves CTR: promise, difference, next step.",
        "Write one or two useful sentences. A keyword is fine if the line still sounds human. Stuffing the description kills the click.",
      ],
    },
    {
      title: "Internal links and click depth",
      level: 2,
      paras: [
        "Links from related pages help people and crawling. Use anchors that describe the destination — not the same “click here” on dozens of URLs.",
        "Keep important commercial pages close to the homepage (roughly within two or three clicks). “Nobody goes deeper than three” is a simplification, but burying a service behind five menus still hurts.",
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
      ],
    },
    {
      title: "URLs and images",
      level: 2,
      paras: [
        "Use a short, readable path that matches the page, with hyphens and without parameter junk. A keyword in the URL is a small clarity win — not a substitute for good content.",
        "Compress images, give files meaningful names, and write `alt` that describes the scene — not a keyword sheet. Image search is a bonus, not the main bet for a commercial page.",
      ],
      lists: [
        {
          intro: "Quick checklist before you publish:",
          items: [
            "one main intent per URL",
            "title, H1, and lead aligned",
            "internal links to and from the page",
            "readable URL and HTTPS",
            "alt text on key images",
            "no stuffing or copy-paste",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "On-page work is part of prep. Ranking for a competitive query is planned over 2–6 months after promotion starts — not the result of one title tweak.",
        },
      ],
      links: [
        {
          label: "Website URLs",
          href: "/en/blog/url-adres/",
        },
      ],
    },
  ],
};
