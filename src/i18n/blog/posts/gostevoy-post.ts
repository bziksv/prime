import type { BlogPost } from "../../../data/blog";

/** EN overlay for gostevoy-post — same structure as RU JSON. */
export const gostevoyPostEn: BlogPost = {
  slug: "gostevoy-post",
  title: "Guest post: how to choose a publication site",
  date: "2019-04-11",
  category: "Content marketing",
  cover: "/images/blog/gostevoy-post/cover-en.webp",
  excerpt:
    "How to find and evaluate sites for guest articles: audience, traffic, engagement, and link profile — without free page-one promises or link spam.",
  lead: [
    "A guest post is a piece on someone else’s platform: expertise for their audience and (often) a mention/link to your site. Value sits in a relevant audience and text quality — not one more link at any cost.",
    "Below: how to find sites, what to check when shortlisting, and why a sharp link spike is risky. Crowd replies in discussions are a related topic; “guest-post” search operators often lead to junk marketplaces.",
  ],
  faq: [
    {
      q: "Is a guest post always free?",
      a: "Paid placements exist too. Check the site’s rules and ad labeling if it’s native advertising.",
    },
    {
      q: "Should the main goal be the link?",
      a: "For SEO the link is secondary: donor audience traffic and trust matter more. Posts “only for the anchor” get spotted fast by editors and algorithms.",
    },
    {
      q: "What DR or traffic do you need?",
      a: "No hard thresholds. Topic fit, a live audience, and a sane link profile beat “DR > N from a 2019 guide.”",
    },
    {
      q: "How do you find sites?",
      a: "Results for niche queries + overlapping donors of strong competitors (Ahrefs and similar tools) + manual outreach to editors.",
    },
    {
      q: "How is this different from crowd marketing?",
      a: "Crowd — answers in discussions. A guest post — a full article under the site’s editorial process.",
    },
    {
      q: "Can you buy guest posts in bulk?",
      a: "Mass link spam via guest-post farms hurts. Prefer rare strong pieces.",
    },
    {
      q: "Do you need CheckTrust or SimilarWeb?",
      a: "As an extra filter — yes. They don’t replace reading the site and common sense.",
    },
  ],
  sections: [
    {
      title: "Two ways to find sites",
      level: 2,
      paras: [
        "Niche search: queries like “[topic] blog,” “[industry] magazine,” review the results, and keep a candidate table with notes.",
        "Via competitors: in Ahrefs (or a peer) look at strong players’ referring domains, find overlaps — sites that already host niche experts. Not a magic button — hypotheses for manual checks.",
      ],
      notes: [
        {
          title: "Don’t confuse with guest-post marketplaces",
          kind: "tip",
          text: "`inurl:write-for-us` lists are often full of weak sites. Prefer topical outreach and live media.",
        },
      ],
      links: [
        {
          label: "Search operators",
          href: "/en/blog/operatory-poiska/",
        },
      ],
    },
    {
      title: "What to check on a candidate",
      level: 2,
      paras: [
        "Traffic and sources: is there a live audience from search/direct — not only bots. “From 20k” thresholds in old guides are a hint, not law: for a narrow B2B niche less can still be valuable.",
        "The site: clear structure, fresh materials, understandable sections. If the homepage is dead — nobody will see your post.",
        "Engagement: views, comments, shares on similar articles. “A thousand views” isn’t a universal bar.",
      ],
      lists: [
        {
          intro: "Minimum before emailing the editor:",
          items: [
            "topic matches your expertise",
            "guest rules / contacts exist",
            "no obvious PBN / link farm",
            "you’re ready to help their readers — not a press release",
          ],
        },
      ],
    },
    {
      title: "Link profile and pace",
      level: 2,
      paras: [
        "In link auditors check donor quality, anchors, and dynamics. Sharp spikes and junk networks are red flags for the site and for your strategy.",
        "Quick scores (CheckTrust and similar tools) speed filtering but don’t guarantee clicks or trust. A guest post’s goal is a useful article + a fitting link — not a DR checkbox.",
        "Grow mentions gradually. A sudden link-mass jump for growth is a filter and trust risk.",
      ],
      links: [
        {
          label: "Crowd marketing",
          href: "/en/blog/kraud-marketing/",
        },
        {
          label: "Forum links",
          href: "/en/blog/ssylki-na-forumah/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The site = audience and editorial — not metrics alone.",
        "Copy for their readers beats your anchor.",
        "Rare strong guest posts beat a spam batch.",
      ],
    },
  ],
  closing: [
    "Pick one strong niche site, pitch a topic from their content gap, and draft without a hard sell — the fastest way to see if your outreach is alive.",
  ],
  related: [
    "kraud-marketing",
    "ssylki-na-forumah",
    "operatory-poiska",
    "idei-kontent-prodvizheniya",
    "eat-kopirayting",
    "korporativnyy-blog",
  ],
};
