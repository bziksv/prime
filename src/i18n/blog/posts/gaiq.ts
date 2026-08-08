import type { BlogPost } from "../../../data/blog";

/** EN overlay for gaiq — same structure as RU JSON. */
export const gaiqEn: BlogPost = {
  slug: "gaiq",
  title: "GAIQ and Google Analytics certification: what it was and what replaced it",
  date: "2021-04-08",
  category: "Digital marketing",
  cover: "/images/blog/gaiq/cover-en.webp",
  excerpt:
    "What GAIQ (Google Analytics Individual Qualification) was, why old “70 questions” guides are outdated, and where to look for current Google analytics courses and certificates.",
  lead: [
    "GAIQ (Google Analytics Individual Qualification) was Google’s online individual qualification exam for Analytics. Articles from 2010–2021 often described it as “70 questions / 80% / 90 minutes.”",
    "Google’s certification programs changed repeatedly: Universal Analytics is gone, GA4 is the center, and learning/exams live in Skillshop and related courses. Below: GAIQ as a historical landmark and how to prep for a knowledge check now — without memorizing outdated screenshots.",
  ],
  faq: [
    {
      q: "Can I still take GAIQ?",
      a: "Classic GAIQ as in 2021 guides is not current. Look for today’s courses and assessments in Google Skillshop / official GA4 materials.",
    },
    {
      q: "Why should I read about GAIQ then?",
      a: "To parse job posts and old résumés (“has GAIQ”), not confuse it with an “agency certificate,” and not drill dead UA rules.",
    },
    {
      q: "What replaced GAIQ?",
      a: "Google’s Analytics/Ads course and certificate lineup in Skillshop and related academies. Names and formats update — check the official catalog.",
    },
    {
      q: "Does a certificate mean you can set up GA?",
      a: "No. The exam checks concepts. Real skill is working properties, events, consent, and reports on a live site.",
    },
    {
      q: "Do employers need the certificate?",
      a: "Sometimes as a résumé plus. More often they want cases: funnel, ecommerce, ads linkage. Paper without practice weighs little.",
    },
    {
      q: "How long did old GAIQ last?",
      a: "Older write-ups mentioned about 18 months — that’s archive. Check validity on the current Skillshop certificate.",
    },
    {
      q: "Can I prep from answer dumps?",
      a: "Bad idea: questions change, UA≠GA4, and “leaks” often lie. Prefer official courses + practice in a demo account.",
    },
    {
      q: "Where should I start practice next to the course?",
      a: "Install GA4, mark key events/conversions, learn to read sources and the funnel — see related Analytics materials.",
    },
  ],
  sections: [
    {
      title: "What GAIQ was",
      level: 2,
      paras: [
        "Historically GAIQ was Google’s text test on Analytics understanding: install and reports, goals/filters, segments, ads linkage, ecommerce concepts.",
        "It was a landmark for specialists who needed to prove basics. Don’t confuse it with Google partner agency status or a university diploma.",
        "Figures like “70 questions, 80%, 90 minutes, retake in a week” from old articles are a snapshot of rules then. Don’t use them as today’s exam instructions.",
      ],
      notes: [
        {
          title: "UA is archived",
          kind: "tip",
          text: "Most classic GAIQ questions lived in Universal Analytics logic. Prepping for “that same exam” from UA screenshots is pointless: the working stack is GA4.",
        },
      ],
      links: [
        {
          label: "Google Analytics for a store",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "GA4 setup",
          href: "/en/blog/google-analytics-nastroyka/",
        },
      ],
    },
    {
      title: "How people prepped then — and what to take now",
      level: 2,
      paras: [
        "Google used to publish reference materials next to the start button and Analytics Academy courses: basics, advanced, Tag Manager, mobile apps.",
        "Today’s sensible path: the official GA4 course in Skillshop (or the current catalog equivalent), then practice on your own or a training property.",
        "Also lock in: events and parameters, consent/cookies, Google Ads linkage, debugging via Tag Assistant / debug mode — without clinging to 2021 menu names.",
      ],
      lists: [
        {
          intro: "Mini prep plan:",
          items: [
            "take the official course for the current Analytics version",
            "build a test GA4 property",
            "mark 3–5 key events",
            "read source and funnel reports",
            "only then sit the Skillshop assessment/exam",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
      ],
    },
    {
      title: "What they asked (themes, not a dump)",
      level: 2,
      paras: [
        "The old test roughly split into blocks: basics (code, reports), account settings and integrations, goals and filters, source and content analysis, segments and events.",
        "Learn the meaning of those blocks in GA4 — don’t drill someone else’s “GAIQ answers.”",
        "Tricky wording was normal: read the question fully and separate “how to configure” from “how to interpret.”",
      ],
      lists: [
        {
          intro: "Self-check themes:",
          items: [
            "how a property differs from a data stream",
            "what an event and a parameter are",
            "how not to mix sources without UTM",
            "why filters/exclusions for internal traffic",
            "how a segment changes a conversion conclusion",
          ],
        },
      ],
    },
    {
      title: "The certificate on a résumé",
      level: 2,
      paras: [
        "A certificate shows you passed Google’s assessment on the issue date. It doesn’t replace a portfolio of reports and breakdowns.",
        "On a résumé list the current course/certificate name and year. “GAIQ 2019” with no GA4 practice looks archival.",
        "For agencies, stable project analytics and clear dashboards beat a PDF collection.",
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "GAIQ was a historical Analytics exam; don’t copy old-post rules and UA context as instructions.",
        "Prep with official GA4 courses and lock it in on a real property.",
        "A certificate is a résumé plus — not a substitute for reading a funnel and fixing tagging.",
      ],
    },
  ],
  closing: [
    "Open the current GA4 course in Skillshop and, in parallel, mark events on a training site — more useful than drilling “70 GAIQ questions” from 2021 articles.",
  ],
  related: [
    "google-analytics",
    "google-analytics-nastroyka",
    "google-analytics-tseli",
    "google-tag-manager",
    "looker-studio",
    "utm-metki",
  ],
};
