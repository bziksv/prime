import type { BlogPost } from "../../../data/blog";

/** EN overlay for otsenka-stoimosti-sayta — same structure as RU JSON. */
export const otsenkaStoimostiSaytaEn: BlogPost = {
  slug: "otsenka-stoimosti-sayta",
  title: "Website valuation: what to check and why online calculators lie",
  date: "2021-02-25",
  category: "Internet marketing",
  cover: "/images/blog/otsenka-stoimosti-sayta/cover-en.webp",
  excerpt:
    "Why people value sites, why pr-cy-style numbers diverge from a real deal, and which factors beat a one-click “magic” estimate.",
  lead: [
    "Online valuators promise a “site price” by domain in seconds. In practice it’s a rough order of magnitude with a huge spread: the same project can get wildly different figures across services — and still miss market price.",
    "Below — why those numbers get checked at all, what really moves price in a sale, and how not to confuse valuation with a growth audit. We don’t use outdated metrics like TIC/PageRank anymore.",
  ],
  faq: [
    {
      q: "Can you trust pr-cy and peers?",
      a: "As a rough order of magnitude — sometimes. As a deal price — no. Algorithms are closed, inputs incomplete, strategic value for the buyer ignored.",
    },
    {
      q: "What affects site price more?",
      a: "Clean profit and its stability, traffic quality, risks (filters, one-channel dependence), assets (brand, base, content, code), and niche demand.",
    },
    {
      q: "Then why use an online estimate?",
      a: "To see how a service “sees” the project over time and compare to market drafts. For a sale prepare P&L, traffic, and docs — not a calculator screenshot.",
    },
    {
      q: "Is a site marketplace more accurate than a calculator?",
      a: "Often yes: you see real deals and income multiples. But liquidity and “market average” aren’t the price of your unique asset.",
    },
    {
      q: "Why do services diverge so much?",
      a: "Different weights for age, links, traffic, and “forecast income”. Without your books and risks the model guesses.",
    },
    {
      q: "Estimate rose — is the site better?",
      a: "Not necessarily. The service method or external data noise may have changed. Watch your metrics: revenue, margin, traffic sources, conversion.",
    },
    {
      q: "Should a corporate company site be valued?",
      a: "As a sale asset — rarely. Better count contribution to leads and brand. Calculators are tuned for monetized projects and media, not a factory brochure.",
    },
  ],
  sections: [
    {
      title: "Why sites get valued",
      level: 2,
      paras: [
        "Some projects are built for resale, some run as media with ads and affiliates. Valuation matters for a sale, investor talk, asset split, or simply to see: is the project growing as a business or only “pretty in TOP”.",
        "An online figure is handy as a quick check, but a deal almost always rests on income, risks, and negotiation — not one widget.",
      ],
    },
    {
      title: "Why calculators spit different sums",
      level: 2,
      paras: [
        "A typical online valuator takes open signals: domain age, traffic estimates, backlink profile, sometimes a “forecast” from paid search. Closed models and different data sources create multi-fold spreads.",
        "A classic from older reviews: the same large portal got estimates from a few million rubles to tens of millions — while a strategic deal could be another order entirely. The takeaway isn’t “everyone lies the same way”, it’s “don’t confuse the model with the market”.",
      ],
      lists: [
        {
          intro: "Typical weak spots of one-click valuation:",
          items: [
            "no access to real profit and costs;",
            "panel traffic ≠ your analytics;",
            "legal and reputation risks invisible;",
            "brand value for a specific buyer ignored;",
            "outdated signals in methods (old SEO metrics).",
          ],
        },
      ],
    },
    {
      title: "What to look at instead of a magic number",
      level: 2,
      paras: [
        "For a sale or internal valuation, assemble a pack a buyer or partner will understand.",
      ],
      lists: [
        {
          intro: "Base for a price conversation:",
          items: [
            "revenue and profit for 6–12 months, seasonality;",
            "channel share (search, direct, ads, social) and one-source dependence;",
            "audience quality and conversion to money;",
            "tech state, content, support team;",
            "risks: filters, claims, licenses, personal data;",
            "compare to deal multiples in the niche (exchanges/brokers), not only a widget.",
          ],
        },
      ],
    },
    {
      title: "How to use online services without illusions",
      level: 2,
      paras: [
        "You can periodically pull estimates from 2–3 services and watch the trend, not the absolute. A sharp jump with no business change is a reason to check the method, not celebrate.",
        "Buy/sell marketplaces are more useful as a market guide: you see listings, seller income, and real ranges. Names and terms change — verify currency and contract before a deal.",
      ],
      links: [
        {
          label: "What a website is",
          href: "/en/blog/chto-takoe-veb-sayt/",
        },
      ],
    },
  ],
  closing: [
    "An online site valuation is a draft order of magnitude, not a deal price. Count income, traffic stability, and risks; leave the calculator as a supporting trend indicator.",
  ],
};
