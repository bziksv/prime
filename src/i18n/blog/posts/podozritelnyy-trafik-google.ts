import type { BlogPost } from "../../../data/blog";

/** EN overlay for podozritelnyy-trafik-google — same structure as RU JSON. */
export const podozritelnyyTrafikGoogleEn: BlogPost = {
  slug: "podozritelnyy-trafik-google",
  title: "Suspicious traffic in Google: causes and what to do",
  date: "2022-01-28",
  category: "SEO",
  cover: "/images/blog/podozritelnyy-trafik-google/cover-en.webp",
  excerpt:
    "Captcha and Google’s unusual-traffic warning from your network: typical causes and a calm step-by-step check — without panic.",
  lead: [
    "A message like “we have detected unusual traffic from your network” and a captcha before search means Google temporarily doesn’t trust requests from your IP or network.",
    "It’s more often about network security and software than a “site penalty.” Below: what to do first and where the signal usually comes from.",
  ],
  faq: [
    {
      q: "Is this a ban of my site in search?",
      a: "Usually no. Access to Google from a specific IP or network is blocked or made harder. Your site isn’t removed from the index by this message alone.",
    },
    {
      q: "Why does a captcha appear?",
      a: "Too many similar requests from one address: bots, malware, shared Wi‑Fi, an ISP glitch, or aggressive scraping.",
    },
    {
      q: "What should I do first?",
      a: "Scan devices with antivirus, reboot the router, complete the captcha, and tell the corporate network admin.",
    },
    {
      q: "Is it related to SEO scrapers?",
      a: "It can be: mass SERP harvests without limits look like bots. Lower frequency, change IP or proxy per the service rules, and don’t hammer search with DIY scripts.",
    },
    {
      q: "When should I call the ISP?",
      a: "If captcha hits every device on one network and still appears after cleaning the PC — it may be the ISP or neighbors on the same IP.",
    },
  ],
  sections: [
    {
      title: "What to do first",
      level: 2,
      paras: [
        "Google cuts unnatural streams: identical queries, malware activity, manipulation. After the warning:",
      ],
      lists: [
        {
          intro: null,
          items: [
            "scan PCs and phones with up-to-date antivirus",
            "reboot the router/modem (many ISPs rotate IP)",
            "complete the captcha and check whether the block lifted",
            "in an office — tell the system administrator",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Note",
          text: "Captcha on unfamiliar sites plus odd SMS is a reason to urgently check the device for malware — not only to “Google the error.”",
        },
      ],
      tables: [
        {
          caption: "Quick order",
          headers: ["Step", "Why"],
          rows: [
            ["Antivirus + cleanup", "Remove bots on the device"],
            ["Router reboot", "New IP / session reset"],
            ["Captcha in Google", "Confirm you’re human"],
            ["Check other devices", "One PC or the whole network"],
          ],
        },
      ],
    },
    {
      title: "Where suspicious traffic comes from",
      level: 2,
      paras: [
        "The signal may come not from your site, but from the address you use to reach the internet.",
      ],
      lists: [
        {
          intro: "Typical causes:",
          items: [
            "ISP glitches or NAT — captcha for many clients on one network",
            "shared Wi‑Fi / office IP: a neighbor’s infected PC hurts everyone",
            "viruses and stealers that send requests themselves",
            "pirated OS/cracks with “activators” phoning home",
            "aggressive scrapers and bots without anti-abuse limits",
          ],
        },
      ],
    },
    {
      title: "How to fix it",
      level: 2,
      paras: ["Work in layers: device → network → automation habits."],
      lists: [
        {
          intro: null,
          items: [
            "remove found threats, update protection",
            "clear cookies/cache, change passwords for important accounts",
            "check router settings; reset if needed",
            "use official OS and software",
            "for data collection — only tools with limits and official APIs, no hammering the SERP",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "If it doesn’t help",
          text: "Write the ISP or switch networks (mobile data as a check). In parallel make sure the site server isn’t hacked and isn’t sending spam — that’s a different track; see technical SEO audit.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};

/** ES overlay for podozritelnyy-trafik-google — same structure as RU JSON / EN. */
export const podozritelnyyTrafikGoogleEs: BlogPost = {
  slug: "podozritelnyy-trafik-google",
  title: "Tráfico sospechoso en Google: causas y qué hacer",
  date: "2022-01-28",
  category: "SEO",
  cover: "/images/blog/podozritelnyy-trafik-google/cover-es.webp",
  excerpt:
    "Captcha y el aviso de Google de tráfico inusual desde tu red: causas típicas y un chequeo paso a paso en calma — sin pánico.",
  lead: [
    "Un mensaje del tipo «hemos detectado tráfico inusual desde tu red» y un captcha antes de buscar significa que Google temporalmente no confía en las peticiones desde tu IP o red.",
    "Más a menudo habla de seguridad de red y software que de una «penalización del sitio». Abajo: qué hacer primero y de dónde suele venir la señal.",
  ],
  faq: [
    {
      q: "¿Es un ban de mi sitio en búsqueda?",
      a: "Normalmente no. Se bloquea o se dificulta el acceso a Google desde una IP o red concreta. Tu sitio no se quita del índice solo por este mensaje.",
    },
    {
      q: "¿Por qué aparece un captcha?",
      a: "Demasiadas peticiones parecidas desde una dirección: bots, malware, Wi‑Fi compartido, un fallo del ISP o scraping agresivo.",
    },
    {
      q: "¿Qué hago primero?",
      a: "Escanea dispositivos con antivirus, reinicia el router, completa el captcha y avisa al admin de la red corporativa.",
    },
    {
      q: "¿Está relacionado con scrapers SEO?",
      a: "Puede: cosechas masivas de SERP sin límites se ven como bots. Baja la frecuencia, cambia IP o proxy según las reglas del servicio y no machaques la búsqueda con scripts caseros.",
    },
    {
      q: "¿Cuándo llamar al ISP?",
      a: "Si el captcha pega a todos los dispositivos de una red y sigue apareciendo tras limpiar el PC — puede ser el ISP o vecinos en la misma IP.",
    },
  ],
  sections: [
    {
      title: "Qué hacer primero",
      level: 2,
      paras: [
        "Google corta streams no naturales: consultas idénticas, actividad de malware, manipulación. Tras el aviso:",
      ],
      lists: [
        {
          intro: null,
          items: [
            "escanea PCs y teléfonos con antivirus al día",
            "reinicia el router/módem (muchos ISP rotan la IP)",
            "completa el captcha y comprueba si se levantó el bloqueo",
            "en una oficina — avisa al administrador de sistemas",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Nota",
          text: "Captcha en sitios desconocidos más SMS raros es motivo para revisar el dispositivo con urgencia por malware — no solo para «googlear el error».",
        },
      ],
      tables: [
        {
          caption: "Orden rápido",
          headers: ["Paso", "Por qué"],
          rows: [
            ["Antivirus + limpieza", "Quitar bots del dispositivo"],
            ["Reinicio del router", "Nueva IP / reset de sesión"],
            ["Captcha en Google", "Confirmar que eres humano"],
            ["Revisar otros dispositivos", "Un PC o toda la red"],
          ],
        },
      ],
    },
    {
      title: "De dónde viene el tráfico sospechoso",
      level: 2,
      paras: [
        "La señal puede venir no de tu sitio, sino de la dirección con la que sales a internet.",
      ],
      lists: [
        {
          intro: "Causas típicas:",
          items: [
            "fallos del ISP o NAT — captcha para muchos clientes en una red",
            "Wi‑Fi compartido / IP de oficina: el PC infectado de un vecino duele a todos",
            "virus y stealers que envían peticiones solos",
            "SO/cracks piratas con «activadores» que llaman a casa",
            "scrapers y bots agresivos sin límites anti-abuse",
          ],
        },
      ],
    },
    {
      title: "Cómo arreglarlo",
      level: 2,
      paras: ["Trabaja por capas: dispositivo → red → hábitos de automatización."],
      lists: [
        {
          intro: null,
          items: [
            "quita amenazas encontradas, actualiza la protección",
            "limpia cookies/caché, cambia contraseñas de cuentas importantes",
            "revisa ajustes del router; resetea si hace falta",
            "usa SO y software oficiales",
            "para recolección de datos — solo tools con límites y APIs oficiales, sin machacar el SERP",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Si no ayuda",
          text: "Escribe al ISP o cambia de red (datos móviles como chequeo). En paralelo asegúrate de que el servidor del sitio no está hackeado y no envía spam — eso es otra pista; ver auditoría SEO técnica.",
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};
