import type { BlogPost } from "../../../data/blog";

/** EN overlay for ip-telefoniya — same structure as RU JSON. */
export const ipTelefoniyaEn: BlogPost = {
  slug: "ip-telefoniya",
  title: "Business IP telephony: why it matters and how to launch",
  date: "2019-07-23",
  category: "Digital marketing",
  cover: "/images/blog/ip-telefoniya/cover-en.webp",
  excerpt:
    "What IP telephony (VoIP) is: voice over the internet, office and call-center use cases, what to check when picking a provider, and how to launch without promising “always −15%.”",
  lead: [
    "IP telephony is phone service over IP: voice is digitized and travels the internet (SIP and related setups), not only a classic copper line.",
    "Below: why businesses use it, how to choose a provider, and what to verify at connect. A virtual number is a related tool; this piece focuses on office/cloud telephony and the call center. We don’t lock 2019 plan prices.",
  ],
  faq: [
    {
      q: "How is it different from a virtual number?",
      a: "A virtual number is often one cloud DID for a job. IP telephony is broader: PBX, queues, recording, IVR, many agents, CRM integration.",
    },
    {
      q: "Do you need stable internet?",
      a: "Yes. Voice cares about latency, jitter, and packet loss. A dedicated link or QoS priority beats the neighbor’s Wi‑Fi.",
    },
    {
      q: "Softphone or desk phone?",
      a: "Both work. Softphones scale remote agents faster; handsets are handy on the floor. Many teams run a hybrid.",
    },
    {
      q: "Is savings guaranteed?",
      a: "Long-distance and line scaling are often cheaper, but it depends on call mix and plan. We don’t promise a fixed “−15% for everyone.”",
    },
    {
      q: "Can you keep a local number?",
      a: "Often yes — port or attach the number with the IP telephony provider. Check porting terms in the contract.",
    },
  ],
  sections: [
    {
      title: "Jobs IP telephony covers",
      level: 2,
      paras: [
        "One call center across several cities: the customer dials a local number, and a shared queue answers. When the office moves, the number doesn’t die with the wall jack.",
        "Staffing stays flexible: fewer agents in winter, more licenses by the minute in peak season — without weeks of cable work. Short high-volume calls (taxi, delivery) often cost less on per-minute or packet IP plans than old “always round up the minute” billing — but run the math on your own traffic.",
      ],
      lists: [
        {
          intro: "Typical upsides for business:",
          items: [
            "queues and IVR",
            "recording and call stats",
            "forwarding and groups",
            "CRM integration",
            "remote agents on softphones",
          ],
        },
      ],
      links: [
        {
          label: "Virtual number",
          href: "/en/blog/virtualnyy-nomer/",
        },
        {
          label: "CRM",
          href: "/en/blog/crm/",
        },
      ],
    },
    {
      title: "How to choose a provider",
      level: 2,
      paras: [
        "Look past per-minute price: SLA, channel quality, call recording, API/CRM, support, number geography, failover when internet drops.",
        "Read the contract: who owns quality, how billing is counted, downtime compensation, where recordings live and for how long.",
      ],
      lists: [
        {
          intro: "Selection checklist:",
          items: [
            "the local / toll-free numbers you need",
            "queues, IVR, recording",
            "reports and CRM export",
            "a voice quality test",
            "a clear contract and invoices",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "A free app with no channel responsibility and a serious call center are different classes. For sales, treat line downtime as lost leads.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Setup and control",
      level: 2,
      paras: [
        "After the contract: PBX/cloud setup, agent accounts, routes, and if needed a gateway plus backup channel. A softphone installs in minutes; a mature stack (IVR, CRM, recording) takes planning — not “thirty minutes and forget.”",
        "In the console watch missed calls, answer time, queue load, and cost. Add ad-number call tracking when you need attribution.",
      ],
      lists: [
        {
          intro: "After launch:",
          items: [
            "answer and escalation playbook",
            "missed-call dashboard",
            "deal sync in CRM",
            "backup internet / mobile forwarding",
            "recording audit under personal-data rules",
          ],
        },
      ],
      links: [
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  closing: [
    "IP telephony gives flexible lines, queues, and call analytics — if the internet is solid and the provider owns the outcome. Describe scenarios (cities, season, CRM), test voice, and don’t confuse a cheap softphone with stable sales connectivity.",
  ],
  related: [
    "virtualnyy-nomer",
    "crm",
    "skvoznaya-analitika",
    "kpi-menedzhera-prodazh",
    "formy-zahvata",
    "dashboard",
  ],
};

/** ES overlay for ip-telefoniya — same structure as RU JSON / EN. */
export const ipTelefoniyaEs: BlogPost = {
  slug: "ip-telefoniya",
  title: "Telefonía IP para negocios: por qué importa y cómo lanzarla",
  date: "2019-07-23",
  category: "Digital marketing",
  cover: "/images/blog/ip-telefoniya/cover-es.webp",
  excerpt:
    "Qué es la telefonía IP (VoIP): voz por internet, casos de oficina y call center, qué comprobar al elegir proveedor y cómo lanzar sin prometer «siempre −15%».",
  lead: [
    "La telefonía IP es servicio telefónico sobre IP: la voz se digitaliza y viaja por internet (SIP y setups relacionados), no solo por una línea de cobre clásica.",
    "Abajo: por qué la usan los negocios, cómo elegir proveedor y qué verificar al conectar. Un número virtual es una tool relacionada; esta pieza se centra en telefonía de oficina/nube y el call center. No fijamos precios de planes de 2019.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de un número virtual?",
      a: "Un número virtual suele ser un DID en la nube para un trabajo. La telefonía IP es más amplia: PBX, colas, grabación, IVR, muchos agentes, integración CRM.",
    },
    {
      q: "¿Hace falta internet estable?",
      a: "Sí. A la voz le importan latencia, jitter y pérdida de paquetes. Un enlace dedicado o prioridad QoS gana al Wi‑Fi del vecino.",
    },
    {
      q: "¿Softphone o teléfono de mesa?",
      a: "Ambos funcionan. Los softphones escalan agentes remotos antes; los handsets son cómodos en planta. Muchos equipos van en híbrido.",
    },
    {
      q: "¿El ahorro está garantizado?",
      a: "Larga distancia y escalado de líneas suelen ser más baratos, pero depende del mix de llamadas y del plan. No prometemos un «−15% fijo para todos».",
    },
    {
      q: "¿Se puede conservar un número local?",
      a: "A menudo sí — portar o adjuntar el número con el proveedor de telefonía IP. Mira los términos de porting en el contrato.",
    },
  ],
  sections: [
    {
      title: "Trabajos que cubre la telefonía IP",
      level: 2,
      paras: [
        "Un call center en varias ciudades: el cliente marca un número local y responde una cola compartida. Cuando la oficina se muda, el número no muere con el jack de la pared.",
        "El staffing se mantiene flexible: menos agentes en invierno, más licencias al minuto en temporada alta — sin semanas de cableado. Llamadas cortas de alto volumen (taxi, delivery) a menudo cuestan menos en planes IP por minuto o por paquete que la facturación vieja de «siempre redondear el minuto» — pero haz las cuentas con tu propio tráfico.",
      ],
      lists: [
        {
          intro: "Upsides típicos para el negocio:",
          items: [
            "colas e IVR",
            "grabación y stats de llamadas",
            "desvíos y grupos",
            "integración CRM",
            "agentes remotos en softphones",
          ],
        },
      ],
      links: [
        {
          label: "Número virtual",
          href: "/es/blog/virtualnyy-nomer/",
        },
        {
          label: "CRM",
          href: "/es/blog/crm/",
        },
      ],
    },
    {
      title: "Cómo elegir un proveedor",
      level: 2,
      paras: [
        "Mira más allá del precio por minuto: SLA, calidad de canal, grabación de llamadas, API/CRM, soporte, geografía de números, failover cuando cae internet.",
        "Lee el contrato: quién responde de la calidad, cómo se cuenta la facturación, compensación por downtime, dónde viven las grabaciones y durante cuánto tiempo.",
      ],
      lists: [
        {
          intro: "Checklist de selección:",
          items: [
            "los números locales / toll-free que necesitas",
            "colas, IVR, grabación",
            "reports y export a CRM",
            "un test de calidad de voz",
            "contrato y facturas claros",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          text: "Una app gratis sin responsabilidad de canal y un call center serio son clases distintas. En ventas, trata el downtime de línea como leads perdidos.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Setup y control",
      level: 2,
      paras: [
        "Tras el contrato: setup de PBX/nube, cuentas de agentes, rutas y, si hace falta, un gateway más un canal de backup. Un softphone se instala en minutos; un stack maduro (IVR, CRM, grabación) pide planificación — no «treinta minutos y olvidar».",
        "En la consola mira llamadas perdidas, tiempo de respuesta, carga de cola y coste. Añade call tracking de números de ads cuando necesites attribution.",
      ],
      lists: [
        {
          intro: "Tras el lanzamiento:",
          items: [
            "playbook de respuesta y escalado",
            "dashboard de llamadas perdidas",
            "sync de deals en CRM",
            "internet de backup / desvío a móvil",
            "auditoría de grabación bajo reglas de datos personales",
          ],
        },
      ],
      links: [
        {
          label: "Analytics de extremo a extremo",
          href: "/es/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  closing: [
    "La telefonía IP da líneas flexibles, colas y analytics de llamadas — si el internet es sólido y el proveedor responde del resultado. Describe escenarios (ciudades, temporada, CRM), testa la voz y no confundas un softphone barato con conectividad estable de ventas.",
  ],
  related: [
    "virtualnyy-nomer",
    "crm",
    "skvoznaya-analitika",
    "kpi-menedzhera-prodazh",
    "formy-zahvata",
    "dashboard",
  ],
};
