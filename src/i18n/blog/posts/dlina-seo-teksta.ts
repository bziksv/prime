import type { BlogPost } from "../../../data/blog";

/** EN overlay for dlina-seo-teksta — same structure as RU JSON. */
export const dlinaSeoTekstaEn: BlogPost = {
  slug: "dlina-seo-teksta",
  title: "SEO copy length: how much text a page needs",
  date: "2020-01-09",
  category: "SEO",
  cover: "/images/blog/dlina-seo-teksta/cover-en.webp",
  excerpt:
    "How long SEO copy should be: a length cue from page-one competitors, when a long-read helps, why word count without value won’t move rankings, and how to stop writing “for the character quota”.",
  lead: [
    "There is no universal SEO length like “2,000 characters for every page.” A product card needs a short description; a service page and a guide need different depth. Match search intent and don’t lose on answer completeness to strong results already ranking.",
    "Below: why length matters at all, how to set a brief from the first page of results, when a long-read fits, and which qualities beat a character counter. Volume without uniqueness, structure, and usefulness won’t fix rankings.",
  ],
  faq: [
    {
      q: "Is there an official character “norm” from Yandex or Google?",
      a: "No single number. They care about usefulness and query match. Use competitors already ranking — plus common sense — as your cue.",
    },
    {
      q: "If my copy is shorter than competitors’, can I still rank?",
      a: "Often yes. Shorter, clearer, and easier to use can beat 15,000 characters of fluff. A SERP length cue is a hypothesis, not a law.",
    },
    {
      q: "How much should I write on a product card?",
      a: "Enough for specs, differences, shipping/warranty, and buyer questions. Thousands of characters “about industry history” are rarely needed.",
    },
    {
      q: "Is a long-read always better?",
      a: "Only when the information is useful and structured. Otherwise bounce rate and fluff go up.",
    },
    {
      q: "Count length with or without spaces?",
      a: "Pick one method in the brief (often without spaces) and measure competitors the same way.",
    },
    {
      q: "Should I beat the page-one average by 500 characters?",
      a: "Not as a rule. Add facts, trust blocks, and real answers — don’t pad filler to hit a quota.",
    },
    {
      q: "Should empty pages be deleted?",
      a: "Yes, if you have nothing useful to publish. Thin URLs hurt more than leaving them out.",
    },
    {
      q: "Does more volume mean fast rankings?",
      a: "No. Copy is one layer of work. Site prep is often about a month; visibility across the keyword set usually builds over 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "What matters more than length",
      level: 2,
      paras: [
        "Good SEO copy is usually unique, useful, relevant to the query, free of keyword stuffing, structured (H2/H3, lists, tables, visuals), and sized for the page’s job. Length is one parameter in that set — not the main one.",
        "Clear writing, low fluff, sensible keyword density, and real expert facts often beat racing “they have 4,500 — we’ll write 5,000.” Don’t multiply empty template pages: delete or noindex them if there’s nothing worth publishing.",
      ],
      lists: [
        {
          intro: "Quality checklist before you open a character counter:",
          items: [
            "query intent is covered",
            "structure and scannability are in place",
            "keywords without stuffing",
            "uniqueness and fact-check",
            "CTA and trust blocks where they help",
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
      title: "How to set a length cue from page one",
      level: 2,
      paras: [
        "Pick the target page and its query cluster. In a private window, collect the first ~10 organic results for the main keyword (Yandex and Google may differ — note both if you need them). Open relevant competitor URLs and measure main-content length one consistent way (counter or export).",
        "Compute mean and median. The mean swings on one giant long-read; the median is often fairer. Treat the number as a brief cue, not a sentence. Match page type: comparing a product card to a guide is pointless.",
      ],
      lists: [
        {
          intro: "Simple process:",
          items: [
            "query and landing type",
            "first page of results in a private window",
            "main-text length on 5–10 relevant URLs",
            "mean/median plus spread",
            "brief: min / target / max — without mandatory fluff",
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
          text: "Copying length from an aggregator or marketplace with thousands of blocks. Measure competitors in your class and intent.",
        },
      ],
    },
    {
      title: "When a long text helps",
      level: 2,
      paras: [
        "A long-read fits when the topic is broad: a guide, comparison, how-to, or expert breakdown. Tables, diagrams, and illustrations then carry meaning; people share and return; updates keep the page useful longer.",
        "Long copy written only for character count hurts: fluff grows, readability drops, bounces rise. Simple rule — every block answers a real question; otherwise cut.",
      ],
      lists: [
        {
          intro: "A long-read makes sense if:",
          items: [
            "you have expertise and facts",
            "structure lets people scan",
            "intent is informational or mixed",
            "strong ranking pages also go deep — and you can match or beat that depth",
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
      title: "Different page types need different length",
      level: 2,
      paras: [
        "Homepages and categories are often shorter than articles: offer, proof, navigation. Service pages sit in the middle — benefits, process, FAQ. Blog and help range from a short answer to a full guide. Don’t drag “blog norms” onto a product card.",
        "After publish, watch behavior and rankings for more than a day: strengthen weak blocks, refresh outdated bits. Length can grow from usefulness — not from filler paragraphs.",
      ],
      lists: [
        {
          intro: "Practical ranges (cues, not dogma):",
          items: [
            "product card: brief + specs",
            "service/category: mid useful length + FAQ",
            "answer article: as much as closes the question",
            "guide: longer, with a TOC and updates",
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
      title: "Length as strategy, not a cult",
      level: 2,
      paras: [
        "Take a cue from the SERP, write at least as useful on meaning, then measure. Don’t expect rankings only because the character count grew. Content and tech prep take weeks or about a month; visibility across the core set builds over months (often 2–6 after work starts).",
        "Bottom line: length follows the page job and the competition — it isn’t an SEO goal on its own.",
      ],
      lists: [
        {
          intro: "Short takeaway:",
          items: [
            "no single “correct” length",
            "page-one competitors are a cue",
            "usefulness and structure beat the counter",
            "long-read only when there’s real substance",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "New copy ≠ instant page one. Watch movement after indexing for weeks and months.",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Why the site isn’t ranking",
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
