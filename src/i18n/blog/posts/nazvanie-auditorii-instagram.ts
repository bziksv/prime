import type { BlogPost } from "../../../data/blog";

/** EN overlay for nazvanie-auditorii-instagram — same structure as RU JSON. */
export const nazvanieAuditoriiInstagramEn: BlogPost = {
  slug: "nazvanie-auditorii-instagram",
  title: "Audience name in Instagram Ads: how to label segments",
  date: "2020-04-27",
  category: "SMM",
  cover: "/images/blog/nazvanie-auditorii-instagram/cover-en.webp",
  excerpt:
    "Why the internal audience name in Instagram/Meta promotion matters, how to name segments for tests, and how it differs from the public profile name.",
  lead: [
    "The Audience name field in Promote or Ads Manager is visible only to the account team: it’s a label for a saved segment (geo, age, interests, custom lists), not the page name followers see.",
    "Below: why to name audiences systematically, which parameters sit next to the name, and what not to expect from “creative” slogan labels. Menu items change; check Meta Help. Disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "Who can see the audience name?",
      a: "Usually only you and colleagues with ad account access. Followers don’t see it in the feed.",
    },
    {
      q: "Can you name an audience with a brand slogan?",
      a: "You can, but it’s useless for tracking: better a scheme like “geo · interest · goal · date” so you know a month later what you tested.",
    },
    {
      q: "Is this the same as the Instagram profile name?",
      a: "No. Name/@handle are public. Audience name is an internal ads label.",
    },
    {
      q: "Do you need a separate business account?",
      a: "For steady ads — a professional profile and access to ads / Accounts Center. Exact path — in Meta Help.",
    },
    {
      q: "Will mass-liking grow a real audience?",
      a: "Not as a strategy: risk of limits. Ad audiences are built with interests, retargeting, and custom lists under account rules.",
    },
  ],
  sections: [
    {
      title: "What this field is",
      level: 2,
      paras: [
        "When setting up post promotion or an ad, you save a set of filters: geography, age, gender, interests, sometimes a radius around an address or a site for retargeting.",
        "“Audience name” labels that set so you don’t mix “Moscow 25–34 interest A” with “NYC lookalike customers.”",
        "Slogans like “Let’s connect” for a phone store are cute, but reports a month later won’t say how the segment differed.",
      ],
      links: [
        {
          label: "Promote / boost on Instagram",
          href: "/en/blog/promo-instagram/",
        },
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "How to name: a working scheme",
      level: 2,
      paras: [
        "Keep a short template: product or offer · geo · age · interest/source · campaign goal · date or test number.",
        "Example: `Sneakers · NYC+NJ · 25-40 · running · traffic · 2026-04`. In the saved-audiences list you see the hypothesis at a glance.",
        "One segment — one name. Don’t reuse a label after changing interests: analytics will lie.",
      ],
      lists: [
        {
          intro: "Useful tags in the name:",
          items: [
            "cold / warm / retarget",
            "interests vs lookalike vs CRM customers",
            "A/B creative variant if the audience is shared",
            "exclusions (minus buyers) — short at the end",
          ],
        },
      ],
    },
    {
      title: "What you fill next to the name",
      level: 2,
      paras: [
        "Locations: cities and regions for delivery. For offline, sometimes a radius around a point — if the option exists.",
        "Interests and behavior: pick close to the offer, not “everything for reach.”",
        "Age and gender — by real audience, not “18–65 just in case” if the product is narrow.",
        "The action button (call, directions, website) belongs to the ad/promo, not the audience name — but it should match the segment goal.",
      ],
      notes: [
        {
          kind: "tip",
          title: "UI",
          text: "In the app the path is often shorter (Promote); in Ads Manager there are more fields and saved audiences. Naming logic is the same.",
        },
      ],
    },
    {
      title: "Link to campaign goal",
      level: 2,
      paras: [
        "The name should reflect the job: messages, visits, sales, reach. Otherwise the team optimizes the wrong audience.",
        "For a test keep budget and duration separate; in the name a hypothesis number (`H1`, `H2`) is enough.",
        "After the test archive or mark `paused` / `winner` in the name — easier than remembering “that blue one.”",
      ],
    },
    {
      title: "What to avoid",
      level: 2,
      paras: [
        "Mass-like / mass-follow automation “for the ad account” is not a way to build an audience and risks the account.",
        "Bought “competitor audience” lists instead of official consented lists — ToS and privacy territory; see the audience-parsing piece.",
        "Outdated “likes-per-hour limits” from old guides don’t replace Meta ads policy — follow current advertising rules.",
      ],
      links: [
        {
          label: "Audience parsing: risks",
          href: "/en/blog/parsing-auditorii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Audience name is an internal segment label, not a storefront brand.",
        "Name so that a month later geo, source, and goal are obvious.",
        "Segment and offer quality beat a creative slogan in the Name field.",
      ],
    },
  ],
  closing: [
    "Before the next Promote, write the naming template in team notes and save 2–3 clean segments for different hypotheses — reports then read without decoding.",
  ],
  related: [
    "promo-instagram",
    "reklama-instagram",
    "biznes-akkaunt-instagram",
    "parsing-auditorii",
    "tselevaya-auditoriya",
    "retargeting-meta",
  ],
};
