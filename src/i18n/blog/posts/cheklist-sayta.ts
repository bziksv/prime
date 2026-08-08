import type { BlogPost } from "../../../data/blog";

/** EN overlay for cheklist-sayta — same structure as RU JSON. */
export const cheklistSaytaEn: BlogPost = {
  slug: "cheklist-sayta",
  title: "Website checklist: must-haves before launch and audit",
  date: "2018-09-24",
  category: "Websites",
  cover: "/images/blog/cheklist-sayta/cover-en.webp",
  excerpt:
    "Speed, HTTPS, clean URLs, 404 pages, responsive layout, contacts, offer, forms, reviews, privacy policy, and other blocks — a practical checklist without “50 items or failure” panic.",
  lead: [
    "Small-business sites differ, but a base set repeats: the site must load fast, make sense on a phone, build trust, and lead to action.",
    "Below: a grouped checklist (tech, brand, trust, content, conversion). Not everything from long 2018 lists is critical today (social widgets — only if you need them), and “doomed without item #37” is hyperbole: prioritize what breaks leads and SEO.",
  ],
  faq: [
    {
      q: "Do I need all 50 items at once?",
      a: "No. First cover speed, mobile, contacts, offer, and forms. The rest depends on the business model.",
    },
    {
      q: "Is SSL required?",
      a: "Yes for forms, payment, and trust. Without HTTPS, modern browsers and search treat the site worse.",
    },
    {
      q: "Is a privacy policy required?",
      a: "If you collect personal data — yes. Plus clear consent in forms.",
    },
    {
      q: "Do I need Share buttons and social widgets?",
      a: "Optional. Messenger, phone, and a working CTA matter more than a row of icons for show.",
    },
    {
      q: "Do I need a cookie banner for every visitor?",
      a: "It depends on your audience and the metrics or ads you use. For EU/UK audiences and some scenarios — yes; confirm with counsel.",
    },
    {
      q: "Where should I start auditing an old site?",
      a: "Mobile UX, speed, broken links and 404s, contacts, and whether landings still match your ads.",
    },
  ],
  sections: [
    {
      title: "Tech and navigation",
      level: 2,
      paras: [
        "Speed and stable hosting affect bounce and indexation. HTTPS protects data exchange. Clean URLs are easier to read and share.",
        "XML and HTML sitemaps plus a thoughtful 404 page return people into the structure. Responsive layout is required: the site must work on a smartphone — not as a compressed desktop.",
      ],
      lists: [
        {
          intro: "Tech minimum:",
          items: [
            "acceptable mobile speed",
            "HTTPS",
            "readable URLs",
            "sitemap and robots in order",
            "a useful 404 page",
            "responsive layout",
          ],
        },
      ],
      links: [
        {
          label: "Responsive website",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Outdated website",
          href: "/en/blog/ustarevshiy-sayt/",
        },
      ],
    },
    {
      title: "Brand, trust, and contacts",
      level: 2,
      paras: [
        "One visual system, logo, tidy palette, and your own quality images (no other people’s watermarks) support recognition.",
        "Trust: About, address, map, entrance photo, hours, phone, email, contact form, privacy policy, and terms. For offline — how to find the door; for online — how to reach you fast.",
        "Legal blocks (terms, copyright, affiliate disclosures) — by need and industry, not everything from the checklist at once.",
      ],
      lists: [
        {
          intro: "Contacts in view:",
          items: [
            "phone and messenger",
            "email or form",
            "address and map for an offline location",
            "business hours",
          ],
        },
      ],
      links: [
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
        {
          label: "Lead-capture forms",
          href: "/en/blog/formy-zahvata/",
        },
      ],
    },
    {
      title: "Content and conversion",
      level: 2,
      paras: [
        "Home with a clear offer, understandable menu, landings for ads and demand, a services or catalog page, USP, and site search for a large assortment.",
        "Social proof: reviews, awards, “press about us” — only real ones. FAQ, guides, blog, and video — if they answer audience questions.",
        "CTA: one clear action button beats a scatter. Chat and subscribe — if someone replies and the email has value. Don’t replace a lead with a dozen widgets.",
      ],
      notes: [
        {
          title: "Priority",
          kind: "tip",
          text: "First the path “understood the offer → contacted.” Then blog, careers, and an events calendar.",
        },
      ],
      links: [
        {
          label: "Traffic without leads",
          href: "/en/blog/trafik-bez-lidov/",
        },
        {
          label: "USP",
          href: "/en/blog/utp/",
        },
      ],
    },
  ],
  closing: [
    "A checklist is a prioritization tool, not a verdict. Cover tech, trust, and the path to a lead; grow the rest by business need — and don’t copy someone else’s “50 must-haves” literally.",
  ],
  related: [
    "ustarevshiy-sayt",
    "adaptivnyy-sayt",
    "formy-zahvata",
    "trafik-bez-lidov",
    "tehnicheskiy-seo-audit",
    "aydentika-brenda",
  ],
};
