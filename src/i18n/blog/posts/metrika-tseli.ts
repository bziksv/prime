import type { BlogPost } from "../../../data/blog";

/** EN overlay for metrika-tseli — same structure as RU JSON. */
export const metrikaTseliEn: BlogPost = {
  slug: "metrika-tseli",
  title: "Goals in Yandex Metrica: types and setup",
  date: "2020-07-15",
  category: "SEO",
  cover: "/images/blog/metrika-tseli/cover-en.webp",
  excerpt:
    "How to set up goals in Yandex Metrica: pageviews, page visits, JavaScript events, and a multi-step goal — with verification and the current reachGoal form.",
  lead: [
    "Goals in Metrica show whether visitors reach the actions that matter: thank-you page, “Buy” click, form submit, session depth. Without goals, ads and SEO reports stay vanity visit counts.",
    "Below: goal types, when to pick which, how to set a URL condition and an event via `reachGoal`, how to build a multi-step funnel, and how to verify firing. Counter install is a separate piece; account UI changes — lean on the meaning of Goals / conditions.",
  ],
  faq: [
    {
      q: "Should I set up the counter first or goals?",
      a: "A working counter on all templates first, then goals. Otherwise you’re configuring into the void.",
    },
    {
      q: "When is a “page visit” goal better than an event?",
      a: "A URL goal is simpler: no code on the button. An event is more precise for clicks, forms, and steps without a URL change.",
    },
    {
      q: "Which reachGoal code is current?",
      a: "Modern form: `ym(XXXXXX,'reachGoal','TARGET_NAME')`, where XXXXXX is the counter ID. Legacy `yaCounter….reachGoal` still appears — better migrate to `ym`.",
    },
    {
      q: "How many steps belong in a multi-step goal?",
      a: "As many meaningful funnel stages as you need (often 2–5). Don’t split every click — you get noise and broken sessions.",
    },
    {
      q: "Why isn’t my goal counting?",
      a: "Wrong URL condition, event not firing, “Don’t count my visits,” blocker, goal not saved, cached old JS.",
    },
    {
      q: "Do I need goals for Yandex Direct?",
      a: "Yes if you optimize and judge campaigns by conversions. Linking counter and ad account follows current Yandex rules.",
    },
    {
      q: "Do goals replace the ecommerce report?",
      a: "No. Ecommerce/purchases are a separate data track. Goals are universal conversions and micro-conversions.",
    },
    {
      q: "Can a store use “pageview count” as a goal?",
      a: "As soft interest — yes. For money, cart, checkout, and leads matter more. Don’t confuse engagement with revenue.",
    },
  ],
  sections: [
    {
      title: "What goal types exist",
      level: 2,
      paras: [
        "The base set: pageview count (session depth), page visit (URL condition), JavaScript event (click/submit/custom), multi-step goal (chain of steps). Pick the type for the action that actually means business.",
        "First state the site goal: lead, purchase, call, signup. Then translate it into a measurable Metrica condition. Configure before scaling ads — otherwise you optimize blind.",
      ],
      lists: [
        {
          intro: "Four practical types:",
          items: [
            "pageviews — engagement",
            "URL — thank-you, cart, contacts",
            "JS event — buttons and forms",
            "multi-step — funnel stages",
          ],
        },
      ],
      links: [
        {
          label: "Installing Yandex Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "“Pageview count” goal",
      level: 2,
      paras: [
        "Counts sessions where the person opened at least N pages. Useful on media, learning series, and brand blogs: is navigation clear, does content stick.",
        "For pure ecommerce it’s a weak money KPI. Use it as an extra quality signal — not the store’s main conversion.",
      ],
      lists: [
        {
          intro: "When it fits:",
          items: [
            "content portal",
            "course of article series",
            "B2B warm-up blog",
            "checking “do they read past the homepage”",
          ],
        },
      ],
      notes: [
        {
          title: "Setup (step meaning)",
          kind: "tip",
          text: "Settings → Goals → Add → name and pageview threshold → save. UI labels may differ slightly.",
        },
      ],
    },
    {
      title: "“Page visit” goal",
      level: 2,
      paras: [
        "Fires when the visit URL matches a condition: exact match, “starts with,” “contains,” or a regular expression. Classics — `/thanks/`, `/cart/`, `/order/success/`, shipping page.",
        "You see whether people reach the key URL, whether internal links work, and conversion of paths to checkout. For groups of cards, “starts with” / “contains” help — but don’t make the condition too broad or you get noise.",
      ],
      lists: [
        {
          intro: "URL conditions:",
          items: [
            "equals — one exact address",
            "starts with — catalog/checkout branch",
            "contains — shared fragment in pretty URLs",
            "regexp — complex masks (watch for mistakes)",
          ],
        },
      ],
      tables: [
        {
          caption: "URL goal examples",
          headers: ["Job", "Condition", "Example"],
          rows: [
            ["Thank-you", "equals / contains", "/order/success/"],
            ["Cart", "contains", "/cart"],
            ["Category", "starts with", "/catalog/pumps/"],
            ["Contacts", "equals", "/contacts/"],
          ],
        },
      ],
    },
    {
      title: "JavaScript event and reachGoal",
      level: 2,
      paras: [
        "You need an event when the URL doesn’t change: “Buy” click, form submit, popup open, “show phone.” In the account create a JavaScript goal and set an identifier (Latin letters, digits, `_`).",
        "On the site call goal completion. Current call: `ym(12345678, 'reachGoal', 'ORDER_CLICK');` — plug in your counter ID and identifier. For forms, fire on successful submit/callback — not on every field focus.",
      ],
      lists: [
        {
          intro: "Typical events:",
          items: [
            "CTA click “Order” / “Add to cart”",
            "successful form submit",
            "chat start / phone reveal",
            "configuration pick",
            "share (if it matters for KPIs)",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Identifier in the account and in code differ by case/typo — the goal stays silent. Match them one-to-one.",
        },
      ],
    },
    {
      title: "Multi-step goal and funnel",
      level: 2,
      paras: [
        "A multi-step goal is a chain of steps (URL and/or events). It shows where people drop: catalog → product → cart → checkout. Steps must be required and in a logical order.",
        "Mind session timeout: a long idle can break the chain. Don’t assemble ten micro-steps “just in case” — keep stages you actually decide on.",
      ],
      lists: [
        {
          intro: "Sample ecommerce funnel:",
          items: [
            "category view",
            "product card",
            "cart",
            "checkout start",
            "successful order (URL or event)",
          ],
        },
      ],
    },
    {
      title: "Verification and common failures",
      level: 2,
      paras: [
        "After saving wait a couple of minutes, turn off “Don’t count my visits” for the test, walk the scenario yourself, and check the goals report. For events open the console: any JS errors, does `ym` fire.",
        "If there’s no data — also see “Metrica isn’t working”: blockers, cache, counter missing on some templates, wrong ID. Online chats and widgets send their own events — match current names in the widget docs; don’t copy outdated lists blindly.",
      ],
      lists: [
        {
          intro: "Verification checklist:",
          items: [
            "goal saved in the account",
            "URL condition matches the live address",
            "reachGoal with the right id and counter number",
            "test visit not filtered out",
            "no console errors on click/submit",
          ],
        },
      ],
      links: [
        {
          label: "Metrica isn’t working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
        {
          label: "Inserting JavaScript",
          href: "/en/blog/vstavka-javascript/",
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Keep a table: goal name → type → where in code/URL → who owns edits.",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "metrika-ne-rabotaet",
    "google-analytics",
    "dashboard",
    "forma-obratnoy-svyazi",
    "vstavka-javascript",
  ],
};

/** ES overlay for metrika-tseli — same structure as RU JSON / EN. */
export const metrikaTseliEs: BlogPost = {
  slug: "metrika-tseli",
  title: "Goals en Yandex Metrica: tipos y configuración",
  date: "2020-07-15",
  category: "SEO",
  cover: "/images/blog/metrika-tseli/cover-es.webp",
  excerpt:
    "Cómo configurar goals en Yandex Metrica: pageviews, visita a página, eventos JavaScript y un goal multi-paso — con verificación y la forma actual de reachGoal.",
  lead: [
    "Los goals en Metrica muestran si los visitantes llegan a las acciones que importan: página de gracias, clic «Comprar», envío de formulario, profundidad de sesión. Sin goals, los informes de ads y SEO se quedan en conteos vanidosos de visitas.",
    "Abajo: tipos de goal, cuándo elegir cuál, cómo fijar una condición de URL y un evento vía `reachGoal`, cómo armar un funnel multi-paso y cómo verificar el disparo. La instalación del contador es otra pieza; la UI de la cuenta cambia — apóyate en el significado de Goals / condiciones.",
  ],
  faq: [
    {
      q: "¿Primero el contador o los goals?",
      a: "Primero un contador que funcione en todas las plantillas, luego goals. Si no, configuras al vacío.",
    },
    {
      q: "¿Cuándo es mejor un goal de «visita a página» que un evento?",
      a: "Un goal de URL es más simple: sin código en el botón. Un evento es más preciso para clics, formularios y pasos sin cambio de URL.",
    },
    {
      q: "¿Qué código reachGoal es el actual?",
      a: "Forma moderna: `ym(XXXXXX,'reachGoal','TARGET_NAME')`, donde XXXXXX es el ID del contador. El legado `yaCounter….reachGoal` aún aparece — mejor migrar a `ym`.",
    },
    {
      q: "¿Cuántos pasos van en un goal multi-paso?",
      a: "Tantos stages con sentido del funnel como necesites (a menudo 2–5). No partas cada clic — obtienes ruido y sesiones rotas.",
    },
    {
      q: "¿Por qué no cuenta mi goal?",
      a: "Condición de URL incorrecta, evento que no dispara, «No contar mis visitas», bloqueador, goal no guardado, JS viejo en caché.",
    },
    {
      q: "¿Hacen falta goals para Yandex Direct?",
      a: "Sí si optimizas y juzgas campañas por conversiones. Enlazar contador y cuenta de ads sigue las reglas actuales de Yandex.",
    },
    {
      q: "¿Los goals sustituyen el informe de ecommerce?",
      a: "No. Ecommerce/compras son una pista de datos aparte. Los goals son conversiones universales y microconversiones.",
    },
    {
      q: "¿Puede una tienda usar «conteo de pageviews» como goal?",
      a: "Como interés suave — sí. Para dinero importan más carrito, checkout y leads. No confundas engagement con revenue.",
    },
  ],
  sections: [
    {
      title: "Qué tipos de goal existen",
      level: 2,
      paras: [
        "El set base: conteo de pageviews (profundidad de sesión), visita a página (condición de URL), evento JavaScript (clic/envío/custom), goal multi-paso (cadena de pasos). Elige el tipo para la acción que de verdad significa negocio.",
        "Primero formula el goal del sitio: lead, compra, llamada, alta. Luego tradúcelo a una condición medible de Metrica. Configura antes de escalar ads — si no, optimizas a ciegas.",
      ],
      lists: [
        {
          intro: "Cuatro tipos prácticos:",
          items: [
            "pageviews — engagement",
            "URL — gracias, carrito, contactos",
            "evento JS — botones y formularios",
            "multi-paso — stages del funnel",
          ],
        },
      ],
      links: [
        {
          label: "Instalar Yandex Metrica",
          href: "/es/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Goal «conteo de pageviews»",
      level: 2,
      paras: [
        "Cuenta sesiones donde la persona abrió al menos N páginas. Útil en media, series de aprendizaje y blogs de marca: ¿la navegación es clara, se queda el contenido?",
        "Para ecommerce puro es un KPI de dinero flojo. Úsalo como señal extra de calidad — no como conversión principal de la tienda.",
      ],
      lists: [
        {
          intro: "Cuándo encaja:",
          items: [
            "portal de contenido",
            "curso de series de artículos",
            "blog B2B de calentamiento",
            "comprobar «¿leen más allá de la homepage?»",
          ],
        },
      ],
      notes: [
        {
          title: "Setup (sentido del paso)",
          kind: "tip",
          text: "Settings → Goals → Add → nombre y umbral de pageviews → guardar. Las etiquetas de la UI pueden diferir un poco.",
        },
      ],
    },
    {
      title: "Goal «visita a página»",
      level: 2,
      paras: [
        "Dispara cuando la URL de la visita cumple una condición: coincidencia exacta, «empieza por», «contiene» o una expresión regular. Clásicos — `/thanks/`, `/cart/`, `/order/success/`, página de envío.",
        "Ves si la gente llega a la URL clave, si funcionan los enlaces internos y la conversión de caminos al checkout. Para grupos de fichas ayudan «empieza por» / «contiene» — pero no hagas la condición demasiado ancha o metes ruido.",
      ],
      lists: [
        {
          intro: "Condiciones de URL:",
          items: [
            "equals — una dirección exacta",
            "starts with — rama de catálogo/checkout",
            "contains — fragmento compartido en URLs bonitas",
            "regexp — máscaras complejas (cuidado con errores)",
          ],
        },
      ],
      tables: [
        {
          caption: "Ejemplos de goal de URL",
          headers: ["Trabajo", "Condición", "Ejemplo"],
          rows: [
            ["Gracias", "equals / contains", "/order/success/"],
            ["Carrito", "contains", "/cart"],
            ["Categoría", "starts with", "/catalog/pumps/"],
            ["Contactos", "equals", "/contacts/"],
          ],
        },
      ],
    },
    {
      title: "Evento JavaScript y reachGoal",
      level: 2,
      paras: [
        "Necesitas un evento cuando la URL no cambia: clic «Comprar», envío de formulario, abrir popup, «mostrar teléfono». En la cuenta crea un goal JavaScript y fija un identificador (letras latinas, dígitos, `_`).",
        "En el sitio llama la finalización del goal. Llamada actual: `ym(12345678, 'reachGoal', 'ORDER_CLICK');` — mete tu ID de contador e identificador. En formularios, dispara al envío/callback exitoso — no en cada focus de campo.",
      ],
      lists: [
        {
          intro: "Eventos típicos:",
          items: [
            "clic CTA «Pedir» / «Añadir al carrito»",
            "envío exitoso del formulario",
            "inicio de chat / revelar teléfono",
            "elección de configuración",
            "share (si importa para los KPIs)",
          ],
        },
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "tip",
          text: "El identificador en la cuenta y en el código difieren por mayúsculas/typo — el goal se queda en silencio. Hazlos coincidir uno a uno.",
        },
      ],
    },
    {
      title: "Goal multi-paso y funnel",
      level: 2,
      paras: [
        "Un goal multi-paso es una cadena de pasos (URL y/o eventos). Muestra dónde cae la gente: catálogo → producto → carrito → checkout. Los pasos deben ser obligatorios y en orden lógico.",
        "Cuida el timeout de sesión: un idle largo puede romper la cadena. No armes diez micro-pasos «por si acaso» — quédate con stages sobre los que de verdad decides.",
      ],
      lists: [
        {
          intro: "Funnel ecommerce de muestra:",
          items: [
            "vista de categoría",
            "ficha de producto",
            "carrito",
            "inicio de checkout",
            "pedido exitoso (URL o evento)",
          ],
        },
      ],
    },
    {
      title: "Verificación y fallos habituales",
      level: 2,
      paras: [
        "Tras guardar espera un par de minutos, apaga «No contar mis visitas» para el test, recorre el escenario tú mismo y mira el informe de goals. Para eventos abre la consola: ¿errores de JS, dispara `ym`?",
        "Si no hay datos — mira también «Metrica no funciona»: bloqueadores, caché, contador ausente en algunas plantillas, ID incorrecto. Chats online y widgets envían sus propios eventos — empareja nombres actuales en la docs del widget; no copies listas obsoletas a ciegas.",
      ],
      lists: [
        {
          intro: "Checklist de verificación:",
          items: [
            "goal guardado en la cuenta",
            "la condición de URL coincide con la dirección en vivo",
            "reachGoal con el id y número de contador correctos",
            "visita de test no filtrada",
            "sin errores de consola al clic/envío",
          ],
        },
      ],
      links: [
        {
          label: "Metrica no funciona",
          href: "/es/blog/metrika-ne-rabotaet/",
        },
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
        {
          label: "Insertar JavaScript",
          href: "/es/blog/vstavka-javascript/",
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Mantén una tabla: nombre del goal → tipo → dónde en código/URL → quién posee los edits.",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "metrika-ne-rabotaet",
    "google-analytics",
    "dashboard",
    "forma-obratnoy-svyazi",
    "vstavka-javascript",
  ],
};
