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
    "Below: the architecture idea, where services get used, and what business should watch. We don’t inflate outdated UDDI/SOAP accents from 2000s guides: today it’s more often REST, JSON, and ready APIs for payments, delivery, and CRM.",
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
      a: "Payments, delivery, inventory, Market/feeds, CRM, telephony — almost everything connects via services, not manual copy-paste.",
    },
    {
      q: "Is SOAP still alive?",
      a: "It still appears in enterprise stacks. For new integrations REST/JSON is more common. The choice depends on the counterparty, not article fashion.",
    },
    {
      q: "What is risky about integrations?",
      a: "Third-party API outages, format changes, keys in public code, inventory/price drift. You need monitoring, access rights, and clear data ownership.",
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
            "data/operations provider (executor)",
            "consumer (your site, app, partner)",
            "contract: format, errors, limits, authorization",
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
            "current documentation and examples exist",
            "request limits and SLA",
            "how prices and inventory refresh",
            "key security and logging",
            "what happens when the provider is down",
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
            "less manual data moving",
            "one source of truth for inventory and statuses",
            "faster to connect new sales channels",
            "you can change the front without breaking accounting if the API contract stays stable",
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

/** ES overlay for veb-servisy — same structure as RU JSON / EN. */
export const vebServisyEs: BlogPost = {
  slug: "veb-servisy",
  title: "Servicios web: qué son y por qué los necesitan los sitios",
  date: "2020-09-08",
  category: "Digital marketing",
  cover: "/images/blog/veb-servisy/cover.webp",
  excerpt:
    "Qué es un servicio web (API): cómo los sistemas intercambian datos por la red, dónde lo necesita el negocio, y cómo REST/JSON moderno difiere de los roundups viejos de SOAP/UDDI.",
  lead: [
    "Un servicio web es una interfaz programática por la red: un recurso envía o recibe datos bajo reglas claras; otro lo consume. Para el usuario es la «magia» de un agregador de tours o el checkout en un sitio; para ingeniería — un contrato entre sistemas.",
    "Abajo: la idea de arquitectura, dónde se usan los servicios y qué debe vigilar el negocio. No inflamos acentos obsoletos de UDDI/SOAP de guías de los 2000: hoy es más a menudo REST, JSON y APIs listas para pagos, delivery y CRM.",
  ],
  faq: [
    {
      q: "¿Un servicio web es lo mismo que un sitio?",
      a: "No. Un sitio es una interfaz para personas. Un servicio es una interfaz para programas (a menudo JSON/XML sobre HTTP). A veces el servicio también tiene docs en el navegador.",
    },
    {
      q: "¿Qué es una API?",
      a: "Un set de métodos y formatos de intercambio. En el habla cotidiana «servicio web» suele significar una API HTTP.",
    },
    {
      q: "¿Para qué lo necesita una tienda online?",
      a: "Pagos, delivery, inventario, Market/feeds, CRM, telefonía — casi todo se conecta vía servicios, no con copy-paste manual.",
    },
    {
      q: "¿SOAP sigue vivo?",
      a: "Aún aparece en stacks enterprise. Para integraciones nuevas REST/JSON es más habitual. La elección depende de la contraparte, no de la moda del artículo.",
    },
    {
      q: "¿Qué es arriesgado en las integraciones?",
      a: "Caídas de APIs de terceros, cambios de formato, keys en código público, drift de inventario/precios. Hacen falta monitoring, derechos de acceso y ownership claro de los datos.",
    },
    {
      q: "¿Un agregador es un servicio web?",
      a: "Un agregador es un producto. Suele llamar servicios de proveedores, reunir datos y mostrar un escaparate al usuario.",
    },
    {
      q: "¿Hace falta tu propio servicio desde cero?",
      a: "No siempre. A menudo bastan APIs listas (pagos, email, mapas). Construye el tuyo cuando la lógica es única o no hay proveedor que encaje.",
    },
  ],
  sections: [
    {
      title: "Qué hace un servicio web",
      level: 2,
      paras: [
        "Un servicio tiene una dirección (endpoint), reglas de request/response y suele tener identidad (key, OAuth). Un cliente (tu sitio, app móvil, otro servidor) llama un método y recibe una respuesta estructurada.",
        "Ejemplo clásico: un agregador de vuelos o tours pide a proveedores disponibilidad y precios vía sus APIs y muestra un listing combinado — sin copiar a mano cada sitio.",
      ],
      lists: [
        {
          intro: "Jugadores, simplificado:",
          items: [
            "proveedor de datos/operaciones (executor)",
            "consumidor (tu sitio, app, partner)",
            "contrato: formato, errores, límites, autorización",
          ],
        },
      ],
    },
    {
      title: "Arquitectura sin nostalgia de UDDI",
      level: 2,
      paras: [
        "Por debajo siempre hay red y protocolos (TCP/IP, HTTP/HTTPS). Los datos se empaquetan más a menudo como JSON; XML/SOAP se quedan donde la contraparte los exige.",
        "Los roundups viejos hablaban mucho de catálogos UDDI y WSDL. Para digital pequeño y mediano importa más docs de API claras, sandbox, versiones estables y monitoring de errores — no la teoría de registros de los 2000.",
      ],
      lists: [
        {
          intro: "Qué revisar al elegir/pedir una integración:",
          items: [
            "existen documentación actual y ejemplos",
            "límites de request y SLA",
            "cómo se refrescan precios e inventario",
            "seguridad de keys y logging",
            "qué pasa cuando el proveedor cae",
          ],
        },
      ],
      links: [
        {
          label: "Protocolo HTTP",
          href: "/es/blog/protokol-http/",
        },
      ],
    },
    {
      title: "Dónde se usan",
      level: 2,
      paras: [
        "Pagos y fiscalización, delivery y tracking, CRM y email, telefonía, mapas y geocoding, marketplaces y feeds de producto, intercambio con 1C/ERP — un stack típico de sitio moderno.",
      ],
      lists: [
        {
          intro: "Beneficios de negocio:",
          items: [
            "menos mover datos a mano",
            "una fuente de verdad para inventario y estados",
            "más rápido conectar nuevos canales de venta",
            "puedes cambiar el front sin romper contabilidad si el contrato de API se mantiene estable",
          ],
        },
      ],
      links: [
        {
          label: "Pago online en el sitio",
          href: "/es/blog/onlayn-oplata/",
        },
        {
          label: "Archivo YML para Market",
          href: "/es/blog/yml-fayl/",
        },
      ],
    },
  ],
  closing: [
    "Un servicio web es máquinas que se ponen de acuerdo por la red: quién envía datos y bajo qué reglas. Para el negocio eso son pagos, logística, CRM y agregadores; diseña integraciones desde el escenario y la fiabilidad — no desde un acrónimo de moda.",
  ],
};
