import type { BlogPost } from "../../../data/blog";

/** EN overlay for url-youtube — same structure as RU JSON. */
export const urlYoutubeEn: BlogPost = {
  slug: "url-youtube",
  title: "YouTube channel URL: how to make a readable link",
  date: "2020-11-18",
  category: "SMM",
  cover: "/images/blog/url-youtube/cover-en.webp",
  excerpt:
    "How a short channel address differs from an ID, what conditions YouTube usually sets, and how to change the link without outdated screenshots — with a note on @handles and change limits.",
  lead: [
    "Instead of a long channel ID, a short readable link is easier: simpler to dictate, put on a card, and in social headers. On YouTube this was historically a “custom URL”; today the @handle format is more common.",
    "A short address strengthens the brand and cuts friction when sharing — it doesn’t replace content or video SEO. Studio menus and thresholds (subscribers, channel age) have shifted, so check YouTube Help rather than recycling old “gear → Advanced” screenshots.",
  ],
  faq: [
    {
      q: "Is it the same as an @handle in the about section?",
      a: "Related: the short channel address and public handle are part of identity. Exact field names live in current Studio.",
    },
    {
      q: "How many times can you change it?",
      a: "Limits existed and still do: people often mentioned a few changes per period. Don’t plan a monthly URL rebrand.",
    },
    {
      q: "Will the old link break?",
      a: "Usually former channel URLs keep opening the channel. Still better to update key surfaces to the new address.",
    },
    {
      q: "Why is there no change-URL item?",
      a: "Conditions aren’t met, the UI moved, or the feature sits elsewhere (profile / channel settings). Check Studio and Help.",
    },
    {
      q: "Can you pick any handle?",
      a: "No: availability, brand rules, and allowed characters. Sometimes the system suggests options from profile data.",
    },
  ],
  sections: [
    {
      title: "Why a short URL",
      level: 2,
      paras: [
        "A readable address strengthens the brand: `youtube.com/@brand` is easier than a `channel/UC…` string. It doesn’t replace content or video SEO, but it cuts friction when sharing.",
        "For business keep one canonical address everywhere: site, card, email signature, ads.",
      ],
      links: [
        {
          label: "YouTube channel description",
          href: "/en/blog/opisanie-youtube-kanala/",
        },
        {
          label: "YouTube promotion",
          href: "/en/blog/raskrutka-youtube/",
        },
      ],
    },
    {
      title: "Typical access conditions",
      level: 2,
      paras: [
        "Historically YouTube opened a custom URL after basic channel “maturity”: subscriber count, account age, set avatar/banner and description. Exact thresholds changed — the old “100 subscribers / 30 days” guide may no longer apply.",
        "If the item is missing, finish channel branding and activity first, then check current requirements in Help.",
      ],
      lists: [
        {
          intro: "Before changing, check:",
          items: [
            "avatar and banner follow the rules;",
            "channel description exists;",
            "account is in good standing (no hard strikes or limits);",
            "desired handle is free and pronounceable;",
            "you’ve planned for repeat-change limits.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t promise yourself “any handle in a minute.” Often you get suggested options or a handle with constraints.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to change: logic, not a 2020 screenshot",
      level: 2,
      paras: [
        "Open YouTube Studio → channel settings / profile and find the block for URL, custom name, or @handle. Pick an available option, confirm the rules.",
        "Spreading the new address can take from a few minutes to a noticeable pause. While you update external links, the old address usually still works.",
      ],
      links: [
        {
          label: "YouTube avatar",
          href: "/en/blog/avatar-youtube/",
        },
      ],
    },
    {
      title: "If options are few or odd",
      level: 2,
      paras: [
        "Sometimes the system suggests combos of name, brand, or suffixes. Updating the channel name, site in the profile, and key data may later unlock other options — with no guaranteed day-or-week timeline.",
        "Don’t drop working external links until the new canon is locked. If the feature is unavailable despite meeting conditions — contacting support is fair.",
      ],
    },
    {
      title: "Nuances after the change",
      level: 2,
      paras: [
        "Old URLs often stay valid — good for link history, bad if you want to forget the old name. Finish the rebrand by updating the site, cards, and ad creatives.",
        "A short address doesn’t boost algorithms by itself. Growth comes from videos, retention, and semantics — see related pieces.",
      ],
      links: [
        {
          label: "Keywords for YouTube",
          href: "/en/blog/kluchi-youtube/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A short URL or @handle is about convenience and brand. Conditions and menus change; change limits are real.",
        "Check YouTube Help, pick a pronounceable option, and sync it everywhere the channel link lives.",
      ],
    },
  ],
  closing: [
    "Check current requirements in Studio, pick a readable address, and update it on the site and social profiles — so the link stops being an ID cipher.",
  ],
  related: [
    "opisanie-youtube-kanala",
    "raskrutka-youtube",
    "kluchi-youtube",
    "avatar-youtube",
    "montazh-youtube",
    "strayk-youtube",
  ],
};
