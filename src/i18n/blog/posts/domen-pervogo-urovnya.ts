import type { BlogPost } from "../../../data/blog";

/** EN overlay for domen-pervogo-urovnya — same structure as RU JSON. */
export const domenPervogoUrovnyaEn: BlogPost = {
  slug: "domen-pervogo-urovnya",
  title: "First-level domains: what a TLD is and how it affects SEO",
  date: "2021-10-12",
  category: "SEO",
  cover: "/images/blog/domen-pervogo-urovnya/cover-en.webp",
  excerpt:
    "What a first-level domain (TLD) is: .ru, .com, and other zones. How name levels differ, how the zone ties to SEO and traffic, and how to choose a name.",
  lead: [
    "A first-level domain (TLD) is the tail after the last dot: `.ru`, `.com`, `.online`. Site owners don’t invent zones — they already exist; creativity lives in the second-level name.",
    "Below: how domain levels work, what zone types exist, and a realistic take on SEO impact. A good name helps the brand and SERP clicks, but it doesn’t replace content, tech, and links.",
  ],
  faq: [
    {
      q: "What is a first-level domain?",
      a: "A TLD is the zone at the end of the name (`example.ru` → `.ru`). Everything to the left is a lower level (second, third, and so on).",
    },
    {
      q: "Can I create my own .mybrand zone?",
      a: "For a typical business — no. New gTLDs come through ICANN and registries; for a site you pick an existing zone and a free second-level name.",
    },
    {
      q: "Is `.ru` better than `.com` for local search in Russia?",
      a: "For a Russian audience, `.ru` / `.рф` are often expected. Local signals and content matter more than “zone magic”; a strong `.com` can rank too.",
    },
    {
      q: "Does a keyword in the domain help?",
      a: "A mild plus for click-through and clarity is possible, but exact-match isn’t a cheat boost anymore. A narrow keyword hurts if the niche changes.",
    },
    {
      q: "How is a subdomain different from a TLD?",
      a: "A subdomain sits on the left: `shop.example.ru`. The TLD sits on the right: `.ru`. Subdomains often cover sections, regions, or services.",
    },
  ],
  sections: [
    {
      title: "Domain name levels",
      level: 2,
      paras: [
        "Read right to left. The first level is the zone (`.com`). The second is your name (`google` in `google.com`). Third and further are subdomains or compound zones like `example.co.uk` (public-suffix structure gets more complex).",
      ],
      lists: [
        {
          intro: "Examples:",
          items: [
            "`site.ru` — second level + `.ru`",
            "`blog.site.ru` — subdomain",
            "`mail.yandex.ru` — a service on a subdomain",
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
      title: "What kinds of TLD exist",
      level: 2,
      paras: [
        "Country-code (ccTLD): `.ru`, `.by`, `.kz`, and so on. Generic (gTLD): `.com`, `.net`, `.org`, `.online`, `.shop`, and hundreds more. Some zones imply an industry or registration limits.",
      ],
      lists: [
        {
          intro: "Zone choice cues:",
          items: [
            "where the main audience is",
            "trust in the niche (what clients expect to see)",
            "whether a short second-level name is free",
            "registry legal rules",
          ],
        },
      ],
    },
    {
      title: "Impact on SEO and traffic",
      level: 2,
      paras: [
        "Search engines use geo signals, including the zone, but it’s one factor among many. Content, structure, E-E-A-T signals, links, and behavior matter more.",
        "The name affects CTR: short, pronounceable names without spammy hyphens get more clicks. A keyword in the domain won’t replace landings and a keyword set.",
      ],
      lists: [
        {
          intro: "Practical tips:",
          items: [
            "a brand or clear general word beats a narrow “pizza-sushi-2021”",
            "check trademarks and confusion with competitors",
            "canonicalize www/non-www and HTTPS with redirects",
            "don’t expect page-one rankings only because of a `.ru` zone",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Picking a domain is part of site prep. Ranking for a commercial keyword set is a separate process — often planned over 2–6 months of work, not the result of one zone.",
        },
      ],
    },
    {
      title: "How to choose a name",
      level: 2,
      paras: [
        "Strategy first (brand / geo / niche), then availability in the zones you need, then registrar signup and DNS pointed at hosting.",
      ],
      lists: [
        {
          intro: "Name checklist:",
          items: [
            "easy to say on a call",
            "no ambiguous spelling",
            "free in the priority zone",
            "email and social handles free if possible",
            "registration term and auto-renew set",
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
  ],
};

/** ES overlay for domen-pervogo-urovnya — same structure as RU JSON / EN. */
export const domenPervogoUrovnyaEs: BlogPost = {
  slug: "domen-pervogo-urovnya",
  title: "Dominios de primer nivel: qué es un TLD y cómo influye en el SEO",
  date: "2021-10-12",
  category: "SEO",
  cover: "/images/blog/domen-pervogo-urovnya/cover-es.webp",
  excerpt:
    "Qué es un dominio de primer nivel (TLD): .ru, .com y otras zonas. Cómo se diferencian los niveles del nombre, qué tiene que ver la zona con SEO y tráfico, y cómo elegir el nombre.",
  lead: [
    "Un dominio de primer nivel (TLD) es la cola después del último punto: `.ru`, `.com`, `.online`. El dueño del sitio no inventa zonas — ya existen; la creatividad vive en el nombre de segundo nivel.",
    "Abajo: cómo funcionan los niveles del dominio, qué tipos de zona hay y una mirada realista al impacto SEO. Un buen nombre ayuda a la marca y a los clics en el SERP, pero no sustituye contenido, técnica ni enlaces.",
  ],
  faq: [
    {
      q: "¿Qué es un dominio de primer nivel?",
      a: "Un TLD es la zona al final del nombre (`example.ru` → `.ru`). Todo a la izquierda es un nivel inferior (segundo, tercero, y así).",
    },
    {
      q: "¿Puedo crear mi propia zona .mimarca?",
      a: "Para un negocio típico — no. Los gTLD nuevos pasan por ICANN y registros; para un sitio eliges una zona existente y un nombre de segundo nivel libre.",
    },
    {
      q: "¿Es mejor `.ru` que `.com` para búsqueda local en Rusia?",
      a: "Para audiencia rusa, `.ru` / `.рф` suelen ser lo esperado. Señales locales y contenido pesan más que la «magia de la zona»; un `.com` fuerte también puede rankear.",
    },
    {
      q: "¿Ayuda una keyword en el dominio?",
      a: "Un plus suave para CTR y claridad es posible, pero el exact-match ya no es un atajo. Una keyword estrecha duele si el nicho cambia.",
    },
    {
      q: "¿En qué se diferencia un subdominio de un TLD?",
      a: "El subdominio va a la izquierda: `shop.example.ru`. El TLD va a la derecha: `.ru`. Los subdominios suelen cubrir secciones, regiones o servicios.",
    },
  ],
  sections: [
    {
      title: "Niveles del nombre de dominio",
      level: 2,
      paras: [
        "Léelo de derecha a izquierda. El primer nivel es la zona (`.com`). El segundo es tu nombre (`google` en `google.com`). Tercero y siguientes son subdominios o zonas compuestas como `example.co.uk` (la estructura public-suffix se complica).",
      ],
      lists: [
        {
          intro: "Ejemplos:",
          items: [
            "`site.ru` — segundo nivel + `.ru`",
            "`blog.site.ru` — subdominio",
            "`mail.yandex.ru` — un servicio en subdominio",
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
      title: "Qué tipos de TLD existen",
      level: 2,
      paras: [
        "De país (ccTLD): `.ru`, `.by`, `.kz`, etc. Genéricos (gTLD): `.com`, `.net`, `.org`, `.online`, `.shop` y cientos más. Algunas zonas implican un sector o límites de registro.",
      ],
      lists: [
        {
          intro: "Pistas para elegir zona:",
          items: [
            "dónde está la audiencia principal",
            "confianza en el nicho (qué esperan ver los clientes)",
            "si un segundo nivel corto está libre",
            "reglas legales del registro",
          ],
        },
      ],
    },
    {
      title: "Impacto en SEO y tráfico",
      level: 2,
      paras: [
        "Los buscadores usan señales geo, incluida la zona, pero es un factor entre muchos. Contenido, estructura, señales E-E-A-T, enlaces y comportamiento pesan más.",
        "El nombre afecta al CTR: nombres cortos, pronunciables y sin guiones spam reciben más clics. Una keyword en el dominio no sustituye landings ni un set de keywords.",
      ],
      lists: [
        {
          intro: "Tips prácticos:",
          items: [
            "una marca o palabra general clara gana a un «pizza-sushi-2021» estrecho",
            "revisa marcas y confusión con competidores",
            "canonicaliza www/sin-www y HTTPS con redirects",
            "no esperes primera página solo por una zona `.ru`",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Elegir dominio forma parte de la preparación del sitio. Rankear por un set comercial de keywords es un proceso aparte — a menudo planificado en 2–6 meses de trabajo, no el resultado de una zona.",
        },
      ],
    },
    {
      title: "Cómo elegir el nombre",
      level: 2,
      paras: [
        "Primero la estrategia (marca / geo / nicho), luego disponibilidad en las zonas que necesitas, luego alta en el registrador y DNS apuntando al hosting.",
      ],
      lists: [
        {
          intro: "Checklist del nombre:",
          items: [
            "fácil de decir en una llamada",
            "sin ortografía ambigua",
            "libre en la zona prioritaria",
            "email y handles sociales libres si se puede",
            "plazo de registro y auto-renovación configurados",
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
  ],
};
