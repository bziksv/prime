import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklama-tiktok — same structure as RU JSON. */
export const reklamaTiktokEn: BlogPost = {
  slug: "reklama-tiktok",
  title: "TikTok ads: how to launch a campaign in Ads Manager",
  date: "2020-04-27",
  category: "SMM",
  cover: "/images/blog/reklama-tiktok/cover-en.webp",
  excerpt:
    "When TikTok Ads makes sense, and how a launch works in Ads Manager: goal, budget, targeting, and creative — without outdated “from $500” minimums and 2018 app catalogs.",
  lead: [
    "TikTok Ads means paid impressions in the For You feed and related formats through the official ads account. Creator integrations and challenges live separately: different budget and agreements.",
    "We cover when the channel fits, how campaigns work in Ads Manager, and creative requirements. Menus and budget minimums change—check TikTok for Business Help. Organic For You is covered in a related article.",
  ],
  faq: [
    {
      q: "How do Ads differ from For You recommendations?",
      a: "For You is organic, driven by viewer behavior. Ads is a paid auction with a goal, budget, and targeting.",
    },
    {
      q: "What’s the minimum budget?",
      a: "It depends on region, currency, and campaign type. We don’t copy “from $500” figures from old guides — check current limits in Ads Manager.",
    },
    {
      q: "Does TikTok work for an “older” niche?",
      a: "The audience is broader than teens of 2018–2020. A test decides: offer + vertical creative. If your audience doesn’t watch short video, the channel is weak.",
    },
    {
      q: "Do I need the pixel and events?",
      a: "For websites and apps — yes, by task. Without events, conversion optimization is weak.",
    },
    {
      q: "Should I use a creator instead of Ads Manager?",
      a: "An integration brings trust and native feel. Ads Manager brings control and scale. Often you combine both.",
    },
  ],
  sections: [
    {
      title: "When to test TikTok Ads",
      level: 2,
      paras: [
        "You have a vertical creative that hooks in the first seconds and an offer clear without a long copy block.",
        "You’re ready to count results: installs, leads, sales — not only views.",
        "You understand the auction and moderation aren’t a “cheap banner forever”: creatives burn out fast.",
      ],
      links: [
        {
          label: "TikTok recommendations (organic)",
          href: "/en/blog/rekomendatsii-tiktok/",
        },
      ],
    },
    {
      title: "Ads Manager: goal and structure",
      level: 2,
      paras: [
        "Sign up for TikTok Ads / Business Center, create an ad account, add a payment method.",
        "Campaign → ad group → ad. Pick a goal for the job: traffic, conversions, installs, reach, leads — the set depends on the account.",
        "Name entities with a template: offer · geo · goal · date — like any paid channel.",
      ],
      notes: [
        {
          kind: "tip",
          title: "UI",
          paras: [
            "Don’t train people on “click Create an Ad in the center of a 2020 screen.” Train the chain: goal → audience → budget → vertical clip → preview → moderation.",
          ],
        },
      ],
    },
    {
      title: "Targeting, budget, schedule",
      level: 2,
      paras: [
        "Geo, age, language, interests, custom lists (under upload rules) — without scraping other people’s IDs via gray services.",
        "Daily or lifetime budget, dates and hours. Standard or accelerated delivery — choose for the test.",
        "Placements: TikTok alone is often enough; third-party apps from old guides may have vanished or renamed — don’t copy a 2018 list.",
      ],
    },
    {
      title: "Creative to spec",
      level: 2,
      paras: [
        "Vertical, hook in the first second, captions, sound as part of the format — but meaning should still read without it.",
        "Check current Video Ads Specifications: length, file size, and aspect ratio have changed.",
        "Ads Manager preview is mandatory: a cropped logo and tiny text kill CTR.",
      ],
      lists: [
        {
          intro: "Before moderation:",
          items: [
            "offer without forbidden claims;",
            "landing opens on mobile;",
            "UTM or promo code for measurement;",
            "a spare creative for burnout.",
          ],
        },
      ],
    },
    {
      title: "Creators and native alongside Ads",
      level: 2,
      paras: [
        "A commissioned clip, a series mention, a challenge — separate agreements and a brief. Price depends on reach and engagement rate, not a “2019 rate card.”",
        "Native Ads Manager formats (including creator-authorized code/Spark when available) bring ads closer to organic — confirm current TikTok products.",
        "Don’t mix “creator reach” and “Ads CPA” in one report without a shared attribution model.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "TikTok Ads is a paid auction with vertical creative — not a replacement for organic For You.",
        "Take budget minimums and menus from Ads Manager, not from 2020 articles.",
        "Count the target action; views without a lead aren’t success yet.",
      ],
    },
  ],
  closing: [
    "Build one vertical clip with a clear offer, set one goal and a test budget in TikTok Ads — and decide in parallel whether you also need a creator native placement.",
  ],
  related: [
    "rekomendatsii-tiktok",
    "reklama-instagram",
    "nastroika-reklamy-instagram",
    "facebook-ads",
    "vovlechennost-socseti",
    "kontent-plan",
  ],
};
