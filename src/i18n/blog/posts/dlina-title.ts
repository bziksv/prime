import type { BlogPost } from "../../../data/blog";

/** EN overlay for dlina-title — same structure as RU JSON. */
export const dlinaTitleEn: BlogPost = {
  slug: "dlina-title",
  title: "Title length: how to fit the snippet headline",
  date: "2020-11-23",
  category: "SEO",
  cover: "/images/blog/dlina-title/cover-en.webp",
  excerpt:
    "What makes the SERP headline, why pixels matter more than “exactly 70 characters”, how to write a Title without truncating meaning, and how it differs from H1.",
  lead: [
    "The Title in `<head>` most often becomes the snippet headline in search. If it’s too long, the engine truncates with an ellipsis — and the offer sense can vanish. If it’s too short and empty — the click goes to a neighbor.",
    "Below — what the SERP headline is made of, how to think about length today, and how not to confuse Title with H1. A full snippet and markup breakdown is in a related article.",
  ],
  faq: [
    {
      q: "How many characters should a Title have?",
      a: "There’s no hard “exactly N” limit: pixel width matters. A practical English cue is often ~50–60 characters before truncation risk — but check previews in Search Console / webmaster tools.",
    },
    {
      q: "Why did people say 70 characters before?",
      a: "Guidelines shifted with snippet width and font. Characters have different widths (W vs i) — hence the pixel approach.",
    },
    {
      q: "Should Title and H1 match?",
      a: "No. Shared meaning, different wording: Title for the SERP click, H1 for the page.",
    },
    {
      q: "Does length affect rankings?",
      a: "Not as “shorter = higher”. Clarity and CTR matter. A truncated nonsense Title is worse than a readable one.",
    },
    {
      q: "Do you need the brand in Title?",
      a: "Often yes at the end with a separator if space allows. Early on, brand helps recognition; don’t sacrifice the whole offer for it.",
    },
    {
      q: "How to check truncation?",
      a: "Previews in webmaster panels, SERP simulators, live results for the query. After edits, wait for recrawl.",
    },
    {
      q: "Does bold in the snippet shorten Title?",
      a: "Query-match highlighting is rendering. Orient length on the full string; don’t write Title “for bold”.",
    },
    {
      q: "One Title for the whole site?",
      a: "No. Each important landing needs its own. Duplicate Titles signal templates and confuse the SERP.",
    },
  ],
  sections: [
    {
      title: "What the snippet headline is made of",
      level: 2,
      paras: [
        "The base is `<title>` content. Search may rewrite the headline if it finds it weak or a better page fragment. Still write a strong Title: it’s your main candidate.",
        "Nearby in the snippet — URL/breadcrumbs and description (or alternate text). Title wins the first glance: topic and difference from SERP neighbors.",
      ],
      lists: [
        {
          intro: "A good Title:",
          items: [
            "matches page intent;",
            "reads before possible truncation;",
            "no keyword sheet;",
            "unique within the site.",
          ],
        },
      ],
      links: [
        {
          label: "SERP snippet",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "Characters vs pixels",
      level: 2,
      paras: [
        "The SERP draws the headline in a fixed-width area. Wide letters and long words eat space faster. So “70 characters” is an outdated dogma; the cue is fit meaning into the visible zone.",
        "Keep the offer core in the first ~50–60 characters, brand in the tail if it fits. Check real previews — not only an editor character counter.",
      ],
      lists: [
        {
          intro: "Measurement practice:",
          items: [
            "Title draft in a “URL → title → chars” sheet;",
            "preview in Search Console / webmaster tools;",
            "spot-check live SERPs for target queries;",
            "edits after meaning A/B, not only “cut 3 characters”.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Word order matters more: key meaning first. Truncation hits the tail — put brand and extras there.",
        },
      ],
    },
    {
      title: "How to choose length and wording",
      level: 2,
      paras: [
        "Meaning first: service/product + differentiator + city if needed. Then cut fluff (“best in the world”, “official site” without need). Numbers and specifics (“from 1 day”, “with delivery”) often beat vague adjectives.",
        "Don’t copy H1 one-to-one. Don’t reuse one Title on pagination and filters without clarification — you’ll get duplicates.",
      ],
      lists: [
        {
          intro: "Steps:",
          items: [
            "lock the main URL intent;",
            "draft 2–3 Title variants;",
            "keep the clearest within visibility;",
            "add brand if space remains;",
            "check uniqueness on the site.",
          ],
        },
      ],
      links: [
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "H1 tag",
          href: "/en/blog/teg-h1/",
        },
      ],
    },
    {
      title: "Typical length and meaning mistakes",
      level: 2,
      paras: [
        "Keyword spam, Title = URL, empty or “Untitled”, one template on 500 product cards, meaning only after character 80. Emoji and ALL CAPS also hurt — look spammy and waste space.",
        "A separate trap — writing Title “for the bot” so a human can’t read the offer. CTR drops even if length is “perfect”.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "duplicate Titles;",
            "the same keyword five times with commas;",
            "the important part only at the end of a long string;",
            "competitor copy-paste without your substance;",
            "company name only as Title on inner URLs.",
          ],
        },
      ],
    },
    {
      title: "SERP highlighting and “bold”",
      level: 2,
      paras: [
        "Search may bold query words in the headline. That’s not a reason to stuff every word form into Title. Highlighting follows query relevance — not an HTML setting.",
        "Don’t optimize “for bold”. Optimize for a clear answer to the query within visible length.",
      ],
      lists: [
        {
          intro: "Focus:",
          items: [
            "clear topic;",
            "readable word order;",
            "truncation check;",
            "alignment with description and H1.",
          ],
        },
      ],
    },
    {
      title: "How to roll out and control",
      level: 2,
      paras: [
        "In the CMS set unique Titles for templates: home, categories, products, articles. Crawl current values, find empties and duplicates, prioritize commercial URLs.",
        "After bulk edits request recrawl of important pages and see what the SERP actually shows — sometimes search substitutes its own variant.",
      ],
      lists: [
        {
          intro: "Quarterly control:",
          items: [
            "duplicate and empty Titles;",
            "high-traffic pages with weak CTR;",
            "new sections without their own headlines;",
            "fit with offer redesign.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Change Title and expect TOP in a week. The headline affects click and topic clarity; ranking growth is a separate horizon — months of systematic work (planned TOP often 2–6 months after prep).",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "snippet",
    "teg-h1",
    "optimizatsiya-stranitsy",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
  ],
};
