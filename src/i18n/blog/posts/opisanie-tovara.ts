import type { BlogPost } from "../../../data/blog";

/** EN overlay for opisanie-tovara — same structure as RU JSON. */
export const opisanieTovaraEn: BlogPost = {
  slug: "opisanie-tovara",
  title: "Product description on an ecommerce card",
  date: "2020-07-27",
  category: "Content marketing",
  cover: "/images/blog/opisanie-tovara/cover-en.webp",
  excerpt:
    "How to write a product-card description: photos and copy, emotion without fluff, features and specs, structure and SEO — so the buyer finds price arguments and places the order.",
  lead: [
    "The product card is where a purchase decision most often breaks or locks in. A strong photo catches the eye; the text must answer doubts: why do I need this, what justifies the price, why your store is easier than the next tab.",
    "Below: the role of image and copy, how to write benefits and features, which specs belong on the card, and how to shape the block without a wall of text. The general selling-copy frame lives nearby; here the focus is the ecommerce SKU card.",
  ],
  faq: [
    {
      q: "Is one photo enough without text?",
      a: "For impulse cheap items sometimes yes. At a high price, size or configuration choice, and competitor comparison — text is required.",
    },
    {
      q: "Should you write with emotion or only specs?",
      a: "Both layers: a short use scenario plus facts (material, size, kit). Emotion alone without properties doesn’t close doubts.",
    },
    {
      q: "Can you copy the manufacturer’s description?",
      a: "Duplicate risk and identical cards across sellers. Better uniqueize for your audience and add what competitors lack — shipping, warranty, bundles.",
    },
    {
      q: "Do you need keywords in the description?",
      a: "Naturally — name, type, key attributes. Don’t turn a paragraph into a comma-separated query list.",
    },
    {
      q: "How many characters should it have?",
      a: "As many as close choice questions. Often: a two-to-four-sentence lead, a specs list, and a “why us” block. Don’t pad with fluff.",
    },
    {
      q: "What’s required for apparel and footwear?",
      a: "Size chart, material, care, fit or width, model height when needed — everything that drives chat messages and sends people to a competitor.",
    },
    {
      q: "Will the description alone get you to page one?",
      a: "It’s part of page quality and conversion. Card prep takes weeks. Organic growth for the keyword set builds month to month — planned 2–6 months after work starts.",
    },
    {
      q: "How does a product card differ from a landing page?",
      a: "A card is a compact SKU choice in a catalog. A landing is one offer on a long page. Techniques overlap; volume and structure differ.",
    },
  ],
  sections: [
    {
      title: "Why the card needs strong copy",
      level: 2,
      paras: [
        "The buyer already caught on visuals or price and wants confirmation. Copy persuades that the product solves the job, that price matches kit and service, and that ordering with you is easier than opening three more tabs.",
        "Weak copy like “perfect gift” with no detail isn’t read. Strong copy answers typical objections before a manager replies: while you wait in chat, part of the audience already bought from a competitor with a full spec.",
      ],
      lists: [
        {
          intro: "Three jobs of the description:",
          items: [
            "remove “do I need this” doubt",
            "justify price and contents",
            "nudge the order specifically with you",
          ],
        },
      ],
      links: [
        {
          label: "Selling copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "Photo and text work as a pair",
      level: 2,
      paras: [
        "The image sells attention: color, angle, use context. But at a high price or complex choice the eye goes to text — looking for material, size, warranty, differences from a cheap analogue.",
        "Strong combo: honest photos (including detail and scale) plus copy that names feelings and facts. Don’t rely only on a pretty label — without arguments the cart empties on the next step.",
      ],
      lists: [
        {
          intro: "Visual minimum next to copy:",
          items: [
            "hero angle and two or three details",
            "in-use photo if it fits",
            "readable captions and alt without stuffing",
            "consistent style across a card series",
          ],
        },
      ],
      links: [
        {
          label: "Image alt text",
          href: "/en/blog/alt-img/",
        },
        {
          label: "Images and attention",
          href: "/en/blog/kartinki-vnimanie/",
        },
      ],
    },
    {
      title: "Emotion and use scenario",
      level: 2,
      paras: [
        "A good lead makes the result feel real: not “soft blanket,” but “after work, wrap up and exhale with a coffee.” The emotion is familiar to the audience — and the product becomes an answer, not an abstract catalog row.",
        "Don’t overdo ad pathos and invented miracles. If you promise an effect — it must be plausible and match the specs. Otherwise returns and bad reviews eat conversion.",
      ],
      lists: [
        {
          intro: "How to write the scenario:",
          items: [
            "who buys and in what situation",
            "which pain or desire we close",
            "one or two sensory details without fluff",
            "hand-off to facts and the feature list",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "A lyrical paragraph with no sizes or composition. Pretty — but they don’t buy.",
        },
      ],
    },
    {
      title: "Features, benefits, and honest arguments",
      level: 2,
      paras: [
        "People buy a solution: warm up, speed up, gift, save space. Before writing, gather audience questions from chats, reviews, and search. The text answers them — it doesn’t list “innovation” without proof.",
        "Link features to benefits: “dense fabric 300 g/m²” → “doesn’t show through and keeps shape after washes.” Add why buy from you: kit, timelines, returns, advice — what a marketplace card lacks.",
      ],
      lists: [
        {
          intro: "Argument frame:",
          items: [
            "who the product is for",
            "which job it solves",
            "key features → benefits",
            "differences from typical alternatives",
            "purchase terms with you",
          ],
        },
      ],
      links: [
        {
          label: "Ecommerce promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Specs: everything that drives chat messages",
      level: 2,
      paras: [
        "If choice needs insole length, power, alloy composition, compatibility — it must be on the card immediately. Otherwise the impulse cools while a manager answers.",
        "Form matters: short lead first, then a bulleted specs list, then detail and product FAQ. A solid 3000-character wall without structure isn’t read on a phone.",
      ],
      lists: [
        {
          intro: "Required specs block:",
          items: [
            "sizes / weight / volume",
            "materials and care",
            "what’s in the box",
            "compatibility and limits",
            "warranty and return terms (short + link)",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Walk 20 frequent support questions — half should be closed by the card copy.",
        },
      ],
      links: [
        {
          label: "Ecommerce categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Strong-card checklist",
      level: 2,
      paras: [
        "Before publish check: emotion or scenario without fluff, features covered, full specs list, reasons to buy from you, clear CTA (add to cart / order / get a quote). An original hook fits if it helps choice — not if it distracts.",
        "A perfect description doesn’t guarantee page-one rankings by itself — it lifts conversion and page quality. Next come assortment, price, shipping, and the catalog SEO track.",
      ],
      lists: [
        {
          intro: "Before going live:",
          items: [
            "lead answers “why me”",
            "specs are complete",
            "no factory copy-paste one-to-one (or consciously improved)",
            "keywords feel natural",
            "mobile readability",
            "photo and copy aligned",
          ],
        },
      ],
      links: [
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "prodayushchie-teksty",
    "prodvizhenie-internet-magazina",
    "kategorii-internet-magazina",
    "kopirayting",
    "optimizatsiya-konversii",
    "alt-img",
  ],
};

/** ES overlay for opisanie-tovara — same structure as RU JSON / EN. */
export const opisanieTovaraEs: BlogPost = {
  slug: "opisanie-tovara",
  title: "Descripción de producto en una ficha ecommerce",
  date: "2020-07-27",
  category: "Content marketing",
  cover: "/images/blog/opisanie-tovara/cover.webp",
  excerpt:
    "Cómo escribir la descripción de una ficha de producto: fotos y copy, emoción sin fluff, features y specs, estructura y SEO — para que el comprador encuentre argumentos de precio y haga el pedido.",
  lead: [
    "La ficha de producto es donde una decisión de compra más a menudo se rompe o se cierra. Una foto fuerte atrapa la mirada; el texto debe responder dudas: por qué lo necesito, qué justifica el precio, por qué tu tienda es más fácil que la siguiente pestaña.",
    "Abajo: el rol de imagen y copy, cómo escribir beneficios y features, qué specs van en la ficha y cómo armar el bloque sin un muro de texto. El marco general de copy de venta vive cerca; aquí el foco es la ficha SKU de ecommerce.",
  ],
  faq: [
    {
      q: "¿Basta una foto sin texto?",
      a: "Para ítems baratos de impulso a veces sí. Con precio alto, elección de talla o configuración, y comparación con competidores — el texto es obligatorio.",
    },
    {
      q: "¿Escribes con emoción o solo specs?",
      a: "Ambas capas: un escenario de uso corto más hechos (material, talla, kit). La emoción sola sin propiedades no cierra dudas.",
    },
    {
      q: "¿Se puede copiar la descripción del fabricante?",
      a: "Riesgo de duplicado y fichas idénticas entre vendedores. Mejor uniquizar para tu audiencia y añadir lo que falta a los competidores — envío, garantía, bundles.",
    },
    {
      q: "¿Hacen falta keywords en la descripción?",
      a: "De forma natural — nombre, tipo, atributos clave. No conviertas un párrafo en una lista de queries separadas por comas.",
    },
    {
      q: "¿Cuántos caracteres debería tener?",
      a: "Los que cierren las preguntas de elección. A menudo: un lead de dos a cuatro frases, una lista de specs y un bloque «por qué nosotros». No rellenes con fluff.",
    },
    {
      q: "¿Qué es obligatorio en ropa y calzado?",
      a: "Tabla de tallas, material, cuidado, fit o ancho, altura del modelo cuando haga falta — todo lo que dispara mensajes en el chat y manda a la gente al competidor.",
    },
    {
      q: "¿La descripción sola te lleva a primera página?",
      a: "Es parte de la calidad de página y la conversión. La prep de fichas lleva semanas. El crecimiento orgánico del set de keywords se construye mes a mes — planificado 2–6 meses tras el arranque del trabajo.",
    },
    {
      q: "¿En qué se diferencia una ficha de producto de una landing?",
      a: "Una ficha es una elección compacta de SKU en un catálogo. Una landing es una oferta en una página larga. Las técnicas se solapan; volumen y estructura difieren.",
    },
  ],
  sections: [
    {
      title: "Por qué la ficha necesita copy fuerte",
      level: 2,
      paras: [
        "El comprador ya enganchó con visuales o precio y quiere confirmación. El copy persuade de que el producto resuelve el trabajo, de que el precio encaja con el kit y el servicio, y de que pedir contigo es más fácil que abrir tres pestañas más.",
        "Un copy débil tipo «regalo perfecto» sin detalle no se lee. Un copy fuerte responde objeciones típicas antes de que un manager conteste: mientras esperas en el chat, parte de la audiencia ya compró al competidor con la ficha completa.",
      ],
      lists: [
        {
          intro: "Tres trabajos de la descripción:",
          items: [
            "quitar la duda «¿lo necesito?»",
            "justificar precio y contenido",
            "empujar el pedido concretamente contigo",
          ],
        },
      ],
      links: [
        {
          label: "Copy de venta",
          href: "/es/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "Foto y texto trabajan en pareja",
      level: 2,
      paras: [
        "La imagen vende atención: color, ángulo, contexto de uso. Pero con precio alto o elección compleja la mirada va al texto — buscando material, talla, garantía, diferencias frente a un análogo barato.",
        "Combo fuerte: fotos honestas (incluido detalle y escala) más copy que nombra sensaciones y hechos. No dependas solo de una etiqueta bonita — sin argumentos el carrito se vacía en el siguiente paso.",
      ],
      lists: [
        {
          intro: "Mínimo visual junto al copy:",
          items: [
            "ángulo hero y dos o tres detalles",
            "foto en uso si encaja",
            "captions y alt legibles sin stuffing",
            "estilo coherente en una serie de fichas",
          ],
        },
      ],
      links: [
        {
          label: "Texto alt de imagen",
          href: "/es/blog/alt-img/",
        },
        {
          label: "Imágenes y atención",
          href: "/es/blog/kartinki-vnimanie/",
        },
      ],
    },
    {
      title: "Emoción y escenario de uso",
      level: 2,
      paras: [
        "Un buen lead hace sentir el resultado: no «manta suave», sino «tras el trabajo, envuélvete y exhala con un café». La emoción es familiar para la audiencia — y el producto se vuelve una respuesta, no una fila abstracta de catálogo.",
        "No abuses del pathos publicitario ni de milagros inventados. Si prometes un efecto — debe ser plausible y encajar con las specs. Si no, las devoluciones y malas reseñas se comen la conversión.",
      ],
      lists: [
        {
          intro: "Cómo escribir el escenario:",
          items: [
            "quién compra y en qué situación",
            "qué dolor o deseo cerramos",
            "uno o dos detalles sensoriales sin fluff",
            "pase a hechos y a la lista de features",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Un párrafo lírico sin tallas ni composición. Bonito — pero no compran.",
        },
      ],
    },
    {
      title: "Features, beneficios y argumentos honestos",
      level: 2,
      paras: [
        "La gente compra una solución: abrigarse, acelerar, regalar, ahorrar espacio. Antes de escribir, reúne preguntas de la audiencia de chats, reseñas y búsqueda. El texto las responde — no lista «innovación» sin prueba.",
        "Liga features a beneficios: «tejido denso 300 g/m²» → «no se transparenta y mantiene la forma tras los lavados». Añade por qué comprar contigo: kit, plazos, devoluciones, consejo — lo que falta a una ficha de marketplace.",
      ],
      lists: [
        {
          intro: "Marco de argumentos:",
          items: [
            "para quién es el producto",
            "qué trabajo resuelve",
            "features clave → beneficios",
            "diferencias frente a alternativas típicas",
            "términos de compra contigo",
          ],
        },
      ],
      links: [
        {
          label: "Promoción ecommerce",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Specs: todo lo que dispara mensajes en el chat",
      level: 2,
      paras: [
        "Si la elección necesita longitud de plantilla, potencia, composición de aleación, compatibilidad — debe estar en la ficha al momento. Si no, el impulso se enfría mientras un manager responde.",
        "Importa la forma: primero un lead corto, luego una lista de specs con viñetas, luego detalle y FAQ del producto. Un muro sólido de 3000 caracteres sin estructura no se lee en el teléfono.",
      ],
      lists: [
        {
          intro: "Bloque de specs obligatorio:",
          items: [
            "tallas / peso / volumen",
            "materiales y cuidado",
            "qué hay en la caja",
            "compatibilidad y límites",
            "garantía y términos de devolución (corto + enlace)",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Recorre 20 preguntas frecuentes de soporte — la mitad debería cerrarla el copy de la ficha.",
        },
      ],
      links: [
        {
          label: "Categorías ecommerce",
          href: "/es/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Checklist de ficha fuerte",
      level: 2,
      paras: [
        "Antes de publicar revisa: emoción o escenario sin fluff, features cubiertas, lista completa de specs, motivos para comprar contigo, CTA claro (añadir al carrito / pedir / pedir presupuesto). Un gancho original encaja si ayuda a elegir — no si distrae.",
        "Una descripción perfecta no garantiza sola rankings en primera página — sube conversión y calidad de página. Luego vienen surtido, precio, envío y la vía SEO del catálogo.",
      ],
      lists: [
        {
          intro: "Antes de ir live:",
          items: [
            "el lead responde «por qué yo»",
            "las specs están completas",
            "sin copy-paste de fábrica uno a uno (o mejorado a conciencia)",
            "las keywords se sienten naturales",
            "legibilidad móvil",
            "foto y copy alineados",
          ],
        },
      ],
      links: [
        {
          label: "Copywriting",
          href: "/es/blog/kopirayting/",
        },
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "prodayushchie-teksty",
    "prodvizhenie-internet-magazina",
    "kategorii-internet-magazina",
    "kopirayting",
    "optimizatsiya-konversii",
    "alt-img",
  ],
};
