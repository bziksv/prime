import type { BlogPost } from "../../../data/blog";

/** EN overlay for sayty-satellity — same structure as RU JSON. */
export const saytySatellityEn: BlogPost = {
  slug: "sayty-satellity",
  title: "Satellite sites: risks and why you shouldn’t",
  date: "2020-02-05",
  category: "SEO",
  cover: "/images/blog/sayty-satellity/cover-en.webp",
  excerpt:
    "What satellite sites mean in SEO, why they were built historically, risks to the main domain, and what to use instead of network schemes — without PBN build instructions.",
  lead: [
    "Satellites are helper sites made for links, traffic, or “crowding out” competitors in the SERP in favor of the main project. In classic SEO that’s a high-risk scheme: algorithms and moderation easily connect the network, and sanctions hit money and the main domain’s reputation.",
    "Below — what people meant by satellites, which types showed up, why the scheme breaks, and what to do instead of a network. This is a risk overview — not a guide on “how to build and successfully run” a multi-level grid.",
  ],
  faq: [
    {
      q: "Is a satellite always “black-hat” SEO?",
      a: "If the network exists to pass link equity and manipulate rankings — yes, that’s manipulation by intent. A separate useful brand project with a live audience is another story; it isn’t called a satellite in the spam sense.",
    },
    {
      q: "Can you “carefully” keep a network and not get caught?",
      a: "There’s no reliable guarantee. Shared patterns (hosting, templates, anchors, owners, outbound links) surface over time. Betting on stealth is a bad business strategy.",
    },
    {
      q: "How do satellites differ from buying links?",
      a: "Buying — one-off/pack placements on other people’s sites. Satellites — your (or controlled) domains for one goal. Both are dangerous when mass and lookalike; see the articles on buying links and backlink profiles.",
    },
    {
      q: "What if a network already exists?",
      a: "Don’t grow it. Assess risk with an SEO: which domains are indexed, how they tie to the main site, whether filters apply. Often it’s wiser to unwind spam outbound ties and strengthen the main site with content and tech.",
    },
    {
      q: "Will satellites get a young site into TOP faster?",
      a: "Not as a plan. Prep and getting indexed are one thing; building core rankings takes months. An “accelerator” network more often brings sanctions than lasting TOP.",
    },
    {
      q: "Are doorways and redirect wrappers satellites too?",
      a: "A related class: pages/domains with no value, built for spillover. For users and search that’s junk; for business — legal and reputational risk plus anti-spam systems.",
    },
    {
      q: "What replaces the idea of “your own link farm”?",
      a: "Useful content on the main domain, partnerships, PR, guest pieces on live sites, normal outreach. Donor quality beats the count of controlled “mirrors”.",
    },
    {
      q: "Should old satellites be deleted at once?",
      a: "Depends on ties and the index. Blind mass deletion without a plan can be worse than carefully removing links and noindex/closing. Decide after an audit — not from a chat tip.",
    },
  ],
  sections: [
    {
      title: "What satellite sites are",
      level: 2,
      paras: [
        "In SEO slang a satellite is a site that exists not for standalone audience value, but to help the main one: pass links, spill traffic, occupy SERP spots next to commercial queries. Often it’s a network of several (or dozens) domains with similar topics and weak content.",
        "Historically the scheme was popular when link equity and “density” of your own domains in TOP looked like a simple lever. Today search engines see related networks, template content, and unnatural link profiles better — so betting on satellites for a legitimate business rarely pays for the risk.",
      ],
      lists: [
        {
          intro: "Typical scheme goals (historically):",
          items: [
            "grow outbound links to the main domain;",
            "redirect visitors from secondary URLs;",
            "occupy several SERP spots with “your” sites;",
            "fake broad brand presence without real products.",
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
      title: "Which types showed up",
      level: 2,
      paras: [
        "Old guides split satellites by “quality”: throwaways on free hosting, slightly livelier ones with rare posts, redirect wrappers, and fully generated pages. The split means one thing — how much it looks like a normal project and how expensive it is to maintain.",
        "Even “dynamic” variants with visible updates don’t make the scheme safe if the main job is manipulation, not a product. For readers what matters is different: any type built for a network leaves traces and burns budget with no result guarantee.",
      ],
      lists: [
        {
          intro: "Signs of a “network” site (for diagnosis, not copying):",
          items: [
            "thin, template, or barely updated content;",
            "many outbound links to one commercial domain;",
            "same CMS/templates/WHOIS/hosting across a domain group;",
            "no service, contacts, policies, or real audience.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "We don’t describe how to build multi-level ties, mask owners, or “successfully” run a network. Such instructions hurt business and break search rules.",
        },
      ],
    },
    {
      title: "Why the scheme breaks",
      level: 2,
      paras: [
        "Algorithms and manual review hunt manipulation patterns: domain clusters, unnatural anchors, outbound-link bursts, doorways. When the network surfaces, it isn’t only the “extra” domain that suffers — the main project the whole thing was for can get hit.",
        "Economics and ops hit separately: registration, hosting, content, index monitoring. On a filter or index drop, spend burns, and recovering the main site takes months of work — with no magic “rollback in a week”.",
      ],
      lists: [
        {
          intro: "Typical consequences:",
          items: [
            "filters and drops on commercial queries;",
            "index loss for part or all of the network;",
            "budget to rebuild the main site and content;",
            "reputational damage if the scheme goes public.",
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
        "A link from your own satellite rarely looks like a recommendation from a live publication. Profiles need diverse independent donors, topical fit, and user behavior — not thousands of URLs from one “farm”.",
        "If reports show the lion’s share of referring domains are your own lookalike sites, that’s a red flag: the profile looks artificial. Fewer quality mentions beat a dense network of controlled pages.",
      ],
      lists: [
        {
          intro: "What to watch in the profile:",
          items: [
            "share of links from related/lookalike domains;",
            "anchor list (commercial-anchor stuffing);",
            "growth dynamics (sharp spikes with no PR reasons);",
            "whether “donors” have traffic and brand queries.",
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
        "If you need a second site — let it be a separate product or regional project with its own value, not a wrapper. Then internal links and mentions look natural and don’t depend on network “secrecy”.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "audit the main site (tech, content, indexes);",
            "semantics and landings by intent — no duplicates;",
            "measure traffic and leads (Metrica/Analytics);",
            "targeted mentions on live sites;",
            "no new satellites or doorways.",
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
        "Promises of “our network”, “guaranteed TOP in a month via links”, and an “invisible farm” are a reason to change vendors. An honest plan separates site prep from ranking buildup: prep may take about a month; a noticeable share of the core in TOP is planned over months of work — usually a 2–6 month horizon after work starts, with no date guarantee.",
        "Ask for transparency: what exactly happens on your domain, which KPIs (traffic, leads, core share), which risks. Network schemes in contracts often hide as “content sites” — clarify who owns the domains and why they exist.",
      ],
      lists: [
        {
          intro: "Questions for the vendor:",
          items: [
            "which domains are created and in whose name;",
            "is there a plan without a controlled link network;",
            "how they measure results beyond “we bought links”;",
            "what happens on a filter — responsibility and rollback.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Site prep ≠ TOP-10. TOP for the core builds month to month; a typical planned horizon is 2–6 months after work starts.",
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
