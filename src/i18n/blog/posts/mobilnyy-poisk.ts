import type { BlogPost } from "../../../data/blog";

/** EN overlay for mobilnyy-poisk — same structure as RU JSON. */
export const mobilnyyPoiskEn: BlogPost = {
  slug: "mobilnyy-poisk",
  title: "Mobile search in SEO: SERP, responsive, and speed",
  date: "2018-08-14",
  category: "SEO",
  cover: "/images/blog/mobilnyy-poisk/cover-en.webp",
  excerpt:
    "How the mobile SERP differs from desktop, why check ranks and UX on a phone, responsive vs m-site, and what to do with speed after the Turbo/AMP hype faded.",
  lead: [
    "A large share of search traffic comes from smartphones. Mobile-first indexing and separate blocks in the mobile SERP make “desktop-only checks” a blind spot: ranks, snippets, and phone usability can diverge from desktop.",
    "Below: how the SERPs differ, how to check and adapt the site, when responsive is enough and when speed needs focus, and how not to build strategy on outdated accelerators like Turbo.",
  ],
  faq: [
    {
      q: "Are mobile and desktop SERPs the same?",
      a: "Not always. Different devices, behavior, and blocks (including quick answers, maps). Ranks for one query can differ.",
    },
    {
      q: "Is Mobile-First Index mandatory?",
      a: "For Google the mobile version has long been the indexing base. In Yandex mobility is in the formula too. Broken smartphone UX = risk.",
    },
    {
      q: "Responsive or a separate m-site?",
      a: "Default: responsive on one URL. A separate m. is legacy with duplicate and drift risks.",
    },
    {
      q: "Do I need Turbo pages?",
      a: "No: the format is off in search. Invest in speed and responsive on your own site.",
    },
    {
      q: "Does every site need AMP?",
      a: "No. Correct mobile and Core Web Vitals first; AMP only for narrow cases.",
    },
    {
      q: "How often should I pull mobile rankings?",
      a: "On the priority core — regularly (weekly / after updates). Watch cluster dynamics, not one phrase.",
    },
    {
      q: "Is a Mobile-Friendly test enough?",
      a: "That’s the base. Add speed, real phones, forms, and key templates in mobile analytics.",
    },
    {
      q: "When should I expect growth from mobile fixes?",
      a: "UX and conversion can improve fast. Competitive-core rankings are planned for months of work — not page one next week. Share of the core typically builds over two to six months after work starts.",
    },
  ],
  sections: [
    {
      title: "Why you can’t ignore mobile search",
      level: 2,
      paras: [
        "Mobile share in organic for most niches dominates or is near half+. Algorithms like the historical Mobilegeddon and Yandex’s “Vladivostok” formula locked in: smartphone usability is a ranking and traffic-survival factor.",
        "Google has long relied on a mobile-first index: for the bot the mobile document is the reference. If it’s pretty only on a monitor, you lose both UX and visibility.",
      ],
      lists: [
        {
          intro: "Risks of desktop-only:",
          items: [
            "different ranks and snippets",
            "high bounce on smartphone",
            "lost local and “on the go” queries",
            "weak conversion from the phone",
          ],
        },
      ],
      links: [
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "How the mobile SERP differs",
      level: 2,
      paras: [
        "The mobile SERP is built on smartphone and tablet stats: different clicks, different blocks (maps, quick answers, local packs). Don’t copy the desktop top one-to-one into a “we’re ranking” report.",
        "Monitor ranks in the mobile slice of Yandex and Google on the commercial core. Otherwise you optimize a pretty PC picture while leads come from the phone.",
      ],
      lists: [
        {
          intro: "Watch separately:",
          items: [
            "mobile vs desktop ranks",
            "snippet CTR on smartphone",
            "local and “near me” queries",
            "featured/quick answers on info clusters",
          ],
        },
      ],
      links: [
        {
          label: "Snippet",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "How to adapt the site for smartphones",
      level: 2,
      paras: [
        "Start with analytics: mobile share, devices, top landings by visits and goals. Check mobile-friendly and speed (PageSpeed/Lighthouse in mobile mode).",
        "In DevTools emulate key models, but also check two or three real phones. Remove horizontal scroll, tiny type, heavy scripts, aggressive popups, and outdated Flash-like junk.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "mobile slice in Metrica/GA",
            "audit of main templates",
            "HTTPS and a proper viewport",
            "Search Console / Webmaster — mobile errors",
            "regular mobile rank pulls on the core",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "warning",
          text: "Squeezing desktop CSS without changing content and form priority. On a phone the first screen must match the job, with large touch targets.",
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Responsive or a separate mobile version",
      level: 2,
      paras: [
        "Responsive: one URL, layout by screen width. Easier to maintain, fewer duplicates, the usual path for CMS.",
        "Separate m-site: own template/subdomain, sometimes more flexible for UX, but costlier to support and riskier for SEO (redirects, content drift). New projects usually pick responsive.",
      ],
      lists: [
        {
          intro: "Why responsive more often:",
          items: [
            "one canonical URL",
            "less content drift",
            "faster to ship on an existing CMS",
            "simpler analytics and links",
          ],
        },
      ],
      links: [
        {
          label: "Site layout",
          href: "/en/blog/verstka-saytov/",
        },
      ],
    },
    {
      title: "Speed: after Turbo and AMP hype",
      level: 2,
      paras: [
        "Older advice often pushed AMP and Yandex Turbo pages. Turbo is off in search; AMP isn’t required for most commercial sites. The base is fast pages of your own.",
        "Cut CSS/JS weight, optimize images, caching, fonts. Large media with extreme traffic sometimes need separate light templates — that’s site engineering, not “turn Turbo on.”",
      ],
      lists: [
        {
          intro: "Speed focus:",
          items: [
            "LCP/INP on mobile",
            "hero and above-the-fold weight",
            "defer what’s extra",
            "CDN for geography/peaks",
          ],
        },
      ],
      links: [
        {
          label: "Turbo pages (history and takeaway)",
          href: "/en/blog/turbo-stranitsy/",
        },
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "How to fold mobile into the SEO process",
      level: 2,
      paras: [
        "Keep mobile ranks and mobile conversion in the monthly loop alongside tech and content. Check template edits on a phone before shipping for everyone.",
        "Design new landings mobile-first from the start: offer, tappable phone, short form. Otherwise you later fix what already earned bad behavioral signals.",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "weekly: mobile errors in accounts",
            "per release: smoke key URLs on a phone",
            "monthly: mobile ranks on the core + CR",
            "quarterly: speed of top landings",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Mobile-base prep — weeks. Visibility buildup on the core is planned for two to six months. Mobile is an entry condition, not a ranking shortcut.",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Site bounce rate",
          href: "/en/blog/otkazy-sayta/",
        },
      ],
    },
  ],
  related: [
    "adaptivnyy-sayt",
    "turbo-stranitsy",
    "razmer-stranitsy",
    "snippet",
    "seo-yandex-google",
    "otkazy-sayta",
  ],
};
