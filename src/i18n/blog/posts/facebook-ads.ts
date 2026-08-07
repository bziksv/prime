import type { BlogPost } from "../../../data/blog";

/** EN overlay for facebook-ads — same structure as RU JSON. */
export const facebookAdsEn: BlogPost = {
  slug: "facebook-ads",
  title: "Facebook Ads: how advertising works in the Meta ecosystem",
  date: "2019-02-18",
  category: "Digital marketing",
  cover: "/images/blog/facebook-ads/cover-en.webp",
  excerpt:
    "How Facebook Ads / Meta Ads work: goals, audiences, pixel, and tests. An informational breakdown without “start right now” FOMO and without 2018 reach figures.",
  lead: [
    "Facebook Ads is the historical name for Ads Manager in the Meta ecosystem: ads may show in Facebook, Instagram, and related surfaces (placement set and availability depend on the account, region, and policies).",
    "Channel logic: goals, targeting, pixel, formats, and a test checklist. The article is informational and does not urge you to use Meta platforms. We don’t repeat 2017–2018 MAU/DAU figures or “cheap Instagram reach” myths as forever truth.",
  ],
  faq: [
    {
      q: "Are Facebook Ads and Meta Ads the same?",
      a: "Essentially an evolution of the product name. Meaning: ad account, campaigns, ad sets, ads, and pixel/events.",
    },
    {
      q: "How is this different from Meta retargeting?",
      a: "This piece is the general channel overview. A separate article covers custom audiences and bringing warm segments back.",
    },
    {
      q: "Do I need a website?",
      a: "For performance with purchase/lead — usually yes. Lead forms and messenger flows exist, but you still need to measure attribution and lead quality.",
    },
    {
      q: "Does it replace search ads?",
      a: "No. Search covers demand that already searches; social ads more often create and warm demand. Compare by CPA/ROI, not habit.",
    },
    {
      q: "Is the pixel mandatory?",
      a: "For optimizing on site events and retargeting visitors — yes. Without it the account learns worse and segments empty out.",
    },
  ],
  sections: [
    {
      title: "What jobs the channel covers",
      level: 2,
      paras: [
        "Typical range: awareness, traffic to site/landing, leads, sales, app installs, community engagement. Campaign objective should match what you can actually process.",
        "Format flexibility doesn’t replace offer and landing. “A beginner can launch” ≠ “you get stable ROI without tests”.",
      ],
      lists: [
        {
          intro: "When it’s worth testing the channel:",
          items: [
            "clear offer and creatives",
            "events/pixel or lead form set up",
            "you can measure CPA/ROI",
            "resource for creative iterations",
            "legal platform limits in your jurisdiction accounted for.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
        {
          label: "Ads account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Audiences: interests, look-alike, retargeting",
      level: 2,
      paras: [
        "Cold audiences — interests/behavior/demographics (signal set depends on account availability). Look-alike — expansion from seeds: buyers, leads, engaged users.",
        "Warm audiences — retargeting: site, list, engagement. Split segments and exclude overlaps so one bid and one creative don’t hit everyone at once.",
      ],
      lists: [
        {
          intro: "Basic start test:",
          items: [
            "cold: 1–2 interest / look-alike hypotheses",
            "retarget visitors/cart",
            "exclude converters from chase ads",
            "separate creative sets per funnel stage.",
          ],
        },
      ],
      links: [
        {
          label: "Meta retargeting",
          href: "/en/blog/retargeting-meta/",
        },
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Pixel, events, and optimization",
      level: 2,
      paras: [
        "The pixel/events container sends views, leads, purchases. Without correct events, “optimize for conversions” learns on noise — or doesn’t learn at all.",
        "Install the tag once (site or GTM), verify events, align cookie consent where needed. A duplicate pixel breaks stats.",
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t promise “the system will find conversions by itself” if the event is broken or leads are scarce. Data quality first, then budget.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
      ],
    },
    {
      title: "Creatives and placements",
      level: 2,
      paras: [
        "Creative is the main lever in the attention auction. Test visual + copy + offer bundles; dynamic variants help but don’t replace a strong hypothesis.",
        "Placements (feed, stories, etc.) are better started from account recommendations or a narrow set matching creative format. Old 2018 “Stories vs feed” CPM comparisons aren’t law.",
      ],
      lists: [
        {
          intro: "Creative hygiene:",
          items: [
            "promise matches the landing",
            "readable on mobile",
            "frequency cap on warm audiences",
            "refresh when creatives fatigue",
            "UTM for full-funnel analytics.",
          ],
        },
      ],
    },
    {
      title: "First-test checklist",
      level: 2,
      paras: [
        "The goal isn’t “learn Ads Manager” — it’s comparable numbers: CPL/CPA, lead quality, payback. Test budget must cover learning and several creatives, or conclusions are random.",
        "In parallel keep control in other channels (search, SEO): one source rarely covers the whole funnel.",
      ],
      lists: [
        {
          intro: "Minimum before launch:",
          items: [
            "pixel/events verified",
            "3 audience types with exclusions",
            "several creatives",
            "landing and offer ready",
            "report on CPA/ROI, not CTR alone.",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Full-funnel analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The channel is strong on audience and creative flexibility, weak without events and test discipline. Ignore old “claim the niche before 2020” FOMO.",
        "Measure economics and follow current rules and restrictions — marketing logic doesn’t replace the legal context.",
      ],
    },
  ],
  closing: [
    "If you test ads in the Meta ecosystem — start with the pixel, three audience layers, and several creatives, measure CPA/ROI, and don’t lean on 2018 reach stats.",
  ],
  related: [
    "retargeting-meta",
    "reklama-instagram",
    "reklamnyy-kabinet",
    "tselevaya-auditoriya",
    "utm-metki",
    "skvoznaya-analitika",
  ],
};
