import type { BlogPost } from "../../../data/blog";

/** EN overlay for sayty-satellity — same structure as RU JSON. */
export const saytySatellityEn: BlogPost = {
  slug: "sayty-satellity",
  title: "Satellite sites: the risks, and why to skip them",
  date: "2020-02-05",
  category: "SEO",
  cover: "/images/blog/sayty-satellity/cover-en.webp",
  excerpt:
    "What satellite sites meant in SEO, why people built them historically, how they endanger the main domain, and what to do instead of a private network — without PBN how-tos.",
  lead: [
    "Satellites are helper sites built for links, spillover traffic, or crowding competitors out of the results in favor of a main project. In mainstream SEO that is a high-risk scheme: algorithms and reviewers connect the network, and sanctions hit budget and the main domain’s reputation.",
    "Below: what people meant by satellites, which types showed up, why the scheme fails, and what to do instead. This is a risk overview — not a guide to building or “successfully running” a multi-site grid.",
  ],
  faq: [
    {
      q: "Is a satellite always black-hat SEO?",
      a: "If the network exists to pass link equity and manipulate rankings — yes, that is manipulation by intent. A separate useful brand property with a real audience is a different story; it is not a “satellite” in the spam sense.",
    },
    {
      q: "Can you “carefully” keep a network and never get caught?",
      a: "There is no reliable guarantee. Shared patterns — hosting, templates, anchors, owners, outbound links — surface over time. Betting on stealth is a bad business strategy.",
    },
    {
      q: "How do satellites differ from buying links?",
      a: "Buying links is one-off or packaged placements on other people’s sites. Satellites are your own (or controlled) domains built for one goal. Both get dangerous at scale and when they look the same; see the pieces on buying links and backlink profiles.",
    },
    {
      q: "What if a network already exists?",
      a: "Do not grow it. Assess risk with an SEO: which domains are indexed, how they tie to the main site, whether filters apply. Often the sane move is to unwind spam outbound ties and strengthen the main site with content and tech.",
    },
    {
      q: "Will satellites get a young site onto page one faster?",
      a: "Not as a plan. Prep and indexing are one stage; growing the core in the results is planned over months. An “accelerator” network more often brings sanctions than lasting visibility.",
    },
    {
      q: "Are doorways and redirect wrappers satellites too?",
      a: "A related class: pages or domains with no value, built only for spillover. For users and search that is junk; for business it adds legal and reputational risk plus anti-spam systems.",
    },
    {
      q: "What replaces the idea of “your own link farm”?",
      a: "Useful content on the main domain, partnerships, PR, guest pieces on live sites, normal outreach. Donor quality beats a count of controlled “mirrors.”",
    },
    {
      q: "Should old satellites be deleted at once?",
      a: "It depends on ties and the index. Blind mass deletion without a plan can be worse than carefully removing links and applying noindex or closure. Decide after an audit — not from a chat tip.",
    },
  ],
  sections: [
    {
      title: "What satellite sites are",
      level: 2,
      paras: [
        "In SEO slang a satellite is a site that exists not for standalone audience value, but to help the main one: pass links, spill traffic, or occupy results next to commercial queries. Often it is a network of several (or dozens) domains with similar topics and weak content.",
        "Historically the scheme was popular when link equity and packing “your” domains into the results looked like an easy lever. Search engines now spot related networks, template content, and unnatural link profiles more reliably — so for a legitimate business, satellites rarely justify the risk.",
      ],
      lists: [
        {
          intro: "Typical scheme goals (historically):",
          items: [
            "grow outbound links to the main domain",
            "redirect visitors from secondary URLs",
            "occupy several result slots with “your” sites",
            "fake broad brand presence without real products",
          ],
        },
      ],
      links: [
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Types that showed up",
      level: 2,
      paras: [
        "Old guides sorted satellites by “quality”: throwaways on free hosting, slightly livelier sites with rare posts, redirect wrappers, and fully generated pages. The split really means one thing — how much it looks like a normal project and how expensive it is to maintain.",
        "Even “dynamic” variants with visible updates do not make the scheme safe if the main job is manipulation, not a product. For readers, what matters is this: any type built for a network leaves traces and burns budget with no result guarantee.",
      ],
      lists: [
        {
          intro: "Signs of a “network” site (for diagnosis, not copying):",
          items: [
            "thin, template, or barely updated content",
            "many outbound links to one commercial domain",
            "same CMS, templates, WHOIS, or hosting across a domain group",
            "no service, contacts, policies, or real audience",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "We do not describe how to build multi-level ties, mask owners, or “successfully” run a network. Those instructions hurt business and break search rules.",
        },
      ],
    },
    {
      title: "Why the scheme breaks",
      level: 2,
      paras: [
        "Algorithms and manual review hunt manipulation patterns: domain clusters, unnatural anchors, outbound-link bursts, doorways. When the network surfaces, it is not only the “extra” domain that suffers — the main project the whole thing was for can get hit.",
        "Economics and ops hit separately: registration, hosting, content, index monitoring. After a filter or index drop, spend burns, and recovering the main site takes months of work — with no magic “rollback in a week.”",
      ],
      lists: [
        {
          intro: "Typical consequences:",
          items: [
            "filters and drops on commercial queries",
            "index loss for part or all of the network",
            "budget to rebuild the main site and content",
            "reputational damage if the scheme goes public",
          ],
        },
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Buying links",
          href: "/en/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "Satellites and the backlink profile",
      level: 2,
      paras: [
        "A link from your own satellite rarely looks like a recommendation from a live publication. Profiles need diverse independent donors, topical fit, and user behavior — not thousands of URLs from one “farm.”",
        "If reports show the lion’s share of referring domains are your own lookalike sites, that is a red flag: the profile looks artificial. Fewer quality mentions beat a dense network of controlled pages.",
      ],
      lists: [
        {
          intro: "What to check in the profile:",
          items: [
            "share of links from related or lookalike domains",
            "anchor list (commercial-anchor stuffing)",
            "growth dynamics (sharp spikes with no PR reasons)",
            "whether “donors” have traffic and brand queries",
          ],
        },
      ],
      links: [
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
      ],
    },
    {
      title: "What to do instead of a network",
      level: 2,
      paras: [
        "Strengthen one (or several real) products: structure, copy, speed, mobile, goal analytics. For mentions — partner pieces, industry media, maps and directories where clients are, targeted outreach without spam exchanges.",
        "If you need a second site, make it a separate product or regional project with its own value — not a wrapper. Then links and mentions look natural and do not depend on network “secrecy.”",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "audit the main site (tech, content, indexes)",
            "keywords and landings by intent — no duplicates",
            "measure traffic and leads (Metrica / Analytics)",
            "targeted mentions on live sites",
            "no new satellites or doorways",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "If contractors already pitch the scheme",
      level: 2,
      paras: [
        "Promises of “our network,” “guaranteed page one in a month via links,” and an “invisible farm” are a reason to change vendors. An honest plan separates site prep from ranking buildup: prep may take about a month; a solid share of the core in page-one visibility is planned over months — usually a 2–6 month horizon after work starts, with no date guarantee.",
        "Ask for transparency: what happens on your domain, which KPIs (traffic, leads, core share), which risks. Network schemes in contracts often hide as “content sites” — clarify who owns the domains and why they exist.",
      ],
      lists: [
        {
          intro: "Questions for the vendor:",
          items: [
            "which domains are created and in whose name",
            "is there a plan without a controlled link network",
            "how they measure results beyond “we bought links”",
            "what happens on a filter — responsibility and rollback",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Site prep is not page one. Core visibility builds month to month; a typical planned horizon is 2–6 months after work starts.",
        },
      ],
    },
  ],
  related: [
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "filtry-poiskovikov",
    "autrich",
    "molodoy-sayt",
    "samostoyatelnoe-seo",
  ],
};
