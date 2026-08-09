import type { BlogPost } from "../../../data/blog";

/** EN overlay for kartochka-tovara — same structure as RU JSON. */
export const kartochkaTovaraEn: BlogPost = {
  slug: "kartochka-tovara",
  title: "Product page: structure, photos, price, and Buy",
  date: "2019-06-10",
  category: "E-commerce",
  cover: "/images/blog/kartochka-tovara/cover-en.webp",
  excerpt:
    "How to build an ecommerce product page: required blocks, photos and video, description, price with CTA, delivery, and reviews — so the buy decision doesn’t stall.",
  lead: [
    "The SKU page is where a visitor decides “I’ll take it” or “I’ll keep looking.” Home and catalog lead people in; the product page needs facts, trust, and a clear next step.",
    "Below: page frame, media requirements, price and button, reviews. How to write description copy is a separate piece; here the focus is the full product page, not copy alone.",
  ],
  faq: [
    {
      q: "How is it different from a product description?",
      a: "Description is a text block. The product page is the whole page: media, price, CTA, delivery, reviews, variants.",
    },
    {
      q: "Is 360° required?",
      a: "Not always. Several angles, zoom, and variant shots matter. 360°/video help expensive and tactile goods.",
    },
    {
      q: "Can you hide the price?",
      a: "In e-com usually no — a hidden price raises bounce. Exceptions: B2B “on request” with a clear reason.",
    },
    {
      q: "Where should Buy sit?",
      a: "Next to price, above the fold on mobile; duplicate it on long pages. One primary button beats five competing ones.",
    },
    {
      q: "Do you need reviews on the page?",
      a: "Yes if they’re real. Fakes hurt. Buyer photos and store replies to negatives help.",
    },
    {
      q: "Does the product page replace category SEO?",
      a: "No. The product page covers a model/SKU; categories capture group demand. You need both layers.",
    },
  ],
  sections: [
    {
      title: "What must be on the page",
      level: 2,
      paras: [
        "Minimum: full name, price, a visible order button, photos, key specs, payment/delivery terms, a way to contact. Plus reviews and stock/shipping time when that drives choice.",
        "UX guides: familiar store patterns, a clear path to buy, enough proof. A template for its own sake with no real data won’t convert.",
      ],
      lists: [
        {
          intro: "Product-page blocks:",
          items: [
            "name and brand",
            "gallery / video",
            "price and CTA",
            "specs and description",
            "variants (color, size)",
            "delivery and payment",
            "reviews",
          ],
        },
      ],
    },
    {
      title: "Photos and video",
      level: 2,
      paras: [
        "Quality and a consistent gallery style are mandatory. Several angles, all colors/configurations, zoom on details. For apparel, furniture, bags — product “in life” (on a model, in a room) answers scale.",
        "Short video (overview, fit, device power-on) closes what a still can’t. Don’t promise “3D always”: honest angles and load speed matter more.",
      ],
      lists: [
        {
          intro: "Media checklist:",
          items: [
            "high resolution without blur",
            "consistent background/light across the catalog",
            "all SKU variants",
            "zoom",
            "usage context where it fits",
          ],
        },
      ],
    },
    {
      title: "Description, price, CTA, reviews",
      level: 2,
      paras: [
        "Copy answers “why this” and removes objections; wording details live in the description article. On the page keep scanability: lead, property list, “why us” block.",
        "Price — high contrast and next to Buy / Add to cart. Nearby — stock, delivery time, warranty. Reviews with context strengthen the decision; template five-stars with no detail do the opposite.",
      ],
      links: [
        {
          label: "Product description",
          href: "/en/blog/opisanie-tovara/",
        },
        {
          label: "Reviews that sell",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Online store homepage",
          href: "/en/blog/glavnaya-internet-magazina/",
        },
      ],
    },
  ],
  closing: [
    "A strong product page is media, clear facts, price with a button, and trust — not a “perfect template.” Close the choice questions on the page; otherwise the buyer leaves for a place where everything is already written.",
  ],
  related: [
    "video-obzor-tovara",
    "opisanie-tovara",
    "glavnaya-internet-magazina",
    "prodazhi-internet-magazin",
    "kategorii-internet-magazina",
    "otzyvy-dlya-prodazh",
  ],
};

