import type { BlogPost } from "../../../data/blog";

/** EN overlay for cms-internet-magazina — same structure as RU JSON. */
export const cmsInternetMagazinaEn: BlogPost = {
  slug: "cms-internet-magazina",
  title:
    "CMS for an online store: downsides of Bitrix, Magento, OpenCart, WooCommerce, and CS-Cart",
  date: "2019-03-15",
  category: "Internet marketing",
  cover: "/images/blog/cms-internet-magazina/cover-en.webp",
  excerpt:
    "How to pick a CMS for an online store with typical downsides in mind: 1C-Bitrix, Magento, OpenCart, WooCommerce, and CS-Cart — without 2019 price lists and the myth “the engine alone ranks you in the TOP”.",
  lead: [
    "A store CMS is the admin for catalog, orders, payments, and content. Every popular platform has strengths and a compromise cost: license, hosting, SEO hygiene, customization, team.",
    "Below — typical downsides of the five platforms most often asked about on RU projects. We don’t copy 2019 license figures or “module for $N”: check current vendor pricing. The engine doesn’t replace SEO and UX; core rankings take planned months of work — not “installed OpenCart = TOP”.",
  ],
  faq: [
    {
      q: "Is there a CMS without drawbacks?",
      a: "No. Choose for catalog, integrations (1C, payments, shipping), build budget, and who will maintain it.",
    },
    {
      q: "Is a free CMS always cheaper?",
      a: "Entry is often cheaper; finish work costs more: modules, hosting, security, a developer. Count TCO over 1–2 years.",
    },
    {
      q: "What matters more for SEO — CMS or content?",
      a: "Content, tech, and links beat the engine brand. The CMS must not get in the way: clean URLs, speed, indexing, structured data.",
    },
    {
      q: "How do you detect a competitor’s CMS?",
      a: "From open HTML/path clues — in a separate article. Not by hacking the admin.",
    },
    {
      q: "Change CMS after launch?",
      a: "Expensive and risky for SEO/URLs. Better to choose closer to requirements at the start than “migrate in a year”.",
    },
  ],
  sections: [
    {
      title: "How to read CMS downsides",
      level: 2,
      paras: [
        "One platform’s minus is another’s plus. Bitrix is heavy for a 30-SKU storefront; OpenCart may not cover complex B2B logic out of the box.",
        "Judge: catalog size, need for 1C, multilingual, team (in-house vs agency), speed and security needs. A demo and pilot on a data copy beat marketing “TOP-5” lists.",
      ],
      lists: [
        {
          intro: "Selection checklist:",
          items: [
            "SKU count and filters;",
            "payment / shipping / 1C integrations;",
            "who edits the catalog daily;",
            "budget for licenses + build + hosting;",
            "SEO plan: clean URLs, canonicals, speed.",
          ],
        },
      ],
      links: [
        {
          label: "Starting an online store",
          href: "/en/blog/start-internet-magazina/",
        },
        {
          label: "How to detect a CMS",
          href: "/en/blog/uznat-cms/",
        },
      ],
    },
    {
      title: "1C-Bitrix: where it usually hurts",
      level: 2,
      paras: [
        "Strength — ecosystem for RU business and a 1C link. Downsides: cost of a suitable edition, hosting needs, hard customization of “ready” solutions, and a steep admin learning curve for beginners.",
        "Modules and tweaks often need a developer: a “small” template change can cost more than it looks. For a tiny storefront, TCO sometimes exceeds the benefit.",
      ],
      lists: [
        {
          intro: "Typical risks:",
          items: [
            "license and updates;",
            "heavy hosting without optimization;",
            "dependency on an integrator;",
            "paying for features you never use.",
          ],
        },
      ],
      links: [
        {
          label: "SEO on Bitrix",
          href: "/en/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "Magento / Adobe Commerce",
      level: 2,
      paras: [
        "A powerful class for large catalogs and complex commerce. Downsides: expensive build and support, high server needs, complex admin and docs for beginners.",
        "The line evolved (open source / commercial editions under Adobe) — verify current names and licenses. Out-of-the-box 1C integration usually isn’t a surprise gift: budget modules separately.",
      ],
      lists: [
        {
          intro: "When downsides bite:",
          items: [
            "small catalog and small budget;",
            "no strong development team;",
            "need a fast MVP without enterprise architecture.",
          ],
        },
      ],
    },
    {
      title: "OpenCart",
      level: 2,
      paras: [
        "Entry pluses: easy start and a large community. Downsides: SEO hygiene (duplicates, canonicals, clean URLs) often needs modules and careful setup; free themes vary in quality; on large catalogs performance hits hosting and code limits.",
        "“Doesn’t work with search” as an absolute is overstated. It works if you close tech; without that you easily get junk URLs and duplicates.",
      ],
      lists: [
        {
          intro: "Where to budget effort:",
          items: [
            "canonicals and duplicates;",
            "clean URLs and redirects after modules;",
            "security updates;",
            "catalog size / load limits.",
          ],
        },
      ],
    },
    {
      title: "WooCommerce",
      level: 2,
      paras: [
        "A store as a WordPress plugin: familiar ecosystem and lots of extensions. Downsides: “free” quickly sprouts paid modules; plugin conflicts; hosting load with a heavy theme and cache “as it happened”.",
        "Payments and local RU flows need a separate check — don’t copy a Western box without testing. An old “third of the market” share isn’t an argument for your case.",
      ],
      lists: [
        {
          intro: "Typical pains:",
          items: [
            "plugin zoo;",
            "speed on shared hosting;",
            "WP + plugins security;",
            "hard checkout customization.",
          ],
        },
      ],
    },
    {
      title: "CS-Cart",
      level: 2,
      paras: [
        "A commercial CMS with strong store features “in the base”. Downsides: license and option price, support/update model (terms change — read the contract), some paid modules.",
        "Checkout UX and required order fields affect conversion more than the CMS brand: budget funnel testing, not only price comparison.",
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t use fixed “$375 / $550 / support credits” from a 2019 article as a price list. Check current editions on the vendor site.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to choose without fanaticism",
      level: 2,
      paras: [
        "Gather requirements → cut platforms that clearly can’t do integrations → compare TCO and developer availability → prototype catalog and checkout.",
        "For SEO, clean URLs, speed, index, and content beat “which CMS is trendy”. Changing the engine later is almost always more expensive than choosing well now.",
      ],
      links: [
        {
          label: "Building an online store",
          href: "/en/blog/sozdanie-internet-magazina/",
        },
        {
          label: "Promoting an online store",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
  ],
  closing: [
    "Bitrix, Magento, OpenCart, WooCommerce, and CS-Cart have different entry costs and different pitfalls. Choose for catalog, 1C, and the support team — and budget SEO/speed into the project instead of hoping the “right engine” alone brings TOP rankings.",
  ],
  related: [
    "start-internet-magazina",
    "sozdanie-internet-magazina",
    "seo-bitrix",
    "uznat-cms",
    "prodvizhenie-internet-magazina",
    "oshibki-internet-magazina",
  ],
};
