import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-merchant-center — same structure as RU JSON. */
export const googleMerchantCenterEn: BlogPost = {
  slug: "google-merchant-center",
  title: "Google Merchant Center: how to connect a store to Shopping ads",
  date: "2018-09-26",
  category: "Contextual advertising",
  cover: "/images/blog/google-merchant-center/cover-en.webp",
  excerpt:
    "How to set up an online store in Google Merchant Center: feed, site requirements, Google Ads link, and Shopping campaigns — without outdated AdWords/AdSense clicks and “always cheaper than any channel” promises.",
  lead: [
    "Google Merchant Center (GMC) is the product-data cabinet for Google Shopping and related ad formats. You upload a feed (XML/API), verify the site, and keep product cards current.",
    "Below — what you need to start, store requirements, the Google Ads link, and post-launch care. Shopping/Performance Max and cabinet availability by country change — check current Google Help. “Always cheaper than search” is a myth: CPC depends on niche and feed quality.",
  ],
  faq: [
    {
      q: "Are Merchant Center and Google Ads the same?",
      a: "No. GMC holds products and policies; Google Ads runs campaigns and bids. You usually link both accounts.",
    },
    {
      q: "Do you need a real online store?",
      a: "Yes: online purchase/order, policies, contacts, HTTPS. A “leave a request” landing without a catalog often fails Shopping moderation.",
    },
    {
      q: "What is a feed?",
      a: "A file or stream of products: id, title, description, link, image, price, availability, etc. Feed errors are the main rejection cause.",
    },
    {
      q: "Are Customer Reviews the same thing?",
      a: "No. Customer reviews are a separate program on top of Merchant. See the Google Customer Reviews article.",
    },
    {
      q: "Can you advertise any products?",
      a: "No. There are banned and restricted categories (finance, some services, tickets, etc. — list in Help). Check before upload.",
    },
  ],
  sections: [
    {
      title: "Why a store needs Merchant Center",
      level: 2,
      paras: [
        "Shopping ads show photo, price, and title right in results and on shopping surfaces. Users see the offer before the click — higher chance of a qualified visit if price and stock are honest.",
        "GMC isn’t “ads by itself”: without a linked Google Ads campaign (Shopping / Performance Max and current types) products may sit in the catalog without paid traffic. Organic shopping surfaces, where available, also depend on data quality.",
      ],
      lists: [
        {
          intro: "Start minimum:",
          items: [
            "site with cart / online order;",
            "product feed (XML, Google Sheets, API — what’s supported);",
            "Merchant Center account;",
            "Google Ads account linked to GMC;",
            "compliance with Shopping ad policies.",
          ],
        },
      ],
      links: [
        {
          label: "Google Customer Reviews",
          href: "/en/blog/google-otzyvy-klientov/",
        },
        {
          label: "Google Ads strategies",
          href: "/en/blog/strategii-google-ads/",
        },
      ],
    },
    {
      title: "Site requirements",
      level: 2,
      paras: [
        "Shopping moderation is stricter than a regular text ad. The site needs truthful contacts, clear payment and returns, a working path to purchase, valid HTTPS.",
        "Price, availability, and description on the landing must match the feed. Mismatch is a common reason products and accounts get disapproved.",
      ],
      lists: [
        {
          intro: "Checklist before upload:",
          items: [
            "phone and email visible;",
            "return and shipping policy;",
            "payment methods without thank-you surprises;",
            "checkout works without critical errors;",
            "product cards priced = feed price.",
          ],
        },
      ],
      notes: [
        {
          title: "On restrictions",
          text: "Some topics (tickets, real estate, certain financial and digital services, etc.) are limited or banned for Shopping. Don’t copy a 2018 list — open current Google Help on restricted products.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Product card",
          href: "/en/blog/kartochka-tovara/",
        },
        {
          label: "Online store mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
      ],
    },
    {
      title: "Creating the cabinet and verifying the site",
      level: 2,
      paras: [
        "In Merchant Center you create the store business profile: name, address, contacts, logo. Site ownership is verified via Help methods (often Search Console / tag / file — list in the wizard).",
        "The feed must match the spec: required attributes, encoding, regular updates. After upload, read the diagnostics report: disapproved, warnings, missing GTIN/brand where required.",
      ],
      lists: [
        {
          intro: "Typical order:",
          items: [
            "create GMC and fill store data;",
            "verify the site;",
            "connect the feed source;",
            "fix diagnostics errors;",
            "link Google Ads;",
            "launch a Shopping / Performance Max campaign.",
          ],
        },
      ],
    },
    {
      title: "Google Ads link and campaigns",
      level: 2,
      paras: [
        "A GMC ↔ Google Ads link is needed so campaigns pull products from the catalog. Confirm the link request in both cabinets. Old guides said “AdWords” and sometimes mixed it with AdSense — Shopping needs Google Ads, not a publisher cabinet.",
        "Campaign types evolved: classic Shopping, Performance Max with a feed, etc. Parameters, groups, and bids are set in Ads; differentiate structure and bids by margin and SKU priority — not one bid “for everything”.",
      ],
      links: [
        {
          label: "Responsive Display Ads",
          href: "/en/blog/adaptivnye-mediynye-obyavleniya/",
        },
        {
          label: "Google Analytics setup",
          href: "/en/blog/google-analytics-nastroyka/",
        },
      ],
    },
    {
      title: "After launch: feed and performance",
      level: 2,
      paras: [
        "Launch isn’t the finish. Update prices and stock, watch disapprovals, seasonal attributes, and image quality. “Dead” products in the feed burn budget and hurt account trust.",
        "Measure conversions: Google Ads linked to analytics (GA4), goals/purchases, ROAS by category. Compare not “CPC vs the whole internet,” but Shopping’s contribution to orders for your assortment.",
      ],
      lists: [
        {
          intro: "Weekly minimum:",
          items: [
            "feed errors and warnings;",
            "top spend without conversions;",
            "price/availability mismatches;",
            "new SKUs in the feed before ads.",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Merchant Center is the source of truth about products for Google. Feed and site quality beat a “fast launch at any cost”.",
        "The Google Ads link, current campaign types, and regular catalog cleanup keep Shopping alive; don’t blindly repeat outdated AdWords screenshots from 2018 guides.",
      ],
    },
  ],
  closing: [
    "Prep the site and feed for Google policies, verify the domain in Merchant Center, link Google Ads, and launch only after clean diagnostics — then keep prices and stock in sync with the storefront.",
  ],
  related: [
    "google-otzyvy-klientov",
    "strategii-google-ads",
    "kartochka-tovara",
    "oshibki-internet-magazina",
    "google-analytics-nastroyka",
    "adaptivnye-mediynye-obyavleniya",
  ],
};
