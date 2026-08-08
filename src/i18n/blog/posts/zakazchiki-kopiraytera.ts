import type { BlogPost } from "../../../data/blog";

/** EN overlay for zakazchiki-kopiraytera — same structure as RU JSON. */
export const zakazchikiKopirayteraEn: BlogPost = {
  slug: "zakazchiki-kopiraytera",
  title: "Finding clients for a copywriter: where to start",
  date: "2020-10-30",
  category: "Content marketing",
  cover: "/images/blog/zakazchiki-kopiraytera/cover-en.webp",
  excerpt:
    "How a copywriter finds clients: portfolio, search channels, a strong pitch, and work terms — without a catalog of outdated groups or dumping “from pennies per 1,000 characters.”",
  lead: [
    "Beginners often take pennies; experienced writers lose clients — demand for copy exists, but you have to know how to find and close it. A steady order flow starts with prep, not chaotic applications.",
    "Below: portfolio, where to look, what to skip, and how to write a pitch. We don’t catalog 2020 Facebook/VK groups and marketplaces: platforms come and go. Text types and briefs from the client side live in the copywriting article.",
  ],
  faq: [
    {
      q: "Where should I start with no experience?",
      a: "Make 3–5 strong demo pieces in the target niche, build a portfolio with links and rates, then apply selectively.",
    },
    {
      q: "Are freelance marketplaces evil?",
      a: "Not necessarily. They’re a channel with competition and often a low check. Fine as a start or side hustle, weak as the only strategy for years.",
    },
    {
      q: "Do I need a résumé?",
      a: "Sometimes for staff or agency roles. For one-off jobs a portfolio and a clear offer matter more.",
    },
    {
      q: "How do I avoid getting left unpaid?",
      a: "Lock scope, deadline, revisions, and payment method before you start. For larger sums — deposit, milestones, and a contract.",
    },
    {
      q: "How is this different from “Copywriting”?",
      a: "That one covers text types and picking a writer for business. This one is finding clients from a freelancer’s view.",
    },
  ],
  sections: [
    {
      title: "Prep first, hunting second",
      level: 2,
      paras: [
        "Clients choose by results, not résumé tenure. Show 2–4 relevant pieces with a short case: task → what you did → effect (if any).",
        "Sort examples by format (landing, SEO article, email). Give links or Docs, not “download a rar.” State a price range upfront — you’ll filter the wrong fit.",
      ],
      lists: [
        {
          intro: "Minimum before searching:",
          items: [
            "portfolio with live links",
            "clear rate card or pricing formula",
            "2–3 contact channels",
            "a way to get paid",
            "a strong pitch template",
          ],
        },
      ],
      links: [
        {
          label: "Copywriting: types and briefs",
          href: "/en/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Where to find clients",
      level: 2,
      paras: [
        "Copywriter and job communities on social — a fast channel, but noisy. Follow the rules: spam replies under every post hurt reputation.",
        "Freelance marketplaces bring volume but eat time on contests. Agencies and editorial teams — steadier checks with a strong portfolio. Direct outreach: emails to site owners with a concrete copy improvement pitch — works if it isn’t cold spam.",
        "Old group and service names don’t matter: niche, platform activity, and your pitch do.",
      ],
      lists: [
        {
          intro: "Working channels:",
          items: [
            "pro communities and job posts",
            "marketplaces / talent directories",
            "referrals from happy clients",
            "content about your expertise (blog, Telegram, LinkedIn-like)",
            "targeted pitches to companies in your topic",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Sending the same “Hi, I’m a copywriter” to hundreds of people. That’s spam and low conversion.",
          kind: "tip",
        },
      ],
    },
    {
      title: "What not to waste time on",
      level: 2,
      paras: [
        "Jobs with no brief, pay “if we like it” with no criteria, contests with 50 writers for pennies — usually bad economics.",
        "Don’t chase every out-of-niche job: scatter kills portfolio and rates. Refuse grey tasks (fake reviews, unmarked native ads, copying someone else’s work).",
      ],
    },
    {
      title: "What pitch hooks",
      level: 2,
      paras: [
        "Keep it short: you got the task, showed a relevant example, proposed a next step and timeline or range. No filler about being a “creative perfectionist.”",
        "If the brief is thin — ask 2–3 clarifying questions. That’s already an expertise demo.",
      ],
      lists: [
        {
          intro: "Pitch outline:",
          items: [
            "greeting + the job in your words",
            "1 relevant case with a link",
            "what you’ll do and by when",
            "price or how it’s calculated",
            "a question if the brief is missing something",
          ],
        },
      ],
    },
    {
      title: "Work terms and payment",
      level: 2,
      paras: [
        "Before start lock scope, deadline, revision count, delivery format, and payment. For new clients a deposit or milestone pay is reasonable.",
        "Keep several ways to receive money (card, self-employed or sole-trader invoice). Old 2015 wallet lists aren’t the guide — use what’s legal and convenient for you and the client.",
      ],
      links: [
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Portfolio and niche beat “send 100 applications.” Combine channels, write to the point, lock terms.",
        "Long-term clients come from quality and referrals, not dumping.",
      ],
    },
  ],
  closing: [
    "Build a short portfolio with rates, pick 2 search channels, and send 5 personalized pitches to relevant jobs — you’ll learn which channel feeds faster than from a hundred template emails.",
  ],
  related: [
    "kopirayting",
    "seo-kopirayting",
    "prodayushchie-teksty",
    "kontent-plan",
    "tz-na-sayt",
    "autrich",
  ],
};
