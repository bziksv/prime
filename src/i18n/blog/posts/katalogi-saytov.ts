import type { BlogPost } from "../../../data/blog";

/** EN overlay for katalogi-saytov — same structure as RU JSON. */
export const katalogiSaytovEn: BlogPost = {
  slug: "katalogi-saytov",
  title: "Listing a site in directories: what still works",
  date: "2020-10-08",
  category: "SEO",
  cover: "/images/blog/katalogi-saytov/cover-en.webp",
  excerpt:
    "When directory and listing registration brings traffic and mentions — and when it’s spam; how to fill a profile, which platforms to pick, and what to avoid.",
  lead: [
    "“Register the site in 500 directories” as an SEO tactic died long ago: engines easily tell junk farms from useful listings. What still makes sense is selective registration in live directories, maps, and industry registries — for people, NAP, and rare quality mentions.",
    "Placement still helps for people, NAP consistency, and rare quality mentions — do it yourself carefully, hire help when volume hurts, and don’t poison the backlink profile.",
  ],
  faq: [
    {
      q: "Do directories still affect rankings?",
      a: "Mass spam — no or harm. Live directories and maps can bring traffic, trust, and local signals. Don’t confuse that with buying thousands of “eternal” links.",
    },
    {
      q: "Where should a small business start?",
      a: "Maps and major listings (Google Business / local maps, 2GIS and geo analogs), industry registries, partner directories. Then — as needed.",
    },
    {
      q: "Should NAP data match everywhere?",
      a: "Yes: name, address, phone, site (NAP). Mismatches confuse people and local SEO.",
    },
    {
      q: "Are paid directories required?",
      a: "No. Pay only if the platform brings qualified traffic or is required in the niche. A “1000 directories pack” is almost always junk.",
    },
    {
      q: "Are classifieds the same thing?",
      a: "A related channel: ads can bring traffic and leads, but they’re not a classic SEO directory. Follow platform rules and keep listings current.",
    },
    {
      q: "Does the description need uniqueness?",
      a: "Yes when possible. The same copy-paste on a hundred sites looks unnatural and converts poorly.",
    },
    {
      q: "What anchor should the link use?",
      a: "Brand, URL, or neutral. Don’t pack a commercial keyword into every directory.",
    },
    {
      q: "Can registration be automated?",
      a: "Mass submitters risk bans and junk donors. Manual or semi-manual work on a whitelist is safer.",
    },
  ],
  sections: [
    {
      title: "What registration gives today",
      level: 2,
      paras: [
        "Qualified visits from a platform where people look for a service/company. A consistent profile in map results. A brand mention and sometimes a dofollow/mention without a link. For local business that’s part of presence — not a site or ads replacement.",
        "The historic “link boost from hundreds of directories” looks more like a toxic tail. If the profile is already farm-polluted — clean it and don’t add more.",
      ],
      lists: [
        {
          intro: "Realistic benefits:",
          items: [
            "local leads from maps/directories;",
            "NAP recognition;",
            "rare quality backlinks;",
            "a channel next to the site and socials.",
          ],
        },
      ],
      links: [
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "DIY or a “registration service”",
      level: 2,
      paras: [
        "DIY: quality control, your own copy, knowing the platforms. Slower, but without a spam pack. A contractor fits if they give a whitelist, URL report, and don’t promise “TOP via directories”.",
        "Contractor red flags: ranking guarantees, a thousand platforms in a week, one description template, directories with “eternal links” on an exchange.",
      ],
      lists: [
        {
          intro: "What to demand from a contractor:",
          items: [
            "platform list before payment;",
            "screenshot/URL of profiles;",
            "consistent NAP;",
            "no farms or auto-submit.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Buying “SEO via directories” and getting hundreds of links from drop domains. Cleaning the profile later costs more.",
        },
      ],
    },
    {
      title: "Which platforms still make sense",
      level: 2,
      paras: [
        "Priority: maps and business profiles, industry directories with a live audience, regional listings, partners/associations. Low priority: nameless “top-100000 sites”, satellites, webmaster-only catalogs.",
        "DMOZ and similar “classic” SEO directories are closed or dead — don’t waste time on 2010s guides.",
      ],
      lists: [
        {
          intro: "Platform checklist:",
          items: [
            "has traffic/moderation;",
            "company cards get indexed;",
            "you can set current contacts;",
            "no obvious spam SERP;",
            "niche or geo matches.",
          ],
        },
      ],
    },
    {
      title: "How to fill the listing",
      level: 2,
      paras: [
        "Same legal/storefront name, address, phone, site. Description — short: who you are, for whom, geo, USP. Category — as precise as possible. Photos and hours build trust on maps.",
        "Link to a relevant landing (local/service), not always an empty homepage. UTM optional for analytics; don’t spawn index junk.",
      ],
      lists: [
        {
          intro: "Before submit:",
          items: [
            "NAP = as on the site and legal data;",
            "a unique description paragraph;",
            "correct category;",
            "working phone and messenger;",
            "logo/photos without stock clutter.",
          ],
        },
      ],
    },
    {
      title: "Registration flow and control",
      level: 2,
      paras: [
        "Keep a table: platform → status → listing URL → login → date. Required geo directories first, then industry ones. Quarterly check currency (move, new phone).",
        "Don’t register everywhere in one day for “link velocity”. Quality and consistency beat speed.",
      ],
      lists: [
        {
          intro: "General order:",
          items: [
            "whitelist 10–30 platforms;",
            "NAP template + 2–3 description variants;",
            "register and pass moderation;",
            "check listing indexing;",
            "monitor leads via tags/phones.",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Classifieds and spam caution",
      level: 2,
      paras: [
        "Classifieds and aggregators can bring leads if the ad is alive and the niche fits. That’s a performance channel, not “TIC pumping”. Follow platform rules, refresh ads, don’t clone hundreds of identical posts.",
        "If the backlink profile is already stuffed with directory spam — audit and hygiene first, then selective quality profiles. Planned TOP growth is still months of work — not a directory checkbox.",
      ],
      lists: [
        {
          intro: "What to avoid:",
          items: [
            "auto-submit to thousands of directories;",
            "commercial anchors in bulk;",
            "directories that are mutual link dumps;",
            "“TOP guarantee” promises for registration.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "One profile in a strong directory with reviews beats fifty dead catalogs.",
        },
      ],
      links: [
        {
          label: "SEO for small business",
          href: "/en/blog/seo-malyy-biznes/",
        },
      ],
    },
  ],
  related: [
    "ssylochnyy-profil",
    "seo-malyy-biznes",
    "analiz-konkurentov",
    "prodvizhenie-internet-magazina",
    "lending",
  ],
};
