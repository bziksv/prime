import type { BlogPost } from "../../../data/blog";

/** EN overlay for strategiya-prodvizheniya — same structure as RU JSON. */
export const strategiyaProdvizheniyaEn: BlogPost = {
  slug: "strategiya-prodvizheniya",
  title: "SEO strategy: match the plan to the state of your site",
  date: "2018-10-02",
  category: "SEO",
  cover: "/images/blog/strategiya-prodvizheniya/cover-en.webp",
  excerpt:
    "An SEO strategy isn’t copied from someone else’s checklist. It depends on site type, age, content, backlinks, and tech. How to set a goal and choose a work plan.",
  lead: [
    "The right strategy moves rankings, traffic, and leads — but “right” doesn’t mean universal. A plan for a young store and for an old corporate site with someone else’s link history will look different.",
    "Here’s how to state a goal, what to check before work starts, and how typical scenarios (new site, long-tail growth, “already promoted”) differ. A DIY work order lives in the DIY SEO post; this piece is about choosing the course.",
  ],
  faq: [
    {
      q: "How many SEO strategies exist?",
      a: "Not “exactly three forever.” There are typical scenarios by age and site state. The concrete plan is always individual.",
    },
    {
      q: "Where does a strategy start?",
      a: "With a measurable goal (leads, revenue, cluster visibility) and a diagnosis: content, tech, links, competition. Not with lucky link buys.",
    },
    {
      q: "When should I expect page-one rankings?",
      a: "Prep often takes weeks to about a month. Ranking growth for the keyword set is planned over 2–6 months after work starts. Strategy doesn’t rewrite how search works.",
    },
    {
      q: "How is this different from DIY SEO?",
      a: "That post is the owner’s work order. This one is how to choose the accent — new site, long-tail, or rehab — from the inputs.",
    },
    {
      q: "Do I need separate strategies for Yandex and Google?",
      a: "The base is shared; accents (locality, commercial signals, tools) may differ. Often both channels run as one program with nuances.",
    },
    {
      q: "Can I copy a competitor’s strategy?",
      a: "Study the results and structure — yes. Copy texts and spam links — no. You have a different domain age and resources.",
    },
    {
      q: "What matters more — content or links?",
      a: "Meet intent and tech first; links after base relevance. On a spammy profile, more links can hurt.",
    },
    {
      q: "Is strategy SEO only?",
      a: "Often no: organic + ads + landing conversion. The channel plan has to serve the business goal.",
    },
  ],
  sections: [
    {
      title: "Goal before tactics",
      level: 2,
      paras: [
        "Strategy starts with a goal you can check in 3–6 months: not “get to page one,” but “+N organic leads while keeping or growing conversion” or “share of the commercial keyword set near page one.”",
        "A “+10,000 visits” goal without a target-action filter is risky — non-target traffic shows up. Lock region, priority services, and KPIs in analytics before you pick tactics.",
      ],
      lists: [
        {
          intro: "Goal model:",
          items: [
            "business result (leads, sales)",
            "horizon (months, not days)",
            "constraints (budget, team, CMS)",
            "channels (Yandex / Google / both)",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Getting a site ready for promotion often takes weeks to about a month. Ranking the keyword set is planned over 2–6 months. Strategy sets priorities — not a guaranteed date.",
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
        "A young site without indexation and trust can’t run the same program as a site with five years of organic. Wide geography without branches costs more than a local niche.",
      ],
      lists: [
        {
          intro: "Factors:",
          items: [
            "site type and jobs",
            "age and past SEO experiments",
            "niche and UX expectations",
            "region coverage",
            "content and tech quality",
            "backlink profile",
            "Yandex / Google / both focus",
          ],
        },
      ],
      links: [
        {
          label: "Yandex vs Google SEO",
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
        "The informal “three strategies” from practice are scenarios, not rigid packages. You combine them after an audit.",
        "From scratch: bake SEO into structure and CMS before launch — cheaper than fixing later. First noticeable moves on the keyword set take months, not “page one a week after release.”",
        "Long tail: grow from narrow multi-word queries toward shorter commercial ones — nested like a matryoshka. When reputation and a base already exist, strengthen long- and mid-tail first, then compete for short head terms.",
        "Rehab: the site was “already promoted” and the result disappoints. Unpack past strategy, content, and link mistakes first — then write a new plan, or you’ll repeat someone else’s failures.",
      ],
      lists: [
        {
          intro: "Scenarios in short:",
          items: [
            "new site — structure and keyword map before content",
            "long-tail — grow from long-tail toward head terms",
            "after someone else’s SEO — audit and clear the debts first",
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
        "Owners often rate copy as “fine.” In practice check uniqueness, intent fit, over-optimization, and real behavior in analytics — not only a density score in an online tool.",
        "Internal/external duplicates, template cards with no value, and pages that miss the query break any link strategy. Landings for clusters first, then growth.",
      ],
      lists: [
        {
          intro: "Signals to rework:",
          items: [
            "duplicates and copy-paste",
            "keywords without answering intent",
            "high bounce on target traffic",
            "no H1–H2 structure for the queries",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Chasing a uniqueness % in a checker and ignoring whether the page closes search demand. Uniqueness is a base — not a ticket to page one.",
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
        "A profile can be relatively clean, spammy, or critical. That decides whether you can grow links or must clean and neutralize risks first.",
        "Mass buying “for the strategy” is a bad strategy. Relevance and natural mentions first; links — on purpose and in a volume the site can bear.",
      ],
      lists: [
        {
          intro: "Before link activity:",
          items: [
            "anchor and donor audit",
            "toxic / mass patterns",
            "growth dynamics",
            "niche fit",
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
      title: "Tech and keywords",
      level: 2,
      paras: [
        "Mirror duplicates, weak indexing, slow mobile load, and a keyword set that doesn’t map to landings burn content budget. Strategy without tech is a plan on sand.",
        "Build or check the keyword set, map clusters to URLs, remove cannibalization. Optimizing “one phrase in the title” without query structure is under-strategy.",
      ],
      lists: [
        {
          intro: "Minimum before scaling:",
          items: [
            "canonical and mirrors",
            "keyword set and landing map",
            "speed and mobile UX",
            "critical errors in Webmaster / Search Console",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "How to assemble a quarter plan",
      level: 2,
      paras: [
        "After diagnosis, pick a scenario, lock one or two main levers for the quarter (e.g. commercial landings + tech), and backlog the rest. Don’t try “everything at once” — scatter kills strategy.",
        "Monthly, check KPIs and results by cluster: strategy is alive. If content is done and growth hits trust — strengthen external factors surgically. If the opposite — don’t pour links onto empty URLs.",
      ],
      lists: [
        {
          intro: "Strategy start checklist:",
          items: [
            "goal and KPIs in analytics",
            "scenario by age / history",
            "content / tech / link debts",
            "90-day priorities",
            "reporting rhythm",
          ],
        },
      ],
      links: [
        {
          label: "SEO after page one",
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
