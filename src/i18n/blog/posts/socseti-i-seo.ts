import type { BlogPost } from "../../../data/blog";

/** EN overlay for socseti-i-seo — same structure as RU JSON. */
export const socsetiISeoEn: BlogPost = {
  slug: "socseti-i-seo",
  title:
    "How social media affects site promotion: direct, indirect, and without myths",
  date: "2019-11-11",
  category: "SEO",
  cover: "/images/blog/socseti-i-seo/cover-en.webp",
  excerpt:
    "How social really helps a website: traffic, brand, behavior, and link previews — and why likes alone don’t push you into the TOP.",
  lead: [
    "“Social signals rule the SERP” and “social is useless for SEO” are both extremes. Search engines haven’t treated likes and shares as a simple “TOP button” for a long time, but live traffic, brand recognition, and a smooth path from post to page still affect business results — and indirectly search.",
    "We cover what counts as direct vs. indirect impact, which metrics to watch, and what not to expect from a community alone. Outdated guides built around classic TIC and PageRank aren’t the plan.",
  ],
  faq: [
    {
      q: "Do likes and shares raise rankings?",
      a: "As a guaranteed direct ranking factor — no. As a sign of interest and a source of visits — yes, if the audience is real, not faked.",
    },
    {
      q: "Should I run social channels for SEO?",
      a: "For a “checkbox among factors” — no. For traffic, trust, content, and branded queries — often yes, if the channel fits the niche.",
    },
    {
      q: "Do social links pass link equity?",
      a: "Don’t expect classic link juice from mass social URLs. Clicks, brand recognition, and a solid snippet/preview matter more.",
    },
    {
      q: "Do social posts speed up indexing?",
      a: "They can sometimes help a new URL get noticed via mentions and visits, but they don’t replace Sitemap, internal links, and page quality.",
    },
    {
      q: "Can social replace SEO?",
      a: "No. Organic search and social ads are different channels. A weak site with poor tech and content won’t be “pulled” into search by a community alone.",
    },
    {
      q: "How long until I see search impact?",
      a: "Site prep is roughly a month; visibility across the keyword set is planned over 2–6 months after work starts. Social posts give fast touches, not instant rankings.",
    },
  ],
  sections: [
    {
      title: "What changed since the “social signals era”",
      level: 2,
      paras: [
        "The industry used to debate likes, shares, and tweets as if they directly moved rankings. Today the picture is calmer: search leans on relevance, page quality, the link profile, user behavior, and many other signals. Mass-faking social activity for SEO is a bad bet.",
        "Public metrics like historic TIC-style scores and classic Google PageRank left the toolkit. Don’t plan promotion around “raising TIC with shares.”",
      ],
      notes: [
        {
          kind: "tip",
          title: "Honest focus",
          paras: [
            "Social is an attention and traffic channel. SEO is search visibility. The link works when both loops are alive — not when one “feeds” the other with gray schemes.",
          ],
        },
      ],
    },
    {
      title: "Direct effects: what’s actually measurable",
      level: 2,
      paras: [
        "Call “direct” what you can see in analytics without guessing about a “secret like weight.”",
        "Traffic: posts, Stories, community mailings, and social ads send people to the site. That’s a separate source in reports — counted with UTM and goals, not faith in the algorithm.",
        "Mentions and discussion: when brand and materials are truly shared, direct and branded visits grow, and natural links/mentions appear off your own property.",
        "Links from posts: search sees them, but don’t expect a “link boost” like editorial placements. A clickable card with a proper preview raises the chance of a visit.",
      ],
      lists: [
        {
          intro: "Watch first:",
          items: [
            "sessions and leads from social (with UTM);",
            "branded queries and direct visits;",
            "engagement from a live audience, not bots;",
            "landing quality after the click.",
          ],
        },
      ],
      links: [
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
    },
    {
      title: "Indirect effects: behavior and brand",
      level: 2,
      paras: [
        "Someone from a community is often already warm on the topic: they read longer, return more, convert better — if the post honestly promised what’s on the page. That improves on-site behavior without buying fake engagement.",
        "Brand: regular social presence strengthens memory. People later search the name — one of the healthiest SEO bonuses of SMM.",
        "Content: posts and short formats can grow into site articles (and back). One strong piece feeds both the feed and organic.",
      ],
      lists: [
        {
          intro: "Indirect loop:",
          items: [
            "better behavior on relevant landings;",
            "growth in branded demand;",
            "natural mentions;",
            "faster feedback on the offer.",
          ],
        },
      ],
      links: [
        {
          label: "Behavioral factors",
          href: "/en/blog/povedencheskie-faktory/",
        },
        {
          label: "Branded traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Don’t confuse",
          paras: [
            "Better UX and honest traffic ≠ buying “behavioral” traffic from exchanges. Faking engagement signals is a separate risk and another article.",
          ],
        },
      ],
    },
    {
      title: "Indexing and “fast bots” — without illusions",
      level: 2,
      paras: [
        "Historically people argued that public platforms like Twitter help surface a new URL faster. In practice the reliable indexing path is technical readiness, sitemap, internal links, and useful content.",
        "A social mention can speed attention to a page, but it won’t save a noindex, duplicate, or empty page. Don’t build SEO only on “posted — indexed.”",
      ],
    },
    {
      title: "How to connect SMM and SEO in practice",
      level: 2,
      paras: [
        "Pick 1–2 networks where your audience actually is — not “everything at once.” Send people to strong landings with a clear offer, not only the homepage.",
        "Set link previews (Open Graph), UTM, and analytics goals. Compare not post reach, but leads and lead quality.",
        "For VK communities, packaging for search is a related but separate job.",
      ],
      lists: [
        {
          intro: "Mini checklist for the link:",
          items: [
            "landing ready before scaled posts;",
            "preview and title are clickable;",
            "UTM on all outbound links;",
            "shared content plan for site and feed;",
            "no fake followers “for SEO.”",
          ],
        },
      ],
      links: [
        {
          label: "VK community SEO",
          href: "/en/blog/seo-vkontakte/",
        },
        {
          label: "SMM mistakes",
          href: "/en/blog/oshibki-smm/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Social helps the site with traffic, brand, and nurture — measurable. A direct “ranking for likes” as the main bet is outdated.",
        "Without a solid site and content, a community won’t replace SEO. Without a clear social goal, “run Instagram for rankings” is pointless too.",
        "Watch the channel mix and leads. Keyword visibility builds over months by plan — don’t confuse a viral post with reaching the TOP.",
      ],
    },
  ],
  closing: [
    "Pick one strong site piece, fix the preview, and send an honest post with UTM — faster proof the link works than arguing about “share weight.”",
  ],
  related: [
    "open-graph",
    "povedencheskie-faktory",
    "istochniki-trafika",
    "seo-vkontakte",
    "brendovyy-trafik",
    "oshibki-smm",
  ],
};
