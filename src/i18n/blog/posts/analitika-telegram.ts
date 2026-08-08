import type { BlogPost } from "../../../data/blog";

/** EN overlay for analitika-telegram — same structure as RU JSON. */
export const analitikaTelegramEn: BlogPost = {
  slug: "analitika-telegram",
  title: "Telegram channel analytics: views, reach, and what to watch",
  date: "2020-02-10",
  category: "SMM",
  cover: "/images/blog/analitika-telegram/cover-en.webp",
  excerpt:
    "How to read Telegram channel stats: how views differ from reach, which metrics to watch in Insights and third-party tools — without the outdated “Telegram has no analytics.”",
  lead: [
    "On a Telegram post the eye counter shows views, not magical ER. Mixing “reach = views = engagement” breaks how you judge channels and ad buys.",
    "Below: how the basic numbers work, what to add from official channel stats and external summaries, and why buying views is useless for business. Launching a channel is covered separately.",
  ],
  faq: [
    {
      q: "Are post views unique people?",
      a: "Not always one-to-one: reopening can increase the counter. For ads, watch dynamics and share of subscribers — not a single eye figure.",
    },
    {
      q: "Is there official Telegram analytics?",
      a: "Channels with enough subscribers get Insights (reach, growth, sources — the set depends on version). Check Telegram Help.",
    },
    {
      q: "Can you compute classic ER like on Instagram?",
      a: "Partly: reactions, comments (if enabled), forwards/shares. Fix your own formula and compare the channel to itself.",
    },
    {
      q: "Do you need TGStat and similar tools?",
      a: "Handy for comparing channels and buys. Don’t give them admin access without need; for your own channel Insights + a spreadsheet often suffice.",
    },
    {
      q: "Should you buy Telegram views?",
      a: "No: they distort metrics, wreck ad pricing, and trust. Better a strong post and honest distribution.",
    },
  ],
  sections: [
    {
      title: "Why Telegram analytics feels different",
      level: 2,
      paras: [
        "A channel is an author feed: no familiar like grid like IG 2015. You do get post views, reactions, optional comments, and forwards.",
        "Old guides said “there’s no stats” — that’s no longer true for many channels. Base: post counter + Insights + external catalogs by task.",
        "Chats and channels measure differently: in a chat, messages and active members matter; in a channel — watch-through and base growth.",
      ],
      links: [
        {
          label: "Telegram channel from scratch",
          href: "/en/blog/telegram-kanal/",
        },
      ],
    },
    {
      title: "Views and reach: don’t mix them",
      level: 2,
      paras: [
        "The post counter grows from opens. One person can add several views on revisits — bake in a margin of error.",
        "Reach (when available in Insights) is closer to “how many people saw” over a period. For ads, compare post views to subscriber count: an abnormally high % on a dead base is a fake-views red flag.",
        "Average views over a week beat a one-off record after a paid placement.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Don’t blindly divide views by subscribers and call it ER: without reactions/forwards that’s a view share, not engagement.",
        },
      ],
    },
    {
      title: "What to watch regularly",
      level: 2,
      paras: [
        "Subscriber growth/churn and where they came from (if Insights shows sources).",
        "Views by post type: long breakdown vs short announcement vs creative.",
        "Reactions and forwards — a “saved / sent to a friend” signal.",
        "Link clicks — via UTM to the site or bot, otherwise the channel likes itself with no leads.",
      ],
      lists: [
        {
          intro: "Mini dashboard for the week:",
          items: [
            "subscribers start/end",
            "median post views",
            "top-3 and bottom-3 materials",
            "site/bot clicks with UTM",
          ],
        },
      ],
    },
    {
      title: "External metrics and ads",
      level: 2,
      paras: [
        "Catalogs like TGStat compute ERR, citation, mentions — handy when buying ads from channels. Check data freshness and sample.",
        "Before a placement, look at view history: a steady sawtooth after each post is healthier than a permanent ceiling on every post at once.",
        "Complex DIY KPIs from old articles can be simplified: view share of base + reactions + clicks.",
      ],
    },
    {
      title: "Typical number-reading mistakes",
      level: 2,
      paras: [
        "Treating hundreds of millions of messenger users as your audience — no; look at the channel niche.",
        "Judging a channel only by subscriber count without views and audience quality.",
        "Comparing a prime-time ad post with Friday-evening organic without adjusting for time.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The view counter is post opens; engagement is counted separately.",
        "Insights + UTM cover 80% of jobs without exotic formulas.",
        "Fake views break both analytics and ad pricing.",
      ],
    },
  ],
  closing: [
    "Once a week write down median views and two or three takeaways by column — enough to fix content faster than hunting a perfect index from someone else’s spreadsheet.",
  ],
  related: [
    "telegram-kanal",
    "telegram",
    "telegram-boty",
    "vovlechennost-socseti",
    "analitika-kontent-marketinga",
    "oshibki-smm",
  ],
};
