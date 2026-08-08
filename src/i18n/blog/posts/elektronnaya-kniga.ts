import type { BlogPost } from "../../../data/blog";

/** EN overlay for elektronnaya-kniga — same structure as RU JSON. */
export const elektronnayaKnigaEn: BlogPost = {
  slug: "elektronnaya-kniga",
  title: "An ebook for your audience: how to make one fast without a designer",
  date: "2019-03-07",
  category: "Digital marketing",
  cover: "/images/blog/elektronnaya-kniga/cover-en.webp",
  excerpt:
    "An ebook as a lead magnet and proof of expertise: PDF vs ePub, building in Word or a builder, how to distribute — without promising “zero cost and a masterpiece in an hour.”",
  lead: [
    "An ebook packs experience into one file: teach the audience, gently remind them of the brand, and collect contacts in exchange for useful material. The budget path is to build it yourself; the paid path is to hand it to a designer and layout specialist.",
    "Below: why an ebook, how PDF differs from ePub, two build paths (fast from a text editor and cleaner in a builder), and how to share it. Service rates and storefront rules change — check current terms; for a lead magnet, follow personal-data rules.",
  ],
  faq: [
    {
      q: "Should I use PDF or ePub?",
      a: "PDF is easier to make and more stable for tables and diagrams; on a phone, page scale can be awkward. ePub reflows better on readers, but formulas and complex layouts suffer.",
    },
    {
      q: "How much time do you need?",
      a: "Layout of ready copy — from a couple of hours in an editor to notably longer in a builder. Writing the content is separate and usually takes longer.",
    },
    {
      q: "Can I do it without a designer at all?",
      a: "Yes for a working PDF guide. For storefront sales and a polished cover, a builder or specialist still helps.",
    },
    {
      q: "Must I give the book for an email?",
      a: "Not required, but as a lead magnet it’s a common pattern. You need consent to process data and clear value in the file.",
    },
    {
      q: "What if someone steals the text?",
      a: "The risk is real. If the goal is reach and a niche standard, partial copying can still aid awareness; keep critical parts behind closed formats or shorten the public version.",
    },
    {
      q: "Is gluing old articles enough?",
      a: "You need one theme and a story, or you get a post dump. Select carefully, rewrite transitions, and update what’s stale.",
    },
  ],
  sections: [
    {
      title: "Why an ebook and which format",
      level: 2,
      paras: [
        "A book covers volume that doesn’t fit one article: a guide, checklist, or method deep-dive. For the brand it’s closer to useful content than a banner: the reader gets value, the company gets a touch and a reason to subscribe.",
        "Digital format upsides: relatively low “print run” cost, easy updates, simple link distribution, and — if needed — a base for a printed giveaway.",
        "PDF is the familiar choice for manuals with tables. ePub is more flexible on mobile but holds complex geometry worse. For a first book, PDF is usually enough.",
      ],
      lists: [
        {
          intro: "Before you start:",
          items: [
            "one theme and a promise to the reader",
            "a table of contents of 5–12 chapters",
            "current facts (not a 2017 paste)",
            "goal: downloads, leads, or expert status",
          ],
        },
      ],
    },
    {
      title: "Two ways to make the book",
      level: 2,
      paras: [
        "Fast: text editor (title page, headers/footers, illustrations) → export to PDF. Fits an “from experience” manual. Downsides — modest design and sometimes store or reader pickiness about a simple Word PDF.",
        "Cleaner: an online builder with cover and page templates (Canva-style and similar tools). Longer per page, but it looks cohesive. Free limits and paid packs are enough to start; prices and plan names change.",
        "Images — your own screens, diagrams, or materials with a clear license. Don’t use someone else’s media library assets without rights; for the brand, own illustrations and AI/graphics under project rules work better.",
      ],
      notes: [
        {
          title: "Content beats “pretty”",
          kind: "tip",
          text: "A weak book in a beautiful cover won’t collect leads. Value and structure first, then design.",
        },
      ],
      links: [
        {
          label: "Corporate blog",
          href: "/en/blog/korporativnyy-blog/",
        },
        {
          label: "Lead-capture forms",
          href: "/en/blog/formy-zahvata/",
        },
      ],
    },
    {
      title: "How to distribute",
      level: 2,
      paras: [
        "Announce on the blog, email your subscribers, post in communities and niche channels, pitch partner blogs. As a lead magnet — a page with a form: the book for a contact with clear consent.",
        "Don’t promise “it goes viral by itself.” Distribution is separate work: where the audience lives, what hook is in the announce, what someone gets in 15 minutes of reading.",
      ],
      lists: [
        {
          intro: "Mini launch plan:",
          items: [
            "landing with contents and a form",
            "email/post with one main benefit",
            "UTM and an analytics goal on download",
            "a follow-up email series plan after download",
          ],
        },
      ],
    },
  ],
  closing: [
    "An ebook without a designer is doable: build strong copy, pick PDF, design in an editor or builder, and share it where your audience already is. Pretty amplifies — it doesn’t replace value.",
  ],
  related: [
    "korporativnyy-blog",
    "formy-zahvata",
    "omnikanalnyy-kontent-marketing",
    "analitika-kontent-marketinga",
    "avtovoronka",
    "kopirayting",
  ],
};
