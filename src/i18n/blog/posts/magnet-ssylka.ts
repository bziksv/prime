import type { BlogPost } from "../../../data/blog";

/** EN overlay for magnet-ssylka — same structure as RU JSON. */
export const magnetSsylkaEn: BlogPost = {
  slug: "magnet-ssylka",
  title: "Magnet links: what they are and how they work",
  date: "2020-08-06",
  category: "Websites",
  cover: "/images/blog/magnet-ssylka/cover-en.webp",
  excerpt:
    "What a magnet URI is: a file hash instead of a normal URL, xt/dn/tr parameters, how it differs from a .torrent, and download risks. No pirate-tracker catalogs.",
  lead: [
    "A magnet link (magnet URI) isn’t a website address — it’s a string with a content identifier (usually a file hash on the BitTorrent network). The client uses the hash to find peers who have the data and download peer-to-peer.",
    "Below: link structure, legitimate scenarios, and risks. We don’t cover searching for pirated content or bypassing tracker blocks: downloading someone else’s protected material is illegal; you’re responsible for malware in “shares.”",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How does a magnet differ from a .torrent file?",
      a: "In a .torrent, metadata often lives in the file. A magnet carries the hash (and optionally name/trackers) in the link itself — easy to copy as text. The download is the same P2P class.",
    },
    {
      q: "Is a magnet safer than a normal download link?",
      a: "Not automatically. A hash doesn’t guarantee legality or lack of malware. Check the source and rights to the content.",
    },
    {
      q: "Can I “block” a magnet?",
      a: "The string as text is hard to “ban globally,” but ISPs, platforms, and courts limit access to pirate resources. “Unblockable = you can download anything” is a false conclusion.",
    },
    {
      q: "What are legitimate uses?",
      a: "Sharing your own files with rights, open data, Linux distros and other content under an allowed license — when the rights holder permits it.",
    },
    {
      q: "Do I need a separate client?",
      a: "Yes, a BitTorrent client that understands magnets. The browser usually hands the link to the installed program.",
    },
  ],
  sections: [
    {
      title: "Structure and how it differs from a URL",
      level: 2,
      paras: [
        "A normal URL points to a host and path (https://example.com/file.zip). A magnet starts with `magnet:?` and describes content via parameters separated by `&`.",
        "The key parameter is `xt` (exact topic): often `urn:btih:` plus a BitTorrent Info Hash. The client finds peers by it. Optional: `dn` (name), `xl` (size), `tr` (tracker announce), other fields.",
        "Parameter order isn’t rigid. What matters is a correct hash. Without clients and peers that have the file, the link is “empty”: it’s a pointer, not storage on a server.",
        "The browser may offer to open the magnet in uTorrent, qBittorrent, Transmission, and similar apps. Or you paste the string into the client manually.",
      ],
      lists: [
        {
          intro: "What the string usually contains:",
          items: [
            "`magnet:?` — the scheme",
            "`xt` — content hash/URN",
            "`dn` — display name",
            "`tr` — trackers (not always)",
            "other optional fields",
          ],
        },
      ],
      links: [
        {
          label: "What a URL is",
          href: "/en/blog/url-adres/",
        },
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
      ],
    },
    {
      title: "Practice, risks, and the law",
      level: 2,
      paras: [
        "Format benefits for lawful sharing: easy to send as text, no separate .torrent file needed, can combine with DHT and trackers. That’s protocol convenience — not an indulgence for piracy.",
        "Risks: malware disguised as a movie/software, IP exposure in P2P, rights-holder claims. Don’t open dubious magnets “from a forum.”",
        "We don’t recommend catalogs and trackers with clearly pirated content and don’t list them as “where to download.” If you need a legal distro — take it from the project’s official site.",
        "You can create a magnet for your file in a BitTorrent client: add a share → get a Magnet URI. Share only what you have rights to.",
        "Bottom line: a magnet link addresses a file by hash in P2P. Understand the tech and legal limits; don’t confuse format convenience with a right to someone else’s content.",
      ],
      lists: [
        {
          intro: "Before downloading via magnet:",
          items: [
            "rights holder/license is clear",
            "the source is trustworthy",
            "the client is updated",
            "you don’t expect “anonymity by default”",
            "antivirus and common sense are in place",
          ],
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: "Copyright on Instagram",
          href: "/en/blog/avtorskie-prava-instagram/",
        },
      ],
    },
  ],
  related: [
    "url-adres",
    "chto-takoe-ssylka",
    "bezopasnost-sayta",
    "avtorskie-prava-instagram",
    "veb-arhiv",
  ],
};

