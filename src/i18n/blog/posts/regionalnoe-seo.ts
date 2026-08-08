import type { BlogPost } from "../../../data/blog";

/** EN overlay for regionalnoe-seo — same structure as RU JSON. */
export const regionalnoeSeoEn: BlogPost = {
  slug: "regionalnoe-seo",
  title: "Regional SEO: how to promote a site in local markets",
  date: "2021-03-18",
  category: "SEO",
  cover: "/images/blog/regionalnoe-seo/cover-en.webp",
  excerpt:
    "How regional SEO differs from nationwide work, how to set region signals in Webmaster and on the site, and how to run two or three cities without confusion.",
  lead: [
    "Regional SEO targets search in specific cities and areas: local queries, maps, contacts, and landings for branches or service zones.",
    "Below: how it differs from nationwide promotion, setup, city pages, maps, and typical mistakes. Local page-one share is planned over months of work — not a region checkbox in a panel.",
  ],
  faq: [
    {
      q: "Is setting a region in Webmaster enough?",
      a: "No. You need content, contacts, commercial factors, and often separate landings. The panel is one signal among many.",
    },
    {
      q: "How do I promote two or three cities?",
      a: "Separate pages (or another agreed scheme), unique copy and NAP — not copy-paste with city-name find/replace.",
    },
    {
      q: "Is Google regional too?",
      a: "Yes — location and local signals matter. Tools and maps differ; the locality + relevance logic is the same.",
    },
    {
      q: "Do I need reviews and map listings?",
      a: "For local business — often critical: maps, directories, consistent NAP, replies to reviews.",
    },
    {
      q: "Can one text cover every city?",
      a: "Poor idea. Reflect real services, cases, addresses, timelines, and delivery terms — don’t only swap the city name.",
    },
    {
      q: "Subdomains (city.site.com) or folders (/city/)?",
      a: "Both exist. Uniqueness, ties to the main site, and avoiding thin templates matter more than a magic URL scheme.",
    },
    {
      q: "What about services with no office (travel or delivery)?",
      a: "State the service area honestly; city pages only where you really work. A fake address hurts more than an honest zone.",
    },
    {
      q: "When should I expect results?",
      a: "Page prep — about a month as a guide. City-core page-one share is planned for 2–6 months after work starts — with no date guarantee.",
    },
  ],
  sections: [
    {
      title: "Region vs nationwide",
      level: 2,
      paras: [
        "A nationwide query is broader and more competitive. A regional one brings a nearby audience, so it often converts to a visit or call — and needs different keywords: “service + city,” districts, metro, delivery across the area.",
        "Locality isn’t a word in the title; it’s a bundle of signals: real presence or service area, a branch page, contacts, maps, reviews, and clear terms for that city.",
      ],
      lists: [
        {
          intro: "What strengthens the region:",
          items: [
            "address and phone on the site",
            "contacts / branch page",
            "local cases and delivery terms",
            "presence in maps and directories",
            "reviews with owner replies",
          ],
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Keywords and commercial factors",
      level: 2,
      paras: [
        "Build a location-based keyword set: not only “service + city,” but districts, “near me,” and local brand wording. Cluster so one landing maps to one main city/service intent — without cannibalization between branches.",
        "For local SERPs, commercial factors often beat one more paragraph: price cues, payment options, guarantees, venue photos, hours, and who takes the order.",
      ],
      lists: [
        {
          intro: "Into the core and onto the page:",
          items: [
            "service + city / district",
            "delivery and lead times by zone",
            "branch differences (if any)",
            "no fake “we serve every city in the country” on one page",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Keyword cannibalization",
          href: "/en/blog/kannibalizatsiya-zaprosov/",
        },
      ],
    },
    {
      title: "How to set region and site",
      level: 2,
      paras: [
        "Set the region in Yandex Webmaster where it applies, and align it with the real business — not “Moscow” if you only serve the region. Build landings, check commercial blocks, and break analytics out by city when needed.",
        "Prep — tech, structure, contacts, copy, and CTAs — usually takes about a month. That’s starting the work, not a promise of instant rankings.",
      ],
      lists: [
        {
          intro: "Setup checklist:",
          items: [
            "NAP identical on site, maps, and directories",
            "Webmaster region matches reality",
            "unique city copy",
            "local snippets without keyword stuffing",
            "goals / calls separable by city",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Prep of regional pages — weeks. City-core page-one share is planned for 2–6 months after promotion starts.",
        },
      ],
    },
    {
      title: "City and branch pages",
      level: 2,
      paras: [
        "A separate page makes sense when the city has a real difference: office, team, delivery zone, assortment, cases, or prices. The user should find more than an auto-replaced place name.",
        "Put NAP in a consistent form, directions, hours, and a clear CTA. Those details should match maps. Don’t create dozens of thin URLs for every village you never visit.",
      ],
      lists: [
        {
          intro: "What belongs on the landing:",
          items: [
            "real contacts",
            "services and terms for the city",
            "local cases or reviews",
            "photo / map",
            "form or clickable phone",
          ],
        },
      ],
      tables: [
        {
          caption: "When a separate page is needed",
          headers: ["Situation", "Decision"],
          rows: [
            ["Office / warehouse in the city", "Separate page + map"],
            ["Regular delivery / on-site visits", "Zone page with terms"],
            [
              "One-off order from a nearby area",
              "Don’t create a URL for the keyword",
            ],
            ["Network of 2–3 branches", "A page each + shared NAP control"],
          ],
        },
      ],
    },
    {
      title: "Maps, directories, and reviews",
      level: 2,
      paras: [
        "In many niches, clicks from the local pack and map cards matter as much as classic organic results. Create and verify profiles; keep hours, photos, and review replies current.",
        "Consistent NAP beats one more directory. Address and phone mismatches between site and map erode trust and hurt local visibility.",
      ],
      lists: [
        {
          intro: "Local essentials:",
          items: [
            "Yandex Maps / Google Business Profile (by audience)",
            "2GIS and niche directories — by vertical",
            "ask for a review after a successful deal",
            "reply to negatives without escalating",
          ],
        },
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "What to avoid",
      level: 2,
      paras: [
        "Avoid fake addresses, doorway “city1…city50” pages, hidden city-list text, and thin templates. Local SERPs reward usefulness — not a simulated office.",
        "Don’t promise page one in every region after a panel toggle. Rankings grow month by month; the planned horizon for a core is 2–6 months after promotion starts.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "checkbox address with no office",
            "copy-paste with city swap",
            "page-one promises in all regions at once",
            "indexing thousands of filter URLs as “districts”",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "Measuring local demand",
      level: 2,
      paras: [
        "Track not only rankings but calls, leads, map directions, and lead quality. Assign goals and tagging per city so demand isn’t one blob of “organic.”",
        "Check SERPs with location and device in mind. Compare clusters and inquiries over time — not one phrase on one day.",
      ],
      lists: [
        {
          intro: "City report metrics:",
          items: [
            "core visibility",
            "landing traffic",
            "leads and calls",
            "page conversion",
            "map-card dynamics",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Yandex Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "google-biznes",
    "otzyvy-dlya-prodazh",
    "samostoyatelnoe-seo",
    "kannibalizatsiya-zaprosov",
    "yandeks-vebmaster",
  ],
};
