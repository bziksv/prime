import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklamnyy-kabinet — same structure as RU JSON. */
export const reklamnyyKabinetEn: BlogPost = {
  slug: "reklamnyy-kabinet",
  title: "Ad account: what it is and where to start",
  date: "2021-04-16",
  category: "Contextual advertising",
  cover: "/images/blog/reklamnyy-kabinet/cover-en.webp",
  excerpt:
    "What an ad account is, which entities almost always exist (campaign, budget, audience, stats), and how to approach a launch in Yandex Direct and social ad cabinets.",
  lead: [
    "An ad account is the interface where you create campaigns, set budget and audience, and read stats. Each platform has its own UI, but the logic is similar.",
    "Below — shared terms and a start order. Menu items change; for Meta* platforms this material is informational and does not urge use of the service.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Facebook* and Instagram* ads run through Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Where should a beginner in Russia start?",
      a: "Often with Yandex Direct and/or VK ads — check current access and platform documents. Elsewhere, pick the cabinets your audience and legal context actually allow.",
    },
    {
      q: "How is an ad account different from a site?",
      a: "The account manages ad delivery. The site/landing receives traffic and converts.",
    },
    {
      q: "Do you need Metrica?",
      a: "Yes for judging leads and ROI. Platform pixels/counters — by task.",
    },
    {
      q: "What are a campaign and an ad?",
      a: "A campaign is budget and strategy level. Groups/ad sets set targeting. Ads are creatives.",
    },
    {
      q: "Can you run everything “by eye”?",
      a: "No. Without goals and tagging you can’t tell clicks from leads.",
    },
    {
      q: "What budget do you need for a test?",
      a: "It depends on niche, CPC, and goal. Set an amount enough to gather data, and decide in advance when to stop or scale.",
    },
  ],
  sections: [
    {
      title: "General account scheme",
      level: 2,
      paras: [
        "Almost everywhere: account → campaigns → groups → ads → stats. Plus billing, moderation, and audience settings.",
      ],
      lists: [
        {
          intro: "Before the first launch:",
          items: [
            "goal (lead, purchase, traffic);",
            "landing page;",
            "budget and test period;",
            "analytics counter;",
            "creatives and offer.",
          ],
        },
      ],
    },
    {
      title: "Platforms: Direct, VK, and others",
      level: 2,
      paras: [
        "Yandex Direct — Yandex search and networks. VK — its own ad account. Other platforms have separate cabinets and access rules.",
        "Facebook*/Instagram* ads historically ran through Meta Ads Manager; for users in Russia, mind the legal status of Meta* products.",
      ],
      lists: [
        {
          intro: "Working minimum in any account:",
          items: [
            "clear campaign structure;",
            "UTM or tagging;",
            "daily/total budget;",
            "negatives / audience exclusions;",
            "regular stats review.",
          ],
        },
      ],
      links: [
        {
          label: "Installing Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
      ],
    },
    {
      title: "Typical start mistakes",
      level: 2,
      paras: [
        "Sending traffic to home with no offer, mixing goals in one campaign, ignoring bounce and leads, expecting miracles without creative tests.",
      ],
      lists: [
        {
          intro: "Checklist after moderation:",
          items: [
            "ads are actually delivering;",
            "landing opens on mobile;",
            "analytics goals fire;",
            "budget isn’t burning on irrelevance.",
          ],
        },
      ],
    },
    {
      title: "Prepare measurement before launch",
      level: 2,
      paras: [
        "An ad account doesn’t create demand or fix a weak landing. Before topping up, check that the form works, calls are answered, prices and terms are current, and the target action is visible in analytics.",
        "Tie ads to outcomes via goals and UTM tags. Then you can split campaigns, creatives, and audiences in reports — not argue about ad quality from total clicks alone.",
      ],
      lists: [
        {
          intro: "Minimum prep:",
          items: [
            "campaign goal and acceptable cost per inquiry;",
            "analytics set up and a test conversion;",
            "landing with a clear offer;",
            "someone responsible for lead handling.",
          ],
        },
      ],
    },
    {
      title: "Build a readable campaign structure",
      level: 2,
      paras: [
        "Don’t mix different products, regions, and goals in one campaign if you want readable stats. Structure should show what worked: query, audience, creative, placement, or landing.",
        "Start with a small number of logical groups. Over-splitting starves each group of data; one huge group hides demand differences. Name campaigns and ads so the team can read them.",
      ],
      lists: [
        {
          intro: "Split campaigns by:",
          items: [
            "different products or offers;",
            "audience geography and language;",
            "search, networks, or placement formats;",
            "funnel stage and communication goal.",
          ],
        },
      ],
    },
    {
      title: "Test and optimize without sharp conclusions",
      level: 2,
      paras: [
        "After launch, confirm impressions, clicks, and goals log correctly. Then let the campaign gather enough data within the agreed budget. Early edits to every parameter hide what actually moved the result.",
        "Cut clear irrelevance, refine queries and audiences, refresh weak creatives. Don’t chase a cheap click alone: value is leads, sales, and lead quality.",
      ],
      lists: [
        {
          intro: "In a regular review include:",
          items: [
            "spend, impressions, clicks, and conversions;",
            "search queries or placement sites;",
            "cost and quality of inquiries;",
            "landing state and manager reply speed.",
          ],
        },
      ],
    },
  ],
};
