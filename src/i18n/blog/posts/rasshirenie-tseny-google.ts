import type { BlogPost } from "../../../data/blog";

/** EN overlay for rasshirenie-tseny-google — same structure as RU JSON. */
export const rasshirenieTsenyGoogleEn: BlogPost = {
  slug: "rasshirenie-tseny-google",
  title: "Price extensions in Google Ads",
  date: "2017-05-27",
  category: "Paid search",
  cover: "/images/blog/rasshirenie-tseny-google/cover-en.webp",
  excerpt:
    "Why Google Ads ads show a price block: types (products, services, events, brands), when to enable it, and what to watch — a click on a price is billed, and the UI may have changed since 2017.",
  lead: [
    "Price extensions show the cost of services or products right in the ad: the user sees a guide before the click, and the ad takes more SERP space.",
    "Why it matters, which job types it fits, and what to check when setting up. Names and steps in the account have changed since 2017 — verify current Google Ads Help. A click on a price row usually counts as an ad click.",
  ],
  faq: [
    {
      q: "Are prices in the ad free?",
      a: "Showing the extension itself isn’t a separate fee, but a click on a price/link usually bills like a normal click.",
    },
    {
      q: "When does a price extension make sense?",
      a: "When prices are clear and competitive: a catalog, services with a clear price list, events with tickets. Hidden “price on request” works poorly in this format.",
    },
    {
      q: "Is a price extension required for every campaign?",
      a: "No. It’s one extension next to sitelinks and callouts. Test where price is a deciding click factor.",
    },
    {
      q: "Can I write “from …” in the price?",
      a: "Often yes for categories with a price range — but don’t mislead: ad rules and Ads policies forbid deception.",
    },
    {
      q: "How is this different from Shopping?",
      a: "Shopping pulls a feed. Price extensions are a text add-on to Search (and related) ads. Not a feed replacement.",
    },
    {
      q: "Is the UI still like the 2017 article?",
      a: "Probably not. The logic of “show price in the ad” is alive; buttons and types in the account — check Help.",
    },
    {
      q: "Do I still need other ad extensions?",
      a: "Yes: sitelinks, callouts, phone — together they boost visibility. Don’t rely on prices alone.",
    },
  ],
  sections: [
    {
      title: "Why a price block",
      level: 2,
      paras: [
        "The extension answers “how much does it cost?” before the visit. It filters some non-target clicks and lifts CTR for those who accept the price.",
        "The ad looks larger than neighbors without extensions — but relevance and offer win, not only “real estate.”",
      ],
      links: [
        {
          label: "Google Ads campaign types",
          href: "/en/blog/tipy-kampaniy-google-ads/",
        },
        {
          label: "Paid-search setup mistakes",
          href: "/en/blog/oshibki-nastroyki-konteksta/",
        },
      ],
    },
    {
      title: "Job types",
      level: 2,
      paras: [
        "Product categories — lines with a minimum “from” price: handy for stores with a clear assortment.",
        "Services and service classes — a price for typical jobs if you can name a sum honestly.",
        "Events — name, date, and ticket/participation cost.",
        "Places / travel and brands — destinations or makers with a price guide; pick the type for the business, not “everything at once.”",
      ],
      lists: [
        {
          intro: "Before filling it in:",
          items: [
            "prices are current and lawful",
            "the landing matches the promise",
            "you have capacity to update the price list",
            "you don’t promise what’s out of stock.",
          ],
        },
      ],
    },
    {
      title: "Setup practice",
      level: 2,
      paras: [
        "Add the extension at account/campaign level per account rules and tie it to relevant groups.",
        "Compare CTR and CPA before/after on one cluster. If price scares hot demand — fix the offer and landing first, not only the extension.",
        "Keep prices in sync with the site: mismatch = complaints and wasted clicks.",
      ],
      links: [
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "The 2017 article described a “new” extension. Check current type names and UI steps in Google Ads Help; the point is to show an honest price in the ad.",
  },
  closing: [
    "If price is the main filter in the niche, enable the extension on 1–2 priority campaigns and check CTR/CPA for a couple of weeks — faster than arguing “whether it’s needed at all.”",
  ],
  related: [
    "tipy-kampaniy-google-ads",
    "oshibki-nastroyki-konteksta",
    "sayt-pered-reklamoy",
    "analiz-reklamnoy-kampanii",
    "strategii-google-ads",
    "adaptivnyy-shablon-direkt",
  ],
};
