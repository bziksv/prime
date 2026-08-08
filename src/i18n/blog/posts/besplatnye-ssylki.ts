import type { BlogPost } from "../../../data/blog";

/** EN overlay for besplatnye-ssylki — same structure as RU JSON. */
export const besplatnyeSsylkiEn: BlogPost = {
  slug: "besplatnye-ssylki",
  title: "Free links to your site: where to get them without gray schemes",
  date: "2019-03-21",
  category: "Content marketing",
  cover: "/images/blog/besplatnye-ssylki/cover-en.webp",
  excerpt:
    "Where free mentions and links really come from: content, directories, crowd, guest posts, reviews — and which tactics are better left alone.",
  lead: [
    "“Free links” usually means no media budget: time on content, partnerships, and careful mentions. Off-site SEO aims at a natural profile — not a pile of links at any cost, and not a page-one promise in a week.",
    "Below: workable sources and clear boundaries. We do not cover link schemes, mass directory blasts, fake forum accounts, or tricking moderators — those risk filters and reputation.",
  ],
  faq: [
    {
      q: "Are there backlinks with truly zero cost?",
      a: "Money may be zero; time and material quality always cost something. One strong article often beats a dozen weak registrations.",
    },
    {
      q: "Do you need a daily “N links a day” schedule?",
      a: "No. Rare relevant mentions beat steady spam. Sharp mass spikes are a risk.",
    },
    {
      q: "Do directories still work?",
      a: "Narrow industry and local ones — sometimes for navigation and NAP. Mass “blasts” and auto-submit — almost always harmful.",
    },
    {
      q: "Can you post a question and answer from two forum accounts?",
      a: "No — that deceives the community. Write one honest, useful reply under your own name.",
    },
    {
      q: "What about “you link me, I link you” exchanges?",
      a: "Mass mutual exchange is weak and easy to spot. Prefer one-way natural mentions earned by usefulness.",
    },
    {
      q: "Where should you start?",
      a: "With strong content on your site, then guest or media placements, crowd in live threads, honest directories and reviews.",
    },
    {
      q: "How is this different from link-profile analysis?",
      a: "That piece covers how to read backlinks you already have. This one covers where to earn new ones without gray schemes.",
    },
  ],
  sections: [
    {
      title: "Content first, link building second",
      level: 2,
      paras: [
        "Useful materials people save and cite are the most natural free-link source. Without that, directories and comments give little lasting effect.",
        "Competitor analysis (Ahrefs, Semrush, and peers) helps see donor types in the niche — as hypotheses, not a “copy one-to-one” list that includes their spam.",
      ],
      links: [
        {
          label: "Link profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
        {
          label: "Content promotion ideas",
          href: "/en/blog/idei-kontent-prodvizheniya/",
        },
      ],
    },
    {
      title: "Directories and aggregators — selectively",
      level: 2,
      paras: [
        "Industry and regional company directories fit when the platform is alive and rules are clear. Register honestly: current NAP, a normal description.",
        "Weigh a “required reciprocal link to the directory” condition: do not give equity to everyone. Do not remove a promised link after approval — that is deceit.",
        "Automatic blasts across hundreds of directories are almost guaranteed toxic.",
      ],
    },
    {
      title: "Forums, social, comments",
      level: 2,
      paras: [
        "On forums and in Q&A, a substantive answer is valued. Add a link only if it truly helps; one account — no staged “please advise / here’s my site.”",
        "On social and in communities — a useful post and shares per platform rules, not mass spam saying “very useful site.”",
        "Comments on others’ articles: add value, not an ad block. Moderators may cut the link — that is normal.",
      ],
      links: [
        {
          label: "Crowd marketing",
          href: "/en/blog/kraud-marketing/",
        },
        {
          label: "Forum links",
          href: "/en/blog/ssylki-na-forumah/",
        },
      ],
      notes: [
        {
          title: "Banned tactics from old guides",
          kind: "tip",
          text: "Two accounts for “question–answer,” removing a reciprocal directory link after approval, daily thread spam — leave those alone.",
        },
      ],
    },
    {
      title: "Reviews, roundups, guest posts, partners",
      level: 2,
      paras: [
        "Review sites and business listings — by platform rules and with real experience. Bought fakes hit reputation.",
        "Product reviews for a blogger or editor need a clear agreement and labeling if it is advertising — not a “gift for a hidden link.”",
        "Guest articles and posts with friends or partners who have live sites beat mutual-exchange markets. More in the guest-post and free article placement pieces.",
      ],
      links: [
        {
          label: "Guest post",
          href: "/en/blog/gostevoy-post/",
        },
        {
          label: "Free article placement",
          href: "/en/blog/besplatnoe-razmeshchenie-statey/",
        },
      ],
    },
    {
      title: "Pace and profile",
      level: 2,
      paras: [
        "Grow mentions gradually — no spikes “for the report.” Keep donor-type diversity.",
        "Growing a commercial query core in the results is planned over months of work (tech, content, and links together) — typically 2–6 months after work starts — not a week of free links.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "content and audience beat URL count",
            "directories — selective, no blasts",
            "crowd — honest answers",
            "no fake accounts or mutual spam",
            "pace without sharp spikes",
          ],
        },
      ],
    },
  ],
  closing: [
    "Pick one channel for a month (guest post, industry directory, or crowd in two live threads) and finish it — clearer than spraying “10 links a day.”",
  ],
  related: [
    "gostevoy-post",
    "besplatnoe-razmeshchenie-statey",
    "kraud-marketing",
    "ssylki-na-forumah",
    "ssylochnyy-profil",
    "idei-kontent-prodvizheniya",
  ],
};
