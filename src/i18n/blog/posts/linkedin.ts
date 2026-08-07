import type { BlogPost } from "../../../data/blog";

/** EN overlay for linkedin — same structure as RU JSON. */
export const linkedinEn: BlogPost = {
  slug: "linkedin",
  title: "LinkedIn for business: profile, hiring, and corporate presence",
  date: "2020-12-17",
  category: "SMM",
  cover: "/images/blog/linkedin/cover-en.webp",
  excerpt:
    "How LinkedIn differs from entertainment networks, how to set a profile and company page, why the platform helps hiring and B2B contacts — without outdated Premium prices and button screenshots.",
  lead: [
    "LinkedIn is a professional network: specialist profiles, company pages, jobs, and professional content. People look for entertainment less often here — and more for work, contractors, and expertise.",
    "Below — why the platform matters for people and business, what’s important on a profile and company page, where Premium fits, and how not to treat LinkedIn as “another Instagram”. UI and plans change — check current terms on the service site.",
  ],
  faq: [
    {
      q: "Is LinkedIn only for job search?",
      a: "No. Also networking, expert content, hiring, partnerships, and B2B brand awareness. Jobs are a common scenario, not the only one.",
    },
    {
      q: "How does it differ from VK/Facebook?",
      a: "Focus on career and competence, less everyday content. Tone is drier and more businesslike; “memes for reach” work weaker than usefulness and cases.",
    },
    {
      q: "Do you need Premium?",
      a: "Not for everyone. It helps with active candidate/job search and richer analytics. A basic profile often covers presence and contacts.",
    },
    {
      q: "What to write in the profile?",
      a: "Who you are, how you’re useful, experience, skills, results. Photo and headline without clickbait. Colleague recommendations strengthen trust.",
    },
    {
      q: "Why a company page?",
      a: "One place for brand, jobs, and news; employees can link to the organization. It doesn’t replace the site — it’s a trust and hiring channel.",
    },
    {
      q: "Is cold spam in messages OK?",
      a: "Bad idea: reports, limits, and reputation hits. Write on point, with context and respect for the other person’s time.",
    },
    {
      q: "Relevant for RU business?",
      a: "Depends on niche and client/hiring geography. For international B2B and IT hiring often useful; for local retail other channels usually rank higher.",
    },
  ],
  sections: [
    {
      title: "What LinkedIn was built for",
      level: 2,
      paras: [
        "The platform is tuned for a professional context: a résumé-like profile, industry discussion, jobs, and employer pages.",
        "Typical scenario: a specialist fills experience and skills, grows relevant contacts, posts useful notes — and gets replies from recruiters or clients. Companies in parallel show culture and open roles.",
      ],
      lists: [
        {
          intro: "Main roles:",
          items: [
            "job search and remote/international roles;",
            "hiring and employer brand;",
            "B2B networking and expertise;",
            "company news for staff and the market.",
          ],
        },
      ],
    },
    {
      title: "Profile: the minimum without a weak signal",
      level: 2,
      paras: [
        "An empty profile barely works. Fill headline (how you’re useful), about, experience with results, education, and skills. Add contacts you’re ready to share publicly.",
        "Next — activity: on-point comments, short useful posts, professional discussions. Template “let’s collaborate” blasts without context hurt more than they help.",
      ],
      lists: [
        {
          intro: "Profile checklist:",
          items: [
            "photo and a clear headline;",
            "experience with numbers/results where fit;",
            "skills and (if possible) recommendations;",
            "link to site/portfolio;",
            "privacy settings for your goal.",
          ],
        },
      ],
    },
    {
      title: "Corporate use",
      level: 2,
      paras: [
        "A company page gathers description, news, jobs, and links to employees. Hiring often uses candidate-search filters and saved lists — features depend on account type and region.",
        "Strength for HR — professional context and checkable career tracks. Weakness — expecting “viral reach” like entertainment networks: different rhythm and success metric here.",
      ],
      lists: [
        {
          intro: "Why business needs LinkedIn:",
          items: [
            "show what you do and whom you hire;",
            "strengthen trust via team profiles;",
            "fill roles in competitive niches;",
            "keep contact with partners and market experts.",
          ],
        },
      ],
      links: [
        {
          label: "SMM manager",
          href: "/en/blog/menedzher-smm/",
        },
      ],
    },
    {
      title: "Premium and expectations",
      level: 2,
      paras: [
        "Paid plans usually add richer search, more profile-view detail, and recruiting/sales tools. Prices and package names change — don’t rely on figures from old guides.",
        "Most people do fine with a careful free profile and meaningful activity. Buy Premium for a concrete job (active hiring or job search), not “just in case”.",
      ],
    },
  ],
  closing: [
    "LinkedIn works as a professional showcase and a hiring/contacts channel — not a meme feed. A strong profile, a clear company page, and on-point messages beat any Premium subscription.",
  ],
};
