import type { BlogPost } from "../../../data/blog";

/** EN overlay for cpm-ili-cpc — same structure as RU JSON. */
export const cpmIliCpcEn: BlogPost = {
  slug: "cpm-ili-cpc",
  title: "CPM or CPC: when to pay for impressions vs. clicks",
  date: "2021-06-29",
  category: "Paid search",
  cover: "/images/blog/cpm-ili-cpc/cover-en.webp",
  excerpt:
    "How cost-per-impression (CPM) differs from cost-per-click (CPC), which model fits which goal, how targeting shapes campaign economics, and why “which is better” always depends on the outcome you want.",
  lead: [
    "Digital ads usually boil down to two payment models: impressions (CPM, typically priced per 1,000) and clicks (CPC). CPM is built for reach and awareness; CPC is built for site traffic and a clearer cost per visit.",
    "A plain look at who each model serves, where targeting and the landing page matter, and why you can’t crown a forever winner without a goal and real numbers. Old “clicks for pennies” rate cards are not a playbook — run your own tests.",
  ],
  faq: [
    {
      q: "What is CPC?",
      a: "Cost Per Click — you pay when someone clicks the ad. An impression with no click usually doesn’t spend CPC budget (aside from a few platform-specific quirks).",
    },
    {
      q: "What is CPM?",
      a: "Cost Per Mille — you pay per 1,000 impressions. A click isn’t required: you’re paying for the ad to be shown.",
    },
    {
      q: "What’s more effective — impressions or clicks?",
      a: "It depends on the goal. Brand awareness and image work lean toward CPM (and related reach formats). Leads and sales from the site lean toward CPC/CPA plus a solid landing page.",
    },
    {
      q: "Can I combine them?",
      a: "Yes: run reach at the top of the funnel and click- or goal-based campaigns lower down. Linking them with remarketing is a common setup.",
    },
    {
      q: "Is CPC always cheaper for sales?",
      a: "Not always. An expensive click that converts beats a cheap click that never becomes a lead. Track CPA and lead quality.",
    },
    {
      q: "Where does CPM make sense?",
      a: "Anywhere audience and frequency matter: niche sites, display, social for a reach job — with creative that’s actually worth showing.",
    },
    {
      q: "How does this tie to UTM tags?",
      a: "On click campaigns, tags help split sources in analytics. On reach, watch brand searches, direct visits, and post-campaign slices.",
    },
    {
      q: "What about CPA?",
      a: "You pay per action (lead, purchase). It’s closer to the business outcome, but you need clean goals and enough data. Often it’s the next step after CPC.",
    },
  ],
  sections: [
    {
      title: "Clicks and impressions in plain English",
      level: 2,
      paras: [
        "An impression means the ad showed up in front of someone. A click means they followed it. CPC pays for the visit; CPM pays for a block of impressions even when clicks are scarce.",
        "Both models are legitimate. The mistake is buying reach while expecting instant leads — or chasing cheap clicks with a weak offer and landing page.",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "CPM — “they saw me”",
            "CPC — “they came to the site”",
            "CPA — “they took the action you wanted”",
          ],
        },
      ],
    },
    {
      title: "When CPM fits",
      level: 2,
      paras: [
        "Use it when the job is to put the brand and offer in front of the right people: a launch, brand lift, a reminder, or a warm-up before a promo. Creative and frequency matter as much as the bid.",
        "Placements: large niche media, relevant sites, communities where your audience actually hangs out. After a reach flight, remarketing to people who already saw the ad is a natural next step.",
      ],
      lists: [
        {
          intro: "CPM works well when:",
          items: [
            "you need awareness, not only clicks",
            "you have a strong visual or message",
            "you’re willing to measure impact beyond “yesterday’s leads”",
            "the audience is narrow and well defined",
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
        "Use it when you need site traffic and want to pay closer to interest: they clicked, you paid. It’s easier to control visit spend and tie cost to conversions in analytics.",
        "Without targeting and a decent landing page, CPC is just paying for curiosity. Competition drives click prices up — that’s the market, not a “broken” model.",
      ],
      lists: [
        {
          intro: "CPC makes sense when:",
          items: [
            "you have a site or landing page for the offer",
            "you need leads, sales, or sign-ups",
            "UTMs and full-funnel analytics matter",
            "you’re ready to rotate ads and refine negatives or audiences",
          ],
        },
        {
          intro: "Limits of the click model:",
          items: [
            "CPC climbs in competitive niches",
            "weak offers produce clicks with no purchases",
            "low-quality traffic risk — watch conversions, not CTR alone",
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
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "How to choose",
      level: 2,
      paras: [
        "Start with the goal: get on people’s radar, or bring buyers in now. Reach points toward CPM (and reach strategies). Site sales point toward CPC/CPA.",
        "Then check the economics: acceptable cost per lead, margin, sales-cycle length. Test both models on a small budget and compare leads and revenue — not a “pretty” CTR.",
      ],
      notes: [
        {
          title: "Takeaway",
          text: "There’s no universal answer to “impressions or clicks?” without a goal. Impressions build awareness; clicks bring potential customers. They often work as a pair, not rivals.",
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
