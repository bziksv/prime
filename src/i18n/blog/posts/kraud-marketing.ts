import type { BlogPost } from "../../../data/blog";

/** EN overlay for kraud-marketing — same structure as RU JSON. */
export const kraudMarketingEn: BlogPost = {
  slug: "kraud-marketing",
  title: "Crowd marketing: what it is and how it affects SEO",
  date: "2018-03-06",
  category: "Internet marketing",
  cover: "/images/blog/kraud-marketing/cover-en.webp",
  excerpt:
    "Crowd marketing is joining discussions on forums, review sites, and Q&A: useful answers, fitting mentions, spam risks. How it ties to SEO and how it differs from outreach.",
  lead: [
    "Crowd marketing means working in communities where people already ask and advise: forums, review sites, Q&A, niche groups. The goal is to help with the task and, if needed, mention the product — not flood a thread with links.",
    "Below — goals, choosing platforms, and careful link formats. This isn’t a “new magic TOP technology” and doesn’t replace content on your own site. Mass paid reviews and hidden ads hurt reputation and platform rules.",
  ],
  faq: [
    {
      q: "How does crowd differ from outreach?",
      a: "Outreach is emailing an editor/blog for a piece. Crowd is answering in live discussions. They often complement each other.",
    },
    {
      q: "How is it different from “forum links”?",
      a: "Forums are one crowd channel. Crowd is wider: reviews, Q&A, social communities, sometimes marketplaces.",
    },
    {
      q: "Will crowd links lift you into TOP in a month?",
      a: "We don’t promise that. Targeted visits and brand mentions — yes. Core visibility takes planned months of systemic work — not a batch of comments.",
    },
    {
      q: "Do you need dofollow at any cost?",
      a: "No. Links are often nofollow. Value is audience and trust; “link equity” is secondary.",
    },
    {
      q: "Can you buy review packs?",
      a: "Bad idea: removals, platform claims, brand damage. Better real service and honest replies.",
    },
  ],
  sections: [
    {
      title: "Goals and when crowd fits",
      level: 2,
      paras: [
        "Typical goals: brand presence in niche discussions, qualified clicks, natural mentions, reputation support. SEO effect is side and unstable without a strong site and demand.",
        "It works better where people read others’ experience before buying (complex choice, mid ticket) than for impulse micro-purchases. Premium with a narrow audience often fits PR and outreach better.",
        "Work frame: audience → live platforms → real pains → tone → KPI (post survival, clicks, inquiries) → an expert executor, not “100 comments a day”.",
        "Pattern: find a thread with a problem → answer on substance → link only if it truly helps. An account with activity history passes moderation better than a fresh spam profile.",
      ],
      lists: [
        {
          intro: "Crowd helps if:",
          items: [
            "you have something useful to say — not only a URL;",
            "the platform is alive and in your niche;",
            "you’re ready to answer follow-ups;",
            "you don’t mask ads as a “neutral tip” against the rules.",
          ],
        },
      ],
      links: [
        {
          label: "Forum links",
          href: "/en/blog/ssylki-na-forumah/",
        },
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
      ],
    },
    {
      title: "Platforms and links without spam",
      level: 2,
      paras: [
        "Review sites (iRecommend, Flamp, Tripadvisor and peers) — about customer experience; faking reviews is risky. Forums — for expert answers. Social communities — with platform rules and local regulation in mind.",
        "Q&A: some older services closed or changed; look for current niche question platforms. An “intriguing” question just for a link with no value is spam.",
        "Marketplaces and price comparisons are more a seller card/review than a classic crowd comment; follow platform rules.",
        "On links: brand and naked anchors feel more natural than a commercial keyword in every post. UTM — if moderation allows (often strips it). A text mention without a clickable link can still help. nofollow/noindex on the platform is normal, not a “bypass”. Links to authoritative sources next to your tip raise moderator trust.",
        "Anti-link-spam algorithms (historically Penguin, Minusinsk and successors) hit manipulation; “naked anchors will save you from a filter for 2 months” is an outdated myth. Crowd’s main cost is time: without niche study and a live tone, results stay weak.",
      ],
      links: [
        {
          label: "SERM",
          href: "/en/blog/serm/",
        },
        {
          label: "Buying links",
          href: "/en/blog/pokupka-ssylok/",
        },
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
  ],
  related: [
    "ssylki-na-forumah",
    "autrich",
    "serm",
    "pokupka-ssylok",
    "otzyvy-dlya-prodazh",
  ],
};
