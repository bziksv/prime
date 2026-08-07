import type { BlogPost } from "../../../data/blog";

/** EN overlay for promoaktsii — same structure as RU JSON. */
export const promoaktsiiEn: BlogPost = {
  slug: "promoaktsii",
  title: "Why promotions matter — and which mechanics work",
  date: "2019-06-28",
  category: "Internet marketing",
  cover: "/images/blog/promoaktsii/cover-en.webp",
  excerpt:
    "Retail and online promotions: discounts, gift-with-purchase, loyalty, and giveaways — why business runs them, what shoppers prefer, and where privacy and the law set limits.",
  lead: [
    "A promotion is a temporary offer boost: a discount, gift, points, or a chance at a prize. The goal is a demand shift, stock move, acquisition, or retention — not “discount forever for its own sake”.",
    "Below — why promo helps business, popular mechanics, and what survey signals suggest (OMI/Sostav and peers, 2019 as a guide, not eternal truth). Giveaways only within platform rules and the law.",
  ],
  legalNotice: {
    title: "Social and giveaways",
    text: "Informational material. Use of some foreign platforms may be restricted under RF law. Formalize giveaways and incentive campaigns per platform rules and applicable norms (including advertising and personal data).",
  },
  faq: [
    {
      q: "Is a discount the best mechanic?",
      a: "The most familiar — but it trains people to wait for “−50%”. Mix with gifts, loyalty, and a clear giveaway, or margin melts.",
    },
    {
      q: "Why promo if the product already sells?",
      a: "Speed turnover, launch a new line, win shelf vs competitors, grow the list. Without a goal, the campaign becomes margin giveaway.",
    },
    {
      q: "Guaranteed prize or jackpot?",
      a: "Many prefer a “bird in hand”. A strong combo is a frequent small prize + a chance at a big one. Test on your audience.",
    },
    {
      q: "What data should you ask for?",
      a: "The minimum for the mechanic. Email is often easier to get than a public face flashmob. Personal-data consent is mandatory.",
    },
    {
      q: "Is social promo required?",
      a: "One distribution channel. Offer and rules first, seeding second. Don’t confuse reach with profit.",
    },
    {
      q: "How not to kill brand price?",
      a: "Rarity and a clear reason (season, leftover, bundle). Permanent dumps train people to buy only on sale.",
    },
  ],
  sections: [
    {
      title: "Why business needs promo",
      level: 2,
      paras: [
        "Shoppers hunt for a deal: some FMCG categories have run with a high promo share for years (2017–2018 research figures illustrate pressure, not your KPI). Without your own mechanic, you hand the shelf to whoever gives a reason to buy now.",
        "Jobs: volume, traffic to store/site, line discovery, contact capture, reactivation. Decide the success metric up front: sales, margin, new customers, LTV.",
      ],
    },
    {
      title: "Popular mechanics",
      level: 2,
      paras: [
        "Most common: discounts, gift-with-purchase, bonuses, and loyalty programs. Loyalty holds brand ties better — but is harder to launch than a “−30%” tag.",
        "Surveys show the market is saturated with discounts; mix mechanics and restore willingness to pay full price for value, not only for a percentage.",
      ],
      lists: [
        {
          intro: "Basic set:",
          items: [
            "discount on SKU/category;",
            "gift / 2=3;",
            "points and loyalty tiers;",
            "giveaway with clear rules;",
            "coupon for the next order.",
          ],
        },
      ],
    },
    {
      title: "What people choose",
      level: 2,
      paras: [
        "Joint surveys (2019 guide): people share email more readily than join public flashmobs; a tangible prize often beats “experiences”; a card payout beats abstract bonuses; a guaranteed minimum often beats a deferred big jackpot.",
        "In “appeal” rankings, “prize of the day + chance at a super-prize” often wins: rationality plus emotion. Demographics matter less than clarity of benefit and ease of entry.",
      ],
      notes: [
        {
          title: "Not a “secret” manipulation",
          text: "Promising a big prize while counting on forgetfulness is bad ethics and complaint risk. Honest deadlines, odds, and how to claim the prize are mandatory.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Consumer insight",
          href: "/en/blog/potrebitelskiy-insayt/",
        },
        {
          label: "Reviews that sell",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "How to launch without damage",
      level: 2,
      paras: [
        "Lock the goal, economics (margin after discount/gift), rules, channel, and measurement. For giveaways — public terms, dates, and how the winner is chosen.",
        "Distribution: site, email, store, maps, available social — with UTM and a separate promo code so you see each channel’s contribution.",
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "Lead-capture forms",
          href: "/en/blog/formy-zahvata/",
        },
      ],
    },
  ],
  closing: [
    "Promotions work when there is a goal and economics — not an eternal price dump. Rotate mechanics, respect privacy and giveaway rules, and measure margin and new customers — not only “how many bought on discount”.",
  ],
  related: [
    "potrebitelskiy-insayt",
    "otzyvy-dlya-prodazh",
    "formy-zahvata",
    "metriki-reklamy",
    "prodazhi-internet-magazin",
    "performance-marketing",
  ],
};
