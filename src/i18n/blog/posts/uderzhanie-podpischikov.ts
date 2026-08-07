import type { BlogPost } from "../../../data/blog";

/** EN overlay for uderzhanie-podpischikov — same structure as RU JSON. */
export const uderzhaniePodpischikovEn: BlogPost = {
  slug: "uderzhanie-podpischikov",
  title: "How to keep email subscribers from leaving",
  date: "2018-05-25",
  category: "Email marketing",
  cover: "/images/blog/uderzhanie-podpischikov/cover-en.webp",
  excerpt:
    "Why people leave a list and how to cut unsubscribes: mobile layout, send timing, frequency, an unsubscribe page with a survey and alternatives, win-back offers — without clinging to a dead base.",
  lead: [
    "An unsubscribe isn’t always a failure: some people leave because the offer no longer fits. It’s worse when they leave because of bad UX, spammy frequency, or emails they can’t read on a phone.",
    "Fix exit causes inside the emails first, then build an honest opt-out page with a survey and softer alternatives. The goal is a live, interested list — not the longest “forever” file.",
  ],
  faq: [
    {
      q: "Are unsubscribes always bad?",
      a: "No. Clearing the uninterested improves deliverability. Mass exits from poor email quality are the real problem.",
    },
    {
      q: "What annoys people most?",
      a: "Sending too often, irrelevant content, layouts that break on mobile, and a multi-step unsubscribe flow.",
    },
    {
      q: "Do you need a survey on unsubscribe?",
      a: "Yes — a short one. It shows the reason; don’t make them re-enter the email.",
    },
    {
      q: "Can you offer less frequent mail?",
      a: "Yes: “less often” or “promos only” instead of a full opt-out is a common alternative.",
    },
    {
      q: "Is a win-back coupon ethical?",
      a: "If they haven’t fully confirmed opt-out yet and the offer fits. Don’t retain by deception.",
    },
    {
      q: "Does A/B testing send time help?",
      a: "Yes on your own list. Other people’s “morning vs evening” rules are hypotheses, not law.",
    },
    {
      q: "How does this relate to email strategy?",
      a: "Retention is part of email strategy: segments, value, frequency. See the separate article.",
    },
  ],
  sections: [
    {
      title: "Why they leave",
      level: 2,
      paras: [
        "No interest in the product, a move or context change, emails unreadable on phone, bad send time, too rare (brand forgotten) or too often (spam feel).",
        "Some reasons an offer can’t fix. Others sit squarely in marketing: layout, segmentation, schedule, value.",
      ],
      links: [
        {
          label: "HTML email layout",
          href: "/en/blog/verstka-email/",
        },
        {
          label: "Email design",
          href: "/en/blog/oformlenie-email/",
        },
      ],
    },
    {
      title: "Before unsubscribe: touch quality",
      level: 2,
      paras: [
        "Keep a solid mobile view, a clear preheader, and one email goal. Segment: newcomers and “sleepers” get different mail.",
        "Test frequency and timing with A/B on your list. Useful automated triggers retain better than empty digests “for the checklist.”",
      ],
      lists: [
        {
          intro: "Minimum against unsubscribes:",
          items: [
            "emails read well on a smartphone;",
            "there is value, not only a promo;",
            "frequency is predictable;",
            "one-click unsubscribe;",
            "segments instead of “one blast for all.”",
          ],
        },
      ],
      links: [
        {
          label: "Newsletter copy",
          href: "/en/blog/tekst-email-rassylki/",
        },
        {
          label: "Trigger emails",
          href: "/en/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "On the unsubscribe page and win-back",
      level: 2,
      paras: [
        "Make opt-out simple. Soft options help: light humor without mockery, “why are you leaving?”, “less often / important only,” an exclusive offer for those still unsure.",
        "Thank them for the time with you. Save the opt-out immediately — no dark patterns like “confirm again through three forms.”",
        "Use survey data to fix strategy and attract new people: list management is continuous.",
      ],
      links: [
        {
          label: "Email strategy",
          href: "/en/blog/email-strategiya/",
        },
        {
          label: "Consent-based email list",
          href: "/en/blog/baza-email-socseti/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Retention does not justify ignoring an opt-out or hiding unsubscribe. Follow consent and ESP / mailbox-provider rules.",
  },
  closing: [
    "First remove exit causes inside the emails themselves, then build an honest unsubscribe page with a survey and a “less often” alternative — the list gets smaller by count, stronger by response.",
  ],
  related: [
    "email-strategiya",
    "tekst-email-rassylki",
    "triggernye-rassylki",
    "verstka-email",
    "oformlenie-email",
    "baza-email-socseti",
  ],
} as BlogPost;
