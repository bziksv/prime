import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-struktura-sayta — same structure as RU JSON. */
export const seoStrukturaSaytaEn: BlogPost = {
  slug: "seo-struktura-sayta",
  title: "SEO site structure: how to design the hierarchy that ranks",
  date: "2021-12-27",
  category: "SEO",
  cover: "/images/blog/seo-struktura-sayta/cover-en.webp",
  excerpt:
    "How to design a site structure for SEO: page hierarchy, keyword clusters, and internal linking — before you flood the CMS with random pages.",
  lead: [
    "Site structure isn’t a pretty diagram for a pitch deck. It’s the system of pages and links that helps people and search engines find services, catalog, and articles without getting lost.",
    "Below: hierarchy patterns, what Yandex and Google care about, examples for different project types, and a practical order — section logic first, content second.",
  ],
  faq: [
    {
      q: "What is SEO site structure?",
      a: "A hierarchy of sections and URLs plus the internal links between them, aligned with keyword clusters and real user journeys.",
    },
    {
      q: "Which model is better — linear or tree?",
      a: "For most commercial sites, a tree. Linear fits short landings. A flat grid with no hierarchy rarely works for a service business.",
    },
    {
      q: "Should I design structure before writing copy?",
      a: "Yes. Otherwise content spreads across random URLs, sections duplicate, and internal linking stays weak.",
    },
    {
      q: "How do structure and keyword research connect?",
      a: "Query clusters tell you which landings you need. Structure is the map of those landings and the paths between them.",
    },
    {
      q: "What should I check after approving the scheme?",
      a: "Clean URLs, breadcrumbs, XML sitemap, robots.txt, click depth to key sections, and no overlapping intents on one URL.",
    },
  ],
  sections: [
    {
      title: "What “structure for SEO” actually means",
      level: 2,
      paras: [
        "In SEO, structure is a concrete system for placing pages, sections, and posts. It follows hierarchy you can draw as a block diagram and sanity-check with a user’s eye.",
        "A clear hierarchy helps people find a service or product faster and helps search engines see topical relationships. It’s also easier to build a keyword set: clusters map onto real landings, not thin air.",
      ],
      lists: [
        {
          intro: "Two layers people usually mean:",
          items: [
            "internal structure — how sections connect, navigation, the user path",
            "internal linking — links between pages that strengthen important URLs and help crawlers",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Dump texts “wherever they fit,” invent structure later. That almost always creates duplicate sections and pages with no clear intent.",
        },
      ],
    },
    {
      title: "Page hierarchy in simple diagrams",
      level: 2,
      paras: [
        "Structure implies hierarchy: some elements sit under others. These are the base models most sites use.",
      ],
    },
    {
      title: "Linear",
      level: 3,
      paras: [
        "Pages go in sequence — links to neighbors and home. Bad for a complex catalog; fine for a short landing or a simple brochure site.",
        "Indexing is weaker than a tree: weight often stays on the homepage. It only makes sense if the whole offer really lives on one screen.",
      ],
    },
    {
      title: "Block / network",
      level: 3,
      paras: [
        "Elements are nearly equal; there’s no rigid pyramid. Common on compact single-product or personal pages where blocks (description, prices, reviews, order) cross-link.",
        "As the only model for a large commercial site it’s usually not enough: without section levels it’s hard to scale assortment and articles.",
      ],
    },
    {
      title: "Tree",
      level: 3,
      paras: [
        "The default for commercial projects: several levels; each section has subsections and service, product, or article pages. Keep depth reasonable — don’t bury key commercial URLs five clicks down.",
      ],
    },
    {
      title: "How to work with hierarchy",
      level: 2,
      paras: [
        "Simple rule: scheme first, content second. Otherwise you’ll clean up a pile of unlinked pages that index poorly and confuse visitors.",
        "Lock the structure on paper or in Miro/FigJam. Look at the future site through the customer’s eyes — where they go for price, service, contacts.",
        "To group queries under sections, teams use clustering tools — Rush Analytics, Key Collector, Titlo, and similar. Pick what matches your keyword-set size and workflow.",
      ],
      tables: [
        {
          caption: "Mini example: services → sections (fragment)",
          headers: ["Query cluster", "Section", "URL", "Depth"],
          rows: [
            ["pvc windows, buy windows", "PVC windows", "/okna-pvh/", "2"],
            ["window installation", "Installation", "/ustanovka-okon/", "2"],
            ["window repair", "Repair", "/remont-okon/", "2"],
            [
              "how to choose windows",
              "Blog / guide",
              "/blog/kak-vybrat-okna/",
              "3",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "What to watch",
          text: "One commercial intent — one landing. Informational clusters belong in a blog or knowledge base, not mixed into a “buy” page.",
        },
      ],
    },
    {
      title: "What search engines need for clean indexing",
      level: 2,
      paras: [
        "A clear hierarchy is the base. Next come technical signals: sitemap, crawl rules, human-readable URLs, and no duplicate chaos.",
      ],
    },
    {
      title: "Yandex",
      level: 3,
      paras: [
        "For many Russia-focused projects Yandex is the priority engine. It wants a clear hierarchy, topical sections, an XML sitemap, and a correct robots.txt so utility areas don’t enter the index.",
        "Breadcrumbs and logical navigation help users and make section nesting easier to understand.",
      ],
    },
    {
      title: "Google",
      level: 3,
      paras: [
        "Requirements sit close to Yandex’s, with emphasis on a simple hierarchy, readable word-based URLs (not IDs), careful path length, and predictable internal linking.",
        "Quality content on landings still decides outcomes. Structure without substance on the pages won’t carry rankings by itself.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "strict but simple section hierarchy",
            "short, readable URLs",
            "sitemap.xml and an up-to-date robots.txt",
            "internal linking without dead ends",
          ],
        },
      ],
    },
    {
      title: "Building structure: examples",
      level: 2,
      paras: [
        "There’s no universal scheme for every site. Here are base frames you then adapt to niche and keywords.",
      ],
    },
    {
      title: "Commercial services site",
      level: 3,
      paras: [
        "From home — service sections and about; from services — landings and articles if needed. Medium depth, breadcrumbs, and a block linking related services.",
      ],
    },
    {
      title: "Brochure site",
      level: 3,
      paras: [
        "Two levels: home with offer and contacts, plus a few support pages (services briefly, cases, legal details). Linear or a very shallow tree.",
      ],
    },
    {
      title: "Informational project",
      level: 3,
      paras: [
        "Rubrics and materials. Even “equal” articles belong in topical sections — easier to grow internal links and avoid orphans.",
      ],
    },
    {
      title: "Online store",
      level: 3,
      paras: [
        "Categories → subcategories → product cards, plus filters without endless URL duplicates. Split the catalog the way people search (product type, job to be done) — not only how the warehouse is organized.",
        "Before you fill it: niche and keyword work, an internal link map, a sitemap, and a section scheme under the clusters.",
      ],
      lists: [
        {
          intro: "Before content starts:",
          items: [
            "analyze niche and demand",
            "plan internal linking",
            "build a sitemap",
            "approve the section scheme against the keyword set",
          ],
        },
      ],
    },
    {
      title: "What to do after the structure is set",
      level: 2,
      paras: [
        "Next: keywords per landing, copy and meta, then tech (indexing, speed, status codes). Structure without a keyword set and audits ages fast. Getting the frame ready can take weeks; ranking growth across the set is planned over 2–6 months after work starts — hierarchy alone doesn’t deliver page one.",
      ],
      links: [
        {
          label: "Keyword research",
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
