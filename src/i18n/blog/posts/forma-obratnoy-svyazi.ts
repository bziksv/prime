import type { BlogPost } from "../../../data/blog";

/** EN overlay for forma-obratnoy-svyazi — same structure as RU JSON. */
export const formaObratnoySvyaziEn: BlogPost = {
  slug: "forma-obratnoy-svyazi",
  title: "Website feedback form: goals, fields, and placement rules",
  date: "2021-10-01",
  category: "Websites",
  cover: "/images/blog/forma-obratnoy-svyazi/cover-en.webp",
  excerpt:
    "Why you need a feedback form, which fields to use, where to place the block, how to fight spam, and how to raise the share of completed requests.",
  lead: [
    "A feedback form is a simple module: name, contact, request gist. In practice it drives leads, response speed, and trust in the site.",
    "Below: form goals, field structure, placement, antispam, and handling rules — with a focus on clear UX and message delivery, not another widget for the checklist.",
  ],
  faq: [
    {
      q: "Where’s the best place for the form?",
      a: "On Contacts, on a service card, and at the end of strong landings. On a landing — next to the offer. Duplicating a full form on every page usually adds noise.",
    },
    {
      q: "How many fields should the form have?",
      a: "The minimum for the job: name + phone or email + gist. Extra required fields cut conversion; details can wait until after first contact.",
    },
    {
      q: "Where do submissions go: email or CRM?",
      a: "Both work. More reliable: write to CMS/CRM + email/notification to the manager. Make sure mail doesn’t land in spam.",
    },
    {
      q: "Do I need a captcha?",
      a: "Yes if there’s spam. Modern bots beat simple image captchas — better honeypot, rate-limit, server checks, and current protection (including invisible captcha from a provider).",
    },
    {
      q: "What should I show after submit?",
      a: "A short confirmation and a real reply window (“we reply in business hours within N hours”). Promising “within an hour” without a process kills trust.",
    },
  ],
  sections: [
    {
      title: "Form goals and jobs",
      level: 2,
      paras: [
        "The form is a “visitor → team” channel. It doesn’t replace phone and messengers, but it logs the request in one place and lowers the barrier to reach out.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "questions, complaints, suggestions",
            "product or service requests",
            "callback",
            "contact capture for a list (with personal-data consent)",
            "lead qualification surveys (topic, budget, region)",
          ],
        },
      ],
    },
    {
      title: "How messages are delivered",
      level: 2,
      paras: [
        "Classic path: after submit, mail goes to the admin via hosting SMTP or a transactional service. Set SPF/DKIM/DMARC or leads die in spam.",
        "Second path — write to a CMS or CRM database: handy for shops, queues, and reports. CRM + notification is usually safer than email alone.",
      ],
      lists: [
        {
          intro: "Check at launch:",
          items: [
            "a test request reaches the inbox and/or CRM",
            "a backup channel (messenger/phone) exists if mail fails",
            "send errors are logged on the server",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Once a quarter send a test request from an external address. Half of “lost leads” are dead SMTP and a full inbox — not “bad traffic.”",
        },
      ],
    },
    {
      title: "Field structure",
      level: 2,
      paras: [
        "Mark required fields clearly. Validate in the browser and on the server. Name, contact, and request text are the base; phone for a call — only if you actually call.",
      ],
      lists: [
        {
          intro: "Common set:",
          items: [
            "name",
            "email and/or phone",
            "topic (dropdown)",
            "message / task description",
            "optional attachment (size and format limits)",
            "personal-data processing consent checkbox",
          ],
        },
      ],
      tables: [
        {
          caption: "Form type and field focus",
          headers: ["Scenario", "Minimum fields", "Don’t overcomplicate"],
          rows: [
            ["Callback", "Name + phone + convenient time", "A long essay"],
            ["Support question", "Contact + gist + page/order", "Ten required fields"],
            ["Service request", "Contact + service + city/deadline", "Full brief before first reply"],
          ],
        },
      ],
    },
    {
      title: "Where to place the block",
      level: 2,
      paras: [
        "A dedicated contacts page suits a full form. On commercial pages — a short “leave a request” block next to the offer.",
        "On a landing the form often sits in the first screen or right after the benefit. A full form in every footer rarely helps: better a compact “call me back” or a button to contacts.",
      ],
      lists: [
        {
          intro: "Working placements:",
          items: [
            "Contacts",
            "service and category cards",
            "end of a blog article with an offer",
            "landing — by the CTA",
            "modal on click (don’t pop aggressively on entry)",
          ],
        },
      ],
      links: [
        {
          label: "Sales copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "Spam protection",
      level: 2,
      paras: [
        "Captcha, honeypot field, per-IP rate limits, server checks on required fields — the base set. Old captcha scripts get bypassed; update protection with the CMS.",
      ],
      lists: [
        {
          intro: "Antispam minimum:",
          items: [
            "server checks, not only JS",
            "honeypot or invisible captcha",
            "submit rate limit",
            "filter links/stop-words in the message (carefully, avoid false positives)",
          ],
        },
      ],
    },
    {
      title: "How to raise completion rate",
      level: 2,
      paras: [
        "A short headline (“Leave a request” / “Ask a question”), a clear reply window, and a live contact nearby. After submit — a thank-you with expectations, not an empty “success.”",
      ],
      lists: [
        {
          intro: "What strengthens the form:",
          items: [
            "few required fields",
            "mobile layout and large inputs",
            "a reply-time promise you keep",
            "a backup channel (phone, messenger)",
            "a polite auto-reply and a real manager response",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Ignoring requests past the promised window. Interest was already there — silence hurts trust more than having no form.",
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "A form works when it has a clear goal, short fields, a sensible place on the site, spam protection, and a reply process. Technically it’s HTML + server handling; in meaning — a dialogue promise the team must keep.",
      ],
    },
  ],
};
