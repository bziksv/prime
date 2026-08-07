import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodvizhenie-prilozheniy — same structure as RU JSON. */
export const prodvizheniePrilozheniyEn: BlogPost = {
  slug: "prodvizhenie-prilozheniy",
  title: "How to promote mobile apps and games",
  date: "2019-10-24",
  category: "Digital marketing",
  cover: "/images/blog/prodvizhenie-prilozheniy/cover-en.webp",
  excerpt:
    "App and game promotion: creatives and playables, category-interest targeting, event-based remarketing, deep links, and retention metrics — without racing only for installs.",
  lead: [
    "Stores are crowded: an install alone is not a business. You need users who stay and pay — or complete the target action inside the app.",
    "Working levers include interactive creatives, precise targeting, retention via remarketing, deep links to the right screen, and a metrics stack. Other people’s 2010s case numbers are order-of-magnitude cues, not your plan.",
  ],
  faq: [
    {
      q: "Where should app promotion start?",
      a: "With the product and a success event (signup, level, purchase), then the store page, a tracker, and a test budget on 1–2 channels — not “every network” at once.",
    },
    {
      q: "Are playable ads always better than video?",
      a: "They often lift engagement for games, but cost more to produce and aren’t universal. Compare CPI/CPA and user quality, not only CTR.",
    },
    {
      q: "Do installs or retention matter more?",
      a: "For business — retention and value. Cheap installs that churn on day 1 burn the budget.",
    },
    {
      q: "Why do deep links matter?",
      a: "So ads land on the right screen (promo, product), not a bare hub. Without the app — a deferred deep link via the store.",
    },
    {
      q: "Should I run remarketing after the app is deleted?",
      a: "Some MMPs/networks can work with event and ID audiences within platform rules. Follow policies and consent.",
    },
    {
      q: "Is one social network enough for app promotion?",
      a: "Sometimes for a test. Scale usually needs several sources and hard unit-economics comparison.",
    },
  ],
  sections: [
    {
      title: "Creative: video, vertical, playable",
      level: 2,
      paras: [
        "On a phone, vertical full-screen wins: a trailer or gameplay without a “letter” on screen. For games, playable ads are strong — a short demo with “play” and a path to install: the person already tried the mechanic.",
        "Other people’s cases (including playable vs square video) show conversion order of magnitude, but your genre and offer matter more. Test 2–3 creative hypotheses on one segment.",
      ],
      lists: [
        {
          intro: "What to check in the creative:",
          items: [
            "a clear hook in the first seconds",
            "vertical for mobile feed",
            "one offer / one action",
            "a link to the post-install screen.",
          ],
        },
      ],
    },
    {
      title: "Targeting: find “your” category",
      level: 2,
      paras: [
        "Showing “everyone 18–45” burns budget. Demographics, geo, interests work — and for apps, critically, people who already installed apps from your category (strategy, utilities, shopping).",
        "Competitor followers on social sometimes give cheap reach, but not always installs. In practical launches a “has a genre game on device” segment often beats “liked a competitor page”. Segment by interest freshness: 90 / 180 / 360 days — and compare CPI and retention, not only volume.",
      ],
      notes: [
        {
          title: "Note",
          text: "Platforms and signals change (privacy, iOS, policies). Check available audiences in the current ad account; don’t blindly copy outdated “2018 interests” guides.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Google mobile ads",
          href: "/en/blog/mobilnaya-reklama-google/",
        },
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Retention: event-based remarketing",
      level: 2,
      paras: [
        "New installs without return are a budget hole. Remarketing works on people who already know the app: warm inactive users, bring them back to purchase, finish an abandoned flow.",
        "A strong lever is in-app events (level, cart, product view). Different segments get different creatives: a “haven’t been in a while” discount, an abandoned-item reminder, an offer to those who viewed but didn’t add to cart. Dynamic formats help when the catalog is large.",
      ],
      lists: [
        {
          intro: "Remarketing jobs:",
          items: [
            "bring back “sleepers”",
            "finish an incomplete action",
            "raise LTV of payers",
            "don’t hammer those who bought recently.",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Deep links: a short path to action",
      level: 2,
      paras: [
        "A plain store link without context leaves the user on the storefront. A deep link goes straight to a promo, product, or level. If the app isn’t installed — deferred deep link: install, then the right screen.",
        "Without deep links the funnel is longer and more people drop off. For app campaigns this is basic engineering, not a “feature later”.",
      ],
      links: [
        {
          label: "Deep links",
          href: "/en/blog/diplinking/",
        },
      ],
    },
    {
      title: "From theory to practice and metrics",
      level: 2,
      paras: [
        "Launch scheme: lock the success event → tracker/MMP → creatives and segments → deep links → weekly review of CPI, CR to event, retention D1/D7. Scale only segments with solid retention.",
        "In cases like remarketing + deep links for e-com apps, growth isn’t “network magic” — it’s segmentation: abandoned cart ≠ mere view. Other people’s CTRs and thousands of installs illustrate the approach; count your own numbers in the account.",
      ],
      lists: [
        {
          intro: "Minimum metrics:",
          items: [
            "CPI / cost of the target event",
            "retention D1 and D7",
            "CR to payment or key action",
            "organic share after a paid spike.",
          ],
        },
      ],
      links: [
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
        {
          label: "Average order value",
          href: "/en/blog/sredniy-chek/",
        },
      ],
    },
  ],
  closing: [
    "App promotion is creative and precise targeting at the entrance, events and deep links in the middle, retention and LTV at the exit. Count more than installs: cheap traffic without retention is the most expensive kind.",
  ],
  related: [
    "diplinking",
    "mobilnaya-reklama-google",
    "retargeting",
    "tselevaya-auditoriya",
    "istochniki-trafika",
    "veb-prilozhenie",
  ],
};
