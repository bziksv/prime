import type { BlogPost } from "../../../data/blog";

/** EN overlay for naym-smm — same structure as RU JSON. */
export const naymSmmEn: BlogPost = {
  slug: "naym-smm",
  title: "How to hire an SMM specialist: portfolio, interview questions, and a test task",
  date: "2019-07-18",
  category: "SMM",
  cover: "/images/blog/naym-smm/cover-en.webp",
  excerpt:
    "How to hire an SMM manager or agency: what to check in the portfolio, which interview questions to ask, and how to set a short test without a free “full strategy.”",
  lead: [
    "Hiring SMM from pretty screenshots is risky: reach can hide someone else’s cases, fake engagement, or “posts for posts.” Employers need clear KPIs, live examples, and a thinking check — not a 2019 tool list.",
    "Before you sign: screen the portfolio, ask hard questions, and set a short unpaid test that doesn’t exploit the candidate. What SMM does day to day is covered in the profession article.",
  ],
  faq: [
    {
      q: "How is this different from the SMM manager article?",
      a: "That one covers duties and entering the profession. This one is the employer’s view: how to vet someone before a contract.",
    },
    {
      q: "Is long tenure in the job required?",
      a: "Not always. Relevant cases, honest analytics, and niche understanding matter more. A strong junior with a learning project can beat a “veteran” with no numbers.",
    },
    {
      q: "Do you need a full-strategy test task?",
      a: "No. A long unpaid brief filters out strong people. An account audit plus a short post text or idea is enough.",
    },
    {
      q: "Which KPIs should you set for SMM?",
      a: "Not only followers: clicks, leads, cost per inquiry, dialogue quality, saves/replies. Lock them in the contract.",
    },
    {
      q: "Should you hire an agency or a freelancer?",
      a: "Depends on volume and channels. What matters is one accountable person, a transparent report, and ad accounts on your side.",
    },
  ],
  sections: [
    {
      title: "What to check before the interview",
      level: 2,
      paras: [
        "The candidate’s profiles on the networks they’ll run: tone, literacy, reply quality, whether they create content or only repost.",
        "Portfolio: not “pretty pictures,” but task → actions → result (reach, ER (engagement rate), leads, revenue — whatever fits). If there are no numbers — ask why.",
        "Where possible, talk to past clients: did promises match reality.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "guarantees of “viral reach and 10k followers in a month” without caveats",
            "refusal to show reporting method",
            "passwords on the specialist’s personal account",
            "cases built only on faked metrics.",
          ],
        },
      ],
      links: [
        {
          label: "SMM manager: duties",
          href: "/en/blog/menedzher-smm/",
        },
      ],
    },
    {
      title: "Interview questions",
      level: 2,
      paras: [
        "How many projects they run in parallel and what team sits behind them — otherwise your brand becomes background noise.",
        "How they pick platforms for the audience: “only where I’m strong” is weaker than an audience-and-offer breakdown.",
        "What weak spots they see in your accounts and what they’d try in 30–60 days — look for specifics, not vague “engagement” talk.",
        "How they define success: leads and sales vs likes. How they handle negative comments.",
      ],
      lists: [
        {
          intro: "Useful clarifiers:",
          items: [
            "experience in your niche or adjacent",
            "who writes copy and who shoots",
            "who runs paid ads and reporting",
            "how they hand over access and files.",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Tools",
          paras: [
            "Analytics and scheduler brand lists go stale. What matters is reading built-in platform stats and rolling a report to your goals — not “knowing every planner brand.”",
          ],
        },
      ],
    },
    {
      title: "A test task without exploitation",
      level: 2,
      paras: [
        "A short audit: 5–10 notes on visuals, content, CTA, and funnel gaps.",
        "One text or post/Stories idea for your offer — to check tone and literacy.",
        "Don’t ask for a full media plan “as a gift”: that’s work — pay for it or include it in the first sprint after the contract.",
      ],
      lists: [
        {
          intro: "In the test brief state:",
          items: [
            "account links",
            "who the audience is and what you sell",
            "response deadline (1–3 days)",
            "format: a 1–2 page document.",
          ],
        },
      ],
    },
    {
      title: "Contract, access, and onboarding",
      level: 2,
      paras: [
        "Lock KPIs, report frequency, and responsibility zones (content / community / ads).",
        "Ad accounts and business profiles stay with the company. The specialist gets roles — they don’t “take” the page forever.",
        "The first 2–4 weeks are diagnosis and hypotheses, not a promise of reach explosion.",
      ],
      links: [
        {
          label: "SMM mistakes",
          href: "/en/blog/oshibki-smm/",
        },
        {
          label: "Engagement on social media",
          href: "/en/blog/vovlechennost-socseti/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Hire someone who explains how content ties to leads and shows verifiable cases.",
        "A short test plus clear KPIs beats an interview “about trends.”",
        "Agency and freelance both work when access, reporting, and ownership are transparent.",
      ],
    },
  ],
  closing: [
    "Before the call, write five questions from this article and ask for one mini-audit of your profile — in an hour you’ll learn more than from a hundred before/after screenshots.",
  ],
  related: [
    "menedzher-smm",
    "oshibki-smm",
    "vovlechennost-socseti",
    "kontent-menedzher",
    "akkaunt-menedzher",
    "biznes-akkaunt-instagram",
  ],
};
