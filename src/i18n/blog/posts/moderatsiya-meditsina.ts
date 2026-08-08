import type { BlogPost } from "../../../data/blog";

/** EN overlay for moderatsiya-meditsina — same structure as RU JSON. */
export const moderatsiyaMeditsinaEn: BlogPost = {
  slug: "moderatsiya-meditsina",
  title: "Healthcare ad review in Yandex Direct and Google Ads",
  date: "2019-09-13",
  category: "Paid search",
  cover: "/images/blog/moderatsiya-meditsina/cover-en.webp",
  excerpt:
    "How to pass Yandex Direct and Google Ads review in healthcare: what’s usually banned and allowed, network vs Search nuances, copy without red flags, and what to do when rejected — based on current platform policies.",
  lead: [
    "Healthcare and pharma in paid search are reviewed harder than ordinary niches: ads and landings are checked against Yandex and Google policies and the law of the country where you show. A wording or site mistake means rejection or limited delivery.",
    "Below: how bans and permissions work, typical Direct and Ads nuances, practical copy tips, and what to do after rejection. Concrete lists change — before launch, check official rules and counsel, not 2019 memory.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Facebook* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Why is healthcare moderated more strictly?",
      a: "Health risks and legal requirements. Platforms limit prescription drugs, online diagnosis, certain procedures, and “sensitive” topics.",
    },
    {
      q: "Can I advertise a clinic in Direct?",
      a: "Usually yes — with correct wording, licenses on the site, and policy compliance. Banned services and “we cure 100%” promises get cut.",
    },
    {
      q: "How does Search differ from the networks?",
      a: "In networks and remarketing, intimate/sensitive topics and creatives are often stricter. What passes on Search may fail in YAN/Display.",
    },
    {
      q: "Does soft wording without banned words help?",
      a: "Risky: review looks at the ad and the landing. Gray phrasing may pass once and fail on re-check.",
    },
    {
      q: "What should I do when rejected?",
      a: "Read the reason, fix copy/site, attach documents via platform support. “A competitor runs it” isn’t a guarantee.",
    },
    {
      q: "Do I need documents on the site?",
      a: "Yes: licenses, legal details, age/prescription disclaimers — whatever law and ad policy require.",
    },
    {
      q: "Is this the same as Facebook Ads review?",
      a: "No. Meta is a separate policy layer. Here — Yandex and Google Ads.",
    },
  ],
  sections: [
    {
      title: "Why healthcare needs its own playbook",
      level: 2,
      paras: [
        "In ordinary e-commerce, review more often catches clickbait and banned goods. In healthcare you also get prescriptions, remote medical services, outcome promises, and “sensitive” diagnoses.",
        "Plan: understand the legal and policy frame → check the site → write ads in a neutral tone → pick the surface (Search vs networks) → on reject — fix and escalate with documents.",
      ],
      links: [
        {
          label: "Facebook Ads moderation",
          href: "/en/blog/moderatsiya-facebook-ads/",
        },
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "The ban and permission frame",
      level: 2,
      paras: [
        "Rely on Yandex and Google advertising policies plus local law on drug and medical-service ads. “Allowed/banned” lists in old guides go stale: check current Help and the legal status of the offer.",
        "Typically at risk: online sale of prescription drugs, remote diagnosis/treatment without authorization, psychoactive substances, abortion as an offer, aggressive cure promises.",
        "More often allowed (when rules are met): clinics and hospitals, veterinary care, pharmacies as organizations, OTC products and medical devices — if copy and site don’t break law or platform policy.",
      ],
      lists: [
        {
          intro: "Before submitting an ad:",
          items: [
            "the offer is lawful in the impression region",
            "site has licenses, contacts, disclaimers",
            "copy has no outcome guarantees or “scary” visuals",
            "landing matches the ad",
          ],
        },
      ],
    },
    {
      title: "Yandex Direct nuances",
      level: 2,
      paras: [
        "Direct reviews healthcare and pharma especially hard, particularly in smart formats and networks. Intimate/sensitive topics and certain diagnoses may be limited in YAN and remarketing even when Search is fine.",
        "“Adults only” and sensitive categories often work better on Search with topical targeting, where the user typed the query. Don’t move the same creative to networks without a check.",
        "Indirect wording without naming a banned service doesn’t make the offer legal: review and re-checks look at meaning and the landing.",
      ],
      links: [
        {
          label: "Direct adaptive ads",
          href: "/en/blog/adaptivnyy-shablon-direkt/",
        },
      ],
    },
    {
      title: "Google Ads nuances",
      level: 2,
      paras: [
        "Ads apply Healthcare and Restricted products/services policies. Phrases like “we’ll cure,” “guarantee,” “no side effects,” and shock creatives are common rejection reasons.",
        "Neutral clinic and service names without clickbait pass more steadily than “cheap” treatment promises. Dynamic headlines and DSA don’t skip policy: the system pulls keywords from the site — clean landings too.",
        "Prepare documents and certification for categories that require them early — or the account hits delivery limits.",
      ],
      links: [
        {
          label: "Google Ads campaign types",
          href: "/en/blog/tipy-kampaniy-google-ads/",
        },
      ],
    },
    {
      title: "Copy, site, and support",
      level: 2,
      paras: [
        "Write positive/neutral: service, clinic, booking — without describing operations, injuries, or shock-style before/after. Photos — no blood or heavy symptomatology.",
        "On rejection: fix the reason from the review email, attach licenses via support, don’t copy competitors’ disputed ads as proof that “it’s allowed.”",
        "Manual re-review takes time: until you get an answer, don’t run the same text across dozens of ads — you’ll multiply the rejection.",
      ],
      lists: [
        {
          intro: "Checklist before resubmitting:",
          items: [
            "rejection reason broken down point by point",
            "site and ad aligned",
            "documents attached",
            "separate Search test before scaling to networks",
          ],
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Healthcare rules in Direct and Google Ads update. This piece is a method frame — not legal advice and not a current ban list. Before budget, check platform Help and an advertising-law specialist.",
  },
  closing: [
    "First align the site and offer wording with law and policies, then build the campaign: healthcare review is more predictable that way than fixing after a string of rejections.",
  ],
  related: [
    "moderatsiya-facebook-ads",
    "sayt-pered-reklamoy",
    "tipy-kampaniy-google-ads",
    "adaptivnyy-shablon-direkt",
    "zabluzhdeniya-konteksta",
    "analiz-reklamnoy-kampanii",
  ],
};
