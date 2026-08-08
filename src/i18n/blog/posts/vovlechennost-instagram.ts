import type { BlogPost } from "../../../data/blog";

/** EN overlay for vovlechennost-instagram — same structure as RU JSON. */
export const vovlechennostInstagramEn: BlogPost = {
  slug: "vovlechennost-instagram",
  title: "Instagram engagement: ER and profile analysis",
  date: "2020-11-17",
  category: "SMM",
  cover: "/images/blog/vovlechennost-instagram/cover-en.webp",
  excerpt:
    "What Engagement Rate means on Instagram, which formulas exist, and how to read ER with profile stats — without the “mandatory 3%” myth and without fake engagement.",
  lead: [
    "Engagement (ER) shows what share of the audience reacts to content: likes, comments, saves, replies. It’s not follower count and not a sales guarantee, but a strong signal of interest and follower quality.",
    "Below: terms, where to get the numbers, and how to grow the white way. Benchmarks like “3% at 10k” from old roundups belong to another era, not your KPI. Insights menus change; you need a professional account. The Meta disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Are ER and reach the same?",
      a: "No. Reach is how many unique people saw it. ER is reaction share vs. followers, reach, or post — depending on the formula.",
    },
    {
      q: "What ER is “good”?",
      a: "Compare yourself to yourself and your niche, not a universal percent from a 2020 article. Smaller accounts often run higher percentages.",
    },
    {
      q: "Will mass-following help?",
      a: "It often inflates a dead follower base and drops ER. Relevant growth and content work better.",
    },
    {
      q: "Where do I see the data?",
      a: "In professional-account stats: reach, interactions, saves, replies in Direct and Stories.",
    },
    {
      q: "Will buying likes raise ER?",
      a: "It briefly distorts the number and risks quality limits. Don’t buy engagement.",
    },
  ],
  sections: [
    {
      title: "What counts as engagement",
      level: 2,
      paras: [
        "ER is an interest index for content. In the feed, thousands may scroll past; a few react. Algorithms more often deliver what people respond to: comments, saves, shares, Story replies.",
        "Low ER with a big follower base often means a noisy audience, weak content, or few reasons to act — not “Instagram broke.”",
      ],
      links: [
        {
          label: "Instagram stats",
          href: "/en/blog/statistika-instagram/",
        },
        {
          label: "Instagram reach",
          href: "/en/blog/ohvat-instagram/",
        },
      ],
    },
    {
      title: "Formulas: DER, ER by reach, by post",
      level: 2,
      paras: [
        "Daily ER looks at reactions per day — handy for rhythm, but sensitive to post frequency and repeat commenters.",
        "ER by reach is closer to delivery quality: how many of those who saw it reacted. Reach swings with recommendations — compare periods honestly.",
        "ER by post — reactions to a specific publish divided by followers or that post’s reach. Helps find strong formats. ER by views and “per 100 followers” are supporting cuts, not the final truth.",
      ],
      lists: [
        {
          intro: "Practical for a report:",
          items: [
            "lock one primary formula",
            "count post ER and the period average",
            "watch saves and replies separately — often worth more than a like",
            "don’t mix ad and organic reach without a label",
            "don’t invent metrics “by eye” without a method",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Chasing someone else’s “normal percent.” Compare your strongest and weakest posts — more useful than a benchmark table.",
        },
      ],
    },
    {
      title: "Where to get numbers in the profile",
      level: 2,
      paras: [
        "Switch to a professional account and open post stats: reach, impressions, interactions. For Stories — replies and taps.",
        "Without business or creator mode, some metrics won’t show. Icon UI has changed — look for “Insights” or stats on the profile or post.",
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "How to raise ER without gray tactics",
      level: 2,
      paras: [
        "Rebuild the audience: who actually reacts, which topics get saves. Tweak the content plan: value plus emotion plus a question, not only a storefront.",
        "A unified visual language helps, but “pretty photos” without meaning no longer hold. Mix sales with behind-the-scenes and case studies. Hashtags — relevant, not a junk pile.",
      ],
      lists: [
        {
          intro: "Levers:",
          items: [
            "hook in the first caption line",
            "one clear CTA (ask / save / message)",
            "reply to comments in the first hours",
            "Stories and polls as dialogue",
            "no fake engagement or mass-follow for the number",
          ],
        },
      ],
      links: [
        {
          label: "Photo caption",
          href: "/en/blog/podpis-foto-instagram/",
        },
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Audience interaction",
      level: 2,
      paras: [
        "ER grows where there’s conversation: replies, mentions, “you asked — we answer” series. Ignoring comments kills delivery of later posts.",
        "Look past likes: messages, link clicks, saves — closer to business results.",
      ],
      links: [
        {
          label: "Instagram Direct",
          href: "/en/blog/instagram-direct/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Engagement is about reaction, not follower count. Pick a formula, count regularly, grow with honest content and dialogue.",
        "Universal percents from old articles aren’t law. Your trend and post comparison matter more.",
      ],
    },
  ],
  closing: [
    "Open stats for recent posts, count ER with one formula, and strengthen formats with saves and replies — so engagement becomes a manageable metric, not a scare story.",
  ],
  related: [
    "statistika-instagram",
    "ohvat-instagram",
    "biznes-akkaunt-instagram",
    "podpis-foto-instagram",
    "kontent-plan-instagram",
    "instagram-direct",
  ],
};
