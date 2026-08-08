import type { BlogPost } from "../../../data/blog";

/** EN overlay for biznes-v-instagram — same structure as RU JSON. */
export const biznesVInstagramEn: BlogPost = {
  slug: "biznes-v-instagram",
  title: "Business on Instagram: how to run and grow a project",
  date: "2021-06-17",
  category: "SMM",
  cover: "/images/blog/biznes-v-instagram/cover-en.webp",
  excerpt:
    "What makes promoting a business on Instagram different: visual focus, niches, content, and conversation — without a catalog of outdated SMM tools or the “30 hashtags” myth.",
  lead: [
    "Instagram is a visual storefront: first the frame and a short idea, then the caption. Business here is built on consistent content, a clear offer in the bio, and real conversation with the audience.",
    "Below: how the platform differs from text-heavy social networks, which niches show better in pictures, and how to run the project. Account-type setup lives in the separate business-profile article.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is for information only and is not an invitation to use the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is this different from the business-account article?",
      a: "That one covers profile type, insights, contacts. This one is the running strategy: content, niches, engagement. Read both.",
    },
    {
      q: "Are 11–30 hashtags required?",
      a: "No. A few relevant ones beat a spam sheet. Tag rules and effectiveness have changed.",
    },
    {
      q: "Which businesses work better?",
      a: "Ones you can show well visually: food, fashion, beauty, interior, travel, services with visual before/after. B2B can work too — via process and expertise in frames.",
    },
    {
      q: "Do you need auto-posting tools?",
      a: "A scheduler helps with rhythm. Don’t hand your password to shady services — stick to official or trusted tools.",
    },
    {
      q: "Are paid ads required from day one?",
      a: "No. First nail the offer, the grid, and 15–30 content pieces. Paid ads amplify what’s already clear in organic.",
    },
  ],
  sections: [
    {
      title: "What makes the platform different",
      level: 2,
      paras: [
        "Unlike feeds where a post is a long text, here photos, carousels, short clips, and Stories decide. Text is caption and CTA, not a wall of copy.",
        "Ads and paid placements look closer to native content — but only if the creative is honest and matches the profile style.",
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
        {
          label: "Page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Niches and a visual offer",
      level: 2,
      paras: [
        "Products and services that sell with the eyes look stronger: food, apparel, beauty, décor, travel, pet services, renovation with before/after.",
        "If the product is complex — show results, team, process, and case frames, not only a price list in text.",
      ],
    },
    {
      title: "A running system, not one-off posts",
      level: 2,
      paras: [
        "Fill the bio: who you are, for whom, how to contact. Keep a content plan: value / social proof / offer / behind the scenes.",
        "Reply to comments and messages, including fair negative feedback. Contests and promos — in moderation, with clear rules.",
      ],
      lists: [
        {
          intro: "Working minimum:",
          items: [
            "one visual style",
            "rubrics and frequency without spam",
            "CTAs in captions and Stories",
            "weekly insights review",
            "link to site / messenger / CRM",
          ],
        },
      ],
      links: [
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "Tools without a zoo",
      level: 2,
      paras: [
        "A photo/video editor, a scheduler, and built-in insights are enough. “10 SMM tools of 2021” catalogs age fast and often bring access risk.",
        "Add targeting and collaborations when the offer and landing path are clear (Direct, site, messenger).",
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "The first hours after publish often peak reactions — but a steady weekly rhythm beats hunting the “perfect hour.”",
        },
      ],
      links: [
        {
          label: "Instagram insights",
          href: "/en/blog/statistika-instagram/",
        },
        {
          label: "Instagram carousel",
          href: "/en/blog/karusel-instagram/",
        },
      ],
    },
  ],
};
