import type { BlogPost } from "../../../data/blog";

/** EN overlay for meta-description — same structure as RU JSON. */
export const metaDescriptionEn: BlogPost = {
  slug: "meta-description",
  title: "Meta description tag: why it matters and how it affects SEO",
  date: "2020-02-26",
  category: "SEO",
  cover: "/images/blog/meta-description/cover-en.webp",
  excerpt:
    "What a meta description is, whether it directly affects rankings, how it ties to the snippet and CTR, and how to write it without keyword stuffing or clickbait.",
  lead: [
    "`<meta name=\"description\" content=\"…\">` is a short page summary for search engines and sometimes social. It’s not a secret TOP-1 ranking factor — it’s a candidate for the snippet under the title in results.",
    "It rarely moves rankings by itself; it shapes the snippet and CTR. How search picks snippet text and rules for a good description are below — without treating old micro-keyword lab tests or a rigid “exactly 240 characters” as law.",
  ],
  faq: [
    {
      q: "Does the meta description directly raise rankings?",
      a: "As a separate scoring factor — there’s no solid case. Content, links, tech, and intent match matter more. Description works via the snippet and clicks.",
    },
    {
      q: "Does search always use my description?",
      a: "No. It may pull a page fragment if that answers the query better. A precise description raises the odds — it doesn’t guarantee.",
    },
    {
      q: "Do I still need meta keywords?",
      a: "For Google and Yandex as a ranking factor — no. Put the effort into title, description, and page text.",
    },
    {
      q: "How long should a meta description be?",
      a: "Aim to fit a typical snippet: meaning in the first ~150–160 characters, no wall of text. Exact truncation varies by device and SERP.",
    },
    {
      q: "How is it different from Open Graph?",
      a: "OG sets social previews separately. Description is mainly for search; some platforms may fall back to it if their own tags are missing.",
    },
  ],
  sections: [
    {
      title: "Direct SEO impact and myths",
      level: 2,
      paras: [
        "Ranking formulas are closed. In practice a keyword stuffed only into description with a weak page won’t move positions. Page content and relevance beat meta fields.",
        "Historical description spam (keyword sheets, text not about the page) taught engines not to trust the tag blindly. Hence the feeling that “description no longer matters” — it matters differently: via the snippet.",
      ],
      lists: [
        {
          intro: "What doesn’t work:",
          items: [
            "keywords only in description with no page text",
            "one description for the whole site",
            "clickbait the page doesn’t deliver",
            "betting on outdated meta keywords",
          ],
        },
      ],
      links: [
        {
          label: "Search snippet",
          href: "/en/blog/snippet/",
        },
        {
          label: "SEO mistakes",
          href: "/en/blog/seo-oshibki/",
        },
      ],
    },
    {
      title: "Snippet, CTR, and an honest promise",
      level: 2,
      paras: [
        "Under the blue title in results you often see a description. If it’s clear and useful, click chance (CTR) rises at the same position. That’s an indirect effect — not a “raise N spots” button.",
        "A misleading description raises bounce: people click and leave. The snippet promise must match the H1 and first screen.",
        "For social, set Open Graph / Twitter Cards; don’t rely on description as a fallback.",
      ],
      lists: [
        {
          intro: "A good description:",
          items: [
            "unique per URL",
            "reflects intent and page value",
            "keeps meaning at the start of the line",
            "no stuffing or ALL CAPS",
            "a soft CTA when it fits",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t inflate CTR with “shock result” clickbait. A short click plus high bounce hurts more than a dull but honest description.",
        },
      ],
      links: [
        {
          label: "CTR as a factor",
          href: "/en/blog/ctr-faktor-google/",
        },
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
    },
    {
      title: "How to write and where to check",
      level: 2,
      paras: [
        "In the CMS — a separate SEO description field on templates and key landings. Templates with product/city placeholders are fine if the line reads naturally — not “Buy {name} {name} price.”",
        "In Search Console / Webmaster, check how the snippet actually looks for queries. If search substitutes its own fragment — strengthen the relevant paragraph on the page and tighten the description.",
      ],
      lists: [
        {
          intro: "Mini release checklist:",
          items: [
            "unique description exists",
            "not a 1:1 duplicate of the title",
            "no keyword sheet",
            "snippet preview reviewed",
            "the page confirms the text’s promise",
          ],
        },
      ],
    },
  ],
  closing: [
    "Meta description is a snippet and click tool — not a content substitute. Write unique honest descriptions tied to title and page; for rich results and markup — see the snippet piece.",
  ],
  related: [
    "snippet",
    "seo-oshibki",
    "ctr-faktor-google",
    "open-graph",
    "teg-h1",
    "vnutrennie-faktory",
  ],
};
