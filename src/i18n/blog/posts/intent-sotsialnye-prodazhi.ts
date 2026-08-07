import type { BlogPost } from "../../../data/blog";

/** EN overlay for intent-sotsialnye-prodazhi — same structure as RU JSON. */
export const intentSotsialnyeProdazhiEn: BlogPost = {
  slug: "intent-sotsialnye-prodazhi",
  title: "Intent in social: how to work with buyer signals",
  date: "2018-09-04",
  category: "Internet marketing",
  cover: "/images/blog/intent-sotsialnye-prodazhi/cover-en.webp",
  excerpt:
    "Social selling and monitoring purchase intent in social networks: “just want / comparing / ready to buy”, ethical replies, CRM and retargeting — not the same as SEO user intent.",
  lead: [
    "People often ask for purchase advice in communities and feeds before they hit a website. Intent here means intent in a message: from “someday I want” to “where can I order tomorrow”.",
    "Below — intent types, how to reply without spam, and how this differs from SEO user intent (search-query intent). Informational material; some foreign platforms are restricted in RF — use lawful channels (incl. VK) and platform rules. Process personal data and chats per the law.",
  ],
  faq: [
    {
      q: "Is this the same as SEO user intent?",
      a: "No. SEO intent is what someone wants from a search query. Here — intent in a social post/comment.",
    },
    {
      q: "What intent types are there?",
      a: "Roughly: desire (“just want”), choice (collecting reviews), purchase (ready to order). Reply and priority differ.",
    },
    {
      q: "Should you reply to every post?",
      a: "No. Hot and relevant ones — yes, fast and on point. Cold wishes with no budget often don’t convert.",
    },
    {
      q: "Can you DM with an offer right away?",
      a: "Carefully: easy to look like spam. First a useful reply in the thread (if it fits), then a soft follow-up per platform rules.",
    },
    {
      q: "Why CRM?",
      a: "So you don’t lose the lead, see status, and don’t duplicate touches across managers.",
    },
    {
      q: "Retarget “warm” intents?",
      a: "Makes sense with a lawful audience and consent/ad rules. Don’t promise miracles from one touch.",
    },
  ],
  sections: [
    {
      title: "Three levels of intent",
      level: 2,
      paras: [
        "“Just want” — a dream or deferred interest with no readiness to pay. Low value: note the topic, don’t push a sale.",
        "“Already comparing” — weighing options, reading reviews. Facts, differences, cases, and a calm manager dialogue fit here.",
        "“Want to buy/order” — a hot signal. Reply speed is critical: a direct answer, escalate to sales, a CRM card.",
      ],
      lists: [
        {
          intro: "Reactions to a signal:",
          items: [
            "a useful reply in the thread;",
            "hand-off to a colleague with expertise;",
            "create a lead in CRM;",
            "deferred nurture (content/ads) for warm ones.",
          ],
        },
      ],
      links: [
        {
          label: "User intent in SEO",
          href: "/en/blog/user-intent/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "How to set up the work",
      level: 2,
      paras: [
        "Monitoring your communities and relevant public threads helps see demand before a site lead. Watch negativity too: sometimes it’s a chance to help — not to drop a price list.",
        "Geo, categories, and minus-topics cut noise. Auto-rules help for typical replies; complex cases need a human.",
        "Ethics beats speed for quota: no sense of stalking or spam. Lock a social-selling playbook: who replies, in what SLA, what you must not promise.",
      ],
      notes: [
        {
          title: "Platforms",
          text: "By meaning the article may mention Facebook* and Instagram* (Meta* products). In RF, Meta’s activity is recognized as extremist; use available lawful channels. The page disclaimer is required.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Account manager",
          href: "/en/blog/akkaunt-menedzher/",
        },
        {
          label: "Sales manager KPIs",
          href: "/en/blog/kpi-menedzhera-prodazh/",
        },
      ],
    },
  ],
  closing: [
    "Intent in social is an early demand signal if the team replies fast, on point, and without spam. Don’t confuse it with SEO query intent: there it’s a page for the SERP; here — dialogue and CRM.",
  ],
  related: [
    "user-intent",
    "retargeting",
    "kpi-menedzhera-prodazh",
    "akkaunt-menedzher",
    "potrebitelskiy-insayt",
    "trafik-bez-lidov",
  ],
};
