import type { BlogPost } from "../../../data/blog";

/** EN overlay for istoriya-domena — same structure as RU JSON. */
export const istoriyaDomenaEn: BlogPost = {
  slug: "istoriya-domena",
  title: "Checking domain history before you buy",
  date: "2019-05-27",
  category: "SEO",
  cover: "/images/blog/istoriya-domena/cover-en.webp",
  excerpt:
    "How to vet a drop or used domain before purchase: Wayback Machine, past topics, backlink profile, filters, and search visibility — without the myth that an old domain means a fast climb in results.",
  lead: [
    "When you buy someone else’s domain or a drop, you inherit more than a nice name: past topics, links, possible sanctions, and a reputation tail.",
    "Below is what to check before you pay. The web archive (Wayback) is covered separately; this piece is a buying checklist. Age alone does not put you on page one — rankings and traffic come from work on the site, typically planned over months, not “bought a drop, instant top ten.”",
  ],
  faq: [
    {
      q: "Is a new domain always safer?",
      a: "Often simpler: no someone else’s baggage. A solid, checked drop can still help. Decide by verification — not fear or greed.",
    },
    {
      q: "Does Wayback show everything?",
      a: "No. There are gaps, removals on complaints, sites with no snapshots. No archive ≠ a clean domain.",
    },
    {
      q: "What if the past topic was different?",
      a: "Higher risk: search may take longer to relearn what the domain means. For a strong topic shift, a new name is often calmer.",
    },
    {
      q: "Are lots of “buy cheap” anchors bad?",
      a: "That looks like a spammy profile. Take such names only if you accept the risk and a long cleanup — more often, walk away.",
    },
    {
      q: "Does site: in results mean all is fine?",
      a: "Only that something is still indexed or once was. It does not cancel filters, toxic links, or a topic change.",
    },
  ],
  sections: [
    {
      title: "Why check before buying",
      level: 2,
      paras: [
        "Age and a catchy string do not cancel a ban, spammy links, or past adult or pharma content. Problems tend to surface after you have already invested in the site and content.",
        "What to verify: content history, backlink profile, sanction or deindex signals, visibility, and brand reputation in search.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "sharp topic flips in the archive",
            "spammy or doorway snapshots",
            "toxic donors and anchors",
            "long visibility drops without explanation",
            "legal or brand conflicts in the name",
          ],
        },
      ],
    },
    {
      title: "History in the Wayback Machine",
      level: 2,
      paras: [
        "Open web.archive.org, enter the domain, and review the snapshot calendar: when the site appeared, what it was, how it changed. Judge how close the past topic is to yours.",
        "Do not stop at one frame — look across years. Empty stretches, placeholders, and sudden storefronts are reasons to dig deeper or walk away.",
      ],
      lists: [
        {
          intro: "What to note:",
          items: [
            "date of first snapshots",
            "main topic by year",
            "whether there were storefronts or doorways",
            "language and geo",
            "whether the brand matches your plan",
          ],
        },
      ],
      links: [
        {
          label: "Web archive",
          href: "/en/blog/veb-arhiv/",
        },
      ],
    },
    {
      title: "Backlink profile",
      level: 2,
      paras: [
        "Link count alone says nothing. Look at donor quality, spam share, growth dynamics, and anchors. Sudden links-from-nowhere spikes are a typical risk.",
        "Paid SEO tools (Ahrefs and peers) help review backlinks; free signals are enough for a rough filter. No single tool is “the truth forever” — cross-check sources.",
      ],
      lists: [
        {
          intro: "What to watch:",
          items: [
            "share of brand or naked vs commercial anchors",
            "donors with dubious topics",
            "broken and mass networks",
            "history of link-mass spikes",
            "donor language match with your niche",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Buying a domain for someone else’s links without content and strategy often disappoints. Links are one factor — not a ticket to page one.",
        },
      ],
    },
    {
      title: "Visibility and index",
      level: 2,
      paras: [
        "Check `site:domain` in Yandex and Google, a branded query on the name, mirrors, and odd subdomains. An empty SERP with a lively archive past is suspicious.",
        "Historical visibility in Serpstat/Similarweb-class tools (names and data windows change) helps spot traffic drops. Interpret carefully: ownership change, seasonality, a filter, or just a dead project.",
      ],
      lists: [
        {
          intro: "Quick checks:",
          items: [
            "`site:` in both search engines",
            "branded query",
            "cache or saved copies when available",
            "domain mentions in news or reviews",
            "WHOIS / registrar history where available",
          ],
        },
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "Drops and SEO expectations",
      level: 2,
      paras: [
        "A fresh drop sometimes keeps part of the signals — sometimes not. Idle time and myths like “60 days without an owner = rankings as before” are not law: algorithms and index cleanup have changed.",
        "Even a clean aged domain does not cancel site prep and planned ranking work over months. Cutting promotion spend because the domain is old is a risky bet.",
      ],
      lists: [
        {
          intro: "When a drop makes sense:",
          items: [
            "past topic is close",
            "links and mentions look sane",
            "no clear sanctions or spam",
            "the name strengthens the brand, does not confuse",
            "budget covers content and tech — not only the domain",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "A vetted aged domain can help. It still is not a shortcut: after prep, growing a query core in the results is typically planned over 2–6 months of work.",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Before buying, go archive → links → visibility. When in doubt, pick a new name — cheaper than a year undoing someone else’s spam.",
        "A good domain reputation helps, but it does not replace work on the site.",
      ],
    },
  ],
  closing: [
    "Check Wayback, backlinks, and the index before you pay — fewer chances to buy a ban and spam with a pretty name. An old domain is an option after verification, not a magic ranking button.",
  ],
  related: [
    "veb-arhiv",
    "domen-rf",
    "domen-pervogo-urovnya",
    "filtry-poiskovikov",
    "molodoy-sayt",
    "affiliat-filtr",
  ],
};
