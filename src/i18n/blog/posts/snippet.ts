import type { BlogPost } from "../../../data/blog";

/** EN overlay for snippet — same structure as RU JSON. */
export const snippetEn: BlogPost = {
  slug: "snippet",
  title: "Search snippets: Title, description, and rich results",
  date: "2021-07-05",
  category: "SEO",
  cover: "/images/blog/snippet/cover-en.webp",
  excerpt:
    "How a SERP snippet is built: title, description, breadcrumbs, and rich results. What schema.org / JSON-LD gives you — and why it’s about CTR, not ranking magic.",
  lead: [
    "A snippet is the page block in search results: title, URL/breadcrumbs, description, and sometimes extensions (rating, price, FAQ). It decides whether people click your position.",
    "Below: the basic anatomy, rich results, and schema.org markup. A strong snippet lifts CTR; rankings grow from content, tech, and links — not from one structured-data block alone.",
  ],
  faq: [
    {
      q: "Does the meta description guarantee the snippet text?",
      a: "No. The search engine may take another page fragment if it answers the query better. Description is a strong hint, not an order.",
    },
    {
      q: "Does the snippet affect rankings?",
      a: "There’s no direct “points” factor for a pretty snippet. Indirectly — via CTR and behavior. The main thing is a relevant page.",
    },
    {
      q: "What are rich results?",
      a: "SERP extensions: stars, price, FAQ, recipe, and so on. They appear with valid structured markup and when the result type’s rules are met.",
    },
    {
      q: "JSON-LD or microdata in HTML?",
      a: 'Both are understood. JSON-LD in `<script type="application/ld+json">` is usually easier to maintain. Check with a rich results validator.',
    },
    {
      q: "Do I need breadcrumbs?",
      a: "Yes for on-site navigation; in the SERP a path also helps show the section. Add BreadcrumbList markup if you want, following the spec.",
    },
  ],
  sections: [
    {
      title: "What a regular snippet includes",
      level: 2,
      paras: [
        "Classics: Title (often from `<title>`), URL or breadcrumbs, description from meta description or page text. Display lengths drift — keep the meaning early.",
        "Write title and description for humans: benefit, difference, no keyword sheet. Stuffing the description kills the click.",
      ],
      lists: [
        {
          intro: "Basic checklist:",
          items: [
            "unique Title for the intent",
            "description with value and a CTA",
            "readable URL / breadcrumbs",
            "snippet promise matches page content",
          ],
        },
      ],
      links: [
        {
          label: "Page optimization for a query",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Website URL",
          href: "/en/blog/url-adres/",
        },
      ],
    },
    {
      title: "Rich results (extended snippets)",
      level: 2,
      paras: [
        "Extensions depend on type: product (price, availability), reviews, FAQ, how-to, organization. Not every site gets every type — there are content and policy requirements.",
        "An extension helps you stand out and answer before the click. Don’t promise in markup what’s not on the page: that leads to manual actions and lost rich results.",
      ],
      lists: [
        {
          intro: "Why bother:",
          items: [
            "more visibility at the same position",
            "clearer offer (price, rating)",
            "fewer empty clicks past the intent",
          ],
        },
      ],
    },
    {
      title: "Breadcrumbs and the path in results",
      level: 2,
      paras: [
        "On the site, breadcrumbs are navigation “Home → Section → Page.” In results the search engine may show a similar path.",
        "BreadcrumbList markup (JSON-LD or microdata) helps machines understand hierarchy. First put real breadcrumbs in HTML, then markup — not the other way around.",
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Schema.org and JSON-LD",
      level: 2,
      paras: [
        "Schema.org defines entity types: Product, Article, Organization, FAQPage, and others. You mark fields (name, price, author); the search engine decides whether to show an extension.",
        "JSON-LD is convenient: one script block, less layout mess. Microdata sits in tags — also valid, harder to maintain. After rollout, run the URL through the official rich results test and Search Console / webmaster reports.",
      ],
      lists: [
        {
          intro: "Rollout practice:",
          items: [
            "pick a type that matches real content",
            "don’t mark up invented reviews/prices",
            "align with visible page text",
            "validate",
            "watch whether the type appears in reports (it can take time)",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Markup is part of technical snippet prep. Ranking for commercial queries is a separate months-long process — often 2–6 months of work after prep — not the result of one JSON-LD block.",
        },
      ],
    },
  ],
};
