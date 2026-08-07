import type { BlogPost } from "../../../data/blog";

/** EN overlay for lichnyy-kabinet — same structure as RU JSON. */
export const lichnyyKabinetEn: BlogPost = {
  slug: "lichnyy-kabinet",
  title: "Personal account on a site: why it matters and what’s inside",
  date: "2021-02-26",
  category: "E-commerce",
  cover: "/images/blog/lichnyy-kabinet/cover-en.webp",
  excerpt:
    "Why a site needs a personal account, what features appear after login, when it’s required, and what to watch in development — from security to UX.",
  lead: [
    "A personal account (client portal) is the area after login: orders, documents, profile settings, subscriptions. For services and stores it’s often the retention hub.",
    "What a client portal is for, typical features, and development questions are below. This isn’t about “one more registration as a checkbox.”",
  ],
  faq: [
    {
      q: "Is a client portal always needed?",
      a: "No. For a simple one-lead landing it’s often excess. For repeat purchases, B2B, and SaaS — nearly required.",
    },
    {
      q: "How is a client portal different from CRM?",
      a: "The portal is the customer’s UI. CRM is the company’s tool. They can be linked.",
    },
    {
      q: "Do I need social login?",
      a: "Optional. Password + email/phone and 2FA matter more than a zoo of buttons.",
    },
    {
      q: "What about security?",
      a: "HTTPS, hashed passwords, login attempt limits, account recovery, role permissions, logging.",
    },
    {
      q: "Does a client portal affect SEO?",
      a: "Closed sections aren’t for the index. Public storefronts and the blog are separate. Don’t lock useful content for no reason.",
    },
    {
      q: "What data should I ask for at signup?",
      a: "Only what’s needed for the flow. Extra fields cut conversion and raise personal-data responsibility.",
    },
    {
      q: "How do I know the account is usable?",
      a: "Test key flows with real users: signup, recovery, find an order, pay, contact support.",
    },
  ],
  sections: [
    {
      title: "Why you need a client portal",
      level: 2,
      paras: [
        "Self-service: order status, invoices, history, plan changes. That lowers support load and raises repeat-sale odds.",
        "A client portal pays off when the visitor returns to data or a service. If they only need one call, a heavy signup before the form is a barrier more than a benefit.",
      ],
      lists: [
        {
          intro: "Especially useful for:",
          items: [
            "online store;",
            "online service / SaaS;",
            "learning and private courses;",
            "B2B with documents and shipments.",
          ],
        },
      ],
    },
    {
      title: "Features after login",
      level: 2,
      paras: [
        "Profile, orders or subscriptions, notifications, files, support tickets, sometimes several employees of one company — the mix depends on the product.",
        "Start with the actions customers come for most. Rare admin features can stay with support or go live later once demand is proven — don’t complicate the first release.",
      ],
      lists: [
        {
          intro: "A solid client-portal baseline:",
          items: [
            "clear signup and password recovery;",
            "action history;",
            "mobile layout;",
            "logout and password change without a quest.",
          ],
        },
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Development: what to watch",
      level: 2,
      paras: [
        "Think through roles and permissions, payment and CRM integration, speed, accessibility, and personal-data handling. Don’t clone someone else’s account UI one-to-one: the UI must match your flow.",
        "Describe the client path before mockups: from invite or signup to solving the job. That helps you not lose order states, payment errors, cancellations, and acting on behalf of an organization.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "signup with 20 fields;",
            "no confirmation emails;",
            "portal slow on mobile;",
            "secrets in URLs and open APIs.",
          ],
        },
      ],
    },
    {
      title: "Security and personal data",
      level: 2,
      paras: [
        "Account security rests on basics: HTTPS, safe password storage, login attempt limits, recovery confirmation, and permission separation. Critical actions — changing contact, payment details, or role — deserve extra confirmation.",
        "Collect and show only data the client and process need. Explain processing purposes, retention, and how to contact you about personal data.",
      ],
      lists: [
        {
          intro: "Before launch check:",
          items: [
            "whether swapping a URL can show someone else’s order;",
            "whether sessions expire and logout works;",
            "whether tokens and documents leak into logs;",
            "whether the user gets notices about important changes.",
          ],
        },
      ],
    },
    {
      title: "Launch and growth without extra complexity",
      level: 2,
      paras: [
        "Ship a minimal version with one or two valuable flows, then study support tickets and analytics. If users constantly ask for an invoice, status, or reorder, simplify those actions first.",
        "Separate portal metrics from vanity ones. What matters more: share of clients who self-serve, flow completion speed, fewer tickets, and repeat purchase.",
      ],
      lists: [
        {
          intro: "Useful post-release steps:",
          items: [
            "collect feedback with a short question;",
            "review error logs and unfinished flows;",
            "test the account on popular phones;",
            "plan new features by client impact.",
          ],
        },
      ],
      notes: [
        {
          title: "SEO note",
          kind: "tip",
          text: "A client portal isn’t an organic ranking lever. Public pages still need prep (~weeks–a month) and TOP for a keyword set planned over 2–6 months of work.",
        },
      ],
    },
  ],
};
