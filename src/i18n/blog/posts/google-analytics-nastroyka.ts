import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-analytics-nastroyka — same structure as RU JSON. */
export const googleAnalyticsNastroykaEn: BlogPost = {
  slug: "google-analytics-nastroyka",
  title: "How to set up Google Analytics 4: a beginner’s guide",
  date: "2019-08-15",
  category: "Digital marketing",
  cover: "/images/blog/google-analytics-nastroyka/cover-en.webp",
  excerpt:
    "Basic GA4 setup: account, property, data stream, tag or GTM install, DebugView checks, and what to turn on next — without Universal Analytics screenshots.",
  lead: [
    "To see traffic and events you need a Google account, a GA4 property, a website data stream, and a tag on your pages. Old guides about “UA-XXXX and views” are outdated — below is GA4 logic for beginners.",
    "The Analytics UI moves — lean on Google Help and the meaning of each step. Goals / key events, ecommerce, and UA differences live in neighboring articles.",
  ],
  faq: [
    {
      q: "Should I still set up Universal Analytics?",
      a: "Not as the foundation. Create GA4. Skip old instructions with “views” and analytics.js.",
    },
    {
      q: "Code in `<head>` or Google Tag Manager?",
      a: "Both work. GTM is easier when you have many tags (Ads, pixels, events). For one counter, gtag.js on the site is fine.",
    },
    {
      q: "How many properties can I create?",
      a: "Account and property limits are in current Google Help. At the start — one GA4 property per site (or a site+app pair if that’s the job).",
    },
    {
      q: "When does data show up?",
      a: "Realtime / DebugView — almost immediately after a correct install. Full reports lag; don’t expect “like yesterday in UA” in the first minute.",
    },
    {
      q: "Do I need cookie consent?",
      a: "Yes — follow your privacy policy and regional consent rules. Don’t put personal data in event parameters.",
    },
  ],
  sections: [
    {
      title: "Account, property, and data stream",
      level: 2,
      paras: [
        "Sign in to Google Analytics → create an account (your company) → a GA4 property → a Web data stream with the site URL and a stream name.",
        "Set report time zone and currency with intent — they define day boundaries and money in ecommerce. Industry and business size feed Google’s tips, not magic accuracy.",
      ],
      lists: [
        {
          intro: "Hierarchy in short:",
          items: [
            "account — the organization",
            "GA4 property — the data container",
            "stream — site or app",
            "measurement ID (G-XXXX) — for the tag",
          ],
        },
      ],
      links: [
        {
          label: "What changed in GA4",
          href: "/en/blog/ga4/",
        },
      ],
    },
    {
      title: "Putting the tag on the site",
      level: 2,
      paras: [
        "Option A: paste the global gtag.js snippet (or the wizard’s code) on every page, usually in `<head>`. On a CMS — via theme, plugin, or GTM, not “homepage only.”",
        "Option B: Google Tag Manager — container on the site, then a GA4 Configuration / Google tag with the stream ID. Easier to add events without editing code every time.",
        "Confirm HTTPS has no mixed content and the tag isn’t firing twice (double page_view wrecks reports).",
      ],
      lists: [
        {
          intro: "Install checks:",
          items: [
            "Realtime shows you on the site",
            "DebugView sees events while debugging",
            "no second identical counter",
            "internal IPs can be excluded later",
          ],
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
      ],
    },
    {
      title: "What to turn on right after install",
      level: 2,
      paras: [
        "In the stream, enable enhanced measurement on purpose (page views, scroll, outbound clicks, site search — as needed). Link Google Ads if you run ads; remarketing and Google signals only within consent and policy.",
        "Next: key events (conversions), ecommerce events for a store, internal traffic filters. Don’t wire User-ID and complex cross-domain “just in case” without a real job.",
      ],
      lists: [
        {
          intro: "Beginner order:",
          items: [
            "tag works in Realtime",
            "2–5 key events marked",
            "the team has property access",
            "cookie / consent policy covered",
            "plan: ecommerce or goals — via the links below",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t blindly migrate session settings and “views” from Universal Analytics. GA4 is another model: events and parameters — not old UA goals one-to-one.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Goals and key events",
          href: "/en/blog/google-analytics-tseli/",
        },
        {
          label: "GA for an online store",
          href: "/en/blog/google-analytics/",
        },
      ],
    },
  ],
  closing: [
    "For a beginner it’s enough: a GA4 property, a web stream, one correct tag (or GTM), a Realtime check, and a couple of key events. Then grow ecommerce and segments — don’t copy guides from the UA era.",
  ],
  related: [
    "ga4",
    "google-analytics-tseli",
    "google-analytics",
    "google-tag-manager",
    "utm-metki",
    "metrika-ustanovka",
  ],
};
