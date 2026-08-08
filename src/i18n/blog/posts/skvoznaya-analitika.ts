import type { BlogPost } from "../../../data/blog";

/** EN overlay for skvoznaya-analitika — same structure as RU JSON. */
export const skvoznayaAnalitikaEn: BlogPost = {
  slug: "skvoznaya-analitika",
  title: "End-to-end analytics: rollout problems and how to dodge them",
  date: "2019-11-12",
  category: "Digital marketing",
  cover: "/images/blog/skvoznaya-analitika/cover-en.webp",
  excerpt:
    "Why end-to-end analytics matters, when it pays off, and which mistakes break ROMI: CRM without discipline, incomplete channels, borrowed attribution, and rushing setup.",
  lead: [
    "End-to-end analytics answers not “how many clicks,” but “which ad ruble returned profit.” That means ad accounts, the site, call tracking, and CRM meet in one loop — not five “eyeball” spreadsheets.",
    "Below: what you connect, when rollout is still early, and typical traps: messy CRM, missing channels, one-size-fits-all settings, and overweighting early touches. A dashboard without deals isn’t end-to-end analytics.",
  ],
  faq: [
    {
      q: "How is it different from web analytics (GA / counters)?",
      a: "Web analytics sees visits and on-site goals. End-to-end adds spend, calls/chats, and deal amounts from CRM — to ROMI and LTV, not only to a lead.",
    },
    {
      q: "Is Looker Studio enough?",
      a: "As a front-end view — yes. As the only “end-to-end” layer — no: without CRM join and correct UTM the report stays site analytics.",
    },
    {
      q: "When is rollout too early?",
      a: "With a tiny budget and a couple of campaigns, careful UTM, goals, and a manual weekly rollup are cheaper than an expensive loop “for show.” Payback threshold is individual.",
    },
    {
      q: "Why does nothing work without CRM?",
      a: "Revenue and deal status live in CRM. If managers don’t create leads and don’t write amounts, the system honestly shows garbage.",
    },
    {
      q: "Which attribution model is the “right” one?",
      a: "The one that matches your deal cycle and campaign goal. Brand awareness and a promo spike weight channels differently.",
    },
    {
      q: "How long does setup take?",
      a: "Not “connected in a day.” You need a brief, access, a metrics dictionary, join tests, and acceptance. Plan a calendar — or numbers will look pretty and be wrong.",
    },
  ],
  sections: [
    {
      title: "Why connect ads, site, and CRM",
      level: 2,
      paras: [
        "Business cares about promotion payback. Form conversion without deal amount doesn’t say whether a channel was worth money. Without an end-to-end picture teams often live by “it works — don’t touch” or, worse, cut channels on one KPI (few calls) while those channels brought margin.",
        "A working loop usually includes ad systems and web analytics, call tracking / inquiry accounting, and CRM / deal accounting. The goal is to see spend next to revenue and count ROMI by campaign — and at maturity by keyword/creative too.",
      ],
      lists: [
        {
          intro: "Minimum data:",
          items: [
            "spend and clicks from ad accounts",
            "UTM and goals on the site",
            "calls/chats tied to source",
            "leads, amounts, and statuses in CRM",
          ],
        },
      ],
      links: [
        {
          label: "ROI and ROMI",
          href: "/en/blog/roi-marketinga/",
        },
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
      ],
    },
    {
      title: "When rollout still doesn’t pay off",
      level: 2,
      paras: [
        "An end-to-end loop costs money and time. If ad spend is small and campaigns are few, tag discipline, goals, and a weekly rollup often suffice. The “time to” threshold depends on niche: a practical cue is when data volume and cost of error already exceed the system’s cost.",
        "Without UTM even an expensive service won’t join an ad to revenue. Tags are hygiene before picking a vendor.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Order in sources and CRM first, then complex ETL. A pretty dashboard on crooked data speeds up bad decisions.",
        },
      ],
      links: [
        {
          label: "Looker Studio",
          href: "/en/blog/looker-studio/",
        },
      ],
    },
    {
      title: "Three ways to build the loop",
      level: 2,
      paras: [
        "By hand: exports from ad accounts, call tracking, and CRM into spreadsheets. Cheap at the start, expensive in people and error risk. Fine as a pilot, scales poorly.",
        "Through a warehouse (e.g. BigQuery) and BI: streams/exports → ROMI/LTV calcs → dashboard in Looker Studio or Power BI. Flexible at volume; needs skills and pipeline care.",
        "A ready call-tracking / marketing platform: faster start, less flexibility. Check CRM integrations and needed attribution models before the contract.",
      ],
      lists: [
        {
          intro: "Before choosing, ask:",
          items: [
            "which CRM and ad accounts you already have",
            "whether you need offline and long deals",
            "who will maintain the joins",
            "which reports are mandatory in a month",
          ],
        },
      ],
      links: [
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
      ],
    },
    {
      title: "Mistake: CRM filled “when someone remembers”",
      level: 2,
      paras: [
        "End-to-end analytics takes revenue from CRM. A missed lead, empty amount, deal without tasks — and a channel “slumps” or, conversely, looks like a hero. Telephony and call tracking help create inquiries automatically, but sales-desk rules still matter.",
        "On probation a short CRM exam helps: create a lead, log amount, move stages, attach correspondence. Otherwise marketing optimizes a myth.",
      ],
      lists: [
        {
          intro: "Minimum discipline:",
          items: [
            "a lead for every inquiry",
            "amount and stage kept current",
            "calls and tasks tied to the deal",
            "no “deals in someone’s head” outside the system",
          ],
        },
      ],
    },
    {
      title: "Mistake: missing channels and “borrowed” attribution",
      level: 2,
      paras: [
        "Clients write to email and chat, not only call. If email and messengers stay outside tracking, ad value is undercounted. Email tracking and chat accounting are part of the loop — not “later.”",
        "A default attribution model rarely matches your funnel. A startup may care more about first brand touch; a promo campaign — fresh interactions near the offer date. Models differ across GA and other systems — pick for the goal, not “like everyone else.”",
        "Old touches are often overvalued: a call a month ago is weaker than yesterday’s. It helps to account for value half-life and deal cycle — otherwise budget goes to the meet channel, not the close channel.",
      ],
      links: [
        {
          label: "Assisted conversions",
          href: "/en/blog/assotsiirovannye-konversii/",
        },
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Mistake: too little time for setup",
      level: 2,
      paras: [
        "Buying a service ≠ getting ROMI tomorrow. You need access, a metrics dictionary, tests of “click → lead → payment” joins, spend reconciliation. A ready product speeds things up but doesn’t cancel acceptance.",
        "Budget a specialist and a calendar. Ask the vendor for an acceptance checklist: do deal amounts match, is there double counting, is source visible on a call from paid search.",
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "The first two to four weeks after launch are reconciliation mode, not “cut budget by the chart” mode. While data stabilizes, keep decisions conservative.",
        },
      ],
    },
  ],
  closing: [
    "End-to-end analytics pays off when you have ad volume, clean CRM, and time to join the pieces. Start with UTM and deal discipline, pick a loop for the job — and don’t confuse a pretty report with profit.",
  ],
  related: [
    "looker-studio",
    "roi-marketinga",
    "utm-metki",
    "assotsiirovannye-konversii",
    "instrumenty-veb-analitiki",
    "dashboard",
  ],
};
