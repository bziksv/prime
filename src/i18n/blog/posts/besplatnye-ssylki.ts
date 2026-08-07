import type { BlogPost } from "../../../data/blog";

/** EN overlay for besplatnye-ssylki — same structure as RU JSON. */
export const besplatnyeSsylkiEn: BlogPost = {
  slug: "besplatnye-ssylki",
  title: "Free links to your site: where to get them without gray schemes",
  date: "2019-03-21",
  category: "SEO",
  cover: "/images/blog/besplatnye-ssylki/cover-en.webp",
  excerpt:
    "Where free mentions and links really come from: content, directories, crowd, guest posts, reviews — and which tactics are better left alone.",
  lead: [
    "“Free links” usually means no media budget: time on content, partnerships, and careful mentions. Off-site SEO’s goal is a natural profile — not a pile of links at any cost and not a TOP promise in a week.",
    "“Free links” means earned mentions and careful citations — not schemes, mass directory blasts, or fake forum accounts. Those burn filters and reputation. Start with useful content and honest outreach.",
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
      q: "Do link directories still work?",
      a: "Narrow industry and local ones — sometimes for navigation and NAP. Mass “blasts” and auto-submit — almost always harmful.",
    },
    {
      q: "Can you post a question and answer from two forum accounts?",
      a: "No: that’s deceiving the community. Write one honest useful reply under your own name.",
    },
    {
      q: "What about “you link me, I link you” exchanges?",
      a: "Mass mutual exchange is weak and easy to spot. Prefer one-way natural mentions earned by usefulness.",
    },
    {
      q: "Where should you start with free backlinks?",
      a: "With strong content on your site, then guest/media, crowd in live threads, honest directories and reviews.",
    },
    {
      q: "How is this different from link-profile analysis?",
      a: "That piece covers how to read backlinks you already have. This piece covers where to earn new ones without gray schemes.",
    },
  ],
  sections: [
    {
      title: "Content first, link building second",
      level: 2,
      paras: [
        "Useful materials people save and cite are the most natural free-link source. Without that, directories and comments give little lasting effect.",
        "Competitor analysis (Ahrefs, Semrush, and peers) helps see donor types in the niche — as hypotheses, not a “copy one-to-one” list including their spam.",
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
        "Industry and regional company directories fit when the site is alive and rules are clear. Register honestly: current NAP, a normal description.",
        "Weigh a “required reciprocal link to the directory” condition: don’t give equity to everyone. Don’t remove a promised link after approval — that’s deceit.",
        "Automatic blasts across hundreds of directories are almost guaranteed toxic.",
      ],
    },
    {
      title: "Forums, social, comments",
      level: 2,
      paras: [
        "On forums and in Q&A, a substantive answer is valued. A link only if it truly helps; one account — no staged “please advise / here’s my site.”",
        "On social and in communities — a useful post and shares per platform rules, not mass spam “very useful site.”",
        "Comments on others’ articles: add value, not an ad block. Moderators may cut the link — that’s normal.",
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
          text: "Two accounts for “question–answer,” removing a reciprocal directory link after approval, daily thread spam — we don’t use these.",
        },
      ],
    },
    {
      title: "Reviews, roundups, guest posts, partners",
      level: 2,
      paras: [
        "Review sites and business listings — by platform rules and with real experience. Bought fakes hit reputation.",
        "Reviews: product to a blogger/editor with a clear agreement and labeling if it’s advertising. Not a “gift for a hidden link.”",
        "Guest articles and posts with friends/partners who have live sites beat mutual-exchange markets. More in the guest-post and free article placement pieces.",
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
        "Reaching TOP for a commercial core is planned over months of work (tech, content, and links together) — typically 2–6 months after work starts — not a week of free links.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "content and audience beat URL count;",
            "directories — selective, no blasts;",
            "crowd — honest answers;",
            "no fake accounts or mutual spam;",
            "pace without sharp spikes.",
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
