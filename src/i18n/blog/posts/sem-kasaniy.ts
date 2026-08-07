import type { BlogPost } from "../../../data/blog";

/** EN overlay for sem-kasaniy — same structure as RU JSON. */
export const semKasaniyEn: BlogPost = {
  slug: "sem-kasaniy",
  title: "The 7-touch theory: where and how to reach the audience",
  date: "2019-12-17",
  category: "Internet marketing",
  cover: "/images/blog/sem-kasaniy/cover-en.webp",
  excerpt:
    "Why one channel isn’t enough: a user’s digital day, the 7-touch hypothesis, and how to build a chain of display, search, social, and retarget to a lead — without a magical “exactly seven”.",
  lead: [
    "In a day a person touches dozens of screens: messengers, email, search, video, social, niche sites. Pure search takes a small share of online time — one “perfect” ad is often not enough for an unknown brand to be bought on the first click.",
    "The 7-touch hypothesis says: several meaningful interactions are needed before the goal action. It’s a guide, not a law of physics. Below — where to catch attention through the day and how to link channels. Who your audience is — in a separate article; here — how to reach them.",
  ],
  faq: [
    {
      q: "Is exactly 7 touches required?",
      a: "No. The number depends on check size, niche, and brand familiarity. What matters is several touches in different contexts — not a ritual of “seven banners”.",
    },
    {
      q: "How does this differ from touchpoints?",
      a: "Touchpoints map every brand contact. The 7-touch theory is the idea that a deal needs repeat contact. They work together.",
    },
    {
      q: "Is search a weak channel?",
      a: "No. Time share in search is small, but intent is high. Search often closes the deal after warming in other channels.",
    },
    {
      q: "Where to start the mix?",
      a: "With offer and tracking: UTMs, goals, retarget segments. Then 2–3 channels for the audience — not “every platform at once”.",
    },
    {
      q: "Do lookalikes work?",
      a: "As an expansion of a warm seed — yes. As the only channel without offer and landing — rarely.",
    },
    {
      q: "How do you measure synergy?",
      a: "Look at assisted conversions, paths, and CPA before/after the channel mix — not only last click in one account.",
    },
  ],
  sections: [
    {
      title: "Digital day: where people actually are",
      level: 2,
      paras: [
        "Morning — messengers, news, weather on the way. Day — email, work tabs, searching for answers. Evening — social, video, entertainment, niche sites. The picture is averaged: your audience may live differently, but the principle holds — attention is spread thin.",
        "If the brand “lives” in only one channel, you compete for a tiny window. It makes sense to show up where the audience really spends time — with a different message per context, not one banner copy-pasted everywhere.",
      ],
      lists: [
        {
          intro: "Day slices (a guide):",
          items: [
            "morning — short touches, reminder, usefulness;",
            "day — search, email, solving a task;",
            "evening — content, video, social, comparing options.",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Why one touch isn’t enough",
      level: 2,
      paras: [
        "On an unknown site from a cold ad, conversion is usually low: people need to learn the brand, compare, come back. Exceptions — cheap impulse goods and already-formed demand.",
        "Display and content raise awareness; search and retarget more often “close”. Cutting the top of the funnel over a weak last click is a common mistake — see assisted conversions.",
      ],
      links: [
        {
          label: "Assisted conversions",
          href: "/en/blog/assotsiirovannye-konversii/",
        },
      ],
    },
    {
      title: "The 7-touch hypothesis",
      level: 2,
      paras: [
        "The idea is simple: remind of yourself several times in different environments so that by choice time the brand already feels familiar. Culture likes to illustrate this with movie influence scenes — in marketing, message repetition matters more than theatrics.",
        "A touch isn’t any banner impression in stats — it’s a moment the person noticed the offer or brand: click, video view, save, visit, email. Seven “empty” impressions without attention ≠ seven funnel steps.",
      ],
      lists: [
        {
          intro: "What counts as a touch:",
          items: [
            "display/video impression or click;",
            "a social post or ad;",
            "email or push with consent;",
            "a visit from search / to the site;",
            "retarget with a new message;",
            "offline: signage, call, store visit.",
          ],
        },
      ],
      links: [
        {
          label: "Touchpoints",
          href: "/en/blog/tochki-kontakta/",
        },
        {
          label: "Hunt’s ladder",
          href: "/en/blog/lestnitsa-hanta/",
        },
      ],
    },
    {
      title: "How to build the chain in practice",
      level: 2,
      paras: [
        "Example logic (not a “copy the budget” template): display/niche sites introduce → social and content deepen interest → near-topic and brand search catch demand → retarget brings back those who left without a lead.",
        "Channel synergy often cuts CPA more than “more money in one account”: queries grow, display gets cheaper on a warmer audience, people start searching the brand themselves. Count the mix, not channels in isolation.",
      ],
      lists: [
        {
          intro: "Launch order:",
          items: [
            "audience portrait and one clear promise;",
            "a landing matched to traffic temperature;",
            "2–3 channels + retarget;",
            "consistent UTMs and goals;",
            "test length ≥ decision cycle.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "We mention social and messengers as channel types. Choosing a specific platform depends on rules and legal limits in your jurisdiction; this material is informational.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Common mistakes",
      level: 2,
      paras: [
        "The same creative on every step: cold traffic sees “buy now”, warm traffic sees the same again. No buyer exclusions. No bridge to the product after viral reach.",
        "Another mistake — counting any cookie in a segment as a touch. Watch engagement and next steps: visit, lead, repeated brand search.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "the message changes by stage;",
            "retarget doesn’t annoy with frequency;",
            "people search the brand after campaigns;",
            "you don’t cut the “top” on last click alone.",
          ],
        },
      ],
    },
  ],
  closing: [
    "7 touches is a useful frame, not dogma. Find where your audience spends the day, build a short channel chain with different messages, and measure synergy — or you’re left hoping for one “magic” click.",
  ],
  related: [
    "tselevaya-auditoriya",
    "tochki-kontakta",
    "lestnitsa-hanta",
    "assotsiirovannye-konversii",
    "istochniki-trafika",
    "retargeting",
  ],
};
