import type { BlogPost } from "../../../data/blog";

/** EN overlay for istoriya-domena — same structure as RU JSON. */
export const istoriyaDomenaEn: BlogPost = {
  slug: "istoriya-domena",
  title: "Checking domain history before you buy",
  date: "2019-05-27",
  category: "SEO",
  cover: "/images/blog/istoriya-domena/cover-en.webp",
  excerpt:
    "How to check a drop or used domain before purchase: Wayback Machine, past topics, backlink profile, filters, and search visibility — without the myth “old domain = fast TOP.”",
  lead: [
    "Buying someone else’s or a drop domain, you take not only a nice name but a past: topics, links, possible sanctions, and a reputation tail.",
    "Run the checklist below before you pay. The web archive (Wayback Machine) is covered separately; this is a checklist for buying a name. An old domain doesn’t guarantee TOP rankings: positions and traffic come from ongoing work — plan for months, not “bought a drop, straight into the top ten.”",
  ],
  faq: [
    {
      q: "Is a new domain always safer?",
      a: "Often simpler: no someone else’s tail. But a solid checked drop can help. Decide by verification — not fear or greed.",
    },
    {
      q: "Does Wayback show everything?",
      a: "No. There are gaps, removals on complaints, sites with no snapshots. No archive ≠ a clean domain.",
    },
    {
      q: "What if the past topic was different?",
      a: "Higher risk: search may take longer to relearn the domain’s meaning. For a strong topic shift, a new domain is often calmer.",
    },
    {
      q: "Are lots of “buy cheap” anchors bad?",
      a: "Looks like a spammy profile. Take such names only if you accept the risk and a long cleanup — more often, walk away.",
    },
    {
      q: "Does site: in results mean all is fine?",
      a: "Only that something is still indexed or was. It doesn’t cancel filters, toxic links, or a topic change.",
    },
  ],
  sections: [
    {
      title: "Why check before buying",
      level: 2,
      paras: [
        "Age and a nice sound don’t cancel a ban, spammy links, or past adult/pharma content. Problems surface after you’ve already invested in the site and content.",
        "What to verify: content history, backlink profile, sanction / deindex signals, visibility, and brand reputation in search.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "sharp topic flips in the archive;",
            "spammy / doorway snapshots;",
            "toxic donors and anchors;",
            "long visibility drops without explanation;",
            "legal / brand conflicts in the name.",
          ],
        },
      ],
    },
    {
      title: "History in the Wayback Machine",
      level: 2,
      paras: [
        "Open web.archive.org, enter the domain, review the snapshot calendar: when the site appeared, what it was, how it changed. Judge how close the past topic is to yours.",
        "Don’t look at one frame — look across years. Empty stretches, placeholders, and sudden storefronts are reasons to dig deeper or walk away.",
      ],
      lists: [
        {
          intro: "What to note:",
          items: [
            "date of first snapshots;",
            "main topic by year;",
            "whether there were storefronts / doorways;",
            "language and geo;",
            "whether the brand matches your plan.",
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
        "Paid SEO tools (Ahrefs and peers) help review backlinks; free signals are enough for a rough filter. We don’t crown one tool most trustworthy forever — cross-check sources.",
      ],
      lists: [
        {
          intro: "What to watch:",
          items: [
            "share of brand/naked vs commercial anchors;",
            "donors with dubious topics;",
            "broken and mass networks;",
            "history of link-mass spikes;",
            "donor language match with your niche.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Buying a domain for someone else’s links without content and strategy often disappoints. Links are one factor — not a ticket to the TOP.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Visibility and index",
      level: 2,
      paras: [
        "Check `site:domain` in Yandex and Google, a branded query on the name, mirrors, and odd subdomains. Empty SERP with a lively archive past is suspicious.",
        "Historical visibility in Serpstat/Similarweb-class tools (names and data windows change) helps spot traffic drops. Interpret carefully: ownership change, seasonality, a filter, or just a dead project.",
      ],
      lists: [
        {
          intro: "Quick checks:",
          items: [
            "`site:` in both search engines;",
            "branded query;",
            "cache / saved copies when available;",
            "domain mentions in news/reviews;",
            "WHOIS / registrar history where available.",
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
        "A fresh drop sometimes keeps part of the signals — sometimes not. Idle time and myths like “60 days without an owner = rankings as before” aren’t law: algorithms and index cleanup have changed.",
        "Even a clean aged domain doesn’t cancel site prep and planned ranking work over months. Saving on promotion because the domain is old is a risky bet.",
      ],
      lists: [
        {
          intro: "When a drop makes sense:",
          items: [
            "past topic is close;",
            "links and mentions look sane;",
            "no clear sanctions/spam;",
            "the name strengthens the brand, doesn’t confuse;",
            "budget covers content and tech — not only the domain.",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Before buying, go archive → links → visibility. When in doubt, pick a new name — cheaper than a year undoing someone else’s spam.",
        "A good domain reputation helps, but doesn’t replace work on the site.",
      ],
    },
  ],
  closing: [
    "Check Wayback, backlinks, and the index before you pay — fewer chances to buy a ban and spam with a pretty name. An old domain is an option after verification, not a magic TOP button.",
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
