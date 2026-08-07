import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylochnyy-profil — same structure as RU JSON. */
export const ssylochnyyProfilEn: BlogPost = {
  slug: "ssylochnyy-profil",
  title: "Backlink profile analysis: what to check in half an hour",
  date: "2020-10-23",
  category: "SEO",
  cover: "/images/blog/ssylochnyy-profil/cover-en.webp",
  excerpt:
    "How to quickly assess backlinks for a page and domain: referring domains, anchors, toxicity, trends, and competitor comparison — without “TOP in a week” magic.",
  lead: [
    "A backlink profile isn’t “how many backlinks are in the report.” It’s a picture: who links, from which domains and IPs, with which anchors, how natural it looks, and what to do with obvious junk.",
    "In 30–60 minutes you can take a snapshot, compare with competitors, and separate noise from signal. Tool numbers diverge — trends and quality matter more than chasing one metric.",
  ],
  faq: [
    {
      q: "Are page and domain profiles the same?",
      a: "No. A URL has its own inbound set; a domain is the site sum. For a landing, check both the page and the competitor’s domain.",
    },
    {
      q: "Which tool is mandatory?",
      a: "No single one is “truth.” Ahrefs, Majestic, Semrush, Serpstat, webmaster panels — different indexes. To start, one paid tool plus Search Console is enough; with budget, cross-check two sources.",
    },
    {
      q: "Is link count the main metric?",
      a: "Referring domains or roots and donor quality usually matter more than thousands of links from one satellite.",
    },
    {
      q: "Should I disavow everything “toxic”?",
      a: "Don’t mass-disavow “just in case.” First remove what you control (your networks, bought junk). Use Disavow surgically and deliberately.",
    },
    {
      q: "What does the anchor list show?",
      a: "Skew toward commercial keywords, brand, URL, or “click here” — a signal of naturalness or over-optimization risk.",
    },
    {
      q: "Why compare with a competitor?",
      a: "To see order of magnitude and donor types in the niche. Don’t copy someone else’s spam one-to-one.",
    },
    {
      q: "Is half an hour realistic?",
      a: "For a screen — yes: summary, top donors, anchors, spam flags, dynamics. A deep audit of thousands of links takes hours and exports.",
    },
    {
      q: "Do links guarantee growth?",
      a: "No. Without content, tech, and relevance, links barely help. The profile is one signal next to page quality. Planned TOP growth still takes months of work — not a backlink checkbox. Prep and cleanup are not the same as ranking in the TOP.",
    },
  ],
  sections: [
    {
      title: "What’s in a “profile” and why audit",
      level: 2,
      paras: [
        "A profile usually covers: volume and growth of links/domains, donor types (media, directories, forums, guest posts, UGC), anchors, dofollow/nofollow share, geography, and suspicious clusters (same IP/C-class, template sites).",
        "Audit before promotion, after a spike or drop, when buying a domain, and when you suspect negatives or an old link tail.",
      ],
      lists: [
        {
          intro: "In half an hour you want to answer:",
          items: [
            "is there obvious spam and networks;",
            "how loudly do anchors scream commerce;",
            "are we growing vs competitors;",
            "what 5–10 actions go to the backlog.",
          ],
        },
      ],
    },
    {
      title: "Data snapshot: where to start",
      level: 2,
      paras: [
        "Enter the domain (and a specific URL if needed) in your chosen tool. For the whole site, use a mode that covers subpaths, not only the homepage. Lock the report date — compare dynamics in a month.",
        "In parallel, open Search Console / webmaster tools: external links there are incomplete, but useful as “what the engine definitely saw.”",
      ],
      lists: [
        {
          intro: "Minimum numbers on a sheet:",
          items: [
            "referring domains / roots;",
            "new and lost over 30–90 days;",
            "dofollow share;",
            "top-20 donors by the tool’s “weight”;",
            "top anchors.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Comparing one tool’s “links” to another’s “domains” and celebrating a win. Compare the same entities.",
        },
      ],
    },
    {
      title: "Donor quality and spam signals",
      level: 2,
      paras: [
        "A good niche donor: live traffic or brand, topical proximity, normal indexing, a contextual link. A bad one: template “300-word articles,” farms, hacked sites, endless link directories, a sharp spike from identical templates.",
        "Review the top and the tail: sometimes “pretty” numbers sit on dozens of junk domains. Separately check IP/hosting clusters — mass links from one network look unnatural.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "growth explosion without PR or content;",
            "anchors = pure commercial keywords in batches;",
            "donors with noindex / not in search;",
            "one CMS theme on hundreds of “sites”;",
            "links only from directory footers/sidebars.",
          ],
        },
      ],
      links: [
        {
          label: "Forum links",
          href: "/en/blog/ssylki-na-forumah/",
        },
      ],
    },
    {
      title: "Anchors, traffic, and the target page",
      level: 2,
      paras: [
        "Anchor list: a healthy mix of brand, URL, neutral (“here,” “source”), and a moderate keyword share. If 80% is “buy X cheap” from different domains, risk is higher than a calm branded profile.",
        "For an important landing, see where links actually go: homepage, article, product. Sometimes the domain profile is strong while the target URL has almost no mentions — then work content and internal links, not only acquisition.",
      ],
      lists: [
        {
          intro: "Quick sorts:",
          items: [
            "new links this month — what appeared;",
            "donors with traffic vs “dead”;",
            "shared donors with 2–3 competitors (outreach ideas);",
            "broken/redirecting donors — hygiene.",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
      ],
    },
    {
      title: "Competitor comparison",
      level: 2,
      paras: [
        "Take 2–3 URLs or domains from the TOP for target queries. Compare referring-domain order of magnitude, branded-anchor share, media and industry sites. Goal — niche “norm,” not copying spam.",
        "If a competitor is stronger via old editorial links, your plan is content and mentions — not a link exchange. If everyone has tons of directories, judge whether that still works in your niche or it’s legacy.",
      ],
      lists: [
        {
          intro: "What to write in the takeaway:",
          items: [
            "domain gap (order of magnitude);",
            "site types you lack;",
            "suspicious practices you won’t repeat;",
            "1–2 hypotheses for the month (content, PR, cleanup).",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "What to do after the screen",
      level: 2,
      paras: [
        "Split actions: (1) remove or fix controlled junk; (2) strengthen the page and internal links; (3) a plan for natural mentions; (4) monthly monitoring. Don’t mix “buy 500 links” with an audit — different jobs.",
        "Treat this as the canonical quick profile screen among related link-mass posts: same depth, angle — fast screening. Remember: preparing the profile is not the same as landing in the TOP; ranking gains are planned over 2–6 months.",
      ],
      lists: [
        {
          intro: "Week checklist:",
          items: [
            "top-donor table + status;",
            "list to remove/disavow (if yours);",
            "future anchor policy;",
            "alert on abnormal growth;",
            "tie-in to tech audit and content plan.",
          ],
        },
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "A link report without conclusions as tasks is scrap paper. Every flag needs an owner and a deadline.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "analiz-konkurentov",
    "ssylki-na-forumah",
    "bitye-ssylki",
    "tehnicheskiy-seo-audit",
    "semanticheskoe-yadro",
  ],
};
