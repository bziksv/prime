import type { BlogPost } from "../../../data/blog";

/** EN overlay for metrika-karty — same structure as RU JSON. */
export const metrikaKartyEn: BlogPost = {
  slug: "metrika-karty",
  title: "Heatmaps and maps in Yandex Metrica",
  date: "2017-05-10",
  category: "Analytics",
  cover: "/images/blog/metrika-karty/cover-en.webp",
  excerpt:
    "Click, link, and scroll maps plus form analytics in Yandex Metrica: why look, how to read density, and what not to confuse with Session Replay — without outdated 2017 UI modes and limits.",
  lead: [
    "In Yandex Metrica the maps section shows where people click, how they scroll, and where they abandon forms. It is an aggregate picture across many visits, not a recording of one session.",
    "Below: what heatmaps, link maps, and form analytics are for. Mode UIs and tab names change — use current Metrica Help. Visitor session recording lives in a separate Session Replay article.",
  ],
  faq: [
    {
      q: "Are the click map and Session Replay the same?",
      a: "No. A map aggregates clicks and scroll. Session Replay records a specific session. Use both by task.",
    },
    {
      q: "Do maps need a separate code snippet?",
      a: "Usually the counter with maps/forms options enabled in settings is enough. If you turned them on later — update the code or the GTM container.",
    },
    {
      q: "Why is the map empty?",
      a: "Too little data for the period, a different URL (tags, www, hash), counter missing on the template, blocker/CSP, or the page layout changed a lot vs the collection period.",
    },
    {
      q: "Will a map raise conversion by itself?",
      a: "No. It suggests hypotheses: move the CTA, simplify the form, remove fake clicks. Proof is measuring goals.",
    },
    {
      q: "Can I view maps without Metrica?",
      a: "Other heatmap services exist. In the RU stack Metrica is often already installed — start there if the counter is correct.",
    },
  ],
  sections: [
    {
      title: "What Metrica maps give you",
      level: 2,
      paras: [
        "Numbers say “few leads.” A map shows where people actually tap: the logo instead of the button, a non-clickable image, past a thin mobile link.",
        "Useful on ad landings, product cards, cart, and long pages. For media — on pages with odd bounce or depth.",
      ],
      lists: [
        {
          intro: "Basic set:",
          items: [
            "click map (heat / density)",
            "link map",
            "scroll map",
            "form analytics",
            "alongside — Session Replay on problem segments",
          ],
        },
      ],
      links: [
        {
          label: "Session Replay",
          href: "/en/blog/vebvizor/",
        },
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
      ],
    },
    {
      title: "Click map",
      level: 2,
      paras: [
        "A heatmap highlights frequent click zones. Cold areas mean little interaction. Display modes (monochrome, “fog,” link emphasis) depend on the account UI — the point is density and fake clicks.",
        "Don’t chase a pretty picture — chase mismatch with intent: main CTA with no clicks, decorative block with many.",
      ],
      lists: [
        {
          intro: "What to watch:",
          items: [
            "menu and logo vs action button",
            "banners people click as links but aren’t",
            "mobile layout separate from desktop",
            "pages after a redesign — before/after periods",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Drawing conclusions from one day with ten visits. A map needs a sample; otherwise noise.",
        },
      ],
    },
    {
      title: "Link map",
      level: 2,
      paras: [
        "Shows transitions via links and buttons: click count and share vs others. Handy to see if people go to cart, catalog, or “nowhere” — footer and socials.",
        "If an important URL barely gets clicks, check visibility, anchor text, and competition from neighbors.",
      ],
      links: [
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "Form analytics",
      level: 2,
      paras: [
        "Forms are where conversion breaks: extra fields, phone masks, captcha, validation errors without clear copy. Form analytics shows how far people get and where they drop.",
        "Simplify step by step and measure the “submit” goal. Placeholders help but do not replace proper labels and error messages.",
      ],
      links: [
        {
          label: "Goals in Metrica",
          href: "/en/blog/metrika-tseli/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Conditions and limits",
      level: 2,
      paras: [
        "Maps build from counter data. You need correct code, enough period, and an understanding of how Metrica normalizes URLs (campaign tags, www, # fragment).",
        "Old guides about Internet Explorer 8 and hard page-pixel limits are history. If the map draws wrong, check Yandex Help and code freshness first — don’t copy 2017 settings.",
      ],
      lists: [
        {
          intro: "Before panicking check:",
          items: [
            "counter on all needed templates",
            "maps/forms enabled in settings",
            "no “native + GTM” conflict",
            "correct URL and period selected",
            "CSP/blocker not cutting the script",
          ],
        },
      ],
      links: [
        {
          label: "If Metrica isn’t working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
      ],
    },
    {
      title: "Session Replay beside, not instead",
      level: 2,
      paras: [
        "The map said “few button clicks” — Session Replay shows how people scroll past or miss with a finger. For ad bounce and abandoned forms, a session recording beats one heat picture.",
        "Storage and volume limits changed; don’t rely on “120k per day” from old announcements. Current quotas are in the account and Help.",
      ],
      links: [
        {
          label: "How to use Session Replay",
          href: "/en/blog/vebvizor/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Metrica maps are about action density on the page. Session Replay is about a specific session. With goals they close the loop number → hypothesis → fix → measure.",
        "Don’t expect a heatmap to lift conversion by itself: it is an observation tool.",
      ],
    },
  ],
  closing: [
    "Enable maps on the counter, gather a sample on key URLs, find fake clicks and form drop-offs — then verify fixes with goals. For session review open Session Replay.",
  ],
  related: [
    "vebvizor",
    "metrika-tseli",
    "metrika-ne-rabotaet",
    "instrumenty-veb-analitiki",
    "optimizatsiya-konversii",
    "navigatsiya-sayta",
  ],
};
