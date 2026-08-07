import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-struktura-sayta — same structure as RU JSON. */
export const seoStrukturaSaytaEn: BlogPost = {
  slug: "seo-struktura-sayta",
  title: "SEO site promotion: how to build the right structure",
  date: "2021-12-27",
  category: "SEO",
  cover: "/images/blog/seo-struktura-sayta/cover-en.webp",
  excerpt:
    "How to design site structure for SEO: hierarchy, query clusters, and internal linking logic.",
  lead: [
    "Site structure isn’t a “pretty diagram for a pitch” — it’s a system of pages and links so both users and search engines see where services, catalog, and articles live.",
    "Below — hierarchy types, what matters to Yandex and Google, examples for different project types, and a practical order: section logic first, content second.",
  ],
  faq: [
    {
      q: "What is SEO site structure?",
      a: "A hierarchy of sections and URLs plus internal links between them, aligned with query clusters and user journeys.",
    },
    {
      q: "Which scheme is better — linear or tree?",
      a: "For most commercial sites — tree. Linear fits short landings; a “flat” grid with no hierarchy rarely suits a service business.",
    },
    {
      q: "Should you design structure before texts?",
      a: "Yes. Otherwise content spreads across random URLs, section duplicates appear, and internal linking stays weak.",
    },
    {
      q: "How do structure and a semantic keyword set relate?",
      a: "Query clusters suggest which landings you need. Structure is the map of those landings and paths between them.",
    },
    {
      q: "What to check after approving the scheme?",
      a: "Clean URLs, breadcrumbs, XML sitemap, robots.txt, click depth to key sections, and no overlapping intents on one URL.",
    },
  ],
  sections: [
    {
      title: "Structure for SEO: what it is",
      level: 2,
      paras: [
        "In SEO, “structure” is a concrete system for placing pages, sections, and posts. It follows logic and hierarchy: you can draw a block diagram and check it with a user’s eye.",
        "A clear hierarchy helps people (find a service or product faster) and search engines (see topical links). It’s also easier to build a keyword set: clusters map onto real landings, not “into the air.”",
      ],
      lists: [
        {
          intro: "People usually talk about two layers:",
          items: [
            "internal structure — ties between site sections, navigation, user path;",
            "internal linking — links between pages that strengthen important URLs and help the bot crawl.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "First dump texts “wherever they fit,” invent structure later. That almost always creates duplicate sections and pages without a clear intent.",
        },
      ],
    },
    {
      title: "Page hierarchy in diagram form",
      level: 2,
      paras: [
        "Structure implies hierarchy: some elements sit under others. Below — the base models most sites use.",
      ],
      lists: [],
    },
    {
      title: "Linear",
      level: 3,
      paras: [
        "Pages go in sequence: links to “neighbors” and home. Bad for a complex catalog; fine for a short landing or simple brochure site.",
        "Indexing is weaker than a tree: weight often stays on the home page. It makes sense if the whole key offer really lives on one screen.",
      ],
      lists: [],
    },
    {
      title: "Block",
      level: 3,
      paras: [
        "Elements are nearly equal; there’s no rigid “pyramid.” Common on compact single-product or person pages where blocks (description, prices, reviews, order) cross-link.",
        "For a large commercial site as the only model it’s usually not enough: without section levels it’s hard to scale assortment and articles.",
      ],
      lists: [],
    },
    {
      title: "Tree",
      level: 3,
      paras: [
        "The most common scheme for commercial projects: several levels; a section has subsections and service/product/article pages. Keep depth reasonable: don’t hide key commercial URLs behind five clicks.",
      ],
      lists: [],
    },
    {
      title: "Working with hierarchy",
      level: 2,
      paras: [
        "Simple rule: scheme first, content second. Otherwise you’ll clean up a pile of unlinked materials that index poorly and confuse visitors.",
        "Lock the structure on paper or in Miro/FigJam: look at the future site through the customer’s eyes — where they go for price, service, contacts.",
        "To group queries under sections, teams use cluster tools — e.g. Rush Analytics, Key Collector, or Titlo; choice depends on keyword-set size and the team’s process.",
      ],
      tables: [
        {
          caption: "Mini example: services → sections (fragment)",
          headers: ["Query cluster", "Section", "URL", "Depth"],
          rows: [
            ["pvc windows, buy windows", "PVC windows", "/okna-pvh/", "2"],
            ["window installation", "Installation", "/ustanovka-okon/", "2"],
            ["window repair", "Repair", "/remont-okon/", "2"],
            ["how to choose windows", "Blog / guide", "/blog/kak-vybrat-okna/", "3"],
          ],
        },
      ],
      notes: [
        {
          title: "What to watch",
          text: "One commercial intent — one landing. Informational clusters belong in a blog or knowledge base, not mixed into a “buy” page.",
        },
      ],
      lists: [],
    },
    {
      title: "What search engines need for effective indexing",
      level: 2,
      paras: [
        "A clear hierarchy is the base. Next — technical signals: sitemap, crawl rules, human-readable URLs, and no duplicate chaos.",
      ],
      lists: [],
    },
    {
      title: "Yandex",
      level: 3,
      paras: [
        "For many Russia-focused projects Yandex is the priority loop. It cares about clear hierarchy, topical sections, an XML sitemap, and a correct robots.txt (so utility areas don’t enter the index).",
        "Breadcrumbs and logical navigation help both the user and understanding of section nesting.",
      ],
      lists: [],
    },
    {
      title: "Google",
      level: 3,
      paras: [
        "Requirements are close to Yandex’s, with emphasis on a simple hierarchy, readable word-based URLs (not IDs), careful path length, and predictable internal linking.",
        "Quality content on landings still decides: structure without meaning on the pages won’t “pull” the SERP alone.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "strict but simple section hierarchy;",
            "short readable URLs;",
            "sitemap.xml and an up-to-date robots.txt;",
            "internal linking without dead ends.",
          ],
        },
      ],
    },
    {
      title: "Building site structure: examples",
      level: 2,
      paras: [
        "There’s no universal scheme “for any site.” Below — base frames you then fit to niche and semantics.",
      ],
      lists: [],
    },
    {
      title: "Commercial services site",
      level: 3,
      paras: [
        "From home — service sections and about; from services — landings and articles if needed. Medium depth, breadcrumbs, a block linking related services.",
      ],
      lists: [],
    },
    {
      title: "Brochure site",
      level: 3,
      paras: [
        "Two levels: home with offer and contacts + a few support pages (services briefly, cases, legal details). Linear or a very shallow tree.",
      ],
      lists: [],
    },
    {
      title: "Informational project",
      level: 3,
      paras: [
        "Rubrics and materials. Even “equal” articles belong in topical sections — easier to grow internal links and avoid orphans.",
      ],
      lists: [],
    },
    {
      title: "Online store",
      level: 3,
      paras: [
        "Categories → subcategories → product cards, plus filters without endless URL duplicates. Catalog splits should match how people search (product type, job) — not only warehouse logic.",
        "Before filling: topic and keyword work, internal link map, sitemap, section scheme under clusters.",
      ],
      lists: [
        {
          intro: "Before content starts:",
          items: [
            "analyze niche and demand;",
            "plan internal linking;",
            "build a sitemap;",
            "approve the section scheme under the keyword set.",
          ],
        },
      ],
    },
    {
      title: "What to do after structure",
      level: 2,
      paras: [
        "Next — keywords per landing, copy and meta, tech (indexing, speed, status codes). Structure without a keyword set and audit ages fast. Prep may take about a month; TOP across the set is planned over 2–6 months after work starts — not from hierarchy alone.",
      ],
      lists: [],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};
