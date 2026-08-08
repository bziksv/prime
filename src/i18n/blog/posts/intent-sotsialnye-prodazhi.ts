import type { BlogPost } from "../../../data/blog";

/** EN overlay for intent-sotsialnye-prodazhi — same structure as RU JSON. */
export const intentSotsialnyeProdazhiEn: BlogPost = {
  slug: "intent-sotsialnye-prodazhi",
  title: "Purchase intent in social: reading buyer signals",
  date: "2018-09-04",
  category: "Digital marketing",
  cover: "/images/blog/intent-sotsialnye-prodazhi/cover-en.webp",
  excerpt:
    "Social selling and intent monitoring in feeds and communities: “just dreaming / comparing / ready to buy,” ethical replies, CRM, and retarget — not the same as SEO user intent.",
  lead: [
    "People ask for buying advice in communities and feeds long before they land on a site. Intent here is the intent inside a message: from “someday I want this” to “where can I order tomorrow.”",
    "Below: intent levels, how to reply without spam, and how this differs from SEO user intent (what a search query wants). Informational only. Some foreign platforms are restricted in Russia — stick to lawful channels (including VK) and each platform’s rules. Handle personal data and chats under the law.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Facebook* and Instagram* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is this the same as SEO user intent?",
      a: "No. SEO intent is what someone wants from a search query. Here it’s the intent in a social post or comment.",
    },
    {
      q: "What intent types show up?",
      a: "Roughly three: desire (“just want”), comparison (gathering reviews), purchase (ready to order). Priority and reply style differ.",
    },
    {
      q: "Should you reply to every post?",
      a: "No. Hot, relevant signals deserve a fast, useful reply. Cold wishes with no budget rarely convert.",
    },
    {
      q: "Can you DM an offer right away?",
      a: "Carefully — that slides into spam fast. Prefer a useful reply in the thread when it fits, then a soft follow-up under platform rules.",
    },
    {
      q: "Why use a CRM?",
      a: "So leads don’t vanish, status is visible, and managers don’t double-touch the same person.",
    },
    {
      q: "Should you retarget “warm” intents?",
      a: "Yes when you have a lawful audience and consent/ad rules. Don’t expect one ad touch to close the deal.",
    },
  ],
  sections: [
    {
      title: "Three levels of intent",
      level: 2,
      paras: [
        "“Just want” — a dream or deferred interest with no readiness to pay. Low value: note the topic, don’t pitch.",
        "“Already comparing” — weighing options and reading reviews. Facts, differences, cases, and a calm sales conversation fit here.",
        "“Want to buy / order” — a hot signal. Speed matters: answer directly, hand off to sales, open a CRM card.",
      ],
      lists: [
        {
          intro: "How to react to a signal:",
          items: [
            "a useful reply in the thread",
            "handoff to a colleague with the right expertise",
            "create a lead in the CRM",
            "deferred nurture (content or ads) for warm intents",
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
      title: "How to run the workflow",
      level: 2,
      paras: [
        "Watching your communities and relevant public threads surfaces demand before a site form. Track negativity too — sometimes it’s a chance to help, not to drop a price list.",
        "Geo, categories, and excluded topics cut noise. Auto-rules cover routine replies; complex cases need a person.",
        "Ethics beat quota speed: no stalking vibe, no spam. Write a social-selling playbook — who replies, in what SLA, what you must never promise.",
      ],
      notes: [
        {
          title: "Platforms",
          text: "This piece may mention Facebook* and Instagram* (Meta* products). In Russia, Meta’s activity is recognized as extremist; use available lawful channels. The page disclaimer is required.",
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
    "Social intent is an early demand signal when the team replies fast, on point, and without spam. Don’t confuse it with SEO query intent: there you build a page for search; here you run dialogue and CRM.",
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
