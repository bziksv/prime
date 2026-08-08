import type { BlogPost } from "../../../data/blog";

/** EN overlay for serm — same structure as RU JSON. */
export const sermEn: BlogPost = {
  slug: "serm",
  title: "What SERM is: when you need it and how to build the work",
  date: "2018-03-21",
  category: "Digital marketing",
  cover: "/images/blog/serm/cover-en.webp",
  excerpt:
    "SERM is managing reputation in search for your brand: SERP monitoring, review replies, owned properties, and content — without fake-review farms or flooding positivity.",
  lead: [
    "SERM (Search Engine Reputation Management) is work on what people see in search for the company name, “brand + reviews,” and related queries. It’s part of ORM: online image is wider than the SERP alone.",
    "Below: when SERM fits and how to build strategy ethically. Mass-posting paid “positive” reviews and burying the truth risks reputation and platforms — focus on facts, service, and strong owned URLs.",
  ],
  faq: [
    {
      q: "Is SERM the same as faking good reviews?",
      a: "No. Mature approach: monitoring, replies, fixing real problems, growing your pages, and lawful work on defamation — not a fake factory.",
    },
    {
      q: "How is SERM different from ORM?",
      a: "ORM is reputation across all channels (reviews, media, social, maps). SERM focuses on the search SERP for brand queries.",
    },
    {
      q: "When should I start?",
      a: "When notable negativity sits high in brand results, competitors attack, a crisis hits, or the brand is empty in search and third-party sites replace you.",
    },
    {
      q: "How long until I see an effect?",
      a: "Monitoring and replies — immediately. Shifting brand SERP — weeks and months: depends on domain strength in results and your pages. Not “page one in a week at any cost.”",
    },
    {
      q: "Will it hide the truth about bad service?",
      a: "Not for long. Fix product and support first; otherwise new negatives appear faster than you cover them.",
    },
  ],
  sections: [
    {
      title: "What SERM is and why business needs it",
      level: 2,
      paras: [
        "On a brand query people often decide whether to trust you: official site, maps, reviews, news, forums. SERM is deliberate work on that SERP slice.",
        "Many read reviews before buying — the share depends on niche, not a fixed “80% from an article.” Positive SERP helps, but doesn’t replace product and service quality.",
        "Negativity sticks harder; some reviews are unfair (competitors, emotion). Response: document, official reply, legal path for defamation; in parallel — strong owned pages (site, press, profiles).",
        "ORM is wider: social, messengers, maps, media. SERM doesn’t cancel fixing service in real life — otherwise search fills with complaints again.",
      ],
      links: [
        {
          label: "Brand traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "When you need it and how to build strategy",
      level: 2,
      paras: [
        "SERM signals: dense negativity high in brand results; a crisis or rumor that outran the rebuttal; a quiet niche with no owned properties in the SERP; a wave of similar reviews that looks like an attack.",
        "Goal — for vital and “brand + reviews” queries, noticeable positions hold controlled, honest sources: site, current profiles, clarifications, quality coverage. “Exactly seven owned URLs” isn’t a law — it’s a strong-brand orientation.",
        "Collect brand semantics (Wordstat and peers): name, reviews, staff, “scam”/quality. Snapshot the SERP, mark hostile and useful domains, set monitoring for new mentions.",
        "Next: reply to reviews on substance; strengthen owned pages (content, technical availability, links from official profiles); for false claims use platform tools and legal support. Don’t build strategy on anonymous positivity streams.",
        "Search reputation supports sales when there’s something to back it up. SERM is long monitoring discipline — not a one-off cleanup.",
      ],
      lists: [
        {
          intro: "Ethical minimum:",
          items: [
            "weekly brand SERP snapshot",
            "owner for review replies",
            "plan to resolve real service claims",
            "owned URLs: site, contacts, FAQ, cases",
            "no fake reviews or review gaming",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "Touchpoints",
          href: "/en/blog/tochki-kontakta/",
        },
      ],
    },
  ],
  related: [
    "brendovyy-trafik",
    "otzyvy-dlya-prodazh",
    "analiz-konkurentov",
    "tochki-kontakta",
    "prodvizhenie-offlayn-biznesa",
  ],
};
