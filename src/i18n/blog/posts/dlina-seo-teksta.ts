import type { BlogPost } from "../../../data/blog";

/** EN overlay for dlina-seo-teksta — same structure as RU JSON. */
export const dlinaSeoTekstaEn: BlogPost = {
  slug: "dlina-seo-teksta",
  title: "SEO text length: how to choose the volume",
  date: "2020-01-09",
  category: "SEO",
  cover: "/images/blog/dlina-seo-teksta/cover-en.webp",
  excerpt:
    "How long an SEO text should be: a guide from top competitors, when a long-read helps, why volume without value doesn’t lift rankings, and how not to write “for character count”.",
  lead: [
    "Optimal SEO text length is not a universal brief number like “2,000 characters for everyone.” A product card needs a short description; a commercial service and a guide need different volumes. Match the intent and don’t lose on answer completeness to strong SERP pages.",
    "Why size matters at all, how to take a guide from the top 10, when a long-read fits, and which text qualities beat a character counter. Volume without uniqueness, structure, and usefulness doesn’t save ranks.",
  ],
  faq: [
    {
      q: "Is there an official character “norm” from Yandex/Google?",
      a: "No single figure. They look at usefulness and query match. The guide is top competitors and common sense.",
    },
    {
      q: "If the text is shorter than competitors’, is ranking impossible?",
      a: "Not always. Shorter but more precise and usable often beats 15,000 characters of fluff. A SERP length guide is a hypothesis, not a law.",
    },
    {
      q: "How much should I write on a product card?",
      a: "Enough to cover specs, differences, shipping/warranty, and buyer questions. Thousands of characters “about industry history” are rarely needed.",
    },
    {
      q: "Is a long-read always better?",
      a: "Only if the information is useful and structured. Otherwise bounce and fluff grow.",
    },
    {
      q: "Count volume with or without spaces?",
      a: "Lock one method in the brief (often without spaces) and compare competitors the same way.",
    },
    {
      q: "Should I exceed the top-results average by 500 characters?",
      a: "Not as a rule. Better add facts, trust blocks, and answers to questions than pad filler to a quota.",
    },
    {
      q: "Should empty pages be deleted?",
      a: "Yes, if there’s nothing useful to fill. Thin URLs hurt more than their absence.",
    },
    {
      q: "Does more volume equal fast rankings?",
      a: "No. Text is one work layer. Site prep — about a month; keyword-set ranking buildup is planned over 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "What matters more than length",
      level: 2,
      paras: [
        "Quality SEO copy is usually unique, useful, query-relevant, without keyword stuffing, with structure (H2/H3, lists, tables, illustrations) and a sensible volume for the page job. Length is one parameter in that set — not the main one.",
        "Literacy, low fluff, adequate keyword density, and live expert facts often decide more than racing “competitor has 4,500 — we write 5,000.” Don’t multiply empty template pages: delete or noindex them if there’s nothing to fill.",
      ],
      lists: [
        {
          intro: "Quality checklist before the character counter:",
          items: [
            "query intent matched",
            "structure and scannability present",
            "keywords without stuffing",
            "uniqueness and fact-check",
            "CTA and trust blocks where needed.",
          ],
        },
      ],
      links: [
        {
          label: "Site content",
          href: "/en/blog/napolnenie-sayta/",
        },
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "Text fluff ratio",
          href: "/en/blog/toshnota-teksta/",
        },
      ],
    },
    {
      title: "How to take a guide from the top 10",
      level: 2,
      paras: [
        "Pick the target page and its query cluster. In incognito, collect the top 10 for the main key (Yandex and Google may differ — lock both if needed). Open relevant competitor URLs and measure main-content volume one way (counter / export).",
        "Compute mean and median. The mean is sensitive to one giant long-read; the median is often fairer. That number is a brief guide, not a sentence. Match page type: comparing a card to a guide is pointless.",
      ],
      lists: [
        {
          intro: "Algorithm:",
          items: [
            "query and landing type",
            "top 10 in incognito",
            "main-text volume on 5–10 relevant URLs",
            "mean/median + spread",
            "brief: min/target/max without mandatory fluff.",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "Entry pages",
          href: "/en/blog/tochki-vhoda/",
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Copying volume from an aggregator or marketplace with thousands of blocks. Take competitors of your class and intent.",
        },
      ],
    },
    {
      title: "When a long text helps",
      level: 2,
      paras: [
        "A long-read fits when the topic is broad: a guide, comparison, how-to, expert breakdown. Tables, diagrams, and illustrations then carry meaning; people share and return; the page stays relevant longer with updates.",
        "Long text for character count hurts: fluff grows, readability drops, bounces rise. Simple rule — every block answers a real question; otherwise cut.",
      ],
      lists: [
        {
          intro: "A long-read makes sense if:",
          items: [
            "expertise and facts exist",
            "structure allows scanning",
            "intent is informational or mixed",
            "top competitors also give depth — and you can match or beat it.",
          ],
        },
      ],
      links: [
        {
          label: "Text spamminess",
          href: "/en/blog/zaspamlennost-teksta/",
        },
        {
          label: "Site bounce rate",
          href: "/en/blog/otkazy-sayta/",
        },
      ],
    },
    {
      title: "Different page types — different volume",
      level: 2,
      paras: [
        "Homepages and categories are often shorter than articles: offer, proof, navigation. Services — mid volume with benefits, process, FAQ. Blog and help — from a short answer to a guide. Don’t drag “blog norms” onto a product card.",
        "After publish, watch behavior and ranks for more than a day: strengthen weak blocks, refresh outdated bits. Length can grow from usefulness — not from filler paragraphs.",
      ],
      lists: [
        {
          intro: "Practical ranges (guides, not dogma):",
          items: [
            "product card: brief + specs",
            "service/category: mid useful volume + FAQ",
            "answer article: as much as closes the question",
            "guide: longer, but with TOC and updates.",
          ],
        },
      ],
      links: [
        {
          label: "Product description",
          href: "/en/blog/opisanie-tovara/",
        },
        {
          label: "Content updates",
          href: "/en/blog/obnovlenie-kontenta/",
        },
      ],
    },
    {
      title: "Volume in strategy, not a cult",
      level: 2,
      paras: [
        "Take a guide from the SERP, write no worse on meaning, measure. Don’t promise yourself rankings only because the character count grew. Content and tech prep — weeks or about a month; core visibility builds planned over months (often 2–6 after work starts).",
        "Bottom line: length follows the page job and competition — it isn’t an SEO goal on its own.",
      ],
      lists: [
        {
          intro: "Short takeaway:",
          items: [
            "no single “correct” length",
            "top competitors are a guide",
            "usefulness and structure beat the counter",
            "long-read — only with substance.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "New text ≠ instant top 10. Watch dynamics after indexing for weeks and months.",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Why the site isn’t in the top results",
          href: "/en/blog/sayt-ne-v-top/",
        },
      ],
    },
  ],
  related: [
    "napolnenie-sayta",
    "kopirayting",
    "toshnota-teksta",
    "analiz-konkurentov",
    "opisanie-tovara",
    "zaspamlennost-teksta",
  ],
};
