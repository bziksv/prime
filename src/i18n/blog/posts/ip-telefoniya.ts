import type { BlogPost } from "../../../data/blog";

/** EN overlay for ip-telefoniya — same structure as RU JSON. */
export const ipTelefoniyaEn: BlogPost = {
  slug: "ip-telefoniya",
  title: "Business IP telephony: why it matters and how to launch",
  date: "2019-07-23",
  category: "Digital marketing",
  cover: "/images/blog/ip-telefoniya/cover-en.webp",
  excerpt:
    "What IP telephony (VoIP) is: voice over the internet, office and call-center use cases, what to check when picking a provider, and how to launch without promising “always −15%.”",
  lead: [
    "IP telephony is phone service over IP: voice is digitized and travels the internet (SIP and related setups), not only a classic copper line.",
    "Below: why businesses use it, how to choose a provider, and what to verify at connect. A virtual number is a related tool; this piece focuses on office/cloud telephony and the call center. We don’t lock 2019 plan prices.",
  ],
  faq: [
    {
      q: "How is it different from a virtual number?",
      a: "A virtual number is often one cloud DID for a job. IP telephony is broader: PBX, queues, recording, IVR, many agents, CRM integration.",
    },
    {
      q: "Do you need stable internet?",
      a: "Yes. Voice cares about latency, jitter, and packet loss. A dedicated link or QoS priority beats the neighbor’s Wi‑Fi.",
    },
    {
      q: "Softphone or desk phone?",
      a: "Both work. Softphones scale remote agents faster; handsets are handy on the floor. Many teams run a hybrid.",
    },
    {
      q: "Is savings guaranteed?",
      a: "Long-distance and line scaling are often cheaper, but it depends on call mix and plan. We don’t promise a fixed “−15% for everyone.”",
    },
    {
      q: "Can you keep a local number?",
      a: "Often yes — port or attach the number with the IP telephony provider. Check porting terms in the contract.",
    },
  ],
  sections: [
    {
      title: "Jobs IP telephony covers",
      level: 2,
      paras: [
        "One call center across several cities: the customer dials a local number, and a shared queue answers. When the office moves, the number doesn’t die with the wall jack.",
        "Staffing stays flexible: fewer agents in winter, more licenses by the minute in peak season — without weeks of cable work. Short high-volume calls (taxi, delivery) often cost less on per-minute or packet IP plans than old “always round up the minute” billing — but run the math on your own traffic.",
      ],
      lists: [
        {
          intro: "Typical upsides for business:",
          items: [
            "queues and IVR",
            "recording and call stats",
            "forwarding and groups",
            "CRM integration",
            "remote agents on softphones",
          ],
        },
      ],
      links: [
        {
          label: "Virtual number",
          href: "/en/blog/virtualnyy-nomer/",
        },
        {
          label: "CRM",
          href: "/en/blog/crm/",
        },
      ],
    },
    {
      title: "How to choose a provider",
      level: 2,
      paras: [
        "Look past per-minute price: SLA, channel quality, call recording, API/CRM, support, number geography, failover when internet drops.",
        "Read the contract: who owns quality, how billing is counted, downtime compensation, where recordings live and for how long.",
      ],
      lists: [
        {
          intro: "Selection checklist:",
          items: [
            "the local / toll-free numbers you need",
            "queues, IVR, recording",
            "reports and CRM export",
            "a voice quality test",
            "a clear contract and invoices",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "A free app with no channel responsibility and a serious call center are different classes. For sales, treat line downtime as lost leads.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Setup and control",
      level: 2,
      paras: [
        "After the contract: PBX/cloud setup, agent accounts, routes, and if needed a gateway plus backup channel. A softphone installs in minutes; a mature stack (IVR, CRM, recording) takes planning — not “thirty minutes and forget.”",
        "In the console watch missed calls, answer time, queue load, and cost. Add ad-number call tracking when you need attribution.",
      ],
      lists: [
        {
          intro: "After launch:",
          items: [
            "answer and escalation playbook",
            "missed-call dashboard",
            "deal sync in CRM",
            "backup internet / mobile forwarding",
            "recording audit under personal-data rules",
          ],
        },
      ],
      links: [
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  closing: [
    "IP telephony gives flexible lines, queues, and call analytics — if the internet is solid and the provider owns the outcome. Describe scenarios (cities, season, CRM), test voice, and don’t confuse a cheap softphone with stable sales connectivity.",
  ],
  related: [
    "virtualnyy-nomer",
    "crm",
    "skvoznaya-analitika",
    "kpi-menedzhera-prodazh",
    "formy-zahvata",
    "dashboard",
  ],
};
