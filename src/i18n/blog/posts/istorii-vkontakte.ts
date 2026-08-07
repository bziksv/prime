import type { BlogPost } from "../../../data/blog";

/** EN overlay for istorii-vkontakte — same structure as RU JSON. */
export const istoriiVkontakteEn: BlogPost = {
  slug: "istorii-vkontakte",
  title: "VKontakte Stories: how to publish and what to fill them with",
  date: "2022-02-18",
  category: "SMM",
  cover: "/images/blog/istorii-vkontakte/cover-en.webp",
  excerpt:
    "How to work with VK Stories: why they matter, framing a shot, publishing from phone and from a community, business ideas, and platform limits.",
  lead: [
    "VKontakte Stories are a short vertical format at the top of the feed: photos and clips live about a day and work well for “here and now.”",
    "The app UI changes: use this guide for the meaning of the steps and a content frame, not a click-path over old icons. Check current limits and community access in VK Help.",
  ],
  faq: [
    {
      q: "How do Stories differ from a wall post?",
      a: "Short lifespan, vertical format, emphasis on urgency and behind-the-scenes. A wall post lives longer and fits evergreen topics better.",
    },
    {
      q: "Can I publish Stories as a community?",
      a: "Yes, if the community has the feature under current VK rules. In the editor you choose whose name publishes — personal page or group.",
    },
    {
      q: "How long do Stories last?",
      a: "Usually up to 24 hours; you can delete earlier. Some material can be saved to highlights if the platform allows it.",
    },
    {
      q: "Are there technical guidelines for Stories?",
      a: "Vertical around 1080×1920, short clips, moderate file size. Exact VK limits change — check current requirements before a video series.",
    },
    {
      q: "What should a business publish?",
      a: "Behind the scenes, announcements, Q&A, mini-tips, polls, product in use — one idea per frame, a clear CTA.",
    },
  ],
  sections: [
    {
      title: "Why Stories matter",
      level: 2,
      paras: [
        "Stories keep contact between big posts: remind about the brand, warm people up for a promo, show a live process.",
        "The format forgives a draft more than the feed, but the job remains: why should someone watch to the end, and what should they do next.",
      ],
      lists: [
        {
          intro: "Good jobs for Stories:",
          items: [
            "announce a post / live / promo;",
            "answer a frequent question;",
            "behind-the-scenes of production or the office;",
            "collect reactions with a poll / sticker.",
          ],
        },
      ],
    },
    {
      title: "Framing the shot",
      level: 2,
      paras: [
        "Shoot vertical, mind safe zones: avatars and timer at the top, buttons at the bottom. Large type, one idea per screen.",
        "Keep clips short: better a series of 3–5 frames than one unstructured minute.",
      ],
      lists: [
        {
          intro: "Before publishing:",
          items: [
            "light and readable audio (or captions);",
            "first frame with a hook;",
            "CTA at the end of the series;",
            "check you don’t break VK rules.",
          ],
        },
      ],
      notes: [
        {
          title: "App UI",
          text: "Entry is usually near the Stories block in the feed or on the profile page (camera / “add”). Icons move — teach the team a meaning checklist, not “tap the pink button.”",
        },
      ],
    },
    {
      title: "Publishing from a phone",
      level: 2,
      paras: [
        "Open the Stories editor: shoot a photo/short video or upload from the gallery. Add text, stickers, a poll — with purpose, not every sticker at once.",
        "Before sending, pick the audience (if lists are available) and publish. You can delete earlier than 24 hours via the Story’s own menu.",
      ],
      lists: [
        {
          intro: "Basic flow:",
          items: [
            "open the Story editor;",
            "shoot or pick a file;",
            "add text / sticker / poll;",
            "publish and check the feed preview.",
          ],
        },
      ],
    },
    {
      title: "Community Stories",
      level: 2,
      paras: [
        "For a public page the flow is the same, but at the end you choose publish as the community. Access depends on group type and current platform rules — if the option is missing, the feature isn’t open yet or you need another admin role.",
        "Agree inside the team: one tone, one cadence, who answers reaction replies.",
      ],
      lists: [
        {
          intro: "Roles:",
          items: [
            "who shoots;",
            "who approves offers and prices;",
            "who replies in DM after the CTA.",
          ],
        },
      ],
    },
    {
      title: "Ideas for business",
      level: 2,
      paras: [
        "Don’t chase pretty for Stories’ sake. A series should lead to an action: message, answer a poll, finish a post, visit the location.",
      ],
      lists: [
        {
          intro: "Working formats:",
          items: [
            "day / shift report;",
            "new product and stock;",
            "3-slide mini tip;",
            "before/after;",
            "“what to choose” poll;",
            "client-mistake walkthrough without toxicity;",
            "promo reminder with a deadline.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Dumping the same wall-post text into Stories without adapting. Stories need large phrases, face/product bigger, and a clear next step.",
        },
      ],
    },
    {
      title: "Limits and quality",
      level: 2,
      paras: [
        "The platform limits clip length, file weight, and daily publishes. Guides like 1080×1920 vertical help prep in an editor, but check limits before a big series.",
        "Content must not break VK rules: spam, banned topics, others’ content without rights — risk not only for the Story, but for the community.",
      ],
      lists: [
        {
          intro: "Series quality checklist:",
          items: [
            "one topic per release;",
            "3–7 frames max;",
            "readable text without clutter;",
            "CTA and a contact path;",
            "after 24 hours — takeaway: what was watched / where people clicked.",
          ],
        },
      ],
      links: [
        {
          label: "VK community comments",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
  ],
};
