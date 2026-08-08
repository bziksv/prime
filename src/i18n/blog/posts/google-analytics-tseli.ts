import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-analytics-tseli — same structure as RU JSON. */
export const googleAnalyticsTseliEn: BlogPost = {
  slug: "google-analytics-tseli",
  title: "Goals and conversions in Google Analytics (GA4)",
  date: "2020-07-09",
  category: "Digital marketing",
  cover: "/images/blog/google-analytics-tseli/cover-en.webp",
  excerpt:
    "How to set up conversions in Google Analytics 4: key events, thank-you URLs, engagement and clicks — mapping old Universal “goals” and checking reports.",
  lead: [
    "In Universal Analytics “goals” were a separate builder (page, duration, pages/session, event). In GA4 the model is different: almost everything is events, and important ones are marked as key events / conversions. Same idea: measure leads, purchases, thank-you pages, and micro-conversions.",
    "Below: why conversions matter, how to map old goal types into GA4, how to tag events and verify reports. Store funnel behavior is in the ecommerce Analytics article; Yandex Metrica goals are a separate piece. The GA4 UI changes — lean on meaning, not 2019 screenshots.",
  ],
  faq: [
    {
      q: "Do Universal goals still work?",
      a: "Universal Analytics is retired. Configure and read conversions in GA4. Old “Admin → Goals” guides are historical.",
    },
    {
      q: "What replaces a Destination goal?",
      a: "A thank-you / success URL pageview event or a separate purchase/generate_lead event. Mark it as a key event.",
    },
    {
      q: "Where did “visit duration” as a goal go?",
      a: "In GA4 look at engaged sessions and custom time-based events. Don’t copy a UA goal one-to-one — set a threshold for your job.",
    },
    {
      q: "How many conversions can I set up?",
      a: "GA4 limits differ from UA’s “20 goals.” Don’t spawn dozens of near-duplicates — keep an event dictionary.",
    },
    {
      q: "Do I need gtag or GTM?",
      a: "Either works. GTM is easier for buttons and forms without editing the template every time. Main rule — one event = one name.",
    },
    {
      q: "How does a conversion differ from ecommerce?",
      a: "Ecommerce is purchases and products. Conversions are any key events, including leads and micro-steps. A store usually needs both tracks.",
    },
    {
      q: "Should I use GA4 instead of Metrika?",
      a: "Often both: Metrica is closer to RU and Session Replay, GA to Ads and the Google product stack. Set goals in each counter for your reports.",
    },
    {
      q: "Do conversions equal search rankings?",
      a: "No. They measure on-site outcomes. SEO rankings grow separately; page-one share for the core is typically planned for two to six months after work starts.",
    },
  ],
  sections: [
    {
      title: "Why mark conversions",
      level: 2,
      paras: [
        "Without conversions you see traffic but not whether people reach a lead or payment. Conversions feed reports, channel comparison, and ad optimization.",
        "Business goal first (order, lead, call), then the technical event. Don’t start from a “template gallery” for a checkbox.",
      ],
      lists: [
        {
          intro: "What we usually mark:",
          items: [
            "thank-you / successful order",
            "form submit",
            "“Buy” / “Call” click",
            "signup",
            "important funnel micro-steps",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics for ecommerce",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "Goals in Yandex Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "From Universal goals to GA4 events",
      level: 2,
      paras: [
        "Old goal types are useful as a mental task map — but you configure them in GA4’s event model now.",
        "Destination (page) → success URL view or post-payment event. Duration / pages per session → engagement signals or your own thresholds. Event → click/form events marked as key.",
      ],
      tables: [
        {
          caption: "UA idea → GA4 mapping",
          headers: ["Was in UA", "Meaning", "In GA4"],
          rows: [
            ["Destination", "Reached a URL", "page_view success / lead event"],
            ["Duration", "Long on site", "engaged session / custom event"],
            ["Pages/session", "Depth", "views + engagement"],
            ["Event", "Click/video/form", "event + key event"],
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Copying Universal UI clicks into GA4. The menu is different — start with an event dictionary.",
        },
      ],
    },
    {
      title: "Conversion on a success URL",
      level: 2,
      paras: [
        "Store and services classic: “thanks for your order” / success page. Users without a purchase rarely land there (except typing the URL — rare noise). noindex the thank-you if it shouldn’t be in search.",
        "In GA4 make sure that page view shows as an event (often `page_view` with page_location) and mark the right event as key — or fire a separate `purchase` / `generate_lead` from backend/GTM; that’s more reliable than URL alone.",
      ],
      lists: [
        {
          intro: "Thank-you practice:",
          items: [
            "unique URL after the action",
            "noindex when needed",
            "purchase/lead event backs the URL",
            "conversion value — by average order/lead if you track ROI",
          ],
        },
      ],
    },
    {
      title: "Engagement: time and depth",
      level: 2,
      paras: [
        "A long visit on a taxi landing may mean “couldn’t find the button.” On a learning portal a short session may mean “didn’t stick.” Interpretation depends on the product — don’t copy someone else’s minute thresholds.",
        "In GA4 look at engaged sessions and interaction events. For content you sometimes add “read N screens” or scroll — only if it really drives decisions, not report cosmetics.",
      ],
      lists: [
        {
          intro: "When to watch engagement:",
          items: [
            "media and blog",
            "landing UX assessment",
            "comparing content variants",
            "not as the store’s only KPI",
          ],
        },
      ],
    },
    {
      title: "Button and form events",
      level: 2,
      paras: [
        "Most flexible type: CTA click, successful submit, video play, chat start. Event names — Latin, stable dictionary (`form_submit`, `click_buy`). Parameters where needed (form type, button ID), no personal data against policy.",
        "Via GTM: click/submit trigger → GA4 event tag → mark as key event in Admin. Via gtag — `gtag('event', '…')` per Google docs. Verify in DebugView before go-live.",
      ],
      lists: [
        {
          intro: "Tagging minimum:",
          items: [
            "one event name sitewide",
            "fire on success, not every focus",
            "test in DebugView",
            "mark key event / conversion",
            "table: event → where in code → owner",
          ],
        },
      ],
      links: [
        {
          label: "Inserting JavaScript",
          href: "/en/blog/vstavka-javascript/",
        },
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Don’t put email or phone in parameters. For lead quality, submit fact and form type are enough.",
        },
      ],
    },
    {
      title: "Funnels and report checks",
      level: 2,
      paras: [
        "Replace UA sequences with Explorations and event funnels: view → cart → checkout → purchase. Watch where the break is — not only “average conversion %.”",
        "After setup compare channel/campaign by key events. Cross-check CRM and Metrica: gaps are normal, but order of magnitude should align.",
      ],
      lists: [
        {
          intro: "Launch checklist:",
          items: [
            "GA4 tag on all templates",
            "event dictionary agreed",
            "key events enabled",
            "DebugView OK",
            "24–48h report without surprises",
            "docs for the team",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Conversion setup — days. Organic growth for the core — months after prep; don’t confuse analytics with rankings. Page-one share is typically planned for two to six months after work starts.",
        },
      ],
    },
  ],
  related: [
    "google-analytics",
    "metrika-tseli",
    "dashboard",
    "optimizatsiya-konversii",
    "forma-obratnoy-svyazi",
    "vstavka-javascript",
  ],
};
