import type { BlogPost } from "../../../data/blog";

/** EN overlay for virtualnyy-nomer — same structure as RU JSON. */
export const virtualnyyNomerEn: BlogPost = {
  slug: "virtualnyy-nomer",
  title: "Virtual phone numbers: why business needs them and where the limits are",
  date: "2020-07-21",
  category: "Internet marketing",
  cover: "/images/blog/virtualnyy-nomer/cover-en.webp",
  excerpt:
    "What a virtual number is: receiving SMS and calls over the internet, business scenarios (call tracking, toll-free, IVR), and risks of free “numbers for sign-ups”. No guides to bypassing platform rules.",
  lead: [
    "A virtual number is a phone number in a carrier/service cloud: calls and SMS arrive in an app or via forwarding, without your own “hardware” line in the office.",
    "Below — legitimate business jobs and care with mass “SMS numbers”. We don’t copy 2020 review prices and service names; pick the scheme for the job and the contract — not “the cheapest code receiver”.",
  ],
  faq: [
    {
      q: "How is it different from a normal SIM?",
      a: "No physical card required in your pocket: the number lives with the provider, management is in a cabinet/API. For business it’s often easier to scale lines.",
    },
    {
      q: "Does it work for call tracking?",
      a: "Yes — a classic scenario: different numbers on ads → you see where the call came from. You need a link to analytics and CRM.",
    },
    {
      q: "Can you spawn social accounts with it?",
      a: "Bypassing platform rules and multi-accounts via disposable numbers risks bans and claims. We don’t cover that as a how-to.",
    },
    {
      q: "Are free public SMS numbers safe?",
      a: "Often no: the number is visible to everyone, outsiders can read codes, the account is easy to hijack. A bad choice for important services.",
    },
    {
      q: "Do you need the internet constantly?",
      a: "For apps and web cabinets — yes. Forwarding to a mobile may work differently; check with the provider.",
    },
  ],
  sections: [
    {
      title: "Who needs it and which jobs it covers",
      level: 2,
      paras: [
        "Business: a separate line for ads, toll-free numbers, IVR (“press 1…”), voice alerts, SMS to clients with consent, several staff on one cloud PBX.",
        "A number’s geo code (e.g. a city code) doesn’t legally make the company “from that city”. Don’t use a number to fake location — reputation and legal risk. An honest offer and service beat a “pretty code”.",
        "A private “don’t show my personal number on a one-off form” case is sometimes solved with a work SIM or a corporate line. Public web numbers where anyone can see SMS are dangerous for banking and email.",
        "Broadcasts and notifications — only under telecom rules and with list consent. A virtual number doesn’t cancel advertising and personal-data law.",
      ],
      lists: [
        {
          intro: "Working scenarios:",
          items: [
            "ad call tracking;",
            "one number with forwarding to mobiles;",
            "IVR and call queues;",
            "SMS codes to your staff/clients within a service;",
            "a separate support line.",
          ],
        },
      ],
      links: [
        {
          label: "SMS marketing",
          href: "/en/blog/sms-rassylka/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "How to choose and what to check",
      level: 2,
      paras: [
        "For business check: contract, jurisdiction, call quality, API, call recording (with notice), CRM integration, toll-free/local codes. Large cloud telephony and CPaaS (Twilio class and peers) are about infrastructure — not “one more social account”.",
        "Free “receive SMS online” showcases and one-time activators are fine for experiments, but weak for money and data: numbers are reused, codes leak, support is zero. Don’t build email, bank, or ad-account access on them.",
        "Typical setup: register with a provider → pick number/plan → app or SIP/forwarding → test a call and SMS. Office hardware isn’t required; you need stable internet for a softphone.",
        "Prices like “pennies per number” from old articles aren’t a guide. Count per-minute, SMS, monthly number cost, and contract terms.",
        "Bottom line: a virtual number is a telephony and analytics tool. Take it for the business process and contract; don’t confuse it with grey multi-account schemes.",
      ],
      lists: [
        {
          intro: "Provider checklist:",
          items: [
            "clear contract and invoices;",
            "needed country/city codes;",
            "forwarding and/or SIP;",
            "logs/recording within the rules;",
            "CRM/analytics integration;",
            "no public “shared” SMS numbers for anything important.",
          ],
        },
      ],
      links: [
        {
          label: "Ad account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
      ],
    },
  ],
  related: [
    "sms-rassylka",
    "skvoznaya-analitika",
    "reklamnyy-kabinet",
    "didzhital-agentstvo",
    "metriki-reklamy",
  ],
};
