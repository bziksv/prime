import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklama-odnoklassniki — same structure as RU JSON. */
export const reklamaOdnoklassnikiEn: BlogPost = {
  slug: "reklama-odnoklassniki",
  title: "Odnoklassniki ads: audience, formats, and response",
  date: "2020-12-16",
  category: "SMM",
  cover: "/images/blog/reklama-odnoklassniki/cover-en.webp",
  excerpt:
    "Who OK ads fit, what ad tone works, how to think about formats and audience, and how to measure response — without outdated pixels and ad-account screenshots.",
  lead: [
    "Odnoklassniki is its own environment: a different feed mood, different audience habits, and a different response to an offer. Copying creatives “as from VK” one-to-one often fails.",
    "Below — when the channel fits, how to write ads, what to watch in formats and setup, and how to read stats. The account UI and creative rules change — check current sizes and buttons in the live VK Ads / ad account help.",
  ],
  faq: [
    {
      q: "Who are OK ads a good fit for?",
      a: "More often local and “clear” offers: services, delivery, windows, loans, seasonal goods, events. A complex niche product with no benefit explained usually underperforms.",
    },
    {
      q: "What is the audience age?",
      a: "Older segments are stronger, but it is not “40+ only”. Use your own stats and tests — not meme myths.",
    },
    {
      q: "What should the ad say?",
      a: "Concrete details: price, deadline, geo, promo. Abstract lifestyle with no offer gets fewer qualified responses.",
    },
    {
      q: "Which account should you run from?",
      a: "OK ads usually go through the VK Ads ecosystem (historically myTarget and related accounts). Section names change — follow the current UI.",
    },
    {
      q: "Do giveaways work?",
      a: "Reposts and “Class” reactions for a prize drive reach, but often noisy audiences. For sales, offer and landing matter more than virality alone.",
    },
    {
      q: "Which metrics matter?",
      a: "Impressions, clicks, CTR, visits, leads/purchases, CPA. Likes (“Class”) are secondary when the goal is sales.",
    },
    {
      q: "Can you send traffic to a site?",
      a: "Yes, if platform policy and moderation allow it. For a community, join / message goals are also valid scenarios.",
    },
  ],
  sections: [
    {
      title: "Audience and offer tone",
      level: 2,
      paras: [
        "OK responds well to clear everyday and local offers: discount, delivery, booking, fixed terms. A “conceptual” product with no benefit explained usually loses.",
        "Respect the platform culture: visuals and copy closer to a clear benefit than to trendy performance art. Giveaways create activity — filter whether that audience is the one you need.",
      ],
      lists: [
        {
          intro: "What strengthens response:",
          items: [
            "a concrete benefit and promo deadline;",
            "geo and a clear next step;",
            "a readable creative without tiny text;",
            "a landing that matches the ad promise.",
          ],
        },
      ],
    },
    {
      title: "Ad formats",
      level: 2,
      paras: [
        "In the feed, blocks with headline, text, and image usually work; there are also placements from a community and other account formats. Exact character and pixel limits change — take current specs from help before design.",
        "Build the creative against the account preview: how it looks in the feed, shortened, and on mobile. Don’t rely on sizes from old 2020 guides.",
      ],
      lists: [
        {
          intro: "Before uploading a creative:",
          items: [
            "the offer is readable on a phone;",
            "no overload of tiny text on the banner;",
            "the link goes where the headline promises;",
            "platform rules are followed (including external links and other social networks).",
          ],
        },
      ],
      links: [
        {
          label: "Banner sizes",
          href: "/en/blog/razmery-bannera/",
        },
      ],
    },
    {
      title: "Setup: audience and bid",
      level: 2,
      paras: [
        "After the creative, set audience: geo, age, interests/topics where available. At the start don’t split the target into dozens of narrow intersections without budget to test.",
        "Billing model and bid advice depend on the goal (impressions, clicks, conversions). Move budget after enough stats — not after the first few hours.",
      ],
      lists: [
        {
          intro: "Mini launch order:",
          items: [
            "goal and landing;",
            "ad with a concrete offer;",
            "audience and exclusions;",
            "budget and cap;",
            "pixel/analytics goals if you send traffic to a site.",
          ],
        },
      ],
      links: [
        {
          label: "Ad account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "How to read response",
      level: 2,
      paras: [
        "In account stats watch impressions, clicks, CTR, actions (visit, join, comments) — and above all leads/sales from site analytics or CRM.",
        "“Class” reactions and comments are useful interest signals, but for business the cost of a qualified action and lead quality decide.",
      ],
    },
  ],
  closing: [
    "Odnoklassniki ads work on concrete offers and a clear audience. Check formats in the current account; measure success by CPA and leads — not only by “Class” reactions.",
  ],
};
