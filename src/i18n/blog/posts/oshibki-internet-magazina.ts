import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibki-internet-magazina — same structure as RU JSON. */
export const oshibkiInternetMagazinaEn: BlogPost = {
  slug: "oshibki-internet-magazina",
  title: "7 ecommerce optimization mistakes auditors often miss",
  date: "2019-05-16",
  category: "E-commerce",
  cover: "/images/blog/oshibki-internet-magazina/cover-en.webp",
  excerpt:
    "Hidden ecommerce mistakes: duplicates on pagination and filters, a messy catalog, a useless price slider, weak photos, a region pop-up, extra modals, and illogical filters.",
  lead: [
    "SEO audit checklists catch speed, 404s, and robots. Stores often lose sales and index on things that “technically work”: broken category sort, a price slider from zero to infinity, a region gate before content, and three pop-ups in a row.",
    "Here are seven of those misses — what they break and how to fix them. The broader catalog promotion outline is in a related article; this piece is what automatic reports usually skip.",
  ],
  faq: [
    {
      q: "Is this instead of technical SEO?",
      a: "No. Tech and keywords stay the base. These mistakes sit on top: catalog UX and templates that spoil behavior and spawn weak URLs.",
    },
    {
      q: "Are duplicates only from copy-pasted product cards?",
      a: "Often also from pagination (category text on every page), filters with the same description, and template brand blurbs across dozens of SKUs.",
    },
    {
      q: "Do you need a region picker right on entry?",
      a: "Only if region really changes price, stock, pickup points, or delivery. Otherwise don’t block the first screen.",
    },
    {
      q: "How many pop-ups are okay?",
      a: "The fewer before the first useful action, the better. A stack of region + subscribe + coupon on entry almost always hits bounce.",
    },
    {
      q: "Should filters always stay out of the index?",
      a: "Depends on the combo’s value. Junk and near-empty slices — noindex/canonical; useful landings — plan separately.",
    },
    {
      q: "When should you expect growth after fixes?",
      a: "UX fixes move behavior sooner. Rankings for the keyword set are planned over 2–6 months after a stable index — not “a week after you fixed the slider.”",
    },
  ],
  sections: [
    {
      title: "Duplicates and catalog mess",
      level: 2,
      paras: [
        "Duplicate content in a store often comes from the CMS: the same category SEO text on every pagination page; filter descriptions copied onto every slice; same-brand cards cloning manufacturer specs.",
        "Second classic — a catch-all category. In “quadcopters,” page one shows screws and batteries because price sort pushes cheap consumables up. Relevance and trust drop: people look for aircraft and see spare parts.",
      ],
      lists: [
        {
          intro: "What to check:",
          items: [
            "unique text only on the canonical category page (not page=2…n)",
            "filters don’t clone one paragraph onto hundreds of URLs",
            "the category first screen shows products from the section name",
            "accessories and consumables in their own sections — not mixed with core SKUs",
          ],
        },
      ],
      links: [
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Online store categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Filters, photos, and the first screen",
      level: 2,
      paras: [
        "A price slider with one “cosmic” maximum is useless: sliding halfway cuts almost nothing. Better stepped ranges (“up to…”, “from… to…”) and moving outlier expensive SKUs into a premium slice.",
        "Bad photos (scans, blur, one angle) kill commerce harder than an imperfect title: you can’t tell the model, so people leave for a competitor’s image search. You need clarity, several angles, a sane format, and meaningful alt text.",
        "A region pop-up and a queue of modals break first contact. Ask for city when price, delivery, or offline points depend on it — and let people close without a quest. Fewer modals before product choice.",
      ],
      lists: [
        {
          intro: "Checkbox filters that hurt:",
          items: [
            "illogical parameter combos",
            "slices that are almost always empty",
            "indexing junk combinations as duplicates",
          ],
        },
      ],
      notes: [
        {
          title: "Quick self-test",
          text: "Walk “found category → filtered → opened a card” on mobile as a new customer. Everything you stumble on kills conversion for everyone else.",
        },
      ],
      links: [
        {
          label: "Product page",
          href: "/en/blog/kartochka-tovara/",
        },
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "How to prioritize fixes",
      level: 2,
      paras: [
        "Benchmark top competitors on catalog structure and filters — borrow the useful meaning, not the layout. Find the worst niche examples and remove the same patterns at home.",
        "Then measure: bounce and depth on categories before/after, share of empty filters, time to first product on mobile. Keyword rankings grow separately, planned over months after a stable base.",
      ],
    },
  ],
  closing: [
    "These seven mistakes rarely light up red in an automatic audit — but they hit behavior and the index. Fix catalog, filters, photos, and the first screen — then return to keywords and links.",
  ],
  related: [
    "prodvizhenie-internet-magazina",
    "kategorii-internet-magazina",
    "kartochka-tovara",
    "paginatsiya",
    "glavnaya-internet-magazina",
    "seo-oshibki",
  ],
};

/** ES overlay for oshibki-internet-magazina — same structure as RU JSON / EN. */
export const oshibkiInternetMagazinaEs: BlogPost = {
  slug: "oshibki-internet-magazina",
  title: "7 errores de optimización ecommerce que las auditorías suelen pasar por alto",
  date: "2019-05-16",
  category: "E-commerce",
  cover: "/images/blog/oshibki-internet-magazina/cover.webp",
  excerpt:
    "Errores ocultos de ecommerce: duplicados en paginación y filtros, un catálogo caótico, un slider de precio inútil, fotos débiles, un pop-up de región, modales extra y filtros ilógicos.",
  lead: [
    "Los checklists de auditoría SEO pillan velocidad, 404s y robots. Las tiendas a menudo pierden ventas e índice en cosas que «técnicamente funcionan»: sort de categoría roto, un slider de precio de cero a infinito, un gate de región antes del contenido y tres pop-ups seguidos.",
    "Aquí van siete de esos misses — qué rompen y cómo arreglarlos. El outline más amplio de promoción del catálogo está en un artículo relacionado; esta pieza es lo que los informes automáticos suelen saltarse.",
  ],
  faq: [
    {
      q: "¿Esto sustituye el SEO técnico?",
      a: "No. Tech y keywords siguen siendo la base. Estos errores van encima: UX del catálogo y plantillas que estropean el comportamiento y generan URLs débiles.",
    },
    {
      q: "¿Los duplicados solo vienen de fichas copy-paste?",
      a: "A menudo también de paginación (texto de categoría en cada página), filtros con la misma descripción y blurbs de marca de plantilla en decenas de SKUs.",
    },
    {
      q: "¿Hace falta un selector de región justo al entrar?",
      a: "Solo si la región cambia de verdad precio, stock, puntos de pickup o entrega. Si no, no bloquees la primera pantalla.",
    },
    {
      q: "¿Cuántos pop-ups están bien?",
      a: "Cuantos menos antes de la primera acción útil, mejor. Una pila de región + suscribirse + cupón al entrar casi siempre pega al rebote.",
    },
    {
      q: "¿Los filtros deben quedarse siempre fuera del índice?",
      a: "Depende del valor del combo. Slices basura y casi vacíos — noindex/canonical; landings útiles — planea aparte.",
    },
    {
      q: "¿Cuándo esperar crecimiento tras los fixes?",
      a: "Los fixes de UX mueven el comportamiento antes. Los rankings del conjunto de keywords se planean a 2–6 meses tras un índice estable — no «una semana después de arreglar el slider».",
    },
  ],
  sections: [
    {
      title: "Duplicados y caos del catálogo",
      level: 2,
      paras: [
        "El contenido duplicado en una tienda a menudo viene del CMS: el mismo texto SEO de categoría en cada página de paginación; descripciones de filtro copiadas en cada slice; fichas de la misma marca clonando specs del fabricante.",
        "Segundo clásico — una categoría cajón de sastre. En «cuadricópteros», la página uno muestra tornillos y baterías porque el sort por precio empuja consumibles baratos arriba. Relevancia y trust caen: la gente busca aeronaves y ve recambios.",
      ],
      lists: [
        {
          intro: "Qué revisar:",
          items: [
            "texto único solo en la página canónica de categoría (no page=2…n)",
            "los filtros no clonan un párrafo en cientos de URLs",
            "la primera pantalla de la categoría muestra productos del nombre de la sección",
            "accesorios y consumibles en sus propias secciones — no mezclados con SKUs core",
          ],
        },
      ],
      links: [
        {
          label: "Promoción de tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Categorías de tienda online",
          href: "/es/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Filtros, fotos y la primera pantalla",
      level: 2,
      paras: [
        "Un slider de precio con un máximo «cósmico» es inútil: deslizar a mitad casi no corta nada. Mejor rangos escalonados («hasta…», «de… a…») y mover SKUs caros outliers a un slice premium.",
        "Fotos malas (escaneos, blur, un solo ángulo) matan el comercio más que un title imperfecto: no se distingue el modelo, así que la gente se va a la búsqueda de imágenes del competidor. Hacen falta claridad, varios ángulos, un formato sensato y alt con sentido.",
        "Un pop-up de región y una cola de modales rompen el primer contacto. Pide ciudad cuando precio, entrega o puntos offline dependan de ello — y deja cerrar sin un quest. Menos modales antes de elegir producto.",
      ],
      lists: [
        {
          intro: "Filtros checkbox que hacen daño:",
          items: [
            "combos de parámetros ilógicos",
            "slices casi siempre vacíos",
            "indexar combinaciones basura como duplicados",
          ],
        },
      ],
      notes: [
        {
          title: "Autotest rápido",
          text: "Recorre «encontré categoría → filtré → abrí una ficha» en móvil como cliente nuevo. Todo en lo que tropieces mata la conversión para los demás.",
        },
      ],
      links: [
        {
          label: "Ficha de producto",
          href: "/es/blog/kartochka-tovara/",
        },
        {
          label: "Paginación",
          href: "/es/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "Cómo priorizar los fixes",
      level: 2,
      paras: [
        "Haz benchmark de competidores líderes en estructura de catálogo y filtros — toma el sentido útil, no el layout. Halla los peores ejemplos del nicho y quita los mismos patrones en casa.",
        "Luego mide: rebote y profundidad en categorías antes/después, cuota de filtros vacíos, tiempo hasta el primer producto en móvil. Los rankings de keywords crecen aparte, planificados en meses tras una base estable.",
      ],
    },
  ],
  closing: [
    "Estos siete errores rara vez se encienden en rojo en una auditoría automática — pero pegan al comportamiento y al índice. Arregla catálogo, filtros, fotos y la primera pantalla — luego vuelve a keywords y enlaces.",
  ],
  related: [
    "prodvizhenie-internet-magazina",
    "kategorii-internet-magazina",
    "kartochka-tovara",
    "paginatsiya",
    "glavnaya-internet-magazina",
    "seo-oshibki",
  ],
};
