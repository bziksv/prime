import type { BlogPost } from "../../../data/blog";

/** EN overlay for socseti-i-seo — same structure as RU JSON. */
export const socsetiISeoEn: BlogPost = {
  slug: "socseti-i-seo",
  title: "Social media and SEO: direct effects, indirect effects, no myths",
  date: "2019-11-11",
  category: "SEO",
  cover: "/images/blog/socseti-i-seo/cover-en.webp",
  excerpt:
    "How social actually helps a website: traffic, brand, on-site behavior, and link previews — and why likes alone do not move rankings.",
  lead: [
    "“Social signals rule the results” and “social is useless for SEO” are both extremes. Search engines have not treated likes and shares as a ranking shortcut for a long time, but live traffic, brand recognition, and a clean path from post to page still matter for the business — and indirectly for search.",
    "Below: what counts as direct versus indirect impact, which metrics to watch, and what not to expect from a community alone. Outdated playbooks built around classic TIC and PageRank are not the plan.",
  ],
  faq: [
    {
      q: "Do likes and shares raise rankings?",
      a: "As a guaranteed direct ranking factor — no. As a sign of interest and a source of visits — yes, if the audience is real, not faked.",
    },
    {
      q: "Should you run social channels for SEO?",
      a: "For a checkbox among ranking factors — no. For traffic, trust, content, and branded queries — often yes, if the channel fits the niche.",
    },
    {
      q: "Do social links pass link equity?",
      a: "Do not expect classic link juice from mass social URLs. Clicks, brand recognition, and a solid snippet or preview matter more.",
    },
    {
      q: "Do social posts speed up indexing?",
      a: "They can sometimes help a new URL get noticed via mentions and visits, but they do not replace a sitemap, internal links, and page quality.",
    },
    {
      q: "Can social replace SEO?",
      a: "No. Organic search and social ads are different channels. A weak site with poor tech and content will not be rescued by a community alone.",
    },
    {
      q: "How long until search impact shows?",
      a: "Site prep is roughly a month; visibility across the keyword core is planned over 2–6 months after work starts. Social posts give fast touches, not instant page-one results.",
    },
  ],
  sections: [
    {
      title: "What changed since the “social signals” era",
      level: 2,
      paras: [
        "The industry used to debate likes, shares, and tweets as if they directly moved rankings. Today the picture is calmer: search leans on relevance, page quality, the link profile, user behavior, and many other signals. Mass-faking social activity for SEO is a bad bet.",
        "Public metrics like historic TIC-style scores and classic Google PageRank left the toolkit. Do not plan promotion around “raising TIC with shares.”",
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
      title: "Direct effects: what you can actually measure",
      level: 2,
      paras: [
        "Call “direct” what you can see in analytics without guessing about a “secret like weight.”",
        "Traffic: posts, Stories, community mailings, and social ads send people to the site. That is a separate source in reports — counted with UTM and goals, not faith in the algorithm.",
        "Mentions and discussion: when brand and materials are truly shared, direct and branded visits grow, and natural links or mentions appear off your own property.",
        "Links from posts: search sees them, but do not expect a “link boost” like editorial placements. A clickable card with a proper preview raises the chance of a visit.",
      ],
      lists: [
        {
          intro: "Watch first:",
          items: [
            "sessions and leads from social (with UTM)",
            "branded queries and direct visits",
            "engagement from a live audience, not bots",
            "landing quality after the click",
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
        "Someone arriving from a community is often already warm on the topic: they read longer, return more, convert better — if the post honestly promised what is on the page. That improves on-site behavior without buying fake engagement.",
        "Brand: regular social presence strengthens memory. People later search the name — one of the healthiest SEO bonuses of SMM.",
        "Content: posts and short formats can grow into site articles (and back). One strong piece feeds both the feed and organic search.",
      ],
      lists: [
        {
          intro: "Indirect loop:",
          items: [
            "better behavior on relevant landings",
            "growth in branded demand",
            "natural mentions",
            "faster feedback on the offer",
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
            "Better UX and honest traffic are not the same as buying “behavioral” traffic from exchanges. Faking engagement signals is a separate risk — covered in another article.",
          ],
        },
      ],
    },
    {
      title: "Indexing and “fast bots” — without illusions",
      level: 2,
      paras: [
        "People used to argue that public platforms like Twitter help surface a new URL faster. In practice the reliable indexing path is technical readiness, a sitemap, internal links, and useful content.",
        "A social mention can speed attention to a page, but it will not save a noindex, duplicate, or empty page. Do not build SEO only on “posted — indexed.”",
      ],
    },
    {
      title: "How to connect SMM and SEO in practice",
      level: 2,
      paras: [
        "Pick one or two networks where your audience actually is — not everything at once. Send people to strong landings with a clear offer, not only the homepage.",
        "Set link previews (Open Graph), UTM, and analytics goals. Judge leads and lead quality, not post reach alone.",
        "For VK communities, packaging for search is a related but separate job.",
      ],
      lists: [
        {
          intro: "Mini checklist for the link:",
          items: [
            "landing ready before scaled posts",
            "preview and title are worth clicking",
            "UTM on all outbound links",
            "shared content plan for site and feed",
            "no fake followers “for SEO”",
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
        "Social helps the site with traffic, brand, and nurture — and that is measurable. A direct “ranking for likes” bet is outdated.",
        "Without a solid site and content, a community will not replace SEO. Without a clear social goal, “run Instagram for rankings” is pointless too.",
        "Watch the channel mix and leads. Keyword visibility builds over months by plan — do not confuse a viral post with steady page-one share.",
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
