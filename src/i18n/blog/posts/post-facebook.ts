import type { BlogPost } from "../../../data/blog";

/** EN overlay for post-facebook — same structure as RU JSON. */
export const postFacebookEn: BlogPost = {
  slug: "post-facebook",
  title: "How to publish on Facebook: formats and settings",
  date: "2020-10-27",
  category: "SMM",
  cover: "/images/blog/post-facebook/cover-en.webp",
  excerpt:
    "How to publish Facebook posts on a personal wall, in a group, and on a Page: formats, pinning, scheduling, and boosting — without outdated button screenshots.",
  lead: [
    "Publishing on Facebook starts with the “What’s on your mind” field on a profile, in a group, or on a business Page. Formats differ: text, photo/video, poll, event, Live — and you can combine them.",
    "Below: how to create a post, useful settings, and when a paid boost makes sense. Meta menus change; check image sizes and limits in Help. The Meta disclaimer is on the page. Starting a Page or group is covered in a separate article.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Facebook* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "How is a Page post different from a group post?",
      a: "A Page has more brand tools (notes, jobs, products — where available). In a group, community rules and member moderation matter more.",
    },
    {
      q: "Can I turn comments off completely?",
      a: "Often you can only limit them (word filters, who can comment). Exact options depend on profile type and region.",
    },
    {
      q: "Is scheduling available to everyone?",
      a: "Scheduling is usually easier on Pages with editor or admin roles. Personal profiles have a thinner feature set.",
    },
    {
      q: "Can I boost any Facebook post?",
      a: "No. You need a business Page, ads permissions, and a format the ads account accepts for promotion.",
    },
    {
      q: "Is 1200×630 the required image size?",
      a: "It’s a common cue for link previews. Check current recommendations in Meta Ads/Pages Help.",
    },
  ],
  sections: [
    {
      title: "Where people publish: profile, group, Page",
      level: 2,
      paras: [
        "Personal profile — for personal and expert content in friends’ feeds. Group — discussion inside a community. Business Page — brand storefront and entry to ads.",
        "The create-post field is usually under the header. From there you add media, a poll, background, tags, and emoji.",
      ],
      links: [
        {
          label: "Facebook group and Page",
          href: "/en/blog/gruppa-facebook/",
        },
      ],
    },
    {
      title: "Post formats",
      level: 2,
      paras: [
        "Text, photo and video, Live, event, poll, list — the base set. On a Page you may also see notes, products, and jobs — if enabled in the region.",
        "Write so the point reads in the preview: long walls of text rarely get finished. Structure, paragraphs, and fitting emoji help scanning.",
      ],
      lists: [
        {
          intro: "Before publishing:",
          items: [
            "one main idea",
            "media of reasonable weight",
            "tags — before publish if the UI requires it",
            "link and preview check",
            "tone audit: not spam and not clickbait without an offer",
          ],
        },
      ],
    },
    {
      title: "Settings after publishing",
      level: 2,
      paras: [
        "You can edit a post via the “⋯” menu. On Pages, pinning and scheduling are often available.",
        "Comments are limited with unwanted-word filters and rules on who can write. A full ban may be unavailable — check current timeline and public-post settings.",
      ],
    },
    {
      title: "Scheduled posts and a link to the entry",
      level: 2,
      paras: [
        "Scheduling: compose the post → pick publish time. Handy for a Page editorial team.",
        "A post link is usually copied from the publish date or the share menu. Sometimes Page post dates can be shifted — be careful with audience trust.",
      ],
    },
    {
      title: "Boosting a post",
      level: 2,
      paras: [
        "The “Boost” button on a Page post opens a simplified or full ads flow: audience, duration, budget. You need admin rights and linked ads access.",
        "Organic without an offer and engagement rarely flies from one button alone. Content first, then scale. Campaign mistake breakdowns live in Facebook Ads cases.",
      ],
      links: [
        {
          label: "Facebook Ads cases",
          href: "/en/blog/keisy-facebook-ads/",
        },
        {
          label: "Facebook Ads: how it works",
          href: "/en/blog/facebook-ads/",
        },
      ],
      notes: [
        {
          title: "Note",
          kind: "tip",
          text: "Facebook/Meta Ads availability depends on the ads account and region. This material is informational.",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Pick the surface (profile / group / Page), build a clear post, and set what’s needed before or right after publishing.",
        "Paid boost amplifies a ready post; it doesn’t replace meaning.",
      ],
    },
  ],
  closing: [
    "Make one post with a strong first screen on the right surface, check preview and comments — and only then decide if a boost is needed.",
  ],
  related: [
    "gruppa-facebook",
    "keisy-facebook-ads",
    "facebook-ads",
    "svyazka-instagram-facebook",
    "reklama-instagram",
    "nativnaya-reklama",
  ],
};
