import type { BlogPost } from "../../../data/blog";

/** EN overlay for autrich — same structure as RU JSON. */
export const autrichEn: BlogPost = {
  slug: "autrich",
  title: "Outreach: how to find sites for articles and mentions",
  date: "2020-03-06",
  category: "SEO",
  cover: "/images/blog/autrich/cover-en.webp",
  excerpt:
    "What outreach means in SEO: manually finding topical sites, donor criteria, pitching editors, and checking the publish — without link-exchange spam or Wikipedia rule-bypass schemes.",
  lead: [
    "Outreach is hands-on work with publishers: find media/blogs in your topic, offer useful material or expertise, and get a publish with a mention or link. It’s an alternative and complement to link marketplaces — not a “magic profile of thousands of links”.",
    "Below — when outreach fits, how to pick donors, where to get lists, how to write editors, and what to check after go-live. Related: guest posts, link-buying risks, backlink-profile analysis. We don’t promise TOP from a batch of emails: core visibility builds over months of systematic work.",
  ],
  faq: [
    {
      q: "How does outreach differ from a link marketplace?",
      a: "A marketplace is a catalog of paid slots. Outreach is direct contact with the editor/owner. Quality and price are often better; speed and volume are lower.",
    },
    {
      q: "Do you need “bad links for naturalness”?",
      a: "No. Don’t dilute the profile with junk on purpose. Fewer strong topical mentions beat a mix of marketplace spam.",
    },
    {
      q: "Can you parse competitors’ SERPs?",
      a: "Reviewing public mentions and backlink-tool reports is fine. Don’t run aggressive scraping of others’ sites or bypass blocks.",
    },
    {
      q: "Wikipedia as a link source?",
      a: "Not an outreach goal. Edits for a link break the rules and get cleaned. Use Wikipedia as a reader/fact source — not a donor.",
    },
    {
      q: "How many emails per week?",
      a: "As many as you can personalize well. Mass template spam kills replies and reputation.",
    },
    {
      q: "Is a dofollow link required?",
      a: "Audience and brand traffic matter more. A link is a bonus under the site’s rules; sometimes a mention and UTM are enough.",
    },
    {
      q: "Should ads be labeled?",
      a: "Yes if it’s paid placement under law and the site’s rules. Don’t disguise payment as a “neutral review”.",
    },
    {
      q: "Is outreach TOP in a month?",
      a: "No. It’s a mentions channel. Prep and publishes — weeks; TOP for the core is planned 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "When outreach makes sense",
      level: 2,
      paras: [
        "It fits when the niche is competitive, marketplaces give lookalike donors, or you want a live audience — not only a “row in Ahrefs”. You need time, strong expert content, and tolerance for rejections.",
        "Don’t start outreach while the site itself is raw: thin pages and broken tech won’t hold visits. Foundation first, then external mentions.",
      ],
      lists: [
        {
          intro: "Outreach helps if:",
          items: [
            "you have expertise and cases;",
            "the topic interests editors;",
            "you’re ready to personalize emails;",
            "you have budget for quality copy (yours or guest).",
          ],
        },
      ],
      links: [
        {
          label: "Free article placement",
          href: "/en/blog/besplatnoe-razmeshchenie-statey/",
        },
        {
          label: "Buying links: risks",
          href: "/en/blog/pokupka-ssylok/",
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Pushing email volume with a “please publish our article with a link” template and no value for the site’s readers.",
        },
      ],
    },
    {
      title: "Site criteria",
      level: 2,
      paras: [
        "Main filter — topical fit and a live audience, not an abstract “trust 30”. Check whether people read posts, whether comments/shares look real, whether the site looks like a link farm.",
        "Tools like CheckTrust / Serpstat / Ahrefs help cut obvious spam and review backlinks, but “IQS from N” thresholds are a guide, not law. Sharp metric drops and a showcase of marketplace articles are red flags.",
      ],
      lists: [
        {
          intro: "What to check on a donor:",
          items: [
            "topic close to yours;",
            "real visits/engagement;",
            "quality of recent publishes;",
            "no feed of “articles with a link”;",
            "clear editor contacts;",
            "terms and ad labeling.",
          ],
        },
      ],
      tables: [
        {
          caption: "Quality signals",
          headers: ["Good", "Bad"],
          rows: [
            ["Topical longreads", "Copy-paste and thin walls of text"],
            ["Editor replies on substance", "Only a “footer link” price list"],
            ["Audience in your niche", "Fake traffic/teasers"],
            ["Transparent rules", "Hidden sales without labeling"],
          ],
        },
      ],
      links: [
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Where to get site lists",
      level: 2,
      paras: [
        "Four practical sources: industry tops and media, catalogs/rankings with caution, backlinks of strong competitors (public reports), manual search on informational niche queries.",
        "Old “top” catalogs are idea starters, not truth. Live donors more often come from “best blogs + topic”, expert roundups, and sites that already cite competitors well.",
      ],
      lists: [
        {
          intro: "Collection practice:",
          items: [
            "table: URL, topic, contact, status;",
            "dedupe domains;",
            "spam filter;",
            "priority: high fit + live audience;",
            "don’t copy sites where “every competitor already sits”.",
          ],
        },
      ],
      links: [
        {
          label: "Site directories",
          href: "/en/blog/katalogi-saytov/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Pitch, agreements, content",
      level: 2,
      paras: [
        "Write short: who you are, why it helps the site, 2–3 topic options, writing samples. Don’t paste a ready SEO dump with anchors. Offer exclusivity or an adaptation to the editorial style.",
        "If placement is paid — lock volume, links, live period, ad labeling, edits. After publish check URL, index, that the mention/link is there, and the page isn’t “noindex for show”.",
      ],
      lists: [
        {
          intro: "Rhythm without spam:",
          items: [
            "personalize per site;",
            "one follow-up, not daily pings;",
            "copy quality > frequency;",
            "log replies in CRM/a sheet.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "The best hook is data, a case, or a guide the site doesn’t have yet — not “an article with a link to us”.",
        },
      ],
    },
    {
      title: "Tools are helpers, not autopilot",
      level: 2,
      paras: [
        "SERP crawlers, Serpstat/Ahrefs-class tools, sheets, and email speed up routine. Automation mustn’t turn outreach into spam blasts: personalization stays manual.",
        "Don’t use “magic” schemes around hidden links, fake engagement, or bypassing site rules. That burns donors and raises filter risk.",
      ],
      lists: [
        {
          intro: "Minimal stack:",
          items: [
            "donor table;",
            "backlink/visibility tool;",
            "index check after publish;",
            "email templates with personalization fields.",
          ],
        },
      ],
    },
    {
      title: "How to fold it into the SEO plan",
      level: 2,
      paras: [
        "Outreach is one channel next to on-site content, PR, and careful paid placements. Set KPIs: replies, publishes, visits, leads — not only “link count”.",
        "Material prep and the first touch wave — weeks. Effect on core visibility — month to month; planned TOP horizon is often 2–6 months after the full workstream starts.",
      ],
      lists: [
        {
          intro: "Cycle checklist:",
          items: [
            "donor shortlist;",
            "topics for the site’s audience;",
            "send and track statuses;",
            "publish and verify;",
            "report: traffic/leads/mentions.",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Outreach ≠ instant TOP. Quality mentions first, then effect accumulates.",
        },
      ],
    },
  ],
  related: [
    "besplatnoe-razmeshchenie-statey",
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "katalogi-saytov",
    "analiz-konkurentov",
    "samostoyatelnoe-seo",
  ],
};
