import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-merchant-center — same structure as RU JSON. */
export const googleMerchantCenterEn: BlogPost = {
  slug: "google-merchant-center",
  title: "Google Merchant Center: how to connect a store to Shopping ads",
  date: "2018-09-26",
  category: "Paid search",
  cover: "/images/blog/google-merchant-center/cover-en.webp",
  excerpt:
    "How to set up an online store in Google Merchant Center: feed, site requirements, Google Ads link, and Shopping campaigns — without outdated AdWords/AdSense clicks and “always cheaper than any channel” promises.",
  lead: [
    "Google Merchant Center (GMC) is the product-data hub for Google Shopping and related ad formats. You upload a feed (XML/API), verify the site, and keep product cards current.",
    "Below: what you need to start, store requirements, the Google Ads link, and care after launch. Shopping, Performance Max, and country availability change — check current Google Help. “Always cheaper than search” is a myth: CPC depends on niche and feed quality.",
  ],
  faq: [
    {
      q: "Are Merchant Center and Google Ads the same?",
      a: "No. GMC holds products and policies; Google Ads runs campaigns and bids. You usually link both accounts.",
    },
    {
      q: "Do you need a real online store?",
      a: "Yes: online purchase/order, policies, contacts, HTTPS. A “leave a request” landing without a catalog often fails Shopping moderation.",
    },
    {
      q: "What is a product feed?",
      a: "A file or stream of products: id, title, description, link, image, price, availability, and more. Feed errors are the main rejection cause.",
    },
    {
      q: "Are Customer Reviews the same as Merchant Center?",
      a: "No. Customer reviews are a separate program layered onto Merchant. See the Google Customer Reviews article.",
    },
    {
      q: "Can you advertise any products?",
      a: "No. There are banned and restricted categories (finance, some services, tickets, and more — list in Help). Check before upload.",
    },
  ],
  sections: [
    {
      title: "Why a store needs Merchant Center",
      level: 2,
      paras: [
        "Shopping ads show photo, price, and title right in results and on shopping surfaces. Users see the offer before the click — higher chance of a qualified visit if price and stock are honest.",
        "GMC isn’t “ads by itself”: without a linked Google Ads campaign (Shopping / Performance Max and current types) products may sit in the catalog without paid traffic. Organic shopping surfaces, where available, also depend on data quality.",
      ],
      lists: [
        {
          intro: "Start minimum:",
          items: [
            "site with cart / online order",
            "product feed (XML, Google Sheets, API — what’s supported)",
            "Merchant Center account",
            "Google Ads account linked to GMC",
            "compliance with Shopping ad policies",
          ],
        },
      ],
      links: [
        {
          label: "Google Customer Reviews",
          href: "/en/blog/google-otzyvy-klientov/",
        },
        {
          label: "Google Ads strategies",
          href: "/en/blog/strategii-google-ads/",
        },
      ],
    },
    {
      title: "Site requirements",
      level: 2,
      paras: [
        "Shopping moderation is stricter than a regular text ad. The site needs truthful contacts, clear payment and returns, a working path to purchase, and valid HTTPS.",
        "Price, availability, and description on the landing must match the feed. Mismatch is a common reason products and accounts get disapproved.",
      ],
      lists: [
        {
          intro: "Checklist before upload:",
          items: [
            "phone and email visible",
            "return and shipping policy",
            "payment methods disclosed before checkout",
            "checkout works without critical errors",
            "product cards priced = feed price",
          ],
        },
      ],
      notes: [
        {
          title: "On restrictions",
          kind: "tip",
          text: "Some topics (tickets, real estate, certain financial and digital services, and more) are limited or banned for Shopping. Don’t copy a 2018 list — open current Google Help on restricted products.",
        },
      ],
      links: [
        {
          label: "Product card",
          href: "/en/blog/kartochka-tovara/",
        },
        {
          label: "Online store mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
      ],
    },
    {
      title: "Creating the account and verifying the site",
      level: 2,
      paras: [
        "In Merchant Center you create the store business profile: name, address, contacts, logo. Site ownership is verified via Help methods (often Search Console / tag / file — list in the wizard).",
        "The feed must match the spec: required attributes, encoding, regular updates. After upload, read the diagnostics report: disapproved items, warnings, missing GTIN/brand where required.",
      ],
      lists: [
        {
          intro: "Typical order:",
          items: [
            "create GMC and fill store data",
            "verify the site",
            "connect the feed source",
            "fix diagnostic errors",
            "link Google Ads",
            "launch a Shopping / Performance Max campaign",
          ],
        },
      ],
    },
    {
      title: "Google Ads link and campaigns",
      level: 2,
      paras: [
        "A GMC ↔ Google Ads link is needed so campaigns pull products from the catalog. Confirm the link request in both accounts. Old guides said “AdWords” and sometimes mixed it with AdSense — Shopping needs Google Ads, not a publisher account.",
        "Campaign types evolved: classic Shopping, Performance Max with a feed, and more. Parameters, groups, and bids are set in Ads; differentiate structure and bids by margin and SKU priority — not one bid “for everything”.",
      ],
      links: [
        {
          label: "Responsive Display Ads",
          href: "/en/blog/adaptivnye-mediynye-obyavleniya/",
        },
        {
          label: "Google Analytics setup",
          href: "/en/blog/google-analytics-nastroyka/",
        },
      ],
    },
    {
      title: "After launch: feed and performance",
      level: 2,
      paras: [
        "Launch isn’t the finish. Update prices and stock, watch disapprovals, seasonal attributes, and image quality. “Dead” products in the feed burn budget and hurt account trust.",
        "Measure conversions: Google Ads linked to analytics (GA4), goals/purchases, ROAS (return on ad spend) by category. Compare not “CPC vs the whole internet,” but Shopping’s contribution to orders for your assortment.",
      ],
      lists: [
        {
          intro: "Weekly minimum:",
          items: [
            "feed errors and warnings",
            "highest spend without conversions",
            "price/availability mismatches",
            "new SKUs in the feed before ads",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Merchant Center is the source of truth about products for Google. Feed and site quality beat a “fast launch at any cost”.",
        "The Google Ads link, current campaign types, and regular catalog cleanup keep Shopping alive; don’t blindly repeat outdated AdWords screenshots from 2018 guides.",
      ],
    },
  ],
  closing: [
    "Prep the site and feed for Google policies, verify the domain in Merchant Center, link Google Ads, and launch only after clean diagnostics — then keep prices and stock in sync with the storefront.",
  ],
  related: [
    "google-otzyvy-klientov",
    "strategii-google-ads",
    "kartochka-tovara",
    "oshibki-internet-magazina",
    "google-analytics-nastroyka",
    "adaptivnye-mediynye-obyavleniya",
  ],
};

/** ES overlay for google-merchant-center — same structure as RU JSON / EN. */
export const googleMerchantCenterEs: BlogPost = {
  slug: "google-merchant-center",
  title: "Google Merchant Center: cómo conectar una tienda a Shopping ads",
  date: "2018-09-26",
  category: "Paid search",
  cover: "/images/blog/google-merchant-center/cover.webp",
  excerpt:
    "Cómo configurar una tienda online en Google Merchant Center: feed, requisitos del sitio, enlace a Google Ads y campañas Shopping — sin clics obsoletos de AdWords/AdSense ni promesas de «siempre más barato que cualquier canal».",
  lead: [
    "Google Merchant Center (GMC) es el hub de datos de producto para Google Shopping y formatos de anuncio relacionados. Subes un feed (XML/API), verificas el sitio y mantienes las fichas al día.",
    "Abajo: qué necesitas para empezar, requisitos de la tienda, el enlace a Google Ads y el cuidado tras el lanzamiento. Shopping, Performance Max y la disponibilidad por país cambian — mira Google Help actual. «Siempre más barato que search» es mito: el CPC depende del nicho y de la calidad del feed.",
  ],
  faq: [
    {
      q: "¿Merchant Center y Google Ads son lo mismo?",
      a: "No. GMC guarda productos y políticas; Google Ads corre campañas y pujas. Suele enlazar ambas cuentas.",
    },
    {
      q: "¿Hace falta una tienda online real?",
      a: "Sí: compra/pedido online, políticas, contactos, HTTPS. Una landing de «deja solicitud» sin catálogo a menudo falla la moderación de Shopping.",
    },
    {
      q: "¿Qué es un feed de productos?",
      a: "Un archivo o stream de productos: id, title, description, link, image, price, availability y más. Los errores de feed son la causa principal de rechazo.",
    },
    {
      q: "¿Customer Reviews es lo mismo que Merchant Center?",
      a: "No. Las reseñas de clientes son un programa aparte encima de Merchant. Ver el artículo de Google Customer Reviews.",
    },
    {
      q: "¿Se puede anunciar cualquier producto?",
      a: "No. Hay categorías prohibidas y restringidas (finanzas, algunos servicios, tickets y más — lista en Help). Revisa antes de subir.",
    },
  ],
  sections: [
    {
      title: "Por qué una tienda necesita Merchant Center",
      level: 2,
      paras: [
        "Los anuncios Shopping muestran foto, precio y título en resultados y en superficies de compra. El usuario ve la oferta antes del clic — más chance de visita cualificada si precio y stock son honestos.",
        "GMC no es «anuncios por sí solo»: sin una campaña de Google Ads enlazada (Shopping / Performance Max y tipos actuales) los productos pueden quedarse en el catálogo sin tráfico de pago. Las superficies orgánicas de shopping, donde existan, también dependen de la calidad de los datos.",
      ],
      lists: [
        {
          intro: "Mínimo para empezar:",
          items: [
            "sitio con carrito / pedido online",
            "feed de productos (XML, Google Sheets, API — lo soportado)",
            "cuenta de Merchant Center",
            "cuenta de Google Ads enlazada a GMC",
            "cumplimiento de las políticas de anuncios Shopping",
          ],
        },
      ],
      links: [
        {
          label: "Google Customer Reviews",
          href: "/es/blog/google-otzyvy-klientov/",
        },
        {
          label: "Estrategias de Google Ads",
          href: "/es/blog/strategii-google-ads/",
        },
      ],
    },
    {
      title: "Requisitos del sitio",
      level: 2,
      paras: [
        "La moderación de Shopping es más estricta que un anuncio de texto normal. El sitio necesita contactos veraces, pago y devoluciones claros, un camino que funcione hasta la compra y HTTPS válido.",
        "Precio, disponibilidad y descripción en la landing deben coincidir con el feed. El desajuste es un motivo habitual de desaprobación de productos y cuentas.",
      ],
      lists: [
        {
          intro: "Checklist antes de subir:",
          items: [
            "teléfono y email visibles",
            "política de devoluciones y envío",
            "métodos de pago divulgados antes del checkout",
            "el checkout funciona sin errores críticos",
            "fichas de producto con precio = precio del feed",
          ],
        },
      ],
      notes: [
        {
          title: "Sobre restricciones",
          kind: "tip",
          text: "Algunos temas (tickets, inmobiliaria, ciertos servicios financieros y digitales, y más) están limitados o prohibidos para Shopping. No copies una lista de 2018 — abre Google Help actual sobre productos restringidos.",
        },
      ],
      links: [
        {
          label: "Ficha de producto",
          href: "/es/blog/kartochka-tovara/",
        },
        {
          label: "Errores de la tienda online",
          href: "/es/blog/oshibki-internet-magazina/",
        },
      ],
    },
    {
      title: "Crear la cuenta y verificar el sitio",
      level: 2,
      paras: [
        "En Merchant Center creas el perfil de negocio de la tienda: nombre, dirección, contactos, logo. La propiedad del sitio se verifica con los métodos de Help (a menudo Search Console / tag / archivo — lista en el asistente).",
        "El feed debe encajar con la spec: atributos obligatorios, encoding, actualizaciones regulares. Tras subir, lee el informe de diagnósticos: ítems desaprobados, warnings, GTIN/brand faltantes donde se exijan.",
      ],
      lists: [
        {
          intro: "Orden típico:",
          items: [
            "crear GMC y rellenar datos de la tienda",
            "verificar el sitio",
            "conectar la fuente del feed",
            "corregir errores de diagnóstico",
            "enlazar Google Ads",
            "lanzar una campaña Shopping / Performance Max",
          ],
        },
      ],
    },
    {
      title: "Enlace a Google Ads y campañas",
      level: 2,
      paras: [
        "Un enlace GMC ↔ Google Ads hace falta para que las campañas tiren productos del catálogo. Confirma la solicitud de enlace en ambas cuentas. Guías viejas decían «AdWords» y a veces lo mezclaban con AdSense — Shopping necesita Google Ads, no una cuenta de publisher.",
        "Los tipos de campaña evolucionaron: Shopping clásico, Performance Max con feed, y más. Parámetros, grupos y pujas se fijan en Ads; diferencia estructura y pujas por margen y prioridad de SKU — no una sola puja «para todo».",
      ],
      links: [
        {
          label: "Responsive Display Ads",
          href: "/es/blog/adaptivnye-mediynye-obyavleniya/",
        },
        {
          label: "Configurar Google Analytics",
          href: "/es/blog/google-analytics-nastroyka/",
        },
      ],
    },
    {
      title: "Tras el lanzamiento: feed y rendimiento",
      level: 2,
      paras: [
        "El lanzamiento no es el final. Actualiza precios y stock, mira desaprobaciones, atributos de temporada y calidad de imagen. Productos «muertos» en el feed queman presupuesto y dañan la confianza de la cuenta.",
        "Mide conversiones: Google Ads enlazado a analytics (GA4), metas/compras, ROAS (return on ad spend) por categoría. Compara no «CPC vs todo internet», sino la contribución de Shopping a pedidos de tu surtido.",
      ],
      lists: [
        {
          intro: "Mínimo semanal:",
          items: [
            "errores y warnings del feed",
            "mayor gasto sin conversiones",
            "desajustes de precio/disponibilidad",
            "SKUs nuevos en el feed antes que en ads",
          ],
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Merchant Center es la fuente de verdad sobre productos para Google. Calidad de feed y sitio ganan a un «lanzamiento rápido a cualquier precio».",
        "El enlace a Google Ads, los tipos de campaña actuales y la limpieza regular del catálogo mantienen Shopping vivo; no repitas a ciegas screenshots viejos de AdWords de guías de 2018.",
      ],
    },
  ],
  closing: [
    "Prepara el sitio y el feed para las políticas de Google, verifica el dominio en Merchant Center, enlaza Google Ads y lanza solo tras diagnósticos limpios — luego mantén precios y stock alineados con el escaparate.",
  ],
  related: [
    "google-otzyvy-klientov",
    "strategii-google-ads",
    "kartochka-tovara",
    "oshibki-internet-magazina",
    "google-analytics-nastroyka",
    "adaptivnye-mediynye-obyavleniya",
  ],
};
