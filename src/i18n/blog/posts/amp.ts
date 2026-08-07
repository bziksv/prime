import type { BlogPost } from "../../../data/blog";

/** EN overlay for amp — same structure as RU JSON. */
export const ampEn: BlogPost = {
  slug: "amp",
  title: "Google AMP pages: what they were and whether you need them now",
  date: "2020-03-13",
  category: "SEO",
  cover: "/images/blog/amp/cover-en.webp",
  excerpt:
    "What AMP is: stripped-down HTML for fast mobile SERP delivery, pros and cons of Google’s cache, why the format stopped being a must-have, and where to put effort instead — your own responsive site.",
  lead: [
    "AMP (Accelerated Mobile Pages) is an open format of lightweight pages that Google pushed from 2015: limited HTML/JS, fast paint, and often delivery from the search cache.",
    "By the mid-2020s AMP is no longer a required mobile SEO layer: the carousel and SERP privileges are gone, and speed is decided by Core Web Vitals on your own site. Step-by-step “install a plugin and get TOP” guides are outdated — prep isn’t rankings, and TOP isn’t a plugin flip.",
  ],
  faq: [
    {
      q: "Is AMP still required for mobile SEO?",
      a: "No. First a fast responsive site. AMP is a narrow/historical case — not a substitute for real mobile UX.",
    },
    {
      q: "How did AMP differ from a normal page?",
      a: "A strict set of tags and components, little arbitrary JS, stripped layout. Google could serve a copy from its cache — faster on a weak connection, but part of the session wasn’t on your host.",
    },
    {
      q: "Is AMP the same as Yandex Turbo?",
      a: "The idea is similar (a light mobile copy), ecosystems differ. Turbo in search was also wound down — the bet is on your own site.",
    },
    {
      q: "Should you urgently delete old /amp URLs?",
      a: "Not always. Check that canonical and analytics point to the main version, there’s no index confusion or dead redirects. What matters is main mobile quality.",
    },
    {
      q: "Does AMP give a ranking boost?",
      a: "There’s no direct “AMP points” as a required factor. Speed and behavior matter — you cover them on regular URLs.",
    },
  ],
  sections: [
    {
      title: "How AMP worked",
      level: 2,
      paras: [
        "A page was built under AMP HTML rules: allowed components instead of arbitrary scripts, markup validation. The goal — predictable fast load on a phone.",
        "Users could open AMP on your domain (often an `/amp` suffix or `?amp`) or see a cached copy in Google’s infrastructure. In the second case some metrics and the “feel of the site” differed from a full visit to your host.",
      ],
      lists: [
        {
          intro: "What was usually stripped:",
          items: [
            "heavy arbitrary JavaScript;",
            "complex widgets and some forms;",
            "heavy graphics and effects;",
            "some ad and social blocks without special components.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Turbo pages",
          href: "/en/blog/turbo-stranitsy/",
        },
      ],
    },
    {
      title: "Pros and cons of the AMP era",
      level: 2,
      paras: [
        "The upside was speed on weak mobile networks and a shared “light” template for media. The downsides: poorer UX, harder analytics and conversions, canonical confusion risk, dependence on platform rules and cache.",
        "We don’t reuse old PageSpeed “was 61 — became 87” benchmarks from 2019–2020 cases: tools and metric weights changed. Check current reports on your URLs.",
      ],
      lists: [
        {
          intro: "Typical rollout problems:",
          items: [
            "low conversion on the stripped page;",
            "harder goals and events in analytics;",
            "duplicates/canonical issues from bad setup;",
            "maintaining two templates instead of one good mobile.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "If “fast AMP” converts worse than the full site, the speed win is eaten by lost leads. Count business metrics, not only load time on a demo URL.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Do you need AMP now",
      level: 2,
      paras: [
        "For most commercial sites in 2026 the sensible answer is no as a required layer. Invest in responsive design, compression, fonts, images, cache/CDN, and Core Web Vitals on canonical URLs.",
        "AMP only makes sense if you have a narrow content case, format support already in the stack, and clear analytics. We don’t start new projects “for an AMP checkbox.”",
      ],
      lists: [
        {
          intro: "Where to put the effort:",
          items: [
            "mobile layout and readability;",
            "LCP/INP/CLS speed;",
            "clear CTAs on the full site;",
            "one template without a parallel “light universe.”",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Mobile search",
          href: "/en/blog/mobilnyy-poisk/",
        },
      ],
    },
  ],
  closing: [
    "AMP sped up mobile content in the era of slow networks and SERP privileges. Today the bet is a fast site of your own, not a required second format. If AMP already exists — tidy canonical and metrics; if not — start with responsive.",
  ],
  related: [
    "turbo-stranitsy",
    "adaptivnyy-sayt",
    "mobilnyy-poisk",
    "pered-zapuskom-sayta",
    "verstka-saytov",
    "ishodnyy-kod",
  ],
};
