import type { BlogPost } from "../../../data/blog";

/** EN overlay for tochki-rosta-sayta — same structure as RU JSON. */
export const tochkiRostaSaytaEn: BlogPost = {
  slug: "tochki-rosta-sayta",
  title: "Site growth points: where to look when traffic and leads stall",
  date: "2019-09-20",
  category: "Digital marketing",
  cover: "/images/blog/tochki-rosta-sayta/cover-en.webp",
  excerpt:
    "What to do when site growth hits a plateau: expand semantics, strengthen CRO and landings, fix behavior and speed, add content and channels — without the myth that “everything is already squeezed”.",
  lead: [
    "Even with decent momentum a project sometimes hits a plateau: it feels like “the ceiling is reached”. More often that’s a narrow core, weak landings, or one–two traffic channels — not a physical niche limit.",
    "These are the working growth levers. Not “eight buttons for any site,” but a priority checklist. SEO: prep ≠ ranking in TOP; gathering positions across the core is planned 2–6 months after work starts.",
  ],
  faq: [
    {
      q: "Does a plateau mean nothing is left to improve?",
      a: "Rarely. More often clusters, CRO, or extra channels aren’t covered. A narrow region/niche caps the ceiling but doesn’t erase growth points.",
    },
    {
      q: "Where should I start looking for growth?",
      a: "With diagnosis: where you lose — demand, positions, conversion, or traffic volume. Then one–two levers, not everything at once.",
    },
    {
      q: "Do new pages always bring growth?",
      a: "Only if they cover real demand and don’t spawn thin content. Otherwise — noise in the index.",
    },
    {
      q: "Can I “improve” behavior metrics with fake traffic?",
      a: "No. Fix speed, relevance, and UX. Fake engagement risks sanctions.",
    },
    {
      q: "Is SEO alone enough?",
      a: "For some niches — temporarily. More durable is a stack: search + paid + email/content matching the deal cycle.",
    },
    {
      q: "How long until new landings show effect?",
      a: "Page prep takes weeks; a noticeable organic contribution from new clusters is planned over months — not “TOP-10 tomorrow”.",
    },
  ],
  sections: [
    {
      title: "When it feels like growth is over",
      level: 2,
      paras: [
        "Stagnation most often means: the core is picked, landings are weak, one channel feeds everything, or tech/speed cuts conversion. A narrow topic and small region complicate the picture, but almost always uncovered intents and related themes remain.",
        "First lock baseline metrics: traffic, visibility, CR, CPA. Otherwise you won’t tell a real lever from noise.",
      ],
      links: [
        {
          label: "Traffic drop",
          href: "/en/blog/snizhenie-trafika/",
        },
        {
          label: "Traffic forecast",
          href: "/en/blog/prognoz-trafika/",
        },
      ],
    },
    {
      title: "Semantics and new landings",
      level: 2,
      paras: [
        "The most direct lever in search is covering demand with pages for clusters: niche trends, refinements, splitting broad sections into narrow ones. Expand the audience with related topics (e.g. construction → design and plot) if that’s your funnel.",
        "Don’t spawn walls “for keywords”. One strong page per cluster beats ten thin ones.",
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Competitor entry points",
          href: "/en/blog/tochki-vhoda/",
        },
      ],
    },
    {
      title: "Conversion and landings",
      level: 2,
      paras: [
        "For commerce, traffic growth without CRO is often useless. Pull TOP competitors on your keywords, find blocks you lack, gather client objections and close them on the page: price, timing, guarantees, cases, form.",
        "Match the ad/snippet offer to the first screen — or bounces grow instead of leads.",
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Site bounce rate",
          href: "/en/blog/otkazy-sayta/",
        },
      ],
    },
    {
      title: "Behavior, content, and speed",
      level: 2,
      paras: [
        "Time on site, depth, bounce, returns — quality symptoms, not a goal to “inflate minutes”. Improve structure, answers to the query, and internal paths.",
        "An informational section (blog/guides) lifts awareness and loyalty; commercial conversion from info is lower, but brand and links often repay the contribution. Speed and mobile usability are mandatory background: a slow page kills SEO and ads. Interactives (calculator, ads account, builder) boost engagement if they solve a user job — not “for show”.",
      ],
      lists: [
        {
          intro: "Quick tech check:",
          items: [
            "mobile speed;",
            "responsive key templates;",
            "no heavy blocking scripts;",
            "analytics goals on key actions.",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
        {
          label: "Interactive content",
          href: "/en/blog/interaktivnyy-kontent/",
        },
      ],
    },
    {
      title: "Additional traffic channels",
      level: 2,
      paras: [
        "Many sites live on one–two sources. It makes sense to add, pointedly, what’s close to the audience: paid search next to SEO, social ads, email, YouTube, industry platforms, guest pieces, price aggregators for e-com — not “all ten at once”.",
        "Before budget on a creator or an ad set, check audience fit with your niche. Otherwise cheap clicks won’t become leads.",
      ],
      notes: [
        {
          title: "Important",
          text: "A new channel without a landing and UTM tracking only noises reports. Goal and measurement first, then scale.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
        {
          label: "Marketing strategy",
          href: "/en/blog/marketingovaya-strategiya/",
        },
      ],
    },
  ],
  closing: [
    "Growth points live in demand, conversion, experience quality, and channels — usually not in “yet another miracle tool”. Pick 1–2 levers from the diagnosis, measure effect, and only then widen the list.",
  ],
  related: [
    "semanticheskoe-yadro",
    "optimizatsiya-konversii",
    "otkazy-sayta",
    "istochniki-trafika",
    "prognoz-trafika",
    "tochki-vhoda",
  ],
};
