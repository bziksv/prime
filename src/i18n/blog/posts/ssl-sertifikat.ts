import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssl-sertifikat — same structure as RU JSON. */
export const sslSertifikatEn: BlogPost = {
  slug: "ssl-sertifikat",
  title: "SSL certificate: why you need it, types, and how to choose",
  date: "2021-11-15",
  category: "SEO",
  cover: "/images/blog/ssl-sertifikat/cover-en.webp",
  excerpt:
    "What an SSL/TLS certificate is, how HTTPS differs from HTTP, certificate types (DV, OV, EV, wildcard), Let’s Encrypt, and what to look at when choosing.",
  lead: [
    "An SSL certificate (today more often called TLS) lets the browser open an encrypted HTTPS connection. Without it, forms, logins, and payments look unsafe — and search engines factor that in.",
    "Below: what HTTPS means, certificate types, myths about “invulnerability,” and a practical way to choose. Install steps depend on hosting — follow the control panel and docs, not 2019 screenshots.",
  ],
  faq: [
    {
      q: "Are SSL and TLS the same?",
      a: "In everyday speech “SSL” stuck. In practice sites use TLS; the certificate is still in the HTTPS class.",
    },
    {
      q: "Is free Let’s Encrypt enough?",
      a: "For most sites and stores at the start — yes: encryption and browser trust. Paid OV/EV — when you need organization validation.",
    },
    {
      q: "Does HTTPS mean the site can’t be hacked?",
      a: "No. It encrypts the client↔server channel. CMS holes, weak passwords, and XSS aren’t fixed by HTTPS alone.",
    },
    {
      q: "Does it affect SEO?",
      a: "HTTPS is the expected norm. HTTP is often marked insecure; mixed content and broken redirects hurt both SEO and UX.",
    },
    {
      q: "Do I need EV with a “green bar”?",
      a: "Extended organization validation still exists, but the bright green address bar is almost gone in modern browsers. For many jobs DV plus correct HTTPS is enough.",
    },
  ],
  sections: [
    {
      title: "Why you need a certificate",
      level: 2,
      paras: [
        "The certificate confirms you’re talking to the right server and enables traffic encryption. Logins, forms, and payment data shouldn’t travel over open HTTP.",
        "In the address bar you’ll see a lock or secure-connection indicator. Browser warnings cut conversion harder than an “ugly design.”",
      ],
    },
    {
      title: "HTTP and HTTPS",
      level: 2,
      paras: [
        "HTTP sends data without channel encryption. HTTPS is HTTP over TLS: traffic between browser and server is protected from simple network interception.",
        "After moving to HTTPS, set an http→https redirect, canonicals, and consistent www/non-www — otherwise you’ll get duplicates and mixed content.",
      ],
      links: [
        {
          label: "Web server: site basics",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "How it works in short",
      level: 2,
      paras: [
        "When the site opens, the browser checks the certificate (issuer, expiry, domain match), then both sides agree on session keys. After that traffic is encrypted.",
        "Search engines index both HTTP and HTTPS, but for users and bots a correct HTTPS without certificate errors is preferred.",
      ],
    },
    {
      title: "Certificate classification",
      level: 2,
      paras: [
        "They’re split by owner validation depth and by domain coverage.",
      ],
      lists: [
        {
          intro: "By validation:",
          items: [
            "DV — domain ownership check; fast, often free",
            "OV — plus organization validation",
            "EV — extended legal-entity check (for some brands and fintech)",
          ],
        },
        {
          intro: "By coverage:",
          items: [
            "one domain",
            "several names (SAN / multi-domain)",
            "wildcard — all subdomains at `*.example.com`",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "A brochure site and blog usually need DV (Let’s Encrypt or a hosting-panel analogue). A store needs correct HTTPS sitewide plus secure checkout via the payment provider.",
        },
      ],
    },
    {
      title: "Myths: hacking and “the lock is enough”",
      level: 2,
      paras: [
        "A certificate doesn’t patch plugin holes and doesn’t replace backups, updates, and access rights. It’s about the channel and server identity.",
        "Mixing HTTP and HTTPS (images or scripts on http on an https page) triggers warnings and breaks trust — fix mixed content.",
      ],
      lists: [
        {
          intro: "Who needs HTTPS by design:",
          items: [
            "stores and payments",
            "logins and forms with personal data",
            "any site with an account",
            "in practice — almost any public project today",
          ],
        },
      ],
    },
    {
      title: "How to choose and where to get it",
      level: 2,
      paras: [
        "Criteria: site type, whether you need subdomains, owner (person or company), and auto-renew convenience.",
        "Free Let’s Encrypt and hosting-panel analogues cover DV for most. Paid certificates are for OV/EV, CA insurance, special client requirements, or a wildcard from a specific issuer.",
      ],
      lists: [
        {
          intro: "Checklist after install:",
          items: [
            "site opens on https with no errors",
            "http redirect is set",
            "no mixed content",
            "expiry and auto-renew are clear",
            "in Search Console / analytics — primary HTTPS host",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for ssl-sertifikat — same structure as RU JSON / EN. */
export const sslSertifikatEs: BlogPost = {
  slug: "ssl-sertifikat",
  title: "Certificado SSL: para qué sirve, tipos y cómo elegir",
  date: "2021-11-15",
  category: "SEO",
  cover: "/images/blog/ssl-sertifikat/cover.webp",
  excerpt:
    "Qué es un certificado SSL/TLS, en qué se diferencia HTTPS de HTTP, tipos de certificado (DV, OV, EV, wildcard), Let’s Encrypt y qué mirar al elegir.",
  lead: [
    "Un certificado SSL (hoy más a menudo llamado TLS) permite al navegador abrir una conexión HTTPS cifrada. Sin él, formularios, logins y pagos parecen inseguros — y los buscadores lo tienen en cuenta.",
    "Abajo: qué significa HTTPS, tipos de certificado, mitos sobre la «invulnerabilidad» y una forma práctica de elegir. Los pasos de instalación dependen del hosting — sigue el panel de control y la docs, no capturas de 2019.",
  ],
  faq: [
    {
      q: "¿SSL y TLS son lo mismo?",
      a: "En el habla cotidiana se quedó «SSL». En la práctica los sitios usan TLS; el certificado sigue en la clase HTTPS.",
    },
    {
      q: "¿Basta con Let’s Encrypt gratis?",
      a: "Para la mayoría de sitios y tiendas al arrancar — sí: cifrado y confianza del navegador. OV/EV de pago — cuando hace falta validación de organización.",
    },
    {
      q: "¿HTTPS significa que el sitio no se puede hackear?",
      a: "No. Cifra el canal cliente↔servidor. Agujeros del CMS, contraseñas flojas y XSS no los arregla HTTPS solo.",
    },
    {
      q: "¿Afecta al SEO?",
      a: "HTTPS es la norma esperada. HTTP a menudo se marca inseguro; mixed content y redirects rotos perjudican SEO y UX.",
    },
    {
      q: "¿Hace falta EV con la «barra verde»?",
      a: "La validación extendida de organización sigue existiendo, pero la barra de dirección verde brillante casi ha desaparecido en navegadores modernos. Para muchos trabajos basta DV más HTTPS correcto.",
    },
  ],
  sections: [
    {
      title: "Para qué hace falta un certificado",
      level: 2,
      paras: [
        "El certificado confirma que hablas con el servidor correcto y habilita el cifrado del tráfico. Logins, formularios y datos de pago no deberían viajar por HTTP abierto.",
        "En la barra de dirección verás un candado o un indicador de conexión segura. Las advertencias del navegador cortan la conversión más que un «diseño feo».",
      ],
    },
    {
      title: "HTTP y HTTPS",
      level: 2,
      paras: [
        "HTTP envía datos sin cifrado del canal. HTTPS es HTTP sobre TLS: el tráfico entre navegador y servidor queda protegido frente a una interceptación simple en la red.",
        "Tras pasar a HTTPS, monta un redirect http→https, canonicals y www/non-www coherentes — si no, tendrás duplicados y mixed content.",
      ],
      links: [
        {
          label: "Servidor web: bases del sitio",
          href: "/blog/veb-server/",
        },
      ],
    },
    {
      title: "Cómo funciona, en corto",
      level: 2,
      paras: [
        "Al abrir el sitio, el navegador comprueba el certificado (emisor, caducidad, coincidencia de dominio) y luego ambas partes acuerdan claves de sesión. Después el tráfico va cifrado.",
        "Los buscadores indexan HTTP y HTTPS, pero para usuarios y bots se prefiere un HTTPS correcto sin errores de certificado.",
      ],
    },
    {
      title: "Clasificación de certificados",
      level: 2,
      paras: [
        "Se parten por profundidad de validación del dueño y por cobertura de dominio.",
      ],
      lists: [
        {
          intro: "Por validación:",
          items: [
            "DV — comprobación de propiedad del dominio; rápido, a menudo gratis",
            "OV — más validación de organización",
            "EV — comprobación extendida de entidad legal (para algunas marcas y fintech)",
          ],
        },
        {
          intro: "Por cobertura:",
          items: [
            "un dominio",
            "varios nombres (SAN / multi-domain)",
            "wildcard — todos los subdominios en `*.example.com`",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Un sitio brochure y un blog suelen necesitar DV (Let’s Encrypt o un análogo del panel de hosting). Una tienda necesita HTTPS correcto en todo el sitio más checkout seguro vía el proveedor de pago.",
        },
      ],
    },
    {
      title: "Mitos: hacking y «con el candado basta»",
      level: 2,
      paras: [
        "Un certificado no parchea agujeros de plugins ni sustituye backups, updates y derechos de acceso. Va del canal y de la identidad del servidor.",
        "Mezclar HTTP y HTTPS (imágenes o scripts en http en una página https) dispara advertencias y rompe la confianza — arregla el mixed content.",
      ],
      lists: [
        {
          intro: "Quién necesita HTTPS por diseño:",
          items: [
            "tiendas y pagos",
            "logins y formularios con datos personales",
            "cualquier sitio con cuenta",
            "en la práctica — casi cualquier proyecto público hoy",
          ],
        },
      ],
    },
    {
      title: "Cómo elegir y dónde conseguirlo",
      level: 2,
      paras: [
        "Criterios: tipo de sitio, si necesitas subdominios, dueño (persona o empresa) y comodidad de auto-renovación.",
        "Let’s Encrypt gratis y análogos del panel de hosting cubren DV para la mayoría. Certificados de pago son para OV/EV, seguro de la CA, requisitos especiales del cliente o un wildcard de un emisor concreto.",
      ],
      lists: [
        {
          intro: "Checklist tras la instalación:",
          items: [
            "el sitio abre en https sin errores",
            "el redirect http está montado",
            "no hay mixed content",
            "caducidad y auto-renovación están claras",
            "en Search Console / analítica — host HTTPS principal",
          ],
        },
      ],
    },
  ],
};
