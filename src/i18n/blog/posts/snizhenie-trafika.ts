import type { BlogPost } from "../../../data/blog";

/** EN overlay for snizhenie-trafika — same structure as RU JSON. */
export const snizhenieTrafikaEn: BlogPost = {
  slug: "snizhenie-trafika",
  title: "Why site traffic drops: diagnosis and what to do",
  date: "2021-06-15",
  category: "SEO",
  cover: "/images/blog/snizhenie-trafika/cover-en.webp",
  excerpt:
    "How to tell a real organic drop from a broken counter, check seasonality, tech, updates, and penalties — without panic or “it will bounce back tomorrow” promises.",
  lead: [
    "A traffic drop is a signal, not a sentence. First separate an analytics glitch from a real decline, then narrow the source (Yandex / Google / direct) and the cause.",
    "Here’s a practical check order. Recovery time depends on the cause: tech fixes land faster than recovering from a filter or lost demand.",
  ],
  faq: [
    {
      q: "Where should I start if Metrica is “all red”?",
      a: "Verify the counter code, bot filters, and period comparison on one channel. In parallel — Webmaster: crawl, exclusions, security.",
    },
    {
      q: "Is it seasonality or a penalty?",
      a: "Seasonality shows in Wordstat year over year. Penalties/filters — a sharp core collapse plus messages/diagnostics in panels. Don’t mix them up.",
    },
    {
      q: "What if competitors “pumped” links?",
      a: "Check the link profile in Webmaster tools, reject clear spam with search-engine tools if needed, and strengthen your content and natural links.",
    },
    {
      q: "Will deleting half the site help recover traffic?",
      a: "Radical cuts without a plan often deepen the drop. Find the cause first, then make targeted fixes.",
    },
    {
      q: "Is this related to Google’s suspicious traffic notices?",
      a: "Sometimes yes, if quality is cut or bots are spun. See the separate article on suspicious traffic messages.",
    },
  ],
  sections: [
    {
      title: "First: real decline or analytics",
      level: 2,
      paras: [
        "A broken/doubled counter, new goals, an IP filter, or a domain change in the account can fake the picture. Match the site code to the account and compare with Search Console / Webmaster.",
        "In Metrica look at sources separately and compare with the previous period / previous year.",
      ],
      lists: [
        {
          intro: "Mini-check:",
          items: [
            "Metrica/GA code is in place;",
            "no stray report filter;",
            "which channels dropped;",
            "does the trend match Webmaster.",
          ],
        },
      ],
    },
    {
      title: "Common drop causes",
      level: 2,
      paras: [
        "Demand seasonality, tech failures (hosting, mirrors, speed), algorithm updates, penalties for manipulation, lost positions from competitors or stale content, toxic link noise.",
        "Don’t blame a “search engine mood” until tech and content are closed.",
      ],
      lists: [
        {
          intro: "Check by blocks:",
          items: [
            "site changes before the drop;",
            "Wordstat — seasonal or not;",
            "availability, 301s, robots, speed;",
            "update news + panel diagnostics;",
            "quality and uniqueness of key URLs;",
            "sharp link-profile spikes.",
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
      title: "What to do after the diagnosis",
      level: 2,
      paras: [
        "Fix tech immediately. Content — refresh clusters that dropped. For a filter — remove the cause and wait for recrawl, without promising a “TOP tomorrow” date.",
        "Don’t freeze development: new materials and extra channels lower dependence on one source.",
      ],
      lists: [],
      notes: [
        {
          title: "Practice",
          text: "Log hypothesis → fix → date → metric. That’s how you see what worked and what didn’t.",
        },
      ],
      links: [
        {
          label: "Refreshing content",
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