/** ES overlay for kartochka-tovara — same structure as RU JSON / EN. */
export const kartochkaTovaraEs: BlogPost = {
  slug: "kartochka-tovara",
  title: "Ficha de producto: estructura, fotos, precio y Comprar",
  date: "2019-06-10",
  category: "E-commerce",
  cover: "/images/blog/kartochka-tovara/cover.webp",
  excerpt:
    "Cómo armar la ficha de producto en ecommerce: bloques obligatorios, fotos y vídeo, descripción, precio con CTA, entrega y reseñas — para que la decisión de compra no se estanque.",
  lead: [
    "La página del SKU es donde el visitante decide «me lo llevo» o «sigo mirando». Home y catálogo traen gente; la ficha necesita hechos, trust y un siguiente paso claro.",
    "Abajo: marco de la página, requisitos de media, precio y botón, reseñas. Cómo escribir el copy de descripción es otra pieza; aquí el foco es la ficha completa, no solo el texto.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de la descripción del producto?",
      a: "La descripción es un bloque de texto. La ficha es toda la página: media, precio, CTA, entrega, reseñas, variantes.",
    },
    {
      q: "¿Es obligatorio el 360°?",
      a: "No siempre. Importan varios ángulos, zoom y fotos de variantes. 360°/vídeo ayudan en bienes caros y táctiles.",
    },
    {
      q: "¿Se puede ocultar el precio?",
      a: "En e-com suele no — un precio oculto sube el rebote. Excepciones: B2B «bajo petición» con un motivo claro.",
    },
    {
      q: "¿Dónde debe ir Comprar?",
      a: "Junto al precio, above the fold en móvil; duplícalo en páginas largas. Un botón primario gana a cinco que compiten.",
    },
    {
      q: "¿Hacen falta reseñas en la página?",
      a: "Sí si son reales. Los fakes hacen daño. Fotos de compradores y respuestas de la tienda a negativos ayudan.",
    },
    {
      q: "¿La ficha sustituye el SEO de categoría?",
      a: "No. La ficha cubre un modelo/SKU; las categorías capturan demanda de grupo. Hacen falta ambas capas.",
    },
  ],
  sections: [
    {
      title: "Qué debe haber en la página",
      level: 2,
      paras: [
        "Mínimo: nombre completo, precio, un botón de pedido visible, fotos, specs clave, condiciones de pago/entrega, una forma de contacto. Más reseñas y stock/plazo de envío cuando eso mueve la elección.",
        "Guías de UX: patrones de tienda familiares, un camino claro a comprar, prueba suficiente. Una plantilla por la plantilla sin datos reales no convierte.",
      ],
      lists: [
        {
          intro: "Bloques de la ficha:",
          items: [
            "nombre y marca",
            "galería / vídeo",
            "precio y CTA",
            "specs y descripción",
            "variantes (color, talla)",
            "entrega y pago",
            "reseñas",
          ],
        },
      ],
    },
    {
      title: "Fotos y vídeo",
      level: 2,
      paras: [
        "Calidad y un estilo de galería coherente son obligatorios. Varios ángulos, todos los colores/configuraciones, zoom en detalles. Para ropa, muebles, bolsos — el producto «en vida» (en modelo, en una habitación) responde a la escala.",
        "Vídeo corto (overview, fit, encendido del dispositivo) cierra lo que un still no puede. No prometas «3D siempre»: ángulos honestos y velocidad de carga importan más.",
      ],
      lists: [
        {
          intro: "Checklist de media:",
          items: [
            "alta resolución sin blur",
            "fondo/luz coherentes en el catálogo",
            "todas las variantes del SKU",
            "zoom",
            "contexto de uso donde encaje",
          ],
        },
      ],
    },
    {
      title: "Descripción, precio, CTA, reseñas",
      level: 2,
      paras: [
        "El copy responde «por qué este» y quita objeciones; el detalle de redacción vive en el artículo de descripción. En la página mantén escaneabilidad: lead, lista de propiedades, bloque «por qué nosotros».",
        "Precio — alto contraste y junto a Comprar / Añadir al carrito. Cerca — stock, plazo de entrega, garantía. Reseñas con contexto refuerzan la decisión; cinco estrellas de plantilla sin detalle hacen lo contrario.",
      ],
      links: [
        {
          label: "Descripción del producto",
          href: "/es/blog/opisanie-tovara/",
        },
        {
          label: "Reseñas que venden",
          href: "/es/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Homepage de la tienda online",
          href: "/es/blog/glavnaya-internet-magazina/",
        },
      ],
    },
  ],
  closing: [
    "Una ficha fuerte es media, hechos claros, precio con botón y trust — no una «plantilla perfecta». Cierra en la página las preguntas de la elección; si no, el comprador se va a un sitio donde ya está todo escrito.",
  ],
  related: [
    "video-obzor-tovara",
    "opisanie-tovara",
    "glavnaya-internet-magazina",
    "prodazhi-internet-magazin",
    "kategorii-internet-magazina",
    "otzyvy-dlya-prodazh",
  ],
};
