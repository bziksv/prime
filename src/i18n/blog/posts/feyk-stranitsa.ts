import type { BlogPost } from "../../../data/blog";

/** EN overlay for feyk-stranitsa — same structure as RU JSON. */
export const feykStranitsaEn: BlogPost = {
  slug: "feyk-stranitsa",
  title: "Fake page: what it is and how to spot it",
  date: "2021-02-26",
  category: "Digital marketing",
  cover: "/images/blog/feyk-stranitsa/cover-en.webp",
  excerpt:
    "What counts as a fake page or fake account, why scammers build them, and how to verify authenticity — without how-tos for making forgeries.",
  lead: [
    "A fake page is a counterfeit site, landing, or profile that pretends to be a brand, store, or person. The goal is usually fraud, data theft, or black PR.",
    "How to spot a forgery and protect a brand. We don’t cover building fakes for spam or scams — and we don’t recommend it.",
  ],
  faq: [
    {
      q: "Is a “fake” in SEO a doorway?",
      a: "They’re sometimes confused. Doorways are search spam. A fake page is more often brand/payment impersonation. Both are harmful and risky.",
    },
    {
      q: "How do I check a store site?",
      a: "Domain and WHOIS age, contacts, off-site reviews, matching company details, HTTPS, and no odd redirects to payment.",
    },
    {
      q: "What if I find a brand fake?",
      a: "Save the URL and screenshots, complain to host/registry/platform, warn customers, involve lawyers if there’s damage.",
    },
    {
      q: "What about a fake social account?",
      a: "Check creation date, avatar, chat pushing “pay off-platform”, report to the network’s support.",
    },
    {
      q: "Do fakes help promotion?",
      a: "Not as a clean strategy. Forgeries and cloaking lead to bans and legal risk.",
    },
    {
      q: "Can I trust HTTPS on an unknown site?",
      a: "HTTPS protects the connection — it doesn’t prove the seller is honest. Check domain, company details, and independent reviews.",
    },
    {
      q: "Should I tell clients about a found clone?",
      a: "Yes. A short warning in official channels, the one correct domain — and don’t publish extra details that help attackers.",
    },
  ],
  sections: [
    {
      title: "Why forgeries get made",
      level: 2,
      paras: [
        "Phishing and login theft, selling nothing under someone else’s name, card data collection, smearing a competitor — common motives. Rarely there are “test” clones without malice, but those still mislead people.",
        "A fake can look convincing: attackers copy logo, colors, and copy. Visual similarity alone shouldn’t decide — especially before payment or a password.",
      ],
      lists: [
        {
          intro: "Typical kinds:",
          items: [
            "online-store clone",
            "fake “payment” / support",
            "counterfeit brand profile",
            "phishing “log into account” form.",
          ],
        },
      ],
    },
    {
      title: "How to spot it",
      level: 2,
      paras: [
        "Check the domain character by character — especially Latin/lookalike tricks — open the official URL from a bookmark, not a cold message. Review legal info, policy, and weird “today only” discounts.",
        "Compare contacts with the brand’s official surfaces and don’t pay via a link from chat. If the offer feels off, call a number from a verified site or ask through a known channel.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "typos in the domain",
            "no phone/address — or someone else’s",
            "pressure to “pay in 5 minutes”",
            "a form asking for email/bank passwords outside the bank.",
          ],
        },
      ],
    },
    {
      title: "Brand protection",
      level: 2,
      paras: [
        "Register sensible domain variants, monitor mentions, keep official links in header and footer, train support to recognize clone complaints.",
        "Assign an incident owner in advance and prep a client message template. Fast, calm communication limits damage better than arguing in comments.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "consistent NAP and company details",
            "a staff email for fake reports",
            "quick replies to clients on social",
            "no homemade “fake storefronts” for SEO.",
          ],
        },
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
      ],
    },
    {
      title: "What a visitor should do",
      level: 2,
      paras: [
        "If you already left data on a suspicious resource, stop and don’t send extra codes from messages. Change the password on the real service — especially if you reuse it elsewhere.",
        "If bank data may be compromised, contact the bank only via the number on the card or the official app. Keep chat, URL, and payment proofs for support and law enforcement.",
      ],
      lists: [
        {
          intro: "Safe check order:",
          items: [
            "don’t open payment from an unexpected link",
            "match domain and details to an official source",
            "look for reviews off the seller’s page",
            "report the suspicion to the real brand owner.",
          ],
        },
      ],
    },
    {
      title: "How to document and push for removal",
      level: 2,
      paras: [
        "A brand rep should save evidence before the page vanishes: full URL, date and time, screenshots, copy, contacts, and payment details. Don’t hack the clone or run revenge attacks.",
        "Next: platform support, hosting, or the domain registrar by their process. For damage, trademark, or personal-data misuse — involve a lawyer and file with the competent authorities.",
      ],
      lists: [
        {
          intro: "In the report include:",
          items: [
            "what object and rights are impersonated",
            "links to the official site and accounts",
            "proof of misleading content",
            "a contact for reply from the brand owner.",
          ],
        },
      ],
    },
  ],
};
