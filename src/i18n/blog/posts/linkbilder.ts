import type { BlogPost } from "../../../data/blog";

/** EN overlay for linkbilder — same structure as RU JSON. */
export const linkbilderEn: BlogPost = {
  slug: "linkbilder",
  title: "Link builder: who they are and what they do in SEO",
  date: "2019-12-13",
  category: "Digital marketing",
  cover: "/images/blog/linkbilder/cover-en.webp",
  excerpt:
    "What a link builder does: tasks, skills, how the role differs from buying links in packs, donor quality, and the link to outreach — without spam how-tos or course promos.",
  lead: [
    "A link builder owns external mentions and links: finds publishers, negotiates placements, and watches profile quality. After stricter filters, mass “links wholesale” lost its edge — the focus is relevance and a living audience.",
    "Below: what the specialist does, which skills matter, and how the role differs from “buy 100 links on an exchange.” Paid-placement risks are in a separate piece; manual publisher search is in the outreach article. This material does not teach how to bypass search-engine rules.",
  ],
  faq: [
    {
      q: "Is a link builder the same as an SEO specialist?",
      a: "They often overlap. SEO is broader (tech, content, keywords). A link builder goes deeper on external placements and negotiation; in small teams it is one role.",
    },
    {
      q: "Is this about buying links?",
      a: "Not necessarily. The modern focus is mentions, guest pieces, partnerships, PR. Paid slots are a separate decision with risks.",
    },
    {
      q: "Do you need link exchanges?",
      a: "As one tool — sometimes. As the only “pack” strategy — risky. Donor quality criteria beat the exchange brand name.",
    },
    {
      q: "How many links per month is normal?",
      a: "There is no universal quota. Topic fit, natural anchors, and no explosion matter more. A sharp mass spike is a red flag.",
    },
    {
      q: "Does link building guarantee page-one rankings?",
      a: "No. Links are one factor. Site prep and growing a query core are separate horizons — typically planned over 2–6 months of systematic work after promotion starts.",
    },
    {
      q: "Where should a beginner start?",
      a: "SEO basics, donor analysis, business writing, tracking sheets. Practice on your own or a training project, and review others’ profiles without copying spam.",
    },
  ],
  sections: [
    {
      title: "Where the role came from",
      level: 2,
      paras: [
        "Earlier, part of SEO meant growing link mass at any cost. Filters and algorithm shifts moved the bet to quality: a site with an audience and real content beats hundreds of throwaways.",
        "That is how the specialty formed: not a “pack buyer,” but someone who builds a profile on purpose — hand-picks donors, writes to editors, measures effect.",
      ],
    },
    {
      title: "What a link builder does",
      level: 2,
      paras: [
        "Responsibility covers external-mention strategy, publisher selection, negotiation, publication control, an anchor plan without over-spam, reporting, and ties to content and PR.",
        "A good specialist knows which donors to avoid so visibility is not hurt. They can explain to the business why a placement matters even if the link is not dofollow — or if the win is traffic, not only “weight.”",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "audit the current backlink profile",
            "find topical sites and media",
            "briefs and emails to editors or partners",
            "track placements and indexation",
            "report: clicks, mentions, risks",
          ],
        },
      ],
      links: [
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
        {
          label: "Buying links",
          href: "/en/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "Skills and tools",
      level: 2,
      paras: [
        "You need SEO basics, a critical eye on donors (traffic, topic, spamminess), business writing, sheets (Sheets/Excel), and deadline care. Plus content sense: a link in weak copy is almost useless.",
        "Backlink tools and tracking tables help; the real work is selection and negotiation — not a bulk-buy button.",
      ],
      lists: [
        {
          intro: "How to grow competence:",
          items: [
            "learn SEO basics on your own",
            "work with an experienced SEO on a team",
            "run a mini project and cases",
            "learn from filter postmortems — without buying “secret schemes”",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Course promo codes and “link packs in a week” are a red flag in this role. Look at placement practice and a portfolio — not page-one promises.",
        },
      ],
    },
    {
      title: "Strategy: quality instead of an explosion",
      level: 2,
      paras: [
        "A period plan: which mention types you need (article, review, partnership), budget, donor criteria, pace. A sharp mass spike looks unnatural.",
        "Anchors — a mix of brand, URL, and rare exact matches. The link must fit the piece; an “anchor wall” hurts.",
      ],
      lists: [
        {
          intro: "What to check on a publisher:",
          items: [
            "topic close to yours",
            "a living audience, not a link warehouse",
            "age and indexation",
            "moderation and reputation",
          ],
        },
      ],
    },
    {
      title: "Where placements come from",
      level: 2,
      paras: [
        "White-hat and gray-hat approaches differ a lot. What usually makes sense: niche media and blogs, partner pieces, meaningful mentions in video or podcasts, company listings. Forum-signature spam and one-day directories — noise and risk.",
        "Paid exchanges and direct advertorials exist; decide via quality and ad labeling — not “how to buy weight cheaper.” More on purchase risks — in the buying-links article.",
      ],
      links: [
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "How to tell the work is moving",
      level: 2,
      paras: [
        "Do not watch only “new link count”: UTM clicks, branded queries, mention quality, no toxic growth. One strong piece with an audience often beats a dozen exchange slots.",
        "Search visibility timelines are separate from the publish date: site prep and growing a query core take months of systematic work — links alone do not “turn on page one tomorrow.”",
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Links support promotion; they do not replace prep. Ranking work for a core is typically planned over 2–6 months after work starts.",
        },
      ],
    },
  ],
  closing: [
    "A link builder builds external mentions on purpose: publisher, audience, agreement, tracking. It is not a “buy a link pack” job — it is work at the SEO–content–negotiation junction, with respect for filter risks.",
  ],
  related: [
    "autrich",
    "pokupka-ssylok",
    "molodoy-sayt",
    "veb-analitik",
    "kontent-menedzher",
    "samostoyatelnoe-seo",
  ],
};
