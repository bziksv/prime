import type { BlogPost } from "../../../data/blog";

/** EN overlay for ctr-faktor-google — same structure as RU JSON. */
export const ctrFaktorGoogleEn: BlogPost = {
  slug: "ctr-faktor-google",
  title: "CTR as a Google ranking factor: direct, indirect, or a myth?",
  date: "2016-10-05",
  category: "SEO",
  cover: "/images/blog/ctr-faktor-google/cover-en.webp",
  excerpt:
    "Does Google use CTR in ranking: what representatives said, where clicks feed experiments and personalization, and why click inflation is a bad bet.",
  lead: [
    "The “is CTR a Google factor or not” debate has run for years: industry experiments, engineer comments, and confusion between personalization, SERP A/B tests, and “direct” ranking of every page.",
    "Below — a working frame without an inflation cult: where clicks really participate, what to do with CTR in Search Console, and why improving the snippet and relevance beats buying clicks.",
  ],
  faq: [
    {
      q: "Is CTR a direct ranking factor?",
      a: "Google has repeatedly said raw CTR as a universal ranking lever is unreliable and easy to noise. Clicks are used point-wise: quality experiments, personalization, some trend scenarios — not “buy clicks → TOP”.",
    },
    {
      q: "Why watch CTR in Search Console then?",
      a: "As snippet and intent diagnostics: low CTR at a good position often means a weak title/description or a query mismatch.",
    },
    {
      q: "Does CTR inflation help?",
      a: "Not as a strategy. Filter risk and noisy data. See the engagement-inflation post.",
    },
    {
      q: "How does CTR differ from behavioral factors?",
      a: "CTR is SERP clickability (impressions→clicks). On-site next — bounce, depth, time. Different layers; merging them into one “magic PF” hurts.",
    },
    {
      q: "Does CTR affect Yandex the same way?",
      a: "Formulas are closed. Practice is the same: an honest snippet and a relevant page beat bot schemes. Don’t copy 2015 US cases one-to-one.",
    },
    {
      q: "What grows ranks more: CTR or content?",
      a: "Content, tech, and intent fit. CTR follows a good snippet and position — it doesn’t replace the SEO core.",
    },
    {
      q: "Why did Google mention clicks in presentations?",
      a: "Often in the context of evaluating algorithm changes and SERP quality in experiments — not as “inflate your site’s CTR”.",
    },
    {
      q: "When to expect rank growth after a title fix?",
      a: "Recrawl and reaction — days to weeks. Steady competitive-core TOP buildup planned 2–6 months of systemic work — not “new title = TOP tomorrow”.",
    },
  ],
  sections: [
    {
      title: "Where the debate came from",
      level: 2,
      paras: [
        "In the mid-2010s the industry actively discussed experiments like Rand Fishkin’s cases: can clicks move the SERP. The theory sounded logical — search should account for people’s preferences.",
        "In parallel Google representatives (including Gary Illyes) stressed: relying on CTR as a direct factor is risky because of noise and manipulation. For SEO, separate “clicks somewhere in the system” from “click your site and rise forever”.",
      ],
      notes: [
        {
          title: "Historical context",
          text: "2015–2016 quotes and slides are an archive of the debate. Check current wording in Google help and Search Central; don’t build strategy on one old presentation screenshot.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Where CTR isn’t a “ranking button”",
      level: 2,
      paras: [
        "Raw CTR by query is easy to distort: brand, position, season, clickbait, bots. So a universal “higher CTR → higher rank for everyone” scales poorly and resists spam poorly.",
        "Personalization is a separate case: if you often pick one result type for an ambiguous query, the SERP may adapt to you. That isn’t the same as a global lift of someone else’s site for all users.",
      ],
      lists: [
        {
          intro: "Why “just click a lot” fails as SEO:",
          items: [
            "noise and spam easily fake clicks;",
            "position itself strongly drives CTR;",
            "brand queries distort the picture;",
            "search looks at quality beyond one metric.",
          ],
        },
      ],
    },
    {
      title: "Where clicks still participate",
      level: 2,
      paras: [
        "In engineering explanations clicks often appear as a quality metric in experiments: does an algorithm change help people find a better answer. That’s an indirect loop — via system evaluation, not a “manual URL boost for yesterday’s clicks”.",
        "In some trend and “hot topic” scenarios short-term popularity signals (mentions, interest, sometimes behavior) can temporarily affect the SERP. That’s poorly controlled by SEO schemes and cools fast.",
      ],
      lists: [
        {
          intro: "A practical model for specialists:",
          items: [
            "a direct “CTR score” per page isn’t your bet;",
            "Google experiments / SERP quality — an internal loop;",
            "personalization — about the user, not someone else’s TOP;",
            "your work — snippet, relevance, UX after the click.",
          ],
        },
      ],
      links: [
        {
          label: "Snippet and CTR",
          href: "/en/blog/snippet/",
        },
        {
          label: "Engagement inflation",
          href: "/en/blog/nakrutka-pf/",
        },
      ],
    },
    {
      title: "What to do in practice",
      level: 2,
      paras: [
        "Treat CTR in Search Console / Webmaster as a signal: at positions 3–5 with low CTR — rewrite title and description for intent, drop clickbait the page doesn’t deliver.",
        "After the click the page must answer the query. Otherwise high CTR turns into bounces and doesn’t help the business. Click inflation and bots are a risk path, not steady growth.",
      ],
      lists: [
        {
          intro: "Checklist instead of inflation:",
          items: [
            "title reflects the query job;",
            "description honestly promises content;",
            "page closes intent in the first screen;",
            "mobile and speed don’t kill the visit;",
            "in GSC watch CTR by cluster, not “hospital average”.",
          ],
        },
      ],
      links: [
        {
          label: "User intent",
          href: "/en/blog/user-intent/",
        },
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "A snippet fix can change CTR relatively fast after recrawl. Competitive-core rank buildup still lives in months (often 2–6) — not “clicked — and TOP”.",
          kind: "tip",
        },
      ],
    },
  ],
  related: [
    "snippet",
    "nakrutka-pf",
    "user-intent",
    "seo-yandex-google",
    "effektivnost-seo",
    "teg-h1",
  ],
};
