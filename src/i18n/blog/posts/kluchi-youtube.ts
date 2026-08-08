import type { BlogPost } from "../../../data/blog";

/** EN overlay for kluchi-youtube — same structure as RU JSON. */
export const kluchiYoutubeEn: BlogPost = {
  slug: "kluchi-youtube",
  title: "YouTube keywords: how to build a search set for a video",
  date: "2020-11-10",
  category: "SMM",
  cover: "/images/blog/kluchi-youtube/cover-en.webp",
  excerpt:
    "How to pick keywords for YouTube title, description, and tags: retention beats a “perfect” keyword set, search suggestions and demand tools, competitor review, and long-tail queries — without ranking promises in a week.",
  lead: [
    "Keywords on YouTube help a video get found in search, but they don’t replace the content. The algorithm reacts more to watch time, retention, and return views than to a keyword pack from a 2015 website playbook.",
    "Below: how to build a working set for each video — where phrasing comes from, where to place it, and when narrow queries win. Channel launch basics are in the YouTube promotion piece; this focuses on keywords.",
  ],
  faq: [
    {
      q: "Are keywords more important than the thumbnail?",
      a: "No. Thumbnail and title drive the click; keywords help discovery. Without watch-through, even perfect tags won’t hold search placement.",
    },
    {
      q: "Do you need Wordstat or Keyword Planner for YouTube?",
      a: "Useful as a source of demand phrasing from web search. It isn’t YouTube volume one-to-one, but it gives title and topic ideas.",
    },
    {
      q: "Should you copy all of a competitor’s tags?",
      a: "No. Take what’s relevant. If giants own the head terms — look for long-tail and your angle, not a full tag dump.",
    },
    {
      q: "Do words like “watch” and “video” help?",
      a: "Sometimes in web search. On YouTube itself, the viewer’s natural query and matching the promise matter more.",
    },
    {
      q: "Can keywords beat a viral video?",
      a: "Usually no. Strong watch-through beats weak content with a perfect keyword set. Compete where you can give a better answer.",
    },
  ],
  sections: [
    {
      title: "Why keywords alone aren’t enough",
      level: 2,
      paras: [
        "YouTube ranks with behavior in mind: how much people watch, whether they finish, whether they return. Two videos with similar keywords will split in placement if one retains viewers clearly better.",
        "Comparing retention percent alone is blind — absolute watch time matters too. A short video with a high percent and a long one with big watch time behave differently. Use Studio, not one figure from someone else’s case.",
        "Optimizing title and description won’t outrank a viral or simply more useful video. Strategy: strong content, clear keywords, work with recommendations and playlists. “Page one for every head term tomorrow” isn’t a workable goal. Growth goes video by video.",
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
      title: "How to build the set and where to place it",
      level: 2,
      paras: [
        "Phrase sources: YouTube and Google/Yandex search suggestions, Wordstat and Keyword Planner peers (needs an ads account; figures are a guide), titles and topics of competitors in results for your query.",
        "In how-to niches, constructions like “how to,” DIY, reviews, lists, and timely events often work — if they honestly reflect the video. Cat clips and entertainment angles work in their topic; don’t drag them into B2B for a click.",
        "Practice: write one or two main queries per video, then 5–15 refinements and long-tails. Put the main phrase at the start of the title (readable for humans), expand in the first description lines, and treat tags as a supplement — not a dump. Don’t stuff irrelevant junk.",
        "If head terms are owned by big channels, take narrow phrasing and video series under a cluster. “View source → all competitor tags” is an outdated ritual; open title, description, and topics are enough. External mentions and playlists help, but don’t replace watch-through.",
        "Bottom line: keywords set the language of demand; content decides whether you stay in results. Build the set → answer stronger than the competitor → measure retention and refine the next topics.",
      ],
      lists: [
        {
          intro: "Mini-checklist per video:",
          items: [
            "title with the main query, no clickbait lies",
            "description: essence, keywords, timestamps",
            "on-topic tags, no spam",
            "thumbnail matches the promise",
            "after publish — watch retention in Studio",
          ],
        },
      ],
      links: [
        {
          label: "Site keyword set",
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
