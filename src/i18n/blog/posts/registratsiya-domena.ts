import type { BlogPost } from "../../../data/blog";

/** EN overlay for registratsiya-domena — same structure as RU JSON. */
export const registratsiyaDomenaEn: BlogPost = {
  slug: "registratsiya-domena",
  title: "How to register a domain with a registrar",
  date: "2017-11-13",
  category: "Digital marketing",
  cover: "/images/blog/registratsiya-domena/cover-en.webp",
  excerpt:
    "Domain registration step by step: registrar account, availability check, owner data, name servers, and payment — using a REG.ru-style flow as an example, without outdated account screenshots.",
  lead: [
    "You register a domain with an accredited registrar: confirm the name is available, enter owner data, set hosting nameservers if needed, and pay for a term (usually at least one year).",
    "Below: the usual path. REG.ru and other registrars have redesigned their UIs; payment options from 2017 guides are outdated too. Follow the registrar’s live checkout. Zone and name choice are covered in the first-level domain and `.рф` articles.",
  ],
  faq: [
    {
      q: "Should I register the domain with the same host?",
      a: "You can, but keeping them separate is often easier: simpler to change hosting without migrating the domain under one vendor contract in a panic.",
    },
    {
      q: "Why do registrars ask for passport data?",
      a: "Registry/legal requirements for zones like .ru/.рф. Owner data doesn’t have to appear as a public WHOIS listing — check the registrar’s privacy policy.",
    },
    {
      q: "What are name servers?",
      a: "Pointers to where the domain’s DNS lives. Hosting or a DNS service provides them. Without correct nameservers the site won’t open by name even if the domain is paid.",
    },
    {
      q: "Is REG.ru required?",
      a: "No. It’s an example of a popular registrar. Criteria: accreditation, support, renewal price, 2FA, DNS convenience.",
    },
    {
      q: "Should I enable auto-renewal?",
      a: "Useful if the card is current and you control charges. Otherwise a reminder calendar + manual renewal ahead of time.",
    },
  ],
  sections: [
    {
      title: "Choose the name, then create an account",
      level: 2,
      paras: [
        "The domain should be short, pronounceable, and available in the zone you need. Check several options: availability, history (not a burned spam domain), and trademarks.",
        "Choosing the zone (.ru, .com, .рф…) is a separate decision; registration only locks in the name you already picked.",
      ],
      links: [
        {
          label: "First-level domain",
          href: "/en/blog/domen-pervogo-urovnya/",
        },
        {
          label: ".рф domain",
          href: "/en/blog/domen-rf/",
        },
        {
          label: "Domain history",
          href: "/en/blog/istoriya-domena/",
        },
      ],
    },
    {
      title: "Registrar account",
      level: 2,
      paras: [
        "Create an account with a real email — confirmations and renewal reminders go there. Save the login in a password manager and enable 2FA if available.",
        "Social login is convenient, but a backup email/password login is still needed for years ahead.",
      ],
      links: [
        {
          label: "Password manager",
          href: "/en/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "Search and checkout",
      level: 2,
      paras: [
        "In domain registration, enter the name: the account shows available zones and price. Remove extra names from the upsell cart so you don’t pay for an accidental bundle.",
        "At the add-ons step they often offer hosting, email, SSL, auto-renewal, and “premium DNS.” Take only what you need: hosting can be ordered separately; nameservers can be set later by hand.",
      ],
      lists: [
        {
          intro: "Before paying, check:",
          items: [
            "exact domain spelling",
            "zone and term",
            "no extra services on the invoice",
            "owner data without typos",
          ],
        },
      ],
      notes: [
        {
          title: "Account UI",
          kind: "tip",
          text: "“Register / Express / Continue” buttons and menu paths at REG.ru and competitors changed. Step meaning is the same: pick name → data → DNS/NS → pay.",
        },
      ],
    },
    {
      title: "Owner data and nameservers",
      level: 2,
      paras: [
        "Many zones need accurate registrant data (person or organization). That’s who is responsible for the domain — not posting your passport online.",
        "Nameservers link the name to hosting. Take values from the host (often two to four records like `ns1…` / `ns2…`) or keep DNS at the registrar and create A/CNAME records to the IP or host.",
      ],
      tables: [
        {
          caption: "After payment",
          headers: ["What to check", "Why"],
          rows: [
            ["Status in the account", "Domain listed, renewal term"],
            ["NS", "Point to your DNS/hosting"],
            ["WHOIS / card", "Owner and dates are correct"],
            ["Registrar email", "Renewal mail not in spam"],
          ],
        },
      ],
    },
    {
      title: "Payment and renewal",
      level: 2,
      paras: [
        "Pay with a method available in the account (card, business invoice, etc.). Old articles listed specific wallets — the set changes; check the registrar’s current checkout.",
        "Renew early: after expiry you risk losing the name. A calendar plus auto-renewal with balance control beats “I’ll remember the day before.”",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Registration = available name + owner data + DNS/nameservers + term payment. Pick the registrar deliberately; REG.ru in old guides is an example, not the only option.",
        "Zone choice and history checks are in related articles; domain email is set up separately.",
      ],
      links: [
        {
          label: "Email for your domain",
          href: "/en/blog/pochta-dlya-domena/",
        },
      ],
    },
  ],
  closing: [
    "Check name availability, register it with correct data and nameservers, pay for the term, and put the renewal date on the calendar right away — so the domain becomes your working address, not a forgotten cart line.",
  ],
  related: [
    "domen-pervogo-urovnya",
    "domen-rf",
    "istoriya-domena",
    "pochta-dlya-domena",
    "veb-server",
    "menedzher-paroley",
  ],
};

/** ES overlay for registratsiya-domena — same structure as RU JSON / EN. */
export const registratsiyaDomenaEs: BlogPost = {
  slug: "registratsiya-domena",
  title: "Cómo registrar un dominio con un registrador",
  date: "2017-11-13",
  category: "Digital marketing",
  cover: "/images/blog/registratsiya-domena/cover-es.webp",
  excerpt:
    "Registro de dominio paso a paso: cuenta en el registrador, comprobación de disponibilidad, datos del titular, name servers y pago — con un flujo tipo REG.ru de ejemplo, sin capturas de cuenta desfasadas.",
  lead: [
    "Registras un dominio con un registrador acreditado: confirmas que el nombre está libre, introduces datos del titular, fijas nameservers del hosting si hace falta y pagas un plazo (suele ser al menos un año).",
    "Abajo: el camino habitual. REG.ru y otros registradores han rediseñado sus UIs; las opciones de pago de guías de 2017 también están desfasadas. Sigue el checkout en vivo del registrador. La elección de zona y nombre se cubre en los artículos de dominio de primer nivel y `.рф`.",
  ],
  faq: [
    {
      q: "¿Debo registrar el dominio en el mismo host?",
      a: "Puedes, pero a menudo es más fácil mantenerlos separados: más simple cambiar de hosting sin migrar el dominio bajo un solo contrato de vendor en pánico.",
    },
    {
      q: "¿Por qué los registradores piden datos de pasaporte?",
      a: "Requisitos de registro/legales en zonas como .ru/.рф. Los datos del titular no tienen por qué aparecer como listado WHOIS público — revisa la política de privacidad del registrador.",
    },
    {
      q: "¿Qué son los name servers?",
      a: "Punteros a dónde vive el DNS del dominio. Los da el hosting o un servicio DNS. Sin nameservers correctos el sitio no abrirá por nombre aunque el dominio esté pagado.",
    },
    {
      q: "¿Es obligatorio REG.ru?",
      a: "No. Es un ejemplo de registrador popular. Criterios: acreditación, soporte, precio de renovación, 2FA, comodidad de DNS.",
    },
    {
      q: "¿Debo activar la auto-renovación?",
      a: "Útil si la tarjeta está al día y controlas los cargos. Si no, un calendario de recordatorios + renovación manual con antelación.",
    },
  ],
  sections: [
    {
      title: "Elige el nombre, luego crea una cuenta",
      level: 2,
      paras: [
        "El dominio debe ser corto, pronunciable y disponible en la zona que necesitas. Comprueba varias opciones: disponibilidad, historial (no un dominio quemado de spam) y marcas.",
        "Elegir la zona (.ru, .com, .рф…) es una decisión aparte; el registro solo fija el nombre que ya elegiste.",
      ],
      links: [
        {
          label: "Dominio de primer nivel",
          href: "/es/blog/domen-pervogo-urovnya/",
        },
        {
          label: "Dominio .рф",
          href: "/es/blog/domen-rf/",
        },
        {
          label: "Historial del dominio",
          href: "/es/blog/istoriya-domena/",
        },
      ],
    },
    {
      title: "Cuenta en el registrador",
      level: 2,
      paras: [
        "Crea una cuenta con un email real — ahí van confirmaciones y recordatorios de renovación. Guarda el login en un gestor de contraseñas y activa 2FA si está disponible.",
        "El login social es cómodo, pero sigue haciendo falta un login email/contraseña de respaldo para años adelante.",
      ],
      links: [
        {
          label: "Gestor de contraseñas",
          href: "/es/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "Búsqueda y checkout",
      level: 2,
      paras: [
        "En el registro de dominio introduce el nombre: la cuenta muestra zonas disponibles y precio. Quita nombres extra del carrito de upsell para no pagar un pack accidental.",
        "En el paso de add-ons a menudo ofrecen hosting, email, SSL, auto-renovación y «DNS premium». Toma solo lo que necesitas: el hosting se puede pedir aparte; los nameservers se pueden fijar después a mano.",
      ],
      lists: [
        {
          intro: "Antes de pagar, comprueba:",
          items: [
            "ortografía exacta del dominio",
            "zona y plazo",
            "sin servicios extra en la factura",
            "datos del titular sin typos",
          ],
        },
      ],
      notes: [
        {
          title: "UI de la cuenta",
          kind: "tip",
          text: "Los botones «Registrar / Express / Continuar» y las rutas de menú en REG.ru y competidores cambiaron. El sentido del paso es el mismo: elige nombre → datos → DNS/NS → pagar.",
        },
      ],
    },
    {
      title: "Datos del titular y nameservers",
      level: 2,
      paras: [
        "Muchas zonas necesitan datos de registrante precisos (persona u organización). Eso es quien responde del dominio — no publicar tu pasaporte online.",
        "Los nameservers enlazan el nombre con el hosting. Toma valores del host (a menudo dos a cuatro registros tipo `ns1…` / `ns2…`) o mantén el DNS en el registrador y crea registros A/CNAME hacia la IP o el host.",
      ],
      tables: [
        {
          caption: "Tras el pago",
          headers: ["Qué comprobar", "Por qué"],
          rows: [
            ["Estado en la cuenta", "Dominio listado, plazo de renovación"],
            ["NS", "Apuntan a tu DNS/hosting"],
            ["WHOIS / ficha", "Titular y fechas correctos"],
            ["Email del registrador", "Correo de renovación no en spam"],
          ],
        },
      ],
      links: [
        {
          label: "Hosting",
          href: "/es/blog/hosting/",
        },
        {
          label: "Servidor web",
          href: "/es/blog/veb-server/",
        },
      ],
    },
    {
      title: "Pago y renovación",
      level: 2,
      paras: [
        "Paga con un método disponible en la cuenta (tarjeta, factura de empresa, etc.). Artículos viejos listaban wallets concretas — el set cambia; mira el checkout actual del registrador.",
        "Renueva con antelación: tras el vencimiento arriesgas perder el nombre. Un calendario más auto-renovación con control de saldo gana a «me acordaré el día antes».",
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "Registro = nombre disponible + datos del titular + DNS/nameservers + pago del plazo. Elige el registrador a propósito; REG.ru en guías viejas es un ejemplo, no la única opción.",
        "Elección de zona y chequeos de historial están en artículos relacionados; el email del dominio se monta aparte.",
      ],
      links: [
        {
          label: "Email para tu dominio",
          href: "/es/blog/pochta-dlya-domena/",
        },
      ],
    },
  ],
  closing: [
    "Comprueba disponibilidad del nombre, regístralo con datos y nameservers correctos, paga el plazo y pon ya la fecha de renovación en el calendario — para que el dominio sea tu dirección de trabajo, no una línea olvidada del carrito.",
  ],
  related: [
    "domen-pervogo-urovnya",
    "domen-rf",
    "istoriya-domena",
    "pochta-dlya-domena",
    "veb-server",
    "menedzher-paroley",
  ],
};
