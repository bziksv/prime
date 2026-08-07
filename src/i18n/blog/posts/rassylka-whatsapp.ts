import type { BlogPost } from "../../../data/blog";

/** EN overlay for rassylka-whatsapp — same structure as RU JSON. */
export const rassylkaWhatsappEn: BlogPost = {
  slug: "rassylka-whatsapp",
  title: "WhatsApp* broadcasts: Business API, consent, and no spam",
  date: "2022-02-01",
  category: "SMM",
  cover: "/images/blog/rassylka-whatsapp/cover-en.webp",
  excerpt:
    "How a business can message on WhatsApp* legally: manual broadcast lists, official Business API, templates and sessions — without bought number lists or grey “agency” senders. Meta* disclaimer on the page.",
  lead: [
    "WhatsApp* for business is a channel for service and marketing messages to people who agreed to hear from you. Mass spam to strangers breaks trust and hits platform rules.",
    "Below — when a manual app broadcast is enough, why Business API and templates matter, and which topics you must not promote. We don’t treat “billions of users” or 2022 menu screenshots as fixed norms: check current WhatsApp Business rules. Meta* disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. WhatsApp* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can you advertise to everyone in the phone book?",
      a: "Only if people expect messages from you and it doesn’t break platform rules or advertising/personal-data law. Cold spam to other people’s contacts leads to blocks and complaints.",
    },
    {
      q: "How is Business API better than a manual broadcast?",
      a: "Scale, templates, CRM integrations, reporting. A manual list suits small volume to your own warm contacts.",
    },
    {
      q: "Do you need business verification?",
      a: "For full API work and profile trust — follow current WhatsApp/Meta requirements. Without confirmation some options stay unavailable.",
    },
    {
      q: "Should you buy a “number base” from an agency?",
      a: "Not as a strategy. Opaque lists without consent = spam, complaints, and brand risk. Work with your own opt-in base.",
    },
    {
      q: "How is it different from SMS?",
      a: "Different channel and rules. Consent and usefulness logic is the same; choose where the customer actually replies. See also the SMS piece.",
    },
  ],
  sections: [
    {
      title: "When WhatsApp* fits",
      level: 2,
      paras: [
        "The channel is strong for order status, appointment reminders, support, and short offers to a warm base. People read messages fast — and block pushy spam just as fast.",
        "It doesn’t replace a site, email, or search ads. It’s a messenger touch next to other channels.",
      ],
      lists: [],
      links: [
        {
          label: "SMS broadcasts",
          href: "/blog/sms-rassylka/",
        },
        {
          label: "VK community broadcasts",
          href: "/en/blog/rassylka-vk/",
        },
      ],
    },
    {
      title: "Manual broadcast from the app",
      level: 2,
      paras: [
        "In WhatsApp* you can build a recipient list from your contacts and send one message to the group (broadcast UI wording depends on the app version).",
        "Upside — control and no “agency” layer. Downside — manual work, limited to your contact book, harder scale and analytics.",
        "Forwarding limits and anti-spam mechanics change: don’t build a process on bypassing restrictions.",
      ],
      lists: [
        {
          intro: "Minimum before send:",
          items: [
            "recipients expect messages from the brand;",
            "copy is short, with value or a status update;",
            "there is a way to opt out / not write again after a block;",
            "don’t mix personal chats and an ad stream without a clear label.",
          ],
        },
      ],
    },
    {
      title: "Business API and templates",
      level: 2,
      paras: [
        "The official business path is WhatsApp Business Platform / API via vetted providers: message templates, dialogue sessions, catalogs, CRM linking.",
        "If the customer wrote first, a free-form reply window usually opens for a limited time (check exact rules in Help). To start a dialogue yourself, approved templates are usually required.",
        "Business registration and verification, a number not casually mixed with a personal account — part of access. Verification details and profile badges have changed: follow current Meta/WhatsApp Help, not a 2022 guide.",
      ],
      lists: [],
      notes: [
        {
          title: "Important",
          text: "We don’t describe grey senders or “bases from a telecom payment.” The legal path is consent, your own base, official API, or manual work with warm contacts.",
        },
      ],
    },
    {
      title: "What to write — and what to avoid",
      level: 2,
      paras: [
        "Order status, visit reminders, booking confirmation, and a useful FAQ bot with a human handoff work well.",
        "Threats, deception, and pushy ads without context land badly. Some niches (prescription drugs, alcohol, gambling, and others) are limited by WhatsApp advertising rules — check the current prohibited list.",
        "Tone: respectful, without “buy now or else.” A bot fits routine questions; complex cases go to a person.",
      ],
      lists: [],
      links: [
        {
          label: "VK chatbots",
          href: "/blog/chat-bot-vk/",
        },
        {
          label: "Trigger campaigns",
          href: "/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Agencies and vendors",
      level: 2,
      paras: [
        "A vendor can help with templates, API integration, and reporting. Ask: where the base comes from, whether there is consent, which API provider, who owns the number and templates after the contract.",
        "A “ready base of millions of numbers” is a red flag. Check reputation, the contract, and a pilot on your own opt-in sample.",
      ],
      lists: [],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "WhatsApp* runs on consent and usefulness — not cold spam.",
        "Scale — through official Business API and templates; small volume — manual broadcast to your contacts.",
        "Rules and UI change: check platform Help before launch.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Build an opt-in client list, pick one service template (order status or reminder), and run a pilot through the official path — more honest than buying someone else’s “WhatsApp base.”",
  ],
  related: [
    "sms-rassylka",
    "rassylka-vk",
    "triggernye-rassylki",
    "chat-bot-vk",
    "spam-vk",
    "baza-email-socseti",
  ],
};
