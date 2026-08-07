import type { BlogPost } from "../../../data/blog";

/** EN overlay for oblachnyy-servis — same structure as RU JSON. */
export const oblachnyyServisEn: BlogPost = {
  slug: "oblachnyy-servis",
  title: "Cloud service: types, benefits, and security",
  date: "2021-04-09",
  category: "Hosting",
  cover: "/images/blog/oblachnyy-servis/cover-en.webp",
  excerpt:
    "What cloud storage and cloud services are, how IaaS/PaaS/SaaS differ, benefits for business, and data risks.",
  lead: [
    "“The cloud” means access to storage or software over the internet, without the client’s own visible hardware stack. Files and compute live with the provider.",
    "Below: how it works, the main service types, and the security questions teams should ask before rollout. This is not a ranking of specific brands.",
  ],
  faq: [
    {
      q: "Is the cloud only a Drive for files?",
      a: "No. Also email, CRM, app hosting, virtual servers, and dozens of SaaS tools.",
    },
    {
      q: "Is the cloud safe for business data?",
      a: "Depends on the provider, access settings, and your processes. 2FA, permissions, and backups are required.",
    },
    {
      q: "How is it different from your own server?",
      a: "Less hardware work, pay-as-you-go / subscription, dependence on internet and the provider’s policy.",
    },
    {
      q: "Do you always need an internet connection?",
      a: "For online access — yes. Some clients have offline cache, but sync still goes over the network.",
    },
    {
      q: "What should a business choose for cloud tools?",
      a: "Start from the job: team files, email, CRM, site infrastructure, or analytics. Compare full cost, support, and data requirements.",
    },
    {
      q: "Do you need a backup if data is already in the cloud?",
      a: "Yes. Sync doesn’t save you from accidental delete, ransomware, or bad permissions. Test recovery ahead of time.",
    },
  ],
  sections: [
    {
      title: "How it works",
      level: 2,
      paras: [
        "You sign into a web UI or app and see a “drive,” mailbox, or service panel. Physically, data and compute run in the provider’s data centers — the client gets an abstraction.",
        "The provider owns part of the infrastructure, but the responsibility line depends on the model. User settings, permissions, content, and backups often stay with the company.",
      ],
      lists: [
        {
          intro: "Typical actions:",
          items: [
            "upload and share files",
            "collaborative editing",
            "run apps on subscription",
            "scale server resources.",
          ],
        },
      ],
    },
    {
      title: "Types and benefits",
      level: 2,
      paras: [
        "Services are usually split into IaaS — virtual infrastructure, PaaS — a platform for building, and SaaS — ready software by subscription. Marketing most often meets SaaS: CRM, analytics, email, and cloud drives.",
        "A public cloud shares infrastructure across clients; a private cloud is dedicated to an organization; hybrid mixes both. Choice depends on data criticality, team, and integrations.",
      ],
      lists: [
        {
          intro: "Benefits:",
          items: [
            "fast start",
            "access from different devices",
            "less of your own admin work",
            "scaling with load.",
          ],
        },
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "Security and risks",
      level: 2,
      paras: [
        "Leaks more often come from weak passwords, excess permissions, and phishing — not from “cloud magic.” Encryption, 2FA, access audits, and a clear retention policy are the baseline.",
        "Check the contract: where data is stored, how incidents are reported, whether there is an activity log, and how you export when switching providers. For personal data, check legal requirements.",
      ],
      lists: [
        {
          intro: "Team minimum:",
          items: [
            "two-factor authentication",
            "separate accounts, not a shared password",
            "backup of critical data",
            "know which jurisdiction holds the data",
            "revoke access on offboarding.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "For personal data, check legal requirements and the provider contract — not only a “convenient tariff.”",
        },
      ],
    },
    {
      title: "How to evaluate a service before rollout",
      level: 2,
      paras: [
        "Write scenarios: file collaboration, office access, a backup site, or launching an app. Then tariff and features are judged by the job — not by an ad promise.",
        "Run a short pilot with real roles: employee, manager, contractor, admin. It surfaces access, integration, and speed issues before a mass move.",
      ],
      lists: [
        {
          intro: "Compare before buying:",
          items: [
            "cost over the full term, not only month one",
            "SLA and support channels",
            "data export and compatibility",
            "permissions and activity audit.",
          ],
        },
      ],
    },
    {
      title: "Migration and backup plan",
      level: 2,
      paras: [
        "Don’t move the whole storage in one day without an inventory. Split data by owners and criticality, set retention, and delete stale copies by company rules.",
        "A recovery plan beats a pretty “backup exists” checkbox. Assign an owner, pick copy frequency, and test restoring one file and a whole working folder.",
      ],
      lists: [
        {
          intro: "Minimum plan:",
          items: [
            "data inventory",
            "pilot group",
            "staff training",
            "recovery test",
            "regular permission review.",
          ],
        },
      ],
    },
  ],
};
