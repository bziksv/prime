import type { BlogPost } from "../../../data/blog";

/** EN overlay for vebvizor — same structure as RU JSON. */
export const vebvizorEn: BlogPost = {
  slug: "vebvizor",
  title: "Yandex Webvisor: how to enable and watch session recordings",
  date: "2019-06-18",
  category: "Digital marketing",
  cover: "/images/blog/vebvizor/cover-en.webp",
  excerpt:
    "What Webvisor is in Yandex Metrika: how to turn on session recording, what to check on the site, how to filter visits, and why watch selectively — without outdated 1.0/2.0 versions and rigid 2019 limits.",
  lead: [
    "Webvisor records visitor behavior in Yandex Metrika: where people clicked, how they scrolled, where they stuck in a form or cart. It’s a tool for UX hypotheses — not daily “spying on everyone.”",
    "Below: what the tool is for, how to enable it on the counter, tech conditions, and how to use a sample. UI and storage/volume limits change — check Metrika Help. Click and scroll maps are related; here the focus is session recordings.",
  ],
  faq: [
    {
      q: "Are Webvisor and regular visits the same?",
      a: "No. The counter can count visits while session recording is off or broken by CSP/blockers. Diagnosing “Metrika is silent” is in a separate article.",
    },
    {
      q: "Do you need to watch every recording?",
      a: "No. First numbers and segments, then a sample: ad bounces, abandoned cart, long visits with no goal.",
    },
    {
      q: "Is it lawful for personal data?",
      a: "Behavior recording is sensitive. You need a policy, cookie/analytics consent where required, and common sense: don’t collect extra fields on forms that get recorded.",
    },
    {
      q: "Does Webvisor replace A/B tests?",
      a: "No. It suggests hypotheses. Validation is conversion measurement and tests.",
    },
    {
      q: "Do old guides about Webvisor 1.0 and 2.0 still apply?",
      a: "Product history. Today enable current Webvisor in counter settings per Yandex Help — don’t copy the “1.0 vs 2.0” fork.",
    },
  ],
  sections: [
    {
      title: "Why Webvisor",
      level: 2,
      paras: [
        "Numbers show “where it’s bad”; a recording shows “how exactly”. You see missed buttons, fear of a long form, a menu dead end, mobile behavior after a release.",
        "Especially useful on key URLs: ad landings, product page, cart, checkout, lead forms. For media and blogs — on pages with high bounce or odd depth.",
      ],
      lists: [
        {
          intro: "What you usually see on a recording:",
          items: [
            "clicks and cursor movement",
            "scroll and navigation",
            "form filling",
            "device and source (on the visit card)",
            "drop-offs before the goal",
          ],
        },
      ],
      links: [
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "How to enable in Metrika",
      level: 2,
      paras: [
        "In counter settings, turn on Webvisor (often near click/scroll maps and form analytics — the option set depends on the account). Save and make sure the site has the current code for this counter.",
        "If the counter was installed long ago and Webvisor was enabled later — update the code/container (GTM), or recordings may not appear. First confirm regular visits are flowing.",
      ],
      lists: [
        {
          intro: "Launch order:",
          items: [
            "counter created and on all needed templates",
            "Webvisor enabled in settings",
            "no “native + GTM” duplicate",
            "test visit from your device",
            "after a while — recordings appear in Webvisor",
          ],
        },
      ],
      links: [
        {
          label: "If Metrika isn’t working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Looking for a “site break” when the option is simply off or the script is cut by a blocker/CSP.",
        },
      ],
    },
    {
      title: "Technical conditions on the site",
      level: 2,
      paras: [
        "Recording is sensitive to encoding, heavy markup, strict CSP, and frame embedding bans. Historically Yandex required UTF-8 and HTML size limits; current limits and exception domains are in Metrika Help.",
        "If the site forbids framing, the player may need Webvisor domains allowed per Yandex’s instructions — compatibility setup, not “bypassing protection for someone else’s site”.",
      ],
      lists: [
        {
          intro: "Check before panicking:",
          items: [
            "HTTPS without mixed content",
            "CSP doesn’t cut Metrika scripts",
            "SPA: events and URLs update correctly",
            "cookie consent doesn’t block the counter forever without a path",
            "don’t treat admin sessions as customer behavior",
          ],
        },
      ],
    },
    {
      title: "How to use: filters and sampling",
      level: 2,
      paras: [
        "In the visit list, filter by URL, goal, source, device, duration. Don’t watch random clips — watch segments with a problem: high bounce, low add_to_cart, validation errors.",
        "Retention and daily recording limits depend on plan/settings and have changed over time — don’t treat “15 days and 150 thousand” from old articles as a constant.",
      ],
      lists: [
        {
          intro: "Where to look first:",
          items: [
            "ad landings",
            "forms and registration",
            "product page and catalog search",
            "cart and payment",
            "sessions after a redesign",
          ],
        },
      ],
    },
    {
      title: "From hypothesis to fix",
      level: 2,
      paras: [
        "A recording alone doesn’t improve conversion. Capture the observation (“button below the fold on mobile”, “phone mask breaks input”), roll out a fix, measure the goal/funnel.",
        "Don’t use Webvisor to fake behavioral signals, and don’t conclude from one friend’s session.",
      ],
      lists: [
        {
          intro: "Working cycle:",
          items: [
            "metrics pointed to a problem",
            "3–10 relevant recordings",
            "hypothesis and backlog task",
            "release",
            "remeasure",
          ],
        },
      ],
      links: [
        {
          label: "Behavioral factors",
          href: "/en/blog/povedencheskie-faktory/",
        },
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Webvisor is a UX magnifier alongside Metrika numbers. Enable it on the counter, check tech, watch a sample of painful URLs.",
        "Targeted review + site fixes beat hours of random session watching.",
      ],
    },
  ],
  closing: [
    "Enable Webvisor on the current counter, confirm recordings appear, and review segments with drop-offs — that’s how the tool helps improve the site instead of becoming endless video.",
  ],
  related: [
    "metrika-karty",
    "metrika-ne-rabotaet",
    "instrumenty-veb-analitiki",
    "optimizatsiya-konversii",
    "povedencheskie-faktory",
    "metrika-tseli",
  ],
};
