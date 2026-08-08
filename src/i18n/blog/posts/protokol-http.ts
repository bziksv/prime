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
