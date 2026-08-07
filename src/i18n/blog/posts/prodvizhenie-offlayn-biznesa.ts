import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodvizhenie-offlayn-biznesa — same structure as RU JSON. */
export const prodvizhenieOfflaynBiznesaEn: BlogPost = {
  slug: "prodvizhenie-offlayn-biznesa",
  title: "Promoting an offline business: maps, reviews, hyperlocal, and visit measurement",
  date: "2019-08-29",
  category: "Digital marketing",
  cover: "/images/blog/prodvizhenie-offlayn-biznesa/cover-en.webp",
  excerpt:
    "How to bring people to a location: map listings, reviews, hyperlocal ads and SMS, outdoor/indoor, and the online→offline link — without betting on outdated MAC radar.",
  lead: [
    "A café, clinic, salon, and neighborhood shop don’t live on the storefront alone. Maps, reviews, “nearby” ads, and clear visit/call measurement decide whether people find you on a phone and reach the door.",
    "A working channel set for an offline point starts with basics you control. Platform UIs and prices change; privacy and ID randomization weakened old MAC-collection schemes — don’t build strategy only on them.",
  ],
  faq: [
    {
      q: "Where should I start without a big budget?",
      a: "Listings on Google/Yandex/local directories with full NAP, photos, and hours + replies to reviews. Then geo ads around the point.",
    },
    {
      q: "Does an offline business need a website?",
      a: "Preferably: services, prices, directions, form/phone. Maps bring people; the site removes doubts — both with the same address and phone.",
    },
    {
      q: "Does Wi‑Fi/MAC radar still work?",
      a: "Weaker than in the late 2010s: OSes randomize MAC, platform rules are stricter. Don’t promise a “full list of passers-by” as a growth base.",
    },
    {
      q: "How do I know ads brought someone in?",
      a: "Promo codes, call tracking, UTM to a landing, “how did you hear” surveys, and where available — store visit / offline conversions in ad accounts. Cross-check several signals.",
    },
    {
      q: "Can I use fake reviews?",
      a: "No. Platforms ban, clients spot templates. Better ask for a real review after a good visit and calmly handle negativity.",
    },
    {
      q: "Are “by district” SMS legal?",
      a: "Only via carriers/vendors and under mailing rules and consent. Spam without a basis risks blocks and complaints.",
    },
  ],
  sections: [
    {
      title: "Maps and directories",
      level: 2,
      paras: [
        "Google Maps, Yandex Maps / Business, and local directories are the first screen for “near me”. Fill name, exact address, phone, site, hours, category; add facade and interior photos.",
        "Paid options (showcase, promos, highlighting) make sense after a solid listing and reviews. Watch clicks, calls from the listing, and consistent NAP on the site and in ads.",
      ],
      lists: [
        {
          intro: "Listing minimum:",
          items: [
            "exact address and map pin",
            "current phone",
            "hours without “surprises”",
            "photos and a short service description",
            "replies to reviews.",
          ],
        },
      ],
    },
    {
      title: "Reviews and reputation",
      level: 2,
      paras: [
        "Reviews affect location choice no less than ads. Run profiles on maps and industry platforms, reply to negativity on the merits, ask happy clients for a review without “five stars required” scripts.",
        "Mention monitoring (alerts, reputation tools) helps catch issues before they pile up in search results.",
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "Hyperlocal and nearby SMS",
      level: 2,
      paras: [
        "A geopolygon/radius in Google Ads, Yandex Direct, and peers delivers the offer to people who live, work, or visit near the point. In creative — “why come here” and a clear reason (promo, slot, new item).",
        "Hyperlocal SMS via carriers is a narrow channel: short copy, offer, link/phone, send time without night spam. Check rules and consent; SMS details are in a separate piece.",
      ],
      links: [
        {
          label: "Hyperlocal targeting",
          href: "/en/blog/giperlokalnyy-targeting/",
        },
        {
          label: "SMS campaigns",
          href: "/en/blog/sms-rassylka/",
        },
      ],
    },
    {
      title: "Outdoor, indoor, and measurement",
      level: 2,
      paras: [
        "Digital out-of-home and indoor screens in malls/crowded spots work for reach and reminder. Rates and reach depend on city and network — plan a test with call tracking or a promo code, not a “magic” price from old reviews.",
        "Online→offline link: site visit, then into the point — measured with promo codes, call tracking, and where available store visit / offline conversions. Several truth sources beat one report.",
      ],
      lists: [
        {
          intro: "What to measure:",
          items: [
            "calls from maps and ads",
            "promo codes/coupons by channel",
            "UTM to a “how to get here” landing",
            "checkout survey “how did you hear”.",
          ],
        },
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "MAC and Wi‑Fi: 2020s expectations",
      level: 2,
      paras: [
        "Earlier people discussed collecting MAC via hotspot or “radar” for retargeting. Today MAC randomization and platform rules narrowed the channel a lot. Your own Wi‑Fi with clear consent is fine as a service; “collect every passer-by at a competitor” — don’t bake into the plan.",
        "Stronger and calmer: listings, reviews, account geo, a clear offer, and visit measurement.",
      ],
      notes: [
        {
          title: "Privacy",
          text: "Any audience collection and upload — only on lawful grounds and under ad-account rules. Don’t promise clients “full MAC control” as the main growth channel.",
          kind: "tip",
        },
      ],
    },
  ],
  closing: [
    "An offline point stays visible online through maps, reviews, local ads, and honest measurement. Start with NAP and reputation, add hyperlocal; don’t make outdated “MAC radar” schemes the strategy base.",
  ],
  related: [
    "giperlokalnyy-targeting",
    "sms-rassylka",
    "otzyvy-dlya-prodazh",
    "tochki-kontakta",
    "metriki-reklamy",
    "skvoznaya-analitika",
  ],
};
