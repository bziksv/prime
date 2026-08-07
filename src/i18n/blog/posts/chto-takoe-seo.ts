import type { BlogPost } from "../../../data/blog";

/** EN overlay for chto-takoe-seo — same structure as RU JSON. */
export const chtoTakoeSeoEn: BlogPost = {
  slug: "chto-takoe-seo",
  title: "What SEO promotion is: a plain explanation without “TOP magic”",
  date: "2016-05-31",
  category: "SEO",
  cover: "/images/blog/chto-takoe-seo/cover-en.webp",
  excerpt:
    "What SEO is in plain English: why business needs search, how it differs from offline ads, what the work includes, and why site prep isn’t the same as reaching TOP-10.",
  lead: [
    "SEO (Search Engine Optimization) is the work that helps the right people find your site in Google and Yandex — and turn that traffic into inquiries. It isn’t a “TOP button in a week,” and it isn’t about tricking an algorithm.",
    "Below: a plain definition, a comparison with offline ads, what the work includes, and what a client should understand. Site prep usually takes weeks; steady rank growth on a competitive keyword set is planned over 2–6 months after work starts — prep is not TOP.",
  ],
  faq: [
    {
      q: "What is SEO in plain English?",
      a: "Actions on and around the site so target search queries more often bring people to your pages — and those people can buy or send a lead.",
    },
    {
      q: "Is SEO a guaranteed TOP-10?",
      a: "No. TOP depends on competition, demand, site quality, and time. A promise of “TOP for everyone in a month” is a red flag.",
    },
    {
      q: "How is SEO better than a street banner?",
      a: "In search the person already looks for a product or service. The audience is warmer than random passersby. But the site, service, and prices still have to handle the flow.",
    },
    {
      q: "What do people do in SEO in practice?",
      a: "Keyword research and structure, tech and indexing, intent-led content, internal linking, snippets, analytics; then external signals and ongoing support. Details are in related guides.",
    },
    {
      q: "Does SEO work without a sales function?",
      a: "Weakly. If nobody answers the phone and the offer is worse than the market, ranks won’t save profit.",
    },
    {
      q: "How long should I wait for results?",
      a: "Prep for promotion — often weeks to about a month. A noticeable chunk of the keyword set often shows nearer 2–3 months; competitive keywords fill in toward 4–6 months as things go — not a date guarantee.",
    },
    {
      q: "How does SEO differ from paid search?",
      a: "Paid search pays per click right away. SEO builds organic visibility longer, but a search click isn’t billed the way it is in Yandex Direct or Google Ads. Channels often complement each other.",
    },
    {
      q: "Where should a business owner start?",
      a: "Check if the service is searched in the region, put the site in order (mobile, contacts, key pages), set analytics — then a keyword plan. See SEO for small business.",
    },
  ],
  sections: [
    {
      title: "A definition without mystique",
      level: 2,
      paras: [
        "SEO isn’t hacking the SERP — it’s work on matching the site to demand: clear pages for queries, tech robots and people can use, useful content, and trust buildup.",
        "The business goal isn’t an abstract “TOP for TOP’s sake,” but visibility on queries that bring leads and sales. So you watch ranks, organic traffic, and conversions.",
      ],
      notes: [
        {
          title: "Important",
          text: "Phrases like “manipulating algorithms” are an outdated, harmful tone. Modern practice is improve the site and the answer for the user within search engine rules.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Why search is warmer than an offline banner",
      level: 2,
      paras: [
        "A street banner is seen by everyone: some aren’t your audience, some won’t notice, some won’t remember. In search the person typed “buy… / order… / price…” — the need is already stated.",
        "Hence the channel’s strength: you compete for attention of people already searching. Weakness: competitors are there too, and a bad site or service turns clicks into bounces.",
      ],
      lists: [
        {
          intro: "SEO makes sense if:",
          items: [
            "there is steady search demand;",
            "the site can take leads;",
            "you’re ready to serve clients after the click;",
            "you have a months-long horizon, not “result by Friday.”",
          ],
        },
      ],
    },
    {
      title: "What the work includes",
      level: 2,
      paras: [
        "Usually start with site readiness: indexing, mobile, speed, contacts, base landings. In parallel — keyword research and structure: which queries matter and which URLs answer them.",
        "Then — content and on-page, goal analytics, then external signals and regular support. Filters and spam methods are cut from the strategy: you risk losing what you already built.",
      ],
      lists: [
        {
          intro: "Typical stages:",
          items: [
            "audit and tech;",
            "keyword set and structure;",
            "intent-led content;",
            "snippets and internal linking;",
            "lead measurement;",
            "external signals and support.",
          ],
        },
      ],
      links: [
        {
          label: "On-page factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "What a client should understand",
      level: 2,
      paras: [
        "A contractor isn’t a wizard: SEO strengthens the flow, but sales are made by the business. Prices, reply speed, stock — part of the result.",
        "Judge a contractor by plan clarity, reports, and cases — not a promise of “100% TOP for a fixed fee with no timeline.” A flat retainer with no KPIs often yields cosmetics; discuss payment for the job, but rank timelines still live in months.",
      ],
      notes: [
        {
          title: "Timelines",
          text: "“Launch in 2–3 months” in old contracts often mixed prep and TOP. Today separate them: site prep — weeks; keyword-set TOP buildup — planned 2–6 months of systemic work.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "SEO for small business",
          href: "/en/blog/seo-malyy-biznes/",
        },
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
        {
          label: "SEO from scratch",
          href: "/en/blog/seo-s-nulya/",
        },
      ],
    },
  ],
  related: [
    "seo-malyy-biznes",
    "seo-s-nulya",
    "samostoyatelnoe-seo",
    "semanticheskoe-yadro",
    "vnutrennie-faktory",
    "effektivnost-seo",
  ],
};
