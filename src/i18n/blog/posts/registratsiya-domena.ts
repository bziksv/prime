import type { BlogPost } from "../../../data/blog";

/** EN overlay for registratsiya-domena — same structure as RU JSON. */
export const registratsiyaDomenaEn: BlogPost = {
  slug: "registratsiya-domena",
  title: "How to register a domain name",
  date: "2017-11-13",
  category: "Hosting",
  cover: "/images/blog/registratsiya-domena/cover-en.webp",
  excerpt:
    "Domain registration step by step: registrar account, availability check, owner data, name servers, and payment—using a REG.ru-style flow as an example, without outdated account screenshots.",
  lead: [
    "You register a domain with an accredited registrar: confirm the name is available, enter owner data, set hosting nameservers if needed, and pay for a term (usually at least one year).",
    "The flow below is the usual path. REG.ru and other registrars have redesigned their UIs; payment options from 2017 guides are outdated too. Follow the registrar’s live checkout. Zone and name choice are covered in the TLD and `.рф` articles.",
  ],
  faq: [
    {
      q: "Should I register the domain with the same host?",
      a: "You can, but keeping them separate is often easier: simpler to change hosting without migrating the domain under one vendor contract in a panic.",
    },
    {
      q: "Why do registrars ask for passport data?",
      a: "Registry/legal requirements for zones like .ru/.рф. Owner data doesn’t have to appear as a public WHOIS listing — check the registrar’s privacy policy.",
    },
    {
      q: "What are name servers?",
      a: "Pointers to where the domain’s DNS lives. Hosting or a DNS service provides them. Without correct nameservers the site won’t open by name even if the domain is paid.",
    },
    {
      q: "Is REG.ru required?",
      a: "No. It’s an example of a popular registrar. Criteria: accreditation, support, renewal price, 2FA, DNS convenience.",
    },
    {
      q: "Should I enable auto-renewal?",
      a: "Useful if the card is current and you control charges. Otherwise a reminder calendar + manual renewal ahead of time.",
    },
  ],
  sections: [
    {
      title: "Choose the name, then create an account",
      level: 2,
      paras: [
        "The domain should be short, pronounceable, and available in the zone you need. Check several options: availability, history (not a burned spam domain), and trademarks.",
        "Choosing the zone (.ru, .com, .рф…) is a separate decision; registration only locks in the name you already picked.",
      ],
      links: [
        {
          label: "Top-level domain",
          href: "/en/blog/domen-pervogo-urovnya/",
        },
        {
          label: ".рф domain",
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
        "In domain registration, enter the name: the account shows available zones and price. Remove extra names from the upsell cart so you don’t pay for an accidental bundle.",
        "At the add-ons step they often offer hosting, email, SSL, auto-renewal, and “premium DNS.” Take only what you need: hosting can be ordered separately; nameservers can be set later by hand.",
      ],
      lists: [
        {
          intro: "Before paying, check:",
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
          title: "Account UI",
          text: "“Register / Express / Continue” buttons and menu paths at REG.ru and competitors changed. Step meaning is the same: pick name → data → DNS/NS → pay.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Owner data and nameservers",
      level: 2,
      paras: [
        "Many zones need accurate registrant data (person or organization). That’s who is responsible for the domain—not posting your passport online.",
        "Nameservers link the name to hosting. Take values from the host (often two to four records like `ns1…` / `ns2…`) or keep DNS at the registrar and create A/CNAME records to the IP or host.",
      ],
      tables: [
        {
          caption: "After payment",
          headers: ["What to check", "Why"],
          rows: [
            ["Status in the account", "Domain listed, renewal term"],
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
        "Pay with a method available in the account (card, business invoice, etc.). Old articles listed specific wallets—the set changes; check the registrar’s current checkout.",
        "Renew early: after expiry you risk losing the name. A calendar plus auto-renewal with balance control beats “I’ll remember the day before.”",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Registration = available name + owner data + DNS/nameservers + term payment. Pick the registrar deliberately; REG.ru in old guides is an example, not the only option.",
        "Zone choice and history checks are in related articles; domain email is set up separately.",
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
    "Check name availability, register it with correct data and nameservers, pay for the term, and put the renewal date on the calendar right away—so the domain becomes your working address, not a forgotten cart line.",
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
