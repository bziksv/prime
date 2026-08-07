import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-toloka — same structure as RU JSON. */
export const yandeksTolokaEn: BlogPost = {
  slug: "yandeks-toloka",
  title: "Toloka (formerly Yandex.Toloka): tasks, roles, and realistic earnings",
  date: "2021-09-28",
  category: "Internet marketing",
  cover: "/images/blog/yandeks-toloka/cover-en.webp",
  excerpt:
    "What Toloka is: crowdsourced data labeling for AI and search. Requester and worker roles, task types, rating, and why “earnings per day” figures from old guides are outdated.",
  lead: [
    "Toloka launched in 2014 as a Yandex project: people do short tasks judging content and data, and companies get labels for search, ads, and AI models.",
    "Since then the platform grew and split by market: the international track is Toloka.ai; for users in Russia the focus shifted to local task services. Below — how crowdsourcing works, what tasks look like, and what to expect from pay in 2026, without “easy thousands” promises.",
  ],
  faq: [
    {
      q: "Are Toloka and “Yandex.Toloka” the same?",
      a: "Historically yes. Now brand and infrastructure are split: international Toloka.ai (data for AI) and local task products for the RU audience. Check current domains and terms on the live service sites.",
    },
    {
      q: "Can I be both worker and requester?",
      a: "On the classic setup roles were usually split: either you post tasks or you complete them. Confirm in the current rules of the platform you pick.",
    },
    {
      q: "How much do people really earn?",
      a: "It depends on task availability, rating, region, and payout currency. Old “$5 a day” cues from 2020–2021 guides are often inflated or irrelevant: the feed is uneven, simple tasks pay pennies.",
    },
    {
      q: "Why do businesses and developers use it?",
      a: "Human labeling and judgment: search relevance, moderation, UI/copy comparisons, data to train and evaluate models — faster and cheaper than a huge in-house labeling team at peak load.",
    },
    {
      q: "Do you need special training?",
      a: "Often onboarding and practice tasks are enough. Hard projects (expert domains, model evaluation) need careful reading of instructions; mistakes cut rating and access.",
    },
  ],
  sections: [
    {
      title: "What Toloka is",
      level: 2,
      paras: [
        "It’s a microtask crowdsourcing platform (human-in-the-loop): workers label and judge data; requesters get volume with quality control.",
        "At first most tasks came from the Yandex ecosystem (search, maps, services). Later the platform opened to external companies and research. International Toloka now focuses on data and evaluation for AI/LLMs; in Russia access and branding should be checked separately.",
      ],
      lists: [
        {
          intro: "Typical requester goals:",
          items: [
            "search and ad relevance scoring;",
            "content moderation and classification;",
            "collecting and verifying reference data;",
            "comparing design, names, interfaces;",
            "labeling and judging model answers.",
          ],
        },
      ],
    },
    {
      title: "Sign-up and roles",
      level: 2,
      paras: [
        "You usually need a service account (historically a Yandex ID), phone confirmation, and age 18+ because some content is adult. After login you get a cabinet with stats and balance.",
        "Workers pick tasks from a feed. Requesters set instructions, quality control, and budget. Combining both roles on one account is often not allowed.",
      ],
      lists: [
        {
          intro: "Before a worker starts:",
          items: [
            "complete training / practice tasks;",
            "read the full instruction — or rejection rates spike;",
            "watch accepted vs rejected work stats;",
            "don’t chase speed at the cost of quality.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Payout terms, fees, and tax status (incl. self-employment on local services) change. Follow the platform help pages, not screenshots from old articles.",
        },
      ],
    },
    {
      title: "Task types",
      level: 2,
      paras: [
        "Most jobs are online in minutes: watch a clip, mark relevance, compare two options, check contacts. There are also “field” tasks: photo an object at an address — pay is modest, travel can erase the upside.",
      ],
      lists: [
        {
          intro: "Common formats:",
          items: [
            "video/page match to a query;",
            "search results review;",
            "ad and banner quality;",
            "business data freshness checks;",
            "usability and mini-surveys;",
            "expert AI judgments (harder and rarer for beginners).",
          ],
        },
      ],
      tables: [
        {
          caption: "Online vs field tasks",
          headers: ["Type", "Plus", "Minus"],
          rows: [
            ["Online", "Fast, can do in batches", "Low pay per item"],
            ["Field", "Sometimes higher rate", "Time and travel, risk of going negative"],
          ],
        },
      ],
    },
    {
      title: "Rating and access to jobs",
      level: 2,
      paras: [
        "Quality drives access: skills after tests, relative and absolute rating historically unlocked better-paid tasks. Rejected work hits the metrics.",
        "The feed is uneven: more jobs on weekdays, fewer on weekends. There’s no “guaranteed daily income” — it depends on the requester pool and your rating.",
      ],
      lists: [],
    },
    {
      title: "Pay: expectations without rose-tinted glasses",
      level: 2,
      paras: [
        "Old guides wrote about fractions of a cent for simple tasks and “a few dollars a day” with active work. That’s not a salary or a forecast: currency, payout fees, and task availability changed with the platform.",
        "Payouts historically went to e-wallets (YuMoney and others) with a fee. The live list of methods and minimums is only in the cabinet of the service you use.",
      ],
      lists: [
        {
          intro: "A realistic frame:",
          items: [
            "this is micro side work, not a main job;",
            "training time and rejections “cost” too;",
            "high rating beats chaotic clicking;",
            "check regional rules (Toloka.ai access vs local tasks).",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Copying earnings figures from 2019–2021 articles. After brand and market reorgs those cues are stale — watch the live feed and your accepted tasks.",
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "Toloka is a tool for human data labeling and judgment, useful for AI and search requesters. For workers it’s optional micro side work with a rating and an uneven feed. Check the current service for your region and don’t treat old “$ a day” figures as a guarantee.",
      ],
      lists: [],
    },
  ],
};
