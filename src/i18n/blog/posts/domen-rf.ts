import type { BlogPost } from "../../../data/blog";

/** EN overlay for domen-rf — same structure as RU JSON. */
export const domenRfEn: BlogPost = {
  slug: "domen-rf",
  title: "The .рф domain: specifics and promotion",
  date: "2021-05-31",
  category: "SEO",
  cover: "/images/blog/domen-rf/cover-en.webp",
  excerpt:
    "What the .рф zone is, why use a Cyrillic domain, which technical nuances remain, and how to promote the site without the myth that “.рф doesn’t rank.”",
  lead: [
    "The `.рф` zone is a Cyrillic first-level domain (TLD) for Russian-language addresses. The name is easier to type on a Russian keyboard, but tech stacks and email often show punycode.",
    "Below: a short history, common myths, and practical SEO tips. For domain levels in general, see the TLD article.",
  ],
  faq: [
    {
      q: "Is `.рф` worse than `.ru` for Yandex?",
      a: "Not as a rule. Content, tech, links, and demand decide. The zone is one signal, not a sentence.",
    },
    {
      q: "What is punycode?",
      a: "The Latin encoding of a Cyrillic name (it starts with `xn--…`). You’ll see it in certificates, logs, and some emails.",
    },
    {
      q: "Do I need a mirror `.ru`?",
      a: "Often handy: brand on `.рф` plus a familiar `.ru` with a canonical redirect to one address.",
    },
    {
      q: "Is SSL hard to set up for .рф?",
      a: "Modern certificates support IDN. The key is issuing the cert for the punycode/name correctly and setting up HTTPS.",
    },
    {
      q: "Should I put a keyword in `.рф`?",
      a: "A short clear name helps. A long “keyword-with-hyphens” name usually loses to a brand.",
    },
    {
      q: "Can I use `.рф` for email?",
      a: "Technically possible, but not equally convenient in every client and system. Before you launch corporate mail, test send/receive with key contacts.",
    },
    {
      q: "Should I move an existing `.ru` site to `.рф`?",
      a: "Usually no without a strong brand reason. A domain change is a separate migration with 301s, link updates, and temporary-drop risk.",
    },
  ],
  sections: [
    {
      title: "Where the zone came from",
      level: 2,
      paras: [
        "`.рф` is an IDN — domains in national alphabets. The zone was finalized in the late 2000s, and the first user sites opened in 2010.",
        "The idea was a memorable address for a Russian-language brand without switching keyboard layout. Early on, old browsers and punycode confusion hurt; today support in modern browsers and search is widespread, but technical nuances still matter.",
        "Inside systems a Cyrillic name may show as `xn--…`. That’s normal IDN encoding, not a fake-site mark. You’ll meet it in certificates, logs, DNS settings, and some mail apps.",
      ],
    },
    {
      title: "Myths about promotion",
      level: 2,
      paras: [
        "“Cyrillic isn’t indexed” is outdated. “You’ll always lose to `.ru`” isn’t a hard rule. “A keyword in `.рф` = page one” is also a myth: the zone doesn’t replace keyword research, tech quality, and useful pages.",
        "Search engines judge a site by the full mix: intent match, availability, content quality, structure, reputation, and usability. A national zone can be a natural signal for a Russian-language project, but it isn’t a promotion strategy on its own.",
        "Don’t tie a zone change to a promise of fast growth. SEO prep — audit, tech, keywords, copy, and analytics — takes weeks or about a month; visibility across the core set is planned for 2–6 months of work and depends on competition.",
      ],
      lists: [
        {
          intro: "What matters more than the zone:",
          items: [
            "landing quality and the query set",
            "speed, mobile, security",
            "links and brand mentions",
            "a clear canonical URL (one primary mirror)",
          ],
        },
      ],
      links: [
        {
          label: "First-level domain (TLD)",
          href: "/en/blog/domen-pervogo-urovnya/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Choosing a zone is part of site prep. Ranking a commercial keyword set is planned over 2–6 months of work — not a consequence of `.рф` or `.ru`.",
        },
      ],
    },
    {
      title: "Practical tips",
      level: 2,
      paras: [
        "Check how the name looks in email, messengers, CRM, and ad accounts. Punycode can scare beginners, so use one clear spelling in docs and ads and briefly explain it when needed.",
        "IDN certificates are supported by modern CAs, but the name must land correctly in the request and server settings. After issue, check HTTPS in the browser and no mixed content on the site.",
        "In Webmaster and Search Console, add the canonical host. Set one www/non-www and http→https policy, and send alternate domains there with a permanent 301.",
      ],
      lists: [
        {
          intro: "Owner checklist for `.рф`:",
          items: [
            "a short pronounceable name",
            "SSL and one canonical address",
            "if needed — a paired `.ru` with 301",
            "robots/sitemap without surprises",
            "brand in copy and snippets, not only a “keyword” domain",
          ],
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
      title: "Pick a name with the brand in mind",
      level: 2,
      paras: [
        "The domain should be short, pronounceable, and easy to dictate. Check how it looks in the search bar, on a card, in ads, in a voice note, and in an email address. The less spelling you must explain, the better.",
        "A keyword in the name can hint at the topic, but it doesn’t replace a brand or guarantee positions. A long hyphenated city-and-service string is hard to remember and ages fast when the assortment grows.",
        "Check name history, legal risk, and similarity to other trademarks before buying. A pretty domain isn’t worth a future dispute or constant mistyped visits to another brand.",
      ],
      lists: [
        {
          intro: "Before registration ask:",
          items: [
            "is the address easy to say on the phone",
            "does it confuse with a similar word or brand",
            "will it fit future products and regions",
            "are important protective name variants available",
          ],
        },
      ],
    },
    {
      title: "Protect the brand and set redirects",
      level: 2,
      paras: [
        "If budget allows, register a close variant in `.ru` or another relevant TLD so users don’t land on a same-name site. Pick one primary address and don’t host the same site on several domains without redirects.",
        "When moving domains, map URLs in advance: each important page should go to the nearest relevant address, not only the home page. Update canonicals, sitemap, internal links, analytics, and business listings.",
        "Check redirects after go-live and keep the old domain during migration. Cutting the old address abruptly loses users, links, and history.",
      ],
      notes: [
        {
          title: "Don’t confuse timelines",
          kind: "tip",
          text: "A domain change is a technical project with risks — not a quick ranking boost. Prep the migration first, then watch indexing and visibility by cluster.",
        },
      ],
    },
    {
      title: "A practical owner checklist for `.рф`",
      level: 2,
      paras: [
        "The zone itself doesn’t need a special SEO tactic. You need ordinary careful ops: renewal, DNS access, secure HTTPS, backup registrar contacts, and regular checks of key pages.",
        "Every few months confirm the certificate renews, the sitemap is reachable, redirects don’t chain, and mail/forms accept messages. Those basics usually matter more than arguing which zone is “better.”",
        "If the audience hesitates over an unfamiliar address, explain brand benefits and show the URL consistently across channels. Trust comes from a clear site, security, and reputation — not the zone alone.",
      ],
    },
  ],
};

/** ES overlay for domen-rf — same structure as RU JSON / EN. */
export const domenRfEs: BlogPost = {
  slug: "domen-rf",
  title: "El dominio .рф: particularidades y promoción",
  date: "2021-05-31",
  category: "SEO",
  cover: "/images/blog/domen-rf/cover-es.webp",
  excerpt:
    "Qué es la zona .рф, por qué usar un dominio cirílico, qué matices técnicos quedan y cómo promocionar el sitio sin el mito de que «.рф no rankea».",
  lead: [
    "La zona `.рф` es un dominio de primer nivel (TLD) cirílico para direcciones en ruso. El nombre se escribe más fácil con teclado ruso, pero stacks técnicos y email a menudo muestran punycode.",
    "Abajo: un poco de historia, mitos habituales y tips SEO prácticos. Para niveles de dominio en general, ver el artículo de TLD.",
  ],
  faq: [
    {
      q: "¿Es peor `.рф` que `.ru` para Yandex?",
      a: "No como regla. Deciden contenido, técnica, enlaces y demanda. La zona es una señal, no una sentencia.",
    },
    {
      q: "¿Qué es el punycode?",
      a: "La codificación latina de un nombre cirílico (empieza por `xn--…`). Lo verás en certificados, logs y algunos emails.",
    },
    {
      q: "¿Hace falta un espejo `.ru`?",
      a: "A menudo conviene: marca en `.рф` más un `.ru` familiar con redirect canónico a una sola dirección.",
    },
    {
      q: "¿Es difícil montar SSL en .рф?",
      a: "Los certificados modernos soportan IDN. La clave es emitir el cert para el punycode/nombre bien y configurar HTTPS.",
    },
    {
      q: "¿Debo meter una keyword en `.рф`?",
      a: "Un nombre corto y claro ayuda. Un «keyword-con-guiones» largo suele perder frente a una marca.",
    },
    {
      q: "¿Se puede usar `.рф` para email?",
      a: "Técnicamente sí, pero no es igual de cómodo en todos los clientes y sistemas. Antes de lanzar correo corporativo, prueba envío/recepción con contactos clave.",
    },
    {
      q: "¿Debo migrar un sitio `.ru` existente a `.рф`?",
      a: "Normalmente no sin un motivo de marca fuerte. Un cambio de dominio es una migración aparte con 301s, actualización de enlaces y riesgo de caída temporal.",
    },
  ],
  sections: [
    {
      title: "De dónde salió la zona",
      level: 2,
      paras: [
        "`.рф` es un IDN — dominios en alfabetos nacionales. La zona se cerró a finales de los 2000 y los primeros sitios de usuarios abrieron en 2010.",
        "La idea: una dirección memorable para una marca en ruso sin cambiar el layout del teclado. Al principio, navegadores viejos y confusión con punycode molestaban; hoy el soporte en navegadores y búsqueda modernos es amplio, pero los matices técnicos siguen importando.",
        "Dentro de los sistemas un nombre cirílico puede verse como `xn--…`. Es encoding IDN normal, no marca de sitio falso. Lo verás en certificados, logs, ajustes DNS y algunas apps de correo.",
      ],
    },
    {
      title: "Mitos sobre la promoción",
      level: 2,
      paras: [
        "«Lo cirílico no se indexa» está desfasado. «Siempre perderás frente a `.ru`» no es regla dura. «Keyword en `.рф` = primera página» también es mito: la zona no sustituye research de keywords, calidad técnica ni páginas útiles.",
        "Los buscadores juzgan el sitio por el mix completo: match de intent, disponibilidad, calidad de contenido, estructura, reputación y usabilidad. Una zona nacional puede ser señal natural para un proyecto en ruso, pero no es estrategia de promoción por sí sola.",
        "No amarras un cambio de zona a la promesa de crecimiento rápido. La prep SEO — auditoría, técnica, keywords, copy y analytics — lleva semanas o alrededor de un mes; la visibilidad del set core se planifica en 2–6 meses de trabajo y depende de la competencia.",
      ],
      lists: [
        {
          intro: "Qué importa más que la zona:",
          items: [
            "calidad de landings y set de queries",
            "velocidad, móvil, seguridad",
            "enlaces y menciones de marca",
            "URL canónica clara (un espejo primario)",
          ],
        },
      ],
      links: [
        {
          label: "Dominio de primer nivel (TLD)",
          href: "/es/blog/domen-pervogo-urovnya/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Elegir zona forma parte de la preparación del sitio. Rankear un set comercial de keywords se planifica en 2–6 meses de trabajo — no es consecuencia de `.рф` o `.ru`.",
        },
      ],
    },
    {
      title: "Tips prácticos",
      level: 2,
      paras: [
        "Comprueba cómo se ve el nombre en email, messengers, CRM y cuentas de ads. El punycode puede asustar a principiantes: usa una ortografía clara en docs y ads y explícala en breve cuando haga falta.",
        "Los certificados IDN los soportan las CAs modernas, pero el nombre debe entrar bien en la solicitud y en el servidor. Tras emitir, revisa HTTPS en el navegador y que no haya mixed content en el sitio.",
        "En Webmaster y Search Console, añade el host canónico. Fija una política www/sin-www y http→https, y manda allí los dominios alternos con un 301 permanente.",
      ],
      lists: [
        {
          intro: "Checklist del dueño para `.рф`:",
          items: [
            "nombre corto y pronunciable",
            "SSL y una dirección canónica",
            "si hace falta — un `.ru` emparejado con 301",
            "robots/sitemap sin sorpresas",
            "marca en copy y snippets, no solo un dominio «keyword»",
          ],
        },
      ],
      links: [
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
      ],
    },
    {
      title: "Elige el nombre pensando en la marca",
      level: 2,
      paras: [
        "El dominio debe ser corto, pronunciable y fácil de dictar. Mira cómo queda en la barra de búsqueda, en una tarjeta, en ads, en una nota de voz y en un email. Cuanto menos ortografía tengas que explicar, mejor.",
        "Una keyword en el nombre puede sugerir el tema, pero no sustituye una marca ni garantiza posiciones. Una cadena larga con guiones de ciudad-y-servicio cuesta recordar y envejece rápido cuando crece el surtido.",
        "Revisa historial del nombre, riesgo legal y similitud con otras marcas antes de comprar. Un dominio bonito no vale una disputa futura ni visitas mal tipeadas a otra marca.",
      ],
      lists: [
        {
          intro: "Antes de registrar pregunta:",
          items: [
            "¿se dice fácil por teléfono?",
            "¿se confunde con una palabra o marca parecida?",
            "¿encaja con productos y regiones futuros?",
            "¿hay variantes protectoras importantes disponibles?",
          ],
        },
      ],
    },
    {
      title: "Protege la marca y monta redirects",
      level: 2,
      paras: [
        "Si el presupuesto lo permite, registra una variante cercana en `.ru` u otro TLD relevante para que el usuario no caiga en un sitio homónimo. Elige una dirección primaria y no alojes el mismo sitio en varios dominios sin redirects.",
        "Al cambiar de dominio, mapea URLs de antemano: cada página importante debe ir a la dirección más cercana relevante, no solo a la home. Actualiza canonicals, sitemap, enlaces internos, analytics y listados de negocio.",
        "Revisa redirects tras el go-live y mantén el dominio viejo durante la migración. Cortar la dirección antigua de golpe pierde usuarios, enlaces e historial.",
      ],
      notes: [
        {
          title: "No mezcles plazos",
          kind: "tip",
          text: "Un cambio de dominio es un proyecto técnico con riesgos — no un impulso rápido de ranking. Primero prepara la migración; luego mira indexación y visibilidad por cluster.",
        },
      ],
    },
    {
      title: "Checklist práctico del dueño para `.рф`",
      level: 2,
      paras: [
        "La zona en sí no pide una táctica SEO especial. Hace falta ops cuidadosa de siempre: renovación, acceso DNS, HTTPS seguro, contactos de respaldo en el registrador y revisiones periódicas de páginas clave.",
        "Cada pocos meses confirma que el certificado se renueva, el sitemap es alcanzable, los redirects no encadenan y correo/formularios aceptan mensajes. Esas bases suelen pesar más que discutir qué zona es «mejor».",
        "Si la audiencia duda ante una dirección poco familiar, explica los beneficios de marca y muestra la URL de forma consistente en todos los canales. La confianza viene de un sitio claro, seguridad y reputación — no de la zona sola.",
      ],
    },
  ],
};
