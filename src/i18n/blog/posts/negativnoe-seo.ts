import type { BlogPost } from "../../../data/blog";

/** EN overlay for negativnoe-seo — same structure as RU JSON. */
export const negativnoeSeoEn: BlogPost = {
  slug: "negativnoe-seo",
  title: "Negative SEO: what attacks threaten and how to defend",
  date: "2020-07-23",
  category: "SEO",
  cover: "/images/blog/negativnoe-seo/cover-en.webp",
  excerpt:
    "Negative SEO means attempts to harm someone else’s site in search. Which signals show up, how to monitor and defend — without attack how-tos, DDoS, or “ban a competitor” guides.",
  lead: [
    "Negative SEO is manipulation aimed at worsening another site’s rankings or reputation: toxic links, complaints, content copying, hacking. Searches like “how to ban a competitor” usually lead to harmful advice; we cover defense.",
    "Below: typical threats from a site owner’s view, and what to do legally. There are no instructions for attacks, DDoS, hacking, or link bombing — and there won’t be.",
  ],
  faq: [
    {
      q: "Is this a guide to remove a competitor from search?",
      a: "No. Defense and diagnosis only. Attacking other sites risks you too (law, reputation, blowback).",
    },
    {
      q: "Does “file a complaint and the competitor is banned” work?",
      a: "A complaint without grounds usually goes nowhere. Engines look at evidence and site quality. False reports are a bad strategy.",
    },
    {
      q: "What is an external link bomb?",
      a: "A sudden flood of junk links to your domain. Monitor backlinks; when needed use disavow/rejection tools per the engine’s rules and strengthen your own profile.",
    },
    {
      q: "Someone stole our copy — what should we do?",
      a: "Document the facts, contact the copy sites, involve a lawyer if needed. On your side, strengthen uniqueness and publish/authority signals.",
    },
    {
      q: "Do DDoS and hacking count as SEO?",
      a: "They’re attacks on availability and security. SEO articles don’t fold them into promotion; look at infrastructure defense and site-security materials.",
    },
    {
      q: "What about competitor affiliate sites?",
      a: "A network of near-identical sites under one beneficiary risks a filter for them. You care more about not spawning your own mirrors; see the affiliate filter.",
    },
    {
      q: "How do I know a drop isn’t from an attack?",
      a: "Check updates, seasonality, demand, your own edits, Webmaster/GSC. Don’t blame “the competitor banned us” without data.",
    },
    {
      q: "Where do I file a real spam report?",
      a: "Webmaster tools / search-engine spam forms — against a specific URL violation, without fabricating evidence.",
    },
  ],
  sections: [
    {
      title: "Why “ban the competitor” is a bad frame",
      level: 2,
      paras: [
        "Search ranks on quality signals and query fit. Growing your own site steadily beats wars of destruction.",
        "Schemes from old posts (buy access, bomb with links, DDoS) are either illegal or easily hurt the initiator. We don’t describe them as instructions.",
        "If a competitor breaks the law or a platform’s rules — use official channels and a lawyer, not a “nuke the rival” tariff.",
      ],
    },
    {
      title: "Typical threats (defense overview)",
      level: 2,
      paras: [
        "Toxic backlinks and a sudden rise in spam donors.",
        "Content copied onto third-party sites.",
        "Complaints and behavioral manipulation (hard to prove, but monitoring still matters).",
        "CMS compromise: spam pages, redirects, hidden text — often looks like a “filter,” but it’s a hack.",
        "Availability attacks (DDoS) — infrastructure, not a “button in Webmaster.”",
      ],
      notes: [
        {
          kind: "tip",
          title: "No attack how-tos",
          text: "Details of running link bombs, cloaking “for a complaint,” hacking, and DDoS are intentionally omitted.",
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: "Link profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "What to monitor",
      level: 2,
      paras: [
        "Webmaster / Search Console: security, index issues, sharp coverage drops.",
        "Backlinks: anomalous spikes of junk domains.",
        "Uniqueness and scans for copies of key URLs.",
        "CMS file integrity, unknown admins, strange cron jobs and redirects.",
        "Uptime and CDN/overload protection — if the business is availability-critical.",
      ],
      lists: [
        {
          intro: "Monthly mini-ritual:",
          items: [
            "core rankings/traffic snapshot",
            "security check in the panels",
            "a look at new referring domains",
            "backup and CMS/plugin updates",
          ],
        },
      ],
      links: [
        {
          label: "Search-engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Affiliate filter",
          href: "/en/blog/affiliat-filtr/",
        },
      ],
    },
    {
      title: "What to do if you suspect an attack",
      level: 2,
      paras: [
        "First separate: update / your own mistake / hack / external pressure. Logs, backups, webmaster panels.",
        "On a hack — isolate, restore a clean copy, change passwords, work with the host/contractor. Don’t “buy links back.”",
        "On toxic links — document, follow the engine’s current guidance, strengthen your content and natural profile.",
        "On content copies — DMCA/platform complaints under their rules; a lawyer if there’s damage.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Negative SEO is a risk to your site; the answer is monitoring and defense, not war.",
        "Attacks like DDoS and hacking sit outside “white SEO” and often outside the law.",
        "Grow your own property: tech, content, links by the rules — stronger than “ban the competitor.”",
      ],
    },
  ],
  closing: [
    "Set up Webmaster monitoring, backups, and link control — you fix real holes faster than hunting a “way to remove a competitor from the SERP.”",
  ],
  related: [
    "filtry-poiskovikov",
    "bezopasnost-sayta",
    "ssylochnyy-profil",
    "affiliat-filtr",
    "proverka-unikalnosti",
    "samostoyatelnoe-seo",
  ],
};

/** ES overlay for negativnoe-seo — same structure as RU JSON / EN. */
export const negativnoeSeoEs: BlogPost = {
  slug: "negativnoe-seo",
  title: "SEO negativo: qué ataques amenazan y cómo defenderse",
  date: "2020-07-23",
  category: "SEO",
  cover: "/images/blog/negativnoe-seo/cover-es.webp",
  excerpt:
    "SEO negativo son intentos de dañar el sitio de otro en la búsqueda. Qué señales aparecen, cómo monitorizar y defenderse — sin how-tos de ataque, DDoS ni guías de «banear a un competidor».",
  lead: [
    "SEO negativo es manipulación orientada a empeorar el ranking o la reputación de otro sitio: enlaces tóxicos, denuncias, copia de contenido, hacking. Búsquedas como «cómo banear a un competidor» suelen llevar a consejos dañinos; aquí cubrimos la defensa.",
    "Abajo: amenazas típicas desde la vista del dueño del sitio, y qué hacer legalmente. No hay instrucciones para ataques, DDoS, hacking ni link bombing — y no las habrá.",
  ],
  faq: [
    {
      q: "¿Es una guía para sacar a un competidor de la búsqueda?",
      a: "No. Solo defensa y diagnóstico. Atacar otros sitios también te arriesga a ti (ley, reputación, efecto boomerang).",
    },
    {
      q: "¿Funciona «presentar una denuncia y el competidor queda baneado»?",
      a: "Una denuncia sin fundamentos suele no ir a ningún lado. Los buscadores miran evidencia y calidad del sitio. Los reports falsos son una mala estrategia.",
    },
    {
      q: "¿Qué es un bombardeo de enlaces externos?",
      a: "Una inundación súbita de enlaces basura hacia tu dominio. Monitoriza backlinks; cuando haga falta usa herramientas de disavow/rechazo según las reglas del buscador y refuerza tu propio perfil.",
    },
    {
      q: "Nos robaron el copy — ¿qué hacer?",
      a: "Documenta los hechos, contacta a los sitios copia, involucra a un abogado si hace falta. De tu lado, refuerza unicidad y señales de publicación/autoridad.",
    },
    {
      q: "¿DDoS y hacking cuentan como SEO?",
      a: "Son ataques a la disponibilidad y la seguridad. Los artículos de SEO no los meten en promoción; mira defensa de infraestructura y materiales de seguridad del sitio.",
    },
    {
      q: "¿Y los sitios afiliados del competidor?",
      a: "Una red de sitios casi idénticos bajo un mismo beneficiario arriesga un filtro para ellos. A ti te importa más no generar tus propios espejos; ver el filtro de afiliados.",
    },
    {
      q: "¿Cómo sé que una caída no viene de un ataque?",
      a: "Revisa updates, estacionalidad, demanda, tus propias ediciones, Webmaster/GSC. No culpes a «el competidor nos baneó» sin datos.",
    },
    {
      q: "¿Dónde presento un report de spam real?",
      a: "Herramientas de Webmaster / formularios de spam del buscador — contra una violación concreta de URL, sin fabricar evidencia.",
    },
  ],
  sections: [
    {
      title: "Por qué «banear al competidor» es un mal marco",
      level: 2,
      paras: [
        "La búsqueda rankea por señales de calidad y encaje con la query. Crecer tu propio sitio con constancia gana a guerras de destrucción.",
        "Esquemas de posts antiguos (comprar acceso, bombardear con enlaces, DDoS) o son ilegales o dañan fácilmente al iniciador. No los describimos como instrucciones.",
        "Si un competidor rompe la ley o las reglas de una plataforma — usa canales oficiales y un abogado, no una tarifa de «aniquilar al rival».",
      ],
    },
    {
      title: "Amenazas típicas (overview de defensa)",
      level: 2,
      paras: [
        "Backlinks tóxicos y un alza súbita de donors de spam.",
        "Contenido copiado en sitios de terceros.",
        "Denuncias y manipulación de comportamiento (difícil de probar, pero el monitoreo sigue importando).",
        "Compromiso del CMS: páginas de spam, redirects, texto oculto — a menudo parece un «filtro», pero es un hack.",
        "Ataques de disponibilidad (DDoS) — infraestructura, no un «botón en Webmaster».",
      ],
      notes: [
        {
          kind: "tip",
          title: "Sin how-tos de ataque",
          text: "Los detalles de montar link bombs, cloaking «para una denuncia», hacking y DDoS se omiten a propósito.",
        },
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/es/blog/bezopasnost-sayta/",
        },
        {
          label: "Perfil de enlaces",
          href: "/es/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Qué monitorizar",
      level: 2,
      paras: [
        "Webmaster / Search Console: seguridad, problemas de índice, caídas bruscas de cobertura.",
        "Backlinks: picos anómalos de dominios basura.",
        "Unicidad y escaneos de copias de URLs clave.",
        "Integridad de archivos del CMS, admins desconocidos, cron jobs y redirects raros.",
        "Uptime y protección CDN/sobrecarga — si el negocio es crítico por disponibilidad.",
      ],
      lists: [
        {
          intro: "Mini ritual mensual:",
          items: [
            "snapshot de rankings/tráfico del núcleo",
            "chequeo de seguridad en los paneles",
            "un vistazo a nuevos dominios referentes",
            "backup y updates de CMS/plugins",
          ],
        },
      ],
      links: [
        {
          label: "Filtros de buscadores",
          href: "/es/blog/filtry-poiskovikov/",
        },
        {
          label: "Filtro de afiliados",
          href: "/blog/affiliat-filtr/",
        },
      ],
    },
    {
      title: "Qué hacer si sospechas un ataque",
      level: 2,
      paras: [
        "Primero separa: update / tu propio error / hack / presión externa. Logs, backups, paneles de webmaster.",
        "Ante un hack — aísla, restaura una copia limpia, cambia contraseñas, trabaja con el host/contratista. No «compres enlaces de vuelta».",
        "Ante enlaces tóxicos — documenta, sigue la guía actual del buscador, refuerza tu contenido y un perfil natural.",
        "Ante copias de contenido — denuncias DMCA/plataforma bajo sus reglas; un abogado si hay daño.",
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "El SEO negativo es un riesgo para tu sitio; la respuesta es monitoreo y defensa, no guerra.",
        "Ataques como DDoS y hacking quedan fuera del «SEO white» y a menudo fuera de la ley.",
        "Haz crecer tu propia propiedad: técnica, contenido, enlaces según las reglas — más fuerte que «banear al competidor».",
      ],
    },
  ],
  closing: [
    "Monta monitoreo en Webmaster, backups y control de enlaces — reparas agujeros reales más rápido que cazar una «forma de sacar a un competidor del SERP».",
  ],
  related: [
    "filtry-poiskovikov",
    "bezopasnost-sayta",
    "ssylochnyy-profil",
    "proverka-unikalnosti",
    "samostoyatelnoe-seo",
    "affiliat-filtr",
  ],
};
