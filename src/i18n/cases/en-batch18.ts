import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-18 — last two SEO cases.
 * Prep ≠ TOP-10 — keep timelines split.
 * Soften Yandex; $ not ₽; PRIME not ПРАЙМ.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch18: Record<string, Partial<CaseStudy>> = {
  "motor-lend-nissan": {
    title: "SEO for Nissan dealer Motor Land",
    client: "Motor Land / Nissan",
    industry: "Official Nissan dealer",
    location: "Voronezh",
    period: "since 2016",
    metric: "~90",
    metricLabel: "showroom inquiries per month",
    summary:
      "SEO and paid search for the new Nissan Motor Land showroom: start in ~11 days, 150+ phrases (141 in TOP-10), TOP planned 2–6 months. ≈90 showroom inquiries monthly. 2020 landing — separate case.",
    coverAlt: "Nissan Motor Land showroom — Voronezh",
    services: ["SEO", "Paid search", "Content", "CTA"],
    intro:
      "In winter 2016 Voronezh opened a Nissan showroom for Motor Land. Before that the brand had “burned” in the city: the previous dealership closed. They needed the fastest possible start in search and paid ads. Later we built a promo landing — a separate development case.",
    painLead:
      "The site was assembled on the eve of opening: crawlers weren’t there yet, SEO essentials were missed, content and branded ad tone fell on us. 152 code errors, zero organic and web profit.",
    challenge:
      "In ~11 days (goal — under 2 weeks) fix tech, fill the site to Nissan brand guidelines, launch SEO (150+ phrases) and paid search. Climbing into TOP-10 — planned over 2–6 months; inquiries and sales — from the first months of visibility growth.",
    pains: [
      {
        title: "Burning start for a new showroom",
        text: "Opening winter 2016: need showroom flow now. The previous brand dealer in the city closed — trust and demand are fragile.",
      },
      {
        title: "Site “from the wheels” with no SEO groundwork",
        text: "Built on the eve of opening; search engines hadn’t indexed yet. Promotion checklist items missed; content — on us.",
      },
      {
        title: "152 tech bugs · zero from the web",
        text: "Code was failing; visits and internet profit = 0. Without fixes and a core you don’t enter TOP.",
      },
    ],
    journeyLead:
      "Audit, error breakdown, semantics and strategy vs competitors. Studied Nissan brand kit, cleaned code, shaped content and CTAs, launched SEO and paid search. After ~11 days channels were live; then rankings on 150+ phrases and showroom visits.",
    approach: [
      "Full audit and fix of 152 tech bugs",
      "Content and styling to Nissan brand / market kit",
      "Semantics → 150+ phrases, competitor analysis in TOP-10",
      "On-page optimization, SEO copy, articles, CTAs",
      "Setup and launch of branded paid search",
      "Analytics on rankings, CTR, traffic, inquiries, and sales",
    ],
    plainSpeak: [
      {
        jargon: "Start in ~11 days",
        plain:
          "We didn’t wait months: fixed the site, filled it, and switched on SEO with paid search for the showroom opening. That’s channel prep — not instant TOP.",
      },
      {
        jargon: "150+ phrases · 141 in TOP-10",
        plain:
          "A large core for the dealer and models. Rankings grew in the planned 2–6 month window after work started.",
      },
      {
        jargon: "Paid search with high CTR",
        plain:
          "Branded ads in tough competition: higher CTR — lower CPC, more people reach the showroom.",
      },
    ],
    sections: [
      {
        title: "New Nissan in Voronezh",
        body: "Motor Land’s showroom opened after the previous brand dealer closed. Needed fast search and ads leading into the showroom.",
        image: "/images/cases/motor-lend-nissan/cover.webp",
      },
      {
        title: "Rankings on the core",
        body: "150+ phrases; 141 in search TOP-10 in the report. Climbing into TOP — within the planned 2–6 months after prep.",
        image: "/images/cases/motor-lend-nissan/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits",
        body: "In the first two months — about 358 visits/day, 81 showroom inquiries, 19 cars sold. By ~4 months average daily visits ≈500.",
        image: "/images/cases/motor-lend-nissan/traffic.webp",
        fit: "contain",
      },
      {
        title: "Paid search and CTR",
        body: "Solid ads in competition: high CTR lowers CPC and feeds the showroom with leads alongside organic.",
        image: "/images/cases/motor-lend-nissan/ctr.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/motor-lend-nissan/logo.webp",
        alt: "Nissan logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/motor-lend-nissan/serp.webp",
        alt: "Nissan site in search results",
        caption: "SERP",
        fit: "contain",
      },
      {
        src: "/images/cases/motor-lend-nissan/car-2.webp",
        alt: "Nissan — model lineup",
        caption: "Models",
      },
      {
        src: "/images/cases/motor-lend-nissan/logo-dealer.webp",
        alt: "Motor Land",
        caption: "Dealer",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~11 days we prepared the site, SEO, and paid search — that is not TOP. Climbing into TOP is planned over 2–6 months; 141 of 150+ phrases in TOP-10. Already in the first two months: ~358 visits/day, 81 inquiries, 19 sales. By ~4 months — ≈500 visits/day. Then — about ≈90 showroom inquiries monthly. Landing — separate case.",
    highlights: [
      "SEO + paid search for new Nissan showroom · Motor Land",
      "Prep ~11 days · 150+ phrases (141 in TOP-10)",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "152 tech bugs cleaned · content to Nissan brand kit",
      "First 2 mo.: ~358 visits/day · 81 inquiries · 19 sales",
      "By ~4 mo.: ≈500 visits/day · ≈90 showroom inquiries/mo.",
      "2020 landing — nissan-landing case · live nissan-motorland.ru",
    ],
    results: [
      { label: "Phrases", value: "150+" },
      { label: "Prep", value: "~11 days" },
      { label: "Showroom / mo.", value: "~90" },
      { label: "TOP", value: "2–6 mo." },
    ],
    ctaTitle: "Need a fast dealer start in search and ads?",
    ctaText:
      "We’ll raise the site and channels for a showroom opening — like Nissan Motor Land.",
  },

  "motorland-kuzov": {
    title: "Motor Land body shop",
    client: "Motor Land",
    industry: "Body repair",
    location: "Voronezh",
    period: "since 2016",
    metric: "~120",
    metricLabel: "search calls per month",
    summary:
      "SEO for Motor Land’s branded body shop: 101 phrases, TOP over 2–6 months and ≈120 calls a month — plus site fixes: cleaned prior developer issues and shipped what promotion needed to hold.",
    coverAlt: "Paint booth in the body shop",
    services: ["SEO", "Site rework", "Content", "CTA"],
    intro:
      "Motor Land is a major auto dealer. This case isn’t about new-car sales — it’s the branded body shop. They needed repair calls and bookings from search — and for that we had to fix rankings and the site itself.",
    painLead:
      "Body repair in the city is tough competition. The unit site was blocking promotion: leftover bugs from prior developers — broken layout, broken forms, weak landings, awkward CTAs. Without fixes SEO hit a ceiling: people found the page and didn’t leave a request.",
    challenge:
      "Get the site in order (dev errors, conversion) and in ~1 month prepare SEO. Climbing into TOP-10 — planned over 2–6 months; search bookings grow with rankings.",
    pains: [
      {
        title: "Competition for “body repair”",
        text: "High-frequency phrases are taken. Without a core, copy, and working CTAs the site never reaches a call.",
      },
      {
        title: "Site bugs from prior developers",
        text: "Broken or awkward forms, landing gaps, crooked UI — search traffic leaks before the call.",
      },
      {
        title: "A unit, not the whole brand",
        text: "Promote the body shop specifically — separate intent and pages, not mixed with car sales.",
      },
    ],
    journeyLead:
      "First we tore into the site: what blocks a request, what’s broken, what’s missing. In parallel we built a 101-phrase core, optimized pages, wrote copy and articles. Then — rankings, traffic, and calls/bookings.",
    approach: [
      "Body-shop site audit: found and fixed prior developer issues",
      "Reworked landings, forms, and CTA elements for repair booking",
      "Semantic core: 101 commercial body-shop phrases",
      "On-page optimization and sales SEO copy",
      "Article section + ranking and call-conversion analytics",
      "Iterations on competitor weak spots in the SERP",
    ],
    plainSpeak: [
      {
        jargon: "Rework on someone else’s code",
        plain:
          "The site was already “done” by someone. We didn’t rewrite from scratch — found what broke requests, fixed it, and made it work.",
      },
      {
        jargon: "101 phrases in TOP-10",
        plain:
          "The client approved the query list. Nearly all locked into search TOP-10 — where people look before booking service.",
      },
      {
        jargon: "CTAs on landings",
        plain:
          "“Book”, phones, and forms where the person already understands the service — and they actually work, not “sit for looks”.",
      },
      {
        jargon: "≈120 calls a month",
        plain:
          "A steady inquiry flow to the shop from search — not one-off spikes “for a report screenshot”.",
      },
    ],
    sections: [
      {
        title: "Body shop, not the dealership",
        body: "Case cover — paint booth and body repair. Not a new-car showroom: we promoted the shop itself.",
        image: "/images/cases/motorland-kuzov/cover.webp",
      },
      {
        title: "Site first, then rankings",
        body: "Alongside SEO we fixed what blocked conversion: layout and logic bugs from prior developers, booking forms, landings for shop services. Otherwise TOP-10 would give views, not calls.",
        image: "/images/cases/motorland-kuzov/workshop-extra.webp",
      },
      {
        title: "Rankings on the core",
        body: "Keyword report: the client approved 101 phrases. Nearly all — in TOP-10.",
        image: "/images/cases/motorland-kuzov/ml-pos.webp",
        fit: "contain",
      },
      {
        title: "Visits by day",
        body: "Organic growth after optimization and site rework. Weekends highlighted lighter.",
        image: "/images/cases/motorland-kuzov/ml-traffic.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/motorland-kuzov/ml-chart.webp",
        alt: "Promotion report",
        caption: "Project analytics",
        fit: "contain",
      },
      {
        src: "/images/cases/motorland-kuzov/ml-cover.webp",
        alt: "Auto service",
        caption: "Service context",
      },
    ],
    outcomeLead:
      "We fixed the site for requests, prepared body-shop SEO in ~1 month — that is not TOP. Climbing into TOP is planned over 2–6 months; we brought ≈120 calls a month — with a 101-phrase core.",
    highlights: [
      "Site rework: fixed prior developer issues",
      "Working CTAs and landings for repair booking",
      "101 phrases — nearly all in search TOP-10",
      "SEO prep ~1 mo.",
      "≈120 web calls monthly",
      "TOP planned 2–6 mo. (month-by-month growth)",
      "Focus on body shop, not the dealership",
    ],
    results: [
      { label: "Phrases", value: "101" },
      { label: "Prep", value: "~1 mo." },
      { label: "TOP", value: "2–6 mo." },
      { label: "Calls / mo.", value: "~120" },
    ],
    ctaTitle: "Need auto-service bookings from search?",
    ctaText:
      "We’ll fix the site for requests and climb into TOP-10 — like Motor Land’s body shop.",
  },
};
