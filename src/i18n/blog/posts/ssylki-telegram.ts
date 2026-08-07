import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylki-telegram — same structure as RU JSON. */
export const ssylkiTelegramEn: BlogPost = {
  slug: "ssylki-telegram",
  title: "Telegram links: profile, channel, chat, and invite",
  date: "2020-09-15",
  category: "SMM",
  cover: "/images/blog/ssylki-telegram/cover-en.webp",
  excerpt:
    "How to create and share links to a Telegram profile, channel, and chat: t.me, usernames, invite links, in-message hyperlinks, and opening URLs in the app.",
  lead: [
    "In Telegram, almost everything is a link: a public `@username`, a `t.me/…` URL, or a one-time or permanent invite to a private space. Get the format wrong and people never reach the channel or support chat.",
    "We cover links to a profile, channel, and chat, how invites differ from public URLs, and how to hyperlink text in a message. For a messenger overview and launching a channel, see the related posts.",
  ],
  faq: [
    {
      q: "How does t.me differ from @username?",
      a: "Two ways to write the same public address. In a browser, `https://t.me/name` is convenient; in chat, `@name` is usually enough.",
    },
    {
      q: "How do I grant access to a private channel?",
      a: "Use an invite link from channel settings — not a public username if the channel doesn’t have one.",
    },
    {
      q: "Where do I get a profile link?",
      a: "If a username is set, use `t.me/username`. Without one, share a contact from the app or ask people to find you in a chat.",
    },
    {
      q: "Can I turn a word into a link?",
      a: "Yes: desktop and mobile clients let you turn selected text into a link. Useful when you want a site URL without showing a long string.",
    },
    {
      q: "Is an invite always permanent?",
      a: "No. You can cap join counts and set an expiry. For lasting showcases, prefer a public username plus moderation.",
    },
    {
      q: "Can I link to a specific post?",
      a: "Public channels use URLs like `t.me/channel/123`. Private channels use the client’s own post-share flows.",
    },
    {
      q: "Will t.me open without the app?",
      a: "In a browser you’ll get the web version or a prompt to open the app. On a website, prefer a full https link.",
    },
    {
      q: "How is this different from the channel article?",
      a: "That one covers launch and content. This one is only link formats and sharing.",
    },
  ],
  sections: [
    {
      title: "Public links: username and t.me",
      level: 2,
      paras: [
        "Set a unique username in settings. The public channel or profile address is `https://t.me/username`. In messages you can write `@username` — the client makes it clickable.",
        "Pick a free, readable username: brand beats a random string. Renaming breaks old bookmarks, so change it rarely.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "username matches on the site and business card;",
            "link opens on phone and desktop;",
            "no typos in print or QR;",
            "URL case usually doesn’t matter, but copy it from the client.",
          ],
        },
      ],
      links: [
        {
          label: "Telegram overview",
          href: "/en/blog/telegram/",
        },
      ],
    },
    {
      title: "Profile link",
      level: 2,
      paras: [
        "A personal profile with a username shares the same way via `t.me/…`. If the username is hidden or unset, people add you from a chat, by number (if allowed), or via a contact card.",
        "For business support, use a separate account, bot, or chat — not the founder’s personal profile.",
      ],
      lists: [
        {
          intro: "Practical tips:",
          items: [
            "in the site footer — t.me to the channel or bot;",
            "in email signatures — a short https link;",
            "don’t publish a personal number more than you need to.",
          ],
        },
      ],
    },
    {
      title: "Channel: public URL and invite",
      level: 2,
      paras: [
        "Public channel: `t.me/channelname`. Private: create an invite link in channel management. You can limit it by time and user count.",
        "For landings and ads you almost always want a stable public address. Save invites for closed communities and tests.",
      ],
      lists: [
        {
          intro: "Before you announce:",
          items: [
            "description and avatar ready;",
            "3–5 posts ready;",
            "link points to that exact channel;",
            "UTM on the site if you track clicks.",
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
    {
      title: "Chats and groups",
      level: 2,
      paras: [
        "Groups can also have a username or be invite-only. Channel discussion groups often get a separate “chat” link next to the channel.",
        "Don’t mix up channel and chat links in ads: people should land where they expect content or conversation.",
      ],
      lists: [
        {
          intro: "Label creatives clearly:",
          items: [
            "“channel” vs “support chat”;",
            "rules in the pinned message;",
            "anti-spam bot if needed.",
          ],
        },
      ],
    },
    {
      title: "Hyperlink in text and sharing",
      level: 2,
      paras: [
        "In a message, select a word → Link / Create link → paste the URL. The post looks cleaner than a wall of `https://…`.",
        "In channel posts, link the site, other posts, and docs. Keep anchor text honest — no clickbait “here” pointing at phishing.",
      ],
      lists: [
        {
          intro: "Message checklist:",
          items: [
            "one main link;",
            "link preview looks right (site Open Graph);",
            "a mobile tap hits the target.",
          ],
        },
      ],
      links: [
        {
          label: "Open Graph tags",
          href: "/en/blog/open-graph/",
        },
      ],
    },
    {
      title: "Opening URLs and typical mistakes",
      level: 2,
      paras: [
        "From the site and email, use `https://t.me/…`. From another messenger, same format. Bot deep-link parameters (`t.me/bot?start=…`) are a separate funnel topic.",
        "Common mistakes: expired invite, username change with no redirect, link to a draft or wrong chat, QR with broken encoding.",
      ],
      lists: [
        {
          intro: "Before a campaign:",
          items: [
            "click the link on iOS and Android;",
            "check invite limits;",
            "lock the URL in a shared table;",
            "don’t copy from lookalike fake channels.",
          ],
        },
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "One canonical link in the brand kit saves an hour of support every month.",
        },
      ],
      links: [
        {
          label: "Telegram bots",
          href: "/en/blog/telegram-boty/",
        },
      ],
    },
  ],
  related: [
    "telegram",
    "telegram-kanal",
    "telegram-boty",
    "open-graph",
    "seo-vkontakte",
  ],
};
