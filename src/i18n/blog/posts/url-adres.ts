import type { BlogPost } from "../../../data/blog";

/** EN overlay for url-adres — same structure as RU JSON. */
export const urlAdresEn: BlogPost = {
  slug: "url-adres",
  title: "Website URL: structure and SEO impact",
  date: "2021-08-13",
  category: "SEO",
  cover: "/images/blog/url-adres/cover-en.webp",
  excerpt:
    "What a URL is, which parts make up a page address, how to write readable slugs, and how much the path really affects SEO — without the myth “keyword in URL = page one.”",
  lead: [
    "A URL (Uniform Resource Locator) is a resource address on the web: a page, image, or file. In the address bar the browser shows scheme, host, and path; people and robots use them to see where they landed.",
    "Below: URL anatomy, how to write clear addresses, and what SEO actually gets from them. A readable path helps clicks and navigation, but it does not replace content, site structure, or tech.",
  ],
  faq: [
    {
      q: "How is a URL different from a domain?",
      a: "A domain is the host name (`example.com`). A URL is the full page address: protocol + host + path + sometimes params (`https://example.com/services/seo/`). See also the top-level domain article.",
    },
    {
      q: "What is a human-readable (pretty) URL?",
      a: "A slug people can read: words instead of `?id=123`. Easier to read in a snippet and share the link.",
    },
    {
      q: "Do you need keywords in the URL?",
      a: "A short meaningful path helps. Stuffing the URL with keywords hurts UX and can look manipulative. Exact-match in domain or path is not a cheat boost anymore.",
    },
    {
      q: "Is HTTPS required?",
      a: "Yes for a normal site: trust, cookies, browser and search requirements. Plain HTTP is outdated and risky.",
    },
    {
      q: "Does a URL alone get you onto page one?",
      a: "No. It is one technical and UX signal. Site prep and ranking growth are different timelines — see the prep versus visibility rule.",
    },
  ],
  sections: [
    {
      title: "What a URL is and why it matters",
      level: 2,
      paras: [
        "A URL uniquely points to a resource. Like a library call number: an exact code finds the book faster. The browser requests the address; the server returns a document or file.",
        "The address shows in the browser bar, search snippets, email, and messengers. People copy it from the page (right-click → “Copy link”) and from media.",
      ],
      lists: [
        {
          intro: "Where URLs appear:",
          items: [
            "site pages",
            "images, PDFs, video",
            "API and utility endpoints",
            "redirects and mirrors (www / non-www)",
          ],
        },
      ],
      links: [
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
        {
          label: "Top-level domain",
          href: "/en/blog/domen-pervogo-urovnya/",
        },
      ],
    },
    {
      title: "URL structure",
      level: 2,
      paras: [
        "A typical address: `https://www.example.com:443/catalog/product/?utm_source=ads#reviews`. Not every part is required; port and fragment are often hidden.",
      ],
      lists: [
        {
          intro: "Main parts:",
          items: [
            "scheme (protocol): `https://` — secure connection; `http://` is outdated for sites",
            "host (domain): `example.com` or `www.example.com`",
            "port: usually 443 for HTTPS, not written in the URL",
            "path: `/catalog/product/` — sections and page",
            "query params: `?utm_…`, filters, sessions",
            "fragment: `#reviews` — on-page anchor (often not sent to the server)",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common confusion",
          text: "“Auth” in old URL schemes (user:pass@host) is almost unused on the web and unsafe. Login to an account is a separate page or form — not part of a “pretty” public address.",
        },
      ],
      links: [
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "How to write a clear address",
      level: 2,
      paras: [
        "People remember short readable paths. Random IDs and unnecessarily long queries hurt sharing and the snippet.",
      ],
      lists: [
        {
          intro: "Practical rules:",
          items: [
            "Latin or a clean transliteration scheme, no mixed-case chaos",
            "hyphens instead of spaces and underscores",
            "short path: section → page, without extra nesting",
            "page meaning in the path (`/services/seo/`), not a keyword string",
            "one canonical URL per document (merge www/HTTPS via redirect)",
            "do not spawn index duplicates from filters and UTM",
          ],
        },
      ],
      tables: [
        {
          caption: "Examples",
          headers: ["Worse", "Better"],
          rows: [
            ["`/page.php?id=8841`", "`/blog/url-adres/`"],
            ["`/SEO_SERVICES_CHEAP`", "`/services/seo/`"],
            ["`/a/b/c/d/e/f/g/`", "`/catalog/category/product/`"],
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Redirect",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "How URL affects SEO",
      level: 2,
      paras: [
        "Search engines read the path as a weak topic and usability signal. Content, internal links, technical access, and behavior matter more.",
        "A keyword in the URL or domain does not guarantee a ranking. Zone (`.ru` / `.com`) and geo are separate signals — see the TLD article.",
        "A readable URL raises CTR in the results and trust when shared — that helps indirectly if the page truly answers the query.",
      ],
      lists: [
        {
          intro: "What to check technically:",
          items: [
            "primary mirror: HTTPS + chosen www",
            "human-readable URLs enabled in the CMS",
            "canonical and 301 without chains",
            "filter params do not inflate the index",
            "URL changes only with a redirect from the old address",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Cleaning up URLs is part of site prep. Growing a commercial core into page-one visibility is planned over months of work after promotion starts — not the result of one address edit.",
        },
      ],
    },
  ],
};

/** ES overlay for url-adres — same structure as RU JSON / EN. */
export const urlAdresEs: BlogPost = {
  slug: "url-adres",
  title: "URL del sitio: estructura e impacto SEO",
  date: "2021-08-13",
  category: "SEO",
  cover: "/images/blog/url-adres/cover-es.webp",
  excerpt:
    "Qué es una URL, de qué partes se compone la dirección de una página, cómo escribir slugs legibles y cuánto afecta de verdad el path al SEO — sin el mito «keyword en la URL = primera página».",
  lead: [
    "Una URL (Uniform Resource Locator) es la dirección de un recurso en la web: una página, imagen o archivo. En la barra de dirección el navegador muestra scheme, host y path; personas y robots los usan para ver dónde aterrizaron.",
    "Abajo: anatomía de la URL, cómo escribir direcciones claras y qué obtiene realmente el SEO de ellas. Un path legible ayuda a clics y navegación, pero no sustituye contenido, estructura del sitio ni técnica.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia una URL de un dominio?",
      a: "Un dominio es el nombre del host (`example.com`). Una URL es la dirección completa de la página: protocolo + host + path + a veces params (`https://example.com/services/seo/`). Ver también el artículo de dominio de primer nivel.",
    },
    {
      q: "¿Qué es una URL legible (pretty)?",
      a: "Un slug que la gente puede leer: palabras en lugar de `?id=123`. Más fácil de leer en un snippet y de compartir el enlace.",
    },
    {
      q: "¿Hacen falta keywords en la URL?",
      a: "Un path corto y con sentido ayuda. Meter keywords a lo loco en la URL duele a la UX y puede verse manipulativo. El exact-match en dominio o path ya no es un atajo.",
    },
    {
      q: "¿Es obligatorio HTTPS?",
      a: "Sí para un sitio normal: confianza, cookies, requisitos de navegador y búsqueda. HTTP plano está desfasado y es arriesgado.",
    },
    {
      q: "¿Una URL sola te pone en primera página?",
      a: "No. Es una señal técnica y de UX. La prep del sitio y el crecimiento de rankings son plazos distintos — ver la regla prep versus visibilidad.",
    },
  ],
  sections: [
    {
      title: "Qué es una URL y por qué importa",
      level: 2,
      paras: [
        "Una URL apunta de forma única a un recurso. Como un número de llamada en una biblioteca: un código exacto encuentra el libro más rápido. El navegador pide la dirección; el servidor devuelve un documento o archivo.",
        "La dirección aparece en la barra del navegador, snippets de búsqueda, email y messengers. La gente la copia desde la página (clic derecho → «Copiar enlace») y desde media.",
      ],
      lists: [
        {
          intro: "Dónde aparecen las URLs:",
          items: [
            "páginas del sitio",
            "imágenes, PDFs, vídeo",
            "endpoints de API y utilidad",
            "redirects y espejos (www / sin-www)",
          ],
        },
      ],
      links: [
        {
          label: "Qué es un enlace",
          href: "/es/blog/chto-takoe-ssylka/",
        },
        {
          label: "Dominio de primer nivel",
          href: "/es/blog/domen-pervogo-urovnya/",
        },
      ],
    },
    {
      title: "Estructura de la URL",
      level: 2,
      paras: [
        "Una dirección típica: `https://www.example.com:443/catalog/product/?utm_source=ads#reviews`. No todas las partes son obligatorias; puerto y fragmento a menudo quedan ocultos.",
      ],
      lists: [
        {
          intro: "Partes principales:",
          items: [
            "scheme (protocolo): `https://` — conexión segura; `http://` está desfasado para sitios",
            "host (dominio): `example.com` o `www.example.com`",
            "puerto: suele ser 443 para HTTPS, no se escribe en la URL",
            "path: `/catalog/product/` — secciones y página",
            "params de query: `?utm_…`, filtros, sesiones",
            "fragmento: `#reviews` — ancla en página (a menudo no se envía al servidor)",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Confusión habitual",
          text: "La «auth» en schemes viejos de URL (user:pass@host) casi no se usa en la web y es insegura. El login a una cuenta es una página o formulario aparte — no parte de una dirección pública «bonita».",
        },
      ],
      links: [
        {
          label: "Certificado SSL",
          href: "/es/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "Cómo escribir una dirección clara",
      level: 2,
      paras: [
        "La gente recuerda paths cortos y legibles. IDs aleatorios y queries innecesariamente largas duelen al compartir y al snippet.",
      ],
      lists: [
        {
          intro: "Reglas prácticas:",
          items: [
            "latín o un esquema limpio de transliteración, sin caos de mayúsculas mezcladas",
            "guiones en lugar de espacios y guiones bajos",
            "path corto: sección → página, sin nesting extra",
            "sentido de la página en el path (`/services/seo/`), no una ristra de keywords",
            "una URL canónica por documento (unifica www/HTTPS vía redirect)",
            "no generes duplicados de índice desde filtros y UTM",
          ],
        },
      ],
      tables: [
        {
          caption: "Ejemplos",
          headers: ["Peor", "Mejor"],
          rows: [
            ["`/page.php?id=8841`", "`/blog/url-adres/`"],
            ["`/SEO_SERVICES_CHEAP`", "`/services/seo/`"],
            ["`/a/b/c/d/e/f/g/`", "`/catalog/category/product/`"],
          ],
        },
      ],
      links: [
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
        {
          label: "Redirect",
          href: "/es/blog/redirekt/",
        },
      ],
    },
    {
      title: "Cómo afecta la URL al SEO",
      level: 2,
      paras: [
        "Los buscadores leen el path como una señal débil de tema y usabilidad. Contenido, enlaces internos, acceso técnico y comportamiento pesan más.",
        "Una keyword en la URL o el dominio no garantiza un ranking. La zona (`.ru` / `.com`) y el geo son señales aparte — ver el artículo de TLD.",
        "Una URL legible sube el CTR en resultados y la confianza al compartir — eso ayuda de forma indirecta si la página responde de verdad a la query.",
      ],
      lists: [
        {
          intro: "Qué revisar técnicamente:",
          items: [
            "espejo principal: HTTPS + www elegido",
            "URLs legibles activadas en el CMS",
            "canonical y 301 sin cadenas",
            "params de filtro no inflan el índice",
            "cambios de URL solo con redirect desde la dirección vieja",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Plazos",
          text: "Limpiar URLs forma parte de la prep del sitio. Crecer un núcleo comercial hacia visibilidad en primera página se planifica en meses de trabajo tras arrancar la promoción — no es el resultado de editar una dirección.",
        },
      ],
    },
  ],
};
