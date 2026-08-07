import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-auditorii — same structure as RU JSON. */
export const yandeksAuditoriiEn: BlogPost = {
  slug: "yandeks-auditorii",
  title: "Audience targeting in Yandex: Crypta, segments, and Direct",
  date: "2017-01-31",
  category: "Paid search",
  cover: "/images/blog/yandeks-auditorii/cover-en.webp",
  excerpt:
    "How Yandex segments users for ads: Crypta signals, demographics, interests, remarketing, and look-alike — without outdated “+35% conversion” claims or guides for uploading other people’s contact lists.",
  lead: [
    "In Yandex ads you build audiences with more than keywords: interests and behavior, geo, demographics, Metrica segments, CRM lists, and lookalikes. Behind the “who is this” estimate sits profile tech (historically Crypta and models on ecosystem behavior).",
    "What those signals mean in practice, and how to use them in Yandex Direct without treating old UI labels as gospel. Product-audience portraits and account-level remarketing setup each deserve their own deep dive; here we stay on the signal layer.",
  ],
  faq: [
    {
      q: "Is this the same as “how to find a target audience”?",
      a: "No. That piece is a product or content portrait. This one covers how Yandex’s ad system narrows impressions by signals and segments.",
    },
    {
      q: "Is Crypta still called that?",
      a: "Names and Help wording have evolved. The idea is the same: a probabilistic profile from ecosystem behavior, not a “passport from a cookie.”",
    },
    {
      q: "Do cookies store passwords?",
      a: "Not as a rule. Cookies are identifiers and session or consent settings. Don’t confuse them with storing logins in the clear “in every cookie.”",
    },
    {
      q: "Can you upload other people’s emails and phones?",
      a: "Only with a lawful basis and consent. Bought lists risk blocks and claims. Skip gray uploads.",
    },
    {
      q: "Does remarketing always lift conversion by 35%?",
      a: "No. Warm audiences often convert better than cold, but percentages from old cases aren’t a norm. Watch your own CPA and frequency.",
    },
  ],
  sections: [
    {
      title: "Why ads need segments",
      level: 2,
      paras: [
        "Search catches demand by query. Networks and campaign refinements let you narrow or widen the circle: not show an ad to everyone who ever said “napoleon,” but tell cake from biography — via interests, history, and context.",
        "Segmentation saves budget on clearly off-target traffic and strengthens a relevant offer. It does not replace the offer or the landing page.",
      ],
      lists: [
        {
          intro: "Typical axes:",
          items: [
            "interests and behavior;",
            "geography;",
            "gender and age (probabilistic);",
            "devices and time;",
            "your Metrica segments / lists.",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "How Yandex estimates interests",
      level: 2,
      paras: [
        "The system leans on activity signals in its services and partner network: queries, visits, clicks, UI language, long-term habits. Machine-learning models build a probabilistic profile — not an exact dossier, an estimate for ad serving.",
        "Cookies and similar IDs help tie visits within user consent and browser settings. Blockers, incognito, and ID lifetime cut completeness — build in error.",
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Treating demographics in the ads account as absolute truth. It’s an estimate; bid adjustments by gender or age need conversion proof.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Demographics and adjustments",
      level: 2,
      paras: [
        "Gender and age for some users come from ecosystem profiles or accounts, for others from behavior. In Direct you use them for bid adjustments up or down, or for turning segments off.",
        "If the product is narrow (for example B2B only 30+), an adjustment can fit. If the audience is wide — don’t cut reach “just in case” without data.",
      ],
    },
    {
      title: "Remarketing and warm visits",
      level: 2,
      paras: [
        "Ads “follow” people who already visited the site or app: browsed the catalog, abandoned a cart, didn’t submit a lead. In Direct these are conditions on Metrica goals and segments — UI names have changed.",
        "It makes sense with sane frequency, excluding buyers, and a relevant creative. Setup and optimization practice live in the Direct remarketing article.",
      ],
      links: [
        {
          label: "Remarketing in Direct",
          href: "/en/blog/retargeting-direkt/",
        },
        {
          label: "Goals in Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Lists, look-alike, and Metrica",
      level: 2,
      paras: [
        "Your audiences: CRM clients, subscribers, app IDs — with lawful data processing. Look-alike expands “similar” from a seed; seed quality beats file size.",
        "Metrica segments (goals, behavior, sources) can plug into Direct serving conditions. Then ads lean on your events, not only ecosystem-wide interests.",
      ],
      lists: [
        {
          intro: "Before uploading a list:",
          items: [
            "lawful basis and consent exist;",
            "data is current and hashed per account rules;",
            "opt-outs excluded;",
            "frequency and creative plan exist;",
            "goals measured, not only clicks.",
          ],
        },
      ],
    },
    {
      title: "What not to promise yourself",
      level: 2,
      paras: [
        "Segmentation does not fix a weak offer or a slow landing page. “Correct Crypta” does not replace search semantics and ad tests.",
        "Don’t copy other people’s conversion-lift numbers from 2017 articles: your CPA and bounce rate are your own.",
      ],
      links: [
        {
          label: "Parsing audiences",
          href: "/en/blog/parsing-auditorii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Yandex gives probabilistic segments plus your data (Metrica, lists). Use them to refine impressions, not as a strategy substitute.",
        "Product audience → account segments → measurement. Remarketing and look-alike are tools, not a magic button.",
      ],
    },
  ],
  closing: [
    "Build the target-audience portrait, enable Metrica goals, set audience conditions in Direct, and check results by conversions — that way Yandex audience targeting serves economics, not “pretty checkboxes” in the ads account.",
  ],
  related: [
    "tselevaya-auditoriya",
    "retargeting-direkt",
    "metrika-tseli",
    "parsing-auditorii",
    "instrumenty-veb-analitiki",
    "strategii-yandeks-direkt",
  ],
};
