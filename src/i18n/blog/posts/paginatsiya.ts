import type { BlogPost } from "../../../data/blog";

/** EN overlay for paginatsiya — same structure as RU JSON. */
export const paginatsiyaEn: BlogPost = {
  slug: "paginatsiya",
  title: "Website pagination: how to build it without hurting SEO",
  date: "2021-03-30",
  category: "SEO",
  cover: "/images/blog/paginatsiya/cover-en.webp",
  excerpt:
    "What catalog and blog pagination is, how numbering works, and how to set indexing so pages 2, 3, 4… don’t spawn duplicates.",
  lead: [
    "Pagination splits a long list into pages: catalog, blog, search results. Useful for readers, but without rules you easily get thin duplicate pages in the index.",
    "Below: why you need it, how to build it, SEO settings, the link with filters, and audit. Exact attributes like rel prev/next are no longer universal — rely on canonical tags and whether each page is useful.",
  ],
  faq: [
    {
      q: "Do you need pagination instead of “show more”?",
      a: "Either approach works. Infinite scroll is convenient but worse for sharing deep URLs. Classic ?page=2 is easier to control.",
    },
    {
      q: "Should page=2, 3… be indexed?",
      a: "If there’s unique useful content or products — yes, on purpose. If they’re almost empty copies — noindex or canonicalize deliberately.",
    },
    {
      q: "Does rel=prev/next help?",
      a: "Google long ago stopped treating them as a hard signal. Canonical, structure, and quality matter more.",
    },
    {
      q: "What about filters and sorts?",
      a: "Don’t create indexable filter combos you don’t need — those are facets, not pagination. Give them a separate parameter policy.",
    },
    {
      q: "How many products per page?",
      a: "Balance UX and page weight: usually dozens of cards, not hundreds of heavy blocks at once.",
    },
    {
      q: "Should you always canonicalize to page 1?",
      a: "Not always — it depends on listing uniqueness. Don’t hide needed cards by blindly canonicalizing everything to page=1.",
    },
    {
      q: "Should a nonexistent page=100 return 200?",
      a: "If the page doesn’t exist, return 404 (or a correct “end of list”), not an empty 200.",
    },
    {
      q: "Do all pages belong in the sitemap?",
      a: "Not required. Include the listings that should be indexed; a long page=N tail is often extra.",
    },
  ],
  sections: [
    {
      title: "Why pagination exists",
      level: 2,
      paras: [
        "Pagination speeds load, simplifies navigation of large lists, and gives stable URLs for return visits and linking. You need it wherever people compare many similar items.",
        "Numbered pages are crawlable and available without JavaScript. A “Show more” button can complement them, but must not hide content behind JavaScript alone.",
      ],
      lists: [
        {
          intro: "Where it shows up:",
          items: [
            "online store catalogs",
            "blog and news feeds",
            "on-site search",
            "archives and tags",
          ],
        },
      ],
    },
    {
      title: "How to build it on a site",
      level: 2,
      paras: [
        "Server or frontend returns a batch of items and navigation: numbers, next/back. Make URLs predictable — `/catalog/page/2/` or `?page=2` — and consistent across the section.",
        "Each existing page needs a correct status code and links to neighbors. Paging past the end must not return an empty 200 as if content exists.",
      ],
      lists: [
        {
          intro: "UX practice:",
          items: [
            "current page is visible",
            "large tap targets on mobile",
            "filters persist across pages",
            "sort doesn’t reset",
            "path to first and neighbors exists",
          ],
        },
      ],
    },
    {
      title: "SEO setup",
      level: 2,
      paras: [
        "Title and H1 on pagination pages must not be meaningless clones. Choose canonical by catalog strategy and usefulness of deep listings — not a blanket “everything to first” template.",
        "In the sitemap, include listings that should index. Separately control filters, sorts, and parameter duplicates: they often hurt more than numbering itself.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "thousands of nearly empty page=N in the index",
            "duplicates with/without slash and different parameters",
            "200 on nonexistent pages",
            "the same SEO text above the list on every page",
          ],
        },
      ],
      links: [
        {
          label: "Online store categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Pagination vs filters and sorts",
      level: 2,
      paras: [
        "Pagination pages through the same set. Filters and sorts create new selections and easily balloon the index to hundreds of thousands of URLs.",
        "Decide ahead: which combinations to index (strong landings), which to close (noindex / robots / canonical). Otherwise pagination SEO won’t save you from a facet explosion.",
      ],
      lists: [
        {
          intro: "Split in policy:",
          items: [
            "page=N inside a clean category",
            "filter color + size + brand",
            "sort by price or newness",
            "UTM and utility parameters",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "“Show more” and infinite scroll",
      level: 2,
      paras: [
        "Classic numbering is better for a catalog when you need to return to a specific slice. “Show more” cuts clicks, but next-batch URLs must still be available to bots and people.",
        "Infinite scroll fits news feeds, but is worse when people need to return to a position. If you use JavaScript, provide server-rendered output and a no-script path.",
      ],
      lists: [
        {
          intro: "Check UX:",
          items: [
            "current page or position is visible",
            "filters persist",
            "keyboard control exists",
            "after browser Back, list place isn’t lost",
          ],
        },
      ],
    },
    {
      title: "Content on pages 2+",
      level: 2,
      paras: [
        "Category SEO copy usually stays on the first page. Copying it onto page 2, 3, and beyond is pointless and strengthens the duplicate feel.",
        "On deep pages a list, navigation, and clear title (“Page 2” / product range — per store template) are enough. What matters is a unique set of cards and correct links.",
      ],
      lists: [
        {
          intro: "Good practice:",
          items: [
            "unique product/post set per page",
            "don’t duplicate long SEO text",
            "internal links to key categories from page 1",
            "don’t index an empty tail",
          ],
        },
      ],
      tables: [
        {
          caption: "Indexing page=N (simplified)",
          headers: ["Situation", "Common approach"],
          rows: [
            ["Many products, useful listing", "Index deliberately"],
            ["Nearly empty tails", "Don’t index / keep out of sitemap"],
            ["Strong filter landings", "Separate URLs, don’t confuse with page"],
            ["Sort only", "Usually not for the index"],
          ],
        },
      ],
    },
    {
      title: "Audit after launch",
      level: 2,
      paras: [
        "Crawl the section: status codes, canonical, link chain, items per page. Compare desktop and mobile templates.",
        "In Webmaster/GSC watch index and crawl errors. Changing filters or the catalog template can create thousands of URLs — repeat the audit after releases.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "empty pages with 200",
            "different URLs for the same result set",
            "parameter duplicates",
            "content only via JavaScript",
            "page=N explosion in the index report",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Pagination setup is part of technical prep. Rankings on a commercial keyword set grow over the planned months after work starts — typically 2–6 months, not from pagination alone.",
        },
      ],
    },
  ],
  related: [
    "kategorii-internet-magazina",
    "kanonicheskiy-teg",
    "dubli-stranits",
    "screaming-frog",
    "tehnicheskiy-seo-audit",
    "prodvizhenie-internet-magazina",
  ],
};
