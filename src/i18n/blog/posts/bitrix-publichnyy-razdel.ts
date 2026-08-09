import type { BlogPost } from "../../../data/blog";

/** EN overlay for bitrix-publichnyy-razdel — same structure as RU JSON. */
export const bitrixPublichnyyRazdelEn: BlogPost = {
  slug: "bitrix-publichnyy-razdel",
  title: "1C-Bitrix public section: toolbar and edit mode",
  date: "2017-12-13",
  category: "Websites",
  cover: "/images/blog/bitrix-publichnyy-razdel/cover-en.webp",
  excerpt:
    "How the Bitrix public-area control bar works: buttons, edit mode, include areas, and components — without clinging to old-edition screenshots or a meta keywords cult.",
  lead: [
    "In 1C-Bitrix, after signing in, a public-section bar often appears above the page: create a page, edit the menu, clear cache, open SEO properties, enable edit mode.",
    "Below: what the main controls mean and how to edit content on the site without wandering through the admin. The button set depends on rights and edition; item names changed — follow current Bitrix docs, not 2017 screenshots.",
  ],
  faq: [
    {
      q: "Why is there no public-section bar after login?",
      a: "No rights to the public bar, a different site/domain, or display mode. Ask an administrator for a role.",
    },
    {
      q: "How does the public section differ from Administration?",
      a: "Public — edit with a visitor’s eyes. Administration — full backend: infoblocks, modules, users, settings.",
    },
    {
      q: "Is public-section edit mode dangerous?",
      a: "On production be careful: a mistaken save hits the live site. For important edits use rights, drafts/workflow, and backups per company rules.",
    },
    {
      q: "Does the SEO button replace real promotion?",
      a: "No. It’s title/description fields and hints. Don’t use keywords as a factor. Rankings are separate work.",
    },
    {
      q: "Is this related to the Bitrix SEO article?",
      a: "Yes, adjacent: that one covers robots/meta/module; here it’s the bar and visual edits in the public area.",
    },
  ],
  sections: [
    {
      title: "The public-area bar",
      level: 2,
      paras: [
        "After login with the right permissions you see a switch like Site / Administration along the page header, section menus, notices, and actions for the current page.",
        "The button set differs for an editor and an administrator. If something is missing, it’s often access policy — not broken.",
      ],
      lists: [
        {
          intro: "Typical bar actions:",
          items: [
            "create a page or section",
            "edit page / section",
            "menu and structure",
            "page SEO properties",
            "cache clear",
            "edit mode, template, debug (for those allowed)",
          ],
        },
      ],
      links: [
        {
          label: "SEO in 1C-Bitrix",
          href: "/en/blog/seo-bitrix/",
        },
        {
          label: "Site admin panel",
          href: "/en/blog/adminka-sayta/",
        },
      ],
    },
    {
      title: "Creating and editing pages",
      level: 2,
      paras: [
        "Create page/section starts a wizard or a form with a template. Edit opens the visual editor or entity properties — depends on page type and site settings.",
        "Structure helps move and delete tree nodes. Before deleting, make sure there are no needed links and you have rights to restore from backup.",
      ],
    },
    {
      title: "Edit mode",
      level: 2,
      paras: [
        "Edit mode highlights areas: hover a block — actions appear to change area / page / element. That’s how you edit a header phone, body text, or a catalog product card without hunting the entity in the admin.",
        "Three common objects: include area (shared chunk on many pages), page work area, component area (infoblock element). A mistake in an include area shows on every page that includes it.",
      ],
      tables: [
        {
          caption: "What you’re editing",
          headers: ["Object", "Example"],
          rows: [
            ["Include area", "Phone, footer offer"],
            ["Work area", "Ordinary page text"],
            ["Component / element", "Product name and price"],
          ],
        },
      ],
      notes: [
        {
          title: "Rights beat buttons",
          kind: "tip",
          text: "A catalog editor doesn’t need template debug and site-template switching. Split roles — fewer accidental layout breaks.",
        },
      ],
    },
    {
      title: "Cache, SEO fields, and more",
      level: 2,
      paras: [
        "Clearing cache helps see fresh edits if a page is stuck. Don’t overuse it on high-load prod without understanding the impact.",
        "The SEO block on the bar is about current page properties (title, description). Don’t fill keywords for luck. Built-in Bitrix stats don’t replace Yandex Metrica/analytics for marketing — check what’s actually connected on the project.",
      ],
      links: [
        {
          label: "Installing Yandex Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Hotkeys",
      level: 2,
      paras: [
        "In settings you can assign shortcuts to frequent actions. Worth it only if the team actually uses them; otherwise mouse and edit mode are enough.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The Bitrix public bar is a fast content workflow: create/edit, area edit mode, cache, and page SEO fields. Full module settings live in Administration.",
        "Edition UIs differ: learn role and area logic, don’t memorize icon placement from a 2017 screenshot. Admin login will be covered separately in the migration queue.",
      ],
    },
  ],
  closing: [
    "Sign in with the right permissions, find the public-section bar, and edit via area mode — Bitrix content changes faster that way than hunting forms deep in the admin.",
  ],
  related: [
    "seo-bitrix",
    "adminka-sayta",
    "wordpress-admin",
    "metrika-ustanovka",
    "cms-internet-magazina",
    "uznat-cms",
  ],
};

/** ES overlay for bitrix-publichnyy-razdel — same structure as RU JSON / EN. */
export const bitrixPublichnyyRazdelEs: BlogPost = {
  slug: "bitrix-publichnyy-razdel",
  title: "Sección pública de 1C-Bitrix: barra de herramientas y modo edición",
  date: "2017-12-13",
  category: "Websites",
  cover: "/images/blog/bitrix-publichnyy-razdel/cover.webp",
  excerpt:
    "Cómo funciona la barra de control del área pública de Bitrix: botones, modo edición, áreas include y componentes — sin aferrarse a screenshots de ediciones viejas ni al culto de meta keywords.",
  lead: [
    "En 1C-Bitrix, tras iniciar sesión, a menudo aparece una barra de sección pública encima de la página: crear página, editar el menú, limpiar caché, abrir propiedades SEO, activar modo edición.",
    "Abajo: qué significan los controles principales y cómo editar contenido en el sitio sin perderse en el admin. El set de botones depende de derechos y edición; los nombres de ítems cambiaron — sigue docs actuales de Bitrix, no screenshots de 2017.",
  ],
  faq: [
    {
      q: "¿Por qué no hay barra de sección pública tras el login?",
      a: "Sin derechos a la barra pública, otro sitio/dominio o modo de display. Pide a un administrador un rol.",
    },
    {
      q: "¿En qué se diferencia la sección pública de Administration?",
      a: "Pública — editar con ojos de visitante. Administration — backend completo: infoblocks, módulos, usuarios, settings.",
    },
    {
      q: "¿Es peligroso el modo edición de la sección pública?",
      a: "En producción con cuidado: un guardado equivocado pega al sitio en vivo. Para ediciones importantes usa derechos, borradores/workflow y backups según las reglas de la empresa.",
    },
    {
      q: "¿El botón SEO sustituye la promoción real?",
      a: "No. Son campos title/description y pistas. No uses keywords como factor. Los rankings son trabajo aparte.",
    },
    {
      q: "¿Esto está relacionado con el artículo SEO de Bitrix?",
      a: "Sí, adyacente: aquel cubre robots/meta/módulo; aquí es la barra y las ediciones visuales en el área pública.",
    },
  ],
  sections: [
    {
      title: "La barra del área pública",
      level: 2,
      paras: [
        "Tras el login con los permisos adecuados ves un switch tipo Site / Administration a lo largo del header de la página, menús de sección, avisos y acciones para la página actual.",
        "El set de botones difiere para un editor y un administrador. Si falta algo, a menudo es política de acceso — no está roto.",
      ],
      lists: [
        {
          intro: "Acciones típicas de la barra:",
          items: [
            "crear una página o sección",
            "editar página / sección",
            "menú y estructura",
            "propiedades SEO de la página",
            "limpiar caché",
            "modo edición, plantilla, debug (para quienes tienen permiso)",
          ],
        },
      ],
      links: [
        {
          label: "SEO en 1C-Bitrix",
          href: "/es/blog/seo-bitrix/",
        },
        {
          label: "Panel de administración del sitio",
          href: "/es/blog/adminka-sayta/",
        },
      ],
    },
    {
      title: "Crear y editar páginas",
      level: 2,
      paras: [
        "Crear página/sección arranca un wizard o un formulario con plantilla. Editar abre el editor visual o propiedades de la entidad — depende del tipo de página y de los settings del sitio.",
        "La estructura ayuda a mover y borrar nodos del árbol. Antes de borrar, asegúrate de que no haya enlaces necesarios y de que tengas derechos para restaurar desde backup.",
      ],
    },
    {
      title: "Modo edición",
      level: 2,
      paras: [
        "El modo edición resalta áreas: pasa el cursor por un bloque — aparecen acciones para cambiar área / página / elemento. Así editas un teléfono del header, texto del body o una ficha de producto del catálogo sin cazar la entidad en el admin.",
        "Tres objetos habituales: área include (chunk compartido en muchas páginas), área de trabajo de la página, área de componente (elemento de infoblock). Un error en un área include se ve en cada página que lo incluye.",
      ],
      tables: [
        {
          caption: "Qué estás editando",
          headers: ["Objeto", "Ejemplo"],
          rows: [
            ["Área include", "Teléfono, oferta del footer"],
            ["Área de trabajo", "Texto de una página ordinaria"],
            ["Componente / elemento", "Nombre y precio del producto"],
          ],
        },
      ],
      notes: [
        {
          title: "Los derechos ganan a los botones",
          kind: "tip",
          text: "Un editor de catálogo no necesita debug de plantilla ni cambiar la plantilla del sitio. Separa roles — menos roturas accidentales de layout.",
        },
      ],
    },
    {
      title: "Caché, campos SEO y más",
      level: 2,
      paras: [
        "Limpiar caché ayuda a ver ediciones frescas si una página se queda atascada. No abuses en prod de alta carga sin entender el impacto.",
        "El bloque SEO de la barra va de propiedades de la página actual (title, description). No rellenes keywords por suerte. Las stats integradas de Bitrix no sustituyen Yandex Metrica/analytics para marketing — comprueba qué está conectado de verdad en el proyecto.",
      ],
      links: [
        {
          label: "Instalar Yandex Metrica",
          href: "/es/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Atajos de teclado",
      level: 2,
      paras: [
        "En settings puedes asignar shortcuts a acciones frecuentes. Vale la pena solo si el equipo los usa de verdad; si no, el ratón y el modo edición bastan.",
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "La barra pública de Bitrix es un flujo rápido de contenido: crear/editar, modo edición de áreas, caché y campos SEO de página. Los settings completos de módulos viven en Administration.",
        "Las UIs de edición difieren: aprende la lógica de rol y área, no memorices la colocación de iconos de un screenshot de 2017. El login de admin se cubrirá aparte en la cola de migración.",
      ],
    },
  ],
  closing: [
    "Inicia sesión con los permisos adecuados, encuentra la barra de sección pública y edita vía modo de área — el contenido de Bitrix cambia más rápido así que cazando formularios en lo profundo del admin.",
  ],
  related: [
    "seo-bitrix",
    "adminka-sayta",
    "wordpress-admin",
    "metrika-ustanovka",
    "cms-internet-magazina",
    "uznat-cms",
  ],
};
