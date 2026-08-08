import type { BlogPost } from "../../../data/blog";

/** EN overlay for instagram-direct-gid — same structure as RU JSON. */
export const instagramDirectGidEn: BlogPost = {
  slug: "instagram-direct-gid",
  title: "Instagram Direct: how to use the messenger",
  date: "2021-12-21",
  category: "SMM",
  cover: "/images/blog/instagram-direct-gid/cover-en.webp",
  excerpt:
    "How to open Direct, send a message, attachments, quick replies, and chats on Instagram — a messenger guide without grey broadcasts or outdated “paper plane” screenshots.",
  lead: [
    "Direct is Instagram’s built-in messenger: text, photo, video, voice notes, forwarding posts and Stories, group chats. For business it’s leads and support; for personal accounts — ordinary chat.",
    "Below: basic actions in the app. Icons and menu items have changed; follow the current client. Auto-greetings, SLA, and why you mustn’t run cold spam — in a separate piece. The Meta product notice is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is this different from the greetings and broadcasts piece?",
      a: "Here — how to use the messenger (send, attach, chat). There — business service and risks of cold mass DMs.",
    },
    {
      q: "Is there a character limit?",
      a: "Older guides often said ~500 characters. Check current limits in the app: long texts sometimes go as several messages or as a link/file.",
    },
    {
      q: "Can you set up a mass broadcast inside the app?",
      a: "There’s no full “spam everyone” in the official client — and you shouldn’t hunt third-party bots. Write to those who started the chat or agreed under the rules.",
    },
    {
      q: "Are read receipts visible?",
      a: "Depends on privacy settings and chat type. Don’t hard-conclude “read and ignoring” without accounting for disabled statuses.",
    },
    {
      q: "Do you need a business account for Direct?",
      a: "Chat works on a personal profile too. For commerce a professional mode is more convenient: Insights, contacts, reply workflows.",
    },
  ],
  sections: [
    {
      title: "Why Direct exists",
      level: 2,
      paras: [
        "Messaging without leaving for another messenger: clarify an order, send a price list, answer a question after an ad or Story.",
        "Group chats suit a team or small community support. Polls and quick reactions are for engagement — not spam.",
      ],
      lists: [
        {
          intro: "What people usually send:",
          items: [
            "text and emoji",
            "photo and video",
            "voice notes",
            "posts, Reels, and Stories",
            "links to profiles and sites (where available)",
          ],
        },
      ],
      links: [
        {
          label: "Greetings and messages without spam",
          href: "/en/blog/instagram-direct/",
        },
        {
          label: "Business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "How to open and write",
      level: 2,
      paras: [
        "In the app open the messages section (the icon has changed: paper plane, chats tab, etc.). The dialogue list — inbox and requests from people you don’t follow.",
        "New chat: create message → search user → text → send. Alternative — Message on the other profile, if available.",
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Hunting for a mass broadcast in Direct settings and plugging in shady programs. That hits the account — see the risks piece.",
        },
      ],
    },
    {
      title: "Attachments and special formats",
      level: 2,
      paras: [
        "You can attach media from the gallery or camera, forward a post, sometimes location or stickers. Disappearing photo/video live for a limited time: for contracts and source files use cloud or email.",
        "In-chat polls help pick quickly (date, service option). Don’t confuse them with official order forms on the site.",
      ],
      links: [
        {
          label: "Save a photo from Instagram",
          href: "/en/blog/sohranit-foto-instagram/",
        },
      ],
    },
    {
      title: "Quick replies and business chat",
      level: 2,
      paras: [
        "Saved replies speed up common questions: prices, hours, delivery. A template is a start; a clarifying question and live follow-up are required.",
        "Assign who replies during business hours. A large flow needs a dedicated person or a CRM queue — not “SMM between Reels.”",
      ],
      lists: [
        {
          intro: "Chat hygiene:",
          items: [
            "reply without long silence",
            "on substance, without arrogance",
            "correctly, in the customer’s language",
            "don’t send ten messages instead of one clear one",
            "log leads outside the chat",
          ],
        },
      ],
    },
    {
      title: "Requests, reports, deletion",
      level: 2,
      paras: [
        "Messages from strangers may land in Requests. Set a policy: accept leads / ignore spam. Use report and block against fraud and harassment — per app rules.",
        "Delete for yourself and “unsend” for the other person are different actions; options depend on the client version. Don’t assume a disputed file vanishes for everyone forever.",
      ],
      links: [
        {
          label: "Blocking on Instagram",
          href: "/en/blog/blokirovka-instagram/",
        },
      ],
    },
    {
      title: "Promotion via Direct — sober view",
      level: 2,
      paras: [
        "Working pattern: the person wrote after a CTA in a Story/post/ad → you reply fast. We don’t repeat cold batches and old Instaplus / Tooligram / Zengram catalogs.",
        "“A billion users” stats ≠ your Direct reach. Watch replies, leads, and sales.",
      ],
      links: [
        {
          label: "Ads on Instagram",
          href: "/en/blog/reklama-instagram/",
        },
        {
          label: "Shadowban",
          href: "/en/blog/tenevoy-ban-instagram/",
        },
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "Direct is the messenger inside Instagram. Learn to write, attach, and reply with templates plus live follow-up.",
        "For sales growth, service speed beats hunting a “send to everyone” button.",
      ],
    },
  ],
  closing: [
    "Open chats, set quick replies and an inbound queue — so Direct works for leads. Cover automation without spam and cold batches in the greetings piece.",
  ],
  related: [
    "instagram-direct",
    "biznes-akkaunt-instagram",
    "reklama-instagram",
    "tenevoy-ban-instagram",
    "blokirovka-instagram",
    "biznes-v-instagram",
  ],
};
