import type { BlogPost } from "../../../data/blog";

/** EN overlay for algoritm-korolyov — same structure as RU JSON. */
export const algoritmKorolyovEn: BlogPost = {
  slug: "algoritm-korolyov",
  title: "Yandex Korolyov algorithm: what it was and what still matters",
  date: "2017-08-30",
  category: "SEO",
  cover: "/images/blog/algoritm-korolyov/cover-en.webp",
  excerpt:
    "What the 2017 Korolyov algorithm announced after Palekh, why Yandex pushed neural nets in search, and the lasting SEO takeaway: page meaning and usefulness beat keyword stuffing.",
  lead: [
    "In August 2017 Yandex presented the Korolyov algorithm as a continuation of the Palekh line: lean harder on query and text meaning, not only exact wording matches. The launch came with neural-net hype — for SEO the lasting priority shift matters more.",
    "Below: what they promised then, how to read it today, and what specialists should focus on. Update names change; the logic “answer intent with useful content” does not.",
  ],
  faq: [
    {
      q: "What is Korolyov?",
      a: "Yandex’s 2017 announcement of stronger meaning match between query and page via neural approaches — a continuation of Palekh ideas.",
    },
    {
      q: "Are Palekh and Korolyov the same?",
      a: "No. Palekh earlier worked more on titles/essence in a narrower scope; Korolyov was positioned as scaling meaning matching.",
    },
    {
      q: "Does this cancel keywords?",
      a: "No. Keywords and clusters are still needed to understand demand. But sheets of exact matches and density for density’s sake stopped being the main bet even then.",
    },
    {
      q: "Should I optimize “for Korolyov” now?",
      a: "Not for a 2017 update brand. Optimize for current practice: intent, structure, useful copy, tech, commercial signals — see related guides.",
    },
    {
      q: "What about assessors and Toloka?",
      a: "The announcement stressed crowd evaluation of SERPs. For a site that’s indirect: answer quality for the user beats guessing the formula.",
    },
    {
      q: "Does this relate to LSI copywriting?",
      a: "In practice — covering the topic with related concepts and questions, not density of one keyword. See SEO copywriting.",
    },
    {
      q: "When should I expect rankings after “semantic” copy?",
      a: "Prep takes weeks. Share of the core is typically planned for two to six months. One update doesn’t put a site on page one overnight.",
    },
    {
      q: "Where can I see Yandex vs Google differences?",
      a: "In the Yandex and Google SEO post: shared base, different accents.",
    },
  ],
  sections: [
    {
      title: "What was announced in 2017",
      level: 2,
      paras: [
        "Yandex positioned Korolyov as a step toward understanding meaning: match the query not only to an exact keyword in the title, but to document content. The name nods to S. P. Korolyov; the presentation came with loud production.",
        "For the industry the signal was clearer than the hype: semantic fit and answer usefulness keep rising; the cult of exact matches and formal spamminess metrics as the only criterion keeps weakening.",
      ],
      lists: [
        {
          intro: "Line context:",
          items: [
            "Palekh — meaning/titles in a narrower scope",
            "Korolyov — claimed scaling of neural matching",
            "in parallel — pressure on over-optimized texts (including filter lines)",
          ],
        },
      ],
      links: [
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "What people expected from the update",
      level: 2,
      paras: [
        "Better find pages where meaning matches the query even if wording differs. Rank “keywords stuffed, little value” weaker.",
        "Yandex messaging mentioned neural nets, a larger training set, and user SERP evaluation (Toloka) alongside assessors. Internal weight details aren’t public — and you shouldn’t build SEO on press rumors about “200 thousand pages.”",
      ],
      notes: [
        {
          title: "Historical context",
          kind: "tip",
          text: "2017 figures and slides are an archive. Work today from webmaster docs, page quality, and analytics — not that summer’s presentation PDF.",
        },
      ],
    },
    {
      title: "What it meant for SEO practice",
      level: 2,
      paras: [
        "Briefs like “4% density, nausea in a corridor, keyword in every paragraph” lost sense as the only strategy. Intent, answer completeness, structure, commercial factors, and tech moved up.",
        "Semantics is still collected and clustered — but the page is written for the human job, not an occurrence counter.",
      ],
      lists: [
        {
          intro: "Practical shift:",
          items: [
            "cluster + intent before copy",
            "useful blocks and FAQ instead of filler",
            "less exact-match spam",
            "SERP check: which document type wins",
          ],
        },
      ],
      links: [
        {
          label: "User intent",
          href: "/en/blog/user-intent/",
        },
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "How to treat updates today",
      level: 2,
      paras: [
        "Don’t chase every algorithm name. Watch symptoms in Webmaster and analytics: cluster drops, SERP-type shifts, bounce growth on thin URLs.",
        "Systemic work — structure, intent-led content, speed, mobile, commercial signals, a careful backlink profile — outlives marketing names of updates.",
      ],
      lists: [
        {
          intro: "Checklist after any noisy update:",
          items: [
            "ranks and organic by cluster",
            "top-URL intent vs SERP",
            "cleanup of spam and thin pages",
            "tech and mobile UX without regressions",
          ],
        },
      ],
      links: [
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Reacting to an update and reworking pages takes weeks. Core recovery/growth again lives in months (often two to six), not page one by Monday. Prep is not rankings.",
        },
      ],
    },
  ],
  related: [
    "seo-yandex-google",
    "user-intent",
    "seo-kopirayting",
    "semanticheskoe-yadro",
    "filtry-poiskovikov",
    "effektivnost-seo",
  ],
};
