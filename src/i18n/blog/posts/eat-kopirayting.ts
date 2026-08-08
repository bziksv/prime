import type { BlogPost } from "../../../data/blog";

/** EN overlay for eat-kopirayting — same structure as RU JSON. */
export const eatKopiraytingEn: BlogPost = {
  slug: "eat-kopirayting",
  title: "E-E-A-T copywriting: writing with expertise and trust",
  date: "2020-01-29",
  category: "Content marketing",
  cover: "/images/blog/eat-kopirayting/cover-en.webp",
  excerpt:
    "E-E-A-T in copy: experience, expertise, authoritativeness, and trustworthiness — how to write for YMYL and everyday topics without keyword stuffing or the myth that a rater personally assigns page one.",
  lead: [
    "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is a content-quality frame from Google’s rater guidelines. For a copywriter it’s a checklist: who writes, what the claims rest on, and whether facts can be checked.",
    "Older articles often said E-A-T without “Experience”; the idea is the same, plus clear author experience. Below: principles for articles and commercial pages. Rater scores are not a direct URL ranking signal.",
  ],
  faq: [
    {
      q: "Is E-E-A-T a button in Search Console?",
      a: "No. It’s a quality frame. In practice that means authors, facts, reviews, contacts, and an honest offer.",
    },
    {
      q: "How is it different from SEO copywriting?",
      a: "SEO adds the keyword cluster and intent. E-E-A-T asks for expertise and trust; one without the other is weak for YMYL.",
    },
    {
      q: "What is YMYL?",
      a: "Topics where a mistake hits health, money, safety, or rights. Author and fact standards are higher.",
    },
    {
      q: "Do I always need a doctor in the byline?",
      a: "For medical advice, yes: an expert and editorial process. For a sock storefront — honest specs and service are enough.",
    },
    {
      q: "Can an expert draft go to a copywriter for rewrite?",
      a: "Yes: expert draft → copy edit → expert check. An empty “Admin” byline without credentials doesn’t replace that.",
    },
    {
      q: "Should I delete negative reviews?",
      a: "Not to inflate the rating. Handle complaints; fake fives hurt trust more than one honest minus.",
    },
    {
      q: "Does E-E-A-T guarantee fast conversion growth?",
      a: "No. It lowers the risk of broken expectations and thin content. Tech and offer still matter.",
    },
  ],
  sections: [
    {
      title: "Why this matters for a copywriter",
      level: 2,
      paras: [
        "A keyword sheet with no value is outdated. For YMYL and expert niches, search and readers expect verifiable information and a clear author.",
        "E-E-A-T doesn’t replace keyword research and structure — it adds honesty and depth.",
      ],
      links: [
        {
          label: "Raters and E-E-A-T",
          href: "/en/blog/google-assessory/",
        },
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "Expertise and experience",
      level: 2,
      paras: [
        "Cover the topic on the substance: facts, limits, “how to verify.” Title and H1 must match the content — no clickbait “cheap bricks” at mid-market prices.",
        "Structure, lists, and diagrams help people finish reading. For commerce, add purchase, delivery, and warranty terms — that’s service expertise too.",
      ],
    },
    {
      title: "Author authority",
      level: 2,
      paras: [
        "Say who wrote it and what qualification they have: name, role, link to an author page or editorial policy.",
        "Medicine, finance, and law are expert territory. The copywriter shapes the prose; the expert owns the meaning.",
      ],
      lists: [
        {
          intro: "Minimum author signals:",
          items: [
            "byline isn’t “Admin”",
            "a short background or role",
            "editorial contacts",
            "date and update when the material changes",
          ],
        },
      ],
    },
    {
      title: "Site and copy trustworthiness",
      level: 2,
      paras: [
        "Contacts, an About page, clear terms, real reviews and cases, FAQ, HTTPS, and a privacy policy — the trust frame.",
        "In the copy itself: verifiable facts, sources, current numbers. More specifics means less “SEO water.”",
      ],
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
      title: "Key takeaways",
      level: 2,
      paras: [
        "E-E-A-T is quality and trust — not a tech substitute.",
        "YMYL needs an expert author and fact checks.",
        "The snippet promise = the truth on the page.",
      ],
    },
  ],
  closing: [
    "Before you hand off copy, ask: “Who owns the facts, and where is that visible on the site?” — if there’s no answer, E-E-A-T isn’t built yet.",
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
