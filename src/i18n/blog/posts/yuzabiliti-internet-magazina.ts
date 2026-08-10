import type { BlogPost } from "../../../data/blog";

/** EN overlay for yuzabiliti-internet-magazina — same structure as RU JSON. */
export const yuzabilitiInternetMagazinaEn: BlogPost = {
  slug: "yuzabiliti-internet-magazina",
  title: "18 ecommerce usability mistakes that kill conversion",
  date: "2018-08-31",
  category: "E-commerce",
  cover: "/images/blog/yuzabiliti-internet-magazina/cover-en.webp",
  excerpt:
    "Long forms, missing search or mobile layout, hidden terms, forced registration, weak product pages, cart and checkout friction — an ecommerce UX checklist without “fix it and instantly 2×” promises.",
  lead: [
    "Low store conversion often isn’t “not enough traffic” — it’s friction: can’t find the product, unclear shipping, cart empties, the form wants a biography.",
    "Here are typical UX mistakes and what to fix. A neighboring piece covers hidden SEO and catalog misses; this one focuses on the path to purchase. “18 mistakes” is a list guide — not a magic number.",
  ],
  faq: [
    {
      q: "How is this different from the 7 optimization mistakes article?",
      a: "That one covers duplicates, filters, and catalog pop-ups. This one covers search, product page, cart, checkout, and trust on the order path.",
    },
    {
      q: "Do buyers have to register?",
      a: "Guest checkout or a field minimum is better. Social login is an option — not the only path.",
    },
    {
      q: "Do I need a mobile app?",
      a: "Not required. First a decent responsive site; an app only if you have repeat buys and resources to support it.",
    },
    {
      q: "Why does cart persistence matter?",
      a: "A dropped tab or network blip without saving kills the order. Keep cart contents across sessions where it fits.",
    },
    {
      q: "When should I show price with shipping?",
      a: "As early as possible — before a final surprise. The total should recalculate in view.",
    },
    {
      q: "Is one product photo enough?",
      a: "Rarely. You need angles, readable quality, and stock on the page before checkout.",
    },
  ],
  sections: [
    {
      title: "Entering the catalog: forms, search, mobile",
      level: 2,
      paras: [
        "Long forms scare people off: collect a minimum, use hints and autofill (ZIP, city). Site search is required if the assortment is more than a couple of showcases — and watch what people actually search.",
        "Without a mobile-friendly layout you lose a large share of visits. Responsive beats a mandatory app.",
        "Payment, shipping, and warranty terms — visible and in checkout. Contacts and hours raise trust even without an offline location.",
      ],
      lists: [
        {
          intro: "Registration without pain:",
          items: [
            "buy without an account",
            "a short form",
            "a bonus after signup — optional",
            "don’t block the order behind social login",
          ],
        },
      ],
      links: [
        {
          label: "Abandoned cart",
          href: "/en/blog/broshennaya-korzina/",
        },
        {
          label: "Responsive website",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Product page and cart",
      level: 2,
      paras: [
        "A product with no real description and blurry photos doesn’t compete. Need specs in plain language, stock or lead time, several angles or video.",
        "Cross-sells fit as similar or related, not a wall of pop-ups. The cart shouldn’t empty on page refresh; cart lines need a short description and price.",
        "After order — a clear next step: order number, when you’ll contact, timing and payment. Offer a quick order (name plus phone) for people who don’t want a long checkout.",
      ],
      links: [
        {
          label: "Product page",
          href: "/en/blog/kartochka-tovara/",
        },
        {
          label: "Online store mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
      ],
    },
    {
      title: "Payment and order finish",
      level: 2,
      paras: [
        "When payment fails, explain why and what to do next — not a silent error. Field hints and auto-saving input reduce rage when a form resets.",
        "The total should update when shipping or payment changes; hidden fees on the last step are classic drop-off. Email the buyer a copy of the order.",
      ],
      notes: [
        {
          title: "Fix priority",
          text: "First mobile checkout, transparent price and shipping, and cart persistence. Average-ticket widgets come after the purchase path is stable.",
        },
      ],
      links: [
        {
          label: "Online payment",
          href: "/en/blog/onlayn-oplata/",
        },
        {
          label: "Website checklist",
          href: "/en/blog/cheklist-sayta/",
        },
      ],
    },
  ],
  closing: [
    "Store usability is less friction from finding a product to the “order received” email. Walk the checklist on forms, product page, cart, and payment — and measure checkout conversion, not how many boxes you ticked.",
  ],
  related: [
    "oshibki-internet-magazina",
    "broshennaya-korzina",
    "kartochka-tovara",
    "onlayn-oplata",
    "cheklist-sayta",
    "adaptivnyy-sayt",
  ],
};

/** ES overlay for yuzabiliti-internet-magazina — same structure as RU JSON / EN. */
export const yuzabilitiInternetMagazinaEs: BlogPost = {
  slug: "yuzabiliti-internet-magazina",
  title: "18 errores de usabilidad ecommerce que matan la conversión",
  date: "2018-08-31",
  category: "E-commerce",
  cover: "/images/blog/yuzabiliti-internet-magazina/cover-es.webp",
  excerpt:
    "Formularios largos, sin búsqueda o layout móvil, términos ocultos, registro forzado, fichas débiles, fricción en carrito y checkout — un checklist UX de ecommerce sin promesas de «arréglalo y al instante ×2».",
  lead: [
    "La baja conversión de una tienda a menudo no es «falta de tráfico» — es fricción: no encuentran el producto, el envío no está claro, el carrito se vacía, el formulario pide una biografía.",
    "Aquí van errores UX típicos y qué arreglar. Una pieza vecina cubre misses ocultos de SEO y catálogo; esta se centra en el camino a la compra. «18 errores» es una guía-lista — no un número mágico.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia del artículo de 7 errores de optimización?",
      a: "Aquel cubre duplicados, filtros y pop-ups del catálogo. Este cubre búsqueda, ficha, carrito, checkout y trust en el camino del pedido.",
    },
    {
      q: "¿Los compradores tienen que registrarse?",
      a: "Guest checkout o un mínimo de campos es mejor. Login social es una opción — no el único camino.",
    },
    {
      q: "¿Hace falta una app móvil?",
      a: "No es obligatorio. Primero un sitio responsive decente; una app solo si tienes compras repetidas y recursos para sostenerla.",
    },
    {
      q: "¿Por qué importa la persistencia del carrito?",
      a: "Una pestaña cerrada o un blip de red sin guardar mata el pedido. Mantén el contenido del carrito entre sesiones donde encaje.",
    },
    {
      q: "¿Cuándo mostrar el precio con envío?",
      a: "Lo antes posible — antes de una sorpresa final. El total debe recalcularse a la vista.",
    },
    {
      q: "¿Basta una foto del producto?",
      a: "Rara vez. Hacen falta ángulos, calidad legible y stock en la página antes del checkout.",
    },
  ],
  sections: [
    {
      title: "Entrar al catálogo: formularios, búsqueda, móvil",
      level: 2,
      paras: [
        "Los formularios largos asustan: recoge un mínimo, usa hints y autofill (CP, ciudad). La búsqueda del sitio es obligatoria si el surtido es más que un par de escaparates — y mira qué busca la gente de verdad.",
        "Sin un layout mobile-friendly pierdes una gran cuota de visitas. Responsive gana a una app obligatoria.",
        "Términos de pago, envío y garantía — visibles y en checkout. Contactos y horario suben trust incluso sin local offline.",
      ],
      lists: [
        {
          intro: "Registro sin dolor:",
          items: [
            "comprar sin cuenta",
            "un formulario corto",
            "un bonus tras el signup — opcional",
            "no bloquees el pedido detrás del login social",
          ],
        },
      ],
      links: [
        {
          label: "Carrito abandonado",
          href: "/es/blog/broshennaya-korzina/",
        },
        {
          label: "Sitio web responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Ficha de producto y carrito",
      level: 2,
      paras: [
        "Un producto sin descripción real y fotos borrosas no compite. Hacen falta specs en lenguaje claro, stock o plazo, varios ángulos o vídeo.",
        "Los cross-sells encajan como similares o relacionados, no un muro de pop-ups. El carrito no debería vaciarse al refrescar; las líneas necesitan una descripción corta y precio.",
        "Tras el pedido — un siguiente paso claro: número de pedido, cuándo os pondréis en contacto, plazos y pago. Ofrece un pedido rápido (nombre más teléfono) para quien no quiere un checkout largo.",
      ],
      links: [
        {
          label: "Ficha de producto",
          href: "/es/blog/kartochka-tovara/",
        },
        {
          label: "Errores de tienda online",
          href: "/es/blog/oshibki-internet-magazina/",
        },
      ],
    },
    {
      title: "Pago y cierre del pedido",
      level: 2,
      paras: [
        "Cuando falla el pago, explica por qué y qué hacer después — no un error silencioso. Hints de campos y auto-guardado del input bajan la rabia cuando un formulario se resetea.",
        "El total debe actualizarse cuando cambian envío o pago; fees ocultos en el último paso son drop-off clásico. Envía al comprador una copia del pedido por email.",
      ],
      notes: [
        {
          title: "Prioridad de fixes",
          text: "Primero checkout móvil, precio y envío transparentes, y persistencia del carrito. Los widgets de ticket medio vienen cuando el camino de compra ya está estable.",
        },
      ],
      links: [
        {
          label: "Pago online",
          href: "/es/blog/onlayn-oplata/",
        },
        {
          label: "Checklist del sitio web",
          href: "/es/blog/cheklist-sayta/",
        },
      ],
    },
  ],
  closing: [
    "La usabilidad de una tienda es menos fricción desde encontrar un producto hasta el email de «pedido recibido». Recorre el checklist en formularios, ficha, carrito y pago — y mide la conversión de checkout, no cuántas casillas marcaste.",
  ],
  related: [
    "oshibki-internet-magazina",
    "broshennaya-korzina",
    "kartochka-tovara",
    "onlayn-oplata",
    "cheklist-sayta",
    "adaptivnyy-sayt",
  ],
};
