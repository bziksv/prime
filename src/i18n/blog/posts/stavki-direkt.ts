import type { BlogPost } from "../../../data/blog";

/** EN overlay for stavki-direkt — same structure as RU JSON. */
export const stavkiDirektEn: BlogPost = {
  slug: "stavki-direkt",
  title: "Bids in Yandex Direct: setup and management",
  date: "2021-03-05",
  category: "Contextual advertising",
  cover: "/images/blog/stavki-direkt/cover-en.webp",
  excerpt:
    "How bidding works in Yandex Direct: manual and automated control, impressions, click price, and what to watch beyond “bid higher”.",
  lead: [
    "A bid in Direct affects show chance and click price, but doesn’t lock a position forever. Auction, ad quality, and landing relevance decide together.",
    "Below — how to manage bids and impressions. The Direct UI changes — check current strategy names in Yandex help.",
  ],
  faq: [
    {
      q: "Higher bid = always higher position?",
      a: "Not always. Bid, quality, and predicted CTR all count. Sometimes a more relevant competitor wins.",
    },
    {
      q: "Manual or auto strategies?",
      a: "At the start, often manual control or simple autos with caps. When you have conversions — you can lean more on auto-optimization.",
    },
    {
      q: "What matters more than the bid?",
      a: "Offer, negatives, ad, and landing. An expensive bid on a weak landing burns budget.",
    },
    {
      q: "Do you need bid adjustments?",
      a: "Yes: device, region, time — if you have data. Without data, don’t twist everything at once.",
    },
    {
      q: "How do you choose CPC?",
      a: "From economics: margin, site conversion, target CPA — not from a vacuum “market average”.",
    },
    {
      q: "How often to revisit bids?",
      a: "After enough data: usually every few days for active campaigns and weekly for calmer ones. Don’t change dozens of parameters at once.",
    },
    {
      q: "Can you judge a campaign by CTR alone?",
      a: "No. High CTR without leads doesn’t pay for ads. Match clicks to conversions, cost per lead, and inquiry quality.",
    },
  ],
  sections: [
    {
      title: "Setting bids",
      level: 2,
      paras: [
        "Set strategy at campaign or group level, cap the daily budget, check geo and schedule. Keep keywords, ads, and landing aligned in meaning.",
        "Before launch, define what counts as a result: lead, call, order, or signup. Then the bid isn’t a “visibility number” — it’s part of an acceptable acquisition-cost calc.",
      ],
      lists: [
        {
          intro: "Before raising a bid:",
          items: [
            "are there conversions from this keyword;",
            "is budget leaking into irrelevance;",
            "does the landing load fast;",
            "is the ad approved and clickable.",
          ],
        },
      ],
      links: [
        {
          label: "Ads account basics",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Managing impressions",
      level: 2,
      paras: [
        "Impressions depend on bid, competition, and phrase status. Check rare-show reasons in stats: budget, bid, negatives, moderation.",
        "Don’t try to recover reach with one sharp raise. First separate commercial from research queries, check ad–query fit, and exclude off-target wording.",
      ],
      lists: [
        {
          intro: "Levers:",
          items: [
            "bid / strategy;",
            "budget;",
            "adjustments;",
            "ad quality;",
            "negatives and placement exclusions (for networks).",
          ],
        },
      ],
    },
    {
      title: "Tools and common sense",
      level: 2,
      paras: [
        "Direct wizards and recommendations are hints, not orders. Cross-check them with unit economics. Don’t chase “first place” at any cost.",
        "Compare not average position, but spend → conversions → revenue. Sometimes a less visible impression brings cheaper leads, while the most expensive traffic only builds pretty stats.",
      ],
      lists: [
        {
          intro: "Mistakes:",
          items: [
            "bidding for bidding’s sake without goals;",
            "one bid for all keywords of different value;",
            "ignoring mobile traffic;",
            "no link to Metrika.",
          ],
        },
      ],
      links: [
        {
          label: "Installing Metrika",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Manual control and auto strategies",
      level: 2,
      paras: [
        "Manual control helps when campaigns are new, conversions are scarce, or phrase value differs a lot. You can see which queries burn budget and set priorities carefully.",
        "Auto strategies shine when the counter sends correct goals and you have a stable data volume. Set a clear conversion-cost or budget target — then don’t change the goal every day.",
      ],
      lists: [
        {
          intro: "Before turning on an auto strategy, check:",
          items: [
            "Metrika goals match real inquiries;",
            "duplicate goals and test leads are excluded;",
            "the campaign has enough budget to learn;",
            "traffic types aren’t mixed without need.",
          ],
        },
      ],
    },
    {
      title: "How to control results",
      level: 2,
      paras: [
        "Keep a short regular report: spend, clicks, conversions, CPA, share of qualified inquiries, and revenue if you can pass it. Prefer breakdowns by campaign, device, region, and demand groups.",
        "Change by hypothesis: pause an unprofitable phrase, improve the mobile landing, or tweak the schedule. After a change, let the campaign gather stats and write down the conclusion.",
      ],
      lists: [
        {
          intro: "Weekly checks that help:",
          items: [
            "search terms and new negatives;",
            "gap between spend and target CPA;",
            "forms, call tracking, and goals;",
            "competition and seasonality shifts.",
          ],
        },
      ],
      notes: [
        {
          title: "SEO vs paid",
          kind: "tip",
          text: "Bids buy traffic now. Organic rankings for a core grow separately: site prep roughly weeks to a month; TOP planned 2–6 months of work — not “raise CPC and ranks follow”.",
        },
      ],
    },
  ],
};
