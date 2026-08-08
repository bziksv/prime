import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-interfeys — same structure as RU JSON. */
export const vebInterfeysEn: BlogPost = {
  slug: "veb-interfeys",
  title: "Web interface: what it is and where you meet it",
  date: "2021-03-11",
  category: "Blog",
  cover: "/images/blog/veb-interfeys/cover-en.webp",
  excerpt:
    "What a web interface is: using a service in the browser instead of a local app — mail, hosting panel, router, cloud. Why teams build it that way, and why it isn’t “just a website.”",
  lead: [
    "A web interface is the set of browser pages through which a person controls a service or a device on a server: buttons, forms, menus, status. It isn’t necessarily a company’s public site — it’s an access shell.",
    "Below: what the term means and typical examples — webmail, router panel, hosting, cloud. Commercial-site usability and a store account are related; here the focus is the idea of web UI itself.",
  ],
  faq: [
    {
      q: "Is a web interface the same as a website?",
      a: "A site is a special case. Web UI is broader: hosting admin, billing account, router settings page are web UI too.",
    },
    {
      q: "How does it differ from a desktop app?",
      a: "Logic and data live on the server (or in firmware with HTTP access); the client needs a browser and a network, not a thick install — though desktop clients haven’t disappeared.",
    },
    {
      q: "Is it the same as an API or web service?",
      a: "No. An API is a contract for programs. A web interface is for people. Many products offer both.",
    },
    {
      q: "Is opening a router panel safe?",
      a: "Only on a trusted network, after changing the factory password, and without exposing admin to the open internet unprotected.",
    },
    {
      q: "Are Plesk and cPanel web interfaces?",
      a: "Yes: graphical hosting control panels in the browser.",
    },
    {
      q: "Does every product need a web interface?",
      a: "Not always. Sometimes an app or CLI is enough. The browser shines for rare settings and access from someone else’s PC.",
    },
    {
      q: "How does this relate to a site account?",
      a: "A customer account is a typical web UI. A separate article covers account jobs in marketing and product.",
    },
    {
      q: "Does it affect SEO?",
      a: "Public pages — yes, under the usual rules. Closed dashboards are usually noindex; SEO is secondary there.",
    },
  ],
  sections: [
    {
      title: "What the term means",
      level: 2,
      paras: [
        "Web is a network-reachable environment. An interface is how you interact: fields, buttons, tables, setup wizards. Together you control a service without installing a thick client.",
        "Not every site is a “service web interface”: a landing page may only tell a story. An interface appears when the browser does actions — sign in, configure, send, pay, upload a file.",
      ],
      links: [
        {
          label: "Web services and APIs",
          href: "/en/blog/veb-servisy/",
        },
        {
          label: "Customer account",
          href: "/en/blog/lichnyy-kabinet/",
        },
      ],
    },
    {
      title: "Webmail",
      level: 2,
      paras: [
        "Classic example: Gmail, Yandex Mail, Mail — read and send mail in the browser. People used to install Outlook or The Bat more often; a web client covers most everyday tasks now.",
        "The UI has the same entities as an app: inbox, spam, filters, search. Plus — access from any device with a browser.",
      ],
      links: [
        {
          label: "Email service",
          href: "/en/blog/pochtovyy-servis/",
        },
      ],
    },
    {
      title: "Network gear",
      level: 2,
      paras: [
        "Routers and some cameras expose settings over HTTP(S): open a LAN gateway address, sign in, change Wi‑Fi and DHCP.",
        "People used to edit via Telnet/CLI more often. A web shell lowers the bar but doesn’t remove caution: factory passwords and “admin on the open internet” are a bad idea.",
        "Exact URL and login are on the sticker or model manual — don’t copy someone else’s screenshots.",
      ],
    },
    {
      title: "Hosting panel",
      level: 2,
      paras: [
        "Hosts give a panel (ISPmanager, Plesk, cPanel, and others): domains, DNS, mail, SSL, backups, databases. That’s a web UI for administering server resources.",
        "Menu names drift across versions and brands. Find the action by meaning (“SSL,” “databases,” “cron”), not by a 2021 article screenshot.",
      ],
      links: [
        {
          label: "Hosting",
          href: "/en/blog/hosting/",
        },
      ],
    },
    {
      title: "Cloud storage and dashboards",
      level: 2,
      paras: [
        "A drive in the browser, cloud billing, a SaaS console — again web UI: files, permissions, quotas without installing a client (the client is optional).",
        "For business, role separation and action audit matter — those are interface requirements, not “pretty buttons.”",
      ],
      links: [
        {
          label: "Yandex Disk",
          href: "/en/blog/yandeks-disk/",
        },
        {
          label: "Website usability",
          href: "/en/blog/yuzabiliti/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A web interface means controlling a service or device through the browser.",
        "Examples: mail, router, hosting panel, cloud, account area.",
        "Don’t mix it up with an API for programs or a public marketing site with no actions.",
      ],
    },
  ],
  closing: [
    "Next time you open a hosting panel or webmail, notice: that’s a web interface — a service in the browser, not “just another blog page.”",
  ],
  related: [
    "lichnyy-kabinet",
    "veb-servisy",
    "hosting",
    "yuzabiliti",
    "pochtovyy-servis",
    "yandeks-disk",
  ],
};
