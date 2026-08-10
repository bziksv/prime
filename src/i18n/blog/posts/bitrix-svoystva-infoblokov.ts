import type { BlogPost } from "../../../data/blog";

/** EN overlay for bitrix-svoystva-infoblokov — same structure as RU JSON. */
export const bitrixSvoystvaInfoblokovEn: BlogPost = {
  slug: "bitrix-svoystva-infoblokov",
  title: "Outputting infoblock properties in 1C-Bitrix",
  date: "2017-12-12",
  category: "Websites",
  cover: "/images/blog/bitrix-svoystva-infoblokov/cover-en.webp",
  excerpt:
    "How to show an infoblock element’s properties in a Bitrix component template: DISPLAY_PROPERTIES, string/list/file/link types — without blindly pasting outdated snippets.",
  lead: [
    "Infoblock properties (SKU, file, list, element link) live in the admin; on the site you output them in the component template — most often in the result’s `template.php`.",
    "Below: how the `$arResult` array and display keys work. Exact syntax and API depend on Bitrix version and component type — check official docs and don’t copy 2017 snippets without testing on your project. You need basic PHP and HTML.",
  ],
  faq: [
    {
      q: "Where do you edit property output?",
      a: "Usually in the needed component template (often `template.php` under `bitrix/templates/...` or the site template). Prefer a component template copy, not core edits.",
    },
    {
      q: "What is DISPLAY_PROPERTIES?",
      a: "An array of element properties prepared for display: name, value(s), type. Handy for card/list output.",
    },
    {
      q: "Why is the property empty on the site?",
      a: "Not marked for detail/list, wrong property code, cache, wrong component template, or the property isn’t filled on the element.",
    },
    {
      q: "How is this different from the public-section bar?",
      a: "The bar edits content visually. This piece covers the template and property output code by a developer.",
    },
    {
      q: "Can you output properties without PHP?",
      a: "Some properties show via built-in component parameters. Complex formats still need a template or custom code.",
    },
  ],
  sections: [
    {
      title: "How output works",
      level: 2,
      paras: [
        "The infoblock component builds the element into `$arResult`. Properties for display often live in `$arResult['DISPLAY_PROPERTIES']['PROPERTY_CODE']`. An entry has a name and `DISPLAY_VALUE` (a prepared value or array of values).",
        "You set the property code (called `ATTRIBUTE` in old notes) in the infoblock admin. In the template use your code — not someone else’s from an example.",
      ],
      lists: [
        {
          intro: "Before editing the template:",
          items: [
            "property created and filled on the element",
            "display enabled for list/detail if the component requires it",
            "you work in a component template copy",
            "clear cache after edits",
          ],
        },
      ],
      links: [
        {
          label: "Bitrix public section",
          href: "/en/blog/bitrix-publichnyy-razdel/",
        },
        {
          label: "SEO in 1C-Bitrix",
          href: "/en/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "Property types — different output",
      level: 2,
      paras: [
        "String and number often print as one `DISPLAY_VALUE`. A list can be single or multiple — then the value is an array you loop. A file is a download/view link. Element links need extra fetches of related element fields.",
        "Don’t mix raw `PROPERTIES` and `DISPLAY_PROPERTIES` without understanding: the first is closer to DB data, the second to ready display.",
      ],
      tables: [
        {
          caption: "Type → what to watch",
          headers: ["Property type", "In practice"],
          rows: [
            ["String / number", "One value in DISPLAY_VALUE"],
            ["List", "One value or an array"],
            ["File", "Link / path to the file"],
            ["Element link", "IDs/data of related elements"],
            ["HTML/text", "Escaping and allowed tags"],
          ],
        },
      ],
      notes: [
        {
          title: "Output security",
          kind: "tip",
          text: "Don’t print user input without escaping. For HTML properties use the Bitrix filters accepted on the project — not a bare echo.",
        },
      ],
    },
    {
      title: "Practice in the template",
      level: 2,
      paras: [
        "Typical frame: check the property key exists in `DISPLAY_PROPERTIES`, print the name if needed, then the value. For multiples — `foreach`. For a file — build a link from property data.",
        "Comment and view counters are separate fields/modules, not always an “infoblock property.” Wire them only if the project actually uses those mechanisms.",
      ],
      lists: [
        {
          intro: "“Not showing” debug checklist:",
          items: [
            "property code matches the admin",
            "element is filled",
            "correct template.php of the component on the page",
            "cache cleared",
            "edit/debug mode shows the right area",
          ],
        },
      ],
    },
    {
      title: "What to avoid",
      level: 2,
      paras: [
        "Don’t edit files in `bitrix/modules` and don’t paste long code walls from 2015–2017 forums without understanding the version. After a core update those edits break.",
        "Don’t dump 200 lines of business logic into the template — move it to result_modifier.php or a service layer if the project allows.",
      ],
    },
    {
      title: "Link to content and SEO",
      level: 2,
      paras: [
        "Properties are handy for product specs, price-list files, badges. For SEO it matters more that needed fields land in visible HTML and meta templates — see the Bitrix SEO article.",
        "An empty property “storefront” on the card is worse for users than a careful set of filled attributes.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Property output = component template + property code + value type. `DISPLAY_PROPERTIES` is the main display compass.",
        "Check current Bitrix API; the public bar edits content but doesn’t replace template work.",
      ],
    },
  ],
  closing: [
    "Open a component template copy, find `DISPLAY_PROPERTIES` for the property code, and print the value by type — so infoblock attributes appear on the site predictably, not by “magic” from an outdated snippet.",
  ],
  related: [
    "bitrix-publichnyy-razdel",
    "seo-bitrix",
    "cms-internet-magazina",
    "adminka-sayta",
    "uznat-cms",
    "veb-server",
  ],
};

/** ES overlay for bitrix-svoystva-infoblokov — same structure as RU JSON / EN. */
export const bitrixSvoystvaInfoblokovEs: BlogPost = {
  slug: "bitrix-svoystva-infoblokov",
  title: "Mostrar propiedades de infoblock en 1C-Bitrix",
  date: "2017-12-12",
  category: "Websites",
  cover: "/images/blog/bitrix-svoystva-infoblokov/cover-es.webp",
  excerpt:
    "Cómo mostrar las propiedades de un elemento de infoblock en una plantilla de componente Bitrix: DISPLAY_PROPERTIES, tipos string/list/file/link — sin pegar a ciegas snippets obsoletos.",
  lead: [
    "Las propiedades de infoblock (SKU, archivo, lista, enlace a elemento) viven en el admin; en el sitio las muestras en la plantilla del componente — casi siempre en el `template.php` del result.",
    "Abajo: cómo funcionan el array `$arResult` y las claves de display. La sintaxis exacta y la API dependen de la versión de Bitrix y del tipo de componente — mira docs oficiales y no copies snippets de 2017 sin probarlos en tu proyecto. Hace falta PHP y HTML básicos.",
  ],
  faq: [
    {
      q: "¿Dónde se edita la salida de propiedades?",
      a: "Suele ser en la plantilla del componente necesario (a menudo `template.php` bajo `bitrix/templates/...` o la plantilla del sitio). Prefiere una copia de plantilla del componente, no ediciones al core.",
    },
    {
      q: "¿Qué es DISPLAY_PROPERTIES?",
      a: "Un array de propiedades del elemento preparadas para display: nombre, valor(es), tipo. Útil para salida en ficha/lista.",
    },
    {
      q: "¿Por qué la propiedad está vacía en el sitio?",
      a: "No marcada para detail/list, código de propiedad incorrecto, caché, plantilla de componente equivocada, o la propiedad no está rellena en el elemento.",
    },
    {
      q: "¿En qué se diferencia de la barra de sección pública?",
      a: "La barra edita contenido visualmente. Esta pieza cubre la plantilla y el código de salida de propiedades por un desarrollador.",
    },
    {
      q: "¿Se pueden mostrar propiedades sin PHP?",
      a: "Algunas propiedades se muestran vía parámetros integrados del componente. Los formatos complejos siguen necesitando plantilla o código custom.",
    },
  ],
  sections: [
    {
      title: "Cómo funciona la salida",
      level: 2,
      paras: [
        "El componente de infoblock arma el elemento en `$arResult`. Las propiedades para display suelen vivir en `$arResult['DISPLAY_PROPERTIES']['PROPERTY_CODE']`. Una entrada tiene nombre y `DISPLAY_VALUE` (un valor preparado o un array de valores).",
        "El código de propiedad (llamado `ATTRIBUTE` en notas viejas) se fija en el admin del infoblock. En la plantilla usa tu código — no el de otro en un ejemplo.",
      ],
      lists: [
        {
          intro: "Antes de editar la plantilla:",
          items: [
            "propiedad creada y rellena en el elemento",
            "display activado para list/detail si el componente lo exige",
            "trabajas en una copia de plantilla del componente",
            "limpia caché tras las ediciones",
          ],
        },
      ],
      links: [
        {
          label: "Sección pública de Bitrix",
          href: "/es/blog/bitrix-publichnyy-razdel/",
        },
        {
          label: "SEO en 1C-Bitrix",
          href: "/es/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "Tipos de propiedad — salida distinta",
      level: 2,
      paras: [
        "String y number a menudo se imprimen como un solo `DISPLAY_VALUE`. Una lista puede ser simple o múltiple — entonces el valor es un array que recorres. Un archivo es un enlace de descarga/vista. Los enlaces a elementos necesitan fetches extra de campos del elemento relacionado.",
        "No mezcles `PROPERTIES` crudo y `DISPLAY_PROPERTIES` sin entender: el primero está más cerca de los datos de BD, el segundo del display listo.",
      ],
      tables: [
        {
          caption: "Tipo → qué mirar",
          headers: ["Tipo de propiedad", "En la práctica"],
          rows: [
            ["String / number", "Un valor en DISPLAY_VALUE"],
            ["List", "Un valor o un array"],
            ["File", "Enlace / ruta al archivo"],
            ["Element link", "IDs/datos de elementos relacionados"],
            ["HTML/text", "Escapado y tags permitidos"],
          ],
        },
      ],
      notes: [
        {
          title: "Seguridad de la salida",
          kind: "tip",
          text: "No imprimas input de usuario sin escapar. Para propiedades HTML usa los filtros de Bitrix aceptados en el proyecto — no un echo pelado.",
        },
      ],
    },
    {
      title: "Práctica en la plantilla",
      level: 2,
      paras: [
        "Marco típico: comprueba que la clave de propiedad exista en `DISPLAY_PROPERTIES`, imprime el nombre si hace falta, luego el valor. Para múltiples — `foreach`. Para un archivo — arma un enlace desde los datos de la propiedad.",
        "Contadores de comentarios y vistas son campos/módulos aparte, no siempre una «propiedad de infoblock». Conéctalos solo si el proyecto usa de verdad esos mecanismos.",
      ],
      lists: [
        {
          intro: "Checklist de debug «no se muestra»:",
          items: [
            "el código de propiedad coincide con el admin",
            "el elemento está relleno",
            "el template.php correcto del componente en la página",
            "caché limpia",
            "el modo edición/debug muestra el área correcta",
          ],
        },
      ],
    },
    {
      title: "Qué evitar",
      level: 2,
      paras: [
        "No edites archivos en `bitrix/modules` y no pegues muros largos de código de foros de 2015–2017 sin entender la versión. Tras una actualización del core esas ediciones se rompen.",
        "No vuelques 200 líneas de lógica de negocio en la plantilla — muévelas a result_modifier.php o a una capa de servicio si el proyecto lo permite.",
      ],
    },
    {
      title: "Enlace con contenido y SEO",
      level: 2,
      paras: [
        "Las propiedades son útiles para specs de producto, archivos de lista de precios, badges. Para SEO importa más que los campos necesarios lleguen al HTML visible y a las plantillas meta — ver el artículo SEO de Bitrix.",
        "Un «escaparate» de propiedades vacías en la ficha es peor para los usuarios que un set cuidadoso de atributos rellenos.",
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Salida de propiedades = plantilla del componente + código de propiedad + tipo de valor. `DISPLAY_PROPERTIES` es la brújula principal de display.",
        "Revisa la API actual de Bitrix; la barra pública edita contenido pero no sustituye el trabajo de plantilla.",
      ],
    },
  ],
  closing: [
    "Abre una copia de plantilla del componente, encuentra `DISPLAY_PROPERTIES` para el código de propiedad e imprime el valor según el tipo — así los atributos del infoblock aparecen en el sitio de forma predecible, no por «magia» de un snippet obsoleto.",
  ],
  related: [
    "bitrix-publichnyy-razdel",
    "seo-bitrix",
    "cms-internet-magazina",
    "adminka-sayta",
    "uznat-cms",
    "veb-server",
  ],
};
