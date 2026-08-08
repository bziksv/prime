import type { BlogPost } from "../../../data/blog";

/** EN overlay for promo-instagram — same structure as RU JSON. */
export const promoInstagramEn: BlogPost = {
  slug: "promo-instagram",
  title: "Instagram Promote: how to boost a post and what to watch",
  date: "2020-07-22",
  category: "SMM",
  cover: "/images/blog/promo-instagram/cover-en.webp",
  excerpt:
    "What Instagram Promote is: when to boost a post, how to set goal and budget, and how it differs from full Ads Manager — without outdated payment screenshots.",
  lead: [
    "“Promote” in Instagram is a simplified ads launch from a ready post or Stories: you pick goal, audience, and budget right in the app. It’s not the same as a retail “store promo discount.”",
    "Below: what the tool does, setup logic, payment, and typical fails. Menu items and payment methods change; check Meta Business Help. Full Ads Manager lives in the Instagram ads article. Meta note is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is Promote different from Ads Manager?",
      a: "Promote is a quick boost from the app. Ads Manager gives more goals, placements, and optimizations. For tests Promote may be enough; for a system — the account.",
    },
    {
      q: "Do I need a business account?",
      a: "Usually yes: a professional/business profile and ads permissions. On a personal “just a blog” the button often doesn’t show.",
    },
    {
      q: "Can I edit the creative after launch?",
      a: "Often you can’t change the post creative “on the fly” in the same ad. Budget, duration, and audience can sometimes be edited in Ads — check current options.",
    },
    {
      q: "Is this the same as the site “promotions” article?",
      a: "No. That one covers retail discounts and mechanics. This one — paid Instagram post promotion.",
    },
    {
      q: "Why won’t my Instagram promo launch?",
      a: "No admin rights, wrong profile type, the post failed review, a payment or region issue. Check notifications and Help.",
    },
  ],
  sections: [
    {
      title: "Core idea: boost a post, not a “store discount”",
      level: 2,
      paras: [
        "You take already published content and pay for impressions/clicks/messages to a new audience under chosen parameters.",
        "Goal — leads, traffic, awareness, or audience growth — you set before launch. Without a goal the budget goes to “just reach.”",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Ads won’t save a weak post with a fuzzy offer. Clear frame and CTA first, then boost.",
        },
      ],
    },
    {
      title: "Before launch",
      level: 2,
      paras: [
        "Professional profile and ads access.",
        "Audience: geo, age, interests — or lookalike/retarget where available.",
        "Format: feed post and/or Stories — vertical for stories, offer readable without sound.",
        "Budget and duration: daily/total cap and a clear test (not “all money on day one”).",
      ],
      lists: [
        {
          intro: "Mini plan:",
          items: [
            "one goal for the test",
            "one strong creative",
            "UTM or promo code for measurement",
            "a stop threshold if CPL is bad",
          ],
        },
      ],
    },
    {
      title: "How to launch in the app",
      level: 2,
      paras: [
        "Open the post → “Promote” (or from insights / the profile ads center).",
        "Pick a goal (messages, visits, calls, audience — the set depends on version).",
        "Set audience and budget → preview → submit for review.",
        "Exact menu clicks change; if there’s no button — check account type and permissions.",
      ],
      links: [
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
        {
          label: "Business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Payment and review",
      level: 2,
      paras: [
        "Payment goes through a Meta billing profile: card and other methods available in the region. We don’t update old “QIWI/Sber as the only path” catalogs.",
        "Review can take time. A rejected post — fix per ads rules (copy, product, promises).",
        "Charges usually follow impressions/results within the budget; if you stop early — for what was actually delivered.",
      ],
    },
    {
      title: "Edit, pause, evaluate",
      level: 2,
      paras: [
        "In Ads / the ads center you can lower budget, change audience, or pause — as far as the UI allows.",
        "Look past ad likes: cost per result, dialogue quality, leads with UTM.",
        "A good Promote = clear offer + relevant audience + a fast landing — not “magic weekdays” from someone else’s roundups.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mix-up",
          text: "Cases of retail “Magnet × jewelry” discounts are store promos, not necessarily the Instagram Promote button. Discount mechanics — in a separate article.",
        },
      ],
      links: [
        {
          label: "Promotions (retail)",
          href: "/en/blog/promoaktsii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Instagram Promote = a quick content boost when you have permissions and payment.",
        "For campaign systems use the full account; for a post test — Promote after a strong creative.",
      ],
    },
  ],
  closing: [
    "Pick one strong post with a clear CTA, set one goal and a small test budget — faster to learn whether you need simplified Promote or already Ads Manager.",
  ],
  related: [
    "reklama-instagram",
    "biznes-akkaunt-instagram",
    "promoaktsii",
    "keisy-facebook-ads",
    "facebook-ads",
    "statistika-instagram",
  ],
};
