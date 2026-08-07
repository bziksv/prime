import type { BlogPost } from "../../../data/blog";

/** EN overlay for mobile-first-indeks — same structure as RU JSON. */
export const mobileFirstIndeksEn: BlogPost = {
  slug: "mobile-first-indeks",
  title: "Google Mobile-First Index: what it is and how to check your site",
  date: "2018-09-18",
  category: "SEO",
  cover: "/images/blog/mobile-first-indeks/cover-en.webp",
  excerpt:
    "What Google’s Mobile-First Index means: why the bot leans on the mobile document, why a cut-down m-site hurts, and how to check content parity — without 2018 “transition” panic.",
  lead: [
    "Mobile-First Index is Google’s indexing model where the main reference for understanding a page is the mobile document (what Googlebot Smartphone sees), not the “full” desktop layout.",
    "The shift was announced in 2016–2018; for most sites mobile-first has long been normal. What changed in practice, what to do with responsive vs separate URLs, and how not to confuse indexing with rankings.",
  ],
  faq: [
    {
      q: "Is the desktop version no longer indexed at all?",
      a: "URLs are indexed, but Google builds signals and snippets primarily from the mobile document version. A cut-down mobile harms visibility.",
    },
    {
      q: "Do I still need a separate mobile site?",
      a: "No. Prefer responsive on one URL. Separate m. is legacy with mismatch risks.",
    },
    {
      q: "Is Mobile-First Index the same as Mobile-Friendly?",
      a: "No. Friendly is usability. Mobile-first is which document the bot treats as primary for the index.",
    },
    {
      q: "Does Yandex use a mobile-first index too?",
      a: "Yandex has its own formula with strong mobile weight. Broken smartphone UX is risky in both search engines.",
    },
    {
      q: "When should I expect growth after mobile fixes?",
      a: "UX and conversion can improve quickly. Competitive-core rankings are planned for 2–6 months after systematic work starts — not “TOP next week.”",
    },
  ],
  sections: [
    {
      title: "Why Google moved to mobile-first",
      level: 2,
      paras: [
        "Smartphone search share passed desktop by the mid-2010s. Ranking a “pretty PC site” made little sense if users opened a cut mobile copy without text, markup, and CTAs.",
        "Index idea: evaluate what is actually available from a phone. StatCounter 2016 figures from old posts are historical backdrop, not your current report.",
      ],
      links: [
        {
          label: "Mobile search in SEO",
          href: "/en/blog/mobilnyy-poisk/",
        },
      ],
    },
    {
      title: "What changes for the site",
      level: 2,
      paras: [
        "With one responsive URL it is usually enough that the mobile view delivers the same meaning: text, links, images, structured data. The bot crawls with a smartphone user-agent more often — that is normal.",
        "With separate URLs (m. / dynamic serving) parity is critical: content, title/description in meaning, markup with correct version URLs, crawl access. If mobile is a “short storefront” and desktop has the full catalog, the index loses what isn’t on the phone.",
      ],
      tables: [
        {
          caption: "Site type and risk",
          headers: ["Type", "Mobile-first risk", "What to do"],
          rows: [
            [
              "Adaptive / RWD",
              "Low if content is complete",
              "Check UX, speed, forms",
            ],
            [
              "Separate m.",
              "High with cut content",
              "Align meaning or move to one URL",
            ],
            [
              "Desktop only",
              "High",
              "Build a proper mobile experience before scaling SEO",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "Half-finished mobile beats “no separate version” myths",
          text: "One responsive template is better than a half-empty m-site the bot may treat as the primary document.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Content, markup, and meta",
      level: 2,
      paras: [
        "Texts and key blocks on mobile should match desktop in meaning — not pixel-perfect, but without cutting the offer, specs, and FAQ “to fit.”",
        "Structured data — on the version you serve the bot; URLs in markup — to the matching pages. Title and description — comparable in meaning on both versions if they are split.",
      ],
      lists: [
        {
          intro: "Quick parity check:",
          items: [
            "main text and H1 on smartphone",
            "internal links not only in a desktop menu",
            "images with meaningful alt",
            "JSON-LD / microdata not desktop-only",
            "forms and phone numbers tappable.",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Snippet and markup",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "How to check in Search Console and on device",
      level: 2,
      paras: [
        "In Google Search Console watch indexing reports, URL Inspection (which Googlebot and what’s rendered), mobile usability / page experience — tab names change; the point: does the bot see the full document from a phone.",
        "Also: emulation and real smartphones, Googlebot Smartphone user-agent logs, speed (Core Web Vitals). 2018 emails “site moved to mobile-first” are transition-era archive; today assume mobile is the baseline.",
      ],
      links: [
        {
          label: "Indexing checks",
          href: "/en/blog/proverka-indeksatsii/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Common fears",
      level: 2,
      paras: [
        "“Desktop content will disappear” — no, if it also exists on mobile. “Must rush an m. site” — no, finish adaptive instead. “Hamburgers and accordions banned” — no; what hurts is hidden important content, heavy popups, and broken layout.",
        "Ads and blocks covering first-screen text hurt UX and can hurt page evaluation — that’s usability, not a “menu ban.”",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Mobile-first means: the mobile document is primary for Google. Keep meaning parity and solid smartphone UX.",
        "Don’t build strategy on 2018 news about a “multi-year transition” — check the site now and strengthen what phone users see.",
      ],
    },
  ],
  closing: [
    "Open key URLs in smartphone emulation and Search Console inspection: if meaning, links, and markup are there — you’re in mobile-first logic; if mobile is “lightened” — align content first, then expect ranking gains.",
  ],
  related: [
    "mobilnyy-poisk",
    "adaptivnyy-sayt",
    "proverka-indeksatsii",
    "tehnicheskiy-seo-audit",
    "snippet",
    "seo-yandex-google",
  ],
};
