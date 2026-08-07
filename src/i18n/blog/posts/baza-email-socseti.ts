import type { BlogPost } from "../../../data/blog";

/** EN overlay for baza-email-socseti — same structure as RU JSON. */
export const bazaEmailSocsetiEn: BlogPost = {
  slug: "baza-email-socseti",
  title: "How to grow an email list from social: forms, content, and ads",
  date: "2020-01-10",
  category: "SMM",
  cover: "/images/blog/baza-email-socseti/cover-en.webp",
  excerpt:
    "How to collect newsletter subscribers from social legally: lead forms, bio links, content magnets, and ads — with consent and without outdated YouTube annotations.",
  lead: [
    "A “subscriber list” here isn’t public followers — it’s email (or messenger) with consent to message. Social brings traffic and trust; you pull the contact onto your side so you’re not tied only to the feed algorithm.",
    "Grow an email list from social with consent: forms, posts, ads, YouTube, and the site. No cold scraping of other people’s addresses and no gray-software catalogs. Site forms are covered separately.",
  ],
  faq: [
    {
      q: "How is an email list different from follower count?",
      a: "A follower sees posts in the network. An email subscriber is your channel outside the feed. You need both loops, but the metrics differ.",
    },
    {
      q: "Do you need privacy consent to collect emails?",
      a: "Yes. A consent checkbox/copy and a processing policy are a required part of the form — not optional.",
    },
    {
      q: "Can you export friends’ emails from a social network?",
      a: "Not as a strategy: ToS and law. Only opt-in via a form or the platform’s official lead ads.",
    },
    {
      q: "Do YouTube annotations still work for list building?",
      a: "Classic annotations are outdated. Use cards, end screens, the description, and a pinned comment with a link — per current YouTube tools.",
    },
    {
      q: "Does a contest always yield a quality email list?",
      a: "It often attracts prize hunters. You need rules, anti-fraud, and segmentation: who came for a gift vs for value.",
    },
  ],
  sections: [
    {
      title: "Why move the contact out of the feed",
      level: 2,
      paras: [
        "Algorithms cut reach; email and your own bot stay channels you control more tightly.",
        "An email offer can go deeper than a post: a guide, price list, webinar recording — in exchange for email.",
        "Count not only address volume, but opens/clicks and sales from the segment.",
      ],
      links: [
        {
          label: "Capture forms on the site",
          href: "/en/blog/formy-zahvata/",
        },
      ],
    },
    {
      title: "Forms on social pages",
      level: 2,
      paras: [
        "Where the platform still offers lead forms or tabs — connect the official mailing / Ads tool, not a homemade bypass.",
        "Outdated Facebook “Static HTML” tabs from 2019 guides may be gone: check current Business Suite.",
        "Minimal fields + clear value (“a checklist once a week”) beats a long “just in case” survey.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          paras: [
            "Don’t promise a newsletter if you have no email handling and unsubscribe process — that hits domain reputation.",
          ],
        },
      ],
    },
    {
      title: "Links in bio and posts",
      level: 2,
      paras: [
        "In bio / community description — a short link to a subscribe landing with UTM.",
        "In posts and Stories remind that email has what the feed doesn’t: breakdowns, closed notes, early access.",
        "For Instagram see the link map: header, Stories, buttons.",
      ],
      links: [
        {
          label: "Links in Instagram",
          href: "/en/blog/ssylki-v-instagram/",
        },
      ],
    },
    {
      title: "Ads toward subscribe",
      level: 2,
      paras: [
        "Meta/VK and other paid social with a leads / traffic-to-form goal. Show warm audiences (followers, retargeting), not only broad cold.",
        "Frequency cap: 3–5 touches without conversion — reason to change creative, not increase pressure.",
        "Creative should show the email’s value, not a stock “office in suits.”",
      ],
    },
    {
      title: "Content, contests, YouTube",
      level: 2,
      paras: [
        "Content magnet: PDF, template, live recording — for email. The topic should match what people already watch from you.",
        "Contests: clear rules, bot checks, a separate “came for the prize” segment.",
        "YouTube: link in description, cards/end screen, pin — instead of dead 2015 annotations.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A list = consent + value, not scraping.",
        "One subscribe landing + UTM across all networks.",
        "Email quality beats a race for volume.",
      ],
    },
  ],
  closing: [
    "Build one landing with a form and consent, put it in every network bio, and run the “what’s not in the feed” offer in two posts/Stories — the list grows faster than a zoo of outdated tabs.",
  ],
  related: [
    "formy-zahvata",
    "ssylki-v-instagram",
    "parsing-email",
    "facebook-ads",
    "oshibki-smm",
    "avtovoronka",
  ],
};
