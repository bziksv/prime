import type { BlogPost } from "../../../data/blog";

/** EN overlay for retargeting — same structure as RU JSON. */
export const retargetingEn: BlogPost = {
  slug: "retargeting",
  title: "Retargeting: what it is and how it differs from targeting",
  date: "2018-03-28",
  category: "Paid search",
  cover: "/images/blog/retargeting/cover-en.webp",
  excerpt:
    "Retargeting brings back people who already visited: cart, product view, visit without action. How it differs from targeting, which types exist, and how not to annoy the audience.",
  lead: [
    "Retargeting (remarketing) shows ads to people who already touched the site or app but didn’t finish the goal. Targeting finds a new audience by gender, geo, interests; retargeting works with a “warm” base.",
    "We cover how it works in practice, campaign types, where to set it up, and typical risks. Holiday tactics are a separate post; this is the foundation.",
  ],
  faq: [
    {
      q: "Are retargeting and remarketing the same?",
      a: "Essentially yes: return a known audience. “Retarget” is more common in Yandex talk, “remarketing” in Google — meaning is shared.",
    },
    {
      q: "How does it differ from targeting?",
      a: "Targeting selects an audience in the network. Retargeting reaches people who already were with you (site, app, list). Often a pair: attract first, then bring back.",
    },
    {
      q: "Do I need an analytics counter?",
      a: "Yes: Metrica, ad-system pixel/tag, events (cart, view). Without data, segments are empty.",
    },
    {
      q: "What is dynamic retargeting?",
      a: "Showing specific products/services the person viewed, not a generic store banner. Usually stronger than “just the logo”.",
    },
    {
      q: "Why do retargeting ads annoy people?",
      a: "Frequent shows of one creative and no exclusion of buyers. Cap frequency, refresh the offer, exclude conversions.",
    },
    {
      q: "How long until I see an effect?",
      a: "Depends on audience size and offer. Expect weeks to gather stats; don’t wait for “magic in 3 days”.",
    },
    {
      q: "Is retargeting only for stores?",
      a: "No. Services, B2B, content — segments by key-URL visits and unfinished leads.",
    },
    {
      q: "Does it connect to SEO?",
      a: "Not directly. Indirectly: the same landings and offer affect organic and retargeting conversion rate.",
    },
  ],
  sections: [
    {
      title: "How it looks in practice",
      level: 2,
      paras: [
        "A visitor viewed a product, added to cart, and left. The “cart without purchase” segment gets ads with that product or a discount — on Yandex Advertising Network sites, search, social, or display, depending on the account.",
        "The point isn’t to “chase everyone”, but a relevant reminder at the funnel stage where interest already showed.",
      ],
      lists: [
        {
          intro: "Typical loop:",
          items: [
            "counter records the action;",
            "segment in audiences/account;",
            "separate retarget campaign;",
            "offer by stage (view / cart / abandoned form).",
          ],
        },
      ],
    },
    {
      title: "Why it belongs in ads",
      level: 2,
      paras: [
        "Cold traffic is pricier to take to purchase. Some visits break on choice, delivery, distraction — retarget cheaper “catches up” people already warmed.",
        "Each funnel stage gets its creative: a promo for quick leavers, category value for card viewers, cart reminder for almost-buyers.",
      ],
      lists: [
        {
          intro: "Touch stages:",
          items: [
            "visit without depth;",
            "product/service view;",
            "cart / form not submitted;",
            "purchase (exclude or upsell).",
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
      title: "Retargeting vs targeting",
      level: 2,
      paras: [
        "Targeting sets whom to find online: demographics, interests, geo, look-alike. Retargeting works with those who already left a digital trail with you.",
        "Shared goal — sales and leads; different entry: “find the right people” vs “bring familiars back”. Weak targeting gives little base for retarget; without retarget you pay again for the same people via cold campaigns.",
      ],
      tables: [
        {
          caption: "In short",
          headers: ["", "Targeting", "Retargeting"],
          rows: [
            ["Audience", "New by conditions", "Already on site/in CRM"],
            ["Job", "Attract", "Return / convert"],
            ["Data", "Interests, geo, look-alike", "Events, lists, pixel"],
          ],
        },
      ],
    },
    {
      title: "Types of retargeting",
      level: 2,
      paras: [
        "**Classic** — general site/brand ads to those who left without a goal action.",
        "**Dynamic** — product/service cards from a feed by view. **Search** — catch-up by search queries/audiences with paid search. **Email** — letters to those who left a contact. **In-app** — bring app users back.",
      ],
      lists: [
        {
          intro: "What to pick for a start:",
          items: [
            "Metrica/pixel segments by URL;",
            "exclude buyers;",
            "dynamic feed if the catalog is large;",
            "separate budget and frequency cap.",
          ],
        },
      ],
      links: [
        {
          label: "Holiday retargeting",
          href: "/en/blog/prazdnichnyy-retargeting/",
        },
      ],
    },
    {
      title: "Where you set it up",
      level: 2,
      paras: [
        "Yandex Direct + Metrica/Audiences, Google Ads + tag, social ad accounts with their pixel. One base: site code, goals, segments, a campaign not mixed with cold search.",
        "First gather visit volume and correct events — otherwise audiences are too small to learn.",
      ],
      lists: [
        {
          intro: "Launch minimum:",
          items: [
            "counter and goals verified;",
            "“were here / didn’t buy” segment;",
            "frequency cap;",
            "UTM on ads;",
            "offer not older than what’s on the site.",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
      ],
    },
    {
      title: "Risks and common sense",
      level: 2,
      paras: [
        "A pushy identical banner hurts the brand. Retarget doesn’t see an offline purchase — the person already bought from a competitor while the ad still “catches up”.",
        "Exclude buyers, rotate creatives, limit segment lifetime. Measure by segment CPA/ROMI (return on marketing investment), not “I feel we see our banner a lot”.",
      ],
      notes: [
        {
          title: "Important",
          text: "Retarget strengthens the funnel but doesn’t replace product, pricing, and site usability. A leaky checkout won’t be saved by a perfect segment.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
  ],
  related: [
    "prazdnichnyy-retargeting",
    "optimizatsiya-konversii",
    "kontekst-i-seo",
    "utm-metki",
    "tselevaya-auditoriya",
    "mobilnaya-reklama-google",
  ],
};
