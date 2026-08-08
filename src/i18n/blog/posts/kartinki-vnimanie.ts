import type { BlogPost } from "../../../data/blog";

/** EN overlay for kartinki-vnimanie — same structure as RU JSON. */
export const kartinkiVnimanieEn: BlogPost = {
  slug: "kartinki-vnimanie",
  title: "How images earn attention on a site and in content",
  date: "2020-09-11",
  category: "Content marketing",
  cover: "/images/blog/kartinki-vnimanie/cover-en.webp",
  excerpt:
    "Which images actually stop the eye: contrast, color, meaning, and metaphor — without generic clichés and copy that lives only inside the picture.",
  lead: [
    "An image is read faster than a paragraph: it sets emotion, topic, and an attention anchor before anyone finishes the lead. Random filler photos, tiny visual noise, and offer text locked inside a JPEG often hurt UX and accessibility.",
    "Below: working moves — color and contrast, rest for the eye, a less obvious frame, metaphors, and the rule never to hide meaning only in the image. Making an image clickable is a separate article.",
  ],
  faq: [
    {
      q: "Is a pretty face photo always better than a diagram?",
      a: "No. For B2B and how-tos a diagram or product shot is often stronger. A glossy smile with no link to the offer is empty filler.",
    },
    {
      q: "How many images per screen?",
      a: "As many as reinforce meaning. One strong visual in the first viewport beats a carousel for its own sake.",
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
      a: "In moderation: an unusual angle or detail intrigues. A mystery with no payoff just irritates.",
    },
    {
      q: "Animals and kids in commerce?",
      a: "Only if the niche fits. Otherwise they distract from the offer and feel manipulative.",
    },
    {
      q: "Are stock photos banned?",
      a: "On our materials — yes (site policy). For a client, prefer your own photos, brand-fit AI generation, or a checked license.",
    },
    {
      q: "Does an image affect SEO?",
      a: "Indirectly: behavior, snippets, Image Search, speed. Don’t expect a pretty photo alone to lift rankings.",
    },
  ],
  sections: [
    {
      title: "Why visuals matter",
      level: 2,
      paras: [
        "An image confirms the page topic, lowers cognitive load, and sets brand tone. In social feeds and blogs the preview decides whether people click further.",
        "A bad visual is worse than none: blur, watermarks, someone else’s logo, “handshake in suits” clichés.",
      ],
      lists: [
        {
          intro: "Jobs an image can do:",
          items: [
            "show the product or result",
            "explain a process with a diagram",
            "set the emotion of the offer",
            "break up long text",
          ],
        },
      ],
    },
    {
      title: "Color, contrast, and rest for the eye",
      level: 2,
      paras: [
        "A bright accent on a neutral background pulls the eye to the CTA or the hero of the frame. Text-to-background contrast matters on photos with captions too: pale gray on gray doesn’t read.",
        "The eye needs air — margins, not an overloaded collage. Alternate dense blocks with calm ones, or fatigue means people scroll past.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "one dominant color accent",
            "UI and caption contrast",
            "no noise from ten tiny objects",
            "on mobile, face or product isn’t cropped out",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Mixing every brand color into one banner. The accent disappears.",
          kind: "tip",
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
            "close-up of a product detail",
            "UI with a real task",
            "the work result, not a model pose",
            "a simple step infographic",
          ],
        },
      ],
    },
    {
      title: "Text inside the image",
      level: 2,
      paras: [
        "Critical offer, price, legally important copy — duplicate as normal text on the page. The image may fail to load, not index as text, or not be read by a screen reader.",
        "On the banner leave a short punchy accent; put the expansion next to it in HTML.",
      ],
      lists: [
        {
          intro: "Rule:",
          items: [
            "meaningful alt",
            "offer in a nearby headline",
            "don’t shrink type on the photo",
            "treat file weight separately from “text for SEO”",
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
        "Don’t lean on the outdated idea that “only a pretty face sells”: in many niches expertise, product, and clarity convince — not someone else’s gloss.",
      ],
      lists: [
        {
          intro: "Fit filter:",
          items: [
            "linked to the offer in two seconds",
            "doesn’t insult the audience",
            "can be replaced with your own photo",
            "doesn’t break page speed",
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
        "Build a guideline: style, palette, bans (generic filler clichés), sizes for hero/article/social. Before release, check the first screen on mobile — not only the “wow” from a designer at a laptop.",
        "Measure: preview CTR, time to scroll, banner clicks. Beauty without metrics is taste, not marketing.",
      ],
      lists: [
        {
          intro: "Visual checklist:",
          items: [
            "own or licensed file",
            "compression and a modern format",
            "meaning duplicated in text",
            "contrast and air",
            "aligned with the brand",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "One strong product photo often beats a collage of five filler shots.",
          kind: "tip",
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
