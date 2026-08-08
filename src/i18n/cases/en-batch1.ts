import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for featured batch-1 cases.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEn: Record<string, Partial<CaseStudy>> = {
  "polimer-seo": {
    title: "SEO for the Polimer plumbing store",
    client: "Polimer",
    industry: "Engineering plumbing",
    location: "Voronezh",
    period: "since 2014",
    metric: "3000+",
    metricLabel: "keywords on page one",
    summary:
      "SEO for Polimer’s plumbing catalog since 2014. We locked a 393-keyword starter set, spent ~1.5 months on prep, then grew rankings over a planned 2–6 months. Today 3000+ keywords hold page one. Orders and paid checkouts showed up in the first two months. The Bitrix storefront rebuild is a separate case.",
    coverAlt: "polimer-vrn.ru homepage — plumbing catalog",
    services: ["SEO", "Content", "CTA", "Analytics"],
    intro:
      "Polimer LLC is part of Metallinvest Plus: wholesale and retail engineering plumbing and building materials in Voronezh. In 2014 marketing asked for search — they wanted the web to pull its weight next to every other channel. We still run SEO; more than 3000 keywords sit on page one. Later we rebuilt the Bitrix storefront — that’s a separate case.",
    painLead:
      "Boilers, pipes, radiators, mixers — high-volume queries in a crowded SERP. Before us: no keywords ranking, no organic traffic, no online orders. The client signed off on 393 starter queries aimed at Google page one; after that we grew the keyword set and visibility.",
    challenge:
      "Get SEO launch-ready in ~1.5 months in a tough e-com niche: keyword research, copy, CTAs, analytics. Page-one growth was planned over 2–6 months; the first orders and payments landed while rankings were still climbing. Longer term: expand the keyword set and hold the visibility we win.",
    pains: [
      {
        title: "High volume, hard competition",
        text: "Plumbing SERPs are packed. Without a real keyword set, content, and CTAs, shoppers never reach the cart.",
      },
      {
        title: "No search presence",
        text: "Zero ranking keywords. Zero organic visits. Zero web orders. We started from scratch against an agreed 393-phrase core.",
      },
      {
        title: "Sales, not “traffic”",
        text: "Marketing tracked checkout and payment — so CTAs and the path to purchase mattered as much as rankings.",
      },
    ],
    journeyLead:
      "We built the starter keyword set plus supporting phrases, mapped competitors, and locked the plan. Then on-page work from scratch: copy, articles, CTAs, analytics fixes. After ~1.5 months the project was live; rankings grew over 2–6 months while we expanded the core — today 3000+ keywords hold page one.",
    approach: [
      "Starter keyword set and supporting semantics → 393 phrases",
      "Competitor and demand analysis in plumbing",
      "Strategy: rankings plus gaps competitors left open on page one",
      "Full on-page optimization from a clean start",
      "Commercial SEO copy and an article section",
      "CTAs, usability, and conversion tracking to order/payment; years of keyword expansion",
    ],
    plainSpeak: [
      {
        jargon: "Starter set 393 → 3000+ on page one",
        plain:
          "In 2014 we agreed 393 queries around boilers, pipes, and radiators. We kept growing the set — more than three thousand keywords now hold page one.",
      },
      {
        jargon: "Prep ~1.5 mo. ≠ page one",
        plain:
          "A month and a half got SEO ready to run. Steady page-one coverage on the starter set took another planned 2–6 months of ranking work.",
      },
      {
        jargon: "Order and payment from search",
        plain:
          "We counted more than visits: who ordered and who paid online — so you can see search actually selling.",
      },
    ],
    sections: [
      {
        title: "Plumbing is a high-volume niche",
        body: "Polimer sells engineering plumbing and building materials. SEO targeted commercial store queries so buyers find the catalog in Google Search — not only on a competitor’s site.",
        image: "/images/cases/polimer-seo/boiler.webp",
      },
      {
        title: "Rankings on the keyword set",
        body: "Start: 393 agreed phrases. Reports track ranking movement; today 3000+ queries sit on page one.",
        image: "/images/cases/polimer-seo/pos.webp",
        fit: "contain",
      },
      {
        title: "Another ranking snapshot",
        body: "A second core report — how visibility built month by month after prep.",
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
      "In ~1.5 months we prepared SEO — that is not the same as page one. Rankings were planned over 2–6 months. Already in the first two months: ~84 visits/day, 28 orders, 17 online payments. Later we held about ≈8 sales per day from search. Today 3000+ keywords hold page one. Bitrix catalog work lives in the web development case.",
    highlights: [
      "SEO for Polimer plumbing · Voronezh · since 2014",
      "3000+ keywords on page one · starter set 393",
      "Prep ~1.5 mo. · page one planned 2–6 mo.",
      "Before us: 0 ranking · 0 organic · 0 online orders",
      "First 2 mo.: ~84 visits/day · 28 orders · 17 payments",
      "≈8 sales per day from search",
      "Web improvements — separate “Polimer” case",
    ],
    results: [
      { label: "Page one", value: "3000+" },
      { label: "Starter set", value: "393" },
      { label: "Prep", value: "~1.5 mo." },
      { label: "Sales / day", value: "≈8" },
    ],
    ctaTitle: "Need plumbing orders from search?",
    ctaText:
      "We’ll lock a keyword set for your catalog and push it through to paid orders — the same way we did for Polimer.",
  },

  vilmed: {
    title: "VILMED storefront improvements",
    client: "VILMED",
    industry: "Medical equipment",
    location: "Voronezh",
    period: "ongoing · Bitrix",
    metric: "15,000+",
    metricLabel: "products in catalog",
    summary:
      "Ongoing work on a large medical-equipment store on Bitrix: sticky header and smart search, catalog and product-card UX, SEO filters, ERP sync, composite/Brotli, and a shell cleanup. Live at vilmed.ru.",
    coverAlt: "VILMED medical equipment catalog",
    services: ["Bitrix", "E-commerce", "UX", "Speed", "Security"],
    intro:
      "VILMED sells professional medical equipment online — 15,000+ SKUs, nationwide shipping, catalog by specialty (veterinary, ENT, ophthalmology, surgery, endoscopy, and more). It runs on Bitrix with an ALTOP theme. We keep improving the storefront, performance, and security.",
    painLead:
      "A generic “power tools” theme doesn’t fit B2B medical buying. The header and search were clumsy on mobile, a catalog with dozens of subcategories turned into a wall of links, the product card never led to “request a price,” the gallery repeated photos, and production had shells plus slow TTFB with no composite cache.",
    challenge:
      "Don’t rebuild the store — build a clear path to the lead on top of Bitrix/ALTOP: header, catalog, product card, SEO, and speed — and close the security holes.",
    pains: [
      {
        title: "Theme wasn’t built for medical gear",
        text: "ALTOP “power tools” is a starting point, but the header, search, and product card weren’t tuned for a medical buyer or a price-on-request flow.",
      },
      {
        title: "Catalog with dozens of subcategories",
        text: "Section lists became a wall of text. On mobile the sidebar got in the way; there was no “show more” and no filter by category name.",
      },
      {
        title: "Speed and security",
        text: "Heavy blocks, duplicate gallery photos, shells in upload/assets — without composite, Brotli, and hardening, the storefront and admin were exposed.",
      },
    ],
    journeyLead:
      "We ship in iterations on a live Bitrix store: first the buyer path (header, catalog, product card), then SEO tools, ERP sync, and performance — and in parallel a shell audit and hardening. The storefront stays up the whole time.",
    approach: [
      "Sticky header: off-canvas catalog, smart search (keyboard layout, typos, brands), “open today until…” hours",
      "Catalog: first 12 sections + “show more”, mobile subcategory filter, hide the noisy sidebar",
      "Product card: SKU next to price, “request a price”, compare/save, lightbox, “bought with this”, photo dedupe",
      "SEO filters, category finder, SKU generator, brand sync, ERP/warehouse exchange",
      "Composite, Brotli, drop ORDER BY RAND() from storefront blocks",
      "Security: remove shells, block PHP in upload/images, harden admin/ajax",
    ],
    plainSpeak: [
      {
        jargon: "Sticky header + smart search",
        plain:
          "The header stays within reach while you scroll. Search fixes keyboard layout and typos so a buyer finds the device — not an empty theme dropdown.",
      },
      {
        jargon: "12 subcategories + “show more”",
        plain:
          "Instead of an endless grid, a short list and a button. On phones, a filter by section name too.",
      },
      {
        jargon: "Composite and Brotli",
        plain:
          "Real browsers get pages faster: HTML cache plus compression. A cold curl at ~2–4 s is not what shoppers see.",
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
        body: "Sections follow clinic specialties — from anesthesiology to lab. Subcategories collapse; on mobile you can search by section name.",
        image: "/images/cases/vilmed/cover.webp",
      },
      {
        title: "Main storefront",
        body: "Header with search and cart, promo slider, trust blocks (delivery, registrations, manufacturers, quotes). The sticky header keeps catalog and phone visible while scrolling.",
        image: "/images/cases/vilmed/home.webp",
      },
      {
        title: "Product card for B2B",
        body: "SKU next to the price, “request a price”, compare and save, a custom gallery lightbox, and “bought with this item” drawn from Bitrix order stats.",
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
      "A live Bitrix store with 15,000+ SKUs: easier to find and order medical gear, a faster storefront, and shells cleaned up. Site: vilmed.ru.",
    highlights: [
      "Medical e-com on Bitrix · 15,000+ products",
      "Sticky header · smart search · catalog and product-card UX",
      "SEO filters · SKU generator · ERP/warehouse sync",
      "Composite · Brotli · no heavy RAND() on the storefront",
      "Security: shells removed · PHP blocked in upload",
      "Nationwide shipping · live vilmed.ru",
    ],
    results: [
      { label: "Products", value: "15,000+" },
      { label: "Platform", value: "Bitrix" },
      { label: "Focus", value: "UX + speed" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need Bitrix work on a medical store?",
    ctaText:
      "We’ll shape the header, catalog, and product card for B2B buyers — the same way we did for VILMED.",
  },

  titlo: {
    title: "Titlo — SEO tools platform",
    client: "Titlo",
    industry: "SaaS / SEO tools",
    location: "Product",
    period: "product · Next.js + Laravel · since 2023",
    metric: "19",
    metricLabel: "modules in one dashboard",
    summary:
      "We built Titlo end to end: a Next.js marketing site (titlo.ru) and a Laravel app (cabinet.titlo.ru) — 19 SEO modules, guest demos, plans, and a clean migration off Bitrix. Live at titlo.ru.",
    coverAlt: "Titlo platform homepage — SEO tools",
    services: ["Next.js", "Laravel", "SaaS", "Migration", "UX"],
    intro:
      "Titlo is a toolkit for SEO specialists and marketers: keyword research, relevance, competitors, rankings, site monitoring, and a dozen utilities in one dashboard. The public site is titlo.ru (Next.js); the product lives at cabinet.titlo.ru (Laravel). Free to start, XLS/PDF export, Google Search and other engines.",
    painLead:
      "The SEO team lived in Excel and a scatter of tabs — keyword sets in one tool, rankings in another, client reports glued together overnight. The old Bitrix site couldn’t carry modern marketing or module demos.",
    challenge:
      "Lift the product off Bitrix: a Next marketing site with module landings and demos, plus a Laravel cabinet with limits and plans — without losing SEO equity or pausing sign-ups.",
    pains: [
      {
        title: "Scattered SEO stack",
        text: "Keyword research, relevance, rankings, and uptime lived in different tabs. Before a client call, someone spent a night assembling XLS.",
      },
      {
        title: "Bitrix as a product storefront",
        text: "A generic online store doesn’t fit SaaS. You need module landings, guest demos, a BFF to the cabinet API, and clean URLs after migration.",
      },
      {
        title: "Two surfaces",
        text: "Marketing and cabinet are separate repos and deploys (PM2). The chain still has to work: sign-up → module → report.",
      },
    ],
    journeyLead:
      "We shipped Titlo as a Next + Laravel pair: content migrated from Bitrix, reference landings for each module, and a cabinet with 19 tools plus demos.",
    approach: [
      "Marketing titlo.ru on Next.js App Router: home, pricing, ~57 URLs, sitemap/robots",
      "Landings for 19 modules (relevance, rankings, clusterizer, competitors…)",
      "Guest demos and a BFF `/api/*` → cabinet with no secrets in the browser",
      "Cabinet cabinet.titlo.ru on Laravel: accounts, limits, modules, PDF/XLS",
      "Migration from Bitrix: redirects, smoke URLs, sitemap comparison",
      "Deploy: PM2 + nginx, git-first on a VPS",
    ],
    plainSpeak: [
      {
        jargon: "19 modules in one dashboard",
        plain:
          "From a word generator to ranking monitors — without hopping across third-party tools and Excel.",
      },
      {
        jargon: "Next + Laravel",
        plain:
          "Polished storefront and SEO on Next; data, limits, and the checks themselves live in the Laravel cabinet.",
      },
      {
        jargon: "Migration from Bitrix",
        plain:
          "Old addresses aren’t lost: redirects and a URL map so search and bookmarks land on the new site.",
      },
      {
        jargon: "Demos and BFF",
        plain:
          "You can try a module from the site; API calls go through the storefront server so keys never show in the browser.",
      },
    ],
    sections: [
      {
        title: "Marketing site — titlo.ru",
        body: "Dark product storefront: hero with a project panel, a “keywords → SERP → control” story, module catalog, Free/Pro plans, and news.",
        image: "/images/cases/titlo/home.webp",
      },
      {
        title: "Module landing",
        body: "Reference page — relevance analysis: SERP comparison, word clouds, TLP, video lessons, FAQ, and a CTA into the cabinet.",
        image: "/images/cases/titlo/module.webp",
      },
      {
        title: "Cabinet sign-in",
        body: "cabinet.titlo.ru — personal dashboard with modules, plans, and check history. Sign-up and demos start on the storefront.",
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
      "Live SaaS: storefront at titlo.ru and cabinet at cabinet.titlo.ru — 19 SEO modules, a free start, reports without Excel. We run the product ourselves for our clients and subscribers.",
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
    ctaTitle: "Need SaaS — or a marketing site off Bitrix?",
    ctaText:
      "We’ll build a Next storefront and a Laravel cabinet the same way we did for Titlo.",
  },
};
