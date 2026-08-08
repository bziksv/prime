import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-16 cases (SEO + ads).
 * Prep ≠ TOP-10 — keep timelines split.
 * Soften Yandex/Direct; $ not ₽; PRIME not ПРАЙМ.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch16: Record<string, Partial<CaseStudy>> = {
  "volvo-chernozeme": {
    title: "SEO for Volvo in the Black Earth region",
    client: "Volvo dealer / Motor Land",
    industry: "Official Volvo dealer",
    location: "Black Earth region",
    period: "since 2016",
    metric: "~103",
    metricLabel: "showroom inquiries per month",
    summary:
      "New Bitrix site + SEO (87 phrases) and Google Ads/social for a Volvo dealer: prep ~2.5 months, page one planned 2–6 months, about 103 showroom inquiries monthly. Belgorod — separate case.",
    coverAlt: "Volvo XC90 — dealer model lineup",
    services: ["SEO", "Website", "Bitrix", "Google Ads", "Social ads"],
    intro:
      "The Volvo dealer in the Black Earth region came after our other dealership projects in the area. The job — reach interested audience in organic search, Google Ads, and social, and build a new site in parallel. Separate case — Volvo Belgorod SEO.",
    painLead:
      "Competition in premium auto is tough. Marketing wanted to know what share of audience they could really capture. Client condition: if we take promotion — we also take a new Bitrix site.",
    challenge:
      "In ~2.5 months launch a new site and prepare SEO (87 phrases) plus Google Ads and social channels. Page-one growth — planned over 2–6 months; showroom inquiries and sales grow with visibility.",
    pains: [
      {
        title: "Serious SERP competition",
        text: "Premium dealers and aggregators split the queries. Without a full keyword pool and a strong site, audience goes elsewhere.",
      },
      {
        title: "Need a new site for promotion",
        text: "The client required promotion only with a new design and Bitrix CMS. Otherwise CTAs and brand trust don’t hold.",
      },
      {
        title: "Weak start from the web",
        text: "Before us — zero ranking phrases, ~12 visits, 2 showroom inquiries. They needed full channel coverage, not “a couple of keywords.”",
      },
    ],
    journeyLead:
      "We built the keyword set and strategy (SEO + Google Ads + social), designed and launched the Bitrix site, then optimization, copy, articles, and CTAs. After ~2.5 months the project was live; then rankings on 87 phrases, traffic, and showroom visits.",
    approach: [
      "Keyword set and supporting semantics → 87 phrases",
      "Demand and competition analytics in premium auto",
      "Strategy: organic search + Google Ads + social on one audience",
      "Design and launch of a new Bitrix CMS site",
      "Optimization from scratch, SEO copy, article section, CTAs",
      "Analytics on rankings, traffic, inquiries, and sales",
    ],
    plainSpeak: [
      {
        jargon: "Audience reach across three channels",
        plain:
          "Who searches Volvo — in organic; who is ready to click an ad — in Google Ads and social. One brief, different doors into the showroom.",
      },
      {
        jargon: "Site + SEO in ~2.5 mo.",
        plain:
          "First we launched a modern dealer Bitrix site, then spun the keyword set. Prep ≠ instant page one: rankings — planned 2–6 months.",
      },
      {
        jargon: "Inquiries and sales",
        plain:
          "We counted more than site visits: calls/showroom visits and cars actually sold.",
      },
    ],
    sections: [
      {
        title: "Volvo in the Black Earth region",
        body: "A dealer project for the Swedish brand: site, search, and ads must lead to the showroom — not a third-party aggregator.",
        image: "/images/cases/volvo-chernozeme/cover.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "The client approved 87 phrases. Report — ranking dynamics after work started.",
        image: "/images/cases/volvo-chernozeme/pos.webp",
        fit: "contain",
      },
      {
        title: "SERP and visibility",
        body: "SERP / visibility snapshot — how the dealer site locked into commercial queries.",
        image: "/images/cases/volvo-chernozeme/serp.webp",
        fit: "contain",
      },
      {
        title: "Traffic and stats",
        body: "Visits grew month by month. In the first two months — about 90 visits/day, 14 showroom inquiries, 6 cars sold.",
        image: "/images/cases/volvo-chernozeme/stat.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/volvo-chernozeme/logo.webp",
        alt: "Volvo logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/volvo-chernozeme/xc90-2.webp",
        alt: "Volvo XC90",
        caption: "Model lineup",
      },
      {
        src: "/images/cases/volvo-chernozeme/cfqn.webp",
        alt: "Volvo project report",
        caption: "Report",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~2.5 months we prepared the site and channels — that is not the same as page one. Rankings were planned over 2–6 months. Already in the first two months: ~90 visits/day, 14 showroom inquiries, 6 sales. Then — about 103 showroom inquiries monthly. Belgorod case — separate.",
    highlights: [
      "Volvo Black Earth: Bitrix site + SEO + Google Ads/social",
      "87 phrases · prep ~2.5 mo.",
      "Page one planned 2–6 mo. (month-by-month growth)",
      "Before us: 0 ranking phrases · ~12 visits · 2 showroom inquiries",
      "First 2 mo.: ~90 visits/day · 14 inquiries · 6 sales",
      "≈103 showroom inquiries per month",
      "Belgorod — volvo-belgorod case",
    ],
    results: [
      { label: "Phrases", value: "87" },
      { label: "Prep", value: "~2.5 mo." },
      { label: "Showroom / mo.", value: "~103" },
      { label: "Page one", value: "2–6 mo." },
    ],
    ctaTitle: "Need showroom inquiries from search and ads?",
    ctaText:
      "We’ll build the site and channels for a dealer — the same way we did for Volvo in the Black Earth region.",
  },

  ofisy: {
    title: "Google Ads for an office center — tenants",
    client: "Office center",
    industry: "Office rental",
    location: "Voronezh",
    period: "2015",
    metric: "6",
    metricLabel: "lease contracts in 2 months",
    summary:
      "Google Ads for an office center: launch in 2 days, budget about $200. In two months — 14 calls and 6 leases; all vacant space filled.",
    coverAlt: "Office business center — facade",
    services: ["Google Ads", "Keywords", "Ad copy"],
    intro:
      "In February 2015 the office-center director (same building as our team) asked how to bring tenants from the web. Classified ads sat for months — nearly a third of the floor space was empty.",
    painLead:
      "Classifieds weren’t closing the vacancy. Long-horizon SEO would bring cheaper clients, but free offices are finite — and site demand would fade once filled. They needed a fast channel: Google Ads on a tight budget.",
    challenge:
      "In 2 days launch Google Ads, stay within about $200, keep CPC low, and lease all vacant space.",
    pains: [
      {
        title: "A third of the building empty",
        text: "Classified listings sat for months. They needed high-intent “office rental” queries — not more passive posts.",
      },
      {
        title: "Need fast results",
        text: "Long SEO is overkill here: few offices, once leased the channel demand drops. Google Ads brings leads now.",
      },
      {
        title: "Tight budget",
        text: "Stay around about $200, don’t inflate CPC, and cut weak directions.",
      },
    ],
    journeyLead:
      "We studied competitor USPs, built keywords, wrote ads, and assembled Google Ads campaigns. Budget went to strong keywords; weak ones were off. Launch — in 2 days.",
    approach: [
      "Keywords for office rental",
      "USPs and ad copy",
      "Google Ads campaigns",
      "Budget focused on the strongest queries",
      "Leading ad slot at minimal CPC",
      "Cut ineffective directions",
    ],
    plainSpeak: [
      {
        jargon: "Launch in 2 days",
        plain:
          "We didn’t wait months for organic: keywords, ads, go live — tenants came from high-intent queries.",
      },
      {
        jargon: "Budget ≈$200",
        plain:
          "A small check: money on strong words, weak campaigns off so clicks aren’t wasted.",
      },
      {
        jargon: "Lease, not “click”",
        plain:
          "We counted calls and signed leases — until every vacant suite was filled.",
      },
    ],
    sections: [
      {
        title: "Offices, not “a site for a site’s sake”",
        body: "The job was practical: fill empty space. Google Ads worked faster than classifieds and without long SEO.",
        image: "/images/cases/ofisy/cover.webp",
      },
      {
        title: "Google Ads for rental",
        body: "Search campaigns for office rental. Goal — a leading ad slot at low CPC without waste on junk queries.",
        image: "/images/cases/ofisy/thumb.webp",
        fit: "contain",
      },
      {
        title: "Space for a tenant",
        body: "An empty suite — what needed leasing. Ads led to a call and viewing, not “just another classified listing.”",
        image: "/images/cases/ofisy/interior.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/ofisy/thumb.webp",
        alt: "Office-center case preview",
        caption: "From archive",
        fit: "contain",
      },
      {
        src: "/images/cases/ofisy/interior.webp",
        alt: "Office space for rent",
        caption: "Space format",
      },
    ],
    outcomeLead:
      "In 2 days we launched Google Ads. In the first two months — about 42 visits/day, 14 calls, and 6 lease contracts. In the end all vacant offices were leased; about 14 inquiries per month at distance.",
    highlights: [
      "Google Ads for office rental · Voronezh",
      "Launch in 2 days · budget ≈$200",
      "High-intent rental queries",
      "Before us: 0 calls · 0 visits · 0 web leases",
      "First 2 mo.: ~42 visits/day · 14 calls · 6 leases",
      "All vacant space leased",
    ],
    results: [
      { label: "Launch", value: "2 days" },
      { label: "Budget", value: "≈$200" },
      { label: "Leases", value: "6" },
      { label: "Result", value: "all leased" },
    ],
    ctaTitle: "Need to lease space through Google Ads?",
    ctaText:
      "We’ll build keywords and campaigns for rental — the same way we did for the office center in Voronezh.",
  },

  "milk-for": {
    title: "SEO for the MilkFor brand",
    client: "MilkFor",
    industry: "Milk filters / animal husbandry",
    location: "Voronezh → Nationwide",
    period: "since 2016",
    metric: "~40",
    metricLabel: "company inquiries per month",
    summary:
      "SEO for a milk-filter maker: site from scratch (specs and build oversight), 45 phrases, prep ~42 days, page one planned 2–6 months. From regional to nationwide demand — about 40 inquiries per month.",
    coverAlt: "MilkFor filtration equipment",
    services: ["SEO", "Site specs", "Content", "CTA"],
    intro:
      "MilkFor makes proprietary polypropylene milk filters and animal-husbandry goods. They started in Voronezh, where demand is year-round, and wanted nationwide reach through search. Without a site that was impossible.",
    painLead:
      "Regional reach wasn’t enough: they needed nationwide visibility. The niche is narrow and hard, and there was no site. Needed: specs for outside developers, build oversight, then SEO and CTAs for wholesale and farms.",
    challenge:
      "In ~42 days accept the site and prepare SEO (45 phrases). Page-one growth — planned over 2–6 months; inquiries and wholesale purchases grow with rankings.",
    pains: [
      {
        title: "No site — no nationwide channel",
        text: "Voronezh demand exists, but without a search-ready site you don’t reach buyers nationwide. Needed a storefront for filters and husbandry.",
      },
      {
        title: "Tough B2B niche",
        text: "Not mass market: farms and dairy plants. Keywords and copy must speak to a buyer — not “milk in a store.”",
      },
      {
        title: "Zero visibility",
        text: "Zero ranking queries, no organic or web profit. Start from scratch after site acceptance.",
      },
    ],
    journeyLead:
      "We picked a contractor by ratings, wrote specs, and monitored the build. In parallel — keywords and strategy. Accepted the site, added calculators and CTAs, started optimization. After ~42 days the project was live; then rankings on 45 phrases and leads.",
    approach: [
      "Developer monitoring, designer pick, specs, and site acceptance",
      "Keywords and competition analysis → 45 phrases",
      "SEO strategy for nationwide demand",
      "Optimization from scratch, on-page work, SEO copy",
      "Article section, calculators, and modern CTAs",
      "Analytics on rankings, traffic, inquiries, and wholesale buys",
    ],
    plainSpeak: [
      {
        jargon: "Specs and oversight of outside build",
        plain:
          "Third-party contractors built the site. We wrote requirements, watched milestones, and accepted the result — so SEO wouldn’t hit broken layout.",
      },
      {
        jargon: "45 phrases · prep ~42 days",
        plain:
          "A compact keyword set for filters and husbandry. In about a month and a half the site and SEO were live; steady page one — another planned 2–6 months.",
      },
      {
        jargon: "Wholesale from search",
        plain:
          "We counted office inquiries and wholesale purchases — not only “pretty visits.”",
      },
    ],
    sections: [
      {
        title: "From the Black Earth region — nationwide",
        body: "Milk filters and farm/dairy plant equipment. SEO must bring a buyer from anywhere in the country to a Voronezh maker’s site.",
        image: "/images/cases/milk-for/cover.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "The client approved 45 phrases. Report — ranking dynamics after work started.",
        image: "/images/cases/milk-for/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits by day",
        body: "Traffic grew every month. In the first two months — about 18 visits/day, 52 office inquiries, 9 wholesale purchases. Weekends/holidays lighter on the chart.",
        image: "/images/cases/milk-for/traffic.webp",
        fit: "contain",
      },
      {
        title: "Site design",
        body: "A modern storefront after developer acceptance: brand reputation and B2B client trust.",
        image: "/images/cases/milk-for/design.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/milk-for/product-2.webp",
        alt: "MilkFor products",
        caption: "Assortment",
      },
      {
        src: "/images/cases/milk-for/product-3.webp",
        alt: "Filtration equipment",
        caption: "Equipment",
      },
      {
        src: "/images/cases/milk-for/thumb.webp",
        alt: "MilkFor case preview",
        caption: "From archive",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~42 days we prepared the site and SEO — that is not the same as page one. Rankings were planned over 2–6 months. Already in the first two months: ~18 visits/day, 52 inquiries, 9 wholesale buys. Then — about 40 inquiries per month. Site: milkfor.ru.",
    highlights: [
      "Milk-filter SEO · nationwide reach",
      "45 phrases · prep ~42 days (site + SEO)",
      "Page one planned 2–6 mo. (month-by-month growth)",
      "Specs and oversight of outside site build",
      "Before us: 0 ranking phrases · 0 organic · 0 web profit",
      "First 2 mo.: ~18 visits/day · 52 inquiries · 9 wholesale",
      "≈40 inquiries per month",
    ],
    results: [
      { label: "Phrases", value: "45" },
      { label: "Prep", value: "~42 days" },
      { label: "Inquiries / mo.", value: "~40" },
      { label: "Page one", value: "2–6 mo." },
    ],
    ctaTitle: "Need nationwide B2B demand from search?",
    ctaText:
      "We’ll build the site and keywords for a narrow niche — the same way we did for MilkFor.",
  },
};
