import type { BlogPost } from "../../../data/blog";

/** EN overlay for retargeting-meta — same structure as RU JSON. */
export const retargetingMetaEn: BlogPost = {
  slug: "retargeting-meta",
  title: "Retargeting on Instagram and Facebook: audience types",
  date: "2020-01-13",
  category: "Digital marketing",
  cover: "/images/blog/retargeting-meta/cover-en.webp",
  excerpt:
    "Custom audiences for retargeting: site visitors, customer lists, and Instagram / Facebook engagement — how segments work, without an outdated Ads Manager click-path.",
  lead: [
    "Social retargeting leans on warm segments: people who already visited the site, sit in your CRM, or engaged with content. In the Instagram and Facebook ecosystem those groups were historically called custom audiences.",
    "Ads account UIs change. Below: audience-type logic and sensible setup — not clicks on outdated screenshots. The general retargeting foundation is in a separate article. This piece is informational and does not urge use of Meta platforms.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "How does this differ from ordinary retargeting?",
      a: "Same idea: bring back people you already know. The difference is the signal source — site pixel/tag, list upload, in-account engagement events — not only Metrica or display networks.",
    },
    {
      q: "Do I need a pixel on the site?",
      a: "For a “visited the site” segment — yes: without a visit or cart event the audience is empty. For a customer list or account engagement a pixel is not required.",
    },
    {
      q: "Can I upload a customer list?",
      a: "In account logic — yes, with a lawful basis and consent. In practice data quality, platform hashing rules, and excluding buyers from chase campaigns matter.",
    },
    {
      q: "What’s stronger: 3 seconds of video or 95% watched?",
      a: "Deeper watch = narrower and warmer segment. A wide threshold gives volume; a tight one gives quality. Test both and watch CPA — not gut feel.",
    },
    {
      q: "Why not copy old Ads Manager screenshots?",
      a: "Menus and tab names update. Focus on audience source type and events — not “button on the left → third icon.”",
    },
    {
      q: "Does this connect to search ads and SEO?",
      a: "Directly — no. Indirectly: the same landings, offer, and conversion exclusions affect any retarget. General theory is in the retargeting article.",
    },
  ],
  sections: [
    {
      title: "Why custom audiences",
      level: 2,
      paras: [
        "Cold reach is more expensive to convert. “Already touched” segments let you remind about a cart, promo, or unfinished form — with creative matched to the funnel stage.",
        "Typical signals: visit and site actions, lead form without submit, video view, post reactions. Retarget does not replace product quality and checkout convenience.",
      ],
      lists: [
        {
          intro: "Three working segment families:",
          items: [
            "site visitors (and events: view, cart, lead)",
            "your customers and lookalikes (lists / lookalike logic)",
            "engagement in Instagram and Facebook accounts",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting: the base",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Site visitors",
      level: 2,
      paras: [
        "The segment is built from counter events: all visits in N days, specific URL views, add to cart, checkout start. The narrower the event, the more relevant the offer.",
        "It makes sense to remind about an abandoned cart, promo deadline, or free shipping — if that is true for the segment. Exclude buyers and hard refusals, or the brand chases for nothing.",
      ],
      lists: [
        {
          intro: "What to watch when building:",
          items: [
            "lookback window (often 7–30 days, rarely longer)",
            "frequency caps — so you don’t annoy",
            "separate creatives per stage",
            "exclude conversions and staff",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Without a correct tag install and consent for data processing the segment is either empty or legally risky. Measurement and policy first — then the campaign.",
        },
      ],
    },
    {
      title: "Customers and lookalike audiences",
      level: 2,
      paras: [
        "A CRM list (email, phone — in the format the account accepts) gives an “already bought / left a contact” segment. Use it for upsell, reactivation, or as a seed for lookalikes.",
        "Lookalikes are not magic — they are a statistical expansion from seed traits. Seed quality beats size: a junk list yields expensive noise.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "separate payers from mere leads",
            "refresh exports",
            "don’t mix different products in one seed",
            "count segment CPA, not only reach",
          ],
        },
      ],
    },
    {
      title: "Engagement on Instagram and Facebook",
      level: 2,
      paras: [
        "A separate class — people who watched video, opened a profile, reacted to posts, started a lead form, or marked interest in an event. An interest signal without a site visit.",
        "For video, compare short views vs deep ones (50%+ / full watch): volume vs temperature. For forms — opened vs completed; for events — page view vs “going.”",
      ],
      lists: [
        {
          intro: "Typical engagement sources:",
          items: [
            "video views by time or percent threshold",
            "profile and content interactions",
            "lead forms (started / completed)",
            "interest in an event / ticket",
          ],
        },
      ],
    },
    {
      title: "How not to break the campaign",
      level: 2,
      paras: [
        "One creative for all warm people is a common mistake. Cart, bare visit, and video completion need different messages. Frequency and segment lifetime limit burnout.",
        "Don’t confuse audience setup with campaign objective: the segment answers “who,” creative and offer answer “why come back.” Legal limits on platforms in Russia are separate from marketing logic.",
      ],
      links: [
        {
          label: "Holiday retargeting",
          href: "/en/blog/prazdnichnyy-retargeting/",
        },
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
  ],
  closing: [
    "Instagram and Facebook retarget rests on three pillars: site events, quality lists, and account engagement. Build tight segments, exclude conversions, refresh creatives — without chasing outdated Ads Manager clicks.",
  ],
  related: [
    "retargeting",
    "prazdnichnyy-retargeting",
    "tselevaya-auditoriya",
    "reklama-instagram",
    "utm-metki",
    "optimizatsiya-konversii",
  ],
};
