import type { BlogPost } from "../../../data/blog";

/** EN overlay for analiz-reklamnoy-kampanii — same structure as RU JSON. */
export const analizReklamnoyKampaniiEn: BlogPost = {
  slug: "analiz-reklamnoy-kampanii",
  title: "Ad campaign analysis in Yandex Direct and Google Ads: a checklist",
  date: "2020-03-25",
  category: "Paid search",
  cover: "/images/blog/analiz-reklamnoy-kampanii/cover-en.webp",
  excerpt:
    "How to break down a paid search campaign in Yandex Metrica and Google Analytics: account linking, keywords, placements, demographics, time, devices, geo, landings, and audiences — without judging by clicks alone.",
  lead: [
    "Lots of clicks and few leads almost always means one of three things: traffic is going to the wrong places, the landing or offer can’t convert, or you’re reading the wrong slices. The checklist below is the order for reviewing a Yandex Direct or Google Ads campaign through analytics.",
    "Report names and click paths in the UIs have changed — especially after GA4. Follow the meaning of each slice, not 2020 screenshots. The broader audit process and KPI set live in related pieces.",
  ],
  faq: [
    {
      q: "Where should you start if KPIs miss?",
      a: "Check the ad account link to Metrica or Analytics and the goals. Without conversions in reports, bid optimization is guessing.",
    },
    {
      q: "Is CTR enough?",
      a: "No. You need conversions, CPA or ROAS, and lead quality. High CTR with no leads burns budget.",
    },
    {
      q: "How many clicks before cutting a placement?",
      a: "Aim for a meaningful sample — often tens to hundreds of clicks in a niche — or it’s noise. There is no universal “exactly 100.”",
    },
    {
      q: "Should you turn off mobile if conversion is low?",
      a: "More often lower the bid or fix the mobile landing — don’t cut the whole segment at once.",
    },
    {
      q: "How is this different from a full ad audit?",
      a: "This piece is an operational analytics review. An audit is wider: account tech, structure, and the client report.",
    },
    {
      q: "Do Direct and Google Ads analyze the same way?",
      a: "Slice logic is shared — keywords, devices, geo, time. Report names differ; the meaning is the same.",
    },
    {
      q: "Do you need Session Replay / Webvisor?",
      a: "Useful if you suspect landing UX. Filter ad visits and see where the path to a lead breaks.",
    },
  ],
  sections: [
    {
      title: "Linking the account to analytics",
      level: 2,
      paras: [
        "Before slices, confirm Direct sends data to Metrica (counter in campaign or account settings) and Google Ads is linked to the right Analytics property. Otherwise “keyword analysis” has no conversions.",
        "Lock goals: lead, call, purchase. Without a goal the checklist becomes traffic browsing.",
      ],
      lists: [
        {
          intro: "Minimum before the review:",
          items: [
            "counter or property on the site",
            "Direct ↔ Metrica or Ads ↔ Analytics link",
            "goals or ecommerce",
            "UTM or auto-tagging if you use segments",
            "a period with enough stats",
          ],
        },
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Direct + Metrica: keywords and placements",
      level: 2,
      paras: [
        "By keyword, see which phrases drive goal actions and which only clicks. Boost winners — bids, ads, a separate group; send junk to negatives at campaign or group level.",
        "For YAN and smart formats, review placements: what brings conversions versus spend only. Ban weak domains after enough data — not after one random click.",
        "Don’t mix search and networks in one conclusion: network placements and search queries are different levers.",
      ],
      lists: [
        {
          intro: "What to lock for keywords and placements:",
          items: [
            "top by conversions and by spend with no conversions",
            "negative list for junk wording",
            "ban empty placements",
            "separate view: search vs YAN",
          ],
        },
      ],
      links: [
        {
          label: "Negatives in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
      ],
    },
    {
      title: "Audience: gender, age, time, devices, geo",
      level: 2,
      paras: [
        "Demographics and age show who actually converts — not who “clicks nicely.” Bid adjustments by gender or age make sense after a stable sample, not one day.",
        "Time of day and weekdays: boost hours and days with better economics, especially if leads are handled only in business hours. Generic “best hours from an article” lose to your report.",
        "Devices: low mobile conversion is more often fixed with bid and landing adaptivity, not a full cut. Geo: keep regions that pay back; cut or lower bids where spend has no result.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Examples like “women convert better, men order more expensively” are illustrations. Transfer the adjustment logic — not someone else’s numbers.",
        },
      ],
    },
    {
      title: "Landing pages, segments, and attribution",
      level: 2,
      paras: [
        "The landing-page report checks that the ad goes to a relevant URL, not “homepage for everyone.” Fix weak landings or change the keyword → ad → URL link.",
        "Segments — new vs returning, bounce, depth — help adjust bids and build retargeting conditions. Lookalikes and Metrica audiences are the next step after clear basic slices.",
        "Attribution models (last click, first meaningful, and others) change who gets credit. Check several models if the purchase path is long — or you’ll undervalue the top of the funnel.",
      ],
      lists: [
        {
          intro: "Optional extras:",
          items: [
            "session replay on Direct visits — landing UX",
            "ecommerce — products, cart, promo codes",
            "call tracking — if leads are phone calls",
          ],
        },
      ],
      links: [
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Google Ads + Analytics: the same order",
      level: 2,
      paras: [
        "Link Ads and Analytics accounts, check goals and conversions. Then the logic mirrors Direct: keywords and search terms → exclusions; UTM/campaign segments; demographics; time; devices; geo; landing pages.",
        "In GA4 report names differ from Universal Analytics in old guides. Look for equivalents: campaign traffic, conversion events, demographics, tech, geo, entry pages.",
        "Ecommerce and attribution in the Google stack solve the same jobs: understand channel contribution and assortment — not “paint a pretty CTR.”",
      ],
      notes: [
        {
          kind: "tip",
          text: "Don’t copy 2019–2020 UA click-paths one-to-one into GA4. Check the current interface and Google Help.",
        },
      ],
    },
    {
      title: "How to close the review",
      level: 2,
      paras: [
        "The checklist outcome is an action list: what to boost, what to negative, what to fix on the site, which budget to shift. Without a change list, analysis stays “we looked at reports.”",
        "Change one or two levers per iteration and let stats accumulate. Rebuilding the whole account at once hides what worked.",
      ],
      lists: [
        {
          intro: "Output template:",
          items: [
            "problem (few leads / high CPA)",
            "slice where the cause shows",
            "action (negative / bid / landing / geo)",
            "review date",
            "expected KPI",
          ],
        },
      ],
    },
  ],
  closing: [
    "Link the account to analytics, walk keywords → placements → audience → landings, and write a week of fixes — faster than twisting bids by eye on overall CTR.",
  ],
  related: [
    "audit-reklamnoy-kampanii",
    "metriki-reklamy",
    "stavki-direkt",
    "minus-slova-direkt",
    "byudzhet-yandeks-direkt",
    "utm-metki",
  ],
};
