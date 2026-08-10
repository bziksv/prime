import type { BlogPost } from "../../../data/blog";

/** EN overlay for lichnyy-kabinet — same structure as RU JSON. */
export const lichnyyKabinetEn: BlogPost = {
  slug: "lichnyy-kabinet",
  title: "Personal account on a site: why it matters and what’s inside",
  date: "2021-02-26",
  category: "Digital marketing",
  cover: "/images/blog/lichnyy-kabinet/cover-en.webp",
  excerpt:
    "Why a site needs a personal account, what features appear after login, when it’s required, and what to watch in development — from security to UX.",
  lead: [
    "A personal account is the area after login: orders, documents, profile settings, subscriptions. For services and stores it’s often the retention hub.",
    "Below: what a client portal is for, typical features, and development questions. This isn’t about one more registration as a checkbox.",
  ],
  faq: [
    {
      q: "Is a client portal always needed?",
      a: "No. For a simple one-lead landing it’s often excess. For repeat purchases, B2B, and SaaS — nearly required.",
    },
    {
      q: "How is it different from CRM?",
      a: "The portal is the customer’s UI. CRM is the company’s tool. They can be linked.",
    },
    {
      q: "Do I need social login?",
      a: "Optional. Password plus email or phone and 2FA matter more than a zoo of buttons.",
    },
    {
      q: "What about security?",
      a: "HTTPS, hashed passwords, login attempt limits, account recovery, role permissions, logging.",
    },
    {
      q: "Does a client portal affect SEO?",
      a: "Closed sections aren’t for the index. Public storefronts and the blog are separate. Don’t lock useful content for no reason.",
    },
    {
      q: "What data should I ask for at signup?",
      a: "Only what’s needed for the flow. Extra fields cut conversion and raise personal-data responsibility.",
    },
    {
      q: "How do I know the account is usable?",
      a: "Test key flows with real users: signup, recovery, find an order, pay, contact support.",
    },
  ],
  sections: [
    {
      title: "Why you need a client portal",
      level: 2,
      paras: [
        "Self-service: order status, invoices, history, plan changes. That lowers support load and raises the odds of repeat sales.",
        "A client portal pays off when the visitor returns to data or a service. If they only need one call, a heavy signup before the form is a barrier more than a benefit.",
      ],
      lists: [
        {
          intro: "Especially useful for:",
          items: [
            "online store",
            "online service / SaaS",
            "learning and private courses",
            "B2B with documents and shipments",
          ],
        },
      ],
    },
    {
      title: "Features after login",
      level: 2,
      paras: [
        "Profile, orders or subscriptions, notifications, files, support tickets, sometimes several employees of one company — the mix depends on the product.",
        "Start with the actions customers come for most. Rare admin features can stay with support or go live later once demand is proven — don’t complicate the first release.",
      ],
      lists: [
        {
          intro: "A solid client-portal baseline:",
          items: [
            "clear signup and password recovery",
            "action history",
            "mobile layout",
            "logout and password change without a quest",
          ],
        },
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Development: what to watch",
      level: 2,
      paras: [
        "Think through roles and permissions, payment and CRM integration, speed, accessibility, and personal-data handling. Don’t clone someone else’s account UI one-to-one — the interface must match your flow.",
        "Describe the client path before mockups: from invite or signup to solving the job. That helps you not lose order states, payment errors, cancellations, and acting on behalf of an organization.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "signup with 20 fields",
            "no confirmation emails",
            "portal slow on mobile",
            "secrets in URLs and open APIs",
          ],
        },
      ],
    },
    {
      title: "Security and personal data",
      level: 2,
      paras: [
        "Account security rests on basics: HTTPS, safe password storage, login attempt limits, recovery confirmation, and permission separation. Critical actions — changing contact, payment details, or role — deserve extra confirmation.",
        "Collect and show only data the client and process need. Explain processing purposes, retention, and how to contact you about personal data.",
      ],
      lists: [
        {
          intro: "Before launch check:",
          items: [
            "whether swapping a URL can show someone else’s order",
            "whether sessions expire and logout works",
            "whether tokens and documents leak into logs",
            "whether the user gets notices about important changes",
          ],
        },
      ],
    },
    {
      title: "Launch and growth without extra complexity",
      level: 2,
      paras: [
        "Ship a minimal version with one or two valuable flows, then study support tickets and analytics. If users constantly ask for an invoice, status, or reorder, simplify those actions first.",
        "Separate portal metrics from vanity ones. What matters more: share of clients who self-serve, flow completion speed, fewer tickets, and repeat purchase.",
      ],
      lists: [
        {
          intro: "Useful post-release steps:",
          items: [
            "collect feedback with a short question",
            "review error logs and unfinished flows",
            "test the account on popular phones",
            "plan new features by client impact",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for lichnyy-kabinet — same structure as RU JSON / EN. */
export const lichnyyKabinetEs: BlogPost = {
  slug: "lichnyy-kabinet",
  title: "Cuenta personal en un sitio: por qué importa y qué hay dentro",
  date: "2021-02-26",
  category: "Digital marketing",
  cover: "/images/blog/lichnyy-kabinet/cover-es.webp",
  excerpt:
    "Por qué un sitio necesita una cuenta personal, qué features aparecen tras el login, cuándo es obligatoria y qué vigilar en el desarrollo — de seguridad a UX.",
  lead: [
    "Una cuenta personal es el área tras el login: pedidos, documentos, ajustes de perfil, suscripciones. En servicios y tiendas suele ser el hub de retención.",
    "Abajo: para qué sirve un portal de cliente, features típicas y preguntas de desarrollo. No va de «un registro más» como checkbox.",
  ],
  faq: [
    {
      q: "¿Siempre hace falta un portal de cliente?",
      a: "No. Para un landing simple de un lead a menudo sobra. Para compras repetidas, B2B y SaaS — casi obligatorio.",
    },
    {
      q: "¿En qué se diferencia del CRM?",
      a: "El portal es la UI del cliente. El CRM es la herramienta de la empresa. Pueden estar enlazados.",
    },
    {
      q: "¿Hace falta login social?",
      a: "Opcional. Contraseña más email o teléfono y 2FA importan más que un zoológico de botones.",
    },
    {
      q: "¿Y la seguridad?",
      a: "HTTPS, contraseñas hasheadas, límites de intentos de login, recuperación de cuenta, permisos por rol, logging.",
    },
    {
      q: "¿Un portal de cliente afecta al SEO?",
      a: "Las secciones cerradas no son para el índice. Escaparates públicos y el blog van aparte. No bloquees contenido útil sin motivo.",
    },
    {
      q: "¿Qué datos pedir en el alta?",
      a: "Solo lo necesario para el flow. Campos de más cortan conversión y suben la responsabilidad sobre datos personales.",
    },
    {
      q: "¿Cómo sé que la cuenta es usable?",
      a: "Prueba flujos clave con usuarios reales: alta, recuperación, encontrar un pedido, pagar, contactar soporte.",
    },
  ],
  sections: [
    {
      title: "Por qué necesitas un portal de cliente",
      level: 2,
      paras: [
        "Autoservicio: estado del pedido, facturas, historial, cambios de plan. Baja la carga de soporte y sube las odds de ventas repetidas.",
        "Un portal de cliente compensa cuando el visitante vuelve a datos o a un servicio. Si solo necesita una llamada, un alta pesada antes del formulario es más barrera que beneficio.",
      ],
      lists: [
        {
          intro: "Especialmente útil para:",
          items: [
            "tienda online",
            "servicio online / SaaS",
            "formación y cursos privados",
            "B2B con documentos y envíos",
          ],
        },
      ],
    },
    {
      title: "Features tras el login",
      level: 2,
      paras: [
        "Perfil, pedidos o suscripciones, notificaciones, archivos, tickets de soporte, a veces varios empleados de una empresa — la mezcla depende del producto.",
        "Empieza por las acciones por las que más vienen los clientes. Features admin raras pueden quedarse en soporte o salir después cuando la demanda esté probada — no compliques el primer release.",
      ],
      lists: [
        {
          intro: "Una base sólida de portal de cliente:",
          items: [
            "alta clara y recuperación de contraseña",
            "historial de acciones",
            "layout móvil",
            "logout y cambio de contraseña sin un quest",
          ],
        },
      ],
      links: [
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Desarrollo: qué vigilar",
      level: 2,
      paras: [
        "Piensa roles y permisos, integración de pago y CRM, velocidad, accesibilidad y tratamiento de datos personales. No clones la UI de cuenta de otro uno a uno — la interfaz debe encajar con tu flow.",
        "Describe el camino del cliente antes de los mockups: del invite o alta a resolver el trabajo. Eso ayuda a no perder estados de pedido, errores de pago, cancelaciones y actuar en nombre de una organización.",
      ],
      lists: [
        {
          intro: "Errores habituales:",
          items: [
            "alta con 20 campos",
            "sin emails de confirmación",
            "portal lento en móvil",
            "secrets en URLs y APIs abiertas",
          ],
        },
      ],
    },
    {
      title: "Seguridad y datos personales",
      level: 2,
      paras: [
        "La seguridad de la cuenta descansa en lo básico: HTTPS, almacenamiento seguro de contraseñas, límites de intentos de login, confirmación de recuperación y separación de permisos. Acciones críticas — cambiar contacto, datos de pago o rol — merecen confirmación extra.",
        "Recoge y muestra solo los datos que el cliente y el proceso necesitan. Explica propósitos de tratamiento, retención y cómo contactarte sobre datos personales.",
      ],
      lists: [
        {
          intro: "Antes del lanzamiento revisa:",
          items: [
            "si cambiar una URL puede mostrar el pedido de otro",
            "si las sesiones caducan y el logout funciona",
            "si tokens y documentos se filtran a logs",
            "si el usuario recibe avisos de cambios importantes",
          ],
        },
      ],
    },
    {
      title: "Lanzamiento y crecimiento sin complejidad de más",
      level: 2,
      paras: [
        "Entrega una versión mínima con uno o dos flows valiosos, luego estudia tickets de soporte y analytics. Si los usuarios piden siempre factura, estado o reordenar, simplifica esas acciones primero.",
        "Separa las métricas del portal de las de vanidad. Importa más: cuota de clientes que se autosirven, velocidad de cierre del flow, menos tickets y compra repetida.",
      ],
      lists: [
        {
          intro: "Pasos útiles tras el release:",
          items: [
            "recoger feedback con una pregunta corta",
            "revisar logs de error y flows a medias",
            "probar la cuenta en teléfonos populares",
            "planificar features nuevas por impacto en el cliente",
          ],
        },
      ],
    },
  ],
};
