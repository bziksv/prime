import type { BlogPost } from "../../../data/blog";

/** EN overlay for problemnye-klienty — same structure as RU JSON. */
export const problemnyeKlientyEn: BlogPost = {
  slug: "problemnye-klienty",
  title: "11 types of difficult clients — and how to work with them",
  date: "2018-07-19",
  category: "Digital marketing",
  cover: "/images/blog/problemnye-klienty/cover-en.webp",
  excerpt:
    "Unsure, know-it-all, aggressive, impulsive, cautious, chatty, dissatisfied, tactless, thrifty, demanding, and pessimist — portraits and workable replies without escalation.",
  lead: [
    "A difficult client isn’t always “bad”: often it’s stress, fear of a mistake, or a habit of controlling price. Service error — answering emotion with emotion and getting a review that costs more than one deal.",
    "Here are eleven types from sales and support practice (retail, e-com, services) with short reply patterns. These aren’t personality diagnoses — they’re guides for scripts and manager training.",
  ],
  faq: [
    {
      q: "Do I have to tolerate any behavior?",
      a: "No. Calm and help — yes; insults and threats — a stop line by company rules, with a record and escalation.",
    },
    {
      q: "Is this only for offline retail?",
      a: "No. The same types show in chats, messengers, and on the phone — the channel changes, not the logic.",
    },
    {
      q: "How fast can I “guess” the type?",
      a: "From the first lines: questions with no decision, “I know everything” references, deadline pressure, haggling, complaints. Don’t stick a label forever — adjust as the dialogue goes.",
    },
    {
      q: "What matters more than a script?",
      a: "Tone, facts about the product/order, and the right to say “we can’t do that — here’s an alternative”. A script is a frame, not reading from a sheet.",
    },
    {
      q: "How does this relate to managing an online store?",
      a: "Yes: part of the role is closing objections and conflict scenarios without losing margin or reputation.",
    },
  ],
  sections: [
    {
      title: "Unsure, know-it-all, aggressive, impulsive",
      level: 2,
      paras: [
        "The unsure (“I’ll think about it”) asks many questions and delays. Find the stop-factor, don’t push, acknowledge the hard choice, and offer a clear option for the job — not “just take it already”.",
        "The know-it-all cites “I read it online” and reacts sharply to critique. Keep a professional tone, stay on point, and add facts they don’t have (warranty, kit, timing) without a “who’s smarter” fight.",
        "The aggressive one presses with complaint and emotion. Don’t argue, stay calm, show attention to their case, offer alternatives, and acknowledge feelings (“I get the frustration”) without admitting false claims unchecked.",
        "The impulsive wants “this one, now”. Shorten the path: brief substance, an obvious option, fast checkout — no long lecture on specs.",
      ],
      lists: [
        {
          intro: "Shared frame for a stressful dialogue:",
          items: [
            "listen and restate the problem in your words",
            "give a fact/frame (timing, price, stock)",
            "offer 1–2 clear next steps",
            "lock the agreement in chat/CRM.",
          ],
        },
      ],
      links: [
        {
          label: "Online store manager",
          href: "/en/blog/menedzher-internet-magazina/",
        },
      ],
    },
    {
      title: "Cautious, chatty, dissatisfied, tactless",
      level: 2,
      paras: [
        "The cautious fears a mistake and piles on questions. Answer short and clear, without “space-level” detail; show you hear their risk and steer to solving the job.",
        "The chatty one is friendly but eats time. Listen, paraphrase the point, ask closed questions (yes/no), and gently return to product/service choice.",
        "The dissatisfied arrives already “everything’s wrong”. Don’t justify at once or take the tone personally: show attention, clarify the fact, apologize for a service miss if needed, and offer a way out.",
        "The tactless (“center of the world”) doesn’t respect others’ time. Calmly clarify the ask, reply by priority, anticipate typical questions — without rudeness back.",
      ],
    },
    {
      title: "Thrifty, demanding, pessimist",
      level: 2,
      paras: [
        "The thrifty compares prices and waits for a discount. Clarify the budget frame, show available options and value (warranty, kit, delivery) — not only “another percent off”.",
        "The demanding wants what’s not in assortment. Dialogue: understand the need → max from stock or an honest alternative / made-to-order timing — no “we’ll do the impossible tomorrow” promises.",
        "The pessimist finds “nothing right”. Don’t argue with the mood: find the cause of the negativity and offer a concrete fix (replacement, return by rules, another SKU).",
        "Bottom line: a bad review hits harder than one retained deal. A calm process and locked agreements turn a hard contact into normal service — and sometimes a repeat purchase.",
      ],
      links: [
        {
          label: "Online store sales",
          href: "/en/blog/prodazhi-internet-magazin/",
        },
        {
          label: "Online store usability",
          href: "/en/blog/yuzabiliti-internet-magazina/",
        },
      ],
    },
  ],
  related: [
    "menedzher-internet-magazina",
    "prodazhi-internet-magazin",
    "yuzabiliti-internet-magazina",
    "otchet-klientu",
  ],
};
