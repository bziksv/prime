import type { BlogPost } from "../../../data/blog";

/** EN overlay for kontent-marketing-metrika — same structure as RU JSON. */
export const kontentMarketingMetrikaEn: BlogPost = {
  slug: "kontent-marketing-metrika",
  title: "Content marketing in Yandex Metrika: which reports to watch",
  date: "2018-10-15",
  category: "Content marketing",
  cover: "/images/blog/kontent-marketing-metrika/cover-en.webp",
  excerpt:
    "How to analyze content marketing in Yandex Metrika: visits and engagement, maps, sources, goals and conversions — without bounce cults and one-off spikes after publish.",
  lead: [
    "A content strategy without numbers quickly becomes “we post because everyone does.” Metrika won’t replace editorial meaning, but it shows which pieces people read, where they come from, and whether they reach a goal.",
    "Below — a practical report contour: traffic and engagement, judging a piece, sources, conversions. Which KPIs to pick in principle is in the content-marketing analytics article; here the focus is what to watch in the Metrika cabinet. Menu labels update — orient on report meaning.",
  ],
  faq: [
    {
      q: "How is this different from the content metrics article?",
      a: "That one covers KPI sets and evaluation logic. Here — how to pull those signals via Metrika reports and goals.",
    },
    {
      q: "Is bounce = a bad article?",
      a: "Not always. A short answer to an informational query can finish the job in a minute. Read the bundle: bounce + time + scroll + goal.",
    },
    {
      q: "Is a scroll map = finish reading?",
      a: "Approximately. Someone may scroll without reading. Add a goal for an end anchor / time on page or a read-through event.",
    },
    {
      q: "Which period to use?",
      a: "For blog trends — several months so one spike doesn’t warp the picture. Editorial ops — weekly.",
    },
    {
      q: "Are visits enough without goals?",
      a: "For “write and forget” — no. Without goals and UTM you can’t tell useful traffic from noise.",
    },
  ],
  sections: [
    {
      title: "Content goal first — reports later",
      level: 2,
      paras: [
        "Before the dashboard, lock why the piece exists: lead, signup, SEO cluster support, warm-up to purchase. The goal decides success — URL visit, finish reading, CTA click, or micro-conversion.",
        "Without a goal Metrika shows pretty charts without a decision. Chain: business goal → Metrika goal → report that explains it.",
      ],
      lists: [
        {
          intro: "Minimum before analysis:",
          items: [
            "working counter on templates;",
            "1–3 goals for content;",
            "UTM on newsletters and paid traffic;",
            "list of key blog / guide URLs.",
          ],
        },
      ],
      links: [
        {
          label: "Content marketing analytics",
          href: "/en/blog/analitika-kontent-marketinga/",
        },
        {
          label: "Goals in Yandex Metrika",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Traffic and engagement",
      level: 2,
      paras: [
        "Traffic reports show visit dynamics by day and source. Compare periods (week to week, month to month) and watch dips next to publishes, seasonality, and site outages.",
        "Engagement: bounce, time on site, depth. In Metrika bounce is a short visit with few pageviews (threshold may be refined in Help). Rising bounce on an article can be bad UX or a “fast answer” — read it in query-type context.",
      ],
      lists: [
        {
          intro: "What to watch per article:",
          items: [
            "visits to the URL and post-publish dynamics;",
            "time and depth;",
            "bounce share vs similar pieces;",
            "return visits / loyalty when available.",
          ],
        },
      ],
      notes: [
        {
          title: "Don’t fix strategy in one day",
          text: "A one-off spike after a social reshare isn’t a lasting effect. Watch the trend over weeks and months.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Maps, scroll, and “did they finish?”",
      level: 2,
      paras: [
        "Scroll and click maps hint how far people go and where they press. CTA zones, TOC, tables are good check candidates. Data is coarse: scroll ≠ attentive reading.",
        "More precise — a goal on an end-of-article anchor, a “read N%” event, or time on page. That separates “scrolled past” from “reached the takeaway”.",
      ],
      links: [
        {
          label: "Installing Metrika",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Shares, likes, and comments",
      level: 2,
      paras: [
        "Share buttons, social counters, and comments are interest signals — not KPIs by themselves. In Metrika watch share parameter/event reports if clicks are tagged; otherwise use platform stats as a supplement.",
        "Comments help qualitatively: tone, questions, objections. Reply — loyalty and fuel for next pieces. On-site “like/dislike” is a rough poll, not a conversion substitute.",
      ],
    },
    {
      title: "Where the reader comes from",
      level: 2,
      paras: [
        "Traffic sources show what to grow: search, direct, social, email, referral. Organic growth on useful URLs signals the cluster and content work; a drop at the same publish volume is a reason to check indexing and cannibalization.",
        "Compare sources not only by visits but by goals: cheap traffic without leads loses to smaller but targeted volume.",
      ],
      lists: [
        {
          intro: "Practical monthly review:",
          items: [
            "top URLs by visits and by conversions;",
            "sources → goal;",
            "high-traffic pieces with a weak CTA;",
            "what to amplify in distribution, what to rewrite.",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
        {
          label: "Indexing check",
          href: "/en/blog/proverka-indeksatsii/",
        },
      ],
    },
    {
      title: "Conversions and strategy success",
      level: 2,
      paras: [
        "Content success is goal-completion rate on key URLs and contribution to assisted conversions. Rough ROI: effect (leads/revenue) vs production and distribution cost.",
        "Change strategy in steps: hypothesis → headline/CTA/structure fix → measure again. A global editorial redesign without data often breaks what already worked.",
      ],
      lists: [
        {
          intro: "10 analysis anchors (meaning checklist):",
          items: [
            "visit dynamics;",
            "engagement;",
            "scroll / finish reading;",
            "shares and response;",
            "comments;",
            "sources;",
            "top successful pieces;",
            "conversions by goals;",
            "period comparison;",
            "decisions: amplify / rewrite / drop from the plan.",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Metrika for content is a bundle of traffic, map, source, and goal reports under a pre-chosen KPI. Bounce and likes alone don’t answer “does the strategy work”.",
        "A long trend horizon + weekly editorial ops + data-driven spot fixes beat one-off spikes after a reshare.",
      ],
    },
  ],
  closing: [
    "Set content goals in Metrika, pull a report on key URLs and sources over several months — and edit the plan by conversions and finish-reading, not by one day with a visit peak.",
  ],
  related: [
    "analitika-kontent-marketinga",
    "metrika-tseli",
    "metrika-ustanovka",
    "kontent-plan",
    "proverka-indeksatsii",
    "skvoznaya-analitika",
  ],
};