/** ES overlay for magnet-ssylka — same structure as RU JSON / EN. */
export const magnetSsylkaEs: BlogPost = {
  slug: "magnet-ssylka",
  title: "Enlaces magnet: qué son y cómo funcionan",
  date: "2020-08-06",
  category: "Websites",
  cover: "/images/blog/magnet-ssylka/cover-es.webp",
  excerpt:
    "Qué es una magnet URI: un hash de archivo en vez de una URL normal, parámetros xt/dn/tr, cómo difiere de un .torrent y riesgos de descarga. Sin catálogos de trackers piratas.",
  lead: [
    "Un enlace magnet (magnet URI) no es una dirección de sitio — es una cadena con un identificador de contenido (suele ser un hash de archivo en la red BitTorrent). El cliente usa el hash para hallar peers que tienen los datos y descargar peer-to-peer.",
    "Abajo: estructura del enlace, escenarios legítimos y riesgos. No cubrimos buscar contenido pirateado ni saltar bloques de trackers: descargar material protegido ajeno es ilegal; tú respondes del malware en «shares».",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia un magnet de un archivo .torrent?",
      a: "En un .torrent, los metadata a menudo viven en el archivo. Un magnet lleva el hash (y opcionalmente nombre/trackers) en el propio enlace — fácil de copiar como texto. La descarga es la misma clase P2P.",
    },
    {
      q: "¿Un magnet es más seguro que un enlace de descarga normal?",
      a: "No automáticamente. Un hash no garantiza legalidad ni ausencia de malware. Comprueba la fuente y los derechos sobre el contenido.",
    },
    {
      q: "¿Se puede «bloquear» un magnet?",
      a: "La cadena como texto es difícil de «banear globalmente», pero ISPs, plataformas y tribunales limitan el acceso a recursos piratas. «Imbloqueable = puedes descargar cualquier cosa» es una conclusión falsa.",
    },
    {
      q: "¿Cuáles son usos legítimos?",
      a: "Compartir tus propios archivos con derechos, open data, distros Linux y otro contenido bajo licencia permitida — cuando el titular de derechos lo permite.",
    },
    {
      q: "¿Hace falta un cliente aparte?",
      a: "Sí, un cliente BitTorrent que entienda magnets. El navegador suele pasar el enlace al programa instalado.",
    },
  ],
  sections: [
    {
      title: "Estructura y cómo difiere de una URL",
      level: 2,
      paras: [
        "Una URL normal apunta a un host y path (https://example.com/file.zip). Un magnet empieza con `magnet:?` y describe el contenido vía parámetros separados por `&`.",
        "El parámetro clave es `xt` (exact topic): a menudo `urn:btih:` más un BitTorrent Info Hash. El cliente halla peers por él. Opcional: `dn` (nombre), `xl` (tamaño), `tr` (announce de tracker), otros campos.",
        "El orden de parámetros no es rígido. Lo que importa es un hash correcto. Sin clientes y peers que tengan el archivo, el enlace está «vacío»: es un puntero, no storage en un servidor.",
        "El navegador puede ofrecer abrir el magnet en uTorrent, qBittorrent, Transmission y apps similares. O pegas la cadena en el cliente a mano.",
      ],
      lists: [
        {
          intro: "Qué suele contener la cadena:",
          items: [
            "`magnet:?` — el scheme",
            "`xt` — hash/URN del contenido",
            "`dn` — nombre visible",
            "`tr` — trackers (no siempre)",
            "otros campos opcionales",
          ],
        },
      ],
      links: [
        {
          label: "Qué es una URL",
          href: "/es/blog/url-adres/",
        },
        {
          label: "Qué es un enlace",
          href: "/es/blog/chto-takoe-ssylka/",
        },
      ],
    },
    {
      title: "Práctica, riesgos y la ley",
      level: 2,
      paras: [
        "Beneficios del formato para sharing lícito: fácil de enviar como texto, no hace falta un .torrent aparte, se puede combinar con DHT y trackers. Eso es comodidad de protocolo — no una indulgencia para la piratería.",
        "Riesgos: malware disfrazado de película/software, exposición de IP en P2P, reclamaciones de titulares de derechos. No abras magnets dudosos «de un foro».",
        "No recomendamos catálogos y trackers con contenido claramente pirateado ni los listamos como «dónde descargar». Si necesitas una distro legal — tómalo del sitio oficial del proyecto.",
        "Puedes crear un magnet para tu archivo en un cliente BitTorrent: añade un share → obtén una Magnet URI. Comparte solo lo que tienes derechos a compartir.",
        "En resumen: un enlace magnet direcciona un archivo por hash en P2P. Entiende la tech y los límites legales; no confundas la comodidad del formato con un derecho sobre el contenido ajeno.",
      ],
      lists: [
        {
          intro: "Antes de descargar vía magnet:",
          items: [
            "el titular/licencia está claro",
            "la fuente es de confianza",
            "el cliente está actualizado",
            "no esperas «anonimato por defecto»",
            "antivirus y sentido común están en su sitio",
          ],
        },
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/es/blog/bezopasnost-sayta/",
        },
        {
          label: "Copyright en Instagram",
          href: "/es/blog/avtorskie-prava-instagram/",
        },
      ],
    },
  ],
  related: [
    "url-adres",
    "chto-takoe-ssylka",
    "bezopasnost-sayta",
    "avtorskie-prava-instagram",
    "veb-arhiv",
  ],
};
