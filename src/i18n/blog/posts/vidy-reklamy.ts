import type { BlogPost } from "../../../data/blog";

/** EN overlay for vidy-reklamy — same structure as RU JSON. */
export const vidyReklamyEn: BlogPost = {
  slug: "vidy-reklamy",
  title: "Types of online advertising: what actually brings clients",
  date: "2016-08-23",
  category: "Internet marketing",
  cover: "/images/blog/vidy-reklamy/cover-en.webp",
  excerpt:
    "Channel overview: SEO, paid search, social targeting, teasers, and banners — pros, cons, and when to choose what. No TOP guarantees and no advice for shady offers.",
  lead: [
    "Online advertising isn’t only “banner or post”. By reach it can be narrow (people who already searched your product), broad (segment by age/gender/interests), or mass (brand, FMCG).",
    "Below — five working types and how to combine them. Figures like “1000% ROI” and “TOP for payment” from old materials we don’t copy: look at unit economics in your niche.",
  ],
  faq: [
    {
      q: "Is SEO advertising?",
      a: "More an organic acquisition channel. Overviews often put it next to ads because it competes for the same people in search.",
    },
    {
      q: "What brings leads faster?",
      a: "Usually paid search and social targeting with a ready landing. SEO is a long track: prep weeks/~a month; a share of the core in TOP — planned 2–6 months.",
    },
    {
      q: "Can you manage with only SEO and paid search?",
      a: "For many local and service niches — yes as a base. Targeting, banners, and content add when there’s budget and a clear audience outside search.",
    },
    {
      q: "Do teasers suit a brand?",
      a: "Rarely. Shock blocks on low-quality sites hit image. For a normal business, white networks and clear creative are better.",
    },
    {
      q: "Does anyone guarantee TOP-10?",
      a: "An honest contractor doesn’t guarantee the search SERP. “Pay only for TOP” sounds nice, but algorithms change; lock work scope, metrics, and report transparency.",
    },
  ],
  sections: [
    {
      title: "SEO and paid search",
      level: 2,
      paras: [
        "SEO is visibility in organic results for demand queries. Pros: loyalty to a “non-ad” click, scalable semantic coverage, relatively low CPA long-term. Cons: not instant; no position guarantee; you need tech, content, and time. First shifts often show after months; a stable share of the core in TOP is planned over 2–6 months after work starts — not payment day.",
        "Paid search (search + networks) — ads by query or interests. Pros: fast launch, precise intent on search, handy for promos. Cons: you pay per click continuously; without a strong landing you burn budget. Network retargeting “follows up” people who were on the site — not magic, a reminder.",
        "Classic pair: paid search covers demand now, SEO builds organic. When positions strengthen, you can redistribute paid share — not as a law, as a hypothesis under your numbers. There’s no direct “paid for search ads → bought SEO positions”.",
      ],
      lists: [
        {
          intro: "When to start with this pair:",
          items: [
            "you have a site and an offer;",
            "demand is searched in search;",
            "you need both quick leads and a long channel;",
            "you’re ready to count leads — not only clicks.",
          ],
        },
      ],
      links: [
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
        {
          label: "SEO for small business",
          href: "/en/blog/seo-malyy-biznes/",
        },
      ],
    },
    {
      title: "Targeting, teasers, banners — and choosing",
      level: 2,
      paras: [
        "Targeted ads show creatives to a segment in social and platform ecosystems (interests, demographics, look-alike). Good for broad and mid demand; for ultra-niche audiences are hard to build. Platforms and rules change — plan creative and offer tests, not an “eternal” 2016 ad account.",
        "Teaser networks — clickbait blocks, often on low-quality traffic. For reputation-minded businesses usually harmful. If an offer fails white-system moderation, the problem is more often the product/promises than “we need teasers”.",
        "Banners on sites — reach and brand, weaker point performance. Paid CPM or a period fee; segmentation is weaker than search. Makes sense for awareness with clear creative — not as the only lead channel.",
        "Choice practice: for most commercial services — SEO + paid search as the frame; targeting — if the audience lives in social; banners — for brand with budget; teasers — skip by default. Count cost per lead and lead quality — not “which type is trendier”.",
      ],
      lists: [
        {
          intro: "Short guide:",
          items: [
            "need leads fast — paid search/targeting;",
            "need a long search channel — SEO;",
            "need awareness — banner + content;",
            "care about reputation — no shock teasers;",
            "measure CPL/CPA and share of qualified leads.",
          ],
        },
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
  ],
  related: [
    "kontekst-i-seo",
    "seo-malyy-biznes",
    "retargeting",
    "reklamnyy-banner",
    "besplatnaya-reklama",
  ],
};
