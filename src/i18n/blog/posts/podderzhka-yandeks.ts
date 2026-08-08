import type { BlogPost } from "../../../data/blog";

/** EN overlay for podderzhka-yandeks — same structure as RU JSON. */
export const podderzhkaYandeksEn: BlogPost = {
  slug: "podderzhka-yandeks",
  title: "How to contact Yandex support: Mail, Webmaster, and Help",
  date: "2020-06-25",
  category: "SEO",
  cover: "/images/blog/podderzhka-yandeks/cover-en.webp",
  excerpt:
    "When to write Yandex support, how to file Mail and Webmaster tickets, what to attach, and which jobs to fix yourself first — without waiting for a ranking button.",
  lead: [
    "Yandex support helps with ecosystem products: Mail, Webmaster, Direct, Metrica, and more. It is not a team that manually ranks you on page one: on ranking they usually give diagnostics and policy links — not a manual boost.",
    "Below: where to go (Help → form), what to write, typical webmaster cases (index, mirrors, migration), and how not to waste a ticket. UIs and phone numbers change — use the official “Write” buttons and chats in Yandex Help when you contact them.",
  ],
  faq: [
    {
      q: "Will support put the site on page one?",
      a: "No. They fix product issues, explain Webmaster statuses, and help with migration or security. Rankings come from site quality and time; growing a query core is often planned over 2–6 months after work starts.",
    },
    {
      q: "Who is Platon Shchukin in Yandex support?",
      a: "A historical “face” of Yandex support and help replies. Today it is more often a chatbot and forms; same idea — gather data and route to a human or an article.",
    },
    {
      q: "Should I search Help first or open a ticket right away?",
      a: "Search Help and product statuses first. Open a ticket when self-checks are exhausted and you have a reproducible case.",
    },
    {
      q: "Which phone number should I call?",
      a: "Numbers and hours change. Take the current contact only from Help for that service (Webmaster, Mail, Direct). Do not copy phones from old articles.",
    },
    {
      q: "What should I attach to a ticket?",
      a: "URL, problem start date, what you already tried, screenshots of errors or Webmaster reports, and browser and OS for UI bugs.",
    },
    {
      q: "Should I write about filters and “competitors colluded”?",
      a: "State facts: traffic drop from a date, Webmaster messages, what you changed on the site. Emotional theories without data do not speed the reply.",
    },
    {
      q: "Is Webmaster support separate?",
      a: "Yes — products have their own help tracks. For index and search messages, use Help or a form tied to Webmaster and a verified site.",
    },
    {
      q: "How long should I wait for a reply?",
      a: "Depends on queue and product. Do not duplicate one case with a stack of emails — that slows triage.",
    },
  ],
  sections: [
    {
      title: "When to write vs fix it yourself",
      level: 2,
      paras: [
        "A ticket fits a product bug, unclear account status, security, domain migration, or tool errors. “Not on page one” with no technical signals — audit and content first, not search support.",
        "Before writing: robots/sitemap, speed, status codes, Webmaster messages, Search Console if needed. If after self-check the picture is clear and you need a status interpretation — then contact them.",
      ],
      lists: [
        {
          intro: "Do yourself first:",
          items: [
            "200/301/404 on key URLs",
            "robots.txt and sitemap",
            "Webmaster reports (index, security)",
            "recent releases and CMS changes",
            "Yandex Help for your error",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
      ],
    },
    {
      title: "Help, bot, and contact form",
      level: 2,
      paras: [
        "Entry point — Help for the right service: search by symptoms, then “Write” / chat. The bot gathers context; a human gets a structured case.",
        "Name the product, login (no password), URL, reproduction steps, screenshots. For browser diagnostics Yandex sometimes offers an environment check page — use it if the form asks.",
      ],
      lists: [
        {
          intro: "Ticket template:",
          items: [
            "what broke (one sentence)",
            "since when",
            "expected vs actual behavior",
            "what you already checked",
            "links and attachments",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Writing “the site isn’t ranking, do something” with no URL, dates, or account screenshots.",
        },
      ],
    },
    {
      title: "Yandex Mail support",
      level: 2,
      paras: [
        "Login, mail, spam, and filter issues — via Mail Help and the feedback form. Before a ticket, check password/2FA, another device, Spam folder, and blockers.",
        "Do not send passwords or email codes in open replies. Average reply time depends on load — check current Help, not 2020 articles.",
      ],
      lists: [
        {
          intro: "Before writing Mail support:",
          items: [
            "reset or verify access",
            "another device or network",
            "error screenshot",
            "sample message (no secrets)",
          ],
        },
      ],
    },
    {
      title: "Webmaster: index, mirrors, migration",
      level: 2,
      paras: [
        "For a site, verify ownership in Yandex Webmaster. Typical topics: indexing, security, region, preferred host, domain move, odd snippets. Check panel reports first — then the help form for that question branch.",
        "Domain migration: 301s, consistent HTTPS, update Webmaster/Search Console, sitemap. Support can guide the “Move site” tool — redirects and content are on you.",
      ],
      lists: [
        {
          intro: "Webmaster cases:",
          items: [
            "mass index drop with live 200s",
            "hack/malware messages",
            "gluing www/non-www mirrors",
            "domain migration",
            "crawl tool errors",
          ],
        },
      ],
      tables: [
        {
          caption: "Before a ticket vs in the ticket",
          headers: ["Situation", "First", "Then"],
          rows: [
            ["Weak index", "robots, codes, sitemap", "Form + report screenshots"],
            ["Rank drop", "Audit and demand logic", "Ticket only if a tool is broken"],
            ["New domain", "301s and canon", "Move tool + question"],
            ["Suspected hack", "Password reset, cleanup", "Security in Webmaster"],
          ],
        },
      ],
      links: [
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Phone and chat: current channels",
      level: 2,
      paras: [
        "Some products have phone or chat. Blog numbers go stale. Open service Help → support contacts. For Webmaster a written form with attachments is often better.",
        "Prep talking points before a call: URL, date, what you tried. Do not discuss passwords aloud in public; do not demand “put us on page one” — that is outside support’s role.",
      ],
      lists: [
        {
          intro: "Contact etiquette:",
          items: [
            "one ticket — one problem",
            "no spam of repeat emails",
            "polite and on point",
            "full description, no hiding your own site edits",
          ],
        },
      ],
    },
    {
      title: "What support won’t replace",
      level: 2,
      paras: [
        "Page quality, semantics, speed, commercial factors, and link profile will not be “fixed by a letter.” After the reply, implement recommendations and watch Webmaster.",
        "Expecting manual ranking is a common trap. Site prep takes weeks; visibility for the core builds month to month.",
      ],
      lists: [
        {
          intro: "After the reply:",
          items: [
            "do the steps from the email",
            "log the edit date",
            "recheck reports in a few days",
            "follow up once if needed",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "A support reply is not page one. Prep is separate from ranking; growing a query core is often a 2–6 month horizon after work on the site.",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "google-search-console",
    "screaming-frog",
    "redirekt",
    "samostoyatelnoe-seo",
    "molodoy-sayt",
  ],
};
