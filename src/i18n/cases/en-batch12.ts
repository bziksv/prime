import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-12 SEO cases.
 * Prep ≠ TOP-10 — keep timelines split.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch12: Record<string, Partial<CaseStudy>> = {
  respect: {
    title: "SEO for Respect used-car showroom",
    client: "Respect / Motor Land",
    industry: "Used cars / Trade-In",
    location: "Voronezh",
    period: "2016",
    metric: "~400",
    metricLabel: "calls per month from the web",
    summary:
      "SEO for a used-car showroom at Motor Land: 162 phrases, prep ~1 month, TOP planned 2–6 months, ≈400 calls per month — flow to appraisal, credit, and used-car purchase in Voronezh.",
    coverAlt: "Used-car lot",
    services: ["SEO", "Content", "CTA"],
    intro:
      "Motor Land is a major dealer in the Black Earth region. Trade-In volume led them to open a separate used-car showroom — Respect. Loading the lot needed web promotion: car appraisal, credit, used-car purchase.",
    painLead:
      "A used-car showroom competes with private sellers and classifieds. Without strong rankings for “used cars Voronezh”, “buy used car on credit”, and appraisal, demand goes elsewhere. Before us — zero phrases in TOP, no organic, no web clients.",
    challenge:
      "In ~1 month prepare SEO for a used-car showroom: a wide core, copy, CTAs. Climbing into TOP-10 — planned over 2–6 months on commercial queries.",
    pains: [
      {
        title: "A new channel for a separate showroom",
        text: "Trade-In brought inventory — they needed demand from used-car buyers, not only trade-ins.",
      },
      {
        title: "Zero visibility",
        text: "0 queries in TOP, no visits or web clients. Need a launch from scratch.",
      },
      {
        title: "Goal — calls and sales",
        text: "Not “traffic for the report”: calls, appraisal, credit, a showroom visit, and a car sale.",
      },
    ],
    journeyLead:
      "We built a wide semantics set and strategy, optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live; then rankings on 162 phrases and a steady call flow.",
    approach: [
      "Semantic core and add-on semantics",
      "Competition and demand analytics in used cars",
      "Promotion strategy for the showroom and Trade-In",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for a used-car showroom",
        plain:
          "Someone searches “used cars Voronezh” or “buy used car on credit” — and should land in your showroom, not a stranger’s listing.",
      },
      {
        jargon: "162 phrases in promotion",
        plain:
          "The client approved a wide core: mileage, credit, appraisal, showroom, geo. We hold TOP-10 on them and count calls.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Phone, appraisal request, and car selection in view — so from search you can call or book right away.",
      },
    ],
    sections: [
      {
        title: "Used-car showroom at a major dealer",
        body: "Respect grew out of Motor Land Trade-In: a separate lot for used cars. SEO’s job — bring buyers from search.",
        image: "/images/cases/respect/cover.webp",
      },
      {
        title: "Rankings on the core",
        body: "The client approved 162 phrases. Report — TOP on used cars, credit, appraisal, and “showroom Voronezh” queries.",
        image: "/images/cases/respect/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: strong growth. In the first two months — about 260 visitors a day and hundreds of calls; car sales beat the plan.",
        image: "/images/cases/respect/traffic.webp",
        fit: "contain",
      },
      {
        title: "Brand context",
        body: "The lot sits in the Motor Land ecosystem — next to new cars and service. SEO loaded the used-car channel specifically.",
        image: "/images/cases/respect/showroom.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/respect/car1.webp",
        alt: "Used car",
        caption: "Showroom assortment",
      },
      {
        src: "/images/cases/respect/logo.webp",
        alt: "Motor Land Trade / Respect",
        caption: "Lot brand",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO — that is not TOP. Climbing into TOP is planned over 2–6 months; we held ≈400 web calls monthly. In the first two months — hundreds of visits and calls per day combined; car sales beat the plan.",
    highlights: [
      "Used-car showroom at Motor Land",
      "162 phrases · prep ~1 mo.",
      "TOP-10 — mileage, credit, appraisal, geo",
      "≈400 web calls per month",
      "First 2 mo.: ~260 visits/day",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Sales above plan in the start period",
    ],
    results: [
      { label: "Phrases", value: "162" },
      { label: "Prep", value: "~1 mo." },
      { label: "Calls / mo.", value: "~400" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need used-car showroom calls from search?",
    ctaText:
      "We’ll build semantics for mileage, credit, and appraisal — like Respect / Motor Land in Voronezh.",
  },

  hobby36: {
    title: "SEO for Mir Uvlecheniy online store",
    client: "Mir Uvlecheniy",
    industry: "Hobby goods",
    location: "Voronezh",
    period: "2016",
    metric: "~100",
    metricLabel: "calls per month from the web",
    summary:
      "SEO for a hobby online store: 54 phrases, prep ~1 month, TOP planned 2–6 months, ≈100 calls per month — bows, numismatics, metal detectors. Store refresh — separate case.",
    coverAlt: "hobbi36.ru homepage — Mir Uvlecheniy",
    services: ["SEO", "Content", "CTA"],
    intro:
      "Mir Uvlecheniy is a hobby store in Voronezh (now hobbi36.ru): bows, metal detectors, numismatics, and more. In 2016 we promoted the online storefront in search; later we refreshed the store itself — a separate development case.",
    painLead:
      "They wanted to reinforce the offline shop with a 24/7 web storefront. Before us — zero phrases in TOP, no organic, no web clients. They needed rankings on commercial niche queries and online calls/deals.",
    challenge:
      "In ~1 month prepare SEO for a hobby store: category semantics, copy, CTAs. Climbing into TOP-10 — planned over 2–6 months.",
    pains: [
      {
        title: "Offline without strong online",
        text: "Assortment existed, but search wasn’t bringing buyers. The web storefront must work 24/7.",
      },
      {
        title: "Zero visibility",
        text: "0 queries in TOP, no visits or web clients. Need a launch from scratch.",
      },
      {
        title: "Narrow but “hot” niches",
        text: "Bows, search magnets, coin albums — queries aren’t mass-market, but intent to buy is clear.",
      },
    ],
    journeyLead:
      "We built semantics and strategy, optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live; then rankings on 54 phrases and a steady flow of calls and deals.",
    approach: [
      "Semantic core and add-on semantics",
      "Competition and demand analytics by hobby category",
      "Promotion strategy for an online store",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for a hobby store",
        plain:
          "Someone searches “buy a compound bow” or “search magnet Voronezh” — and should land in your catalog, not a competitor’s.",
      },
      {
        jargon: "54 phrases in promotion",
        plain:
          "The client approved a core by key categories. We hold TOP-10 on them and count calls and deals.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Phone and order in view — so from search you can call or place a purchase right away.",
      },
    ],
    sections: [
      {
        title: "Hobby store in search",
        body: "From bows and paintball to numismatics and metal detecting — niches are narrow, but a search buyer is already “hot”.",
        image: "/images/cases/hobby36/cover.webp",
      },
      {
        title: "Rankings on the core",
        body: "The client approved 54 phrases. Report — TOP on bows, search magnets, coin albums and sets, metal detectors.",
        image: "/images/cases/hobby36/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: visit growth. In the first two months — about 160 visitors a day and hundreds of calls; online deals reached offline-store level.",
        image: "/images/cases/hobby36/traffic.webp",
        fit: "contain",
      },
      {
        title: "Catalog today",
        body: "The store lives on hobbi36.ru. Later we moved it to proper e-commerce — see the Mir Uvlecheniy refresh case.",
        image: "/images/cases/hobby36/catalog.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/hobby36/banner.webp",
        alt: "Mir Uvlecheniy banner",
        caption: "Brand and niche",
      },
      {
        src: "/images/cases/hobby36/numizmatika.webp",
        alt: "Numismatics — collector goods",
        caption: "Category: numismatics",
      },
      {
        src: "/images/cases/hobby36/logo.webp",
        alt: "Mir Uvlecheniy logo",
        caption: "Brand",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO — that is not TOP-10. Climbing into TOP is planned over 2–6 months with month-by-month growth; we held ≈100 web calls monthly. In the first two months — hundreds of visits and calls; online deals reached parity with the offline store. Later we refreshed the store itself.",
    highlights: [
      "Hobby-store SEO: bows, numismatics, metal detecting",
      "54 phrases · prep ~1 mo.",
      "TOP-10 on commercial categories",
      "≈100 web calls per month",
      "First 2 mo.: ~160 visits/day",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Online deals ≈ offline-store level",
    ],
    results: [
      { label: "Phrases", value: "54" },
      { label: "Prep", value: "~1 mo." },
      { label: "Calls / mo.", value: "~100" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need orders for a niche store from search?",
    ctaText:
      "We’ll build semantics for your categories — like Mir Uvlecheniy in Voronezh.",
  },

  "volvo-belgorod": {
    title: "SEO for Volvo brand in Belgorod",
    client: "Volvo Car Belgorod / Motor Land",
    industry: "Official Volvo dealer",
    location: "Belgorod",
    period: "2016",
    metric: "~112",
    metricLabel: "showroom visits per month from search",
    summary:
      "SEO for an official Volvo dealer in Belgorod: 96 phrases, TOP planned over 2–6 months, ≈112 showroom visits monthly — dealer and model queries in a premium niche.",
    coverAlt: "Volvo Car Belgorod — official dealer",
    services: ["SEO", "Content", "CTA"],
    intro:
      "Volvo is premium with a matching price. In tough economic conditions it mattered not to “spray” budget blindly, but to bring interested search audience into the showroom: Belgorod dealer, models, buy.",
    painLead:
      "Premium demand is crisis-sensitive. Without strong rankings for “Volvo Belgorod”, “official dealer”, XC60, and related queries the showroom loses hot clients. Before us — zero phrases in TOP, no organic, no web clients.",
    challenge:
      "In ~1 month prepare SEO for a Volvo dealer in Belgorod: a wide core, copy, CTAs. Climbing into TOP-10 — planned over 2–6 months.",
    pains: [
      {
        title: "Premium and narrow demand",
        text: "Fewer clients than mass market — every showroom visit counts. Need queries with intent to choose a dealer and model.",
      },
      {
        title: "Zero visibility",
        text: "0 queries in TOP, no visits or web clients. Need a launch from scratch.",
      },
      {
        title: "Goal — showroom visits",
        text: "Not only traffic: calls and coming into the showroom. So CTAs and clear dealer landings.",
      },
    ],
    journeyLead:
      "We built semantics (client approved ~96 phrases), strategy, optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live; then rankings and a flow of showroom visits.",
    approach: [
      "Semantic core and add-on semantics",
      "Competition and demand analytics in premium auto",
      "Promotion strategy for the dealer and models",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for a Volvo dealer",
        plain:
          "Someone searches “Volvo Belgorod” or “buy XC60” — and should land with the official dealer, not a third-party aggregator.",
      },
      {
        jargon: "96 phrases in promotion",
        plain:
          "The client approved the core: dealer, showroom, models, geo. We hold TOP-10 on them and count showroom visits.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Phone, test-drive booking, and showroom contacts in view — so from search you can get to a visit right away.",
      },
    ],
    sections: [
      {
        title: "Premium in the regional SERP",
        body: "Belgorod and the Volvo brand — local dealer and model queries. The job — take TOP and bring people into the showroom.",
        image: "/images/cases/volvo-belgorod/cover.webp",
      },
      {
        title: "Rankings on the core",
        body: "The client approved promotion on 96 phrases. Report — TOP on “Volvo Belgorod”, dealer, showroom, and XC60.",
        image: "/images/cases/volvo-belgorod/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: visit growth. In the first two months — about 160 visitors a day and hundreds of calls; sales quota met with headroom.",
        image: "/images/cases/volvo-belgorod/traffic.webp",
        fit: "contain",
      },
      {
        title: "Dealer context",
        body: "The site sits in the Motor Land ecosystem — the official Volvo channel in the region. SEO loaded Belgorod dealer demand specifically.",
        image: "/images/cases/volvo-belgorod/showroom.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/volvo-belgorod/extra.webp",
        alt: "Volvo — dealer model range",
        caption: "Model context",
      },
      {
        src: "/images/cases/volvo-belgorod/logo.webp",
        alt: "Volvo / dealer",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/volvo-belgorod/logo-client.webp",
        alt: "Volvo logo",
        caption: "Volvo mark",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO — that is not TOP-10. Climbing into TOP is planned over 2–6 months with month-by-month growth; we held ≈112 showroom visits monthly from search. In the first two months — strong traffic and calls; sales above plan.",
    highlights: [
      "SEO for official Volvo dealer in Belgorod",
      "96 phrases · prep ~1 mo.",
      "TOP-10 — dealer, showroom, XC60, geo",
      "≈112 showroom visits per month",
      "First 2 mo.: ~160 visits/day",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Sales quota met with headroom",
    ],
    results: [
      { label: "Phrases", value: "96" },
      { label: "Prep", value: "~1 mo." },
      { label: "Visits / mo.", value: "~112" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need showroom visits from search?",
    ctaText:
      "We’ll build semantics for the dealer and models — like Volvo in Belgorod.",
  },
};
