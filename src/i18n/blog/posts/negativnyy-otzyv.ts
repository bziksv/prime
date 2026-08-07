import type { BlogPost } from "../../../data/blog";

/** EN overlay for negativnyy-otzyv — same structure as RU JSON. */
export const negativnyyOtzyvEn: BlogPost = {
  slug: "negativnyy-otzyv",
  title: "How to reply to a negative review: rules and examples",
  date: "2019-12-04",
  category: "Digital marketing",
  cover: "/images/blog/negativnyy-otzyv/cover-en.webp",
  excerpt:
    "How to answer negative reviews without aggression or flattery: apologies when warranted, speed of response, a real fix, and giving a choice — with auto-service examples you can reuse.",
  lead: [
    "Before choosing a service, people often read the negative reviews first. Criticism helps find service gaps, but with no reply it pushes the next clients away harder than you’d like.",
    "Tone, apologies, speed on platforms, and a real fix matter more than a polished “we apologize” template. The auto-service examples below transfer easily to other services.",
  ],
  faq: [
    {
      q: "Should you reply even if the client is wrong?",
      a: "Yes — calmly and on facts. Aggression and “your fault” amplify negativity and draw an audience to the fight.",
    },
    {
      q: "Do you always need to apologize?",
      a: "When a service error is confirmed — yes, specifically. For disagreement with pricing or rules, politely explain conditions rather than template-repent.",
    },
    {
      q: "Should you delete the negative review?",
      a: "No, unless it’s spam/abuse under the platform rules. Removing honest criticism hits trust.",
    },
    {
      q: "How long can you wait before replying?",
      a: "Faster is better: hours to a day on maps and review sites. Turn on alerts for new reviews.",
    },
    {
      q: "Is a “we apologize” template enough?",
      a: "No. You need the substance of the issue, a next step, and a real fix. Empty politeness reads as a brush-off.",
    },
    {
      q: "Where should you monitor reviews?",
      a: "Maps, local directories, industry platforms, ratings, topical forums — wherever your niche actually reads reviews.",
    },
  ],
  sections: [
    {
      title: "No aggression — even if the client is wrong",
      level: 2,
      paras: [
        "Rudeness, sarcasm, and “find another service” gather a second wave of negativity. Other readers judge not only the reviewer, but the company’s tone.",
        "Stay restrained: thank them, state your position on the merits, offer to unpack the case. Explaining technical nuances and discount terms is fine — humiliation is not.",
      ],
      lists: [
        {
          intro: "Phrases better not to write:",
          items: [
            "“don’t like it — do it yourself”",
            "“our specialists never make mistakes”",
            "“it’s your own fault”",
            "“pity you don’t get it.”",
          ],
        },
      ],
    },
    {
      title: "No flattery or template sweetness",
      level: 2,
      paras: [
        "Too much “dear / endlessly glad” often sounds fake. A neutral friendly tone and specifics work better: what we’ll check, what we’ll do, where to write.",
        "You can update the reply as you dig in: first acknowledgment, then the check result — so it’s clear the company didn’t brush off and forget.",
      ],
    },
    {
      title: "Apologies and empathy on the merits",
      level: 2,
      paras: [
        "Apologize when a staff error is confirmed: work quality, rudeness, a broken agreement. Say what you found and what measures you took — otherwise “sorry for the inconvenience” reads as a placeholder.",
        "Don’t apologize for the price list itself or rules that apply to everyone: calmly explain the logic (e.g. a labor discount when parts are bought from the shop). Fitting empathy (“I understand that’s unpleasant”) builds trust if it doesn’t turn theatrical.",
      ],
    },
    {
      title: "Speed and every platform",
      level: 2,
      paras: [
        "Negativity doesn’t live on one site only: maps, directories, ratings, industry forums. Get access to the business profile and turn on new-review alerts.",
        "A fast reply shows you care. Silence on maps while ads run looks especially bad.",
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "Fix the problem — don’t just “close the comment”",
      level: 2,
      paras: [
        "The goal is to restore trust: fix the mistake, compensate by the rules, agree the next step. If you need time — give a rough horizon and ask for a contact to clarify.",
        "Write in plain language. Bureaucratese (“you should contact a manager”) sounds indifferent. Better: “I want to help sort this out — please call…”.",
      ],
      lists: [
        {
          intro: "A working reply frame:",
          items: [
            "greeting and thanks for the review",
            "briefly on the substance of the claim",
            "what we’ll check / already found",
            "a concrete next step and contact",
            "after resolution — a short update in the thread.",
          ],
        },
      ],
      notes: [
        {
          title: "Logic example (auto service)",
          text: "A client compares oil-change price “with your oil” vs “with their own.” In the reply, calmly explain the discount when consumables are bought from the shop and the normal residual oil in the system — and offer to discuss the specific order, instead of arguing “we have the best mechanics.”",
          kind: "tip",
        },
      ],
    },
    {
      title: "Give the right to choose",
      level: 2,
      paras: [
        "If you no longer offer the service or the case isn’t your profile, don’t brush them off with “should’ve read the price list.” Offer alternatives: what you can do, where to go for a narrow task, which services you handle quickly and well.",
        "Sometimes suggesting an outside service looks like advertising a competitor — for readers it’s a honesty signal. Tact and help beat winning the thread.",
      ],
      links: [
        {
          label: "Touchpoints",
          href: "/en/blog/tochki-kontakta/",
        },
      ],
    },
  ],
  closing: [
    "A negative review is a public service test. Reply without aggression or flattery, apologize on the merits, fix the problem, and give a next step — then criticism more often strengthens reputation than breaks it.",
  ],
  related: [
    "otzyvy-dlya-prodazh",
    "tochki-kontakta",
    "sarafannoe-radio",
    "prodazhi-internet-magazin",
    "menedzher-internet-magazina",
    "google-biznes",
  ],
};
