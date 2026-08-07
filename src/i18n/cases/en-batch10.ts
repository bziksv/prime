import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-10 SEO cases.
 * Prep ≠ TOP-10 — keep timelines split.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch10: Record<string, Partial<CaseStudy>> = {
  "det-zentr": {
    title: "SEO for Svetlyachok children’s center",
    client: "Svetlyachok",
    industry: "Children’s center / early development",
    location: "Lyubertsy (Moscow region)",
    period: "2016",
    metric: "~90",
    metricLabel: "calls per month from the web",
    summary:
      "SEO for a private children’s center in Lyubertsy: local Moscow-region SERP, 23 phrases, TOP planned over 2–6 months, ≈90 calls per month — plus new enrollments from search.",
    coverAlt: "Svetlyachok children’s center play area",
    services: ["SEO", "Content", "CTA"],
    intro:
      "Svetlyachok is a small private club in the Moscow region: development and classes for preschoolers and younger schoolkids. Parents search for a speech therapist, Montessori, and school prep — that flow needed to land on the site.",
    painLead:
      "In the Moscow suburbs the SERP is cut by zones: Lyubertsy has its own. Without local semantics and strong landings the center isn’t visible next to competitors. Before us — zero queries in TOP, no organic, no web clients.",
    challenge:
      "In ~1 month prepare SEO for Lyubertsy/Zhulebino: core, copy, CTAs. Climbing into TOP-10 — planned over 2–6 months.",
    pains: [
      {
        title: "Local Moscow-region SERP",
        text: "Queries like “children’s center Lyubertsy” and “Montessori Zhulebino” live in their own geo zone. Need semantics and content for that district, not “Moscow in general”.",
      },
      {
        title: "Zero visibility",
        text: "Before start — 0 phrases in TOP, no search visits or clients. Need a launch from scratch.",
      },
      {
        title: "Goal — enrollments",
        text: "What matters isn’t “traffic”, but calls and new kids in groups. So CTAs and clear service pages (speech therapy, school prep, development).",
      },
    ],
    journeyLead:
      "We built semantics for Lyubertsy, strategy and CTAs, optimized the site, wrote copy and articles. In ~1 month prep was done and the project was live; then rankings on 23 phrases and a flow of parent inquiries.",
    approach: [
      "Semantic core and add-on semantics for the Moscow region",
      "Competition and demand analytics in the local SERP",
      "Promotion strategy for the center’s services",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "Local SEO for a children’s center",
        plain:
          "A parent in Lyubertsy searches “speech therapist for kids” or “school prep” — and should see Svetlyachok, not a center from another district.",
      },
      {
        jargon: "23 phrases in promotion",
        plain:
          "The client approved a short list: development, speech therapy, Montessori, school prep, geo. We hold TOP-10 on them and count calls.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Phone and class booking in view — so from search you can call or leave a request right away.",
      },
    ],
    sections: [
      {
        title: "A private center in the local SERP",
        body: "A small club in the Moscow region competes with neighbouring centers in Lyubertsy and Zhulebino. The bet — precise local queries and clear service pages.",
        image: "/images/cases/det-zentr/cover.webp",
      },
      {
        title: "Rankings on the core",
        body: "The client approved 23 phrases. Local SERP report for Lyubertsy — TOP-10 on speech therapy, development, Montessori, school prep, and geo queries.",
        image: "/images/cases/det-zentr/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: visit growth. In the first two months — about 19 visitors a day, dozens of calls, and new kids in groups.",
        image: "/images/cases/det-zentr/traffic.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/det-zentr/logo.webp",
        alt: "Svetlyachok children’s center logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/det-zentr/pos.webp",
        alt: "Svetlyachok rankings in Lyubertsy search",
        caption: "TOP-10 on the local core",
        fit: "contain",
      },
      {
        src: "/images/cases/det-zentr/traffic.webp",
        alt: "Svetlyachok site visits",
        caption: "Visits by day",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO in Lyubertsy — that is not TOP. Climbing into TOP is planned over 2–6 months; we held ≈90 web calls monthly. In the first two months — dozens of calls and dozens of new kids from search.",
    highlights: [
      "Local SEO: Lyubertsy / Zhulebino",
      "23 phrases · prep ~1 mo.",
      "TOP-10 — overtook competitors on the core",
      "≈90 web calls per month",
      "First 2 mo.: ~19 visits/day · 24 new kids",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Services: speech therapy, Montessori, school prep",
    ],
    results: [
      { label: "Phrases", value: "23" },
      { label: "Prep", value: "~1 mo." },
      { label: "Calls / mo.", value: "~90" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need enrollments for a children’s center from search?",
    ctaText:
      "We’ll build local semantics and get the site to calls — like Svetlyachok in Lyubertsy.",
  },

  "bel-kuzov": {
    title: "SEO for Fortuna-avto",
    client: "Fortuna-avto",
    industry: "Body repair / auto service",
    location: "Belgorod",
    period: "2016",
    metric: "~200",
    metricLabel: "calls per month from the web",
    summary:
      "SEO for an auto service at Volvo and Subaru dealers in Belgorod: structure from scratch, 135 phrases, TOP planned over 2–6 months, ≈200 calls per month. Paid search is a separate case.",
    coverAlt: "Fortuna-avto — auto service in Belgorod",
    services: ["SEO", "Site structure", "Content", "CTA"],
    intro:
      "Fortuna-avto is a large auto service in Belgorod: body repair, polishing, detailing, paint — at official Volvo and Subaru dealers. They first came for SEO; later we connected paid search — a separate case under Google Ads.",
    painLead:
      "Before us the site barely worked for search: one page, zero queries in TOP, no web clients. They needed rankings for body repair and related services in Belgorod — and calls into the bays, not “traffic for the report”.",
    challenge:
      "In ~2 weeks prepare structure and the site for SEO. Climbing the core into TOP-10 — planned over 2–6 months.",
    pains: [
      {
        title: "Placeholder site",
        text: "Essentially one page with no structure for services. Nowhere to land queries like “body repair Belgorod” or “hood repair”.",
      },
      {
        title: "Zero visibility",
        text: "0 phrases in TOP, almost no organic or web clients. Need SEO from scratch.",
      },
      {
        title: "Competition in body work",
        text: "Commercial queries are taken. Need clusters, copy, and CTAs to overtake competitors in TOP-10.",
      },
    ],
    journeyLead:
      "We built and clustered semantics, designed structure, optimized pages, wrote copy, and added CTAs. Prep in ~14 days; then TOP growth over 2–6 months; rankings on 135 phrases and a call flow. When organic moved — we connected Google Ads and search ads.",
    approach: [
      "Semantic core and secondary semantics",
      "Query clustering and site structure by service",
      "Competition and demand analytics in Belgorod",
      "Optimization from scratch + on-page work",
      "Sales SEO copy and usability work",
      "CTAs, conversion analysis, and adjustments",
    ],
    plainSpeak: [
      {
        jargon: "SEO for a body shop",
        plain:
          "After an accident or a chip someone searches “fender repair Belgorod” / “windshield replacement” — and should land with you, not a neighbour in the SERP.",
      },
      {
        jargon: "135 phrases in promotion",
        plain:
          "The client approved a wide list: body, glass, doors, hood, prices, geo. We hold TOP-10 on them and count calls.",
      },
      {
        jargon: "Structure for semantics",
        plain:
          "Separate landings by repair type — so search and the client know where to click and whom to call.",
      },
    ],
    sections: [
      {
        title: "Service at dealer sites",
        body: "Body repair and related services in Belgorod — on official Volvo and Subaru dealer grounds. SEO’s job — bring people into the bays from search.",
        image: "/images/cases/bel-kuzov/cover.webp",
      },
      {
        title: "Rankings on the core",
        body: "The client approved 135 phrases. Report — TOP-10 on body work, fender/hood/door repair, windshield replacement, and Belgorod geo queries.",
        image: "/images/cases/bel-kuzov/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "In the first two months — about 50 search visitors a day, dozens of calls and bonus-coupon requests daily.",
        image: "/images/cases/bel-kuzov/traffic.webp",
        fit: "contain",
      },
      {
        title: "Services in the SERP",
        body: "Landings and semantics tied to the real shop: body, glass, insurance repair — what people search after accidents and in daily use.",
        image: "/images/cases/bel-kuzov/osago.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/bel-kuzov/chart2.webp",
        alt: "Car repair before/after",
        caption: "Shop work result",
      },
      {
        src: "/images/cases/bel-kuzov/label.webp",
        alt: "Fortuna-avto — case materials",
        caption: "Promotion materials",
        fit: "contain",
      },
      {
        src: "/images/cases/bel-kuzov/logo.webp",
        alt: "Fortuna-avto logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/bel-kuzov/service.webp",
        alt: "Auto service bay",
        caption: "Niche context",
      },
    ],
    outcomeLead:
      "In ~14 days we prepared SEO — that is not TOP. Climbing into TOP is planned over 2–6 months; we held ≈200 web calls monthly. Then we connected paid search — see the Fortuna-avto Google Ads case.",
    highlights: [
      "SEO for a Volvo/Subaru auto service in Belgorod",
      "135 phrases · prep ~14 days",
      "Site structure for services from scratch",
      "TOP-10 on body work and related queries",
      "≈200 web calls per month",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Then connected Google Ads / search ads",
    ],
    results: [
      { label: "Phrases", value: "135" },
      { label: "Prep", value: "~14 days" },
      { label: "Calls / mo.", value: "~200" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need auto-service bookings from search?",
    ctaText:
      "We’ll build semantics for body work and service — like Fortuna-avto in Belgorod. Paid search can follow if you need a faster funnel.",
  },

  himopttorg: {
    title: "SEO for HimOptTorg",
    client: "HimOptTorg",
    industry: "Chemicals / coatings / rubber goods wholesale",
    location: "Voronezh · Black Earth region",
    period: "2016",
    metric: "~200",
    metricLabel: "calls per month from the web",
    summary:
      "SEO for a chemicals and coatings wholesaler in the Black Earth region: 90 phrases, prep ~1 month, TOP planned 2–6 months, ≈200 calls per month and about 6,000 visits monthly — a B2B catalog for “buy” queries.",
    coverAlt: "himopttorg.ru catalog — coatings, chemicals, rubber goods",
    services: ["SEO", "Content", "CTA"],
    intro:
      "HimOptTorg manufactures and supplies chemicals, coatings, rubber goods, and related products for business and industry in the Black Earth region. Warehouses in Voronezh and Lipetsk, catalog on himopttorg.ru.",
    painLead:
      "Without search, a multi-thousand flow of queries for acids, solvents, enamels, hoses, and gasket sheet went past the company. Before us — zero phrases in TOP, no organic, no web clients. They needed rankings on commercial “buy” queries and calls/orders — not a storefront without traffic.",
    challenge:
      "In ~1 month prepare SEO for a B2B catalog: semantics, copy, CTAs. Climbing into TOP-10 — planned over 2–6 months in a competitive chemical niche.",
    pains: [
      {
        title: "B2B demand goes to search",
        text: "Buyers look for “buy hydrochloric acid”, “NC enamel”, “conveyor belt” — without SERP visibility the wholesaler loses volume.",
      },
      {
        title: "Zero visibility",
        text: "0 queries in TOP, visits and web clients — zero. Need prep from scratch, not a “tweak”.",
      },
      {
        title: "Wide catalog — many clusters",
        text: "Coatings, chemicals, rubber goods, asbestos tech, plastics — without clustering and landings semantics don’t convert into orders.",
      },
    ],
    journeyLead:
      "We built semantics and strategy, optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live; then rankings on 90 phrases, thousands of visits, and a steady call/order flow.",
    approach: [
      "Semantic core and add-on semantics",
      "Competition and demand analytics in chemicals/coatings/rubber",
      "Promotion strategy for a B2B catalog",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for chemical wholesale",
        plain:
          "An engineer or purchaser searches a concrete SKU — acid, enamel, hose — and should land in your catalog with price and phone, not a competitor’s.",
      },
      {
        jargon: "90 phrases in promotion",
        plain:
          "The client approved a core for high-demand SKUs. We hold TOP-10 on them and count calls and placed orders.",
      },
      {
        jargon: "CTAs on the catalog",
        plain:
          "Order, price list, phones in view — so from search you can call or place a supply request right away.",
      },
    ],
    sections: [
      {
        title: "Chemical wholesale in the Black Earth region",
        body: "Warehouses and regional delivery, wide stock on hand. SEO’s job — bring purchasers from search to the himopttorg.ru catalog: acids, enamels, rubber goods.",
        image: "/images/cases/himopttorg/catalog-acids.webp",
      },
      {
        title: "Rankings on the core",
        body: "The client approved 90 phrases. Report — TOP on commercial queries: acids, salts, enamels, hoses, conveyor belt, gasket sheet, and related SKUs.",
        image: "/images/cases/himopttorg/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: visit growth. In the first two months — about 80 visitors a day; in steady mode the site reached about 6,000 visits a month.",
        image: "/images/cases/himopttorg/traffic.webp",
        fit: "contain",
      },
      {
        title: "Live site",
        body: "himopttorg.ru is still live: coatings, chemicals, rubber goods catalogs, Voronezh/Lipetsk branches, product order and price list.",
        image: "/images/cases/himopttorg/catalog-lkm.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/himopttorg/catalog-enamel.webp",
        alt: "NC enamel catalog on himopttorg.ru",
        caption: "Coatings: NC enamels with prices",
      },
      {
        src: "/images/cases/himopttorg/catalog-rti.webp",
        alt: "HimOptTorg rubber goods",
        caption: "Rubber: hoses, belts, tubing",
      },
      {
        src: "/images/cases/himopttorg/catalog-chem.webp",
        alt: "Chemical products in the catalog",
        caption: "Chemical products section",
      },
      {
        src: "/images/cases/himopttorg/contacts.webp",
        alt: "HimOptTorg department contacts",
        caption: "Department contacts and orders",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO — that is not TOP-10. Climbing into TOP is planned over 2–6 months with month-by-month growth; we held ≈200 web calls monthly. In the first two months — hundreds of calls and dozens of orders; then — about 6,000 visits a month. himopttorg.ru is still live.",
    highlights: [
      "B2B chemical and coatings wholesale in the Black Earth region",
      "90 phrases · prep ~1 mo.",
      "TOP-10 — overtook competitors on the core",
      "≈200 web calls per month",
      "~6,000 visits per month in steady mode",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Catalog on himopttorg.ru is live now",
    ],
    results: [
      { label: "Phrases", value: "90" },
      { label: "Prep", value: "~1 mo." },
      { label: "TOP", value: "2–6 mo." },
      { label: "Calls / mo.", value: "~200" },
    ],
    ctaTitle: "Need search leads for a B2B catalog?",
    ctaText:
      "We’ll build semantics for your SKUs and get the site to calls — like HimOptTorg.",
  },
};
