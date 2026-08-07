import type { BlogPost } from "../../../data/blog";

/** EN overlay for teksty-uzkaya-tematika — same structure as RU JSON. */
export const tekstyUzkayaTematikaEn: BlogPost = {
  slug: "teksty-uzkaya-tematika",
  title: "How to write for a narrow niche",
  date: "2020-01-14",
  category: "Content marketing",
  cover: "/images/blog/teksty-uzkaya-tematika/cover-en.webp",
  excerpt:
    "Copy for a narrow niche: beginner-friendly language, current facts, expertise, and structure — illustrated with travel and transferable to any tight topic.",
  lead: [
    "In a narrow niche competition is often higher, and readers spot fakes faster: vague lines and outdated numbers don’t land. You need clarity for beginners, fresh facts, and author experience.",
    "These are the working principles. Travel examples show the logic; the same rules apply in medical lighting, B2B software, legal consulting, and other niches. The general article algorithm is covered separately.",
  ],
  faq: [
    {
      q: "How is a narrow topic different from “just an article”?",
      a: "The cost of factual and jargon mistakes is higher. Readers are often beginners on details but strict about accuracy.",
    },
    {
      q: "Do I need to be a practicing expert?",
      a: "Preferably. Otherwise — interview an expert and fact-check. Invented “personal experience” shows.",
    },
    {
      q: "How do I avoid drowning in jargon?",
      a: "Explain concepts in plain language or a short footnote. Write as if the reader is new to the topic.",
    },
    {
      q: "What about outdated prices and dates?",
      a: "State the as-of date or update. In travel, finance, and law, stale info hurts.",
    },
    {
      q: "Can a catchy headline save weak copy?",
      a: "No. The headline earns a chance to open; finish-rate and trust come from facts and value.",
    },
    {
      q: "Is a USP required in every article?",
      a: "For commercial pieces — yes, a clear difference. Don’t mix up USP with a slogan for slogan’s sake.",
    },
    {
      q: "Are keywords in the title mandatory?",
      a: "For search — a natural phrasing for intent. Not at the cost of readability or clickbait.",
    },
  ],
  sections: [
    {
      title: "Write for a niche beginner",
      level: 2,
      paras: [
        "A common mistake is treating the audience as “all our people.” In travel, as in other niches, many readers are on a first experience: explain routes, terms, and risks without jargon soup.",
        "Lists, numbers, and step blocks help finish reading. Pro photos/diagrams build trust when they’re not stock for stock’s sake.",
      ],
    },
    {
      title: "Freshness and facts",
      level: 2,
      paras: [
        "Monitor the niche and competitors, but don’t copy their texts. Structure should feel logical “today,” not a template from two years ago.",
        "Prices, dates, coordinates, entry rules, legal norms — only from verifiable sources. Better an “as of …” caveat than harming the reader.",
      ],
      lists: [
        {
          intro: "Before publish:",
          items: [
            "verify numbers and links;",
            "as-of date in the text when needed;",
            "an update plan for seasonal pieces.",
          ],
        },
      ],
      links: [
        {
          label: "E-E-A-T copywriting",
          href: "/en/blog/eat-kopirayting/",
        },
      ],
    },
    {
      title: "Expertise and tone",
      level: 2,
      paras: [
        "Write what you have experience in — or access to an expert. Rewrites of “someone else’s impressions” get caught fast in a narrow niche.",
        "Tone — lively, without false chumminess and fluff. Humor fits when it doesn’t hurt accuracy.",
      ],
      links: [
        {
          label: "How to write an article",
          href: "/en/blog/kak-napisat-statyu/",
        },
      ],
    },
    {
      title: "Headlines, audience, and offer",
      level: 2,
      paras: [
        "Headline: benefit, a number, or a clear angle — without deceit. Subheads hold scanning.",
        "Audience sets the level: budget backpacker and luxury tour need different promises. In commercial copy strengthen a real USP, not an empty slogan.",
      ],
      links: [
        {
          label: "4U headlines",
          href: "/en/blog/zagolovki-4u/",
        },
        {
          label: "USP",
          href: "/en/blog/utp/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "SEO",
          text: "Semantics help cover a cluster’s questions. “Keyword in title → TOP” is a myth; answer completeness and trust decide.",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Narrow niche = factual accuracy + beginner-friendly language.",
        "Experience beats a pretty rewrite.",
        "Update seasonal and price-sensitive pieces.",
      ],
    },
  ],
  closing: [
    "Pick one niche article and cut everything you can’t back with a source or experience — the text usually gets shorter and stronger right away.",
  ],
  related: [
    "kak-napisat-statyu",
    "eat-kopirayting",
    "seo-kopirayting",
    "utp",
    "zagolovki-4u",
    "tz-kopiraytera",
  ],
};
