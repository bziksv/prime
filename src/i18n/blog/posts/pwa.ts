import type { BlogPost } from "../../../data/blog";

/** EN overlay for pwa — same structure as RU JSON. */
export const pwaEn: BlogPost = {
  slug: "pwa",
  title: "PWA: what Progressive Web Apps are and when you need them",
  date: "2019-09-10",
  category: "Internet marketing",
  cover: "/images/blog/pwa/cover-en.webp",
  excerpt:
    "What a PWA is: a site with a manifest and Service Worker, home-screen install, offline cache, and push. Upsides for stores and the limits — without promising an “automatic Google TOP”.",
  lead: [
    "A PWA (Progressive Web App) is a website that behaves closer to an app: you can add it to the home screen, work partly offline, and send notifications (where the browser and OS allow).",
    "Below — what a PWA is made of, why business needs it, and site requirements. It doesn’t replace a native store app and isn’t an “SEO boost” button: first a fast responsive site on HTTPS.",
  ],
  faq: [
    {
      q: "Is a PWA installed from the App Store / Google Play?",
      a: "Usually no: the user adds the site from the browser to the home screen. Store publishing scenarios exist, but classic PWA is web + installable.",
    },
    {
      q: "Does a PWA raise search rankings?",
      a: "There’s no direct “PWA bonus”. Indirectly HTTPS, speed, and solid mobile UX help — and you can improve those without a full PWA.",
    },
    {
      q: "What’s technically required?",
      a: "HTTPS, a web manifest (name, icons, start_url), and a Service Worker for cache/offline. Without that, “Install” won’t work as intended.",
    },
    {
      q: "Does offline work fully?",
      a: "Only what you cached and designed for. Cart and order without a network need separate design — not a PWA checkbox magic.",
    },
    {
      q: "Do all sites need one?",
      a: "No. It fits repeat visits, catalogs, “app-like” services. A one-off service landing often only needs a fast mobile layout.",
    },
  ],
  sections: [
    {
      title: "What a PWA can do",
      level: 2,
      paras: [
        "A home-screen icon, launch almost without the browser chrome, static and partial data cache via Service Worker, push notifications where the platform allows.",
        "Large-web examples (maps, media, retail) show a “site = habit” scenario — not a mandatory stack for every business card site.",
      ],
      lists: [
        {
          intro: "Strengths:",
          items: [
            "one codebase across devices via the browser;",
            "faster path to “install” than native development;",
            "less space than a heavy APK;",
            "server updates without store moderation.",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Pros and cons for business",
      level: 2,
      paras: [
        "For a store and a service with repeat visits, a PWA can cut friction: faster return entry, offline viewing of cached sections, reminders (with consent).",
        "Downsides: feature support depends on browser and iOS/Android; push and background jobs are limited; Service Worker build and upkeep is separate engineering. “Install a plugin and forget” on a complex store is risky.",
      ],
      lists: [
        {
          intro: "When to look at PWA:",
          items: [
            "high return traffic;",
            "you need a light “shortcut” without a native app;",
            "the site is already fast and on HTTPS;",
            "you have capacity to maintain cache and updates.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t promise yourself “PWA = higher in the SERP”. First Core Web Vitals and clear mobile UX; PWA is the next convenience layer.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Speeding up WordPress",
          href: "/en/blog/uskorenie-wordpress/",
        },
        {
          label: "AMP pages",
          href: "/en/blog/amp/",
        },
      ],
    },
    {
      title: "Basic site requirements",
      level: 2,
      paras: [
        "HTTPS is mandatory. You need responsive or a solid mobile version. The manifest describes name, icons, and start URL. The Service Worker registers and carefully caches resources without breaking cart and account areas.",
        "Every important page needs a stable URL. Test install and offline on real devices — not only in Lighthouse.",
      ],
      lists: [
        {
          intro: "Checklist before rollout:",
          items: [
            "SSL works on all URLs;",
            "mobile UX is acceptable without PWA;",
            "manifest and icons are ready;",
            "cache strategy is agreed with engineering;",
            "there’s a plan to update the SW without “sticking” on an old version.",
          ],
        },
      ],
    },
  ],
  closing: [
    "A PWA turns a site into an installable web experience with cache and (where allowed) notifications. Ship it when repeat visits and UX pay for the upkeep; don’t let it replace site speed and honest SEO.",
  ],
  related: [
    "adaptivnyy-sayt",
    "uskorenie-wordpress",
    "amp",
    "mobilnyy-poisk",
    "pered-zapuskom-sayta",
    "bezopasnost-sayta",
  ],
};
