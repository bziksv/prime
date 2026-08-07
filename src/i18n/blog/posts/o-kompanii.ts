import type { BlogPost } from "../../../data/blog";

/** EN overlay for o-kompanii — same structure as RU JSON. */
export const oKompaniiEn: BlogPost = {
  slug: "o-kompanii",
  title: "About the company: what to write and what to avoid",
  date: "2020-06-23",
  category: "Content marketing",
  cover: "/images/blog/o-kompanii/cover-en.webp",
  excerpt:
    "How to write an About page without a founder novel and empty “we’re the best”: facts, proof, tone for the audience — and when almost nobody reads the text.",
  lead: [
    "About pages often get a template: years on the market, a team of professionals, rapid growth. Clients care more about who you’re for and what proves the claims.",
    "Below — what to cut, what to keep, and why the page exists at all. Homepage copy is separate; here the focus is the brand section.",
  ],
  faq: [
    {
      q: "Do people read About?",
      a: "Less than services and reviews. Still useful for trust, legal details, B2B, and anyone checking the vendor before a deal.",
    },
    {
      q: "Do I need a long founding story?",
      a: "Usually no. Short context — since when and why — yes; kilometers of “three friends met…” — rarely.",
    },
    {
      q: "Should I publish the whole team’s photos?",
      a: "Optional, depends on brand culture. For e-com, product and service often matter more; for an agency/clinic, faces and expertise fit.",
    },
    {
      q: "Can I claim “best prices / delivery in an hour”?",
      a: "Only if you deliver. False promises hurt reviews and ad compliance.",
    },
    {
      q: "Is this a keyword page?",
      a: "Not the goal. Cover semantics with services and articles; About is trust and facts — not a keyword sheet.",
    },
    {
      q: "How is it different from the homepage?",
      a: "Homepage — offer and next steps. About — who you are, proof, values, contacts/legal details.",
    },
    {
      q: "Should cases live here?",
      a: "Briefly yes, or link to a cases section. Numbers without context (“+150% conversion”) read like fluff.",
    },
    {
      q: "How long should it be?",
      a: "As long as needed to answer audience doubts. Often 1–3 screens beat a novel.",
    },
  ],
  sections: [
    {
      title: "What not to do",
      level: 2,
      paras: [
        "A founding story sheet with no help for choosing you.",
        "Impossible promises and cheap “gift” pathos instead of a brand position.",
        "Template “why us”: professionals, innovation, personalized approach — with no facts.",
        "A CTA like “write articles for us / become a partner” instead of answering the client.",
      ],
      lists: [],
    },
    {
      title: "What is useful to write",
      level: 2,
      paras: [
        "Who you serve and which job you close — in the client’s language.",
        "Proof: years/geo if needed, certificates, cases with links, real numbers with explanation.",
        "How the service works: stages, guarantees, responsibility zones — what lowers deal fear.",
        "Legal details and contacts for B2B: entity, address, how to reach you.",
      ],
      lists: [
        {
          intro: "Match tone to the audience:",
          items: [
            "B2B — reliability, processes, cases;",
            "mass service — clarity, prices/terms, reviews;",
            "local business — geo, atmosphere, neighborhood specifics.",
          ],
        },
      ],
      links: [
        {
          label: "Homepage copy",
          href: "/en/blog/tekst-glavnoy-stranitsy/",
        },
        {
          label: "Homepage",
          href: "/en/blog/glavnaya-stranitsa/",
        },
      ],
    },
    {
      title: "When the page is required",
      level: 2,
      paras: [
        "Before an expensive deal the client checks the vendor.",
        "Transparency is expected (healthcare, finance, B2B tenders).",
        "You need a trust anchor next to reviews and cases — not “so we’re not worse than competitors.”",
      ],
      lists: [],
      notes: [
        {
          title: "Trust priority",
          text: "Reviews, cases, and clear service terms often convert better than a lyrical About. The page complements them — it doesn’t replace them.",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Facts and help choosing beat biography.",
        "Promises = obligations.",
        "Tone and length follow the audience — not a 2015 TOP template.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Open About and cut everything that doesn’t help answer “can I trust you with this order” — the text usually gets shorter and stronger right away.",
  ],
  related: [
    "tekst-glavnoy-stranitsy",
    "glavnaya-stranitsa",
    "tz-kopiraytera",
    "kopirayting",
    "otzyvy-dlya-prodazh",
    "korporativnyy-blog",
  ],
};
