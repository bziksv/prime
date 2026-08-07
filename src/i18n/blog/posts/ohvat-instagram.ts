import type { BlogPost } from "../../../data/blog";

/** EN overlay for ohvat-instagram — same structure as RU JSON. */
export const ohvatInstagramEn: BlogPost = {
  slug: "ohvat-instagram",
  title: "Instagram reach: what it is and how it differs from impressions",
  date: "2021-01-26",
  category: "SMM",
  cover: "/images/blog/ohvat-instagram/cover-en.webp",
  excerpt:
    "What Instagram reach is: unique accounts vs impressions, why reach drops, and how to grow with legitimate methods — without bots and a catalog of gray-hat services.",
  lead: [
    "Reach is how many unique accounts saw a post or profile in a period. Impressions count every view, including repeats by the same person.",
    "Watch reach to spot format and timing issues — not to chase a vanity peak with bots. Bought likes and fake engagement risk limits and a dead audience. See the Meta notice on this page.",
  ],
  faq: [
    {
      q: "Are reach and impressions the same?",
      a: "No. Reach is unique viewers. Impressions are all views. One person can add 1 to reach and 10 to impressions.",
    },
    {
      q: "Is reach the same as follower count?",
      a: "No. Non-followers see content too (recommendations, hashtags, story shares). Some followers never see the post.",
    },
    {
      q: "Why did Instagram reach drop?",
      a: "Format change, weak hook, posting frequency, feed competition, account limits, seasonality. Watch several posts’ dynamics, not one miss.",
    },
    {
      q: "Will bought reach help your account?",
      a: "Not for sales. Bots and purchased actions hurt algorithm trust and risk bans. Don’t use them.",
    },
    {
      q: "Where do you see the reach number?",
      a: "In professional account Insights and post/story insights. You need a business/creator mode.",
    },
  ],
  sections: [
    {
      title: "In plain English",
      level: 2,
      paras: [
        "Think of a street sign: reach is how many different people noticed it; impressions are how many looks, including repeats; customers are a separate conversion story.",
        "On Instagram reach helps estimate how many people the content reached — not how many times the same reel was scrolled.",
      ],
      links: [
        {
          label: "Instagram Insights",
          href: "/en/blog/statistika-instagram/",
        },
      ],
    },
    {
      title: "Reach vs impressions vs activity",
      level: 2,
      paras: [
        "High impressions with low reach — many repeat views from a narrow group. High reach with zero saves and DMs — a window shoppers with no intent.",
        "For business the chain matters: reach → actions (profile, site, messages) → leads. Likes are easy to fake; reach is harder to fake, but chasing only reach without an offer is pointless.",
      ],
      lists: [
        {
          intro: "Watch next to reach:",
          items: [
            "saves and replies",
            "profile visits",
            "link/sticker clicks",
            "messages and leads",
            "share of reach from followers.",
          ],
        },
      ],
    },
    {
      title: "What changes reach",
      level: 2,
      paras: [
        "The algorithm ranks the feed and recommendations: does the reel hold attention, do people save and reply, is the topic relevant. Posting time only matters relative to when your audience is online.",
        "A sharp drop after bots, DM spam, or shadow limits is a separate track. See the shadowban and block articles.",
      ],
      links: [
        {
          label: "Shadowban",
          href: "/en/blog/tenevoy-ban-instagram/",
        },
        {
          label: "Account block",
          href: "/en/blog/blokirovka-instagram/",
        },
      ],
    },
    {
      title: "How to grow without gray-hat tactics",
      level: 2,
      paras: [
        "A strong first frame and caption hook, Reels/video series where they fit, honest giveaways by the rules, Stories with polls, collabs with relevant creators, ads with a clear audience.",
        "News and trends — only if tied to the niche. A content plan beats a one-off “viral” burst.",
      ],
      lists: [
        {
          intro: "White checklist:",
          items: [
            "timing from your own “when online” stats",
            "formats that already get saves",
            "CTA to profile/DM/site",
            "reply to comments in the first hours",
            "ads or a collab instead of bots.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Buying “reach and likes” in a pack. The number grows, leads don’t, sanction risk does.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
        {
          label: "Giveaway",
          href: "/en/blog/rozygrysh-instagram/",
        },
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Why we don’t treat bots as a method",
      level: 2,
      paras: [
        "Exchange services and bot shops promise fast growth. The platform cuts those signals; the audience doesn’t buy. We don’t repeat “Nakrutka / Socgain” catalogs from old articles.",
        "If metrics are already spoiled by bots — stop them, strengthen live content, and don’t mix blindly with ad budget.",
      ],
    },
    {
      title: "Where to look in the account",
      level: 2,
      paras: [
        "Professional account → profile Insights and a single post/story. Menu labels changed; look for Insights / “View insights.”",
        "Screenshot key weeks — easier to compare series launches and ads.",
      ],
      links: [
        {
          label: "Business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Reach is unique viewers; impressions are all views. Grow with white content and ads, measure actions — not only reach.",
        "Bots don’t replace an offer and trust.",
      ],
    },
  ],
  closing: [
    "Cross-check reach with impressions and leads in Insights, strengthen formats with saves and replies — and don’t spend budget on bots. Live reach is slower, but it feeds sales.",
  ],
  related: [
    "statistika-instagram",
    "tenevoy-ban-instagram",
    "reklama-instagram",
    "kontent-plan-instagram",
    "biznes-akkaunt-instagram",
    "rozygrysh-instagram",
  ],
};
