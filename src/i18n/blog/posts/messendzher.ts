import type { BlogPost } from "../../../data/blog";

/** EN overlay for messendzher — same structure as RU JSON. */
export const messendzherEn: BlogPost = {
  slug: "messendzher",
  title: "What a messenger is: types, features, and business use",
  date: "2021-01-15",
  category: "SMM",
  cover: "/images/blog/messendzher/cover-en.webp",
  excerpt:
    "A messenger is an app or web client for instant messages, calls, and files. How WhatsApp*, Telegram, and workplace chats differ — and how to roll them out without spam.",
  lead: [
    "A messenger is a program or web client for instant messaging over the internet: text, media, files, often calls and groups. Both people need the same service and a network.",
    "Below — what the format means, a look at popular apps without a cult of “billions of users from a 2021 article,” and how companies adopt them. Audience numbers and UI change — check current data. Meta* products are mentioned for information only.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. WhatsApp* and Facebook Messenger* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is a messenger different from SMS?",
      a: "It rides on data/Wi‑Fi, usually cheaper and richer in media. SMS stays a fallback and for service codes.",
    },
    {
      q: "Can I message from WhatsApp* into Telegram?",
      a: "No: chats don’t mix across messengers. Both people need the same service.",
    },
    {
      q: "Does a browser version count as a messenger?",
      a: "Yes, if it’s the official web client of the same service. Often it needs a phone link or a separate sign-in.",
    },
    {
      q: "What should a business pick?",
      a: "Wherever customers and the team already are: often Telegram, WhatsApp*, or a workplace suite by niche. Don’t spawn five channels without a reply playbook.",
    },
    {
      q: "Is a work chat the same as a personal messenger?",
      a: "Similar UX, but a company needs policies: what you may send, where files live, who admins, what happens when staff leave.",
    },
    {
      q: "Are messenger broadcasts legal?",
      a: "Only with consent and under platform/law rules. Spamming a number list risks blocks and complaints.",
    },
    {
      q: "Does a messenger replace CRM?",
      a: "No. Chats are a channel. Deals, statuses, and ownership belong in CRM or a shared tracker.",
    },
    {
      q: "Do you need a separate Facebook Messenger*?",
      a: "If the audience is there and you can answer. Mind platform rules and jurisdiction; this article is informational.",
    },
  ],
  sections: [
    {
      title: "How a messenger works",
      level: 2,
      paras: [
        "After install or sign-in you see a chat list. Messages go to the service’s servers (or another architecture) and reach the other person when they’re online.",
        "Typical kit: text, photo/video, documents, read receipts, groups, sometimes channels, bots, calls. Exact features depend on the product and version.",
        "A separate class is on-site live-chat widgets: still chat, but inside your domain and support flow — not a “world” messenger.",
      ],
      lists: [],
    },
    {
      title: "Popular consumer services",
      level: 2,
      paras: [
        "WhatsApp* — a mass messenger tied to a phone number, with chats, calls, and a business track. Multi-account and device limits change — check current Help, not a 2021 guide.",
        "Telegram — chats, channels, bots, strong for content and support; policies and availability by region are a separate story.",
        "Viber — chats and calls; some users dislike ad noise — judge for yourself.",
        "Signal — privacy-first; less of a “business storefront,” more private messaging.",
        "Skype — historically strong on calls; many teams moved to other stacks.",
        "Facebook Messenger* — chats in the Meta* ecosystem; mind legal status and platform rules in your jurisdiction. This material does not urge bypassing restrictions.",
      ],
      lists: [],
      notes: [
        {
          title: "“Billion users” figures",
          text: "Stats from 2021 roundups age fast. For channel choice, where your audience is matters more than a global league table.",
        },
      ],
      links: [
        {
          label: "WhatsApp in Instagram*",
          href: "/blog/whatsapp-v-instagram/",
        },
        {
          label: "WhatsApp* broadcasts",
          href: "/blog/rassylka-whatsapp/",
        },
        {
          label: "Telegram bots",
          href: "/blog/telegram-boty/",
        },
      ],
    },
    {
      title: "Corporate use",
      level: 2,
      paras: [
        "Inside a company a messenger speeds approvals and files — if rules exist: work chats ≠ endless off-topic, secrets not in a contractor’s DMs without a contract.",
        "For customers — channel links on the site and one reply SLA. Otherwise “they wrote in three places — nobody answered.”",
        "Rollout: check whether the audience uses the channel → pick 1–2 services → write scenarios → train → link to CRM when you can.",
      ],
      lists: [
        {
          intro: "Mini playbook:",
          items: [
            "hours and reply speed;",
            "what you may promise in chat;",
            "where leads go;",
            "who owns the corporate number/bot;",
            "no spam broadcasts without consent.",
          ],
        },
      ],
      links: [
        {
          label: "CRM",
          href: "/blog/crm/",
        },
        {
          label: "Callback and contact channels",
          href: "/blog/obratnyy-zvonok/",
        },
      ],
    },
    {
      title: "Mistakes",
      level: 2,
      paras: [
        "Spamming strangers’ numbers “because the messenger is free.”",
        "Five channels with no owner and no CRM — chaos, not omnichannel.",
        "Storing passwords and client card data in the chat.",
        "Expecting “we plugged in WhatsApp* — sales grew by themselves” without an offer and reply speed.",
      ],
      lists: [],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A messenger is instant chat over the internet inside one service.",
        "For business what matters is audience channel, playbook, and lead tracking — not a collection of icons.",
        "Follow platform rules and consent for messages.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Pick one primary messenger where customers already are, put it on the site with a clear CTA, and set a reply rule into CRM — more useful than arguing whose “billion users” is bigger.",
  ],
  related: [
    "rassylka-whatsapp",
    "whatsapp-v-instagram",
    "telegram-boty",
    "sekretnyy-chat-telegram",
    "crm",
    "obratnyy-zvonok",
  ],
};
