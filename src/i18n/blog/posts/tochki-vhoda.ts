import type { BlogPost } from "../../../data/blog";

/** EN overlay for tochki-vhoda — same structure as RU JSON. */
export const tochkiVhodaEn: BlogPost = {
  slug: "tochki-vhoda",
  title: "Competitor entry points: how to find them and why they matter",
  date: "2020-01-20",
  category: "SEO",
  cover: "/images/blog/tochki-vhoda/cover-en.webp",
  excerpt:
    "What an entry point is, why to study competitors’ search landings, how to export queries and expand your keyword core — without copying someone else’s site.",
  lead: [
    "An entry point is the page where a person most often starts a visit: from search, ads, a bookmark, or an external link. Competitors’ URLs show which topics and formats actually capture demand.",
    "Below: why to pull entry points, what to gather before analysis, how to export relevant queries, and a simple way to find competing sites. The goal is ideas for your landings and keyword core — not blind copying.",
  ],
  faq: [
    {
      q: "Is the entry point always the homepage?",
      a: "Often yes for brand and direct visits. From organic search, categories, articles, and product cards for a specific intent more often lead.",
    },
    {
      q: "How is this different from general competitor analysis?",
      a: "General analysis covers traffic, channels, and visibility. Here the focus is specific landing URLs and the queries that feed them. See also the competitor analysis article.",
    },
    {
      q: "Can you learn exact entry points without their analytics?",
      a: "Exactly — no. Estimates come from visibility tools, keyword exports by URL, and manually reviewing page-one results.",
    },
    {
      q: "Why export keywords from other people’s pages?",
      a: "To expand semantics and see which intent a strong landing closes. Then you write your own page better — with your offer and proof.",
    },
    {
      q: "Should you copy a competitor’s structure one-to-one?",
      a: "No. Take hypotheses: topic, format, trust blocks. Copy-pasting content and templates is a risk and a weak result.",
    },
    {
      q: "Do search operators help?",
      a: "Yes as a quick slice: site:, intitle:, checking sections. For scale — a crawler and SEO visibility tools.",
    },
    {
      q: "Will this speed up page-one results?",
      a: "It speeds understanding where to put effort. Rankings themselves come after work and time: prep about a month; core share in page-one visibility is planned over 2–6 months.",
    },
    {
      q: "What about your own entry points?",
      a: "In Metrica / Analytics watch organic landing pages: strengthen the strongest, fix bounce, do not spawn duplicates for the same intent.",
    },
  ],
  sections: [
    {
      title: "What an entry point is",
      level: 2,
      paras: [
        "An entry point (EP) is the HTML page a user hits first in a session. Sources differ: search results, ads, social, email, external link, direct visit. For SEO, organic landings matter more: they show which URLs search treats as the answer to demand.",
        "On your site, EPs show up in analytics (entry / landing pages). For a competitor — via visibility estimates, leading URLs in SEO tools, and manual results review on the niche core.",
      ],
      lists: [
        {
          intro: "Typical EPs:",
          items: [
            "homepage",
            "category / service",
            "product card",
            "article or guide for an informational intent",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "Goals in Yandex Metrika",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Why study competitor EPs",
      level: 2,
      paras: [
        "Strong entry pages hint which content and offer keep people from the results: structure, proof, speed, query match. You transfer principles to your URLs — not someone else’s copy.",
        "Second goal — priorities: competitors invest in pages with better return. Third — semantics: from each strong landing you can pull a query cluster and close gaps in your core. Separately, EPs show where outreach or ads make more sense (pages with live traffic).",
      ],
      lists: [
        {
          intro: "What to log per EP:",
          items: [
            "URL and page type",
            "sample queries / intent",
            "strong blocks (prices, cases, FAQ, calculator)",
            "weaknesses (fluff, slow load, thin copy)",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
      ],
    },
    {
      title: "What to gather before the search",
      level: 2,
      paras: [
        "You need a draft of your own core (at least niche head and mid terms) and a results slice on them: who sits on page one, which URLs repeat. Without a query list, “finding competitors” becomes a random set of domains.",
        "Visibility tools automate page and keyword exports; a free quota often covers a pilot. Add manual results review and operators — less blind faith in one tool number.",
      ],
      lists: [
        {
          intro: "Data minimum:",
          items: [
            "20–100 priority queries",
            "screenshot or export of page-one results for them",
            "a list of candidate domains",
            "for each — 3–10 strong URLs",
          ],
        },
      ],
      links: [
        {
          label: "Search operators",
          href: "/en/blog/operatory-poiska/",
        },
        {
          label: "SEO software",
          href: "/en/blog/programmy-seo/",
        },
      ],
    },
    {
      title: "Exporting keywords from landings",
      level: 2,
      paras: [
        "Pages that hold steady page-one visibility usually keep a coherent set of phrasing for one intent. An export of “queries → URL” shows what feeds the entry point: commercial, informational, or mixed demand.",
        "Add keywords to the core only after clustering: one landing — one main intent. Otherwise you get cannibalization and duplicate meanings on your site.",
      ],
      lists: [
        {
          intro: "How to use the export:",
          items: [
            "filter junk and irrelevance",
            "group by intent",
            "compare with current URLs",
            "assign tasks for new or stronger pages",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Site content",
          href: "/en/blog/napolnenie-sayta/",
        },
      ],
    },
    {
      title: "An algorithm for finding competitors by visibility",
      level: 2,
      paras: [
        "Practical scheme: take a leader on important head terms → export keywords where they rank on page one → collect domains that most often overlap them in the results → score overlap share and rank “real” search competitors — not “a similar-looking site.”",
        "Then for the leading three to five domains pull a list of strong EPs and review content. In parallel mark your own organic entry points in analytics — compare drops and gaps.",
      ],
      lists: [
        {
          intro: "Steps:",
          items: [
            "niche-core leader",
            "export of their visibility",
            "domain registry from overlaps",
            "scoring by % query overlap",
            "EP review and your landing plan",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "An EP map is a research stage. Page prep takes about weeks to a month; growing core visibility is planned over 2–6 months after work starts.",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Text nausea",
          href: "/en/blog/toshnota-teksta/",
        },
      ],
    },
    {
      title: "How not to turn analysis into copying",
      level: 2,
      paras: [
        "A good EP review gives hypotheses: which format closes intent, which blocks lower bounce, which queries you lack. A bad review — copy-paste of H1s and someone else’s paragraphs.",
        "Lock the outcome in tasks: new URLs, title fixes, stronger offer, internal links. Over weeks watch your landing pages and leads — not someone else’s pretty ranking screenshots.",
      ],
      lists: [
        {
          intro: "Checklist after analysis:",
          items: [
            "table: competitor → EP → intent",
            "gaps in your core turned into tasks",
            "no new duplicates for the same demand",
            "KPIs: traffic and leads from strengthened landings",
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Why pages aren’t ranking",
          href: "/en/blog/sayt-ne-v-top/",
        },
      ],
    },
  ],
  related: [
    "analiz-konkurentov",
    "semanticheskoe-yadro",
    "operatory-poiska",
    "programmy-seo",
    "seo-struktura-sayta",
    "samostoyatelnoe-seo",
  ],
};
