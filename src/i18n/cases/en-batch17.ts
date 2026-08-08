import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-17 cases (SEO + ads).
 * Prep ≠ TOP-10 — keep timelines split.
 * Soften Yandex/Direct/Metrika; $ not ₽; PRIME not ПРАЙМ.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch17: Record<string, Partial<CaseStudy>> = {
  pilomaterialov: {
    title: "SEO for Veles lumber yard",
    client: "Veles",
    industry: "Lumber",
    location: "Voronezh",
    period: "since 2016",
    metric: "~90",
    metricLabel: "yard inquiries per month",
    summary:
      "SEO for Veles lumber yard: site from scratch to our specs, 30 phrases in a tough niche (“board,” “timber”), prep ~55 days, page one planned 2–6 months. About 90 yard inquiries monthly.",
    coverAlt: "Lumber warehouse — boards and timber",
    services: ["SEO", "Site specs", "Content", "CTA"],
    intro:
      "Veles is a lumber yard in Voronezh. City competition is strong: to overtake neighbors they needed search visibility. There was no site — the main blocker, which we turned into an advantage: we built a resource for SEO from scratch.",
    painLead:
      "Queries like “buy board” and “buy timber” get thousands a month; page one is held by strong sites. Without their own site there was nothing to promote. Needed: specs for developers, acceptance, and SEO for flow to the yard.",
    challenge:
      "In ~55 days accept the site and prepare SEO (30 phrases). Page-one growth — planned over 2–6 months; by ~3 months after site launch — a solid share of the keyword set on page one; inquiries and cubic meters grow month by month.",
    pains: [
      {
        title: "Tough SERP competition",
        text: "“Buy timber” and “buy board” are high-frequency. Page one isn’t elastic: without a strong site and keyword set the yard stays invisible.",
      },
      {
        title: "No site",
        text: "The main blocker wasn’t competitors — it was no platform. With no site, SEO has nowhere to land.",
      },
      {
        title: "Zero visibility",
        text: "Zero ranking queries, no organic or web sales. Start from scratch after site acceptance.",
      },
    ],
    journeyLead:
      "We picked a contractor, wrote specs, and monitored the build. In parallel — keywords. Accepted the site, added calculators and CTAs, started optimization. After ~55 days the project was live; then rankings on 30 phrases and clients to the yard.",
    approach: [
      "Developer monitoring, designer pick, specs, and site acceptance",
      "Keywords and competition analysis → 30 phrases",
      "SEO strategy for high-frequency lumber queries",
      "Optimization from scratch, on-page work, SEO copy",
      "Article section, calculators, and CTAs",
      "Analytics on rankings, traffic, inquiries, and m³ sales",
    ],
    plainSpeak: [
      {
        jargon: "Site first, then page one",
        plain:
          "Without a site there was nothing to promote. We built a storefront to SEO specs — and ran 30 phrases on it.",
      },
      {
        jargon: "30 phrases · prep ~55 days",
        plain:
          "A keyword set for board, timber, and related demand. In almost two months the site and SEO were live; steady page one — planned 2–6 months.",
      },
      {
        jargon: "Cubic meters, not “traffic”",
        plain:
          "We counted yard inquiries and sold m³ of wood — so you see search feeding the warehouse.",
      },
    ],
    sections: [
      {
        title: "A lumber yard in the city",
        body: "Voronezh competition is dense. SEO must bring the buyer to Veles — not a third-party catalog.",
        image: "/images/cases/pilomaterialov/cover.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "The client approved 30 phrases. By ~3 months after site creation — a solid share of main competitive queries on page one (within the planned 2–6 months).",
        image: "/images/cases/pilomaterialov/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits by day",
        body: "Traffic grew every month. In the first two months — about 34 visits/day, 62 office inquiries, 730 m³ of wood sold.",
        image: "/images/cases/pilomaterialov/traffic.webp",
        fit: "contain",
      },
      {
        title: "Who comes to the site",
        body: "Audience-wise — target clients in an older age group: people who actually buy lumber, not “accidental clicks.”",
        image: "/images/cases/pilomaterialov/audience.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/pilomaterialov/lumber-1.webp",
        alt: "Lumber at the warehouse",
        caption: "Assortment",
      },
      {
        src: "/images/cases/pilomaterialov/lumber-2.webp",
        alt: "Edged board and timber",
        caption: "Board and timber",
      },
      {
        src: "/images/cases/pilomaterialov/lumber-3.webp",
        alt: "Finished boards",
        caption: "Finished board",
      },
      {
        src: "/images/cases/pilomaterialov/thumb.webp",
        alt: "Lumber case preview",
        caption: "From archive",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In ~55 days we prepared the site and SEO — that is not the same as page one. Rankings were planned over 2–6 months; by ~3 months after site launch — a solid share of 30 phrases on page one. Already in the first two months: ~34 visits/day, 62 inquiries, 730 m³. Then — about 90 yard inquiries monthly.",
    highlights: [
      "SEO for Veles lumber yard · Voronezh",
      "30 phrases · prep ~55 days (site + SEO)",
      "Page one planned 2–6 mo. · by ~3 mo. — keyword-set share on page one",
      "Specs and oversight of outside site build",
      "Before us: 0 ranking phrases · 0 organic · 0 web sales",
      "First 2 mo.: ~34 visits/day · 62 inquiries · 730 m³",
      "≈90 yard inquiries per month",
    ],
    results: [
      { label: "Phrases", value: "30" },
      { label: "Prep", value: "~55 days" },
      { label: "Yard / mo.", value: "~90" },
      { label: "Page one", value: "2–6 mo." },
    ],
    ctaTitle: "Need lumber leads from search?",
    ctaText:
      "We’ll build the site and keywords for a yard — the same way we did for Veles in Voronezh.",
  },

  "ehk-kovanyie": {
    title: "Google Ads for EHK — wrought iron",
    client: "EHK / Artistic wrought iron",
    industry: "Wrought-iron products",
    location: "Voronezh / 36 regions",
    period: "since 2016",
    metric: "×4",
    metricLabel: "ad traffic growth",
    summary:
      "Google Ads for EHK artistic wrought-iron store: launch in 2 days, traffic ×4, leading ad slots at low CPC, about 100 inquiries. Site — vrn-ehk.ru.",
    coverAlt: "EHK wrought-iron products — artistic forging",
    services: ["Google Ads", "Display network", "Analytics", "Landing pages"],
    intro:
      "Artistic Wrought Iron (EHK) — 15+ years of production, factory partnerships, wide assortment on the site. They came for Google Ads: needed to match ad traffic precisely, build an analytics funnel, and bring target audience into the store.",
    painLead:
      "Ads already ran but weakly: CTR about 9%, visits low, almost no channel profit. Ads and landings missed the query; EHK brand guidelines weren’t reflected in creatives.",
    challenge:
      "In 2 days relaunch campaigns: raise CTR, lower CPC, win leading ad slots, and steadily feed the store with inquiries and completed orders.",
    pains: [
      {
        title: "Low CTR and a weak channel",
        text: "CTR ~9%, modest visits, no Google Ads profit. Ads burned budget without a funnel.",
      },
      {
        title: "Past campaign mistakes",
        text: "Needed to clean campaign issues, pick landings, and style ads to the EHK brand kit.",
      },
      {
        title: "Need a funnel, not “clicks”",
        text: "Analytics goals: reach checkout and successful order — otherwise you don’t know ads sell wrought iron.",
      },
    ],
    journeyLead:
      "We audited the site and past ads, built keywords, studied the EHK market kit. Rebuilt ads, landings, sitelinks, business card, and display, duplicated campaigns across 36 regions. Launch — in 2 days.",
    approach: [
      "Full site audit and error breakdown by team",
      "Keywords, competition and demand analysis for wrought iron",
      "Ad creatives to EHK brand / market kit",
      "A/B ads, pressure on weak spots in leading placement",
      "Landings, sitelinks, virtual business card, display creatives",
      "Campaign copies for 36 regions, bids, analytics goals",
    ],
    plainSpeak: [
      {
        jargon: "Launch in 2 days",
        plain:
          "We didn’t wait months: fixed campaigns, tied landings, and switched ads on — traffic came immediately.",
      },
      {
        jargon: "Traffic ×4",
        plain:
          "Ad visits grew about fourfold vs the baseline — not “a couple more clicks.”",
      },
      {
        jargon: "Checkout completed",
        plain:
          "We counted more than site landings: checkout starts and successful wrought-iron orders.",
      },
    ],
    sections: [
      {
        title: "Wrought iron, not “just metal”",
        body: "Artistic forging — stairs, gates, elements. Ads must lead to the right category and order — not a third-party catalog.",
        image: "/images/cases/ehk-kovanyie/cover.webp",
      },
      {
        title: "Funnel and conversion",
        body: "Analytics goals: from visit to checkout page and successful order. In the first two months — 172 checkout starts, 56 successful orders.",
        image: "/images/cases/ehk-kovanyie/conv.webp",
        fit: "contain",
      },
      {
        title: "Visits ×4",
        body: "After relaunch ad traffic grew about fourfold. Peak in the early months — about 443 visits a day.",
        image: "/images/cases/ehk-kovanyie/traffic.webp",
        fit: "contain",
      },
      {
        title: "CTR and leading placement",
        body: "After a month — CTR up; ads on competitive queries took leading placement at low CPC.",
        image: "/images/cases/ehk-kovanyie/ctr.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/ehk-kovanyie/serp.webp",
        alt: "EHK ad in search results",
        caption: "Leading placement",
        fit: "contain",
      },
      {
        src: "/images/cases/ehk-kovanyie/forge-2.webp",
        alt: "Wrought-iron piece",
        caption: "Products",
      },
      {
        src: "/images/cases/ehk-kovanyie/thumb.webp",
        alt: "Wrought-iron case preview",
        caption: "From archive",
        fit: "contain",
      },
    ],
    outcomeLead:
      "In 2 days we relaunched Google Ads. Traffic ×4; in the first two months — ~443 visits/day, 172 checkout starts, 56 successful orders. At distance — about 100 store inquiries. Site: vrn-ehk.ru.",
    highlights: [
      "Google Ads for EHK artistic wrought iron",
      "Launch in 2 days · Google Ads + display",
      "Ad traffic ×4",
      "Before us: CTR ~9% · weak visits · 0 channel profit",
      "First 2 mo.: ~443 visits/day · 172 to checkout · 56 orders",
      "≈100 store inquiries · leading placement at low CPC",
      "Campaigns in 36 regions · live vrn-ehk.ru",
    ],
    results: [
      { label: "Launch", value: "2 days" },
      { label: "Traffic", value: "×4" },
      { label: "Orders (2 mo.)", value: "56" },
      { label: "Inquiries", value: "≈100" },
    ],
    ctaTitle: "Need wrought-iron orders from Google Ads?",
    ctaText:
      "We’ll rebuild ads and the funnel — the same way we did for EHK / vrn-ehk.ru.",
  },

  jeep: {
    title: "SEO for a Jeep dealership in Voronezh",
    client: "Jeep dealer / Motor Land",
    industry: "Official Jeep dealer",
    location: "Voronezh",
    period: "since 2014",
    metric: "100+",
    metricLabel: "phrases on page one of search",
    summary:
      "SEO and site refresh for a Jeep dealer: 417 tech bugs cleaned, new design to brand guidelines, 100+ phrases, prep ~42 days, page one planned 2–6 months. Plus Google Ads — about 24 showroom inquiries per month.",
    coverAlt: "Jeep — dealer model lineup in Voronezh",
    services: ["SEO", "Website", "Google Ads", "CTA"],
    intro:
      "Jeep is premium that marketers rate among the hardest to promote — especially in a relatively small region and a tough economy. In 2014 the Voronezh dealer asked us to bring clients into the showroom from search and ads.",
    painLead:
      "Audit showed: outdated design, weak UX, no unique content, unstable hosting, and hundreds of code errors. Without a proper site and keyword set a premium brand doesn’t compete in the SERP.",
    challenge:
      "In ~42 days fix tech, refresh design to Jeep brand guidelines, and prepare SEO (100+ phrases) plus Google Ads. Page-one growth — planned over 2–6 months; showroom inquiries and sales grow with visibility.",
    pains: [
      {
        title: "Premium is hard to promote",
        text: "Jeep is an expensive segment. In a downturn and a small region, without a strong site and precise keywords the showroom loses high-intent buyers.",
      },
      {
        title: "417 code errors",
        text: "Code and hosting were failing: long server response, unstable work. SEO hit a tech wall.",
      },
      {
        title: "Outdated design and content",
        text: "Awkward navigation, no unique copy, Jeep brand kit not reflected — little trust in the dealer.",
      },
    ],
    journeyLead:
      "Full audit, error breakdown by team, studied Jeep market kit. Rolled out new CMS design, cleaned code, built keywords, copy, CTAs, and Google Ads. After ~42 days the project was live; then rankings on 100+ phrases and showroom visits.",
    approach: [
      "Full site audit and cleanup of 417 tech bugs",
      "New design and structure to Jeep brand guidelines",
      "Keywords → 100+ phrases, competition analysis",
      "On-page optimization, SEO copy, article section, CTAs",
      "Setup and launch of Google Ads",
      "Analytics on rankings, traffic, inquiries, and sales",
    ],
    plainSpeak: [
      {
        jargon: "Fixed the site first",
        plain:
          "417 code errors and bad hosting hurt people and search. We fixed tech and design — then ran SEO and ads.",
      },
      {
        jargon: "100+ phrases · prep ~42 days",
        plain:
          "A large keyword set for the dealer and models. In about a month and a half the site and channels were live; steady page one — another planned 2–6 months.",
      },
      {
        jargon: "Inquiries and sales",
        plain:
          "We counted more than visits: calls/showroom visits and Jeeps actually sold.",
      },
    ],
    sections: [
      {
        title: "Jeep in Voronezh",
        body: "Premium SUVs: site and search must lead to the dealer showroom — not a third-party aggregator.",
        image: "/images/cases/jeep/cover.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "100+ phrases in the keyword set. Report — ranking dynamics; page-one growth — within the planned 2–6 months after prep.",
        image: "/images/cases/jeep/pos.webp",
        fit: "contain",
      },
      {
        title: "Visits by day",
        body: "Traffic grew every month. In the first two months — about 258 visits/day, 18 showroom inquiries, 8 cars sold.",
        image: "/images/cases/jeep/traffic.webp",
        fit: "contain",
      },
      {
        title: "New dealer design",
        body: "Site refreshed to Jeep brand guidelines: modern storefront, clear navigation, CTAs for booking and call.",
        image: "/images/cases/jeep/design.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/jeep/logo.webp",
        alt: "Jeep logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/jeep/serp.webp",
        alt: "Jeep site in search results",
        caption: "SERP",
        fit: "contain",
      },
      {
        src: "/images/cases/jeep/car-2.webp",
        alt: "Jeep on the dealer site",
        caption: "Storefront",
      },
    ],
    outcomeLead:
      "In ~42 days we prepared the site, SEO, and Google Ads — that is not the same as page one. Rankings were planned over 2–6 months; the 100+ phrase keyword set locked onto page one of search. Already in the first two months: ~258 visits/day, 18 showroom inquiries, 8 sales. Then — about 24 showroom inquiries monthly. Site: jeepvrn.ru.",
    highlights: [
      "SEO + site + Google Ads for Jeep dealer · Voronezh",
      "100+ phrases · prep ~42 days",
      "Page one planned 2–6 mo. (month-by-month growth)",
      "417 tech bugs cleaned · design to Jeep brand kit",
      "Before us: ~12 visits · 0 web profit",
      "First 2 mo.: ~258 visits/day · 18 inquiries · 8 sales",
      "≈24 showroom inquiries per month · live jeepvrn.ru",
    ],
    results: [
      { label: "Phrases", value: "100+" },
      { label: "Prep", value: "~42 days" },
      { label: "Showroom / mo.", value: "~24" },
      { label: "Page one", value: "2–6 mo." },
    ],
    ctaTitle: "Need showroom inquiries for a premium brand?",
    ctaText:
      "We’ll fix the site and build SEO with Google Ads — the same way we did for Jeep in Voronezh.",
  },
};
