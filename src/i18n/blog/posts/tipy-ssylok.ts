import type { BlogPost } from "../../../data/blog";

/** EN overlay for tipy-ssylok — same structure as RU JSON. */
export const tipySsylokEn: BlogPost = {
  slug: "tipy-ssylok",
  title: "Link types and where to earn them",
  date: "2018-11-13",
  category: "SEO",
  cover: "/images/blog/tipy-ssylok/cover-en.webp",
  excerpt:
    "What backlinks look like and where they come from: natural mentions, media, content, partnerships, communities, directories, dofollow/nofollow, permanent vs temporary — without link farms and bulk spam.",
  lead: [
    "Link building hasn’t been “buy a pack on an exchange and grow in a week” for a long time. Search engines weigh donor quality, natural anchors, and reader value — link farms and mass submissions do more harm than good.",
    "This is a map of link types and acquisition channels: what still makes sense, where the risk line sits, and how it ties to profile analysis and paid placements. We don’t recycle old “.edu for a scholarship” recipes as a playbook.",
  ],
  faq: [
    {
      q: "How is this different from free links?",
      a: "That article covers sources without a media budget. Here — link types and channels overall, including paid and technical attributes.",
    },
    {
      q: "Is dofollow mandatory?",
      a: "No. Nofollow/sponsored/ugc still bring traffic and brand. Chasing only dofollow on junk sites is pointless.",
    },
    {
      q: "Are permanent links better than rented ones?",
      a: "Often yes for durability if the donor is alive. Temporary ones fit tests/campaigns. Quality of the site matters more than the “permanent” label.",
    },
    {
      q: "Do internal links count?",
      a: "Yes — that’s your own site’s internal linking. External link building doesn’t replace it.",
    },
    {
      q: "Are directories still useful?",
      a: "Narrow industry and local ones — sometimes. Mass auto-submits — almost never.",
    },
    {
      q: "Can I buy links?",
      a: "As advertising — under law and the platform’s rules. For SEO, package schemes carry high risk. More in the buying article.",
    },
    {
      q: "Where should I start?",
      a: "With strong content and natural mentions, then targeted partnerships and PR. Clean junk from the profile first.",
    },
  ],
  sections: [
    {
      title: "Why “just buy” no longer works",
      level: 2,
      paras: [
        "It used to be easy to grow mass via networks and exchanges. Now a relevant donor, a live audience, and a useful context matter — otherwise growth is short-lived or filtered.",
        "Pick channels for the niche and resources: B2B, local business, and media give mentions differently. There’s no universal “N links a day” checklist.",
      ],
      links: [
        {
          label: "Backlink profile analysis",
          href: "/en/blog/ssylochnyy-profil/",
        },
        {
          label: "Buying links: risks",
          href: "/en/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "Natural and content links",
      level: 2,
      paras: [
        "Natural links appear when people cite your work without an “exchange” deal: research, a tool, a strong guide, news.",
        "Formats that get saved and shared work: guides, screencasts, infographics, open data. Aim for value for the donor’s audience — not an anchor for its own sake.",
        "Expert content and guest pieces on live sites sit closer to a durable profile than spam comments.",
      ],
      links: [
        {
          label: "Free links",
          href: "/en/blog/besplatnye-ssylki/",
        },
        {
          label: "Guest post",
          href: "/en/blog/gostevoy-post/",
        },
      ],
    },
    {
      title: "Media, partners, communities, and directories",
      level: 2,
      paras: [
        "Press and industry outlets give reach and trust when there’s a news hook. Partner programs and mutual mentions work when there’s real value for both sides — not a bulk “link for link” scheme.",
        "Niche forums and communities — only honest answers; fake two-account dialogues hurt reputation. Social usually brings traffic and brand more than classic “link weight.”",
        "Industry and local directories can help navigation and NAP. Mass runs across thousands of directories are noise.",
      ],
      lists: [
        {
          intro: "Channels for a link-building map:",
          items: [
            "content and research;",
            "media / PR;",
            "partners and suppliers;",
            "communities in live discussions;",
            "narrow directories and maps;",
            "targeted paid placements as advertising.",
          ],
        },
      ],
      links: [
        {
          label: "Forum links",
          href: "/en/blog/ssylki-na-forumah/",
        },
        {
          label: "Website directories",
          href: "/en/blog/katalogi-saytov/",
        },
      ],
    },
    {
      title: "Internal links and attributes",
      level: 2,
      paras: [
        "Internal linking distributes weight and helps users. It’s often undervalued while teams chase only external backlinks.",
        "Dofollow signals “may be counted”; nofollow, sponsored, ugc are normal markup for ads and UGC. Don’t break attributes for the myth of “dofollow only.”",
      ],
      links: [
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Permanent, rented, and the risk zone",
      level: 2,
      paras: [
        "A “permanent” link on a live site beats a temporary one on a drop. Renting a strong placement can bring traffic for a campaign — count it as media, not a forever SEO asset.",
        "Exchange packages, link farms, .edu/.gov “for trust” schemes, and network reciprocal swaps sit in the high-risk zone. If you pay for placement — treat it as advertising and pick the donor like a media site.",
        "Before growing mass, check the current profile: remove what you control that is clearly spam.",
      ],
      links: [
        {
          label: "Link builder",
          href: "/en/blog/linkbilder/",
        },
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Exchange names and .edu/.gov “recipes” from 2010s posts aren’t a strategy anymore. Aim for donor quality, advertising law, and white-hat link building.",
  },
  closing: [
    "Draft a short map: which link types you already have, which channels are missing, and what you can give the donor’s audience — so link building becomes a plan, not a “buy more” habit.",
  ],
  related: [
    "besplatnye-ssylki",
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "ssylki-na-forumah",
    "linkbilder",
    "autrich",
  ],
};
