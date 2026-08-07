import type { BlogPost } from "../../../data/blog";

/** EN overlay for kluchi-youtube — same structure as RU JSON. */
export const kluchiYoutubeEn: BlogPost = {
  slug: "kluchi-youtube",
  title: "YouTube keywords: how to build semantics for a video",
  date: "2020-11-10",
  category: "SMM",
  cover: "/images/blog/kluchi-youtube/cover-en.webp",
  excerpt:
    "How to pick keywords for YouTube title, description, and tags: retention beats a “perfect” core, Wordstat and suggestions, competitor analysis, and long-tail queries — without promising top in a week.",
  lead: [
    "YouTube semantics help a video get found in search, but don’t replace the content itself. The algorithm reacts more to watch time, retention, and repeat views than to a keyword pack “like a 2015 website”.",
    "Below — how to build a working core for a video: where to get phrasing, where to put it, and when to aim at narrow queries. Channel launch basics are in the YouTube promotion piece; here the focus is keywords.",
  ],
  faq: [
    {
      q: "Are keywords more important than the thumbnail?",
      a: "No. Thumbnail and title drive the click; keywords help discovery. Without watch-through, even perfect tags won’t hold rankings.",
    },
    {
      q: "Do you need Wordstat for YouTube?",
      a: "Useful as a source of demand phrasing from search. It isn’t “YouTube volume one-to-one”, but it gives title and topic ideas.",
    },
    {
      q: "Should you copy all of a competitor’s tags?",
      a: "No. Take what’s relevant; if giants own the head terms — look for long-tail and your angle, not a full tag dump.",
    },
    {
      q: "Do words like “watch” and “video” help?",
      a: "Sometimes in web search. On YouTube itself, the viewer’s natural query and matching the promise matter more.",
    },
    {
      q: "Can keywords beat a viral video?",
      a: "Usually no. Strong watch-through beats weak content with a perfect core. Compete where you can give a better answer.",
    },
  ],
  sections: [
    {
      title: "Why keywords alone aren’t enough",
      level: 2,
      paras: [
        "YouTube ranks with behavior in mind: how much people watch, whether they finish, whether they return. Two videos with similar keywords will split in positions if one retains viewers clearly better.",
        "Comparing retention % alone is blind: absolute watch time matters too. A short video with high % and a long one with big watch time behave differently — use Studio, not one figure from someone else’s case.",
        "Optimizing title and description won’t “outrank” a viral or simply more useful video. Strategy: strong content + clear keywords + work with recommendations and playlists. “TOP for every head term tomorrow” isn’t a workable goal; growth goes video by video.",
      ],
      links: [
        {
          label: "YouTube promotion",
          href: "/en/blog/raskrutka-youtube/",
        },
        {
          label: "YouTube channel description",
          href: "/en/blog/opisanie-youtube-kanala/",
        },
      ],
    },
    {
      title: "How to build the core and where to place it",
      level: 2,
      paras: [
        "Phrase sources: YouTube and Google/Yandex search suggestions, Wordstat and Keyword Planner peers (needs an ads account; figures are a guide), reviewing titles and topics of competitors in results for your query.",
        "In how-to niches, constructions like “how to”, DIY, reviews, tops, and timely events often work — if they honestly reflect the video. “Cats” and entertainment angles work in their topic; don’t drag them into B2B for a click.",
        "Practice: write 1–2 main queries per video, 5–15 refinements and long-tails. Put the main one at the start of the title (readable for humans), expand in the first description lines, tags as a supplement — not a dump. Don’t stuff irrelevant junk.",
        "If head terms are owned by big channels, take narrow phrasing and video series under a cluster. “View source → all competitor tags” is an outdated ritual; open title, description, and topics are enough. External mentions and playlists help, but don’t replace watch-through.",
        "Bottom line: semantics set the language of demand; content decides whether you stay in results. Build the core → answer stronger than the competitor → measure retention and refine the next topics.",
      ],
      lists: [
        {
          intro: "Mini-checklist per video:",
          items: [
            "title with the main query, no clickbait lies;",
            "description: essence + keywords + timestamps;",
            "on-topic tags, no spam;",
            "thumbnail matches the promise;",
            "after publish — watch retention in Studio.",
          ],
        },
      ],
      links: [
        {
          label: "Site semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
  ],
  related: [
    "raskrutka-youtube",
    "opisanie-youtube-kanala",
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "videoreklama-youtube",
  ],
};
