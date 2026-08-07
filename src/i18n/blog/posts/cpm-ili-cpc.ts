import type { BlogPost } from "../../../data/blog";

/** EN overlay for cpm-ili-cpc — same structure as RU JSON. */
export const cpmIliCpcEn: BlogPost = {
  slug: "cpm-ili-cpc",
  title: "CPM or CPC: when to pay for impressions and when for clicks",
  date: "2021-06-29",
  category: "Internet marketing",
  cover: "/images/blog/cpm-ili-cpc/cover-en.webp",
  excerpt:
    "How pay-per-impression (CPM) differs from pay-per-click (CPC), who each fits, how targeting ties to campaign economics, and why “what’s better” depends on the goal.",
  lead: [
    "In digital ads two base payment models: for impressions (CPM, usually per 1,000) and for clicks (CPC). The first is more about reach and awareness; the second — traffic to the site and control of cost per visit.",
    "Below — in plain words, who each fits better, where targeting and a landing matter, and why you can’t pick a “best model forever” without a goal and numbers. Old “clicks for pennies” price lists aren’t a guide — watch your own tests.",
  ],
  faq: [
    {
      q: "What is CPC?",
      a: "Cost Per Click — you pay when someone clicks the ad. An impression without a click usually doesn’t spend CPC budget (aside from specific system nuances).",
    },
    {
      q: "What is CPM?",
      a: "Cost Per Mille — pay per 1,000 impressions. A click isn’t required: you pay for the ad being shown.",
    },
    {
      q: "What’s more effective — impressions or clicks?",
      a: "Depends on the goal. Awareness/image — more often CPM (and related reach formats). Site leads and sales — more often CPC/CPA and landing control.",
    },
    {
      q: "Can you combine them?",
      a: "Yes: reach at the top of the funnel and click/goal campaigns below. A remarketing link is typical.",
    },
    {
      q: "Is CPC always cheaper for sales?",
      a: "Not always. An expensive click with high conversion beats a cheap one with no leads. Count CPA and lead quality.",
    },
    {
      q: "Where to use CPM?",
      a: "Where audience and contact frequency matter: topical sites, display, social for a reach job — with a decent creative.",
    },
    {
      q: "How does this tie to UTM?",
      a: "For click campaigns tags help split sources in analytics. For reach — watch brand queries, direct visits, and post-campaign slices.",
    },
    {
      q: "What about CPA?",
      a: "Pay per action (lead, purchase). Closer to business, but needs clean goals and data volume. Often the next step after CPC.",
    },
  ],
  sections: [
    {
      title: "Clicks and impressions in plain words",
      level: 2,
      paras: [
        "An impression — the ad appeared in front of the user. A click — they followed it. CPC pays for the visit; CPM — a pack of impressions even if clicks are few.",
        "Both models are valid and useful. The mistake is paying for reach while expecting instant leads, or chasing cheap clicks with no offer and landing.",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "CPM — “they saw me”;",
            "CPC — “they came to the site”;",
            "CPA — “they took the goal action”.",
          ],
        },
      ],
    },
    {
      title: "When CPM fits",
      level: 2,
      paras: [
        "When the job is for the brand and offer to “show up” to the right audience: launch, image, reminder, warm-up before a promo. Creative and frequency matter no less than the bid.",
        "Placements: large topical media, niche sites, relevant communities — where your audience really is. After reach, remarketing to people who already saw the ad is common.",
      ],
      lists: [
        {
          intro: "CPM works well if:",
          items: [
            "you need awareness, not only clicks;",
            "you have a strong visual/message;",
            "you’re ready to measure effect wider than “yesterday’s leads”;",
            "the audience is narrow and clear.",
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
      title: "When CPC fits",
      level: 2,
      paras: [
        "When you need site traffic and want to pay closer to interest: they clicked — you paid. Easier to control visit budget and link spend to conversions in analytics.",
        "Without targeting and a decent landing, CPC becomes paying for curiosity. Competition raises click price — that’s market normal, not a “broken model”.",
      ],
      lists: [
        {
          intro: "CPC makes sense if:",
          items: [
            "there’s a site/landing for the offer;",
            "you need leads, sales, sign-ups;",
            "UTM and end-to-end analytics matter;",
            "you’re ready to rotate ads and negatives/audiences.",
          ],
        },
        {
          intro: "Downsides of the click model:",
          items: [
            "CPC rises in competitive niches;",
            "clicks without purchases on a weak offer;",
            "low-quality traffic risk — watch conversions, not CTR alone.",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Click fraud",
          href: "/en/blog/sklikivanie/",
        },
        {
          label: "Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "How to choose",
      level: 2,
      paras: [
        "Goal first: tell the world about yourself or bring buyers now. Reach → closer to CPM (and reach strategies). Site sales → closer to CPC/CPA.",
        "Then economics: acceptable lead cost, margin, sales-cycle length. Test both models on a small budget and compare not a “pretty CTR”, but leads and revenue.",
      ],
      notes: [
        {
          title: "Takeaway",
          text: "“What’s better — impressions or clicks?” has no answer without a goal. Impressions build awareness; clicks bring client candidates. They often work as a pair, not an eternal fight.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Selling traffic (publisher side)",
          href: "/en/blog/prodazha-trafika/",
        },
      ],
    },
  ],
  related: [
    "utm-metki",
    "retargeting",
    "strategii-yandeks-direkt",
    "sklikivanie",
    "prodazha-trafika",
    "spetsrazmeshchenie-direkt",
  ],
};
