import type { BlogPost } from "../../../data/blog";

/** EN overlay for diplinking — same structure as RU JSON. */
export const diplinkingEn: BlogPost = {
  slug: "diplinking",
  title: "Deeplinking in ads: send the user straight to the right screen",
  date: "2019-08-20",
  category: "Internet marketing",
  cover: "/images/blog/diplinking/cover-en.webp",
  excerpt:
    "What a deeplink and deferred deeplink are, why they matter in app ads and messaging, and how not to lose conversion on the path “banner → the right screen”.",
  lead: [
    "Deeplinking is a link that opens not “just the app” or the site home, but a specific screen: a product card, promo, cart, booking section.",
    "Below — regular and deferred deeplinks, where to use them in acquisition and retention, and common mistakes. Platforms and SDKs change; the user-path logic matters more than a “magic sales button”.",
  ],
  faq: [
    {
      q: "How does a deeplink differ from a normal URL?",
      a: "A normal site page URL is also a “deep” link relative to the home. In mobile marketing, deeplink more often means opening a specific app screen (or web→app).",
    },
    {
      q: "What is a deferred deeplink?",
      a: "If the app isn’t installed yet: first the store/install, then opening the screen the original link pointed to — after the first launch.",
    },
    {
      q: "Are deeplinks only for apps?",
      a: "Strongest in app ads. For the site, direct landing URLs in ads and email matter: the same “straight to the offer” principle.",
    },
    {
      q: "Where are deeplinks used?",
      a: "Banners, push, SMS, email, retargeting, partner and in-app placements — anywhere a click should lead to a concrete action.",
    },
    {
      q: "Does a deeplink guarantee a purchase?",
      a: "No. It shortens the path and cuts drop-off. Conversion depends on the offer, price, screen UX, and trust.",
    },
    {
      q: "Are Universal Links / App Links the same?",
      a: "Those are iOS/Android mechanisms so an HTTPS link opens the app. Deeplink is the idea of “where to land”; Universal/App Links are how to wire it technically.",
    },
    {
      q: "What to measure?",
      a: "Clicks → installs/opens → reaching the target screen → conversion and CPA/ROAS. Compare with campaigns without a deeplink.",
    },
    {
      q: "Common mistake?",
      a: "Advertising a screen that’s hard to find in the menu, while the deeplink lands on home or breaks after install — the user is disappointed.",
    },
  ],
  sections: [
    {
      title: "What deeplinking is",
      level: 2,
      paras: [
        "On a site a “deep” link is a specific page URL. In apps a deeplink leads to an activity screen: product, category, promo, profile. The user doesn’t browse the menu for what the ad already promised.",
        "A deferred deeplink is needed when the app isn’t there: the chain “link → install → first launch → promised screen”. Without it, install often ends on onboarding and the campaign meaning is lost.",
      ],
      lists: [
        {
          intro: "Two modes:",
          items: [
            "app installed — straight to the target screen;",
            "not installed — deferred: store → then the target screen;",
            "web ads without an app — a direct landing URL with UTM.",
          ],
        },
      ],
      links: [
        {
          label: "Clickable link",
          href: "/en/blog/klikabelnaya-ssylka/",
        },
      ],
    },
    {
      title: "Why a deeplink in an ad campaign",
      level: 2,
      paras: [
        "Every extra tap after an ad click cuts conversion. If the banner promises a flight discount and the home catalog opens — part of the audience leaves.",
        "A deeplink aligns expectation and screen: acquiring new users (promo, first order) and retention/reactivation (forgotten feature, repurchase, abandoned cart).",
      ],
      lists: [
        {
          intro: "Channels where it shows most:",
          items: [
            "mobile and programmatic ads;",
            "push and in-app messages;",
            "email and SMS;",
            "retargeting and CRM promos.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "A deeplink doesn’t replace the offer and doesn’t “guarantee” revenue growth. It removes friction on the path to the screen you’re advertising.",
        },
      ],
    },
    {
      title: "Acquisition: a seasonal promo example",
      level: 2,
      paras: [
        "In peak periods (holidays, seasonal sales, travel) marketers launch specials for new clients. Without a deeplink, high ad CTR often doesn’t become an order: people can’t find the promo terms.",
        "With a deeplink the click lands on a screen with the offer and an action button. For e-commerce and travel that’s especially critical: catalog is huge, manual search kills impulse.",
      ],
      lists: [
        {
          intro: "Before launch check:",
          items: [
            "the screen exists and opens on a fresh build;",
            "the promo is still live at click time;",
            "there’s a fallback web URL if the app isn’t available;",
            "campaign UTM/tags reach analytics.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct bids",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Retention and re-engagement",
      level: 2,
      paras: [
        "Budget often goes to new users, while reactivating old ones is cheaper. A deeplink in push/email goes straight to a forgotten feature, renewal, upsell, or payment screen (after auth).",
        "Scenario: a discount on a rarely used feature for people who never tried it. Without a deep link, “check section X” rarely survives to the right screen.",
      ],
      lists: [
        {
          intro: "Typical retention screens:",
          items: [
            "abandoned cart / unfinished order;",
            "personal promo code;",
            "subscription renewal;",
            "content the user didn’t finish.",
          ],
        },
      ],
    },
    {
      title: "Tech: what a marketer should watch",
      level: 2,
      paras: [
        "URI schemes, Universal Links (iOS), App Links (Android), MMP attribution params (AppsFlyer, Adjust and peers) — engineering and mobile analytics territory. For marketers the brief matters: which screen, which params (product id, promo id), behavior without the app.",
        "Test on real devices before scaling budget: cold install, already installed app, outdated version, web fallback.",
      ],
      lists: [
        {
          intro: "Mini brief for engineering:",
          items: [
            "screen routes and required params;",
            "deferred behavior after install;",
            "fallback to the mobile site;",
            "analytics events: open → screen → conversion;",
            "handling broken/stale ids.",
          ],
        },
      ],
      tables: [
        {
          caption: "Regular vs deferred deeplink",
          headers: ["Situation", "User expectation"],
          rows: [
            ["App installed", "Straight to the target screen"],
            ["No app", "Install → then the same screen"],
            ["Broken link", "Fallback / clear error, not silence"],
            ["Site only", "Direct landing URL + UTM"],
          ],
        },
      ],
    },
    {
      title: "Mistakes and a sane minimum",
      level: 2,
      paras: [
        "Don’t advertise what isn’t in navigation or is buried three taps deep without a deeplink. Don’t send every creative to splash/onboarding. Don’t forget retention: a deeplink helps after the first install too.",
        "Rule: the fewer steps from click to the promised screen, the higher the chance of a goal action — with a live offer and decent UX.",
      ],
      lists: [
        {
          intro: "Checklist before scale:",
          items: [
            "offer = screen;",
            "deferred and fallback exist;",
            "A/B: with deeplink vs without on a small budget;",
            "monitor open errors;",
            "creative and landing/screen consistency.",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Ad cabinet",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
  ],
  related: [
    "klikabelnaya-ssylka",
    "stavki-direkt",
    "optimizatsiya-konversii",
    "reklamnyy-kabinet",
    "metrika-tseli",
    "lending",
  ],
};
