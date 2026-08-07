import type { BlogPost } from "../../../data/blog";

/** EN overlay for tekst-email-rassylki — same structure as RU JSON. */
export const tekstEmailRassylkiEn: BlogPost = {
  slug: "tekst-email-rassylki",
  title: "Persuasive newsletter copy: 5 steps",
  date: "2019-09-24",
  category: "Email marketing",
  cover: "/images/blog/tekst-email-rassylki/cover-en.webp",
  excerpt:
    "How to write email copy: goals and segments, audience language, message types (welcome, sales, order), persuasion techniques, and a pre-send check — without the myth that “email is dead.”",
  lead: [
    "Design and personalization won’t save empty copy: if the email has no value and a clear next step, the subscriber closes it in seconds.",
    "Use this five-step plan: goal → reader → content → persuasion → check. Don’t treat “ROI over 28%” figures from old roundups as a guarantee — measure your own economics.",
  ],
  faq: [
    {
      q: "Should one email have one goal?",
      a: "Yes, preferably. Mixing education, sales, and service in one text confuses the CTA.",
    },
    {
      q: "Should I write the same email to new and loyal subscribers?",
      a: "No. Welcome and nurture differ from emails to regular customers.",
    },
    {
      q: "Where do I get audience language?",
      a: "Surveys, support, reviews, niche forums. Collect common wording and fears.",
    },
    {
      q: "Which email formats do I need?",
      a: "Minimum: welcome/onboarding, sales/offer, order service. Plus triggers.",
    },
    {
      q: "Is long copy worse than short?",
      a: "Length fits the job. What matters: paragraphs, subheads, a CTA above the “sheet.”",
    },
    {
      q: "What should I check before send?",
      a: "Subject, preheader, links, unsubscribe, mobile view, a test email to yourself.",
    },
    {
      q: "Is email outdated because of messengers?",
      a: "Not as an opt-in channel. Spam and emails without value go stale.",
    },
  ],
  sections: [
    {
      title: "Steps 1–2. Goal and reader",
      level: 2,
      paras: [
        "Split email jobs: inform, retain, sell. For the goal lock: current metrics (OR, CTR, unsubscribes), desired response, segment.",
        "Study the reader: which questions are already closed, which emotions show up in the choice. Write simply, hook with subject and lead, show how the product closes the need.",
      ],
      lists: [
        {
          intro: "Before the draft:",
          items: [
            "one email goal;",
            "segment (new / loyal / “asleep”);",
            "desired action;",
            "2–3 audience objections.",
          ],
        },
      ],
      links: [
        {
          label: "Email strategy",
          href: "/en/blog/email-strategiya/",
        },
      ],
    },
    {
      title: "Step 3. Content and email types",
      level: 2,
      paras: [
        "Turn research into a table: common wording, expectations, fears. Build copy from that: strong wording, value, different style per segment.",
        "Welcome — instructions, FAQ, benefits, soft onboarding. Sales — life after purchase, reviews, promos, loyalty. Order service — status, details, next step; those emails usually open more eagerly than promos.",
      ],
      links: [
        {
          label: "Triggered emails",
          href: "/en/blog/triggernye-rassylki/",
        },
        {
          label: "Strong email examples",
          href: "/en/blog/primery-email-rassylok/",
        },
      ],
    },
    {
      title: "Steps 4–5. Persuasion and check",
      level: 2,
      paras: [
        "Persuasion = clear benefit, proof, risk removal, one CTA. Don’t push fake scarcity in every email.",
        "Check: subject without deceptive clickbait, live links, images with alt, visible unsubscribe, test on smartphone and in several clients.",
      ],
      lists: [
        {
          intro: "Checklist before Send:",
          items: [
            "goal and CTA match;",
            "copy reads aloud;",
            "no “one to all” without a segment;",
            "test email to yourself/a colleague;",
            "list with consent.",
          ],
        },
      ],
      links: [
        {
          label: "Email for business",
          href: "/en/blog/email-dlya-biznesa/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Claims like “28% ROI” and “order emails open 8× more” are guides from old roundups, not your guarantee. Count conversions and complaints on your own list.",
  },
  closing: [
    "Lock the goal and segment, gather audience language, pick the email type, and run the checklist before send — so newsletter copy starts selling and helping, not just “taking space in the inbox.”",
  ],
  related: [
    "email-strategiya",
    "email-dlya-biznesa",
    "triggernye-rassylki",
    "primery-email-rassylok",
    "email-marketing-2020",
    "baza-email-socseti",
  ],
};
