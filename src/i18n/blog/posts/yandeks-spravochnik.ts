import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-spravochnik — same structure as RU JSON. */
export const yandeksSpravochnikEn: BlogPost = {
  slug: "yandeks-spravochnik",
  title: "Yandex Business Directory: the organization card and why business needs it",
  date: "2019-08-27",
  category: "SEO",
  cover: "/images/blog/yandeks-spravochnik/cover-en.webp",
  excerpt:
    "What an organization card is in the Yandex ecosystem (Directory / Organizations / Yandex Business): why you need it, how to verify ownership, what to fill in, and how to handle reviews — without outdated dashboard screenshots.",
  lead: [
    "Yandex.Directory is the historic name for the organization database shown in search, Maps, and related services. Card management today often lives in Yandex Business or Organizations: menu labels change, but the point stays the same — a verified company profile.",
    "We don’t copy 2019 click-by-click steps — check current Yandex Help — and we don’t treat review inflation as a strategy. Why the card matters, how to create it, and what to keep current.",
  ],
  faq: [
    {
      q: "Are Directory and Yandex Business the same?",
      a: "Product and dashboard evolution. For the owner what matters: an organization card exists, rights are verified, data is current. The menu section name is secondary.",
    },
    {
      q: "Do I need a website for the card?",
      a: "Preferably: a link strengthens the path to a lead. Without a site the card can work as a calling card, but for many niches site plus maps work stronger together.",
    },
    {
      q: "How is it different from Google Business Profile?",
      a: "Similar job — local SERP and maps, different ecosystems. Local business in Russia often needs both cards with consistent NAP.",
    },
    {
      q: "Who can edit the card?",
      a: "The owner after verifying rights. Users can suggest edits — monitor them so address or phone don’t drift.",
    },
    {
      q: "Does the card affect site SEO?",
      a: "It’s a local layer: maps, reviews, NAP. Indirectly helps recognition; it doesn’t replace site SEO. Core rankings take planned months of work (typically 2–6 months after launch prep) — adding a card is not a TOP shortcut.",
    },
  ],
  sections: [
    {
      title: "Why business needs a Yandex card",
      level: 2,
      paras: [
        "On service-plus-city queries and in Maps, users see address, phone, hours, route, photos, and reviews — often before they open the site.",
        "For an offline location it’s a short path to a call and visit. For online — trust and consistent contacts. The card doesn’t cancel the site; it complements local search.",
      ],
      lists: [
        {
          intro: "What a filled profile gives:",
          items: [
            "visibility in Maps and local results;",
            "route and opening hours;",
            "photos and description;",
            "reviews and owner replies;",
            "link to the site and messengers (where available).",
          ],
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
      ],
    },
    {
      title: "How to create and verify the organization",
      level: 2,
      paras: [
        "In the current Yandex dashboard you create or find the organization, fill address, category, phone, site, hours. If the card already exists in the database — verify owner rights the way the service offers.",
        "After moderation, edit the profile: names as on the sign, exact address with landmarks, exterior and interior photos, features (payment, accessibility), details per service rules.",
      ],
      lists: [
        {
          intro: "NAP and data:",
          items: [
            "name matches the sign and site;",
            "address and phone match everywhere;",
            "category matches real activity;",
            "hours are current, including holidays;",
            "photos are yours — not stock.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t list someone else’s address to look good in results. NAP mismatches and a fake location hurt trust and can lead to rejections.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Posts, prices, reviews",
      level: 2,
      paras: [
        "Profiles often support posts (promos, news), price lists or products, or a menu — the set depends on category and current dashboard features. Fill what actually helps clients choose you.",
        "Reviews: reply calmly and on substance, including negatives. Fake reviews and inflated ratings risk sanctions and reputation damage.",
        "Impressions and clicks stats are in the dashboard; deep query analytics may be limited — for the site also use your analytics and Search Console or webmaster tools.",
      ],
      lists: [
        {
          intro: "Ongoing upkeep:",
          items: [
            "check hours and phone;",
            "new photos each season or after renovation;",
            "replies to reviews;",
            "current promos in posts;",
            "monitor third-party edits to the card.",
          ],
        },
      ],
      links: [
        {
          label: "Negative review",
          href: "/en/blog/negativnyy-otzyv/",
        },
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
  ],
  closing: [
    "An organization card in Yandex is a required local-presence layer next to the site. Verify rights, align NAP, fill photos and hours, reply to reviews — and check the UI against the current Yandex Business dashboard, not old guide screenshots.",
  ],
  related: [
    "google-biznes",
    "regionalnoe-seo",
    "negativnyy-otzyv",
    "otzyvy-dlya-prodazh",
    "seo-malyy-biznes",
    "kommercheskie-faktory",
  ],
};
