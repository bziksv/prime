import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-dialogi — same structure as RU JSON. */
export const yandeksDialogiEn: BlogPost = {
  slug: "yandeks-dialogi",
  title: "Chat with a business in Yandex: Dialogs and contact from search",
  date: "2018-08-15",
  category: "Internet marketing",
  cover: "/images/blog/yandeks-dialogi/cover-en.webp",
  excerpt:
    "How chat with a company works in the Yandex ecosystem: contact from search and the snippet, the operator’s role and API — without promising an eternal “Alice button forever.”",
  lead: [
    "“Chat with a company” in the Yandex contour is a way to start a dialogue with a business not only from the site, but from search surfaces: the snippet, related voice-assistant scenarios where the product is still available.",
    "Below — why businesses need it, what’s required to connect, and how not to confuse it with a regular on-site widget. Cabinet names (historically “Dialogs”), partner CMS options, and display points have changed since 2018 — check current Yandex Help and product status at implementation time.",
  ],
  faq: [
    {
      q: "Is this a replacement for the site form?",
      a: "No. Search chat complements the site: a quick “here and now” question. Forms and CRM are still needed for structured leads.",
    },
    {
      q: "Do you need your own chat operator?",
      a: "Yes — someone must answer during business hours or you set a bot/routing. A dead chat is worse than no button.",
    },
    {
      q: "Does it only work on Bitrix?",
      a: "Historically there were ready integrations with several platforms; others connected via API. Check the current partner list in Help.",
    },
    {
      q: "Does chat show for every site in the SERP?",
      a: "No. You need connection, moderation/rule fit, and display conditions. Not every URL gets a button automatically.",
    },
    {
      q: "How is it different from Jivo/Carrot?",
      a: "A third-party widget lives on your domain. Yandex Dialogs is also a channel from the search ecosystem; Yandex sets the rules and entry points.",
    },
  ],
  sections: [
    {
      title: "Why businesses want chat from search",
      level: 2,
      paras: [
        "Part of demand closes before the site visit: “in stock?”, “how much is delivery?”, “open today?” If you can answer from the SERP, you shorten the path to contact.",
        "The channel helps services and local businesses with a short sales cycle. For complex B2B with long proposals, chat is an entry — not a replacement for a manager and brief form.",
      ],
      lists: [
        {
          intro: "When the channel earns attention:",
          items: [
            "someone answers in peak hours;",
            "typical questions close in 1–3 replies;",
            "leads go to CRM, not lost in DMs;",
            "the site already has a privacy policy and offer.",
          ],
        },
      ],
      links: [
        {
          label: "Lead capture forms",
          href: "/en/blog/formy-zahvata/",
        },
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Where the button may appear",
      level: 2,
      paras: [
        "2018 announcements mentioned the search snippet and assistant scenarios (Alice). Surfaces have narrowed and expanded since — don’t copy an old screenshot as a display guarantee.",
        "Practical compass: connect the channel → check whether contact shows on your commercial queries and on the organization card if it’s linked to the site.",
      ],
      notes: [
        {
          title: "Product status",
          text: "The “Dialogs” / chat-with-company line evolved. Before development, confirm in Yandex Help which entry points and APIs are current right now.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How people connected it — and what to check now",
      level: 2,
      paras: [
        "Classic path: Yandex account → dialogs/business-chat cabinet → unique chat ID → insert into CMS or hand off to an integrator. Some platforms had ready modules; others used the API.",
        "If your chat provider still doesn’t speak Yandex’s contour, ask them about a ready link or webhooks. Don’t promise the client a “SERP button tomorrow” without checking eligibility.",
      ],
      lists: [
        {
          intro: "Checklist before turning it on:",
          items: [
            "named operator and schedule;",
            "scripts for typical answers;",
            "lead handoff to CRM/email;",
            "personal-data consent in the flow;",
            "test from a real smartphone and PC.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Yandex Business (Directory)",
          href: "/en/blog/yandeks-spravochnik/",
        },
      ],
    },
    {
      title: "Operator, bot, and dialogue quality",
      level: 2,
      paras: [
        "A button without an answer SLA hurts trust more than its absence. Set first-response time, human escalation, and a ban on copy-paste “we’ll call you back” with no next step.",
        "Bots cover FAQ; complex orders go to a person immediately. Dialogue logs feed site FAQ and ad semantics.",
      ],
    },
    {
      title: "Search chat vs on-site widget",
      level: 2,
      paras: [
        "You control the on-site widget: design, flows, A/B. The Yandex channel adds an entry point but depends on platform rules and moderation.",
        "Optimal: form + messenger/widget on the site as the base; search chat — if the product is available and the team can answer. Don’t spawn five chats with different queues without one CRM.",
      ],
      links: [
        {
          label: "CRM",
          href: "/en/blog/crm/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Chat with a company in Yandex is a dialogue channel from the search ecosystem — not “one more icon for fashion.”",
        "Connect only with an answer process and a check of current product status; a thin 2018 announcement alone is not a setup.",
      ],
    },
  ],
  closing: [
    "Check current Yandex Help whether chat with a company is available for your site type, assign an operator and CRM — and only then embed the chat ID in the CMS or via API.",
  ],
  related: [
    "formy-zahvata",
    "forma-obratnoy-svyazi",
    "yandeks-vebmaster",
    "yandeks-spravochnik",
    "crm",
    "trafik-bez-lidov",
  ],
};
