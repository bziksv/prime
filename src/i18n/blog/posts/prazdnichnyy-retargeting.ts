import type { BlogPost } from "../../../data/blog";

/** EN overlay for prazdnichnyy-retargeting — same structure as RU JSON. */
export const prazdnichnyyRetargetingEn: BlogPost = {
  slug: "prazdnichnyy-retargeting",
  title: "Pre-holiday retargeting: 4 campaign tactics",
  date: "2018-12-26",
  category: "Paid search",
  cover: "/images/blog/prazdnichnyy-retargeting/cover-en.webp",
  excerpt:
    "How to bring visitors back at the peak of holiday shopping: a separate retargeting campaign, a social segment, Audiences interests, display, and a cascade — without burning the budget.",
  lead: [
    "In the pre-holiday season site traffic rises while purchase share often stays low: people browsed the catalog and left. Retargeting brings back those who already know the brand — with a discount, gift, or a shorter offer under a deadline.",
    "We cover four tactics for Yandex Direct (and related accounts): social segment, interests, display, and a cascade. Keep retargeting in a separate campaign — easier bids, negatives, and reporting. The material is informational; when Meta* products are mentioned, the legal notice applies.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Facebook* and Instagram* ads run through Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Why a separate retargeting campaign?",
      a: "Easier bids, schedule, creatives, and stats. Mixing with cold search muddies CPA and optimization.",
    },
    {
      q: "Is retargeting only for abandoned carts?",
      a: "No. Work the whole touch base: visits, buyers, social referrals — with different offers.",
    },
    {
      q: "How many contacts do I need for Audiences?",
      a: "A guide of roughly from ~1,000 list rows (check current Yandex help limits). Fewer — use Metrica segments.",
    },
    {
      q: "Which holiday offer should I use?",
      a: "Gift sets, delivery by date, a time-limited promo code, a free option. Each segment gets its own copy — not one banner for everyone.",
    },
    {
      q: "What is cascade retargeting?",
      a: "A touch chain that tightens/changes the offer by days after the visit: reminder → benefit → last deadline.",
    },
    {
      q: "Should social networks belong in the segment?",
      a: "If traffic comes from there — yes: a Metrica “source = social” segment to warm a familiar audience with a holiday offer.",
    },
    {
      q: "How do I avoid burning the budget?",
      a: "Impression frequency, exclude buyers when possible, separate ads by segment, CPA stop-loss, check promo landings.",
    },
    {
      q: "Does holiday retargeting help SEO?",
      a: "Not directly. Indirectly: faster offer tests and awareness. Organic is a separate track — prep first, TOP for the core often planned over 2–6 months.",
    },
  ],
  sections: [
    {
      title: "Why retargeting specifically for holidays",
      level: 2,
      paras: [
        "Demand is compressed: gifts, corporate events, delivery deadlines. People compare and postpone more — retargeting catches the warm, it doesn’t heat cold from zero.",
        "Put retargeting in a separate campaign: own bids, schedule (evenings/weekends), budget, and goals. Otherwise the optimizer “eats” search-phrase stats.",
      ],
      lists: [
        {
          intro: "Base before launch:",
          items: [
            "counter and goals in Metrica",
            "current promos and landings",
            "exclude buyers (if the scenario allows)",
            "frequency cap and daily budget.",
          ],
        },
      ],
      links: [
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
        {
          label: "Yandex Direct bids",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Tactic 1: audience from social networks",
      level: 2,
      paras: [
        "People who came from VK, Instagram*, Facebook*, and other social networks already saw the brand in the feed. Gift collections and “make it by the holiday” fit them — not a cold offer from scratch.",
        "In Metrica save a segment by source (social) and attach it in retargeting conditions. Creative and landing — for the holiday scenario, not a copy of the search ad.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "segment of social visits",
            "a separate ad group",
            "offer: set / delivery by date / promo code",
            "check UTM and promo landings.",
          ],
        },
      ],
    },
    {
      title: "Tactic 2: interests and Yandex Audiences",
      level: 2,
      paras: [
        "Upload a buyers or leads base into Audiences (respecting minimum list size) and review interests with high affinity. Add a strong interest to a Metrica segment and combine: interest + was on site, interest + bought.",
        "Different interests — different copy: cooking and “beauty/health” don’t live in one ad. Otherwise CTR and conversion drop.",
      ],
      lists: [
        {
          intro: "Combinations:",
          items: [
            "interest ∩ site visitors",
            "interest ∩ buyers",
            "interest ∩ abandoned cart",
            "separate creatives for each pairing.",
          ],
        },
      ],
    },
    {
      title: "Tactic 3: display retargeting",
      level: 2,
      paras: [
        "Display formats remind about the brand and promo wherever people “browse” the web. On holidays that boosts warm-base reach, but watch frequency and placements — irritation instead of a purchase otherwise.",
        "Tie display to a clear next step: not only “awareness,” but a click to a current promo URL with stock and timelines.",
      ],
      lists: [
        {
          intro: "Control:",
          items: [
            "impression frequency",
            "exclude irrelevant placements",
            "one main offer per banner",
            "end-to-end goal (lead/purchase), not only reach.",
          ],
        },
      ],
    },
    {
      title: "Tactic 4: cascade retargeting",
      level: 2,
      paras: [
        "A cascade changes the message by visit “age”. Day 0–1: soft reminder. Day 2–3: benefit or gift. Closer to the deadline: “make it by the date” / last promo day. Compress timelines by category: flowers and food decide faster than large appliances.",
        "Don’t show the same banner for two weeks. Exclude conversions from later cascade steps.",
      ],
      lists: [
        {
          intro: "Cascade frame:",
          items: [
            "step 1 — assortment reminder",
            "step 2 — discount/bonus",
            "step 3 — delivery/promo deadline",
            "exclude buyers at each step.",
          ],
        },
      ],
    },
    {
      title: "Setup rules and measurement",
      level: 2,
      paras: [
        "Segment as practically as possible: each segment gets its own offer. Retargeting works the whole touch base, not only “didn’t buy”. Test tactics in turn — otherwise you won’t know what worked.",
        "Count CPA and retargeting’s share of revenue in the holiday window. After the season keep working segments and creatives — useful for the next peaks (Valentine’s, March 8, Black Fridays).",
      ],
      lists: [
        {
          intro: "Launch checklist:",
          items: [
            "separate campaign",
            "4 tactics labeled in groups",
            "landings with current promo",
            "frequency and budget caps",
            "report: spend / conversions / CPA by segment.",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Branded traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Check the offer and delivery timelines before enabling impressions: promising “by the holiday” without logistics hits reviews and repeat sales.",
        },
      ],
    },
  ],
  related: [
    "stavki-direkt",
    "kontekst-i-seo",
    "optimizatsiya-konversii",
    "brendovyy-trafik",
    "spetsrazmeshchenie-direkt",
    "reklamnyy-kabinet",
  ],
};
