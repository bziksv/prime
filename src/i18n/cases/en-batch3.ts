import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for featured batch-3 cases.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch3: Record<string, Partial<CaseStudy>> = {
  "fortuna-avto": {
    title: "Paid search for Fortuna-avto — Belgorod auto service",
    client: "Fortuna-avto",
    industry: "Auto service",
    location: "Belgorod",
    period: "since 2016",
    metric: "×4",
    metricLabel: "ad traffic growth",
    summary:
      "After SEO we added Google Ads (and Yandex Search Ads): launch in 2 days, traffic ×4, search CTR ~14%, ≈100 service inquiries.",
    coverAlt: "Auto service — repair in the bay",
    services: ["Google Ads", "Search ads", "Analytics"],
    intro:
      "Fortuna-avto is an auto service in Belgorod. The client first came for SEO (separate Fortuna-avto SEO case), then approved paid search to grow inquiries faster in parallel with organic.",
    painLead:
      "Organic takes longer to ramp, and the bays need load now. Without paid search the shop misses hot repair and service queries. Before us there was essentially no working ads: CTR, visits, and channel profit were near zero.",
    challenge:
      "Launch campaigns in 2 days, raise CTR, lower CPC, and steadily feed the bays with inquiries — without waste on irrelevant placements.",
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
        text: "We had to hit weak spots in rivals’ ads without overpaying per click.",
      },
    ],
    journeyLead:
      "We started with search ads, then connected Google Ads. Several ad variants, sitelinks, location extensions, display creatives, analytics goals, and ongoing bid adjustments.",
    approach: [
      "Site audit and task breakdown by teams",
      "Keyword research, demand and competitor analysis",
      "Strategy: A/B ads, pressure on weak spots in premium placement",
      "Landing pages for ads, sitelinks, location extensions",
      "Display creatives, bid adjustments",
      "Goal chains in analytics; campaign review in Google Ads and search ads",
    ],
    plainSpeak: [
      {
        jargon: "Search CTR ~14%",
        plain:
          "Almost every seventh search impression got a click — ads matched the query, not just “hanging for the report”.",
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
        body: "The case is about loading bays with repair and service work. Visuals — the shop, not a sales floor.",
        image: "/images/cases/fortuna-avto/cover.webp",
      },
      {
        title: "Search & display ads",
        body: "Search and display campaigns: ads, sitelinks, location card. Search held CTR around 14%; display around 0.4%.",
        image: "/images/cases/fortuna-avto/fortuna-direct.webp",
        fit: "contain",
      },
      {
        title: "Google Ads",
        body: "After the first search-ad results we connected Google. Bounce stayed low — about 18% on average.",
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
        body: "One analytics goal — coupon claim: conversion above 2%. In total ≈100 inquiries into the shop.",
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
      "Launched in 2 days, grew traffic about 4×, and brought ≈100 inquiries. We run paid search in Google Ads and local search ads.",
    highlights: [
      "Campaigns live in 2 days",
      "Visits ×4",
      "Search CTR ~14%, bounce ~18–19%",
      "≈100 inquiries into the shop",
      "Google Ads + search ads",
    ],
    results: [
      { label: "Launch", value: "2 days" },
      { label: "Traffic", value: "×4" },
      { label: "Search CTR", value: "~14%" },
      { label: "Inquiries", value: "~100" },
    ],
    ctaTitle: "Need paid search that actually fills bookings?",
    ctaText:
      "We’ll build Google Ads for your services — with analytics goals and clear economics, the way we did for Fortuna-avto.",
  },

  insortex: {
    title: "Insortex website — sorting equipment",
    client: "Insortex",
    industry: "Sorting equipment",
    location: "Russia",
    period: "1.5 months",
    metric: "1.5 mo.",
    metricLabel: "from zero to launch",
    summary:
      "A fresh site from scratch for a sorting-equipment supplier: B2B structure, catalog, custom blocks, and SEO groundwork.",
    coverAlt: "insortex.ru homepage",
    services: ["Development", "UX", "SEO"],
    intro:
      "Insortex is a young company that supplies modern sorting equipment for industry. They needed a brand face online and a lead channel — fast.",
    painLead:
      "The client came with no site and almost no materials. In sorting equipment, without a clear storefront you’re “nobody”: engineers and buyers don’t trust a company that isn’t online. They needed a working B2B tool in a month and a half — not a pretty landing for show.",
    challenge:
      "No designer mockup, little product source material, and the page builder couldn’t cover unique blocks.",
    pains: [
      {
        title: "No face online",
        text: "Without a site it’s hard to sell equipment: nowhere to send a lead from a trade show, messenger, or cold call.",
      },
      {
        title: "Empty content",
        text: "At the start there were almost no texts or descriptions — nothing to “fill overnight”. We needed a living structure to fill as we went.",
      },
      {
        title: "Builder hits the ceiling",
        text: "A basic Ranx Creator covered typical blocks, but a video tile and custom sections needed hand-coded markup.",
      },
    ],
    journeyLead:
      "Instead of endless mockup debates we locked the goal — B2B inquiries — and moved in steps: frame → brand face → catalog → custom where the builder falls short.",
    approach: [
      "Locked the goal: the site = lead channel, not a checkbox storefront",
      "Built the frame on Ranx Creator in brand colors",
      "Designed the homepage as the brand face: trust, FAQ, expertise",
      "Built catalog and cards with flexible specs",
      "Added custom HTML/CSS/JS blocks (video, non-standard sections)",
      "Laid SEO groundwork and handed off to support + promotion",
    ],
    plainSpeak: [
      {
        jargon: "B2B structure and lead magnets",
        plain:
          "A site for businesses that buy equipment: trust and value first, then a request — not retail “buy now”.",
      },
      {
        jargon: "Custom HTML/CSS/JS on top of a builder",
        plain:
          "The builder is a fast frame. Where it’s tight — we carefully add hand code so it looks premium and stays stable.",
      },
      {
        jargon: "SEO groundwork",
        plain:
          "We build so search engines understand pages: clear URLs, headings, copy. Promotion then moves faster.",
      },
    ],
    sections: [
      {
        title: "Homepage as brand face",
        body: "This took the most time: we had to stand out among competitors. Brand colors, trust, FAQ, and expert content — so an engineer or buyer gets in 30 seconds: “these people know the field”.",
        image: "/images/cases/insortex/main-2.webp",
      },
      {
        title: "Video and expert content",
        body: "The builder’s built-in video wasn’t enough — we made a tile with covers. News split into company news and useful materials: an equipment supplier has something to share with the market.",
        image: "/images/cases/insortex/video.webp",
      },
      {
        title: "Catalog without extra clicks",
        body: "Catalog and portfolio so a B2B client quickly finds equipment and use cases — and leaves a request right away.",
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
      "In 1.5 months the company had a working site: ready for traffic, inquiries, and SEO growth. Next — support and promotion in one loop.",
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
    ctaTitle: "Need a website?",
    ctaText:
      "Leave the build to our team — from a landing page to a catalog with inquiries.",
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
      "First we fixed ERP (1C) export, then rebuilt the metal trader’s whole site: catalog structure, filters, cart, responsive layout, and SEO groundwork.",
    coverAlt: "metplus-vrn.ru homepage — live view",
    services: ["Development", "ERP sync", "UX", "SEO"],
    before: {
      src: "/images/cases/metallinvest/compare-old.webp",
      alt: "Old Metallinvest homepage",
      caption: "Before: ~10-year-old site, limited UX",
    },
    intro:
      "Metallinvest Corporation LLC is a metal trader in the Black Earth region: warehouses in Voronezh, branches in Liski and Stary Oskol. They needed a catalog that’s easy to buy from and ready to promote. SEO since 2016 is a separate case.",
    painLead:
      "The site was about ten years old: basic features still worked, but design was dated, usability slipped, and after ERP export the catalog had to be sorted by hand. Competitors weren’t standing still — without a proper storefront growth was hard.",
    challenge:
      "First — ERP sync without manual product sorting. Then a full upgrade: structure, filters, cart, mobile, and markup for SEO.",
    pains: [
      {
        title: "ERP exports — admin sorts",
        text: "After sync, products had to be placed into subcategories by hand. On a large steel assortment that became constant routine.",
      },
      {
        title: "Catalog without filters",
        text: "Category products came as one long list. Finding the right profile or sheet quickly wasn’t possible — bounce grew.",
      },
      {
        title: "Weak structure for SEO",
        text: "Too few subcategories and messy markup: inconvenient for users and hard for search engines to rank.",
      },
    ],
    journeyLead:
      "We started with the client’s pain — ERP. Auto-placement by IDs closed the task on time — and the client asked to refresh the whole site: design, structure, cart, responsive.",
    approach: [
      "Set up ERP (1C) sync: product IDs → auto-placement into folders",
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
        jargon: "ERP sync (1C)",
        plain:
          "Products from the accounting system land in the right site sections on their own — managers don’t hand-sort hundreds of SKUs after every export.",
      },
      {
        jargon: "Deep catalog + filters",
        plain:
          "Instead of one long sheet — clear subcategories and a filter. Buyers find rebar or sheet faster, and SEO gets landing pages.",
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
        body: "We originally agreed only on sync. Auto-placement by IDs worked — and the client expanded the job to a full resource refresh.",
        image: "/images/cases/metallinvest/structure-1.webp",
      },
      {
        title: "Catalog, menu, and filters",
        body: "New subcategories, dropdown menu, and listing filters: faster for buyers to navigate and easier to promote steel product groups.",
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
      "A modern B2B steel catalog instead of a ten-year-old storefront: ERP doesn’t break the structure, buyers find products faster, the site is ready to promote. Live on metplus-vrn.ru.",
    highlights: [
      "ERP sync without hand sorting",
      "Full redesign after a successful pilot",
      "Deep catalog + filters",
      "Convenient cart",
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
      "We’ll build structure, sync, and the purchase path — the way we did for Metallinvest.",
  },
};
