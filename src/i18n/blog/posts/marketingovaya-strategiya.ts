import type { BlogPost } from "../../../data/blog";

/** EN overlay for marketingovaya-strategiya — same structure as RU JSON. */
export const marketingovayaStrategiyaEn: BlogPost = {
  slug: "marketingovaya-strategiya",
  title: "Planning and building a marketing strategy",
  date: "2019-10-07",
  category: "Digital marketing",
  cover: "/images/blog/marketingovaya-strategiya/cover-en.webp",
  excerpt:
    "How to assemble a marketing strategy: goal and KPIs, audience, channels, content, and a schedule — without chaotic gut-feel campaigns and without swapping strategy for a single SEO plan.",
  lead: [
    "Without a plan, marketing often slides into situational posts and one-off promos. A strategy locks the goal, stages, channels, and ways to measure — so the team moves in sync, not “wherever yesterday worked.”",
    "Set a measurable goal, know the audience, pick platforms you can run well, tie content to the brand, and put deadlines on the calendar. ROMI (return on marketing investment) and site SEO strategy are related topics.",
  ],
  faq: [
    {
      q: "Are strategy and a marketing plan the same?",
      a: "In practice they often merge: strategy sets course and priorities; the plan sets dates, tasks, and owners. Having a goal and linked actions matters more than arguing over the name.",
    },
    {
      q: "How is this different from an SEO strategy?",
      a: "An SEO strategy is about search and the site. Marketing is broader: brand, content, ads, email, offline — with shared KPIs.",
    },
    {
      q: "How many goals should I set at once?",
      a: "One main goal for the campaign period plus 2–3 intermediate ones. “Awareness + sales + PR + survey” with no priority dilutes the budget.",
    },
    {
      q: "Do I need SMART goals?",
      a: "Yes: specifics, a metric, a deadline, realism. “Become better known” without a number can’t be measured.",
    },
    {
      q: "Where should I start if there are many channels?",
      a: "With audience and goal, then 1–2 strong channels you already know. Scale after the first measurable results.",
    },
    {
      q: "How do I know the plan worked?",
      a: "Check KPIs set before launch: leads, sales, mentions, CR. Money via ROMI; the customer path via assisted conversions when the cycle is long.",
    },
  ],
  sections: [
    {
      title: "Why you need a marketing plan",
      level: 2,
      paras: [
        "A plan turns “we want growth” into a chain of actions with KPIs. Campaigns and touches across platforms sound like one brand proposition — awareness builds faster that way (often several touches before a decision).",
        "Chaos costs more: without a plan it’s harder to foresee slips, align creative, and not burn budget on unrelated activities.",
      ],
      links: [
        {
          label: "Seven touches",
          href: "/en/blog/sem-kasaniy/",
        },
        {
          label: "Brand promotion",
          href: "/en/blog/prodvizhenie-brenda/",
        },
      ],
    },
    {
      title: "Goal and measurable result",
      level: 2,
      paras: [
        "First state the end result: product launch, awareness, audience growth, an event, collecting reviews. Then break it into intermediate tasks and metrics: pre-orders, deals, mentions, CR after click, profit.",
        "The wording must be specific and dated: not “raise awareness,” but “grow metric X by date.” Realism matters: if you had no email list or press contacts, don’t bake in thousands of pre-sales and dozens of media pieces at once.",
      ],
      lists: [
        {
          intro: "Examples of goal → metric links:",
          items: [
            "product launch — pre-orders and deals;",
            "awareness — mentions and brand demand;",
            "event — registrations and attendance;",
            "reviews — number of honest ratings on maps/site.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Before target numbers, lock the baseline: current conversions, budget, team strengths, what you outsource. Otherwise KPIs float free of resources.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Audience and channels",
      level: 2,
      paras: [
        "Brilliant content fails if the right audience never sees it. Research segment interests and barriers — companies that do this systematically hit sales goals more often.",
        "Pick platforms where the audience actually is and where you have ways to talk. Lean on channels you already know: SMM, paid search, SEO, email. Beginners should deepen a strong direction rather than spray across every network at once.",
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Content, landing, and brand",
      level: 2,
      paras: [
        "Content and design should read as your brand: tone, palette, templates. Each campaign strengthens one story, not a pile of random creatives. Think through format (text, video, image), mailings, and — mandatory — a destination page for the action.",
        "Strategy sets the job; the landing closes the action: lead, purchase, registration. If the ad offer and the page diverge, the plan breaks at conversion.",
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
      ],
    },
    {
      title: "Schedule and measurement",
      level: 2,
      paras: [
        "Tie macro and micro goals to dates: team planning, content production, promotion period, measurement points. Decide what you change if the plan slips — or the “strategy” stays a file in the cloud.",
        "Judge effectiveness by pre-chosen KPIs and, where needed, in money (ROMI). For a long deal cycle, account for intermediate channels’ contribution — not only last click.",
      ],
      lists: [
        {
          intro: "Blocks on the calendar:",
          items: [
            "planning and approvals;",
            "creative production;",
            "campaign launch and support;",
            "measurement and correction.",
          ],
        },
      ],
      links: [
        {
          label: "ROI and ROMI",
          href: "/en/blog/roi-marketinga/",
        },
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
  ],
  closing: [
    "A marketing strategy is a goal, audience, channels, coherent content, and a calendar with KPIs. Build the frame before creatives: it’s easier to scale what works and cut what doesn’t in time.",
  ],
  related: [
    "prodvizhenie-brenda",
    "roi-marketinga",
    "metriki-reklamy",
    "sem-kasaniy",
    "tselevaya-auditoriya",
    "strategiya-prodvizheniya",
  ],
};
