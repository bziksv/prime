import type { BlogPost } from "../../../data/blog";

/** EN overlay for giperlokalnyy-targeting — same structure as RU JSON. */
export const giperlokalnyyTargetingEn: BlogPost = {
  slug: "giperlokalnyy-targeting",
  title: "Hyperlocal targeting for business: who needs it and how to pick a tool",
  date: "2019-09-16",
  category: "Internet marketing",
  cover: "/images/blog/giperlokalnyy-targeting/cover-en.webp",
  excerpt:
    "Hyperlocal ads near a location: who it fits, geopolygons in ad accounts, Wi‑Fi/MAC limits and privacy — without “spy” schemes at competitors.",
  lead: [
    "Hyperlocal targeting shows ads to people who spend time near a specific point: home, office, mall, a route next to you. For a café, clinic, salon, and local service that’s often more precise than broad “interests 25–45”.",
    "Below — who needs the format, why, what audience sources exist, and how to choose between a geopolygon in the account and offline signal collection. Ad-account UIs change; privacy and ID randomization cut old “MAC radar” scenarios — build that into expectations.",
  ],
  faq: [
    {
      q: "How is hyperlocal different from usual geotargeting?",
      a: "Geo in an account is often city/district. Hyperlocal is a radius or outline around an address, sometimes with “live / work / visit” segments.",
    },
    {
      q: "Who benefits most?",
      a: "Offline spots with foot/office traffic nearby: food service, services, neighborhood retail, B2B near business centers.",
    },
    {
      q: "Does Wi‑Fi MAC radar still work?",
      a: "Weaker than in the late 2010s: OSes randomize MAC, platform rules and data laws tightened. Don’t build strategy only on “we collected passers-by addresses”.",
    },
    {
      q: "Does a polygon in Google/Yandex replace everything?",
      a: "Handy to start without hardware. Reach depends on platform data and zone size: on a tiny outline impressions may be too few.",
    },
    {
      q: "Can you “catch” a competitor’s audience with a radar?",
      a: "Legally and ethically risky, plus the tech is often unreliable. Better: offer and geo around your own point and an honest competitive message.",
    },
    {
      q: "Do you need your own CRM?",
      a: "For remarketing “already visited you” — yes. To attract new people near the point — account geo tools + creative with a clear reason to walk in.",
    },
  ],
  sections: [
    {
      title: "Who and why",
      level: 2,
      paras: [
        "If clients are physically nearby but walk into familiar places — hyperlocal puts the offer on the phone of people who live, work, or regularly visit near your point: neighbors, offices, mall visitors, people on a typical route.",
        "Jobs: promos for “nearby now”, offers for the block’s residents, reminders for regulars, testing an offer in a tight zone without dumping budget on the whole city.",
      ],
      lists: [
        {
          intro: "It fits well when:",
          items: [
            "you have an offline point or service area;",
            "the visit decision is local;",
            "you can measure visits/calls/promo codes;",
            "creative answers “why come here specifically”.",
          ],
        },
      ],
    },
    {
      title: "Where the audience comes from",
      level: 2,
      paras: [
        "In practice you mix: geozones and polygons in ad accounts; your own lists (CRM, loyalty, Wi‑Fi hotspot with consent); partner/DMP data — with contract and provenance checks. Social and maps also run local scenarios — verify current account options.",
        "“Digital footprints” of interests help, but for “next to the door” a geo signal often beats an abstract persona.",
      ],
      notes: [
        {
          title: "Privacy",
          text: "Collect and upload audiences only on lawful grounds and under platform rules. Don’t promise clients a “full MAC list of passers-by” — that’s an outdated and contested model.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Geopolygon in the ad account",
      level: 2,
      paras: [
        "In Google Ads, Yandex Direct, and peers you set a point/outline and conditions (radius, “visit regularly”, etc. — option names change). Plus: no hardware purchase, fast test of a district or business center. Minus: platform data doesn’t cover everyone; at “one building” granularity reach and frequency can be weak.",
        "For a wide block or several streets a polygon is often enough to start. For a “here and now” event one historical geo pin may not suffice — check data freshness and audience size in the account.",
      ],
      links: [
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
        {
          label: "Ad account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Offline signal collection: 2020s expectations",
      level: 2,
      paras: [
        "Earlier people discussed Wi‑Fi scanners logging MACs near a point, with filters by time and dwell. Today MAC randomization, app-store policies, and data-processing requirements have narrowed that channel a lot. If you use your own network hotspot — only with clear consent and a policy.",
        "Don’t plan an “invisible radar at a competitor” as a working scheme: ethics, access, and data quality work against you. Stronger — your zone, your offer, honest comparison.",
      ],
    },
    {
      title: "How to choose and launch",
      level: 2,
      paras: [
        "Start: polygon/radius in the account + a landing or “nearby” offer + promo code/call tracking. If the zone is tiny and impressions are few — widen the outline or strengthen creative and bid, don’t hunt gray ID collection.",
        "Your CRM clients are a separate remarketing loop. Compare visit/call CPA with a sign and flyers in the same block — fairer than “reach for reach’s sake”.",
      ],
      lists: [
        {
          intro: "Launch mini-checklist:",
          items: [
            "point and radius on the map;",
            "segment (residents / workers / visitors);",
            "offer and promo dates;",
            "UTM and measurement method;",
            "account rules and personal-data compliance.",
          ],
        },
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
  ],
  closing: [
    "Hyperlocal targeting works when the offer is tied to real geography and measured. Start with account geo tools and your own list; don’t bake outdated “collect every MAC at a competitor’s door” schemes into the plan.",
  ],
  related: [
    "retargeting",
    "regionalnoe-seo",
    "reklamnyy-kabinet",
    "metriki-reklamy",
    "tselevaya-auditoriya",
    "istochniki-trafika",
  ],
};
