import type { BlogPost } from "../../../data/blog";

/** EN overlay for protokol-http — same structure as RU JSON. */
export const protokolHttpEn: BlogPost = {
  slug: "protokol-http",
  title: "HTTP protocol: what it is and why you need it",
  date: "2020-12-22",
  category: "SEO",
  cover: "/images/blog/protokol-http/cover-en.webp",
  excerpt:
    "What HTTP is at the application layer: request and response, methods, headers, link to URL and HTML. How HTTP differs from HTTPS and where to check status codes for SEO.",
  lead: [
    "HTTP (HyperText Transfer Protocol) is the rule for messages between a browser (or bot) and a server: “give me the document at this address” → “here’s the status and response body.” Without it the familiar web page wouldn’t open from a link.",
    "Below: why HTTP exists, how the exchange works, how HTTPS differs, and what matters to a webmaster. Response codes are covered separately; moving to encryption is in the HTTPS and SEO article.",
  ],
  faq: [
    {
      q: "Is HTTP a markup language?",
      a: "No. HTML is document markup. HTTP is the delivery protocol: how to request and receive a resource (HTML, CSS, API, image).",
    },
    {
      q: "Why does the address show http:// or https://?",
      a: "That’s the URL scheme: which protocol to use. Today the norm for sites is https:// with TLS.",
    },
    {
      q: "Is HTTP outdated?",
      a: "The protocol is alive (HTTP/1.1, HTTP/2, HTTP/3). What’s outdated is serving a site without encryption — plain HTTP with no TLS.",
    },
    {
      q: "How does HTTP differ from HTTPS?",
      a: "HTTPS is the same HTTP over TLS: the channel is encrypted, the certificate confirms the server. For users — the lock; for SEO — mirror merging and trust.",
    },
    {
      q: "Where does SEO fit in?",
      a: "The bot walks HTTP(S): status, redirects, speed, correct headers (canonical via HTML/HTTP, cache, compression) matter. Understanding the protocol helps read logs and DevTools.",
    },
    {
      q: "What are GET and POST?",
      a: "GET usually “read a resource” (opening a page). POST sends data (a form). For indexing pages you mostly watch GET responses.",
    },
    {
      q: "Does a webmaster need HTTP/3?",
      a: "A nice speed bonus on a modern stack/CDN. First lock 301, HTTPS, 5xx, and heavy responses — then the finer protocol version.",
    },
    {
      q: "Where can I see the response code?",
      a: "DevTools → Network, `curl -I`, a crawler. Classes 1xx–5xx are in the HTTP status code article.",
    },
  ],
  sections: [
    {
      title: "Why the HTTP protocol exists",
      level: 2,
      paras: [
        "The network moves bytes; HTTP agrees on meaning: which resource, which method, which headers, which status to return. The browser builds a request from the URL; the server answers with a code and body — page, file, or error.",
        "In the OSI model HTTP sits at the application layer — over TCP (or QUIC for HTTP/3). For a webmaster that’s a frame, not theory: “site won’t open” often = DNS, TLS, HTTP status, or the app behind HTTP.",
      ],
      lists: [
        {
          intro: "Simple scheme:",
          items: [
            "user enters a URL or clicks a link",
            "client sends an HTTP request to the host",
            "server replies with status + headers + body",
            "browser renders HTML and loads CSS/JS/images by the same rules",
          ],
        },
      ],
      links: [
        {
          label: "Webpage",
          href: "/en/blog/veb-stranitsa/",
        },
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
      ],
    },
    {
      title: "Request, response, and headers",
      level: 2,
      paras: [
        "In the request: method (GET, POST…), path (`/blog/…`), protocol version, headers like `Host`, `User-Agent`, `Accept`. In the response: status (`200`, `301`, `404`…), headers (`Content-Type`, `Location`, `Cache-Control`), and body.",
        "For SEO diagnosis watch the redirect chain, final status, content type, and whether you’re serving HTML with a soft 500 under a 200. Server logs are the same HTTP stream from the bot’s view.",
      ],
      lists: [
        {
          intro: "Useful headers in practice:",
          items: [
            "`Location` — where a redirect goes",
            "`Content-Type` — HTML vs JSON/file",
            "`Cache-Control` / CDN — caching",
            "`X-Robots-Tag` — indexing directives at the response level",
          ],
        },
      ],
      links: [
        {
          label: "HTTP status code",
          href: "/en/blog/kod-statusa-http/",
        },
        {
          label: "Server logs",
          href: "/en/blog/logi-servera/",
        },
      ],
    },
    {
      title: "HTTP and HTTPS",
      level: 2,
      paras: [
        "Plain HTTP sends data without channel encryption — easier to intercept on public Wi‑Fi. HTTPS adds TLS: encryption and certificate checks. Required for forms, accounts, and payment; expected for the whole site.",
        "The address scheme changes (`http` → `https`); you often need a 301 from the old mirror. Mixed content (HTTPS page loading HTTP scripts) breaks the lock and trust.",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "HTTP — application protocol",
            "HTTPS — HTTP + TLS",
            "a certificate ≠ “the site can’t be hacked”",
            "for SEO, mirror merging and no certificate errors matter",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t confuse “site on HTTP” with “learning HTTP.” The protocol is always needed; a public site without TLS is already security and SEO hygiene.",
        },
      ],
      links: [
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "Protocol versions and speed",
      level: 2,
      paras: [
        "HTTP/1.1 was the long standard: many connections, request queues. HTTP/2 multiplexes streams; HTTP/3 often runs over QUIC/UDP — less delay on bad networks. Enabled on the server/CDN side.",
        "For promotion, stable 200s, fast TTFB, and light pages matter more than racing to “must have HTTP/3 tomorrow.” You can see the version in DevTools → Protocol.",
      ],
      lists: [
        {
          intro: "What to check on hosting:",
          items: [
            "HTTPS support and redirect from HTTP",
            "compression (gzip/brotli)",
            "HTTP/2 or HTTP/3 if available",
            "no extra redirects on every asset",
          ],
        },
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "HTTP through an SEO lens",
      level: 2,
      paras: [
        "A search bot is also an HTTP client with its own User-Agent. It gets the same status classes: index 200, follow 301, don’t waste budget on endless 5xx and soft 404s.",
        "Understanding the protocol ties Webmaster, crawler, and logs: one language of “request → status → body.” Content and structure come next — but without correct HTTP they won’t reach the index.",
      ],
      lists: [
        {
          intro: "Working minimum:",
          items: [
            "canonical mirror on HTTPS",
            "clear statuses (200/301/404/410/5xx)",
            "short redirect chains",
            "CSS/JS available for rendering",
            "check suspicious URLs with `curl -I` / DevTools",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "Code 200",
          href: "/en/blog/kod-200/",
        },
      ],
    },
    {
      title: "Common misconceptions",
      level: 2,
      paras: [
        "“HTTP in the address is outdated” — the unencrypted scheme is outdated; the protocol remains the web’s base. “HTTPS alone puts you on page one” — no, it’s hygiene. “Status 200 is always good” — not if you serve an empty stub or a duplicate.",
        "Don’t fix with robots magic what breaks at DNS, certificate, or 503. First make sure the HTTP response is healthy, then fine-tune the copy.",
      ],
      lists: [
        {
          intro: "Where to start diagnosing “site won’t open”:",
          items: [
            "does the domain resolve",
            "does TLS succeed (if https)",
            "what status and `Location`",
            "does origin behind the CDN answer",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Keep a cheat sheet: protocol (HTTP) → encryption (TLS/HTTPS) → status → HTML. You isolate the problem layer faster.",
        },
      ],
    },
  ],
  related: [
    "https-seo",
    "kod-statusa-http",
    "ssl-sertifikat",
    "veb-server",
    "kod-200",
  ],
};

/** ES overlay for protokol-http — same structure as RU JSON / EN. */
export const protokolHttpEs: BlogPost = {
  slug: "protokol-http",
  title: "Protocolo HTTP: qué es y por qué lo necesitas",
  date: "2020-12-22",
  category: "SEO",
  cover: "/images/blog/protokol-http/cover.webp",
  excerpt:
    "Qué es HTTP en la capa de aplicación: request y response, métodos, headers, vínculo con URL y HTML. En qué se diferencia HTTP de HTTPS y dónde revisar códigos de estado para SEO.",
  lead: [
    "HTTP (HyperText Transfer Protocol) es la regla de mensajes entre un navegador (o bot) y un servidor: «dame el documento en esta dirección» → «aquí van el status y el body». Sin él, la página web familiar no abriría desde un enlace.",
    "Abajo: por qué existe HTTP, cómo funciona el intercambio, en qué se diferencia HTTPS y qué importa a un webmaster. Los códigos de respuesta se cubren aparte; el paso a cifrado está en el artículo HTTPS y SEO.",
  ],
  faq: [
    {
      q: "¿HTTP es un lenguaje de markup?",
      a: "No. HTML es markup del documento. HTTP es el protocolo de entrega: cómo pedir y recibir un recurso (HTML, CSS, API, imagen).",
    },
    {
      q: "¿Por qué la dirección muestra http:// o https://?",
      a: "Es el scheme de la URL: qué protocolo usar. Hoy la norma para sitios es https:// con TLS.",
    },
    {
      q: "¿HTTP está desfasado?",
      a: "El protocolo está vivo (HTTP/1.1, HTTP/2, HTTP/3). Lo desfasado es servir un sitio sin cifrado — HTTP plano sin TLS.",
    },
    {
      q: "¿En qué se diferencia HTTP de HTTPS?",
      a: "HTTPS es el mismo HTTP sobre TLS: el canal va cifrado, el certificado confirma el servidor. Para usuarios — el candado; para SEO — unificar espejos y confianza.",
    },
    {
      q: "¿Dónde encaja el SEO?",
      a: "El bot camina HTTP(S): status, redirects, velocidad, headers correctos (canonical vía HTML/HTTP, cache, compresión) importan. Entender el protocolo ayuda a leer logs y DevTools.",
    },
    {
      q: "¿Qué son GET y POST?",
      a: "GET suele ser «leer un recurso» (abrir una página). POST envía datos (un formulario). Para indexar páginas miras sobre todo respuestas GET.",
    },
    {
      q: "¿Un webmaster necesita HTTP/3?",
      a: "Un bonus agradable de velocidad en un stack/CDN moderno. Primero cierra 301, HTTPS, 5xx y respuestas pesadas — luego la versión fina del protocolo.",
    },
    {
      q: "¿Dónde veo el código de respuesta?",
      a: "DevTools → Network, `curl -I`, un crawler. Las clases 1xx–5xx están en el artículo de códigos de estado HTTP.",
    },
  ],
  sections: [
    {
      title: "Por qué existe el protocolo HTTP",
      level: 2,
      paras: [
        "La red mueve bytes; HTTP acuerda el sentido: qué recurso, qué método, qué headers, qué status devolver. El navegador arma un request desde la URL; el servidor responde con código y body — página, archivo o error.",
        "En el modelo OSI, HTTP está en la capa de aplicación — sobre TCP (o QUIC para HTTP/3). Para un webmaster es un marco, no teoría: «el sitio no abre» a menudo = DNS, TLS, status HTTP o la app detrás de HTTP.",
      ],
      lists: [
        {
          intro: "Esquema simple:",
          items: [
            "el usuario mete una URL o hace clic en un enlace",
            "el cliente envía un request HTTP al host",
            "el servidor responde con status + headers + body",
            "el navegador renderiza HTML y carga CSS/JS/imágenes con las mismas reglas",
          ],
        },
      ],
      links: [
        {
          label: "Página web",
          href: "/es/blog/veb-stranitsa/",
        },
        {
          label: "Dirección URL",
          href: "/es/blog/url-adres/",
        },
      ],
    },
    {
      title: "Request, response y headers",
      level: 2,
      paras: [
        "En el request: método (GET, POST…), path (`/blog/…`), versión del protocolo, headers como `Host`, `User-Agent`, `Accept`. En la response: status (`200`, `301`, `404`…), headers (`Content-Type`, `Location`, `Cache-Control`) y body.",
        "Para diagnóstico SEO mira la cadena de redirects, el status final, el content type y si sirves HTML con un soft 500 bajo un 200. Los logs del servidor son el mismo stream HTTP desde la vista del bot.",
      ],
      lists: [
        {
          intro: "Headers útiles en la práctica:",
          items: [
            "`Location` — a dónde va un redirect",
            "`Content-Type` — HTML vs JSON/archivo",
            "`Cache-Control` / CDN — caché",
            "`X-Robots-Tag` — directivas de indexación a nivel de respuesta",
          ],
        },
      ],
      links: [
        {
          label: "Código de estado HTTP",
          href: "/es/blog/kod-statusa-http/",
        },
        {
          label: "Logs del servidor",
          href: "/es/blog/logi-servera/",
        },
      ],
    },
    {
      title: "HTTP y HTTPS",
      level: 2,
      paras: [
        "HTTP plano envía datos sin cifrado de canal — más fácil de interceptar en Wi‑Fi público. HTTPS añade TLS: cifrado y comprobación de certificado. Obligatorio para formularios, cuentas y pago; esperado para todo el sitio.",
        "Cambia el scheme de la dirección (`http` → `https`); a menudo hace falta un 301 desde el espejo viejo. Mixed content (página HTTPS cargando scripts HTTP) rompe el candado y la confianza.",
      ],
      lists: [
        {
          intro: "En corto:",
          items: [
            "HTTP — protocolo de aplicación",
            "HTTPS — HTTP + TLS",
            "un certificado ≠ «el sitio no se puede hackear»",
            "para SEO importan unificar espejos y cero errores de certificado",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No confundas «sitio en HTTP» con «aprender HTTP». El protocolo siempre hace falta; un sitio público sin TLS ya es higiene de seguridad y SEO.",
        },
      ],
      links: [
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
        {
          label: "Certificado SSL",
          href: "/es/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "Versiones del protocolo y velocidad",
      level: 2,
      paras: [
        "HTTP/1.1 fue el estándar largo: muchas conexiones, colas de requests. HTTP/2 multiplexa streams; HTTP/3 suele ir sobre QUIC/UDP — menos delay en redes malas. Se activa del lado del servidor/CDN.",
        "Para promoción importan más 200s estables, TTFB rápido y páginas ligeras que correr a «hay que tener HTTP/3 mañana». La versión se ve en DevTools → Protocol.",
      ],
      lists: [
        {
          intro: "Qué revisar en el hosting:",
          items: [
            "soporte HTTPS y redirect desde HTTP",
            "compresión (gzip/brotli)",
            "HTTP/2 o HTTP/3 si está disponible",
            "sin redirects extra en cada asset",
          ],
        },
      ],
      links: [
        {
          label: "Servidor web",
          href: "/es/blog/veb-server/",
        },
      ],
    },
    {
      title: "HTTP con lupa SEO",
      level: 2,
      paras: [
        "Un bot de búsqueda también es un cliente HTTP con su propio User-Agent. Recibe las mismas clases de status: indexar 200, seguir 301, no gastar budget en 5xx infinitos y soft 404s.",
        "Entender el protocolo une Webmaster, crawler y logs: un lenguaje de «request → status → body». Contenido y estructura vienen después — pero sin HTTP correcto no llegan al índice.",
      ],
      lists: [
        {
          intro: "Mínimo de trabajo:",
          items: [
            "espejo canónico en HTTPS",
            "statuses claros (200/301/404/410/5xx)",
            "cadenas cortas de redirects",
            "CSS/JS disponibles para render",
            "revisar URLs dudosas con `curl -I` / DevTools",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
        {
          label: "Código 200",
          href: "/es/blog/kod-200/",
        },
      ],
    },
    {
      title: "Malentendidos habituales",
      level: 2,
      paras: [
        "«HTTP en la dirección está desfasado» — el scheme sin cifrar está desfasado; el protocolo sigue siendo la base de la web. «HTTPS solo te pone en primera página» — no, es higiene. «Status 200 siempre es bueno» — no si sirves un stub vacío o un duplicado.",
        "No arregles con magia de robots lo que se rompe en DNS, certificado o 503. Primero asegúrate de que la respuesta HTTP esté sana; luego afina el copy.",
      ],
      lists: [
        {
          intro: "Por dónde empezar el diagnóstico «el sitio no abre»:",
          items: [
            "¿resuelve el dominio?",
            "¿tiene éxito TLS (si es https)?",
            "qué status y `Location`",
            "¿responde el origin detrás del CDN?",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Guarda una chuleta: protocolo (HTTP) → cifrado (TLS/HTTPS) → status → HTML. Aislas la capa del problema más rápido.",
        },
      ],
    },
  ],
  related: [
    "https-seo",
    "kod-statusa-http",
    "ssl-sertifikat",
    "veb-server",
    "kod-200",
  ],
};
