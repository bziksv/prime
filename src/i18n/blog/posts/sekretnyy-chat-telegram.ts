import type { BlogPost } from "../../../data/blog";

/** EN overlay for sekretnyy-chat-telegram — same structure as RU JSON. */
export const sekretnyyChatTelegramEn: BlogPost = {
  slug: "sekretnyy-chat-telegram",
  title: "Telegram secret chat: how it differs and how to turn it on",
  date: "2020-08-05",
  category: "SMM",
  cover: "/images/blog/sekretnyy-chat-telegram/cover-en.webp",
  excerpt:
    "What a Telegram secret chat is: end-to-end, delete timer, forwarding and screenshot limits — without the myth of “absolute invulnerability.”",
  lead: [
    "A Telegram secret chat is a separate one-to-one messaging mode focused on end-to-end encryption, auto-delete, and limited forwarding. It’s not the same as a regular cloud dialogue.",
    "We cover how the mode differs, how to create it, why the timer matters, and which expectations are realistic. Menus change; check Telegram Help. There’s no absolute protection from everything: device access, social engineering, and a second camera still exist.",
  ],
  faq: [
    {
      q: "Is a secret chat the same as all Telegram chats?",
      a: "No. Regular chats go through the cloud and sync across devices. Secret is a separate session, usually tied to specific devices.",
    },
    {
      q: "Can I open a secret chat on a PC?",
      a: "Historically the focus was mobile clients. Check current platform support in Telegram Help — not 2020 screenshots.",
    },
    {
      q: "Are screenshots fully banned?",
      a: "The client may block/notify about screenshots on some OSes. You can still photograph the screen with another device — it’s not an “invisible shield.”",
    },
    {
      q: "Do I need a secret chat for business?",
      a: "For sensitive files and personal data — sometimes yes. For customer support a regular chat/bot with a retention policy is usually better.",
    },
    {
      q: "How is it different from self-destruct in a regular chat?",
      a: "Regular chats can also have timers and deletion. Secret mode is a separate dialogue type with a different set of limits (forwarding, device binding, etc.).",
    },
  ],
  sections: [
    {
      title: "How a secret chat differs from a regular one",
      level: 2,
      paras: [
        "A regular dialogue syncs across your clients through Telegram’s infrastructure. A secret chat is created as a separate protected session with the other person.",
        "Typical mode differences: E2E focus, limits on forwarding messages to other chats, an auto-delete timer, different UX (often marked with a lock).",
        "Don’t confuse “most secret messenger” marketing with the job: pick the mode for the risk. For a public channel or support you don’t need a secret chat.",
      ],
      links: [
        {
          label: "Telegram: overview",
          href: "/en/blog/telegram/",
        },
      ],
    },
    {
      title: "Capabilities and limits",
      level: 2,
      paras: [
        "Delete timer: messages vanish after a chosen interval (from seconds to days — the set depends on the version).",
        "Delete for both: handy for sensitive text, but it doesn’t replace a policy of “don’t send what shouldn’t be shown.”",
        "Forwarding from a secret chat is usually limited — fewer accidental leaks into group chats.",
        "Screenshot attempt notices are a signal, not a guarantee. A physical camera and malware on the device sit outside the “UI lock” threat model.",
      ],
      notes: [
        {
          title: "Realism",
          text: "We don’t copy EFF ratings, bounties, and WhatsApp/Viber comparisons from old roundups as eternal truth. Check current reports and client Help.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to create a secret chat",
      level: 2,
      paras: [
        "In the app open new chat / pencil menu → “Secret chat” (wording may differ) → pick a contact.",
        "The other person must accept/open the invite. Until the session is set, there’s no protected correspondence.",
        "Create a separate secret chat per task; you can have several with different people.",
      ],
      lists: [
        {
          intro: "Before you start:",
          items: [
            "confirm you’re writing the right contact;",
            "agree on the timer and what can be sent;",
            "an updated official client;",
            "understand that changing phones may break an old session.",
          ],
        },
      ],
    },
    {
      title: "Auto-delete timer",
      level: 2,
      paras: [
        "In an open secret chat open the menu (⋯) → timed delete / self-destruct → pick an interval.",
        "The timer is usually visible to both. Change it deliberately: too short hurts working with files; too long weakens the point of the mode.",
      ],
    },
    {
      title: "When it fits",
      level: 2,
      paras: [
        "Sharing sensitive drafts, access details (better still via a password manager), personal chat with elevated risk.",
        "Not a substitute for corporate DLP and legal NDAs. Don’t use it as cover for illegal activity — this article is about a tool, not bypassing the law.",
        "For marketing and public communities, channels, regular chats, and bots are enough.",
      ],
      links: [
        {
          label: "Links in Telegram",
          href: "/en/blog/ssylki-telegram/",
        },
        {
          label: "Telegram bots",
          href: "/en/blog/telegram-boty/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A secret chat is a mode for sensitive one-to-one messaging, not the “default for all of Telegram.”",
        "Timers and forwarding limits help, but security starts with the device and discipline.",
      ],
    },
  ],
  closing: [
    "If you need sensitive chat — create a secret chat with a timer and agree on rules first; for ordinary support keep a cloud dialogue or a bot.",
  ],
  related: [
    "telegram",
    "ssylki-telegram",
    "telegram-kanal",
    "telegram-boty",
    "instagram-direct",
    "parol-instagram",
  ],
};
