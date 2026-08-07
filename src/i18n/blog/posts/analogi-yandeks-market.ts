import type { BlogPost } from "../../../data/blog";

/** EN overlay for analogi-yandeks-market — same structure as RU JSON. */
export const analogiYandeksMarketEn: BlogPost = {
  slug: "analogi-yandeks-market",
  title: "Yandex Market alternatives: why diversify and how to choose",
  date: "2021-06-24",
  category: "E-commerce",
  cover: "/images/blog/analogi-yandeks-market/cover-en.webp",
  excerpt:
    "Why an online store shouldn’t lean only on Yandex Market, which nearby platform types exist, and how to pick sales channels — without a 2021 catalog of dead services.",
  lead: [
    "Yandex Market is a major channel for comparing and selling goods. But the catalog is competitive, terms and visibility change, and buyers also shop on marketplaces and other price aggregators.",
    "Don’t copy 2021 brand lists and rate cards blindly — the market moved on. Add channels by SKU economics: your site, Market, marketplaces, and price aggregators — and measure CPA/ROI per platform.",
  ],
  faq: [
    {
      q: "Do you need to leave Yandex Market entirely?",
      a: "Not necessarily. More often you add channels: your site + Market + marketplaces / price aggregators — by SKU economics.",
    },
    {
      q: "How does a price aggregator differ from a marketplace?",
      a: "An aggregator more often sends people to a comparison card and then to the seller’s store. A marketplace may take the order itself (FBO/FBS and its own rules).",
    },
    {
      q: "Is one YML feed enough for every platform?",
      a: "One base, but platforms have their own fields, categories, and moderation. Plan feed adaptation and error monitoring.",
    },
    {
      q: "Why are old “Goods@Mail / Wikimart” lists outdated?",
      a: "Many services closed or changed model. Use the platform’s current status and a pilot test.",
    },
    {
      q: "Where should a beginner start?",
      a: "Count margin after fees, check niche demand, export a clean feed, and measure CPA/ROI by channel.",
    },
  ],
  sections: [
    {
      title: "Why look beyond Market",
      level: 2,
      paras: [
        "In one big catalog it’s easy to get lost: price competition, dependence on algorithms and the product card, disputes over stock and delivery. An extra channel cushions demand and lowers the “all eggs in one basket” risk.",
        "Buyers don’t compare only on Market: marketplaces, search, price aggregators, and your own site cover different choice scenarios.",
      ],
      lists: [
        {
          intro: "Typical triggers to diversify:",
          items: [
            "high competition and dumping in the niche;",
            "visibility / moderation limits;",
            "need reach on another platform’s audience;",
            "testing FBO/FBS vs your own store.",
          ],
        },
      ],
    },
    {
      title: "Platform types next to Market",
      level: 2,
      paras: [
        "Not every “alternative” is a Market clone. Some are marketplaces with logistics, some are price comparison that exits to the seller’s site, some are ad networks for product ads.",
        "Don’t treat name lists from 2021 guides (dead aggregators, closed projects) as a launch plan. Check whether the platform is alive, which feeds it takes, and the unit economics.",
      ],
      lists: [
        {
          intro: "Type map:",
          items: [
            "price aggregators / comparison;",
            "marketplaces with a storefront and fulfillment;",
            "product ads / affiliate networks;",
            "your own online store as a controlled channel.",
          ],
        },
      ],
      links: [
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Online store categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "How to choose a channel",
      level: 2,
      paras: [
        "Don’t chase “millions of users in the ads.” Look at your unit economics: fees, CPC/CPA, returns, photo and copy requirements, moderation speed, regional delivery support.",
        "Technically what matters: feed format (often YML and analogues), stable price/stock updates, reports on clicks and orders.",
      ],
      lists: [
        {
          intro: "Checklist before connecting:",
          items: [
            "margin after fees and logistics;",
            "category and attribute compatibility;",
            "content rules and penalties;",
            "pilot on part of the assortment;",
            "end-to-end order analytics.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "One “dead” catalog with stale prices is worse than two channels with a clean feed and measured ROI.",
        },
      ],
    },
    {
      title: "How to fit it into the sales system",
      level: 2,
      paras: [
        "Keep one source of truth for prices and stock (ERP/CRM/accounting) and build feeds per platform from it. Otherwise mismatch kills rating and budget.",
        "Compare channels on the same metrics: acquisition cost, margin, return rate, support load. Turn off what doesn’t pay back after the test.",
      ],
      lists: [
        {
          intro: "Process minimum:",
          items: [
            "fresh feed and error alerts;",
            "an owner for cards and reviews;",
            "weekly channel report;",
            "pricing rules without racing discounts into the red.",
          ],
        },
      ],
      links: [
        {
          label: "Online payment on the site",
          href: "/en/blog/onlayn-oplata/",
        },
        {
          label: "Client reporting",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
  ],
};
