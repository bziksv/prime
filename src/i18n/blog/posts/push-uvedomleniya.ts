import type { BlogPost } from "../../../data/blog";

/** EN overlay for push-uvedomleniya — same structure as RU JSON. */
export const pushUvedomleniyaEn: BlogPost = {
  slug: "push-uvedomleniya",
  title: "Push notifications: what they are and how to use them",
  date: "2019-06-05",
  category: "Email marketing",
  cover: "/images/blog/push-uvedomleniya/cover-en.webp",
  excerpt:
    "Browser and mobile push: how they differ from email and SMS, who they help, how to get permission, what to write, and how not to tire subscribers — without spam in pop-ups.",
  lead: [
    "Push is a short on-screen alert: in the browser after the site’s permission, or in an app. Next to email, SMS, and retargeting it’s another way to bring back someone who already visited you.",
    "Who the channel fits, how browser subscription works, and basic frequency rules. Chrome/Safari policies and sender tools change — check current docs before launch.",
  ],
  faq: [
    {
      q: "How does push differ from email?",
      a: "Shorter, more instant, no subject line. Less room for meaning — higher irritation risk.",
    },
    {
      q: "Are browser and mobile push the same?",
      a: "Similar idea, different delivery: Web Push via browser/service worker; app push via the store SDK.",
    },
    {
      q: "Can I send without permission?",
      a: "No. The browser asks Allow/Block. After Block a normal repeat prompt is usually unavailable.",
    },
    {
      q: "Who benefits most from push notifications?",
      a: "Media, stores with promos, services with events (status, booking, update). Not equally useful in every niche.",
    },
    {
      q: "How often should I send pushes?",
      a: "Rarely and on purpose. Frequent pushes = unsubscribes and Block.",
    },
    {
      q: "Do I need my own server?",
      a: "Teams more often connect an ESP/push platform. Own stack — for teams with engineering.",
    },
    {
      q: "Does push replace SMS?",
      a: "No. SMS reaches a number; push only reaches subscribers with a live permission.",
    },
  ],
  sections: [
    {
      title: "How browser push works",
      level: 2,
      paras: [
        "On a visit the site may ask for notification permission. Allow — subscription; Block — the dialog usually won’t show again the normal way.",
        "Then messages go to subscribers: promo, news, abandoned cart, status. Open rates are often higher than email, but attention is shorter — copy and CTA must be instantly clear.",
      ],
      lists: [
        {
          intro: "Channel pros:",
          items: [
            "one-click subscribe",
            "fast on-screen show",
            "handy for urgent events",
            "complements email and SMS.",
          ],
        },
      ],
    },
    {
      title: "Who it helps and how to test",
      level: 2,
      paras: [
        "It makes sense if you have regular reasons to write and the audience returns often. For a one-off landing without return visits the effect is weaker.",
        "At the start: connect a provider, ask permission at a fitting moment (not in the first second), send a test to yourself, measure CTR and opt-outs.",
        "Compare with SMS and email: push is a short nudge; longer value belongs in the letter.",
      ],
      links: [
        {
          label: "SMS campaigns",
          href: "/en/blog/sms-rassylka/",
        },
        {
          label: "Triggered emails",
          href: "/en/blog/triggernye-rassylki/",
        },
        {
          label: "Email strategy",
          href: "/en/blog/email-strategiya/",
        },
      ],
    },
    {
      title: "Rules so you don’t annoy",
      level: 2,
      paras: [
        "Write short: what happened and why to open. Don’t push every social post.",
        "Segment: not every subscriber wants “hot” deals daily. Offer a way to turn notifications off and respect the refusal.",
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Permission-dialog screenshots and browser behavior are a ~2019 slice. Web Push, HTTPS, and request UX requirements have updated. Don’t use dark patterns like “allow or leave.”",
  },
  closing: [
    "Connect push where you have repeat reasons and one-click consent, test frequency on a narrow segment — and keep email/SMS nearby instead of replacing all communication with one pop-up.",
  ],
  related: [
    "sms-rassylka",
    "triggernye-rassylki",
    "email-strategiya",
    "tekst-email-rassylki",
    "email-dlya-biznesa",
    "retargeting",
  ],
};
