import type { BlogPost } from "../../../data/blog";

/** EN overlay for proksi-server — same structure as RU JSON. */
export const proksiServerEn: BlogPost = {
  slug: "proksi-server",
  title: "Proxy server: what it is and why you need it",
  date: "2018-04-25",
  category: "Internet marketing",
  cover: "/images/blog/proksi-server/cover-en.webp",
  excerpt:
    "What a proxy server is in plain words: how the middleman between client and site works, forward vs reverse, cache and corporate gateway — without ban-bypass guides or shady IP lists.",
  lead: [
    "A proxy server is an intermediate node between your device (or internal network) and a target resource on the internet. The request goes to the proxy first, then to the site; the response returns the same way. Sometimes the parties don’t even know about the middleman.",
    "Below — how the connection works, why providers and companies deploy proxies, how forward differs from reverse on a site, and the risks of “free” public proxies. Bypassing forum bans and other people’s ToS isn’t covered as practice.",
  ],
  faq: [
    {
      q: "Is a proxy = VPN?",
      a: "Related ideas (traffic via someone else’s node), different model. A VPN usually encrypts a full tunnel; a proxy more often works at the app/HTTP layer and doesn’t replace a VPN one-to-one.",
    },
    {
      q: "Why does a company need a proxy?",
      a: "Control internet access from the LAN, cache, filtering, logs, bandwidth savings — typical corporate scenarios.",
    },
    {
      q: "What is a reverse proxy?",
      a: "A proxy “in front of” your site (often nginx): takes user requests, serves static files, balances to the backend, terminates HTTPS.",
    },
    {
      q: "Is grabbing a free proxy from a list safe?",
      a: "Often no: interception, tampering, malicious JS, credential leaks. For work pick a clear provider and policy.",
    },
    {
      q: "Does a proxy hide me completely?",
      a: "No. Anonymity depends on type, headers, DNS, and behavior. Full invisibility doesn’t exist.",
    },
  ],
  sections: [
    {
      title: "What a proxy is in plain words",
      level: 2,
      paras: [
        "From English proxy — “representative.” The client connects to the proxy and asks for a resource on another server. The proxy opens a connection to the target, gets the response, and returns it to the client. With cache on, a repeat request may be served from a copy.",
        "Every node on the network has an IP. The destination site via a proxy more often sees the middleman’s address, not the user’s home IP — hence the “anonymity” confusion.",
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
      ],
    },
    {
      title: "How the connection works",
      level: 2,
      paras: [
        "Path: browser → proxy → target server → back. The proxy can change the request (add headers, compress the response, filter URLs) or serve a page from cache without going to the internet.",
        "Providers sometimes transparently enable their proxy for subscribers: cache popular resources, compression, access policies. The user may not configure it by hand.",
      ],
      tables: [
        {
          caption: "Two “proxy” directions",
          headers: ["Type", "Who is the client", "Why"],
          rows: [
            ["Forward", "User / office", "Internet exit via a gateway"],
            ["Reverse", "Site visitors", "Front in front of the app/servers"],
            ["Caching", "Both scenarios", "Cut load and traffic"],
          ],
        },
      ],
    },
    {
      title: "Why people use proxies",
      level: 2,
      paras: [
        "LAN → internet through one controlled gateway. Cache and compression on thin links. Filtering malware and unwanted URLs by company policy. Logging outbound requests for security.",
        "On the site side a reverse proxy (nginx and peers) terminates SSL, serves static files, balances load, and hides internal app ports — a related but different “middleman” role.",
      ],
      lists: [
        {
          intro: "Legitimate scenarios:",
          items: [
            "corporate internet gateway;",
            "speeding repeat loads with cache;",
            "reverse proxy / CDN edge in front of the site;",
            "isolating internal services from direct access.",
          ],
        },
      ],
      notes: [
        {
          title: "About “getting on a forum after a ban”",
          text: "Changing IP via a proxy to bypass an account block or platform rules breaks ToS and is often useless: they ban devices, cookies, behavior. We don’t recommend those schemes.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "502 error",
          href: "/en/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "Anonymity and limits",
      level: 2,
      paras: [
        "There are different “transparency” degrees: some proxies pass the real IP in headers, others try to hide it. Even an “anonymous” node doesn’t make you invulnerable: proxy-provider logs, WebRTC/DNS leaks, a malicious middleman.",
        "Geo content restrictions are a separate legal and contractual topic. Don’t confuse technical ability with rights-holder or legal permission.",
      ],
    },
    {
      title: "Risks of free and “gray” lists",
      level: 2,
      paras: [
        "Public proxy lists often include other people’s compromised machines, honeypots, and nodes that read traffic. Don’t enter passwords or pay through an unknown proxy.",
        "For parsing and automation, mass proxies hit rate limits and site defenses — APIs and data-owner consent are more legitimate than an “IP farm.”",
      ],
      links: [
        {
          label: "Protection from scraping",
          href: "/en/blog/zashchita-ot-parsinga/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A proxy is a network middleman: forward for clients, reverse for sites, plus cache and policies. It’s infrastructure — not “magic anonymity.”",
        "Pick a clear operator; free lists and bypassing other people’s rules are a bad idea for business and security.",
      ],
    },
  ],
  closing: [
    "If you need office internet control — look at a corporate forward proxy; if you’re speeding a site — reverse proxy/CDN. Don’t confuse infrastructure with gray IP-swap schemes.",
  ],
  related: [
    "veb-server",
    "oshibka-502",
    "url-adres",
    "zashchita-ot-parsinga",
    "https-seo",
    "ssl-sertifikat",
  ],
};
