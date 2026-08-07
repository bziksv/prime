import type { BlogPost } from "../../../data/blog";

/** EN overlay for adblock — same structure as RU JSON. */
export const adblockEn: BlogPost = {
  slug: "adblock",
  title: "What AdBlock is and how to use it without surprises",
  date: "2020-09-29",
  category: "Digital marketing",
  cover: "/images/blog/adblock/cover-en.webp",
  excerpt:
    "AdBlock and similar tools are extensions that hide ads in the browser. Why people install them, how to pause for one site, and why blockers also cut useful widgets and analytics.",
  lead: [
    "AdBlock (and peers like AdBlock Plus, uBlock Origin, and others) are browser extensions that hide ads, trackers, and some pop-ups using filter lists.",
    "People turn them on for quieter pages and privacy — then wonder why a video player or chat “broke.” Button labels differ by browser and version; rely on the meaning (“pause on this site”), not an outdated screenshot. Site owners should bake blockers into how they read analytics.",
  ],
  faq: [
    {
      q: "Are AdBlock and AdBlock Plus the same?",
      a: "Different products with a similar job. Other blockers exist too. Shared logic: filters plus site exceptions.",
    },
    {
      q: "Why is the site empty or video won’t load?",
      a: "Often the player, “acceptable ads,” and payment or chat scripts get blocked too. Add the site to exceptions or disable the extension on the domain.",
    },
    {
      q: "Does AdBlock affect Yandex Metrica or Analytics?",
      a: "Yes: some visits and goals never reach the counter. When debugging, check the site without a blocker. See also the piece on Metrica going silent.",
    },
    {
      q: "How do you disable it on one site only?",
      a: "Via the extension icon: pause / “don’t run on this site” (wording varies). Full uninstall is rarely needed — an exception is usually enough.",
    },
    {
      q: "Is using an ad blocker legal?",
      a: "Users may install extensions. Sites may limit access when a blocker is active. Bypassing paywalls and pirated content is a separate ethical and legal story — not covered here.",
    },
  ],
  sections: [
    {
      title: "Why people install it and how it works",
      level: 2,
      paras: [
        "The job is simple: fewer distractions — banners, autoplay video, trackers. Some people enable blockers because of heavy pages and privacy, not only “to be difficult.”",
        "The extension subscribes to filter lists and hides elements that match the rules. You can add custom filters and allowlists. Products differ on “acceptable ads” policy and fine settings.",
        "Side effect: not only banners get cut, but feedback widgets, A/B tests, ad pixels, and analytics counters. For the user it’s “the site broke”; for marketing — a hole in the data.",
      ],
      lists: [
        {
          intro: "Typical benefits for the user:",
          items: [
            "less visual noise;",
            "pages often feel lighter;",
            "some trackers don’t fire;",
            "you can allow favorite sites selectively.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Metrica isn’t working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
        {
          label: "Types of advertising",
          href: "/en/blog/vidy-reklamy/",
        },
      ],
    },
    {
      title: "Pause, exceptions, and the site owner’s view",
      level: 2,
      paras: [
        "Install: your browser’s extension store → find a blocker → install. An icon appears on the toolbar; from it you manage pause and exceptions.",
        "Disable on the current page or the whole domain via the icon menu (“don’t run on this site” / pause). Full removal is in browser extensions; pause is usually enough. Exception lists are edited in the extension settings.",
        "If a video host or publisher asks you to turn the blocker off — that’s their access rule for content. Add the domain to the allowlist if you’re fine seeing ads in exchange for the material.",
        "For site owners: aggressive ads raise AdBlock share. It helps to lighten pages, not cover content with stacked popups, and remember part of the audience is “invisible” in analytics. Don’t build a business on grey-zone blocker bypass schemes — better value and a careful monetization format.",
        "Bottom line: AdBlock is a user comfort tool. Know how to pause it for sites you need; in marketing, bake blockers into how you read the numbers.",
      ],
      lists: [
        {
          intro: "If a site you need “broke”:",
          items: [
            "pause the extension on the domain;",
            "reload the page;",
            "try another browser without a blocker;",
            "don’t confuse it with antivirus/VPN filters;",
            "for counter debugging — incognito without extensions.",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics (behavior)",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "Ad banners",
          href: "/en/blog/reklamnyy-banner/",
        },
      ],
    },
  ],
  related: [
    "metrika-ne-rabotaet",
    "vidy-reklamy",
    "google-analytics",
    "ga4",
    "reklamnyy-banner",
  ],
};
