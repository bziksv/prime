import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-7 cases (non-featured web).
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch7: Record<string, Partial<CaseStudy>> = {
  lormag: {
    title: "LorMag online store",
    client: "LorMag",
    industry: "ENT equipment",
    location: "Nationwide",
    period: "support · Bitrix",
    metric: "~1,600",
    metricLabel: "SKUs in the catalog",
    summary:
      "We run an ENT-equipment store on Bitrix (enext): ~1,600 SKUs, account SEF URLs, image registry, git deploy. Live at lormag.ru.",
    coverAlt: "LorMag store homepage — ENT equipment",
    services: ["Bitrix", "E-commerce", "UX", "Support"],
    intro:
      "LorMag is an online store of otorhinolaryngology equipment for clinics and practices: ~1,600 SKUs, ~200 sections, KaWe/Riester otoscopes, ENT units, audiometers, delivery. Platform — Bitrix, enext theme (altop.enext). We support the storefront, catalog, and buyer account.",
    painLead:
      "A narrow B2B Bitrix catalog: deep ENT section tree, quote requests, city picker, and a stable buyer account — otherwise clinics never reach order and purchase history.",
    challenge:
      "Keep a living ENT-equipment store: catalog and cards for clinics, account SEF, media audit, and predictable git deploy — without rewriting the shop.",
    pains: [
      {
        title: "Account SEF URLs",
        text: "/personal/orders/ and profile returned 404 without urlrewrite rules — buyers couldn’t see orders.",
      },
      {
        title: "Media across hundreds of cards",
        text: "Need an image registry from uploads/infoblocks: where a file is used, link, Excel export for audit.",
      },
      {
        title: "Catalog for an ENT practice",
        text: "Otoscopes, units, audiometry — deep tree and a “request a quote” path next to retail price.",
      },
    ],
    journeyLead:
      "We support on top of enext: fixed account SEF, added an image registry and deploy docs, keep the storefront running without downtime.",
    approach: [
      "ENT catalog: otoscopes, units, audiometers, tools — filters, grid, KaWe/Riester brands and more",
      "Card: gallery, specs, buy / request a quote, delivery by city",
      "Buyer account: SEF urlrewrite for /personal/order/ and /personal/",
      "Image registry (tools/site-images.php) with name/SKU search and Excel",
      "Git-first: docs, local soft-dev, prod deploy only on request",
      "City picker, offers, partial-phrase search",
    ],
    plainSpeak: [
      {
        jargon: "Account SEF",
        plain:
          "Orders and profile open on normal URLs, not 404.",
      },
      {
        jargon: "Image registry",
        plain:
          "Admins see which photo is tied to which product and can export the list to Excel.",
      },
      {
        jargon: "Request a quote",
        plain:
          "For practice kits or wholesale — a request to the manager, not only a “buy” button.",
      },
      {
        jargon: "enext on Bitrix",
        plain:
          "A ready store theme: catalog, cart, account — we adapt it for the ENT niche instead of building from scratch.",
      },
    ],
    sections: [
      {
        title: "Homepage storefront",
        body: "Header with search and city, slider (otoscopes, video endoscope, ENT unit), “recommended / new / hits” tabs, category grid.",
        image: "/images/cases/lormag/home.webp",
      },
      {
        title: "Otoscope catalog",
        body: "Section with filter and grid: KaWe, Riester, and more. SEO copy plus personal recommendations.",
        image: "/images/cases/lormag/catalog.webp",
      },
      {
        title: "Card for the clinic",
        body: "KaWe EUROLIGHT C30: gallery, description and specs, price, Buy, compare, delivery to the selected city.",
        image: "/images/cases/lormag/product.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/lormag/logo.webp",
        alt: "LorMag logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/lormag/catalog.webp",
        alt: "LorMag otoscope catalog",
        caption: "Catalog",
      },
      {
        src: "/images/cases/lormag/product.webp",
        alt: "KaWe otoscope product card",
        caption: "Product card",
      },
    ],
    outcomeLead:
      "A living ENT-equipment store on Bitrix enext: ~1,600 SKUs, stable account and storefront, media registry. Site: lormag.ru.",
    highlights: [
      "ENT store · ~1,600 products · ~200 sections",
      "Bitrix enext · KaWe · Riester · units · audiometry",
      "Buy and quote request · city picker · delivery",
      "Account SEF · image registry",
      "Git support · docs and soft-local",
      "Live lormag.ru",
    ],
    results: [
      { label: "Products", value: "~1,600" },
      { label: "Platform", value: "Bitrix" },
      { label: "Focus", value: "catalog + account" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need a medical-equipment store or enext improvements?",
    ctaText:
      "We’ll shape the catalog and account for clinics — the same way we did for LorMag.",
  },

  medplakaty: {
    title: "Medplakaty online store",
    client: "Medplakaty",
    industry: "Medical and educational posters",
    location: "Nationwide",
    period: "support · Bitrix",
    metric: "~470",
    metricLabel: "SKUs in the catalog",
    summary:
      "We run a medical and educational poster store on Bitrix: ~470 SKUs, slider and homepage, PHP 8 fix, CSS/JS versioning. Live at medplakaty.ru.",
    coverAlt: "Medplakaty store homepage",
    services: ["Bitrix", "E-commerce", "UX", "Support"],
    intro:
      "Medplakaty is an online store of medical and educational posters: anatomy, healthy living, infections, first aid, learning alphabets; delivery and a toll-free line. Platform — Bitrix, medical-templates theme. We support the storefront, catalog, and deploys.",
    painLead:
      "A niche print catalog on Bitrix: the slider and homepage drift after CSS edits, the catalog crashes on PHP 8, and the browser keeps old styles — the storefront looks broken for schools and clinics.",
    challenge:
      "Stabilize a living poster store: homepage and slider, catalog with material/format variants, predictable git deploy — without rewriting the shop.",
    pains: [
      {
        title: "Slider and homepage layout",
        text: "Spacing and mobile styles leaked onto desktop: the alphabet banner and category grid looked crooked.",
      },
      {
        title: "Catalog on PHP 8",
        text: "After an environment upgrade the catalog crashed — need a code fix and page background, not a PHP rollback.",
      },
      {
        title: "Asset cache",
        text: "After deploy the browser pulled an old CSS/JS bundle — the slider broke again for some clients.",
      },
    ],
    journeyLead:
      "We support medical-templates: fixed the slider and PHP 8, filled popular categories, versioned assets, and set up soft-local plus deploy.",
    approach: [
      "Catalog: anatomy, healthy living, pathologies, educational posters, health bulletin — section tree and cards",
      "Card: paper/canvas and A1+/A2+ format variants, price, Buy",
      "Homepage: slider (alphabets and more), popular categories and best offers",
      "Slider fix: aspect-ratio, valid markup, no mobile-CSS leak",
      "Catalog fix for PHP 8; template CSS/JS versioning",
      "Git-first: docs, soft-dev :8090, prod deploy only on request",
    ],
    plainSpeak: [
      {
        jargon: "Poster variants",
        plain:
          "One subject — several formats and materials (gloss/canvas, A1+/A2+); price and Buy depend on the choice.",
      },
      {
        jargon: "CSS/JS versioning",
        plain:
          "Style files get a version — after deploy the browser doesn’t show the old broken slider from cache.",
      },
      {
        jargon: "PHP 8 and the catalog",
        plain:
          "Store code was adapted to the new PHP so the product section opens again without an error.",
      },
      {
        jargon: "Popular categories",
        plain:
          "Anatomy and other blocks show on the homepage right away — no digging through the full catalog tree.",
      },
    ],
    sections: [
      {
        title: "Homepage storefront",
        body: "Header with catalog and search, educational-alphabet slider, section sidebar, and a Popular categories block.",
        image: "/images/cases/medplakaty/home.webp",
      },
      {
        title: "Anatomy catalog",
        body: "Subsections by body systems: respiratory, muscular, nervous, ENT, and more — a grid with poster previews.",
        image: "/images/cases/medplakaty/catalog.webp",
      },
      {
        title: "Poster product card",
        body: "Subject, SKU, material and format choice, unit price, and Buy — path from section to cart.",
        image: "/images/cases/medplakaty/product.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/medplakaty/logo.webp",
        alt: "Medplakaty logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/medplakaty/catalog.webp",
        alt: "Anatomy poster catalog",
        caption: "Catalog",
      },
      {
        src: "/images/cases/medplakaty/product.webp",
        alt: "Medical poster product card",
        caption: "Product card",
      },
    ],
    outcomeLead:
      "A living medical and educational poster store on Bitrix: ~470 SKUs, stable homepage and catalog, git support. Site: medplakaty.ru.",
    highlights: [
      "Poster store · ~470 products · anatomy · healthy living · education",
      "Bitrix · medical-templates theme",
      "Slider and homepage · popular categories",
      "Format/material variants on the card",
      "PHP 8 fix · CSS/JS versioning · git deploy",
      "Live medplakaty.ru",
    ],
    results: [
      { label: "Products", value: "~470" },
      { label: "Platform", value: "Bitrix" },
      { label: "Focus", value: "storefront + catalog" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need a print catalog store or Bitrix improvements?",
    ctaText:
      "We’ll build a variant-aware catalog and a stable storefront — the same way we did for Medplakaty.",
  },

  doskivrn: {
    title: "Veles lumber yard website",
    client: "Veles",
    industry: "Lumber",
    location: "Voronezh",
    period: "site · PHP/Smarty · support",
    metric: "calculator",
    metricLabel: "volume and cost per m³",
    summary:
      "We built the Veles yard site (doskivrn.ru): board and timber catalog, price list, online m³ calculator, and a manager request. SEO for the same yard — see the pilomaterialov case.",
    coverAlt: "Veles site — lumber in Voronezh",
    services: ["Site from scratch", "Catalog", "Calculator", "CTA", "Support"],
    intro:
      "Veles is a lumber yard in Voronezh: edged and planed board, timber, lining, OSB, plywood. www.doskivrn.ru is custom PHP + Smarty: catalog, price list, cubature calculator, and online request. Search promotion — separate pilomaterialov case.",
    painLead:
      "Without their own site there’s nowhere to send search and ad traffic: price list in Excel, m³ calculated by a manager on the phone, no landings for board or timber.",
    challenge:
      "Build a working resource for buyers: catalog tree, prices, volume/cost calculator, and a request form — on a simple stack the client can run in the admin.",
    pains: [
      {
        title: "No storefront for SEO and requests",
        text: "Competitors already show up in search. Without a site and landings for the assortment, there’s nowhere to send traffic.",
      },
      {
        title: "m³ calculated by hand",
        text: "Width × length × thickness × quantity — the manager uses a pocket calculator; the buyer wants to estimate budget themselves.",
      },
      {
        title: "Price list and catalog drift",
        text: "Need pages for board/timber/OSB and a summary price list, plus a request form with privacy consent.",
      },
    ],
    journeyLead:
      "We built a custom PHP/Smarty site to an SEO brief: menu, catalog pages, price list, calculator, and a sidebar request form.",
    approach: [
      "CMS on PHP + Smarty: pages, menu, news/articles, admin",
      "Product catalog: edged/planed/tongue-and-groove board, timber, OSB, services",
      "Landings for sizes and assortment (~30 URLs in the sitemap)",
      "Online calculator: product type, dimensions, qty → volume and price estimate",
      "Price list and online request (name, company, phone, email)",
      "Yard contacts in Voronezh, cookies/privacy — storefront support",
    ],
    plainSpeak: [
      {
        jargon: "m³ calculator",
        plain:
          "The buyer sets sizes and quantity — the site calculates cubature and an approximate total, without a “please calculate on paper” call.",
      },
      {
        jargon: "Assortment landings",
        plain:
          "Separate pages for board, timber, OSB — ready to promote and send ad traffic to the right product.",
      },
      {
        jargon: "Online request",
        plain:
          "Sidebar form: name, company, phone — the yard manager gets the request without messenger chaos.",
      },
      {
        jargon: "PHP + Smarty",
        plain:
          "A light custom site: content edits in the admin, without heavy Bitrix — fits a yard with a price list and calculator.",
      },
    ],
    sections: [
      {
        title: "Product catalog",
        body: "Lumber, finishing, composites, and production services — with previews of edged, planed, and tongue-and-groove board.",
        image: "/images/cases/doskivrn/catalog.webp",
      },
      {
        title: "Calculator",
        body: "Product type, width/length/thickness, piece count — volume calculation and a price-per-m³ estimate.",
        image: "/images/cases/doskivrn/calc.webp",
      },
      {
        title: "Assortment card",
        body: "Edged-board page: description, use cases, path to prices and a request.",
        image: "/images/cases/doskivrn/product.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/doskivrn/logo.webp",
        alt: "Veles logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/doskivrn/calc.webp",
        alt: "Lumber calculator",
        caption: "Calculator",
      },
      {
        src: "/images/cases/doskivrn/price.webp",
        alt: "Veles price list",
        caption: "Price list",
      },
    ],
    outcomeLead:
      "A living Veles yard site: catalog, price list, m³ calculator, and requests. Live at www.doskivrn.ru. Search results — in the pilomaterialov case.",
    highlights: [
      "Veles lumber yard site · Voronezh",
      "Board/timber catalog · price list · ~30 landings",
      "Online volume and cost calculator (m³)",
      "Online request to the manager · yard contacts",
      "PHP + Smarty stack · content admin",
      "SEO for the same yard — pilomaterialov case · live doskivrn.ru",
    ],
    results: [
      { label: "Landings", value: "~30" },
      { label: "Calculator", value: "m³" },
      { label: "Stack", value: "PHP/Smarty" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need a building-materials yard site with a calculator?",
    ctaText:
      "We’ll build the catalog, price list, and m³ calc — the same way we did for Veles.",
  },
};
