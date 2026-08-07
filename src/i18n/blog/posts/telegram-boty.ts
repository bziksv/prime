import type { BlogPost } from "../../../data/blog";

/** EN overlay for telegram-boty — same structure as RU JSON. */
export const telegramBotyEn: BlogPost = {
  slug: "telegram-boty",
  title: "Telegram bots: why they matter and how they work",
  date: "2021-03-05",
  category: "SMM",
  cover: "/images/blog/telegram-boty/cover-en.webp",
  excerpt:
    "What Telegram bots can do for business and channels: replies, leads, compliant broadcasts, finding bots, and basic command logic — without a catalog of shady growth hacks.",
  lead: [
    "A Telegram bot is an account driven by a program via the Bot API: it answers commands, takes leads, sends notifications, and helps a channel or site.",
    "This guide covers how a bot works, why businesses use one, how to design a flow, security, and launch. Channel setup is a sibling article; we don’t cover shady growth bots.",
  ],
  faq: [
    {
      q: "How is a bot different from a channel?",
      a: "A channel is a post feed. A bot is dialogue and automation: buttons, forms, integrations, notifications.",
    },
    {
      q: "Do I need your own developer?",
      a: "For simple FAQ/leads, builders often suffice. Complex CRM, payments, and custom logic — yes, a developer.",
    },
    {
      q: "How do I find a bot?",
      a: "Telegram search, directories, a t.me/… link. Check reviews and the permissions the bot asks for.",
    },
    {
      q: "Can I spam from a bot?",
      a: "No. Follow Telegram rules and user consent. Mass spam risks a ban.",
    },
    {
      q: "Can a bot replace a website?",
      a: "It can complement a site for support and leads. Legal pages, SEO, and a large catalog usually stay on the website.",
    },
    {
      q: "How do I measure value?",
      a: "Flow starts and completions, leads, handoff to a manager, inquiry quality. Channel subscribers ≠ bot results.",
    },
    {
      q: "Where should the token live?",
      a: "In server/builder secrets — not a public repo or client code. Limit who can reissue the token.",
    },
    {
      q: "Do I need a “live operator” button?",
      a: "Almost always yes. Otherwise a hard question hits a menu dead end and the user leaves.",
    },
  ],
  sections: [
    {
      title: "How a bot works",
      level: 2,
      paras: [
        "Via @BotFather you create a bot and get a token. A server or no-code platform receives updates (messages, button callbacks) and replies with text, menus, files, or cards.",
        "The token is full control of the bot: don’t publish it in open code or hand it to a “contractor for an hour” without a contract. Describe the flow before build: what the user chooses and when a human joins.",
      ],
      lists: [
        {
          intro: "Basic pieces:",
          items: [
            "`/start` — greeting and menu;",
            "buttons with clear next steps;",
            "contact / lead capture;",
            "notify a manager or CRM;",
            "error messages and “back”.",
          ],
        },
      ],
    },
    {
      title: "Why a business needs a bot",
      level: 2,
      paras: [
        "A bot covers repeatable work: 24/7 FAQ, booking, order status, price list, lead qualification, chat moderation, alerts from the site or analytics.",
        "Automate routine — don’t hide the manager behind an endless button tree. For non-standard questions, leave a visible path to a human and state the reply window.",
      ],
      lists: [
        {
          intro: "Strong flows:",
          items: [
            "qualify a lead in 3–5 questions;",
            "appointment reminders;",
            "FAQ instead of a queue of identical messages;",
            "alerts on site form submissions;",
            "documents / instructions on a button.",
          ],
        },
      ],
      links: [
        {
          label: "Telegram channel",
          href: "/en/blog/telegram-kanal/",
        },
        {
          label: "Telegram overview",
          href: "/en/blog/telegram/",
        },
      ],
    },
    {
      title: "Flow before development",
      level: 2,
      paras: [
        "Don’t start with “pretty buttons” — start with one business job: qualify a lead, take a booking, answer a frequent question, or return a status. The shorter the first flow, the faster you prove value.",
        "Draw the path from `/start` to the outcome: branches, required fields, errors, handoff. That document is the brief for client and for the developer or builder.",
      ],
      lists: [
        {
          intro: "Lock in the flow:",
          items: [
            "user goal;",
            "minimum questions;",
            "moment of handoff to a human;",
            "consent for data processing;",
            "copy for failure / timeout.",
          ],
        },
      ],
      tables: [
        {
          caption: "Builder vs custom development",
          headers: ["Task", "Usually enough"],
          rows: [
            ["FAQ + lead to chat", "Builder"],
            ["CRM / ERP link", "Custom build or strong integration"],
            ["Payments and complex order status", "Custom build"],
            ["One-off promo quiz", "Builder"],
          ],
        },
      ],
    },
    {
      title: "Tie-in with channel and site",
      level: 2,
      paras: [
        "The channel warms and carries content; the bot closes the action: lead, booking, access to a material. On the site, “Message on Telegram” should open the bot with a clear `/start` — not an empty chat.",
        "Don’t mirror the whole site catalog in the bot unnecessarily. Bots shine on a short path; deep choice and SEO stay on landings.",
      ],
      lists: [
        {
          intro: "Good pairings:",
          items: [
            "channel post → bot with an offer;",
            "site form → confirmation in the bot;",
            "bot → manager in CRM with a source tag;",
            "bot doesn’t replace policy and offer on the site.",
          ],
        },
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Security and choosing services",
      level: 2,
      paras: [
        "Don’t share the token unnecessarily, and read integration permissions. Avoid “subscriber / view boost” services: they break the rules and trash audience quality.",
        "If the bot collects phone, name, or a lead — explain the purpose, limit staff access, delete what you don’t need. Don’t promise in chat what the flow can’t do.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "asking for excess permissions;",
            "no service policy / contacts;",
            "promises to bypass Telegram rules;",
            "token in a public Git repo;",
            "keeping personal data “forever” with no reason.",
          ],
        },
      ],
    },
    {
      title: "Launch, metrics, and improvement",
      level: 2,
      paras: [
        "Before launch, walk the flow on a phone: buttons, copy, manager alerts, cancel and “back”. Broadcasts — only with consent and per platform rules.",
        "After launch, see where users drop, which replies aren’t recognized, and how many leads are really handled. Improve one narrow step at a time, or you won’t know what moved the metrics.",
      ],
      lists: [
        {
          intro: "Useful metrics:",
          items: [
            "dialog start;",
            "flow completion;",
            "handoff to a manager;",
            "quality leads / bookings;",
            "time to a human reply.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "A bot is a service and lead channel — not a substitute for marketing strategy. Without an offer and traffic (site, channel, ads), a button menu doesn’t sell on its own.",
        },
      ],
    },
    {
      title: "Common mistakes",
      level: 2,
      paras: [
        "A 20-item overloaded menu, no exit to a human, collecting extra fields “just in case”, a silent bot after a lead, spam to a list without consent.",
        "Another mistake — launching “everything at once”: payments, quiz, catalog, support. First one flow with a measurable result, then expand.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "a dead end with no operator;",
            "promises in copy that aren’t in the logic;",
            "shady audience inflation;",
            "bots with unclear data policies.",
          ],
        },
      ],
    },
  ],
  related: [
    "telegram-kanal",
    "telegram",
    "forma-obratnoy-svyazi",
    "menedzher-smm",
    "kontent-plan",
    "reklamnyy-kabinet",
  ],
};
