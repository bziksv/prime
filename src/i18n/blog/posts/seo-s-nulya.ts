import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-s-nulya — same structure as RU JSON. */
export const seoSNulyaEn: BlogPost = {
  slug: "seo-s-nulya",
  title: "SEO from scratch: where to start and how to learn by doing",
  date: "2021-09-09",
  category: "SEO",
  cover: "/images/blog/seo-s-nulya/cover-en.webp",
  excerpt:
    "A practical on-ramp into SEO: the concepts that matter, a beginner learning path, hands-on practice, what to read, and honest timelines for rankings — no magic formula.",
  lead: [
    "Most people don’t walk into SEO from a blank slate. They come from adjacent roles, or they simply want to know why a site isn’t bringing leads. There’s no one recipe: niches break cookie-cutter checklists.",
    "Here’s a workable path from zero: what to learn first, how to get real practice, and how not to confuse site prep with page-one rankings. People who stick around tend to share the same fuel — curiosity, shipping work, and reviewing what failed.",
  ],
  faq: [
    {
      q: "Where should I start learning SEO?",
      a: "Start with scope and definitions, then keywords, site structure, technical basics, content, and analytics. In parallel, use your own site or a practice project so every concept has somewhere to land.",
    },
    {
      q: "Are courses enough without practice?",
      a: "No. A course is a map. Skill shows up when you ship tasks and review what moved the needle — and what didn’t.",
    },
    {
      q: "When can I expect page-one rankings?",
      a: "Getting a site ready often takes weeks to about a month. Ranking growth is planned over months — typically a 2–6 month window after work starts — not “we launched in 30 days and jumped to the top.”",
    },
    {
      q: "Do I need a mentor?",
      a: "It speeds things up a lot: someone fills the gaps you can’t see yet. You can learn without one, but expect a longer road through blogs, search-engine docs, and an internship.",
    },
    {
      q: "Should I study black-hat tactics?",
      a: "Know the risks — yes. Use them on a client site — no. Filters and a burned project cost more than a short traffic spike.",
    },
  ],
  sections: [
    {
      title: "What an SEO specialist actually does",
      level: 2,
      paras: [
        "They help a site earn the organic traffic it’s built for: demand → pages → technical health → content → measurement. Not fake “boosting,” and not a guaranteed seat in the results.",
        "Early roles are often assistant work under a mentor. Before you apply, spend a couple of days on the vocabulary and day-to-day duties — don’t burn a team lead’s time on absolute basics.",
      ],
      lists: [
        {
          intro: "Core knowledge to build:",
          items: [
            "how search and indexing work",
            "keyword research and search intent",
            "site structure and internal linking",
            "technical basics (speed, mobile, status codes)",
            "content and search snippets",
            "Search Console / webmaster tools and analytics",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "A learning path that doesn’t sprawl",
      level: 2,
      paras: [
        "Build a glossary from a few solid sources → pick one structured book or course as the frame → read practitioner blogs and official Google/Yandex docs → talk to people already doing the work.",
        "Random video clips without practice don’t become a career. The fastest accelerator is a circle of people who ship SEO every week: case reviews close gaps faster than the tenth “what is a title tag” tutorial.",
      ],
      lists: [
        {
          intro: "A practical order:",
          items: [
            "learn the language of the craft (not every panel button)",
            "build a keyword set and site structure on a training project",
            "run a technical checklist",
            "ship fixes and measure after 2–4 weeks",
            "keep a short journal of hypotheses",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research (semantic core)",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Practice beats theory",
      level: 2,
      paras: [
        "Understanding sticks when you ship something and see the effect — or the lack of one. Mistakes on your own or training sites are cheaper than mistakes on a client budget with no supervision.",
        "Widen the niches as you grow: almost nothing is fully templated. Internships, small freelance under guidance, or junior help inside an agency are normal ways in.",
      ],
      lists: [
        {
          intro: "Skills to train by hand:",
          items: [
            "collecting and clustering queries",
            "writing content briefs and checking density without stuffing",
            "editing robots.txt, sitemaps, and redirects",
            "a clear “before → what we did → after” report",
          ],
        },
      ],
      notes: [
        {
          title: "Common trap",
          text: "Waiting for a magic formula and copying someone else’s checklist line by line. SEO has no universal tick list that fits every site.",
        },
      ],
    },
    {
      title: "Timelines and expectations",
      level: 2,
      paras: [
        "Getting a site ready for promotion — tech, structure, copy, CTAs — can take weeks. Moving a meaningful share of the keyword set toward page one is months of work and iteration, not a contract line that says “top 10 in 30 days.”",
        "The market is tougher than in the 2000s: usefulness for real users beats gray shortcuts. Learning takes longer, but the skill travels with you from project to project.",
      ],
      lists: [
        {
          intro: "A realistic beginner mindset:",
          items: [
            "stay curious and keep learning",
            "treat mistakes as review material, not shame",
            "ranking results stack over time",
            "talking to the client matters as much as keyword tools",
          ],
        },
      ],
    },
    {
      title: "Bottom line",
      level: 2,
      paras: [
        "SEO from scratch is a map of the core blocks, plus hours of practice and feedback. Learn the terms, run a training project, find a mentor or a team, and don’t confuse prep with rankings. Caring how the web works isn’t fluff here — it’s the fuel that keeps you going.",
      ],
      lists: [],
    },
  ],
};
