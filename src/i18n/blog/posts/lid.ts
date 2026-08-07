import type { BlogPost } from "../../../data/blog";

/** EN overlay for lid — same structure as RU JSON. */
export const lidEn: BlogPost = {
  slug: "lid",
  title: "What a lead is: contact, quality, and the funnel",
  date: "2021-08-30",
  category: "Internet marketing",
  cover: "/images/blog/lid/cover-en.webp",
  excerpt:
    "A lead in marketing is a potential customer with a contact and interest: how it differs from audience and traffic, cold/warm/hot, capture channels, CPL, and why buying someone else’s lists is a mistake.",
  lead: [
    "A lead is a person or company that showed interest in the offer and left a way to connect: a form, a call, a chat, a signup with consent. Not a payment yet — but a reason for the next sales step.",
    "Below — definition, “temperature,” channels, and metrics. We don’t cover buying others’ contacts without consent: that’s a legal, reputation, and deal-quality risk.",
  ],
  faq: [
    {
      q: "Are lead and target audience the same?",
      a: "No. Audience is who could fit. A lead is who already responded and gave a contact (or another target action by your rules).",
    },
    {
      q: "Lead vs traffic?",
      a: "Traffic is visits. A lead is a request/contact from those visits (or offline). You can have many clicks and zero leads.",
    },
    {
      q: "Is a phone number required?",
      a: "No. You set the criterion: phone, email, messenger account, demo booking. What matters is being able to continue the dialogue legally.",
    },
    {
      q: "What are MQL and SQL?",
      a: "Common labels: marketing qualified — interest confirmed by marketing; sales qualified — sales accepted it. Thresholds differ by company.",
    },
    {
      q: "What is CPL?",
      a: "Cost per lead: cost to acquire one lead. Watch it with quality (share of qualified, conversion to deal), or cheap junk beats an expensive order.",
    },
    {
      q: "Can I buy a lead list?",
      a: "Buying others’ contacts without consent is a legal and reputation risk, plus low conversion. Build your own list via opt-in forms and agreed channels.",
    },
    {
      q: "Is a cold lead useless?",
      a: "Not always: it needs more touches and content. Treating it as equal to a “hot” request with a budget is a planning error.",
    },
    {
      q: "Where should leads be logged?",
      a: "In a CRM or at least a sheet with an owner and status. A form with no handling = lost requests.",
    },
  ],
  sections: [
    {
      title: "Definition: what a lead is not",
      level: 2,
      paras: [
        "In marketing a lead is a potential customer with recorded interest and a contact. A passerby who took a flyer and left silently isn’t a lead yet: no data to continue the talk.",
        "A lead ≠ a paying customer. The deal can fall through; marketing and sales must qualify and move them through funnel stages.",
        "A lead ≠ a prize-hunt subscriber unless you agreed that counts as the target action. Otherwise reports show “leads” and the CRM has empty numbers.",
      ],
      notes: [
        {
          title: "Your company definition",
          paras: [
            "Write it down: which action counts as a lead (form, 30+ sec call, chat asking about price). Otherwise marketing and sales argue about the numbers.",
          ],
        },
      ],
    },
    {
      title: "Temperature: cold, warm, hot",
      level: 2,
      paras: [
        "Cold: contact exists, intent is weak or unclear — needs warming, education, need clarification.",
        "Warm: comparing options, asking concrete questions, hasn’t chosen yet. Cases, estimates, demos help.",
        "Hot: ready to move toward a purchase — terms, timeline, payment. Manager response speed is critical here.",
      ],
      lists: [
        {
          intro: "Don’t mix in one KPI:",
          items: [
            "a checklist signup;",
            "a “call me about the project” request;",
            "a repeat order from a regular client.",
          ],
        },
      ],
      links: [
        {
          label: "Traffic exists, no leads",
          href: "/blog/trafik-bez-lidov/",
        },
      ],
    },
    {
      title: "Capture channels (legal)",
      level: 2,
      paras: [
        "Site and landing: capture forms, callback, chat, quiz. Personal-data consent is part of the process, not decoration.",
        "Ads and content: search ads, social ads, SEO, email to people who opted in. Word of mouth and partnerships bring warmer inquiries when the product already resonates.",
        "Offline: exhibition with a form, QR to a form, a call after a visit — same logic of contact + consent.",
      ],
      lists: [
        {
          intro: "What not to use as a strategy:",
          items: [
            "scraping others’ emails/phones;",
            "buying “lead lists” with no consent origin;",
            "faking interest with boosted fake requests.",
          ],
        },
      ],
      links: [
        {
          label: "Capture forms",
          href: "/blog/formy-zahvata/",
        },
        {
          label: "Callback",
          href: "/blog/obratnyy-zvonok/",
        },
      ],
    },
    {
      title: "Qualification and path to a deal",
      level: 2,
      paras: [
        "After landing in the CRM a lead is checked: budget, timeline, decision-maker, product fit. Some drop as unqualified — that’s normal, not a “marketing fail.”",
        "Marketing may hand off MQLs; sales accept SQLs. Without a shared dictionary reports lie.",
        "First-response speed on a hot lead often beats a perfect script: warm interest cools.",
      ],
      notes: [
        {
          title: "Quality over volume",
          paras: [
            "100 leads at CPL 50 with zero deals is worse than 15 leads at CPL 800 with five payments. Count the funnel to revenue.",
          ],
        },
      ],
    },
    {
      title: "Metrics: CPL, conversion, ROMI",
      level: 2,
      paras: [
        "CPL = channel spend / leads by your definition. Compare channels only with the same lead definition.",
        "Lead → deal conversion and average check show quality. Without a CRM it’s guesswork.",
        "Marketing ROI/ROMI looks at money, not “pretty” requests. Process KPIs (leads, response speed) and cash payback are different levels.",
      ],
      links: [
        {
          label: "Marketing ROI",
          href: "/blog/roi-marketinga/",
        },
        {
          label: "End-to-end analytics",
          href: "/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "How to find leads in practice",
      level: 2,
      paras: [
        "Offer and landing first: if visits exist but no requests — fix meaning and CTA, not only budget.",
        "Pick 1–2 channels for unit economics, set CRM handoff, assign an owner for response speed.",
        "Improve qualification with form fields and a script — not spam volume. Scale what produces qualified deals.",
      ],
      lists: [
        {
          intro: "Mini launch order:",
          items: [
            "lead definition on one page;",
            "form/call with consent;",
            "CRM + owner;",
            "CPL and qualified share in the report;",
            "no buying others’ lists.",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A lead is interest + contact (or another target action), not an abstract “audience” and not a payment.",
        "Temperature, channel, and quality beat racing for cheap CPL.",
        "You build your own list through consent; other people’s contacts “in bulk” is a bad strategy.",
      ],
    },
  ],
  closing: [
    "Write your company’s lead definition, check that requests land in the CRM with an owner, and compare two channels not by “count” but by deals — then the term stops being a slide buzzword.",
  ],
  related: [
    "trafik-bez-lidov",
    "formy-zahvata",
    "obratnyy-zvonok",
    "roi-marketinga",
    "skvoznaya-analitika",
    "kviz-sayt",
  ],
};
