import type { BlogPost } from "../../../data/blog";

/** EN overlay for voronka-prodazh-gtm — same structure as RU JSON. */
export const voronkaProdazhGtmEn: BlogPost = {
  slug: "voronka-prodazh-gtm",
  title: "Sales funnel via GTM: events and checkout drop-offs",
  date: "2019-07-16",
  category: "Digital marketing",
  cover: "/images/blog/voronka-prodazh-gtm/cover-en.webp",
  excerpt:
    "How to tag an ecommerce funnel with Google Tag Manager and watch drop-offs in GA4: catalog → cart → checkout → order, using events instead of outdated Universal Analytics “virtual pages.”",
  lead: [
    "A sales funnel in analytics isn’t a “magic GTM button” — it’s an agreed chain of purchase steps and events that show where people drop off.",
    "Below: why the funnel matters, how to choose steps, how to send events to GA4 via GTM, and how to read drop-offs. Basic GTM (container, tags, Preview) is a separate article; here the focus is checkout. We don’t copy Universal Analytics screenshots or hard “virtual page” recipes from old guides.",
  ],
  faq: [
    {
      q: "Does GTM build the funnel by itself?",
      a: "No. GTM delivers tags and events. You view the funnel in GA4 (Explorations / Funnel) or in Metrika via goals — after correct tagging.",
    },
    {
      q: "Do I still need virtual pages like in UA?",
      a: "In GA4, rely on events (view_item, add_to_cart, begin_checkout, purchase, and your own). Virtual pageview is a UA legacy — not a required path.",
    },
    {
      q: "Is a thank-you URL enough?",
      a: "For a rough goal — sometimes. For a step funnel you need events on intermediate actions, or you only see “reached / didn’t.”",
    },
    {
      q: "Can I duplicate the tag in the theme and in GTM?",
      a: "No — you’ll get double hits. One delivery channel: either the template or GTM.",
    },
    {
      q: "Does this replace a marketing automation funnel?",
      a: "No. An automation funnel is a touch sequence (ads, bot, email). Here — measuring the path on the site.",
    },
  ],
  sections: [
    {
      title: "Why tag the funnel",
      level: 2,
      paras: [
        "Without steps you see visits and occasional purchases, but not where the path breaks: product page, cart, shipping, payment, or contact form.",
        "The funnel answers practical questions: how many reached the cart, where the biggest drop is, whether shipping and button fixes helped. It’s a base for UX and offer hypotheses — not a substitute for marketing strategy.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "track interest in catalog and product pages",
            "see add_to_cart and begin_checkout share",
            "catch exits before payment",
            "link drop-off to a specific page or error",
            "check the effect of A/B tests and releases",
          ],
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
        {
          label: "Marketing automation funnel",
          href: "/en/blog/avtovoronka/",
        },
      ],
    },
    {
      title: "Path steps: from catalog to order",
      level: 2,
      paras: [
        "First describe your site’s real checkout — not an “ideal” textbook flow. A one-page landing has fewer steps; a store with variants and shipping has more.",
        "Common frame: category or product view → add to cart → cart → checkout (contacts, shipping, payment) → success page. Keep event names close to GA4 ecommerce recommendations so reports and ad pixels align.",
      ],
      lists: [
        {
          intro: "Example chain:",
          items: [
            "view_item / product view",
            "add_to_cart",
            "view_cart",
            "begin_checkout",
            "add_shipping_info / add_payment_info (if present)",
            "purchase / generate_lead on thank-you page",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Counting a “Buy” click as a purchase. A purchase is a confirmed order (or a reliable backend event) — otherwise the funnel lies.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Events via GTM instead of UA virtual pages",
      level: 2,
      paras: [
        "In Universal Analytics, people often faked steps with virtual pageviews. In GA4 it’s cleaner to send events with parameters (item_id, value, currency) and build the funnel from them.",
        "In GTM: trigger on click/submit/dataLayer.push → GA4 Event tag (or Google tag) → Preview → publish. If the CMS already pushes ecommerce into the dataLayer — reuse those fields; don’t invent a second layer of “fake URLs.”",
      ],
      lists: [
        {
          intro: "Container minimum:",
          items: [
            "GA4 / Google tag config without a theme duplicate",
            "triggers on key steps",
            "stable event names across releases",
            "check in Preview and DebugView",
            "cookie consent accounted for in tag conditions",
          ],
        },
      ],
      links: [
        {
          label: "GA4 setup",
          href: "/en/blog/google-analytics-nastroyka/",
        },
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
      ],
    },
    {
      title: "How to read the funnel in reports",
      level: 2,
      paras: [
        "In GA4 you usually build the funnel in Explorations (Funnel exploration) or watch ecommerce reports if the recommended scheme is in place. In Metrika — composite goals and step reports.",
        "Dashboard UI changes: what matters is the meaning (“event sequence,” “step drop-off”), not a 2019 account screenshot. Compare periods before and after fixes and segments (mobile vs. desktop, traffic source).",
      ],
      lists: [
        {
          intro: "What to watch first:",
          items: [
            "share reaching each step",
            "the step with the biggest drop",
            "device differences",
            "payment or form validation errors",
            "time on step (if available)",
          ],
        },
      ],
    },
    {
      title: "What to do with bottlenecks",
      level: 2,
      paras: [
        "Drop-off on shipping and payment often needs transparent pricing, timelines, and working payment methods — not “one more pixel.” Drop-off on contact fields — form length and trust (details, policy, phone).",
        "Catch broken buttons and redirects separately: an event that didn’t fire doesn’t mean the user “didn’t want to buy.” Match DebugView with a real session.",
      ],
      lists: [
        {
          intro: "Working hypotheses:",
          items: [
            "simplify checkout and cut extra exits",
            "show shipping and payment earlier",
            "fix broken buttons and validation",
            "speed up the mobile cart",
            "don’t treat retargeting as a substitute for decent UX",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A funnel narrows at each step — that’s normal. The job is to find abnormal drop-offs and test hypotheses, not “flatten the chart at any cost.”",
        "GTM is event transport. Meaning comes from an agreed step map, clean names, and the habit of reading the report after every checkout release.",
      ],
      lists: [
        {
          intro: "Short takeaway:",
          items: [
            "describe the site’s real steps",
            "send GA4 events via GTM",
            "don’t duplicate counters",
            "read drop-offs and fix UX",
            "don’t copy UA-era pageview guides",
          ],
        },
      ],
    },
  ],
  closing: [
    "A funnel via GTM works when purchase steps are tagged with events and you regularly see where the path breaks. Start with a checkout map, one container without duplicates, and Funnel/goals in analytics — then site fixes, not the other way around.",
  ],
  related: [
    "google-tag-manager",
    "google-analytics-nastroyka",
    "google-analytics-tseli",
    "ga4",
    "avtovoronka",
    "optimizatsiya-konversii",
  ],
};
