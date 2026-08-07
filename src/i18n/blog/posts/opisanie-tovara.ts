import type { BlogPost } from "../../../data/blog";

/** EN overlay for opisanie-tovara — same structure as RU JSON. */
export const opisanieTovaraEn: BlogPost = {
  slug: "opisanie-tovara",
  title: "Product description on an ecommerce card",
  date: "2020-07-27",
  category: "Content marketing",
  cover: "/images/blog/opisanie-tovara/cover-en.webp",
  excerpt:
    "How to write a product-card description: photos and copy, emotion without fluff, features and specs, structure and SEO — so the buyer finds price arguments and places the order.",
  lead: [
    "The product card is where a purchase decision most often breaks or locks in. A strong photo catches the eye; the text must answer doubts: why do I need this, what justifies the price, why your store is easier than the next tab.",
    "Below — the roles of image and copy, how to write benefits and features, which specs must be on the card, and how to layout the block without a wall of text. The general selling-copy frame is in a sibling article; here the focus is the ecommerce SKU card.",
  ],
  faq: [
    {
      q: "Is one photo enough without text?",
      a: "For impulse cheap items sometimes yes. At a high price, size/configuration choice, and competitor comparison — text is required.",
    },
    {
      q: "Write with “emotion” or only specs?",
      a: "Both layers: a short use scenario + facts (material, size, kit). Emotion alone without properties doesn’t close doubts.",
    },
    {
      q: "Can I copy the manufacturer’s description?",
      a: "Duplicate risk and identical cards across sellers. Better uniqueize for your audience and add what competitors lack (shipping, warranty, bundles).",
    },
    {
      q: "Do you need keywords in the description?",
      a: "Naturally — name, type, key attributes. Don’t turn a paragraph into a comma-separated query list.",
    },
    {
      q: "How many characters?",
      a: "As many as close choice questions. Often: 2–4 sentence lead + specs list + “why us”. Don’t pad with water.",
    },
    {
      q: "What’s required for apparel/footwear?",
      a: "Size chart, material, care, fit/width, model height when needed — everything that drives chat messages and sends people to a competitor.",
    },
    {
      q: "Will the description alone get TOP?",
      a: "It’s part of page quality and conversion. Card prep — weeks; organic growth for the core — month to month, planned 2–6 months after work starts.",
    },
    {
      q: "How does a card differ from a landing?",
      a: "A card is a compact SKU choice in a catalog. A landing is one offer on a long page. Techniques overlap; volume and structure differ.",
    },
  ],
  sections: [
    {
      title: "Why the card needs strong copy",
      level: 2,
      paras: [
        "The buyer already “caught” on visuals or price and wants confirmation. Copy persuades that the product solves the job, that price matches kit and service, and that ordering with you is easier than opening three more tabs.",
        "Weak copy like “perfect gift” with no detail isn’t read. Strong copy answers typical objections before a manager replies: while you wait in chat, part of the audience already bought from a competitor with a full spec.",
      ],
      lists: [
        {
          intro: "Three jobs of the description:",
          items: [
            "remove “do I need this” doubt;",
            "justify price and contents;",
            "nudge the order specifically with you.",
          ],
        },
      ],
      links: [
        {
          label: "Selling copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "Photo and text work as a pair",
      level: 2,
      paras: [
        "The image sells attention: color, angle, use context. But at a high price or complex choice the eye goes to text — looking for material, size, warranty, differences from a cheap analogue.",
        "Strong combo: honest photos (including detail and scale) + copy that names feelings and facts. Don’t rely only on a “pretty label” — without arguments the cart empties on the next step.",
      ],
      lists: [
        {
          intro: "Visual minimum next to copy:",
          items: [
            "hero angle and 2–3 details;",
            "in-use photo if it fits;",
            "readable captions/alt without stuffing;",
            "consistent style across a card series.",
          ],
        },
      ],
      links: [
        {
          label: "Image alt text",
          href: "/en/blog/alt-img/",
        },
        {
          label: "Images and attention",
          href: "/en/blog/kartinki-vnimanie/",
        },
      ],
    },
    {
      title: "Emotion and use scenario",
      level: 2,
      paras: [
        "A good lead makes the result feel real: not “soft blanket”, but “after work, wrap up and exhale with a coffee”. The emotion is familiar to the audience — and the product becomes an answer, not an abstract catalog row.",
        "Don’t overdo ad pathos and invented miracles. If you promise an effect — it must be plausible and match the specs. Otherwise returns and bad reviews eat conversion.",
      ],
      lists: [
        {
          intro: "How to write the scenario:",
          items: [
            "who buys and in what situation;",
            "which pain/desire we close;",
            "1–2 sensory details without fluff;",
            "hand-off to facts and the feature list.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "A lyrical paragraph with no sizes or composition. Pretty — but they don’t buy.",
        },
      ],
    },
    {
      title: "Features, benefits, and honest arguments",
      level: 2,
      paras: [
        "People buy a solution: warm up, speed up, gift, save space. Before writing, gather audience questions from chats, reviews, and search. The text answers them — it doesn’t list “innovation” without proof.",
        "Link features to benefits: “dense fabric 300 g/m²” → “doesn’t show through and keeps shape after washes”. Add why buy from you: kit, timelines, returns, advice — what a marketplace card lacks.",
      ],
      lists: [
        {
          intro: "Argument frame:",
          items: [
            "who the product is for;",
            "which job it solves;",
            "key features → benefits;",
            "differences from typical alternatives;",
            "purchase terms with you.",
          ],
        },
      ],
      links: [
        {
          label: "Ecommerce promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Specs: everything that drives chat messages",
      level: 2,
      paras: [
        "If choice needs insole length, power, alloy composition, compatibility — it must be on the card immediately. Otherwise the impulse cools while a manager answers.",
        "Form matters: short lead first, then a bulleted specs list, then detail and product FAQ. A solid 3000-character wall without structure isn’t read on a phone.",
      ],
      lists: [
        {
          intro: "Required specs block:",
          items: [
            "sizes / weight / volume;",
            "materials and care;",
            "what’s in the box;",
            "compatibility and limits;",
            "warranty and return terms (short + link).",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Walk 20 frequent support questions — half should be closed by the card copy.",
        },
      ],
      links: [
        {
          label: "Ecommerce categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Strong-card checklist",
      level: 2,
      paras: [
        "Before publish check: emotion/scenario without fluff, features covered, full specs list, reasons to buy from you, clear CTA (add to cart / order / get a quote). An original “hook” fits if it helps choice — not if it distracts.",
        "A perfect description doesn’t guarantee TOP by itself — it lifts conversion and page quality. Next come assortment, price, shipping, and the catalog SEO track.",
      ],
      lists: [
        {
          intro: "Before going live:",
          items: [
            "lead answers “why me”;",
            "specs are complete;",
            "no factory copy-paste one-to-one (or consciously improved);",
            "keys feel natural;",
            "mobile readability;",
            "photo and copy aligned.",
          ],
        },
      ],
      links: [
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "prodayushchie-teksty",
    "prodvizhenie-internet-magazina",
    "kategorii-internet-magazina",
    "kopirayting",
    "optimizatsiya-konversii",
    "alt-img",
  ],
};
