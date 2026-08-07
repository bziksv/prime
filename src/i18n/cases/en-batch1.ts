import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for featured batch-1 cases.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEn: Record<string, Partial<CaseStudy>> = {
  "polimer-seo": {
    title: "SEO for Polimer online store",
    client: "Polimer",
    industry: "Engineering plumbing",
    location: "Voronezh",
    period: "since 2014",
    metric: "3000+",
    metricLabel: "phrases in TOP",
    summary:
      "SEO for Polimer plumbing store since 2014: started with a 393-phrase core, prep ~1.5 months, TOP planned over 2–6 months. Now 3000+ phrases in TOP. Orders and payments from search within the first 2 months. Storefront rebuild is a separate case.",
    coverAlt: "polimer-vrn.ru homepage — plumbing catalog",
    services: ["SEO", "Content", "CTA", "Analytics"],
    intro:
      "Polimer LLC is a subsidiary of Metallinvest Plus: wholesale and retail of engineering plumbing and building materials in Voronezh. In 2014 marketing came for search — they needed the internet as a channel on a level with the rest. We still run SEO: already 3000+ phrases in TOP. Later we improved the Bitrix storefront — that is a separate case.",
    painLead:
      "High-frequency, competitive niche: boilers, pipes, radiators, mixers. Before us — zero phrases in TOP, no organic traffic or online orders. The client approved a starting core of 393 queries aimed at TOP-10 in search results; then we grew the core and visibility.",
    challenge:
      "In ~1.5 months prepare SEO in a tough e-com niche: semantics, copy, CTAs, analytics. Climbing into TOP-10 is planned over 2–6 months; first orders and payments already during position growth. Long horizon — expand the core and hold visibility.",
    pains: [
      {
        title: "High frequency and competition",
        text: "Plumbing in search is a dense SERP. Without a large core, content, and CTAs the store never reaches the cart.",
      },
      {
        title: "Zero visibility",
        text: "0 queries in TOP, traffic and orders from the web = 0. Start — prep from scratch for an agreed 393-phrase core.",
      },
      {
        title: "Sales needed, not “traffic”",
        text: "Marketing measured checkout and payment. So CTAs and path-to-purchase UX matter as much as rankings.",
      },
    ],
    journeyLead:
      "Built semantics and add-on phrases, mapped competition, locked the strategy. Then — on-page from scratch, copy, articles, CTAs, and analytics fixes. After ~1.5 months the project was live; positions grew over 2–6 months, we expanded the core — now 3000+ phrases in TOP.",
    approach: [
      "Starting semantic core and add-on semantics → 393 phrases",
      "Competitor and demand analysis in plumbing",
      "Strategy: rankings + competitor weak spots in TOP-10",
      "Site optimization from scratch and on-page work",
      "Sales-focused SEO copy and an article section",
      "CTAs, usability, and conversion analysis to order/payment; years of core expansion",
    ],
    plainSpeak: [
      {
        jargon: "Starting core 393 → 3000+ in TOP",
        plain:
          "In 2014 we agreed 393 queries for boilers, pipes, radiators. Then we grew the core — now more than three thousand phrases in TOP.",
      },
      {
        jargon: "Prep ~1.5 mo. ≠ TOP",
        plain:
          "In a month and a half we got SEO ready for work. Steady TOP on the starting core — another planned 2–6 months of ranking growth.",
      },
      {
        jargon: "Order and payment from search",
        plain:
          "We counted more than visits: who placed an order and who paid online — so you see the channel actually sells.",
      },
    ],
    sections: [
      {
        title: "Plumbing — a high-frequency niche",
        body: "Polimer sells engineering plumbing and building materials. SEO was tied to commercial store queries: so buyers find the catalog in Google Search / SERP, not only at competitors.",
        image: "/images/cases/polimer-seo/boiler.webp",
      },
      {
        title: "Rankings on the core",
        body: "Start — 393 agreed phrases. Reports show ranking dynamics; now 3000+ queries in TOP.",
        image: "/images/cases/polimer-seo/pos.webp",
        fit: "contain",
      },
      {
        title: "Another ranking cut",
        body: "Extra core report — how visibility grew month by month after prep.",
        image: "/images/cases/polimer-seo/pos2.webp",
        fit: "contain",
      },
      {
        title: "Traffic by day",
        body: "Daily report (weekends lighter). In the first two months — about 84 visitors per day; 28 placed an order, 17 paid online.",
        image: "/images/cases/polimer-seo/traffic.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/polimer-seo/logo.webp",
        alt: "Polimer logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/polimer-seo/pipes.webp",
        alt: "Copper installation pipes",
        caption: "Assortment",
      },
      {
        src: "/images/cases/polimer-seo/product-1.webp",
        alt: "Plumbing products",
        caption: "Product",
      },
      {
        src: "/images/cases/polimer-seo/product-2.webp",
        alt: "Engineering plumbing",
        caption: "Category",
      },
    ],
    outcomeLead:
      "In ~1.5 months we prepared SEO — that is not the same as TOP. Climbing into TOP is planned over 2–6 months. Already in the first two months: ~84 visits/day, 28 orders, 17 online payments. Later we held about ≈8 sales per day from search. Now 3000+ phrases in TOP. Bitrix catalog improvements — in the web development case.",
    highlights: [
      "SEO for Polimer plumbing · Voronezh · since 2014",
      "Now 3000+ phrases in TOP · core start 393",
      "Prep ~1.5 mo. · TOP planned 2–6 mo.",
      "Before us: 0 in TOP · 0 organic · 0 online orders",
      "First 2 mo.: ~84 visits/day · 28 orders · 17 payments",
      "≈8 sales per day from search",
      "Web improvements — separate “Polimer” case",
    ],
    results: [
      { label: "In TOP", value: "3000+" },
      { label: "Core start", value: "393" },
      { label: "Prep", value: "~1.5 mo." },
      { label: "Sales / day", value: "≈8" },
    ],
    ctaTitle: "Need plumbing orders from search?",
    ctaText:
      "We’ll build a core for your catalog and drive it to payment — the same way we did for Polimer.",
  },

  vilmed: {
    title: "VILMED storefront improvements",
    client: "VILMED",
    industry: "Medical equipment",
    location: "Voronezh / Russia",
    period: "ongoing · Bitrix",
    metric: "15,000+",
    metricLabel: "products in catalog",
    summary:
      "We run a large medical-equipment store on Bitrix: sticky header and smart search, catalog and product-card UX, SEO filters, ERP sync, composite/Brotli, and shell cleanup. Live — vilmed.ru.",
    coverAlt: "VILMED medical equipment catalog",
    services: ["Bitrix", "E-commerce", "UX", "Speed", "Security"],
    intro:
      "VILMED is an online store of professional medical equipment: 15,000+ SKUs, ships across the country, catalog by specialties (veterinary, ENT, ophthalmology, surgery, endoscopy, and more). Platform — Bitrix with an ALTOP solution; we improve the storefront, speed, and security.",
    painLead:
      "A generic “power tools” template does not fit B2B medical gear: header and search are awkward on mobile, a catalog with dozens of subcategories balloons, the product card does not lead to “request a price”, the gallery duplicates photos, and production had shells plus heavy TTFB without composite.",
    challenge:
      "Not rewrite the store from scratch — build a solid path to the lead on top of Bitrix/ALTOP: header, catalog, product card, SEO, and speed — plus close security holes.",
    pains: [
      {
        title: "Template not built for medical gear",
        text: "ALTOP “power tools” is a base, but header, search, and product card are not tuned for a medical buyer and a “price on request” flow.",
      },
      {
        title: "Catalog with dozens of subcategories",
        text: "Section lists became a wall of text. On mobile the sidebar got in the way; “show more” and a filter by category names were missing.",
      },
      {
        title: "Speed and security",
        text: "Heavy blocks, duplicate gallery photos, shells in upload/assets — without composite, Brotli, and hardening the storefront and admin were at risk.",
      },
    ],
    journeyLead:
      "We iterate on a live Bitrix store: first the buyer path (header, catalog, product card), then SEO / warehouse-sync tools and performance, in parallel — shell audit and hardening. Without taking the storefront down.",
    approach: [
      "Sticky header: off-canvas catalog, smart search (layout, typos, brands), “open today until…” schedule",
      "Catalog: “first 12 + show more”, mobile subcategory filter, hide the noisy sidebar",
      "Product card: SKU next to price, “request a price”, compare/save, lightbox, “bought with this”, photo dedupe",
      "SEO filters, category-finder, SKU generator, brand sync, ERP/warehouse exchange",
      "Composite, Brotli, drop ORDER BY RAND() in storefront blocks",
      "Security: remove shells, block PHP in upload/images, harden admin/ajax",
    ],
    plainSpeak: [
      {
        jargon: "Sticky header + smart search",
        plain:
          "While scrolling, the header stays at hand. Search fixes layout and typos — the buyer finds the device faster, not an empty theme dropdown.",
      },
      {
        jargon: "12 subcategories + “show more”",
        plain:
          "Instead of an endless grid — a short list and a button. On phone, also a filter by section name.",
      },
      {
        jargon: "Composite and Brotli",
        plain:
          "Pages reach real browsers faster: HTML cache + compression. Curl “without cache” at ~2–4 s is not what the shopper sees.",
      },
      {
        jargon: "Shell cleanup",
        plain:
          "We found and removed dozens of malicious PHP files in images/upload and blocked script execution in those folders.",
      },
    ],
    sections: [
      {
        title: "Medical equipment catalog",
        body: "Sections by clinic specialty: from anesthesiology to lab. Subcategories collapse; on mobile — search by section names.",
        image: "/images/cases/vilmed/cover.webp",
      },
      {
        title: "Main storefront",
        body: "Header with search and cart, promo slider, trust blocks (delivery, registrations, manufacturers, quotes). Sticky header keeps catalog and phone while scrolling.",
        image: "/images/cases/vilmed/home.webp",
      },
      {
        title: "Product card for B2B",
        body: "SKU next to price, “request a price”, compare and save, custom gallery lightbox, “bought with this item” from Bitrix order stats.",
        image: "/images/cases/vilmed/product.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/vilmed/logo.webp",
        alt: "VILMED logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/vilmed/catalog.webp",
        alt: "VILMED catalog",
        caption: "Catalog",
      },
      {
        src: "/images/cases/vilmed/home.webp",
        alt: "VILMED homepage",
        caption: "Home",
      },
    ],
    outcomeLead:
      "A live Bitrix store with 15,000+ SKUs: easier to find and order medical gear, faster storefront, shells cleaned up. Site: vilmed.ru.",
    highlights: [
      "Medical e-com on Bitrix · 15,000+ products",
      "Sticky header · smart search · catalog and product-card UX",
      "SEO filters · SKU generator · ERP/warehouse sync",
      "Composite · Brotli · no heavy RAND() on the storefront",
      "Security: shells removed · PHP blocked in upload",
      "Ships across the country · live vilmed.ru",
    ],
    results: [
      { label: "Products", value: "15,000+" },
      { label: "Platform", value: "Bitrix" },
      { label: "Focus", value: "UX + speed" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need Bitrix improvements for a medical store?",
    ctaText:
      "We’ll shape the header, catalog, and product card for B2B buyers — the way we did for VILMED.",
  },

  titlo: {
    title: "Titlo platform — SEO tools",
    client: "Titlo",
    industry: "SaaS / SEO tools",
    location: "Russia",
    period: "product · Next.js + Laravel · since 2023",
    metric: "19",
    metricLabel: "modules in one dashboard",
    summary:
      "We built Titlo: marketing on Next.js (titlo.ru) and a Laravel cabinet (cabinet.titlo.ru) — 19 SEO modules, demos, plans, migration from Bitrix. Live — titlo.ru.",
    coverAlt: "Titlo platform homepage — SEO tools",
    services: ["Next.js", "Laravel", "SaaS", "Migration", "UX"],
    intro:
      "Titlo is a toolkit for SEO specialists and marketers: semantics, relevance, competitors, rankings, site monitoring, and a dozen utilities in one dashboard. Public storefront — titlo.ru (Next.js), product — cabinet.titlo.ru (Laravel). Free start, XLS/PDF export, Google and search engines.",
    painLead:
      "The SEO team lived in Excel and a scatter of services: core in one place, rankings in another, client reports assembled at night. The old Bitrix site could not carry modern marketing and module demos.",
    challenge:
      "Move the product off Bitrix: a marketing site on Next with module landings and demos, a Laravel cabinet with limits/plans — without losing SEO and without stopping sign-ups.",
    pains: [
      {
        title: "Scattered SEO stack",
        text: "Semantics, relevance, rankings, and uptime — in different tabs. Before a client call — a night assembling XLS.",
      },
      {
        title: "Bitrix as a product storefront",
        text: "A generic online store does not fit SaaS: you need module landings, guest demos, a BFF to the cabinet API, and clean URLs after migration.",
      },
      {
        title: "Two surfaces",
        text: "Marketing and cabinet — different repos and deploys (PM2). Need a chain: sign-up → module → report.",
      },
    ],
    journeyLead:
      "We shipped the product as a Next + Laravel pair: content migration from Bitrix, reference module landings, a cabinet with 19 tools and demos.",
    approach: [
      "Marketing titlo.ru on Next.js App Router: home, pricing, ~57 URLs, sitemap/robots",
      "Landings for 19 modules (relevance, rankings, clusterizer, competitors…)",
      "Guest demos and BFF `/api/*` → cabinet without secrets in the browser",
      "Cabinet cabinet.titlo.ru on Laravel: accounts, limits, modules, PDF/XLS",
      "Migration from Bitrix: redirects, smoke URLs, sitemap comparison",
      "Deploy: PM2 + nginx, git-first on VPS",
    ],
    plainSpeak: [
      {
        jargon: "19 modules in one dashboard",
        plain:
          "From a word generator to ranking monitoring — without jumping across third-party tools and Excel.",
      },
      {
        jargon: "Next + Laravel",
        plain:
          "Polished storefront and SEO on Next; data, limits, and the checks themselves — in the Laravel cabinet.",
      },
      {
        jargon: "Migration from Bitrix",
        plain:
          "Old addresses are not lost: redirects and a URL map so search and bookmarks land on the new site.",
      },
      {
        jargon: "Demos and BFF",
        plain:
          "You can try a module from the site; API calls go through the storefront server so keys never show in the browser.",
      },
    ],
    sections: [
      {
        title: "Marketing titlo.ru",
        body: "Dark product storefront: hero with a project panel, “core → SERP → control” story, module catalog, Free/Pro plans, news.",
        image: "/images/cases/titlo/home.webp",
      },
      {
        title: "Module landing",
        body: "Reference — relevance analysis: compare with TOP, word clouds, TLP, video lessons, FAQ, and CTA into the cabinet.",
        image: "/images/cases/titlo/module.webp",
      },
      {
        title: "Cabinet sign-in",
        body: "cabinet.titlo.ru — personal dashboard with modules, plans, and check history. Sign-up and demos from the storefront.",
        image: "/images/cases/titlo/cabinet.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/titlo/logo.webp",
        alt: "Titlo logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/titlo/module.webp",
        alt: "Relevance module landing",
        caption: "Module",
      },
      {
        src: "/images/cases/titlo/cabinet.webp",
        alt: "Titlo cabinet sign-in",
        caption: "Cabinet",
      },
    ],
    outcomeLead:
      "Live SaaS: storefront titlo.ru and cabinet cabinet.titlo.ru — 19 SEO modules, free start, reports without Excel. We run the product ourselves for our clients and subscribers.",
    highlights: [
      "SaaS SEO platform · 19 modules · free / $0 start",
      "titlo.ru on Next.js · cabinet.titlo.ru on Laravel",
      "Relevance · rankings · clusterizer · competitors · monitoring",
      "Migration from Bitrix · ~57 URLs · demos and BFF",
      "XLS / PDF export · Google and search engines",
      "Live titlo.ru + cabinet.titlo.ru",
    ],
    results: [
      { label: "Modules", value: "19" },
      { label: "Storefront", value: "Next.js" },
      { label: "Cabinet", value: "Laravel" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need SaaS or a marketing migration off Bitrix?",
    ctaText:
      "We’ll build a Next storefront and a Laravel cabinet — the way we did for Titlo.",
  },
};
