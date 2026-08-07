import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-servisy — same structure as RU JSON. */
export const vebServisyEn: BlogPost = {
  slug: "veb-servisy",
  title: "Web services: what they are and why sites need them",
  date: "2020-09-08",
  category: "Digital marketing",
  cover: "/images/blog/veb-servisy/cover-en.webp",
  excerpt:
    "What a web service (API) is: how systems exchange data over the network, where business needs it, and how modern REST/JSON differs from old SOAP/UDDI roundups.",
  lead: [
    "A web service is a programmatic interface over the network: one resource sends or receives data under clear rules; another consumes it. For the user it’s the “magic” of a tour aggregator or checkout on a site; for engineering — a contract between systems.",
    "We won’t inflate outdated UDDI/SOAP accents from 2000s guides: today it’s more often REST, JSON, and ready APIs for payments, delivery, and CRM. What business should watch is docs, SLA, and what happens when the provider is down.",
  ],
  faq: [
    {
      q: "Is a web service the same as a website?",
      a: "No. A site is an interface for people. A service is an interface for programs (often JSON/XML over HTTP). Sometimes a service also has browser docs.",
    },
    {
      q: "What is an API?",
      a: "A set of methods and exchange formats. In everyday talk “web service” often means an HTTP API.",
    },
    {
      q: "Why does an online store need this?",
      a: "Payments, delivery, stock, Market/feeds, CRM, telephony — almost everything connects via services, not manual copy-paste.",
    },
    {
      q: "Is SOAP still alive?",
      a: "It still appears in enterprise stacks. For new integrations REST/JSON is more common. The choice depends on the counterparty, not article fashion.",
    },
    {
      q: "What is risky about integrations?",
      a: "Third-party API outages, format changes, keys in public code, stock/price drift. You need monitoring, access rights, and clear data ownership.",
    },
    {
      q: "Is an aggregator a web service?",
      a: "An aggregator is a product. It usually calls supplier services, collects data, and shows a storefront to the user.",
    },
    {
      q: "Do you need your own service from scratch?",
      a: "Not always. Ready APIs (payments, email, maps) often suffice. Build your own when logic is unique or no fit provider exists.",
    },
  ],
  sections: [
    {
      title: "What a web service does",
      level: 2,
      paras: [
        "A service has an address (endpoint), request/response rules, and usually identity (key, OAuth). A client (your site, mobile app, another server) calls a method and gets a structured reply.",
        "Classic example: a flight or tour aggregator asks suppliers for availability and prices via their APIs and shows a combined listing — without manually copying every site.",
      ],
      lists: [
        {
          intro: "Players, simplified:",
          items: [
            "data/operations provider (executor);",
            "consumer (your site, app, partner);",
            "contract: format, errors, limits, authorization.",
          ],
        },
      ],
    },
    {
      title: "Architecture without UDDI nostalgia",
      level: 2,
      paras: [
        "Under the hood it’s always network and protocols (TCP/IP, HTTP/HTTPS). Data is more often packed as JSON; XML/SOAP stay where the counterparty requires them.",
        "Old roundups talked a lot about UDDI catalogs and WSDL. For small and mid-size digital what matters more is clear API docs, a sandbox, stable versions, and error monitoring — not 2000s registry theory.",
      ],
      lists: [
        {
          intro: "What to check when choosing/ordering an integration:",
          items: [
            "current documentation and examples exist;",
            "request limits and SLA;",
            "how prices/stock refresh;",
            "key security and logging;",
            "what happens when the provider is down.",
          ],
        },
      ],
      links: [
        {
          label: "HTTP protocol",
          href: "/en/blog/protokol-http/",
        },
      ],
    },
    {
      title: "Where they’re used",
      level: 2,
      paras: [
        "Payments and fiscalization, delivery and tracking, CRM and email, telephony, maps and geocoding, marketplaces and product feeds, exchange with 1C/ERP — a typical modern site stack.",
      ],
      lists: [
        {
          intro: "Business benefits:",
          items: [
            "less manual data moving;",
            "one source of truth for stock and statuses;",
            "faster to connect new sales channels;",
            "you can change the front without breaking accounting if the API contract stays stable.",
          ],
        },
      ],
      links: [
        {
          label: "Online payment on the site",
          href: "/en/blog/onlayn-oplata/",
        },
        {
          label: "YML file for Market",
          href: "/en/blog/yml-fayl/",
        },
      ],
    },
  ],
  closing: [
    "A web service is machines agreeing over the network: who sends data and under which rules. For business that’s payments, logistics, CRM, and aggregators; design integrations from the scenario and reliability — not from a trendy acronym.",
  ],
};
