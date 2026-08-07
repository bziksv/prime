import type { BlogPost } from "../../../data/blog";

/** EN overlay for statistika-instagram — same structure as RU JSON. */
export const statistikaInstagramEn: BlogPost = {
  slug: "statistika-instagram",
  title: "Instagram statistics: which metrics to watch and why",
  date: "2021-10-08",
  category: "SMM",
  cover: "/images/blog/statistika-instagram/cover-en.webp",
  excerpt:
    "Why Instagram statistics matter: reach, impressions, saves, audience, and Stories. How to read business-account Insights and not confuse likes with results.",
  legalNotice: {
    mark: "*",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  lead: [
    "Built-in Instagram statistics (Insights) show what actually works in a profile: reach, actions, audience. Without them it’s easy to chase likes and miss leads.",
    "Menu labels change; you need a professional or business profile. We focus on what to watch on posts, Stories, and followers — informational overview only, not a call to use the platform.",
  ],
  faq: [
    {
      q: "Why don’t I see statistics?",
      a: "You often need a professional account. Some data appears only after the switch and only on new posts.",
    },
    {
      q: "Are reach and impressions the same?",
      a: "No. Reach is unique accounts; impressions are all views, including repeats.",
    },
    {
      q: "Which metrics matter more than likes?",
      a: "Saves, replies, profile or site taps, messages; for ads — cost per action. Likes are only one signal.",
    },
    {
      q: "Do Stories keep stats for long?",
      a: "The Insights window for Stories is limited (historically about two weeks). Screenshot or export in time.",
    },
    {
      q: "Are third-party stats tools OK?",
      a: "Be careful: don’t give passwords to shady apps. For your own account, built-in Insights plus UTM to the site usually suffice.",
    },
  ],
  sections: [
    {
      title: "Why look at statistics",
      level: 2,
      paras: [
        "To see growth pace, which formats land, when the audience is online, and where to steer the content plan. Bloggers’ ad metrics are separate — check someone else’s ER independently.",
      ],
      lists: [
        {
          intro: "Typical Insights questions:",
          items: [
            "which posts drive saves and replies;",
            "whether reach grows without fake boosts;",
            "who followers are (gender, age, cities — if available);",
            "which time slots are livelier.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "How to open Insights",
      level: 2,
      paras: [
        "Switch the profile to professional mode and open the statistics section in the app. Exact button labels depend on the version.",
        "Historically a Facebook link was often required — the path may differ by region now. If the item is missing, follow the wizard in account settings.",
      ],
      lists: [],
      notes: [
        {
          title: "Tip",
          text: "Data on old posts before the profile-type change may be incomplete. Rely on publications after Insights are enabled.",
        },
      ],
    },
    {
      title: "Profile and post metrics",
      level: 2,
      paras: [
        "At profile level, people watch visits, reach, link taps, and follower trend. Per post — reach, impressions, likes, comments, saves, shares, sometimes clicks.",
      ],
      lists: [
        {
          intro: "How to read them:",
          items: [
            "high reach + few saves — scrolled past;",
            "saves and replies — a strong value signal;",
            "compare similar formats with each other;",
            "separate ad boost from organic.",
          ],
        },
      ],
    },
    {
      title: "Stories, Lives, audience",
      level: 2,
      paras: [
        "In Stories, replies, taps, sticker answers, and exits from the sequence matter. For Lives — peak viewers and retention, not only “how many joined at the start.”",
        "For audience (if the follower threshold allows), watch gender, age, cities, and hourly activity — then shift the posting schedule.",
      ],
      lists: [],
      links: [
        {
          label: "Instagram Live",
          href: "/en/blog/pryamoy-efir-instagram/",
        },
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Limits and external tools",
      level: 2,
      paras: [
        "Built-in stats are free, but they don’t replace site and CRM analytics. It’s useful to copy trends into a sheet once a week.",
        "“Spy” tools for other accounts often need risky access and shaky accuracy. For competitors, open signals and a manual review are enough.",
      ],
      lists: [
        {
          intro: "Minimum discipline:",
          items: [
            "once a week — top and flop posts;",
            "UTM on the bio link;",
            "a goal in numbers (leads), not only reach;",
            "don’t log into shady apps.",
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
  ],
};
