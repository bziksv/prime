import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-otzyvy-klientov — same structure as RU JSON. */
export const googleOtzyvyKlientovEn: BlogPost = {
  slug: "google-otzyvy-klientov",
  title: "Google Customer Reviews: how the program works for stores",
  date: "2019-08-09",
  category: "Internet marketing",
  cover: "/images/blog/google-otzyvy-klientov/cover-en.webp",
  excerpt:
    "What Google Customer Reviews is: a post-purchase survey, seller rating in ads, and product reviews. How to connect via Merchant Center and what to avoid — without outdated thresholds and CTR guarantees.",
  lead: [
    "Google Customer Reviews is a program for online stores: after purchase the buyer is offered a survey, reviews accumulate and can affect seller/product ratings in the Google Shopping ecosystem and related surfaces.",
    "This is not the same as reviews on a Google Business Profile Maps card. Below — program logic and a basic connection scheme. Display thresholds, cabinet buttons, and country availability change — check current Merchant Center help.",
  ],
  faq: [
    {
      q: "Are these Google Maps reviews?",
      a: "No. Maps/Business Profile is a local card. Customer Reviews are post-order surveys in the store and ratings in Google’s shopping contour.",
    },
    {
      q: "Do you need Merchant Center?",
      a: "Usually yes: participation and the survey module are tied to the seller cabinet. You can’t “turn it on with a site button” without it.",
    },
    {
      q: "Does it guarantee higher ad CTR?",
      a: "No guarantee. A rating can help trust in ads when display conditions are met. We don’t spread old “+10% CTR” figures.",
    },
    {
      q: "Can you fake reviews?",
      a: "No. It breaks Google’s rules and hits the account. Collect only real consent and answers.",
    },
    {
      q: "Why GTIN in the survey?",
      a: "To link a review to a specific product and match catalogs across sellers. Without correct IDs, product ratings won’t build.",
    },
  ],
  sections: [
    {
      title: "How the post-purchase survey works",
      level: 2,
      paras: [
        "The buyer places an order → on the thank-you page they’re offered survey consent → if they agree, Google may email a questionnaire → some people answer, some ignore. The funnel narrows at each step — that’s normal.",
        "Reviews accumulate about the seller and, with correct product passing, about products. Rating display in ads depends on volume, quality, and country rules — verify fixed “exactly 100 reviews” from old guides in the help.",
      ],
      lists: [
        {
          intro: "How it differs from other reviews:",
          items: [
            "tied to a purchase fact;",
            "Merchant / Shopping contour;",
            "doesn’t replace Maps reviews;",
            "doesn’t replace collection on your own site.",
          ],
        },
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Connection: meaning of the steps",
      level: 2,
      paras: [
        "In Merchant Center you enable Customer Reviews, accept terms, place the survey module/code on the successful-order page, and pass required order parameters (and products with GTIN if you need product ratings).",
        "Survey language, opt-in style, and product list are set in code/CMS integration. We don’t copy exact 2019 menu names — the guide is Google help and the cabinet wizard.",
      ],
      lists: [
        {
          intro: "Before launch check:",
          items: [
            "the store meets program guidelines;",
            "thank-you page is stable and has the code;",
            "email/order pass correctly;",
            "GTINs in the catalog are valid;",
            "no “storefront site — purchase on another domain” scheme if rules forbid it.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t hang a “seller rating” badge before display conditions are met: an empty/“unavailable” badge is worse than no badge. Check current thresholds in the help.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Seller rating, products, and common mistakes",
      level: 2,
      paras: [
        "A seller rating can appear in ads after enough reviews and a minimum score — update threshold figures from Google. Product rating builds on reviews with product IDs.",
        "Common mistakes: code not on every thank-you, duplicate orders, wrong GTINs, expecting instant stars, confusing with Google Maps reviews, trying to push only five-star answers against the rules.",
      ],
      lists: [
        {
          intro: "A working store review stack:",
          items: [
            "Customer Reviews — if you join Shopping;",
            "maps/local — separately;",
            "your site — for people who already bought;",
            "replies to negatives — by process, without faking.",
          ],
        },
      ],
      links: [
        {
          label: "Negative review",
          href: "/en/blog/negativnyy-otzyv/",
        },
      ],
    },
  ],
  closing: [
    "Google Customer Reviews is a trust tool for stores in Google’s ecosystem — not a universal “CTR button”. Connect the survey correctly, follow guidelines, and don’t confuse the program with Maps reviews.",
  ],
  related: [
    "otzyvy-dlya-prodazh",
    "google-biznes",
    "negativnyy-otzyv",
    "kartochka-tovara",
    "google-analytics",
    "yml-fayl",
  ],
};
