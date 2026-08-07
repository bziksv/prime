import type { BlogPost } from "../../../data/blog";

/** EN overlay for chat-telegram — same structure as RU JSON. */
export const chatTelegramEn: BlogPost = {
  slug: "chat-telegram",
  title: "How to create a chat (group) in Telegram",
  date: "2020-11-16",
  category: "SMM",
  cover: "/images/blog/chat-telegram/cover-en.webp",
  excerpt:
    "How to create a Telegram group: how it differs from a channel and a bot, public vs private links, pinning chats, polls, and business setups — without outdated member-limit myths.",
  lead: [
    "A Telegram chat (group) is where several people write: a team, clients, class parents, a community. It isn’t a channel (one-way feed) or a bot (a program), though you can add a bot to a group for routine work.",
    "Below: why groups matter, which kinds exist, how to create one, pin important chats, and run a poll. Member limits and menu labels change — check Telegram Help. A secret chat is a separate one-to-one mode, not a “secret supergroup.”",
  ],
  faq: [
    {
      q: "Are a chat, a group, and a channel the same thing?",
      a: "A channel is posts from admins to subscribers. A group (chat) is member discussion. Brands often run a channel plus a discussion group.",
    },
    {
      q: "How does a group differ from a bot?",
      a: "People talk in a group. A bot is automation (FAQ, leads, moderation). You can add a bot to a group, but it doesn’t replace a live conversation.",
    },
    {
      q: "Can a secret chat be a group?",
      a: "No. Secret mode is one-to-one. For teams, use a normal group with permissions and a retention policy.",
    },
    {
      q: "How many people can a group hold?",
      a: "Limits have grown for years: follow current Telegram help, not “200 / 10,000” from old guides.",
    },
    {
      q: "Do I need @PollBot for a poll?",
      a: "For simple polls, the built-in Poll in the attachment menu is usually enough. Third-party bots are for more complex flows.",
    },
    {
      q: "Is a public group required for business?",
      a: "No. Client chats are often invite-only; a public username helps community discovery.",
    },
    {
      q: "Where can I read about channels and secret chats?",
      a: "Starting a channel and secret mode are covered in separate pieces.",
    },
  ],
  sections: [
    {
      title: "Why Telegram groups matter",
      level: 2,
      paras: [
        "Groups cover jobs where two-way talk matters: hobbies and communities, work teams, school or parent chats, file sharing, and fast approvals.",
        "In a large chat it’s hard to speak to everyone at once — threads, topics, rules, and moderators appear. For a brand news stream, people usually take a channel and move discussion to a separate group.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "internal team and contractors;",
            "client support or community;",
            "a discussion chat tied to a channel;",
            "project rooms with files and links.",
          ],
        },
      ],
    },
    {
      title: "What kinds of chats there are",
      level: 2,
      paras: [
        "A private dialog is one-to-one messaging. A group has many members, admin rights, and cloud history (within normal chats).",
        "A secret chat is a separate protected mode for two people only; don’t confuse it with a “closed group.” A public group is findable by username or search; a private one is invite-only.",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "one-to-one normal — everyday messaging;",
            "group / supergroup — team and client talk;",
            "secret — sensitive topics one-to-one;",
            "channel — not a chat, a feed.",
          ],
        },
      ],
      links: [
        {
          label: "Telegram secret chat",
          href: "/en/blog/sekretnyy-chat-telegram/",
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Claims like “a secret group chat can’t be hacked” are marketing. Realistic expectations and limits are in the secret-chat article.",
        },
      ],
    },
    {
      title: "How to create a group",
      level: 2,
      paras: [
        "In the mobile client: create a new group (New Group), pick members from contacts or add them later, set a name and optionally a photo.",
        "In group settings choose: private invite link or public username; who can write, add members, and edit info. For growth without spam, start with a private link and moderation.",
        "Member limits and turning a “normal group” into a large supergroup have evolved — don’t copy 2020 numbers. Use current client hints and help.",
      ],
      lists: [
        {
          intro: "After creating:",
          items: [
            "describe rules in a pinned message;",
            "appoint admins with the minimum rights they need;",
            "store the invite link somewhere safe;",
            "turn off “everyone can write” if it’s a moderated discussion for a channel.",
          ],
        },
      ],
    },
    {
      title: "Pinning chats",
      level: 2,
      paras: [
        "With many dialogs, important groups get lost in the feed. Pin a chat: long-press or right-click → Pin. Pinned chats stay at the top of the list.",
        "Pin count depends on the client and plan (including Premium) — follow what your Telegram shows now, not “exactly five” from old instructions.",
      ],
    },
    {
      title: "Polls in a chat",
      level: 2,
      paras: [
        "For a quick vote, open the chat attachment menu and create a poll: question, options, anonymity, and multi-select if needed. That’s enough for most team and client decisions.",
        "Third-party poll bots mattered earlier or for complex quizzes. Don’t overcomplicate: another bot is another access point to the chat.",
      ],
      lists: [
        {
          intro: "Poll practice:",
          items: [
            "one question — one topic;",
            "short answer options;",
            "a deadline in the text (“vote by Friday”);",
            "pin the result in a follow-up message.",
          ],
        },
      ],
    },
    {
      title: "Chats for business",
      level: 2,
      paras: [
        "Groups give business fast feedback, internal coordination, and community. But a public chat without moderation turns into spam and conflict easily.",
        "Common setups: a closed client chat by invite; a news channel plus discussion group; a bot for FAQ, with hard cases handed to a live manager. Product catalogs and payments work better on a site or in a bot with clear rules than in chat chaos alone.",
      ],
      lists: [
        {
          intro: "Decide in advance:",
          items: [
            "who is admin and who answers clients;",
            "what can’t be posted (insults, personal data);",
            "how to escalate into a ticket or CRM;",
            "whether you need a bot or a pinned FAQ is enough.",
          ],
        },
      ],
      links: [
        {
          label: "Telegram bots",
          href: "/en/blog/telegram-boty/",
        },
        {
          label: "Telegram channel",
          href: "/en/blog/telegram-kanal/",
        },
      ],
    },
    {
      title: "Strengths and realistic expectations",
      level: 2,
      paras: [
        "Strengths: speed, cross-platform use, files, voice and video calls, solid desktop and mobile clients. Confidentiality depends on chat type and member discipline — groups don’t promise absolute protection.",
        "Bottom line: create a group for the job, set rights and the link, pin the rules. For one-way news — a channel; for sensitive two-person talk — a secret chat.",
      ],
      tables: [
        {
          caption: "Format → job",
          headers: ["Format", "When to use"],
          rows: [
            ["Group", "Discussion, team, community"],
            ["Channel", "News and offers without noise"],
            ["Bot", "FAQ, leads, automation"],
            ["Secret chat", "Sensitive one-to-one dialog"],
          ],
        },
      ],
    },
  ],
  related: [
    "telegram",
    "telegram-kanal",
    "sekretnyy-chat-telegram",
    "telegram-boty",
  ],
} as BlogPost;
