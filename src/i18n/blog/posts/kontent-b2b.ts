import type { BlogPost } from "../../../data/blog";

/** EN overlay for kontent-b2b — same structure as RU JSON. */
export const kontentB2bEn: BlogPost = {
  slug: "kontent-b2b",
  title: "5 content types that work for B2B brands",
  date: "2018-05-14",
  category: "Content marketing",
  cover: "/images/blog/kontent-b2b/cover-en.webp",
  excerpt:
    "What works in B2B content: reviews and UGC, fast contact, interactives, case studies, and a live voice — without outdated “% trust” stats and +800% in a month promises.",
  lead: [
    "In B2B a group often decides, the cycle is longer, and trust is built on proof — not a short “selling” paragraph. Content should help choose and align the purchase.",
    "Below: five formats that consistently cover these jobs. 2018 roundup figures aren’t universal — go by your funnel and your own measurements.",
  ],
  faq: [
    {
      q: "How is B2B content different from B2C?",
      a: "Cases, terms, integrations, risks, and alignment matter more. Emotion helps, but without facts it rarely closes the deal.",
    },
    {
      q: "Are site reviews required?",
      a: "They help a lot. Prefer real ones with consent and context (industry, task) over an empty “our clients are happy” block.",
    },
    {
      q: "Does every B2B site need live chat?",
      a: "If the team answers in business hours — yes. A pushy widget with no operators annoys.",
    },
    {
      q: "Do quizzes work in B2B?",
      a: "Yes: plan picker, maturity check, risk checklist. Not an entertainment quiz for virality.",
    },
    {
      q: "What counts as a good case study?",
      a: "Starting problem, what you did, measurable result, timeline, and limits. We don’t copy “+800% in a month” without context.",
    },
    {
      q: "Can the tone be “not boring”?",
      a: "Yes, if you don’t sacrifice clarity. Dense jargon without unpacking pushes away buyers and newcomers.",
    },
    {
      q: "Where should I start with limited resources?",
      a: "Gather 3–5 honest reviews/cases and one clear service page with FAQ — often more important than a daily blog.",
    },
  ],
  sections: [
    {
      title: "1. Reviews and UGC",
      level: 2,
      paras: [
        "User-generated content and reviews lower the “unknown vendor” risk. Before a deal, B2B buyers look for proof online and on your site.",
        "Ask recent clients for a short breakdown: problem → why they chose you → result. Put it on the site and (with consent) offer a channel for an external review.",
        "Brand advocates from loyal clients work when it’s voluntary — no fake ratings.",
      ],
      notes: [
        {
          title: "No outsider stats as dogma",
          text: "Shares like “75% trust reviews” from old roundups aren’t law. Watch conversion on pages with reviews for yourself.",
          kind: "tip",
        },
      ],
    },
    {
      title: "2. Fast contact: chat and messengers",
      level: 2,
      paras: [
        "Live chat or a fast channel in business hours closes clarifications on price, integration, and timelines — the stuff that sends people to a competitor while you wait for “email tomorrow.”",
        "If there are no operators — an honest “we reply in business hours” status and a lead form beat an empty popup chat.",
      ],
    },
    {
      title: "3. Tests, quizzes, and diagnostics",
      level: 2,
      paras: [
        "Interactive in B2B is a qualification tool: “which plan fits,” “ready to implement,” a risk checklist.",
        "The goal is usefulness and a lead with contact consent — not a share record. Average figures from other people’s cases (“10k leads”) aren’t a promise for your niche.",
      ],
      links: [
        {
          label: "Quiz site",
          href: "/en/blog/kviz-sayt/",
        },
      ],
    },
    {
      title: "4. Cases with measurable results",
      level: 2,
      paras: [
        "A case shows the work path and an outcome in numbers you can verify: timeline, metric, baseline “before.” Hyperbole without methodology hurts trust.",
        "Format: client context → problem → solution → result → what to watch for. A long-form article fits a deep breakdown.",
      ],
      links: [
        {
          label: "E-A-T in copywriting",
          href: "/en/blog/eat-kopirayting/",
        },
        {
          label: "Long-form articles (longreads)",
          href: "/en/blog/longrid/",
        },
      ],
    },
    {
      title: "5. A live voice without fluff",
      level: 2,
      paras: [
        "People stand behind a B2B brand: you can speak clearly, with examples and character — without “we deliver a comprehensive approach” legalese.",
        "Study interests of decision-makers and product users — and write for both levels: buyer and end user often read different things.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "proof beats slogans",
            "contact at the moment of the question",
            "interactive = qualification",
            "cases with honest numbers",
            "clear tone without empty jargon",
          ],
        },
      ],
      links: [
        {
          label: "Content promotion ideas",
          href: "/en/blog/idei-kontent-prodvizheniya/",
        },
        {
          label: "Content-led promotion",
          href: "/en/blog/kontentnoe-prodvizhenie/",
        },
      ],
    },
  ],
  closing: [
    "This week, gather one short case and two reviews with a number or timeline — often enough to revive commercial pages more than a new “post for the post.”",
  ],
  related: [
    "kontentnoe-prodvizhenie",
    "idei-kontent-prodvizheniya",
    "eat-kopirayting",
    "kviz-sayt",
    "prodayushchiy-kontent",
    "matritsa-kontenta",
  ],
};
