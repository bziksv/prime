import type { BlogPost } from "../../../data/blog";

/** EN overlay for utm-metki — same structure as RU JSON. */
export const utmMetkiEn: BlogPost = {
  slug: "utm-metki",
  title: "UTM tags: what they are and why to tag links",
  date: "2018-04-20",
  category: "Digital marketing",
  cover: "/images/blog/utm-metki/cover-en.webp",
  excerpt:
    "Why UTM tags matter, which parameters are required (source, medium, campaign), how to name values without report chaos, and how to read them in Metrica and Google Analytics.",
  lead: [
    "UTM tags are URL parameters that pass source, channel, and campaign into analytics. Without them it’s hard to see which ad, email, or post brought the lead — not just “/cpc.”",
    "Lock a value convention the whole team shares: source, medium, campaign first, optional term and content when you need finer splits. Link builders speed typing; you still own the dictionary.",
  ],
  faq: [
    {
      q: "What is UTM?",
      a: "Parameters like utm_source, utm_medium, utm_campaign in the link query string. The counter reads them and splits the visit by sources and campaigns.",
    },
    {
      q: "Which tags are required?",
      a: "Usually source, medium, and campaign. Without the required set the rest often isn’t attributed correctly.",
    },
    {
      q: "Do I need UTM tags for organic traffic?",
      a: "No: search passes the channel itself. UTM is for ads, emails, posts, partners — where the source would otherwise blur.",
    },
    {
      q: "Do Metrica and GA read UTM the same way?",
      a: "Both understand the standard. Reports and groupings differ — compare trends inside one system.",
    },
    {
      q: "Can UTM values use Cyrillic?",
      a: "Prefer Latin and transliteration: fewer encoding surprises and duplicates like “Yandex” vs “yandex.”",
    },
    {
      q: "How does medium=cpc differ from cpm?",
      a: "cpc means pay per click (search/context); cpm means pay per impressions (display). email, social, referral are other channel types.",
    },
    {
      q: "Do UTM tags hurt SEO?",
      a: "Keep a clean URL in the index on canonical landings; UTM belongs on ad and email links. Canonical and consistency matter.",
    },
    {
      q: "Do I need my own UTM generator?",
      a: "Useful at volume. The key is one value dictionary in the campaign table — not every manager inventing anew.",
    },
  ],
  sections: [
    {
      title: "Why tag links",
      level: 2,
      paras: [
        "Budget in Yandex Direct, Google Ads, social, and email without tagging becomes a “paid traffic” report with no detail: which ad, keyword, banner, or letter brought the lead.",
        "UTM helps compare search vs network, campaigns, creatives, and landings — and turn off what burns money without leads.",
      ],
      lists: [
        {
          intro: "Typical questions tags answer:",
          items: [
            "which campaign has the best CR;",
            "whether premium placement / top pays off;",
            "which email banner brought a sale;",
            "which social post drove clicks.",
          ],
        },
      ],
      links: [
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
      ],
    },
    {
      title: "What UTM looks like in a URL",
      level: 2,
      paras: [
        "Add a query to the landing URL: `?utm_source=yandex&utm_medium=cpc&utm_campaign=windows-voronezh`. Parameters are `name=value` pairs joined by `&`. No spaces in the finished link.",
        "Ad templates often use ads account substitutions (dynamic parameters) that insert campaign/ad IDs on click. Keep the static part (source/medium/names) in one style anyway.",
      ],
      lists: [
        {
          intro: "Mini string rules:",
          items: [
            "Latin, lowercase;",
            "words with `-` or `_`;",
            "no spaces or fancy capitals;",
            "one dictionary for the whole team.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Writing `Yandex_Direct` in one ad and `yandex` in another — the report shows two “sources” for the same system.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Required parameters",
      level: 2,
      paras: [
        "**utm_source** — source: yandex, google, vk, newsletter, partner_x.",
        "**utm_medium** — channel type: cpc, cpm, email, social, banner, referral.",
        "**utm_campaign** — campaign/offer name: `windows-spring-2026`, `brand-search`. Build modularly, but short and readable in reports.",
      ],
      tables: [
        {
          caption: "Required UTM examples",
          headers: ["Parameter", "Example value", "Meaning"],
          rows: [
            ["utm_source", "yandex", "Ad system / placement"],
            ["utm_medium", "cpc", "Pay per click"],
            ["utm_campaign", "plastic-windows", "Campaign / theme"],
          ],
        },
      ],
      links: [
        {
          label: "Premium placement in Direct",
          href: "/en/blog/spetsrazmeshchenie-direkt/",
        },
      ],
    },
    {
      title: "Optional parameters",
      level: 2,
      paras: [
        "**utm_term** — usually the keyword or targeting audience. Useful in search if the ads account doesn’t pass the keyword otherwise.",
        "**utm_content** — distinguish ads, banners, email buttons (`banner-a`, `cta-green`). A/B creatives show up in analytics, not only in the ads account.",
      ],
      lists: [
        {
          intro: "When secondary helps:",
          items: [
            "many ads in one campaign;",
            "several buttons in one email;",
            "need to match keyword ↔ query in reports.",
          ],
        },
      ],
    },
    {
      title: "Metrica, GA, and auto-tagging",
      level: 2,
      paras: [
        "Yandex Metrica builds reports by tags (source tree). Google Analytics splits UTM by Source/Medium/Campaign. Both expect the full required set — otherwise the visit may lose tagging.",
        "Direct and Google Ads have auto-tagging / tracking templates. You can combine them with UTM, but don’t spawn conflicting schemes: lock one standard in the playbook.",
      ],
      lists: [
        {
          intro: "Rollout practice:",
          items: [
            "source/medium convention table;",
            "link template in the generator;",
            "click check in a clean window;",
            "visit check in Metrica/GA on launch day.",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
      ],
    },
    {
      title: "How to create tags without chaos",
      level: 2,
      paras: [
        "Online builders and sheets speed assembly: paste the landing URL and field values — get a finished link. For hundreds of ads you need a template with ads account auto-substitutions.",
        "Don’t tag internal site links with UTM “for looks”: you’ll pollute paths and attribution. UTM belongs on external campaign entry points.",
      ],
      lists: [
        {
          intro: "Quality checklist:",
          items: [
            "source + medium + campaign present;",
            "values from the team dictionary;",
            "landing opens with tags;",
            "visit visible in analytics;",
            "no UTM on internal menus.",
          ],
        },
      ],
      notes: [
        {
          title: "Link to SEO",
          text: "UTM alone doesn’t promote you into TOP. They help evaluate paid and referral traffic. Organic rankings follow their own rules: prep and visibility buildup are different timelines (TOP planned for 2–6 months after promotion starts).",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
      ],
    },
  ],
  related: [
    "instrumenty-veb-analitiki",
    "google-analytics",
    "google-analytics-tseli",
    "kontekst-i-seo",
    "spetsrazmeshchenie-direkt",
    "veb-analitik",
  ],
};
