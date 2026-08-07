import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-assessory — same structure as RU JSON. */
export const googleAssessoryEn: BlogPost = {
  slug: "google-assessory",
  title: "How Google raters score sites: quality, E-E-A-T, and YMYL",
  date: "2018-08-27",
  category: "Internet marketing",
  cover: "/images/blog/google-assessory/cover-en.webp",
  excerpt:
    "Quality Rater Guidelines: why raters exist, why their score isn’t a ranking, page purpose, E-E-A-T, YMYL, author reputation, and what breaks trust — without the myth that a rater personally put you in TOP.",
  lead: [
    "Quality raters manually score pages against Google’s Search Quality Rater Guidelines. Their ratings help improve algorithms — they don’t put your URL in TOP directly.",
    "Below — the scoring logic: page purpose, experience/expertise/authoritativeness/trust (E-E-A-T), YMYL topics, author reputation, and typical reasons for a low score. The guide updates — check the current version; old “164 pages” figures don’t matter.",
  ],
  faq: [
    {
      q: "Does a rater rank my site?",
      a: "No. The score indirectly trains systems. There’s no direct “rater gave a 5 → TOP”.",
    },
    {
      q: "What is E-E-A-T?",
      a: "Experience, Expertise, Authoritativeness, Trustworthiness — quality signals for content and source. Not a “Search Console button”, but a frame for useful, honest materials.",
    },
    {
      q: "What is YMYL?",
      a: "Your Money or Your Life: topics where a mistake hits health, money, or safety. Expertise requirements are higher there.",
    },
    {
      q: "Do you need an author page?",
      a: "For expert and news pieces it’s useful: who wrote it, what qualification, how to reach the editors. Empty “Admin” barely helps.",
    },
    {
      q: "Does clickbait hurt the score?",
      a: "Yes if the title promises one thing and the content delivers another. Expectation mismatch is a quality minus.",
    },
    {
      q: "Is advertising always bad?",
      a: "No. It’s bad when it blocks the main content or masquerades as editorial.",
    },
  ],
  sections: [
    {
      title: "Why raters exist and what they look at",
      level: 2,
      paras: [
        "A rater has instructions and a job: understand why the page exists, whether it’s useful, whether it matches the query (when scoring relevance), and whether the source can be trusted.",
        "The link to ranking is indirect: accumulated ratings help train and check algorithms. Knowing the criteria is useful as a quality checklist — not a “secret TOP lever”.",
        "The main anchor is purpose and usefulness. A page with no value, with deceit, or with harm gets the lowest score regardless of word count.",
      ],
      lists: [
        {
          intro: "Base scoring axes:",
          items: [
            "purpose and usefulness;",
            "E-E-A-T of the main content;",
            "amount and quality of content for the job;",
            "information about the site and authors;",
            "reputation of the site and creators.",
          ],
        },
      ],
      links: [
        {
          label: "User intent in SEO",
          href: "/en/blog/user-intent/",
        },
        {
          label: "Site relevance",
          href: "/en/blog/relevantnost-sayta/",
        },
      ],
    },
    {
      title: "E-E-A-T, YMYL, and reputation",
      level: 2,
      paras: [
        "For medicine, finance, law, safety, and related topics, author qualification, fact updates, and a clear editorial policy matter. User comments alone don’t make a piece expert.",
        "Author reputation shapes how the site is perceived: a weak or toxic content creator pulls trust down even on a strong domain. Show real profiles and editorial responsibility.",
        "Video and sharing: watchability and an easy share option add to page usefulness — they don’t replace the meaning of the clip.",
      ],
      notes: [
        {
          title: "Don’t confuse with gaming",
          text: "Buying “rater scores” or faking reviews is a path to lost trust. Work on real quality and transparency.",
          kind: "tip",
        },
      ],
    },
    {
      title: "What tanks the score",
      level: 2,
      paras: [
        "Deceiving the user: others’ brands/faces, fake contacts, ads dressed as articles, manipulations. Conspiracy and harmful content sit in the worst score zone.",
        "Distracting ads that cover the page’s meaning. An undeveloped topic with low author expertise — even if “intentions were good”.",
        "Account for intent: a commercial product page doesn’t always answer an informational query. See what dominates the SERP for that query.",
      ],
      links: [
        {
          label: "Fake page",
          href: "/en/blog/feyk-stranitsa/",
        },
        {
          label: "Traffic without leads",
          href: "/en/blog/trafik-bez-lidov/",
        },
      ],
    },
  ],
  closing: [
    "Google raters score usefulness, trust, and fit to page purpose — they don’t “sell” rankings. Lean on E-E-A-T and honest content, especially in YMYL, and remember: the algorithm learns from ratings, but it doesn’t rank by hand.",
  ],
  related: [
    "eat-kopirayting",
    "user-intent",
    "relevantnost-sayta",
    "tehnicheskiy-seo-audit",
    "seo-oshibki",
    "feyk-stranitsa",
  ],
};
