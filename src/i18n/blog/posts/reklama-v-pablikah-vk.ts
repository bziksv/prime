import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklama-v-pablikah-vk — same structure as RU JSON. */
export const reklamaVPablikahVkEn: BlogPost = {
  slug: "reklama-v-pablikah-vk",
  title: "Ads in VKontakte communities: how to pick a page and place a post",
  date: "2022-01-25",
  category: "SMM",
  cover: "/images/blog/reklama-v-pablikah-vk/cover-en.webp",
  excerpt:
    "How to run ads via VK communities: audience fit, picking pages, bot and engagement-rate checks, the post itself, comments, and measuring results.",
  lead: [
    "Ads in VKontakte communities means placing a post in someone else’s (or your own) communities. It works when you hit the right audience and pick a live community — not a bot graveyard.",
    "VK dashboards and marketplaces update often. Below: the order of actions and selection criteria, without tying you to outdated UI buttons.",
  ],
  faq: [
    {
      q: "How is a community placement different from paid targeting?",
      a: "A placement puts the post with a specific community audience. Targeting runs ads by segments in the ad account. They’re often used together.",
    },
    {
      q: "How can I tell a community has many bots?",
      a: "Dead or abandoned profiles, abnormal engagement rate, sharp unfollow spikes, identical comments. Tools help, but also read the feed yourself.",
    },
    {
      q: "What matters more — follower count or post reach?",
      a: "Reach and reaction on recent posts. A large dead base is useless.",
    },
    {
      q: "Who should I contact about placement?",
      a: "The community admin or via a VK marketplace/ad platform — whatever that page uses.",
    },
    {
      q: "How do I measure results?",
      a: "UTM or promo code, leads, cost per inquiry, comment quality. Not only likes under the ad post.",
    },
  ],
  sections: [
    {
      title: "When community ads make sense",
      level: 2,
      paras: [
        "The format fits when your audience sits in topic communities: local business, hobbies, B2C services, events.",
        "If the audience is scattered or you need tight bid control — plan targeting in parallel. Community placements warm people up well and add social context.",
      ],
    },
    {
      title: "Target audience",
      level: 2,
      paras: [
        "Build a portrait: gender, age, geo, interests, pain, what they’ve already tried. One clear segment beats “everyone.”",
        "Surveys, reviews, forum research, and audience tools (the set changes) help refine interests.",
      ],
      lists: [
        {
          intro: "Before picking communities, answer:",
          items: [
            "who should see the post",
            "what action you want",
            "what test budget you have",
            "which community topics overlap the offer",
          ],
        },
      ],
    },
    {
      title: "How to shortlist communities",
      level: 2,
      paras: [
        "Build a long list: VK search by topic, recommendations, lists from the account or marketplace, community-finder tools.",
        "Then shortlist with five checks: audience fit, activity, bots, reach, other ads.",
      ],
      lists: [
        {
          intro: "Quick community review:",
          items: [
            "stats: gender/age/city match the segment",
            "engagement rate: likes, comments, shares on regular posts",
            "bot share is moderate (not an inflated dead base)",
            "recent post reach fits the size",
            "the feed isn’t packed with competitor ads every post",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Taking the city’s biggest page without checking engagement rate. Post reach there can be lower than in a compact live community.",
        },
      ],
      tables: [
        {
          caption: "Community filter before payment",
          headers: ["Criterion", "Look at", "Stop signal"],
          rows: [
            [
              "Audience",
              "Gender/age/geo in stats",
              "Wrong city/age with no overlap",
            ],
            [
              "Activity",
              "Comments under regular posts",
              "Silence despite “loud” reach",
            ],
            ["Bots", "Base check + feed", "Mass dead accounts"],
            ["Ads", "Density of ad posts", "Every post is a paid placement"],
          ],
        },
      ],
    },
    {
      title: "How to place the ad",
      level: 2,
      paras: [
        "Two paths: direct to the admin or via a marketplace/VK tools for community ads. Confirm format (post / reshare / pin), date, comment moderation, and what’s in the price.",
      ],
      lists: [
        {
          intro: "Lock with the admin in writing:",
          items: [
            "copy and creative (or brief)",
            "date and time",
            "whether a community comment is needed",
            "whether you can reply under the post",
            "how you’ll get reach stats",
          ],
        },
      ],
      links: [
        {
          label: "Comments in a VKontakte community",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "How to write the post",
      level: 2,
      paras: [
        "In someone else’s community people skim: first line — benefit, then facts, then the ask. Clean visual, no tiny text on the image.",
      ],
      lists: [
        {
          intro: "Ad post frame:",
          items: [
            "hook under the audience’s pain or desire",
            "what you offer and for whom",
            "proof (figure, deadline, terms)",
            "CTA: message / click / visit",
            "contacts or a short link",
          ],
        },
      ],
    },
    {
      title: "Comments and follow-up",
      level: 2,
      paras: [
        "After the post goes live, watch comments: answer questions, kill spam, don’t argue toxically. Agree with the admin who moderates junk.",
      ],
      lists: [
        {
          intro: "In the first hours:",
          items: [
            "answer price or delivery clarifications",
            "pin a useful reply if possible",
            "save stats screenshots",
            "tag leads in CRM or a spreadsheet",
          ],
        },
      ],
    },
    {
      title: "Results and budget",
      level: 2,
      paras: [
        "Count cost per desired action, not likes. Compare communities on the same offer and creative.",
        "Placement prices depend on reach, niche, and city — ask for rates and a test budget on two or three placements before scaling.",
      ],
      lists: [
        {
          intro: "Mini report after a placement:",
          items: [
            "reach and post engagement rate",
            "clicks / leads / cost",
            "comment dialogue quality",
            "decision: repeat, change creative, or switch community",
          ],
        },
      ],
      links: [
        {
          label: "SMM manager: responsibilities",
          href: "/en/blog/menedzher-smm/",
        },
      ],
    },
  ],
};
