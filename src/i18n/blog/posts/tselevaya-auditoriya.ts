import type { BlogPost } from "../../../data/blog";

/** EN overlay for tselevaya-auditoriya — same structure as RU JSON. */
export const tselevayaAuditoriyaEn: BlogPost = {
  slug: "tselevaya-auditoriya",
  title: "How to define your target audience: questions and segments",
  date: "2019-07-12",
  category: "SEO",
  cover: "/images/blog/tselevaya-auditoriya/cover-en.webp",
  excerpt:
    "A practical audience breakdown: demographics, jobs, anti-persona, segments, and data sources — so ads and content don’t shoot into the void.",
  lead: [
    "Target audience is people whose problem your product actually solves. Without it, semantics, ads, and copy live on “gut feel”: budget goes to clicks, leads are random.",
    "Below — a set of questions and steps to build a portrait in a reasonable time, cut non-targets, and split the audience into segments. It’s a base for both the SEO core and creatives — not a full market study replacement.",
  ],
  faq: [
    {
      q: "Where to start if you still have few clients?",
      a: "Hypotheses + competitor and niche data: who buys from leaders, which phrasing shows up in reviews and queries. Then refine with surveys and analytics from your first sales.",
    },
    {
      q: "Is the audience for SEO and ads the same?",
      a: "The core is the same; cuts can differ: search cares about intents and query phrasing, social ads — interests and lookalikes. One portrait, different channels.",
    },
    {
      q: "Do you need a detailed persona?",
      a: "A persona helps the team speak one language. For a start, 2–4 segments with a job, barrier, and channel are enough; “name and hobby” is optional.",
    },
    {
      q: "What is an anti-persona?",
      a: "Who is definitely not your client: another city/budget, a rival brand, freebie hunters, B2C when you sell B2B. Exclusions save budget and analytics noise.",
    },
    {
      q: "Where to get data?",
      a: "CRM and leads, Metrica/Analytics, Webmaster/GSC, Wordstat and the core, surveys, reviews, social stats, sales-manager interviews.",
    },
    {
      q: "Are demographics required?",
      a: "Often yes as a filter, but the job and purchase context matter more. “Women 25–45” without pain and triggers is a weak brief.",
    },
    {
      q: "How does audience tie to semantics?",
      a: "Segments suggest query clusters and landing tone. A core without an audience easily fills with non-target phrasing.",
    },
    {
      q: "How many segments is normal?",
      a: "Usually 2–5 working ones. Dozens of “micro-personas” without different offers and creatives is bureaucracy.",
    },
  ],
  sections: [
    {
      title: "Why describe the audience explicitly",
      level: 2,
      paras: [
        "A good product sold to the wrong person performs poorly: wrong offer, foreign tone, useless keys in ads. An audience description is a shared language for SEO, content, paid search, and sales.",
        "The goal isn’t to “guess everyone” — it’s to lock who you promise a result to and who you consciously leave out of focus.",
      ],
      lists: [
        {
          intro: "Without an audience, usually suffer:",
          items: [
            "semantics and copy — noise and cannibalization;",
            "ads — expensive non-target clicks;",
            "landings — weak first-screen response;",
            "analytics — unclear what counts as success.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Basic questions: who and where",
      level: 2,
      paras: [
        "Start with demographics and geography — as a frame, not the whole truth. Gender, age, city/region, device (mobile/desktop) cut obvious junk and help set targeting.",
        "If your own stats are thin — look at competitors with the same product: community audiences, reviews, site phrasing. In niches with a non-obvious buyer (gifts, B2B) lean on surveys and interviews, not only “it seems”.",
      ],
      lists: [
        {
          intro: "Sources at the start:",
          items: [
            "client and lead surveys;",
            "owner hypothesis + data check;",
            "social stats and lookalikes from niche leaders;",
            "geo and devices in Metrica/Analytics.",
          ],
        },
      ],
    },
    {
      title: "Jobs, adjacent demand, and anti-persona",
      level: 2,
      paras: [
        "Ask: which service/product they seek and what else covers the same need. Sushi delivery competes not only with other sushi but with pizza “for dinner at home” — indirect competitors for attention.",
        "Separately lock who will walk past: vegetarians at a meat shop, another delivery region, freebie hunters, competitors’ staff. An anti-persona saves negatives and budget.",
      ],
      lists: [
        {
          intro: "Useful to add to the brief:",
          items: [
            "direct competitors (same product);",
            "indirect (same job, different way);",
            "what else interests the buyer next to you;",
            "who we exclude from targeting and the core.",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Profile and segments",
      level: 2,
      paras: [
        "Build a segment profile: role (who pays / who uses), job, barrier, touch channel, typical query. On social, see what people follow and write about — as an interest hint, not absolute truth.",
        "Segmentation matters when the offer or creative actually changes: beginner vs expert, B2B vs B2C, “urgent” vs “compare”. One averaged portrait for the whole catalog is often weaker than two–three clear ones.",
      ],
      lists: [
        {
          intro: "Segment fields:",
          items: [
            "who and in what role;",
            "job / JTBD;",
            "barrier and objection;",
            "when the need appears;",
            "where they go for advice (search, chats, creators);",
            "main key/cluster for SEO.",
          ],
        },
      ],
    },
    {
      title: "Triggers: when and why they buy",
      level: 2,
      paras: [
        "Purchase ties to a moment: season, breakdown, project launch, gift, deadline. For B2B you often need an existing business or equipment fleet — without that, cold reach is useless.",
        "Map which jobs the product closes (lose weight / gain mass / maintain shape for fitness) — that yields different landings, ads, and query clusters.",
      ],
      lists: [
        {
          intro: "Check questions:",
          items: [
            "what must happen for someone to start searching for you;",
            "which “job” they hire your product for;",
            "whose example or expert influences the choice;",
            "what must be on the first screen for the segment.",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
      ],
    },
    {
      title: "How to lock it in and not lose it",
      level: 2,
      paras: [
        "The outcome is a short segment table in one place (Notion/sheet), tied to negatives, core clusters, and creatives. Once a quarter, check against real leads: the audience drifts if the product or market moved.",
        "Don’t confuse reach with quality: traffic growth without segment match is noise. Better fewer visits with a clear job and conversion.",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "audience draft in one question session;",
            "check against 20–50 real leads/orders;",
            "fix negatives and landings;",
            "repeat after an offer or region change.",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "analiz-konkurentov",
    "lending",
    "tekst-lendinga",
    "brendovyy-trafik",
    "optimizatsiya-konversii",
  ],
};
