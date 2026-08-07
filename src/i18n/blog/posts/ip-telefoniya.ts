import type { BlogPost } from "../../../data/blog";

/** EN overlay for ip-telefoniya — same structure as RU JSON. */
export const ipTelefoniyaEn: BlogPost = {
  slug: "ip-telefoniya",
  title: "IP telephony for business: why and how to connect",
  date: "2019-07-23",
  category: "Digital marketing",
  cover: "/images/blog/ip-telefoniya/cover-en.webp",
  excerpt:
    "What IP telephony (VoIP) is: voice over the internet, call-center and office scenarios, what to check when choosing a provider, and how to launch without promising “minus 15% always.”",
  lead: [
    "IP telephony is phone service over IP: voice is digitized and travels the internet (SIP and related protocols), not only a classic copper line.",
    "Businesses pick it for flexibility and cost control — then choose a provider and lock setup details. A virtual number is a related tool; here we focus on office/cloud telephony and the call center. We don’t lock 2019 plan prices.",
  ],
  faq: [
    {
      q: "How is it different from a virtual number?",
      a: "A virtual number is often one cloud DID for a task. IP telephony is wider: PBX, queues, recording, IVR, many agents, CRM integration.",
    },
    {
      q: "Do you need stable internet?",
      a: "Yes. Voice cares about latency, jitter, and packet loss. A dedicated channel / QoS priority beats the neighbor’s Wi‑Fi.",
    },
    {
      q: "Should I use a softphone or a handset?",
      a: "Both. Softphones scale remote agents faster; desk phones are handy on the floor. Often a hybrid.",
    },
    {
      q: "Is savings guaranteed?",
      a: "Often cheaper for long-distance and scaling lines, but it depends on call profile and plan. We don’t promise fixed “−15% for everyone.”",
    },
    {
      q: "Can you keep a local number?",
      a: "Often yes: number porting/connection with the IP telephony provider. Check porting terms in the contract.",
    },
  ],
  sections: [
    {
      title: "Which jobs IP telephony covers",
      level: 2,
      paras: [
        "One call center across several cities: the client dials a local number, and a shared queue answers. When the office moves, the number doesn’t die with the wall jack.",
        "Staffing flexibility: fewer agents in winter, more licenses by minutes in season — without weeks of cable runs. Short mass calls (taxi, delivery) are often cheaper on per-minute/packet IP plans than outdated “always round up the minute” billing — but count on your own data.",
      ],
      lists: [
        {
          intro: "Typical benefits for business:",
          items: [
            "queues and IVR;",
            "recording and call stats;",
            "forwarding and groups;",
            "CRM integration;",
            "remote agents on softphones.",
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
        "Look beyond per-minute price: SLA, channel quality, call recording, API/CRM, support, number geography, failover when internet drops.",
        "Check the contract: who owns quality, how billing is counted, downtime compensation, where recordings are stored and for how long.",
      ],
      lists: [
        {
          intro: "Selection checklist:",
          items: [
            "needed local/toll-free numbers;",
            "queues, IVR, recording;",
            "reports and CRM export;",
            "voice quality test;",
            "clear contract and invoices.",
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
      title: "Connection and control",
      level: 2,
      paras: [
        "After the contract: PBX/cloud setup, agent accounts, routes, and if needed — a gateway and backup channel. A softphone installs in minutes; a mature setup (IVR, CRM, recording) takes planning — not “30 minutes and forget.”",
        "In the account watch missed calls, answer time, queue load, cost. Also ad-number call tracking if you need attribution.",
      ],
      lists: [
        {
          intro: "After launch:",
          items: [
            "answer and escalation playbook;",
            "missed-call dashboard;",
            "deal integration in CRM;",
            "backup internet / mobile forwarding;",
            "recording audit under personal-data rules.",
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
    "IP telephony gives flexible lines, queues, and call analytics — if you have decent internet and a responsible provider. Describe scenarios (cities, season, CRM), test voice, and don’t confuse a cheap softphone with stable sales connectivity.",
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
