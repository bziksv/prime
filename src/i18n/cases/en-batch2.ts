import type { CaseStudy } from "../../data/cases";

/**
 * English overlays for featured batch-2 cases.
 * Image paths stay on the RU base case — only text fields here.
 */
export const caseTranslationsEnBatch2: Record<string, Partial<CaseStudy>> = {
  lagerplus: {
    title: "LagerPlus — warehouse digitization",
    client: "LagerPlus",
    industry: "Warehouse / purchasing / inventory",
    location: "Product",
    period: "product · Laravel · ongoing",
    metric: "53k+",
    metricLabel: "SKUs in the catalog",
    summary:
      "LagerPlus is a warehouse web app on top of MoySklad inventory: dashboard, SKU registry, lost-sales view, buy lists, and suppliers. Live at lagerplus.ru.",
    coverAlt: "LagerPlus dashboard — stock, totals, and trends",
    services: ["Laravel", "MoySklad", "AdminLTE", "DataTables", "Performance"],
    intro:
      "LagerPlus (lagerplus.ru) is a buyer-facing warehouse panel: what’s in stock, what’s out, what to reorder, and who supplies it. Stock and catalog sync from MoySklad; the UI is Laravel + AdminLTE; heavy tables run on Yajra DataTables with response caching.",
    painLead:
      "Inventory software keeps the books, but buyers need their own layer — minimum stock, lost sales, buy lists, and supplier export — without Excel and without waiting minutes on every filter.",
    challenge:
      "Ship a working system on MoySklad: sync catalog and stock, sum dashboards, purchasing and lost-sales flows — and keep heavy lists fast across tens of thousands of SKUs.",
    pains: [
      {
        title: "Inventory ≠ buyer’s panel",
        text: "Stock lives in accounting, but there are no clear screens for “what to reorder,” “where we lose sales,” or export for a specific supplier.",
      },
      {
        title: "Tens of thousands of SKUs",
        text: "Without cache and tight queries, DataTables on 50k+ rows stalls — filters and pagination become the bottleneck.",
      },
      {
        title: "Min stock and pack rules",
        text: "Minimum stock, pack multiples, and price automation live with the buyer — they belong next to the SKU card, not in personal spreadsheets.",
      },
    ],
    journeyLead:
      "We built a Laravel panel around MoySklad: dashboard → products → lost sales → buy list → suppliers, plus JSON cache and faster list versions (New / list-v2).",
    approach: [
      "MoySklad API: products, stock, warehouses, staff, profit per SKU",
      "Dashboard: users, SKUs, suppliers, cost / sale / purchase totals",
      "Product registry, filters, minimum stock and pack multiples",
      "Lost-sales and buy-list views with supplier/buyer export",
      "DataOutputCache + indexes for heavy DataTables; New / list-v2 screens",
      "Spatie roles, MoySklad token settings, local fonts without a CDN",
    ],
    plainSpeak: [
      {
        jargon: "Lost sales",
        plain:
          "SKUs at zero or below the minimum — so you see the sales you miss until you reorder.",
      },
      {
        jargon: "Buy list",
        plain:
          "A table ready for a supplier order: price, pack size, stock, reserve — with file export.",
      },
      {
        jargon: "DataOutputCache",
        plain:
          "Heavy table responses are cached and cleared when data changes — the list isn’t rebuilt from scratch on every click.",
      },
      {
        jargon: "MoySklad as source",
        plain:
          "Catalog and stock come from inventory; the panel adds purchasing rules and reports on top.",
      },
    ],
    sections: [
      {
        title: "Dashboard",
        body: "System overview: tens of thousands of SKUs, stock levels, cost and sale totals, purchase sum, and catalog trends.",
        image: "/images/cases/lagerplus/dashboard.webp",
      },
      {
        title: "Lost sales",
        body: "New table: purchase price, minimum stock, price automation, suggested stock — with Excel export.",
        image: "/images/cases/lagerplus/out-of-stock.webp",
      },
      {
        title: "Buy list",
        body: "Order-ready list: supplier, SKU, pack size, stock/reserve/incoming, export for suppliers and buyers.",
        image: "/images/cases/lagerplus/suppliers.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/lagerplus/logo.webp",
        alt: "LagerPlus logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/lagerplus/dashboard.webp",
        alt: "LagerPlus dashboard",
        caption: "Dashboard",
      },
      {
        src: "/images/cases/lagerplus/out-of-stock.webp",
        alt: "Lost-sales product list",
        caption: "Lost sales",
      },
    ],
    outcomeLead:
      "A live Laravel warehouse panel on MoySklad: 53k+ SKUs in the catalog, purchasing and lost-sales flows, cached heavy tables. Site: lagerplus.ru.",
    highlights: [
      "Warehouse digitization · 53k+ SKUs in the panel",
      "MoySklad integration (stock, warehouses, staff)",
      "Lost sales · buy lists · export",
      "Dashboard of stock totals and purchase sum",
      "Laravel + AdminLTE · DataOutputCache · list-v2",
      "Live lagerplus.ru",
    ],
    results: [
      { label: "SKUs", value: "53k+" },
      { label: "Suppliers", value: "160+" },
      { label: "Inventory", value: "MoySklad" },
      { label: "Stack", value: "Laravel" },
    ],
    ctaTitle: "Need a warehouse panel on your inventory stack?",
    ctaText:
      "We’ll build the dashboard, purchasing flows, and table performance — the same way we did for LagerPlus.",
  },

  "billiard-guru": {
    title: "billiard.guru — tournament platform",
    client: "billiard.guru",
    industry: "Billiards / sports tech",
    location: "Worldwide",
    period: "own product · beta",
    metric: "16–64",
    metricLabel: "players in a tournament bracket",
    summary:
      "We built billiard.guru for clubs and players: live tournament brackets, ratings, Telegram login, and table bookings. Open beta at billiard.guru.",
    coverAlt: "billiard.guru homepage — tournaments and community",
    services: ["Next.js", "SaaS", "Telegram", "Brackets", "Club cabinet"],
    intro:
      "billiard.guru is our product for the billiards community — Russian pyramid, snooker, and pool. A club publishes a tournament, players register, and the bracket builds itself and opens by link on a phone or a screen in the hall. Clubs catalog, player profiles, ratings, and a “Find a game” section. Login via Telegram; the UI ships in Russian and English. Open beta.",
    painLead:
      "Tournaments lived in Excel and chats: brackets on paper, ratings by hand, entries lost in Telegram groups. Spectators had nowhere to follow the bracket except asking the referee.",
    challenge:
      "One platform instead of sheets and chats: tournament → registration → bracket up to 64 players → ratings and a club cabinet — plus a clear public storefront.",
    pains: [
      {
        title: "Brackets on paper and in Excel",
        text: "Single-elim and double-elim for 16–64 people — pairing errors and manual recalculation after every match.",
      },
      {
        title: "Registration in chats",
        text: "Entries get lost in Telegram groups; there’s no single player profile, rating, or tournament history.",
      },
      {
        title: "Club without a cabinet",
        text: "Clubs need table bookings, staff, news, and their own tournaments — not just a brochure site.",
      },
    ],
    journeyLead:
      "We built the service end to end: a public site for players and spectators, a club cabinet, and reference bracket layouts for 16, 32, and 64 players.",
    approach: [
      "Public site: tournaments, clubs, players, coaches, “Find a game”, bracket demos",
      "Double-elimination layouts for 16 / 32 / 64 (+ 3rd–4th place match)",
      "Player ratings, handicap calculator, tournament registration",
      "Login and phone confirmation via a Telegram bot",
      "Club cabinet: table bookings, staff, news",
      "Russian and English UI, production deploy",
    ],
    plainSpeak: [
      {
        jargon: "Double-elimination bracket",
        plain:
          "A ready tournament layout: lose once and you drop to the losers’ side, not straight out. Variants for 16, 32, and 64 players.",
      },
      {
        jargon: "Public bracket",
        plain:
          "The link opens without login — players and spectators see matches on a phone or on a club screen.",
      },
      {
        jargon: "Login via Telegram",
        plain:
          "Confirm the phone in the bot — you’re in the cabinet, no separate password or extra forms.",
      },
      {
        jargon: "Find a game",
        plain:
          "A section to find a practice partner — not only an “official” tournament.",
      },
    ],
    sections: [
      {
        title: "Homepage",
        body: "Community storefront: tournaments, clubs, players; pyramid, snooker, and pool. Product in open beta.",
        image: "/images/cases/billiard-guru/home.webp",
      },
      {
        title: "Tournament card",
        body: "Rules, entry fee, prizes, discipline, and registration status — then the bracket and entrants list.",
        image: "/images/cases/billiard-guru/tournament.webp",
      },
      {
        title: "Bracket demos",
        body: "Format catalog: single-elim and double-elim for 8–64 — open and preview without login.",
        image: "/images/cases/billiard-guru/bracket.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/billiard-guru/logo.webp",
        alt: "billiard.guru logo",
        caption: "Brand",
        fit: "contain",
      },
      {
        src: "/images/cases/billiard-guru/tournaments.webp",
        alt: "billiard.guru tournaments list",
        caption: "Tournaments",
      },
      {
        src: "/images/cases/billiard-guru/clubs.webp",
        alt: "billiard.guru clubs catalog",
        caption: "Clubs",
      },
    ],
    outcomeLead:
      "Live beta at billiard.guru: clubs launch tournaments, players register via Telegram, brackets for 16–64 open by link. We run the product ourselves.",
    highlights: [
      "Own product · billiards tournaments · open beta",
      "Brackets for 16 / 32 / 64 · double elimination",
      "Clubs · players · ratings · handicap calculator",
      "Telegram login · table bookings · “Find a game”",
      "UI in Russian and English",
      "Live billiard.guru",
    ],
    results: [
      { label: "Bracket", value: "up to 64" },
      { label: "Login", value: "Telegram" },
      { label: "Languages", value: "RU / EN" },
      { label: "Status", value: "beta" },
    ],
    ctaTitle: "Need a tournament platform or complex brackets?",
    ctaText:
      "We’ll build the storefront, cabinet, and brackets for your sport — the same way we did for billiard.guru.",
  },

  "billiard-guru-bot": {
    title: "billiard.guru Telegram bot",
    client: "billiard.guru",
    industry: "Billiards / sports tech",
    location: "Worldwide",
    period: "own product · beta",
    metric: "TG",
    metricLabel: "bot · menu · alerts · bookings",
    summary:
      "We built @BilliardGuruBot for the billiard.guru platform: login and confirmation, a player menu, match alerts, table bookings, and “Find a game” — no separate app.",
    coverAlt: "billiard.guru Telegram bot — service in the messenger",
    services: ["Telegram Bot", "Webhook", "Notifications", "Menu", "Bookings"],
    intro:
      "Players and clubs don’t only live in the browser. We built the Telegram bot @BilliardGuruBot for billiard.guru: login confirmation, a personal menu, match and tournament alerts, table bookings, and “Find a game.” The product meets the audience where they already chat — no app install. Open beta.",
    painLead:
      "Tournament chats are noisy: entries get lost, match reminders get forgotten, and the club can’t keep up in DMs. Nobody wants a separate mobile app for a few tournaments a year.",
    challenge:
      "A working Telegram channel beside the site: login, alerts, and everyday actions for players and clubs — without a second app and without chaos in group chats.",
    pains: [
      {
        title: "Everything in group chats",
        text: "Registrations, match reschedules, and “who’s on the table” live in the group feed — easy to miss and hard to moderate.",
      },
      {
        title: "No personal channel",
        text: "A player needs a feed of only their tournaments and bookings — not the whole club’s noise.",
      },
      {
        title: "An app for a few tournaments",
        text: "Downloading a separate app for seasonal events is a barrier. Telegram is already installed.",
      },
    ],
    journeyLead:
      "We treated the bot as a product layer of the platform: webhook, menu, notification catalog, and club flows — on the same backend as the site.",
    approach: [
      "@BilliardGuruBot: production webhook, shared session with the site",
      "Login and phone confirmation via a messenger flow",
      "Player menu: profile, tournaments, bookings, “Find a game”, alert settings",
      "Alerts for matches, tournaments, and club events with opt-in",
      "Club flows: publish a tournament, moderate news via the bot",
      "Tied to the cabinet and brackets on billiard.guru — one product, two channels",
    ],
    plainSpeak: [
      {
        jargon: "Bot webhook",
        plain:
          "Telegram sends messages to our server right away — the bot replies without polling lag.",
      },
      {
        jargon: "Notification catalog",
        plain:
          "The player chooses what to get: matches, tournaments, bookings — no spam in DMs.",
      },
      {
        jargon: "Bot menu",
        plain:
          "Buttons instead of commands: profile, my tournaments, book a table, “Find a game.”",
      },
      {
        jargon: "Club flows",
        plain:
          "The owner confirms a tournament or news in Telegram — not only in the web cabinet.",
      },
    ],
    sections: [
      {
        title: "Bot as a service channel",
        body: "Not chat for its own sake: login, menu, and alerts are wired to the same platform as billiard.guru.",
        image: "/images/cases/billiard-guru-bot/cover.webp",
      },
      {
        title: "Login via messenger",
        body: "Phone on the site, confirmation and flows in the bot — the player reaches the cabinet without a separate password or extra forms.",
        image: "/images/cases/billiard-guru-bot/auth.webp",
      },
      {
        title: "Menu and notifications",
        body: "Profile, tournaments, bookings, “Find a game,” and alert settings — a personal channel instead of club-group noise.",
        image: "/images/cases/billiard-guru-bot/notify.webp",
      },
      {
        title: "Bookings from Telegram",
        body: "Table and time can be booked from the bot — the club sees it in the cabinet, the player gets confirmation in DMs.",
        image: "/images/cases/billiard-guru-bot/booking.webp",
      },
    ],
    gallery: [
      {
        src: "/images/cases/billiard-guru-bot/bot-icon.webp",
        alt: "@BilliardGuruBot icon",
        caption: "@BilliardGuruBot",
        fit: "contain",
      },
      {
        src: "/images/cases/billiard-guru-bot/login.webp",
        alt: "billiard.guru login with link to the Telegram bot",
        caption: "Site + bot",
      },
      {
        src: "/images/cases/billiard-guru-bot/platform.webp",
        alt: "billiard.guru platform — tied to the bot",
        caption: "Platform",
      },
    ],
    outcomeLead:
      "Live bot @BilliardGuruBot in open beta: players and clubs run tournaments and bookings in Telegram next to the site. We run the product ourselves — PRIME.",
    highlights: [
      "Own product · Telegram bot · open beta",
      "@BilliardGuruBot · login · menu · alerts",
      "Table bookings and “Find a game” from the messenger",
      "Club flows: tournaments and news",
      "Same backend as billiard.guru",
      "Live t.me/BilliardGuruBot",
    ],
    results: [
      { label: "Channel", value: "Telegram" },
      { label: "Bot", value: "@BilliardGuruBot" },
      { label: "Tie-in", value: "site + bot" },
      { label: "Status", value: "beta" },
    ],
    ctaTitle: "Need a Telegram bot for your product?",
    ctaText:
      "We’ll build login, menu, alerts, and bookings in the messenger — the same way we did for billiard.guru.",
  },
};
