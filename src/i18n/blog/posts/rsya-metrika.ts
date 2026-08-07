import type { BlogPost } from "../../../data/blog";

/** EN overlay for rsya-metrika — same structure as RU JSON. */
export const rsyaMetrikaEn: BlogPost = {
  slug: "rsya-metrika",
  title: "YAN revenue metrics in Yandex Metrica",
  date: "2018-07-06",
  category: "Digital marketing",
  cover: "/images/blog/rsya-metrika/cover-en.webp",
  excerpt:
    "Yandex Advertising Network (YAN) revenue in Metrica: why publishers watch income and ad views, which metrics exist, and how to connect reports — without outdated 2018 account screenshots.",
  lead: [
    "If your site is in the Yandex Advertising Network (YAN / РСЯ) as a publisher, Metrica can show more than visits: ad revenue, block performance, and cuts by source and device.",
    "We cover what the reports mean for a publisher and how to connect them. Menu names and metric sets change—check current Yandex Help. This article is about publisher revenue analytics, not buying ads in Yandex Direct.",
  ],
  faq: [
    {
      q: "Who needs YAN revenue metrics?",
      a: "Site/app owners who show YAN ads and want income next to audience data in Metrica.",
    },
    {
      q: "Is this the same as advertiser spend in Direct?",
      a: "No. Here it’s publisher income, not an advertiser account with CPC/CPA campaigns.",
    },
    {
      q: "Do I need to be a YAN partner?",
      a: "Yes: without network participation and consent to share data, revenue reports won’t appear.",
    },
    {
      q: "What should I look at first?",
      a: "Revenue and ad views/renders by pages and sources: where audience exists but monetization is weak — and the reverse.",
    },
    {
      q: "Why CPM and ARPU?",
      a: "CPM is yield per impressions; ARPU is per user. They help compare sections and periods, not only absolute money.",
    },
    {
      q: "Do ad blockers matter?",
      a: "Yes: some impressions never happen. Reports may include fields about ad unavailability — see current Help fields.",
    },
    {
      q: "Is connecting paid?",
      a: "Metrica reports for partners are usually free. YAN partnership terms are separate.",
    },
    {
      q: "Do the counters have to match?",
      a: "Yes: the ID in the partner interface and on the site/in Metrica must match Yandex’s instructions, or data won’t join.",
    },
  ],
  sections: [
    {
      title: "Why link YAN + Metrica",
      level: 2,
      paras: [
        "The YAN partner account shows money. Metrica shows behavior. Together you see which traffic feeds revenue and which pages are “empty” on ads despite a good audience.",
        "That makes it easier to decide where to strengthen units, where not to overload with ads, and which sources bring valuable vs “empty” views.",
      ],
      lists: [
        {
          intro: "Typical cuts:",
          items: [
            "revenue and ad views;",
            "pages and sections;",
            "devices and geo;",
            "traffic sources/channels;",
            "ad density vs interest in content.",
          ],
        },
      ],
    },
    {
      title: "Which metrics make sense",
      level: 2,
      paras: [
        "Actual impressions and revenue are the base. Without them you can’t talk about monetization.",
        "CPM / renders / ad requests help judge the technical yield of units.",
        "ARPU and similar per-user metrics help compare sections and seasonality.",
        "Check the exact field glossary in Help: Yandex renamed and expanded reports since 2018.",
      ],
      lists: [],
      notes: [
        {
          title: "Don’t memorize 2018 screenshots",
          text: "The “checkbox in site settings” path may have changed. Look up the current revenue-transfer scenario in Metrica/YAN Help.",
        },
      ],
    },
    {
      title: "How connection works (step logic)",
      level: 2,
      paras: [
        "A working Metrica counter on the site.",
        "A site in the YAN partner interface with consent to send data to Metrica.",
        "Align counter/site IDs per the instructions.",
        "Set access rights to financial reports (don’t show revenue to every editor).",
        "Confirm data appears in reports after stats accumulate — not in a minute.",
      ],
      lists: [],
      links: [
        {
          label: "Installing Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
        {
          label: "Goals in Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "How to read for decisions",
      level: 2,
      paras: [
        "Pages with high traffic and low revenue — hypothesis: few/poor units or strong adblock on the segment.",
        "High revenue with falling depth — maybe ad overload; balance UX and money.",
        "Check season and layout changes: a new template often breaks unit rendering.",
      ],
      lists: [],
      links: [
        {
          label: "Yandex Video Network",
          href: "/en/blog/videoset-yandeksa/",
        },
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "YAN revenue in Metrica is publisher reports, not a Direct advertiser account.",
        "You need a YAN partnership, matched counters, and current Help for connection.",
        "Read revenue next to audience so monetization doesn’t kill UX.",
      ],
      lists: [],
    },
  ],
  closing: [
    "If you’re already in YAN — confirm revenue flows into Metrica, and once a week compare top pages by money vs visits; faster than guessing from the partner account alone.",
  ],
  related: [
    "metrika-ustanovka",
    "metrika-tseli",
    "metrika-posetiteli",
    "videoset-yandeksa",
    "istochniki-trafika",
    "looker-studio",
  ],
};
