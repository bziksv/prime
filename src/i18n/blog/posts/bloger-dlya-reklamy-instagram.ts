import type { BlogPost } from "../../../data/blog";

/** EN overlay for bloger-dlya-reklamy-instagram — same structure as RU JSON. */
export const blogerDlyaReklamyInstagramEn: BlogPost = {
  slug: "bloger-dlya-reklamy-instagram",
  title: "How to find a blogger for Instagram ads: search and vetting",
  date: "2022-02-01",
  category: "SMM",
  cover: "/images/blog/bloger-dlya-reklamy-instagram/cover-en.webp",
  excerpt:
    "How to pick a creator for ads: why integrations, where to look, how to check the audience, and what to avoid. A checklist for the client.",
  lead: [
    "Creator ads work when the audience matches the offer and the profile is alive. This piece covers how to find creators and vet them before you pay.",
    "Interfaces and marketplaces change: rely on quality criteria, not “tap the down arrow in an old app version”.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is for information only and is not an invitation to use the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Should you hire a blogger or only run paid ads?",
      a: "They often reinforce each other: a creator builds trust and warm-up; paid ads bring scale and control. Choice depends on budget and goal.",
    },
    {
      q: "Does follower count or engagement matter more?",
      a: "Engagement and relevance. Better 15 thousand live followers than 200 thousand “empty” ones.",
    },
    {
      q: "Should you hire creators from a marketplace?",
      a: "You can, if you vet manually. Marketplaces have many inflated profiles — check ER, comments, and growth dynamics.",
    },
    {
      q: "How do you spot fake engagement?",
      a: "Follower spikes, likes without views/comments, identical bots in comments, odd geography for the niche.",
    },
    {
      q: "What should you lock in the creator agreement?",
      a: "Format, deadlines, banned words, rights to the asset, how you measure results (promo code, UTM, DMs), revisions and cancellation.",
    },
  ],
  sections: [
    {
      title: "Why advertise with creators",
      level: 2,
      paras: [
        "Paid ads scale reach. A creator adds social proof: a recommendation from someone people already trust.",
        "Platforms cut fake engagement and mass tactics — a bet on live influence and shared interests beats bought bots.",
      ],
      lists: [
        {
          intro: "What a solid integration usually delivers:",
          items: [
            "access to an already gathered topical audience;",
            "brand awareness and click growth;",
            "expert context (“I recommend because…”);",
            "sales — if the offer and CTA are clear.",
          ],
        },
      ],
    },
    {
      title: "Where to start the search",
      level: 2,
      paras: [
        "Start with a brief: product, geo, budget, desired action (follow, lead, purchase). Without a brief it’s easy to buy pretty but wrong reach.",
      ],
      lists: [
        {
          intro: "Working ways to find candidates:",
          items: [
            "niche hashtags and search;",
            "similar profiles next to creators you already know;",
            "topic communities/roundups where creators offer ads;",
            "recommendations from peers and past contractors;",
            "analytics tools and marketplaces (with manual checks).",
          ],
        },
      ],
      notes: [
        {
          title: "Link to monetization",
          text: "How creators price deals and which income models exist — in the article on creator earnings. Here the focus is the client side.",
        },
      ],
      links: [
        {
          label: "How much Instagram bloggers earn",
          href: "/en/blog/zarabotok-blogerov-instagram/",
        },
      ],
    },
    {
      title: "Marketplaces and tools",
      level: 2,
      paras: [
        "Marketplaces are handy as a shop window, but they don’t replace vetting. Platform names and analytics pricing change — read reviews and terms before you pay.",
        "Third-party profile analytics (growth, ER, anomalies) save budget: they cut fake engagement before you message anyone.",
      ],
      lists: [
        {
          intro: "On a marketplace, check right away:",
          items: [
            "whether regular posts have live comments;",
            "whether the feed looks like wall-to-wall ads;",
            "whether the creator’s tone matches the brand;",
            "whether they can report reach/clicks.",
          ],
        },
      ],
    },
    {
      title: "How to vet a profile",
      level: 2,
      paras: [
        "Open the last 15–20 posts and the Stories archive (if any): what the creator talks about, who comments, how they reply.",
      ],
      lists: [
        {
          intro: "Quality criteria:",
          items: [
            "live audience, no obvious fake engagement;",
            "video/Stories views in line with likes;",
            "tidy content, not chaos;",
            "creator and audience match the product;",
            "ads no more often than feed trust allows.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Hiring a “star” account with an irrelevant audience. A fitness blog rarely helps a lawyer without overlapping interests — even with big reach.",
        },
      ],
      tables: [
        {
          caption: "Quick candidate filter",
          headers: ["Signal", "Healthy", "Red flag"],
          rows: [
            ["Followers vs reactions", "Stable ER for the niche", "Likes exist, dialogue doesn’t"],
            ["Comments", "Different people, on topic", "Identical bots / emoji spam"],
            ["Growth", "Smooth or explainable", "Sharp steps with no reason"],
            ["Ads in the feed", "Rare, disclosed", "Every other post is an ad"],
          ],
        },
      ],
    },
    {
      title: "Who not to work with",
      level: 2,
      paras: [
        "Skip profiles with obvious fake engagement, toxic tone, scandal reputation, or zero replies to the audience.",
        "Be careful with creators who won’t share an integration brief, won’t name deadlines, and won’t agree to a measurable result.",
      ],
      lists: [],
    },
    {
      title: "Agreements and risks",
      level: 2,
      paras: [
        "Plan for missed deadlines, revisions, post deletion, comment conflict. Lock format (post / Stories / series), date, copy/banned words, and ad labeling under the law if required.",
      ],
      lists: [
        {
          intro: "Minimum in writing before payment:",
          items: [
            "brand, offer, CTA;",
            "format and number of units;",
            "draft and publish deadlines;",
            "how you measure effect;",
            "what happens in a force majeure.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram profile design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
  ],
};
