import type { BlogPost } from "../../../data/blog";

/** EN overlay for baidu — same structure as RU JSON. Official channels only; no verification bypass. */
export const baiduEn: BlogPost = {
  slug: "baidu",
  title: "Baidu and promotion in China: registration and key services",
  date: "2020-09-03",
  category: "SEO",
  cover: "/images/blog/baidu/cover-en.webp",
  excerpt:
    "When you need Baidu, how Chinese search differs from Google and Yandex, which ecosystem services matter for SEO, and how to approach registration without grey schemes.",
  lead: [
    "Baidu is the main search engine in mainland China. If the audience is in the PRC, the usual Google/Yandex and Western stack is often unavailable or secondary: you need local hosting or licenses, Chinese content, and the Baidu ecosystem.",
    "Below: local SEO specifics, key services, and a realistic take on registration — without verification-bypass how-tos or grey “phone numbers.”",
  ],
  faq: [
    {
      q: "Does a site with no PRC sales need Baidu?",
      a: "Usually no. It makes sense when entering the Chinese market, working with partners there, or reaching an audience inside the firewall.",
    },
    {
      q: "Why can’t you treat Baidu “just like Google”?",
      a: "Different SERP, language, and speed requirements from inside China; ICP and local infrastructure are often needed. A Western site “from outside” loads poorly.",
    },
    {
      q: "Will a non-China phone number work for an account?",
      a: "Registration and verification are often tied to local rules and may fail. Plan legal corporate access — not grey schemes.",
    },
    {
      q: "What is Baidu Webmaster Tools?",
      a: "A webmaster account: indexing, errors, sitemap — similar in spirit to Search Console / Yandex Webmaster, but in the Baidu ecosystem.",
    },
    {
      q: "Are Baike and Zhidao required?",
      a: "Not always. Baike is an encyclopedia; Zhidao is Q&A. Useful for brand and demand if content is quality and follows platform rules.",
    },
    {
      q: "Do you need Chinese on the site?",
      a: "Yes for Baidu organic. Quick machine translation usually loses to local editing.",
    },
    {
      q: "Are Baidu ads separate from organic SEO?",
      a: "Yes: paid formats have their own account and budget. Organic and paid are not interchangeable.",
    },
    {
      q: "How long until results show?",
      a: "Same as elsewhere: site prep is not page one. Index and visibility grow over months of steady work — typically a 2–6 month ranking horizon after the workstream starts.",
    },
  ],
  sections: [
    {
      title: "SEO specifics for China",
      level: 2,
      paras: [
        "Load speed from mainland China is critical: CDN or hosting outside the region often means poor UX. Content and meta — in Simplified Chinese for intent. Mobile traffic dominates.",
        "Legal and infrastructure wrapping (domain, ICP, company) is a separate loop; without a local partner, launching “from scratch from abroad” is rarely smooth.",
      ],
      lists: [
        {
          intro: "Differences from familiar SEO:",
          items: [
            "another link and social-signal ecosystem",
            "Baidu services instead of a Google stack",
            "stricter locality requirements",
            "different content filters and rules",
          ],
        },
      ],
    },
    {
      title: "Registration: a realistic approach",
      level: 2,
      paras: [
        "Official path: an account via current Baidu forms, verification per service rules, then access to needed products (Webmaster and others). UIs and requirements change — follow Baidu help, not 2018–2020 guides.",
        "Grey methods (“someone else’s number,” bypassing checks) risk blocks, lost access, and legal trouble. Business needs transparent access and a named account owner.",
      ],
      lists: [
        {
          intro: "Before registration lock:",
          items: [
            "goal (brand / leads / store)",
            "domain and hosting reachable from China",
            "Chinese editorial",
            "who owns the account in the company",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "We do not publish or recommend verification-bypass schemes. Official channels only.",
        },
      ],
    },
    {
      title: "Baidu Webmaster and the index",
      level: 2,
      paras: [
        "Webmaster is the base panel: site verification, sitemap, crawl and error monitoring. Without it it is hard to know whether Baidu sees your URLs.",
        "Baidu Index estimates query interest (similar in spirit to keyword or trends tools). Useful for demand — not as the only semantics source.",
      ],
      lists: [
        {
          intro: "Minimum after access:",
          items: [
            "verify the site",
            "submit a sitemap",
            "check mobile availability from China",
            "keep an indexing-error log",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap",
          href: "/en/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Content platforms in the ecosystem",
      level: 2,
      paras: [
        "Baidu Baike — encyclopedic articles (strict moderation). Zhidao — Q&A. Tieba — interest forums. Feng Yun Bang and rankings are more trend monitoring than a ranking shortcut.",
        "Use platforms for expertise and brand, not identical-anchor spam. Moderation rules are stricter than Western blogs suggest.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "site and Webmaster first",
            "then selective Baike/Zhidao by niche",
            "no machine-translation auto-fill",
            "one brand and contacts",
          ],
        },
      ],
    },
    {
      title: "Product and analytics loop",
      level: 2,
      paras: [
        "Design the funnel inside China: messengers, local payment and support platforms. Western GA may be unavailable to the audience — use locally allowed analytics and server logs.",
        "Build semantics for Chinese demand — not a literal copy of a Russian or English keyword list.",
      ],
      lists: [
        {
          intro: "Launch checklist:",
          items: [
            "speed from target provinces",
            "mobile layout",
            "local contacts or payments for the business model",
            "Chinese content plan",
            "budget for ongoing support, not a one-off “visit”",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "When Baidu isn’t your channel",
      level: 2,
      paras: [
        "If clients are outside China and there is no Chinese supply — better invest in Google/Yandex, maps, and local-language content. “Register in Baidu just in case” almost never helps.",
        "If the PRC market is real — budget a local contractor or legal structure, not only an SEO article.",
      ],
      lists: [
        {
          intro: "Contractor red flags:",
          items: [
            "Baidu page-one guarantee in a week",
            "grey “turnkey” accounts",
            "no Webmaster report",
            "only link buying without a site in China",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Site reachability from China and language first, then Baidu accounts — or you optimize emptiness. Ranking growth still takes months of steady work after prep.",
        },
      ],
    },
  ],
  related: [
    "karta-sayta",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
    "seo-malyy-biznes",
    "katalogi-saytov",
  ],
};

/** ES overlay for baidu — same structure as RU JSON / EN. Official channels only; no verification bypass. */
export const baiduEs: BlogPost = {
  slug: "baidu",
  title: "Baidu y la promoción en China: registro y servicios clave",
  date: "2020-09-03",
  category: "SEO",
  cover: "/images/blog/baidu/cover-es.webp",
  excerpt:
    "Cuándo hace falta Baidu, en qué se diferencia la búsqueda china de Google y Yandex, qué servicios del ecosistema importan para SEO y cómo encarar el registro sin esquemas grises.",
  lead: [
    "Baidu es el buscador principal en China continental. Si la audiencia está en la RPC, el stack habitual de Google/Yandex y Occidente a menudo no está disponible o es secundario: hacen falta hosting o licencias locales, contenido en chino y el ecosistema Baidu.",
    "Abajo: especificidades del SEO local, servicios clave y una mirada realista al registro — sin how-tos de saltar la verificación ni «números de teléfono» grises.",
  ],
  faq: [
    {
      q: "¿Un sitio sin ventas en la RPC necesita Baidu?",
      a: "Normalmente no. Tiene sentido al entrar en el mercado chino, trabajar con partners allí o llegar a una audiencia dentro del firewall.",
    },
    {
      q: "¿Por qué no se puede tratar Baidu «igual que Google»?",
      a: "SERP, idioma y requisitos de velocidad distintos desde dentro de China; a menudo hacen falta ICP e infraestructura local. Un sitio occidental «desde fuera» carga mal.",
    },
    {
      q: "¿Funciona un teléfono fuera de China para una cuenta?",
      a: "El registro y la verificación a menudo están atados a reglas locales y pueden fallar. Planifica acceso corporativo legal — no esquemas grises.",
    },
    {
      q: "¿Qué es Baidu Webmaster Tools?",
      a: "Una cuenta de webmaster: indexación, errores, sitemap — similar en espíritu a Search Console / Yandex Webmaster, pero en el ecosistema Baidu.",
    },
    {
      q: "¿Son obligatorios Baike y Zhidao?",
      a: "No siempre. Baike es una enciclopedia; Zhidao es Q&A. Útiles para marca y demanda si el contenido es de calidad y sigue las reglas de la plataforma.",
    },
    {
      q: "¿Hace falta chino en el sitio?",
      a: "Sí para lo orgánico de Baidu. La traducción automática rápida suele perder frente a edición local.",
    },
    {
      q: "¿Los ads de Baidu son aparte del SEO orgánico?",
      a: "Sí: los formatos de pago tienen cuenta y presupuesto propios. Orgánico y paid no son intercambiables.",
    },
    {
      q: "¿Cuánto tarda en verse un resultado?",
      a: "Igual que en otros lados: la preparación del sitio no es primera página. Índice y visibilidad crecen a lo largo de meses de trabajo constante — típicamente un horizonte de rankings de 2–6 meses tras el arranque del workstream.",
    },
  ],
  sections: [
    {
      title: "Especificidades SEO para China",
      level: 2,
      paras: [
        "La velocidad de carga desde China continental es crítica: CDN o hosting fuera de la región a menudo significa UX flojo. Contenido y meta — en chino simplificado para la intención. Domina el tráfico móvil.",
        "El wrapping legal e infraestructural (dominio, ICP, empresa) es un loop aparte; sin un partner local, lanzar «desde cero desde el extranjero» rara vez es fluido.",
      ],
      lists: [
        {
          intro: "Diferencias respecto al SEO familiar:",
          items: [
            "otro ecosistema de enlaces y señales sociales",
            "servicios Baidu en vez de un stack Google",
            "requisitos de localidad más estrictos",
            "filtros y reglas de contenido distintos",
          ],
        },
      ],
    },
    {
      title: "Registro: un enfoque realista",
      level: 2,
      paras: [
        "Camino oficial: una cuenta vía formularios actuales de Baidu, verificación según las reglas del servicio, luego acceso a los productos necesarios (Webmaster y otros). Las UIs y requisitos cambian — sigue la ayuda de Baidu, no guías de 2018–2020.",
        "Los métodos grises («número de otro», saltar checks) arriesgan bloqueos, pérdida de acceso y problemas legales. El negocio necesita acceso transparente y un dueño de cuenta nominado.",
      ],
      lists: [
        {
          intro: "Antes del registro fija:",
          items: [
            "objetivo (marca / leads / tienda)",
            "dominio y hosting alcanzables desde China",
            "editorial en chino",
            "quién posee la cuenta en la empresa",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No publicamos ni recomendamos esquemas para saltar la verificación. Solo canales oficiales.",
        },
      ],
    },
    {
      title: "Baidu Webmaster y el índice",
      level: 2,
      paras: [
        "Webmaster es el panel base: verificación del sitio, sitemap, monitoreo de crawl y errores. Sin él es difícil saber si Baidu ve tus URLs.",
        "Baidu Index estima el interés por consultas (similar en espíritu a herramientas de keywords o trends). Útil para demanda — no como única fuente de semántica.",
      ],
      lists: [
        {
          intro: "Mínimo tras el acceso:",
          items: [
            "verificar el sitio",
            "enviar un sitemap",
            "revisar disponibilidad móvil desde China",
            "mantener un log de errores de indexación",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap",
          href: "/es/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Plataformas de contenido en el ecosistema",
      level: 2,
      paras: [
        "Baidu Baike — artículos enciclopédicos (moderación estricta). Zhidao — Q&A. Tieba — foros de interés. Feng Yun Bang y rankings son más monitoreo de tendencias que un atajo de ranking.",
        "Usa las plataformas para expertise y marca, no spam de anclas idénticas. Las reglas de moderación son más estrictas de lo que sugieren los blogs occidentales.",
      ],
      lists: [
        {
          intro: "Práctica:",
          items: [
            "primero sitio y Webmaster",
            "luego Baike/Zhidao selectivo por nicho",
            "sin auto-relleno de traducción automática",
            "una marca y contactos",
          ],
        },
      ],
    },
    {
      title: "Loop de producto y analítica",
      level: 2,
      paras: [
        "Diseña el funnel dentro de China: messengers, plataformas locales de pago y soporte. El GA occidental puede no estar disponible para la audiencia — usa analítica permitida localmente y logs del servidor.",
        "Arma la semántica para la demanda china — no una copia literal de una lista de keywords en ruso o inglés.",
      ],
      lists: [
        {
          intro: "Checklist de lanzamiento:",
          items: [
            "velocidad desde provincias objetivo",
            "layout móvil",
            "contactos o pagos locales según el modelo de negocio",
            "plan de contenido en chino",
            "presupuesto para soporte continuo, no una «visita» de una sola vez",
          ],
        },
      ],
      links: [
        {
          label: "Set semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Cuándo Baidu no es tu canal",
      level: 2,
      paras: [
        "Si los clientes están fuera de China y no hay oferta china — mejor invertir en Google/Yandex, mapas y contenido en el idioma local. «Registrarse en Baidu por si acaso» casi nunca ayuda.",
        "Si el mercado de la RPC es real — presupuesta un contratista local o estructura legal, no solo un artículo de SEO.",
      ],
      lists: [
        {
          intro: "Banderas rojas de contratista:",
          items: [
            "garantía de primera página en Baidu en una semana",
            "cuentas grises «llave en mano»",
            "sin informe de Webmaster",
            "solo compra de enlaces sin un sitio en China",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Primero alcanzabilidad del sitio desde China e idioma, luego cuentas Baidu — o optimizas el vacío. El crecimiento de rankings sigue llevando meses de trabajo constante tras la preparación.",
        },
      ],
    },
  ],
  related: [
    "karta-sayta",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
    "seo-malyy-biznes",
    "katalogi-saytov",
  ],
};
