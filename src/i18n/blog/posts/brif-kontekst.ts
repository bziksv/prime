import type { BlogPost } from "../../../data/blog";

/** EN overlay for brif-kontekst — same structure as RU JSON. */
export const brifKontekstEn: BlogPost = {
  slug: "brif-kontekst",
  title: "Paid-search brief: what to include",
  date: "2017-05-19",
  category: "Paid search",
  cover: "/images/blog/brif-kontekst/cover-en.webp",
  excerpt:
    "How to write a brief for Direct and Google Ads: goals, USP, pain points, budget, KPI timelines, audience, geo, creative limits — so contractor and client look at the same result.",
  lead: [
    "Without a brief, the client’s expectations stay in their head and the contractor optimizes “as usual.” Then you argue about “too few leads” with no shared starting point.",
    "Below: a simple paid-search brief plan (and SEO next door if it’s one project). It isn’t a website brief and isn’t a contract replacement — a frame of meaning before launch. The more concrete the facts, the fewer report fights.",
  ],
  faq: [
    {
      q: "Is a paid-search brief required?",
      a: "For a complex launch — yes. A short list of goals, budget, and KPIs already cuts misunderstanding.",
    },
    {
      q: "How is a paid-search brief different from a site brief?",
      a: "A site brief is product and structure. A paid-search brief is channels, audience, budget, and success criteria for ads.",
    },
    {
      q: "Do you need finished ad copy in the brief?",
      a: "Optional. Offer, brand bans, and “what not to do” examples matter more. Copy is often tested by the contractor.",
    },
    {
      q: "Which KPIs should you list in the brief?",
      a: "Ones you can measure: CPL/CPA, lead count, ROAS — with a lead definition. Not “page-one rankings” as a paid-search goal.",
    },
    {
      q: "Is “budget as possible” OK in a brief?",
      a: "No. You need a test limit and a condition for when you’re ready to scale.",
    },
    {
      q: "Is “all men 25–45” enough as an audience brief?",
      a: "No. You need the customer’s job, geo, what you’ve tried, and why they choose you.",
    },
    {
      q: "Should you listen to the contractor on the brief?",
      a: "Yes if you trust them: the client knows the product; the specialist knows the auction and click wording.",
    },
  ],
  sections: [
    {
      title: "Why a brief",
      level: 2,
      paras: [
        "A brief locks what you want, on which platforms, and how you’ll measure success. Otherwise “grow sales” reads ten ways.",
        "Depth varies: from short (budget, object, audience) to detailed (creatives, negatives, geo). For paid search a structured middle usually works — without micromanaging every keyword.",
      ],
      links: [
        {
          label: "Paid-search contractor",
          href: "/en/blog/podryadchik-kontekst/",
        },
        {
          label: "Site brief",
          href: "/en/blog/tz-na-sayt/",
        },
      ],
    },
    {
      title: "Section plan",
      level: 2,
      paras: [
        "Goals and format: Search/networks, Direct/Google Ads, expected effect (leads, sales, awareness, promo) — measurable.",
        "USP and competitors: how you differ with facts, which customer pain you close. Not “we’re the best,” but verifiable advantages.",
        "The problem now: little traffic, traffic but few leads, weak brand — that sets the work focus.",
        "Budget and scale rules; deadlines for interim results and evaluation metrics.",
        "Audience and geo: who buys, where you serve, what you confirm with data — not a guess.",
        "Limits: legal wording, no brand comparisons, required disclaimers, access to Metrika/accounts.",
      ],
      lists: [
        {
          intro: "Minimum in a one-page brief:",
          items: [
            "goal and KPI",
            "test budget",
            "geo and offer",
            "what you’ve already tried",
            "what a good lead looks like",
            "contacts and access",
          ],
        },
      ],
      links: [
        {
          label: "Media plan",
          href: "/en/blog/mediaplan/",
        },
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Alignment and common sense",
      level: 2,
      paras: [
        "After filling it in, check with the contractor: what’s realistic for the budget and timeline. A rigid brief with an impossible CPL only breeds conflict.",
        "Clients often overrate pretty product details and underrate delivery, price, and reply speed — give the specialist room to propose ad hypotheses.",
        "The brief is living: after the first month update KPIs and limits from the data.",
      ],
      links: [
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
        {
          label: "Paid-search myths",
          href: "/en/blog/zabluzhdeniya-konteksta/",
        },
      ],
    },
  ],
  closing: [
    "Fill one page: goal, budget, geo, USP, and lead definition — enough to start a contractor dialogue without “just run ads for us” into the void.",
  ],
  related: [
    "podryadchik-kontekst",
    "mediaplan",
    "otchet-klientu",
    "tselevaya-auditoriya",
    "zabluzhdeniya-konteksta",
    "sayt-pered-reklamoy",
  ],
};
