import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-9 SEO cases (start of catalog).
 * Prep ≠ TOP-10 — keep timelines split per seo-case-timelines rule.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch9: Record<string, Partial<CaseStudy>> = {
  kabelmontazh: {
    title: "SEO for KabelMontazh",
    client: "KabelMontazh",
    industry: "Electrical installation",
    location: "Voronezh",
    period: "2016–2021",
    metric: "~120",
    metricLabel: "calls per month from search",
    summary:
      "B2B electrical installation: a 30-phrase commercial keyword set, page-one growth planned over 2–6 months, about 120 search calls per month. Partnership until ~2021 — then the company closed under market pressure.",
    coverAlt: "Electrical installation — cable runs",
    services: ["SEO", "Content", "CTA"],
    intro:
      "KabelMontazh did electrical installation for industrial and commercial sites in Voronezh. We ran SEO from 2016 until about 2021. Service margin is low and competition is tough: they needed not “wide” traffic, but requests from people ready to order installation. Later the business couldn’t hold market pressure and closed.",
    painLead:
      "The niche is full of pseudo-commercial queries like “electrification of an industrial facility”: they sound businesslike but bring informational traffic without leads. A big Google Ads budget wasn’t realistic — so SEO had to hit true commercial intent. Even with working search leads, the installation market got tougher every year.",
    challenge:
      "A small keyword set, strong competitors, and a budget ceiling: in ~1 month prepare 30 commercial phrases; search inquiries as rankings build over a planned 2–6 months.",
    pains: [
      {
        title: "Pseudo-commerce in the keyword set",
        text: "Some “business” phrases feed articles and directories, not installation requests. They had to be cut at the start.",
      },
      {
        title: "Low margin — tight budget",
        text: "No bloating paid search or link spam. Need a careful strategy for the client’s real money.",
      },
      {
        title: "Competitors already on page one",
        text: "Nationals and local players hold the SERP and the service market. Without a hard commercial keyword set the site won’t break through — and long-term competition only gets tougher.",
      },
    ],
    journeyLead:
      "We built a short but purely commercial keyword set — 30 phrases. Optimized the site, added sales copy, articles, and CTAs. For several years we held a flow of search calls. Around 2021 the partnership ended: the company closed under competition.",
    approach: [
      "Cut informational “pseudo-commercial” queries",
      "Built the keyword set: 30 commercial phrases for installation",
      "Demand and competition analysis, strategy within budget",
      "On-page optimization and SEO copy",
      "Article section + CTAs on key pages",
      "Analytics of rankings, traffic, and calls — support until ~2021",
    ],
    plainSpeak: [
      {
        jargon: "Pseudo-commercial queries",
        plain:
          "Phrases that sound like “I want to buy,” but people are looking for an article. In ads and SEO they burn budget without leads.",
      },
      {
        jargon: "Commercial set of 30 phrases",
        plain:
          "A short list of queries that bring installation customers — no fluff or directory traffic.",
      },
      {
        jargon: "SEO prep ~1 mo.",
        plain:
          "In about a month we got technique, copy, and CTAs ready for work. Steady page-one coverage on the set — another planned 2–6 months of ranking growth.",
      },
      {
        jargon: "Partnership until ~2021",
        plain:
          "We worked together for several years. Then the company left the market — couldn’t hold competition. An honest case: the web brought leads, but the business environment was harsher.",
      },
    ],
    sections: [
      {
        title: "A niche where you can’t spray wide",
        body: "B2B electrical installation: not reach, but a precise hit. Atmosphere shot — cable runs and installation, not a pretty office.",
        image: "/images/cases/kabelmontazh/cover.webp",
      },
      {
        title: "Rankings on the commercial set",
        body: "The client approved promotion on 30 phrases. Focus — page one on queries that lead to ordering the service.",
        image: "/images/cases/kabelmontazh/kab-pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: organic growth after optimization. Light days — weekends.",
        image: "/images/cases/kabelmontazh/kab-traffic.webp",
        fit: "contain",
      },
      {
        title: "How the story ended",
        body: "The partnership lasted until about 2021. Then KabelMontazh closed — the installation market didn’t forgive thin margins and competitor pressure. The case matters for both the SEO result and this ending: search leads aren’t a guarantee the business survives.",
        image: "/images/cases/kabelmontazh/kab-cover.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/kabelmontazh/kab-alt.webp",
        alt: "Electrical installation work",
        caption: "Niche context",
      },
      {
        src: "/images/cases/kabelmontazh/kab-extra.webp",
        alt: "Cable trays",
        caption: "Site atmosphere",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO (technique, copy, CTAs) — that is not the same as page one. Rankings built over 2–6 months; we held about 120 search calls per month. We worked until about 2021 — then the company closed under market competition.",
    highlights: [
      "30 purely commercial phrases — no pseudo-commerce",
      "Prep ~1 mo. · page one planned 2–6 mo.",
      "≈120 calls from the web monthly",
      "Partnership ~2016–2021",
      "Company closed — couldn’t hold market competition",
    ],
    results: [
      { label: "Phrases", value: "30" },
      { label: "Prep", value: "~1 mo." },
      { label: "Page one", value: "2–6 mo." },
      { label: "Calls / mo.", value: "~120" },
    ],
    ctaTitle: "Need B2B leads without a fat budget?",
    ctaText:
      "We’ll build a short commercial keyword set and grow rankings — the same way we did for KabelMontazh while the market still left room.",
  },

  vtorma: {
    title: "SEO for VoronezhVtorma",
    client: "VoronezhVtorma",
    industry: "Recycling intake and processing",
    location: "Voronezh",
    period: "2016",
    metric: "~120",
    metricLabel: "calls per month from the web",
    summary:
      "SEO for a recycling intake point: search instead of flyers. 57 phrases, prep ~1 month, page one planned over 2–6 months, about 120 calls per month and visits to the drop-off point.",
    coverAlt: "vtorma-vrn.ru homepage — recycling intake",
    services: ["SEO", "Content", "CTA"],
    intro:
      "VoronezhVtorma takes paper, polyethylene, and other recyclables from households and businesses. The industry was used to flyers and street ads — the client went into digital marketing and it paid off.",
    painLead:
      "Processors often advertise the old way: pole ads and flyers. In search for queries like “recycle cardboard Voronezh,” competition is weaker than it looks — if you build the keyword set well and get the site to convert. They needed calls and visits to the point, not just “traffic.”",
    challenge:
      "In ~1 month prepare SEO in a niche barely used to digital: keyword research, optimization, copy, CTAs. Page-one growth — planned over 2–6 months.",
    pains: [
      {
        title: "Offline classics instead of search",
        text: "Flyers and stickers don’t scale and barely measure. The web gives a stable channel if the site is ready for requests.",
      },
      {
        title: "Zero visibility",
        text: "Before start — zero ranking queries, almost no organic or web clients. Need a launch from scratch, not a tweak.",
      },
      {
        title: "Goal — not traffic for traffic’s sake",
        text: "What matters is that someone calls or comes to the point. So CTAs, clear services, and call/visit analytics.",
      },
    ],
    journeyLead:
      "We built the keyword set and strategy, optimized the site, wrote sales copy, added articles and CTAs. After two months we looked at first numbers; then — rankings on 57 phrases and a steady inquiry flow.",
    approach: [
      "Keyword set and supporting semantics",
      "Competition and demand analysis, niche strategy",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs and usability work",
      "Analytics of rankings, visits, calls, and drop-off visits",
    ],
    plainSpeak: [
      {
        jargon: "SEO for recycling intake",
        plain:
          "Someone searches “recycle cardboard Voronezh” or “paper intake” — and should see your point, not a stranger’s pole ad.",
      },
      {
        jargon: "57 phrases in promotion",
        plain:
          "The client approved the query list. We hold rankings on them and watch calls and visits — not a thousand phrases for a pretty report.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Buttons and forms for pickup requests, phones in view — so from search there’s somewhere to click or call right away.",
      },
    ],
    sections: [
      {
        title: "A niche where digital is underrated",
        body: "Paper and polyethylene intake is a familiar offline story. We showed that search brings people to the point as reliably as street ads — and the result can be counted.",
        image: "/images/cases/vtorma/cover.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "The client approved promotion on 57 phrases. Focus — page one on commercial recycling-intake queries in Voronezh.",
        image: "/images/cases/vtorma/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: organic growth. Light days — weekends. In the first months we also tracked visits to the drop-off point.",
        image: "/images/cases/vtorma/traffic.webp",
        fit: "contain",
      },
      {
        title: "Live site",
        body: "vtorma-vrn.ru still takes pickup and drop-off requests: paper, polyethylene, intake points and branches.",
        image: "/images/cases/vtorma/cover.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/vtorma/chart1.webp",
        alt: "VoronezhVtorma rankings report",
        caption: "Rankings on key phrases",
        fit: "contain",
      },
      {
        src: "/images/cases/vtorma/chart2.webp",
        alt: "Extra promotion chart",
        caption: "Promotion dynamics",
        fit: "contain",
      },
      {
        src: "/images/cases/vtorma/partner.webp",
        alt: "VoronezhVtorma",
        caption: "Niche context",
      },
      {
        src: "/images/cases/vtorma/logo.webp",
        alt: "VoronezhVtorma logo",
        caption: "Brand",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO — that is not the same as page one. Rankings were planned over 2–6 months with month-by-month growth; we held about 120 web calls monthly. In the first two months — dozens of calls and over a hundred visits to the point. vtorma-vrn.ru is still live.",
    highlights: [
      "SEO instead of flyers and street ads",
      "57 phrases · prep ~1 mo.",
      "Page one — overtook competitors on the keyword set",
      "≈120 web calls per month",
      "First 2 mo.: calls + visits to the point",
      "Page one planned 2–6 mo. (month-by-month growth)",
      "Recycling intake site live on vtorma-vrn.ru",
    ],
    results: [
      { label: "Phrases", value: "57" },
      { label: "Prep", value: "~1 mo." },
      { label: "Calls / mo.", value: "~120" },
      { label: "Page one", value: "2–6 mo." },
    ],
    ctaTitle: "Need search leads in an “offline” niche?",
    ctaText:
      "We’ll build the keyword set and get the site to calls — the same way we did for VoronezhVtorma.",
  },

  "rc-revolt": {
    title: "SEO for Rc-Revolt",
    client: "Rc-Revolt",
    industry: "RC models and toys",
    location: "Voronezh",
    period: "2016",
    metric: "~170",
    metricLabel: "calls per month from the web",
    summary:
      "SEO for an RC-model store: 68 phrases, page one planned over 2–6 months, about 170 calls per month. Search demand was there — the business misjudged its financial model and turned unprofitable.",
    coverAlt: "Rc-Revolt — RC models: helicopter, car, boat",
    services: ["SEO", "Site structure", "Content", "CTA"],
    intro:
      "Rc-Revolt sells RC cars, drones, boats, and parts. The niche is narrow: almost no high-volume terms, but a search buyer is already ready to pick a model and call. Marketing worked here — the business financial model did not.",
    painLead:
      "Before us — zero organic and no web clients: the site barely showed in search. They needed rankings on commercial queries and calls. In parallel — build store structure for the keyword set from scratch. Later it became clear: even with leads, the business hadn’t sized its financial capacity.",
    challenge:
      "In ~1 month prepare SEO in a narrow RC niche: keyword set, structure, copy, CTAs. Page-one growth — planned over 2–6 months.",
    pains: [
      {
        title: "Narrow niche without familiar high-volume terms",
        text: "“RC cars” and related queries don’t hit millions — but conversion is higher when landings and assortment match the query.",
      },
      {
        title: "Zero visibility",
        text: "Before start — zero ranking queries, a few pages barely in the index, no search clients. Need a launch, not a tweak.",
      },
      {
        title: "Store structure for search",
        text: "Without clustering and landings for categories (cars, drones, parts) keywords don’t convert into calls.",
      },
      {
        title: "Financial model “by eye”",
        text: "The business didn’t calculate margin, procurement, and turnover for the niche. When search calls started, the model was unprofitable — capacity wasn’t enough to hold the project.",
      },
    ],
    journeyLead:
      "We built and clustered the keyword set, designed structure, optimized the site, wrote copy, and added CTAs. In ~2.5 weeks prep was done; then we watched rankings on 68 phrases and the call flow. Leads were there — business sustainability was no longer an SEO question.",
    approach: [
      "Keyword set and supporting semantics",
      "Query clustering and site structure by category",
      "Competition and demand analytics, niche strategy",
      "Optimization from scratch + on-page work",
      "Sales SEO copy and usability work",
      "CTAs, conversion analysis, and adjustments",
    ],
    plainSpeak: [
      {
        jargon: "SEO for an RC store",
        plain:
          "Someone searches “RC cars Voronezh” or “buy a drone” — and should land in your catalog, not a competitor in another city.",
      },
      {
        jargon: "68 phrases in promotion",
        plain:
          "The client approved the query list. We hold page one on them and count calls — not padding the report with junk phrases.",
      },
      {
        jargon: "Structure for keywords",
        plain:
          "Separate sections for model types and parts so search and buyers know where to click.",
      },
      {
        jargon: "Leads ≠ a sustainable business",
        plain:
          "Search calls are demand. If procurement, prices, and cash don’t add up, client flow won’t save an unprofitable model.",
      },
    ],
    sections: [
      {
        title: "A niche with hot demand",
        body: "RC models aren’t mass e-com, but “buy” and “store” queries convert well. The job — build structure and grow rankings on the keyword set.",
        image: "/images/cases/rc-revolt/cover.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "The client approved promotion on 68 phrases. Over a couple of months — onto page one for commercial queries: cars, models, parts, Voronezh.",
        image: "/images/cases/rc-revolt/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: search visits. In the first two months — about 50 visitors a day and dozens of calls and bonus-coupon requests daily.",
        image: "/images/cases/rc-revolt/traffic.webp",
        fit: "contain",
      },
      {
        title: "Assortment in frame",
        body: "Cars, drones, boats — what people searched for. Site and keywords tied to the real Rc-Revolt catalog.",
        image: "/images/cases/rc-revolt/product3.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/rc-revolt/chart2.webp",
        alt: "Extra Rc-Revolt rankings report",
        caption: "Ranking dynamics",
        fit: "contain",
      },
      {
        src: "/images/cases/rc-revolt/shot1.webp",
        alt: "Rc-Revolt RC car",
        caption: "Assortment: car models",
      },
      {
        src: "/images/cases/rc-revolt/shot2.webp",
        alt: "RC model from the catalog",
        caption: "Assortment: models",
      },
      {
        src: "/images/cases/rc-revolt/product2.webp",
        alt: "Rc-Revolt product line",
        caption: "Helicopter, car, boat",
      },
    ],
    outcomeLead:
      "In ~2.5 weeks we prepared SEO — that is not the same as page one. Rankings were planned over 2–6 months; we held about 170 web calls monthly. Search demand was there. But the business didn’t size its financial capacity and the model turned unprofitable — they couldn’t hold the project. Domain rc-revolt.ru is unavailable now: the case is about both the marketing result and that lesson.",
    highlights: [
      "Narrow RC niche without relying on high-volume terms",
      "68 phrases · prep ~2.5 wk.",
      "Page one and ≈170 web calls per month",
      "Search flow was there — financial model was not",
      "Business misjudged capacity → loss",
      "Page one planned 2–6 mo. (month-by-month growth)",
      "Domain currently unavailable",
    ],
    results: [
      { label: "Phrases", value: "68" },
      { label: "Prep", value: "~2.5 wk." },
      { label: "Calls / mo.", value: "~170" },
      { label: "Page one", value: "2–6 mo." },
    ],
    ctaTitle: "Need search leads in a narrow niche?",
    ctaText:
      "We’ll build keywords and structure for the catalog — and check early whether the business model can hold.",
  },
};
