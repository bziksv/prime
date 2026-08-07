import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-15 SEO cases.
 * Prep ≠ TOP-10 — keep timelines split.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch15: Record<string, Partial<CaseStudy>> = {
  "metallinvest-seo": {
    title: "SEO for Metallinvest",
    client: "Metallinvest Corporation",
    industry: "Steel products",
    location: "Voronezh / Black Earth region",
    period: "since 2016",
    metric: "186",
    metricLabel: "phrases in the SEO core",
    summary:
      "SEO for a metal trader in a tough niche: 186 phrases, prep ~1 month, TOP planned 2–6 months. First 2 months — ~112 visits/day, 68 orders, and 7 wholesale clients. New site — separate case.",
    coverAlt: "metplus-vrn.ru — steel products catalog",
    services: ["SEO", "Content", "CTA", "Analytics"],
    intro:
      "Metallinvest is a metal trader in the Black Earth region: pipe, sheet, rebar, wholesale and retail. In 2016 they came for search in a niche where both offline and the SERP are a hard fight for the client. Later we rebuilt the whole site — a separate development case.",
    painLead:
      "Steel products compete both in the warehouse and in TOP-10. Before us — zero phrases in TOP, no organic, no web orders. The client wanted maximum channels: profit and brand. We settled on 186 of the most effective queries from a large core draft.",
    challenge:
      "In ~1 month prepare SEO in a competitive B2B niche: semantics, copy, CTAs, analytics. Climbing into TOP-10 — planned over 2–6 months; early search orders already in the first months of ranking growth.",
    pains: [
      {
        title: "Tough SERP competition",
        text: "Offline and online fight for steel in the region. Without a core, content, and CTAs the site never reaches a request.",
      },
      {
        title: "Zero visibility",
        text: "0 queries in TOP, visits and web orders = 0. Need prep from scratch.",
      },
      {
        title: "Not “traffic for traffic’s sake”",
        text: "Goal — clients and wholesale from search, plus brand recognition. So a demand-driven core and CTAs on the site.",
      },
    ],
    journeyLead:
      "We built semantics and add-on phrases, mapped competition and demand, locked the strategy. Then — optimization from scratch, copy, articles, CTAs, and analytics fixes. In ~1 month prep was closed; then rankings on 186 phrases and orders.",
    approach: [
      "Semantic core and add-on semantics → 186 phrases",
      "Competition and demand analytics in steel products",
      "Strategy: ranking pressure + competitor weak spots in TOP-10",
      "Site optimization from scratch and on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analysis",
    ],
    plainSpeak: [
      {
        jargon: "186 phrases in the core",
        plain:
          "The client approved a query list for pipe, rolled stock, and related demand — not “thousands for the report”, but working phrases.",
      },
      {
        jargon: "Prep ≠ TOP-10",
        plain:
          "In ~1 month we got the site and SEO ready for work. Rankings and orders keep growing — planned 2–6 months to steady TOP.",
      },
      {
        jargon: "CTAs and conversion",
        plain:
          "Buttons and forms where the buyer already understands the product — so search turns into an order, not only catalog browsing.",
      },
    ],
    sections: [
      {
        title: "Steel — offline and search",
        body: "The niche is competitive on both sides. SEO tied to the trader’s commercial queries: so clients find the warehouse and assortment in the SERP, not only at competitors.",
        image: "/images/cases/metallinvest-seo/pipe-2.webp",
      },
      {
        title: "Rankings on the core",
        body: "The client approved promotion on 186 phrases. Report — ranking dynamics after work started.",
        image: "/images/cases/metallinvest-seo/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits by day",
        body: "Visit report (weekends lighter). In the first two months — about 112 visitors a day, 68 site orders, and 7 wholesale clients.",
        image: "/images/cases/metallinvest-seo/traffic.webp",
        fit: "contain",
      },
      {
        title: "Another ranking cut",
        body: "Extra core report — how visibility grew month by month after prep.",
        image: "/images/cases/metallinvest-seo/pos2.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/metallinvest-seo/logo.webp",
        alt: "Metallinvest logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/metallinvest-seo/pipe-1.webp",
        alt: "Steel pipe",
        caption: "Assortment",
      },
      {
        src: "/images/cases/metallinvest-seo/pipe-3.webp",
        alt: "Steel warehouse",
        caption: "Warehouse / product",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO — that is not TOP. Climbing into TOP is planned over 2–6 months. Already in the first two months after start: ~112 visits/day, 68 site orders, and 7 wholesale clients. Site now — metplus-vrn.ru; full redesign — in the development case.",
    highlights: [
      "Steel products SEO in the Black Earth region",
      "186 phrases · prep ~1 mo.",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Before us: 0 in TOP · 0 organic · 0 web orders",
      "First 2 mo.: ~112 visits/day · 68 orders · 7 wholesale",
      "Web redesign — separate Metallinvest case",
    ],
    results: [
      { label: "Phrases", value: "186" },
      { label: "Prep", value: "~1 mo." },
      { label: "Orders (2 mo.)", value: "68" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need steel-product orders from search?",
    ctaText:
      "We’ll build the core and landings for the catalog — like Metallinvest in the Black Earth region.",
  },

  "derevyannyie-izdeliya": {
    title: "SEO for carved wood products",
    client: "Carved products workshop",
    industry: "Handmade wood products",
    location: "Voronezh",
    period: "since 2014",
    metric: "43",
    metricLabel: "phrases in the SEO core",
    summary:
      "SEO for a carved stairs and panels workshop: 43 phrases against DIY articles in the SERP, prep ~1.5 months, TOP planned 2–6 months. First 2 months — inquiries and purchases from search.",
    coverAlt: "Elite carved oak staircase in an interior",
    services: ["SEO", "Content", "CTA"],
    intro:
      "In 2014 a maker of complex handmade wood products came to us: carved stairs, wall panels, interior elements. They needed to know if search would bring clients — and to launch promotion if yes.",
    painLead:
      "The niche is narrow and “hard”: strong informational sites teach DIY wooden stairs. Commercial intent gets diluted by DIY content. Before us — zero in TOP, no organic, no web orders.",
    challenge:
      "In ~1.5 months prepare SEO for handmade work: a core without “DIY”, copy, CTAs. Climbing into TOP-10 — planned over 2–6 months; first inquiries already during ranking growth.",
    pains: [
      {
        title: "DIY eats commercial intent",
        text: "For “wooden stairs” the SERP is full of “build it yourself” guides. We had to reach people looking for a craftsman and an order, not a drawing.",
      },
      {
        title: "Narrow niche, zero visibility",
        text: "0 queries in TOP, visits and web orders = 0. Niche assessment showed ~500 potential search inquiries — the client approved 43 phrases.",
      },
      {
        title: "Expensive product — need contact",
        text: "A carved staircase isn’t a one-click buy. Clear CTAs and trust matter: work photos, path to a request and a call.",
      },
    ],
    journeyLead:
      "We mapped the niche and competition with info sites, built a 43-phrase core, prepared optimization and CTAs. In ~1.5 months the project was live; then — rankings, visits, and requests.",
    approach: [
      "Semantic core and add-on semantics → 43 phrases",
      "Competition analytics: commerce vs DIY info sites",
      "Strategy aimed at competitor weak spots in TOP-10",
      "Site optimization, sales SEO copy",
      "CTAs and usability work",
      "Analytics of rankings, traffic, and inquiries",
    ],
    plainSpeak: [
      {
        jargon: "43 phrases against “DIY”",
        plain:
          "The core targets ordering stairs and panels from a craftsman — not people looking up how to cut steps themselves.",
      },
      {
        jargon: "Prep ~1.5 mo. ≠ TOP",
        plain:
          "In a month and a half we got SEO ready for work. Steady TOP — another planned 2–6 months of ranking growth.",
      },
      {
        jargon: "Inquiry → purchase",
        plain:
          "In the first months we counted more than visits: who called/wrote and who actually ordered a piece.",
      },
    ],
    sections: [
      {
        title: "Handmade — and in search",
        body: "Carved stairs and panels are one-off products. SEO should lead to the craftsman, not a “how to build stairs yourself” article.",
        image: "/images/cases/derevyannyie-izdeliya/cover.webp",
      },
      {
        title: "Rankings on the core",
        body: "The client approved 43 phrases. Report — ranking dynamics after work started.",
        image: "/images/cases/derevyannyie-izdeliya/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits by day",
        body: "Day-by-day report (weekends lighter). In the first two months — about 14 visitors a day; 7 contacted the company, 6 made a purchase.",
        image: "/images/cases/derevyannyie-izdeliya/traffic.webp",
        fit: "contain",
      },
      {
        title: "Result in the interior",
        body: "What the niche sells: carved panels and a staircase in a premium interior — a stronger argument than any DIY guide.",
        image: "/images/cases/derevyannyie-izdeliya/product-2.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/derevyannyie-izdeliya/product-1.webp",
        alt: "Elite staircase with carved balusters",
        caption: "Handmade staircase",
      },
      {
        src: "/images/cases/derevyannyie-izdeliya/product-2.webp",
        alt: "Carved wood wall panels",
        caption: "Wall panels",
      },
      {
        src: "/images/cases/derevyannyie-izdeliya/cover.webp",
        alt: "Carved oak staircase in a mansion",
        caption: "Interior",
      },
    ],
    outcomeLead:
      "In ~1.5 months we prepared SEO — that is not TOP. Climbing into TOP is planned over 2–6 months. Already in the first two months: ~14 visits/day, 7 inquiries, 6 purchases. Niche estimate — up to ~500 potential search clients on the agreed core.",
    highlights: [
      "SEO for carved stairs and panels",
      "43 phrases · prep ~1.5 mo.",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Competing with DIY info sites in the SERP",
      "Before us: 0 in TOP · 0 organic · 0 web orders",
      "First 2 mo.: ~14 visits/day · 7 inquiries · 6 purchases",
    ],
    results: [
      { label: "Phrases", value: "43" },
      { label: "Prep", value: "~1.5 mo." },
      { label: "Purchases (2 mo.)", value: "6" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need orders for one-off products from search?",
    ctaText:
      "We’ll build a core that bypasses DIY SERPs — like the carved stairs workshop.",
  },

  "uc-vrn": {
    title: "SEO for a training center (continuing education)",
    client: "Central Black Earth Training Center",
    industry: "Continuing education / occupational safety",
    location: "Voronezh",
    period: "since 2016",
    metric: "~60",
    metricLabel: "new students per month",
    summary:
      "SEO and a new Bitrix site for a training center: 35 phrases in a competitive education niche, prep ~1.5 months, TOP planned 2–6 months. ≈60 course enrollments monthly.",
    coverAlt: "Classes at the Central Black Earth Training Center",
    services: ["SEO", "Site", "Bitrix", "CTA"],
    intro:
      "The Central Black Earth Training Center (uc-vrn.ru) is continuing education in Voronezh: occupational safety, fire safety, trades, ADR. They came for search promotion; in parallel we rebuilt an outdated site on Bitrix.",
    painLead:
      "Education in the SERP has dozens of players — TOP isn’t elastic. The center’s site was outdated by then: promoting “as is” made no sense. They needed a modern resource and a 35-phrase core for a modest budget.",
    challenge:
      "In ~1.5 months build a new Bitrix site and prepare SEO. Climbing into TOP-10 — planned over 2–6 months; course enrollments grow with rankings.",
    pains: [
      {
        title: "Tough competition in education",
        text: "Many centers fight for the same queries. Without a strong vendor and core the site drowns in the SERP.",
      },
      {
        title: "Outdated design",
        text: "Before promotion they needed a full visual refresh: a simple, informative, modern site — otherwise CTAs and trust don’t hold.",
      },
      {
        title: "Zero visibility",
        text: "0 queries in TOP, no organic or center inquiries from search. Start from scratch.",
      },
    ],
    journeyLead:
      "First we agreed a new design and Bitrix implementation. In parallel we built 35 phrases, optimized pages, copy, and CTAs. In ~1.5 months the project was live; then — rankings, inquiries, and course enrollments.",
    approach: [
      "Semantics → 35 phrases for a modest budget and maximum return",
      "Competition analytics in Voronezh continuing education",
      "Design + new site on Bitrix CMS",
      "Optimization from scratch, on-page work, SEO copy",
      "Article section, CTAs, and conversion analysis to enrollment",
      "Iterations on rankings and competitor weak spots in TOP-10",
    ],
    plainSpeak: [
      {
        jargon: "Site first, then SEO",
        plain:
          "The old design didn’t hold trust or requests. We built a simple modern Bitrix site — and ran search on top of it.",
      },
      {
        jargon: "35 phrases, not “thousands”",
        plain:
          "Budget was modest — we kept the core compact but working: courses and trades people actually search to enroll in.",
      },
      {
        jargon: "Prep ≠ TOP-10",
        plain:
          "In ~1.5 months we launched the site and SEO. Steady TOP — another planned 2–6 months of ranking growth.",
      },
    ],
    sections: [
      {
        title: "A training center, not “school in general”",
        body: "Occupational safety, fire safety, tractor operators, ADR, trades. SEO leads to course enrollment, not an abstract “education” article.",
        image: "/images/cases/uc-vrn/cover.webp",
      },
      {
        title: "New Bitrix site",
        body: "Before promotion we refreshed the look: concise informative design. Without that, rankings wouldn’t convert into inquiries.",
        image: "/images/cases/uc-vrn/design.webp",
        fit: "contain",
      },
      {
        title: "Rankings on the core",
        body: "The client approved 35 phrases. Report — ranking dynamics after work started.",
        image: "/images/cases/uc-vrn/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits by day",
        body: "Day-by-day report (weekends lighter). In the first two months — about 61 visitors a day; 28 center inquiries, 18 enrolled.",
        image: "/images/cases/uc-vrn/traffic.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/uc-vrn/class-1.webp",
        alt: "Class at the training center",
        caption: "Classroom",
      },
      {
        src: "/images/cases/uc-vrn/class-2.webp",
        alt: "Group in training",
        caption: "Group",
      },
      {
        src: "/images/cases/uc-vrn/class-3.webp",
        alt: "Practical session",
        caption: "Practice",
      },
    ],
    outcomeLead:
      "In ~1.5 months we prepared the site and SEO — that is not TOP. Climbing into TOP is planned over 2–6 months. Already in the first two months: ~61 visits/day, 28 inquiries, 18 enrollments. Then — about ≈60 new students monthly. Site live on uc-vrn.ru.",
    highlights: [
      "Continuing-education SEO in Voronezh",
      "35 phrases · prep ~1.5 mo. (site + SEO)",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "New design and Bitrix CMS before/with promotion",
      "Before us: 0 in TOP · 0 organic · 0 search inquiries",
      "First 2 mo.: ~61 visits/day · 28 inquiries · 18 enrollments",
      "≈60 new students per month",
    ],
    results: [
      { label: "Phrases", value: "35" },
      { label: "Prep", value: "~1.5 mo." },
      { label: "Students / mo.", value: "~60" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need course enrollments from search?",
    ctaText:
      "We’ll build the site and core for continuing education — like the Training Center in Voronezh.",
  },
};
