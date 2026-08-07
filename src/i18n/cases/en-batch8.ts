import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-8 cases (non-featured medical / roofing web).
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch8: Record<string, Partial<CaseStudy>> = {
  kosmamed: {
    title: "KosmaMed online store",
    client: "KosmaMed (formerly MedMarket)",
    industry: "Medical equipment",
    location: "Russia",
    period: "support · Bitrix · 2026",
    metric: "55,000+",
    metricLabel: "SKUs in the catalog",
    summary:
      "We run a large medical-equipment store on Bitrix: MedMarket→KosmaMed rebrand, domain migration with 301s, speed (no RAND, composite, WebP), MoySklad/ERP/carriers. Live — kosmamed.ru.",
    coverAlt: "KosmaMed store homepage",
    services: ["Bitrix", "E-commerce", "Rebrand", "Performance", "Integrations"],
    intro:
      "KosmaMed is an online store of professional medical equipment: 55,000+ SKUs and ~8,000 sections, nationwide delivery. Previously the brand and domain were MedMarket / medmarket.su; in 2026 we moved to KosmaMed and kosmamed.ru without stopping the storefront. Platform — Bitrix, elektro_flat theme (same stack as VILMED).",
    painLead:
      "A huge out-of-the-box Bitrix catalog is heavy to serve: ORDER BY RAND() killed component cache, background and images bloated LCP, and a brand/domain change risked SEO loss and broken links without careful 301s and content edits.",
    challenge:
      "Run a rebrand and domain change on a live store with tens of thousands of SKUs, speed up the storefront (cache, WebP, composite), and keep integrations — MoySklad, ERP, carriers — without rewriting the shop from scratch.",
    pains: [
      {
        title: "Rebrand on a live catalog",
        text: "MedMarket → KosmaMed: copy, meta, logo, tens of thousands of DB rows with the old brand and domain — you can’t “just replace” without backup and serialized fields.",
      },
      {
        title: "RAND() killed the cache",
        text: "About 10 template spots with ORDER BY RAND() — every hit was heavy SQL and empty component cache. On 55k+ SKUs that hit TTFB.",
      },
      {
        title: "Media and background",
        text: "Heavy JPG background, resizes without WebP, lazyimage stripping body background before scroll — LCP and CLS suffered on homepage and product card.",
      },
    ],
    journeyLead:
      "We work on top of live Bitrix: first brand and domain (content + DB + 301s), in parallel — speed per the VILMED checklist (RAND→SORT, WebP, composite, LCP), integrations untouched unless needed.",
    approach: [
      "Rebrand: MedMarket → KosmaMed in template, meta, copy; bulk DB edit with backup",
      "Domain: medmarket.su → kosmamed.ru, 301s from www and the old host keeping the path",
      "Speed: removed RAND() in 10 places → cacheable SORT + PHP shuffle for “similar”",
      "WebP (delight.webpconverter + nginx Accept), lighter background tile, LCP preload",
      "Bitrix composite, warm-up scripts and Redis/opcache — production-ready",
      "Integrations: MoySklad (stock/photos), ERP, carrier delivery quotes",
    ],
    plainSpeak: [
      {
        jargon: "301 from medmarket.su",
        plain:
          "Old links and bookmarks don’t break: a request to the old domain lands on the same path on kosmamed.ru.",
      },
      {
        jargon: "No ORDER BY RAND()",
        plain:
          "“Random” storefront blocks no longer recalculate SQL every time — the cache lives, the page opens faster.",
      },
      {
        jargon: "WebP and background tile",
        plain:
          "Images are lighter for the browser; the homepage background is a seamless WebP instead of a heavy JPG.",
      },
      {
        jargon: "MoySklad + carriers",
        plain:
          "Stock and photos come from inventory; the product card shows delivery options with prices right away.",
      },
    ],
    sections: [
      {
        title: "Medical-equipment catalog",
        body: "Sections by clinic direction — from anesthesiology to ophthalmology. Hundreds of SKUs in one section, smart filter and sorts without heavy RAND.",
        image: "/images/cases/kosmamed/catalog.webp",
      },
      {
        title: "Homepage after the rebrand",
        body: "KosmaMed brand in the header, product and category search, delivery offers, recommendation blocks. Domain kosmamed.ru; old medmarket.su 301s.",
        image: "/images/cases/kosmamed/home.webp",
      },
      {
        title: "Product card and logistics",
        body: "Gallery, SKU and code, order when price/stock is missing, carrier quotes right on the card.",
        image: "/images/cases/kosmamed/product.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/kosmamed/logo.webp",
        alt: "KosmaMed logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/kosmamed/catalog.webp",
        alt: "KosmaMed catalog",
        caption: "Catalog",
      },
      {
        src: "/images/cases/kosmamed/home.webp",
        alt: "KosmaMed homepage",
        caption: "Homepage",
      },
    ],
    outcomeLead:
      "A living Bitrix store with 55,000+ SKUs under the KosmaMed brand: domain and SEO redirects in place, storefront faster via cacheable sorting and WebP, integrations kept. Site: kosmamed.ru.",
    highlights: [
      "Medical store · 55,000+ products · ~8,000 sections",
      "Rebrand MedMarket → KosmaMed · domain kosmamed.ru",
      "301s from medmarket.su · content and DB without stopping the storefront",
      "No RAND() · composite · WebP · LCP preload",
      "MoySklad · ERP · carriers",
      "Live kosmamed.ru",
    ],
    results: [
      { label: "Products", value: "55,000+" },
      { label: "Platform", value: "Bitrix" },
      { label: "Focus", value: "brand + speed" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need a rebrand or speed-up for a Bitrix store?",
    ctaText:
      "We’ll handle domain change, 301s, and speed on a live catalog — like KosmaMed.",
  },

  oftalmag: {
    title: "Oftalmag online store",
    client: "Oftalmag",
    industry: "Ophthalmology equipment",
    location: "Russia",
    period: "support · Bitrix · since 2021",
    metric: "~1,900",
    metricLabel: "SKUs in the catalog",
    summary:
      "We run an ophthalmology-equipment store on Bitrix (enext): Heine/KaWe/Riester catalog, “request a price”, city picker, personal-cabinet SEF. Live — oftalmag.ru.",
    coverAlt: "Oftalmag store homepage",
    services: ["Bitrix", "E-commerce", "UX", "Support"],
    intro:
      "Oftalmag is an online store of ophthalmology equipment for cabinets and clinics: ~1,900 SKUs, ~185 sections, Heine, Riester, KaWe and more, delivery. Platform — Bitrix, enext theme (altop.enext). We support the storefront, catalog, and personal cabinet.",
    painLead:
      "A specialized B2B Bitrix catalog: some SKUs without a retail price (“request a price”), need stable personal-cabinet SEF, a correct city-picker popup, and careful production CSS — otherwise requests and navigation break for no visible reason.",
    challenge:
      "Keep a living ophthalmology store: catalog and cards for clinics, personal cabinet, city and delivery — without rewriting the shop and without CSS breaks on prod deploy.",
    pains: [
      {
        title: "Personal cabinet SEF",
        text: "/personal/orders/, subscriptions, and profile returned 404 without urlrewrite rules — buyers never reached orders.",
      },
      {
        title: "Prod CSS ≠ local",
        text: "Bitrix in production pulls template_styles.min.css. Source edits without rebuilding min broke the “Choose city” popup (display:none).",
      },
      {
        title: "Catalog for the clinic",
        text: "Slit lamps, autorefractors, tonometers — deep section tree and a “price on request” path for expensive gear.",
      },
    ],
    journeyLead:
      "We support on top of enext: fix routes and layout, keep git deploy and docs, without stopping the storefront.",
    approach: [
      "Ophthalmology catalog: sections, filters, Heine/KaWe cards and more",
      "“Request a price” CTA for SKUs without retail price",
      "Personal cabinet: SEF urlrewrite for /personal/order/ and /personal/",
      "City-picker popup fix — rebuild template_styles.min.css",
      "Site image registry (tools/site-images.php) for media and audit",
      "Git-first: docs, dev/deploy scripts, prod deploy only on request",
    ],
    plainSpeak: [
      {
        jargon: "Personal cabinet SEF",
        plain:
          "Orders and profile open on normal URLs, not 404 — buyers see history without hacks.",
      },
      {
        jargon: "min.css in production",
        plain:
          "After style edits we always rebuild the min file — otherwise production breaks what already works locally.",
      },
      {
        jargon: "Request a price",
        plain:
          "Expensive ophthalmology gear often has no storefront price: the button leads to a manager request.",
      },
      {
        jargon: "City picker",
        plain:
          "The client sets the city — delivery and terms depend on it.",
      },
    ],
    sections: [
      {
        title: "Ophthalmology catalog",
        body: "Sections from autorefractors to slit lamps. Filter by price and params, list and grid, Heine, KaWe, Topcon brands and more.",
        image: "/images/cases/oftalmag/catalog.webp",
      },
      {
        title: "Homepage storefront",
        body: "Header with search and city picker, promo slider (incl. KaWe), “recommended / new / hits” tabs.",
        image: "/images/cases/oftalmag/home.webp",
      },
      {
        title: "Card for the clinic",
        body: "Gallery, SKU and brand, description and specs, “request a price”, and delivery to the selected city.",
        image: "/images/cases/oftalmag/product.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/oftalmag/logo.webp",
        alt: "Oftalmag logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/oftalmag/catalog.webp",
        alt: "Oftalmag catalog",
        caption: "Catalog",
      },
      {
        src: "/images/cases/oftalmag/product.webp",
        alt: "Heine slit-lamp product card",
        caption: "Product card",
      },
    ],
    outcomeLead:
      "A living ophthalmology-equipment store on Bitrix enext: ~1,900 SKUs, stable cabinet and storefront, correct city picker. Site: oftalmag.ru.",
    highlights: [
      "Ophthalmology store · ~1,900 products · ~185 sections",
      "Bitrix enext · Heine · KaWe · Riester",
      "“Request a price” · city picker · delivery",
      "Personal cabinet SEF · city popup CSS fix",
      "Image registry · git support",
      "Live oftalmag.ru",
    ],
    results: [
      { label: "Products", value: "~1,900" },
      { label: "Platform", value: "Bitrix" },
      { label: "Focus", value: "catalog + cabinet" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need a medical-equipment store or enext improvements?",
    ctaText:
      "We’ll build the catalog and cabinet for clinics — like Oftalmag.",
  },

  metprof: {
    title: "Metallinvest Profile online store",
    client: "Metallinvest Profile",
    industry: "Roofing and facades",
    location: "Voronezh",
    period: "support · Bitrix · since 2014",
    metric: "~1,000",
    metricLabel: "items + ERP offers",
    summary:
      "We run a roofing and facade store on Bitrix: metal tile and profiled sheet catalog from ERP (1C), fence calculator, cart, RAL, price lists. Live — metprof-vrn.ru. Sister brand to Metallinvest (metplus-vrn.ru).",
    coverAlt: "Metallinvest Profile homepage — roofing and facades",
    services: ["Bitrix", "E-commerce", "ERP sync", "Calculators"],
    intro:
      "Metallinvest Profile LLC is a Metallinvest Plus subsidiary: metal tiles, profiled sheet, siding, Japanese facade panels, gutters, fencing. metprof-vrn.ru is a Bitrix store with ERP exchange, price lists, and a fence calculator. Voronezh, delivery and warehouse pickup.",
    painLead:
      "An ERP catalog with thousands of trade offers (RAL colors, NormanMP coatings, etc.) easily breaks UX: the header cart doesn’t update after “add to cart”, the admin crashes without Access modules in git, SEO copy and deploys need discipline.",
    challenge:
      "Keep a living B2B/B2C roofing catalog on Bitrix with ERP: storefront, cart, calculators, and git deploy — without stopping sales.",
    pains: [
      {
        title: "Catalog from ERP",
        text: "~1,000 elements and thousands of offers (length, color, coating). Need filters, an order-ready card, and stock by store.",
      },
      {
        title: "Header cart",
        text: "After adding a product the header counter didn’t update — buyers didn’t see the item was already in the cart.",
      },
      {
        title: "Git and Bitrix modules",
        text: "Without PSR/Access module libraries in the repo, admin on a clean clone broke; deploy only via git.",
      },
    ],
    journeyLead:
      "We support on top of Bitrix + ERP: fix cart and admin, keep the roofing/facade catalog, fence calculator, and estimate services.",
    approach: [
      "Roofing and facade catalog: MP metal tile, profiled sheet, siding, Asahi/Kmew, gutters",
      "ERP (1C) exchange: products, offers, lengths",
      "Header cart update fix after add-to-basket",
      "Fence calculator, free estimate, price lists, RAL table",
      "Card: price per m², “made to order”, one-click buy, stock by store",
      "Git: Bitrix modules (vendor/Access) in repo, ff-only deploy to prod",
    ],
    plainSpeak: [
      {
        jargon: "ERP offers (1C)",
        plain:
          "One tile profile — dozens of color and coating variants. The site pulls them from accounting, not by hand.",
      },
      {
        jargon: "Header cart",
        plain:
          "Click “add to cart” — the total and count at the top of the page update immediately.",
      },
      {
        jargon: "Fence calculator",
        plain:
          "The client estimates footage and fencing kit before calling a manager.",
      },
      {
        jargon: "RAL and price lists",
        plain:
          "Colors and current price lists at hand — fewer “ask the manager” steps.",
      },
    ],
    sections: [
      {
        title: "Metal tile catalog",
        body: "Montecristo, Monterrosa, Tramontana, Lamontierra profiles. Filters by thickness, width, weight; sort and grid with price per m².",
        image: "/images/cases/metprof/catalog.webp",
      },
      {
        title: "Homepage storefront",
        body: "Offers (Japanese facades, Asahi delivery), fence calculator, roofing and facade blocks, price lists and free estimate.",
        image: "/images/cases/metprof/home.webp",
      },
      {
        title: "Product card",
        body: "Price per m², “made to order”, one-click buy, description/specs tabs and stock by store.",
        image: "/images/cases/metprof/product.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/metprof/logo.webp",
        alt: "Metallinvest Profile logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/metprof/catalog.webp",
        alt: "Metal tile catalog",
        caption: "Catalog",
      },
      {
        src: "/images/cases/metprof/product.webp",
        alt: "MONTECRISTO metal tile card",
        caption: "Product card",
      },
    ],
    outcomeLead:
      "A living roofing and facade store on Bitrix with ERP: catalog, cart, calculators. Site: metprof-vrn.ru. Steel products of the same holding — metallinvest / metplus-vrn.ru case.",
    highlights: [
      "Roofing and facades · Voronezh · metprof-vrn.ru",
      "~1,000 items · thousands of ERP offers",
      "Metal tile · profiled sheet · siding · Asahi/Kmew",
      "Fence calculator · price lists · RAL · estimates",
      "Header cart fix · Bitrix module git deploy",
      "Sister brand to Metallinvest (metplus-vrn.ru)",
    ],
    results: [
      { label: "Products", value: "~1,000+" },
      { label: "Platform", value: "Bitrix + ERP" },
      { label: "Focus", value: "catalog + cart" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need a roofing/facade store or ERP exchange?",
    ctaText:
      "We’ll build the catalog, cart, and calculators — like Metallinvest Profile.",
  },
};
