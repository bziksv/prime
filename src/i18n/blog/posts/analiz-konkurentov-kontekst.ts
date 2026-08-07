import type { BlogPost } from "../../../data/blog";

/** EN overlay for analiz-konkurentov-kontekst — same structure as RU JSON. */
export const analizKonkurentovKontekstEn: BlogPost = {
  slug: "analiz-konkurentov-kontekst",
  title: "Competitor analysis before launching paid search ads",
  date: "2019-10-30",
  category: "Paid search",
  cover: "/images/blog/analiz-konkurentov-kontekst/cover-en.webp",
  excerpt:
    "How to break down competitors before Yandex Direct and Google Ads: who counts as a competitor, ad keywords, copy, landing pages, USPs, networks, and traffic estimates — without copying someone else’s account.",
  lead: [
    "Before launching paid search it helps to see who actually runs ads in your SERP, which keywords and offers they use, and where the ads land. This isn’t a general SEO traffic audit — the focus is the paid layer.",
    "Tools like Semrush / SpyFu / SimilarWeb give estimates — not an export of someone else’s account. You can’t copy a competitor’s budget one-to-one. Build a table: competitor list, keyword set and ads, landing pages, USPs, networks, then conclusions for your media plan.",
  ],
  faq: [
    {
      q: "How is this different from SEO competitor analysis?",
      a: "SEO looks at visibility and organic. Here it’s who sits in the paid block, which keywords/ads/landing pages, and which offer.",
    },
    {
      q: "Why isn’t a competitor visible in Direct or Google Ads?",
      a: "They may not run Search, use different keywords or geo, be seasonal, or only run networks/social. Check several queries and devices.",
    },
    {
      q: "Can you learn a competitor’s exact budget?",
      a: "No. There are auction estimates and indirect signals. Build your media plan from your CPA targets — not someone else’s “minimum.”",
    },
    {
      q: "Which tools should you use?",
      a: "Any spy/keyword tool with paid SERP data plus manual SERP review. Brand names change — method matters more than the logo.",
    },
    {
      q: "How many competitors should you take?",
      a: "Three to seven strong ones on your priority queries is enough to start. Dozens of names blur focus.",
    },
    {
      q: "Should you check Display and ad networks?",
      a: "Yes if you plan networks: creatives and density differ from Search.",
    },
    {
      q: "Is analysis once before launch enough?",
      a: "No. Before a season, promos, and when KPIs drop, refresh the snapshot.",
    },
  ],
  sections: [
    {
      title: "Why analyze before launch",
      level: 2,
      paras: [
        "A competitor cut helps gauge auction density, bid/offer order, channels, and where traffic is sent. That makes it easier to decide: paid search as the main channel or support for SEO/social.",
        "The goal is hypotheses for your campaign: which clusters to cover first, which USP to highlight, which negatives to set early. Not “steal” their whole keyword set.",
        "Plan ahead: domain list → keywords → ads → landing pages → USPs → networks/other traffic → conclusions in a table.",
      ],
      links: [
        {
          label: "Competitor analysis (SEO/traffic)",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "Media plan",
          href: "/en/blog/mediaplan/",
        },
      ],
    },
    {
      title: "Who counts as a competitor",
      level: 2,
      paras: [
        "Offline “neighbors” in the market aren’t always in the same paid auction. And vice versa: for “flower delivery [city]” you may see aggregators and marketplaces you didn’t count as competitors.",
        "Manual method: a player table + SERP review on priority queries on desktop and mobile, in incognito and from different accounts if needed.",
        "Domain tools show paid-keyword overlaps and sites that run nearby. Take those with a similar commercial core — not everyone in the report.",
      ],
    },
    {
      title: "Semantics and ad quality",
      level: 2,
      paras: [
        "Export/collect keywords where the competitor appears in Search: which products/services are prioritized, how wide the set is vs ad count.",
        "Thousands of keywords and a dozen ads often mean broad groups and weak relevance; a dense structure teaches grouping — don’t copy rows.",
        "In ads watch headlines, descriptions, extensions (sitelinks, callouts), keyword–URL fit. Compare desktop and mobile SERPs — accents often differ.",
      ],
      lists: [
        {
          intro: "What to lock in the table:",
          items: [
            "top keyword clusters;",
            "sample headline and USP;",
            "landing URL;",
            "whether extensions exist;",
            "geo/brand in the copy.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Landing pages and USPs",
      level: 2,
      paras: [
        "Walk the click path: speed, first screen, offer, form/cart, shipping and contacts, mobile. A competitor may win on landing conversion — not bid.",
        "Collect USPs: price, timeline, warranty, delivery, call-center hours, promos. State your difference honestly — don’t clone their promise.",
        "If the market is flat on price, service, reply speed, and offer clarity in the ad + on the page win.",
      ],
      links: [
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Networks, social ads, and traffic",
      level: 2,
      paras: [
        "YAN and Display: via keyword and remarketing touches you can see banners and density. Creatives there are freer than Search — useful for hypotheses, not copy-paste.",
        "Social (VK and peers) is a separate layer; note presence without digging into someone else’s Ads Manager.",
        "SimilarWeb and peers give channel and device order. Figures are estimates: watch paid search / display / social share — not “exact visitors to the person.”",
      ],
      notes: [
        {
          kind: "warning",
          text: "Analysis doesn’t promise “perfect conversions forever.” These are input hypotheses; next — your test and CPA.",
        },
      ],
    },
    {
      title: "Short briefing",
      level: 2,
      paras: [
        "Summarize: where the auction is overheated, which USP is weakly covered, which clusters are freer, whether your landing is ready. From that — starting keyword set, negatives, and test budget.",
        "Repeat the snapshot before the season and major promos: competitors move bids and offers too.",
      ],
      lists: [
        {
          intro: "Minimum output:",
          items: [
            "list of 3–7 paid competitors;",
            "keyword clusters and ad examples;",
            "screens/notes on landing pages;",
            "USP table;",
            "Search vs networks decision for the start.",
          ],
        },
      ],
    },
  ],
  closing: [
    "Build a table for five priority queries in one evening: who is in the paid block, which offer, where the click goes — enough to not start paid search blind.",
  ],
  related: [
    "analiz-konkurentov",
    "semanticheskoe-yadro",
    "mediaplan",
    "sayt-pered-reklamoy",
    "klyuchi-yandeks-direkt",
    "tipy-kampaniy-google-ads",
  ],
};
