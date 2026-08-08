import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for featured batch-3 cases.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch3: Record<string, Partial<CaseStudy>> = {
  "fortuna-avto": {
    title: "Google Ads for Fortuna-avto — Belgorod auto service",
    client: "Fortuna-avto",
    industry: "Auto service",
    location: "Belgorod",
    period: "since 2016",
    metric: "×4",
    metricLabel: "ad traffic growth",
    summary:
      "After SEO we launched Google Ads (with local search ads in parallel): live in 2 days, traffic ×4, search CTR ~14%, about 100 service inquiries.",
    coverAlt: "Auto service — repair in the bay",
    services: ["Google Ads", "Display", "Google Analytics"],
    intro:
      "Fortuna-avto is an auto service in Belgorod. They started with SEO (separate Fortuna-avto SEO case), then approved paid search so inquiries could ramp faster alongside organic.",
    painLead:
      "Organic takes longer to ramp, and the bays need work now. Without paid search the shop misses hot repair and service queries. Before us there was basically no working ads account — CTR, visits, and channel profit near zero.",
    challenge:
      "Launch campaigns in 2 days, raise CTR, lower CPC, and keep the bays fed with inquiries — without burning budget on irrelevant placements.",
    pains: [
      {
        title: "Need a fast funnel",
        text: "SEO was already running, but the business needed inquiries now — from search and display.",
      },
      {
        title: "Zero paid baseline",
        text: "No solid CTR, no stable paid visits, no clear profit from the channel.",
      },
      {
        title: "Competitors in premium slots",
        text: "We had to exploit weak spots in rivals’ ads without overpaying per click.",
      },
    ],
    journeyLead:
      "We led with Google Ads search and Display, with local search ads in the mix. Several ad variants, sitelinks, location extensions, display creatives, Google Analytics goals, and ongoing bid adjustments.",
    approach: [
      "Site audit and task breakdown by teams",
      "Keyword research, demand and competitor analysis",
      "Strategy: A/B ads, pressure on weak spots in premium placement",
      "Landing pages for ads, sitelinks, location extensions",
      "Display creatives, bid adjustments",
      "Goal chains in Google Analytics; campaign review in Google Ads (and local search ads)",
    ],
    plainSpeak: [
      {
        jargon: "Search CTR ~14%",
        plain:
          "Almost every seventh search impression earned a click — ads matched the query, not just “running for the report.”",
      },
      {
        jargon: "Bounce ~18–19%",
        plain:
          "Few accidental visits: people read and move toward the goal instead of closing the tab right away.",
      },
      {
        jargon: "≈100 inquiries",
        plain:
          "Real calls and requests into the shop — not clicks for a pretty report with no bay booking.",
      },
    ],
    sections: [
      {
        title: "Auto service, not a showroom",
        body: "The case is about loading bays with repair and service work. Visuals show the shop, not a sales floor.",
        image: "/images/cases/fortuna-avto/cover.webp",
      },
      {
        title: "Search & Display",
        body: "Search and Display campaigns: ads, sitelinks, location extension. Search held CTR around 14%; Display around 0.4%.",
        image: "/images/cases/fortuna-avto/fortuna-direct.webp",
        fit: "contain",
      },
      {
        title: "Google Ads",
        body: "Google Ads ran as the core paid channel. Bounce stayed low — about 18% on average.",
        image: "/images/cases/fortuna-avto/fortuna-google.webp",
        fit: "contain",
      },
      {
        title: "CTR and traffic",
        body: "Visits grew roughly 4×. We tracked CTR and CPC separately — raise the first, lower the second.",
        image: "/images/cases/fortuna-avto/fortuna-ctr.webp",
        fit: "contain",
      },
      {
        title: "Conversion to coupon / inquiry",
        body: "One analytics goal — coupon claim: conversion above 2%. In total about 100 inquiries into the shop.",
        image: "/images/cases/fortuna-avto/fortuna-conv.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/fortuna-avto/fortuna-traffic.webp",
        alt: "Traffic chart",
        caption: "Visits",
        fit: "contain",
      },
      {
        src: "/images/cases/fortuna-avto/fortuna-cover.webp",
        alt: "Insurance repair theme",
        caption: "Ad themes",
      },
    ],
    outcomeLead:
      "Live in 2 days, traffic up about 4×, about 100 inquiries. Paid search ran primarily in Google Ads, with local search ads in parallel.",
    highlights: [
      "Campaigns live in 2 days",
      "Visits ×4",
      "Search CTR ~14%, bounce ~18–19%",
      "≈100 inquiries into the shop",
      "Google Ads · Display · analytics goals",
    ],
    results: [
      { label: "Launch", value: "2 days" },
      { label: "Traffic", value: "×4" },
      { label: "Search CTR", value: "~14%" },
      { label: "Inquiries", value: "~100" },
    ],
    ctaTitle: "Need Google Ads that actually fills bookings?",
    ctaText:
      "We’ll build campaigns for your services — with analytics goals and clear economics, the same way we did for Fortuna-avto.",
  },

  insortex: {
    title: "Insortex website — sorting equipment",
    client: "Insortex",
    industry: "Sorting equipment",
    location: "B2B",
    period: "1.5 months",
    metric: "1.5 mo.",
    metricLabel: "from zero to launch",
    summary:
      "A site from scratch for a sorting-equipment supplier: B2B structure, catalog, custom blocks, and SEO groundwork — live in 1.5 months.",
    coverAlt: "insortex.ru homepage",
    services: ["Development", "UX", "SEO"],
    intro:
      "Insortex is a young company that supplies modern sorting equipment for industry. They needed a brand face online and a lead channel — fast.",
    painLead:
      "They came with no site and almost no materials. In sorting equipment, without a clear storefront you’re invisible: engineers and buyers don’t trust a company that isn’t online. They needed a working B2B tool in a month and a half — not a pretty landing for show.",
    challenge:
      "No designer mockup, little product source material, and the page builder couldn’t cover the unique blocks.",
    pains: [
      {
        title: "No face online",
        text: "Without a site it’s hard to sell equipment: nowhere to send a lead from a trade show, messenger, or cold call.",
      },
      {
        title: "Empty content",
        text: "At the start there were almost no texts or descriptions — nothing to fill overnight. We needed a living structure to fill as we went.",
      },
      {
        title: "Builder hits the ceiling",
        text: "A basic Ranx Creator covered typical blocks, but a video tile and custom sections needed hand-coded markup.",
      },
    ],
    journeyLead:
      "Instead of endless mockup debates we locked the goal — B2B inquiries — and moved in steps: frame → brand face → catalog → custom where the builder falls short.",
    approach: [
      "Locked the goal: the site is a lead channel, not a checkbox storefront",
      "Built the frame on Ranx Creator in brand colors",
      "Designed the homepage as the brand face: trust, FAQ, expertise",
      "Built catalog and cards with flexible specs",
      "Added custom HTML/CSS/JS blocks (video, non-standard sections)",
      "Laid SEO groundwork and handed off to support and promotion",
    ],
    plainSpeak: [
      {
        jargon: "B2B structure and lead magnets",
        plain:
          "A site for businesses that buy equipment: trust and value first, then a request — not retail “buy now.”",
      },
      {
        jargon: "Custom HTML/CSS/JS on a builder",
        plain:
          "The builder is a fast frame. Where it’s tight, we carefully add hand code so it looks premium and stays stable.",
      },
      {
        jargon: "SEO groundwork",
        plain:
          "We build so search engines can read the pages: clear URLs, headings, copy. Promotion then has something solid to grow.",
      },
    ],
    sections: [
      {
        title: "Homepage as brand face",
        body: "This took the most time — we had to stand out. Brand colors, trust, FAQ, and expert content so an engineer or buyer gets it in 30 seconds: these people know the field.",
        image: "/images/cases/insortex/main-2.webp",
      },
      {
        title: "Video and expert content",
        body: "The builder’s built-in video wasn’t enough — we made a tile with covers. News splits into company updates and useful materials: an equipment supplier has something to share with the market.",
        image: "/images/cases/insortex/video.webp",
      },
      {
        title: "Catalog without extra clicks",
        body: "Catalog and portfolio so a B2B buyer quickly finds equipment and use cases — and leaves a request right away.",
        image: "/images/cases/insortex/catalog.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/insortex/main-3.webp",
        alt: "Insortex homepage screen",
        caption: "Homepage — brand face",
      },
      {
        src: "/images/cases/insortex/portfolio.webp",
        alt: "Portfolio",
        caption: "Project portfolio",
      },
      {
        src: "/images/cases/insortex/news.webp",
        alt: "News section",
        caption: "News and expert content",
      },
    ],
    outcomeLead:
      "In 1.5 months the company had a working site — ready for traffic, inquiries, and SEO work. Next: support and promotion in one loop.",
    highlights: [
      "Site from scratch live in 1.5 months",
      "Design to brand book, not a generic builder look",
      "Flexible product cards with specs",
      "Dedicated order page",
      "Custom where the builder wasn’t enough",
      "Next — SEO and support",
    ],
    results: [
      { label: "Launch time", value: "1.5 mo." },
      { label: "Stack", value: "Ranx +" },
      { label: "Channel", value: "B2B" },
      { label: "Next", value: "SEO" },
    ],
    ctaTitle: "Need a B2B site for equipment?",
    ctaText:
      "We’ll ship a brand-facing catalog that takes inquiries — the same way we did for Insortex.",
  },

  metallinvest: {
    title: "New Metallinvest website",
    client: "Metallinvest Corporation",
    industry: "Steel products",
    location: "Voronezh",
    period: "2020",
    metric: "ERP → site",
    metricLabel: "from sync to a full redesign",
    summary:
      "First we fixed ERP export into the catalog, then rebuilt the metal trader’s whole site: structure, filters, cart, responsive layout, and SEO groundwork.",
    coverAlt: "metplus-vrn.ru homepage — live view",
    services: ["Development", "ERP sync", "UX", "SEO"],
    before: {
      src: "/images/cases/metallinvest/compare-old.webp",
      alt: "Old Metallinvest homepage",
      caption: "Before: ~10-year-old site, limited UX",
    },
    intro:
      "Metallinvest Corporation is a metal trader with warehouses in Voronezh and branches in Liski and Stary Oskol. They needed a catalog that’s easy to buy from and ready for SEO. Search work since 2016 is a separate case.",
    painLead:
      "The site was about ten years old. Basics still worked, but the design was dated, usability had slipped, and after every ERP export someone had to sort the catalog by hand. Competitors weren’t standing still — without a proper storefront, growth stalled.",
    challenge:
      "First: ERP sync without manual product sorting. Then a full upgrade — structure, filters, cart, mobile, and markup for SEO.",
    pains: [
      {
        title: "ERP exports — admin sorts",
        text: "After sync, products had to be placed into subcategories by hand. On a large steel assortment that became constant busywork.",
      },
      {
        title: "Catalog without filters",
        text: "Category products came as one long list. Finding the right profile or sheet quickly wasn’t possible — bounce climbed.",
      },
      {
        title: "Weak structure for SEO",
        text: "Too few subcategories and messy markup: awkward for buyers and hard for search engines to understand.",
      },
    ],
    journeyLead:
      "We started with the client’s pain — ERP. Auto-placement by IDs closed that job on time, and the client asked to refresh the whole site: design, structure, cart, responsive.",
    approach: [
      "Set up ERP sync: product IDs → auto-placement into folders",
      "Rebuilt catalog structure and dropdown menu with new subcategories",
      "Added filters on product listing pages",
      "Reworked the cart: purchase path (except payment) through it",
      "Updated design, section icons, header and footer with links",
      "Fixed markup and semantics for SEO",
      "Made it responsive: menu, banner, compact catalog on mobile",
      "Published price lists and docs in convenient formats",
    ],
    plainSpeak: [
      {
        jargon: "ERP sync",
        plain:
          "Products from the accounting system land in the right site sections on their own — managers don’t hand-sort hundreds of SKUs after every export.",
      },
      {
        jargon: "Deep catalog + filters",
        plain:
          "Instead of one long sheet — clear subcategories and a filter. Buyers find rebar or sheet faster, and SEO gets landing pages to work with.",
      },
      {
        jargon: "Cart as the purchase path",
        plain:
          "The order builds in the cart step by step. Less confusion — fewer abandoned requests halfway.",
      },
    ],
    sections: [
      {
        title: "ERP first — then the whole site",
        body: "We originally agreed only on sync. Auto-placement by IDs worked — and the client expanded the job to a full site refresh.",
        image: "/images/cases/metallinvest/structure-1.webp",
      },
      {
        title: "Catalog, menu, and filters",
        body: "New subcategories, a dropdown menu, and listing filters: faster for buyers to navigate and cleaner product-group pages for SEO.",
        image: "/images/cases/metallinvest/filter.webp",
      },
      {
        title: "Cart and service materials",
        body: "Reworked the cart and added price lists with documentation. The footer got the right links — navigation doesn’t dead-end at the bottom.",
        image: "/images/cases/metallinvest/cart.webp",
      },
      {
        title: "Live view",
        body: "The site lives on metplus-vrn.ru: rebar, beams, pipes, sheet, stainless; cutting and delivery; warehouses in Voronezh, Liski, Stary Oskol, and Moscow.",
        image: "/images/cases/metallinvest/cover.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/metallinvest/old-catalog.webp",
        alt: "Old catalog",
        caption: "Before: catalog without proper filters",
      },
      {
        src: "/images/cases/metallinvest/new-main.webp",
        alt: "New homepage after redesign",
        caption: "After: refreshed homepage",
      },
      {
        src: "/images/cases/metallinvest/menu.webp",
        alt: "Catalog dropdown menu",
        caption: "New menu and structure",
      },
      {
        src: "/images/cases/metallinvest/mobile-new.webp",
        alt: "Mobile version",
        caption: "Responsive on phone",
      },
    ],
    outcomeLead:
      "A modern B2B steel catalog instead of a ten-year-old storefront: ERP doesn’t break the structure, buyers find products faster, and the site is ready for SEO. Live on metplus-vrn.ru.",
    highlights: [
      "ERP sync without hand sorting",
      "Full redesign after a successful pilot",
      "Deep catalog + filters",
      "Clear cart purchase path",
      "Responsive layout and clean markup for SEO",
      "Price lists and docs on the site",
    ],
    results: [
      { label: "Start", value: "ERP" },
      { label: "Catalog", value: "filters" },
      { label: "Was", value: "~10 yrs" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need a catalog tied to ERP and inquiries?",
    ctaText:
      "We’ll build structure, sync, and the purchase path — the same way we did for Metallinvest.",
  },
};
