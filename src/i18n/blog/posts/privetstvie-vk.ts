import type { BlogPost } from "../../../data/blog";

/** EN overlay for privetstvie-vk — same structure as RU JSON. */
export const privetstvieVkEn: BlogPost = {
  slug: "privetstvie-vk",
  title: "VK community greeting: how to welcome guests and new followers",
  date: "2020-12-30",
  category: "SMM",
  cover: "/images/blog/privetstvie-vk/cover-en.webp",
  excerpt:
    "A VK group greeting: why use a widget or a message to newcomers, what to write, and how not to annoy — without hype for one app or promises of “instant growth.”",
  lead: [
    "A VK community greeting meets a guest or new follower: short who you are, what to do next, where the rules and offer live. It’s a funnel entry point, not a decorative banner.",
    "Below: the point of a greeting, text structure, and caution with widgets. Specific apps from the VK catalog (old guides often named SpyCat) change: use current community apps and VK Help, not 2020 screenshots.",
  ],
  faq: [
    {
      q: "Is a third-party widget required?",
      a: "No. Sometimes a pin, community menu, community-message greeting, or bot is enough. A widget is one option.",
    },
    {
      q: "Can the widget button send people to an external site?",
      a: "Depends on the app’s rules and VK. Some older widgets only allowed links inside the community. Check current limits.",
    },
    {
      q: "Will a greeting grow the group by itself?",
      a: "No. It lowers entry friction. Growth comes from content, offer, and acquisition — see group promotion.",
    },
    {
      q: "Is name personalization always a plus?",
      a: "Use it in moderation. A hard sell with first and last name can feel like spam.",
    },
    {
      q: "Should I show it to everyone or only followers?",
      a: "Guests — path to subscribe and rules. Followers — catalog, bonus, chat. Not one text for every status if you can segment.",
    },
  ],
  sections: [
    {
      title: "Why greet people",
      level: 2,
      paras: [
        "A newcomer doesn’t know what to tap. A greeting gives the next step: subscribe, open the menu, message a manager, read the FAQ, grab delivery terms.",
        "For commerce it’s a soft CTA. For a topical public — rules and tone.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "explain the community’s value",
            "route to catalog/services",
            "collect a message/lead",
            "send people to the rules",
            "announce a subscribe bonus (honestly)",
          ],
        },
      ],
      links: [
        {
          label: "VK group promotion",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
        {
          label: "Comments in a VK public",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "Text structure",
      level: 2,
      paras: [
        "Short headline, 1–2 benefit lines, one button/link with a clear action. No caps lock and five offers at once.",
        "Example logic: “You’re in community X — reviews and pricing live here. Message “PRICE” or open the menu.”",
      ],
      lists: [
        {
          intro: "Copy checklist:",
          items: [
            "clear who you are",
            "one main CTA",
            "no fake “today only −90%”",
            "tone matches the feed",
            "a path for people who haven’t subscribed yet",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "The greeting covers the cover and annoys: long copy, autoplay, aggressive pop-up. Better short and useful.",
        },
      ],
    },
    {
      title: "Where to place it: widget, menu, messages",
      level: 2,
      paras: [
        "An app widget in the community block is classic in old guides. Alternatives: a menu item, pinned post, greeting/keyboard in community messages, chat bot.",
        "Pick what admins’ roles actually support and what doesn’t break the mobile layout.",
      ],
    },
    {
      title: "If you install a greeting widget",
      level: 2,
      paras: [
        "Usual path: Manage → Apps → find a greeting widget → add → set text, visibility, button. App names and limits (one widget, internal links only) have changed — read the app card.",
        "Don’t promise yourself “SpyCat-case conversion”: measure your own clicks and messages.",
      ],
      lists: [
        {
          intro: "Before publishing the widget:",
          items: [
            "who sees the block (guests / members)",
            "the button goes where it should",
            "copy has no typos",
            "mobile view checked",
            "a replacement plan if the app is retired",
          ],
        },
      ],
    },
    {
      title: "Segments and offers",
      level: 2,
      paras: [
        "If the tool can vary copy by gender, city, or subscribe status — use it for usefulness, not creepy hyper-personalization. Guests — subscribe and entry offer; clients — support and catalog.",
        "Describe action bonuses honestly: discount terms, deadline, how to claim.",
      ],
      links: [
        {
          label: "VK messaging / broadcasts",
          href: "/en/blog/rassylka-vk/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A greeting is a clear first step for guests and newcomers. Copy and CTA matter more than the widget brand.",
        "Check current VK apps and don’t confuse a greeting with your only audience-growth channel.",
      ],
    },
  ],
  closing: [
    "Write one next step for a newcomer, pick a pin, menu, or widget, and check it on a phone — that’s how a community welcomes people instead of losing them between cover and wall.",
  ],
  related: [
    "raskrutka-gruppy-vk",
    "kommentarii-v-pablike-vk",
    "rassylka-vk",
    "idei-storis-vk",
    "aktivnost-vk",
    "privetstvie-sayta",
  ],
};

/** ES overlay for privetstvie-vk — same structure as RU JSON / EN. */
export const privetstvieVkEs: BlogPost = {
  slug: "privetstvie-vk",
  title: "Saludo de comunidad VK: cómo dar la bienvenida a invitados y nuevos followers",
  date: "2020-12-30",
  category: "SMM",
  cover: "/images/blog/privetstvie-vk/cover.webp",
  excerpt:
    "Un saludo de grupo VK: por qué usar un widget o un mensaje a newcomers, qué escribir y cómo no molestar — sin hype por una app ni promesas de «crecimiento instantáneo».",
  lead: [
    "Un saludo de comunidad VK recibe a un invitado o nuevo follower: breve quién eres, qué hacer después, dónde viven las reglas y la oferta. Es un punto de entrada al embudo, no un banner decorativo.",
    "Abajo: el sentido del saludo, la estructura del texto y cautela con widgets. Las apps concretas del catálogo VK (guías viejas a menudo nombraban SpyCat) cambian: usa apps de comunidad actuales y VK Help, no screenshots de 2020.",
  ],
  faq: [
    {
      q: "¿Hace falta un widget de terceros?",
      a: "No. A veces bastan un pin, el menú de comunidad, un saludo por mensaje de comunidad o un bot. Un widget es una opción.",
    },
    {
      q: "¿El botón del widget puede enviar a un sitio externo?",
      a: "Depende de las reglas de la app y de VK. Algunos widgets viejos solo permitían enlaces dentro de la comunidad. Revisa los límites actuales.",
    },
    {
      q: "¿Un saludo crecerá el grupo solo?",
      a: "No. Baja la fricción de entrada. El crecimiento viene de contenido, oferta y adquisición — ver promoción de grupo.",
    },
    {
      q: "¿La personalización con nombre siempre es un plus?",
      a: "Úsala con moderación. Un hard sell con nombre y apellido puede sentirse spam.",
    },
    {
      q: "¿Mostrarlo a todos o solo a followers?",
      a: "Invitados — camino a suscribirse y reglas. Followers — catálogo, bonus, chat. No un texto para cada status si puedes segmentar.",
    },
  ],
  sections: [
    {
      title: "Por qué saludar",
      level: 2,
      paras: [
        "Un newcomer no sabe qué tocar. Un saludo da el siguiente paso: suscribirse, abrir el menú, escribir a un manager, leer el FAQ, pillar términos de entrega.",
        "Para commerce es un CTA suave. Para un público temático — reglas y tono.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "explicar el valor de la comunidad",
            "dirigir a catálogo/servicios",
            "recoger un mensaje/lead",
            "enviar a las reglas",
            "anunciar un bonus de suscripción (con honestidad)",
          ],
        },
      ],
      links: [
        {
          label: "Promoción de grupo VK",
          href: "/es/blog/raskrutka-gruppy-vk/",
        },
        {
          label: "Comentarios en un público VK",
          href: "/es/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "Estructura del texto",
      level: 2,
      paras: [
        "Titular corto, 1–2 líneas de beneficio, un botón/enlace con una acción clara. Nada de caps lock y cinco ofertas a la vez.",
        "Lógica de ejemplo: «Estás en la comunidad X — aquí viven reseñas y precios. Escribe «PRECIO» o abre el menú».",
      ],
      lists: [
        {
          intro: "Checklist de copy:",
          items: [
            "quién eres queda claro",
            "un CTA principal",
            "nada de falso «solo hoy −90%»",
            "el tono encaja con el feed",
            "un camino para quien aún no se ha suscrito",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "El saludo tapa la cover y molesta: copy largo, autoplay, pop-up agresivo. Mejor corto y útil.",
        },
      ],
    },
    {
      title: "Dónde colocarlo: widget, menú, mensajes",
      level: 2,
      paras: [
        "Un widget de app en el bloque de comunidad es clásico en guías viejas. Alternativas: un ítem de menú, post fijado, saludo/teclado en mensajes de comunidad, bot de chat.",
        "Elige lo que los roles de admins soporten de verdad y lo que no rompa el layout móvil.",
      ],
    },
    {
      title: "Si instalas un widget de saludo",
      level: 2,
      paras: [
        "Camino habitual: Manage → Apps → busca un widget de saludo → añade → fija texto, visibilidad, botón. Nombres de apps y límites (un widget, solo enlaces internos) han cambiado — lee la ficha de la app.",
        "No te prometas «conversión del caso SpyCat»: mide tus propios clics y mensajes.",
      ],
      lists: [
        {
          intro: "Antes de publicar el widget:",
          items: [
            "quién ve el bloque (invitados / miembros)",
            "el botón va donde debe",
            "el copy no tiene typos",
            "vista móvil revisada",
            "un plan de reemplazo si la app se retira",
          ],
        },
      ],
    },
    {
      title: "Segmentos y ofertas",
      level: 2,
      paras: [
        "Si la herramienta puede variar el copy por género, ciudad o status de suscripción — úsalo por utilidad, no por hiper-personalización creepy. Invitados — suscribirse y oferta de entrada; clientes — soporte y catálogo.",
        "Describe los bonuses de acción con honestidad: términos del descuento, deadline, cómo reclamarlo.",
      ],
      links: [
        {
          label: "Mensajería / broadcasts de VK",
          href: "/es/blog/rassylka-vk/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Un saludo es un primer paso claro para invitados y newcomers. El copy y el CTA importan más que la marca del widget.",
        "Revisa las apps actuales de VK y no confundas un saludo con tu único canal de crecimiento de audiencia.",
      ],
    },
  ],
  closing: [
    "Escribe un siguiente paso para un newcomer, elige un pin, menú o widget, y compruébalo en un teléfono — así una comunidad da la bienvenida en vez de perder gente entre la cover y el muro.",
  ],
  related: [
    "raskrutka-gruppy-vk",
    "kommentarii-v-pablike-vk",
    "rassylka-vk",
    "idei-storis-vk",
    "aktivnost-vk",
    "privetstvie-sayta",
  ],
};
