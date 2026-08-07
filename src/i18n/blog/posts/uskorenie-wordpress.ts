import type { BlogPost } from "../../../data/blog";

/** EN overlay for uskorenie-wordpress — same structure as RU JSON. */
export const uskorenieWordpressEn: BlogPost = {
  slug: "uskorenie-wordpress",
  title: "How to speed up a WordPress site: hosting, theme, plugins",
  date: "2019-09-27",
  category: "Internet marketing",
  cover: "/images/blog/uskorenie-wordpress/cover-en.webp",
  excerpt:
    "What really slows WordPress: TTFB and hosting, a heavy theme, duplicate plugins, images, and JS/CSS. A practical work order without worshipping one PageSpeed score or 2019 foreign case studies.",
  lead: [
    "A slow WordPress is usually the sum of hosting, a “do-everything” theme, a dozen plugins, and unoptimized images. Changing plans without cleaning the site helps little; cleaning without decent TTFB — likewise.",
    "Below — diagnosis and speed-up order. We don’t copy others’ Kinsta/Flywheel cases and “+N PageSpeed points” as a how-to: measure your URL in current tools (PageSpeed Insights, Web Vitals) and fix bottlenecks.",
  ],
  faq: [
    {
      q: "Where to start if everything is slow?",
      a: "Measure TTFB and LCP on mobile. If TTFB is high — look at hosting/server cache. If TTFB is fine but LCP is bad — theme, images, JS.",
    },
    {
      q: "Is a cache plugin enough?",
      a: "Cache helps, but won’t save a heavy theme and 40 plugins. Remove the excess first, then cache and CDN.",
    },
    {
      q: "Does Elementor speed up the site?",
      a: "Builders are convenient, but aren’t a “speed-up” by themselves. A light theme + fewer widgets is usually faster than a heavy builder with piles of add-ons.",
    },
    {
      q: "Do you need specialized WordPress hosting?",
      a: "Often yes: HTTP/2 or HTTP/3, SSL, server cache, decent PHP. Cheap shared without cache kills TTFB.",
    },
    {
      q: "Does speed = TOP growth?",
      a: "Speed affects UX and SEO indirectly. Core rankings are separate work: prep ~a month; TOP planned over 2–6 months after start.",
    },
  ],
  sections: [
    {
      title: "Diagnosis: where exactly it stalls",
      level: 2,
      paras: [
        "Pull a PageSpeed / Lighthouse report for the mobile version of key URLs. Watch TTFB, LCP, INP/CLS, and the “load less” list.",
        "Separately check: how many plugins, which theme, hero image weight, whether the server sends compression and cache. Without measurement, fixes are blind.",
      ],
      lists: [
        {
          intro: "Typical WordPress bottlenecks:",
          items: [
            "slow server response (TTFB);",
            "a heavy theme with extra scripts;",
            "duplicates and “dead” plugins;",
            "large JPG/PNG without WebP;",
            "blocking JS/CSS and extra fonts.",
          ],
        },
      ],
      links: [
        {
          label: "Web page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Hosting and the server layer",
      level: 2,
      paras: [
        "If TTFB is 1–2+ seconds, start with hosting: current PHP, server cache, SSD, sensible geolocation. WordPress-oriented plans often include cache and CDN “out of the box” — check current terms, not a 2019 price list.",
        "CDN cuts static latency for distant users. SSL and modern HTTP are baseline, not optional. Changing hosts without theme optimization gives a partial effect — that’s normal.",
      ],
      lists: [
        {
          intro: "What to ask the host:",
          items: [
            "is there page cache / object cache;",
            "PHP version and limits;",
            "CDN and HTTP/2–3;",
            "backups and staging for tests.",
          ],
        },
      ],
    },
    {
      title: "Theme, plugins, and media",
      level: 2,
      paras: [
        "A “premium theme for every case” pulls sliders, fonts, and builders you don’t use. Take a lighter template or hard-disable modules.",
        "Plugins: remove unused ones; don’t keep two caches / two SEO / two sliders. Update what’s left. Images — compression, sensible sizes, lazy-load, WebP/AVIF where possible.",
        "JS/CSS: defer non-critical, don’t load Google Fonts in a pack “just in case”, prefer system or local fonts when possible. “Combine everything” plugins — test on staging: they sometimes break the site.",
      ],
      lists: [
        {
          intro: "Work order:",
          items: [
            "backup and staging;",
            "measure before changes;",
            "clean plugins and theme;",
            "optimize images;",
            "cache + CDN;",
            "re-measure the same URLs.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t chase “100/100” at any cost. Stable mobile LCP and unbroken cart/forms after “optimization” matter more.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "WordPress theme",
          href: "/en/blog/tema-wordpress/",
        },
        {
          label: "WordPress SEO plugins",
          href: "/en/blog/wordpress-seo-plaginy/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
    },
  ],
  closing: [
    "Speeding up WordPress is measurement, hosting with decent TTFB, a light theme, fewer plugins, and compressed media. Change things on staging and check business scenarios; PageSpeed scores are an indicator — not the goal itself.",
  ],
  related: [
    "tema-wordpress",
    "wordpress-seo-plaginy",
    "wordpress-bezopasnost",
    "razmer-stranitsy",
    "amp",
    "pered-zapuskom-sayta",
  ],
};
