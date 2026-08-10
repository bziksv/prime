import type { BlogPost } from "../../../data/blog";

/** EN overlay for pochta-dlya-domena — same structure as RU JSON. */
export const pochtaDlyaDomenaEn: BlogPost = {
  slug: "pochta-dlya-domena",
  title: "Email for your domain: why business needs it and how to connect",
  date: "2018-04-17",
  category: "Digital marketing",
  cover: "/images/blog/pochta-dlya-domena/cover-en.webp",
  excerpt:
    "Corporate email on your own domain: why `name@firma.ru`, how MX records work, choosing Yandex 360 / Google / Mail, and basic security — without outdated “1000 free mailboxes” limits.",
  lead: [
    "Email for a domain means addresses like `sales@your-site.ru` on your domain — not `@yandex…` or `@mail…` with a taken nickname. For the site and sales it’s a trust signal: the client sees the brand in every message.",
    "Below: why corporate email matters, how MX records work, what to watch when picking a provider, and a minimal security checklist. Mailbox limits, storage, and product names (Yandex.Mail for Domain → Yandex 360 and peers) change — check current plans.",
  ],
  faq: [
    {
      q: "How is domain email different from regular Gmail or Yandex Mail?",
      a: "You can use the same web client, but the address is on your domain. DNS (MX and related records) points to the provider’s mail servers.",
    },
    {
      q: "Do I need my own mail server on hosting?",
      a: "Usually no: a cloud provider is simpler and more reliable. Running your own Postfix is a separate antispam and uptime burden.",
    },
    {
      q: "How long after changing MX until mail works?",
      a: "From minutes to a day (sometimes longer because of TTL). Plan the move with slack and don’t delete old records immediately.",
    },
    {
      q: "Can the owner read all employee mail?",
      a: "Technically an admin often has broad rights. Legally and ethically you need policy, consent, and a control purpose — not peeking for fun.",
    },
    {
      q: "Does domain email improve SEO?",
      a: "It doesn’t lift rankings directly. Indirectly it can help trust in commercial factors and correspondence. Page-one visibility for the keyword set is separate work — often planned over 2–6 months after you start.",
    },
  ],
  sections: [
    {
      title: "Why email on your own domain",
      level: 2,
      paras: [
        "`ivan@firma.ru` looks more official than `firma.sales.2020@mail.ru`. Clients link the letter to the site and brand more easily. Nice free nicknames on public services are often taken.",
        "Scale: create mailboxes for roles (`info`, `support`, `finance`) and people without each employee switching a personal provider. Shared password and 2FA rules are easier in one org account.",
      ],
      lists: [
        {
          intro: "Business benefits:",
          items: [
            "image and brand recognition",
            "mailboxes for departments and staff",
            "centralized administration",
            "less “which mail are you writing from?” confusion",
          ],
        },
      ],
      links: [
        {
          label: "Mail service",
          href: "/en/blog/pochtovyy-servis/",
        },
        {
          label: "Top-level domain",
          href: "/en/blog/domen-pervogo-urovnya/",
        },
      ],
    },
    {
      title: "How it works: MX and DNS",
      level: 2,
      paras: [
        "When someone writes to `you@domain.ru`, the sender looks up the domain’s DNS records (mainly MX) and learns which server accepts mail. You set MX (and often SPF/DKIM/DMARC) at the registrar or in the DNS panel.",
        "After changing records you need time to propagate. Until TTL expires at resolvers, some mail may still follow old MX — so migrations are careful.",
      ],
      lists: [
        {
          intro: "Typical order:",
          items: [
            "verify domain ownership with the mail provider",
            "get MX values (and SPF/DKIM hints)",
            "enter them in DNS",
            "wait for application",
            "create mailboxes and test send/receive",
          ],
        },
      ],
      notes: [
        {
          title: "Not only MX",
          kind: "tip",
          text: "Deliverability needs SPF, DKIM, and preferably DMARC. Without them mail lands in spam more often even with a pretty domain.",
        },
      ],
    },
    {
      title: "Which provider to choose",
      level: 2,
      paras: [
        "In Russia people often look at Yandex 360 (historically “Mail for Domain”), Mail for Business, Google Workspace, Microsoft 365, and mail bundled with hosting. Criteria: price per box, limits, antispam, calendar/disk, admin UI, 152-FZ fit, and migration ease.",
        "Don’t copy “free and 1000 mailboxes” from 2018 guides into the plan: tariffs and limits changed. Weigh annual cost and who will administer it.",
      ],
      tables: [
        {
          caption: "What to compare",
          headers: ["Criterion", "Question"],
          rows: [
            ["Price", "Cost per mailbox/month as the team grows"],
            ["Deliverability", "SPF/DKIM out of the box?"],
            ["Admin", "Groups, aliases, recovery"],
            ["Security", "2FA, login audit, password policy"],
            ["Ecosystem", "Need disk/calendar/messenger?"],
          ],
        },
      ],
      links: [
        {
          label: "Online payment on the site",
          href: "/en/blog/onlayn-oplata/",
        },
      ],
    },
    {
      title: "Connecting via a cloud service",
      level: 2,
      paras: [
        "The general path at Yandex, Google, and Mail is similar: org account → add domain → verify TXT/HTML → set MX → create users. 2018 click-by-click steps aged out — follow the wizard in the current account.",
        "After MX, test from a phone and an external mailbox: inbound, outbound, attachments. Add SPF/DKIM per the provider’s instructions.",
      ],
    },
    {
      title: "Security and mailbox hygiene",
      level: 2,
      paras: [
        "Enable 2FA for the admin and key staff, unique passwords, and aliases instead of one shared password for everyone. Don’t publish `admin@` in open forms without spam protection.",
        "Owner access to employee mailboxes needs a policy: why, who may, how data is stored. That’s trust as much as tech.",
      ],
      lists: [
        {
          intro: "Minimum after launch:",
          items: [
            "2FA on the admin account",
            "SPF + DKIM (+ DMARC if possible)",
            "a backup admin",
            "rules for `info` / `support`",
            "no shared department password",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Domain email is a business standard: brand in the address, managed mailboxes, solid deliverability with DNS set up.",
        "Don’t cling to 2018 “free thousand mailboxes” screenshots — pick a current provider, set MX/SPF/DKIM, and lock down security.",
      ],
    },
  ],
  closing: [
    "Verify the domain with the mail provider, set MX and auth records, create working mailboxes, and test mail from an external address — that’s how corporate email builds trust, not only a pretty signature.",
  ],
  related: [
    "pochtovyy-servis",
    "domen-pervogo-urovnya",
    "domen-rf",
    "istoriya-domena",
    "onlayn-oplata",
    "kommercheskie-faktory",
  ],
};

/** ES overlay for pochta-dlya-domena — same structure as RU JSON / EN. */
export const pochtaDlyaDomenaEs: BlogPost = {
  slug: "pochta-dlya-domena",
  title: "Correo para tu dominio: por qué lo necesita el negocio y cómo conectarlo",
  date: "2018-04-17",
  category: "Digital marketing",
  cover: "/images/blog/pochta-dlya-domena/cover-es.webp",
  excerpt:
    "Email corporativo en tu propio dominio: por qué `nombre@firma.ru`, cómo funcionan los registros MX, elegir Yandex 360 / Google / Mail y seguridad básica — sin límites desfasados de «1000 buzones gratis».",
  lead: [
    "Correo para un dominio son direcciones tipo `sales@tu-sitio.ru` en tu dominio — no `@yandex…` o `@mail…` con un nick pillado. Para el sitio y las ventas es señal de confianza: el cliente ve la marca en cada mensaje.",
    "Abajo: por qué importa el email corporativo, cómo funcionan los MX, qué mirar al elegir proveedor y un checklist mínimo de seguridad. Límites de buzones, almacenamiento y nombres de producto (Yandex.Mail for Domain → Yandex 360 y pares) cambian — revisa los planes actuales.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el correo de dominio de Gmail o Yandex Mail normales?",
      a: "Puedes usar el mismo cliente web, pero la dirección va en tu dominio. El DNS (MX y registros afines) apunta a los servidores de correo del proveedor.",
    },
    {
      q: "¿Hace falta un servidor de correo propio en el hosting?",
      a: "Normalmente no: un proveedor cloud es más simple y fiable. Montar tu propio Postfix es una carga aparte de antispam y uptime.",
    },
    {
      q: "¿Cuánto tarda el correo en funcionar tras cambiar MX?",
      a: "De minutos a un día (a veces más por el TTL). Planifica el traslado con holgura y no borres los registros viejos de golpe.",
    },
    {
      q: "¿Puede el dueño leer todo el correo de los empleados?",
      a: "Técnicamente un admin suele tener derechos amplios. Legal y éticamente hace falta política, consentimiento y un propósito de control — no husmear por deporte.",
    },
    {
      q: "¿El email de dominio mejora el SEO?",
      a: "No sube rankings de forma directa. Indirectamente puede ayudar a la confianza en factores comerciales y en la correspondencia. La visibilidad en primera página del set de keywords es trabajo aparte — a menudo planificado en 2–6 meses tras arrancar.",
    },
  ],
  sections: [
    {
      title: "Por qué correo en tu propio dominio",
      level: 2,
      paras: [
        "`ivan@firma.ru` se ve más oficial que `firma.sales.2020@mail.ru`. Los clientes vinculan la carta al sitio y a la marca con más facilidad. Los nicks gratis guapos en servicios públicos a menudo están pillados.",
        "Escala: crea buzones por roles (`info`, `support`, `finance`) y personas sin que cada empleado cambie de proveedor personal. Reglas compartidas de contraseña y 2FA son más fáciles en una cuenta de org.",
      ],
      lists: [
        {
          intro: "Beneficios para el negocio:",
          items: [
            "imagen y reconocimiento de marca",
            "buzones para departamentos y plantilla",
            "administración centralizada",
            "menos lío de «¿desde qué correo escribes?»",
          ],
        },
      ],
      links: [
        {
          label: "Servicio de correo",
          href: "/es/blog/pochtovyy-servis/",
        },
        {
          label: "Dominio de primer nivel",
          href: "/es/blog/domen-pervogo-urovnya/",
        },
      ],
    },
    {
      title: "Cómo funciona: MX y DNS",
      level: 2,
      paras: [
        "Cuando alguien escribe a `tu@dominio.ru`, el remitente consulta los registros DNS del dominio (sobre todo MX) y sabe qué servidor acepta el correo. Configuras MX (y a menudo SPF/DKIM/DMARC) en el registrador o en el panel DNS.",
        "Tras cambiar registros hace falta tiempo de propagación. Hasta que expire el TTL en los resolvers, parte del correo puede seguir los MX viejos — por eso las migraciones son con cuidado.",
      ],
      lists: [
        {
          intro: "Orden típico:",
          items: [
            "verificar propiedad del dominio con el proveedor de correo",
            "obtener valores MX (y pistas SPF/DKIM)",
            "meterlos en el DNS",
            "esperar a que se apliquen",
            "crear buzones y probar envío/recepción",
          ],
        },
      ],
      notes: [
        {
          title: "No solo MX",
          kind: "tip",
          text: "La entregabilidad pide SPF, DKIM y preferiblemente DMARC. Sin ellos el correo cae más a menudo en spam aunque el dominio sea bonito.",
        },
      ],
    },
    {
      title: "Qué proveedor elegir",
      level: 2,
      paras: [
        "En Rusia suelen mirar Yandex 360 (históricamente «Mail for Domain»), Mail for Business, Google Workspace, Microsoft 365 y el correo empaquetado con el hosting. Criterios: precio por buzón, límites, antispam, calendario/disco, UI de admin, encaje con 152-FZ y facilidad de migración.",
        "No copies «gratis y 1000 buzones» de guías de 2018 al plan: tarifas y límites cambiaron. Pesa el coste anual y quién lo administrará.",
      ],
      tables: [
        {
          caption: "Qué comparar",
          headers: ["Criterio", "Pregunta"],
          rows: [
            ["Precio", "Coste por buzón/mes al crecer el equipo"],
            ["Entregabilidad", "¿SPF/DKIM de serie?"],
            ["Admin", "Grupos, aliases, recuperación"],
            ["Seguridad", "2FA, auditoría de login, política de contraseñas"],
            ["Ecosistema", "¿Hace falta disco/calendario/messenger?"],
          ],
        },
      ],
      links: [
        {
          label: "Pago online en el sitio",
          href: "/es/blog/onlayn-oplata/",
        },
      ],
    },
    {
      title: "Conexión vía servicio cloud",
      level: 2,
      paras: [
        "El camino general en Yandex, Google y Mail es parecido: cuenta de org → añadir dominio → verificar TXT/HTML → fijar MX → crear usuarios. Los pasos clic a clic de 2018 envejecieron — sigue el wizard de la cuenta actual.",
        "Tras los MX, prueba desde el móvil y desde un buzón externo: entrada, salida, adjuntos. Añade SPF/DKIM según las instrucciones del proveedor.",
      ],
    },
    {
      title: "Seguridad e higiene del buzón",
      level: 2,
      paras: [
        "Activa 2FA para el admin y el personal clave, contraseñas únicas y aliases en lugar de una contraseña compartida para todos. No publiques `admin@` en formularios abiertos sin protección antispam.",
        "El acceso del dueño a buzones de empleados pide política: por qué, quién puede, cómo se guardan los datos. Eso es confianza tanto como técnica.",
      ],
      lists: [
        {
          intro: "Mínimo tras el lanzamiento:",
          items: [
            "2FA en la cuenta admin",
            "SPF + DKIM (+ DMARC si se puede)",
            "un admin de respaldo",
            "reglas para `info` / `support`",
            "sin contraseña compartida de departamento",
          ],
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "El email de dominio es estándar de negocio: marca en la dirección, buzones gestionados, buena entregabilidad con el DNS bien montado.",
        "No te aferres a capturas de 2018 de «mil buzones gratis» — elige un proveedor actual, fija MX/SPF/DKIM y cierra la seguridad.",
      ],
    },
  ],
  closing: [
    "Verifica el dominio con el proveedor de correo, fija MX y registros de auth, crea buzones que funcionen y prueba el correo desde una dirección externa — así el email corporativo construye confianza, no solo una firma bonita.",
  ],
  related: [
    "pochtovyy-servis",
    "domen-pervogo-urovnya",
    "domen-rf",
    "istoriya-domena",
    "onlayn-oplata",
    "kommercheskie-faktory",
  ],
};
