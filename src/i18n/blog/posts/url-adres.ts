import type { BlogPost } from "../../../data/blog";

/** EN overlay for url-adres — same structure as RU JSON. */
export const urlAdresEn: BlogPost = {
  slug: "url-adres",
  title: "Website URL: structure and SEO impact",
  date: "2021-08-13",
  category: "SEO",
  cover: "/images/blog/url-adres/cover-en.webp",
  excerpt:
    "What a URL is, which parts make up a page address, how to write readable slugs, and how much the path really affects SEO — without the myth “keyword in URL = TOP.”",
  lead: [
    "A URL (Uniform Resource Locator) is a resource address on the web: a page, image, or file. In the address bar the browser shows scheme, host, and path; people and robots use them to see where they landed.",
    "Below — URL anatomy, how to write clear addresses, and what SEO actually gains. A readable path helps click and navigation, but it doesn’t replace content, site structure, and tech.",
  ],
  faq: [
    {
      q: "How is a URL different from a domain?",
      a: "A domain is the host name (`example.com`). A URL is the full page address: protocol + host + path + sometimes params (`https://example.com/services/seo/`). See also the top-level domain article.",
    },
    {
      q: "What is a human-readable URL (ЧПУ)?",
      a: "A slug people can read: words instead of `?id=123`. Easier to read in a snippet and share the link.",
    },
    {
      q: "Do you need keywords in the URL?",
      a: "A short meaningful path helps. Stuffing the URL with keywords hurts UX and can look manipulative. Exact-match in domain/path isn’t a cheat boost anymore.",
    },
    {
      q: "Is HTTPS required?",
      a: "Yes for a normal site: trust, cookies, browser and search requirements. Plain HTTP is outdated and risky.",
    },
    {
      q: "Does a URL alone get you to TOP?",
      a: "No. It’s one technical/UX signal. Site prep and ranking growth are different timelines — see the prep vs TOP rule.",
    },
  ],
  sections: [
    {
      title: "What a URL is and why it matters",
      level: 2,
      paras: [
        "A URL uniquely points to a resource. Like a library call number: an exact code finds the book faster. The browser requests the address; the server returns a document or file.",
        "The address shows in the browser bar, search snippets, email, and messengers. People copy it from the page (right-click → “Copy link”) and from media.",
      ],
      lists: [
        {
          intro: "Where URLs appear:",
          items: [
            "site pages;",
            "images, PDFs, video;",
            "API and utility endpoints;",
            "redirects and mirrors (www / non-www).",
          ],
        },
      ],
      links: [
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
        {
          label: "Top-level domain",
          href: "/en/blog/domen-pervogo-urovnya/",
        },
      ],
    },
    {
      title: "URL structure",
      level: 2,
      paras: [
        "A typical address: `https://www.example.com:443/catalog/product/?utm_source=ads#reviews`. Not every part is required; port and fragment are often hidden.",
      ],
      lists: [
        {
          intro: "Main parts:",
          items: [
            "scheme (protocol): `https://` — secure connection; `http://` is outdated for sites;",
            "host (domain): `example.com` or `www.example.com`;",
            "port: usually 443 for HTTPS, not written in the URL;",
            "path: `/catalog/product/` — sections and page;",
            "query params: `?utm_…`, filters, sessions;",
            "fragment: `#reviews` — on-page anchor (often not sent to the server).",
          ],
        },
      ],
      notes: [
        {
          title: "Common confusion",
          text: "“Auth” in old URL schemes (user:pass@host) is almost unused on the web and unsafe. Login to an account is a separate page/form — not part of a “pretty” public address.",
        },
      ],
      links: [
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "How to write a clear address",
      level: 2,
      paras: [
        "People remember short readable paths. Random IDs and long queries without need hurt sharing and the snippet.",
      ],
      lists: [
        {
          intro: "Practical rules:",
          items: [
            "Latin or a clean translit scheme, no mixed case chaos;",
            "hyphens instead of spaces and underscores;",
            "short path: section → page, without extra nesting;",
            "page meaning in the path (`/services/seo/`), not a keyword string;",
            "one canonical URL per document (merge www/HTTPS via redirect);",
            "don’t spawn index duplicates from filters and UTM.",
          ],
        },
      ],
      tables: [
        {
          caption: "Examples",
          headers: ["Worse", "Better"],
          rows: [
            ["`/page.php?id=8841`", "`/blog/url-adres/`"],
            ["`/SEO_SERVICES_CHEAP`", "`/services/seo/`"],
            ["`/a/b/c/d/e/f/g/`", "`/catalog/category/product/`"],
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/blog/seo-struktura-sayta/",
        },
        {
          label: "Redirect",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "How URL affects SEO",
      level: 2,
      paras: [
        "Search engines read the path as a weak topic and usability signal. Content, internal links, technical access, and behavior matter more.",
        "A keyword in the URL or domain doesn’t guarantee a ranking. Zone (`.ru` / `.com`) and geo are separate signals — see the TLD article.",
        "A readable URL raises SERP CTR and trust when shared — that helps indirectly if the page truly answers the query.",
      ],
      lists: [
        {
          intro: "What to check technically:",
          items: [
            "primary mirror: HTTPS + chosen www;",
            "human-readable URLs enabled in the CMS;",
            "canonical and 301 without chains;",
            "filter params don’t inflate the index;",
            "URL changes only with a redirect from the old address.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Cleaning up URLs is part of site prep. Getting a commercial core into TOP is months of work after promotion starts — not the result of one address edit.",
        },
      ],
    },
  ],
};
