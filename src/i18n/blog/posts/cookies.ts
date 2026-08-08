import type { BlogPost } from "../../../data/blog";

/** EN overlay for cookies — same structure as RU JSON. */
export const cookiesEn: BlogPost = {
  slug: "cookies",
  title: "Browser cookies: why they exist, how they work, and security",
  date: "2020-08-31",
  category: "SEO",
  cover: "/images/blog/cookies/cover-en.webp",
  excerpt:
    "What a cookie is, how session differs from persistent and third-party, why sites need analytics and auth, privacy risks, and how to manage consent.",
  lead: [
    "A cookie is small data a site stores in the browser so it can recognize you on later requests: login session, language, cart, analytics IDs. It isn’t a virus, but it isn’t harmless dust either — cookies build profiles and keep you signed in.",
    "Below: purpose, types, tracking scenarios, security, and what a site owner should plan for (consent, HTTPS, lifetime). Important: cookies usually don’t store a password in plain text — only tokens or IDs.",
  ],
  faq: [
    {
      q: "Do cookies store my password?",
      a: "Proper sites — no. They store a session ID or token. If a service puts the password in a cookie, that’s bad practice and a risk.",
    },
    {
      q: "What’s the difference between session and persistent?",
      a: "Session cookies live until the browser closes (roughly). Persistent ones last until Expires / Max-Age.",
    },
    {
      q: "What is a third-party cookie?",
      a: "Set by a domain different from the site you opened (often ads or widgets). Browsers keep tightening them.",
    },
    {
      q: "Why does a site need cookies?",
      a: "Login, cart, A/B tests, analytics, personalization, antifraud. Without them many services forget the user.",
    },
    {
      q: "Are cookies dangerous?",
      a: "Risks include session theft (XSS), tampering (without Secure/HttpOnly), and tracking. Fixed with engineering hygiene and careful user habits.",
    },
    {
      q: "Do I need a consent banner?",
      a: "Depends on jurisdiction and which tags you set. In Russia, account for personal-data law and your policy; in the EU — GDPR/ePrivacy. Lawyer plus strictly necessary cookies.",
    },
    {
      q: "How can I view cookies?",
      a: "DevTools → Application/Storage → Cookies. Or browser settings: site list and clear.",
    },
    {
      q: "Does blocking cookies break the site?",
      a: "Often yes for cart and account. For a brochure site — less often. Offer a fallback and an honest message.",
    },
  ],
  sections: [
    {
      title: "What cookies are for",
      level: 2,
      paras: [
        "The server (or a script) sends a `Set-Cookie` header; the browser stores a name=value pair and sends it back on later requests to that domain. That’s how a site recognizes a session without re-entering login on every page.",
        "Typical jobs: auth, cart, language/currency, “already saw the banner,” analytics IDs (with consent where required).",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "data in the browser, not a program",
            "tied to domain and path",
            "have lifetime and security flags",
            "don’t fully replace a server session",
          ],
        },
      ],
    },
    {
      title: "Tracking and marketing cookies",
      level: 2,
      paras: [
        "Ad networks and widgets set IDs to stitch visits across sites (while third-party still lives) or via other techniques. For users that’s personalization and retargeting; for business — attribution, but also a duty of transparency.",
        "First-party analytics on your own domain is usually more predictable in the era of third-party limits.",
      ],
      lists: [
        {
          intro: "For the site owner:",
          items: [
            "inventory every tag",
            "a cookie policy in plain language",
            "don’t load marketing before consent if the regime requires it",
            "minimize third-party scripts",
          ],
        },
      ],
      links: [
        {
          label: "Installing Yandex Metrika",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Security and flags",
      level: 2,
      paras: [
        "HttpOnly — JS can’t read the cookie (protects against session theft via XSS). Secure — HTTPS only. SameSite — limits sending from other sites (CSRF). A short session lifetime reduces damage on leak.",
        "For users: don’t stay logged in on shared PCs, keep the browser updated, be careful with extensions, don’t enter passwords on HTTP pages.",
      ],
      lists: [
        {
          intro: "Risks:",
          items: [
            "XSS → stolen session cookie",
            "MITM on HTTP without Secure",
            "phishing plus session reuse",
            "extra third parties with broad access",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Writing that cookies “store login and password.” Normal practice is a session token; the server keeps the password (hashed).",
        },
      ],
      links: [
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "Privacy and the law",
      level: 2,
      paras: [
        "Cookies can relate to personal data if they identify a user. You need a policy, a processing basis, and a control UI where law and common sense require it.",
        "Don’t copy someone else’s “Accept all” banner without really blocking optional tags — it only annoys people and doesn’t remove the risk.",
      ],
      lists: [
        {
          intro: "Site minimum:",
          items: [
            "a cookie/privacy policy page",
            "necessary vs optional split",
            "a way to withdraw consent",
            "a log of which tags actually set",
          ],
        },
      ],
    },
    {
      title: "How to manage them in the browser",
      level: 2,
      paras: [
        "In settings: view, delete by site, block third-party. DevTools shows name, domain, expiry, size. Clearing cookies logs you out and resets carts — that’s normal.",
        "Blocker extensions cut trackers but can break checkout and chats — test critical flows.",
      ],
      lists: [
        {
          intro: "User checklist:",
          items: [
            "inspect cookies on suspicious sites",
            "log out of accounts on shared devices",
            "don’t disable everything on banks or government services without need",
            "keep OS and browser updated",
          ],
        },
      ],
    },
    {
      title: "Practice for a webmaster",
      level: 2,
      paras: [
        "Document the cookie list (name, purpose, lifetime, who sets it). Session cookies — HttpOnly + Secure + SameSite as needed. Don’t inflate lifetime to “10 years” without a reason.",
        "After launching a CMP/banner, verify analytics and ads really wait for consent. Check Metrika/GA for data loss.",
      ],
      lists: [
        {
          intro: "Release checklist:",
          items: [
            "cookie table in the policy",
            "flags on auth cookies",
            "login/cart test",
            "“reject optional” test",
            "tag error monitoring",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Fewer third-party scripts — fewer cookies, simpler policy, faster site.",
        },
      ],
      links: [
        {
          label: "Website security",
          href: "/en/blog/bezopasnost-sayta/",
        },
      ],
    },
  ],
  related: [
    "bezopasnost-sayta",
    "https-seo",
    "metrika-ustanovka",
    "google-analytics",
    "razmer-stranitsy",
  ],
};
