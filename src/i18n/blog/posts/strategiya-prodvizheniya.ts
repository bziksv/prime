import type { BlogPost } from "../../../data/blog";

/** EN overlay for strategiya-prodvizheniya — same structure as RU JSON. */
export const strategiyaProdvizheniyaEn: BlogPost = {
  slug: "strategiya-prodvizheniya",
  title: "Website promotion strategy: match the plan to the site’s state",
  date: "2018-10-02",
  category: "SEO",
  cover: "/images/blog/strategiya-prodvizheniya/cover-en.webp",
  excerpt:
    "An SEO strategy isn’t copied from someone else’s checklist: it depends on site type, age, content, backlink profile, and tech. How to set a goal and pick a work plan.",
  lead: [
    "The right strategy affects ranks, traffic, and leads — but “right” doesn’t mean universal. A plan for a young store and for an old corporate site with someone else’s link history will differ.",
    "Below — how to state a goal, what to check before work starts, and how typical scenarios (site from scratch, long tail, “already promoted”) differ. A DIY step outline is in the self-SEO post; here — choosing the course.",
  ],
  faq: [
    {
      q: "How many SEO strategies exist?",
      a: "Not “exactly three forever”. There are typical scenarios by age and site state. The concrete plan is always individual.",
    },
    {
      q: "Where does a strategy start?",
      a: "With a measurable goal (leads/revenue/cluster visibility) and diagnosis: content, tech, links, competition. Not with lucky links.",
    },
    {
      q: "When to expect TOP-10?",
      a: "Prep — weeks to about a month. Core rank buildup planned 2–6 months after work starts. Strategy doesn’t rewrite SERP physics.",
    },
    {
      q: "How is this different from DIY SEO?",
      a: "That post is the owner’s work order. This one is how to choose the accent (new site / tail / rehab) from the inputs.",
    },
    {
      q: "Need a separate strategy for Yandex and Google?",
      a: "Base is shared; accents (locality, commercial, tools) may differ. Often both channels run as one program with nuances.",
    },
    {
      q: "Can you copy a competitor’s strategy?",
      a: "Study the SERP and structure — yes. Copy texts and spam links — no. You have a different domain age and resources.",
    },
    {
      q: "What matters more — content or links?",
      a: "Close intent and tech first; links after base relevance. On a spammy profile, links can hurt.",
    },
    {
      q: "Is strategy SEO only?",
      a: "Often no: organic + ads + landing conversion. The channel strategy fits the business goal.",
    },
  ],
  sections: [
    {
      title: "Goal before tactics",
      level: 2,
      paras: [
        "Strategy starts with a goal you can check in 3–6 months: not “get into TOP”, but “+N organic leads while keeping/growing CR” or “share of commercial core in TOP-10”.",
        "A “+10,000 visits” goal without a target-action filter is risky: non-target traffic arrives. Lock region, priority services, and KPIs in analytics before picking tactics.",
      ],
      lists: [
        {
          intro: "Goal model:",
          items: [
            "business result (leads, sales);",
            "horizon (months, not days);",
            "constraints (budget, team, CMS);",
            "channels (Yandex/Google/both).",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Prep for promotion — on the order of weeks to a month. Core TOP buildup planned 2–6 months. Strategy sets priorities, not a date guarantee.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
      ],
    },
    {
      title: "What shapes the strategy choice",
      level: 2,
      paras: [
        "Resource type (store, services, media), age and promotion history, niche and region, current base (traffic, content, links), and competition set a realistic plan.",
        "A young site without index and trust can’t run the same program as a site with 5 years of organic. Wide geography without branches costs more than a local niche.",
      ],
      lists: [
        {
          intro: "Factors:",
          items: [
            "site type and jobs;",
            "age and past SEO experiments;",
            "niche and UX expectations;",
            "region coverage;",
            "content and tech quality;",
            "backlink profile;",
            "Yandex / Google / both focus.",
          ],
        },
      ],
      links: [
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Typical scenarios",
      level: 2,
      paras: [
        "The informal “three strategies” from practice are scenarios, not rigid packages. They combine after an audit.",
        "From scratch: bake SEO into structure and CMS before launch — cheaper than fixing later. First noticeable core moves take months, not “TOP a week after release”.",
        "Long tail: from narrow multi-word queries toward shorter ones — a “matryoshka”. Reputation and base already exist — strengthen LF/MF, then compete for short commercial.",
        "Rehab: the site was “already promoted”, result disappoints. First unpack past strategy, content, and link mistakes — then a new plan, or you’ll repeat someone else’s failures.",
      ],
      lists: [
        {
          intro: "Scenarios in short:",
          items: [
            "new site — structure and core before content;",
            "tail — grow from LF toward HF;",
            "after someone else’s SEO — audit and debt priority.",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Content as the strategy entry",
      level: 2,
      paras: [
        "Owners often rate copy as “fine”. In practice check uniqueness, intent fit, over-optimization, and Metrica behavior — not only “nausea” in an online tool.",
        "Internal/external duplicates, template cards with no value, and pages “off-query” break any link strategy. Landings for clusters first, then growth.",
      ],
      lists: [
        {
          intro: "Signals to rework:",
          items: [
            "duplicates and copy-paste;",
            "keywords without answering intent;",
            "high bounce on target traffic;",
            "no H1–H2 structure for queries.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Chasing a uniqueness % in a checker and ignoring whether the page closes SERP demand. Uniqueness is a base, not a TOP ticket.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
        {
          label: "SEO text length",
          href: "/en/blog/dlina-seo-teksta/",
        },
      ],
    },
    {
      title: "Backlink profile",
      level: 2,
      paras: [
        "A profile can be relatively clean, spammy, or critical. That decides whether you can grow links or must clean/neutralize risks first.",
        "Mass buying “for the strategy” is a bad strategy. Relevance and natural mentions first; links — on purpose and in a volume the site can bear.",
      ],
      lists: [
        {
          intro: "Before link activity:",
          items: [
            "anchor and donor audit;",
            "toxic/mass patterns;",
            "growth dynamics;",
            "niche fit.",
          ],
        },
      ],
      links: [
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Tech and semantics",
      level: 2,
      paras: [
        "Mirror duplicates, weak indexing, slow mobile load, and a core “off landings” burn content budget. Strategy without tech is a plan on sand.",
        "Build/check the semantic core, map clusters to URLs, remove cannibalization. Optimizing “one phrase in title” without query structure is under-strategy.",
      ],
      lists: [
        {
          intro: "Minimum before scaling:",
          items: [
            "canonical and mirrors;",
            "core and landing map;",
            "speed and mobile UX;",
            "critical errors in Webmaster/GSC.",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "How to assemble a quarter plan",
      level: 2,
      paras: [
        "After diagnosis pick a scenario, lock 1–2 main levers for the quarter (e.g. commercial landings + tech) and backlog the rest. Don’t try “everything at once” — scatter kills strategy.",
        "Monthly check KPIs and SERP by cluster: strategy is alive. If content is done and growth hits trust — strengthen external factors point-wise; if the opposite — don’t pour links onto empty URLs.",
      ],
      lists: [
        {
          intro: "Strategy start checklist:",
          items: [
            "goal and KPIs in analytics;",
            "scenario by age/history;",
            "content/tech/link debts;",
            "90-day priorities;",
            "reporting rhythm.",
          ],
        },
      ],
      links: [
        {
          label: "SEO after TOP",
          href: "/en/blog/seo-posle-topa/",
        },
      ],
    },
  ],
  related: [
    "samostoyatelnoe-seo",
    "tehnicheskiy-seo-audit",
    "semanticheskoe-yadro",
    "ssylochnyy-profil",
    "effektivnost-seo",
    "seo-posle-topa",
  ],
};
