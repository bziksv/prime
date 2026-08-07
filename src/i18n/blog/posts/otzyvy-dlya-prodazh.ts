import type { BlogPost } from "../../../data/blog";

/** EN overlay for otzyvy-dlya-prodazh — same structure as RU JSON. */
export const otzyvyDlyaProdazhEn: BlogPost = {
  slug: "otzyvy-dlya-prodazh",
  title: "How many reviews a company needs to sell with more confidence",
  date: "2019-09-26",
  category: "Digital marketing",
  cover: "/images/blog/otzyvy-dlya-prodazh/cover-en.webp",
  excerpt:
    "The trust threshold for reviews, how they tie into local search and maps, how to ask for reviews and handle negatives — without fake ratings or bought five-stars.",
  lead: [
    "Before choosing a clinic, cafe, or service, people read reviews on maps, directories, and the site. An empty profile at a fair price and convenient address often loses to a competitor with a track record of real reviews.",
    "Industry research gives trust thresholds, not a ranking formula. Replies, platform diversity, and legal collection matter more than buying volume; map and aggregator rules change.",
  ],
  faq: [
    {
      q: "Is there a magic review number?",
      a: "No universal one. Local-market studies often cite a threshold around ~40 reviews for noticeable trust, and dozens on average for the local pack. In niches with rare purchases, fewer can suffice; in restaurants and hospitality the “norm” is higher.",
    },
    {
      q: "Does quantity or rating matter more?",
      a: "Both. A strong rating with 3 reviews is weaker than 4.6 with a hundred. But “all 5.0” with zero criticism also looks suspicious.",
    },
    {
      q: "Can you buy reviews?",
      a: "No. It breaks platform rules, risks sanctions, and kills trust. Ask real clients and reply to negatives.",
    },
    {
      q: "Should you focus on site reviews or maps?",
      a: "Maps and aggregators influence local choice more. The site is for people who already arrived and check details. Run both tracks.",
    },
    {
      q: "Does each branch need its own profile?",
      a: "Yes — usually each physical location gets its own profile with NAP and reviews for that point only.",
    },
    {
      q: "Do reviews help regular site SEO?",
      a: "They don’t replace commercial rankings directly. Indirectly they help awareness, links from profiles and directories, trust, and conversion. Site prep and ranking buildup are separate horizons — prep is roughly a month; TOP is planned over 2–6 months after work starts.",
    },
    {
      q: "How should you reply to a negative review?",
      a: "Calmly, with facts, without a fight. Apology, clarification, an offline channel to resolve. That often softens the impression for later readers.",
    },
    {
      q: "Are incentives for a review legal?",
      a: "A discount or bonus “for an honest review” is sometimes allowed by platform policy — check the rules. You can’t pay only for a five-star or dictate the text.",
    },
  ],
  sections: [
    {
      title: "Why businesses need reviews",
      level: 2,
      paras: [
        "Reviews are social proof: someone already checked. For services (medicine, beauty, repair, finance) one strong negative hits harder than for a mass product with hundreds of SKUs.",
        "Yandex Maps and Google, 2GIS, niche review sites, and social networks create a path from found → read → called or visited. Without reviews you look like a ghost listing even if the product is strong.",
      ],
      lists: [
        {
          intro: "What reviews improve:",
          items: [
            "trust and readiness to leave a lead",
            "clicks in the local pack / on the map",
            "a service-quality signal for new clients",
            "a reason to improve processes (complaints = diagnostics)",
          ],
        },
      ],
      links: [
        {
          label: "Google Maps business profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "How many reviews are “enough”",
      level: 2,
      paras: [
        "Industry studies (including BrightLocal local-search reviews) have shown for years: users trust a business more after dozens of reviews than after two or three. An often-cited guide is about 40 reviews as a noticeable-trust threshold — not a law of nature, an averaged picture across samples.",
        "For entering and holding the maps local pack, the same reviews cite average dozens of reviews on visible profiles; the gap between “in the SERP” and “in the top three” can be small by count but critical by clicks. Figures shift by year and country — check fresh reports and competitors near you.",
      ],
      lists: [
        {
          intro: "Practical guide:",
          items: [
            "0–5 — almost no history, high risk that people bounce",
            "dozens — a trust threshold for many niches",
            "hundreds — normal for cafes and chains where people review often",
            "look at the median of nearby competitors, not a world record",
          ],
        },
      ],
      tables: [
        {
          caption: "Rough guides (not a ranking guarantee)",
          headers: ["Situation", "What to watch"],
          rows: [
            ["Services with rare purchase", "Reply quality + 20–50 honest reviews"],
            ["Restaurants & hospitality / neighborhood retail", "Steady inflow; watch the rating"],
            ["Several branches", "Reviews per location separately"],
            ["Site only, no maps", "On-site review block + external platforms"],
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Chasing “+100 five-stars in a week.” Platforms and users spot fake reviews; a rhythm of real clients and replies matters more.",
        },
      ],
    },
    {
      title: "Rating, local pack, and clicks",
      level: 2,
      paras: [
        "In local search, people often click the map block harder than the organic “tail.” The average-rating gap between places 1–3 and 8–10 may be tenths of a point, but clicks and calls go to the top of the pack.",
        "Research links rating growth to local-business revenue — effect size depends on the niche. For you what matters more: fix systemic causes of one-stars (service, timelines, communication), not argue in comments.",
      ],
      lists: [
        {
          intro: "What else maps weigh:",
          items: [
            "fresh NAP and opening hours",
            "categories and photos",
            "business replies",
            "signals from other directories (not the only source)",
          ],
        },
      ],
    },
    {
      title: "How to build a review workflow",
      level: 2,
      paras: [
        "First claim and verify profiles on Yandex Maps / Google Business Profile (and 2GIS if relevant): one profile per branch. Then make it easy to leave a review on the site (block by service/product or a dedicated page) and set up mention monitoring.",
        "Ask after a successful outcome: SMS/email with a map link, a QR in the venue, a soft ask from the account manager. Incentives — only if the platform allows them and they don’t buy the rating.",
      ],
      lists: [
        {
          intro: "Mini process:",
          items: [
            "map profiles created and verified",
            "an owner watches new reviews daily or every other day",
            "reply templates for typical negatives + escalation",
            "a review ask in the “client is happy” script",
            "once a quarter, review complaint themes for the product",
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
      title: "Negatives, social, and a “too perfect” feed",
      level: 2,
      paras: [
        "A feed of only five-stars with zero complaints lowers trust: it looks faked. An honest mix and visible work on complaints look stronger.",
        "On social, reviews often feel more “live.” A company rep joining the dialogue raises loyalty — without aggression or deleting inconvenient facts (unless it’s spam/abuse under platform rules).",
      ],
      lists: [
        {
          intro: "How to reply to negatives:",
          items: [
            "thank them for the feedback",
            "acknowledge the problem without “everything is perfect” excuses",
            "offer a channel to resolve (phone, DM)",
            "after resolution — briefly note the outcome in the thread if it fits",
            "don’t pick public fights over small issues and burn reputation",
          ],
        },
      ],
      notes: [
        {
          title: "SEO timelines",
          kind: "tip",
          text: "Reviews speed choice on maps. Site prep for promotion takes about a month; core TOP buildup is planned over 2–6 months after work starts — a separate track.",
        },
      ],
    },
    {
      title: "Platforms, links, and what not to do",
      level: 2,
      paras: [
        "Review sites and directories sometimes rank for “reviews + brand/service” — extra traffic to the profile. Correct profiles give consistent NAP and sometimes a site link; that’s no reason to spam directories for link building volume.",
        "Don’t buy “100 reviews” packs, don’t keyword-stuff the business name, don’t clone branches. Focus on real clients, replies, and service.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "identical template texts from “different” people",
            "a review spike in a day with no promo or event",
            "banning negatives in promo rules",
            "agencies that promise “maps pack in a week via reviews”",
          ],
        },
      ],
      links: [
        {
          label: "Site directories",
          href: "/en/blog/katalogi-saytov/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "google-biznes",
    "lichnyy-brend",
    "samostoyatelnoe-seo",
    "katalogi-saytov",
    "didzhital-agentstvo",
    "otchet-klientu",
  ],
};
