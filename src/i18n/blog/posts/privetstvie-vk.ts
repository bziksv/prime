import type { BlogPost } from "../../../data/blog";

/** EN overlay for privetstvie-vk — same structure as RU JSON. */
export const privetstvieVkEn: BlogPost = {
  slug: "privetstvie-vk",
  title: "VK community greeting: how to welcome guests and new followers",
  date: "2020-12-30",
  category: "SMM",
  cover: "/images/blog/privetstvie-vk/cover-en.webp",
  excerpt:
    "A VK group greeting: why use a widget or a message to newcomers, what to write, and how not to annoy — without hype for one app or promises of “instant growth.”",
  lead: [
    "A VK community greeting meets a guest or new follower: short who you are, what to do next, where the rules and offer live. It’s a funnel entry point, not a decorative banner.",
    "Below: the point of a greeting, text structure, and caution with widgets. Specific apps from the VK catalog (old guides often named SpyCat) change: use current community apps and VK Help, not 2020 screenshots.",
  ],
  faq: [
    {
      q: "Is a third-party widget required?",
      a: "No. Sometimes a pin, community menu, community-message greeting, or bot is enough. A widget is one option.",
    },
    {
      q: "Can the widget button send people to an external site?",
      a: "Depends on the app’s rules and VK. Some older widgets only allowed links inside the community. Check current limits.",
    },
    {
      q: "Will a greeting grow the group by itself?",
      a: "No. It lowers entry friction. Growth comes from content, offer, and acquisition — see group promotion.",
    },
    {
      q: "Is name personalization always a plus?",
      a: "Use it in moderation. A hard sell with first and last name can feel like spam.",
    },
    {
      q: "Should I show it to everyone or only followers?",
      a: "Guests — path to subscribe and rules. Followers — catalog, bonus, chat. Not one text for every status if you can segment.",
    },
  ],
  sections: [
    {
      title: "Why greet people",
      level: 2,
      paras: [
        "A newcomer doesn’t know what to tap. A greeting gives the next step: subscribe, open the menu, message a manager, read the FAQ, grab delivery terms.",
        "For commerce it’s a soft CTA. For a topical public — rules and tone.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "explain the community’s value",
            "route to catalog/services",
            "collect a message/lead",
            "send people to the rules",
            "announce a subscribe bonus (honestly)",
          ],
        },
      ],
      links: [
        {
          label: "VK group promotion",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
        {
          label: "Comments in a VK public",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "Text structure",
      level: 2,
      paras: [
        "Short headline, 1–2 benefit lines, one button/link with a clear action. No caps lock and five offers at once.",
        "Example logic: “You’re in community X — reviews and pricing live here. Message “PRICE” or open the menu.”",
      ],
      lists: [
        {
          intro: "Copy checklist:",
          items: [
            "clear who you are",
            "one main CTA",
            "no fake “today only −90%”",
            "tone matches the feed",
            "a path for people who haven’t subscribed yet",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "The greeting covers the cover and annoys: long copy, autoplay, aggressive pop-up. Better short and useful.",
        },
      ],
    },
    {
      title: "Where to place it: widget, menu, messages",
      level: 2,
      paras: [
        "An app widget in the community block is classic in old guides. Alternatives: a menu item, pinned post, greeting/keyboard in community messages, chat bot.",
        "Pick what admins’ roles actually support and what doesn’t break the mobile layout.",
      ],
    },
    {
      title: "If you install a greeting widget",
      level: 2,
      paras: [
        "Usual path: Manage → Apps → find a greeting widget → add → set text, visibility, button. App names and limits (one widget, internal links only) have changed — read the app card.",
        "Don’t promise yourself “SpyCat-case conversion”: measure your own clicks and messages.",
      ],
      lists: [
        {
          intro: "Before publishing the widget:",
          items: [
            "who sees the block (guests / members)",
            "the button goes where it should",
            "copy has no typos",
            "mobile view checked",
            "a replacement plan if the app is retired",
          ],
        },
      ],
    },
    {
      title: "Segments and offers",
      level: 2,
      paras: [
        "If the tool can vary copy by gender, city, or subscribe status — use it for usefulness, not creepy hyper-personalization. Guests — subscribe and entry offer; clients — support and catalog.",
        "Describe action bonuses honestly: discount terms, deadline, how to claim.",
      ],
      links: [
        {
          label: "VK messaging / broadcasts",
          href: "/en/blog/rassylka-vk/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A greeting is a clear first step for guests and newcomers. Copy and CTA matter more than the widget brand.",
        "Check current VK apps and don’t confuse a greeting with your only audience-growth channel.",
      ],
    },
  ],
  closing: [
    "Write one next step for a newcomer, pick a pin, menu, or widget, and check it on a phone — that’s how a community welcomes people instead of losing them between cover and wall.",
  ],
  related: [
    "raskrutka-gruppy-vk",
    "kommentarii-v-pablike-vk",
    "rassylka-vk",
    "idei-storis-vk",
    "aktivnost-vk",
    "privetstvie-sayta",
  ],
};
