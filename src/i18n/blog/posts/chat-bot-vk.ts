import type { BlogPost } from "../../../data/blog";

/** EN overlay for chat-bot-vk — same structure as RU JSON. */
export const chatBotVkEn: BlogPost = {
  slug: "chat-bot-vk",
  title: "VK chat bot: why you need one and how to launch it",
  date: "2018-12-19",
  category: "SMM",
  cover: "/images/blog/chat-bot-vk/cover-en.webp",
  excerpt:
    "How a chat bot helps in VK community messages: FAQ, leads, catalog — when a builder is enough, when you need a developer, and why a bot with no exit to a human operator drives people away.",
  lead: [
    "A VK chat bot answers community messages by script: greeting, FAQ, lead capture, service matching. It isn’t a live manager — it’s automation for repetitive dialogues.",
    "This piece covers who benefits, simple and complex scenarios, and how to launch without clinging to outdated 2018 builder screenshots. We don’t recommend spam blasts from a bot.",
  ],
  faq: [
    {
      q: "How does a VK bot differ from a Telegram bot?",
      a: "The logic is similar (commands, buttons, leads); the platform and API differ. On VK the bot lives in community messages; on Telegram it’s a separate @bot account.",
    },
    {
      q: "Does a small business need a bot?",
      a: "If questions are few and varied, a human often suffices. A bot pays off with a stream of repetitive asks: delivery, booking, order status.",
    },
    {
      q: "Should I use a builder or hire a developer?",
      a: "FAQ and a simple funnel — a builder. CRM, payments, or complex logic — custom development or a solid integration.",
    },
    {
      q: "Can I blast ads to all followers through the bot?",
      a: "Only under VK rules and with consent. Mass spam leads to reports and limits.",
    },
    {
      q: "Is a “live operator” button required?",
      a: "Almost always. Otherwise a hard question hits a menu wall and the customer leaves.",
    },
  ],
  sections: [
    {
      title: "What a VK bot can do",
      level: 2,
      paras: [
        "Simple bots run on keywords and buttons: match a phrase — return a prepared reply. Complex ones connect AI, external databases, and CRM — but cost and support go up.",
        "Typical jobs: FAQ answers, order and lead intake, service navigation, status notifications.",
      ],
      lists: [
        {
          intro: "Especially useful for:",
          items: [
            "delivery and service booking;",
            "stores with recurring questions;",
            "support with a large FAQ;",
            "teams that outgrow one-off chat replies.",
          ],
        },
      ],
    },
    {
      title: "Why businesses automate",
      level: 2,
      paras: [
        "It takes repetitive load off operators and speeds the first reply at night and during peaks. A manager steps in when the script can’t handle the case.",
        "We don’t treat savings figures from 2018–2019 case studies as a guarantee. Watch your FAQ share and response time before and after the bot.",
      ],
      links: [
        {
          label: "VK messaging and mailings",
          href: "/en/blog/rassylka-vk/",
        },
        {
          label: "Telegram bots",
          href: "/en/blog/telegram-boty/",
        },
      ],
    },
    {
      title: "Scenarios to start with",
      level: 2,
      paras: [
        "Greeting + menu: “Price / Delivery / Lead / Operator.”",
        "FAQ: address, timing, payment, returns — short answers and a link to a post or site.",
        "Lead: name, contact, need → into a manager chat or CRM.",
        "Catalog / match: two or three clarifying questions and a service card.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          paras: [
            "Don’t promise in the bot what isn’t in stock or on the site. A mismatch kills trust faster than a slow human reply.",
          ],
        },
      ],
    },
    {
      title: "How to approach building it",
      level: 2,
      paras: [
        "List about 20 frequent messages from chat history — that’s the script core. Draw a tree: start → branches → exit to an operator.",
        "Connect the bot to the community via the current VK account and your chosen builder or API. Service UIs have changed: follow platform help, not 2018 screenshots.",
        "Write keyword variants (“price,” “how much,” “pricing”). Add a reaction to unknowns: “Didn’t catch that — talk to an operator” plus a button.",
      ],
      lists: [
        {
          intro: "Launch checklist:",
          items: [
            "goals and KPIs (auto-reply share, leads);",
            "menu and FAQ aligned with the offer;",
            "handoff to a human;",
            "test on 10–20 real phrasings;",
            "review misunderstood phrases weekly.",
          ],
        },
      ],
      links: [
        {
          label: "VK community greeting",
          href: "/en/blog/privetstvie-vk/",
        },
      ],
    },
    {
      title: "Limits and risks",
      level: 2,
      paras: [
        "A bot handles complex and emotional cases poorly. A rigid menu with no exit annoys people.",
        "Don’t store unnecessary personal data. Don’t use the bot as a channel for gray “blast everyone” mailings.",
        "Builders and pricing change — budget for maintenance, not “set and forget for years.”",
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "A VK chat bot automates typical community dialogues — it doesn’t replace service.",
        "Start with FAQ and leads, and always give an exit to a human.",
        "Measure value by leads and support load — not by how trendy the bot looks.",
      ],
    },
  ],
  closing: [
    "Collect the top 10 questions from community messages and cover them with a bot menu plus an “operator” button — faster than debating “advanced AI.”",
  ],
  related: [
    "telegram-boty",
    "rassylka-vk",
    "privetstvie-vk",
    "soobshhestva-vk",
    "raskrutka-gruppy-vk",
    "instagram-direct",
  ],
};
