import type { BlogPost } from "../../../data/blog";

/** EN overlay for email-marketing-2020 — same structure as RU JSON. */
export const emailMarketing2020En: BlogPost = {
  slug: "email-marketing-2020",
  title: "Email marketing: what works in practice",
  date: "2020-03-04",
  category: "Email marketing",
  cover: "/images/blog/email-marketing-2020/cover-en.webp",
  excerpt:
    "What actually pulls newsletters: mobile layout, triggers, segments, and a CRM link — without a cult of experimental interactivity or outdated “trends of the year.”",
  lead: [
    "“What’s next for email” roundups often mix durable practices with short-lived experiments. Mobile readability, triggers, and customer data stay the base. Fancy interactivity in the email is an option, not a strategy.",
    "Below — a working frame: what to check in every send and how to build the system if the list is still small. Don’t copy “traffic share” figures from other people’s roundups as your benchmark.",
  ],
  faq: [
    {
      q: "Do I need complex interactivity in emails?",
      a: "Not as a required layer. First reliable HTML, a clear CTA, and a fallback if the client won’t show the widget.",
    },
    {
      q: "Is mobile layout still important?",
      a: "Yes. Short subject, large buttons, image alt text, a phone test — the basic minimum.",
    },
    {
      q: "Is personalization = a name in the subject?",
      a: "A name is the minimum. Stronger: segment, behavior, and triggers (cart, welcome, win-back).",
    },
    {
      q: "Do I need a CRM?",
      a: "For growth — yes: one customer profile and scenarios. An ESP without CRM can start, but the ceiling is lower.",
    },
    {
      q: "UGC and surveys in emails?",
      a: "Useful for dialogue and content if you don’t turn every send into a questionnaire.",
    },
    {
      q: "How many characters in a mobile subject?",
      a: "Aim to fit the start of the line (often about 25–40 characters visible). Put the main meaning in the first words.",
    },
    {
      q: "Where to start if the list is small?",
      a: "Opt-in forms, welcome, and 1–2 triggers. Not scraping and not buying lists.",
    },
  ],
  sections: [
    {
      title: "Mobile emails without fanaticism",
      level: 2,
      paras: [
        "A large share of opens happens on phones. Hence the requirements: concise subject, short paragraphs, CTA near the top, tappable zones, image alt text, tests in several clients.",
        "Desktop revenue often stays significant — buying comfort on a large screen hasn’t vanished. Make the email readable everywhere, not “only for one stat.”",
      ],
      lists: [
        {
          intro: "Mobile check minimum:",
          items: [
            "subject still reads when truncated;",
            "the button isn’t a micro-button;",
            "images don’t break meaning if they don’t load;",
            "one primary CTA.",
          ],
        },
      ],
    },
    {
      title: "Interactivity, dialogue, and channels",
      level: 2,
      paras: [
        "Carousels, forms, and other widgets inside the email sound impressive. In practice, betting on one experimental stack is risky: client support is uneven. A plain HTML fallback is required.",
        "Simpler and more stable: short post-purchase surveys, service ratings, Q&A rubrics. The email reminds of the brand and feeds improvement data.",
        "Linking email with CRM and other channels isn’t “social icons in the footer” — it’s one funnel: lead → segment → email → deal.",
      ],
      lists: [],
      links: [
        {
          label: "Triggered emails",
          href: "/blog/triggernye-rassylki/",
        },
        {
          label: "Mail for your domain",
          href: "/blog/pochta-dlya-domena/",
        },
      ],
    },
    {
      title: "Personalization and segments",
      level: 2,
      paras: [
        "Strong personalization boils down to the obvious: split the list by interest and behavior, send triggers, refine preferences with surveys — not one “dear friends” blast to everyone.",
        "Technically that’s ESP + site/CRM data. Legally — consent and an easy unsubscribe.",
      ],
      lists: [],
      links: [
        {
          label: "Strong email examples",
          href: "/en/blog/primery-email-rassylok/",
        },
        {
          label: "Email list with consent",
          href: "/blog/baza-email-socseti/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Check current email-client capabilities and ESP plans. Mentions of messengers and social are about channel linking — not bypassing platform rules. Without consent and an honest unsubscribe the channel burns out fast.",
  },
  closing: [
    "Keep the base: mobile readability, triggers, and a CRM link. Experimental interactivity only on top of reliable HTML — not instead of it.",
  ],
  related: [
    "primery-email-rassylok",
    "triggernye-rassylki",
    "baza-email-socseti",
    "pochta-dlya-domena",
    "formy-zahvata",
    "parsing-email",
  ],
} as BlogPost;
