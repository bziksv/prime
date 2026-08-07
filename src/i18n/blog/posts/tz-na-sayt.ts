import type { BlogPost } from "../../../data/blog";

/** EN overlay for tz-na-sayt — same structure as RU JSON. */
export const tzNaSaytEn: BlogPost = {
  slug: "tz-na-sayt",
  title: "Website specification: brief, structure, and common mistakes",
  date: "2019-12-11",
  category: "Digital marketing",
  cover: "/images/blog/tz-na-sayt/cover-en.webp",
  excerpt:
    "How to write a website technical specification: why the document matters, how a short brief differs from a full spec, what to cover by block, and which client mistakes cost the most.",
  lead: [
    "A website technical specification locks what should be delivered: goals, audience, pages, design direction, responsive rules, integrations, and timelines. Without it the contractor leans on their own taste — and the result often misses yours.",
    "Start with a short questionnaire, turn the answers into testable requirements, and review a prototype before polished design. This isn’t a “sign and forget” template — it’s a working contract of meaning between both sides.",
  ],
  faq: [
    {
      q: "Are a brief and a full spec the same thing?",
      a: "No. A brief is a short questionnaire and discussion. The spec is the final action guide once details are agreed.",
    },
    {
      q: "Can freelancers work without a spec?",
      a: "They can, but dispute risk is higher. At minimum lock goals, structure, references, responsive rules, access, and deadlines.",
    },
    {
      q: "Do you need a prototype?",
      a: "Preferably yes: it shows block placement before polished design and cuts “the button isn’t there” revisions.",
    },
    {
      q: "How should you describe design?",
      a: "Not “make it pretty” — share reference links, palette, fonts, and tone. Vague words mean different things to everyone.",
    },
    {
      q: "Who writes the spec — the client or the studio?",
      a: "Often together: the client brings business and goals; the contractor structures and clarifies tech. Both sides approve the final.",
    },
    {
      q: "Is a copy brief different from a site spec?",
      a: "Yes. The site spec covers development. A separate copy brief describes volume, keywords, and page tone.",
    },
  ],
  sections: [
    {
      title: "Why a spec at all",
      level: 2,
      paras: [
        "The document cuts “I meant something else.” The contractor follows agreed requirements; the client checks stages instead of arguing about button color at the end.",
        "Without a spec you hand the business to someone with another taste and another picture of success. Small tweaks are normal; a concept change at the finish almost always means a leaky brief.",
      ],
      lists: [
        {
          intro: "Each side’s jobs:",
          items: [
            "client — goals, limits, materials, acceptance;",
            "contractor — delivery to the spec, questions on ambiguity;",
            "both — timelines and “done” criteria.",
          ],
        },
      ],
    },
    {
      title: "Brief first, then the document",
      level: 2,
      paras: [
        "A long requirements wall before a conversation often scares people and still stays leaky. A brief is a short questionnaire: business, audience, site goal, examples, style and feature wishes.",
        "In dialogue the contractor offers workable options (for example, menu type); the client accepts or rejects. From the answers you build a structured spec — no longer a negotiation room, but instructions.",
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "What to include in the spec",
      level: 2,
      paras: [
        "Describe the company and product so someone outside your industry gets the point. Lock audience and site goal: lead, purchase, subscribe, signup — that drives UI emphasis.",
        "If a site already exists — the URL, strengths and weaknesses, what to keep. Then: page and menu structure, integrations (CRM, payment, analytics), style and references, materials (copy, photos), responsive and devices, questions and limits.",
      ],
      lists: [
        {
          intro: "Document blocks:",
          items: [
            "company and offer;",
            "audience and site goals;",
            "current site (if any);",
            "structure and key screens;",
            "design references and tone;",
            "content and who prepares it;",
            "responsive and integrations;",
            "timelines, stages, access.",
          ],
        },
      ],
      tables: [
        {
          caption: "Sample brief fields",
          headers: ["Item", "What to write"],
          rows: [
            ["Company", "What you do, product, differences"],
            ["Audience", "Who buys, job, barriers"],
            ["Site goal", "Lead / purchase / other CTA"],
            ["Structure", "Pages, menu, required blocks"],
            ["Look & feel", "References, colors, fonts, tone"],
            ["Tech", "Responsive, CRM, analytics, payments"],
          ],
        },
      ],
    },
    {
      title: "Prototype before “pretty”",
      level: 2,
      paras: [
        "A prototype shows the frame: where the headline, offer, form, and reviews sit. It isn’t polished design. Without references and clear placement rules the contractor guesses — and “light tones” mean different things to everyone.",
        "It helps to review competitors and strong third-party sites as structure orientation, not copy-paste. A prototype is especially useful with many blocks and contested accents.",
      ],
      links: [
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Common client mistakes",
      level: 2,
      paras: [
        "No stage deadlines — the project drifts. No references — endless taste revisions. No saved hosting and domain access — risk of losing control after a contractor change.",
        "Another mistake is staying silent about doubts. If a spec line is unclear, clarify before layout. The client may be weak in design or code — that’s fine; what matters is locking the business outcome and acceptance criteria.",
      ],
      lists: [
        {
          intro: "Checklist before work starts:",
          items: [
            "goals and CTA agreed;",
            "references exist, not only “pretty”;",
            "stage deadlines written;",
            "who provides copy and photos is clear;",
            "domain and hosting access stays with the client.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "A spec doesn’t replace a contract and acceptance act. Legal terms and rights to layouts and code should be locked separately.",
          kind: "tip",
        },
      ],
    },
  ],
  closing: [
    "A good website spec starts with a brief and ends with testable requirements: goals, structure, references, responsive rules, timelines. The clearer the document, the fewer reworks — and the closer the result to what you pictured.",
  ],
  related: [
    "tselevaya-auditoriya",
    "tekst-lendinga",
    "start-internet-magazina",
    "analiz-konkurentov",
    "lending",
    "verstka-saytov",
  ],
};
