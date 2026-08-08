import type { BlogPost } from "../../../data/blog";

/** EN overlay for sayt-pered-reklamoy — same structure as RU JSON. */
export const saytPeredReklamoyEn: BlogPost = {
  slug: "sayt-pered-reklamoy",
  title: "Don’t burn the budget: check the site before launching ads",
  date: "2020-03-18",
  category: "Paid search",
  cover: "/images/blog/sayt-pered-reklamoy/cover-en.webp",
  excerpt:
    "A site checklist before Yandex Direct and Google Ads: goals and KPIs, forms and thank-you pages, analytics, first screen, trust, mobile, and lead delivery — so you don’t burn clicks on a raw landing.",
  lead: [
    "If paid search brings “zero leads,” the ad account isn’t always the only culprit: people click and hit an unclear offer, a broken form, or a site with no goals in analytics. Tweaking bids on a raw landing is the fastest way to burn budget.",
    "Below: a practical order for checking a site before you launch Direct/Ads. We don’t promise “conversion ×N in a couple of days” from old case studies; an honest checklist pass is usually cheaper than a week of blind spend. Common account mistakes are covered in related articles.",
  ],
  faq: [
    {
      q: "Where should I start if ads are already running?",
      a: "Pause or set a minimal limit + a quick audit of goals, forms, and the first screen. Otherwise you keep paying for the same bounce.",
    },
    {
      q: "Which KPI should I use?",
      a: "One tied to money: leads by cost, revenue within an ROAS ceiling. CTR and click count are secondary.",
    },
    {
      q: "Do I need a thank-you page?",
      a: "A handy way to capture a form submit as one goal. Alternative — a submit event; what matters is unambiguous lead tracking.",
    },
    {
      q: "Does every site need a quiz?",
      a: "No. A quiz is one engagement format. A clear offer and a working lead form matter more.",
    },
    {
      q: "Does a favicon lower CPC?",
      a: "It helps tab recognition; don’t count on it in the Direct auction. Priority — offer, form, mobile.",
    },
    {
      q: "Does a site check replace campaign setup?",
      a: "No. It’s a filter: “can we send traffic yet?” Keywords, negatives, and bids are separate.",
    },
    {
      q: "Are critical fixes usually done in days?",
      a: "Critical holes (forms, goals, mobile CTA) are often fixed in days, not months. Cosmetics follow KPI priority.",
    },
  ],
  sections: [
    {
      title: "Goal and KPI first, account second",
      level: 2,
      paras: [
        "Lock the business job in numbers: how many leads/sales per period and at what cost. Align the wording with the team so you don’t later argue “ads vs site.”",
        "On-site goal actions must lead to that job. A “free interior design” form when the KPI is “apartment sales” inflates contacts without revenue. Cut decorative CTAs that don’t feed the funnel.",
      ],
      lists: [
        {
          intro: "Minimum at the start:",
          items: [
            "one main business goal",
            "2–4 goal actions that lead to it",
            "KPI in money or lead cost",
            "shared understanding between marketing and sales",
          ],
        },
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Leads must be counted",
      level: 2,
      paras: [
        "Every form (or key CTA) must produce a measurable event: a thank-you page or a submit event. Otherwise you can’t tell “ads don’t work” from “leads are lost.”",
        "In Metrica and Analytics it helps to keep one shared goal for a successful lead so you don’t sum ten micro-goals with duplicates by hand. Goal value (estimated revenue per lead) helps read reports in money, not only visits — take the formula from your margin and sales conversion, not someone else’s example.",
        "Check delivery: emails aren’t in spam, leads reach CRM/messenger, a phone test submit works. Clicks that never reach a manager are pure waste.",
      ],
      lists: [
        {
          intro: "Control run:",
          items: [
            "submit a lead from desktop and mobile",
            "see thank-you / success",
            "the goal fired in analytics",
            "a manager received the lead",
            "UTM/source is visible in the report",
          ],
        },
      ],
      links: [
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "First screen and offer",
      level: 2,
      paras: [
        "In 5 seconds it should be clear: what you sell, for whom, and why you’re useful. Logo, headline, region, a clear image — no “we’re a team of professionals” with no subject.",
        "The buying benefit belongs on the first screen: timeline, guarantee, price “from,” difference from the market. If someone came from an ad “windows in 3 days” and the landing says nothing about that — bounce is almost guaranteed.",
        "Lead forms — visible, short, with a clear promise. Field overload and a tiny “submit” in the footer kill conversion more than any bid.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Quiz or calculator",
          text: "A quiz or calculator helps if it simplifies choice. Don’t add one for fashion: a broken quiz is worse than a simple form.",
        },
      ],
    },
    {
      title: "Trust, navigation, prices, and service",
      level: 2,
      paras: [
        "Menus and sections must be unambiguous: a person from an ad shouldn’t have to guess the IA. Promos — large and honest (new/old price, gift terms), not tiny gray type.",
        "Openness: about the company, production, cases, certificates — what lowers “fly-by-night” fear. Prices current and in a clear currency; if “price on request” — explain why and offer a quick estimate.",
        "Product/object photos without blur and generic filler swaps. Reviews — a separate block or in the card. Delivery and payment, FAQ, contacts (clickable phone on mobile), hours — the basic service layer without which ads feed bounces.",
      ],
      lists: [
        {
          intro: "Quick trust audit:",
          items: [
            "About / facts / cases exist",
            "prices or a logical path to a quote",
            "reviews or proof of work",
            "delivery/payment/FAQ",
            "current contacts in the header and on the contacts page",
          ],
        },
      ],
    },
    {
      title: "Mobile and the small things that cost money",
      level: 2,
      paras: [
        "Responsive is mandatory: the same CTAs, forms, and phones must work from a phone. Mobile traffic share has long been high — pouring paid search onto a desktop-only landing is pointless.",
        "Favicon and a tidy tab are brand hygiene; don’t expect auction miracles from them. Load speed and no overlay banners blocking the form matter more.",
        "Score the site honestly (e.g. 1–5 by block). Fix “1–2” items before scaling budget; cosmetics can run in parallel.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Site vs account",
          text: "Don’t confuse “raw site” with “broken account.” After fixing the landing you still need negatives, relevant ads, and limits — see campaign mistakes and Direct budget pieces.",
        },
      ],
      links: [
        {
          label: "Ad campaign mistakes",
          href: "/en/blog/oshibki-reklamnoy-kampanii/",
        },
        {
          label: "Yandex Direct budget",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Launch order without burning budget",
      level: 2,
      paras: [
        "Build a short checklist: goals → lead tracking → first screen → forms → trust → mobile → lead test. Only after critical items are green raise the daily budget.",
        "At the start: a narrow core and a limit, daily CPA/lead control for the first days. If there are clicks but no leads — back to the site and ad relevance, not “+50% bids again.”",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "KPI in money, not CTR",
            "leads are counted and reach people",
            "offer = the ad promise",
            "mobile = a full channel",
            "landing first, budget scale second",
          ],
        },
      ],
    },
  ],
  closing: [
    "Walk the critical items once on phone and laptop, send a test lead, and only then turn on a normal limit — cheaper than “figuring it out while burning spend.”",
  ],
  related: [
    "oshibki-reklamnoy-kampanii",
    "byudzhet-yandeks-direkt",
    "analiz-reklamnoy-kampanii",
    "metriki-reklamy",
    "audit-reklamnoy-kampanii",
    "stavki-direkt",
  ],
};
