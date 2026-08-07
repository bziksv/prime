import type { BlogPost } from "../../../data/blog";

/** EN overlay for auktsion-direkt — same structure as RU JSON. */
export const auktsionDirektEn: BlogPost = {
  slug: "auktsion-direkt",
  title: "Yandex Direct auction: bids, CTR, and competition",
  date: "2017-04-10",
  category: "Paid search",
  cover: "/images/blog/auktsion-direkt/cover-en.webp",
  excerpt:
    "How the Yandex Direct auction works: bid and ad quality, second-price logic, why “premium placement” from 2017 guides is a historical term, and why competitors’ “bid props” are a bad idea.",
  lead: [
    "In Direct, placement and click price are set by an auction: bid, clickability forecast, and ad-plus-landing-page quality all count. A higher bid isn’t always better value and not always higher.",
    "Bidding wars hurt everyone; relevance and landing-page quality often beat a price race. The “premium placement” term and step figures from 2017 materials are outdated — check the current auction in Yandex Help.",
  ],
  faq: [
    {
      q: "What does the Direct auction decide?",
      a: "Who shows and how much they pay per click for a given query, device, and audience — weighing bid and quality.",
    },
    {
      q: "Is Yandex Direct a second-price auction?",
      a: "The idea of “paying not your max bid, but enough to win” is close to the classic model. Exact formulas and steps have changed — see Direct Help.",
    },
    {
      q: "Is CTR more important than the bid?",
      a: "Both matter. A weak ad with a high bid often loses to a relevant competitor.",
    },
    {
      q: "What is a bid “prop” in Direct?",
      a: "A historical gray tactic: hold the bid at a block boundary to inflate neighbors’ CPC. We don’t recommend it: expensive, risky, and invites counter-wars.",
    },
    {
      q: "Is premium placement still bought as a separate tariff?",
      a: "As an old tariff — no. There are SERP positions and strategies; details are in the premium-placement piece.",
    },
    {
      q: "How should you compete fairly in the auction?",
      a: "Offer, negatives, copy, landing, CPA economics. Not a race for “whoever is higher at any cost.”",
    },
    {
      q: "Where should you look instead of bid wars?",
      a: "The bids-in-Direct piece and conversions in Yandex Metrica/CRM.",
    },
  ],
  sections: [
    {
      title: "How the winner is scored",
      level: 2,
      paras: [
        "Simply put: the system compares not only the bid in rubles, but expected response. An ad with better CTR and relevance can beat a more expensive but weak bid.",
        "The calculation sits in the query and show conditions. So the same keywords behave differently morning and evening, on phone and desktop.",
      ],
      links: [
        {
          label: "Bids in Direct",
          href: "/en/blog/stavki-direkt/",
        },
        {
          label: "Premium placement: what it was",
          href: "/en/blog/spetsrazmeshchenie-direkt/",
        },
      ],
    },
    {
      title: "Click price and “second price”",
      level: 2,
      paras: [
        "The winner often doesn’t pay their bid ceiling, but enough to beat the next participant (plus the platform’s minimum step — it has changed over time).",
        "Practical takeaway: inflating the bid “with a buffer” without CPA economics burns budget. Better improve the ad and landing page than forever chase a competitor with money.",
      ],
      lists: [
        {
          intro: "What to check before raising the bid:",
          items: [
            "negatives and junk demand;",
            "headlines and sitelinks;",
            "landing speed and offer;",
            "target CPA and margin.",
          ],
        },
      ],
    },
    {
      title: "“Props” and price wars",
      level: 2,
      paras: [
        "Old guides described a tactic: pin the bid to a premium-block boundary to raise neighbors’ CPC. Formally it’s auction manipulation to harm a competitor.",
        "Downsides are obvious: a counterstrike on your keywords, budget waste when the entry threshold shifts, brand-war escalation. Direct and support don’t have to protect such schemes.",
        "Fair competition is campaign and product quality — not “punishing a newbie with an inflated bid.”",
      ],
      links: [
        {
          label: "Budget in Direct",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Examples with “premium placement,” “guarantees,” and a ₽0.30 step are a 2017 slice. Auction, blocks, and strategies have updated. Don’t use this piece as a guide to harm competitors.",
  },
  closing: [
    "If clicks get more expensive and leads don’t — first unpack ad and landing-page quality, don’t hunt for a “prop”: Direct’s auction rewards relevance more than a bid war.",
  ],
  related: [
    "stavki-direkt",
    "spetsrazmeshchenie-direkt",
    "byudzhet-yandeks-direkt",
    "strategii-yandeks-direkt",
    "minus-slova-direkt",
    "klyuchi-yandeks-direkt",
  ],
};
