import type { BlogPost } from "../../../data/blog";

/** EN overlay for yumoney — same structure as RU JSON. */
export const yumoneyEn: BlogPost = {
  slug: "yumoney",
  title: "YooMoney (Yandex.Wallet): what it is and how to use it",
  date: "2021-04-30",
  category: "Digital marketing",
  cover: "/images/blog/yumoney/cover-en.webp",
  excerpt:
    "YooMoney (formerly Yandex.Money / Yandex.Wallet): an e-wallet for payments and transfers, ID levels, funding and withdrawals — without outdated screenshots or mixing it up with YooKassa.",
  lead: [
    "YooMoney is an e-wallet for online payments and transfers (historically Yandex.Money or Yandex.Wallet). It’s a user’s account — not a payment aggregator for an online store.",
    "Below: what the wallet is for, how it differs from YooKassa, ID levels, and the logic of funding and withdrawals. Fees, limits, and menus change — check the YooMoney dashboard and Help.",
  ],
  faq: [
    {
      q: "Are YooMoney and Yandex.Wallet the same?",
      a: "Essentially yes: the product was renamed. Older texts and client habits still say Yandex.Money or wallet.",
    },
    {
      q: "How is YooMoney different from YooKassa?",
      a: "YooKassa takes payments on a business site. YooMoney is a personal or client wallet for paying and sending money. A shop usually needs Checkout (Kassa), not the owner’s personal wallet.",
    },
    {
      q: "Why identify yourself?",
      a: "Balance, transfer, and withdrawal limits depend on the ID level. Without ID, features are thinner. Status details live in current YooMoney Help.",
    },
    {
      q: "Do I need a Yandex account?",
      a: "Sign-in is usually tied to a Yandex account or linked profile. Don’t use someone else’s login for money.",
    },
    {
      q: "Can I pay in stores with YooMoney?",
      a: "Yes, where they accept YooMoney or linked methods. Points and limits — in the app and with the merchant.",
    },
    {
      q: "How do I withdraw to a card?",
      a: "After the required ID level — transfer to a bank card or other methods in the dashboard. Fee and timing depend on the method.",
    },
    {
      q: "Is it safe to keep large sums?",
      a: "An e-wallet isn’t a bank deposit. Keep working balances, turn on login protection, don’t store the password in messengers.",
    },
    {
      q: "Is it enough to take payments on a website?",
      a: "For a full online store you usually connect a payment aggregator (e.g. YooKassa) under a sole trader or company contract. A personal wallet is a different scenario with different limits.",
    },
  ],
  sections: [
    {
      title: "What it is",
      level: 2,
      paras: [
        "The wallet holds electronic money and lets you pay for services, send to people and businesses, and sometimes cash out to a card — within service rules and the law.",
        "Historically the brand was Yandex.Money; communication now usually says YooMoney. For the user it’s the same idea: a digital account with app and web.",
        "Don’t confuse it with acquiring: take payments as a legal entity from a site and pay from your own wallet are different products.",
      ],
      links: [
        {
          label: "YooKassa for a store",
          href: "/en/blog/yukassa/",
        },
        {
          label: "Online payments on a site",
          href: "/en/blog/onlayn-oplata/",
        },
      ],
    },
    {
      title: "Sign-up and login",
      level: 2,
      paras: [
        "Opening goes through a Yandex account or the form on the YooMoney site or app: phone for confirmations, password, terms acceptance.",
        "After creating it, find the account or wallet number in the dashboard — some funding channels need it. Exact UI paths change.",
        "Turn on available protections right away: SMS or app confirmation, device control, a strong Yandex account password.",
      ],
      notes: [
        {
          title: "Don’t memorize old screenshots",
          kind: "tip",
          text: "2021 guides with a checkbox by the balance are often outdated. Find the account number and funding options in the current menu or YooMoney Help.",
        },
      ],
    },
    {
      title: "Funding, transfer, withdrawal",
      level: 2,
      paras: [
        "Funding: bank card, bank transfer, sometimes terminals and other wallets — list and fees in the Add money section.",
        "Transfer: pick the recipient (phone, account, card — what’s available), amount, confirm. Check the fee before sending.",
        "Card withdrawal and cash-out usually need a higher ID status. Anonymous or minimal levels cut limits hard.",
      ],
      lists: [
        {
          intro: "Before a large transfer:",
          items: [
            "recipient details verified",
            "fee is clear",
            "ID status is enough",
            "no “today or never” pressure from a stranger",
          ],
        },
      ],
    },
    {
      title: "Identification and limits",
      level: 2,
      paras: [
        "The service splits identity-check levels (confirm status names in Help). Higher level — wider operations and limits.",
        "For business and freelance, plan ahead: withdrawing fees may need passport data and verification time.",
        "Don’t copy 2021 article limit numbers — use current figures in the dashboard.",
      ],
    },
    {
      title: "Security",
      level: 2,
      paras: [
        "Don’t enter password and codes on wallet recovery sites from email. Official login — only via a trusted domain or app.",
        "Don’t dictate SMS codes to support in a messenger. Bank and wallet staff never ask for the full password.",
        "On a shared computer, sign out; on a phone — screen lock and a separate profile if others use the device.",
      ],
    },
    {
      title: "When a wallet vs Checkout",
      level: 2,
      paras: [
        "For a client paying an order — YooMoney fits if the seller accepts it.",
        "For a store taking hundreds of payments with receipts — look at an aggregator like YooKassa and receipt rules (e.g. 54-FZ in Russia), not the founder’s personal wallet.",
        "Mixing “send money to a sole trader’s wallet” with no contract creates accounting and legal risk — that’s not just a handy button.",
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "YooMoney is a user wallet; YooKassa is business payment acceptance.",
        "ID unlocks withdrawals and limits; terms live only in current Help.",
        "Login security beats life hacks for funding via outdated terminal networks.",
      ],
    },
  ],
  closing: [
    "If you need a personal wallet — register in YooMoney, turn on protection, and complete the ID level for your limits; if you need payments on a site — look at YooKassa and online checkout, and don’t mix the products.",
  ],
  related: [
    "yukassa",
    "onlayn-oplata",
    "yandeks-toloka",
    "pochtovyy-servis",
    "formy-zahvata",
    "roi-marketinga",
  ],
};

