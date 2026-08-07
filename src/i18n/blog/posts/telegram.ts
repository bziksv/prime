import type { BlogPost } from "../../../data/blog";

/** EN overlay for telegram — same structure as RU JSON. */
export const telegramEn: BlogPost = {
  slug: "telegram",
  title: "Telegram: features, pros, and how it compares to other messengers",
  date: "2021-07-27",
  category: "SMM",
  cover: "/images/blog/telegram/cover-en.webp",
  excerpt:
    "What Telegram can do: chats, channels, bots, cloud, and security. Pros and cons, comparison with other messengers, and why a business channel helps — without outdated “forever” stats.",
  lead: [
    "Telegram is a cross-platform messenger: personal and group chats, channels, bots, large files, and sync between phone and desktop. For marketing it’s also a media surface with direct delivery into notifications.",
    "This overview covers purpose, strengths and weaknesses, how it compares with other messengers, and business scenarios. Limits and features update — check current numbers in Telegram Help. How to run a channel from scratch is in a separate article.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. WhatsApp* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is a channel different from a group?",
      a: "A channel is a feed from author to subscribers. A group is participant chat. Often you run a channel + discussion chat.",
    },
    {
      q: "Does a business need Telegram if it already has a site?",
      a: "As an extra channel: news, support, warm-up, messages to people who opted in. It doesn’t replace the site and SEO — it adds communication.",
    },
    {
      q: "Are secret chats the default for every dialogue?",
      a: "No. Regular cloud chats sync across devices. Secret chats are a separate mode focused on local encryption and auto-delete; details are in the client Help.",
    },
    {
      q: "Is Telegram free?",
      a: "Basic use is free. Paid options (including Premium) and ad formats appear and change — don’t treat 2017–2021 guides as a price list.",
    },
    {
      q: "Where should a channel start?",
      a: "Setup, rubrics, starter posts, and a traffic plan. A deeper walkthrough is in the channel launch article.",
    },
  ],
  sections: [
    {
      title: "Purpose and core features",
      level: 2,
      paras: [
        "Sign-up with a phone number; clients for mobile OSes, desktop, and web. Communication: text, voice, video calls, groups and supergroups, username without showing the number in every chat.",
        "Content strengths: channels, bots, forwarding, hashtags in search, cloud media storage within the service. File-size and group-member limits have changed — check current ones.",
      ],
      lists: [
        {
          intro: "Typical set:",
          items: [
            "personal and group chats;",
            "channels as media;",
            "bots and mini apps;",
            "stickers, voice notes, large attachments;",
            "history sync across devices.",
          ],
        },
      ],
    },
    {
      title: "Pros and cons",
      level: 2,
      paras: [
        "Pros: speed, solid desktop, flexibility for media and automation, active feature development.",
        "Cons: in-app channel search is weaker than social networks; public content moderation sits with authors and the platform; support and UI were historically English-first (better now, nuances remain); the sign-up number is a sensitive account-security point.",
      ],
      lists: [
        {
          intro: "Worth remembering:",
          items: [
            "two-factor auth and the sessions list;",
            "caution with unknown bots and files;",
            "a public channel ≠ “full anonymity.”",
          ],
        },
      ],
    },
    {
      title: "Comparison with other messengers",
      level: 2,
      paras: [
        "WhatsApp* and similar messengers are often stronger on “contact network”: higher chance the other person is already there. Telegram is more often chosen for desktop, channels, bots, and file work. Viber and others have their niches in calls and communities.",
        "The comparison below is a scenario guide, not a forever ranking. Interfaces and limits change; the legal status of some products is in the notice at the top of the article.",
      ],
      lists: [],
      tables: [
        {
          caption: "Rough scenario comparison",
          headers: ["Scenario", "Telegram", "WhatsApp* / peers"],
          rows: [
            ["Channel / media", "Strong side", "More statuses, less often a full channel"],
            ["Bots and automation", "Broad ecosystem", "Depends on the platform"],
            ["Desktop without the phone nearby", "Full client", "Often tied to the phone"],
            ["“Everyone already has it” reach", "Lower in some audiences", "Often higher"],
          ],
        },
      ],
      notes: [
        {
          title: "Note",
          text: "This material describes platform features. Choosing a messenger for business is a decision that accounts for audience, policy, and law in your jurisdiction.",
        },
      ],
    },
    {
      title: "Channels, bots, and business",
      level: 2,
      paras: [
        "A channel is a news and offer storefront with push. Bots — leads, FAQ, order status, simple funnels. Growing subscribers almost always needs external sources and ads in related channels.",
        "Don’t mix up “we have a messenger” with a marketing strategy: you need rubrics, tone, measurement, and dialogue support.",
      ],
      lists: [
        {
          intro: "Business scenarios:",
          items: [
            "company and product news;",
            "support and order status;",
            "warm-up before a launch;",
            "closed content for clients;",
            "seeding and partnerships with other channels.",
          ],
        },
      ],
      links: [
        {
          label: "Telegram channel from scratch",
          href: "/en/blog/telegram-kanal/",
        },
      ],
    },
  ],
};
