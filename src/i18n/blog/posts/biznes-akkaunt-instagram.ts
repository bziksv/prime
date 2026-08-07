import type { BlogPost } from "../../../data/blog";

/** EN overlay for biznes-akkaunt-instagram — same structure as RU JSON. */
export const biznesAkkauntInstagramEn: BlogPost = {
  slug: "biznes-akkaunt-instagram",
  title: "Instagram business account: why you need it and how to set it up",
  date: "2022-01-19",
  category: "SMM",
  cover: "/images/blog/biznes-akkaunt-instagram/cover-en.webp",
  excerpt:
    "How an Instagram business or professional profile differs from a personal one: insights, contacts, ads. How to switch account type and what to avoid.",
  lead: [
    "For commerce on Instagram you usually need a business or professional profile: insights, contact buttons, access to ad tools. A personal blog without sales can stay regular.",
    "Menu item names change (sometimes “professional account”). Below — what the settings mean and a checklist, not clickbait based on 2020 screenshots.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Are business and professional the same?",
      a: "In essence it’s a mode for creators and companies with expanded insights and tools. Check exact labels in account settings.",
    },
    {
      q: "Is a Facebook link required?",
      a: "It used to be often required. Now it depends on region and goals (especially ads). If the step exists — follow the in-app wizard; if not — set up what’s available.",
    },
    {
      q: "What does business mode add over personal?",
      a: "Insights, header contacts, a category, and easier ways to run and analyze promotion.",
    },
    {
      q: "Can you switch back to personal?",
      a: "Usually yes, via account type settings. Some insights data may become unavailable.",
    },
    {
      q: "Is a business account enough without design?",
      a: "No. Account type is the base; offer, avatar, and feed style still decide whether someone stays. See the profile design article.",
    },
  ],
  sections: [
    {
      title: "Personal or business profile",
      level: 2,
      paras: [
        "Personal works for a diary and a narrow circle. Business/professional — when you need leads, sales, ads, and clear contacts.",
        "A creator with integrations also benefits from professional mode: you see what works in content.",
      ],
      lists: [
        {
          intro: "Signals it’s time to switch:",
          items: [
            "you need phone, email, or address in the header;",
            "you review post and audience insights;",
            "you plan ads;",
            "you reply to clients as a company, not “just a blog”.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "What business mode gives you",
      level: 2,
      paras: [
        "The main thing is data and service buttons — not “magic growth”. Growth comes from content, offer, and traffic.",
      ],
      lists: [
        {
          intro: "Typical capabilities:",
          items: [
            "insights on reach, profile visits, saves, follower dynamics;",
            "best audience activity times — a guide, not dogma;",
            "contact buttons and category in the header;",
            "easier access to ad accounts and partner tools.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Insights show interest, but don’t replace lead tracking. Tie views to leads (promo code, UTM, CRM).",
        },
      ],
    },
    {
      title: "How to switch account type",
      level: 2,
      paras: [
        "In profile settings look for switch to professional/business account. The wizard will offer a category and, if needed, linking to Meta tools.",
        "If a Facebook link isn’t available or isn’t needed for current tasks — set up what the app allows now: category, contacts, insights.",
      ],
      lists: [
        {
          intro: "After switching, fill in:",
          items: [
            "a category close to the offer;",
            "contact buttons (call, email, DM, address);",
            "a current website or landing;",
            "one tone with the About block.",
          ],
        },
      ],
    },
    {
      title: "Header, category, and contacts",
      level: 2,
      paras: [
        "Category and buttons should match what’s written in the bio. A mismatch (“cafe” in category and “construction” in bio) confuses people and ads.",
      ],
      lists: [
        {
          intro: "Minimum commercial header:",
          items: [
            "who you are and what benefit you give;",
            "geo or work format;",
            "one main CTA;",
            "a working contact channel.",
          ],
        },
      ],
    },
    {
      title: "Insights: what to watch",
      level: 2,
      paras: [
        "Don’t look at likes only: reach, saves, replies, profile visits, where followers came from. Compare formats — post, carousel, Stories, short video.",
      ],
      lists: [
        {
          intro: "Weekly review:",
          items: [
            "top 3 posts by saves/replies;",
            "failing topics — what to drop;",
            "follows vs unfollows dynamics;",
            "which CTAs brought inquiries.",
          ],
        },
      ],
    },
    {
      title: "Mistakes with a business account",
      level: 2,
      paras: [
        "Switched account type and forgot content; turned on ads with no offer; don’t reply in DMs; category “for show”.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "empty insights with no action;",
            "broken links in the header;",
            "different phones in bio and on the site;",
            "switching back to personal “to hide” instead of proper moderation.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Expecting business mode to raise reach by itself. It’s a tools dashboard. Growth comes from content, cadence, and traffic.",
        },
      ],
    },
    {
      title: "Switching back to personal",
      level: 2,
      paras: [
        "If commerce is closed and you only need a personal diary — you can switch account type back in settings. Save needed reports first: some insights will leave the interface.",
      ],
      lists: [],
      links: [
        {
          label: "SMM manager: responsibilities",
          href: "/en/blog/menedzher-smm/",
        },
      ],
    },
  ],
};
