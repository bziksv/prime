import type { BlogPost } from "../../../data/blog";

/** EN overlay for region-sayta — same structure as RU JSON. */
export const regionSaytaEn: BlogPost = {
  slug: "region-sayta",
  title: "How to set a site’s region in Yandex",
  date: "2017-07-04",
  category: "SEO",
  cover: "/images/blog/region-sayta/cover-en.webp",
  excerpt:
    "How Yandex reads a site’s region: on-site signals, Webmaster, and a Business/Maps listing — without Yandex.Catalog or fake addresses.",
  lead: [
    "A site’s region affects where you show up for location-based queries. “Assigning a region” isn’t a magic rankings checkbox—it’s aligning contacts, maps, content, and webmaster settings so they tell one honest story.",
    "What still works: signals from the site itself, Yandex Webmaster, and a business listing. Yandex.Catalog is closed—don’t chase it for regions. Multi-city strategy belongs in the regional SEO guide.",
  ],
  faq: [
    {
      q: "Is setting a region in Webmaster enough?",
      a: "No. You need real contacts, consistent NAP, often a map/business listing, and city content. The panel is one signal.",
    },
    {
      q: "Can a toll-free number make me “nationwide”?",
      a: "A toll-free number alone doesn’t equal ranking in every city. For local demand, address, service area, and landings for real cities matter more.",
    },
    {
      q: "Does Yandex.Catalog still help with regions?",
      a: "No. The Catalog is closed. Don’t buy “YACA registration for regions.”",
    },
    {
      q: "How long until the region applies?",
      a: "From days to a few weeks — depends on data checks and crawl. That isn’t TOP timing: city-core rankings are planned over months.",
    },
    {
      q: "What if I list someone else’s address?",
      a: "Risk of rejection, directory removal, and lost trust. You need real grounds and verifiable data.",
    },
    {
      q: "Do I need to set Google as well?",
      a: "Yes, as a separate track: Search Console / Business Profile. Locality logic is similar; consoles differ.",
    },
    {
      q: "Where can I learn more about multi-city SEO?",
      a: "In the regional SEO article: keywords, landings, maps, and multi-city mistakes.",
    },
  ],
  sections: [
    {
      title: "Why a site needs a region",
      level: 2,
      paras: [
        "For queries with local intent (“service + city,” “nearby”), Yandex weighs where the business operates. If signals are blurry or conflict, you lose ground to sites with aligned address, map, and contacts.",
        "A panel region setting doesn’t replace content and commercial factors. It amplifies honest locality—it isn’t a substitute for an SEO strategy.",
      ],
      lists: [
        {
          intro: "Locality signals:",
          items: [
            "address and phone on the site (NAP);",
            "contacts / branch page;",
            "Yandex Business / Maps listing;",
            "local content and operating terms;",
            "Webmaster settings and data.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Preparing contacts and listings — days to weeks as a guide. Rankings on a regional core are planned for 2–6 months after work starts, with no date guarantee.",
        },
      ],
    },
    {
      title: "Automatic detection",
      level: 2,
      paras: [
        "Even without a manual setting, the bot may infer region from phone codes, addresses on Contacts, city mentions in copy, and other traces. That’s why an “empty” site without an address reads poorly as a local business.",
        "Listing a dozen cities on one page without real presence won’t make you the leader everywhere. Several cities need an honest branch or service-area setup — see regional SEO.",
      ],
      lists: [
        {
          intro: "What helps auto-detection:",
          items: [
            "a single address and hours;",
            "a city or clear contact phone;",
            "directions / a map on the site;",
            "data matching the organization listing.",
          ],
        },
      ],
    },
    {
      title: "Region via Yandex Webmaster",
      level: 2,
      paras: [
        "Confirm site ownership in Yandex Webmaster. In the current UI find settings tied to region / representation (labels change—check help and the site sections in the panel).",
        "Set a region that matches the business and link a page with real contacts. A made-up address raises the risk of rejection. After saving, wait for checks and recrawl — this won’t deliver instant rankings.",
      ],
      lists: [
        {
          intro: "Before you submit:",
          items: [
            "site ownership confirmed;",
            "contacts page open and indexable;",
            "address/phone match the listing;",
            "region no wider than the real service area without grounds.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster — panel overview",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Listing in Yandex Business and Directory",
      level: 2,
      paras: [
        "Local results and the contacts block often rest on an organization listing (Yandex Business / Maps / Directory-era logic). Phone confirmation and address checks make fakes harder than just typing a city in Webmaster.",
        "Tie site, phone, and address in the listing to what’s on the site. After approval, keep hours, photos, and reviews — a dead listing is weaker than a live one.",
      ],
      links: [
        {
          label: "Yandex Directory / business listing",
          href: "/en/blog/yandeks-spravochnik/",
        },
      ],
    },
    {
      title: "Why not Yandex.Catalog",
      level: 2,
      paras: [
        "Older guides listed Yandex.Catalog as a fourth way: paid add and several regions. The service is closed; site intake stopped.",
        "Don’t pay for “regions via YACA.” The current replacement is Webmaster + map listings + honest landings. The shutdown story is separate.",
      ],
      links: [
        {
          label: "Yandex.Catalog shutdown",
          href: "/en/blog/yandeks-katalog/",
        },
      ],
    },
    {
      title: "Checklist: region aligned",
      level: 2,
      paras: [
        "Keep one consistent story: where you actually work, which contacts you show, and what Yandex sees in Webmaster and on the map.",
        "If there are several cities — don’t try to “cover the country” with one contacts paragraph. Split branches or zones across pages and listings.",
      ],
      tables: [
        {
          caption: "Method → role today",
          headers: ["Method", "Role"],
          rows: [
            ["Automation from the site", "Base: NAP, contacts, copy"],
            ["Yandex Webmaster", "Explicit signal + diagnostics"],
            ["Business/Maps listing", "Local results and trust"],
            ["Yandex.Catalog", "Not used (closed)"],
          ],
        },
      ],
      notes: [
        {
          title: "Related guide",
          text: "Region strategy, keywords, and multi-city: /en/blog/regionalnoe-seo/.",
        },
      ],
    },
  ],
  related: [
    "regionalnoe-seo",
    "yandeks-vebmaster",
    "yandeks-spravochnik",
    "yandeks-katalog",
  ],
} as BlogPost;
