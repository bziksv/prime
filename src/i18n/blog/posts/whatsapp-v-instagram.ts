import type { BlogPost } from "../../../data/blog";

/** EN overlay for whatsapp-v-instagram — same structure as RU JSON. */
export const whatsappVInstagramEn: BlogPost = {
  slug: "whatsapp-v-instagram",
  title: "WhatsApp* in an Instagram* profile: wa.me link and header",
  date: "2021-11-02",
  category: "SMM",
  cover: "/images/blog/whatsapp-v-instagram/cover-en.webp",
  excerpt:
    "How to move a client from Instagram* to WhatsApp*: a wa.me link in the header, greeting text, business-profile buttons, and a multi-link — without a catalog of outdated link-in-bio tools.",
  lead: [
    "A direct messenger chat often converts better than a long Direct thread: a number or ready WhatsApp* link in the Instagram* header shortens the path “saw the offer → wrote.”",
    "Below — the `wa.me` format, prefilled text, when a Call button is enough, and why you shouldn’t drag a dozen multi-link services. Menu labels change; check Meta Help. Disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* and WhatsApp* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "What’s the correct link format?",
      a: "`https://wa.me/79001234567` — country code without “+”, brackets, or spaces. `api.whatsapp.com/send?phone=…` also appears; for the header a short `wa.me` is usually enough.",
    },
    {
      q: "Can you paste a number starting with 8?",
      a: "International format with a country code is more reliable (for Russia — 7…). Drop a leading 8 and separators.",
    },
    {
      q: "How do you add first-message text?",
      a: "The `text=` parameter with URL-encoded spaces (`%20` or `encodeURIComponent`). Example idea: `https://wa.me/79…?text=Hi%2C%20I%20want%20to%20ask%20about%20…`.",
    },
    {
      q: "Is the bio link clickable for everyone?",
      a: "The website/link field in the profile — yes, for guests. In a regular post caption a URL often isn’t tappable in the app — so people write “WhatsApp* in the header” in posts explicitly.",
    },
    {
      q: "How is the Call button different?",
      a: "A business-profile button opens call/email/address by settings. WhatsApp* chat is easier via `wa.me` in the link field or a multi-link item — if the goal is messaging.",
    },
    {
      q: "Do you need a separate service like Taplink?",
      a: "Only if you need several equal exits (site, Telegram, price list). For one WhatsApp* a direct `wa.me` in the header is enough.",
    },
    {
      q: "Is this a broadcast to a list?",
      a: "No. Here the client comes to you on click. Mass outbound messages are a separate topic with consent and WhatsApp Business rules.",
    },
    {
      q: "What about other messengers?",
      a: "Same logic: a public link (t.me/…, viber://, etc.) in the website field or a multi-link. Don’t copy outdated Skype/ICQ schemes from old guides without checking.",
    },
  ],
  sections: [
    {
      title: "Why move the dialogue out of Direct",
      level: 2,
      paras: [
        "Direct is fine for short clarifications. For booking, payment, files, and long support many teams keep the chat in a messenger or CRM — where WhatsApp* is easier to bring in.",
        "A header link works 24/7: the guest doesn’t hunt a number in Stories or copy digits from the bio by hand.",
        "Don’t promise “instant reply 24/7” if you don’t cover the channel. Better an honest slot (“we reply weekdays 10–19”) in the bio next to the link.",
      ],
      lists: [],
      links: [
        {
          label: "Links on Instagram*: place map",
          href: "/en/blog/ssylki-v-instagram/",
        },
        {
          label: "WhatsApp* broadcasts (outbound)",
          href: "/en/blog/rassylka-whatsapp/",
        },
      ],
    },
    {
      title: "wa.me link in the profile header",
      level: 2,
      paras: [
        "Open Edit profile → website / web site / link field (UI labels change) and paste a URL like `https://wa.me/79001234567`.",
        "Use the number you actually answer on in WhatsApp*. For business prefer a company number — not a random personal one mixed with family chats.",
        "After saving, test the tap from another account or incognito: it should open a chat (or offer to open the app), not an Instagram* “invalid URL” error.",
      ],
      lists: [
        {
          intro: "Common URL mistakes:",
          items: [
            "pluses, brackets, spaces, and hyphens in the number;",
            "a leading 8 instead of the country code;",
            "a typo in digits — the client writes into nowhere;",
            "a link to someone else’s/old number after a SIM change.",
          ],
        },
      ],
      notes: [
        {
          title: "Official Help",
          text: "Check current click-to-chat options and parameters in the WhatsApp Help Center — wording and domains are sometimes updated.",
        },
      ],
    },
    {
      title: "Greeting in the text parameter",
      level: 2,
      paras: [
        "So the client doesn’t write an empty “hi,” add `?text=` with a short stub: where they came from, which product they care about.",
        "Encode spaces and non-Latin (`%20`, encode in any URL encoder). Don’t make a wall — 1–2 sentences are enough.",
        "Change promo text carefully: a long UTM-like tail in the bio looks technical; for measurement a site UTM or a separate multi-link is often enough.",
      ],
      lists: [
        {
          intro: "Sample stub meanings:",
          items: [
            "“I want to book a consult”;",
            "“Interested in delivery to …”;",
            "“Question about an order / price list.”",
          ],
        },
      ],
    },
    {
      title: "Business profile and contact buttons",
      level: 2,
      paras: [
        "A professional/business account gives call, email, address, and website buttons. You can combine them with `wa.me` in the link field: call for urgent, WhatsApp* for chat.",
        "Don’t duplicate the same number three ways without need: the guest loses which channel is “main.”",
        "Profile category and About text should match where the chat leads — otherwise a high share of empty “who are you?” messages.",
      ],
      lists: [],
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
        "If besides WhatsApp* you need site, Telegram, and a price list — one multi-link (link-in-bio) is easier than swapping the header URL every week.",
        "Downsides: an extra click, uptime dependence, data policy. We don’t carry over “TOP-10: Taplink, Hipolink…” catalogs from old roundups — services change tariffs and names.",
        "For one messenger a direct `wa.me` is usually faster and clearer.",
      ],
      lists: [],
      notes: [
        {
          title: "Security",
          text: "Don’t give your Instagram* password to a “multi-link service.” You only need a public URL in the profile field.",
        },
      ],
    },
    {
      title: "How to phrase the CTA in content",
      level: 2,
      paras: [
        "In posts and Stories write explicitly: “message on WhatsApp* — link in the header” or a Story link sticker to the same `wa.me`.",
        "In the bio, one line for reply hours. A phone emoji is fine if it doesn’t bury the meaning.",
        "Check that the WhatsApp Business number (if you use it) and the link match — otherwise you undercut trust.",
      ],
      lists: [
        {
          intro: "Mini launch checklist:",
          items: [
            "the number answers and isn’t on leave without an auto-reply;",
            "the link was tested from another phone;",
            "bio has offer and CTA;",
            "someone is assigned to answer in chat;",
            "no spam to other people’s lists — only inbound on click or opt-in.",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "`wa.me` + a correct number in the header is a simple bridge from Instagram* into chat.",
        "Prefilled `text=` saves the client’s first move; a multi-link is for when there are several exits.",
        "This doesn’t replace a content strategy and isn’t a license for cold spam on WhatsApp*.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Build `https://wa.me/…` with a short `text=`, paste it into the header, test the tap from another device, and write “contact in the header” in the next post — faster than picking a tenth link-in-bio.",
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
