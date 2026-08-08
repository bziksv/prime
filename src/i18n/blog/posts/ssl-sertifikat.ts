import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssl-sertifikat — same structure as RU JSON. */
export const sslSertifikatEn: BlogPost = {
  slug: "ssl-sertifikat",
  title: "SSL certificate: why you need it, types, and how to choose",
  date: "2021-11-15",
  category: "SEO",
  cover: "/images/blog/ssl-sertifikat/cover-en.webp",
  excerpt:
    "What an SSL/TLS certificate is, how HTTPS differs from HTTP, certificate types (DV, OV, EV, wildcard), Let’s Encrypt, and what to look at when choosing.",
  lead: [
    "An SSL certificate (today more often called TLS) lets the browser open an encrypted HTTPS connection. Without it, forms, logins, and payments look unsafe — and search engines factor that in.",
    "Below: what HTTPS means, certificate types, myths about “invulnerability,” and a practical way to choose. Install steps depend on hosting — follow the control panel and docs, not 2019 screenshots.",
  ],
  faq: [
    {
      q: "Are SSL and TLS the same?",
      a: "In everyday speech “SSL” stuck. In practice sites use TLS; the certificate is still in the HTTPS class.",
    },
    {
      q: "Is free Let’s Encrypt enough?",
      a: "For most sites and stores at the start — yes: encryption and browser trust. Paid OV/EV — when you need organization validation.",
    },
    {
      q: "Does HTTPS mean the site can’t be hacked?",
      a: "No. It encrypts the client↔server channel. CMS holes, weak passwords, and XSS aren’t fixed by HTTPS alone.",
    },
    {
      q: "Does it affect SEO?",
      a: "HTTPS is the expected norm. HTTP is often marked insecure; mixed content and broken redirects hurt both SEO and UX.",
    },
    {
      q: "Do I need EV with a “green bar”?",
      a: "Extended organization validation still exists, but the bright green address bar is almost gone in modern browsers. For many jobs DV plus correct HTTPS is enough.",
    },
  ],
  sections: [
    {
      title: "Why you need a certificate",
      level: 2,
      paras: [
        "The certificate confirms you’re talking to the right server and enables traffic encryption. Logins, forms, and payment data shouldn’t travel over open HTTP.",
        "In the address bar you’ll see a lock or secure-connection indicator. Browser warnings cut conversion harder than an “ugly design.”",
      ],
    },
    {
      title: "HTTP and HTTPS",
      level: 2,
      paras: [
        "HTTP sends data without channel encryption. HTTPS is HTTP over TLS: traffic between browser and server is protected from simple network interception.",
        "After moving to HTTPS, set an http→https redirect, canonicals, and consistent www/non-www — otherwise you’ll get duplicates and mixed content.",
      ],
      links: [
        {
          label: "Web server: site basics",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "How it works in short",
      level: 2,
      paras: [
        "When the site opens, the browser checks the certificate (issuer, expiry, domain match), then both sides agree on session keys. After that traffic is encrypted.",
        "Search engines index both HTTP and HTTPS, but for users and bots a correct HTTPS without certificate errors is preferred.",
      ],
    },
    {
      title: "Certificate classification",
      level: 2,
      paras: [
        "They’re split by owner validation depth and by domain coverage.",
      ],
      lists: [
        {
          intro: "By validation:",
          items: [
            "DV — domain ownership check; fast, often free",
            "OV — plus organization validation",
            "EV — extended legal-entity check (for some brands and fintech)",
          ],
        },
        {
          intro: "By coverage:",
          items: [
            "one domain",
            "several names (SAN / multi-domain)",
            "wildcard — all subdomains at `*.example.com`",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "A brochure site and blog usually need DV (Let’s Encrypt or a hosting-panel analogue). A store needs correct HTTPS sitewide plus secure checkout via the payment provider.",
        },
      ],
    },
    {
      title: "Myths: hacking and “the lock is enough”",
      level: 2,
      paras: [
        "A certificate doesn’t patch plugin holes and doesn’t replace backups, updates, and access rights. It’s about the channel and server identity.",
        "Mixing HTTP and HTTPS (images or scripts on http on an https page) triggers warnings and breaks trust — fix mixed content.",
      ],
      lists: [
        {
          intro: "Who needs HTTPS by design:",
          items: [
            "stores and payments",
            "logins and forms with personal data",
            "any site with an account",
            "in practice — almost any public project today",
          ],
        },
      ],
    },
    {
      title: "How to choose and where to get it",
      level: 2,
      paras: [
        "Criteria: site type, whether you need subdomains, owner (person or company), and auto-renew convenience.",
        "Free Let’s Encrypt and hosting-panel analogues cover DV for most. Paid certificates are for OV/EV, CA insurance, special client requirements, or a wildcard from a specific issuer.",
      ],
      lists: [
        {
          intro: "Checklist after install:",
          items: [
            "site opens on https with no errors",
            "http redirect is set",
            "no mixed content",
            "expiry and auto-renew are clear",
            "in Search Console / analytics — primary HTTPS host",
          ],
        },
      ],
    },
  ],
};
