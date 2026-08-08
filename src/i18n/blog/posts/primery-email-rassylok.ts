import type { BlogPost } from "../../../data/blog";

/** EN overlay for primery-email-rassylok — same structure as RU JSON. */
export const primeryEmailRassylokEn: BlogPost = {
  slug: "primery-email-rassylok",
  title: "Email newsletter examples: techniques from global brands",
  date: "2020-03-20",
  category: "Email marketing",
  cover: "/images/blog/primery-email-rassylok/cover-en.webp",
  excerpt:
    "What to learn from strong emails: two offers in one letter, a warm welcome, a progress bar, a survey, a reminder, and an honest tone — without copying someone else’s layouts one-to-one.",
  lead: [
    "Subscribers see dozens of emails a week. What stands out isn’t “the prettiest templates,” but clear offers, the right tone, and a clear next step.",
    "Below: techniques from well-known global campaigns (Adobe, 1Password, Carnival, and others) as ideas for your list. Copying another brand’s layout is pointless; transfer the logic to your product and subscriber consent.",
  ],
  faq: [
    {
      q: "Should I repeat other people’s emails?",
      a: "No. Take the principle: structure, tone, CTA. Visuals and offer — yours.",
    },
    {
      q: "Are two offers in one email OK?",
      a: "Yes if the segment isn’t defined yet: compare plans/options and give a choice. Don’t turn the email into a shop window of ten buttons.",
    },
    {
      q: "Can a welcome email use humor?",
      a: "If the brand tone allows it. The main job is to explain account status and what to do next.",
    },
    {
      q: "Does a progress bar in email work?",
      a: "For donations and fundraising goals — yes: it shows “how much is left.” For a regular store, order status is usually a better fit.",
    },
    {
      q: "Is a post-purchase survey required?",
      a: "Not required, but useful: short feedback + a brand reminder. Don’t spam surveys every week.",
    },
    {
      q: "Where can I get ideas legally?",
      a: "Your own A/B tests, competitor emails from public opt-ins, ESP roundups — without scraping someone else’s lists.",
    },
    {
      q: "Is this tied to triggered emails?",
      a: "Many strong emails are triggered: welcome, reminder, survey after an event. See the separate piece.",
    },
  ],
  sections: [
    {
      title: "Choice and comparison in one email",
      level: 2,
      paras: [
        "In one email Adobe put two plans side by side so the user could choose. The technique helps when the segment is still rough or the offer is ambiguous.",
        "Practice: two clear cards, brief differences, one primary CTA per option. No wall of tiny text.",
      ],
    },
    {
      title: "Welcome tone and waiting",
      level: 2,
      paras: [
        "1Password’s welcome set a “homey” tone and explained the pause for account confirmation. The email lowers the anxiety of “why can’t I get in yet.”",
        "Match tone to the brand: irony sounds different at a bank vs a coffee shop. Always say how long to wait and where to write support.",
      ],
      links: [
        {
          label: "Triggered emails",
          href: "/en/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Offer creative, progress, and feedback",
      level: 2,
      paras: [
        "Strong emails play with an offer metaphor (like “prices hit rock bottom” for cruises), show a goal meter (fundraising), or ask for a short review after a product experience.",
        "“Open later” reminders and mini-quizzes work if they don’t block the email’s main job and don’t feel like spam games.",
        "Transfer the technique: one clear hook + value + button. Don’t paste someone else’s screenshots into your list as a “ready email.”",
      ],
      lists: [
        {
          intro: "What to put in an email checklist:",
          items: [
            "one main idea in the subject",
            "a clear CTA above the fold",
            "tone = brand",
            "mobile readability",
            "unsubscribe and consent in order",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Brand examples illustrate techniques as of the 2020 publication. Campaigns age; don’t promise the same metrics. Build the list with opt-in only.",
        },
      ],
      links: [
        {
          label: "Emails from social with consent",
          href: "/en/blog/baza-email-socseti/",
        },
      ],
    },
  ],
  closing: [
    "Break down 2–3 strong third-party emails into a technique (choice, tone, progress, feedback) and run one A/B on your segmented list — so inspiration becomes a result, not a layout copy.",
  ],
  related: [
    "triggernye-rassylki",
    "baza-email-socseti",
    "email-marketing-2020",
    "pochta-dlya-domena",
    "formy-zahvata",
  ],
} as BlogPost;
