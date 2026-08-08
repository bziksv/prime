import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-13 SEO cases.
 * Prep ≠ TOP-10 — keep timelines split.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch13: Record<string, Partial<CaseStudy>> = {
  mychery: {
    title: "SEO for Chery dealership in Voronezh",
    client: "Chery / Motor Land",
    industry: "Chery dealership",
    location: "Voronezh",
    period: "2016",
    metric: "~240",
    metricLabel: "showroom visits per month from search",
    summary:
      "SEO for a Chery dealership in Voronezh: 98 phrases, prep ~1 month, page-one growth planned over 2–6 months — about 240 showroom visits monthly in tough mass-market competition.",
    coverAlt: "Chery — dealership model range",
    services: ["SEO", "Content", "CTA"],
    intro:
      "Chery is a mass segment with high competition: not only Voronezh dealers fight for page one, but Moscow sites with large budgets too. The job — win the SERP on dealer and commercial queries and bring people into the showroom.",
    painLead:
      "In mass market demand is big — and so are sellers. Without strong rankings for “Chery Voronezh,” “official dealer,” “buy Chery,” the flow goes to competitors. Before us — zero ranking phrases, no organic, no web clients.",
    challenge:
      "In ~1 month prepare SEO for a Chery dealer: keyword research, copy, CTAs. Page-one growth — planned over 2–6 months, with month-by-month ranking gains.",
    pains: [
      {
        title: "War for mass market",
        text: "Affordable cars = many players. Regional dealers and Moscow sites with heavy budgets sit side by side in the SERP.",
      },
      {
        title: "Zero visibility",
        text: "Zero ranking queries, no visits or web clients. Need a launch from scratch.",
      },
      {
        title: "Goal — showroom visits",
        text: "Not only traffic: calls and coming into the showroom. So CTAs and clear dealer landings.",
      },
    ],
    journeyLead:
      "We built the keyword set (98 phrases), strategy, optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live. Rankings and traffic grew as planned over 2–6 months.",
    approach: [
      "Keyword set and supporting semantics",
      "Competition analytics (including Moscow players)",
      "Promotion strategy for the dealer and models",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for a Chery dealership",
        plain:
          "Someone searches “Chery Voronezh” or “buy Chery” — and should land with you, not a Moscow site or another showroom.",
      },
      {
        jargon: "Prep ≠ page one",
        plain:
          "In ~1 month we get the site ready and start work. Page-one growth is planned over 2–6 months — rankings or traffic grow each month.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Phone, credit, booking, and contacts in view — so from search you can get to a visit right away.",
      },
    ],
    sections: [
      {
        title: "Mass market and a tough SERP",
        body: "Chery queries in Voronezh are a battlefield of regional and national players. The bet — local dealer page one and showroom visits.",
        image: "/images/cases/mychery/cover.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "The client approved 98 phrases. Page one built as planned over 2–6 months: first part of the set, then the rest — with month-by-month growth.",
        image: "/images/cases/mychery/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: visit growth after launch. In the first months — about 160 visitors a day and calls; sales quota ×2.",
        image: "/images/cases/mychery/traffic.webp",
        fit: "contain",
      },
      {
        title: "Chery in Voronezh today",
        body: "The brand is still present in the city. Current dealer site — chery-vrn.ru (models, credit, booking).",
        image: "/images/cases/mychery/live.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/mychery/car1.webp",
        alt: "Chery at the dealership",
        caption: "Model context",
      },
      {
        src: "/images/cases/mychery/logo.webp",
        alt: "Chery logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/mychery/showroom.webp",
        alt: "Dealership",
        caption: "Dealer context",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO for work — that is not the same as page one. Rankings were planned over 2–6 months with month-by-month growth. We held about 240 showroom visits monthly; in the start period — strong traffic and calls, sales double the plan.",
    highlights: [
      "Chery SEO in competitive mass market",
      "98 phrases · prep ~1 mo.",
      "Page one planned 2–6 mo. (month-by-month growth)",
      "≈240 showroom visits per month",
      "First months: ~160 visits/day",
      "Sales quota ×2 in the start period",
    ],
    results: [
      { label: "Phrases", value: "98" },
      { label: "Prep", value: "~1 mo." },
      { label: "Page one", value: "2–6 mo." },
      { label: "Visits / mo.", value: "~240" },
    ],
    ctaTitle: "Need showroom visits from search?",
    ctaText:
      "We’ll build keywords for the dealer and models — the same way we did for Chery in Voronezh.",
  },

  greenstroy36: {
    title: "SEO for GreenStroy equipment rental",
    client: "GreenStroy",
    industry: "Special equipment rental / earthworks",
    location: "Voronezh",
    period: "since 2014",
    metric: "3–5",
    metricLabel: "clients per month from search",
    summary:
      "SEO for special-equipment rental in Voronezh: 68 phrases, prep ~1 month, page-one growth planned over 2–6 months — earthworks, demolition, trenches, soil removal.",
    coverAlt: "GreenStroy — earthworks of any complexity",
    services: ["SEO", "Content", "CTA"],
    intro:
      "Voronezh is building fast — cranes on the skyline, and with them demand for equipment rental and earthworks. In late 2014 GreenStroy went online; with other channels it took leading positions in the niche.",
    painLead:
      "Demand for excavator rental and related services grows with construction — and so does search competition. Before us — zero ranking phrases, no organic, no web clients. They needed rankings on commercial queries and rental requests.",
    challenge:
      "In ~1 month prepare SEO for equipment rental: keyword research, copy, CTAs. Page-one growth — planned over 2–6 months, with month-by-month ranking gains.",
    pains: [
      {
        title: "Growing market = growing competition",
        text: "City construction drives demand for equipment — and the number of players in the SERP. Without strong SEO, requests go to competitors.",
      },
      {
        title: "Zero visibility",
        text: "Zero ranking queries, no visits or web clients. Need a launch from scratch.",
      },
      {
        title: "Goal — equipment rental",
        text: "Not “traffic”: calls and machines rented out. So CTAs and clear service pages.",
      },
    ],
    journeyLead:
      "We built the keyword set and strategy, optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live. Rankings and traffic grew as planned over 2–6 months.",
    approach: [
      "Keyword set and supporting semantics",
      "Competition and demand analytics in special equipment",
      "Promotion strategy for rental and earthworks",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for equipment rental",
        plain:
          "A foreman searches “trench digging,” “soil removal,” or “building demolition” — and should call you, not a page-one competitor.",
      },
      {
        jargon: "Prep ≠ page one",
        plain:
          "In ~1 month we get the site ready and start work. Page-one growth is planned over 2–6 months — rankings or traffic grow each month.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Phone and rental request in view — so from search you can book equipment right away.",
      },
    ],
    sections: [
      {
        title: "Equipment for a growing city",
        body: "New districts = steady demand for excavators, soil removal, site prep. SEO’s job — bring that demand to the GreenStroy site.",
        image: "/images/cases/greenstroy36/cover.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "The client approved 68 phrases. Page one built as planned over 2–6 months: first part of the set, then the rest — with month-by-month growth.",
        image: "/images/cases/greenstroy36/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report: visit growth after launch. In the first months — about 42 visitors a day and equipment rented out; search clients — a few per month.",
        image: "/images/cases/greenstroy36/traffic.webp",
        fit: "contain",
      },
      {
        title: "Equipment at work",
        body: "Excavators and earthworks — what people search for. Site and keywords tied to the real fleet and services.",
        image: "/images/cases/greenstroy36/excavator.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/greenstroy36/excavator2.webp",
        alt: "GreenStroy excavator",
        caption: "Special equipment",
      },
      {
        src: "/images/cases/greenstroy36/logo.webp",
        alt: "GreenStroy logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/greenstroy36/logo-client.webp",
        alt: "GreenStroy mark",
        caption: "Brand mark",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO for work — that is not the same as page one. Rankings were planned over 2–6 months with month-by-month growth. We held 3–5 search clients per month. With other channels GreenStroy took leading positions in the niche.",
    highlights: [
      "Special-equipment rental SEO in Voronezh",
      "68 phrases · prep ~1 mo.",
      "Page one planned 2–6 mo. (month-by-month growth)",
      "3–5 search clients per month",
      "First months: ~42 visits/day, equipment rented",
      "Web channel started late 2014",
    ],
    results: [
      { label: "Phrases", value: "68" },
      { label: "Prep", value: "~1 mo." },
      { label: "Page one", value: "2–6 mo." },
      { label: "Clients / mo.", value: "3–5" },
    ],
    ctaTitle: "Need equipment-rental leads from search?",
    ctaText:
      "We’ll build keywords for earthworks and special equipment — the same way we did for GreenStroy in Voronezh.",
  },

  remont: {
    title: "SEO for Inzhener-servis Samsung service",
    client: "Inzhener-servis",
    industry: "Appliance repair",
    location: "Voronezh",
    period: "since 2016",
    metric: "~300",
    metricLabel: "clients per month from search",
    summary:
      "SEO for an authorized service: 135 phrases, prep ~1 month, page one planned 2–6 months on fridge and washing-machine repair, about 300 clients per month from the web.",
    coverAlt: "Inzhener-servis — authorized service center",
    services: ["SEO", "Content", "CTA"],
    intro:
      "Repairing expensive appliances is a competitive niche: whoever holds page one for “fridge repair” and “washing machine repair” gets the request flow. Inzhener-servis (authorized Samsung service) came for search visibility.",
    painLead:
      "Before us — zero ranking phrases, no organic, no web clients. Goal: win the SERP on commercial appliance-repair queries and bring people into the service.",
    challenge:
      "In ~1 month prepare SEO for appliance repair: keyword research, copy, CTAs. Page-one growth — planned over 2–6 months.",
    pains: [
      {
        title: "Clients find a tech in search",
        text: "Fridge or washer breaks — they go to Google. Without page-one rankings on the keys, requests go to competitors.",
      },
      {
        title: "Zero visibility",
        text: "Zero ranking queries, visits and web clients = 0. Need a launch from scratch.",
      },
      {
        title: "Goal — service inquiries",
        text: "Not “traffic for traffic’s sake”: calls and visits to the service center. So CTAs and clear service pages.",
      },
    ],
    journeyLead:
      "We built the keyword set and strategy, optimized the site, wrote copy and articles, added CTAs. In ~1 month prep was done and the project was live; then rankings on 135 phrases and a steady client flow.",
    approach: [
      "Keyword set and supporting semantics",
      "Competition and demand analytics in appliance repair",
      "Promotion strategy for high-frequency commercial queries",
      "Site optimization from scratch + on-page work",
      "Sales SEO copy and an article section",
      "CTAs, usability, and conversion analytics",
    ],
    plainSpeak: [
      {
        jargon: "SEO for an appliance service",
        plain:
          "Someone searches “fridge repair Voronezh” or “Samsung washing machine repair” — and should call you, not a neighbouring page-one service.",
      },
      {
        jargon: "135 phrases in promotion",
        plain:
          "The client approved the set: fridges, washers, microwaves, vacuums, cookers, brands. We hold page one on them and count inquiries.",
      },
      {
        jargon: "CTAs on the site",
        plain:
          "Phone and technician visit request in view — so from search you can call an engineer right away.",
      },
    ],
    sections: [
      {
        title: "Service for household appliances",
        body: "Authorized center: washing machines, fridges, and other appliances. SEO tied to real services and brands people search in Voronezh.",
        image: "/images/cases/remont/cover.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "The client approved 135 phrases. Report — page one on fridge repair, washers (Samsung, Bosch, AEG), microwaves, vacuums, cookers, and ovens.",
        image: "/images/cases/remont/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits after start",
        body: "Day-by-day report (weekends lighter). In the first two months — about 80 visitors a day, 112 calls, and 98 service inquiries.",
        image: "/images/cases/remont/traffic.webp",
        fit: "contain",
      },
      {
        title: "Electronics repair",
        body: "Beyond large appliances — fine board work. Keywords and pages cover that demand too.",
        image: "/images/cases/remont/tech.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/remont/washer.webp",
        alt: "Inzhener-servis technician at a washing machine",
        caption: "Home visit and repair",
      },
    ],
    outcomeLead:
      "In ~1 month we prepared SEO — that is not the same as page one. Rankings were planned over 2–6 months with month-by-month growth; we held about 300 web clients monthly. In the first two months — dozens of calls and service inquiries. 100+ phrases on page one.",
    highlights: [
      "Authorized appliance-service SEO in Voronezh",
      "135 phrases · prep ~1 mo.",
      "Page one — fridges, washers, Samsung brands and more",
      "≈300 web clients per month",
      "First 2 mo.: ~80 visits/day · 112 calls · 98 to service",
      "Page one planned 2–6 mo. (month-by-month growth)",
      "100+ phrases on page one",
    ],
    results: [
      { label: "Phrases", value: "135" },
      { label: "Prep", value: "~1 mo." },
      { label: "Clients / mo.", value: "~300" },
      { label: "Page one", value: "2–6 mo." },
    ],
    ctaTitle: "Need service leads from search?",
    ctaText:
      "We’ll build keywords for appliance repair — the same way we did for Inzhener-servis in Voronezh.",
  },
};
