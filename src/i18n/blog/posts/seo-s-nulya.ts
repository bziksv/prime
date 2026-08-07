import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-s-nulya — same structure as RU JSON. */
export const seoSNulyaEn: BlogPost = {
  slug: "seo-s-nulya",
  title: "SEO from scratch: where to start and how to learn in practice",
  date: "2021-09-09",
  category: "SEO",
  cover: "/images/blog/seo-s-nulya/cover-en.webp",
  excerpt:
    "How to enter SEO without a “magic pill”: core concepts, a beginner path, practice on real tasks, what to read, and what to expect on ranking timelines.",
  lead: [
    "People rarely enter SEO from a blank course slate: more often from adjacent roles or a wish to understand why a site brings no leads. There’s no universal recipe — projects differ, templates break on the niche.",
    "Below — a workable path from scratch: what to learn first, how to build practice, and how not to confuse site prep with reaching TOP. Specialist stories converge on one thing: curiosity + practice + reviewing mistakes.",
  ],
  faq: [
    {
      q: "Where should SEO study start?",
      a: "Definitions and scope of responsibility, then semantics, structure, tech, content, analytics. In parallel — your own or a training site for experiments.",
    },
    {
      q: "Are courses enough without practice?",
      a: "No. Courses give a map; skill appears on live tasks and reviewing what worked / didn’t.",
    },
    {
      q: "When to expect TOP-10?",
      a: "Site prep is often weeks to a month. Ranking growth is planned over months (a 2–6 month cue after work starts), not “launched in a month — instant TOP.”",
    },
    {
      q: "Do you need a mentor?",
      a: "It speeds things up a lot: closes gaps in the big picture. Without one you can, but longer via blogs, search docs, and an internship.",
    },
    {
      q: "Should you learn black-hat methods?",
      a: "Understanding the risks — yes. Using them for a client — no: filters and losing the project cost more than a short spike.",
    },
  ],
  sections: [
    {
      title: "Who an SEO specialist is",
      level: 2,
      paras: [
        "Someone who helps a site earn target organic traffic: demand → pages → tech → content → measurement. Not “boosting” and not a guaranteed SERP place.",
        "Early career often means an assistant role: routine under a mentor. Before applying, spend a couple of days on terms and typical duties — don’t burn the team lead’s time on basics.",
      ],
      lists: [
        {
          intro: "Core knowledge outline:",
          items: [
            "how search and indexing work;",
            "semantic core and intent;",
            "site structure and internal linking;",
            "tech (speed, mobile, status codes);",
            "content and snippets;",
            "Search Console / webmaster tools and analytics.",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "A learning path without chaos",
      level: 2,
      paras: [
        "A term glossary from several sources → one systemic book/course as a frame → practitioner blogs and search-engine docs → talks with people already in the field.",
        "Scattered videos without practice don’t become a profession. The best accelerator is a circle of people who do SEO daily: case reviews close gaps faster than the tenth “what is Title” tutorial.",
      ],
      lists: [
        {
          intro: "A practical order:",
          items: [
            "learn the profession’s language (don’t memorize panel buttons);",
            "build a core and structure on a training project;",
            "run a tech checklist;",
            "ship edits and measure in 2–4 weeks;",
            "keep a hypothesis journal.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "SEO site structure",
          href: "/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Practice beats theory",
      level: 2,
      paras: [
        "Understanding comes when you ship something and see the effect (or its absence). Mistakes on your own/training sites cost less than on a client budget unsupervised.",
        "Take different niches as you grow: almost no projects are cookie-cutter. Internship, small freelance under guidance, agency help — a normal entry.",
      ],
      lists: [
        {
          intro: "What to train by hand:",
          items: [
            "query collection and clustering;",
            "copy briefs and checking density without stuffing;",
            "robots/sitemap/redirect edits;",
            "a “was → did → became” report.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Waiting for a “magic pill” and copying someone else’s checklist one-to-one. SEO has no universal tick list for every site.",
        },
      ],
    },
    {
      title: "Timelines and expectations",
      level: 2,
      paras: [
        "Preparing a site for promotion (tech, structure, copy, CTAs) can take weeks. Getting a noticeable share of the core into TOP-10 is months of work and iterations — not a contract date “TOP in 30 days.”",
        "The market is stricter than in the 2000s: user quality beats grey schemes. Learning takes longer, but the skill transfers across projects.",
      ],
      lists: [
        {
          intro: "A realistic beginner mindset:",
          items: [
            "curiosity and readiness to keep learning;",
            "mistakes are review material, not shame;",
            "ranking results are cumulative;",
            "client communication matters as much as keyword tools.",
          ],
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "SEO from scratch is a map of core blocks plus hours of practice and feedback. Learn terms, run a training project, find a mentor or team, don’t confuse prep with TOP. Interest in “how the web works” isn’t fluff here — it’s fuel.",
      ],
      lists: [],
    },
  ],
};
