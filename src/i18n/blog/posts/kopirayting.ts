import type { BlogPost } from "../../../data/blog";

/** EN overlay for kopirayting — same structure as RU JSON. */
export const kopiraytingEn: BlogPost = {
  slug: "kopirayting",
  title: "Copywriting: text types, jobs, and how to choose a writer",
  date: "2021-11-30",
  category: "Content marketing",
  cover: "/images/blog/kopirayting/cover-en.webp",
  excerpt:
    "What copywriting is: informational and selling texts, LSI, landings, SMM, writer requirements, pay, and tips for clients.",
  lead: [
    "Copywriting is writing for a job: explain, warm up, drive a lead, or help search find the page. It’s not “fill characters” — it’s solving a business goal with words.",
    "Below: directions, formats, what to check in a contractor, and how to brief. Market rates move — these are guides, not an agency price list.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is copywriting different from rewriting?",
      a: "Rewriting retells someone else’s text. Copywriting builds material for a job, audience, and often for keywords — with facts and structure.",
    },
    {
      q: "Does every text need SEO?",
      a: "Not every one. Landings and demand articles — yes (keywords, LSI, structure). Social posts care more about tone and CTA.",
    },
    {
      q: "How much does good copy cost?",
      a: "Depends on niche, length, research depth, and format (product card vs expert article). Cheap “per 1000 characters” often means no expertise.",
    },
    {
      q: "What should I put in the writer’s brief?",
      a: "Goal, audience, offer, required facts, keywords/cluster, length, tone, competitor examples, deadline, and acceptance criteria.",
    },
    {
      q: "Can one universal writer cover the whole site?",
      a: "Sometimes. But selling landings, legal copy, and narrow expertise often need different skills.",
    },
  ],
  sections: [
    {
      title: "Two big directions",
      level: 2,
      paras: [
        "Informational texts answer questions and build trust and expertise. Commercial ones lead to an action: lead, purchase, call.",
        "In practice a site needs both: articles and help feed demand; cards and landings convert.",
      ],
    },
    {
      title: "How people enter the craft",
      level: 2,
      paras: [
        "“Writing smoothly” isn’t enough. You need literacy, genre range, fact-gathering, keyword work, and sane edits from feedback.",
      ],
      lists: [
        {
          intro: "Core skills:",
          items: [
            "tell info, sales, and entertainment apart",
            "literacy and proofreading",
            "uniqueness and interest in the topic",
            "finding sources and checking facts",
            "formatting and deadlines",
          ],
        },
      ],
    },
    {
      title: "Types of copywriting",
      level: 2,
      paras: [
        "Format sets the text’s job. One writer is rarely equally strong at everything — check a portfolio for the type you need.",
      ],
      lists: [
        {
          intro: "Common formats:",
          items: [
            "site section copy (About, services)",
            "LSI / SEO articles for a query cluster",
            "selling copy and offers",
            "news, announcements, press releases",
            "ad slogans and promo",
            "SMM posts and Stories scripts",
            "print and offline promo",
            "landings (blocks built for conversion)",
            "e-commerce product and category cards",
            "reviews and cases — only honest, no fabrication",
          ],
        },
      ],
      notes: [
        {
          title: "LSI in brief",
          text: "Search engines look not only at “keyword density,” but meaning, related terms, structure. Write for humans within the topic — not a query list.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Selling Instagram post",
          href: "/en/blog/post-instagram/",
        },
      ],
    },
    {
      title: "Pay and finding a writer",
      level: 2,
      paras: [
        "People pay by volume, by project, by result (rarer), or on an editorial retainer. Cheap copy with no brief almost always costs more in rewrites.",
        "Search on marketplaces, via referrals, in agencies, and with in-house editors. For the client, a niche portfolio beats a star rating.",
      ],
      lists: [
        {
          intro: "What to check in a writer:",
          items: [
            "examples of similar jobs",
            "how they clarify the brief",
            "willingness to revise within the brief",
            "deadlines and communication",
          ],
        },
      ],
    },
    {
      title: "Quality requirements",
      level: 2,
      paras: [
        "Good copy solves the job, reads without fluff, matches facts and brand tone. Uniqueness is baseline — not the only KPI.",
      ],
      lists: [
        {
          intro: "Acceptance criteria:",
          items: [
            "literacy",
            "structure (headings, paragraphs, lists)",
            "facts and offer without filler",
            "keywords used appropriately, no stuffing",
            "deadline and revisions per brief",
          ],
        },
      ],
    },
    {
      title: "Tips for clients",
      level: 2,
      paras: [
        "A vague brief gets a vague result. Clearer goal and audience mean fewer iterations.",
      ],
      lists: [
        {
          intro: "Minimum in the brief:",
          items: [
            "clear parameters and text goal",
            "portfolio before paying a large block",
            "agreed terms and revision count",
            "feedback in process, not “rewrite everything on the last day”",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Asking for an “SEO text of 10,000 characters with 20 keywords” with no cluster and page structure. Meaning and landing logic first — length second.",
          kind: "tip",
        },
      ],
    },
  ],
};
