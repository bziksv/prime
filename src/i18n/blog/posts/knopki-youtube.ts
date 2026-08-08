import type { BlogPost } from "../../../data/blog";

/** EN overlay for knopki-youtube — same structure as RU JSON. */
export const knopkiYoutubeEn: BlogPost = {
  slug: "knopki-youtube",
  title: "YouTube cards, end screens, and subscribe prompts",
  date: "2021-05-27",
  category: "SMM",
  cover: "/images/blog/knopki-youtube/cover-en.webp",
  excerpt:
    "Which interactive elements replaced outdated YouTube annotations: subscribe, cards, end screens — and how to use them without cluttering the video.",
  lead: [
    "On-video annotations are long gone. YouTube now offers cards, end screens, description links, and channel layout tools. Each one has a job — help the viewer keep watching, open a related piece, or subscribe.",
    "Interactive elements don’t replace topic, retention, and a clear thumbnail. Used carefully, they turn videos into a path and give the next logical step.",
  ],
  faq: [
    {
      q: "Where are YouTube annotations?",
      a: "The tool is retired. Use cards and end screens in YouTube Studio.",
    },
    {
      q: "Are a card and an end screen the same?",
      a: "No. A card appears during the video; an end screen is at the finish with tiles for a video, playlist, or subscribe.",
    },
    {
      q: "Do I need a Subscribe button on my site?",
      a: "You can embed the official widget if you send traffic to the channel. Growth still comes from videos and retention, not one button.",
    },
    {
      q: "How many cards should I add?",
      a: "One or two relevant cards beat a swarm over the frame. Don’t cover key content or captions.",
    },
    {
      q: "Will this replace channel promotion?",
      a: "No. Elements help navigate your content. Growth is niche, quality, and consistency.",
    },
    {
      q: "Can I put a website link in a card?",
      a: "External link types depend on channel status and YouTube rules. Check limits in Studio before publishing and send viewers only to a relevant page.",
    },
    {
      q: "Should I ask to subscribe at the start?",
      a: "Better show value first and say what the channel delivers. The main CTA fits after a useful segment or at the end.",
    },
  ],
  sections: [
    {
      title: "What replaced annotations",
      level: 2,
      paras: [
        "Annotations were clickable labels in the frame; YouTube dropped them — they worked poorly on mobile and often hid the content. Interactivity now sits in a few formats viewers see in more predictable places.",
        "A card appears mid-watch and suggests a related video, playlist, or channel. An end screen runs in the last seconds: offer the next episode and subscribe. Description, pinned comment, and channel homepage shelves complete that navigation.",
      ],
      lists: [
        {
          intro: "Basic kit for a video:",
          items: [
            "one card to a related video or playlist",
            "an end screen with 2–3 clear tiles",
            "a spoken subscribe ask after a useful segment",
            "chapters and short links in the description — not a URL wall",
          ],
        },
      ],
    },
    {
      title: "Match the element to the job",
      level: 2,
      paras: [
        "Start from the viewer’s path, not button count. If the video answers one question, the end should offer the next step on the same topic. After a tool overview that might be a setup deep-dive — not a random popular upload.",
        "A card helps when you mention a topic but don’t want to derail the story. An end screen works as a fork: “watch the sequel,” “open the playlist,” or “subscribe.” One clear option usually beats a pile of unrelated links.",
      ],
      lists: [
        {
          intro: "Goals vs formats:",
          items: [
            "related material during an explanation — card",
            "series sequel or playlist — end screen",
            "resources and caveats — description and pinned comment",
            "navigation across all content — channel homepage and playlists",
          ],
        },
      ],
    },
    {
      title: "Setting up cards and end screens",
      level: 2,
      paras: [
        "Open the video in YouTube Studio and find the cards or end-screen editor. Add elements after the cut is locked — easier to see if a tile covers titles, the speaker’s face, or a UI demo.",
        "Leave a calm final beat for the end screen. If the last seconds carry an important takeaway, viewers choose between reading and clicking. Finish the thought, then briefly cue the next video.",
      ],
      lists: [
        {
          intro: "Pre-publish check:",
          items: [
            "the card appears after context, not in the first seconds",
            "the end screen uses the last 5–20 seconds and doesn’t fight the finale",
            "the target video is viewable and matches the promise",
            "elements don’t cover captions or key frame details",
          ],
        },
      ],
      notes: [
        {
          title: "The UI changes",
          text: "Studio menu names and templates shift. Check the published video on desktop and phone — not only the editor preview.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Subscribe CTA without nagging",
      level: 2,
      paras: [
        "A Subscribe button alone doesn’t persuade. People subscribe when they understand the channel format: which topics ship, how often, and how new episodes differ from the one they just watched.",
        "Make the ask specific. Instead of “please subscribe,” say the playlist has a sequel and the channel ships weekly deep-dives. That CTA feels like a helpful tip, not pressure.",
      ],
      lists: [
        {
          intro: "A good CTA usually:",
          items: [
            "comes after value, not before the point",
            "explains subscription value in one sentence",
            "matches the real schedule and topics",
            "is echoed on the end screen without blocking the watch",
          ],
        },
      ],
    },
    {
      title: "How to measure whether elements help",
      level: 2,
      paras: [
        "In analytics look past click counts to the path after them. A card with modest CTR can still help if it sends an interested audience to a long topical video and deepens session watch time.",
        "Compare similar videos, not the whole channel at once. A tutorial, a review, and a short entertainment piece set different expectations — the same end-screen layout won’t perform the same.",
      ],
      lists: [
        {
          intro: "Useful signals:",
          items: [
            "end-screen clicks to related videos",
            "share of viewers who continue in a playlist",
            "subscribes after specific uploads",
            "retention in the last seconds of the video",
          ],
        },
      ],
      links: [
        {
          label: "YouTube channel growth",
          href: "/en/blog/raskrutka-youtube/",
        },
        {
          label: "YouTube channel banner",
          href: "/en/blog/shapka-youtube/",
        },
      ],
    },
    {
      title: "What to avoid in packaging",
      level: 2,
      paras: [
        "Don’t turn the video into a stack of pop-up asks. Frequent cards, clickbait labels, and links to unrelated videos distract and erode trust. Packaging should support the material, not compete with it.",
        "Skip third-party “button generators” that ask for your password or channel access. Official elements live in YouTube Studio; the site subscribe widget comes from Google’s docs.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "outdated guides that only talk about annotations",
            "the same card on every video with no topic link",
            "covering captions and key frame details",
            "promises that a widget or button alone grows the channel",
          ],
        },
      ],
    },
  ],
};
