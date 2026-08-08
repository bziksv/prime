import type { BlogPost } from "../../../data/blog";

/** EN overlay for snizhenie-trafika — same structure as RU JSON. */
export const snizhenieTrafikaEn: BlogPost = {
  slug: "snizhenie-trafika",
  title: "Why site traffic drops: how to diagnose it and what to do",
  date: "2021-06-15",
  category: "SEO",
  cover: "/images/blog/snizhenie-trafika/cover-en.webp",
  excerpt:
    "Tell a real organic drop from a broken analytics tag, then check seasonality, technical issues, algorithm updates, and penalties — without panic or “it’ll bounce back tomorrow” promises.",
  lead: [
    "A traffic drop is a signal, not a verdict. First separate an analytics glitch from a real decline. Then narrow the source — Yandex, Google, direct — and dig into the cause.",
    "Here’s a practical check order. Recovery time depends on what’s wrong: technical fixes land faster than recovering from a filter or lost demand.",
  ],
  faq: [
    {
      q: "Where do I start if analytics looks “all red”?",
      a: "Verify the tracking code, bot filters, and period comparison on a single channel. In parallel, check Webmaster / Search Console for crawl issues, exclusions, and security alerts.",
    },
    {
      q: "Is it seasonality or a penalty?",
      a: "Seasonality shows up in year-over-year demand tools (Wordstat and similar). Penalties and filters look like a sharp collapse across the keyword set plus messages or diagnostics in the panels. Don’t mix them up.",
    },
    {
      q: "What if competitors pumped spammy links?",
      a: "Review the link profile in webmaster tools, reject clear spam with the search engine’s tools when needed, and strengthen your own content and natural links.",
    },
    {
      q: "Will deleting half the site fix the drop?",
      a: "Radical cuts without a plan often make the drop worse. Find the cause first, then make targeted fixes.",
    },
    {
      q: "Could this relate to Google’s “suspicious traffic” notices?",
      a: "Sometimes — if quality is being cut or bots are inflating hits. See the separate article on suspicious traffic messages.",
    },
  ],
  sections: [
    {
      title: "First: real decline or broken analytics",
      level: 2,
      paras: [
        "A broken or doubled tag, new goals, an IP filter, or a domain change in the account can fake the picture. Match the code on the site to the account, then compare with Search Console or Yandex Webmaster.",
        "In analytics, split sources and compare with the previous period and the same period last year.",
      ],
      lists: [
        {
          intro: "Mini-check:",
          items: [
            "Metrica / GA code is still on the pages",
            "no stray filter in the reports",
            "which channels actually dropped",
            "whether the trend matches Webmaster / Search Console",
          ],
        },
      ],
    },
    {
      title: "Common causes of a drop",
      level: 2,
      paras: [
        "Seasonal demand, technical failures (hosting, mirrors, speed), algorithm updates, penalties for manipulation, lost rankings to competitors or stale content, and toxic link noise.",
        "Don’t blame a “search engine mood” until you’ve closed the technical and content checks.",
      ],
      lists: [
        {
          intro: "Work through the blocks:",
          items: [
            "site changes right before the drop",
            "demand tools — seasonal or not",
            "availability, 301s, robots.txt, speed",
            "update news plus panel diagnostics",
            "quality and uniqueness of key URLs",
            "sharp spikes in the link profile",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Server logs",
          href: "/en/blog/logi-servera/",
        },
        {
          label: "Suspicious Google traffic",
          href: "/en/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "What to do after you have a diagnosis",
      level: 2,
      paras: [
        "Fix technical issues immediately. Refresh content clusters that slipped. If you’re under a filter, remove the cause and wait for a recrawl — don’t promise “page one tomorrow.” Recovery after penalties or big content work is usually measured in months, not days.",
        "Don’t freeze the roadmap: new materials and extra channels reduce dependence on one traffic source.",
      ],
      notes: [
        {
          title: "Practice tip",
          text: "Log hypothesis → fix → date → metric. That’s how you see what actually moved the needle.",
        },
      ],
      links: [
        {
          label: "Refreshing old content",
          href: "/en/blog/obnovlenie-kontenta/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
  ],
};
