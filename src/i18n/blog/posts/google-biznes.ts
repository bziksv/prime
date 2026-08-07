import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-biznes — same structure as RU JSON. */
export const googleBiznesEn: BlogPost = {
  slug: "google-biznes",
  title: "Business listing on Google Maps: how to add your business",
  date: "2020-12-24",
  category: "SEO",
  cover: "/images/blog/google-biznes/cover-en.webp",
  excerpt:
    "How to appear in Google Maps and the local pack: Google Business Profile, verification, data, photos, and reviews — without outdated “Google My Business 2020” screenshots.",
  lead: [
    "Local Google search often shows a map and business cards next to the regular SERP. To be found for “service + city” and on the map, you need a correct company profile — today Google Business Profile (older UIs were called Google My Business).",
    "Below — launch logic: account, create profile, verify, fill, and maintain. Menu names change — follow Google help and the profile cabinet, not screenshots from old articles.",
  ],
  faq: [
    {
      q: "Are Google My Business and Business Profile the same?",
      a: "In essence yes: evolution of the name and UI for the Maps / local-pack card. Same idea — a managed business profile.",
    },
    {
      q: "Do you need a website?",
      a: "Preferably: a site link builds trust and a path to the lead. Without a site a profile can sometimes be created, but in many niches site + map work stronger together.",
    },
    {
      q: "How is the profile verified?",
      a: "Methods depend on business type and region: postcard, phone, video, in-product request, and others. The current list appears during profile creation.",
    },
    {
      q: "Can one profile cover several addresses?",
      a: "Usually each physical location needs its own profile (or a location group per Google’s rules). Don’t “stitch in” addresses that aren’t yours.",
    },
    {
      q: "Does the profile affect regular site SEO?",
      a: "It’s a separate local layer: map, reviews, NAP. It indirectly helps awareness and traffic; it doesn’t replace site SEO.",
    },
    {
      q: "What is NAP?",
      a: "Name, Address, Phone — consistent name, address, and phone on the site, in the profile, and in directories. Mismatches hurt trust.",
    },
    {
      q: "Do you need reviews?",
      a: "Yes — honest reviews and replies matter in the local pack. Buying ratings breaks the rules and is risky.",
    },
    {
      q: "Yandex directories instead of Google?",
      a: "In some markets you often need both layers for different audiences. They’re different cabinets; one “export” doesn’t replace NAP consistency.",
    },
  ],
  sections: [
    {
      title: "Why a business needs a map listing",
      level: 2,
      paras: [
        "For queries with local intent Google shows a map pack: pins, rating, hours, directions. Without a profile you only compete as websites — and lose people who choose “nearby / on the map”.",
        "The card also helps after the click: call, directions, site visit, messenger — if those actions are enabled and data is current.",
      ],
      lists: [
        {
          intro: "Especially useful for:",
          items: [
            "offline locations (cafés, clinics, services);",
            "travel services with a service area;",
            "B2C with “near me” queries;",
            "chains with several branches (per Google’s rules).",
          ],
        },
      ],
    },
    {
      title: "Account and creating a profile",
      level: 2,
      paras: [
        "You need a Google account — preferably a company one shared with several owners via manager roles, not a personal login of someone who will leave.",
        "Creating a profile: name as on the storefront, category, address or service area, contacts. Don’t stuff keywords into the name (“Best iPhone repair cheap”) — against the rules and can lead to limits.",
      ],
      lists: [
        {
          intro: "Before verification:",
          items: [
            "check whether a listing for your place already exists (claim it);",
            "match NAP with the site;",
            "pick primary and secondary categories honestly;",
            "store access in the company password manager.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Creation UI and menu items update. If the path doesn’t match a 2020 article — start from Maps / “Business Profile” search / Google help.",
        },
      ],
    },
    {
      title: "Verifying the business",
      level: 2,
      paras: [
        "Until the profile is verified, full management and display are limited. Google offers a verification method available for your case — follow the cabinet steps and don’t buy “gray verification” from middlemen.",
        "After verification keep the listing “open” with correct hours: mismatch with reality hits reviews and trust faster than an “imperfect SEO description”.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "don’t ignore verification emails/notifications;",
            "log verification date and owner;",
            "on legal entity/address change, update per the rules — don’t spawn a duplicate listing without need.",
          ],
        },
      ],
    },
    {
      title: "What to fill after verification",
      level: 2,
      paras: [
        "Description without stuffing, services/products, attributes (accessibility, payment), hours, phone, website, action button. Photos: facade, interior, team, work — your own, not stock.",
        "Match the site: same name, address, phone as in the footer and contacts. UTM on the site link — optional, for analytics of map clicks.",
      ],
      lists: [
        {
          intro: "Minimum for a strong listing:",
          items: [
            "NAP without typos;",
            "current hours and holidays;",
            "categories that match reality;",
            "site / messenger / call;",
            "10+ decent photos;",
            "replies to reviews.",
          ],
        },
      ],
      links: [
        {
          label: "Young site and trust",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "Reviews, posts, and maintenance",
      level: 2,
      paras: [
        "Ask real clients for reviews through honest channels. Reply to negatives calmly and factually. Rating fraud leads to filters and losing the listing.",
        "If updates/posts are available in the profile — use them for promos and news without spam. The main thing is fresh data: a move, new hours, or phone change should hit the listing the same day.",
      ],
      lists: [
        {
          intro: "Regularly:",
          items: [
            "monitor new reviews;",
            "check NAP quarterly;",
            "fresh photos every few months;",
            "audit employee access rights.",
          ],
        },
      ],
    },
    {
      title: "Common mistakes and the site link",
      level: 2,
      paras: [
        "Duplicate listings for one address, keywords in the name, wrong category, closed hours while the shop is open, different phones on the site and Maps — classics of local-pack drops.",
        "On the site make a contacts page with the same NAP, a map (if it fits), and organization markup when possible. Local site SEO and the listing reinforce each other — they don’t replace each other.",
      ],
      lists: [
        {
          intro: "Don’t:",
          items: [
            "buy “100 reviews tomorrow”;",
            "create a second listing “for SEO”;",
            "list a coworking address if you aren’t there;",
            "forget to revoke access from former contractors.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "In markets with strong Yandex Maps usage, plan that directory too — audiences differ. NAP consistency across layers beats racing for one platform. Local TOP is still months of work, not a profile checkbox.",
        },
      ],
      links: [
        {
          label: "Promoting an online store (adjacent)",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
  ],
  related: [
    "molodoy-sayt",
    "optimizatsiya-stranitsy",
    "regionalnoe-seo",
    "forma-obratnoy-svyazi",
    "prodvizhenie-internet-magazina",
  ],
};
