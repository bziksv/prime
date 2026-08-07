import type { BlogPost } from "../../../data/blog";

/** EN overlay for istochniki-trafika — same structure as RU JSON. */
export const istochnikiTrafikaEn: BlogPost = {
  slug: "istochniki-trafika",
  title: "Main website traffic sources: what to test",
  date: "2019-12-26",
  category: "Internet marketing",
  cover: "/images/blog/istochniki-trafika/cover-en.webp",
  excerpt:
    "A channel overview: organic, paid search, directories and aggregators, classifieds, social, email, display and ad networks — pros, cons, and a sane test order.",
  lead: [
    "There’s no “magic” traffic source: channels differ in speed, cost, and control. Beginners often grab a fresh lifehack without a landing or lead tracking — then conclude “the channel doesn’t work”.",
    "Below — main source families, strengths and weaknesses. Choice depends on niche, average check, and sales cycle; there’s no universal “best channel” ranking.",
  ],
  faq: [
    {
      q: "Which channel to start with?",
      a: "Wherever you can validate demand fastest on your budget: often paid search or niche classifieds/aggregators. Prep organic in parallel — it ramps longer.",
    },
    {
      q: "Is organic free?",
      a: "No pay-per-click — yes, but you pay with work and time. Site prep — about a month; core TOP growth is planned for 2–6 months, not “tomorrow after publish”.",
    },
    {
      q: "Does paid search always burn budget?",
      a: "With broken semantics, landing, and analytics — yes. With a normal chain it gives a fast hypothesis test and controllable volume.",
    },
    {
      q: "Are social networks free traffic?",
      a: "Organic posts rarely feed commerce alone. A community needs content; ads need budget. Don’t confuse “create a group” with “get leads”.",
    },
    {
      q: "Why email if you have ads?",
      a: "Your own list is cheaper for repeat touches: content, triggers, abandoned cart. Building the list is a long process; launching mail to a ready list is fast.",
    },
    {
      q: "How do you know a channel is yours?",
      a: "Not by “everyone does it”, but by CPA/ROMI and lead quality after an honest test with a goal and UTMs.",
    },
  ],
  sections: [
    {
      title: "Organic search",
      level: 2,
      paras: [
        "Search on a semantic core: pages answer queries, the site is technically healthy, content is maintained. It’s a long game: slow ramp, then inertia if quality doesn’t slip.",
        "Don’t expect instant TOP after edits. First prep (tech, copy, structure — about a month), then ranking growth planned for 2–6 months. Without new materials and fixes, positions weaken over time.",
      ],
      lists: [
        {
          intro: "Pros / cons:",
          items: [
            "+ no pay-per-click; effect can last years;",
            "− slow start; harder to “turn the volume tap”;",
            "− needs ongoing work and SERP competition.",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Branded traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
      ],
    },
    {
      title: "Contextual / paid search ads",
      level: 2,
      paras: [
        "Ads in search and networks by queries and audiences. You need a core, copy, landings, analytics goals. Click price is an auction: competitors and ad quality move the bid.",
        "Strength — speed of demand checks. Weakness — without negatives, geo, and CR control, budget drains for nothing.",
      ],
      lists: [
        {
          intro: "Pros / cons:",
          items: [
            "+ fast launch and money feedback;",
            "+ controllable volume with a working offer;",
            "− ongoing spend; setup mistakes are expensive.",
          ],
        },
      ],
      links: [
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
      ],
    },
    {
      title: "Directories, listings, and aggregators",
      level: 2,
      paras: [
        "Business directories, industry catalogs, ticket/hotel/service aggregators. For B2B often useful as a contact base and presence surface; for B2C — medicine, travel, “find nearby” services.",
        "Aggregators deliver leads for a commission or package — “cheap” traffic is relative: you pay with margin share and compete on the card. Basic listing is sometimes free; promotion is paid.",
      ],
      lists: [
        {
          intro: "Pros / cons:",
          items: [
            "+ demand is already on the platform;",
            "+ in some niches the main channel;",
            "− competition and dependence on aggregator rules;",
            "− weak funnel control outside your card.",
          ],
        },
      ],
    },
    {
      title: "Classified boards",
      level: 2,
      paras: [
        "Classifieds — demand for goods and services “here and now”. In niches with a high check and expensive paid search they sometimes deliver a cheaper lead with a solid listing and manager reply.",
        "A free basic format hits competition fast; in-platform promotion is a separate budget. Results are less predictable than a search-ads account.",
      ],
    },
    {
      title: "Social: community and ads",
      level: 2,
      paras: [
        "Two different contours. Community — long content and trust; creating a group alone isn’t traffic. Social ads — fast reach by interests and lookalike logic, but not for every B2B purchase with a narrow decision-maker.",
        "Count lead cost and dialogue quality, not only followers. Organic without regular posts “goes to sleep” even with a loyal base.",
      ],
      lists: [
        {
          intro: "Pros / cons:",
          items: [
            "+ community: low cash entry barrier;",
            "+ ads: fast creative and offer tests;",
            "− content and moderation take time;",
            "− not every product is found via “interests”.",
          ],
        },
      ],
      links: [
        {
          label: "Free advertising",
          href: "/en/blog/besplatnaya-reklama/",
        },
      ],
    },
    {
      title: "Email lists and newsletters",
      level: 2,
      paras: [
        "Consent-based email: content (news, usefulness) and triggers (abandoned cart, post-purchase, reactivation). It’s a repeat-touch channel, not a “magic source of new people off the street”.",
        "Lists take months to build (lead magnet, forms, quiz); launching a series to a ready list takes days. Unsubscribes are normal: inflow should beat outflow.",
      ],
      lists: [
        {
          intro: "Pros / cons:",
          items: [
            "+ cheap repeat touches;",
            "+ flexible scenarios by funnel stage;",
            "− slow list building;",
            "− needs discipline and mailing rules compliance.",
          ],
        },
      ],
    },
    {
      title: "Display and ad networks",
      level: 2,
      paras: [
        "Banners and articles on third-party sites, teaser and display networks, network remarketing. Direct placements are harder to measure; networks give an account and stats, but less control over the specific publisher site.",
        "Network retarget chases people who already visited — it strengthens the funnel, it doesn’t replace first contact. Compare to search by CPA, not “pretty reach”.",
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
        {
          label: "Ad banner",
          href: "/en/blog/reklamnyy-banner/",
        },
      ],
    },
    {
      title: "How to choose and test",
      level: 2,
      paras: [
        "Landing, offer, and lead tracking first — then channel budget. Test sequentially or with narrow parallel hypotheses; lock UTMs and test length in advance.",
        "One channel rarely covers everything: organic and the list build assets; paid channels give speed. The outcome is a mix under margin — not “every channel at once on pennies”.",
      ],
      notes: [
        {
          title: "Important",
          text: "A drop in one channel is a reason to diagnose the cause — not to shut everything off at once. See the traffic-drop article.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Traffic drop",
          href: "/en/blog/snizhenie-trafika/",
        },
      ],
    },
  ],
  closing: [
    "Traffic sources differ in speed and cost of error. Prep measurement, test 1–2 niche-fit channels, and scale what delivers quality leads — without chasing “free forever”.",
  ],
  related: [
    "brendovyy-trafik",
    "snizhenie-trafika",
    "kontekst-i-seo",
    "besplatnaya-reklama",
    "retargeting",
    "utm-metki",
  ],
};
