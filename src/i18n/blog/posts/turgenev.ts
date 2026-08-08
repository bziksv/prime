import type { BlogPost } from "../../../data/blog";

/** EN overlay for turgenev — same structure as RU JSON. */
export const turgenevEn: BlogPost = {
  slug: "turgenev",
  title: "Turgenev: checking copy for over-optimization risk",
  date: "2018-04-27",
  category: "SEO",
  cover: "/images/blog/turgenev/cover-en.webp",
  excerpt:
    "What Ashmanov & Partners’ Turgenev checks: text-spam risk, nausea, water, and style — how to read scores, and why it is not a “Baden-Baden button” or a ranking guarantee.",
  lead: [
    "Turgenev is an online text checker built around risks similar to text spam — including the risk cluster people linked to Yandex’s Baden-Baden algorithm. It scores overstuffing, water, style, and a total risk score.",
    "Below: who it helps, how the scoring logic works, and how to edit from the report. Score scales and UI have changed since 2018 — focus on the meaning of the recommendations and current service Help. A high score is not an automatic filter; a zero score is not relevance or page-one visibility.",
  ],
  faq: [
    {
      q: "Is Turgenev the same as Baden-Baden?",
      a: "No. It is a third-party risk estimate. Yandex’s decision is broader: meaning, behavior, site quality. The service is an editor’s helper.",
    },
    {
      q: "Do all texts need zero risk?",
      a: "No. Catalogs and specs naturally repeat terms. Chase readability and usefulness, not “0 at any cost.”",
    },
    {
      q: "How is it different from Advego / text.ru?",
      a: "Different formulas and focus. Turgenev leans on over-optimization risk and style; Advego — nausea; text.ru — uniqueness / spamminess.",
    },
    {
      q: "If you fixed the score, will rankings grow?",
      a: "Not guaranteed. Clearing clear overstuffing helps UX and lowers risk. Core visibility takes planned months of work — not one check.",
    },
    {
      q: "Can you trust Turgenev alone?",
      a: "Better as a bundle: page meaning + another density / uniqueness tool + an editor’s common sense.",
    },
  ],
  sections: [
    {
      title: "Why use Turgenev",
      level: 2,
      paras: [
        "After waves of text filters, teams needed a fast checklist: does the copy sound like a keyword dump, is there water and bureaucratese, is “spamminess” risk inflated.",
        "The tool helps SEO, authors, and clients as a shared brief language: “lower risk / cut water,” not endless “I feel there aren’t enough keywords.”",
      ],
      lists: [
        {
          intro: "Who usually reads the report:",
          items: [
            "editors — accepting copy",
            "SEO — auditing old landings",
            "authors — self-check before delivery",
            "site owners — when informational pages drop",
          ],
        },
      ],
      links: [
        {
          label: "Text nausea",
          href: "/en/blog/toshnota-teksta/",
        },
        {
          label: "Uniqueness checks",
          href: "/en/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "How scoring works (as far as known)",
      level: 2,
      paras: [
        "At the core — heuristics for text traits associated with over-optimization sanctions, plus comparison to “human” samples. The service looks not only at keyword frequency, but style, water, and unnatural phrasing.",
        "The result is a sum of penalty points by blocks. Historical ranges (low / medium / high / critical) guided edits; check exact thresholds in the current UI — they may have shifted.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Don’t confuse with a search verdict",
          text: "A site with a “high” score is sometimes visible in the results, and “green” copy without meaning is not. The score is an edit signal, not an auto filter diagnosis.",
        },
      ],
    },
    {
      title: "How to check text",
      level: 2,
      paras: [
        "Open the current service site (historically turgenev.ashmanov.com), sign up if needed, paste text or a URL per the service rules, and run analysis.",
        "Do not watch only the total: expand notes on water, stop words, keywords, and style. Edit surgically — cutting every term repeat on a product card often hurts.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "check the draft before publish",
            "fix critical notes",
            "reread aloud / on mobile",
            "verify uniqueness with a separate tool",
            "do not chase zero at the topic’s expense",
          ],
        },
      ],
    },
    {
      title: "What to do at high risk",
      level: 2,
      paras: [
        "Remove unnatural keyword chains, dilute water with facts and examples, rewrite bureaucratese. Break a wall of text with subheads. On commercial pages keep needed terms — cut pushy “buy buy buy.”",
        "If a URL group dropped after an update — first confirm tech and indexing, then mass-run texts through the service. One rewritten homepage does not heal the whole site.",
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Service limits",
      level: 2,
      paras: [
        "Not all page types score the same: lists, menus, SKU specs naturally repeat words. Blind “lower risk” can kill relevance.",
        "The service does not replace niche experts and does not see the whole site (links, speed, commercial factors). Use it as an editorial layer with analytics and Webmaster.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Turgenev helps catch overstuffing and heavy style before publish. Scores are a brief compass, not a ranking law.",
        "Edit for people and topic clarity; zero risk at any cost and “it will lift Baden-Baden” promises are bad goals.",
      ],
    },
  ],
  closing: [
    "Run disputed SEO texts through Turgenev, close clear water and keyword notes, and reread with human eyes — that is how the service works as an editorial filter, not a replacement for a promotion strategy.",
  ],
  related: [
    "toshnota-teksta",
    "proverka-unikalnosti",
    "filtry-poiskovikov",
    "kopirayting",
    "dlina-seo-teksta",
    "zaspamlennost-teksta",
  ],
};
