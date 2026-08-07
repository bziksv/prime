import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-partner — same structure as RU JSON. */
export const googlePartnerEn: BlogPost = {
  slug: "google-partner",
  title: "Google Partner: how to get partner status",
  date: "2020-02-07",
  category: "Contextual advertising",
  cover: "/images/blog/google-partner/cover-en.webp",
  excerpt:
    "What Google Partner and Premier Partner status give agencies: Skillshop certification, account spend and performance, why the badge matters — without outdated dollar thresholds as “law.”",
  lead: [
    "Google Partner is a program for agencies and specialists who run Google Ads through an MCC (manager account). Status signals expertise to clients and opens training, support, and sometimes bonuses — the exact set depends on level and market.",
    "Below — level logic, certification, spend, and performance. Spend thresholds and certificate counts have changed; current numbers and rules live only in official Google Partners / Skillshop materials — not in 2017–2020 guides.",
  ],
  faq: [
    {
      q: "Are Partner and Premier Partner the same?",
      a: "No. Premier is higher: usually stricter on certified staff count, spend volume, and market requirements. Exact thresholds are in the partner console.",
    },
    {
      q: "Does a solo freelancer need the status?",
      a: "A Skillshop certificate helps a specialist too. Full Partner is more about an agency with MCC and client accounts.",
    },
    {
      q: "Where do you take the exam?",
      a: "In Skillshop (formerly Google Academy / similar training platforms). Courses and exams update; “download answers” wastes the attempt.",
    },
    {
      q: "Is the badge on the website required?",
      a: "No, but under program rules it builds trust. Badge specializations (Search, Shopping, Display, etc.) must match reality.",
    },
    {
      q: "Is status forever?",
      a: "No. You must keep meeting criteria and renew certification — or the level drops.",
    },
    {
      q: "Does it replace quality Ads management?",
      a: "No. Partnership is a signal and access to resources. Clients care more about CPA/ROMI than the badge alone.",
    },
    {
      q: "How much do you “need to spend”?",
      a: "There are spend thresholds over a period across MCC accounts — they depend on level and region and change. Don’t copy someone else’s “$10k / 90 days” from old articles.",
    },
  ],
  sections: [
    {
      title: "Who needs the status and which levels exist",
      level: 2,
      paras: [
        "The program is for people who manage others’ or multiple Ads accounts via a manager account. For “one own store” a partner badge is usually overkill — solid account management and optional personal certification are enough.",
        "Historically there were Partner and Premier Partner: premium has a higher bar on team, spend, and sometimes manager access and early features. Names and privilege grids — check the current console; Google periodically rebuilds the program.",
      ],
      lists: [
        {
          intro: "Typical status pillars (meaning, not numbers):",
          items: [
            "staff certification on Ads products;",
            "enough spend across managed accounts;",
            "management quality/performance (not only “spend the budget”);",
            "stable MCC work and client base.",
          ],
        },
      ],
    },
    {
      title: "Certification in Skillshop",
      level: 2,
      paras: [
        "Staff take exams on Google Ads and related products (Search, Display, analytics, etc. — the course list changes). The learning profile must link to the agency work account, or the certificate “doesn’t count” for partnership.",
        "There are prep modules before the exam; you can go straight in if practice is strong. Don’t switch tabs and “Google answers” — the system flags violations, and questions update.",
        "A certificate helps a resume and tender. For an agency, closing the required number of live certificates with profile access matters more than “downloading a PDF for the showcase.”",
      ],
      lists: [],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "Don’t rely on third-party “ready answers” and outdated dumps: the exam changes, and a cheat sheet burns the attempt.",
        },
      ],
    },
    {
      title: "Account spend and performance",
      level: 2,
      paras: [
        "Partnership looks at total spend across managed accounts in the reporting period. The threshold depends on level and market; figures from 2017–2020 articles (including fixed dollar minima) are not a norm.",
        "Performance isn’t only spend. The system and managers look at whether client value grows: conversions, retention, optimization quality. “Spending for the threshold” without results hits reputation harder than missing a badge.",
        "Keep a clear MCC picture: active clients, correct staff access, current certificates. Dead accounts and checkbox theater don’t impress the program for long.",
      ],
      lists: [],
      links: [
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
        {
          label: "Ad campaign audit",
          href: "/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "What participation gives you",
      level: 2,
      paras: [
        "Training and community: courses, newsletters, sometimes leadership tracks at higher levels. Support: from help center and contact channels to a personal manager on premium — if your tier includes it.",
        "Promotion: badge rights (where rules allow), guidance on new products, events and reward programs (promo codes, rewards) — the set depends on country and period.",
        "A website badge marks specialization — not a client KPI guarantee. In agency sales it removes some objections; in delivery, reports and campaign economics still decide.",
      ],
      lists: [
        {
          intro: "Realistic upsides:",
          items: [
            "trust when a client picks a vendor;",
            "access to training and product updates;",
            "an escalation path for hard cases;",
            "sometimes early tool access;",
            "motivation for the team to keep certification live.",
          ],
        },
      ],
    },
    {
      title: "Practical order without outdated numbers",
      level: 2,
      paras: [
        "Set up MCC and access → train and certify key people in Skillshop → bring spend and management quality to current console thresholds → apply / confirm status and watch retake dates.",
        "Don’t promise a client “we’re Partner = cheap leads for you.” Promise process, transparent KPIs, and skills the badge only confirms.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "thresholds only from current Google help;",
            "a certificate ≠ automatic Partner;",
            "Premier is a separate bar;",
            "status must be maintained;",
            "client economics beat the showcase.",
          ],
        },
      ],
    },
  ],
  closing: [
    "Check current criteria in the partner console, close team certification, and only then chase the badge — or you’ll spend a month on a badge that gets pulled tomorrow for an expired exam.",
  ],
  related: [
    "analiz-reklamnoy-kampanii",
    "audit-reklamnoy-kampanii",
    "prognoz-trafika-google-ads",
    "strategii-google-ads",
    "klyuchi-google-ads",
    "metriki-reklamy",
  ],
};
