import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-6 cases (non-featured web).
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch6: Record<string, Partial<CaseStudy>> = {
  kawe: {
    title: "KaWe website development",
    client: "KaWe",
    industry: "Medical equipment",
    location: "Nationwide",
    period: "2020",
    metric: "Bitrix",
    metricLabel: "store + inventory sync",
    summary:
      "Online store for German KaWe medical equipment on Bitrix: clear catalog, two-click cart, MoySklad inventory sync, and an admin the owner can run.",
    coverAlt: "kawe.su catalog — live store view",
    services: ["Development", "Bitrix", "UX", "Integrations"],
    intro:
      "KaWe is German medical equipment: otoscopes, laryngoscopes, and diagnostic kits. They needed a direct-from-manufacturer storefront — no noise, easy ordering, and simple management.",
    painLead:
      "Medical gear sells on brand trust and order speed. If the catalog is messy and the admin scares the owner, neither SEO nor ads will save it. They needed a Bitrix store: clean for buyers, clear for the owner, plus warehouse sync.",
    challenge:
      "Build a Bitrix store that feels unique: usability, clean markup without SEO-killing errors, and admin details — from inventory sync to new-product stickers and PDF invoices.",
    pains: [
      {
        title: "Bitrix too complex for the owner",
        text: "A stock Bitrix store is often overloaded. The owner needs an admin where prices, promos, and banners change without a developer for every tweak.",
      },
      {
        title: "Catalog without a purchase path",
        text: "A wide medical assortment is useless if search, filters, and cart are awkward — checkout should fit in a couple of clicks.",
      },
      {
        title: "On-site errors kill SEO",
        text: "Code and markup bugs wipe out promotion. They needed a clean base for organic and paid traffic.",
      },
    ],
    journeyLead:
      "We built the store around two roles: the buyer finds and orders fast; the owner runs the storefront and warehouse without pain. Then — homepage with offers, side menu, cart, inventory sync, and admin features.",
    approach: [
      "Clean header: phone, cart, search — no visual noise",
      "Wide banner slider and a persistent side catalog menu",
      "Promo and new-product blocks on the homepage + category filters",
      "Order in a couple of clicks; footer with delivery, FAQ, discounts, and signup",
      "Lazy load for faster pages",
      "MoySklad sync, PDF invoices, bulk prices",
      "New-product stickers, side promo banners, email from the UI",
      "Removed code and markup errors for SEO and ads",
    ],
    plainSpeak: [
      {
        jargon: "Bitrix + MoySklad",
        plain:
          "The Bitrix store is tied to inventory software: stock and products don’t live in two worlds, and a PDF invoice can go out from the site.",
      },
      {
        jargon: "Lazy load and clean markup",
        plain:
          "Images load as you scroll — the page is faster. Without code mess, search and ads behave more predictably.",
      },
      {
        jargon: "Admin for the owner",
        plain:
          "Colors, promo banners, new stickers, on/off products, and SEO text — from the menu, without editing code every time.",
      },
    ],
    sections: [
      {
        title: "Homepage without extras",
        body: "Phone, search, and cart in the header. Banner for offers; catalog on the left on every page. Promos and new items in view — no hunting discounts by section.",
        image: "/images/cases/kawe/main-1.webp",
      },
      {
        title: "Catalog and filters",
        body: "Categories have filters and display controls. Buyers find the right device faster; checkout takes a couple of clicks.",
        image: "/images/cases/kawe/main-2.webp",
      },
      {
        title: "Footer as service",
        body: "Newsletter signup, delivery, news, FAQ, discounts, and contacts — all in the footer. The site covers sales and customer support.",
        image: "/images/cases/kawe/footer.webp",
      },
      {
        title: "Live view",
        body: "The store is still on kawe.su: KaWe tools and devices with delivery, catalog, search, and checkout.",
        image: "/images/cases/kawe/cover.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/kawe/main-3.webp",
        alt: "KaWe product catalog",
        caption: "Catalog by direction",
      },
      {
        src: "/images/cases/kawe/main-4.webp",
        alt: "KaWe laryngoscopes section",
        caption: "Category and subcategories",
      },
      {
        src: "/images/cases/kawe/main-5.webp",
        alt: "KaWe stethoscopes",
        caption: "Device storefront",
      },
      {
        src: "/images/cases/kawe/preview.webp",
        alt: "KaWe homepage preview",
        caption: "Project preview",
      },
    ],
    outcomeLead:
      "A working medical-equipment store: easy to buy, easy for the owner to run, clean base for SEO and ads. kawe.su is still live.",
    highlights: [
      "Bitrix store for the KaWe brand",
      "Clear storefront: search, menu, cart, offers",
      "Inventory sync and PDF invoices",
      "Lazy load and clean markup for SEO",
      "Admin features: banners, stickers, bulk prices, email",
      "Ready for organic and paid traffic",
    ],
    results: [
      { label: "Stack", value: "Bitrix" },
      { label: "Inventory", value: "MoySklad" },
      { label: "Order", value: "2 clicks" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need a medical-equipment store on Bitrix?",
    ctaText:
      "We’ll build the catalog, cart, and warehouse sync — clear for buyers and owners, like kawe.su.",
  },

  kargo24: {
    title: "kargo24.su website development",
    client: "KarGo24",
    industry: "Special equipment rental and freight",
    location: "Nationwide",
    period: "2020",
    metric: ">4 min",
    metricLabel: "average time on site",
    summary:
      "A dispatch-style service for special equipment and freight: niche marketplace, custom UI, responsive layout, and an account with payments — without a middleman dispatcher.",
    coverAlt: "KarGo24 homepage — special equipment search (project archive)",
    services: ["Development", "UX", "Account", "Responsive"],
    intro:
      "KarGo24 is a dispatch-style web service: customers find special-equipment and truck owners in the right city themselves. A marketplace for individuals and companies, direct contact, and site-service bonuses.",
    painLead:
      "On general classifieds for special equipment — noise and middlemen. They needed their own niche: a no-dispatcher service where customer and equipment owner meet directly — with a usable account, payments, and a brand face, not a stock template.",
    challenge:
      "Build a living marketplace from scratch: specialization, memorable UI, personal account, responsive layout, and filled listings — so people stay on the site instead of leaving in 15 seconds.",
    pains: [
      {
        title: "Niche drowned in general boards",
        text: "On universal platforms it’s hard to stand out: special-equipment ads mix with thousands of others. They needed a service only about equipment and freight.",
      },
      {
        title: "A stock template won’t stick",
        text: "Another grey catalog looks like every competitor. They needed custom icons, animation, and clear roles: customer / equipment owner / carrier.",
      },
      {
        title: "Without an account the service is dead",
        text: "Listings, balance, bonuses, and payments must live in a personal account — or the marketplace doesn’t scale.",
      },
    ],
    journeyLead:
      "We locked a narrow niche and went into product: homepage search by tonnage and equipment → custom icon pack → responsive → personal account with online payments and user roles.",
    approach: [
      "Locked the niche: find and rent special equipment / trucks without a dispatcher",
      "Built the homepage: hero, 1–20 t tonnage, service sections",
      "Drew a custom equipment icon pack and homepage animation",
      "Full responsive layout — no separate app",
      "Built the account from scratch: listings, companies, balance, bonuses",
      "Connected top-ups via an online payment gateway",
      "Split flows: customer / special-equipment owner / freight owner",
      "Filled unique offers and watched engagement",
    ],
    plainSpeak: [
      {
        jargon: "Dispatch service without a dispatcher",
        plain:
          "The customer finds equipment in the city and messages the owner directly — no extra middleman. Often simpler and cheaper.",
      },
      {
        jargon: "Personal account + online payments",
        plain:
          "In the account — listings, balance, and bonuses. The balance tops up online through a payment service, no cashier visit.",
      },
      {
        jargon: "Custom icons and responsive",
        plain:
          "Not a generic UI kit: equipment is recognizable by icons. On a phone the service reads like on desktop.",
      },
    ],
    sections: [
      {
        title: "Homepage as service entry",
        body: "Clear right away what the site is for: find freight and special equipment without a dispatcher. Tonnage cards, service menu, CTA to post a listing or enter the account.",
        image: "/images/cases/kargo24/cover.webp",
      },
      {
        title: "Custom icon pack",
        body: "From concrete pumps to hole diggers — dozens of equipment types with their own icons. Rent/sale/parts catalogs read faster and look unique.",
        image: "/images/cases/kargo24/icons.webp",
      },
      {
        title: "Account from scratch",
        body: "Listings, companies, banners, balance with bonuses, payments, and support. Separate flows for customer, equipment owner, and carrier.",
        image: "/images/cases/kargo24/cabinet-1.webp",
      },
      {
        title: "Engagement",
        body: "Early analytics showed people spent over four minutes on the site on average — a signal they read the product instead of closing immediately.",
        image: "/images/cases/kargo24/stats.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/kargo24/main-2.webp",
        alt: "KarGo24 sections",
        caption: "Service sections",
      },
      {
        src: "/images/cases/kargo24/cabinet-2.webp",
        alt: "KarGo24 personal account",
        caption: "Account: listings and balance",
      },
      {
        src: "/images/cases/kargo24/cabinet-3.webp",
        alt: "Account settings",
        caption: "Settings and roles",
      },
      {
        src: "/images/cases/kargo24/main-4.webp",
        alt: "Another homepage screen",
        caption: "Extra homepage frame",
      },
    ],
    outcomeLead:
      "In a few months we built a niche marketplace: responsive, custom UI, working account with payments. Average time on site — over 4 minutes. Domain kargo24.su — project of that period (hosting now shows a stub).",
    highlights: [
      "Niche: special equipment and freight without a dispatcher",
      "Custom icon pack and homepage animation",
      "Full responsive layout",
      "Account from scratch + online payments",
      "Roles: customer / equipment / freight",
      "Average time on site >4 minutes",
    ],
    results: [
      { label: "Time on site", value: ">4 min" },
      { label: "Account", value: "from scratch" },
      { label: "Payments", value: "online" },
      { label: "Format", value: "service" },
    ],
    ctaTitle: "Need a niche marketplace with accounts?",
    ctaText:
      "We’ll build a service for your vertical — responsive, with accounts and clear user roles, like KarGo24.",
  },

  datagon: {
    title: "Datagon — price parsing and matching",
    client: "Datagon",
    industry: "E-commerce / pricing",
    location: "Product",
    period: "product · Node.js · ongoing",
    metric: "60k+",
    metricLabel: "URLs in the parse queue",
    summary:
      "Internal Datagon web service: competitor price parsing, catalog sync from Bitrix/Webasyst, smart SKU matching, and export to MoySklad. Live at p.datagon.ru.",
    coverAlt: "Datagon dashboard — queues and syncs",
    services: ["Node.js", "Parsing", "MoySklad", "ERP/CMS", "Automation"],
    intro:
      "Datagon (p.datagon.ru) is a panel for e-commerce teams: which competitor, which SKUs, which prices, what’s in stock for us and them, which pairs are matched, what’s ready for MoySklad. Stack — Node.js + Express, MySQL, Cheerio; UI on ArchitectUI. Nearby in the ecosystem — Titlo SEO platform (titlo.ru), a different product.",
    painLead:
      "Competitor prices were collected by hand or with scripts and no panel: no queue, no history, no link from our catalog ↔ their card ↔ inventory. Errors showed up already in accounting.",
    challenge:
      "Build a working service: competitor projects, URL queue, results, own sites from Bitrix/Webasyst DBs, matching by SKU and title, export to MoySklad — with a dashboard and background workers.",
    pains: [
      {
        title: "Competitor prices by hand",
        text: "Without a queue and selectors, each site is a separate script. Retries and failures aren’t visible in one place.",
      },
      {
        title: "Catalog drifts from inventory",
        text: "Products in Bitrix/Webasyst and positions in MoySklad live apart — you need sync and explicit matches.",
      },
      {
        title: "SKU matching",
        text: "Auto-search by SKU and title similarity yields candidates; without confirm/reject in the UI, junk goes into accounting.",
      },
    ],
    journeyLead:
      "We built a panel and API around parsing and inventory: queue → results → own products → matching → MoySklad, plus a health dashboard and background workers.",
    approach: [
      "Competitor projects: sites, CSS selectors, URL queue with batch processing",
      "Price and stock parsing (Axios + Cheerio), results and re-runs",
      "“My sites”: connect to Bitrix/Webasyst DBs, sync my_products",
      "Smart matching: SKU + title similarity, confirm in the UI",
      "Export to MoySklad (API), orders/sales, purchasing",
      "Queue dashboard, workers, Docusaurus docs, cookie/legal",
    ],
    plainSpeak: [
      {
        jargon: "URL queue",
        plain:
          "Competitor pages line up and process in batches — you see what’s done and where errors are.",
      },
      {
        jargon: "Matching",
        plain:
          "The system suggests a pair “our product ↔ competitor card”; a manager confirms or rejects.",
      },
      {
        jargon: "My sites from the DB",
        plain:
          "The catalog pulls from Bitrix or Webasyst directly — not copy-paste from Excel.",
      },
      {
        jargon: "Export to MoySklad",
        plain:
          "Confirmed data goes to inventory via API, not a manual import.",
      },
    ],
    sections: [
      {
        title: "Dashboard",
        body: "Queue summary, global sync, MoySklad and matching status, CPU/RAM load, quick actions.",
        image: "/images/cases/datagon/dashboard.webp",
      },
      {
        title: "Product matching",
        body: "Run settings, SKU/title mode, competitor pick, batches and pauses, resume from where it stopped.",
        image: "/images/cases/datagon/matches.webp",
      },
      {
        title: "Panel login",
        body: "p.datagon.ru — service auth. Docs and legal pages for guests.",
        image: "/images/cases/datagon/login.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/datagon/logo.webp",
        alt: "Datagon logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/datagon/dashboard.webp",
        alt: "Datagon dashboard",
        caption: "Dashboard",
      },
      {
        src: "/images/cases/datagon/matches.webp",
        alt: "Product matching",
        caption: "Matching",
      },
    ],
    outcomeLead:
      "A working Node.js parsing and matching panel: queues of tens of thousands of URLs, tied to Bitrix/Webasyst and MoySklad. Site: p.datagon.ru. SEO tools in the same ecosystem — see the Titlo case.",
    highlights: [
      "Competitor price parser · 60k+ URL queue",
      "SKU/title matching · confirm in the UI",
      "Catalog sync from Bitrix / Webasyst",
      "Export and accounting in MoySklad",
      "Node.js + Express + MySQL · ArchitectUI",
      "Live p.datagon.ru",
    ],
    results: [
      { label: "Queue", value: "60k+" },
      { label: "Stack", value: "Node.js" },
      { label: "Inventory", value: "MoySklad" },
      { label: "Site", value: "live" },
    ],
    ctaTitle: "Need a price parser or catalog ↔ inventory link?",
    ctaText: "We’ll build the queue, matching, and export — the same way we did for Datagon.",
  },
};
