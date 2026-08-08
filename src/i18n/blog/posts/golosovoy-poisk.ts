import type { BlogPost } from "../../../data/blog";

/** EN overlay for golosovoy-poisk — same structure as RU JSON. */
export const golosovoyPoiskEn: BlogPost = {
  slug: "golosovoy-poisk",
  title: "Optimizing a site for voice search",
  date: "2020-08-01",
  category: "SEO",
  cover: "/images/blog/golosovoy-poisk/cover-en.webp",
  excerpt:
    "How to prep a site for voice queries: conversational long-tail, FAQ and short answers, mobile speed, HTTPS, local search — without a cult of “separate SEO” or page-one guarantees.",
  lead: [
    "Voice search still runs on the same engines, but the query is often longer, more conversational, and more often from a phone: “pharmacy open near me,” “how to fix a kitchen faucet.” Assistants and quick answers favor clear fragments, FAQs, and pages that already work well in regular results.",
    "Below: what really affects visibility in voice scenarios, which query types to cover, and how to gather keywords and structure answers. Voice-traffic share figures in old roundups diverge — follow your audience and Search Console, not a magic percentage from a 2018 article. Page-one visibility for the keyword set is planned over months after prep — not a “voice SEO” button.",
  ],
  faq: [
    {
      q: "Do I need separate “voice SEO”?",
      a: "There’s no magic separate discipline. It’s stronger classic SEO: mobile, speed, conversational long-tail, FAQ, local profiles. Without a base in text results, voice answers almost never appear.",
    },
    {
      q: "Does a voice query always match the title?",
      a: "Rarely. Meaning often sits in the body, an H2, or FAQ. Don’t spawn thin duplicates for every pronunciation variant — one strong page per cluster is better.",
    },
    {
      q: "Is a 30-word short answer enough?",
      a: "A short direct answer near the start helps snippets/assistants, but the page must go deeper. One paragraph with no context rarely builds trust.",
    },
    {
      q: "Is Schema.org markup required for voice?",
      a: "Not a guarantee of a voice answer, but FAQ/HowTo/LocalBusiness and correct markup help systems read structure. Add it where the page warrants it — not “every type at once.”",
    },
    {
      q: "What matters more — links or speed?",
      a: "For voice scenarios, speed and a relevant answer are critical. Link profile still builds site authority overall, but one “exact answer” can beat a more linked URL.",
    },
    {
      q: "How do voice search and local business connect?",
      a: "“Near me”, “open now”, “address” pull maps and profiles. Keep Google Business Profile / Yandex Business, NAP consistency, and city landings current.",
    },
    {
      q: "Will I get into a voice answer in a week?",
      a: "Not as a promise. First prep pages and tech; rankings and featured answers grow month to month. The planned horizon for the keyword set is usually 2–6 months after work starts.",
    },
    {
      q: "How is this different from a normal site FAQ?",
      a: "Same format, but with wording closer to spoken language and one question per block. FAQ helps people and assistants; don’t turn it into a keyword dump.",
    },
  ],
  sections: [
    {
      title: "What changes in voice queries",
      level: 2,
      paras: [
        "People dictate full phrases: question words, place, context. Frequency of those tails is lower; competition differs from short head terms. Some scenarios end with one assistant answer and no click — so page value is accuracy and trust, not only chasing a session.",
        "Studies like Backlinko-style voice sample breakdowns are useful as factor guidance (speed, HTTPS, overlap with strong classic rankings), not a “do this → you’re in” checklist. Assistant UIs change; check your URLs in Search Console and on real devices.",
      ],
      lists: [
        {
          intro: "Typical voice-query traits:",
          items: [
            "longer than the typed analogue",
            "more often a question or how/where/when",
            "more local context",
            "expectation of a short clear answer",
            "start from a mobile device",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Writing thin articles for every spoken variant of one meaning. Prefer a cluster and one strong page.",
        },
      ],
    },
    {
      title: "Foundation: speed, HTTPS, mobile",
      level: 2,
      paras: [
        "Voice scenarios don’t forgive heavy pages: the user already asked and wants an answer now. Compress images, cut blocking JS, set cache and server. For commerce, HTTPS is the norm, not optional.",
        "Mobile-first is the crawl standard. Responsive layout, large tap targets, readable text without horizontal scroll. Check key templates (article, category, product, contacts) — not only the homepage.",
      ],
      lists: [
        {
          intro: "Tech minimum for voice scenarios:",
          items: [
            "fast LCP/TTFB on mobile networks",
            "HTTPS sitewide",
            "responsive and readable",
            "stable URLs without extra redirects",
            "clear navigation to the answer",
          ],
        },
      ],
      links: [
        {
          label: "Page size and weight",
          href: "/en/blog/razmer-stranitsy/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Content: long page and short answer",
      level: 2,
      paras: [
        "A strong combo: first paragraphs — a direct answer to the main question (short, on point), then depth, nuances, lists, tables. Useful for people and for systems that extract a fragment.",
        "Write plainly: less bureaucratese, more natural phrasing. Triggers like how/where/how much/best fit when you really answer — not when you stuff H2s with keywords.",
      ],
      lists: [
        {
          intro: "Structure that helps assistants:",
          items: [
            "H2/H3 as questions or clear topics",
            "lists and tables where that’s the answer",
            "FAQ with natural audience questions",
            "one cluster — one strong URL",
            "no synonym copy-paste on neighboring URLs",
          ],
        },
      ],
      links: [
        {
          label: "On-page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "FAQ, snippets, and markup",
      level: 2,
      paras: [
        "FAQ on landings and in articles raises the chance of matching a spoken query. For a store — delivery, payment, warranty, product choice — not generic “what is SEO”.",
        "Featured snippets and assistant answers aren’t guaranteed. FAQPage/HowTo/Product/LocalBusiness markup helps machines — it isn’t a ticket to position zero. Don’t mark up what isn’t on the page.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "6–10 real audience questions",
            "short answer + “more detail” in the body",
            "valid JSON-LD without spam",
            "text and markup stay aligned",
            "rich-result checks in webmaster panels",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Gather questions from support and analytics/forms first, then write FAQ — not the other way around.",
        },
      ],
    },
    {
      title: "Semantics: long-tail and clusters",
      level: 2,
      paras: [
        "Collect low-frequency conversational phrasing: Keyword Planner/Wordstat, suggest, “related questions”, support logs. Group into clusters and map to strong existing URLs or create one new page per cluster — see the keyword set playbook.",
        "Don’t expect exact title = voice query. Cover meaning and give a clear answer. Split commercial markers (buy/price/order) and informational (how/what means) by intent.",
      ],
      lists: [
        {
          intro: "Idea sources for voice tails:",
          items: [
            "search suggest and People Also Ask",
            "questions from chats and calls",
            "local city/district refinements",
            "comparisons and “what’s better”",
            "step-by-step how-tos",
          ],
        },
      ],
      links: [
        {
          label: "Keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Local search and business profiles",
      level: 2,
      paras: [
        "“Near me”, “address”, “hours” often go to maps. A Google Business Profile and Yandex Business listing, consistent NAP on the site, current phones and photos — required for offline services and locations.",
        "City landings should answer the local question, not be thin homepage clones. Link the profile to the site’s canonical URL.",
      ],
      lists: [
        {
          intro: "Local checklist:",
          items: [
            "up-to-date map profile",
            "matching name/address/phone",
            "hours without surprises",
            "reviews and replies without fake engagement",
            "local landings with real value, not spam",
          ],
        },
      ],
      links: [
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "A joined-up approach and timelines",
      level: 2,
      paras: [
        "Voice visibility almost always inherits strong classic rankings: first tech and content for people, then FAQ and local reinforcement. Social signals and “virality” are a weak, unstable lever — don’t build strategy on reposts.",
        "Page and fix prep — weeks. Visibility for the keyword set grows month to month; a planned horizon for noticeable page-one presence on a cluster is usually 2–6 months after work starts. You can’t promise “voice rankings in a week”.",
      ],
      lists: [
        {
          intro: "Work order:",
          items: [
            "fix speed and mobile",
            "gather conversational clusters",
            "strengthen answers and FAQ on strong URLs",
            "add local coverage when needed",
            "monitor queries and CTR in Search Console / Webmaster",
          ],
        },
      ],
      links: [
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Prep ≠ page one. Visibility for the keyword set builds over months after work starts.",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "optimizatsiya-stranitsy",
    "regionalnoe-seo",
    "google-search-console",
    "adaptivnyy-sayt",
    "razmer-stranitsy",
  ],
};
