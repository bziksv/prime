import type { BlogPost } from "../../../data/blog";

/** EN overlay for trendy-seo — same structure as RU JSON. */
export const trendySeoEn: BlogPost = {
  slug: "trendy-seo",
  title: "SEO trends: zero-click, meaning, and what to do",
  date: "2020-01-21",
  category: "SEO",
  cover: "/images/blog/trendy-seo/cover-en.webp",
  excerpt:
    "How SEO is changing: answers in the results without a click, search engines’ own services, meaning-aware text analysis — and practical moves on snippets, content, links, and analytics.",
  lead: [
    "SEO trends have not been about “more keywords in a paragraph” for a long time. Search engines close part of demand right in the results, promote their own services, and understand query meaning better. Organic search remains, but the fight is for the click and for trust in the page.",
    "Below: shifts that matter for strategy and what to do in practice — snippets, useful pages, white-hat mentions, social channels, and webmaster panels. This is not a calendar-year forecast, but durable directions; algorithm names in the press change faster than the sense of the advice.",
  ],
  faq: [
    {
      q: "Does zero-click kill SEO?",
      a: "Some informational queries close in the results. Commercial and complex intents still send people to sites. Strengthen brand, useful landings, and channels beyond one results page.",
    },
    {
      q: "Should you chase every new algorithm by name?",
      a: "No. Watch the effect: relevance, E-E-A-T signals, tech, UX. Model names in the press change; working with intent and page quality does not.",
    },
    {
      q: "Are small sites doomed because of brands and aggregators?",
      a: "It is harder to compete on broad head terms, but niches, region, expertise, and mid/long-tail with a strong answer remain. You still need to prep the site and keyword core; growing core visibility is planned over months of work.",
    },
    {
      q: "Do social networks help SEO directly?",
      a: "As a traffic and awareness channel — yes. As a “magic ranking factor” — do not count on it. Social content complements the site; it does not replace it.",
    },
    {
      q: "Should you delete “zombie” pages?",
      a: "Thin, useless URLs often hurt. Glue with 301 to useful ones or remove from the index thoughtfully. Do not wipe wholesale without an audit.",
    },
    {
      q: "Are a glossary and “Updated” required?",
      a: "Useful if terms are complex and materials are really updated. Formality for a checkbox will not replace answering the query.",
    },
    {
      q: "Can you “adapt to trends” and reach page one in a month?",
      a: "In about a month it is realistic to tighten tech, snippets, and a content plan. A lasting core share in page-one visibility is more often 2–6 months after work starts.",
    },
    {
      q: "Where should you start from these tips?",
      a: "Intent and useful pages → snippets and mobile UX → remove junk from the index → Webmaster/GSC panels → targeted mentions.",
    },
  ],
  sections: [
    {
      title: "Two big shifts",
      level: 2,
      paras: [
        "First — attention monopolized in the results: quick answers, the search engine’s own blocks (maps, marketplaces, video, news, Q&A). Users often get an answer without a click — zero-click. An organic link competes not only with other sites, but with the results page itself.",
        "Second — meaning-aware parsing of queries and text. Search engines better connect phrasing with intent. Earlier a small site with dense long-tail text optimization could steal traffic from a big brand with “thin” pages. As meaning understanding grew, large properties with broad assortment and trust more often reclaim those queries — if they actually meet the need.",
      ],
      lists: [
        {
          intro: "What that means in practice:",
          items: [
            "not every query must click through to your domain",
            "the results fragment should be honest and useful",
            "you compete with aggregators and search’s own services",
            "a keyword for the keyword’s sake is weaker than a full answer to the user’s job",
          ],
        },
      ],
      links: [
        {
          label: "Why pages aren’t ranking",
          href: "/en/blog/sayt-ne-v-top/",
        },
        {
          label: "Voice search",
          href: "/en/blog/golosovoy-poisk/",
        },
      ],
    },
    {
      title: "Snippets and the first screen",
      level: 2,
      paras: [
        "When CTR from results falls, a clickable snippet’s value rises. Tune title and description to intent: numbers, clear benefit, no clickbait that does not match the page. A readable URL helps people and sometimes the snippet.",
        "On the page itself the first screen should quickly confirm the person landed right: subheads, answer, solid mobile layout. That affects whether they bounce back to the results in a second (a rough “click length” / satisfaction signal).",
      ],
      lists: [
        {
          intro: "Quick fixes:",
          items: [
            "title matches the query and the page promise",
            "description complements, does not duplicate title",
            "H1 and lead close intent without fluff",
            "responsive layout and mobile speed",
          ],
        },
      ],
      links: [
        {
          label: "Snippets",
          href: "/en/blog/snippet/",
        },
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Pages with traffic and meaning",
      level: 2,
      paras: [
        "URL count alone is not strength. Keep and strengthen pages that get demand and solve the job; glue thin “zombies” with 301 or carefully pull them from the index. That is hygiene — not a one-shot “deleted everything — took off.”",
        "Around content, add phrasing for solving intent: search suggest, related queries, visibility of competitor URLs. Write to answer the user’s next question — not only an exact key match.",
      ],
      lists: [
        {
          intro: "Content ritual:",
          items: [
            "audit pages with no traffic and no value",
            "refresh live materials (and an “updated” signal if true)",
            "Last-Modified / current sitemap where it works",
            "a glossary — if the niche is terminology-heavy",
          ],
        },
      ],
      links: [
        {
          label: "Site content",
          href: "/en/blog/napolnenie-sayta/",
        },
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "XML sitemap",
          href: "/en/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Mentions, social channels, and analytics",
      level: 2,
      paras: [
        "Links and mentions via useful content and careful outreach still beat marketplace spam. Social networks are an extra reach channel: articles, infographics, short video and podcasts can bring people the results “ate” with zero-click.",
        "Close the loop in panels: Yandex Webmaster and Google Search Console show queries, CTR, and errors. Trends without measurement are guessing.",
      ],
      lists: [
        {
          intro: "A white-hat growth track:",
          items: [
            "topical sites and guest pieces",
            "brand-mention monitoring",
            "content formats for the audience outside search",
            "weekly GSC / Webmaster review",
          ],
        },
      ],
      links: [
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
    {
      title: "What doesn’t change",
      level: 2,
      paras: [
        "Tech, clear structure, an honest answer to the query, measuring leads — the base. Trends suggest accents (snippet, meaning, channels), but do not cancel site prep and time to build rankings.",
        "Prep (keyword core, copy, tech) — often about a month. A noticeable share of the commercial core in page-one visibility — planned 2–6 months after work starts, growing month to month, with no date guarantee. “Adapted to a trend in a week — page one” is a harmful myth.",
      ],
      lists: [
        {
          intro: "Bottom line:",
          items: [
            "account for zero-click and search engine blocks",
            "write for intent, not density",
            "clean weak URLs, strengthen strong ones",
            "watch CTR and panels — not only rankings",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Reacting to trends is not instant page one. Page quality and measurement first, then months of visibility buildup.",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "SEO for small business",
          href: "/en/blog/seo-malyy-biznes/",
        },
      ],
    },
  ],
  related: [
    "sayt-ne-v-top",
    "snippet",
    "golosovoy-poisk",
    "yandeks-vebmaster",
    "autrich",
    "samostoyatelnoe-seo",
  ],
};
