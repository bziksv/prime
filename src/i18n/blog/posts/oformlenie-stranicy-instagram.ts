import type { BlogPost } from "../../../data/blog";

/** EN overlay for oformlenie-stranicy-instagram — same structure as RU JSON. */
export const oformlenieStranicyInstagramEn: BlogPost = {
  slug: "oformlenie-stranicy-instagram",
  title: "Instagram profile design: visuals, header, and a cohesive look",
  date: "2022-03-10",
  category: "SMM",
  cover: "/images/blog/oformlenie-stranicy-instagram/cover-en.webp",
  excerpt:
    "How to plan your profile visuals: bio, avatar, a consistent feed style, posts, and short video — without clinging to outdated UI labels.",
  lead: [
    "Profile visuals decide whether someone stays after the first screen. Below: how to put together the bio, avatar, a consistent feed style, and post design. See the Meta note on this page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Where should I start with profile design?",
      a: "With positioning: personal blog or commerce. That drives the bio, avatar, and feed style.",
    },
    {
      q: "What should I write in the bio?",
      a: "Who you are / what you sell, the benefit for a follower, location or hours, a clear CTA, and a link if you need one.",
    },
    {
      q: "Why keep a consistent feed style?",
      a: "The grid looks cohesive, the brand is recognizable, and it’s easier to plan shoots and edits.",
    },
    {
      q: "Do I need a business account?",
      a: "For commerce it’s usually better: insights, contacts in the header, ad tools. Exact menu labels change — check the app’s help.",
    },
    {
      q: "Are Stories and Reels the same?",
      a: "No. Stories are short-lived and good for timely updates; Reels are short vertical clips built for reach in recommendations.",
    },
  ],
  sections: [
    {
      title: "Personal or business profile",
      level: 2,
      paras: [
        "In a couple of seconds it should be obvious: this is about a person or a product. A commerce account answers “what to buy or order — and why choose you.”",
        "Then make every visual serve that position: avatar, highlight covers, photo tone, and copy.",
      ],
    },
    {
      title: "The bio",
      level: 2,
      paras: [
        "It’s a short pitch. Lead with benefits and facts, not a novel. Use two or three on-topic emoji — not a string of them.",
      ],
      lists: [
        {
          intro: "Commerce profiles often include:",
          items: [
            "what you offer and who it’s for",
            "city / hours",
            "terms or offer",
            "a promo or USP",
            "a call to action (DM, call, or follow the link)",
          ],
        },
      ],
      notes: [
        {
          title: "Tip",
          text: "Draft the bio in Notes, check the line breaks, then paste it into the profile — easier to control how the lines wrap.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Header and business mode",
      level: 2,
      paras: [
        "In business or professional mode, contacts and insights are usually easier to reach, and the header looks more utilitarian. Settings paths change — look for the switch to a business/professional account in the profile menu.",
        "Set the category and contact buttons so they match the offer in your bio.",
      ],
    },
    {
      title: "Avatar",
      level: 2,
      paras: [
        "The avatar shows up everywhere: feed, comments, recommendations. On a tiny circle, a face, logo, or simple mark has to read clearly.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "sharp, not blurry",
            "enough contrast against the background",
            "recognizable without tiny text",
            "consistent with highlight covers",
          ],
        },
      ],
    },
    {
      title: "Shooting and a content buffer",
      level: 2,
      paras: [
        "Shooting “fresh” every day burns you out. Keep a small archive of frames and plan stories ahead.",
        "Good light, a level horizon, a quiet background, and a few angles will save you time in editing.",
      ],
      lists: [
        {
          intro: "Practical habits:",
          items: [
            "shoot with a buffer",
            "check light before you publish",
            "clear clutter from the frame",
            "take 3–5 takes of one scene",
          ],
        },
      ],
    },
    {
      title: "A consistent feed style",
      level: 2,
      paras: [
        "Style is a repeating device: color grade, subjects, framing, type on covers. Pick one constant and hold it for 10–20 posts before a major change.",
      ],
      lists: [
        {
          intro: "Approaches that work:",
          items: [
            "one color grade",
            "grid templates (photo / text-card alternation)",
            "a repeating element or composition",
          ],
        },
      ],
    },
    {
      title: "Post design",
      level: 2,
      paras: [
        "Copy can be short or long — structure matters more: a hook in the first lines, paragraphs, lists, and a CTA at the end. Carousels help you spread value across slides.",
      ],
      lists: [
        {
          intro: null,
          items: [
            "first line — a hook before “more”",
            "paragraphs and lists instead of a wall of text",
            "hashtags and geo by meaning, not spam",
            "one tone of voice that matches the profile header",
          ],
        },
      ],
    },
    {
      title: "Stories and short video",
      level: 2,
      paras: [
        "Stories are for timely updates and warm-up. Short clips (Reels and similar formats) are for reach with a clear plot. In both cases, plan the first frame, captions, and one idea per clip before you shoot.",
        "Stories disappear quickly; clips keep working for reach. Don’t mix jobs: day’s news belongs in Stories; showing value belongs in a clip.",
      ],
      lists: [
        {
          intro: "Before you shoot:",
          items: [
            "one goal for the clip",
            "a clear plot for 15–45 seconds",
            "on-screen text for watching without sound",
            "clean audio and a stable picture",
          ],
        },
      ],
      links: [
        {
          label: "Instagram Live",
          href: "/en/blog/pryamoy-efir-instagram/",
        },
      ],
    },
  ],
};
