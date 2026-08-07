import type { BlogPost } from "../../../data/blog";

/** EN overlay for avtovoronka-vk — same structure as RU JSON. */
export const avtovoronkaVkEn: BlogPost = {
  slug: "avtovoronka-vk",
  title: "VKontakte autofunnel: community messages and a sales scenario",
  date: "2020-04-15",
  category: "Content marketing",
  cover: "/images/blog/avtovoronka-vk/cover-en.webp",
  excerpt:
    "How to build a VKontakte autofunnel: community, opt-in messaging, lead magnet, and a touch chain — without outdated service catalogs or cold spam.",
  lead: [
    "A VKontakte autofunnel is a sequence of community messages and touches: meet the product → warm-up → offer → upsell. The scenario is written in advance; a manager joins on complex branches.",
    "General funnel logic is in a separate article. Here — VK specifics: message opt-in, bot/broadcast, personalization. Old “70–80% open rate” figures aren’t universal — use your own stats.",
  ],
  faq: [
    {
      q: "How is it different from an email funnel?",
      a: "The channel is VK community messages (after consent). Notifications are often easier to notice, but platform rules and limits differ.",
    },
    {
      q: "Can I message all friends and wall subscribers?",
      a: "Cold mass spam leads to complaints. You need community message opt-in or a dialogue the person started.",
    },
    {
      q: "Is a bot required?",
      a: "Not always. For FAQ and a simple funnel a bot helps; for rare complex sales a human + templates can be enough.",
    },
    {
      q: "Which service should I pick?",
      a: "Official apps/builders from the VK catalog and current ToS. We don’t copy 2019–2020 pricing catalogs — brands and prices age out.",
    },
    {
      q: "Which businesses fit best?",
      a: "Info products, services, B2B, and long cycles. Broad e-com “whole catalog in one chain” is usually weaker.",
    },
    {
      q: "Do I need a tripwire?",
      a: "Useful for warm-up, not mandatory. The key is linking the lead magnet to the core offer.",
    },
    {
      q: "How do I measure?",
      a: "Message opt-ins, open/click if available, step→step conversion, lead quality — not only post reach.",
    },
  ],
  sections: [
    {
      title: "Why a funnel in VK",
      level: 2,
      paras: [
        "A wall post is easy to miss. A notified message is a channel for people who opted in: warm-up, offer, order status.",
        "Automation cuts load on typical replies. Fully “no humans” doesn’t fit every niche — expensive deals need dialogue.",
      ],
      lists: [],
      links: [
        {
          label: "Autofunnel: basics",
          href: "/blog/avtovoronka/",
        },
      ],
    },
    {
      title: "Chain elements",
      level: 2,
      paras: [
        "Lead magnet (value for message opt-in) → entry paid / soft-paid offer → core product → upsell. Between them — useful content and honest bonuses, not pressure.",
      ],
      lists: [
        {
          intro: "What to strengthen with VK attachments:",
          items: [
            "product photo/video;",
            "a document or guide;",
            "a link to a landing/product;",
            "quick-reply buttons in the bot.",
          ],
        },
      ],
    },
    {
      title: "How to build it",
      level: 2,
      paras: [
        "Community with a clear offer and content → product matrix and step texts → message opt-in (widget/bot) → broadcast or bot scenario → traffic (ads, posts, lead forms) → measure and revise.",
        "A retarget reminder “opened, didn’t click” fits at moderate frequency. Spamming every 20 minutes leads to opt-outs.",
      ],
      lists: [],
      links: [
        {
          label: "VK messaging legally",
          href: "/en/blog/rassylka-vk/",
        },
        {
          label: "VK chatbot",
          href: "/blog/chat-bot-vk/",
        },
      ],
    },
    {
      title: "Tools without a catalog",
      level: 2,
      paras: [
        "Pick a solution for volume and integrations (CRM, UTM, segments), checking current VK limits and rules.",
        "We don’t treat unofficial “senders” for cold chats as a how-to — ban zone. More in the messaging article.",
      ],
      lists: [],
      notes: [
        {
          title: "Personalization",
          text: "Name and city from the profile help if it doesn’t feel like spam-script. Text value beats emoji “for creativity.”",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Consent and offer first, automation second.",
        "Step metrics beat someone else’s open-rate %.",
        "A bot with no path to an operator annoys on hard questions.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Check: does the community have a clear message entry and a 3–5 step chain with measurement — if not, fixing that beats switching “another broadcast tool.”",
  ],
  related: [
    "avtovoronka",
    "rassylka-vk",
    "chat-bot-vk",
    "privetstvie-vk",
    "soobshhestva-vk",
    "formy-zahvata",
  ],
};
