import type { BlogPost } from "../../../data/blog";

/** EN overlay for analiz-konkurentov — same structure as RU JSON. */
export const analizKonkurentovEn: BlogPost = {
  slug: "analiz-konkurentov",
  title: "Competitor site analysis: traffic, visibility, and reputation",
  date: "2021-10-19",
  category: "SEO",
  cover: "/images/blog/analiz-konkurentov/cover-en.webp",
  excerpt:
    "How to estimate competitors’ traffic and visibility: SimilarWeb, Ahrefs, Semrush, and other sources. Why numbers diverge and how not to fool yourself.",
  lead: [
    "Competitor analysis is about order-of-magnitude traffic, channels, and strong pages — not copying someone else’s site. Tool numbers are always estimates: cross-check a few sources and watch magnitude, not fake precision.",
    "Below — why look at others’ traffic, which tools give a slice, and how to read gaps. Alexa as a mass tool is gone; use current services and common sense.",
  ],
  faq: [
    {
      q: "Why do Ahrefs and Semrush show different traffic?",
      a: "Different indexes, geos, and click models. Look at order of magnitude and trend — not an “exact” headcount.",
    },
    {
      q: "Can I know a competitor’s exact traffic?",
      a: "Without access to their analytics — no. You get estimates and indirect signals: visibility, ads, social proof.",
    },
    {
      q: "Is SimilarWeb alone enough?",
      a: "As a quick channel slice — yes. For SEO cores and links, add Keys.so / Ahrefs / Semrush and a manual SERP review.",
    },
    {
      q: "Should I trust the “for advertisers” block on a site?",
      a: "As the owner’s claim — yes, with caveats. Cross-check with tool estimates and the mediakit update date.",
    },
    {
      q: "How is traffic analysis different from parsing?",
      a: "Here — visit and channel estimates. Parsing is more about collecting prices, catalogs, URLs. See the separate article.",
    },
  ],
  sections: [
    {
      title: "Why look at competitors",
      level: 2,
      paras: [
        "To sense niche size, who takes demand, which channels work (search, direct, social, referral), and where to dig in your own strategy.",
        "Typical goals: pick a traffic benchmark, find page ideas, gauge a site’s ad potential before seeding.",
      ],
      lists: [],
    },
    {
      title: "Traffic estimation tools",
      level: 2,
      paras: [
        "SimilarWeb estimates visits, channels, geo, and engagement from panels and open signals. Handy for comparing sites “by eye.”",
        "Ahrefs, Semrush, SpyFu, and local peers are stronger on organic: keywords, traffic-driving pages, visibility trends. Models differ — numbers won’t match.",
        "Historic Alexa Ranking is no longer a daily pillar: the product left the market. Old Alexa guides are archive reading.",
      ],
      lists: [
        {
          intro: "What people usually check:",
          items: [
            "visit estimate and trend;",
            "share of search / direct / social / referral;",
            "top countries;",
            "rough keywords and landings;",
            "bounce and depth — only as a coarse signal.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "If one tool shows 20k and another 80k — don’t argue over thousands. Lock the order of magnitude (tens of thousands) and calibrate against your own analytics on your site.",
        },
      ],
    },
    {
      title: "Ad pages and asking directly",
      level: 2,
      paras: [
        "Media and blogs sometimes publish a mediakit: reach, placement price, audience. Handy, but figures can be outdated or dressed up.",
        "A direct ask to the owner with a fair offer sometimes yields an honest order of magnitude. Cross-check the answer with SimilarWeb/SEO tools: a big gap is a reason to doubt.",
      ],
      lists: [
        {
          intro: "Mediakit red flags:",
          items: [
            "no update date;",
            "only “likes” with no visits;",
            "traffic many times above tool estimates with no explanation;",
            "refusal to show even anonymized cabinet screenshots.",
          ],
        },
      ],
    },
    {
      title: "Reputation and soft signals",
      level: 2,
      paras: [
        "Besides visits, check reviews, mentions, social activity, content quality, and site speed. High “estimated” traffic with a dead feed and toxic reviews is a weak benchmark.",
      ],
      lists: [
        {
          intro: "Quick reputation checklist:",
          items: [
            "reviews and search mentions;",
            "live comments vs bots;",
            "content freshness;",
            "clear contacts and policies.",
          ],
        },
      ],
    },
    {
      title: "How to decide",
      level: 2,
      paras: [
        "Gather 2–3 sources, lock traffic order of magnitude and strong URLs, write hypotheses for your own site. Don’t copy copy and design one-to-one.",
      ],
      lists: [],
      links: [
        {
          label: "Data parsing",
          href: "/en/blog/parsing/",
        },
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Technical SEO audit",
          href: "/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};
