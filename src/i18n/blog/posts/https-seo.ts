import type { BlogPost } from "../../../data/blog";

/** EN overlay for https-seo — same structure as RU JSON. */
export const httpsSeoEn: BlogPost = {
  slug: "https-seo",
  title: "HTTPS and SEO: ranking hygiene and a safe migration",
  date: "2021-06-17",
  category: "SEO",
  cover: "/images/blog/https-seo/cover-en.webp",
  excerpt:
    "How HTTPS affects SEO today: ranking hygiene, trust, and an http→https migration checklist without losing the index — without “green bar” myths or outdated 2014 studies.",
  lead: [
    "HTTPS (TLS) encrypts the channel between the browser and the site. For SEO it’s long been baseline: plain HTTP hurts trust and clean mirror consolidation.",
    "Below: why HTTPS matters for promotion and a migration checklist. Certificate types are covered in more depth in the SSL article; here the focus is SEO impact and the move itself.",
  ],
  faq: [
    {
      q: "Does HTTPS alone put you on page one?",
      a: "No. It’s a baseline signal and UX. Content, tech, links, and demand matter more. Without HTTPS you more often lose on trust and mixed content.",
    },
    {
      q: "Is a paid EV certificate required?",
      a: "No. For most sites DV / Let’s Encrypt is enough. EV isn’t the old “green bar” and doesn’t guarantee positions.",
    },
    {
      q: "Why did traffic drop after the switch?",
      a: "More often redirect chains, mixed content, an outdated sitemap or Search Console / Webmaster property, or http/https duplicates. Fix the tech — don’t roll back to HTTP.",
    },
    {
      q: "How does this differ from the SSL article?",
      a: "SSL covers what a certificate is and which types exist. Here we cover why HTTPS matters for SEO and how to migrate without losing signals.",
    },
    {
      q: "Do you still need Host in robots for https?",
      a: "The Host rule is obsolete for Yandex. What matters more: 301s to the canonical mirror and a correct sitemap.",
    },
  ],
  sections: [
    {
      title: "HTTPS as SEO hygiene",
      level: 2,
      paras: [
        "Search engines have long factored in a secure connection. In 2026 an HTTP site looks outdated: browser warnings, weaker form conversion, mixed-content risk.",
        "HTTPS doesn’t replace keyword work and links. It’s a required layer next to speed, mobile layout, and a clear structure.",
      ],
      lists: [
        {
          intro: "What it gives in practice:",
          items: [
            "encryption for forms and customer account areas",
            "one canonical protocol",
            "fewer warnings in Chrome and other browsers",
            "baseline for ad accounts and payment systems",
          ],
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
      title: "Myths about “factor #1”",
      level: 2,
      paras: [
        "Old reviews of HTTPS share among strong results (2014–2015) aren’t an argument today: almost all competitive sites are already on https. Correlation “winning sites use https” ≠ “https pushed them up the rankings.”",
        "Don’t expect a ranking jump from a certificate checkbox alone. Expect stable mirrors and no errors after migration.",
      ],
    },
    {
      title: "http → https migration checklist",
      level: 2,
      paras: [
        "The main risk is a crooked move: redirect chains, both protocols indexed, broken absolute http links to assets.",
        "Do 301s from every http version to the https canon; update internal links, canonicals, sitemap, and Webmaster / Search Console properties.",
      ],
      lists: [
        {
          intro: "Before and after go-live:",
          items: [
            "certificate valid, chain complete",
            "301 http→https (and www policy aligned)",
            "no mixed content (images/scripts over http)",
            "sitemap with https URLs only",
            "change of address / confirm the mirror in Webmaster tools",
            "check response codes on key landings",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "A temporary crawl dip after a protocol change is possible. Panic and rolling back to HTTP is worse than finishing 301s and recrawl. Prep for the move is days to weeks; lasting core rankings are still a separate horizon — typically two to six months after work starts.",
        },
      ],
    },
  ],
};

/** ES overlay for https-seo — same structure as RU JSON / EN. */
export const httpsSeoEs: BlogPost = {
  slug: "https-seo",
  title: "HTTPS y SEO: higiene de rankings y una migración segura",
  date: "2021-06-17",
  category: "SEO",
  cover: "/images/blog/https-seo/cover-es.webp",
  excerpt:
    "Cómo afecta HTTPS al SEO hoy: higiene de rankings, confianza y checklist de migración http→https sin perder el índice — sin mitos de «barra verde» ni estudios desfasados de 2014.",
  lead: [
    "HTTPS (TLS) cifra el canal entre el navegador y el sitio. Para SEO lleva tiempo siendo baseline: el HTTP plano perjudica la confianza y la consolidación limpia de espejos.",
    "Abajo: por qué HTTPS importa para la promoción y un checklist de migración. Los tipos de certificado se cubren con más profundidad en el artículo SSL; aquí el foco es el impacto SEO y el traslado en sí.",
  ],
  faq: [
    {
      q: "¿HTTPS solo te pone en primera página?",
      a: "No. Es una señal baseline y UX. Importan más contenido, técnica, enlaces y demanda. Sin HTTPS pierdes más a menudo por confianza y mixed content.",
    },
    {
      q: "¿Hace falta un certificado EV de pago?",
      a: "No. Para la mayoría de sitios basta DV / Let’s Encrypt. EV no es la vieja «barra verde» y no garantiza posiciones.",
    },
    {
      q: "¿Por qué bajó el tráfico tras el cambio?",
      a: "Más a menudo cadenas de redirect, mixed content, un sitemap desfasado o propiedad de Search Console / Webmaster, o duplicados http/https. Arregla la técnica — no vuelvas a HTTP.",
    },
    {
      q: "¿En qué se diferencia del artículo SSL?",
      a: "SSL cubre qué es un certificado y qué tipos existen. Aquí cubrimos por qué HTTPS importa para SEO y cómo migrar sin perder señales.",
    },
    {
      q: "¿Sigue haciendo falta Host en robots para https?",
      a: "La regla Host está obsoleta para Yandex. Importa más: 301s al espejo canónico y un sitemap correcto.",
    },
  ],
  sections: [
    {
      title: "HTTPS como higiene SEO",
      level: 2,
      paras: [
        "Los buscadores llevan tiempo teniendo en cuenta una conexión segura. En 2026 un sitio HTTP parece desfasado: advertencias del navegador, peor conversión de formularios, riesgo de mixed content.",
        "HTTPS no sustituye el trabajo de keywords y enlaces. Es una capa obligatoria junto a velocidad, layout móvil y una estructura clara.",
      ],
      lists: [
        {
          intro: "Qué da en la práctica:",
          items: [
            "cifrado para formularios y áreas de cuenta de cliente",
            "un protocolo canónico",
            "menos advertencias en Chrome y otros navegadores",
            "baseline para cuentas de ads y sistemas de pago",
          ],
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
      title: "Mitos sobre el «factor decisivo»",
      level: 2,
      paras: [
        "Reviews viejas de la cuota HTTPS entre resultados fuertes (2014–2015) no son un argumento hoy: casi todos los sitios competitivos ya están en https. Correlación «los sitios ganadores usan https» ≠ «https los empujó arriba en los rankings».",
        "No esperes un salto de rankings solo por un checkbox de certificado. Espera espejos estables y sin errores tras la migración.",
      ],
    },
    {
      title: "Checklist de migración http → https",
      level: 2,
      paras: [
        "El riesgo principal es un traslado torcido: cadenas de redirect, ambos protocolos indexados, enlaces absolutos http rotos a assets.",
        "Haz 301s desde cada versión http al canónico https; actualiza enlaces internos, canonicals, sitemap y propiedades de Webmaster / Search Console.",
      ],
      lists: [
        {
          intro: "Antes y después del go-live:",
          items: [
            "certificado válido, cadena completa",
            "301 http→https (y política www alineada)",
            "sin mixed content (imágenes/scripts por http)",
            "sitemap solo con URLs https",
            "cambio de dirección / confirmar el espejo en herramientas de webmaster",
            "revisar códigos de respuesta en landings clave",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Seguridad del sitio",
          href: "/es/blog/bezopasnost-sayta/",
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Una bajada temporal de crawl tras un cambio de protocolo es posible. El pánico y volver a HTTP es peor que terminar los 301s y el re-crawl. La prep del traslado es de días a semanas; los rankings duraderos del núcleo siguen siendo otro horizonte — típicamente dos a seis meses tras arrancar el trabajo.",
        },
      ],
    },
  ],
};
