import type { BlogPost } from "../../../data/blog";

/** EN overlay for tilda — same structure as RU JSON. */
export const tildaEn: BlogPost = {
  slug: "tilda",
  title: "How to build a site on Tilda: structure, content, and publish",
  date: "2018-12-28",
  category: "Digital marketing",
  cover: "/images/blog/tilda/cover-en.webp",
  excerpt:
    "How to assemble a landing on Tilda: block structure, copy and visuals, Zero Block vs standard layout, SEO basics, domain, and checks — without promising a “ready site in two days” for every project.",
  lead: [
    "Tilda is a block website builder: good for landings, simple multi-page sites, and fast prototypes. A large catalog or heavy 1C logic often hits platform limits.",
    "Use this work order using a landing example: structure → content → design → build → SEO and QA. Tilda’s UI changes; follow the meaning of steps, not 2018 screenshots. “Two days” is a guide for a simple landing with ready copy — not a guarantee.",
  ],
  faq: [
    {
      q: "Is Tilda fit for an online store?",
      a: "For a small assortment and simple payments — often yes. For a large catalog and complex integrations, look at specialized CMS.",
    },
    {
      q: "Do I need a designer?",
      a: "Templates and careful content are enough to start. A unique grid needs Zero Block or a designer if the brand requires it.",
    },
    {
      q: "Is stock photography OK?",
      a: "Only with a suitable license. Your product/team photos are better. Don’t publish others’ shots without rights.",
    },
    {
      q: "Does Tilda “rank itself”?",
      a: "No. You need page meaning, title/description, speed, indexing, and demand. Rankings take planned months of work — not publish day.",
    },
    {
      q: "Is a custom domain required?",
      a: "For business — yes: trust and normal URLs. Connect the domain in project settings.",
    },
  ],
  sections: [
    {
      title: "Structure first, blocks later",
      level: 2,
      paras: [
        "Site type sets the frame. A course landing ≠ a designer portfolio ≠ a multi-page services site. For a landing classic: offer above the fold → product → benefits → trust → CTA → contacts.",
        "In Tilda one screen ≈ a block (or group). Draft a block list for the job and cut extras: a paintball club needs a short funnel; B2B equipment needs more proof.",
      ],
      lists: [
        {
          intro: "Example set for a course:",
          items: [
            "cover with offer;",
            "numbers/results;",
            "program;",
            "author/team;",
            "price and plans;",
            "FAQ;",
            "form and contacts.",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
        {
          label: "Landing copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Content: copy and visuals",
      level: 2,
      paras: [
        "Write simply, like to a client in chat: benefit, proof, objection answers. Don’t dump “everything you know” onto one screen.",
        "Visuals: your photos and screens beat generic images. External images only with a commercial license. Compress files: heavy photos kill mobile speed.",
      ],
      lists: [
        {
          intro: "Prepare before building:",
          items: [
            "offer and headlines;",
            "block copy;",
            "photos/icons;",
            "prices and terms;",
            "privacy policy if you have forms.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "First “click pretty,” then hunt for meaning. Without copy and offer a template doesn’t sell.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Prototype, fonts, and color",
      level: 2,
      paras: [
        "Beginners can sketch on paper, in Docs, or Figma: block order and CTAs. In Tilda design often starts from the block library — a prototype still saves rework.",
        "Keep color and type in one system: 1–2 fonts, contrasting buttons, readable mobile size. Take inspiration from competitors and landing galleries — don’t copy someone else’s brand.",
      ],
    },
    {
      title: "Building in Tilda",
      level: 2,
      paras: [
        "Create a project, assemble the page from blocks, drop in content, set menu and forms. For a non-standard grid — Zero Block; for speed — ready blocks.",
        "Check responsive: phone beats “beauty on a 27″”. Forms must reach email/CRM, not nowhere.",
      ],
      lists: [
        {
          intro: "Before publish:",
          items: [
            "all CTAs go where they should;",
            "forms tested;",
            "no broken images;",
            "mobile layout without overlaps;",
            "favicon and social preview.",
          ],
        },
      ],
    },
    {
      title: "SEO basics, domain, and tests",
      level: 2,
      paras: [
        "Set H1/H2, title and description (separate for search and sharing if the ads account allows). Enable indexing, connect the domain, add counters.",
        "If you collect personal data — document and consent. Run a speed/display checklist and send a test lead. Tilda’s SEO hint panel is a helper, not a promotion strategy.",
      ],
      links: [
        {
          label: "Building an online store",
          href: "/en/blog/sozdanie-internet-magazina/",
        },
        {
          label: "CMS for a store",
          href: "/en/blog/cms-internet-magazina/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Tilda speeds assembly when structure and content exist. Order: meaning → blocks → domain and checks.",
        "Judge the job honestly: a service landing — yes; heavy e-commerce — often another stack.",
      ],
    },
  ],
  closing: [
    "Gather offer and copy, lay out blocks, connect domain and forms, check mobile — that’s how a Tilda landing appears faster than a “site without a brief,” without the illusion that the builder does SEO alone.",
  ],
  related: [
    "lending",
    "tekst-lendinga",
    "cms-internet-magazina",
    "sozdanie-internet-magazina",
    "formy-zahvata",
    "ssl-sertifikat",
  ],
};
