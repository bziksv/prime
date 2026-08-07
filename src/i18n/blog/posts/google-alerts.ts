import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-alerts — same structure as RU JSON. */
export const googleAlertsEn: BlogPost = {
  slug: "google-alerts",
  title: "Google Alerts: how to track mentions and topics",
  date: "2019-06-03",
  category: "Internet marketing",
  cover: "/images/blog/google-alerts/cover-en.webp",
  excerpt:
    "What Google Alerts is: email alerts for Google search queries. How to set it up, what brand and content tasks it covers, and where the limits are — without “speed up SEO” promises or dead social networks.",
  lead: [
    "Google Alerts is a free notification service: you set a query, Google emails a digest of new results it found on that topic.",
    "Below — who it’s useful for, how to create an alert, and which business scenarios make sense. It’s Google SERP monitoring, not a full social listening suite and not a site-analytics replacement. UI labels may differ — orient on alerts.google.com and the meaning of settings.",
  ],
  faq: [
    {
      q: "Is Alerts paid?",
      a: "The basic service is free. Limits on alert count and frequency are in current Google Help.",
    },
    {
      q: "Does it catch social posts?",
      a: "Weakly and unpredictably: not everything is indexed. For social, use platform search and dedicated mention tools.",
    },
    {
      q: "Does it replace an SEO audit?",
      a: "No. Alerts helps notice mentions and topic news; it doesn’t fix tech or put you in the TOP.",
    },
    {
      q: "Do you need a Google account?",
      a: "Easier from an account: simpler to edit the alert list. Email still gets confirmation/digests.",
    },
    {
      q: "Why so few emails?",
      a: "Narrow query, rare topic, “best results only” filter, or weak indexing. Broaden the wording or change region/language.",
    },
  ],
  sections: [
    {
      title: "Who needs Google Alerts and why",
      level: 2,
      paras: [
        "The service saves manual “what’s written about us / the niche” searching. Once a day or as results appear you get links — and decide whether to react.",
        "It’s a complement to other tools: Search Console / Webmaster, analytics, review monitoring. Don’t expect Alerts to give dashboards or “100% coverage of every article”.",
      ],
      lists: [
        {
          intro: "Typical tasks:",
          items: [
            "brand and domain mentions;",
            "reviews and write-ups by company name;",
            "niche and competitor news (watch volume);",
            "new materials on a key topic;",
            "watching copycats / URL mentions.",
          ],
        },
      ],
    },
    {
      title: "How to create an alert",
      level: 2,
      paras: [
        "Open Google Alerts, enter a query, preview results, and save the alert. Set frequency (as-it-happens / daily / weekly — options change), sources, language, region, and result type (“best” or a wider stream).",
        "Confirm email if asked. Later you can edit and delete alerts — don’t spawn hundreds of near-identical queries.",
      ],
      lists: [
        {
          intro: "Practical settings:",
          items: [
            "start with 3–7 important queries, not “a thousand keys”;",
            "for brand — exact name and spelling variants;",
            "exclude your site with `-site:` when needed;",
            "language and region for your audience;",
            "frequency for topic volume (noisy topics — digest).",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Queries that are too broad (“marketing”, “SEO”) drown the inbox. Narrow the wording or add brand/niche.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Scenarios for a company",
      level: 2,
      paras: [
        "Brand: queries with company and product name; optionally exclude your domain to catch external mentions. Respond to negatives by platform rules — no fake reviews.",
        "Content and PR: topics you write expert pieces on — an alert surfaces fresh angles. Don’t turn “guest-post sites via Alerts” into mass spam: site quality and placement rules beat speed.",
      ],
      lists: [
        {
          intro: "Example wordings (idea):",
          items: [
            "exact brand name in quotes;",
            "brand + “review” / “overview”;",
            "niche topic + language limit;",
            "`site:example.com` — if you watch someone else’s section;",
            "`-site:your-domain` — external mentions.",
          ],
        },
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Negative review",
          href: "/en/blog/negativnyy-otzyv/",
        },
      ],
    },
    {
      title: "Operators and social",
      level: 2,
      paras: [
        "Familiar Google search tricks work in queries: quotes, `-site:`, sometimes `OR` for spelling variants. Don’t rely on dead domains like Google+ from old guides.",
        "Monitoring VK/Telegram/Instagram via Alerts is unreliable: much content never hits web search. For social, use built-in search and dedicated mention services.",
      ],
      lists: [
        {
          intro: "What Alerts doesn’t replace:",
          items: [
            "real-time social listening;",
            "GA4/Metrika reports;",
            "index checks in Webmaster / Search Console;",
            "full enterprise media monitoring.",
          ],
        },
      ],
      links: [
        {
          label: "Google search operators",
          href: "/en/blog/operatory-poiska/",
        },
      ],
    },
    {
      title: "Limits and list hygiene",
      level: 2,
      paras: [
        "The service has a ceiling on alert count and is sensitive to overly broad queries. We don’t lock 2019 guide numbers (“exactly 1000”) — check current Google limits.",
        "Once a quarter, clean dead alerts, tighten wordings, and turn off what you no longer read. Otherwise important mail drowns in noise.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Google Alerts is a simple radar on Google’s web results. Strong for brand and topic, weak as the only monitoring channel and as a “ranking accelerator”.",
        "Set a narrow query set, confirm email, and react to signals — don’t expect the service to improve positions by itself.",
      ],
    },
  ],
  closing: [
    "Create a few precise alerts for brand and key topics, exclude your site where needed, and keep the list short — that’s how Google Alerts saves time on manual mention hunting.",
  ],
  related: [
    "otzyvy-dlya-prodazh",
    "negativnyy-otzyv",
    "operatory-poiska",
    "kontent-plan",
    "analiz-konkurentov",
    "prodvizhenie-brenda",
  ],
};
