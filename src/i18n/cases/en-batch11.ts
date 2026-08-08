import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-11 SEO cases.
 * Prep ≠ TOP-10 — keep timelines split.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch11: Record<string, Partial<CaseStudy>> = {
  "argument-seo": {
    title: "SEO for Argument law firm",
    client: "Argument",
    industry: "Legal services",
    location: "Voronezh",
    period: "2016",
    metric: "~110",
    metricLabel: "calls per month from the web",
    summary:
      "SEO for a Voronezh law firm: 37 phrases, page one planned over 2–6 months, about 110 calls per month — pushed competitors out of the SERP on key practices. New site — separate case.",
    coverAlt: "argument-uk.ru — book a consult and services",
    services: ["SEO", "Content", "CTA"],
    intro:
      "Argument is a Voronezh law firm. In 2016 they came for SEO: overtake strong competitors in local search and get calls and consult bookings from Google. Later we built a new site — a separate development case.",
    painLead:
      "Lawyers in a large city compete hard — offline and on page one of search. Before us — zero ranking phrases, no organic, no web clients. They needed rankings on commercial queries and real inquiries, not a checkbox site.",
    challenge:
      "In ~1 month prepare SEO in a competitive legal niche in Voronezh: keyword research, copy, CTAs. Page-one growth — planned over 2–6 months on an agreed set.",
    pains: [
      {
        title: "Tough SERP competition",
        text: "Strong players have sat on page one for years. Without a keyword set, content, and CTAs a new or weak site never reaches a call.",
      },
      {
        title: "Zero visibility",
        text: "Zero ranking queries, no visits or web clients. Need prep from scratch.",
      },
      {
        title: "Goal — consults, not traffic",
        text: "What matters is that someone calls or comes in. So CTAs and clear practice pages.",
      },
    ],
    journeyLead:
      "We built the keyword set and strategy, optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live; then rankings on 37 phrases and a steady flow of calls and consults.",
    approach: [
      "Keyword set and supporting semantics",
      "Competition and demand analytics in Voronezh legal niche",
      "Promotion strategy for commercial practices",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for a law firm",
        plain:
          "Someone searches “lawyer Voronezh,” “accident attorney,” or another practice — and should see you, not a page-one competitor.",
      },
      {
        jargon: "37 phrases in promotion",
        plain:
          "The client approved a short query list. We hold page one on them and count calls and consult visits.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Phone and booking in view — so from search you can call or leave a request right away.",
      },
    ],
    sections: [
      {
        title: "Lawyers in a competitive SERP",
        body: "In Voronezh legal supply grows faster than demand. The job — push strong competitors off page one on key practices: housing, family, tax, companies.",
        image: "/images/cases/argument-seo/housing-mid.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "The client approved promotion on 37 phrases. Focus — commercial legal queries in Voronezh.",
        image: "/images/cases/argument-seo/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: visit growth. In the first two months — about 18 visitors a day, dozens of calls and consult visits.",
        image: "/images/cases/argument-seo/traffic.webp",
        fit: "contain",
      },
      {
        title: "The site today",
        body: "Later we built a new services and booking site — live on argument-uk.ru. This SEO case is about 2016 organic; development is a separate story.",
        image: "/images/cases/argument-seo/form.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/argument-seo/home-mid.webp",
        alt: "argument-uk.ru homepage — B2B and B2C services",
        caption: "Homepage: B2B and B2C services",
      },
      {
        src: "/images/cases/argument-seo/tax-mid.webp",
        alt: "Argument tax disputes page",
        caption: "Practice: tax disputes",
      },
      {
        src: "/images/cases/argument-seo/family-mid.webp",
        alt: "Argument family matters page",
        caption: "Practice: family matters",
      },
      {
        src: "/images/cases/argument-seo/ul-mid.webp",
        alt: "Argument company services and contacts",
        caption: "Company services and contacts",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO — that is not the same as page one. Rankings were planned over 2–6 months with month-by-month growth; we held about 110 web calls monthly. In the first two months — dozens of calls and consults. The firm’s new site — in the Argument development case.",
    highlights: [
      "Law-firm SEO in competitive Voronezh",
      "37 phrases · prep ~1 mo.",
      "Page one — overtook strong competitors",
      "≈110 web calls per month",
      "First 2 mo.: calls + consult visits",
      "Page one planned 2–6 mo. (month-by-month growth)",
      "Later — new site argument-uk.ru",
    ],
    results: [
      { label: "Phrases", value: "37" },
      { label: "Prep", value: "~1 mo." },
      { label: "Calls / mo.", value: "~110" },
      { label: "Page one", value: "2–6 mo." },
    ],
    ctaTitle: "Need lawyer leads from search?",
    ctaText:
      "We’ll build keywords for your practices and get the site to calls — the same way we did for Argument in Voronezh.",
  },

  skazka: {
    title: "SEO for Skazka store",
    client: "Skazka",
    industry: "Candy, gifts, tea",
    location: "Voronezh",
    period: "2016",
    metric: "~100",
    metricLabel: "calls per month from the web",
    summary:
      "SEO for a candy store in central Voronezh: 39 phrases, page one planned over 2–6 months, about 100 calls per month — candy, New Year tins, and a tea/coffee counter.",
    coverAlt: "Candy, New Year tins, and tea — Skazka assortment",
    services: ["SEO", "Content", "CTA"],
    intro:
      "Skazka is a well-known candy store in Voronezh’s old center, next to the factory. The counter holds candy and chocolate, New Year gifts in tin boxes, plus a tea and coffee section. Not a pastry shop: focus on candy retail and gift sets.",
    painLead:
      "Before us the site didn’t work for search: zero ranking phrases, no organic, no web clients. They needed rankings for “candy Voronezh,” New Year sets, and tea — and people calling and coming into the store.",
    challenge:
      "In ~1 month prepare SEO for candy and gift retail: keyword research, copy, CTAs. Page-one growth — planned over 2–6 months.",
    pains: [
      {
        title: "Zero visibility",
        text: "Zero ranking queries, no visits or web clients. Need prep from scratch.",
      },
      {
        title: "Tin-gift season",
        text: "New Year sets in tin boxes are peak demand. Without page-one rankings the store loses holiday traffic.",
      },
      {
        title: "Goal — store visits",
        text: "Not only traffic: calls and footfall to the downtown store. So CTAs, address, candy, gifts, and tea in view.",
      },
    ],
    journeyLead:
      "We built the keyword set and strategy, optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live; then rankings on 39 phrases, calls, and store visits.",
    approach: [
      "Keyword set and supporting semantics",
      "Competition and demand analytics (candy, tin sets, tea/coffee)",
      "Promotion strategy for candy retail and wholesale",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for a candy store",
        plain:
          "Someone searches “buy candy Voronezh” or “New Year gifts in a tin box” — and should see Skazka, not another shop.",
      },
      {
        jargon: "39 phrases in promotion",
        plain:
          "The client approved the list: candy, sets, New Year gifts, tea, geo. We hold page one on them and count calls and visits.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Phone, downtown address, and catalog in view — so from search you can call or come for candy and gifts right away.",
      },
    ],
    sections: [
      {
        title: "Candy, not pastries",
        body: "A store by the factory — candy, chocolate, premium sweets. SEO brought people looking for candy and sweet gifts in Voronezh, not custom baking.",
        image: "/images/cases/skazka/cover.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "The client approved 39 phrases. Report — page one on candy, New Year gifts, catalog, and related queries.",
        image: "/images/cases/skazka/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: visit growth. In the first two months — about 20 visitors a day, dozens of calls, and over a hundred store visits.",
        image: "/images/cases/skazka/traffic.webp",
        fit: "contain",
      },
      {
        title: "New Year sets and tea",
        body: "On the site — candy catalogs, holiday and New Year gifts (including tin boxes), and a separate Tea.Coffee block. A living seasonal storefront accent.",
        image: "/images/cases/skazka/tea.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/skazka/home-mid.webp",
        alt: "Skazka candy and Voronezh gift sets",
        caption: "Candy and gift sets",
      },
      {
        src: "/images/cases/skazka/picture-2026-2-sm.webp",
        alt: "Skazka New Year packaging and sets",
        caption: "New Year sets and packaging",
        fit: "contain",
      },
      {
        src: "/images/cases/skazka/newyear.webp",
        alt: "New Year gifts on skazkatd.ru",
        caption: "New Year gifts section",
      },
      {
        src: "/images/cases/skazka/candies.webp",
        alt: "Skazka candy catalog",
        caption: "Candy section on the site",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO — that is not the same as page one. Rankings were planned over 2–6 months with month-by-month growth; we held about 100 web calls monthly. In the first two months — dozens of calls and hundreds of store visits from search.",
    highlights: [
      "SEO for a candy and gift store in central Voronezh",
      "39 phrases · prep ~1 mo.",
      "Page one — candy, tin sets, tea",
      "≈100 web calls per month",
      "First 2 mo.: ~20 visits/day · 140 to the store",
      "Page one planned 2–6 mo. (month-by-month growth)",
      "skazkatd.ru: candy, gifts, tea/coffee",
    ],
    results: [
      { label: "Phrases", value: "39" },
      { label: "Prep", value: "~1 mo." },
      { label: "Calls / mo.", value: "~100" },
      { label: "Page one", value: "2–6 mo." },
    ],
    ctaTitle: "Need retail footfall from search?",
    ctaText:
      "We’ll build keywords for candy, gifts, and tea — and get the site to calls and visits, the same way we did for Skazka.",
  },

  barokko: {
    title: "SEO for Barokko curtain studio",
    client: "Barokko",
    industry: "Curtain design and sewing",
    location: "Voronezh",
    period: "2016",
    metric: "~100",
    metricLabel: "calls per month from the web",
    summary:
      "SEO for a curtain design studio: 70 phrases, page one planned over 2–6 months, about 100 calls per month — high-intent queries for custom sewing, showrooms, and rods in Voronezh. Site live on barokko36.ru.",
    coverAlt: "barokko36.ru homepage — custom curtains turnkey",
    services: ["SEO", "Content", "CTA"],
    intro:
      "Barokko is a design studio and curtain showrooms in Voronezh: custom sewing, rods, projects for flats, houses, and commercial spaces. In design niches competition is high — the bet was search with high-intent queries.",
    painLead:
      "Classic advertising in curtain design is expensive. In search people already look for “curtain showroom Voronezh,” “custom curtain sewing,” Roman rods — and are ready to call. Before us — zero ranking phrases, no organic, no web clients.",
    challenge:
      "In ~1 month prepare SEO in a competitive textile-design niche: keyword research, copy, CTAs. Page-one growth — planned over 2–6 months.",
    pains: [
      {
        title: "Expensive “classics” vs search",
        text: "Offline ads hit wide. Search brings people who already need sewing, a showroom, or rods.",
      },
      {
        title: "Zero visibility",
        text: "Zero ranking queries, no visits or web clients. Need a launch from scratch.",
      },
      {
        title: "Goal — orders, not a brochure",
        text: "What matters is calling and placing an order. So CTAs and clear service and geo pages.",
      },
    ],
    journeyLead:
      "We built the keyword set and strategy, optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live; then rankings on 70 phrases and a steady flow of calls and orders.",
    approach: [
      "Keyword set and supporting semantics",
      "Competition and demand analytics in curtains/rods",
      "Promotion strategy for the studio and showrooms",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for a curtain studio",
        plain:
          "Someone searches “custom curtains Voronezh” or “Roman rods” — and should land with you, not the neighbouring showroom.",
      },
      {
        jargon: "70 phrases in promotion",
        plain:
          "The client approved the set: showrooms, sewing, rooms, rods, geo. We hold page one on them and count calls and orders.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Phone and measure/design request in view — so from search you can invite a designer right away.",
      },
    ],
    sections: [
      {
        title: "Curtain design — a competitive niche",
        body: "Many players in textile window dressing. The job — take high-intent demand from search: showrooms, sewing, rods, commercial projects.",
        image: "/images/cases/barokko/projects.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "The client approved 70 phrases. Report — page one on curtain showroom, custom sewing, Roman rods, and room/property queries in Voronezh.",
        image: "/images/cases/barokko/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: visit growth. In the first two months — about 25 visitors a day, dozens of calls and placed orders.",
        image: "/images/cases/barokko/traffic.webp",
        fit: "contain",
      },
      {
        title: "Live site",
        body: "barokko36.ru is still live: turnkey curtains, projects, showrooms, motorized rods, and designer visits in the region.",
        image: "/images/cases/barokko/live.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/barokko/project-1.webp",
        alt: "Project — house in Berezka community",
        caption: "Case: house in Berezka community",
      },
      {
        src: "/images/cases/barokko/project-2.webp",
        alt: "Project — residential complex in Borisoglebsk",
        caption: "Case: residential complex in Borisoglebsk",
      },
      {
        src: "/images/cases/barokko/showroom.webp",
        alt: "Barokko showrooms in Voronezh",
        caption: "Showrooms and production",
      },
      {
        src: "/images/cases/barokko/electro.webp",
        alt: "Motorized rods on the Barokko site",
        caption: "Motorized rods",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO — that is not the same as page one. Rankings were planned over 2–6 months with month-by-month growth; we held about 100 web calls monthly. In the first two months — dozens of calls and orders. barokko36.ru is still live.",
    highlights: [
      "Curtain-studio SEO in a competitive niche",
      "70 phrases · prep ~1 mo.",
      "Page one — showrooms, sewing, rods, geo",
      "≈100 web calls per month",
      "First 2 mo.: ~25 visits/day · orders",
      "Page one planned 2–6 mo. (month-by-month growth)",
      "Site on barokko36.ru is live now",
    ],
    results: [
      { label: "Phrases", value: "70" },
      { label: "Prep", value: "~1 mo." },
      { label: "Calls / mo.", value: "~100" },
      { label: "Page one", value: "2–6 mo." },
    ],
    ctaTitle: "Need custom-curtain leads from search?",
    ctaText:
      "We’ll build keywords for showrooms and sewing — the same way we did for Barokko design studio in Voronezh.",
  },
};
