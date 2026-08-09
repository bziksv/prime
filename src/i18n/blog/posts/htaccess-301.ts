import type { BlogPost } from "../../../data/blog";

/** EN overlay for htaccess-301 — same structure as RU JSON. */
export const htaccess301En: BlogPost = {
  slug: "htaccess-301",
  title: "301 redirects in .htaccess: common rules",
  date: "2021-04-16",
  category: "SEO",
  cover: "/images/blog/htaccess-301/cover-en.webp",
  excerpt:
    "Practical permanent 301 examples in Apache .htaccess: https, www, trailing slash, page and domain moves — plus when a redirect isn’t needed.",
  lead: [
    "On Apache, `.htaccess` is often used for permanent 301s: merge mirrors, move a URL, strip leftover tails. A bad rule can take the site down — edit with a backup.",
    "Below: typical scenarios and cautions. Theory of 301/302 codes lives in the redirect piece; nginx uses different syntax.",
  ],
  faq: [
    {
      q: "Where does .htaccess live?",
      a: "Usually in the site root (or the virtual host directory). Not every host enables `AllowOverride`.",
    },
    {
      q: "Will these rules work on nginx?",
      a: "Not as-is. On nginx you write `return 301` / `rewrite` in the server config.",
    },
    {
      q: "Should the examples use 301 or 302?",
      a: "For permanent moves — 301. Temporary promos — 302/307.",
    },
    {
      q: "Can you paste rules in a batch?",
      a: "Carefully: order matters, loops are easy. Test one at a time.",
    },
    {
      q: "Should I redirect instead of deleting a page?",
      a: "If there’s a close-in-meaning URL — yes. If the topic is gone — better 404/410 than everything to home.",
    },
    {
      q: "How do I check the status code?",
      a: "Open response headers via DevTools, `curl -I`, or a checker. Test the original URL without a browser-cached redirect.",
    },
  ],
  sections: [
    {
      title: "When you need a 301",
      level: 2,
      paras: [
        "Slug changes, section moves, http→https and www/non-www merge, domain migration. Goal — one canonical address without chains.",
      ],
      lists: [
        {
          intro: "Signs it’s time:",
          items: [
            "old URLs in Webmaster with 404 after a move",
            "two mirrors in the index",
            "external links to outdated paths",
          ],
        },
      ],
      links: [
        {
          label: "Redirect: 301 and 302",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Typical rules",
      level: 2,
      paras: [
        "Enable `RewriteEngine On` and write conditions + `RewriteRule` with `[R=301,L]`. Exact syntax depends on the directory and `RewriteBase`.",
        "Idea examples (don’t copy blindly): force https; www→non-www (or reverse); one page URL to a new path; `domain-old` → `domain-new` keeping the path.",
      ],
      lists: [
        {
          intro: "Before going live:",
          items: [
            "backup the current `.htaccess`",
            "test on staging",
            "check chains (one hop)",
            "verify with `curl -I` or similar",
          ],
        },
      ],
      notes: [
        {
          title: "Order",
          kind: "tip",
          text: "First general merges (https/www), then point page moves. Otherwise rules catch the wrong requests.",
        },
      ],
    },
    {
      title: "When a redirect isn’t needed",
      level: 2,
      paras: [
        "Don’t dump all junk to home — it blurs meaning. Don’t duplicate 301 and canonical on conflicting URLs without need. Don’t leave A→B→C chains.",
      ],
      lists: [
        {
          intro: "Mistakes:",
          items: [
            "redirect loops",
            "a temporary 302 forever",
            "editing production without a backup",
            "forgotten HTTP after enabling HTTPS",
          ],
        },
      ],
    },
    {
      title: "Prepare a URL migration map",
      level: 2,
      paras: [
        "Before a mass move, make a table: old URL, new URL, reason, response type, check status. Include important pages from analytics, XML sitemaps, external links, and Webmaster reports — not only URLs you remember easily.",
        "Map pages by meaning. A product card goes to a replacement or relevant category; an article to an updated piece on the same topic. If there’s no equivalent, an honest 404 or 410 beats a home redirect.",
      ],
      lists: [
        {
          intro: "In the migration map include:",
          items: [
            "full old and target URL",
            "rule purpose — domain, section, or single page",
            "expected 301 code",
            "deploy date and test result",
          ],
        },
      ],
    },
    {
      title: "Mind rule order and context",
      level: 2,
      paras: [
        "`.htaccess` runs in directory context, so path patterns and rule starts can differ from a virtual-host config. Don’t paste article examples literally until you check the document root, current CMS rules, and `AllowOverride`.",
        "Place general canonical protocol/host rules first, then point moves. Every condition should be clear: mixed www, HTTPS, slash, and CMS rules without testing often create an extra hop or an infinite loop.",
      ],
      lists: [
        {
          intro: "Be especially careful with:",
          items: [
            "rules that redirect the whole domain",
            "regex with broad matches",
            "duplicate settings in a CDN or hosting panel",
            "automatic CMS and plugin rules",
          ],
        },
      ],
    },
    {
      title: "Test after every change",
      level: 2,
      paras: [
        "Apply a rule on staging or a small URL group first. Check the source address, target, query-string variants, HTTP and HTTPS, www and non-www. Result should be one hop to the final canonical page.",
        "After publish, watch status codes in a crawler and Webmaster. Fix A→B→C chains: the final address should be stated immediately. Don’t use a permanent redirect as a temporary experiment — browsers and search engines may cache it.",
      ],
      lists: [
        {
          intro: "Acceptance checklist:",
          items: [
            "no loops or multiple sequential redirects",
            "parameters kept only where needed",
            "destination returns 200 and is crawlable",
            "important old URLs checked selectively and in bulk",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for htaccess-301 — same structure as RU JSON / EN. */
export const htaccess301Es: BlogPost = {
  slug: "htaccess-301",
  title: "Redirects 301 en .htaccess: reglas habituales",
  date: "2021-04-16",
  category: "SEO",
  cover: "/images/blog/htaccess-301/cover.webp",
  excerpt:
    "Ejemplos prácticos de 301 permanentes en Apache .htaccess: https, www, trailing slash, mudanzas de página y dominio — más cuándo no hace falta un redirect.",
  lead: [
    "En Apache, `.htaccess` se usa a menudo para 301 permanentes: unificar espejos, mover una URL, quitar colas sobrantes. Una regla mala puede tumbar el sitio — edita con backup.",
    "Abajo: escenarios típicos y cautelas. La teoría de códigos 301/302 vive en la pieza de redirects; nginx usa otra sintaxis.",
  ],
  faq: [
    {
      q: "¿Dónde vive .htaccess?",
      a: "Suele estar en la raíz del sitio (o el directorio del virtual host). No todo hosting activa `AllowOverride`.",
    },
    {
      q: "¿Estas reglas funcionan en nginx?",
      a: "No tal cual. En nginx escribes `return 301` / `rewrite` en el config del server.",
    },
    {
      q: "¿Los ejemplos deben usar 301 o 302?",
      a: "Para mudanzas permanentes — 301. Promos temporales — 302/307.",
    },
    {
      q: "¿Se pueden pegar reglas en lote?",
      a: "Con cuidado: el orden importa, los loops son fáciles. Prueba de una en una.",
    },
    {
      q: "¿Debo redirigir en lugar de borrar una página?",
      a: "Si hay una URL cercana en significado — sí. Si el tema desapareció — mejor 404/410 que mandar todo a la home.",
    },
    {
      q: "¿Cómo compruebo el código de estado?",
      a: "Abre headers de respuesta vía DevTools, `curl -I` o un checker. Prueba la URL original sin redirect cacheado del navegador.",
    },
  ],
  sections: [
    {
      title: "Cuándo hace falta un 301",
      level: 2,
      paras: [
        "Cambios de slug, mudanzas de sección, unificación http→https y www/sin-www, migración de dominio. Meta — una dirección canónica sin cadenas.",
      ],
      lists: [
        {
          intro: "Señales de que toca:",
          items: [
            "URLs viejas en Webmaster con 404 tras una mudanza",
            "dos espejos en el índice",
            "enlaces externos a paths desfasados",
          ],
        },
      ],
      links: [
        {
          label: "Redirect: 301 y 302",
          href: "/es/blog/redirekt/",
        },
      ],
    },
    {
      title: "Reglas típicas",
      level: 2,
      paras: [
        "Activa `RewriteEngine On` y escribe condiciones + `RewriteRule` con `[R=301,L]`. La sintaxis exacta depende del directorio y de `RewriteBase`.",
        "Ideas de ejemplo (no copies a ciegas): forzar https; www→sin-www (o al revés); una URL de página a un path nuevo; `domain-old` → `domain-new` conservando el path.",
      ],
      lists: [
        {
          intro: "Antes de ir a live:",
          items: [
            "backup del `.htaccess` actual",
            "probar en staging",
            "revisar cadenas (un salto)",
            "verificar con `curl -I` o similar",
          ],
        },
      ],
      notes: [
        {
          title: "Orden",
          kind: "tip",
          text: "Primero unificaciones generales (https/www), luego mudanzas puntuales de página. Si no, las reglas atrapan requests equivocados.",
        },
      ],
    },
    {
      title: "Cuándo no hace falta un redirect",
      level: 2,
      paras: [
        "No tires toda la basura a la home — difumina el sentido. No dupliques 301 y canonical en URLs en conflicto sin necesidad. No dejes cadenas A→B→C.",
      ],
      lists: [
        {
          intro: "Errores:",
          items: [
            "loops de redirect",
            "un 302 temporal para siempre",
            "editar producción sin backup",
            "HTTP olvidado tras activar HTTPS",
          ],
        },
      ],
    },
    {
      title: "Prepara un mapa de migración de URLs",
      level: 2,
      paras: [
        "Antes de una mudanza masiva, haz una tabla: URL vieja, URL nueva, motivo, tipo de respuesta, estado del check. Incluye páginas importantes de analytics, sitemaps XML, enlaces externos e informes de Webmaster — no solo las URLs que recuerdas fácil.",
        "Mapea páginas por significado. Una ficha de producto va a un reemplazo o categoría relevante; un artículo a una pieza actualizada del mismo tema. Si no hay equivalente, un 404 o 410 honesto gana a un redirect a la home.",
      ],
      lists: [
        {
          intro: "En el mapa de migración incluye:",
          items: [
            "URL vieja y destino completos",
            "propósito de la regla — dominio, sección o página suelta",
            "código 301 esperado",
            "fecha de deploy y resultado del test",
          ],
        },
      ],
    },
    {
      title: "Cuida el orden de reglas y el contexto",
      level: 2,
      paras: [
        "`.htaccess` corre en contexto de directorio, así que los patrones de path y el arranque de reglas pueden diferir de un config de virtual-host. No pegues ejemplos del artículo al pie de la letra hasta revisar document root, reglas actuales del CMS y `AllowOverride`.",
        "Pon primero las reglas generales de protocolo/host canónico, luego mudanzas puntuales. Cada condición debe quedar clara: mezclar www, HTTPS, slash y reglas del CMS sin probar suele crear un salto extra o un loop infinito.",
      ],
      lists: [
        {
          intro: "Ten especial cuidado con:",
          items: [
            "reglas que redirigen todo el dominio",
            "regex con matches amplios",
            "ajustes duplicados en un CDN o panel de hosting",
            "reglas automáticas del CMS y plugins",
          ],
        },
      ],
    },
    {
      title: "Prueba tras cada cambio",
      level: 2,
      paras: [
        "Aplica una regla primero en staging o en un grupo pequeño de URLs. Revisa dirección origen, destino, variantes de query-string, HTTP y HTTPS, www y sin-www. El resultado debe ser un salto a la página canónica final.",
        "Tras publicar, vigila códigos de estado en un crawler y Webmaster. Arregla cadenas A→B→C: la dirección final debe quedar dicha de inmediato. No uses un redirect permanente como experimento temporal — navegadores y buscadores pueden cachearlo.",
      ],
      lists: [
        {
          intro: "Checklist de aceptación:",
          items: [
            "sin loops ni varios redirects en secuencia",
            "parámetros conservados solo donde hace falta",
            "el destino devuelve 200 y es rastreable",
            "URLs viejas importantes chequeadas de forma selectiva y en lote",
          ],
        },
      ],
    },
  ],
};
