import type { BlogPost } from "../../../data/blog";

/** EN overlay for sklikivanie — same structure as RU JSON. */
export const sklikivanieEn: BlogPost = {
  slug: "sklikivanie",
  title: "Ad click fraud: signs, protection in Yandex Direct and Google Ads",
  date: "2021-09-17",
  category: "Contextual advertising",
  cover: "/images/blog/sklikivanie/cover-en.webp",
  excerpt:
    "What click fraud is, how to tell it from a weak campaign, which defenses exist in Yandex Direct and Google Ads, and what to do if you suspect fraud.",
  lead: [
    "Click fraud is artificial clicks on ads that burn budget without target actions. It’s done by hand, scripts, or botnets; sometimes against a competitor, sometimes to inflate a publisher.",
    "Below — click-fraud signs, first steps, built-in Direct and Google Ads protection, and how not to confuse fraud with a weak offer. Loss figures from old reviews show problem scale — not your forecast.",
  ],
  faq: [
    {
      q: "Do you pay for invalid clicks?",
      a: "Platforms filter some clicks automatically and don’t charge for them. Disputed cases are reviewed on request; if confirmed, they adjust. There’s no 100% “before click” protection.",
    },
    {
      q: "Is low conversion always click fraud?",
      a: "No. More often the offer, landing, season, broad keywords, or irrelevant traffic are to blame. Look at 1–3 weeks of data and the funnel — not one day.",
    },
    {
      q: "What’s the first move on a click spike?",
      a: "Pause or hard-limit the campaign, check geo/devices/placements against settings, save report screenshots, and contact support when anomalies are clear.",
    },
    {
      q: "Does an IP blacklist help?",
      a: "As a supplement — yes, against repeats from known addresses. Against a distributed botnet IP blocks are limited. Platform filters, placement exclusions, and campaign quality matter more.",
    },
    {
      q: "Does session replay prove click fraud?",
      a: "It shows on-site behavior after the click. A short visit also happens with a live accidental click. For fraud look at the combo: cabinet anomaly + odd geo/IP + bounce pattern.",
    },
  ],
  sections: [
    {
      title: "What click fraud is",
      level: 2,
      paras: [
        "The advertiser pays per click. A fraudster or bot hits the ad repeatedly to burn budget and leave no leads. After the click the page is often closed at once.",
        "Motives: weaken a competitor, inflate publisher/partner revenue, “pay back” a former client. Automated attacks scale harder than manual ones.",
      ],
      lists: [
        {
          intro: "Types:",
          items: [
            "manual click fraud (slow, IP changes);",
            "scripts and emulators;",
            "botnets on infected devices — the most mass scenario.",
          ],
        },
      ],
    },
    {
      title: "Click-fraud signs",
      level: 2,
      paras: [
        "One metric isn’t enough. Look for a cluster of anomalies with no seasonality, news, or campaign-edit explanation.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "a sharp jump in clicks and CTR with no ad changes;",
            "many clicks with near-zero time on site / instant bounces;",
            "geo and devices outside targeting;",
            "repeats from the same IPs/networks;",
            "a spike on specific display-network placements.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Cross-check the ads cabinet with Analytics via UTM. A gap “clicks exist — almost no sessions” is a reason to dig deeper, but first verify tagging and reporting lag.",
        },
      ],
      links: [
        {
          label: "Suspicious Google traffic",
          href: "/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "First measures",
      level: 2,
      paras: [
        "Stop the budget bleed, then investigate. In parallel gather evidence for support.",
      ],
      lists: [
        {
          intro: "Reaction checklist:",
          items: [
            "pause or a hard daily cap;",
            "reports by placement, region, device, hour;",
            "exclude suspicious placements / IPs (within cabinet limits);",
            "contact Direct / Google Ads support with facts;",
            "after the review — restart with tighter keywords and bids.",
          ],
        },
      ],
    },
    {
      title: "Protection in Yandex Direct and Google Ads",
      level: 2,
      paras: [
        "Both systems run automatic invalid-click filters: repeats, bot-like patterns, anomalies. Some clicks are cut before charging; some are adjusted later — check invalid-click reports.",
        "Google Ads (formerly AdWords) combines prevention and complaint review. Direct also shows filtered stats and placement-limit tools. Exact blacklist limits and report names change — follow the cabinet help.",
      ],
      lists: [
        {
          intro: "What the platform does:",
          items: [
            "cuts some fraud automatically;",
            "doesn’t treat such clicks like “live” ones for keyword quality;",
            "may adjust charges on a confirmed complaint;",
            "punishes network-side violators (you don’t always see it).",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Waiting for support to “refund everything after three days of bounces.” First prove the anomaly; in parallel fix relevance — or honest but junk traffic keeps eating the budget.",
        },
      ],
    },
    {
      title: "When it isn’t fraud",
      level: 2,
      paras: [
        "Many clicks without orders happen with broad match, a weak ad, a slow or irrelevant landing, or a season of “interest without purchase.”",
        "A store conversion of 1–2% in the niche can be normal. Judge by the funnel over weeks, not one evening of “fast spend” after raising bids.",
      ],
      lists: [
        {
          intro: "Natural reasons for “empty after click”:",
          items: [
            "offer and price didn’t match ad expectations;",
            "the site is slow or awkward on mobile;",
            "season / news warmed interest without readiness to buy;",
            "wrong geo or missing negative keywords.",
          ],
        },
      ],
    },
    {
      title: "How to lower the risk again",
      level: 2,
      paras: [
        "Daily watch spend, CTR, bounces, and top placements. Keep semantics tight, landings honest, UTM and goals working. After an incident update the core and bid strategies — don’t just “turn it back on as before.”",
      ],
      lists: [
        {
          intro: "Prevention:",
          items: [
            "anomaly monitoring by hour and placement;",
            "regular exclusion of junk display placements;",
            "ad → page consistency;",
            "budget caps and alerts in the cabinet/analytics.",
          ],
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "Click fraud is real, but not every ROAS drop is an attack. Watch the signal combo, use Direct and Google Ads filters, cut budget fast on anomalies, and check campaign quality in parallel. Support tickets — with facts, not emotions.",
      ],
      lists: [],
    },
  ],
};
