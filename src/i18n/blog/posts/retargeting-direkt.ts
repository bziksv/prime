import type { BlogPost } from "../../../data/blog";

/** EN overlay for retargeting-direkt — same structure as RU JSON. */
export const retargetingDirektEn: BlogPost = {
  slug: "retargeting-direkt",
  title: "Retargeting in Yandex Direct: segments, placements, and ads",
  date: "2019-07-03",
  category: "Contextual advertising",
  cover: "/images/blog/retargeting-direkt/cover-en.webp",
  excerpt:
    "How to optimize retargeting in Direct: Metrika goals and segments, Yandex Audiences, reading stats by display conditions and creatives — without rigid CTR and bounce thresholds from 2019 guides.",
  lead: [
    "Retargeting in Yandex Direct brings back people who already visited the site, app, or your lists: viewed a product, abandoned a cart, left a lead. The basics of “what retargeting is” are in a separate article; here — setup and optimization in the Direct and Yandex Display Network contour.",
    "Cabinet UI and report names change. The guide is meaning: segment → display condition → creative → CPA/conversions. We don’t spread rigid norms like “CTR always >0.5%” and “bounce <20%” from old texts: watch your niche and dynamics.",
  ],
  faq: [
    {
      q: "How is this different from the general retargeting piece?",
      a: "That one covers the concept and types. Here — Direct practice: Metrika/Audiences, display conditions, placements, and bid optimization by segment.",
    },
    {
      q: "Metrika goals or segments?",
      a: "Goals are a fast start (“reached / didn’t”). Segments are more flexible: behavior, sources, devices, intersections. Often start with goals and strengthen with segments.",
    },
    {
      q: "Do you need Yandex Audiences?",
      a: "Useful for CRM lists, look-alike, geo, and the display pixel — with a lawful contact base and consent. Don’t upload purchased lists.",
    },
    {
      q: "Can you promise conversion “like everyone else”?",
      a: "No. Warm audiences convert better, but results depend on offer, frequency, and excluding buyers.",
    },
    {
      q: "Is retargeting only in the Display Network?",
      a: "More often yes (networks/display), but schemes depend on campaign type. Check current Direct cabinet capabilities.",
    },
  ],
  sections: [
    {
      title: "Why a separate retargeting campaign",
      level: 2,
      paras: [
        "A large share of visits don’t end in a first-time purchase — normal for many niches, not a “70–95% law for everyone”. Retargeting reminds people of an abandoned cart or key service after they’ve shown interest.",
        "Put retargeting in a separate campaign/condition group: otherwise it’s hard to manage bids, frequency, and creatives apart from cold traffic.",
      ],
      lists: [
        {
          intro: "When retargeting fits:",
          items: [
            "there’s stable site traffic;",
            "Metrika goals/events are set;",
            "there’s an offer for “returners”;",
            "you can exclude people who already bought;",
            "you’re ready to watch impression frequency.",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting: basics",
          href: "/en/blog/retargeting/",
        },
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Three ways to build the audience",
      level: 2,
      paras: [
        "Way 1 — Metrika goal conditions: were / weren’t on a goal (lead, purchase, key page). Simple, but coarse.",
        "Way 2 — Metrika segments: behavior, depth, source, device, visits to specific URLs. More flexible and better for tests like “cart without payment” vs “viewed category”.",
        "Way 3 — Yandex Audiences: your lists (with consent), apps, geo, display pixel, similar audiences. Follow personal-data rules: emails/phones only from a lawful base.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "goals on lead/purchase;",
            "“cart without purchase” segment;",
            "exclude conversions;",
            "a separate creative per stage;",
            "test the retargeting window (days).",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Over-narrowing a segment kills reach and stats. Better 2–3 working segments than a dozen empty ones.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Stats: what to watch after launch",
      level: 2,
      paras: [
        "Let the campaign gather data — don’t expect “magic in three days”. Watch clicks, conversions, CPA/goal cost, bounce, and spend together with placements and display conditions.",
        "CTR and bounce thresholds from old guides (“always >0.5%”, “bounce under 20%”) aren’t universal. The guide is your past periods and comparing segments to each other — not someone else’s “internet norm”.",
      ],
      lists: [
        {
          intro: "Minimum metric set:",
          items: [
            "conversions and CPA;",
            "CTR as a creative signal;",
            "bounce / time — landing quality;",
            "reach and frequency;",
            "spend without goals — a stop signal.",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Metrika",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Segments beat “just a goal”",
      level: 2,
      paras: [
        "Segments describe the audience more precisely: not only “reached a goal”, but who they were by device, source, depth. That makes it easier to raise bids on a profitable slice and weaken an empty one.",
        "Run a couple of segments in parallel with different offers. In Direct reports, watch the slice by display condition (cabinet naming may differ) — compare conversion, CTR, spend.",
      ],
      lists: [
        {
          intro: "When a segment is weak:",
          items: [
            "clicks and spend exist — no goals;",
            "CPA is far above economics;",
            "bounces are abnormally high vs other slices;",
            "audience is burned by frequency;",
            "landing doesn’t match the funnel stage.",
          ],
        },
      ],
    },
    {
      title: "Placements and ads",
      level: 2,
      paras: [
        "In the Display Network, placements and formats affect CTR and post-click. Turn off placements with spend and no conversions once stats volume is enough; don’t cut everything after ten impressions.",
        "Creative should match the stage: abandoned cart — specific product/terms; service visit — offer and trust, not a generic “we’re the best” banner. Refresh combinations when frequency rises and conversion falls.",
      ],
      lists: [
        {
          intro: "Ad optimization:",
          items: [
            "separate texts/banners per segment;",
            "UTM and landing matched to the offer;",
            "frequency cap;",
            "exclude buyers;",
            "test headlines and offer — not only the image.",
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
      title: "What to remember",
      level: 2,
      paras: [
        "Retargeting in Direct runs on Metrika/Audiences data and discipline: a separate campaign, segments, exclusions, frequency and placement control.",
        "Optimization is a loop: stats → compare display conditions → fix bids/creatives/segments. Without an offer and a decent landing, a “warm” audience won’t save you.",
      ],
    },
  ],
  closing: [
    "Assemble goals and 2–3 segments, put retargeting aside, watch CPA and frequency — and fix placements with creatives from facts, not someone else’s 2019 CTR thresholds.",
  ],
  related: [
    "retargeting",
    "strategii-yandeks-direkt",
    "metrika-tseli",
    "prazdnichnyy-retargeting",
    "retargeting-meta",
    "optimizatsiya-konversii",
  ],
};
