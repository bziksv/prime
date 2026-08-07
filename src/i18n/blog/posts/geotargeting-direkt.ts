import type { BlogPost } from "../../../data/blog";

/** EN overlay for geotargeting-direkt — same structure as RU JSON. */
export const geotargetingDirektEn: BlogPost = {
  slug: "geotargeting-direkt",
  title: "Geotargeting in Yandex Direct: search, networks, and advanced options",
  date: "2017-05-05",
  category: "Contextual advertising",
  cover: "/images/blog/geotargeting-direkt/cover-en.webp",
  excerpt:
    "How geo works in DMs on search and in networks, why advanced geotargeting exists, and how not to burn budget on other cities — without outdated 2017 screenshots.",
  lead: [
    "Geotargeting in Yandex Direct limits impressions to people and queries tied to the regions you need. For local business it’s one of the main CTR and cost-per-lead levers: there’s little sense running “window repair” nationwide if you only travel across the oblast.",
    "In 2017 Yandex strengthened geo in networks (RSYA): not only the region in the query, but the user’s habitual place. Search vs. network logic, what the advanced options mean, and practical setup tips.",
  ],
  faq: [
    {
      q: "Is geo on search and in networks the same?",
      a: "The idea is shared (show to “your” regions); the mechanics differ: search leans on the query and explicit region, networks on profile and behavior, including a “home” city.",
    },
    {
      q: "What is advanced geotargeting?",
      a: "Historically — a networks fine-tune: show ads to someone from your region even when they’re temporarily elsewhere (business trip, vacation), using habitual location data. Current option wording is in DMs help.",
    },
    {
      q: "Should advanced geotargeting always be on?",
      a: "Not always. Useful if the client can buy/order while away. Harmful if the service is strictly “in-person visit today in this city” with no value for travelers.",
    },
    {
      q: "Does geo replace negatives and semantics?",
      a: "No. Region cuts audience; ad and landing relevance still decide click quality and price.",
    },
    {
      q: "How is this different from hyperlocal?",
      a: "Direct geo is usually cities/regions/polygons in the account. Hyperlocal is a tight radius around a point. More on hyperlocal in a separate piece.",
    },
    {
      q: "What about licensed verticals and geo?",
      a: "Geo and moderation limits for sensitive verticals still apply. Check current Direct requirements, not 2017 guides.",
    },
    {
      q: "Do I still need a site region?",
      a: "For SEO and maps — yes, a separate track. Ad geo in DMs doesn’t replace the site region in Webmaster or an organization listing.",
    },
  ],
  sections: [
    {
      title: "Why geo in DMs",
      level: 2,
      paras: [
        "A large share of ads with geo is normal: you pay for people who can physically or logistically take the offer. That raises the share of useful clicks and cuts spend on clearly foreign regions.",
        "Geo is set at campaign or group level (UI changes). Then you split budget and ads by cities with different margin and competition.",
      ],
      lists: [
        {
          intro: "Typical setups:",
          items: [
            "one city / agglomeration",
            "several branches as separate campaigns",
            "a delivery zone as a polygon",
            "excluding regions you don’t serve.",
          ],
        },
      ],
    },
    {
      title: "Search: region in the query and settings",
      level: 2,
      paras: [
        "On search users often name the city in the query or search from the right region. Campaign geo cuts impressions outside selected areas and keeps you from competing where you don’t serve.",
        "For tours, tickets, and some “remote” offers geo logic can differ: people search a destination while sitting in another city. Don’t copy local-service settings onto travel without help checks and tests.",
      ],
      notes: [
        {
          title: "Important",
          text: "Watch region reports: impressions sometimes leak through wide settings, autotargeting, or overlapping groups.",
        },
      ],
    },
    {
      title: "Networks and advanced geotargeting",
      level: 2,
      paras: [
        "In RSYA demand is more deferred: people read articles and watch videos not at “buy today.” Advanced geo (in the 2017 announcement logic) helps reach an audience with a “home” region even if they’re elsewhere now.",
        "Example: a Petersburg resident on vacation in Sochi may still see relevant ads for a Petersburg service if the option and offer allow it. Click lifts in that period’s research looked modest (about a percent) — plan a test, not a miracle.",
        "Turn the option on deliberately: for same-day city delivery a traveler may be waste; for online booking, an online store with shipping, or a deferred service — useful.",
      ],
      lists: [
        {
          intro: "When advanced geo fits:",
          items: [
            "purchase is possible remotely",
            "the client will return to the home city",
            "the offer isn’t tied to a visit “here and now”",
            "you have analytics to compare with the option off.",
          ],
        },
      ],
    },
    {
      title: "How to set it without burning budget",
      level: 2,
      paras: [
        "Start with a hard region list = service area. Add negative phrases with other cities if semantics pulls them in. For networks separately check that interest reach isn’t too wide with a narrow geo.",
        "Match option names in the account: “advanced geotargeting,” location refinements, and polygons evolved. Don’t rely on 2017 screenshots — on meaning: who counts as “your” region.",
      ],
      lists: [
        {
          intro: "Pre-launch check:",
          items: [
            "regions = real logistics",
            "the landing promises the same city/zone",
            "phone and address don’t mislead",
            "advanced geo on only if the offer allows",
            "Metrika/CRM has a region cut.",
          ],
        },
      ],
    },
    {
      title: "Tie-in with the site and maps",
      level: 2,
      paras: [
        "Ad geo doesn’t replace the SEO region and map listings. Someone may arrive from Direct, then check you on maps and the site — NAP must match.",
        "For offline points near an address also look at hyperlocal scenarios; for “service + city” in search — regional SEO and the site region.",
      ],
      links: [
        {
          label: "Hyperlocal targeting",
          href: "/en/blog/giperlokalnyy-targeting/",
        },
        {
          label: "Site region",
          href: "/en/blog/region-sayta/",
        },
      ],
    },
    {
      title: "Practical takeaway",
      level: 2,
      paras: [
        "Geotargeting in DMs is a required budget-control layer. Advanced network options help “home” audiences while away, but aren’t universal.",
        "Test on/off, watch cost per lead by region, and don’t confuse ad geo with registration in the closed Yandex.Catalog or a “region checkbox” without a real service.",
      ],
      tables: [
        {
          caption: "Channel → what geo rests on",
          headers: ["Channel", "Basis"],
          rows: [
            ["Search", "Query, settings region, location"],
            ["Networks (RSYA)", "Profile, behavior, “home” city"],
            ["Advanced geo", "Reaching travelers from your region"],
            ["Hyperlocal", "Tight radius/polygon at a point"],
          ],
        },
      ],
    },
  ],
  related: [
    "giperlokalnyy-targeting",
    "region-sayta",
    "byudzhet-yandeks-direkt",
    "regionalnoe-seo",
  ],
} as BlogPost;
