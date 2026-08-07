import type { BlogPost } from "../../../data/blog";

/** EN overlay for otchet-klientu — same structure as RU JSON. */
export const otchetKlientuEn: BlogPost = {
  slug: "otchet-klientu",
  title: "Client ad campaign report: 9 rules",
  date: "2021-07-12",
  category: "Digital marketing",
  cover: "/images/blog/otchet-klientu/cover-en.webp",
  excerpt:
    "How to deliver an ad report so the client understands the result: goals and ROI first, shared KPIs, a dashboard summary, a glossary, and details in an appendix — without “elf” jargon.",
  lead: [
    "A campaign report isn’t only numbers from the ad account — it’s a way to agree on the picture: what worked, what didn’t, and what to do next. Bad presentation breaks trust even with decent results.",
    "Transparency, structure, a glossary, and business metrics beat a CTR dump. Ad-account tools change — report meaning first, screenshots second.",
  ],
  faq: [
    {
      q: "Should you start the report with CTR or with money?",
      a: "With business goals and money outcomes (leads, sales, ROI/ROAS — whatever the brief locked). CTR and clicks explain; they don’t replace.",
    },
    {
      q: "Do you need a dashboard for client reports?",
      a: "A one-screen summary — yes: vs the previous period and an answer to “are we on goal?” A full dashboard — by agreement; see the separate article.",
    },
    {
      q: "How often should you report?",
      a: "As in the contract: weekly / biweekly / monthly. What matters is the same structure and metric definitions from report to report.",
    },
    {
      q: "What if campaign results are weak?",
      a: "Show the facts, cause hypotheses, and a fix plan. Hiding a miss is worse than an honest breakdown.",
    },
    {
      q: "Do report examples have to be from Google Ads?",
      a: "No. The same rules for Yandex Direct and other accounts: summary → blocks → details; calls and offline as a separate line if the platform doesn’t see them.",
    },
  ],
  sections: [
    {
      title: "1–3. Honesty, structure, and goals",
      level: 2,
      paras: [
        "Transparency: numbers don’t “paint” success. If the campaign dips — say why and what you’re changing. Consistency: the same KPIs every reporting period.",
        "Main first, then details: summary → stats blocks → keyword/creative breakdowns. Start with brief goals and money impact, then impressions, clicks, CTR, CPA.",
      ],
      lists: [
        {
          intro: "In the report header:",
          items: [
            "period and channels",
            "goal (leads / sales / traffic)",
            "actual vs plan",
            "1–3 main takeaways",
            "what we do next period.",
          ],
        },
      ],
    },
    {
      title: "4–5. Summary and the client’s language",
      level: 2,
      paras: [
        "A dashboard or one-page summary helps the client report “upward.” Answer: does advertising help the goal, what’s the strategy, how the media plan is going, what changed vs the last report.",
        "Explain terms in a footnote or short glossary. Don’t over-explain the obvious, but don’t leave ROAS/attribution undefined.",
      ],
      lists: [],
      links: [
        {
          label: "Business dashboard",
          href: "/en/blog/dashboard/",
        },
      ],
    },
    {
      title: "6–7. KPIs by segment and data completeness",
      level: 2,
      paras: [
        "Split interaction types: search / networks / retargeting, new / returning, funnel stages. Attribution affects “whose” conversion — name the model.",
        "Merge data from all accounts into one fact table. Spot-check exports for anomalies. Calls, messengers, offline sales — a separate block if the platform doesn’t count them.",
      ],
      lists: [
        {
          intro: "Handy KPI classification:",
          items: [
            "reach and cost per contact",
            "clicks and traffic quality",
            "conversions and CPA/CPL",
            "revenue and ROI/ROAS",
            "supporting: ER, bounce, depth.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "“AdWords” in old texts = Google Ads. Report names in Direct and Google change — for the client, column meaning beats a button screenshot.",
        },
      ],
      links: [
        {
          label: "Click fraud",
          href: "/en/blog/sklikivanie/",
        },
      ],
    },
    {
      title: "8–9. Details and business context",
      level: 2,
      paras: [
        "Ask the client about format: slides, PDF, spreadsheet. Full exports and keyword lists go in an appendix so they don’t drown the summary.",
        "Add adjacent context: site lead growth, seasonality, competitor promos, analytics outages — anything that changes how numbers read, even if it’s “not from the ad account.”",
      ],
      lists: [
        {
          intro: "Before sending:",
          items: [
            "read it with the client’s eyes",
            "check period and currency",
            "confirm conclusions follow from the numbers",
            "there are next steps, not only “see the Excel.”",
          ],
        },
      ],
    },
  ],
};
