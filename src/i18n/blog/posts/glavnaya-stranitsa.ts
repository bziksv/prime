import type { BlogPost } from "../../../data/blog";

/** EN overlay for glavnaya-stranitsa — same structure as RU JSON. */
export const glavnayaStranitsaEn: BlogPost = {
  slug: "glavnaya-stranitsa",
  title: "Website homepage: attract attention without confusing people",
  date: "2020-12-01",
  category: "Internet marketing",
  cover: "/images/blog/glavnaya-stranitsa/cover-en.webp",
  excerpt:
    "What a homepage needs: who you are, what you offer, how you differ; header, blocks, CTA, and footer — without a wall of text or outdated “pretty design for design’s sake.”",
  lead: [
    "The homepage is the entry point: in seconds people should know where they landed, what value they get, and what to click next. Beauty without clarity annoys as much as an outdated look.",
    "Below — a frame for a corporate/services site. A separate store-front breakdown is in the e‑commerce homepage piece; which phrases not to put on the homepage — in the homepage-copy article.",
  ],
  faq: [
    {
      q: "Is the homepage the whole site?",
      a: "No. It introduces and directs. Services, cases, pricing, blog — on their own URLs, or you get a wall of text.",
    },
    {
      q: "How much copy?",
      a: "Keep it short: offer, 3–5 benefits, trust, CTA. Details belong on inner pages.",
    },
    {
      q: "Is a slider required?",
      a: "No. It often hurts. One strong first screen with an offer and a button beats a carousel of ten banners.",
    },
    {
      q: "Where do phone and CTA go?",
      a: "In the header and/or first screen — visible on mobile. A footer duplicate is fine.",
    },
    {
      q: "SEO on the homepage?",
      a: "Brand, navigation, internal links. Don’t dump the whole commercial keyword core here — landings matter more for many queries.",
    },
    {
      q: "How often should it update?",
      a: "When the offer, season, or promos change. A “live” homepage beats a forever 2015 stub.",
    },
    {
      q: "How is it different from a store homepage?",
      a: "A shop leans harder on showcase, search, categories, and cart. Services/B2B — offer, proof, path to a lead.",
    },
    {
      q: "Does “company history” belong on the first screen?",
      a: "Usually no. A short meaning — yes; the founder’s biography — in About.",
    },
  ],
  sections: [
    {
      title: "What people must grasp immediately",
      level: 2,
      paras: [
        "Who you are and for whom. What you sell or which problem you solve. How you differ from lookalikes. What to do next (call, form, catalog).",
        "Wherever traffic came from, some people click the logo and land on the homepage — it should “assemble” the site’s meaning.",
      ],
      lists: [
        {
          intro: "Minimum on the first screen:",
          items: [
            "the offer in plain words;",
            "a visible CTA;",
            "navigation to key sections;",
            "a contact or messenger.",
          ],
        },
      ],
    },
    {
      title: "Block frame",
      level: 2,
      paras: [
        "Header: logo (to home), menu, phone/contact. Don’t invent exotic unlabeled navigation.",
        "Content blocks: services/directions, proof (figures, cases, reviews — no fakes), benefits.",
        "CTA: one primary goal per screen; secondary links stay quieter.",
        "Footer: site map, legal block, contacts, sometimes a form — see a separate piece.",
      ],
      lists: [],
      links: [
        {
          label: "Site footer",
          href: "/blog/futer-sayta/",
        },
        {
          label: "Online store homepage",
          href: "/blog/glavnaya-internet-magazina/",
        },
      ],
    },
    {
      title: "What to keep in mind while designing",
      level: 2,
      paras: [
        "Walls of “about everything” kill scanning. Cut.",
        "Offers and promos should be visible — without blinking chaos.",
        "Images — yours or licensed; stock for stock’s sake isn’t required.",
        "Benefits in moderation: three strong ones beat ten clichés.",
        "Update season and offer; a dead homepage erodes trust.",
      ],
      lists: [],
      notes: [
        {
          title: "Design ≠ usability",
          text: "A modern look helps, but without clear buttons and hierarchy people leave. See usability.",
        },
      ],
      links: [
        {
          label: "Usability",
          href: "/blog/yuzabiliti/",
        },
      ],
    },
    {
      title: "SEO on the homepage without overload",
      level: 2,
      paras: [
        "Unique title and description for the brand/main intent.",
        "One H1 with the company’s meaning — not a keyword dump.",
        "Internal links to money sections.",
        "Don’t turn the homepage into a dump of the whole keyword core.",
      ],
      lists: [],
      links: [
        {
          label: "Meta tags",
          href: "/en/blog/metategi/",
        },
        {
          label: "H1",
          href: "/blog/teg-h1/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "The homepage explains and leads on — it doesn’t tell the whole biography.",
        "Header, offer, proof, CTA, footer — a sufficient frame.",
        "For a store, see the separate showcase guide.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Open the homepage on a phone for five seconds: if the offer and button don’t read — fix that first, not a new slider.",
  ],
  related: [
    "glavnaya-internet-magazina",
    "tekst-glavnoy-stranitsy",
    "futer-sayta",
    "yuzabiliti",
    "metategi",
    "formy-zahvata",
  ],
};
