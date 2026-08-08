import type { BlogPost } from "../../../data/blog";

/** EN overlay for spam-vk — same structure as RU JSON. */
export const spamVkEn: BlogPost = {
  slug: "spam-vk",
  title:
    "Spam on VK: what it is, how to report it, and what to do after a hack",
  date: "2020-11-24",
  category: "SMM",
  cover: "/images/blog/spam-vk/cover-en.webp",
  excerpt:
    "What counts as spam in VK messages and communities, why mass blasts are risky, how to report, and what to do if your page messages people without you — without a catalog of gray bulk-mail tools.",
  lead: [
    "Spam on VK is unwanted mass messages and pushy pitches without consent: in DMs, on the wall, in community comments. Often it’s ads, friend requests, or links with phishing risk.",
    "Below: how to spot it, report it, and protect the account. VK UI buttons change; look for “This is spam” or “Report” in the message, post, or profile menu. Legal community messaging is covered separately; we don’t catalog gray bots or bulk tools.",
  ],
  faq: [
    {
      q: "How is spam different from ads in the feed?",
      a: "Ads run through the VK ads account follow platform rules. Spam is a pushy blast without consent, often from fakes or hacked pages.",
    },
    {
      q: "Can I grow a group with mass messages?",
      a: "You risk blocks and reports. Better options: content, targeting, and legal community tools.",
    },
    {
      q: "What should I do with a friend request from a spammer?",
      a: "Don’t accept. You can leave them as a follower or report via the request or profile menu.",
    },
    {
      q: "Why are friends getting messages from my page?",
      a: "Often a hack or a malicious app with access. Change passwords, end sessions, and check connected apps.",
    },
    {
      q: "Does antivirus help after a hack?",
      a: "Yes, as part of the fix — plus email and VK passwords, sign out on all devices, and refuse suspicious links.",
    },
  ],
  sections: [
    {
      title: "What VK treats as spam",
      level: 2,
      paras: [
        "Mass same-type messages without a request: “subscribe,” “buy,” “click the link,” asks to send an SMS or code. Same pattern in comments and on the community wall.",
        "Suspicious signs: batches of friend requests, floods of identical comments, and links to third-party sites asking you to “log in with VK” outside the official domain.",
      ],
      lists: [
        {
          intro: "Typical spam goals:",
          items: [
            "inflate followers into a public",
            "sell a product or service outside the rules",
            "phish login and password",
            "send people to scam sites",
            "blast from a hacked account",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Using spam for “fast growth” leads to account limits and lost trust. It’s not a promotion channel.",
        },
      ],
    },
    {
      title: "How spam appears",
      level: 2,
      paras: [
        "Some blasts come from fake accounts and automation. Old 2020 tool and marketplace names don’t matter: the pattern is the same — mass outreach without consent.",
        "Another path is a hack: the user clicks a link, enters data on a fake form, or grants rights to a shady app. Then the page messages friends.",
      ],
      links: [
        {
          label: "Legal VK messaging",
          href: "/en/blog/rassylka-vk/",
        },
        {
          label: "Comments in a VK public",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "How to report",
      level: 2,
      paras: [
        "In DMs open the message menu (⋯ or similar) and pick report or “This is spam.” The exact button depends on the app and version.",
        "On a friend request — menu on the request or the person’s page → “Report” → spam or scam reason.",
        "In a community: post or comment menu → report. Admins benefit from filters and moderation so they don’t review everything by hand.",
      ],
      lists: [
        {
          intro: "Prevention in settings:",
          items: [
            "limit who can message you (privacy / “Contact me”)",
            "don’t accept unknown requests blindly",
            "don’t open odd short links from DMs",
            "don’t enter a VK password outside the official site or app",
          ],
        },
      ],
    },
    {
      title: "If your page is already blasting spam",
      level: 2,
      paras: [
        "Change the email password tied to the account, then the VK password. In security, end all active sessions. Check and revoke suspicious apps with access.",
        "Warn friends briefly: “if something weird was sent — it wasn’t me.” Run antivirus on the device, especially if you opened attachments or entered a password on a third-party site.",
      ],
      notes: [
        {
          title: "After recovery",
          kind: "tip",
          text: "Turn on login confirmation if available and review activity history — so you spot a repeat login faster.",
        },
      ],
    },
    {
      title: "For communities and business",
      level: 2,
      paras: [
        "Don’t reply to spam offers to “inflate followers” and don’t buy blasts to other people’s lists. Report and block.",
        "Your own messages to followers — only within VK rules and consent. Otherwise the reports land on you.",
      ],
      links: [
        {
          label: "Community greeting message",
          href: "/en/blog/privetstvie-vk/",
        },
        {
          label: "How to promote a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Spam is pushiness without consent and often access-theft risk. Reports and privacy settings cut the flow; after a hack, passwords and sessions matter.",
        "Community growth is built on content and legal tools, not bot blasts.",
      ],
    },
  ],
  closing: [
    "Saw a pushy message — mark it as spam and don’t open the link. Lead your audience through platform rules, not gray mass messaging.",
  ],
  related: [
    "rassylka-vk",
    "kommentarii-v-pablike-vk",
    "privetstvie-vk",
    "raskrutka-gruppy-vk",
    "aktivnost-vk",
    "instagram-direct",
  ],
};
