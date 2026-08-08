import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for featured batch-4 cases
 * (+ polimer web, pairs with polimer-seo; last featured: almamed, torgmag).
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch4: Record<string, Partial<CaseStudy>> = {
  almamed: {
    title: "Almamed online store — ongoing improvements",
    client: "Almamed",
    industry: "Medical equipment",
    location: "Nationwide",
    period: "since 2021 · ongoing",
    metric: "LCP 2.1s",
    metricLabel: "mobile homepage · PageSpeed field",
    summary:
      "Since 2021 we’ve run the Webasyst store: catalog UX and path to order, homepage upgrades, then a large 2026 speed pool — search, N+1, cache, and Core Web Vitals.",
    coverAlt: "almamed.su homepage — live view",
    services: ["Improvements", "E-commerce", "UX", "Performance"],
    before: {
      src: "/images/cases/almamed/377b9da69b.webp",
      alt: "Template before improvements",
      caption: "Before: stock “Good deal” template",
    },
    intro:
      "Almamed supplies medical equipment nationwide — direct manufacturer contracts and a wide range. The site runs on Webasyst. First we rebuilt template UX and the main storefront; as the catalog grew we fixed search lag, listing weight, and Google metrics.",
    painLead:
      "Two stages. First: “the store exists, but buyers get lost” — quiet product cards, weak search, important buttons buried in the template, a homepage that didn’t sell trust. Later, as assortment and traffic grew: heavy pages. Catalog and search took seconds, brands dumped half a megabyte of HTML, and PageSpeed went red on LCP, CLS, and TTFB.",
    challenge:
      "First — thin cards, template chaos, and a weak homepage. Then — N+1 in the catalog, heavy SearchPro, a giant brands page, and Core Web Vitals in the red.",
    pains: [
      {
        title: "Card and catalog don’t sell",
        text: "No SKU, thin specs, awkward filters — hard to compare medical-equipment models.",
      },
      {
        title: "Homepage doesn’t hold attention",
        text: "The banner jumped on load; trust and assortment blocks didn’t cover the B2B path — understand first, then buy.",
      },
      {
        title: "Search and metrics on fire",
        text: "SearchPro slowed the storefront, brands returned hundreds of KB of HTML, and LCP/CLS/TTFB hurt SEO and ads.",
      },
    ],
    journeyLead:
      "First we fixed the path to order and the homepage. Once the store could sell, we took on speed: a 30+ task checklist, a SearchPro rewrite, and live PageSpeed measurements — without taking the storefront down.",
    approach: [
      "Stage 1 · UX: path search → card → cart → delivery",
      "Rebuilt header, cards, filters, delivery, and catalog backend",
      "Upgraded the homepage: banner slider, trust blocks, popular products",
      "Stage 2 · speed (2026): N+1, SearchPro, brands, sitemap, fonts, CLS/LCP",
      "Removed extra SQL in product lists, SEO names, and subcategories",
      "Rewrote SearchPro from the inside: zero-cost field, suggest/page cache",
      "Pagination on /brands/ (was ~547 KB HTML on one screen)",
      "Slider FOUC, retina banners, deferred chat widgets — still ongoing",
    ],
    plainSpeak: [
      {
        jargon: "Path-to-order UX",
        plain:
          "Not pretty buttons — how many steps to “buy” without hunting for a phone in the template.",
      },
      {
        jargon: "Banner FOUC / retina srcset",
        plain:
          "The homepage slider used to flash and load everywhere. Now it loads on the homepage only, first frame right away, Retina images without blur.",
      },
      {
        jargon: "N+1 in the catalog",
        plain:
          "Before: a separate DB query per product. After: one batched query. Lists open noticeably faster.",
      },
      {
        jargon: "SearchPro v2 / zero-cost field()",
        plain:
          "The search field no longer slows every page. The shell is light; smart work runs only when someone starts typing.",
      },
      {
        jargon: "LCP / CLS / TTFB",
        plain:
          "Three Google numbers: how fast main content shows, whether the layout jumps, how fast the server answers. On the homepage LCP and CLS are in the green.",
      },
    ],
    sections: [
      {
        title: "Homepage that sells the storefront",
        body: "Live homepage: header with search and cart, banner slider without stacking on load, trust block (since 2020, 300+ clinics, 18,000+ SKUs) and popular products. Retina banners and height reserve so it doesn’t jump on mobile.",
        image: "/images/cases/almamed/2026-home.webp",
      },
      {
        title: "Header and menu — everything at hand",
        body: "Phone, account, cart, search, and delivery stay available. Buyers don’t hunt for where to click.",
        image: "/images/cases/almamed/almamed.su_-2.webp",
      },
      {
        title: "Catalog and filters",
        body: "Subcategories, quick brand filters, sort and view modes. Lists sped up: we removed N+1 and added lazy previews.",
        image: "/images/cases/almamed/2026-category.webp",
      },
      {
        title: "Product card that answers questions",
        body: "SKU, specs, price, and quick actions. Fewer “what model is this?” calls — more ready orders.",
        image: "/images/cases/almamed/2026-product.webp",
      },
      {
        title: "Search that doesn’t slow the storefront",
        body: "SearchPro rewritten from the inside. The category field is almost free for the server. Suggest and the search page are cached. On mobile — one field instance.",
        image: "/images/cases/almamed/2026-search.webp",
      },
      {
        title: "Brands and speed for Google",
        body: "Manufacturer catalog with pagination instead of a giant page. Plus guest HTML cache, fonts, CLS/LCP. Field mobile: homepage LCP 2.1s, CLS 0.02.",
        image: "/images/cases/almamed/2026-brands.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/almamed/2026-home-mobile.webp",
        alt: "Homepage on mobile",
        caption: "Homepage · mobile",
        fit: "contain",
      },
      {
        src: "/images/cases/almamed/377b9da69b.webp",
        alt: "Template before improvements",
        caption: "Before: “Good deal” template",
      },
      {
        src: "/images/cases/almamed/almamed.su_dostavka_i_oplata_.webp",
        alt: "Delivery page",
        caption: "Delivery and payment",
      },
    ],
    outcomeLead:
      "First the store became usable: path to order, a clear homepage, cards and delivery. Then it got fast — search, catalog, and Google metrics stopped being the bottleneck. Screenshots are from live almamed.su after the 2026 pool.",
    highlights: [
      "UX since 2021: header, cards, filters, delivery, backend",
      "Homepage: slider without FOUC, retina banners, trust blocks",
      "Removed N+1 in product lists, SEO names, and subcategories",
      "SearchPro v2: light field, suggest and search-page cache",
      "/brands/: ~547 KB → ~169 KB via pagination",
      "PageSpeed field: homepage LCP 2.1s · CLS 0.02 (mobile)",
      "Lab desktop CLS: 0.6 → 0",
      "Store on support — improvements continue",
    ],
    results: [
      { label: "LCP mobile", value: "2.1s" },
      { label: "CLS mobile", value: "0.02" },
      { label: "Brands HTML", value: "−70%" },
      { label: "Status", value: "ongoing" },
    ],
    ctaTitle: "Need store improvements — UX or speed?",
    ctaText:
      "We’ll rebuild the catalog, homepage, and path to order — and if the store is already heavy, we’ll tackle speed the same way we did for Almamed.",
  },

  polimer: {
    title: "Polimer online store — ongoing improvements",
    client: "Polimer",
    industry: "Engineering plumbing",
    location: "Voronezh",
    period: "since 2015 · ongoing",
    metric: "10+ yrs",
    metricLabel: "together · since 2015",
    summary:
      "We’ve worked with Polimer since 2015: first traffic and inquiries from search, in 2021 a large Bitrix catalog upgrade, then ongoing storefront support.",
    coverAlt: "polimer-vrn.ru homepage — live view",
    services: ["SEO", "Improvements", "Bitrix", "UX"],
    before: {
      src: "/images/cases/polimer/before.webp",
      alt: "Storefront before improvements",
      caption: "Before: catalog without proper filtering",
    },
    intro:
      "Polimer is a large wholesale and retail plumbing and building-materials business in Voronezh and the region. With us since 2014–2015: we started with SEO (separate case), then took on the Bitrix store — catalog UX and ongoing support.",
    painLead:
      "A long arc. First they needed visibility in a competitive niche — clients from search, not only word of mouth. Then the store itself: a live storefront without real selection — no filters, quiet cards, a slow site. When the catalog and branches grew, a third need appeared: keep Bitrix healthy year after year.",
    challenge:
      "Not a one-off turnkey site, but a long loop: first inquiries from search, then a working catalog and support without changing vendors every two years.",
    pains: [
      {
        title: "Competitive search",
        text: "Plumbing and building materials are a high-volume niche. Without systematic SEO you don’t grow demand from search.",
      },
      {
        title: "No filters and weak cards",
        text: "With a large assortment, without selection and warehouse/brand data, buyers call or go to a competitor.",
      },
      {
        title: "The store must keep moving",
        text: "After the 2021 release, catalog, menu, payment, and mobile can’t freeze — or you fall behind demand again.",
      },
    ],
    journeyLead:
      "Since 2015 — search and inquiries. In 2021 — rebuilt the purchase path: filters, cards, cart, payment, delivery. We stay on Bitrix support: V6 menu, mobile, properties, payment pages.",
    approach: [
      "Since 2015 · SEO: keyword set, rankings, client flow from search",
      "2021 · Store UX: more cards in listings, hover highlight",
      "Built filters and quick jumps between sections",
      "Strengthened the card: code, brand, stock, compare, one-click buy",
      "Benefits block (SVG), Delivery, rebuilt About page",
      "Custom cart, online payment, reviews, fiscal registers, floating menu",
      "Support to this day: V6 catalog menu, mobile, instant pay / split, image audit",
    ],
    plainSpeak: [
      {
        jargon: "Catalog filters and facets",
        plain:
          "Checkboxes on the left (or top) for diameter / brand / stock — so in 10 seconds a thousand SKUs narrow to the ten you need.",
      },
      {
        jargon: "Card with stock and one-click",
        plain:
          "On the product page you immediately see code, warehouse, and brand; buy or ask without hunting the site.",
      },
      {
        jargon: "V6 catalog menu",
        plain:
          "We rebuilt the large section menu: on desktop and mobile it opens predictably, without broken navigation.",
      },
      {
        jargon: "Pages per visit 5.08",
        plain:
          "How many pages people view on average. For a store that’s a strong signal: browsing the catalog is comfortable, not an instant bounce.",
      },
      {
        jargon: "10+ years of support",
        plain:
          "Not ship-and-disappear. Since 2015 we’ve stayed close: first search, then the store, then steady improvements — one vendor, one history.",
      },
    ],
    sections: [
      {
        title: "Homepage storefront today",
        body: "Live polimer-vrn.ru homepage: catalog, search, promos, bonuses, and an online-order discount. Three directions — plumbing, building materials, gates and automation.",
        image: "/images/cases/polimer/2026-home.webp",
      },
      {
        title: "Filters the catalog can’t live without",
        body: "The main pain was selection. We built filters and quick section jumps so a large assortment doesn’t drown in a feed.",
        image: "/images/cases/polimer/filters-1.webp",
      },
      {
        title: "Product card that answers questions",
        body: "Product code, brand linked to the full line, warehouse stock, compare, consult, and one-click buy.",
        image: "/images/cases/polimer/product-card.webp",
      },
      {
        title: "Catalog and hover",
        body: "More cards in the listing, blue frame on hover — light cosmetics that help scan results.",
        image: "/images/cases/polimer/hover.webp",
      },
      {
        title: "Catalog sections",
        body: "Three large directions on a dedicated catalog storefront. Next — V6 menu support and compare properties without marketplace junk.",
        image: "/images/cases/polimer/2026-catalog.webp",
      },
      {
        title: "Mobile storefront",
        body: "From the 2021 release we kept mobile screens in focus. In 2026 — separate mobile and review fixes for real scenarios.",
        image: "/images/cases/polimer/home-mobile.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/polimer/catalog-filters.webp",
        alt: "Catalog with filters",
        caption: "Catalog after improvements",
      },
      {
        src: "/images/cases/polimer/filters-2.webp",
        alt: "Selection in the catalog",
        caption: "Filters and sections",
      },
      {
        src: "/images/cases/polimer/catalog-mobile.webp",
        alt: "Catalog on phone",
        caption: "Mobile catalog",
        fit: "contain",
      },
      {
        src: "/images/cases/polimer/tablet.webp",
        alt: "Tablet layout",
        caption: "Tablet",
        fit: "contain",
      },
    ],
    outcomeLead:
      "Since 2015 Polimer has been with us: first search and inquiries, then a usable store (pages/visit 5.08) and Bitrix support to this day — catalog, payment, mobile.",
    highlights: [
      "Client since 2015 — SEO, store, and support",
      "UX 2021: filters, cards, cart, online payment, delivery",
      "Avg. pages/visit 5.08 after catalog improvements",
      "Bitrix support: V6 catalog menu, mobile, compare properties",
      "Instant-pay / split payment pages, catalog image audit",
      "Live polimer-vrn.ru — we keep going",
    ],
    results: [
      { label: "Together", value: "since 2015" },
      { label: "Depth", value: "5.08" },
      { label: "Platform", value: "Bitrix" },
      { label: "Status", value: "ongoing" },
    ],
    ctaTitle: "Need a vendor for years, not one release?",
    ctaText:
      "Like with Polimer: first results in search and on the site, then steady support without changing teams every two years.",
  },

  torgmag: {
    title: "TorgMag online store modernization",
    client: "TorgMag",
    industry: "Trade and warehouse equipment",
    location: "Voronezh",
    period: "2016 · SEO → 2023 · Bitrix",
    metric: "473",
    metricLabel: "phrases in the SEO core",
    summary:
      "Since 2016 — SEO after a failed previous studio. In 2023 — migration from a custom CMS to Bitrix: menu, orders, payment, and delivery.",
    coverAlt: "torgmagvrn.ru homepage — live view",
    services: ["SEO", "Bitrix", "UX", "Migration"],
    before: {
      src: "/images/cases/torgmag/face-before.webp",
      alt: "Storefront before modernization",
      caption: "Before: custom CMS and header menu",
    },
    intro:
      "TorgMag supplies warehouse and trade equipment in the Black Earth region: racking, refrigeration, furniture, POS. Two major stages with us: first search and inquiries, then migrating the store to Bitrix.",
    painLead:
      "In 2016 the client came with an audit of another SEO studio: big invoices and almost zero result. The site was Ruby on Rails with a custom admin — weak content, indexing holes, and downtime. By 2023 the same custom stack blocked sales: assortment didn’t fit the menu, orders weren’t handled, payment and delivery couldn’t be chosen.",
    challenge:
      "Not a new site from scratch, but two linked stories: grow demand from search on a crooked platform, then calmly move catalog and sales to Bitrix without losing assortment.",
    pains: [
      {
        title: "SEO without a base",
        text: "The previous studio had no meta tags or content, crawlers saw the site poorly, the admin couldn’t edit the obvious — plus regular downtime.",
      },
      {
        title: "Custom CMS not for a store",
        text: "Clone a product, put it in several categories, run orders — almost impossible in the old admin. Visit analytics existed; sales accounting did not.",
      },
      {
        title: "Menu and checkout",
        text: "A large catalog didn’t fit the header menu. Checkout was a short form without payment and delivery choice.",
      },
    ],
    journeyLead:
      "2016: audit of prior work → our SEO on 473 phrases. 2023: move to Bitrix — left catalog menu with icons, proper catalog admin, cart, account, payment, and delivery.",
    approach: [
      "2016 · Independent audit of the previous SEO studio and start of promotion with us",
      "Built a 473-query keyword set — the client approved all of it",
      "Optimization from scratch: meta, content, articles, CTAs, usability",
      "2023 · Decision to leave the custom CMS for Bitrix",
      "Left catalog menu + deeper category tree and icons",
      "Admin: orders, invoices, stock, product cloning, front-side edits",
      "Cart, personal account, payment, delivery services, mailings",
    ],
    plainSpeak: [
      {
        jargon: "Custom CMS on Ruby on Rails",
        plain:
          "Built for themselves without a proper store admin. Looks fine on paper; painful to edit products and orders every day.",
      },
      {
        jargon: "Migration to Bitrix",
        plain:
          "Catalog, prices, orders, payment, and delivery — on a familiar platform where content and sales managers work without hacks.",
      },
      {
        jargon: "Left catalog menu",
        plain:
          "Full assortment on the left with icons, not crushed into a header strip — buyers immediately see racking, refrigeration, furniture.",
      },
      {
        jargon: "473 phrases · ≈80 inquiries",
        plain:
          "SEO work started in 13 days. The keyword set held only working queries; about 80 search inquiries came in per month.",
      },
    ],
    sections: [
      {
        title: "Homepage today",
        body: "Live torgmagvrn.ru homepage on Bitrix: left catalog, search, promos, delivery, and service. A living trade-equipment store.",
        image: "/images/cases/torgmag/2026-home.webp",
      },
      {
        title: "Catalog after the move",
        body: "Sections with SKU counts: racking, refrigeration, trade furniture. Category tree expanded for the real assortment.",
        image: "/images/cases/torgmag/2026-catalog.webp",
      },
      {
        title: "Before: header menu and custom CMS",
        body: "Assortment didn’t fit the header; checkout looked weak vs competitors. The admin couldn’t properly clone products or run orders.",
        image: "/images/cases/torgmag/before-menu.webp",
      },
      {
        title: "After: Bitrix listings and cards",
        body: "New catalog listings after migration — easy overview and a path to the card without fighting the UI.",
        image: "/images/cases/torgmag/after-list1.webp",
      },
      {
        title: "Checkout",
        body: "Name, city with suggest, payment and delivery method — instead of a short “leave your phone” form.",
        image: "/images/cases/torgmag/checkout.webp",
      },
      {
        title: "Orders in the admin",
        body: "The old CMS’s main gap — order accounting. In Bitrix: orders, invoices, stock, sales analytics.",
        image: "/images/cases/torgmag/orders.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/torgmag/cart.webp",
        alt: "Cart",
        caption: "Cart with many line items",
      },
      {
        src: "/images/cases/torgmag/delivery.webp",
        alt: "Delivery in admin",
        caption: "Delivery services and currency",
      },
      {
        src: "/images/cases/torgmag/lk.webp",
        alt: "Personal account",
        caption: "Account: order status",
      },
      {
        src: "/images/cases/torgmag/seo-pos.webp",
        alt: "Rankings on 473 phrases",
        caption: "SEO 2016: keyword rankings",
      },
    ],
    outcomeLead:
      "In 2016 we rebuilt search demand after another studio: 473 phrases, about 80 inquiries per month. In 2023 the store moved to Bitrix — catalog, orders, and checkout work like normal B2B retail.",
    highlights: [
      "SEO 2016: work started in 13 days",
      "473 key phrases · ≈80 inquiries per month",
      "Before us: 32 phrases ranking · ~2 inquiries — after auditing the prior studio",
      "2023: migration from custom CMS (Ruby on Rails) to Bitrix",
      "Left menu, deeper categories, icons, cart, and account",
      "Live torgmagvrn.ru",
    ],
    results: [
      { label: "Phrases", value: "473" },
      { label: "SEO start", value: "13 days" },
      { label: "Inquiries", value: "≈80/mo" },
      { label: "Platform", value: "Bitrix" },
    ],
    ctaTitle: "Custom CMS blocking sales — and search stalled?",
    ctaText:
      "Like with TorgMag: first we’ll map what’s broken in traffic and the admin, then move the store to a platform the team can actually run.",
  },
};
