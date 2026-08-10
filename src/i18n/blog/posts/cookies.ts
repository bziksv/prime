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

/** ES overlay for cookies — same structure as RU JSON / EN. */
export const cookiesEs: BlogPost = {
  slug: "cookies",
  title: "Cookies del navegador: para qué sirven, cómo funcionan y seguridad",
  date: "2020-08-31",
  category: "SEO",
  cover: "/images/blog/cookies/cover-es.webp",
  excerpt:
    "Qué es una cookie, en qué se diferencian sesión, persistentes y de terceros, por qué el sitio necesita analytics y auth, riesgos de privacidad y cómo gestionar el consentimiento.",
  lead: [
    "Una cookie es un dato pequeño que el sitio guarda en el navegador para reconocerte en peticiones posteriores: sesión de login, idioma, carrito, IDs de analytics. No es un virus, pero tampoco polvo inocuo — con cookies se construyen perfiles y se mantiene la sesión iniciada.",
    "Abajo: propósito, tipos, escenarios de tracking, seguridad y qué debe planear el dueño del sitio (consentimiento, HTTPS, caducidad). Importante: las cookies casi nunca guardan la contraseña en texto claro — solo tokens o IDs.",
  ],
  faq: [
    {
      q: "¿Las cookies guardan mi contraseña?",
      a: "En sitios bien hechos — no. Guardan un ID de sesión o un token. Si un servicio mete la contraseña en una cookie, es mala práctica y un riesgo.",
    },
    {
      q: "¿Cuál es la diferencia entre session y persistent?",
      a: "Las de sesión viven hasta cerrar el navegador (a grosso modo). Las persistentes hasta Expires / Max-Age.",
    },
    {
      q: "¿Qué es una cookie de terceros?",
      a: "La pone un dominio distinto al del sitio que abriste (a menudo ads o widgets). Los navegadores las van cerrando cada vez más.",
    },
    {
      q: "¿Para qué necesita cookies un sitio?",
      a: "Login, carrito, tests A/B, analytics, personalización, antifraude. Sin ellas muchos servicios «olvidan» al usuario.",
    },
    {
      q: "¿Son peligrosas las cookies?",
      a: "Riesgos: robo de sesión (XSS), manipulación (sin Secure/HttpOnly) y tracking. Se mitigan con higiene técnica y hábitos del usuario.",
    },
    {
      q: "¿Hace falta un banner de consentimiento?",
      a: "Depende de la jurisdicción y de qué tags pongas. En Rusia — ley de datos personales y tu política; en la UE — GDPR/ePrivacy. Abogado más cookies estrictamente necesarias.",
    },
    {
      q: "¿Cómo veo las cookies?",
      a: "DevTools → Application/Storage → Cookies. O ajustes del navegador: lista de sitios y borrar.",
    },
    {
      q: "¿Bloquear cookies rompe el sitio?",
      a: "A menudo sí para carrito y cuenta. En una web de brochure — menos. Ofrece un fallback y un mensaje honesto.",
    },
  ],
  sections: [
    {
      title: "Para qué sirven las cookies",
      level: 2,
      paras: [
        "El servidor (o un script) envía el header `Set-Cookie`; el navegador guarda un par nombre=valor y lo reenvía en peticiones posteriores a ese dominio. Así el sitio reconoce la sesión sin pedir login en cada página.",
        "Tareas típicas: auth, carrito, idioma/moneda, «ya viste el banner», IDs de analytics (con consentimiento cuando toque).",
      ],
      lists: [
        {
          intro: "En corto:",
          items: [
            "datos en el navegador, no un programa",
            "ligadas a dominio y path",
            "tienen caducidad y flags de seguridad",
            "no sustituyen del todo la sesión en servidor",
          ],
        },
      ],
    },
    {
      title: "Cookies de tracking y marketing",
      level: 2,
      paras: [
        "Redes de ads y widgets ponen IDs para unir visitas entre sitios (mientras vivan las third-party) o con otras técnicas. Para el usuario es personalización y retargeting; para el negocio — atribución, pero también deber de transparencia.",
        "La analytics first-party en tu propio dominio suele ser más predecible en la era de límites a terceros.",
      ],
      lists: [
        {
          intro: "Para el dueño del sitio:",
          items: [
            "inventario de cada tag",
            "política de cookies en lenguaje claro",
            "no cargar marketing antes del consentimiento si el régimen lo exige",
            "minimizar scripts de terceros",
          ],
        },
      ],
      links: [
        {
          label: "Instalar Yandex Metrika",
          href: "/es/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Seguridad y flags",
      level: 2,
      paras: [
        "HttpOnly — JS no puede leer la cookie (protege del robo de sesión vía XSS). Secure — solo HTTPS. SameSite — limita el envío desde otros sitios (CSRF). Una sesión corta reduce el daño si hay fuga.",
        "Para usuarios: no quedarte logueado en PCs compartidos, actualiza el navegador, cuidado con las extensiones, no metas contraseñas en páginas HTTP.",
      ],
      lists: [
        {
          intro: "Riesgos:",
          items: [
            "XSS → cookie de sesión robada",
            "MITM en HTTP sin Secure",
            "phishing más reutilizar la sesión",
            "terceros de más con acceso amplio",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Escribir que las cookies «guardan login y contraseña». La práctica normal es un token de sesión; el servidor guarda la contraseña (hasheada).",
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
      title: "Privacidad y ley",
      level: 2,
      paras: [
        "Las cookies pueden relacionarse con datos personales si identifican al usuario. Hace falta política, base de tratamiento e interfaz de control donde la ley y el sentido común lo pidan.",
        "No copies un banner «Accept all» ajeno sin bloquear de verdad los tags opcionales — solo molesta y no quita el riesgo.",
      ],
      lists: [
        {
          intro: "Mínimo del sitio:",
          items: [
            "página de política de cookies/privacidad",
            "separación necesarias vs opcionales",
            "forma de retirar el consentimiento",
            "registro de qué tags se ponen de verdad",
          ],
        },
      ],
    },
    {
      title: "Cómo gestionarlas en el navegador",
      level: 2,
      paras: [
        "En ajustes: ver, borrar por sitio, bloquear de terceros. DevTools muestra nombre, dominio, caducidad, tamaño. Borrar cookies te desloguea y vacía carritos — es normal.",
        "Las extensiones bloqueadoras cortan trackers pero pueden romper checkout y chats — prueba los flujos críticos.",
      ],
      lists: [
        {
          intro: "Checklist del usuario:",
          items: [
            "revisar cookies en sitios dudosos",
            "cerrar sesión en dispositivos ajenos",
            "no desactivar todo en bancos o servicios oficiales sin necesidad",
            "mantener OS y navegador al día",
          ],
        },
      ],
    },
    {
      title: "Práctica para el webmaster",
      level: 2,
      paras: [
        "Documenta la lista de cookies (nombre, propósito, caducidad, quién las pone). Cookies de sesión — HttpOnly + Secure + SameSite según haga falta. No hinches la vida a «10 años» sin motivo.",
        "Tras lanzar un CMP/banner, verifica que analytics y ads esperan de verdad al consentimiento. Revisa Metrika/GA por pérdida de datos.",
      ],
      lists: [
        {
          intro: "Checklist de release:",
          items: [
            "tabla de cookies en la política",
            "flags en cookies de auth",
            "test de login/carrito",
            "test «rechazar opcionales»",
            "monitor de errores de tags",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Menos scripts de terceros — menos cookies, política más simple, sitio más rápido.",
        },
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/es/blog/bezopasnost-sayta/",
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
