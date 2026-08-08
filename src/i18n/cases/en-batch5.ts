import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for batch-5 cases (non-featured, continuing file order).
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch5: Record<string, Partial<CaseStudy>> = {
  argument: {
    title: "Website for Argument law firm",
    client: "Argument",
    industry: "Legal services",
    location: "Voronezh",
    period: "2020–2021",
    metric: "from scratch",
    metricLabel: "services site and inquiries",
    summary:
      "A site from scratch for a law firm: sticky header with booking, modal forms, services for companies and individuals, trust on the homepage, and a solid phone experience.",
    coverAlt: "argument-uk.ru homepage",
    services: ["Development", "UX", "Mobile"],
    intro:
      "Argument is a Voronezh law firm: retainer support for companies and help for individuals. We previously promoted them in search (separate SEO case); here — a new services site where booking a consult is easy.",
    painLead:
      "Legal services sell on trust and clarity. If finding a service, calling, or leaving a request is hard, the client goes to whoever makes it simpler. They needed a working booking channel, not a brochure site — within a sensible budget.",
    challenge:
      "Build a functional law-firm site from scratch: clear navigation, booking forms, a B2B vs B2C service split, and a usable mobile path.",
    pains: [
      {
        title: "Services drown in the menu",
        text: "Lawyers have many practice areas — for business and for private clients. Without structure, visitors don’t know where to click and give up.",
      },
      {
        title: "Request buried",
        text: "Phone and booking must stay at hand. If the form is deep below or on another page, fewer people call.",
      },
      {
        title: "Awkward on phone",
        text: "Some clients look up a lawyer on a phone after an accident or dispute. The site must read well and offer one-tap call.",
      },
    ],
    journeyLead:
      "We locked the goal — book a consultation — and built the site around it: header with contacts → trust on the homepage → services catalog → distraction-free forms → tablet and smartphone checks.",
    approach: [
      "Built a sticky header: address, phone, book a visit, and request a call",
      "Moved secondary pages into a dropdown so the UI stays light",
      "On the homepage — case stats and resolved conflicts + team photos",
      "Split Services into companies and individuals, then by category",
      "Made forms modal with a dimmed overlay and privacy consent",
      "Added click-to-call and checked Mobile Friendly on tablets and phones",
      "A separate page for partner discount bonuses",
    ],
    plainSpeak: [
      {
        jargon: "Sticky header",
        plain:
          "The header with phone and “book” / “request a call” stays on screen while scrolling — no need to scroll back up to contact them.",
      },
      {
        jargon: "Modal forms with overlay",
        plain:
          "When requesting, the rest of the site dims: nothing distracts; the person fills name and phone and sends.",
      },
      {
        jargon: "Mobile Friendly + click-to-call",
        plain:
          "On a phone the site reads fine, and the number is one tap to call — no copying digits.",
      },
    ],
    sections: [
      {
        title: "Header as the entry point",
        body: "Address, phone, and two booking buttons always visible. Secondary links live in a dropdown. Navigation stays simple; the UI isn’t overloaded with links.",
        image: "/images/cases/argument/nav.webp",
      },
      {
        title: "Trust on the homepage",
        body: "A block with positive decisions and resolved conflicts, popular services, and lawyer photos — so it’s clear right away: a living firm with practice.",
        image: "/images/cases/argument/stats.webp",
      },
      {
        title: "Services for companies and individuals",
        body: "Services split: companies (retainer support, reorganization, antitrust, and more) and individuals. Inside — categories so people find the right practice faster.",
        image: "/images/cases/argument/services-ul.webp",
      },
      {
        title: "Mobile path",
        body: "Checked tablets and phones: forms, menu, and services stay usable. Click-to-call on the number — a simple thing often forgotten, critical for lawyers.",
        image: "/images/cases/argument/ipad-home.webp",
        fit: "contain",
      },
    ],
    gallery: [
      {
        src: "/images/cases/argument/form.webp",
        alt: "Modal booking form",
        caption: "Request form with screen dimming",
      },
      {
        src: "/images/cases/argument/services-fl.webp",
        alt: "Services for individuals",
        caption: "Services for individuals",
      },
      {
        src: "/images/cases/argument/partners.webp",
        alt: "Partner discount systems",
        caption: "Partner bonuses page",
      },
      {
        src: "/images/cases/argument/phone-service.webp",
        alt: "Service on smartphone",
        caption: "Service card on phone",
        fit: "contain",
      },
    ],
    outcomeLead:
      "A functional site without extras: clear navigation, requests and calls in view, equally usable on desktop and phone. Still live on argument-uk.ru.",
    highlights: [
      "Services site from scratch within a sensible budget",
      "Sticky header with booking and call request",
      "Modal forms + personal-data consent",
      "Services split for companies and individuals",
      "Trust: stats and team on the homepage",
      "Mobile Friendly and click-to-call",
      "Separate partner discounts page",
    ],
    results: [
      { label: "Launch", value: "from scratch" },
      { label: "Focus", value: "inquiries" },
      { label: "Services", value: "B2B + B2C" },
      { label: "Channel", value: "mobile" },
    ],
    ctaTitle: "Need a site for a professional services firm?",
    ctaText:
      "We’ll build a clear structure, booking forms, and a mobile path — the same way we did for Argument.",
  },

  hobbi36: {
    title: "Mir Uvlecheniy online store refresh",
    client: "Mir Uvlecheniy",
    industry: "Hobby goods",
    location: "Voronezh",
    period: "2020",
    metric: "+30%",
    metricLabel: "visits after launch",
    summary:
      "Store migration from MODX to Webasyst: full cart and account, usable catalog, responsive layout, and SEO-filter groundwork — on a modest budget.",
    coverAlt: "hobbi36.ru homepage — live view",
    services: ["Development", "Migration", "UX"],
    before: {
      src: "/images/cases/hobbi36/before-1.webp",
      alt: "Old MODX site",
      caption: "Before: MODX storefront without full purchase",
    },
    intro:
      "Mir Uvlecheniy (hobbi36.ru) is a hobby store in Voronezh: metal detectors, digger gear, bows, collectibles, and more. We previously promoted them in search (separate SEO case); here — a store refresh where you can buy end to end.",
    painLead:
      "The MODX site looked fine and held a large catalog, but didn’t work as an online store: no cart, bugs, awkward admin. Buyers left a request and waited for a callback. They wanted a full purchase cycle on the site and easier assortment management — on a modest budget.",
    challenge:
      "Move the storefront from MODX to a proper e-commerce stack: cart, personal account, easy product management, and responsive layout — without building from scratch.",
    pains: [
      {
        title: "No cart",
        text: "On the old site orders went through a contact form. Buyers couldn’t finish add-to-cart → checkout on the site itself.",
      },
      {
        title: "Bugs and risk",
        text: "The platform had code failures and weak protection — constant risk for a store with products and contacts.",
      },
      {
        title: "Admin slows down",
        text: "Adding and editing catalog products was slow and awkward — assortment grew, work speed did not.",
      },
    ],
    journeyLead:
      "We proposed not writing a store from scratch, but moving to a ready Webasyst theme: faster and cheaper, with room to adapt to the brand. Then — product transfer, cart, account, filters, and a mobile-path check.",
    approach: [
      "Locked goals: purchase end to end on the site, account, simple admin, responsive",
      "Chose Webasyst + a ready theme customized to the brand",
      "Migrated the catalog: updated photos and some cards during the move",
      "Built cart, checkout, and personal account",
      "Set up payment/delivery and service pages",
      "Enabled a smart filter with SEO landing groundwork",
      "Launched and verified purchases work from day one",
    ],
    plainSpeak: [
      {
        jargon: "MODX → Webasyst migration",
        plain:
          "The old site was a storefront with a form. The new one is a real store: products, cart, order, and buyer account.",
      },
      {
        jargon: "Theme instead of custom build",
        plain:
          "On a modest budget it’s smarter to take a proven platform and tune it than write everything from scratch for months.",
      },
      {
        jargon: "SEO smart filter",
        plain:
          "Catalog filters create separate pages for queries like “Garrett metal detector” — easier to promote those landings later.",
      },
    ],
    sections: [
      {
        title: "From storefront to store",
        body: "The main change — a full purchase path. Cart, checkout, personal account: the buyer picks a product and finishes the order without a mandatory “call me back.”",
        image: "/images/cases/hobbi36/cart.webp",
      },
      {
        title: "A catalog that’s easy to live with",
        body: "In Webasyst, product work got faster. During migration we updated images and some descriptions — the storefront looks fresher, and the admin keeps assortment in order more easily.",
        image: "/images/cases/hobbi36/catalog.webp",
      },
      {
        title: "Product card and filters",
        body: "A proper card with price and actions, plus a smart filter: buyers find what they need faster, and the store gets SEO landings.",
        image: "/images/cases/hobbi36/product.webp",
      },
      {
        title: "Live view",
        body: "The store is still on hobbi36.ru: metal detectors, gear, collectibles, bows, and more — with delivery and a Voronezh pickup point.",
        image: "/images/cases/hobbi36/cover.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/hobbi36/before-2.webp",
        alt: "Old site — fragment",
        caption: "Before: fragment of the old storefront",
      },
      {
        src: "/images/cases/hobbi36/main-2.webp",
        alt: "New homepage after migration",
        caption: "After: homepage on Webasyst",
      },
      {
        src: "/images/cases/hobbi36/old-delivery.webp",
        alt: "Payment and delivery",
        caption: "Payment and delivery",
      },
      {
        src: "/images/cases/hobbi36/before-3.webp",
        alt: "Old catalog",
        caption: "Before: catalog without full purchase",
      },
    ],
    outcomeLead:
      "We launched a modern store instead of a site with a form. Visits grew about 30% on average; depth and time on site went up. A purchase came through on day one. hobbi36.ru is still live.",
    highlights: [
      "MODX → Webasyst migration without building from scratch",
      "Cart, checkout, and personal account",
      "Catalog admin became simpler and faster",
      "Smart filter with SEO groundwork",
      "Responsive layout and updated product cards",
      "≈+30% visits after launch",
      "First purchase — on launch day",
    ],
    results: [
      { label: "Visits", value: "+30%" },
      { label: "Stack", value: "Webasyst" },
      { label: "Was", value: "MODX" },
      { label: "Start", value: "day 1" },
    ],
    ctaTitle: "Need to refresh an online store?",
    ctaText:
      "We’ll move the storefront to a working e-commerce stack — with cart, account, and a usable admin, like Mir Uvlecheniy.",
  },

  "nissan-landing": {
    title: "Nissan landing for Motor Land dealer",
    client: "Motor Land",
    industry: "Nissan dealer",
    location: "Voronezh",
    period: "2020",
    metric: "on-domain",
    metricLabel: "landing inside the dealer site",
    summary:
      "A Nissan promo landing on the dealer domain: header and footer like the official site, offers, in-stock cars, and test-drive booking — without a one-pager on a random URL.",
    coverAlt: "Nissan Qashqai landing — Motor Land",
    services: ["Landing", "UX", "Integration"],
    intro:
      "Motor Land is an official Nissan dealer in Voronezh. In 2016, for the showroom opening, we ran SEO and paid search (separate case). Later they needed a promo page for a model (Qashqai and the lineup) that doesn’t look like an outside landing and leads to a test-drive or a call.",
    painLead:
      "Standalone promo sites on other domains often lose: people arrive from ads and don’t recognize the dealer — trust drops. We needed to embed the landing in the showroom platform: same brand, same contacts, but focused on the offer and a fast request.",
    challenge:
      "Embed a one-pager into the dealer site so header and footer match the official resource, while the content sells the offer, stock, and test-drive.",
    pains: [
      {
        title: "Foreign domain = less trust",
        text: "Even a nice landing on a separate domain looks suspicious next to the dealer’s official site. People look for a familiar brand and showroom contacts.",
      },
      {
        title: "Offer drowned in a big site",
        text: "On a full dealer catalog a special offer is easy to miss. You need a page where the benefit, offer dates, and form are in view right away.",
      },
      {
        title: "Request in two clicks",
        text: "Test-drive, service, and call must be available without wandering sections — or ad traffic goes nowhere.",
      },
    ],
    journeyLead:
      "We built the landing inside the dealer ecosystem: familiar header → hero with offer and form → model story → cars in stock → lineup and benefits → quick actions in a side menu.",
    approach: [
      "Placed the page on the dealer domain with matching header and footer",
      "Hero — slide of offers with validity dates",
      "“Call me back” form: name, phone, payment method",
      "Model block with CTAs for benefits and test-drive booking",
      "In-stock car strip with live photos and prices",
      "Lineup, benefits block, and similar cars",
      "Dropdown: book service, test-drive, request a call",
      "Kept the path lean — one-screen focus without overload",
    ],
    plainSpeak: [
      {
        jargon: "Landing on the dealer domain",
        plain:
          "The promo page lives on the same site as the showroom: same logo, menu, and contacts. People get it immediately — this is Motor Land, not a random one-pager.",
      },
      {
        jargon: "Multi-block promo page",
        plain:
          "Not just a banner — a page for the special offer: dates, benefit, cars in stock, and forms — all in one place.",
      },
      {
        jargon: "In-stock strip + similar cars",
        plain:
          "We show real warehouse cars and suggest similar models — easier to choose and book a test-drive.",
      },
    ],
    sections: [
      {
        title: "Like the dealer — plus the offer",
        body: "Header with phone, address, and menu matches the official site. Below — Qashqai special: benefit, price, dates, and callback form right in the first screen.",
        image: "/images/cases/nissan-landing/main-1.webp",
      },
      {
        title: "Model and stock",
        body: "Nissan Intelligent Mobility story and two clear buttons: learn benefits and book a test-drive. Then — Qashqai in-stock cards with trim, price, and status.",
        image: "/images/cases/nissan-landing/main-2.webp",
      },
      {
        title: "Lineup and benefits",
        body: "Model range (X-Trail, Qashqai, Terrano, Murano) and a warranty/credit/gifts block — to close objections without leaving for other site sections.",
        image: "/images/cases/nissan-landing/main-3.webp",
      },
      {
        title: "Quick actions",
        body: "On the side — book service, test-drive, and request a call in a couple of clicks. The main path isn’t overloaded: everything for a request within one screen.",
        image: "/images/cases/nissan-landing/main-4.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/nissan-landing/main-2.webp",
        alt: "Qashqai in stock",
        caption: "Stock and test-drive booking",
      },
      {
        src: "/images/cases/nissan-landing/main-3.webp",
        alt: "Nissan lineup",
        caption: "Lineup and benefits",
      },
      {
        src: "/images/cases/nissan-landing/preview.webp",
        alt: "Nissan landing preview",
        caption: "Project preview",
      },
      {
        src: "/images/cases/nissan-landing/logo.webp",
        alt: "Nissan logo",
        caption: "Brand",
        fit: "contain",
      },
    ],
    outcomeLead:
      "An offer page that feels like the dealer: familiar UI, offer and stock in view, test-drive and call — without leaving for another domain. This format usually converts better than standalone one-pagers.",
    highlights: [
      "Landing on the dealer domain, not a random URL",
      "Header and footer match the official site",
      "Offer with dates and form in the first screen",
      "Cars in stock + similar models",
      "Test-drive and service booking without extra clicks",
      "Ready structure for promo-page campaigns",
    ],
    results: [
      { label: "Format", value: "landing" },
      { label: "Domain", value: "dealer" },
      { label: "Focus", value: "inquiries" },
      { label: "Stock", value: "in stock" },
    ],
    ctaTitle: "Need a landing for a dealer offer?",
    ctaText:
      "We’ll build a promo page on the showroom domain — with official-site trust and a test-drive form, like Nissan at Motor Land.",
  },
};
