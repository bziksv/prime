import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-dialogi — same structure as RU JSON. */
export const yandeksDialogiEn: BlogPost = {
  slug: "yandeks-dialogi",
  title: "Chat with a company in Yandex: Dialogs and contact from search",
  date: "2018-08-15",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-dialogi/cover-en.webp",
  excerpt:
    "How business chat works in the Yandex ecosystem: contact from search and the snippet, the operator’s role, and API — without promising an eternal “Alice button forever.”",
  lead: [
    "“Chat with a company” in Yandex’s stack is a way to start a dialogue with a business not only from the site, but from search surfaces: the snippet, related voice-assistant scenarios where the product is still available.",
    "Below: why it helps a business, what’s needed to connect, and how not to confuse it with a regular on-site widget. Cabinet names (historically Dialogs), partner CMS options, and display points have changed since 2018 — check current Yandex Help and product status at the moment you implement.",
  ],
  faq: [
    {
      q: "Is this a replacement for the site form?",
      a: "No. Chat from search complements the site: a quick here-and-now question. Forms and CRM still handle structured leads.",
    },
    {
      q: "Do I need my own chat operator?",
      a: "Yes — someone must answer during business hours, or you set up a bot and routing. A dead chat hurts more than no button.",
    },
    {
      q: "Does it only work on Bitrix?",
      a: "Historically there were ready integrations with several platforms; others connected via API. Check the current partner list in Help.",
    },
    {
      q: "Does chat show for every site in the results?",
      a: "No. You need a connection, moderation / rule fit, and display conditions. Not every URL gets a button automatically.",
    },
    {
      q: "How is it different from Jivo or Carrot?",
      a: "A third-party widget lives on your domain. Yandex Dialogs is also a channel from the search ecosystem; Yandex sets the rules and entry points.",
    },
  ],
  sections: [
    {
      title: "Why a business wants chat from search",
      level: 2,
      paras: [
        "Some demand closes before a site visit: “in stock?”, “how much is delivery?”, “open today?” If you can answer from the results, you shorten the path to contact.",
        "The channel especially helps services and local businesses with a short sales cycle. For complex B2B with a long proposal, chat is an entry — not a replacement for a manager and a brief form.",
      ],
      lists: [
        {
          intro: "When the channel earns the attention:",
          items: [
            "someone answers during peak hours",
            "typical questions close in one to three replies",
            "leads go to CRM, not lost in DMs",
            "the site already has a privacy policy and offer",
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
        "2018 announcements mentioned the search snippet and assistant scenarios (Alice). Surfaces have narrowed and expanded since — don’t treat an old screenshot as a display guarantee.",
        "Practical cue: connect the channel → check whether a contact option shows on your commercial queries and on the organization card if it’s linked to the site.",
      ],
      notes: [
        {
          title: "Product status",
          text: "The Dialogs / chat-with-company line has evolved. Before development, confirm in Yandex Help which entry points and APIs are live right now.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How people connected it — and what to check now",
      level: 2,
      paras: [
        "Classic path: Yandex account → Dialogs or business-chat cabinet → unique chat ID → embed in CMS or hand off to an integrator. Some platforms had ready modules; others used the API.",
        "If your chat provider still doesn’t speak Yandex’s channel, ask about a ready hookup or webhooks. Don’t promise a client a “button in the results tomorrow” without checking eligibility.",
      ],
      lists: [
        {
          intro: "Checklist before you turn it on:",
          items: [
            "named operator and schedule",
            "scripts for typical answers",
            "lead handoff to CRM or email",
            "personal-data consent in the flow",
            "test from a real smartphone and PC",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Yandex Business Directory",
          href: "/en/blog/yandeks-spravochnik/",
        },
      ],
    },
    {
      title: "Operator, bot, and dialogue quality",
      level: 2,
      paras: [
        "A button without a response SLA hurts trust more than its absence. Set first-response time, human escalation, and a ban on copy-paste “we’ll call you back” with no next step.",
        "Bots cover FAQ; complex orders go to a person immediately. Dialogue logs feed site FAQ and ad keyword ideas.",
      ],
    },
    {
      title: "Search chat vs on-site widget",
      level: 2,
      paras: [
        "You control the on-site widget: design, flows, A/B. The Yandex channel adds an entry point but depends on platform rules and moderation.",
        "Best base: form plus messenger or widget on the site; search chat only if the product is available and the team can answer. Don’t spawn five chats with different queues and no shared CRM.",
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
        "Chat with a company in Yandex is a dialogue channel from the search ecosystem — not one more icon for fashion.",
        "Connect only with an answer process and a check of current product status; a thin 2018 announcement alone is not a setup.",
      ],
    },
  ],
  closing: [
    "Check current Yandex Help to see whether chat with a company is available for your site type, assign an operator and CRM — and only then embed the chat ID in your CMS or via API.",
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
