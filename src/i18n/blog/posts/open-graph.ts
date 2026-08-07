import type { BlogPost } from "../../../data/blog";

/** EN overlay for open-graph — same structure as RU JSON. */
export const openGraphEn: BlogPost = {
  slug: "open-graph",
  title: "Open Graph: how to style a link from social to your site",
  date: "2020-10-15",
  category: "SEO",
  cover: "/images/blog/open-graph/cover-en.webp",
  excerpt:
    "What Open Graph is, which meta tags set title, description, and image on share, how to check the preview, and typical markup mistakes.",
  lead: [
    "Open Graph controls how a link to your site looks in a preview: title, text, image, object type. Without markup, a network often grabs a random fragment or a tiny image — clicks and trust drop.",
    "Set title, description, and image deliberately, then check the share preview. Treat this as the canonical take on Open Graph among related posts.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Facebook* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is Open Graph an SEO ranking factor?",
      a: "It barely participates directly in search ranking. It’s about CTR and recognition on share — and sometimes in messengers.",
    },
    {
      q: "Where should you put Open Graph tags?",
      a: "In the page `<head>`: `meta property=\"og:…\"`. On a CMS — SEO plugin or template; on static — in the layout.",
    },
    {
      q: "Which Open Graph tags are required?",
      a: "Minimum: `og:title`, `og:type`, `og:image`, `og:url`. Useful to add `og:description` and `og:locale`.",
    },
    {
      q: "How does OG differ from Twitter Card?",
      a: "Same preview idea, different meta names. Many networks read OG; for X/Twitter you sometimes also add card tags.",
    },
    {
      q: "Why doesn’t the social preview update?",
      a: "Social cache. After edits — debugger / preview cache clear for the URL. Confirm you serve current HTML without old CDN cache.",
    },
    {
      q: "What Open Graph image size should you use?",
      a: "Roughly ~1200×630 px, absolute https URL, file reachable without auth. Don’t crop important text at the edges.",
    },
    {
      q: "Do you need Open Graph on every page?",
      a: "On pages people share: articles, products, landings. On utility pages — optional.",
    },
    {
      q: "Does Open Graph replace title and description?",
      a: "No. Title/description are for search and the tab; OG is for share previews. They can share meaning, but they’re different layers.",
    },
  ],
  sections: [
    {
      title: "Why you need Open Graph",
      level: 2,
      paras: [
        "When someone pastes a URL into a post or message, the platform builds a card. OG says which image to take, which title and text to show, and which canonical URL is the object.",
        "The protocol started in the Facebook* ecosystem, but other networks and services adopted the tags. For business it’s control of the first impression of a site link — not “traffic from thin air”.",
      ],
      lists: [
        {
          intro: "What you control:",
          items: [
            "preview title and description",
            "image",
            "object URL",
            "type (article, product, website).",
          ],
        },
      ],
    },
    {
      title: "Base tags and example",
      level: 2,
      paras: [
        "In the page head place meta with `property` and `content`. Set `og:url` to the page’s canonical address. `og:type` for articles is often `article`, for the homepage `website`, for a product `product` (if you support extensions).",
        "Image — absolute URL. Description — 1–2 sentences without stuffing; title readable, not a keyword sheet.",
      ],
      lists: [
        {
          intro: "Minimum set:",
          items: [
            "`og:title` — card headline",
            "`og:description` — short text",
            "`og:image` — preview",
            "`og:url` — page canon",
            "`og:type` — object type",
            "`og:locale` — e.g. `en_US`.",
          ],
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Images and video",
      level: 2,
      paras: [
        "Bad previews often come from a tiny, vertical, or auth-gated image file. Keep a horizontal frame, enough resolution/weight, and a stable URL (not a one-time token).",
        "For video OG allows extra properties (`og:video` and related) — useful if you actually serve a clip, not only a poster. Otherwise a strong `og:image` is enough.",
      ],
      lists: [
        {
          intro: "Image check:",
          items: [
            "opens via a direct link",
            "https without mixed content",
            "logo/face not cropped at edges",
            "one current version at the URL (no CDN surprises).",
          ],
        },
      ],
    },
    {
      title: "How to verify the markup",
      level: 2,
      paras: [
        "View Source / DevTools: are og tags on the right page. Then — official preview debuggers for the platforms you use (where available). Confirm your title/image loaded, not a random fragment.",
        "After changing the image, clear the preview cache. Make sure the server doesn’t serve different HTML to the social bot (cloaking isn’t allowed).",
      ],
      lists: [
        {
          intro: "Verification checklist:",
          items: [
            "tags in head, not body",
            "one sensible set per URL",
            "`og:url` = canon",
            "preview matches the intent",
            "mobile share stays readable.",
          ],
        },
      ],
    },
    {
      title: "Typical mistakes",
      level: 2,
      paras: [
        "Relative path in `og:image`, broken image, one default for every article (“one cover for the whole site”), title from a stuffed meta title, `og:url` pointing home from inner pages.",
        "Conflict with canonical: preview shows one URL, canon another — confusing for people and UTM analytics. Align them.",
      ],
      lists: [
        {
          intro: "Often kills CTR:",
          items: [
            "text cut mid-word",
            "watermark across the frame",
            "clickbait that doesn’t match the page",
            "stale preview from cache.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Fix OG and expect instant updates everywhere. Clear preview cache first, then recheck.",
        },
      ],
    },
    {
      title: "Rollout practice",
      level: 2,
      paras: [
        "In CMS templates set fields: title/description/image for OG separately or inherited from SEO fields. Product cards need their own previews. Add a check to the content release checklist.",
        "OG doesn’t replace content and ads: it makes the jump from social cleaner. Measure post CTR and landing bounce — not “tags present” as a KPI.",
      ],
      lists: [
        {
          intro: "For the week:",
          items: [
            "OG on home and 5 key URLs",
            "preview check",
            "rule for new articles",
            "align with canon and UTM.",
          ],
        },
      ],
      links: [
        {
          label: "Filling a site",
          href: "/en/blog/napolnenie-sayta/",
        },
      ],
    },
  ],
  related: [
    "kanonicheskiy-teg",
    "ishodnyy-kod",
    "napolnenie-sayta",
    "seo-vkontakte",
    "redirekt",
  ],
};
