import type { BlogPost } from "../../../data/blog";

/** EN overlay for turbo-stranitsy — same structure as RU JSON. */
export const turboStranitsyEn: BlogPost = {
  slug: "turbo-stranitsy",
  title: "Yandex Turbo pages: recommendations feed and what to do after shutdown",
  date: "2018-08-21",
  category: "SEO",
  cover: "/images/blog/turbo-stranitsy/cover-en.webp",
  excerpt:
    "What Turbo pages and the auto recommendations feed were, why the tech was retired, and what to rely on for mobile UX and monetization now — your own responsive site.",
  lead: [
    "Yandex Turbo pages sped up mobile SERP via lightweight copies in search infrastructure. The auto recommendations feed suggested similar articles and could lift depth on media and blogs.",
    "By 2025 Turbo in search and related products had shut down: mobile networks and solid responsive sites made a separate “accelerator” less necessary. We cover what the auto feed did (for history and migrations) and where to put effort now.",
  ],
  faq: [
    {
      q: "Do Turbo pages still work?",
      a: "Not as a live search channel: Turbo in SERP stopped, Webmaster/Direct sections were disabled. Rely on your own mobile site.",
    },
    {
      q: "What did the recommendations feed give?",
      a: "Similar materials after finishing a read without hand-picking RSS related. Publisher tests saw depth and time grow — with enough homogeneous Turbo URLs.",
    },
    {
      q: "Who benefited most from Turbo?",
      a: "Media, content portals, and informational blogs with an article stream. Commercial service landings — weaker as a main format.",
    },
    {
      q: "Should I delete old Turbo feeds?",
      a: "Usually no urgent manual cleanup: sections were turned off centrally. Check that traffic and ads are tied to the main site.",
    },
    {
      q: "What replaces Turbo for speed?",
      a: "Responsive design, Core Web Vitals / mobile speed, light templates, CDN if needed. A separate “search format” is no longer a strategy.",
    },
    {
      q: "What about AMP as an alternative?",
      a: "Not required for most commercial sites. Own mobile UX first; AMP is a narrow case, not a default Turbo substitute.",
    },
    {
      q: "Will I lose traffic without Turbo?",
      a: "Yandex indicated shutdown shouldn’t break traffic distribution to sites if the mobile version is fine. Risk is bad mobile UX, not missing Turbo.",
    },
    {
      q: "Can I show display ads on Turbo pages?",
      a: "Move monetization to your site’s mobile pages (network formats on your URLs). Don’t build new blocks on dead tech.",
    },
  ],
  sections: [
    {
      title: "What Turbo and auto recommendations were",
      level: 2,
      paras: [
        "Turbo — lightweight pages from an RSS/feed that Yandex served from its servers: fast load on weak mobile networks, less load on the publisher’s hosting.",
        "The automatic recommendations feed picked similar materials via neural topic modeling. It turned on in Webmaster under Turbo settings — without a manual “related” list in the feed.",
      ],
      lists: [
        {
          intro: "Claimed pros of the Turbo era:",
          items: [
            "fast first screen on a phone;",
            "depth growth via “read more”;",
            "ad blocks in the Yandex ecosystem;",
            "customization within the format.",
          ],
        },
      ],
      notes: [
        {
          title: "Status",
          text: "Figures like “×15 faster” and “+20% revenue” from old Yandex cases are historical context, not a current KPI. Plan from your responsive site.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How the auto feed worked",
      level: 2,
      paras: [
        "After finishing an article, relevant materials from the same site showed. First feed appearance could take up to a day; further recalculation often ran at night on new Turbo URLs.",
        "The feed struggled if accelerated pages were few or topics too mixed: models had nothing stable to cluster as “similar”. Mixing with manual related in the feed usually gave priority to the site’s RSS settings.",
      ],
      lists: [
        {
          intro: "When the auto feed didn’t take off:",
          items: [
            "few Turbo pages in the format index;",
            "chaotic topics without clusters;",
            "conflict with manual related blocks.",
          ],
        },
      ],
    },
    {
      title: "Why the technology was retired",
      level: 2,
      paras: [
        "By the mid-2020s mobile networks and responsive site quality rose; a separate “accelerated snapshot” in SERP became less needed. Yandex announced ending Turbo support: Turbo versions stopped showing in search; products (Webmaster, Direct) phased out builders and display.",
        "For SEO that means: don’t hang strategy on someone else’s SERP format. Visibility and conversion sit fully on your URLs again.",
      ],
      lists: [
        {
          intro: "Practical takeaway:",
          items: [
            "don’t connect “new Turbo”;",
            "don’t build a media plan on Turbo traffic;",
            "check mobile templates and speed;",
            "move related/recommendations onto the site.",
          ],
        },
      ],
      links: [
        {
          label: "Mobile search and SEO",
          href: "/en/blog/mobilnyy-poisk/",
        },
      ],
    },
    {
      title: "Where to move recommendations and depth",
      level: 2,
      paras: [
        "On your site: “read also” blocks, cluster internal linking, infinite scroll or related widgets by tags/embeddings — under your design and analytics.",
        "Measure depth and revenue on main URLs in Yandex Metrika: goals, scroll, finish reading, related clicks. More controllable than depending on a search format.",
      ],
      lists: [
        {
          intro: "Minimum for media/blog:",
          items: [
            "related after the article;",
            "in-text internal links;",
            "useful mobile TOC/nav;",
            "ad formats on your own pages.",
          ],
        },
      ],
      links: [
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Mobile site instead of Turbo",
      level: 2,
      paras: [
        "Priority: one canonical responsive site, fast LCP on 4G/3G, readable fonts, touch targets, no heavy entry overlays.",
        "Check key templates in DevTools and on real phones; watch Webmaster/Search Console reports on mobile usability and speed. For most businesses that’s enough without AMP.",
      ],
      lists: [
        {
          intro: "Checklist after dropping Turbo:",
          items: [
            "responsive on one URL;",
            "PageSpeed/Lighthouse mobile on top URLs;",
            "forms and a tappable phone;",
            "monetization/CTA on your pages;",
            "monitor mobile traffic 2–4 weeks.",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
      notes: [
        {
          title: "SEO timelines",
          text: "Better mobile UX helps users right away; core rank buildup is still planned months (often 2–6), not “TOP after turning old Turbo back on”.",
          kind: "tip",
        },
      ],
    },
  ],
  related: [
    "mobilnyy-poisk",
    "adaptivnyy-sayt",
    "razmer-stranitsy",
    "vnutrennyaya-perelinkovka",
    "yandeks-vebmaster",
    "seo-yandex-google",
  ],
};
