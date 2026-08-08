import type { BlogPost } from "../../../data/blog";

/** EN overlay for pochta-dlya-domena — same structure as RU JSON. */
export const pochtaDlyaDomenaEn: BlogPost = {
  slug: "pochta-dlya-domena",
  title: "Email for your domain: why business needs it and how to connect",
  date: "2018-04-17",
  category: "Digital marketing",
  cover: "/images/blog/pochta-dlya-domena/cover-en.webp",
  excerpt:
    "Corporate email on your own domain: why `name@firma.ru`, how MX records work, choosing Yandex 360 / Google / Mail, and basic security — without outdated “1000 free mailboxes” limits.",
  lead: [
    "Email for a domain means addresses like `sales@your-site.ru` on your domain — not `@yandex…` or `@mail…` with a taken nickname. For the site and sales it’s a trust signal: the client sees the brand in every message.",
    "Below: why corporate email matters, how MX records work, what to watch when picking a provider, and a minimal security checklist. Mailbox limits, storage, and product names (Yandex.Mail for Domain → Yandex 360 and peers) change — check current plans.",
  ],
  faq: [
    {
      q: "How is domain email different from regular Gmail or Yandex Mail?",
      a: "You can use the same web client, but the address is on your domain. DNS (MX and related records) points to the provider’s mail servers.",
    },
    {
      q: "Do I need my own mail server on hosting?",
      a: "Usually no: a cloud provider is simpler and more reliable. Running your own Postfix is a separate antispam and uptime burden.",
    },
    {
      q: "How long after changing MX until mail works?",
      a: "From minutes to a day (sometimes longer because of TTL). Plan the move with slack and don’t delete old records immediately.",
    },
    {
      q: "Can the owner read all employee mail?",
      a: "Technically an admin often has broad rights. Legally and ethically you need policy, consent, and a control purpose — not peeking for fun.",
    },
    {
      q: "Does domain email improve SEO?",
      a: "It doesn’t lift rankings directly. Indirectly it can help trust in commercial factors and correspondence. Page-one visibility for the keyword set is separate work — often planned over 2–6 months after you start.",
    },
  ],
  sections: [
    {
      title: "Why email on your own domain",
      level: 2,
      paras: [
        "`ivan@firma.ru` looks more official than `firma.sales.2020@mail.ru`. Clients link the letter to the site and brand more easily. Nice free nicknames on public services are often taken.",
        "Scale: create mailboxes for roles (`info`, `support`, `finance`) and people without each employee switching a personal provider. Shared password and 2FA rules are easier in one org account.",
      ],
      lists: [
        {
          intro: "Business benefits:",
          items: [
            "image and brand recognition",
            "mailboxes for departments and staff",
            "centralized administration",
            "less “which mail are you writing from?” confusion",
          ],
        },
      ],
      links: [
        {
          label: "Mail service",
          href: "/en/blog/pochtovyy-servis/",
        },
        {
          label: "Top-level domain",
          href: "/en/blog/domen-pervogo-urovnya/",
        },
      ],
    },
    {
      title: "How it works: MX and DNS",
      level: 2,
      paras: [
        "When someone writes to `you@domain.ru`, the sender looks up the domain’s DNS records (mainly MX) and learns which server accepts mail. You set MX (and often SPF/DKIM/DMARC) at the registrar or in the DNS panel.",
        "After changing records you need time to propagate. Until TTL expires at resolvers, some mail may still follow old MX — so migrations are careful.",
      ],
      lists: [
        {
          intro: "Typical order:",
          items: [
            "verify domain ownership with the mail provider",
            "get MX values (and SPF/DKIM hints)",
            "enter them in DNS",
            "wait for application",
            "create mailboxes and test send/receive",
          ],
        },
      ],
      notes: [
        {
          title: "Not only MX",
          kind: "tip",
          text: "Deliverability needs SPF, DKIM, and preferably DMARC. Without them mail lands in spam more often even with a pretty domain.",
        },
      ],
    },
    {
      title: "Which provider to choose",
      level: 2,
      paras: [
        "In Russia people often look at Yandex 360 (historically “Mail for Domain”), Mail for Business, Google Workspace, Microsoft 365, and mail bundled with hosting. Criteria: price per box, limits, antispam, calendar/disk, admin UI, 152-FZ fit, and migration ease.",
        "Don’t copy “free and 1000 mailboxes” from 2018 guides into the plan: tariffs and limits changed. Weigh annual cost and who will administer it.",
      ],
      tables: [
        {
          caption: "What to compare",
          headers: ["Criterion", "Question"],
          rows: [
            ["Price", "Cost per mailbox/month as the team grows"],
            ["Deliverability", "SPF/DKIM out of the box?"],
            ["Admin", "Groups, aliases, recovery"],
            ["Security", "2FA, login audit, password policy"],
            ["Ecosystem", "Need disk/calendar/messenger?"],
          ],
        },
      ],
      links: [
        {
          label: "Online payment on the site",
          href: "/en/blog/onlayn-oplata/",
        },
      ],
    },
    {
      title: "Connecting via a cloud service",
      level: 2,
      paras: [
        "The general path at Yandex, Google, and Mail is similar: org account → add domain → verify TXT/HTML → set MX → create users. 2018 click-by-click steps aged out — follow the wizard in the current account.",
        "After MX, test from a phone and an external mailbox: inbound, outbound, attachments. Add SPF/DKIM per the provider’s instructions.",
      ],
    },
    {
      title: "Security and mailbox hygiene",
      level: 2,
      paras: [
        "Enable 2FA for the admin and key staff, unique passwords, and aliases instead of one shared password for everyone. Don’t publish `admin@` in open forms without spam protection.",
        "Owner access to employee mailboxes needs a policy: why, who may, how data is stored. That’s trust as much as tech.",
      ],
      lists: [
        {
          intro: "Minimum after launch:",
          items: [
            "2FA on the admin account",
            "SPF + DKIM (+ DMARC if possible)",
            "a backup admin",
            "rules for `info` / `support`",
            "no shared department password",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Domain email is a business standard: brand in the address, managed mailboxes, solid deliverability with DNS set up.",
        "Don’t cling to 2018 “free thousand mailboxes” screenshots — pick a current provider, set MX/SPF/DKIM, and lock down security.",
      ],
    },
  ],
  closing: [
    "Verify the domain with the mail provider, set MX and auth records, create working mailboxes, and test mail from an external address — that’s how corporate email builds trust, not only a pretty signature.",
  ],
  related: [
    "pochtovyy-servis",
    "domen-pervogo-urovnya",
    "domen-rf",
    "istoriya-domena",
    "onlayn-oplata",
    "kommercheskie-faktory",
  ],
};
