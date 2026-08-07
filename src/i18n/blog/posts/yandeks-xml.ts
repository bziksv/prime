import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-xml — same structure as RU JSON. */
export const yandeksXmlEn: BlogPost = {
  slug: "yandeks-xml",
  title: "Yandex.XML and Search API: what it was and what to use now",
  date: "2020-09-15",
  category: "SEO",
  cover: "/images/blog/yandeks-xml/cover-en.webp",
  excerpt:
    "What Yandex.XML was, why the service shut down, what Yandex Search API replaces it with, which jobs official quotas solve, and what not to do with SERP scrapers.",
  lead: [
    "Yandex.XML was a historic free interface: you sent a search query and got results as XML for a site or automation. In autumn 2023 the service was turned off; the official line is Yandex Search API in Yandex Cloud.",
    "Below — why XML mattered, how to think about limits and legal scenarios today, without step-by-step HTML SERP scrapers or limit bypasses. Data-collection boundaries are in the parsing article.",
  ],
  faq: [
    {
      q: "Does Yandex.XML still work?",
      a: "No. Classic XML for webmasters is retired. See the current Yandex Search API and Yandex docs.",
    },
    {
      q: "What replaces it for site search?",
      a: "Built-in CMS search, your own indexes, or the official Search API under the plan terms — not homemade scraping of yandex.ru.",
    },
    {
      q: "Can you still pull rankings via XML like before?",
      a: "The old Webmaster-quota scheme is dead. For monitoring use the official API, licensed tools, or manual/contract exports — within the ToS.",
    },
    {
      q: "What were XML limits?",
      a: "Request counts were capped and depended on Webmaster site metrics. Exceeding them led to refusals/blocks.",
    },
    {
      q: "Is Search API the same free thing?",
      a: "A cloud product with billing (PAYG and plans). Check current prices and quotas in the Yandex console.",
    },
    {
      q: "Why not just scrape the SERP?",
      a: "It breaks service rules, risks blocks, breaks when markup changes, and carries legal/ethical risk. The official API exists for machine access.",
    },
    {
      q: "Can API responses still be XML?",
      a: "In the Search API ecosystem response formats may vary (including XML/HTML/JSON — per current docs). That’s not the “old Yandex.XML”.",
    },
    {
      q: "Does a normal SEO site need XML?",
      a: "Often no. Webmaster, analytics, and content matter more. API is for products with search/monitoring at scale.",
    },
  ],
  sections: [
    {
      title: "What Yandex.XML was",
      level: 2,
      paras: [
        "The service accepted Yandex search queries and returned structured XML: handy to embed search on a site or fetch results programmatically without “breaking” the HTML SERP page.",
        "For SEO tools XML became a familiar ranking-check source. But it was always an official channel with rules and limits — not a hole for infinite SERP scraping.",
      ],
      lists: [
        {
          intro: "Typical jobs then:",
          items: [
            "search on your own site/catalog;",
            "demos and search-widget prototypes;",
            "SERP monitoring within quotas;",
            "learning to work with API responses.",
          ],
        },
      ],
    },
    {
      title: "Limits and why they existed",
      level: 2,
      paras: [
        "Limits protected infrastructure and cut aggressive harvesting. Quota depended on account/site pairing; the XML UI showed remaining requests.",
        "The lesson still applies to Search API: design cache, request dedupe, queues — don’t hammer the API for nothing. Exceeding = errors and a stop, not “one more retry in a loop”.",
      ],
      lists: [
        {
          intro: "Request hygiene:",
          items: [
            "cache repeats;",
            "batch with purpose;",
            "log quota spend;",
            "don’t pull the whole core every minute.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Building a business process on an unofficial HTML scraper. It breaks on the first markup update.",
        },
      ],
    },
    {
      title: "What to use instead of XML",
      level: 2,
      paras: [
        "Yandex Search API in Yandex Cloud is the official replacement for machine search access. Connection, keys, IP, billing, and formats — only per current vendor docs.",
        "For a small project’s ranking checks, Webmaster, manual samples, and licensed SEO tools often suffice. API makes sense when you need your own product or high volume.",
      ],
      lists: [
        {
          intro: "Before rollout:",
          items: [
            "read ToS and quotas;",
            "estimate cost at your query volume;",
            "plan cache and error monitoring;",
            "don’t store extra PII from results.",
          ],
        },
      ],
      links: [
        {
          label: "Data parsing",
          href: "/en/blog/parsing/",
        },
      ],
    },
    {
      title: "Legal scenarios vs the grey zone",
      level: 2,
      paras: [
        "Normal: official API, search over your own data, licensed monitors. Grey and risky: mass captcha bypass, client spoofing, ignoring robots/ToS, publishing others’ snippets as content.",
        "Don’t ship old “5 steps to connect an XML scraper” guides from 2020 to production — endpoints are dead, and the habit of bypassing limits is harmful.",
      ],
      lists: [
        {
          intro: "Do this:",
          items: [
            "official data channel;",
            "minimum requests for the job;",
            "transparent logs for audit;",
            "alternative — manual TOP checks.",
          ],
        },
      ],
    },
    {
      title: "Link to SEO processes",
      level: 2,
      paras: [
        "SERP pulling is a support loop. Growth comes from pages, tech, semantics, and links. API doesn’t replace Webmaster, analytics, and a content plan. Ranking growth is still planned months of work — not an API checkbox.",
        "If you monitor positions: lock region, device, date; don’t compare an XML snapshot to “eyeballs” without accounting for personalization.",
      ],
      lists: [
        {
          intro: "Practical stack:",
          items: [
            "Webmaster — index and errors;",
            "analytics — behavior;",
            "Search API/tool — positions for the core;",
            "hypothesis table — what you change on the site.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Migrating from old integrations",
      level: 2,
      paras: [
        "If the site still has a widget/script for dead XML — disable it, replace with current search or API. Check agency cron jobs: they can spam errors and burn Cloud budget on a broken migration.",
        "Document: who owns the key, which plan, what SLA for monitoring.",
      ],
      lists: [
        {
          intro: "Migration checklist:",
          items: [
            "find all xmlsearch/old URL calls;",
            "turn off or rewrite;",
            "connect Search API per docs;",
            "test quotas and alerts;",
            "update the SEO playbook.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Don’t keep open API keys in the repo. Rotation and least privilege are baseline.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "parsing",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
    "metrika-ustanovka",
    "google-analytics",
  ],
};
