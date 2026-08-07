import type { BlogPost } from "../../../data/blog";

/** EN overlay for kartinki-vnimanie — same structure as RU JSON. */
export const kartinkiVnimanieEn: BlogPost = {
  slug: "kartinki-vnimanie",
  title: "How to grab attention with an image on the site and in content",
  date: "2020-09-11",
  category: "Internet marketing",
  cover: "/images/blog/kartinki-vnimanie/cover-en.webp",
  excerpt:
    "Which images actually stop the eye: contrast, color, meaning, and metaphor — without stock clichés and text baked only into the picture.",
  lead: [
    "An image is read faster than a paragraph: it sets emotion, topic, and an attention “anchor” before anyone finishes the lead. But random stock, tiny noise, and text inside a JPEG often hurt UX and accessibility.",
    "Below — working tactics: color and contrast, rest for the eye, a non-obvious frame, metaphors, and the rule not to hide meaning only in the image. Making an image clickable is a separate article.",
  ],
  faq: [
    {
      q: "Is a pretty face photo always better than a diagram?",
      a: "No. For B2B and how-tos a diagram/product is often stronger. A “glossy smile” with no link to the offer is empty stock.",
    },
    {
      q: "How many images per screen?",
      a: "As many as reinforce meaning. One strong visual in the first screen beats a carousel for carousel’s sake.",
    },
    {
      q: "Can you put the offer on a banner?",
      a: "A short accent — yes; the whole meaning only in the image — no. Duplicate the text in HTML for search and screen readers.",
    },
    {
      q: "Does bright color always work?",
      a: "An accent on a calm background works. Acidic chaos tires people and cuts trust.",
    },
    {
      q: "Do you need a “mystery effect”?",
      a: "In moderation: an unusual angle or detail intrigues. A mystery with no payoff = irritation.",
    },
    {
      q: "Animals and kids in commerce?",
      a: "Only if the niche fits. Otherwise they distract from the offer and feel manipulative.",
    },
    {
      q: "Is stock banned?",
      a: "On our materials — yes (site policy). For a client — prefer your own photos, brand-fit AI generation, or a checked license.",
    },
    {
      q: "Does an image affect SEO?",
      a: "Indirectly: behavior, snippets, Image Search, speed. Don’t expect a direct ranking boost from a pretty photo.",
    },
  ],
  sections: [
    {
      title: "Why visuals at all",
      level: 2,
      paras: [
        "An image confirms the page topic, lowers cognitive load, and sets brand tone. In social feeds and blogs the preview decides whether people click further.",
        "A bad visual is worse than none: blur, watermarks, someone else’s logo, “handshake in suits” clichés.",
      ],
      lists: [
        {
          intro: "Image jobs:",
          items: [
            "show the product/result;",
            "explain a process with a diagram;",
            "set offer emotion;",
            "break up long text.",
          ],
        },
      ],
    },
    {
      title: "Color, contrast, and rest for the eye",
      level: 2,
      paras: [
        "A bright accent on a neutral background pulls the eye to the CTA or hero of the frame. Text-to-background contrast matters on photos with captions too: pale grey on grey isn’t read.",
        "The eye needs air: margins, not an overloaded collage. Alternate dense blocks with calm ones, or fatigue = scroll past.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "one dominant color accent;",
            "UI and caption contrast;",
            "no noise from 10 tiny objects;",
            "mobile: face/product not cropped out.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Mixing every brand color into one banner. The accent disappears.",
        },
      ],
    },
    {
      title: "Obvious vs curiosity",
      level: 2,
      paras: [
        "Template “laptop + coffee” frames get skipped. Stronger: a process detail, before/after, an unexpected product angle, honest material texture.",
        "Mystery works if context is clear within a second (caption, H2). Otherwise it’s clickbait that doesn’t pay for attention.",
      ],
      lists: [
        {
          intro: "Ideas instead of clichés:",
          items: [
            "close-up of a product detail;",
            "UI with a real task;",
            "work result, not a model pose;",
            "a simple step infographic.",
          ],
        },
      ],
    },
    {
      title: "Text inside the image",
      level: 2,
      paras: [
        "Critical offer, price, legally important copy — duplicate as normal text on the page. The image may fail to load, not index as text, or not be read by a screen reader.",
        "On the banner leave a short punchy accent; the expansion sits next to it in HTML.",
      ],
      lists: [
        {
          intro: "Rule:",
          items: [
            "meaningful alt;",
            "offer in a nearby headline;",
            "don’t shrink type on the photo;",
            "file weight separate from “text for SEO”.",
          ],
        },
      ],
      links: [
        {
          label: "Image as a link",
          href: "/en/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "Metaphors and fit",
      level: 2,
      paras: [
        "A metaphor (rocket = growth, bridge = integration) speeds understanding if the audience reads it. A too-distant metaphor confuses.",
        "Don’t lean on outdated “only a pretty face sells”: in many niches expertise, product, and clarity convince — not someone else’s gloss.",
      ],
      lists: [
        {
          intro: "Fit filter:",
          items: [
            "linked to the offer in 2 seconds;",
            "doesn’t insult the audience;",
            "can be replaced with your own photo;",
            "doesn’t break page speed.",
          ],
        },
      ],
      links: [
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Rollout practice",
      level: 2,
      paras: [
        "Build a guideline: style, palette, bans (stock clichés), sizes for hero/article/social. Before release, check the first screen on mobile — not only the “wow” from a designer at a MacBook.",
        "Measure: preview CTR, time to scroll, banner clicks. Beauty without metrics is taste, not marketing.",
      ],
      lists: [
        {
          intro: "Visual checklist:",
          items: [
            "own or licensed file;",
            "compression and a modern format;",
            "meaning duplicated in text;",
            "contrast and air;",
            "aligned with the brand.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "One strong product photo often beats a collage of five stock shots.",
        },
      ],
      links: [
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
    },
  ],
  related: [
    "kartinka-ssylka",
    "open-graph",
    "razmer-stranitsy",
    "napolnenie-sayta",
    "otkazy-sayta",
  ],
};
