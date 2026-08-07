import type { BlogPost } from "../../../data/blog";

/** EN overlay for kloaking — same structure as RU JSON. Risk overview, not a how-to. */
export const kloakingEn: BlogPost = {
  slug: "kloaking",
  title: "What cloaking is in SEO and why it’s a risk",
  date: "2019-07-09",
  category: "SEO",
  cover: "/images/blog/kloaking/cover-en.webp",
  excerpt:
    "Cloaking is showing different content to bots and people. Why it’s used, what it costs you, and how to check your site isn’t masked (including after a breach).",
  lead: [
    "Cloaking (from “cloak” — to mask) is when a search bot gets one page version and a visitor gets another. Classic black-hat SEO: the bot sees keyword-stuffed copy for the SERP; the person sees an offer, ads, or a totally different site.",
    "In practice search engines punish cloaking — and you need to make sure your site isn’t swapped (it often appears after a hack). This is a risk and diagnostics overview — not a guide to gaming the SERP.",
  ],
  faq: [
    {
      q: "Is cloaking white-hat SEO?",
      a: "No. Serving different content to the bot breaks major search engines’ rules and leads to filters, deindexing, or manual actions.",
    },
    {
      q: "How does it differ from an A/B test?",
      a: "A/B usually splits people across variants and isn’t meant to hide a “different truth” from the bot. Cloaking deliberately gives bot and human different meaning.",
    },
    {
      q: "Are geo and device adaptation cloaking?",
      a: "Legitimate personalization (language, currency, mobile template) with the same page meaning is fine. Risk starts when the bot sees “download free” and the human only gets paywall or another topic.",
    },
    {
      q: "Why know about this at all?",
      a: "So you don’t buy “promotion” with content swapping, and so you catch a breach in time: attackers often hang cloaking on other people’s sites.",
    },
    {
      q: "How to tell the site was hacked?",
      a: "HTML differs for Googlebot/Yandexbot vs a normal browser, odd snippets, redirects to foreign domains, unknown files, and spikes in Webmaster/GSC.",
    },
    {
      q: "Is a User-Agent Switcher enough?",
      a: "As a quick screen — yes. More reliable: “fetch as Googlebot” / webmaster tools and compare with a normal view.",
    },
    {
      q: "Can you do it “just a little” for the snippet?",
      a: "There’s no durable “just a little” tactic. An honest snippet = title/description and content the human also sees.",
    },
    {
      q: "What should you do instead of cloaking?",
      a: "One clear document for the intent: tech, content, structure. Prep and systematic work; core ranks build planned over months — not by masking.",
    },
  ],
  sections: [
    {
      title: "What the method is",
      level: 2,
      paras: [
        "The idea is simple: detect who requested the page (User-Agent, IPs from bot lists, etc.) and serve different HTML. The bot gets keyword-heavy text for the SERP; the human gets a convenient or commercial variant, sometimes another URL entirely.",
        "A typical deception: the SERP promises “download free”, after the click — only purchase or an irrelevant product. The user is misled, search sees a mismatch — the site risks sanctions.",
      ],
      lists: [
        {
          intro: "Cloaking signs:",
          items: [
            "different page meaning for bot and human;",
            "hiding spam / doorways from visitors;",
            "redirects only for some clients;",
            "often — a breach result, not the owner’s “strategy”.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "We don’t explain how to set up cloaking. The topic is spotting the risk and protecting your site.",
        },
      ],
    },
    {
      title: "Why search engines ban it",
      level: 2,
      paras: [
        "Search’s job is to show a document that matches the query for a person. Swapping content breaks trust in the snippet and the index.",
        "Algorithms and manual reviews catch mismatches. Outcomes: a drop, URL or domain removal, long rehab after cleanup. Short-term masking “wins” rarely cover the downtime.",
      ],
      lists: [
        {
          intro: "Business risks:",
          items: [
            "loss of organic and brand traffic;",
            "ad dashboards and partner programs also cut deception;",
            "reputation hit if users complain;",
            "cleanup costs after a breach.",
          ],
        },
      ],
      links: [
        {
          label: "Common SEO mistakes",
          href: "/en/blog/seo-oshibki/",
        },
        {
          label: "Suspicious Google traffic",
          href: "/en/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "Cloaking and hacks: a common pair",
      level: 2,
      paras: [
        "In practice the owner often learns about cloaking when the site is already filtered or “foreign” snippets appear. Malware serves spam to bots and redirects to people.",
        "So diagnostics are part of security: CMS/plugin updates, file permissions, integrity monitoring, and alerts in Webmaster/Search Console.",
      ],
      lists: [
        {
          intro: "If you suspect a breach:",
          items: [
            "compare bot and browser HTML;",
            "check fresh files and cron;",
            "change passwords and API keys;",
            "clean backdoors and reindex after the fix.",
          ],
        },
      ],
      links: [
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "How to check the site for swapping",
      level: 2,
      paras: [
        "Basic move: compare what the bot sees with what you see. In Google Search Console — view as Googlebot; in the Yandex ecosystem — webmaster tools and server-response checks.",
        "Additionally: switch User-Agent in the browser/extension, compare source; third-party “cloaking checkers” — as a hint, not the only judge. Also watch the SERP: snippet says one thing, landing another without a clear reason.",
      ],
      lists: [
        {
          intro: "Compare checklist:",
          items: [
            "HTML/text for the bot ≈ HTML for the human in meaning;",
            "no hidden “bots only” block;",
            "canonical and redirects lead to the right URL the same way;",
            "no sudden redirects to foreign domains.",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "What not to count as cloaking",
      level: 2,
      paras: [
        "Responsive layout, different CSS on mobile, geo pricing for the same product, account login — aren’t cloaking by themselves if the bot’s document reflects the public page’s substance.",
        "Gray zones appear when “public” and “bot” versions diverge in topic and promise. Stick to the rule: the snippet promise = content after the click.",
      ],
      lists: [
        {
          intro: "Safe alternative:",
          items: [
            "one strong page for the intent;",
            "honest title and description;",
            "decent speed and mobile;",
            "content and links without swapping.",
          ],
        },
      ],
      links: [
        {
          label: "Internal ranking factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "Takeaway: risks instead of a “fast TOP”",
      level: 2,
      paras: [
        "Cloaking promises a shortcut into the SERP and almost always ends in a filter or a security incident. Durable growth is built on query, page, and offer matching.",
        "Site prep and systematic work deliver results on a plan: core TOP roughly 2–6 months after start — not “tomorrow after a masking script”.",
      ],
      lists: [
        {
          intro: "If an agency offers a “special SERP for bots” — stop signal:",
          items: [
            "demand method transparency;",
            "check HTML yourself;",
            "don’t agree to swapping for ranks.",
          ],
        },
      ],
    },
  ],
  related: [
    "seo-oshibki",
    "wordpress-bezopasnost",
    "vnutrennie-faktory",
    "podozritelnyy-trafik-google",
    "tehnicheskiy-seo-audit",
    "samostoyatelnoe-seo",
  ],
};
