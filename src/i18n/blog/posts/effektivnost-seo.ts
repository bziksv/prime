import type { BlogPost } from "../../../data/blog";

/** EN overlay for effektivnost-seo — same structure as RU JSON. */
export const effektivnostSeoEn: BlogPost = {
  slug: "effektivnost-seo",
  title: "How to measure SEO effectiveness: KPIs and reporting",
  date: "2019-07-03",
  category: "SEO",
  cover: "/images/blog/effektivnost-seo/cover-en.webp",
  excerpt:
    "Organic, brand/non-brand, ranks, and economics: which KPIs to watch, how to compare periods, and how not to confuse site prep with instant top rankings.",
  lead: [
    "SEO rarely gives you a “results button” next week. To know whether the channel works, you need KPIs agreed up front: organic volume and quality, brand/non-brand cut, rank movement on the keyword set, and a clear link to leads and revenue.",
    "A practical evaluation frame for both client and vendor. The first noticeable shifts in the keyword set usually show up around 2–3 months of steady work; building into the top results is planned for 2–6 months — prep weeks are not the same as ranking timelines.",
  ],
  faq: [
    {
      q: "Where should I start an SEO report?",
      a: "Organic (visits/users), search goals/conversions, visibility or share of the keyword set in the top results, brand vs non-brand, SEO spend vs CPA/ROMI (return on marketing investment). Without analytics goals, the report is blind.",
    },
    {
      q: "Are ranks the main KPI?",
      a: "Important, but not the only one. Watch clusters and the trend; don’t panic over ±2 spots in a day. Business cares more about traffic and organic leads.",
    },
    {
      q: "What comparison period is normal?",
      a: "Use week-over-week for ops, month-over-month and year-over-year for seasonality. Judge SEO on weeks and months — not “yesterday vs. today.”",
    },
    {
      q: "Do I need both Metrika and Analytics?",
      a: "One reliable counter plus Search Console (or Webmaster) is enough. Two tools are fine if the team already lives in both; the key is one attribution method.",
    },
    {
      q: "What brand share is “right”?",
      a: "It depends on niche and maturity. Trend and brand conversion matter more than “25% from an article”. Details are in the branded traffic piece.",
    },
    {
      q: "When should I expect economic effect?",
      a: "After prep and once work starts, ranks and leads build over months. Counting ROMI in week one is pointless; plan on a 2–6 month horizon for the keyword set.",
    },
    {
      q: "What if traffic grows but leads don’t?",
      a: "Check page intent, audience, UX, and goals. Informational traffic growth without commercial URLs is a common vanity-organic trap.",
    },
    {
      q: "How do SEO KPIs differ from paid search?",
      a: "Paid search responds faster and is easier to steer with bids. SEO has more lag, but cost per lead often improves over time with a stable keyword set.",
    },
  ],
  sections: [
    {
      title: "Why lock KPIs upfront",
      level: 2,
      paras: [
        "Without agreed metrics, the client expects “#1 tomorrow” and the vendor shows crawl reports — conflict is almost inevitable. KPIs give a shared language: what success means at 30 / 90 / 180 days.",
        "Connect Metrica or Analytics with goals, Search Console (or Webmaster), and a keyword table with priority URLs. Otherwise you’re left with gut feel.",
      ],
      lists: [
        {
          intro: "Base set:",
          items: [
            "organic: visits, users, bounce/engagement",
            "conversions and revenue/leads from organic",
            "brand vs non-brand",
            "ranks / visibility for the keyword set",
            "SEO budget and cost per lead",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "Web analyst",
          href: "/en/blog/veb-analitik/",
        },
      ],
    },
    {
      title: "Organic traffic volume",
      level: 2,
      paras: [
        "The clearest cut: Organic Search (or a “free traffic” segment) for the period vs last month/year. Watch not only the total but landings: which URLs pull demand, which stay quiet.",
        "Growth for growth’s sake misleads: bot spikes, a seasonal news hook, or cannibalization can inflate visits without leads. Always keep conversions and quality nearby.",
      ],
      lists: [
        {
          intro: "Report practice:",
          items: [
            "organic month-over-month and year-over-year",
            "top search landings",
            "new vs old URLs",
            "exclude clear anomalies (attacks, counter issues).",
          ],
        },
      ],
      links: [
        {
          label: "Suspicious Google traffic",
          href: "/en/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "Branded and non-brand demand",
      level: 2,
      paras: [
        "For known brands, split organic into brand and non-brand: company-name queries find “already yours”; generic phrases bring new demand. Brand-only growth with non-brand falling is a different diagnosis than the reverse.",
        "In Metrica/Analytics — segments or query/page reports; in GSC/Webmaster — brand query cuts. There’s no universal “ideal share”: watch trend and economics.",
      ],
      lists: [
        {
          intro: "What to watch:",
          items: [
            "brand share of organic",
            "brand visit conversion",
            "non-brand commercial cluster dynamics",
            "brand defense in ads when needed.",
          ],
        },
      ],
      links: [
        {
          label: "Branded traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
      ],
    },
    {
      title: "Ranks and core visibility",
      level: 2,
      paras: [
        "A rank tracker or Webmaster/GSC exports show how the core moves. Judge share of phrases in the top results-10 / top 3 by priority clusters — not one phrase “in the moment”.",
        "Daily 1–3 spot jumps are noise. Panic fits sustained cluster drops, deindexing, or a SERP intent shift.",
      ],
      lists: [
        {
          intro: "In the report lock:",
          items: [
            "priority URL × query list",
            "% of keyword set in the top results-10 vs last period",
            "new top-result entries and losses",
            "informational and commercial clusters separately.",
          ],
        },
      ],
      links: [
        {
          label: "Keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Economics: leads, CPA, ROMI",
      level: 2,
      paras: [
        "For business the outcome is leads, sales, and margin — not “green ranks”. Tie SEO spend (work, content, links, tools) to the number and quality of organic leads.",
        "Compare organic CPA with paid search on comparable goals. SEO is slower at the start, but with a stable core often lowers acquisition cost. Don’t demand payback in week one after an audit.",
      ],
      lists: [
        {
          intro: "Finance minimum:",
          items: [
            "period budget",
            "leads/orders from organic",
            "CPA and ROMI when possible",
            "SEO share of total revenue/leads.",
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
    {
      title: "How to read dynamics without panic",
      level: 2,
      paras: [
        "Build a simple rhythm: weekly smoke (traffic, account errors), monthly KPI review, quarterly core and priority rethink. A couple of spots down on one key isn’t a reason to break the strategy.",
        "If there’s no organic at all — tech and indexing first. If traffic exists but money doesn’t — audience, landings, and offer. SEO effectiveness is a metric bundle, not one chart.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "organic grows, conversions fall",
            "only brand grows, commercial stalls",
            "ranks exist, clicks don’t (snippet/intent)",
            "sharp collapse after a release or breach.",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Site prep — a guide of weeks–month. Core ranking buildup after work starts — planned 2–6 months.",
        },
      ],
    },
  ],
  related: [
    "brendovyy-trafik",
    "dashboard",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
    "optimizatsiya-konversii",
    "veb-analitik",
  ],
};
