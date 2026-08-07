import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklama-instagram — same structure as RU JSON. */
export const reklamaInstagramEn: BlogPost = {
  slug: "reklama-instagram",
  title: "Instagram advertising: types, budget, and how to measure results",
  date: "2021-11-19",
  category: "SMM",
  cover: "/images/blog/reklama-instagram/cover-en.webp",
  excerpt:
    "Instagram ad types: paid targeting, creators, seeding. What drives price, which “free” methods are risky, and how to track effectiveness.",
  lead: [
    "Instagram advertising isn’t one tool — it’s a set: the ads manager, creator integrations, seeding in topical accounts. Budget and results depend on the offer, creative, and audience quality.",
    "Below — placement types, price logic, metrics, and what not to confuse with promotion. The ads UI changes — settings meaning matters more than button screenshots.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Paid targeting or a creator?",
      a: "Targeting gives control and scale. A creator — trust and warm-up. They’re often combined. Picking an author is covered in a separate article.",
    },
    {
      q: "How much does advertising cost?",
      a: "No fixed “price per click forever”: auction, niche, season, creative. Creator fees depend on reach, format, and ER — 2021 benchmarks aren’t a live price list.",
    },
    {
      q: "Do mass-liking and mass-following work?",
      a: "As a growth strategy — no: limit risk and a noisy audience. Better content + legal ads.",
    },
    {
      q: "What counts as success?",
      a: "Not likes alone: CTR, leads, cost per lead, sales, dialogue quality. Lock UTM/promo codes in advance.",
    },
    {
      q: "Do you need a business account?",
      a: "For the ads manager and proper insights — yes, professional/business mode is usually required.",
    },
  ],
  sections: [
    {
      title: "Ad types",
      level: 2,
      paras: [
        "Three working tracks: official ads (targeting), creator ads, placement in topical communities/bulletin accounts.",
      ],
      lists: [
        {
          intro: "Types in brief:",
          items: [
            "targeting — feed/Stories/Reels impressions by segment, bid and budget in the ads manager;",
            "creator — post, Stories, Reels, series; strength is the recommendation;",
            "communities / seeding — cheaper on average, but ad attention is lower if the feed is “bulletin-board”.",
          ],
        },
      ],
      links: [
        {
          label: "How to find and vet a creator",
          href: "/en/blog/bloger-dlya-reklamy-instagram/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "What drives price",
      level: 2,
      paras: [
        "In targeting, price is an auction: niche competition, ad quality, campaign goal (reach, traffic, leads). You set daily budget and bid; “from $1 to $100 a day” from old guides is only a spread illustration.",
        "With creators, price grows with audience, format (Stories vs Reels integration), and demand. The “$10 = 10k followers” rule hasn’t been universal for a long time — look at reach and ER, not follower count alone.",
      ],
      lists: [
        {
          intro: "What affects the fee:",
          items: [
            "audience size and quality;",
            "geo and season;",
            "format and rights to the asset;",
            "urgency and revision count;",
            "fake engagement in the profile — better not to buy it at all.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Compare cost per desired action (lead/sale), not “cheap reach”. Cheap bots cost more in the end.",
        },
      ],
    },
    {
      title: "“Free” methods — where the catch is",
      level: 2,
      paras: [
        "At the start people look for growth with no budget. Some methods are legitimate (barter, collabs); some are harmful.",
      ],
      lists: [
        {
          intro: "Be careful:",
          items: [
            "mass-liking / mass-following — sanction risk and junk audience;",
            "DM spam — reports and blocks;",
            "“follow everyone” contests — a spike of dead followers;",
          ],
        },
        {
          intro: "Working without “magic”:",
          items: [
            "barter with a relevant creator (product ↔ integration);",
            "mutual shoutouts with a nearby audience, without pushiness;",
            "strong organic + a clear offer in the header.",
          ],
        },
      ],
      links: [
        {
          label: "Fake likes: risks",
          href: "/en/blog/nakrutka-laykov-instagram/",
        },
      ],
    },
    {
      title: "Why the platform works for ads",
      level: 2,
      paras: [
        "Mobile traffic, visual format, flexible segmentation in the ads manager, audience habit with native integrations — if the profile is live and the offer is clear.",
        "Downside: rising competition for attention and cost in hot niches. Without a landing (site, messenger, form) budget burns into “pretty views”.",
      ],
      lists: [],
    },
    {
      title: "How to track effectiveness",
      level: 2,
      paras: [
        "Before launch lock the goal and tracking method. Otherwise you argue about reach, not money.",
      ],
      lists: [
        {
          intro: "Minimum control:",
          items: [
            "UTMs on links / separate promo codes per creator;",
            "ads manager stats: CTR, CPC/CPA, frequency;",
            "with a creator — reach, saves, replies, clicks, screenshots;",
            "lead quality (not only lead count);",
            "compare creatives and creators on the same offer.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Judging a creator only by follower count. Look at dynamics, comments, and audience fit — see the checklist in the article on finding an author.",
        },
      ],
    },
  ],
};
