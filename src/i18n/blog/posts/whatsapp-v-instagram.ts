import type { BlogPost } from "../../../data/blog";

/** EN overlay for whatsapp-v-instagram — same structure as RU JSON. */
export const whatsappVInstagramEn: BlogPost = {
  slug: "whatsapp-v-instagram",
  title: "WhatsApp* in an Instagram* profile: wa.me link and bio",
  date: "2021-11-02",
  category: "SMM",
  cover: "/images/blog/whatsapp-v-instagram/cover-en.webp",
  excerpt:
    "How to move a client from Instagram* to WhatsApp*: a wa.me link in the bio, greeting text, business-profile buttons, and a multi-link — without a catalog of outdated link-in-bio tools.",
  lead: [
    "A direct messenger chat often converts better than a long Direct thread: a number or ready WhatsApp* link in the Instagram* bio shortens the path from “saw the offer” to “sent a message.”",
    "Below: the `wa.me` format, prefilled greeting text, when a Call button is enough, and why you shouldn’t stack a dozen multi-link services. Menu labels change; check Meta Help. See the notice on this page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* and WhatsApp* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "What’s the correct link format?",
      a: "`https://wa.me/79001234567` — country code without “+”, brackets, or spaces. `api.whatsapp.com/send?phone=…` also works; for the bio a short `wa.me` is usually enough.",
    },
    {
      q: "Can you paste a number starting with 8?",
      a: "International format with a country code is more reliable (for Russia — 7…). Drop a leading 8 and separators.",
    },
    {
      q: "How do you add first-message text?",
      a: "Use the `text=` parameter with URL-encoded spaces (`%20` or `encodeURIComponent`). Example: `https://wa.me/79…?text=Hi%2C%20I%20want%20to%20ask%20about%20…`.",
    },
    {
      q: "Is the bio link clickable for everyone?",
      a: "The website or link field in the profile — yes, for guests. In a regular post caption a URL often isn’t tappable in the app — so people write “WhatsApp* in the bio” in posts explicitly.",
    },
    {
      q: "How is the Call button different?",
      a: "A business-profile button opens call, email, or address per settings. WhatsApp* chat is easier via `wa.me` in the link field or a multi-link item — if the goal is messaging.",
    },
    {
      q: "Do you need a separate service like Taplink?",
      a: "Only if you need several equal exits (site, Telegram, price list). For one WhatsApp* a direct `wa.me` in the bio is enough.",
    },
    {
      q: "Is this a broadcast to a list?",
      a: "No. Here the client comes to you on click. Mass outbound messages are a separate topic with consent and WhatsApp Business rules.",
    },
    {
      q: "What about other messengers?",
      a: "Same logic: a public link (t.me/…, viber://, etc.) in the website field or a multi-link. Don’t copy outdated Skype or ICQ schemes from old guides without checking.",
    },
  ],
  sections: [
    {
      title: "Why move the conversation out of Direct",
      level: 2,
      paras: [
        "Direct works for short clarifications. For booking, payment, files, and long support many teams keep the chat in a messenger or CRM — where WhatsApp* is easier to bring in.",
        "A bio link works 24/7: the guest doesn’t hunt a number in Stories or copy digits from the profile by hand.",
        "Don’t promise “instant reply 24/7” if you don’t cover the channel. Better an honest window (“we reply weekdays 10–19”) in the bio next to the link.",
      ],
      links: [
        {
          label: "Where to put links on Instagram*",
          href: "/en/blog/ssylki-v-instagram/",
        },
        {
          label: "WhatsApp* broadcasts (outbound)",
          href: "/en/blog/rassylka-whatsapp/",
        },
      ],
    },
    {
      title: "wa.me link in the profile bio",
      level: 2,
      paras: [
        "Open Edit profile → website or link field (UI labels change) and paste a URL like `https://wa.me/79001234567`.",
        "Use the number you actually answer on in WhatsApp*. For business, prefer a company number — not a personal one mixed with family chats.",
        "After saving, test the tap from another account or incognito: it should open a chat (or offer to open the app), not an Instagram* “invalid URL” error.",
      ],
      lists: [
        {
          intro: "Common URL mistakes:",
          items: [
            "pluses, brackets, spaces, and hyphens in the number",
            "a leading 8 instead of the country code",
            "a typo in digits — the client writes into nowhere",
            "a link to someone else’s or old number after a SIM change",
          ],
        },
      ],
      notes: [
        {
          title: "Official Help",
          kind: "tip",
          text: "Check current click-to-chat options and parameters in the WhatsApp Help Center — wording and domains are sometimes updated.",
        },
      ],
    },
    {
      title: "Greeting in the text parameter",
      level: 2,
      paras: [
        "So the client doesn’t send an empty “hi,” add `?text=` with a short stub: where they came from, which product they care about.",
        "Encode spaces and non-Latin characters (`%20`, or encode in any URL encoder). Don’t make a wall — one or two sentences are enough.",
        "Change promo text carefully: a long UTM-like tail in the bio looks technical; for measurement a site UTM or a separate multi-link is often enough.",
      ],
      lists: [
        {
          intro: "Sample stub ideas:",
          items: [
            "“I want to book a consult”",
            "“Interested in delivery to …”",
            "“Question about an order or price list”",
          ],
        },
      ],
    },
    {
      title: "Business profile and contact buttons",
      level: 2,
      paras: [
        "A professional or business account gives call, email, address, and website buttons. You can combine them with `wa.me` in the link field: call for urgent, WhatsApp* for chat.",
        "Don’t duplicate the same number three ways without need: the guest loses track of which channel is main.",
        "Profile category and bio text should match where the chat leads — otherwise you get a high share of empty “who are you?” messages.",
      ],
      links: [
        {
          label: "Instagram* business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Multi-links and third-party services",
      level: 2,
      paras: [
        "If besides WhatsApp* you need site, Telegram, and a price list — one multi-link (link-in-bio) is easier than swapping the bio URL every week.",
        "Downsides: an extra click, uptime dependence, data policy. We don’t carry over “best of” Taplink/Hipolink catalogs from old roundups — services change tariffs and names.",
        "For one messenger a direct `wa.me` is usually faster and clearer.",
      ],
      notes: [
        {
          title: "Security",
          kind: "tip",
          text: "Don’t give your Instagram* password to a multi-link service. You only need a public URL in the profile field.",
        },
      ],
    },
    {
      title: "How to phrase the CTA in content",
      level: 2,
      paras: [
        "In posts and Stories write explicitly: “message on WhatsApp* — link in the bio” or use a Story link sticker to the same `wa.me`.",
        "In the bio, one line for reply hours. A phone emoji is fine if it doesn’t bury the meaning.",
        "Check that the WhatsApp Business number (if you use it) and the link match — otherwise you undercut trust.",
      ],
      lists: [
        {
          intro: "Mini launch checklist:",
          items: [
            "the number answers and isn’t on leave without an auto-reply",
            "the link was tested from another phone",
            "bio has offer and CTA",
            "someone is assigned to answer in chat",
            "no spam to other people’s lists — only inbound on click or opt-in",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "`wa.me` plus a correct number in the bio is a simple bridge from Instagram* into chat.",
        "Prefilled `text=` saves the client’s first move; a multi-link is for when there are several exits.",
        "This doesn’t replace a content strategy and isn’t a license for cold spam on WhatsApp*.",
      ],
    },
  ],
  closing: [
    "Build `https://wa.me/…` with a short `text=`, paste it into the bio, test the tap from another device, and write “contact in the bio” in the next post — faster than picking a tenth link-in-bio tool.",
  ],
  related: [
    "ssylki-v-instagram",
    "rassylka-whatsapp",
    "biznes-akkaunt-instagram",
    "oformlenie-stranicy-instagram",
    "ssylka-stories-instagram",
    "instagram-direct",
  ],
};
