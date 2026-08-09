import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-spravochnik — same structure as RU JSON. */
export const yandeksSpravochnikEn: BlogPost = {
  slug: "yandeks-spravochnik",
  title: "Yandex organization listing: the business card and why you need it",
  date: "2019-08-27",
  category: "SEO",
  cover: "/images/blog/yandeks-spravochnik/cover-en.webp",
  excerpt:
    "What an organization card is in the Yandex ecosystem (Directory / Organizations / Yandex Business): why it matters, how to claim it, what to fill in, and how to handle reviews — without outdated dashboard screenshots.",
  lead: [
    "Yandex.Directory is the historic name for the organization database shown in search, Maps, and related services. Card management today often lives in Yandex Business or Organizations: menu labels change, but the job stays the same — a verified company profile.",
    "Below: why the card matters, how to create it, and what to keep current. We do not copy 2019 click paths — check current Yandex Help — and we do not treat review inflation as a strategy.",
  ],
  faq: [
    {
      q: "Are Directory and Yandex Business the same?",
      a: "Product and dashboard evolution. For the owner what matters: an organization card exists, rights are verified, data is current. The menu section name is secondary.",
    },
    {
      q: "Do I need a website?",
      a: "Preferably: a link strengthens the path to a lead. Without a site the card can work as a calling card, but for many niches site plus maps work stronger together.",
    },
    {
      q: "How is it different from Google Business Profile?",
      a: "Similar job — local results and maps, different ecosystems. Local business in Russia often needs both cards with consistent NAP.",
    },
    {
      q: "Who can edit the card?",
      a: "The owner after verifying rights. Users can suggest edits — monitor them so address or phone do not drift.",
    },
    {
      q: "Does the card affect site SEO?",
      a: "It is a local layer: maps, reviews, NAP. It helps recognition indirectly; it does not replace site SEO. Gains across a commercial keyword set still take months of work after promotion starts — adding a card is not a ranking shortcut.",
    },
  ],
  sections: [
    {
      title: "Why business needs a Yandex card",
      level: 2,
      paras: [
        "On service-plus-city queries and in Maps, users see address, phone, hours, route, photos, and reviews — often before they open the site.",
        "For an offline location it is a short path to a call and visit. For online — trust and consistent contacts. The card does not replace the site; it complements local search.",
      ],
      lists: [
        {
          intro: "What a filled profile gives:",
          items: [
            "visibility in Maps and local results",
            "route and opening hours",
            "photos and description",
            "reviews and owner replies",
            "link to the site and messengers (where available)",
          ],
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
      ],
    },
    {
      title: "How to create and verify the organization",
      level: 2,
      paras: [
        "In the current Yandex dashboard you create or find the organization, then fill address, category, phone, site, and hours. If the card already exists in the database — claim owner rights the way the service offers.",
        "After moderation, edit the profile: name as on the sign, exact address with landmarks, exterior and interior photos, features (payment, accessibility), and details per service rules.",
      ],
      lists: [
        {
          intro: "NAP and data:",
          items: [
            "name matches the sign and site",
            "address and phone match everywhere",
            "category matches real activity",
            "hours are current, including holidays",
            "photos are yours — not stock",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Do not list someone else’s address to look good in results. NAP mismatches and a fake location hurt trust and can lead to rejections.",
        },
      ],
    },
    {
      title: "Posts, prices, reviews",
      level: 2,
      paras: [
        "Profiles often support posts (promos, news), price lists or products, or a menu — the set depends on category and current dashboard features. Fill what actually helps clients choose you.",
        "Reviews: reply calmly and on substance, including negatives. Fake reviews and inflated ratings risk sanctions and reputation damage.",
        "Impression and click stats live in the dashboard; deep query analytics may be limited — for the site also use Metrika and Webmaster.",
      ],
      lists: [
        {
          intro: "Ongoing upkeep:",
          items: [
            "check hours and phone",
            "new photos each season or after renovation",
            "replies to reviews",
            "current promos in posts",
            "monitor third-party edits to the card",
          ],
        },
      ],
      links: [
        {
          label: "Negative review",
          href: "/en/blog/negativnyy-otzyv/",
        },
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
  ],
  closing: [
    "An organization card in Yandex is a required local-presence layer next to the site. Verify rights, align NAP, fill photos and hours, reply to reviews — and check the UI against the current Yandex Business dashboard, not old guide screenshots.",
  ],
  related: [
    "google-biznes",
    "regionalnoe-seo",
    "negativnyy-otzyv",
    "otzyvy-dlya-prodazh",
    "seo-malyy-biznes",
    "kommercheskie-faktory",
  ],
};

/** ES overlay for yandeks-spravochnik — same structure as RU JSON / EN. */
export const yandeksSpravochnikEs: BlogPost = {
  slug: "yandeks-spravochnik",
  title: "Ficha de organización en Yandex: la tarjeta de negocio y por qué la necesitas",
  date: "2019-08-27",
  category: "SEO",
  cover: "/images/blog/yandeks-spravochnik/cover.webp",
  excerpt:
    "Qué es una ficha de organización en el ecosistema Yandex (Directory / Organizations / Yandex Business): por qué importa, cómo reclamarla, qué rellenar y cómo gestionar reseñas — sin screenshots obsoletos del dashboard.",
  lead: [
    "Yandex.Directory es el nombre histórico de la base de organizaciones que se muestra en búsqueda, Maps y servicios relacionados. La gestión de la ficha hoy suele vivir en Yandex Business u Organizations: cambian las etiquetas del menú, pero el trabajo sigue igual — un perfil de empresa verificado.",
    "Abajo: por qué importa la ficha, cómo crearla y qué mantener al día. No copiamos rutas de clic de 2019 — consulta la Help actual de Yandex — y no tratamos la inflación de reseñas como estrategia.",
  ],
  faq: [
    {
      q: "¿Directory y Yandex Business son lo mismo?",
      a: "Evolución de producto y dashboard. Para el dueño lo que importa: existe una ficha de organización, los derechos están verificados, los datos están al día. El nombre de la sección del menú es secundario.",
    },
    {
      q: "¿Hace falta un sitio web?",
      a: "Preferible: un enlace refuerza el camino al lead. Sin sitio la ficha puede funcionar como tarjeta de visita, pero en muchos nichos sitio más mapas trabajan más fuertes juntos.",
    },
    {
      q: "¿En qué se diferencia de Google Business Profile?",
      a: "Trabajo similar — resultados locales y mapas, ecosistemas distintos. Un negocio local en Rusia a menudo necesita ambas fichas con NAP coherente.",
    },
    {
      q: "¿Quién puede editar la ficha?",
      a: "El dueño tras verificar derechos. Los usuarios pueden sugerir ediciones — vigílalas para que dirección o teléfono no se desvíen.",
    },
    {
      q: "¿La ficha afecta al SEO del sitio?",
      a: "Es una capa local: mapas, reseñas, NAP. Ayuda al reconocimiento de forma indirecta; no sustituye el SEO del sitio. Las ganancias en un set comercial de keywords siguen llevando meses de trabajo tras el arranque de la promoción — añadir una ficha no es un atajo de ranking.",
    },
  ],
  sections: [
    {
      title: "Por qué el negocio necesita una ficha en Yandex",
      level: 2,
      paras: [
        "En consultas de servicio más ciudad y en Maps, los usuarios ven dirección, teléfono, horario, ruta, fotos y reseñas — a menudo antes de abrir el sitio.",
        "Para una ubicación offline es un camino corto a una llamada y una visita. Para online — confianza y contactos coherentes. La ficha no sustituye el sitio; complementa la búsqueda local.",
      ],
      lists: [
        {
          intro: "Qué da un perfil rellenado:",
          items: [
            "visibilidad en Maps y resultados locales",
            "ruta y horario de apertura",
            "fotos y descripción",
            "reseñas y respuestas del dueño",
            "enlace al sitio y messengers (donde esté disponible)",
          ],
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/es/blog/google-biznes/",
        },
        {
          label: "SEO regional",
          href: "/es/blog/regionalnoe-seo/",
        },
      ],
    },
    {
      title: "Cómo crear y verificar la organización",
      level: 2,
      paras: [
        "En el dashboard actual de Yandex creas o encuentras la organización, luego rellenas dirección, categoría, teléfono, sitio y horario. Si la ficha ya existe en la base — reclama los derechos de dueño como ofrezca el servicio.",
        "Tras la moderación, edita el perfil: nombre como en el letrero, dirección exacta con puntos de referencia, fotos de exterior e interior, características (pago, accesibilidad) y detalles según las reglas del servicio.",
      ],
      lists: [
        {
          intro: "NAP y datos:",
          items: [
            "el nombre coincide con el letrero y el sitio",
            "dirección y teléfono coinciden en todos lados",
            "la categoría encaja con la actividad real",
            "el horario está al día, incluidos festivos",
            "las fotos son tuyas — no stock",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No listes la dirección de otro para quedar bien en los resultados. Desajustes de NAP y una ubicación falsa dañan la confianza y pueden llevar a rechazos.",
        },
      ],
    },
    {
      title: "Posts, precios, reseñas",
      level: 2,
      paras: [
        "Los perfiles a menudo admiten posts (promos, noticias), listas de precios o productos, o un menú — el set depende de la categoría y de las funciones actuales del dashboard. Rellena lo que de verdad ayude a los clientes a elegirte.",
        "Reseñas: responde con calma y al fondo, también a las negativas. Reseñas falsas y ratings inflados arriesgan sanciones y daño reputacional.",
        "Las stats de impresiones y clics viven en el dashboard; la analítica profunda de consultas puede ser limitada — para el sitio usa también Metrica y Webmaster.",
      ],
      lists: [
        {
          intro: "Mantenimiento continuo:",
          items: [
            "revisar horario y teléfono",
            "fotos nuevas cada temporada o tras una reforma",
            "respuestas a reseñas",
            "promos actuales en posts",
            "monitorear ediciones de terceros a la ficha",
          ],
        },
      ],
      links: [
        {
          label: "Reseña negativa",
          href: "/blog/negativnyy-otzyv/",
        },
        {
          label: "Reseñas para ventas",
          href: "/es/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
  ],
  closing: [
    "Una ficha de organización en Yandex es una capa obligatoria de presencia local junto al sitio. Verifica derechos, alinea el NAP, rellena fotos y horario, responde a reseñas — y comprueba la UI contra el dashboard actual de Yandex Business, no screenshots de guías viejas.",
  ],
  related: [
    "google-biznes",
    "regionalnoe-seo",
    "negativnyy-otzyv",
    "otzyvy-dlya-prodazh",
    "seo-malyy-biznes",
    "kommercheskie-faktory",
  ],
};
