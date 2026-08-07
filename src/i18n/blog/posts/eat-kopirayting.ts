import type { BlogPost } from "../../../data/blog";

/** EN overlay for eat-kopirayting — same structure as RU JSON. */
export const eatKopiraytingEn: BlogPost = {
  slug: "eat-kopirayting",
  title: "E-E-A-T copywriting: how to write with expertise and trust",
  date: "2020-01-29",
  category: "Content marketing",
  cover: "/images/blog/eat-kopirayting/cover-en.webp",
  excerpt:
    "E-E-A-T in copy: experience, expertise, authoritativeness, and trustworthiness — how to write for YMYL and ordinary topics without a keyword cult or the myth that an assessor personally assigns TOP.",
  lead: [
    "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is a content-quality frame from Google’s rater guidelines. For a copywriter it’s a checklist: who writes, what it’s based on, whether facts can be checked.",
    "Older texts often said E-A-T without “Experience”; the meaning is the same plus clear author experience. Below — principles for articles and commercial pages. Rater scores ≠ direct URL ranking.",
  ],
  faq: [
    {
      q: "Is E-E-A-T a button in Search Console?",
      a: "No. It’s a quality frame. In practice — authors, facts, reviews, contacts, an honest offer.",
    },
    {
      q: "How is it different from SEO copywriting?",
      a: "SEO adds cluster and intent. E-E-A-T requires expertise and trust; one without the other is weak for YMYL.",
    },
    {
      q: "What is YMYL?",
      a: "Topics where a mistake hits health, money, safety, or rights. Author and fact standards are higher.",
    },
    {
      q: "Do you always need a doctor in the byline?",
      a: "For medical advice — yes, an expert and editorial process. For a sock storefront — honest specs and service are enough.",
    },
    {
      q: "Can an expert draft go to a copywriter for rewrite?",
      a: "Yes: expert draft → literary edit → expert check. Empty “Admin” without qualification doesn’t replace that.",
    },
    {
      q: "Should you delete negative reviews?",
      a: "Not for “pretty ratings.” Handle complaints; fake fives hurt trust more than one minus.",
    },
    {
      q: "Does E-E-A-T guarantee fast conversion growth?",
      a: "No. It lowers the risk of broken expectations and weak content. Tech and offer still matter.",
    },
  ],
  sections: [
    {
      title: "Why this matters for a copywriter",
      level: 2,
      paras: [
        "A keyword sheet without value is outdated. For YMYL and expert niches, search and people expect verifiable information and a clear author.",
        "E-E-A-T doesn’t cancel semantics and structure — it adds honesty and depth.",
      ],
      lists: [],
      links: [
        {
          label: "Raters and E-E-A-T",
          href: "/blog/google-assessory/",
        },
        {
          label: "SEO copywriting",
          href: "/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "Expertise and experience",
      level: 2,
      paras: [
        "Cover the topic on the merits: facts, limits, “how to verify.” Title and H1 must match the content — no clickbait “cheap bricks” at mid-market prices.",
        "Structure, lists, and diagrams help people finish reading. For commerce add purchase, delivery, and warranty terms — that’s service expertise too.",
      ],
      lists: [],
    },
    {
      title: "Author authority",
      level: 2,
      paras: [
        "State who wrote it and what qualification they have: name, role, link to an author page or editorial policy.",
        "Medicine, finance, law — expert territory. The copywriter shapes; the expert owns the meaning.",
      ],
      lists: [
        {
          intro: "Minimum author signals:",
          items: [
            "byline isn’t “Admin”;",
            "a short background or role;",
            "editorial contacts;",
            "date and update when needed.",
          ],
        },
      ],
    },
    {
      title: "Site and copy trustworthiness",
      level: 2,
      paras: [
        "Contacts, About, clear terms, real reviews and cases, FAQ, HTTPS, and a privacy policy — the trust frame.",
        "In the copy — verifiable facts, sources, current numbers. More specifics means less “SEO water.”",
      ],
      lists: [],
      links: [
        {
          label: "About the company",
          href: "/en/blog/o-kompanii/",
        },
        {
          label: "Sales copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "E-E-A-T is quality and trust — not a tech substitute.",
        "YMYL needs an expert author and fact checks.",
        "The snippet promise = the truth on the page.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Before shipping copy ask: “Who owns the facts, and where is that visible on the site?” — if there’s no answer, E-E-A-T isn’t built yet.",
  ],
  related: [
    "google-assessory",
    "seo-kopirayting",
    "kopirayting",
    "prodayushchie-teksty",
    "o-kompanii",
    "tz-kopiraytera",
  ],
};
