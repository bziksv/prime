import type { BlogPost } from "../../../data/blog";

/** EN overlay for triggernye-rassylki — same structure as RU JSON. */
export const triggernyeRassylkiEn: BlogPost = {
  slug: "triggernye-rassylki",
  title: "Trigger emails: what they are and how to use them",
  date: "2019-02-05",
  category: "Email marketing",
  cover: "/images/blog/triggernye-rassylki/cover-en.webp",
  excerpt:
    "How trigger messages differ from a regular newsletter: welcome, abandoned cart, order, review, back-in-stock, and list win-back — with consent and without spam.",
  lead: [
    "A trigger email goes out automatically after an action or event: subscribe, order, abandoned cart, birthday, a long pause. It’s not a “every Monday” digest — it’s a response to someone’s behavior.",
    "Below: why triggers help business, which scenarios work most often, and how not to slide into spam. Build the list with consent; we don’t use scraping other people’s addresses.",
  ],
  faq: [
    {
      q: "How does a trigger differ from a regular send?",
      a: "A regular send goes by calendar to everyone or a segment. A trigger fires on an event for a specific person (or a narrow group with the same event).",
    },
    {
      q: "Is a trigger the same as a transactional email?",
      a: "They partly overlap. Transactional (receipt, order status) are often service-required; marketing triggers (cart, recommendations) are optional and need careful frequency.",
    },
    {
      q: "Where should a beginner start?",
      a: "Welcome after subscribe and an abandoned cart/lead reminder — if you have a store or form. Then post-purchase and win-back for sleepers.",
    },
    {
      q: "Do I need an ESP?",
      a: "Yes — an email service or CRM with automations is easier. Check site/CMS integrations and anti-spam rules.",
    },
    {
      q: "Can I send without consent?",
      a: "Not for marketing. You need an opt-in list and a clear unsubscribe. Otherwise complaints, blocks, and reputation risk.",
    },
  ],
  sections: [
    {
      title: "Why triggers",
      level: 2,
      paras: [
        "The message arrives when it’s relevant: just subscribed, left items in cart, received an order. Opens and conversion are usually higher than the same blast for everyone.",
        "Time saved: you set the scenario once, then the system nurtures the customer. Judge results by opens, clicks, and reorder — not how pretty the template looks.",
      ],
      lists: [
        {
          intro: "Pros:",
          items: [
            "personalization by action",
            "fast response without a manual blast",
            "clear scenario stats",
            "fewer noisy mass emails",
          ],
        },
      ],
    },
    {
      title: "Simple scenarios",
      level: 2,
      paras: [
        "Welcome: confirm subscribe, set expectations, first useful piece or promo — without an aggressive storefront in email one.",
        "By date: birthday, purchase anniversary, event/webinar reminder. Tone — help, not pressure.",
        "Did the action — got the bonus: after a target step (sign-up, paid plan) send a personal code or instructions. Tie the chain to promo activation so you don’t promise empty offers.",
      ],
      links: [
        {
          label: "Email list from social",
          href: "/en/blog/baza-email-socseti/",
        },
        {
          label: "Customer greetings",
          href: "/en/blog/pozdravlenie-klienta/",
        },
      ],
    },
    {
      title: "Abandoned cart and order",
      level: 2,
      paras: [
        "A reminder after a few hours (and a soft follow-up in 1–2 days if needed) with cart contents and a clear CTA. Don’t bombard hourly.",
        "After order — status, thanks, relevant related-product suggestions. The recommendation block must fit, not a random catalog.",
        "More on why people abandon checkout — in the abandoned-cart article.",
      ],
      lists: [
        {
          intro: "How it’s built technically:",
          items: [
            "site/CRM event into the ESP",
            "transactional template with order data",
            "“cart not empty for N hours” segment for a regular pass — weaker, but sometimes a start",
          ],
        },
      ],
      links: [
        {
          label: "Abandoned cart",
          href: "/en/blog/broshennaya-korzina/",
        },
      ],
    },
    {
      title: "Review, price, stock, win-back",
      level: 2,
      paras: [
        "Ask for a review after the customer actually received and used the product (timing depends on niche: food faster, furniture longer).",
        "Price drop / back in stock — to people who showed interest. Don’t spawn an email per SKU the same day unnecessarily; sometimes one change digest is better.",
        "Win-back: for people who haven’t visited in a while — a soft reason to return (what’s new, unread, value), not “we miss you” with no offer.",
      ],
    },
    {
      title: "Rules so you don’t burn the list",
      level: 2,
      paras: [
        "Consent, one-click unsubscribe, honest subject lines. Cap frequency per person: several triggers a day risk irritation.",
        "Sync statuses: bought — don’t send cart; unsubscribed — don’t send marketing. Test subject and timing on a small segment.",
        "SMS and messengers are separate channels with their own rules; don’t blindly copy email triggers there.",
      ],
      lists: [
        {
          intro: "Launch mini checklist:",
          items: [
            "event and delay defined",
            "template with personalization and CTA",
            "exclusions (bought / unsubscribed)",
            "scenario metrics in the report",
            "a legally clean list",
          ],
        },
      ],
      links: [
        {
          label: "SMS marketing",
          href: "/en/blog/sms-rassylka/",
        },
        {
          label: "Online store sales",
          href: "/en/blog/prodazhi-internet-magazin/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A trigger is an automatic response to an action — not a replacement for content newsletters.",
        "Start with welcome and cart/lead, then grow chains.",
        "Without consent and frequency control any “smart” scenario becomes spam.",
      ],
    },
  ],
  closing: [
    "Set one welcome email for new subscribers this week and measure opens — faster than designing ten complex chains at once.",
  ],
  related: [
    "broshennaya-korzina",
    "baza-email-socseti",
    "pozdravlenie-klienta",
    "sms-rassylka",
    "prodazhi-internet-magazin",
    "pochtovyy-servis",
  ],
};
