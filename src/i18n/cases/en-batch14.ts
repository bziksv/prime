import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-14 SEO cases.
 * Prep ≠ TOP-10 — keep timelines split.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch14: Record<string, Partial<CaseStudy>> = {
  klyaksa: {
    title: "SEO for Klyaksa children’s center",
    client: "Klyaksa",
    industry: "Children’s development center",
    location: "Voronezh",
    period: "since 2014",
    metric: "~50",
    metricLabel: "clients per month from search",
    summary:
      "SEO for a children’s development center: 20 target phrases, prep ~1 month, TOP planned 2–6 months on speech therapy and psychology in Voronezh, ≈50 clients per month — classes and enrollments.",
    coverAlt: "Klyaksa — children’s development and therapy center",
    services: ["SEO", "Content", "CTA"],
    intro:
      "In 2014 Klyaksa leadership asked us to assess the niche: does it make sense to promote a children’s center in search. Analysis showed demand and moderate competition — we started with a core of the 20 most targeted phrases.",
    painLead:
      "Parents search for a speech therapist, psychologist, physical therapy, and preschool/school prep in Google. Before us — zero phrases in TOP, no organic, no web clients. They needed rankings and kids enrolled in classes.",
    challenge:
      "In ~1 month prepare SEO for a children’s center: a narrow core of 20 phrases, copy, CTAs. Climbing into TOP-10 — planned over 2–6 months.",
    pains: [
      {
        title: "Is search advertising worth it at all?",
        text: "The client came with a feasibility question. We confirmed: audience is in the SERP, competition is acceptable — it makes sense to enter search.",
      },
      {
        title: "Zero visibility",
        text: "0 queries in TOP, visits and web clients = 0. Need a launch from scratch.",
      },
      {
        title: "Goal — kids in classes",
        text: "Not “traffic”: calls and enrollment. So CTAs and clear center service pages.",
      },
    ],
    journeyLead:
      "We gathered 100+ keywords; the client picked 20. Built strategy, optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live; then rankings and a flow of parents.",
    approach: [
      "Niche and competition analysis in the region",
      "Semantic core (100+) and selecting 20 target phrases",
      "Promotion strategy for a children’s center",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for a children’s center",
        plain:
          "A parent searches “children’s speech therapist Voronezh” or “child development center” — and should call Klyaksa, not a neighbouring TOP-10 club.",
      },
      {
        jargon: "20 phrases from 100+",
        plain:
          "We built a wide core; the client kept the most targeted: speech therapy, psychology, physical therapy, preschool and school prep. That’s what we measure.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Phone and enrollment request in view — so from search you can book a class right away.",
      },
    ],
    sections: [
      {
        title: "Development and therapy center",
        body: "Speech therapy, psychology, physical therapy, preschool and school prep — what parents search in Voronezh. SEO tied to these services and the Klyaksa brand.",
        image: "/images/cases/klyaksa/cover.webp",
      },
      {
        title: "Rankings on the core",
        body: "The client approved 20 phrases. Report — TOP on children’s psychologist and speech therapist, physical therapy, development center, and preschool/school prep.",
        image: "/images/cases/klyaksa/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report (weekends lighter). In the first two months — about 50 visitors a day, 42 calls, and 28 kids enrolled.",
        image: "/images/cases/klyaksa/traffic.webp",
        fit: "contain",
      },
      {
        title: "Classes at the center",
        body: "Games, blocks, creativity — why families come. Site and semantics lead to class enrollment.",
        image: "/images/cases/klyaksa/photo.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/klyaksa/logo.webp",
        alt: "Klyaksa children’s center logo",
        caption: "Brand",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO — that is not TOP. Climbing into TOP is planned over 2–6 months; we held ≈50 web clients monthly. In the first two months — dozens of calls and 28 kids in classes.",
    highlights: [
      "Children’s center SEO in Voronezh",
      "20 target phrases from a 100+ core · prep ~1 mo.",
      "TOP — speech therapy, psychology, physical therapy, development",
      "≈50 web clients per month",
      "First 2 mo.: ~50 visits/day · 42 calls · 28 kids",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Started after niche analysis in 2014",
    ],
    results: [
      { label: "Phrases", value: "20" },
      { label: "Prep", value: "~1 mo." },
      { label: "Clients / mo.", value: "~50" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need children’s center enrollments from search?",
    ctaText:
      "We’ll build semantics for speech therapy, psychology, and development — like Klyaksa in Voronezh.",
  },

  samsungvrn: {
    title: "SEO for Samsung Service Plaza",
    client: "Samsung Service Plaza",
    industry: "Samsung service center",
    location: "Voronezh / region",
    period: "since 2016",
    metric: "~200",
    metricLabel: "clients per month from search",
    summary:
      "SEO for authorized Samsung service: 34 brand-only phrases, prep ~1 month, TOP planned 2–6 months on smartphone repair and service center, ≈200 clients per month.",
    coverAlt: "Samsung Service Plaza Voronezh",
    services: ["SEO", "Content", "CTA"],
    intro:
      "Appliance/gadget repair in search is tough competition and big budgets. The client wanted TOP specifically as a Samsung service: brand repair and warranty only, across the region.",
    painLead:
      "Before us — zero phrases in TOP, no organic, no web orders. They needed rankings on Samsung queries and repair requests — not a diluted “repair anything” core.",
    challenge:
      "In ~1 month prepare SEO for a narrow niche: 34 Samsung-only phrases, copy, CTAs. Climbing into TOP-10 — planned over 2–6 months in the region.",
    pains: [
      {
        title: "Expensive service = SERP war",
        text: "Dozens of companies spend budget on generic queries. Without a Samsung focus, leads dilute and go to competitors.",
      },
      {
        title: "Samsung service only",
        text: "The client doesn’t repair “everything” — only Samsung gear. We built the core for smartphones, tablets, gadgets, vacuums, and brand warranty repair.",
      },
      {
        title: "Zero visibility",
        text: "0 queries in TOP, visits and web orders = 0. Need a launch from scratch.",
      },
    ],
    journeyLead:
      "We built Samsung semantics; the client picked 34 phrases. Optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live; then regional rankings and a flow of repair requests.",
    approach: [
      "Samsung repair niche and SERP competition analysis",
      "Semantics for the Samsung brand only (34 phrases)",
      "Promotion strategy for a regional service center",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for Samsung only",
        plain:
          "Someone searches “Samsung smartphone repair” or “Samsung service center” — and should land at Service Plaza, not a generic “any brand” shop.",
      },
      {
        jargon: "34 phrases",
        plain:
          "The client approved the core: smartphones, tablets, gadgets, vacuums, home theaters, warranty repair. We hold TOP on them and count orders.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Repair request and phone in view — so from search you can drop gear off at the service right away.",
      },
    ],
    sections: [
      {
        title: "Service Plaza in the region",
        body: "Authorized Samsung center: smartphones, tablets, gadgets, and brand appliances. SEO tuned to the brand and regional demand.",
        image: "/images/cases/samsungvrn/cover.webp",
      },
      {
        title: "Rankings on the core",
        body: "The client approved 34 phrases. Report — TOP on Samsung smartphone/phone repair, service center, warranty repair, and gadgets.",
        image: "/images/cases/samsungvrn/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report (weekends lighter). In the first two months — about 24 visitors a day, 82 site requests, and 62 repair orders.",
        image: "/images/cases/samsungvrn/traffic.webp",
        fit: "contain",
      },
      {
        title: "Board and gadget repair",
        body: "Fine electronics work — what’s behind “smartphone repair” and “Samsung warranty repair” queries.",
        image: "/images/cases/samsungvrn/thumb.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/samsungvrn/logo.webp",
        alt: "Samsung Service Plaza Voronezh logo",
        caption: "Brand",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared Samsung SEO — that is not TOP. Climbing into TOP is planned over 2–6 months; we held ≈200 web clients monthly. In the first two months — dozens of repair requests and orders.",
    highlights: [
      "Samsung service-center SEO across the region",
      "34 brand-only phrases · prep ~1 mo.",
      "TOP — Samsung service center / smartphone repair",
      "≈200 web clients per month",
      "First 2 mo.: ~24 visits/day · 82 requests · 62 repairs",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Separate case from Inzhener-servis (`remont`)",
    ],
    results: [
      { label: "Phrases", value: "34" },
      { label: "Prep", value: "~1 mo." },
      { label: "Clients / mo.", value: "~200" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need Samsung service leads from search?",
    ctaText:
      "We’ll build semantics for the brand and gadget repair — like Service Plaza in Voronezh.",
  },

  ticiana: {
    title: "SEO for Ticiana coatings",
    client: "Ticiana",
    industry: "Premium coatings / decorative finishes",
    location: "Voronezh",
    period: "since 2016",
    metric: "~500",
    metricLabel: "sales per month from search",
    summary:
      "SEO for premium paints and plaster: 77 phrases without mass-market noise, prep ~1.5 months, TOP planned 2–6 months on decorative coatings in Voronezh, ≈500 sales per month.",
    coverAlt: "TICIANA — premium paints and decorative finishes",
    services: ["SEO", "Site", "Content", "CTA"],
    intro:
      "Ticiana manufactures and sells premium paints, coatings, and plaster. That product needs a branded search approach — without “cheap” mass-market queries.",
    painLead:
      "Premium in the SERP competes with mass market. We had to cut “inexpensive”/“cheap”, build a core for decorative paints and plaster, and bring orders — including wholesale clients.",
    challenge:
      "In ~1.5 months prepare the site and SEO: 77 premium phrases, copy, CTAs. Climbing into TOP-10 — planned over 2–6 months.",
    pains: [
      {
        title: "Premium ≠ mass market",
        text: "Phrases with “inexpensive” and “cheap” dilute the brand. We removed them from the core — 77 targeted but more competitive queries remained.",
      },
      {
        title: "Zero visibility",
        text: "0 queries in TOP, visits and web orders = 0. Need a site and SEO from scratch.",
      },
      {
        title: "Goal — sales and wholesale",
        text: "Not “traffic”: site orders and wholesale clients. So CTAs and a clear finishes catalog.",
      },
    ],
    journeyLead:
      "Under the SEO team we built a site for the brand and search realities, then optimized, wrote copy and articles, added CTAs. In ~1.5 months prep was done; then rankings on 77 phrases and sales.",
    approach: [
      "Semantics with mass-market wording cut out",
      "Competition analytics in decorative coatings",
      "Site built for brand and SEO requirements",
      "Optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "Premium SEO for coatings",
        plain:
          "A designer or homeowner searches “decorative plaster” or “pearlescent paint” — and should come to Ticiana, not a “cheaper paint” shop.",
      },
      {
        jargon: "77 phrases without “cheap”",
        plain:
          "The core covers decorative paints, acrylics, plaster, and materials in Voronezh — without queries that pull mass market.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Order and contacts in view — so from search you can buy a finish or reach wholesale right away.",
      },
    ],
    sections: [
      {
        title: "The art of finish — and in search",
        body: "Premium paints and plaster need careful semantics and a branded site. SEO is tied to decorative materials, not “the cheapest can”.",
        image: "/images/cases/ticiana/cover.webp",
      },
      {
        title: "Rankings on the core",
        body: "The client approved 77 phrases. Report — TOP on wall paint, decorative plaster, acrylic, and a decorative-materials store in Voronezh.",
        image: "/images/cases/ticiana/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report (weekends lighter). In the first two months — about 49 visitors a day, 18 site orders, and 3 wholesale clients.",
        image: "/images/cases/ticiana/traffic.webp",
        fit: "contain",
      },
      {
        title: "Interior with Ticiana finish",
        body: "Decorative walls — what the brand sells. Site and semantics lead to buying materials for that result.",
        image: "/images/cases/ticiana/product.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/ticiana/logo.webp",
        alt: "TICIANA logo",
        caption: "Brand",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~1.5 months we prepared the site and SEO — that is not TOP. Climbing into TOP is planned over 2–6 months; we held ≈500 web sales monthly. In the first two months — site orders and the first wholesale clients.",
    highlights: [
      "Premium coatings SEO in Voronezh",
      "77 phrases without mass market · prep ~1.5 mo.",
      "TOP — decorative paints, plaster, acrylic",
      "≈500 web sales per month",
      "First 2 mo.: ~49 visits/day · 18 orders · 3 wholesale",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Site built for brand and SEO",
    ],
    results: [
      { label: "Phrases", value: "77" },
      { label: "Prep", value: "~1.5 mo." },
      { label: "Sales / mo.", value: "~500" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need premium coating sales from search?",
    ctaText:
      "We’ll build semantics without mass-market noise — like Ticiana in Voronezh.",
  },
};
