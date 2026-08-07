import type { BlogPost } from "../../../data/blog";

/** EN overlay for registratsiya-domena — same structure as RU JSON. */
export const registratsiyaDomenaEn: BlogPost = {
  slug: "registratsiya-domena",
  title: "How to register a domain with a registrar",
  date: "2017-11-13",
  category: "Internet marketing",
  cover: "/images/blog/registratsiya-domena/cover-en.webp",
  excerpt:
    "Domain registration step by step: registrar account, availability check, owner data, name servers, and payment — using a REG.ru-like flow as an example, without outdated cabinet screenshots.",
  lead: [
    "You register a domain with an accredited registrar: check the name is free, enter owner data, set hosting NS if needed, and pay for a term (usually from one year).",
    "Below — the general order. REG.ru and other cabinets changed; payment methods from 2017 guides (specific wallets) did too. Compass — the registrar’s current site. Choosing zone and name — in the TLD and `.р` articles.",
  ],
  faq: [
    {
      q: "Register the domain with the same hoster?",
      a: "You can, but separate is often easier: simpler to change hosting without moving the domain “inside one contract” in a panic.",
    },
    {
      q: "Why passport data?",
      a: "Registry/legal requirements for zones like .ru/.рф. Owner data doesn’t have to be a public WHOIS storefront — check the registrar’s privacy policy.",
    },
    {
      q: "What are name servers?",
      a: "Pointers to where the domain’s DNS lives. Hosting or a DNS service gives them. Without correct NS the site won’t open by name even if the domain is paid.",
    },
    {
      q: "Is REG.ru required?",
      a: "No. It’s an example of a popular registrar. Criteria: accreditation, support, renewal price, 2FA, DNS convenience.",
    },
    {
      q: "Should you enable auto-renewal?",
      a: "Handy if the card is current and you control charges. Otherwise a reminder calendar + manual renewal ahead of time.",
    },
  ],
  sections: [
    {
      title: "Name first, then the cabinet",
      level: 2,
      paras: [
        "The domain should be short, pronounceable, and free in the needed zone. Check several options: availability, history (not a “burned” spam domain), trademarks.",
        "Choosing the zone (.ru, .com, .р…) is a separate decision; registration only locks in the name you already picked.",
      ],
      links: [
        {
          label: "Top-level domain",
          href: "/en/blog/domen-pervogo-urovnya/",
        },
        {
          label: ".р domain",
          href: "/en/blog/domen-rf/",
        },
        {
          label: "Domain history",
          href: "/en/blog/istoriya-domena/",
        },
      ],
    },
    {
      title: "Registrar account",
      level: 2,
      paras: [
        "Create an account with a real email — confirmations and renewal reminders go there. Save the login in a password manager and enable 2FA if available.",
        "Social login is convenient, but a backup email/password login is still needed for years ahead.",
      ],
      links: [
        {
          label: "Password manager",
          href: "/en/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "Search and checkout",
      level: 2,
      paras: [
        "In domain registration enter the name: the cabinet shows free zones and price. Remove extra names from the “suggestion cart” so you don’t pay for an accidental bundle.",
        "At the add-ons step they often offer hosting, mail, SSL, auto-renewal, “premium DNS.” Take only what you need: hosting can be ordered separately; NS can be set by hand later.",
      ],
      lists: [
        {
          intro: "Before paying check:",
          items: [
            "exact domain spelling;",
            "zone and term;",
            "no extra services on the invoice;",
            "owner data without typos.",
          ],
        },
      ],
      notes: [
        {
          title: "Cabinet UI",
          text: "“Register / Express / Continue” buttons and menu paths at REG.ru and competitors changed. Step meaning is the same: pick name → data → DNS/NS → pay.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Owner data and NS",
      level: 2,
      paras: [
        "Many zones need accurate registrant data (person or organization). That’s responsibility for the resource — not “publishing a passport on the internet.”",
        "Name servers link the name to hosting. Take values from the hoster (often two–four records like `ns1…` / `ns2…`) or keep DNS at the registrar and create A/CNAME records to the IP/host.",
      ],
      tables: [
        {
          caption: "After payment",
          headers: ["What to check", "Why"],
          rows: [
            ["Status in the cabinet", "Domain listed, renewal term"],
            ["NS", "Point to your DNS/hosting"],
            ["WHOIS / card", "Owner and dates are correct"],
            ["Registrar email", "Renewal mail not in spam"],
          ],
        },
      ],
    },
    {
      title: "Payment and renewal",
      level: 2,
      paras: [
        "Pay with a method available in the cabinet (card, legal-entity invoice, etc.). Old articles listed specific wallets — the set changes; check the registrar’s current checkout.",
        "Renew early: after expiry you risk losing the name. A calendar + auto-renewal with balance control beats “I’ll remember the day before.”",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Registration = free name + owner data + DNS/NS + term payment. Pick the registrar deliberately; REG.ru in old guides is an example, not the only option.",
        "Zone choice and history checks — in related articles; domain email is set up separately.",
      ],
      links: [
        {
          label: "Email for your domain",
          href: "/en/blog/pochta-dlya-domena/",
        },
      ],
    },
  ],
  closing: [
    "Check name availability, register it with correct data and NS, pay the term, and put the renewal date in the calendar right away — so the domain becomes your working address, not a forgotten cart line.",
  ],
  related: [
    "domen-pervogo-urovnya",
    "domen-rf",
    "istoriya-domena",
    "pochta-dlya-domena",
    "veb-server",
    "menedzher-paroley",
  ],
};
