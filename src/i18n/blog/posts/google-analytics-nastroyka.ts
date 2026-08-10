import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-analytics-nastroyka — same structure as RU JSON. */
export const googleAnalyticsNastroykaEn: BlogPost = {
  slug: "google-analytics-nastroyka",
  title: "How to set up Google Analytics 4: a beginner’s guide",
  date: "2019-08-15",
  category: "Digital marketing",
  cover: "/images/blog/google-analytics-nastroyka/cover-en.webp",
  excerpt:
    "Basic GA4 setup: account, property, data stream, tag or GTM install, DebugView checks, and what to turn on next — without Universal Analytics screenshots.",
  lead: [
    "To see traffic and events you need a Google account, a GA4 property, a website data stream, and a tag on your pages. Old guides about “UA-XXXX and views” are outdated — below is GA4 logic for beginners.",
    "The Analytics UI moves — lean on Google Help and the meaning of each step. Goals / key events, ecommerce, and UA differences live in neighboring articles.",
  ],
  faq: [
    {
      q: "Should I still set up Universal Analytics?",
      a: "Not as the foundation. Create GA4. Skip old instructions with “views” and analytics.js.",
    },
    {
      q: "Code in `<head>` or Google Tag Manager?",
      a: "Both work. GTM is easier when you have many tags (Ads, pixels, events). For one counter, gtag.js on the site is fine.",
    },
    {
      q: "How many properties can I create?",
      a: "Account and property limits are in current Google Help. At the start — one GA4 property per site (or a site+app pair if that’s the job).",
    },
    {
      q: "When does data show up?",
      a: "Realtime / DebugView — almost immediately after a correct install. Full reports lag; don’t expect “like yesterday in UA” in the first minute.",
    },
    {
      q: "Do I need cookie consent?",
      a: "Yes — follow your privacy policy and regional consent rules. Don’t put personal data in event parameters.",
    },
  ],
  sections: [
    {
      title: "Account, property, and data stream",
      level: 2,
      paras: [
        "Sign in to Google Analytics → create an account (your company) → a GA4 property → a Web data stream with the site URL and a stream name.",
        "Set report time zone and currency with intent — they define day boundaries and money in ecommerce. Industry and business size feed Google’s tips, not magic accuracy.",
      ],
      lists: [
        {
          intro: "Hierarchy in short:",
          items: [
            "account — the organization",
            "GA4 property — the data container",
            "stream — site or app",
            "measurement ID (G-XXXX) — for the tag",
          ],
        },
      ],
      links: [
        {
          label: "What changed in GA4",
          href: "/en/blog/ga4/",
        },
      ],
    },
    {
      title: "Putting the tag on the site",
      level: 2,
      paras: [
        "Option A: paste the global gtag.js snippet (or the wizard’s code) on every page, usually in `<head>`. On a CMS — via theme, plugin, or GTM, not “homepage only.”",
        "Option B: Google Tag Manager — container on the site, then a GA4 Configuration / Google tag with the stream ID. Easier to add events without editing code every time.",
        "Confirm HTTPS has no mixed content and the tag isn’t firing twice (double page_view wrecks reports).",
      ],
      lists: [
        {
          intro: "Install checks:",
          items: [
            "Realtime shows you on the site",
            "DebugView sees events while debugging",
            "no second identical counter",
            "internal IPs can be excluded later",
          ],
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
      ],
    },
    {
      title: "What to turn on right after install",
      level: 2,
      paras: [
        "In the stream, enable enhanced measurement on purpose (page views, scroll, outbound clicks, site search — as needed). Link Google Ads if you run ads; remarketing and Google signals only within consent and policy.",
        "Next: key events (conversions), ecommerce events for a store, internal traffic filters. Don’t wire User-ID and complex cross-domain “just in case” without a real job.",
      ],
      lists: [
        {
          intro: "Beginner order:",
          items: [
            "tag works in Realtime",
            "2–5 key events marked",
            "the team has property access",
            "cookie / consent policy covered",
            "plan: ecommerce or goals — via the links below",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t blindly migrate session settings and “views” from Universal Analytics. GA4 is another model: events and parameters — not old UA goals one-to-one.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Goals and key events",
          href: "/en/blog/google-analytics-tseli/",
        },
        {
          label: "GA for an online store",
          href: "/en/blog/google-analytics/",
        },
      ],
    },
  ],
  closing: [
    "For a beginner it’s enough: a GA4 property, a web stream, one correct tag (or GTM), a Realtime check, and a couple of key events. Then grow ecommerce and segments — don’t copy guides from the UA era.",
  ],
  related: [
    "ga4",
    "google-analytics-tseli",
    "google-analytics",
    "google-tag-manager",
    "utm-metki",
    "metrika-ustanovka",
  ],
};

/** ES overlay for google-analytics-nastroyka — same structure as RU JSON / EN. */
export const googleAnalyticsNastroykaEs: BlogPost = {
  slug: "google-analytics-nastroyka",
  title: "Cómo configurar Google Analytics 4: guía para principiantes",
  date: "2019-08-15",
  category: "Digital marketing",
  cover: "/images/blog/google-analytics-nastroyka/cover-es.webp",
  excerpt:
    "Setup básico de GA4: cuenta, property, data stream, instalación con tag o GTM, comprobaciones en DebugView y qué activar después — sin screenshots de Universal Analytics.",
  lead: [
    "Para ver tráfico y eventos necesitas una cuenta Google, una property GA4, un data stream del sitio y un tag en tus páginas. Las guías viejas sobre «UA-XXXX y vistas» están obsoletas — abajo va la lógica GA4 para principiantes.",
    "La UI de Analytics se mueve — apóyate en la Ayuda de Google y en el sentido de cada paso. Goals / key events, ecommerce y diferencias con UA viven en artículos vecinos.",
  ],
  faq: [
    {
      q: "¿Debo seguir configurando Universal Analytics?",
      a: "No como base. Crea GA4. Salta instrucciones viejas con «vistas» y analytics.js.",
    },
    {
      q: "¿Código en `<head>` o Google Tag Manager?",
      a: "Ambos valen. GTM es más fácil cuando hay muchos tags (Ads, píxeles, eventos). Para un solo contador, gtag.js en el sitio está bien.",
    },
    {
      q: "¿Cuántas properties puedo crear?",
      a: "Los límites de cuenta y property están en la Ayuda actual de Google. Al empezar — una property GA4 por sitio (o un par sitio+app si ese es el trabajo).",
    },
    {
      q: "¿Cuándo aparecen los datos?",
      a: "Realtime / DebugView — casi al momento tras una instalación correcta. Los informes completos van con lag; no esperes «como ayer en UA» en el primer minuto.",
    },
    {
      q: "¿Necesito consentimiento de cookies?",
      a: "Sí — sigue tu política de privacidad y las reglas regionales de consentimiento. No pongas datos personales en parámetros de eventos.",
    },
  ],
  sections: [
    {
      title: "Cuenta, property y data stream",
      level: 2,
      paras: [
        "Entra en Google Analytics → crea una cuenta (tu empresa) → una property GA4 → un data stream Web con la URL del sitio y un nombre de stream.",
        "Define zona horaria de informes y moneda con intención — marcan los límites del día y el dinero en ecommerce. Industria y tamaño del negocio alimentan tips de Google, no precisión mágica.",
      ],
      lists: [
        {
          intro: "Jerarquía en corto:",
          items: [
            "cuenta — la organización",
            "property GA4 — el contenedor de datos",
            "stream — sitio o app",
            "measurement ID (G-XXXX) — para el tag",
          ],
        },
      ],
      links: [
        {
          label: "Qué cambió en GA4",
          href: "/es/blog/ga4/",
        },
      ],
    },
    {
      title: "Poner el tag en el sitio",
      level: 2,
      paras: [
        "Opción A: pega el snippet global gtag.js (o el código del wizard) en cada página, normalmente en `<head>`. En un CMS — vía tema, plugin o GTM, no «solo en la home».",
        "Opción B: Google Tag Manager — contenedor en el sitio, luego un GA4 Configuration / Google tag con el ID del stream. Más fácil añadir eventos sin editar código cada vez.",
        "Confirma que HTTPS no tenga mixed content y que el tag no dispare dos veces (page_view doble destroza los informes).",
      ],
      lists: [
        {
          intro: "Comprobaciones de instalación:",
          items: [
            "Realtime te muestra en el sitio",
            "DebugView ve eventos mientras depuras",
            "sin un segundo contador idéntico",
            "las IPs internas se pueden excluir después",
          ],
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/es/blog/google-tag-manager/",
        },
      ],
    },
    {
      title: "Qué activar justo después de instalar",
      level: 2,
      paras: [
        "En el stream, activa enhanced measurement a propósito (page views, scroll, clics salientes, búsqueda del sitio — según haga falta). Vincula Google Ads si haces ads; remarketing y Google signals solo dentro de consentimiento y política.",
        "Siguiente: key events (conversiones), eventos de ecommerce para una tienda, filtros de tráfico interno. No cables User-ID y cross-domain complejo «por si acaso» sin un trabajo real.",
      ],
      lists: [
        {
          intro: "Orden para principiantes:",
          items: [
            "el tag funciona en Realtime",
            "2–5 key events marcados",
            "el equipo tiene acceso a la property",
            "política de cookies / consentimiento cubierta",
            "plan: ecommerce o goals — vía los enlaces de abajo",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          text: "No migres a ciegas ajustes de sesión y «vistas» de Universal Analytics. GA4 es otro modelo: eventos y parámetros — no goals UA viejos uno a uno.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Goals y key events",
          href: "/es/blog/google-analytics-tseli/",
        },
        {
          label: "GA para una tienda online",
          href: "/es/blog/google-analytics/",
        },
      ],
    },
  ],
  closing: [
    "Para un principiante basta: una property GA4, un stream web, un tag correcto (o GTM), una comprobación en Realtime y un par de key events. Luego crece ecommerce y segmentos — no copies guías de la era UA.",
  ],
  related: [
    "ga4",
    "google-analytics-tseli",
    "google-analytics",
    "google-tag-manager",
    "utm-metki",
    "metrika-ustanovka",
  ],
};
