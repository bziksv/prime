import type { BlogPost } from "../../../data/blog";

/** EN overlay for video-obzor-tovara — same structure as RU JSON. */
export const videoObzorTovaraEn: BlogPost = {
  slug: "video-obzor-tovara",
  title: "Product video reviews for online stores: how to shoot and where to publish",
  date: "2019-12-21",
  category: "Content marketing",
  cover: "/images/blog/video-obzor-tovara/cover-en.webp",
  excerpt:
    "Why a product video belongs on the SKU page, which review types work, how to shoot without a studio, and where to publish — without the “people remember 90% from video” myth or “sales ×N” promises.",
  lead: [
    "Photos and copy answer part of the questions; a short video shows size, fit, what’s in the box, and how it looks in real life. For expensive and tactile SKUs that often clears doubt before the cart.",
    "Prioritize bestsellers and high-return SKUs, shoot a short honest demo, and put the clip on the product page next to the CTA. Old “10% from text, 90% from video” figures aren’t universal.",
  ],
  faq: [
    {
      q: "Do you need a review for every SKU?",
      a: "No. Prioritize bestsellers, expensive items, and products with frequent “not what I expected” returns.",
    },
    {
      q: "Is a phone enough to shoot?",
      a: "Yes, if light, stability, and sound are solid. A shaky vertical clip with no script is worse than a tidy tripod shot.",
    },
    {
      q: "How long should a product review be?",
      a: "Usually 30–90 seconds for the product page; go longer only when a real test and comparison are needed. Long clips get abandoned.",
    },
    {
      q: "Is an on-camera host required?",
      a: "Not always. Hands-on demos plus voiceover or captions work too. Clarity and honesty matter more.",
    },
    {
      q: "Is YouTube mandatory?",
      a: "It’s handy hosting and a traffic channel — not the only option. What matters most is the clip on the product page next to the add-to-cart CTA.",
    },
    {
      q: "Can you embed someone else’s YouTube review?",
      a: "Only with rights and without misleading shoppers. Your own clip matched to your offer and stock is more reliable.",
    },
    {
      q: "How does video relate to the product description?",
      a: "Video complements text and photos; it doesn’t replace specs, price, or shipping terms.",
    },
  ],
  sections: [
    {
      title: "Why video on the product page",
      level: 2,
      paras: [
        "It shows what a still frame can’t: scale, sound, flexibility, assembly, clothing fit.",
        "It cuts some returns from wrong expectations. That’s not a “guaranteed revenue multiplier” — watch conversion and completion on your own SKUs.",
      ],
      links: [
        {
          label: "Product page",
          href: "/en/blog/kartochka-tovara/",
        },
      ],
    },
    {
      title: "Review types",
      level: 2,
      paras: [
        "Demo: look, what’s included, basic properties.",
        "Test / expert take: comparison, use scenarios — needs someone who actually knows the product.",
        "New-product intro: what it is and who it’s for.",
        "Ad spot: emotion and brand; on a product page, usefulness beats a “wow for wow’s sake” clip.",
      ],
    },
    {
      title: "How to shoot",
      level: 2,
      paras: [
        "Script and runtime → light and a stable frame → clean audio → angles from every needed side → short edit with store name/logo and a product link at the end or in the description.",
        "Gear can be rented. A studio isn’t required: a plain backdrop, window daylight, and a tripod are often enough to start.",
      ],
      lists: [
        {
          intro: "Minimum quality bar:",
          items: [
            "product in focus, no shake;",
            "speech audible or captions clear;",
            "no faked scale or contents;",
            "file optimized for page speed.",
          ],
        },
      ],
      notes: [
        {
          title: "Editing",
          text: "Trimming pauses and adding captions is enough. 2019 editor names don’t matter — use what your team already knows.",
        },
      ],
    },
    {
      title: "Where to publish",
      level: 2,
      paras: [
        "On the product page next to the gallery and buy button — priority.",
        "YouTube / platform video and social — for reach and UTM back to the product page. A channel makes sense if you publish clips regularly.",
      ],
      links: [
        {
          label: "Product description",
          href: "/en/blog/opisanie-tovara/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Top SKUs and a script first, studio later.",
        "Honest angles beat a cinematic vibe.",
        "A clip on the product page plus CTA beats a review “somewhere on a channel” with no link.",
      ],
    },
  ],
  closing: [
    "Pick five products with a frequent “how does it look / fit / turn on” question — shoot one short review each and compare product-page conversion before vs after.",
  ],
  related: [
    "kartochka-tovara",
    "opisanie-tovara",
    "prodazhi-internet-magazin",
    "kommercheskie-faktory",
    "yuzabiliti-internet-magazina",
    "zapusk-internet-magazina",
  ],
};
