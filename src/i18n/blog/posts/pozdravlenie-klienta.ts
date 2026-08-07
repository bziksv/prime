import type { BlogPost } from "../../../data/blog";

/** EN overlay for pozdravlenie-klienta — same structure as RU JSON. */
export const pozdravlenieKlientaEn: BlogPost = {
  slug: "pozdravlenie-klienta",
  title: "How to wish a client happy birthday: email, SMS, and B2B",
  date: "2020-06-29",
  category: "E-mail marketing",
  cover: "/images/blog/pozdravlenie-klienta/cover-en.webp",
  excerpt:
    "How to write client birthday greetings: tone, personalization, email and SMS templates, a manager’s personal note, and B2B — without pushy ads.",
  lead: [
    "A client’s birthday is a chance to stay in touch without a hard sell. Template “Dear client!” lines and generator poetry annoy more often than they build loyalty.",
    "Below — four working scenarios: a company email, a manager’s personal message, a short SMS, and a partner-company greeting. Focus on tone and personalization, not a checkbox discount.",
  ],
  faq: [
    {
      q: "Do you need a discount in every greeting?",
      a: "No. Sometimes a warm text is enough. A promo code fits when it doesn’t drown the greeting or read like spam.",
    },
    {
      q: "Is a name in the subject and body required?",
      a: "Yes if the data is correct. A wrong name is worse than a generic greeting. Check the CRM before an auto-send.",
    },
    {
      q: "When should you send?",
      a: "On the birthday in the client’s convenient time zone, preferably morning. Being a week late kills the point.",
    },
    {
      q: "Email or SMS?",
      a: "Email for longer copy. SMS/messenger for short notes if the client already talks to you there and you have message consent.",
    },
    {
      q: "Can you mass-send the same text?",
      a: "Technically yes; by effect — weak. Build blocks (intro / wish / closing) so combinations don’t repeat.",
    },
    {
      q: "What about personal data?",
      a: "A birth date is personal data. Store and use it under consent and company policy; don’t buy “birthday databases”.",
    },
    {
      q: "Is a poetry generator OK?",
      a: "For business mail usually no: it sounds fake. Simple living language works better.",
    },
  ],
  sections: [
    {
      title: "Why greet — and where the line is",
      level: 2,
      paras: [
        "The goal is to show the client isn’t “a CRM row” and gently keep contact. A greeting doesn’t replace service and doesn’t fix a weak product.",
        "The line: don’t get overly familiar with a cold list, don’t push a purchase in every paragraph, don’t write to people who didn’t consent to mailings.",
      ],
      lists: [
        {
          intro: "Before an auto-send check:",
          items: [
            "consent and a current contact exist;",
            "name and date are correct;",
            "tone fits the niche (B2B ≠ kids’ store);",
            "email has an unsubscribe path.",
          ],
        },
      ],
    },
    {
      title: "A letter from the company",
      level: 2,
      paras: [
        "A corporate greeting scales well. To avoid sounding like copy-paste, collect 8–12 variants per part and combine: intro, wish, closing.",
        "Use the name. “Dear client” instantly reads as a bot. Keep language simple; “high style” feels fake. Humor — carefully and on-brand.",
      ],
      lists: [
        {
          intro: "Email structure:",
          items: [
            "name and greeting in the first line;",
            "1–2 warm, on-point wishes (success, rest, team);",
            "a short closing from the team / headcount;",
            "optionally — a soft offer without pressure.",
          ],
        },
      ],
      notes: [
        {
          title: "Tone example",
          kind: "tip",
          text: "“Happy birthday, Anastasia! From our team — success in your work and more quiet weekends. May the day be spent with people who value you. The “… ” team, 12 people.”",
        },
      ],
    },
    {
      title: "A personal greeting from the manager",
      level: 2,
      paras: [
        "A personal note beats a template when it has specifics: a client strength, a shared work moment, a sincere wish. Without that it becomes a stub again.",
        "Simple algorithm: write why you value the person → recall a live collaboration moment → add a wish in your own words and a signature.",
      ],
      lists: [
        {
          intro: "What to add in a personal letter:",
          items: [
            "a concrete thank-you (not “for cooperation in general”);",
            "a project or conversation detail;",
            "a wish without bureaucratic fluff;",
            "sender name and role.",
          ],
        },
      ],
    },
    {
      title: "SMS and short messages",
      level: 2,
      paras: [
        "SMS space is tight: name, greeting, one wish, brand sign-off. Long “may all dreams come true” lines and poetry almost always look templated.",
        "Write about this day, not an abstract “bright future”. If the channel is a messenger, the same brevity rules apply; don’t attach a heavy deck “as a gift”.",
      ],
      lists: [
        {
          intro: "Better not to:",
          items: [
            "poetry and generator rhymes;",
            "a wall of wishes for every life case;",
            "an aggressive discount with no context;",
            "sending without SMS consent.",
          ],
        },
      ],
    },
    {
      title: "B2B: company anniversary or decision-maker birthday",
      level: 2,
      paras: [
        "For a legal entity two tracks fit: a personal greeting for the decision-maker and a company anniversary note. In the second, show you know their product and service — not generic “success and prosperity”.",
        "Mention real collaboration: events, quality, deadlines. Owners prefer specifics over corporate clichés.",
      ],
      lists: [
        {
          intro: "In a B2B letter these work well:",
          items: [
            "name (and patronymic if that’s the local norm);",
            "a fact about their business (not invented);",
            "thanks for shared projects;",
            "a development wish without lectures.",
          ],
        },
      ],
    },
    {
      title: "Process in CRM and email tools",
      level: 2,
      paras: [
        "Automation helps you not forget dates. Automation without cleaning the base creates wrong names and “greetings” to churned clients.",
        "Set a segment “has date + consent + active client”, several text variants, and a human spot-check. For VIP — a manager task for a personal message, not only an email trigger.",
      ],
      lists: [
        {
          intro: "Mini process:",
          items: [
            "birth-date field in CRM;",
            "consent for the channel;",
            "trigger N hours before the date;",
            "A/B or template rotation;",
            "report: open/click without pushing a “sell on birthday” KPI.",
          ],
        },
      ],
      links: [
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
  ],
  closing: [
    "A good greeting is on time, by name, and without fakeness. Scale comes from template blocks and CRM; warmth comes from specifics and living language — not poetry and an aggressive promo code.",
  ],
};
