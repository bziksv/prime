import type { BlogPost } from "../../../data/blog";

/** EN overlay for otzyv-2gis — same structure as RU JSON. */
export const otzyv2gisEn: BlogPost = {
  slug: "otzyv-2gis",
  title: "How to remove a 2GIS review: what actually works",
  date: "2019-12-23",
  category: "SEO",
  cover: "/images/blog/otzyv-2gis/cover-en.webp",
  excerpt:
    "How to handle negative reviews on 2GIS: talk to the author, report to moderators, when not to close the listing, and why an honest review usually stays.",
  lead: [
    "Reviews on 2GIS shape choice: people look at rating, recent comments, and company replies. You can’t “erase negativity on demand” — the platform has rules, and deleting honest criticism hurts trust more than the review itself.",
    "Below: working scenarios — talk to the author, report a rules breach, what not to do with the listing, and how to reduce the flow of negativity. Reply tone is covered in the companion piece on negative reviews.",
  ],
  faq: [
    {
      q: "Can you delete any negative review?",
      a: "No. An honest take on the experience usually stays. Moderation removes or hides what breaks the rules: insults, spam, others’ personal data, ads, clear fakes — by their decision.",
    },
    {
      q: "Does a complaint that “I don’t like the rating” help?",
      a: "Usually not. You need facts of a rules breach and proof (receipts, chat, on-site video — as relevant), not a taste argument.",
    },
    {
      q: "Should you close the company on 2GIS because of reviews?",
      a: "An extreme, risky move: you lose the listing, history, and trust; search traces may remain. Start with replies, case reviews, and rule-based reports.",
    },
    {
      q: "Must a client delete a review after compensation?",
      a: "No. You may ask them to update the review after the issue is fixed — without pressure, threats, or “we revoke the discount unless you delete.”",
    },
    {
      q: "Should you reply in public?",
      a: "Yes — short and concrete: acknowledge the fact (if true), offer a contact channel, show the next step. Silence reads worse than an average reply.",
    },
    {
      q: "Are old “mail forms” and display-control tips still valid?",
      a: "2GIS UI and channels change. Follow the business help center and your organization dashboard; don’t copy outdated 2019 addresses or buttons blindly.",
    },
    {
      q: "How is this different from answering negativity in general?",
      a: "Here the focus is 2GIS mechanics. Tone, apologies, and speed are in the negative-review piece.",
    },
  ],
  sections: [
    {
      title: "What you can and can’t expect from 2GIS",
      level: 2,
      paras: [
        "2GIS is a map and directory with reviews. The company manages the listing (data, photos, replies) but doesn’t edit strangers’ texts like a blog. Moderation follows platform rules — not “this is inconvenient for SEO.”",
        "Realistic goal: remove violations, answer honest criticism, fix the process, and earn normal reviews. Unrealistic — zero the rating with a “delete all bad” button.",
      ],
      lists: [
        {
          intro: "Typical outcomes:",
          items: [
            "the review stays; your reply appears",
            "the author updates or removes the review after the issue is solved",
            "moderation removes material for a rules breach",
            "the report is rejected — you keep working the reply and the service",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Fake positive reviews and gray-market deletion via middlemen break the rules and are risky. Don’t use those schemes.",
        },
      ],
    },
    {
      title: "Talk to the review author",
      level: 2,
      paras: [
        "The most human path: contact the author (if contact is in the review/thread or the client is known from the order) and calmly unpack the case. The goal is to solve the problem; deletion or an edit may be a side effect — not a deal condition.",
        "Reactions vary: mood, how angry they are, expectations of the service. If they’re not ready to talk — don’t push with public blame.",
      ],
      lists: [
        {
          intro: "How to run the conversation:",
          items: [
            "thank them for feedback without corporate fluff",
            "clarify facts: product, timeline, staff, expectation vs reality",
            "offer a concrete next step (rework, replacement, return visit, compensation per company rules)",
            "don’t demand deletion as the only condition for help",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Related reading",
          text: "Reply tone, apologies, and speed are covered separately: /en/blog/negativnyy-otzyv/.",
        },
      ],
    },
    {
      title: "Report to moderators",
      level: 2,
      paras: [
        "If the review has insults, threats, personal data, competitor ads, a clear fake, or another rules item — use the report control on the review in the 2GIS UI (button labels change over time).",
        "Prepare proof with the report: contract, receipt, chat, on-site photo, order-status screenshot. “The client is wrong about the service” without a rules breach is a weak deletion argument.",
      ],
      lists: [
        {
          intro: "Before you report:",
          items: [
            "re-read the current 2GIS review rules",
            "separate emotions from breach facts",
            "save a screenshot and the review link",
            "in parallel, publish a calm reply for readers",
          ],
        },
      ],
    },
    {
      title: "Closing the listing and “zeroing” reviews",
      level: 2,
      paras: [
        "Older guides suggested closing the company or mass-hiding reviews. Those are radical moves: you lose map presence, trust history, and often get a worse search effect (“branch removed,” caches, mirrors).",
        "Even if an interface once allowed service requests to hide reviews, you can’t rely on 2019 mail forms: support channels and plans change. Check 2GIS help for organizations and your dashboard status.",
        "Practical takeaway: closing the listing is not a reputation strategy. Start with replies, process fixes, targeted reports, and new honest reviews.",
      ],
      lists: [
        {
          intro: "Downsides of “nuke the listing”:",
          items: [
            "lose a local lead channel",
            "negativity leftovers in search",
            "you must re-verify and refill the profile",
            "a “they’re hiding something” signal for attentive clients",
          ],
        },
      ],
    },
    {
      title: "Stop negativity before it goes public",
      level: 2,
      paras: [
        "It’s easier not to reach a public conflict: a short post-visit survey, “is everything OK?”, a fast reply to a complaint before someone opens 2GIS.",
        "A negative review is diagnostics. Fix the process (wait, communication, quality) and close the gap — or complaints will repeat with new authors.",
      ],
      lists: [
        {
          intro: "Prevention:",
          items: [
            "lock promises (timing, scope, price) before delivery",
            "give a simple complaint channel (phone/chat), not only the map",
            "monitor new reviews and reply the same day",
            "ask happy clients for reviews without fake-review scripts",
            "train staff not to argue in public — escalate inside",
          ],
        },
      ],
      tables: [
        {
          caption: "Scenario → first step",
          headers: ["Situation", "What to do first"],
          rows: [
            ["Honest, on-topic criticism", "Public reply + internal review"],
            ["Insults / spam / fake", "Report + evidence"],
            ["Client is reachable", "Dialogue and case resolution"],
            [
              "Lots of old negativity",
              "Replies, improvements, new reviews — not nuking the listing",
            ],
          ],
        },
      ],
    },
    {
      title: "Checklist for negativity on 2GIS",
      level: 2,
      paras: [
        "Keep a simple order: don’t panic → check facts → reply in public → resolve with the client → report only on a rules breach → improve the process.",
        "A 2GIS listing complements the site and other maps (Yandex, Google). Consistent NAP and the same “how we reply” story matter more than scrubbing one platform.",
      ],
    },
  ],
  related: [
    "negativnyy-otzyv",
    "google-biznes",
    "yandeks-spravochnik",
    "otzyvy-dlya-prodazh",
  ],
};
