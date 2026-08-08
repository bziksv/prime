import type { BlogPost } from "../../../data/blog";

/** EN overlay for vidy-reklamy — same structure as RU JSON. */
export const vidyReklamyEn: BlogPost = {
  slug: "vidy-reklamy",
  title: "Types of online advertising: what actually brings in clients",
  date: "2016-08-23",
  category: "Digital marketing",
  cover: "/images/blog/vidy-reklamy/cover-en.webp",
  excerpt:
    "Channel overview: SEO, paid search, social targeting, teasers, and banners — pros, cons, and when to choose what. No page-one guarantees and no advice for shady offers.",
  lead: [
    "Online advertising isn’t just “banner or post.” By reach, it can be narrow (people already searching for your product), broad (segment by age, gender, interests), or mass (brand, FMCG).",
    "Below: five working types and how to combine them. Figures like “1000% ROI” and “pay only for page one” from old materials aren’t worth copying — look at unit economics in your niche.",
  ],
  faq: [
    {
      q: "Is SEO advertising?",
      a: "It’s more of an organic acquisition channel. Overviews often group it with ads because it competes for the same people in search.",
    },
    {
      q: "What brings leads faster?",
      a: "Usually paid search and social targeting with a ready landing page. SEO is a long game: prep takes a few weeks to about a month; a meaningful share of the core set on page one is typically planned for 2–6 months after work starts.",
    },
    {
      q: "Can I get by with only SEO and paid search?",
      a: "For many local and service niches, yes — as a base. Targeting, banners, and content marketing add value when you have budget and a clear audience outside search.",
    },
    {
      q: "Do teasers suit a brand?",
      a: "Rarely. Shock ads on low-quality sites hurt your image. For a legitimate business, mainstream ad networks and clear creative are the better bet.",
    },
    {
      q: "Does anyone guarantee first-page rankings?",
      a: "An honest contractor doesn’t guarantee SERP positions. “Pay only for page one” sounds appealing, but algorithms change. Lock in scope of work, metrics, and reporting transparency instead.",
    },
  ],
  sections: [
    {
      title: "SEO and paid search",
      level: 2,
      paras: [
        "SEO is visibility in organic search results for demand-driven queries. Pros: users trust a non-ad click, scalable keyword coverage, relatively low CPA over time. Cons: not instant, no position guarantee, and you need technical work, content, and patience. Early movement often shows after a few months; a stable share of the core set on page one is typically planned for 2–6 months after work starts — not from payment day.",
        "Paid search (search plus display networks) shows ads by query or interest. Pros: fast launch, precise intent on search, handy for promos. Cons: you pay per click continuously; without a strong landing page you burn budget. Display retargeting follows people who visited your site — it’s a reminder, not magic.",
        "The classic pair: paid search covers demand now, SEO builds organic. As rankings strengthen, you can shift paid budget — not as a rule, but as a hypothesis backed by your numbers. There’s no direct “paid for search ads → bought SEO positions.”",
      ],
      lists: [
        {
          intro: "When to start with this pair:",
          items: [
            "you have a site and an offer",
            "people search for what you sell",
            "you need both quick leads and a long-term channel",
            "you’re ready to count leads — not just clicks",
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
        "Targeted ads show creatives to a segment in social and platform ecosystems — interests, demographics, lookalikes. Good for broad and mid-funnel demand; ultra-niche audiences are hard to build. Platforms and rules change — plan creative and offer tests, not a permanent 2016 ad account setup.",
        "Teaser networks run clickbait blocks, often on low-quality traffic. For reputation-conscious businesses, they’re usually harmful. If an offer fails mainstream platform moderation, the problem is more often the product or promises than “we need teasers.”",
        "Display banners on websites — reach and brand, weaker point performance. Paid CPM or a flat period fee; segmentation is weaker than search. Makes sense for awareness with clear creative — not as your only lead channel.",
        "In practice: for most commercial services, SEO plus paid search form the frame; add targeting if your audience lives on social; banners for brand with budget; skip teasers by default. Count cost per lead and lead quality — not “which type is trendier.”",
      ],
      lists: [
        {
          intro: "Quick guide:",
          items: [
            "need leads fast — paid search or targeting",
            "need a long search channel — SEO",
            "need awareness — banners plus content",
            "care about reputation — no shock teasers",
            "measure CPL/CPA and share of qualified leads",
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
