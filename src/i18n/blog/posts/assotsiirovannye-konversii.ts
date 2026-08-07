import type { BlogPost } from "../../../data/blog";

/** EN overlay for assotsiirovannye-konversii — same structure as RU JSON. */
export const assotsiirovannyeKonversiiEn: BlogPost = {
  slug: "assotsiirovannye-konversii",
  title: "Assisted conversions: why the path to purchase matters",
  date: "2019-12-25",
  category: "Internet marketing",
  cover: "/images/blog/assotsiirovannye-konversii/cover-en.webp",
  excerpt:
    "What assisted conversions are, how they differ from first and last click, how not to kill “helper” channels, and how to read attribution in analytics without outdated menu screenshots.",
  lead: [
    "A purchase rarely happens from one touch. Someone saw an ad, read reviews, came back via brand search, and only then ordered. If you watch only “last click”, helper channels look useless — and budget gets cut in the wrong place.",
    "Assisted conversions are the contribution of touches that were on the path but weren’t the final deal source. Below — conversion-type logic, why attribution models matter, and how not to err when shifting budget. Analytics UIs change; report meaning beats clicks on old menu items.",
  ],
  faq: [
    {
      q: "How does an assisted conversion differ from a “regular” one?",
      a: "“Regular” in reports often = the last paid/non-direct click before the goal. Assisted = the channel was earlier in the chain and helped reach the purchase, but didn’t close it alone.",
    },
    {
      q: "Is that the same as attribution?",
      a: "Related. Assisted conversions are the fact a channel joined the path. Attribution models are rules for splitting credit across touches.",
    },
    {
      q: "Why not look at last click only?",
      a: "Brand search and direct visits often “take” the sale, while discovery started with content, display, or a social post. Cut the top of the funnel — and “last” conversions fall too.",
    },
    {
      q: "Where to look in Metrica and Google Analytics?",
      a: "In sections on sources, goals, and conversion models/paths (names change). The point: touch chains and model comparison — not one “conversions” column.",
    },
    {
      q: "Do assisted conversions always mean spend more?",
      a: "No. Check quality, cost, and role in the chain. A channel can “light up” in paths yet bring noisy traffic.",
    },
    {
      q: "Link to SEO?",
      a: "Organic is often first touch, assisted, and last. Cutting SEO over a weak last click is a common mistake on a long sales cycle.",
    },
  ],
  sections: [
    {
      title: "Why a purchase is a chain",
      level: 2,
      paras: [
        "A cheap impulse product is sometimes bought right after one ad. An expensive or complex choice almost always needs several touches: ad → site → compare → return → order.",
        "Marketing’s job isn’t only to “close” with the last click, but to see which channels built awareness and trust. Otherwise budget optimization becomes a hunt for the shortest path.",
      ],
      lists: [
        {
          intro: "Three useful views of a conversion:",
          items: [
            "first interaction — where they learned;",
            "last — what “finished” the order;",
            "assisted — what was in the middle and still influenced.",
          ],
        },
      ],
    },
    {
      title: "What counts as an assisted conversion",
      level: 2,
      paras: [
        "A channel gets an assisted conversion if the user touched it on the path to the goal, but the final visit before conversion came from another source. Example: display click → later organic brand → purchase. Display is assisted credit; brand is often last click.",
        "Brand paid search and direct often look “super efficient” because they close already-warmed people. Without upper touches that tail thins over time.",
      ],
      links: [
        {
          label: "Branded traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Why this matters for budget",
      level: 2,
      paras: [
        "If you keep only channels with the best last-click CPA, you may turn off what prepares demand. Weeks–months later the “strong” closers fall too — it looks like “the brand broke”, when you actually cut the funnel.",
        "Assisted conversions don’t cancel unit economics: watch touch cost, margin, and lead quality. The goal isn’t to keep everything — it’s not to cut blind.",
      ],
      lists: [
        {
          intro: "Typical mistakes:",
          items: [
            "turning off a channel with zero last click but a strong path role;",
            "treating brand paid search as the only growth driver;",
            "comparing channels without sales-cycle length;",
            "skipping UTMs and goals — then chains “break”.",
          ],
        },
      ],
    },
    {
      title: "Attribution models — short version",
      level: 2,
      paras: [
        "An attribution model decides who gets conversion credit: first click, last, linear across all, mid-path emphasis, etc. Different models show different “efficiency” for the same channel — that’s normal.",
        "Practice: compare 2–3 models on one period and see which channels stay important. Don’t hunt one “correct” model for every niche — hunt stable conclusions for budget decisions.",
      ],
      notes: [
        {
          title: "Important",
          text: "In reports, assisted conversions across channels can sum above order count: one touch plays several roles, one path has several helpers. Watch shares and dynamics — don’t “blindly add into revenue”.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to read it in analytics",
      level: 2,
      paras: [
        "Google Analytics historically had multi-channel funnels and model comparison; in current versions the logic is the same — paths and attribution, different section names. In Yandex Metrica look at source attribution models (last transition, first transition, etc.) and goal reports.",
        "Linking ad accounts to analytics matters so campaigns don’t vanish into “(not set)”. Without goals (purchase, lead), talking about assisted conversions is pointless.",
      ],
      lists: [
        {
          intro: "Minimum to work:",
          items: [
            "goals/ecommerce configured;",
            "UTMs consistent;",
            "analysis window ≥ sales cycle;",
            "compare last click vs first / another model;",
            "budget decisions locked with a date and hypothesis.",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "Looker Studio",
          href: "/en/blog/looker-studio/",
        },
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
      ],
    },
    {
      title: "What to do in practice",
      level: 2,
      paras: [
        "List top channels by last click and top by path participation. Where the gap is large — don’t cut at once: check creatives, landings, and quality. Sometimes a channel “helps” but is expensive — then narrow, don’t kill.",
        "For SEO and content an assisted role is often normal: they warm, and the deal closes via brand or retarget. Keep a channel mix, not a war of reports.",
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
  ],
  closing: [
    "Assisted conversions show credit that last click misses. Compare models, don’t cut the top of the funnel blind, and make budget calls together with sales-cycle length and margin.",
  ],
  related: [
    "istochniki-trafika",
    "brendovyy-trafik",
    "google-analytics",
    "utm-metki",
    "looker-studio",
    "optimizatsiya-konversii",
  ],
};
