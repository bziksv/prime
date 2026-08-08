import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodazha-trafika — same structure as RU JSON. */
export const prodazhaTrafikaEn: BlogPost = {
  slug: "prodazha-trafika",
  title: "Selling traffic: how to monetize site visits",
  date: "2021-11-06",
  category: "Digital marketing",
  cover: "/images/blog/prodazha-trafika/cover-en.webp",
  excerpt:
    "What selling traffic means: CPC, CPM, CPA, search/display ads, teasers, banners, and direct advertisers. How to find buyers without killing UX.",
  lead: [
    "Selling traffic means you give advertisers a share of your audience’s attention for pay: per impression, click, or conversion. It’s a revenue channel for media and sites with real visits — not a “passive million” button.",
    "Below: payment models, formats, finding buyers, and risks. Networks and exchanges change — check current rules and traffic quality.",
  ],
  faq: [
    {
      q: "Do I need my own site to sell traffic?",
      a: "Usually yes: you sell your property’s audience. Without a site you’re left with affiliate/arbitrage models — different risks.",
    },
    {
      q: "What’s the difference between CPC, CPM, and CPA?",
      a: "CPC — pay per click; CPM — per impressions (usually per 1,000); CPA — per action (lead, purchase, signup).",
    },
    {
      q: "How much can I earn selling traffic?",
      a: "Depends on niche, geo, audience quality, and format. Old “cents per click” are not a price list — run your own tests and watch eCPM.",
    },
    {
      q: "Why would an advertiser refuse?",
      a: "Low traffic, off-topic, poor UX, fake traffic, policy violations, or weak conversion on the seller’s side.",
    },
    {
      q: "Are clickunders and aggressive teasers dangerous?",
      a: "For short-term eCPM sometimes yes; for retention and brand — often no. Hard formats raise complaint and churn risk.",
    },
  ],
  sections: [
    {
      title: "How the model works",
      level: 2,
      paras: [
        "Site A has visitors. Advertiser B pays so some of them see an offer and click/buy. You sell attention; an exchange or network often takes a cut.",
        "The better the audience quality and topic fit, the higher the click or action price. “Volume at any cost” usually kills both revenue and trust.",
      ],
    },
    {
      title: "Finding a buyer",
      level: 2,
      paras: [
        "Via ad networks and affiliate platforms: register the site, pass moderation, place the code. Or direct: an advertiser reaches out to media with reach.",
      ],
      lists: [
        {
          intro: "What to check in a deal:",
          items: [
            "audience topic and geo",
            "payment model and minimum payout",
            "prohibited-content rules",
            "site speed and UX after placing blocks",
            "reporting: impressions, clicks, actions",
          ],
        },
      ],
    },
    {
      title: "Monetization formats",
      level: 2,
      paras: [
        "Search and display through major networks (e.g. Yandex and Google programs — under each property’s rules). Teasers and banners are more visible but easy to overload a page.",
        "Outbound links and native placements sit closer to editorial. CPA/affiliates pay for a lead or sale: higher payout with a strong offer, stricter on traffic quality.",
        "YouTube and other media are a separate track: viewers monetize via the platform network or integrations when rules allow.",
      ],
      lists: [
        {
          intro: "Payment schemes:",
          items: [
            "CPC — easy to count, depends on CTR",
            "CPM — income from volume and viewability",
            "CPA — closer to the advertiser’s result",
            "flat / package — direct deals",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "Old exchange directories (AdLabs, Rotaban, and peers) partly age out. Pick a live network with clear stats and sane moderation.",
        },
      ],
    },
    {
      title: "Direct advertisers and without “your” site",
      level: 2,
      paras: [
        "Large blogs and channels sell packages direct: higher rate, more manual work. Without your own property you stay in affiliates/arbitrage — you need traffic skills and offer-policy compliance.",
        "Don’t promise “passive income with no effort”: both sites and arbitrage need quality upkeep and policy fit.",
      ],
    },
    {
      title: "How not to kill the property",
      level: 2,
      paras: [
        "Aggressive formats lift short-term revenue and drop return visits. Keep balance: the reader should finish the piece.",
      ],
      lists: [
        {
          intro: "Hygiene rules:",
          items: [
            "don’t cover the content entirely with ads",
            "don’t use misleading teasers",
            "don’t sell fake traffic",
            "follow network rules — or risk a site ban",
            "measure not only revenue but bounce rate and depth",
          ],
        },
      ],
    },
  ],
};
