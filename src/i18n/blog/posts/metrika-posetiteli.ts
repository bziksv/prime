import type { BlogPost } from "../../../data/blog";

/** EN overlay for metrika-posetiteli — same structure as RU JSON. */
export const metrikaPosetiteliEn: BlogPost = {
  slug: "metrika-posetiteli",
  title: "Yandex Metrika “Visitors” report: profiles and lifecycle",
  date: "2018-07-17",
  category: "Internet marketing",
  cover: "/images/blog/metrika-posetiteli/cover-en.webp",
  excerpt:
    "How to read the visitors report in Yandex Metrika: anonymous profiles, lifecycle metrics, quick segments, and jumping into Webvisor — without confusing it with the Audience section.",
  lead: [
    "Most Metrika reports answer “what happens with visits.” The visitors report looks at people (anonymous profiles): how often they came, where first, how many goals they hit, and what the path to purchase looks like on a long cycle.",
    "Below — how it differs from source groupings, which lifecycle metrics to watch, and how to link a profile to Webvisor. Cabinet section names changed (“Visitors” / user profiles) — orient on meaning: a client card, not a visit row. Webvisor has its own article; here the focus is the profiles report.",
  ],
  faq: [
    {
      q: "Is this the same as “Audience”?",
      a: "No. Audience is slices by demographics and interests. The visitors report is a list/cards of individual profiles with history.",
    },
    {
      q: "Can you see a person’s full name?",
      a: "No — these are anonymous counter IDs. Personal data in forms is a separate consent and policy contour.",
    },
    {
      q: "Why bother if sources exist?",
      a: "Sources show the channel. A profile shows how many touches are needed to a goal and how behavior changes visit to visit.",
    },
    {
      q: "Is there a period calendar?",
      a: "Historically the report built across the counter’s full life; the needed slice comes from segments (visits in a period, purchases, etc.). Check current UI in Help.",
    },
    {
      q: "Is ecommerce required?",
      a: "Not mandatory, but with purchase data you get order count and revenue per profile — handy for a store.",
    },
  ],
  sections: [
    {
      title: "Why watch visitors, not only visits",
      level: 2,
      paras: [
        "Visits are fine for daily channel control. For long deals (B2B, expensive goods, multi-touch services) the person’s path matters more: first source, visits before a lead, goals along the way.",
        "A profile card helps test ideas: “context converts on the second visit,” “organic warms, brand closes,” “many visits with no goal — weak landing.”",
      ],
      lists: [
        {
          intro: "Typical questions for the report:",
          items: [
            "how many visits before the first goal;",
            "what the first channel was;",
            "whether they return after a bounce;",
            "which URLs repeat before a lead.",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Yandex Metrika",
          href: "/en/blog/metrika-tseli/",
        },
        {
          label: "Installing Metrika",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "How the report differs from other sections",
      level: 2,
      paras: [
        "In Sources, Content, and similar reports a row is a group of visits with a shared trait. In the visitors report a row is a profile: accumulated interaction history with the counter.",
        "The demographics/interests section that could also be called “Visitors” earlier usually lives as “Audience” now. Don’t look for lifecycle there — those are aggregates, not a dossier.",
      ],
      notes: [
        {
          title: "On personal data",
          text: "Don’t try to “enrich” a profile with CRM full names in public reports without a legal basis. ClientID ↔ CRM linking is a separate careful contour.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Lifecycle metrics",
      level: 2,
      paras: [
        "On a card you usually watch: visit count, total time, goals reached, first source (and sometimes current). With ecommerce — orders and revenue per client.",
        "Compare medians and typical paths, not one “champion” with 40 visits — outliers warp conclusions. For ads it’s useful to separately view those whose first visit was paid.",
      ],
      tables: [
        {
          caption: "What to read on a profile",
          headers: ["Metric", "Why"],
          rows: [
            ["First source", "Who brought them into the funnel"],
            ["Visit count", "Decision-cycle length"],
            ["Goals", "Micro and macro conversions"],
            ["Ecommerce (if any)", "Client value"],
            ["Visit list", "Which URLs and when"],
          ],
        },
      ],
    },
    {
      title: "Quick segments and hypotheses",
      level: 2,
      paras: [
        "State the hypothesis first, then slice the audience: new in 7 days, long sessions, at least one paid visit, bought / didn’t finish checkout (if ecommerce exists).",
        "From a segment open several profiles — look for a repeating pattern, not a one-off case. Pattern → offer, content, or retargeting edit.",
      ],
      lists: [
        {
          intro: "Examples of useful slices:",
          items: [
            "first visit from Direct, goal not reached;",
            "≥3 visits with no lead;",
            "purchase after organic;",
            "abandoned cart (with ecommerce).",
          ],
        },
      ],
      links: [
        {
          label: "Content marketing in Metrika",
          href: "/en/blog/kontent-marketing-metrika/",
        },
      ],
    },
    {
      title: "Linking to Webvisor",
      level: 2,
      paras: [
        "From a visitor card it’s convenient to jump to a session recording if Webvisor is on and the visit entered the sample. Numbers say “what”; the recording says “how they stumbled.”",
        "Don’t watch every recording: segment first, then 5–10 illustrative visits. Setup and limits — in the Webvisor article.",
      ],
      links: [
        {
          label: "Yandex Webvisor",
          href: "/en/blog/vebvizor/",
        },
        {
          label: "Conversion rate optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The visitors report is about an anonymous profile’s lifecycle — not a replacement for traffic sources.",
        "Segment → several cards → hypothesis → site/ads edit. Without goals and (for a store) ecommerce the report’s value drops.",
      ],
    },
  ],
  closing: [
    "Open the visitor profiles report, filter a segment for your hypothesis, and review 5–10 cards with goals and first source — that’s how Metrika shows the path to a lead, not only “visits yesterday.”",
  ],
  related: [
    "vebvizor",
    "metrika-tseli",
    "metrika-ustanovka",
    "kontent-marketing-metrika",
    "optimizatsiya-konversii",
    "skvoznaya-analitika",
  ],
};