/** ES overlay for yumoney — same structure as RU JSON / EN. */
export const yumoneyEs: BlogPost = {
  slug: "yumoney",
  title: "YooMoney (Yandex.Wallet): qué es y cómo usarlo",
  date: "2021-04-30",
  category: "Marketing digital",
  cover: "/images/blog/yumoney/cover.webp",
  excerpt:
    "YooMoney (antes Yandex.Money / Yandex.Wallet): monedero electrónico para pagos y transferencias, niveles de identificación, ingreso y retiros — sin capturas obsoletas ni confundirlo con YooKassa.",
  lead: [
    "YooMoney es un monedero electrónico para pagos online y transferencias (históricamente Yandex.Money o Yandex.Wallet). Es la cuenta de un usuario — no un agregador de pagos para una tienda online.",
    "Abajo: para qué sirve el monedero, en qué se diferencia de YooKassa, niveles de ID y la lógica de ingreso y retiros. Comisiones, límites y menús cambian — revisa el panel y la Help de YooMoney.",
  ],
  faq: [
    {
      q: "¿YooMoney y Yandex.Wallet son lo mismo?",
      a: "En esencia sí: el producto se renombró. Textos antiguos y hábitos de clientes siguen diciendo Yandex.Money o wallet.",
    },
    {
      q: "¿En qué se diferencia YooMoney de YooKassa?",
      a: "YooKassa cobra pagos en el sitio de un negocio. YooMoney es un monedero personal o de cliente para pagar y enviar dinero. Una tienda suele necesitar Checkout (Kassa), no el monedero personal del dueño.",
    },
    {
      q: "¿Por qué identificarse?",
      a: "Los límites de saldo, transferencia y retiro dependen del nivel de ID. Sin ID, las funciones son más finas. El detalle de estados vive en la Help actual de YooMoney.",
    },
    {
      q: "¿Hace falta una cuenta Yandex?",
      a: "El login suele ir ligado a una cuenta Yandex o a un perfil vinculado. No uses el login de otro para dinero.",
    },
    {
      q: "¿Puedo pagar en tiendas con YooMoney?",
      a: "Sí, donde acepten YooMoney o métodos vinculados. Puntos y límites — en la app y con el comercio.",
    },
    {
      q: "¿Cómo retiro a una tarjeta?",
      a: "Tras el nivel de ID requerido — transferencia a tarjeta bancaria u otros métodos del panel. Comisión y plazos dependen del método.",
    },
    {
      q: "¿Es seguro guardar sumas grandes?",
      a: "Un monedero electrónico no es un depósito bancario. Mantén saldos de trabajo, activa protección de login, no guardes la contraseña en messengers.",
    },
    {
      q: "¿Basta para cobrar en un sitio web?",
      a: "Para una tienda online completa suele conectarse un agregador de pagos (p. ej. YooKassa) bajo contrato de autónomo o empresa. Un monedero personal es otro escenario con otros límites.",
    },
  ],
  sections: [
    {
      title: "Qué es",
      level: 2,
      paras: [
        "El monedero guarda dinero electrónico y permite pagar servicios, enviar a personas y negocios y a veces sacar a tarjeta — dentro de las reglas del servicio y la ley.",
        "Históricamente la marca era Yandex.Money; la comunicación ahora suele decir YooMoney. Para el usuario es la misma idea: una cuenta digital con app y web.",
        "No lo confundas con acquiring: cobrar como persona jurídica desde un sitio y pagar desde tu propio monedero son productos distintos.",
      ],
      links: [
        {
          label: "YooKassa para una tienda",
          href: "/es/blog/yukassa/",
        },
        {
          label: "Pagos online en un sitio",
          href: "/es/blog/onlayn-oplata/",
        },
      ],
    },
    {
      title: "Registro e inicio de sesión",
      level: 2,
      paras: [
        "La apertura va por una cuenta Yandex o el formulario en el sitio o app de YooMoney: teléfono para confirmaciones, contraseña, aceptación de términos.",
        "Tras crearlo, busca el número de cuenta o monedero en el panel — algunos canales de ingreso lo necesitan. Las rutas exactas de UI cambian.",
        "Activa de inmediato las protecciones disponibles: confirmación por SMS o app, control de dispositivos, una contraseña fuerte de la cuenta Yandex.",
      ],
      notes: [
        {
          title: "No memorices capturas antiguas",
          kind: "tip",
          text: "Las guías de 2021 con un checkbox junto al saldo suelen estar obsoletas. Busca el número de cuenta y las opciones de ingreso en el menú actual o en la Help de YooMoney.",
        },
      ],
    },
    {
      title: "Ingreso, transferencia, retiro",
      level: 2,
      paras: [
        "Ingreso: tarjeta bancaria, transferencia, a veces terminales y otros monederos — lista y comisiones en la sección Añadir dinero.",
        "Transferencia: elige el destinatario (teléfono, cuenta, tarjeta — lo disponible), importe, confirma. Revisa la comisión antes de enviar.",
        "Retiro a tarjeta y cash-out suelen pedir un estatus de ID más alto. Los niveles anónimos o mínimos recortan los límites con fuerza.",
      ],
      lists: [
        {
          intro: "Antes de una transferencia grande:",
          items: [
            "datos del destinatario verificados",
            "la comisión está clara",
            "el estatus de ID basta",
            "sin presión de «hoy o nunca» de un desconocido",
          ],
        },
      ],
    },
    {
      title: "Identificación y límites",
      level: 2,
      paras: [
        "El servicio parte niveles de verificación de identidad (confirma los nombres de estado en Help). Nivel más alto — operaciones y límites más amplios.",
        "Para negocio y freelance, planifica con antelación: retirar honorarios puede pedir datos de pasaporte y tiempo de verificación.",
        "No copies cifras de límites de artículos de 2021 — usa las cifras actuales del panel.",
      ],
    },
    {
      title: "Seguridad",
      level: 2,
      paras: [
        "No introduzcas contraseña y códigos en sitios de recuperación del monedero llegados por email. Login oficial — solo por un dominio de confianza o la app.",
        "No dictes códigos SMS al «soporte» en un messenger. El personal del banco y del monedero nunca pide la contraseña completa.",
        "En un ordenador compartido, cierra sesión; en el teléfono — bloqueo de pantalla y un perfil aparte si otros usan el dispositivo.",
      ],
    },
    {
      title: "Cuándo monedero vs Checkout",
      level: 2,
      paras: [
        "Para un cliente que paga un pedido — YooMoney encaja si el vendedor lo acepta.",
        "Para una tienda que cobra cientos de pagos con recibos — mira un agregador como YooKassa y las reglas de recibos (p. ej. 54-FZ en Rusia), no el monedero personal del fundador.",
        "Mezclar «envía dinero al monedero de un autónomo» sin contrato crea riesgo contable y legal — no es solo un botón práctico.",
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "YooMoney es monedero de usuario; YooKassa es aceptación de pagos para negocio.",
        "El ID desbloquea retiros y límites; los términos viven solo en la Help actual.",
        "La seguridad del login gana a life hacks de ingreso vía redes de terminales obsoletas.",
      ],
    },
  ],
  closing: [
    "Si necesitas un monedero personal — regístrate en YooMoney, activa la protección y completa el nivel de ID para tus límites; si necesitas cobros en un sitio — mira YooKassa y el checkout online, y no mezcles los productos.",
  ],
  related: [
    "yukassa",
    "onlayn-oplata",
    "yandeks-toloka",
    "pochtovyy-servis",
    "formy-zahvata",
    "roi-marketinga",
  ],
};
