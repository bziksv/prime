import type { BlogPost } from "../../../data/blog";

/** EN overlay for kloaking — same structure as RU JSON. Risk overview, not a how-to. */
export const kloakingEn: BlogPost = {
  slug: "kloaking",
  title: "What cloaking is in SEO and why it’s a risk",
  date: "2019-07-09",
  category: "SEO",
  cover: "/images/blog/kloaking/cover-en.webp",
  excerpt:
    "Cloaking is showing different content to bots and people. Why it’s used, what it costs you, and how to check your site isn’t masked — including after a breach.",
  lead: [
    "Cloaking (from “cloak” — to mask) is when a search bot gets one page version and a visitor gets another. Classic black-hat SEO: the bot sees keyword-stuffed copy for the SERP; the person sees an offer, ads, or a totally different site.",
    "Below: what that means in practice, why search engines punish these schemes, and how to make sure your resource isn’t swapped (cloaking often appears after a hack). This is a risk and diagnostics overview — not a guide to gaming the results.",
  ],
  faq: [
    {
      q: "Is cloaking white-hat SEO?",
      a: "No. Serving different content to the bot breaks major search engines’ rules and leads to filters, deindexing, or manual actions.",
    },
    {
      q: "How does it differ from an A/B test?",
      a: "A/B usually splits people across variants and is not meant to hide a “different truth” from the bot. Cloaking deliberately gives bot and human different meaning.",
    },
    {
      q: "Are geo and device adaptation cloaking?",
      a: "Legitimate personalization (language, currency, mobile template) with the same page meaning is fine. Risk starts when the bot sees “download free” and the human only gets a paywall or another topic.",
    },
    {
      q: "Why know about this at all?",
      a: "So you do not buy “promotion” with content swapping, and so you catch a breach in time: attackers often hang cloaking on other people’s sites.",
    },
    {
      q: "How do you tell the site was hacked?",
      a: "HTML differs for Googlebot or Yandexbot vs a normal browser, odd snippets, redirects to foreign domains, unknown files, and spikes in Webmaster or Search Console.",
    },
    {
      q: "Is a User-Agent Switcher enough?",
      a: "As a quick screen — yes. More reliable: URL Inspection / fetch as Googlebot in webmaster tools, then compare with a normal view.",
    },
    {
      q: "Can you do it “just a little” for the snippet?",
      a: "There is no durable “just a little” tactic. An honest snippet means title, description, and content the human also sees.",
    },
    {
      q: "What should you do instead of cloaking?",
      a: "One clear document for the intent: tech, content, structure. Prep and systematic work; growing a query core is planned over months — not by masking.",
    },
  ],
  sections: [
    {
      title: "What the method is",
      level: 2,
      paras: [
        "The idea is simple: detect who requested the page and serve different HTML. The bot gets keyword-heavy text for the SERP; the human gets a convenient or commercial variant, sometimes another URL entirely.",
        "A typical deception: the SERP promises “download free”; after the click — only a purchase or an irrelevant product. The user is misled, search sees a mismatch — the site risks sanctions.",
      ],
      lists: [
        {
          intro: "Cloaking signs:",
          items: [
            "different page meaning for bot and human",
            "hiding spam or doorways from visitors",
            "redirects only for some clients",
            "often a breach result, not the owner’s “strategy”",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "We do not explain how to set up cloaking. The topic is spotting the risk and protecting your site.",
        },
      ],
    },
    {
      title: "Why search engines ban it",
      level: 2,
      paras: [
        "Search’s job is to show a document that matches the query for a person. Swapping content breaks trust in the snippet and the index.",
        "Algorithms and manual reviews catch mismatches. Outcomes: a drop, URL or domain removal, long rehab after cleanup. Short-term masking “wins” rarely cover the downtime.",
      ],
      lists: [
        {
          intro: "Business risks:",
          items: [
            "loss of organic and brand traffic",
            "ad accounts and partner programs also cut deception",
            "reputation hit if users complain",
            "cleanup costs after a breach",
          ],
        },
      ],
      links: [
        {
          label: "Common SEO mistakes",
          href: "/en/blog/seo-oshibki/",
        },
        {
          label: "Suspicious Google traffic",
          href: "/en/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "Cloaking and hacks: a common pair",
      level: 2,
      paras: [
        "In practice the owner often learns about cloaking when the site is already filtered or “foreign” snippets appear. Malware serves spam to bots and redirects to people.",
        "So diagnostics are part of security: CMS and plugin updates, file permissions, integrity monitoring, and alerts in Webmaster Tools or Search Console.",
      ],
      lists: [
        {
          intro: "If you suspect a breach:",
          items: [
            "compare bot and browser HTML",
            "check fresh files and cron jobs",
            "change passwords and API keys",
            "clean backdoors and request reindexing after the fix",
          ],
        },
      ],
      links: [
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "How to check the site for swapping",
      level: 2,
      paras: [
        "Basic move: compare what the bot sees with what you see. In Google Search Console — URL Inspection / view as Googlebot; in the Yandex ecosystem — webmaster tools and server-response checks.",
        "Additionally: switch User-Agent in the browser, compare source; third-party “cloaking checkers” are a hint, not the only judge. Also watch the SERP: if the snippet says one thing and the landing another without a clear reason, dig in.",
      ],
      lists: [
        {
          intro: "Compare checklist:",
          items: [
            "HTML or text for the bot ≈ HTML for the human in meaning",
            "no hidden “bots only” block",
            "canonical and redirects lead to the right URL the same way",
            "no sudden redirects to foreign domains",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "What not to count as cloaking",
      level: 2,
      paras: [
        "Responsive layout, different CSS on mobile, geo pricing for the same product, account login — are not cloaking by themselves if the bot’s document reflects the public page’s substance.",
        "Gray zones appear when “public” and “bot” versions diverge in topic and promise. Stick to the rule: the snippet promise equals the content after the click.",
      ],
      lists: [
        {
          intro: "Safe alternative:",
          items: [
            "one strong page for the intent",
            "honest title and description",
            "decent speed and mobile",
            "content and links without swapping",
          ],
        },
      ],
      links: [
        {
          label: "Internal ranking factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "Takeaway: risks instead of a “fast climb”",
      level: 2,
      paras: [
        "Cloaking promises a shortcut into the SERP and almost always ends in a filter or a security incident. Durable growth is built on query, page, and offer matching.",
        "Site prep and systematic work deliver results on a plan: growing a query core roughly 2–6 months after work starts — not “tomorrow after a masking script.”",
      ],
      lists: [
        {
          intro: "If an agency offers a “special SERP for bots” — stop signal:",
          items: [
            "demand method transparency",
            "check HTML yourself",
            "do not agree to swapping for ranks",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Honest pages and prep beat masking. Ranking work for a core is still planned over 2–6 months — cloaking is not a shortcut to page one.",
        },
      ],
    },
  ],
  related: [
    "seo-oshibki",
    "wordpress-bezopasnost",
    "vnutrennie-faktory",
    "podozritelnyy-trafik-google",
    "tehnicheskiy-seo-audit",
    "samostoyatelnoe-seo",
  ],
};

/** ES overlay for kloaking — same structure as RU JSON / EN. Risk overview, not a how-to. */
export const kloakingEs: BlogPost = {
  slug: "kloaking",
  title: "Qué es el cloaking en SEO y por qué es un riesgo",
  date: "2019-07-09",
  category: "SEO",
  cover: "/images/blog/kloaking/cover.webp",
  excerpt:
    "Cloaking es mostrar contenido distinto a bots y a personas. Por qué se usa, qué te cuesta y cómo revisar que tu sitio no esté enmascarado — también tras un breach.",
  lead: [
    "Cloaking (de «cloak» — enmascarar) es cuando un bot de búsqueda recibe una versión de la página y un visitante otra. SEO black-hat clásico: el bot ve copy lleno de keywords para la SERP; la persona ve una oferta, anuncios o un sitio totalmente distinto.",
    "Abajo: qué significa en la práctica, por qué los buscadores castigan estos esquemas y cómo asegurar que tu recurso no esté cambiado (el cloaking a menudo aparece tras un hack). Esto es un overview de riesgo y diagnóstico — no una guía para manipular resultados.",
  ],
  faq: [
    {
      q: "¿El cloaking es SEO white-hat?",
      a: "No. Servir contenido distinto al bot rompe las reglas de los buscadores principales y lleva a filtros, desindexación o acciones manuales.",
    },
    {
      q: "¿En qué se diferencia de un test A/B?",
      a: "El A/B suele partir personas entre variantes y no busca ocultar una «verdad distinta» al bot. El cloaking da deliberadamente sentido distinto a bot y humano.",
    },
    {
      q: "¿La adaptación por geo y dispositivo es cloaking?",
      a: "La personalización legítima (idioma, moneda, plantilla móvil) con el mismo sentido de página está bien. El riesgo empieza cuando el bot ve «descarga gratis» y el humano solo un paywall u otro tema.",
    },
    {
      q: "¿Por qué saber esto en absoluto?",
      a: "Para no comprar «promoción» con intercambio de contenido, y para pillar un breach a tiempo: los atacantes a menudo cuelgan cloaking en sitios ajenos.",
    },
    {
      q: "¿Cómo saber que el sitio fue hackeado?",
      a: "El HTML difiere para Googlebot o Yandexbot vs un navegador normal, snippets raros, redirects a dominios ajenos, archivos desconocidos y picos en Webmaster o Search Console.",
    },
    {
      q: "¿Basta un User-Agent Switcher?",
      a: "Como pantalla rápida — sí. Más fiable: URL Inspection / fetch as Googlebot en herramientas de webmaster, luego compara con la vista normal.",
    },
    {
      q: "¿Se puede hacer «solo un poco» por el snippet?",
      a: "No hay una táctica durable de «solo un poco». Un snippet honesto significa title, description y contenido que el humano también ve.",
    },
    {
      q: "¿Qué hacer en vez de cloaking?",
      a: "Un documento claro para la intención: técnica, contenido, estructura. Preparación y trabajo sistemático; crecer un núcleo de consultas se planifica a lo largo de meses — no enmascarando.",
    },
  ],
  sections: [
    {
      title: "Qué es el método",
      level: 2,
      paras: [
        "La idea es simple: detectar quién pidió la página y servir HTML distinto. El bot recibe texto cargado de keywords para la SERP; el humano una variante cómoda o comercial, a veces otra URL del todo.",
        "Un engaño típico: la SERP promete «descarga gratis»; tras el clic — solo una compra o un producto irrelevante. El usuario es engañado, la búsqueda ve un desajuste — el sitio arriesga sanciones.",
      ],
      lists: [
        {
          intro: "Señales de cloaking:",
          items: [
            "sentido de página distinto para bot y humano",
            "ocultar spam o doorways a los visitantes",
            "redirects solo para algunos clientes",
            "a menudo resultado de un breach, no «estrategia» del dueño",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No explicamos cómo montar cloaking. El tema es detectar el riesgo y proteger tu sitio.",
        },
      ],
    },
    {
      title: "Por qué los buscadores lo prohíben",
      level: 2,
      paras: [
        "El trabajo de la búsqueda es mostrar un documento que encaje con la consulta para una persona. Intercambiar contenido rompe la confianza en el snippet y en el índice.",
        "Algoritmos y revisiones manuales pillan desajustes. Resultados: una caída, baja de URL o dominio, rehabilitación larga tras la limpieza. Las «victorias» de enmascaramiento a corto plazo rara vez cubren el downtime.",
      ],
      lists: [
        {
          intro: "Riesgos de negocio:",
          items: [
            "pérdida de tráfico orgánico y de marca",
            "cuentas de ads y programas partner también cortan el engaño",
            "golpe de reputación si los usuarios se quejan",
            "costes de limpieza tras un breach",
          ],
        },
      ],
      links: [
        {
          label: "Errores habituales de SEO",
          href: "/es/blog/seo-oshibki/",
        },
        {
          label: "Tráfico sospechoso de Google",
          href: "/es/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "Cloaking y hacks: un par habitual",
      level: 2,
      paras: [
        "En la práctica el dueño a menudo se entera del cloaking cuando el sitio ya está filtrado o aparecen snippets «ajenos». El malware sirve spam a los bots y redirects a las personas.",
        "Así que el diagnóstico es parte de la seguridad: updates de CMS y plugins, permisos de archivos, monitoreo de integridad y alertas en Webmaster Tools o Search Console.",
      ],
      lists: [
        {
          intro: "Si sospechas un breach:",
          items: [
            "compara el HTML de bot y navegador",
            "revisa archivos frescos y cron jobs",
            "cambia contraseñas y API keys",
            "limpia backdoors y pide reindexación tras el arreglo",
          ],
        },
      ],
      links: [
        {
          label: "Seguridad de WordPress",
          href: "/es/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "Cómo revisar el sitio por intercambio",
      level: 2,
      paras: [
        "Movimiento básico: compara lo que ve el bot con lo que ves tú. En Google Search Console — URL Inspection / view as Googlebot; en el ecosistema Yandex — herramientas de webmaster y checks de respuesta del servidor.",
        "Además: cambia el User-Agent en el navegador, compara el source; los «cloaking checkers» de terceros son una pista, no el único juez. Mira también la SERP: si el snippet dice una cosa y el landing otra sin motivo claro, investiga.",
      ],
      lists: [
        {
          intro: "Checklist de comparación:",
          items: [
            "HTML o texto para el bot ≈ HTML para el humano en sentido",
            "sin bloque oculto «solo bots»",
            "canonical y redirects llevan a la URL correcta del mismo modo",
            "sin redirects repentinos a dominios ajenos",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Qué no contar como cloaking",
      level: 2,
      paras: [
        "Layout responsive, CSS distinto en móvil, precios geo para el mismo producto, login de cuenta — no son cloaking por sí solos si el documento del bot refleja la sustancia de la página pública.",
        "Las zonas grises aparecen cuando las versiones «pública» y «bot» divergen en tema y promesa. Quédate con la regla: la promesa del snippet equivale al contenido tras el clic.",
      ],
      lists: [
        {
          intro: "Alternativa segura:",
          items: [
            "una página fuerte para la intención",
            "title y description honestos",
            "velocidad y móvil decentes",
            "contenido y enlaces sin intercambio",
          ],
        },
      ],
      links: [
        {
          label: "Factores internos de ranking",
          href: "/blog/vnutrennie-faktory/",
        },
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "Takeaway: riesgos en vez de un «ascenso rápido»",
      level: 2,
      paras: [
        "El cloaking promete un atajo a la SERP y casi siempre acaba en un filtro o un incidente de seguridad. El crecimiento durable se construye sobre el encaje de consulta, página y oferta.",
        "La preparación del sitio y el trabajo sistemático dan resultados según un plan: crecer un núcleo de consultas a grandes rasgos 2–6 meses tras el arranque del trabajo — no «mañana tras un script de enmascaramiento».",
      ],
      lists: [
        {
          intro: "Si una agencia ofrece una «SERP especial para bots» — señal de stop:",
          items: [
            "exige transparencia del método",
            "revisa el HTML tú mismo",
            "no aceptes intercambio por ranks",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Páginas honestas y preparación ganan al enmascaramiento. El trabajo de rankings de un núcleo se planifica aún a 2–6 meses — el cloaking no es un atajo a primera página.",
        },
      ],
    },
  ],
  related: [
    "seo-oshibki",
    "wordpress-bezopasnost",
    "vnutrennie-faktory",
    "podozritelnyy-trafik-google",
    "tehnicheskiy-seo-audit",
    "samostoyatelnoe-seo",
  ],
};
