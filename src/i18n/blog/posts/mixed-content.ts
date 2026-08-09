import type { BlogPost } from "../../../data/blog";

/** EN overlay for mixed-content — same structure as RU JSON. */
export const mixedContentEn: BlogPost = {
  slug: "mixed-content",
  title: "Mixed content: HTTP on an HTTPS site and SEO",
  date: "2020-03-02",
  category: "Content marketing",
  cover: "/images/blog/mixed-content/cover-en.webp",
  excerpt:
    "What mixed content is on an HTTPS site: active and passive HTTP assets, how it hurts, how to find it in DevTools, and how to fix it — without treating the green padlock as gospel or relying on outdated Chrome screenshots.",
  lead: [
    "Mixed content is when a page opens over HTTPS but some resources (images, scripts, styles, iframes) load over HTTP. The browser warns and blocks active content — layout and trust break.",
    "Below: types of mixed content, SEO impact via UX, and how to fix it. Moving to HTTPS and certificate types are in related articles; the focus here is holes after the move.",
  ],
  faq: [
    {
      q: "Is mixed content a separate ranking factor?",
      a: "There’s no direct “mixed content score.” It hurts via blocks, warnings, bounce, and messy mirror indexing. Clean HTTPS is hygiene.",
    },
    {
      q: "How does active differ from passive?",
      a: "Passive — images, video, fonts (often a warning). Active — scripts, CSS, iframes (more often blocked and higher risk).",
    },
    {
      q: "Are relative URLs (/img/a.jpg) a problem?",
      a: "Usually no: they inherit the page protocol. Absolute http:// and hard-coded URLs in CSS/JS break things.",
    },
    {
      q: "Is an auto-replace plugin enough?",
      a: "Sometimes as a crutch. More reliable: fix sources — CDN/hosting with HTTPS, update templates and content. Backup before mass edits.",
    },
    {
      q: "Will Cloudflare Automatic HTTPS Rewrites fix everything?",
      a: "It helps if the resource is actually available over HTTPS. Simple rewriting won’t save something that isn’t reachable on https.",
    },
    {
      q: "How does it relate to SSL and the HTTPS move?",
      a: "A certificate ≠ a clean page. After 301 to https, check templates for mixed content — see the HTTPS/SEO and SSL pieces.",
    },
  ],
  sections: [
    {
      title: "What counts as mixed content",
      level: 2,
      paras: [
        "An https://… page pulls an http://… resource. Passive: img, picture, video/audio, object subresources, fonts in CSS. Active: script, stylesheet link, iframe, some object uses.",
        "Active is more dangerous: browsers block it more often, and it’s easier to alter page behavior via MitM on the HTTP piece.",
      ],
    },
    {
      title: "How it hurts SEO and conversion",
      level: 2,
      paras: [
        "Warnings and blocks hurt UX: “Not secure,” empty blocks, broken forms. People leave — behavior signals and leads suffer.",
        "Don’t confuse this with the myth that fixing mixed content alone puts you on page one. Fix the tech; rankings grow from relevance and demand, not from one padlock in the address bar.",
      ],
      links: [
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
        {
          label: "Behavioral factors",
          href: "/en/blog/povedencheskie-faktory/",
        },
      ],
    },
    {
      title: "How to find it",
      level: 2,
      paras: [
        "Open the problem page → DevTools (F12) → Console / Security: Mixed Content warnings and the URL list.",
        "Check key templates: home, product card, cart, contacts, blog. External widgets and old absolute links in content are common culprits.",
      ],
    },
    {
      title: "How to remove it",
      level: 2,
      paras: [
        "Replace http:// with https:// where the resource is available over HTTPS, or move the file to yourself/a CDN with TLS.",
        "Update internal absolute links in the DB and templates. In CSS/JS hunt hard-coded http URLs. If HTTPS isn’t available — remove or replace.",
      ],
      lists: [
        {
          intro: "Checklist after fixes:",
          items: [
            "Console clean of mixed content on key URLs",
            "forms and analytics/payment scripts work",
            "canonical and sitemap are https-only",
            "no http↔https chains on internal links",
          ],
        },
      ],
      links: [
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
      notes: [
        {
          title: "Browser UI",
          kind: "tip",
          text: "Padlock / Not secure icons change. The guide is no mixed content and a valid certificate — not a 2020 screenshot.",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "HTTPS page + HTTP resources = mixed content.",
        "Sources and templates first, CDN crutches second.",
        "This is trust and UX hygiene — not a page-one button.",
      ],
    },
  ],
  closing: [
    "Walk five commercial URLs in DevTools: if Console is silent about Mixed Content — the HTTPS move is finished; if not — fix resource URLs before fine-tuning snippets.",
  ],
  related: [
    "https-seo",
    "ssl-sertifikat",
    "tehnicheskiy-seo-audit",
    "pered-zapuskom-sayta",
    "seo-oshibki",
    "povedencheskie-faktory",
  ],
};

/** ES overlay for mixed-content — same structure as RU JSON / EN. */
export const mixedContentEs: BlogPost = {
  slug: "mixed-content",
  title: "Mixed content: HTTP en un sitio HTTPS y SEO",
  date: "2020-03-02",
  category: "Content marketing",
  cover: "/images/blog/mixed-content/cover.webp",
  excerpt:
    "Qué es el mixed content en un sitio HTTPS: assets HTTP activos y pasivos, cómo duele, cómo encontrarlo en DevTools y cómo arreglarlo — sin tomar el candado verde como evangelio ni apoyarse en capturas viejas de Chrome.",
  lead: [
    "Mixed content es cuando una página abre por HTTPS pero algunos recursos (imágenes, scripts, estilos, iframes) cargan por HTTP. El navegador avisa y bloquea el contenido activo — se rompen layout y confianza.",
    "Abajo: tipos de mixed content, impacto SEO vía UX y cómo arreglarlo. El paso a HTTPS y tipos de certificado están en artículos relacionados; aquí el foco son los agujeros tras la mudanza.",
  ],
  faq: [
    {
      q: "¿El mixed content es un factor de ranking aparte?",
      a: "No hay un «score de mixed content» directo. Duele vía bloqueos, avisos, bounce e indexación sucia de espejos. HTTPS limpio es higiene.",
    },
    {
      q: "¿En qué se diferencia activo de pasivo?",
      a: "Pasivo — imágenes, vídeo, fonts (a menudo un aviso). Activo — scripts, CSS, iframes (más a menudo bloqueado y más riesgo).",
    },
    {
      q: "¿Las URLs relativas (/img/a.jpg) son un problema?",
      a: "Normalmente no: heredan el protocolo de la página. Los `http://` absolutos y las URLs hardcodeadas en CSS/JS rompen las cosas.",
    },
    {
      q: "¿Basta un plugin de auto-reemplazo?",
      a: "A veces como muleta. Más fiable: arreglar fuentes — CDN/hosting con HTTPS, actualizar plantillas y contenido. Backup antes de ediciones masivas.",
    },
    {
      q: "¿Cloudflare Automatic HTTPS Rewrites lo arregla todo?",
      a: "Ayuda si el recurso está de verdad disponible por HTTPS. Un rewrite simple no salva lo que no es alcanzable en https.",
    },
    {
      q: "¿Cómo se relaciona con SSL y el paso a HTTPS?",
      a: "Un certificado ≠ una página limpia. Tras el 301 a https, revisa plantillas por mixed content — ver las piezas HTTPS/SEO y SSL.",
    },
  ],
  sections: [
    {
      title: "Qué cuenta como mixed content",
      level: 2,
      paras: [
        "Una página https://… tira de un recurso http://…. Pasivo: img, picture, video/audio, subrecursos object, fonts en CSS. Activo: script, link de stylesheet, iframe, algunos usos de object.",
        "Lo activo es más peligroso: los navegadores lo bloquean más a menudo, y es más fácil alterar el comportamiento de la página vía MitM en el trozo HTTP.",
      ],
    },
    {
      title: "Cómo duele al SEO y a la conversión",
      level: 2,
      paras: [
        "Avisos y bloqueos dañan la UX: «Not secure», bloques vacíos, formularios rotos. La gente se va — sufren señales de comportamiento y leads.",
        "No lo confundas con el mito de que arreglar mixed content solo te pone en primera página. Arregla la técnica; los rankings crecen por relevancia y demanda, no por un candado en la barra de dirección.",
      ],
      links: [
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
        {
          label: "Factores de comportamiento",
          href: "/es/blog/povedencheskie-faktory/",
        },
      ],
    },
    {
      title: "Cómo encontrarlo",
      level: 2,
      paras: [
        "Abre la página problemática → DevTools (F12) → Console / Security: avisos Mixed Content y la lista de URLs.",
        "Revisa plantillas clave: home, ficha de producto, carrito, contactos, blog. Widgets externos y enlaces absolutos viejos en el contenido son culpables habituales.",
      ],
    },
    {
      title: "Cómo quitarlo",
      level: 2,
      paras: [
        "Sustituye http:// por https:// donde el recurso esté disponible por HTTPS, o mueve el archivo a tu hosting/CDN con TLS.",
        "Actualiza enlaces absolutos internos en la DB y plantillas. En CSS/JS caza URLs http hardcodeadas. Si HTTPS no está disponible — quita o sustituye.",
      ],
      lists: [
        {
          intro: "Checklist tras los arreglos:",
          items: [
            "Console limpia de mixed content en URLs clave",
            "formularios y scripts de analytics/pago funcionan",
            "canonical y sitemap solo https",
            "sin cadenas http↔https en enlaces internos",
          ],
        },
      ],
      links: [
        {
          label: "Certificado SSL",
          href: "/es/blog/ssl-sertifikat/",
        },
      ],
      notes: [
        {
          title: "UI del navegador",
          kind: "tip",
          text: "Los iconos de candado / Not secure cambian. La guía es: sin mixed content y certificado válido — no una captura de 2020.",
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Página HTTPS + recursos HTTP = mixed content.",
        "Primero fuentes y plantillas; después muletas de CDN.",
        "Esto es higiene de confianza y UX — no un botón de primera página.",
      ],
    },
  ],
  closing: [
    "Recorre cinco URLs comerciales en DevTools: si Console calla sobre Mixed Content — el paso a HTTPS está cerrado; si no — arregla URLs de recursos antes de afinar snippets.",
  ],
  related: [
    "https-seo",
    "ssl-sertifikat",
    "tehnicheskiy-seo-audit",
    "pered-zapuskom-sayta",
    "seo-oshibki",
    "povedencheskie-faktory",
  ],
};
