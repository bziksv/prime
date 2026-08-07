import type { BlogPost } from "../../../data/blog";

/** EN overlay for napolnenie-sayta — same structure as RU JSON. */
export const napolnenieSaytaEn: BlogPost = {
  slug: "napolnenie-sayta",
  title: "Site content: unique materials and publishing rules",
  date: "2020-10-19",
  category: "Content marketing",
  cover: "/images/blog/napolnenie-sayta/cover-en.webp",
  excerpt:
    "How to pick topics and formats, borrow ideas from competitors, build a content plan, write a brief, and publish regularly — without auto-fill scrapers and copy-paste.",
  lead: [
    "An empty or thin site holds people poorly and barely builds useful search URLs. Content work isn’t “write 50 articles in a week” — it’s a system: niche, audience, idea sources, plan, brief, and publishing rhythm.",
    "This piece walks from topic to go-live: how to gather ideas, brief writers, and publish without stuffing. The content calendar as a table and scraper auto-fill are covered separately.",
  ],
  faq: [
    {
      q: "Where should you start if the site is new?",
      a: "Lock niche and audience, a list of required pages (services, about, contacts), and 8–15 first blog or catalog topics. Then plan and briefs — not the other way around.",
    },
    {
      q: "Can you copy competitors’ texts?",
      a: "Not as a base. Studying structure and topics — yes; publishing theirs or “synonymizing” — risk and weak results. See uniqueness checks.",
    },
    {
      q: "How is this different from a content plan?",
      a: "A plan is the “what/when” calendar. This article is where meaning comes from, how to brief writers, and which publishing rules to keep.",
    },
    {
      q: "Will auto-generated content save you?",
      a: "For a commercial site usually no. Better fewer, but your own materials for query clusters.",
    },
    {
      q: "How often should you publish?",
      a: "A rhythm you can hold for 2–3 months. One strong piece a week beats daily thin spam.",
    },
    {
      q: "Do you need images and video too?",
      a: "Yes if they add meaning: diagrams, product photos, short clips. Stock clichés with no context barely help.",
    },
    {
      q: "Who should write: in-house or a copywriter?",
      a: "Expertise inside plus edit/copy outside against a brief. Without a brief, “pretty text” often misses semantics and the offer.",
    },
    {
      q: "When is there enough content to stop?",
      a: "When commercial clusters and support pages (FAQ, how-tos) are covered. Then — updates and new demand, not endless volume for its own sake. Ranking growth still takes planned months after prep — not a publish count.",
    },
  ],
  sections: [
    {
      title: "Niche, audience, and content type",
      level: 2,
      paras: [
        "First answer: does the site sell services, products, expertise, or media? A store needs cards, categories, buying guides; services — landings, cases, FAQ; a blog — query clusters and series.",
        "Build an audience picture: jobs, objections, language, geo. Without that, topics stay generic and convert poorly.",
      ],
      lists: [
        {
          intro: "Lock at the start:",
          items: [
            "offer and USP",
            "3–5 audience segments",
            "required pages",
            "formats (article, card, video, checklist)",
            "what we never publish (off-limits topics).",
          ],
        },
      ],
      links: [
        {
          label: "Keyword set (semantic core)",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Ideas: competitors and demand",
      level: 2,
      paras: [
        "Review 3–5 strong competitors: which sections exist, which articles are indexed, what’s in the menu and blog. Look beyond copy — headlines, media, CTAs, FAQ depth.",
        "Add demand: keyword tools and suggestions, client questions, support, reviews. Social and media trends are angle sources — not one-to-one copy of other people’s posts.",
      ],
      lists: [
        {
          intro: "What to extract from competitors:",
          items: [
            "topics with traffic or visibility",
            "gaps (they have it — you don’t)",
            "weak pages you can beat",
            "presentation formats that work in the niche.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Collecting 200 “everyone has this” topics with no tie to clusters and commercial goals. You get a draft graveyard.",
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Content plan and priorities",
      level: 2,
      paras: [
        "Queue topics: money first (services/categories), then decision support, then expert blog. Inside the blog — one strong URL per cluster, without cannibalization.",
        "Keep a simple plan: topic, draft URL, key/cluster, status, deadline, owner. Table details are in the content-plan article.",
      ],
      lists: [
        {
          intro: "30-day priority:",
          items: [
            "finish commercial landings",
            "5–10 demand-led articles",
            "internal links between them",
            "refresh About and contacts.",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Brief and text quality",
      level: 2,
      paras: [
        "Quality starts with a brief: page goal, audience, required blocks, keywords without stuffing, expert facts/numbers, CTA, uniqueness and length requirements.",
        "Acceptance criteria: answers the query, scannable structure (H2/H3), no fluff, verifiable facts, uniqueness OK, media that fit.",
      ],
      lists: [
        {
          intro: "In the copywriter brief include:",
          items: [
            "draft title and H2 skeleton",
            "what must not be invented",
            "competitors as orientation — don’t copy",
            "where the CTA goes",
            "deadline and delivery format.",
          ],
        },
      ],
      links: [
        {
          label: "Uniqueness check",
          href: "/en/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "Media, UGC, and supporting the text",
      level: 2,
      paras: [
        "Text without visuals on commercial pages is often weaker: work photos, process diagrams, comparison tables, short video. User content (reviews, cases, Q&A) is a strong trust layer if you moderate and format it.",
        "Don’t replace meaning with stock and clickbait. Keep one style for blog covers and illustrations — own or AI-made assets, not random stock.",
      ],
      lists: [
        {
          intro: "Minimum for an article or landing:",
          items: [
            "1 main visual that matches meaning",
            "captions for complex blocks",
            "alt text on important images",
            "no heavy unoptimized files.",
          ],
        },
      ],
    },
    {
      title: "Publishing rules and an example",
      level: 2,
      paras: [
        "Before go-live: title/description, clean URL, internal links, indexability, share preview, mobile check. After — monitor positions and bounce, and schedule updates.",
        "Example logic for a niche store (flowers, etc.): categories and cards → “how to choose” guides → seasonal picks → delivery FAQ. Rhythm: cards in batches with assortment; expert pieces on a demand calendar.",
      ],
      lists: [
        {
          intro: "Release checklist:",
          items: [
            "meaning and facts approved",
            "uniqueness OK",
            "links to commercial pages",
            "no duplicate URL",
            "planned publish date met.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Publishing without semantics and structure is content for content’s sake. Topic map first, then volume.",
        },
      ],
      links: [
        {
          label: "Site auto-fill",
          href: "/en/blog/avtonapolnenie-sayta/",
        },
        {
          label: "Content updates",
          href: "/en/blog/obnovlenie-kontenta/",
        },
      ],
    },
  ],
  related: [
    "kontent-plan",
    "semanticheskoe-yadro",
    "proverka-unikalnosti",
    "avtonapolnenie-sayta",
    "obnovlenie-kontenta",
  ],
};
