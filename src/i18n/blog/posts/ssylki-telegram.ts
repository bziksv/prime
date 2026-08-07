import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylki-telegram — same structure as RU JSON. */
export const ssylkiTelegramEn: BlogPost = {
  slug: "ssylki-telegram",
  title: "Telegram links: profile, channel, chat, and invite",
  date: "2020-09-15",
  category: "SMM",
  cover: "/images/blog/ssylki-telegram/cover-en.webp",
  excerpt:
    "How to make and share a link to a Telegram profile, channel, and chat: t.me, username, invite links, hyperlinks in text, and opening URLs in the app.",
  lead: [
    "In Telegram almost everything is shared as a link: public `@username`, `t.me/…`, one-time and permanent invites to private spaces. Without clear formats, people never reach the channel or support chat.",
    "Below — how to build a link to a profile, channel, and chat, how invite differs from a public URL, and how to insert a hyperlink in a message. Messenger overview and channel launch are in related articles.",
  ],
  faq: [
    {
      q: "How does t.me differ from @username?",
      a: "Different writings of the same public address. In a browser `https://t.me/name` is handy; in chat `@name` is often enough.",
    },
    {
      q: "How to grant access to a private channel?",
      a: "Via an invite link from channel settings — not via a public username if there isn’t one.",
    },
    {
      q: "Where do I get a profile link?",
      a: "If a username is set — `t.me/username`. Without one, share a contact from the app or ask people to find you in a chat.",
    },
    {
      q: "Can a word be a link?",
      a: "Yes: desktop and mobile clients have “link” formatting on selected text. Handy for a site URL without a long string visible.",
    },
    {
      q: "Is an invite always forever?",
      a: "No. There can be join-count and expiry limits. For lasting showcases prefer a public username + moderation.",
    },
    {
      q: "Link to a specific post?",
      a: "Public channels have URLs like `t.me/channel/123`. Private ones use their own post-share flows in the client.",
    },
    {
      q: "Will t.me open without the app?",
      a: "In a browser — web version or a prompt to open the app. On a site, better give an https link.",
    },
    {
      q: "How is this different from the channel article?",
      a: "That one is launch and content. Here — link formats and sharing only.",
    },
  ],
  sections: [
    {
      title: "Public links: username and t.me",
      level: 2,
      paras: [
        "Set a unique username in settings. Public channel/profile address: `https://t.me/username`. In messages you can write `@username` — the client makes it clickable.",
        "Username should be free and readable: brand beats a random string. Renaming breaks old bookmarks — change rarely.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "username matches on the site and business card;",
            "link opens on phone and PC;",
            "no typos in print/QR;",
            "URL case usually isn’t critical, but copy from the client.",
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
        "A personal profile with a username shares the same way via `t.me/…`. If username is hidden or unset, people add you from a dialog, by number (if allowed), or via a contact card.",
        "For business support you usually want a separate account/bot or chat — not the founder’s personal profile.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "in the site footer — t.me to the channel or bot;",
            "in email signature — a short https link;",
            "don’t publish a personal number more than needed.",
          ],
        },
      ],
    },
    {
      title: "Channel: public URL and invite",
      level: 2,
      paras: [
        "Public channel: `t.me/channelname`. Private: create an invite link in channel management. You can limit it by time and user count.",
        "For landings and ads you almost always need a stable public address. Invite — for closed communities and tests.",
      ],
      lists: [
        {
          intro: "Before the announcement:",
          items: [
            "description and avatar in place;",
            "3–5 posts ready;",
            "link goes to that exact channel;",
            "UTM on the site if you count clicks.",
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
        "Groups can also have a username or invite-only. Channel discussion supergroups often get a separate “chat” link next to the channel.",
        "Don’t confuse channel and chat links in ads: people should land where they expect content or conversation.",
      ],
      lists: [
        {
          intro: "Label in creatives:",
          items: [
            "“channel” vs “support chat”;",
            "rules in the pin;",
            "anti-spam bot if needed.",
          ],
        },
      ],
    },
    {
      title: "Hyperlink in text and sharing",
      level: 2,
      paras: [
        "In a message select a word → “link” / Create link → paste the URL. The post looks cleaner than a wall of `https://…`.",
        "For channel posts it’s handy to link the site, other posts, and docs. Keep anchor text honest — no clickbait “here” to phishing.",
      ],
      lists: [
        {
          intro: "Message checklist:",
          items: [
            "one main link;",
            "link preview looks right (site Open Graph);",
            "mobile tap hits the target.",
          ],
        },
      ],
      links: [
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
    },
    {
      title: "Opening URLs and typical mistakes",
      level: 2,
      paras: [
        "From the site and email use `https://t.me/…`. From another messenger — the same format. Bot deep-link parameters (`t.me/bot?start=…`) are a separate story for funnels.",
        "Mistakes: expired invite, username change without redirect, link to a draft/wrong chat, QR with broken encoding.",
      ],
      lists: [
        {
          intro: "Before a campaign:",
          items: [
            "click the link on iOS and Android;",
            "check invite limits;",
            "lock the URL in a table;",
            "don’t copy from lookalike fake channels.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "One canonical link in the brand kit saves an hour of support a month.",
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
