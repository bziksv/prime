import type { BlogPost } from "../../../data/blog";

/** EN overlay for filtry-poiskovikov — same structure as RU JSON. */
export const filtryPoiskovikovEn: BlogPost = {
  slug: "filtry-poiskovikov",
  title: "Search engine filters: how to stay clean and what to do",
  date: "2021-06-03",
  category: "SEO",
  cover: "/images/blog/filtry-poiskovikov/cover-en.webp",
  excerpt:
    "Why sites lose rankings to filters and algorithm updates, how to diagnose the problem, and how to grow organic with white-hat methods — without bypass tricks or gray schemes.",
  lead: [
    "Filters and updates cut sites for stuffing, thin content, manipulative links, and poor UX. “Bypassing” the system with gray tricks leads to new penalties.",
    "Below: how to assess the state, check tech and demand, and strengthen content and links within the rules. This is not a guide to dodging filters.",
  ],
  faq: [
    {
      q: "Is this a guide to tricking Yandex/Google?",
      a: "No. Only diagnosis and white-hat optimization. We don’t cover or recommend gray filter bypasses.",
    },
    {
      q: "How do I tell a filter from seasonality?",
      a: "Compare Wordstat year over year, Webmaster (security, quality), and core dynamics. Seasonality is gradual; a filter often hits commercial queries sharply.",
    },
    {
      q: "Is site speed related to filters?",
      a: "There may be no direct “speed filter,” but a slow site hurts behavior and growth. Speed is required hygiene.",
    },
    {
      q: "Will bulk link buying “restore” rankings?",
      a: "Often it makes things worse. Fix the cause: content, spam links, over-optimization.",
    },
    {
      q: "How long does recovery take?",
      a: "Depends on the cause and recrawl. Don’t promise a page-one date; log fixes and monitor the keyword set monthly.",
    },
    {
      q: "Should I rebuild the whole site at once?",
      a: "No. Confirm hypotheses with data first and remove critical causes. Mass unrelated changes muddy diagnosis.",
    },
    {
      q: "Can I delete all external links?",
      a: "Don’t act blind. Assess quality, origin, and link dynamics; when needed, handle them per search-engine rules.",
    },
  ],
  sections: [
    {
      title: "Diagnosis first, not “schemes”",
      level: 2,
      paras: [
        "Take a baseline before any changes: visibility and positions by query groups, organic traffic, conversions, indexing, webmaster-panel messages, and key-page availability. First separate a real drop from broken analytics, seasonality, or demand shift.",
        "Match the drop date to project history: redesign, URL migration, template release, mass page generation, robots.txt change, link spike, or CMS switch. The cause is often in that list — not an abstract “filter.”",
        "Compare not one query, but clusters and page types. If only product cards fell, check the catalog template and stock — don’t rewrite the blog first.",
      ],
      lists: [
        {
          intro: "Basic inspection:",
          items: [
            "availability and mirrors",
            "PageSpeed / real measurements",
            "security and quality in panels",
            "demand seasonality",
            "link profile for spam",
          ],
        },
      ],
      links: [
        {
          label: "Traffic drops",
          href: "/en/blog/snizhenie-trafika/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Check the technical foundation",
      level: 2,
      paras: [
        "The crawler needs a correct server response, an accessible page, and a clear canonical URL. Bad redirects, accidental noindex, blocked CSS/JS, parameter duplicates, and slow load can crush visibility with no sanction at all.",
        "Start with critical templates: home, categories, product cards, services, articles, and pagination. Check them in the browser, URL inspection tools, and server logs if available. Log fixes so you can see the link between a change and the trend.",
        "Mobile shouldn’t be a stripped desktop with different navigation and hidden content. User path, speed, and form accessibility matter for visitors and for steady organic growth.",
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Strengthen content and intent",
      level: 2,
      paras: [
        "A page should solve a real user job: help choose, compare, learn terms, buy, or get an answer. Cut template paragraphs, repeating key phrases, and empty subheads that exist only for length.",
        "Check cannibalization: several URLs shouldn’t fight for the same commercial query with nearly identical content. Sometimes growth comes not from a new page, but from merging duplicates, a clean 301, and strengthening one canonical piece.",
        "Expertise shows in authorship, sources, clear terms, current prices, and practical detail. Copying a competitor’s structure without your own experience doesn’t make a page useful.",
      ],
      lists: [
        {
          intro: "Work plan:",
          items: [
            "clusters and commercial/info intents",
            "unique strong landings",
            "cleanup of toxic factors",
            "technical debt",
            "core monitoring after fixes",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "An old title about “bypassing filters” is misleading. The working strategy is following the rules — not dodging them.",
        },
      ],
    },
    {
      title: "Handle links and reputation carefully",
      level: 2,
      paras: [
        "External links can help when they come from useful content, partnerships, brand mentions, or industry publications. A sudden buy of same-type links with commercial anchors is a risky signal — not a quick ranking restore.",
        "Build a list of suspicious domains; assess topic, dynamics, and link character. Don’t waste endless time on every random link: prioritize your own actions, site quality, and clearly artificial campaigns you controlled.",
        "In parallel grow assets people naturally link to: studies, calculators, guides, cases, and useful roundups. Slower than a “link pack,” more durable.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "An old title about “bypassing filters” misleads. Sustainable recovery comes from removing causes and following rules — not masking signals.",
        },
      ],
    },
    {
      title: "Measure recovery the right way",
      level: 2,
      paras: [
        "Track organic traffic, organic conversion, visibility of priority clusters, pages in the index, crawl errors, and speed. A dashboard of a few stable metrics beats a hundred unread reports.",
        "After fixes, give search engines time to recrawl and reassess. Project prep — audit, tech fixes, semantics, and content — usually takes weeks or about a month; a noticeable share of the keyword set reaching page one is planned for 2–6 months and depends on competition.",
        "Don’t declare recovery from one lucky day. Watch month-to-month dynamics, year-over-year comparison, and lead quality. Domain age alone doesn’t heal problems — consistent improvements do.",
      ],
    },
  ],
};
