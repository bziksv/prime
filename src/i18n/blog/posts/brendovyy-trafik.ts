import type { BlogPost } from "../../../data/blog";

/** EN overlay for brendovyy-trafik — same structure as RU JSON. */
export const brendovyyTrafikEn: BlogPost = {
  slug: "brendovyy-trafik",
  title: "Branded traffic: what it is and how to grow it",
  date: "2019-09-19",
  category: "SEO",
  cover: "/images/blog/brendovyy-trafik/cover-en.webp",
  excerpt:
    "What counts as branded traffic, why it matters for business and SEO, how to grow name awareness, and how to measure the share in Metrika and Search Console.",
  lead: [
    "Branded traffic is visits from queries with the company name, product, or a stable brand spelling (including typos and transliteration). These are people already looking for you — not “service + city” at random.",
    "Below: why it helps, how to grow it with content, maps, ads, and PR, and how to measure it in analytics. Brand doesn’t replace semantics and site tech; it’s a separate demand and resilience layer.",
  ],
  faq: [
    {
      q: "Is branded traffic the same as direct visits?",
      a: "Not only. Direct is typing a URL or using a bookmark. Brand is more often seen in search: queries with the brand name. Some direct visits are branded in meaning, but reports treat them as different cuts.",
    },
    {
      q: "Does it guarantee page one on commercial queries?",
      a: "No. A strong brand helps CTR and resilience, but non-brand ranks depend on pages, competition, and work. Prep — about a month; core page-one share planned 2–6 months.",
    },
    {
      q: "What brand traffic share is normal?",
      a: "Depends on niche and stage. A known local player’s share is higher; a new site’s is lower. Watch the trend and brand conversion — not an “average % from an article.”",
    },
    {
      q: "Do you need paid search on the brand name?",
      a: "Often yes — as protection from competitors bidding on your name. Plus control of the snippet and landing.",
    },
    {
      q: "How do you tell brand from a transactional query?",
      a: "There’s a name/trademark/stable brand product. “Buy windows Voronezh” isn’t brand; “Acme Windows Voronezh” is branded (or mixed).",
    },
    {
      q: "Is SimilarWeb required?",
      a: "No. For your own data, Metrika, Analytics, and Search Console / Webmaster are enough. SimilarWeb is a rough read of other sites.",
    },
    {
      q: "Does the founder’s personal brand count?",
      a: "Yes, if people search the person’s name for the company/services. That’s an adjacent track — see the personal brand article.",
    },
    {
      q: "Can you fake branded search queries?",
      a: "No point and high risk. Brand growth is awareness and repeat touches — not bots on a keyword.",
    },
  ],
  sections: [
    {
      title: "What branded traffic is",
      level: 2,
      paras: [
        "Brand in the user’s head is a name, logo, tone, and promised outcome. In search it’s queries where your name or unique product clearly appears.",
        "Such visits are usually warmer: a higher share of goal actions, lower random bounce. For SEO, brand is a demand and awareness signal — not a button to lift all ranks.",
      ],
      lists: [
        {
          intro: "Examples of branded phrasing:",
          items: [
            "company name",
            "name + “website” / “account” / “reviews”",
            "transliteration and common typos",
            "a product or line name searched as a brand",
          ],
        },
      ],
      links: [
        {
          label: "Personal brand",
          href: "/en/blog/lichnyy-brend/",
        },
      ],
    },
    {
      title: "Why grow branded demand",
      level: 2,
      paras: [
        "In competitive niches non-brand SERP jumps with updates and new players. Queries with your name are steadier: the person already chose “who”; what’s left is “where to click.”",
        "Higher brand SERP CTR, better conversion, more direct and return visits, natural mentions and links. Algorithms change — brand demand stays a marketing asset, not only SEO.",
      ],
      lists: [
        {
          intro: "Practical benefits:",
          items: [
            "channel resilience when non-brand dips",
            "protection from competitors intercepting demand with ads",
            "a shorter path to a deal",
            "a clear KPI for PR and offline activity",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t confuse branded visit growth with faked engagement. Search engines fight manipulation separately; brand is built by touches, not bots.",
        },
      ],
    },
    {
      title: "How to raise awareness and brand traffic",
      level: 2,
      paras: [
        "The base is a strong site: services/catalog, contacts, shipping and payment, clear copy, updates. Content that answers niche questions brings non-brand demand and sticks the name.",
        "Next — maps and directories (consistent NAP), careful presence on industry platforms without link spam, social and expert materials, offline (signage, print, events) with the same brand spelling.",
      ],
      lists: [
        {
          intro: "Working lever set:",
          items: [
            "site content and structure",
            "map profiles",
            "paid search: attack (your brand terms) and defense from others’ ads on the brand",
            "social and email with regular touchpoints",
            "PR, guest pieces, partnerships — name mention without toxic spam",
            "one naming across channels (how the brand is spelled)",
          ],
        },
      ],
      links: [
        {
          label: "Google Maps profile",
          href: "/en/blog/google-biznes/",
        },
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Ads, social, and “guerrilla” mentions",
      level: 2,
      paras: [
        "Paid search on the brand holds the SERP above competitors buying your name. Banners and retargeting remind people who already visited the site.",
        "On social, regularity, usefulness, and a company face work — not cross-posting empty announcements. Guerrilla mentions without links only make sense as honest expert dialogue within platform rules; native directory spam and spam comments hurt.",
      ],
      lists: [
        {
          intro: "What to avoid:",
          items: [
            "faking queries and behavioral signals",
            "black PR and fake reviews",
            "changing brand spelling every six months",
            "promises of “brand = page one in a month”",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct bids",
          href: "/en/blog/stavki-direkt/",
        },
        {
          label: "Fake engagement risks",
          href: "/en/blog/nakrutka-pf/",
        },
      ],
    },
    {
      title: "How to measure branded traffic",
      level: 2,
      paras: [
        "In Yandex Metrika, look at search-phrase / source reports: a segment or filter on the name, transliteration, and common variants. Cross-check goals — brand conversion is usually higher.",
        "In Google Search Console (Performance → query filter) set a list of brand variants. In Google Analytics — Organic Search + query filter if query data is available; otherwise lean on GSC + Metrika.",
      ],
      lists: [
        {
          intro: "Mini metric set:",
          items: [
            "visits and brand share of organic",
            "CTR and ranks on brand queries in GSC/Webmaster",
            "conversion and revenue from the brand segment",
            "month-to-month dynamics vs non-brand",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Metrika",
          href: "/en/blog/metrika-tseli/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Tie-in with SEO and timeline expectations",
      level: 2,
      paras: [
        "Brand and classic SEO reinforce each other: non-brand demand introduces you; brand closes the deal and brings people back. Don’t expect one video or banner to turn on brand traffic forever — you need a touch system.",
        "Awareness builds over months. In parallel the site is prepared for promotion (tech, semantics, copy — about a month as a guide), and non-brand core ranks build planned over 2–6 months after work starts.",
      ],
      lists: [
        {
          intro: "Monthly control checklist:",
          items: [
            "brand share of organic",
            "whether others run ads on the brand",
            "consistent NAP on maps",
            "no needless “brand vs commercial” cannibalization on one landing",
          ],
        },
      ],
      links: [
        {
          label: "Traffic drop",
          href: "/en/blog/snizhenie-trafika/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "lichnyy-brend",
    "snizhenie-trafika",
    "google-biznes",
    "metrika-tseli",
    "google-search-console",
    "samostoyatelnoe-seo",
  ],
};
