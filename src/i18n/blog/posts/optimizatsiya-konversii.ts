import type { BlogPost } from "../../../data/blog";

/** EN overlay for optimizatsiya-konversii — same structure as RU JSON. */
export const optimizatsiyaKonversiiEn: BlogPost = {
  slug: "optimizatsiya-konversii",
  title: "Website conversion optimization: how to measure and what to test",
  date: "2021-09-13",
  category: "Digital marketing",
  cover: "/images/blog/optimizatsiya-konversii/cover-en.webp",
  excerpt:
    "What conversion rate is, how to calculate it, how to work the funnel, and which hypotheses to test: forms, CTAs, speed, trust — without myths about “average internet conversion.”",
  lead: [
    "Conversion is the share of visitors who complete a target action: a lead, a purchase, a call, a signup. It’s measured in percent and improved with focused edits — not “more ad budget.”",
    "Measure the funnel, then test UX and content hypotheses — including A/B when volume allows. “Average niche conversion” figures from old reviews are rough cues, not your KPI.",
  ],
  faq: [
    {
      q: "How do you calculate conversion?",
      a: "Target actions ÷ visits (or sessions) × 100%. Fix what counts as the goal and measure in one tool (Analytics / GA4 / CRM).",
    },
    {
      q: "What conversion rate is “normal”?",
      a: "It depends on niche, traffic, and deal complexity. Compare yourself to yourself: week to week, channel to channel — not to someone else’s “9% on social.”",
    },
    {
      q: "Should you fix traffic first or conversion?",
      a: "With expensive traffic and a leaky funnel, fix conversion first. With tiny traffic A/B is pointless — grow volume and remove obvious barriers in parallel.",
    },
    {
      q: "Is an A/B test always needed?",
      a: "For small edits with low traffic, before/after and common sense often suffice. A/B — when you have volume and one clear hypothesis.",
    },
    {
      q: "Do forms with many fields cut conversion?",
      a: "Yes — extra required fields. Capture the minimum for first contact; details after a manager replies.",
    },
  ],
  sections: [
    {
      title: "What conversion is",
      level: 2,
      paras: [
        "Conversion (CR) is target actions divided by visits over a period. You define the goal: order, lead, demo, subscribe.",
        "Also watch micro-conversions: phone tap, finishing a key block, add to cart — they show where the path breaks.",
      ],
      lists: [
        {
          intro: "Example:",
          items: [
            "3000 landing visits",
            "150 signups",
            "CR = 150 ÷ 3000 × 100% = 5%.",
          ],
        },
      ],
    },
    {
      title: "Strategy before button tests",
      level: 2,
      paras: [
        "Without knowing the audience and offer, a CTA color change rarely saves you. First: who arrives, what the ad/search promise is, whether the landing matches.",
        "In analytics (GA4 and similar) watch sources, devices, exit pages, goals. “Sticky” content leads to a commercial step without bait-and-switch.",
      ],
      lists: [
        {
          intro: "If pages don’t hold:",
          items: [
            "refresh meaning and proof",
            "fix broken links and forms",
            "clarify the CTA",
            "cut visual noise.",
          ],
        },
      ],
      links: [
        {
          label: "Sales copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "Funnel and product",
      level: 2,
      paras: [
        "Classic path: awareness → interest → comparison → action. On a site that’s the road from the first screen to a lead/payment. A weak link kills everything below.",
        "A 5% discount hasn’t been a universal lever for a long time. Stronger: clear value, demo/estimate, guarantees, social proof, a fast reply.",
      ],
      lists: [
        {
          intro: "Align product and audience:",
          items: [
            "offer = audience pain",
            "price and timeline clear before the form",
            "a next step without “fill 12 fields.”",
          ],
        },
      ],
    },
    {
      title: "Hypotheses: forms, CTAs, speed, trust",
      level: 2,
      paras: [
        "Heatmaps and session recordings show where people click and drop. Next — a hypothesis and a measurement.",
      ],
      tables: [
        {
          caption: "Typical CR levers",
          headers: ["Zone", "What to try", "Risk"],
          rows: [
            ["Form", "Fewer fields, clear reply window", "Weaker lead qualification"],
            ["CTA", "Benefit copy, contrast, repeat by the offer", "Noise if too many buttons"],
            ["Speed", "Compression, cache, mobile layout", "Needs a developer"],
            ["Trust", "Reviews, cases, guarantee, contacts", "Fake reviews worse than none"],
            ["Content", "Lists, facts, fewer junk banners", "Cutting value just to be “shorter”"],
          ],
        },
      ],
      lists: [
        {
          intro: "Form practice:",
          items: [
            "name + contact + gist",
            "hints and validation errors",
            "thank-you with a real SLA.",
          ],
        },
      ],
      links: [
        {
          label: "Feedback form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Load delays of a few seconds hit CR hard. Mobile isn’t a “shrunk desktop” — it’s a separate finger path to the button.",
        },
      ],
    },
    {
      title: "A/B and when to skip it",
      level: 2,
      paras: [
        "Split: two variants of one change, split traffic, measure the goal. Change one thing at a time. A week “by eye” with no volume isn’t a test.",
        "With low traffic, first remove obvious barriers (broken form, 5-second LCP, no phone). Then scale experiments.",
      ],
      lists: [],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Conversion optimization is a loop: goal → data → hypothesis → edit → measure. Count CR honestly, fix the funnel and trust, don’t copy someone else’s percentages. Ads without a converting landing only make the click more expensive.",
      ],
      lists: [],
    },
  ],
};
