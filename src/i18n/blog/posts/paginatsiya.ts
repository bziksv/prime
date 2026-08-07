import type { BlogPost } from "../../../data/blog";

/** EN overlay for paginatsiya — same structure as RU JSON. */
export const paginatsiyaEn: BlogPost = {
  slug: "paginatsiya",
  title: "Website pagination: how to build it without hurting SEO",
  date: "2021-03-30",
  category: "SEO",
  cover: "/images/blog/paginatsiya/cover-en.webp",
  excerpt:
    "What catalog and blog pagination is, numbering schemes, and how to set indexing so pages “2, 3, 4…” don’t spawn duplicates.",
  lead: [
    "Pagination splits a long list into pages: catalog, blog, search results. Handy for people, but without rules you easily get thin duplicates in the index.",
    "Below — why it exists, how to build it, SEO settings, filters, and audit. Exact attributes like rel prev/next are no longer universal — lean on canonical and page usefulness.",
  ],
  faq: [
    {
      q: "Do you need pagination instead of “show more”?",
      a: "Both are fine. Infinite scroll is convenient but worse for sharing deep URLs. Classic ?page=2 is easier to control.",
    },
    {
      q: "Should page=2,3… be indexed?",
      a: "If there’s unique useful content/products — yes, deliberately. If they’re almost empty copies — close or canonicalize with intent.",
    },
    {
      q: "Does rel=prev/next help?",
      a: "Google long ago stopped treating them as a hard signal. Canonical, structure, and quality matter more.",
    },
    {
      q: "What about filters and sorts?",
      a: "Don’t spawn indexable combinations without need — those are facets, not pagination. Separate parameter policy.",
    },
    {
      q: "How many products per page?",
      a: "Balance UX and HTML weight: usually dozens of cards, not hundreds of heavy blocks at once.",
    },
    {
      q: "Always canonicalize to page 1?",
      a: "Not always. Depends on listing uniqueness. Don’t hide needed cards with blind canonicalization of everything to page=1.",
    },
    {
      q: "Should page=100 return 200?",
      a: "If the page doesn’t exist — better 404 (or a correct “end of list”), not an empty 200.",
    },
    {
      q: "Do all pages belong in the sitemap?",
      a: "Not required. Include listings that should be indexed; a long page=N tail is often extra.",
    },
  ],
  sections: [
    {
      title: "Why pagination exists",
      level: 2,
      paras: [
        "Pagination speeds load, simplifies navigation of large lists, and gives stable URLs for return and linking. It’s needed where people compare many similar items.",
        "Numbered pages are clear to bots and available without JavaScript. A “Show more” button can complement them, but mustn’t hide content behind script only.",
      ],
      lists: [
        {
          intro: "Where it shows up:",
          items: [
            "online store catalogs;",
            "blog and news feeds;",
            "on-site search;",
            "archives and tags.",
          ],
        },
      ],
    },
    {
      title: "How to build it on a site",
      level: 2,
      paras: [
        "Server or frontend returns a batch of items and navigation: numbers, next/back. Make URLs predictable — `/catalog/page/2/` or `?page=2` — and consistent across the section.",
        "Each existing page — correct status and links to neighbors. Going past the list mustn’t return an empty 200 “as if content exists.”",
      ],
      lists: [
        {
          intro: "UX practice:",
          items: [
            "current page is visible;",
            "large tap targets on mobile;",
            "filters persist across pages;",
            "sort doesn’t reset;",
            "path to first and neighbors exists.",
          ],
        },
      ],
    },
    {
      title: "SEO setup",
      level: 2,
      paras: [
        "Title and H1 on pagination pages mustn’t be meaningless clones. Choose canonical by catalog strategy and usefulness of deep listings — not a “everything to first” template.",
        "In the sitemap — listings that should index. Separately control filters, sorts, and parameter duplicates: they often hurt more than numbering itself.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "thousands of nearly empty page=N in the index;",
            "duplicates with/without slash and different parameters;",
            "200 on nonexistent pages;",
            "the same SEO text “above the list” on every page.",
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
          href: "/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Pagination vs filters and sorts",
      level: 2,
      paras: [
        "Pagination pages through the same set. Filters and sorts create new selections and easily balloon the index to hundreds of thousands of URLs.",
        "Decide ahead: which combinations to index (strong landings), which to close (noindex / robots / canonical). Otherwise “pagination SEO” won’t save you from facet explosion.",
      ],
      lists: [
        {
          intro: "Split in policy:",
          items: [
            "page=N inside a clean category;",
            "filter “color+size+brand”;",
            "sort by price/newness;",
            "UTM and utility parameters.",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "“Show more” and infinite scroll",
      level: 2,
      paras: [
        "Classic numbering is better for a catalog when you need to return to a specific slice. “Show more” cuts clicks, but next-batch URLs must still be available to bots and people.",
        "Infinite scroll fits news, but is worse for returning to a position. If you use JS — provide server output and a no-script path.",
      ],
      lists: [
        {
          intro: "Check UX:",
          items: [
            "current page or position is visible;",
            "filters persist;",
            "keyboard control exists;",
            "after browser Back, list place isn’t lost.",
          ],
        },
      ],
    },
    {
      title: "Content on pages 2+",
      level: 2,
      paras: [
        "Category SEO copy usually stays on page one. Copying it to page=2,3… is pointless and strengthens the duplicate feel.",
        "On deep pages a list, navigation, and clear title (“Page 2” / product range — per store template) are enough. What matters is a unique card set and correct links.",
      ],
      lists: [
        {
          intro: "Good practice:",
          items: [
            "unique product/post set per page;",
            "don’t duplicate long SEO text;",
            "internal links to key categories from page 1;",
            "don’t index an empty tail.",
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
            "empty pages with 200;",
            "different URLs for the same result set;",
            "parameter duplicates;",
            "content only via JS;",
            "page=N explosion in the index report.",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/blog/screaming-frog/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Pagination setup is part of technical prep. Positions across a commercial set grow over planned months after work starts — not from numbering alone.",
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
