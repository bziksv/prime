import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibki-internet-magazina — same structure as RU JSON. */
export const oshibkiInternetMagazinaEn: BlogPost = {
  slug: "oshibki-internet-magazina",
  title: "7 ecommerce optimization mistakes auditors often miss",
  date: "2019-05-16",
  category: "Internet marketing",
  cover: "/images/blog/oshibki-internet-magazina/cover-en.webp",
  excerpt:
    "Hidden ecommerce mistakes: duplicates on pagination and filters, catalog mess, a useless price slider, weak photos, a region pop-up, extra pop-ups, and illogical filters.",
  lead: [
    "SEO audit checklists catch speed, 404s, and robots. But a store often loses sales and index on things that “technically work”: broken category sort, a price slider from zero to space, a region gate before content, and three pop-ups in a row.",
    "Below — seven such mistakes, how they hurt, and how to fix them. The broader catalog promotion outline is in a neighboring piece; here — what automatic reports usually skip.",
  ],
  faq: [
    {
      q: "Is this instead of technical SEO?",
      a: "No. Tech and semantics stay the base. These mistakes sit on top: catalog UX and templates that spoil behavior and spawn weak URLs.",
    },
    {
      q: "Are duplicates only from copy-pasted product cards?",
      a: "Often also from pagination (category text on every page), filters with the same description, and template brand blurbs across dozens of SKUs.",
    },
    {
      q: "Do you need a region picker right on entry?",
      a: "Only if region really changes price, stock, pickup points, or delivery. Otherwise don’t block the first screen.",
    },
    {
      q: "How many pop-ups are OK?",
      a: "The fewer before the first useful action — the better. A stack of region + subscribe + coupon on entry almost always hits bounce.",
    },
    {
      q: "Should filters always be kept out of the index?",
      a: "Depends on the combo’s value. Junk and near-empty slices — noindex/canonical; useful landings — plan separately.",
    },
    {
      q: "When to expect growth after fixes?",
      a: "UX fixes move behavior sooner. Core positions are planned over months after a stable index — not “a week after the slider”.",
    },
  ],
  sections: [
    {
      title: "Duplicates and catalog mess",
      level: 2,
      paras: [
        "Duplicate content in a store often comes from the CMS: the same category SEO text on every pagination page; filter descriptions copied onto every slice; same-brand cards cloning manufacturer specs.",
        "Second classic — a catch-all category. In “quadcopters”, page one shows screws and batteries because price sort pushes cheap consumables up. Relevance and trust drop: people look for aircraft and see spare parts.",
      ],
      lists: [
        {
          intro: "What to check:",
          items: [
            "unique text only on the canonical category page (not page=2…n);",
            "filters don’t clone one paragraph onto hundreds of URLs;",
            "category first screen shows products from the section name;",
            "accessories and consumables in their own sections — not mixed with core SKUs.",
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
      title: "Filters, photos, and the first screen",
      level: 2,
      paras: [
        "A price slider with one “cosmic” maximum is useless: sliding halfway cuts almost nothing. Better stepped ranges (“up to…”, “from… to…”) and moving outlier expensive SKUs into a premium slice.",
        "Bad photos (scans, blur, one angle) kill commerce harder than an “imperfect” title: you can’t tell the model, so people leave for a competitor’s image search. Need clarity, several angles, a sane format, and meaningful alt.",
        "A region pop-up and a queue of modals break first contact. Ask for city when price/delivery/offline points depend on it — and let people close without a quest. Fewer modals before product choice.",
      ],
      lists: [
        {
          intro: "Checkbox filters that hurt:",
          items: [
            "illogical parameter combos;",
            "slices that are almost always empty;",
            "indexing junk combinations as duplicates.",
          ],
        },
      ],
      notes: [
        {
          title: "Quick self-test",
          text: "Walk “found category → filtered → opened a card” on mobile as a new customer. Everything you stumble on kills conversion for everyone else.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Product page",
          href: "/en/blog/kartochka-tovara/",
        },
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "How to prioritize fixes",
      level: 2,
      paras: [
        "Benchmark top competitors on catalog structure and filters — borrow the useful meaning, not the layout. Find the worst niche examples and remove the same patterns at home.",
        "Then measure: bounce and depth on categories before/after, share of empty filters, time to first product on mobile. SEO positions on the core grow separately, planned over months after a stable base.",
      ],
    },
  ],
  closing: [
    "The seven mistakes in this piece rarely light up red in an automatic audit — but they hit behavior and the index. Fix catalog, filters, photos, and the first screen — then return to semantics and links.",
  ],
  related: [
    "prodvizhenie-internet-magazina",
    "kategorii-internet-magazina",
    "kartochka-tovara",
    "paginatsiya",
    "glavnaya-internet-magazina",
    "seo-oshibki",
  ],
};
