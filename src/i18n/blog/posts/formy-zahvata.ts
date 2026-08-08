import type { BlogPost } from "../../../data/blog";

/** EN overlay for formy-zahvata — same structure as RU JSON. */
export const formyZahvataEn: BlogPost = {
  slug: "formy-zahvata",
  title: "Lead capture forms on a site: types, goals, and how not to annoy",
  date: "2019-09-17",
  category: "Digital marketing",
  cover: "/images/blog/formy-zahvata/cover-en.webp",
  excerpt:
    "Lead forms on a site: why they exist, closed/open/double layouts, signup, callback, calculator, and chat scenarios — with personal-data consent and without popup spam.",
  lead: [
    "Traffic without a contact often ends in “I’ll think and forget.” A capture form (lead form) collects consent and a way to reach someone so you can return with an offer — not hope for a random revisit.",
    "Below: form types, job-based scenarios, and rules so the module helps instead of annoying. The basic “question/lead” form is also in the feedback piece; here the focus is capturing a lead for different goals.",
  ],
  faq: [
    {
      q: "Is a capture form the same as a feedback form?",
      a: "Close. “Feedback” is more about a question/complaint. “Capture” is about getting a contact for nurture and sales. In practice it’s one module — goal and fields change.",
    },
    {
      q: "How many fields should I put?",
      a: "The minimum for the next step. For a callback a phone is often enough; an operator can clarify the name. Extra required fields cut conversion.",
    },
    {
      q: "Do I need an exit pop-up?",
      a: "Only if there’s real value (discount, checklist). Empty “wait!” annoys and raises bounce.",
    },
    {
      q: "Is personal-data consent required?",
      a: "Yes if you collect personal data. A checkbox/link to the policy isn’t decoration — it’s a process requirement.",
    },
    {
      q: "Does chat replace the form?",
      a: "It complements it. Chat is good for quick questions; the form logs a lead when no operator is available or you need a structured request.",
    },
    {
      q: "Where should leads go?",
      a: "Into CRM, or at least email/messenger with an owner. A form with no handling = lost leads.",
    },
  ],
  sections: [
    {
      title: "Why a lead form is needed",
      level: 2,
      paras: [
        "A site’s goal isn’t visits, it’s actions: lead, call, signup, quote. A form lowers the barrier: someone leaves a contact when they’re not ready to buy yet, and you can remind them legally and on purpose.",
        "Without a contact, “compare competitors” often means they simply forget you. With a contact and consent you get the right to follow up.",
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Closed, open, and double",
      level: 2,
      paras: [
        "Closed: fields appear after a button click (“Request a call,” “Get a price list”). Less noise on the page. Open: fields visible at once — handy on a landing with hot traffic. Double: offer + fields in one block — fits promos and limited deals.",
        "Choice depends on design, promo, audience maturity, and product. Hot demand tolerates an open form; cold informational traffic more often needs a button and a soft path.",
      ],
    },
    {
      title: "Scenarios by goal",
      level: 2,
      paras: [
        "Signup: email or push with regular content/sales — one field and clear value. Callback: phone and preferably a time slot; the team must actually call back. Consultation: briefly describe the question so you can route a specialist.",
        "Get a price: a short calculator/quiz instead of “leave a phone into the void.” Chat: quick questions with a live operator in business hours. Registration/login: minimal fields and password recovery. Exit-intent: only a strong offer — otherwise don’t add it.",
      ],
      lists: [
        {
          intro: "What to check in every scenario:",
          items: [
            "one main form goal",
            "clear button copy",
            "personal-data processing consent",
            "who answers the lead and how fast",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
      ],
    },
    {
      title: "How to make the form usable",
      level: 2,
      paras: [
        "The form helps the user choose and get in touch — not rip a phone at any cost. Don’t cover content with a swarm of popups. The button is readable, style matches the site, after submit — “thanks” and a real reply horizon.",
        "Say thank you: email, bonus, next step. Test that leads arrive. Pushiness hits bounce harder than under-collecting leads.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Fewer required fields + clear benefit usually convert better than a long “just in case” questionnaire.",
        },
      ],
      links: [
        {
          label: "Site bounce rate",
          href: "/en/blog/otkazy-sayta/",
        },
        {
          label: "Personal account",
          href: "/en/blog/lichnyy-kabinet/",
        },
      ],
    },
  ],
  closing: [
    "A working capture form matches the page goal, collects minimum data with consent, and feeds a live sales process. Make it easy for the person — and leads stop being a number in analytics with no call.",
  ],
  related: [
    "forma-obratnoy-svyazi",
    "optimizatsiya-konversii",
    "lending",
    "otkazy-sayta",
    "lichnyy-kabinet",
    "metriki-reklamy",
  ],
};
