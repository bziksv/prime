import type { BlogPost } from "../../../data/blog";

/** EN overlay for tsena-klika-yandeks — same structure as RU JSON. */
export const tsenaKlikaYandeksEn: BlogPost = {
  slug: "tsena-klika-yandeks",
  title: "Click price in Yandex: how to calculate a suitable bid",
  date: "2021-02-19",
  category: "Contextual advertising",
  cover: "/images/blog/tsena-klika-yandeks/cover-en.webp",
  excerpt:
    "How to derive an acceptable CPC from target CPA and site conversion, why Metrica matters, and why an “average market click price” without economics is useless.",
  lead: [
    "In Yandex Direct it’s easy to chase position and forget what a click can cost the business. If you’re ready to pay X per lead and the site converts Y% of clicks, the bid ceiling is calculated before launch — not after burning the budget.",
    "Below — a simple formula from CPA and conversion, a numeric example, and limits (season, competition, lead quality). CPM/CPC models and bid control are in neighboring posts.",
  ],
  faq: [
    {
      q: "What’s the click-price formula?",
      a: "Guide: acceptable CPC ≈ target CPA × (conversion to goal / 100). Conversion is the share of clicks that became a lead/order.",
    },
    {
      q: "Where does conversion come from?",
      a: "From Metrica/analytics on ad traffic with goals set. No data — start with a cautious hypothesis (often around 1%) and refine from facts.",
    },
    {
      q: "What is CPA here?",
      a: "How much you’re ready to pay for a useful action: lead, call, order. Higher margin and LTV — higher ceiling; otherwise ads lose money even with a “pretty” CTR.",
    },
    {
      q: "Why doesn’t the calc match the auction?",
      a: "The market may demand above your ceiling. Then cut irrelevant traffic, improve the ad and landing, or narrow semantics — don’t raise the bid at a loss.",
    },
    {
      q: "Calculate for the whole site or per product?",
      a: "Better by segments: categories differ in conversion and margin. Sometimes it’s smarter to run strong positions, not the whole catalog.",
    },
    {
      q: "Is CTR enough to judge?",
      a: "No. You need conversions and lead cost. High CTR with no leads burns budget.",
    },
    {
      q: "Does this replace Direct strategies?",
      a: "No. The formula sets an economic ceiling. How to run bids and auto-strategies is separate — see the Direct bids post.",
    },
  ],
  sections: [
    {
      title: "Economics first, then the bid",
      level: 2,
      paras: [
        "Paid search speeds leads only if ads and budget align with profit. Paying 600–700 ₽ per lead at 300 ₽ average profit is a path to pretty stats and an empty till.",
        "Before fine-tuning the auction, lock: what counts as the goal, what CPA is acceptable, and what conversion the landing has on ad traffic.",
      ],
      lists: [
        {
          intro: "Minimum data:",
          items: [
            "Metrica goal (lead, call, purchase);",
            "target CPA from margin / LTV;",
            "click → goal conversion;",
            "niche seasonality awareness.",
          ],
        },
      ],
      links: [
        {
          label: "CPM or CPC",
          href: "/en/blog/cpm-ili-cpc/",
        },
      ],
    },
    {
      title: "How to calculate click price",
      level: 2,
      paras: [
        "Basic link: the higher the conversion, the more you can pay per click at the same CPA.",
        "Working guide formula: acceptable CPC = CPA × CR / 100, where CR is conversion in percent. Equivalent: CPC = CPA × (goals / clicks).",
      ],
      lists: [
        {
          intro: "Related definitions:",
          items: [
            "conversion CR = goals / clicks × 100%;",
            "CPA (cost per goal) = ad spend / number of goals;",
            "in planning: spend ≈ CPC × clicks → hence the CPC ceiling.",
          ],
        },
      ],
    },
    {
      title: "Calculation example",
      level: 2,
      paras: [
        "Gear ecommerce: ad conversion 1.5% (1.5 orders per 100 clicks). Target CPA — 150 ₽ per order.",
        "Acceptable CPC ≈ 150 × 1.5 / 100 = 2.25 ₽. On 200 clicks at that bid, spend is about 450 ₽ and roughly three orders expected — if conversion holds.",
        "If the auction asks 8 ₽ at the same conversion, order cost jumps above 500 ₽ — either improve the funnel, narrow queries, or admit the channel doesn’t pencil out in that semantics.",
      ],
    },
    {
      title: "Formula limits",
      level: 2,
      paras: [
        "The figure is an “on average” ceiling, not a guarantee. Competition, season, and lead quality move actual CPC and payback.",
        "Calculate strong and weak ad groups separately: overall site conversion can hide losing keywords. Bid and strategy control is the next layer after economics.",
      ],
      lists: [
        {
          intro: "Check if the calc “won’t fit” the auction:",
          items: [
            "ad and landing relevance;",
            "negatives and junk demand;",
            "landing speed and offer clarity;",
            "segment margin — is target CPA overstated.",
          ],
        },
      ],
      links: [
        {
          label: "Bids in Yandex Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
  ],
  closing: [
    "A suitable click price in Yandex is calculated from CPA and conversion, not from a “market average”. The formula sets the ceiling; next — traffic quality, ads, and the landing.",
  ],
};
