import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-katalog — same structure as RU JSON. */
export const yandeksKatalogEn: BlogPost = {
  slug: "yandeks-katalog",
  title: "Yandex.Catalog shutdown: what it was and what replaces it",
  date: "2018-03-13",
  category: "SEO",
  cover: "/images/blog/yandeks-katalog/cover-en.webp",
  excerpt:
    "Why Yandex.Catalog closed, what happened to TIC and regions, and where local presence lives now: Webmaster, Business/Maps, and live directories.",
  lead: [
    "Yandex.Catalog (YACA) stopped accepting sites: submissions closed on 20 December 2017, and the service faded from webmaster practice. For many it was a “must-pay” promotion step — tied to hopes for TIC and multi-region presence “through the catalog.”",
    "Nostalgia for YACA matters less than the current setup: regions and site quality in Webmaster, listings in Yandex Business / Maps, and selective live directories. Below: what closed, which myths linger, and what replaces the old registration ritual.",
  ],
  faq: [
    {
      q: "Does Yandex.Catalog still work?",
      a: "As a site-submission platform — no. The historical project is closed; registration like before is unavailable.",
    },
    {
      q: "Will TIC come back?",
      a: "TIC as a public Catalog-era metric effectively left. Other signals matter: site quality, demand, behavior, links and mentions, local listings. For weight, use current Webmaster and analytics metrics — not archive TIC.",
    },
    {
      q: "Where did Catalog regions go?",
      a: "Locality is set via real business, content, contacts, Yandex Business/Directory, and Webmaster tools — not by buying a catalog line.",
    },
    {
      q: "Will paid registration be refunded?",
      a: "Yandex’s stance was that payment sped up application processing, not forever placement. 2018 disputes do not change today’s SEO practice.",
    },
    {
      q: "Do site directories still matter in the 2020s?",
      a: "Mass farms — no. Live maps, industry registries, and local directories — yes, selectively. More in the site-directories piece.",
    },
    {
      q: "Is one Yandex Business listing enough?",
      a: "For local demand it is a base layer, not a substitute for the site and SEO. Often you also need 2GIS and Google Business Profile for different audiences.",
    },
    {
      q: "Can I register in another region with a fake address?",
      a: "No — and enforcement tightened earlier. You need real grounds and consistent NAP.",
    },
  ],
  sections: [
    {
      title: "What Yandex.Catalog was and why it mattered",
      level: 2,
      paras: [
        "Yandex.Catalog was a site directory: application, moderation, description, category. Listing brought visibility in catalog results and felt like a passed-review signal. Commerce often paid for faster processing.",
        "Separately, the Catalog was tied to locality and TIC: owners believed a YACA line was almost required for growth. By 2017 habit outlived real value for search users.",
      ],
      lists: [
        {
          intro: "What acceleration historically paid for:",
          items: [
            "accepting and processing the application",
            "classification",
            "description",
            "publication in the Catalog database",
          ],
        },
      ],
    },
    {
      title: "Why the Catalog closed",
      level: 2,
      paras: [
        "Official logic: falling interest in a catalog as a separate product — search answers “find by topic” better than a rubricator. Applications stopped on 20 December 2017; Yandex then pointed webmasters to current tools.",
        "For the market it removed the “Catalog first, then life” ritual. Anyone whose link and local profile rested only on YACA learned: one closed service must not be the only pillar.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Yandex and Google retire outdated products routinely. SEO strategy should rest on the site, demand, and several live channels — not one branded service.",
        },
      ],
    },
    {
      title: "TIC, money, and webmaster expectations",
      level: 2,
      paras: [
        "After the shutdown news, three pains dominated: where did regions go, what about paid registration, and will TIC die. On money, Yandex explained: you paid for processing, not an eternal shelf. TIC left daily practice — like public PageRank once did at Google.",
        "Chasing archive TIC is pointless. Indexation, useful content, technical quality, local listings, and measurable traffic and leads matter more.",
      ],
    },
    {
      title: "Regions after the Catalog",
      level: 2,
      paras: [
        "Multi-region via the catalog without a real footprint is gone. Today region for search and maps rests on actual address or service area, contact pages, branches, city content, and an organization listing.",
        "Several cities need an honest setup: separate landings or branches with real presence, consistent NAP, directory listings. A fake address for rankings in another city leads to filters and lost trust.",
      ],
      lists: [
        {
          intro: "Where to look instead of YACA:",
          items: [
            "Yandex Webmaster — crawl quality, regional settings per current help",
            "Yandex Business / Maps — organization listing",
            "the site: contacts, directions, local content",
            "when needed — 2GIS and Google Business Profile",
          ],
        },
      ],
    },
    {
      title: "What replaces Catalog registration today",
      level: 2,
      paras: [
        "“People find us nearby and trust us” is a bundle: a solid site plus map/business profile plus selective industry platforms. Mass registration in dead site directories does not replace YACA and often hurts.",
        "A whitelist makes sense: maps, major directories, niche registries with audience. A fuller breakdown is in the directories-and-listings article.",
      ],
      lists: [
        {
          intro: "Minimum for local business:",
          items: [
            "an up-to-date site with NAP",
            "a Yandex Business listing",
            "a 2GIS listing (if geo matters)",
            "Google Business Profile when demand is in Google",
            "an industry directory only if clients search there",
          ],
        },
      ],
      notes: [
        {
          title: "Related canon",
          kind: "tip",
          text: "Selective registration practice: /en/blog/katalogi-saytov/. Yandex listing: /en/blog/yandeks-spravochnik/. Google Maps: /en/blog/google-biznes/.",
        },
      ],
    },
    {
      title: "Practical takeaway for SEO",
      level: 2,
      paras: [
        "Yandex.Catalog is a closed chapter. Do not hunt how to register in YACA again and do not buy services that promise it.",
        "Invest in what you still control: site speed and index, demand-led content, local listings, reviews, analytics. The 2010s catalog ritual is no longer a search entry ticket.",
      ],
      tables: [
        {
          caption: "YACA logic then → now",
          headers: ["Then", "Now"],
          rows: [
            ["Catalog application", "Map listings / Yandex Business"],
            ["TIC as fetish", "Webmaster and business metrics"],
            ["Region from the catalog", "Real address, branches, local content"],
            [
              "Paid application speed-up",
              "Site quality and presence on live platforms",
            ],
          ],
        },
      ],
    },
  ],
  related: [
    "katalogi-saytov",
    "yandeks-spravochnik",
    "google-biznes",
    "yandeks-iks",
  ],
};
