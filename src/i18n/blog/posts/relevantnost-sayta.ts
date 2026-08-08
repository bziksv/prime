import type { BlogPost } from "../../../data/blog";

/** EN overlay for relevantnost-sayta — same structure as RU JSON. */
export const relevantnostSaytaEn: BlogPost = {
  slug: "relevantnost-sayta",
  title:
    "Website relevance in plain words: what it is and how to strengthen it",
  date: "2017-05-10",
  category: "SEO",
  cover: "/images/blog/relevantnost-sayta/cover-en.webp",
  excerpt:
    "What page relevance to a query means, how formal keyword match differs from a useful answer, and how to check and improve fit without a 4–5% density cult.",
  lead: [
    "Relevance is how well a page matches what the person really wants from a query. It used to be reduced to keyword density; today meaning, answer completeness, behavior, and commercial adequacy matter more.",
    "Below: a plain definition, types of relevance, how to check fit, and what to fix on the site — without a magic “4–5% keywords” formula or outdated meta Keywords.",
  ],
  faq: [
    {
      q: "What is site relevance?",
      a: "How well a page (and the site overall) answers the user’s query: by meaning, completeness, and usability — not only word match.",
    },
    {
      q: "What’s the difference between formal and substantive relevance?",
      a: "Formal — what the algorithm scores from signals (text, links, behavior, etc.). Substantive — whether it’s really a good answer, including assessor input.",
    },
    {
      q: "Do I need 4–5% keyword density?",
      a: "Not as a universal norm. Keywords and synonyms should feel natural; overspam hurts. Guide yourself by intent and readability.",
    },
    {
      q: "Does the meta Keywords tag help?",
      a: "For Yandex and Google as a ranking factor — no. Don’t spend time on it.",
    },
    {
      q: "How do I check relevance?",
      a: "By hand: site:/inurl: and compare page type to strong SERP results; rank/visibility tools as an extra slice. One third-party “relevance score” isn’t a verdict.",
    },
    {
      q: "Does relevance mean page one?",
      a: "No. Relevance is a condition. Competition, links, tech, brand, and history affect ranks. Page prep — weeks; core page-one share is planned for 2–6 months.",
    },
    {
      q: "What matters more: copy or behavior?",
      a: "Both. Copy sets the answer; behavior shows if it satisfied. Empty copy with faked engagement — filter risk.",
    },
    {
      q: "Where should I start improvements?",
      a: "Match cluster intent to SERP page type, satisfy the user’s job, remove overspam, fix tech and the snippet.",
    },
  ],
  sections: [
    {
      title: "In plain words",
      level: 2,
      paras: [
        "A person types a query. Search looks for pages most likely to solve the job. A relevant page is where the answer is complete, clear, and matches intention (buy, learn, compare, find an address).",
        "In early SEO “insert the keyword” often worked. Algorithms now lean harder on meaning, structure, satisfaction, and quality signals. Exact match still helps in title and headings — not as the only criterion.",
      ],
      links: [
        {
          label: "User intent",
          href: "/en/blog/user-intent/",
        },
      ],
    },
    {
      title: "How systems “score” fit",
      level: 2,
      paras: [
        "Simply: text and link signals combine with quality and behavior. Exact formulas are closed; in practice you need a clear page focus, topic coverage, internal and external links, and no spam.",
        "Old checklists with “mandatory 4–5% density” and Keywords are a museum. Ask: does the page answer the job as well as or better than documents near the top of today’s SERP for that cluster.",
      ],
      lists: [
        {
          intro: "What usually strengthens relevance:",
          items: [
            "keyword/meaning in title and H1 without overspam",
            "synonyms and related questions in the body",
            "structure (subheads, lists, FAQ)",
            "internal linking on the topic",
            "commercial expectations met (price, contacts, delivery — if intent is commercial)",
          ],
        },
      ],
      notes: [
        {
          title: "Don’t confuse",
          kind: "tip",
          text: "“Page is relevant to the query” ≠ “site automatically on page one.” Relevance is the base; ranks also depend on competition and accumulated signals.",
        },
      ],
    },
    {
      title: "Formal and substantive relevance",
      level: 2,
      paras: [
        "Formal — automatic scoring from available signals. Substantive — how good the answer really is for a person; assessors and quality-evaluation learning sit in that loop.",
        "Hence the practice: a page can “score” keywords formally and still lose to a document that answers the job better and keeps the user.",
      ],
    },
    {
      title: "How to check",
      level: 2,
      paras: [
        "Manual: open the SERP for the target query and compare your URL type to winners (card, category, article, showcase). Tools like Topvisor/Megaindex and peers give ranks and audit slices — use as diagnosis, not the only “relevance score.”",
        "Yandex and Google can diverge: different algorithms and weights. Watch the system where most traffic goes.",
      ],
      lists: [
        {
          intro: "Quick manual checklist:",
          items: [
            "title/H1 match the query job",
            "first screen makes clear what the page is",
            "main question answered without filler",
            "no diversion into another topic",
            "mobile UX doesn’t block reading/ordering",
          ],
        },
      ],
      links: [
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "What to do on the site",
      level: 2,
      paras: [
        "Tech: indexing, speed, broken links, correct robots — so relevant copy can enter search at all. Content: length and structure for the cluster job, readability, a snippet that honestly promises the content.",
        "Links and behavior help when the page is already useful. Growing links to an empty or over-optimized URL won’t paint relevance. Locality sharpens demand accuracy — especially for local business.",
      ],
      lists: [
        {
          intro: "Working order:",
          items: [
            "cluster and intent",
            "page type like a strong SERP winner",
            "copy and blocks for the job",
            "tech and snippet",
            "internal linking",
            "external mentions — on purpose",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
        {
          label: "“Korolyov” algorithm",
          href: "/en/blog/algoritm-korolyov/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Preparing a relevant page usually takes weeks. Competitive-core page-one share is planned for 2–6 months — not “page one after one title tweak.”",
        },
      ],
    },
  ],
  related: [
    "user-intent",
    "seo-kopirayting",
    "semanticheskoe-yadro",
    "algoritm-korolyov",
    "tehnicheskiy-seo-audit",
    "vnutrennyaya-perelinkovka",
  ],
};
