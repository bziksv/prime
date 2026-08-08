import type { BlogPost } from "../../../data/blog";

/** EN overlay for minusinsk — same structure as RU JSON. */
export const minusinskEn: BlogPost = {
  slug: "minusinsk",
  title: "Yandex Minusinsk: the filter for bought links",
  date: "2017-04-25",
  category: "SEO",
  cover: "/images/blog/minusinsk/cover-en.webp",
  excerpt:
    "What the Minusinsk algorithm is: sanctions for low-quality link spam, how to suspect a problem, what to do with junk backlinks, and how it differs from text filters like Baden-Baden.",
  lead: [
    "Minusinsk was a Yandex wave against manipulative link spam: cheap submissions and “links for rankings” packs hurt positions more than they helped. The announcement is tied to 2015; donor-quality logic hasn’t disappeared since.",
    "Below: what was punished, how to tell a link hit from seasonality, and what to do without gray-hat “removal schemes.” Broader drop diagnosis is in the filters piece; buying links is a separate risk article.",
  ],
  faq: [
    {
      q: "Does Minusinsk still turn on in batches?",
      a: "The name is historical. Yandex weighs link spam continuously. Don’t wait for a wave calendar as the only lever.",
    },
    {
      q: "How is it different from Baden-Baden?",
      a: "Minusinsk is about links. Baden-Baden is about over-optimized text.",
    },
    {
      q: "Are sanctions based on link count alone?",
      a: "More for quality and unnatural mass — not for “few/many” by itself.",
    },
    {
      q: "Am I banned forever?",
      a: "Usually not: after cleaning the profile and a recrawl, rankings can return. Timeline — months, not days. Don’t promise a page-one date.",
    },
    {
      q: "Will buying even more links help?",
      a: "Often makes it worse. First remove controllable junk and strengthen content/tech.",
    },
    {
      q: "Is a Disavow file required?",
      a: "Selectively and deliberately if there’s clear spam outside your control. Mass disavow “just in case” hurts.",
    },
    {
      q: "How do I check the backlink profile?",
      a: "Webmaster plus Ahrefs/Serpstat/analog exports: donors, anchors, dynamics. See the backlink profile article.",
    },
  ],
  sections: [
    {
      title: "Why Minusinsk existed",
      level: 2,
      paras: [
        "While links stayed a strong signal, the market flooded with exchanges and submission runs. Yandex answered harder on sold and irrelevant mass.",
        "Not only small sites got hit: large projects with aggressive buying suffered too. A count of “trusted” links didn’t save weak quality.",
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Buying links: risks",
          href: "/en/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "How to suspect a problem",
      level: 2,
      paras: [
        "A sharp drop in the commercial keyword set with stable demand, Webmaster messages, a spike of toxic donors in reports — reasons to audit links.",
        "Separate season, a site rebuild, and a technical failure. Not every ranking drop is Minusinsk.",
      ],
      lists: [
        {
          intro: "Quick diagnosis:",
          items: [
            "drop date vs buying/submission history",
            "demand in Wordstat year over year",
            "Webmaster: security and quality",
            "a slice of donors and anchors",
          ],
        },
      ],
      links: [
        {
          label: "Backlink profile analysis",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "What to do",
      level: 2,
      paras: [
        "Stop growing junk. Remove what you control: your own networks, exchange packs, contractual placements on drops.",
        "Next — a natural profile: relevant donors, moderate anchors, content and PR instead of “N links a day.”",
        "Wait for recrawl for months; monitor the keyword set. “Remove the filter in a week” is gray-service marketing, not a method.",
      ],
      links: [
        {
          label: "Link types",
          href: "/en/blog/tipy-ssylok/",
        },
        {
          label: "Baden-Baden and copy",
          href: "/en/blog/baden-baden/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Minusinsk 2015+ is a historical name for link sanctions. Check current rules in Yandex Help. Don’t use this piece as a guide to manipulation or a bypass.",
  },
  closing: [
    "If you recently bought packs or ran submissions — first clean controllable junk and check the profile in Webmaster; that sits closer to Minusinsk logic than another cheap link batch.",
  ],
  related: [
    "filtry-poiskovikov",
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "tipy-ssylok",
    "baden-baden",
    "negativnoe-seo",
  ],
};
