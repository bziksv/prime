import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodayushchie-teksty — same structure as RU JSON. */
export const prodayushchieTekstyEn: BlogPost = {
  slug: "prodayushchie-teksty",
  title: "Sales copy: principles and structure",
  date: "2021-10-15",
  category: "SEO",
  cover: "/images/blog/prodayushchie-teksty/cover-en.webp",
  excerpt:
    "How to write sales copy: audience and product, tone, headline, intro, arguments, price, and a CTA without clichés.",
  lead: [
    "Sales copy drives an action: a lead, a purchase, a call. Readers rarely care that “the company is growing” — they care which problem the offer solves.",
    "Below: principles, structure from headline to CTA, and ways to talk about price. Social posts and general copywriting have sibling articles; this piece is the commercial-text frame.",
  ],
  faq: [
    {
      q: "How is sales copy different from informational copy?",
      a: "Info explains a topic. Sales copy closes a pain/benefit and ends with a clear next step.",
    },
    {
      q: "Do I need a rigid AIDA framework?",
      a: "As a frame — yes (attention → interest → desire → action). You don’t have to label the blocks with letters in the text.",
    },
    {
      q: "Can I hide the downsides?",
      a: "Honesty wins. Limits said calmly build trust; lies kill conversion on the next step.",
    },
    {
      q: "How do I write about a high price?",
      a: "Break it into clear units, compare with an alternative, show value and what’s included. Don’t fake a discount.",
    },
    {
      q: "How much fluff is OK?",
      a: "Almost none. Facts, benefits, proof, CTA. Lyric only if it truly warms the audience.",
    },
  ],
  sections: [
    {
      title: "Sales copy principles",
      level: 2,
      paras: [
        "Write in the audience’s plain language, give benefit and proof, keep logic, respect the reader. The main message is solving their job — not brand self-praise.",
      ],
      lists: [
        {
          intro: "Basics:",
          items: [
            "clear audience and scenario",
            "accurate product facts",
            "benefits instead of bare features",
            "coherence and tact",
            "one main CTA",
          ],
        },
      ],
    },
    {
      title: "Audience and product",
      level: 2,
      paras: [
        "Build a portrait: jobs, objections, language, competitors. Learn the product: properties, differences, limits. Without that the copy is “about everything and no one.”",
      ],
      lists: [
        {
          intro: "Before the draft:",
          items: [
            "who reads and which action you need",
            "which pain/desire",
            "how you differ from peers",
            "what proof you have (cases, numbers, guarantees)",
          ],
        },
      ],
      links: [
        {
          label: "Copywriting: text types",
          href: "/en/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Tone and headline",
      level: 2,
      paras: [
        "Tone is the audience’s language: simpler for a broad public, precise terms without legalese for pros. Facts beat exclamation marks.",
        "The headline promises benefit or intrigue without lying. After it people should want to keep reading — not feel clickbait.",
      ],
    },
    {
      title: "Intro, body, close",
      level: 2,
      paras: [
        "Intro is short: problem → hope → hint of a solution. Devices: questions the audience answers “yes” to; “if… then…”; an explicit benefit.",
        "Body: features through benefits, proof, usage scenario, objection answers. Close: summary, price/terms, and a clear CTA.",
      ],
      lists: [
        {
          intro: "Article frame:",
          items: [
            "headline with a benefit",
            "reader’s problem",
            "solution and product",
            "proof",
            "price and terms",
            "CTA: call / get in touch / buy",
          ],
        },
      ],
      links: [
        {
          label: "Instagram sales post",
          href: "/en/blog/post-instagram/",
        },
      ],
    },
    {
      title: "How to talk about price",
      level: 2,
      paras: [
        "Price can be clearer: break it by period, compare with a costlier alternative, show the package. An honest discount from a real base is fine; a fake “was 99999” is not.",
      ],
      lists: [
        {
          intro: "Moves without manipulation:",
          items: [
            "price per day/month on a long term",
            "what’s included in the sum",
            "compare with the cost of the problem unsolved",
            "clear payment and refund terms",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Starting with “we are market leaders” instead of the client’s pain. Prove leadership with cases after the benefit is clear.",
        },
      ],
    },
  ],
};
