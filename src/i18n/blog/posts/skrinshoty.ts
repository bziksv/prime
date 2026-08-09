import type { BlogPost } from "../../../data/blog";

/** EN overlay for skrinshoty — same structure as RU JSON. */
export const skrinshotyEn: BlogPost = {
  slug: "skrinshoty",
  title: "Screenshots: why you need them and how to take them on PC and phone",
  date: "2021-09-03",
  category: "Content marketing",
  cover: "/images/blog/skrinshoty/cover-en.webp",
  excerpt:
    "What a screenshot is, where it’s used in support and training, how to capture the screen on Windows, macOS, iOS, and Android, and how editors help.",
  lead: [
    "A screenshot is a capture of the whole screen or a selected area. In guides, support tickets, and reports it saves paragraphs of explanation: “here’s where it broke.”",
    "Below: why people take screenshots, built-in options on computer and phone, and basic rules: what to hide, how to annotate, and when a short screen recording is better.",
  ],
  faq: [
    {
      q: "Why is a screenshot better than a long description?",
      a: "It shows the UI as-is: menu items, the error, the URL. Less confusion in support and guides.",
    },
    {
      q: "How do I take a screenshot fast on Windows?",
      a: "Win + Shift + S — region/window/screen to clipboard. Print Screen — full screen; Alt + Print Screen — active window. Then paste into Paint/a messenger or use Snipping Tool / Snip & Sketch.",
    },
    {
      q: "How do I take a screenshot on a Mac?",
      a: "Cmd + Shift + 3 — full screen; Cmd + Shift + 4 — region; Cmd + Shift + 4, then Space — a window. Files usually land on the desktop.",
    },
    {
      q: "Do I need third-party apps?",
      a: "For one-off shots — no. Editors (arrows, blur, long scroll-shots) help documentation teams; pick them on purpose, without giving cloud tools extra rights.",
    },
    {
      q: "What must I hide?",
      a: "Passwords, tokens, client personal data, card numbers, internal URLs with secrets. Blur or crop before sending.",
    },
  ],
  sections: [
    {
      title: "Why screenshots matter",
      level: 2,
      paras: [
        "A screen capture freezes the UI at the moment of a problem or a guide step. It’s a shared language between user, support, and the guide author.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "support: error, code, version",
            "training: “click here” without a wall of text",
            "reports and bug reports",
            "design/layout review",
            "proof of an account state (careful with personal data)",
          ],
        },
      ],
    },
    {
      title: "How to take one on a computer",
      level: 2,
      paras: [
        "Windows: Win + Shift + S opens the modern screen snip. Classic Print Screen copies the screen to the clipboard — paste into an editor and save. Snipping Tool / Snip & Sketch adds captions and simple shapes.",
        "macOS: Cmd + Shift + 3/4 as above; holding Control puts the shot on the clipboard instead of a file.",
      ],
      lists: [
        {
          intro: "A mini ritual for a good shot:",
          items: [
            "close extra tabs and notifications",
            "zoom if small labels matter",
            "capture only the needed area",
            "add an arrow/frame at the action point",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "For long pages a browser scroll-shot (DevTools / extensions) or a short Loom/screen recording is better — one frame doesn’t always fit the scenario.",
        },
      ],
    },
    {
      title: "Phone: iOS and Android",
      level: 2,
      paras: [
        "iPhone with Face ID: side button + volume up. With Touch ID: side button or the Sleep/Wake button + Home. The shot goes to Photos; then mark it up.",
        "Android: usually power + volume down; some brands use a palm-edge gesture or a Control Center item. Exact gestures depend on the skin — check the device help.",
      ],
      lists: [
        {
          intro: "After capture:",
          items: [
            "crop the excess",
            "blur chats and personal data",
            "don’t publish others’ messages without consent",
          ],
        },
      ],
    },
    {
      title: "Editors and cloud tools",
      level: 2,
      paras: [
        "Third-party tools add cloud, arrow templates, video capture. Names and plans change; what matters are features: region, annotations, blur, team access.",
        "For internal docs, OS built-ins often suffice. If you upload a shot to the cloud — check it for secrets.",
      ],
      lists: [
        {
          intro: "When software is worth it:",
          items: [
            "daily guides with a shared arrow style",
            "screen recording + frames in one tool",
            "a shared screenshot library for the team",
          ],
        },
      ],
    },
    {
      title: "Bottom line",
      level: 2,
      paras: [
        "A screenshot is a fast way to show the UI. Start with built-in hotkeys, crop and annotate what matters, hide personal data. For complex flows a short screen video beats ten unreadable frames.",
      ],
    },
  ],
};

/** ES overlay for skrinshoty — same structure as RU JSON / EN. */
export const skrinshotyEs: BlogPost = {
  slug: "skrinshoty",
  title: "Capturas de pantalla: para qué sirven y cómo hacerlas en PC y móvil",
  date: "2021-09-03",
  category: "Content marketing",
  cover: "/images/blog/skrinshoty/cover.webp",
  excerpt:
    "Qué es un screenshot, dónde se usa en soporte y formación, cómo capturar la pantalla en Windows, macOS, iOS y Android, y cómo ayudan los editores.",
  lead: [
    "Un screenshot es una captura de toda la pantalla o de un área seleccionada. En guías, tickets de soporte e informes ahorra párrafos de explicación: «aquí es donde se rompió».",
    "Abajo: por qué la gente hace capturas, opciones integradas en ordenador y móvil, y reglas básicas: qué ocultar, cómo anotar y cuándo conviene un screen recording corto.",
  ],
  faq: [
    {
      q: "¿Por qué un screenshot es mejor que una descripción larga?",
      a: "Muestra la UI tal cual: ítems del menú, el error, la URL. Menos confusión en soporte y guías.",
    },
    {
      q: "¿Cómo hago un screenshot rápido en Windows?",
      a: "Win + Shift + S — región/ventana/pantalla al portapapeles. Print Screen — pantalla completa; Alt + Print Screen — ventana activa. Luego pega en Paint/un messenger o usa Snipping Tool / Snip & Sketch.",
    },
    {
      q: "¿Cómo hago un screenshot en un Mac?",
      a: "Cmd + Shift + 3 — pantalla completa; Cmd + Shift + 4 — región; Cmd + Shift + 4 y luego Space — una ventana. Los archivos suelen ir al escritorio.",
    },
    {
      q: "¿Hacen falta apps de terceros?",
      a: "Para capturas puntuales — no. Los editores (flechas, blur, scroll-shots largos) ayudan a equipos de documentación; elígelos a propósito, sin dar derechos de más a herramientas en la nube.",
    },
    {
      q: "¿Qué debo ocultar?",
      a: "Contraseñas, tokens, datos personales de clientes, números de tarjeta, URLs internas con secretos. Difumina o recorta antes de enviar.",
    },
  ],
  sections: [
    {
      title: "Por qué importan los screenshots",
      level: 2,
      paras: [
        "Una captura congela la UI en el momento de un problema o de un paso de la guía. Es un lenguaje compartido entre usuario, soporte y el autor de la guía.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "soporte: error, código, versión",
            "formación: «haz clic aquí» sin un muro de texto",
            "informes y bug reports",
            "revisión de diseño/layout",
            "prueba del estado de una cuenta (cuidado con datos personales)",
          ],
        },
      ],
    },
    {
      title: "Cómo hacer una en el ordenador",
      level: 2,
      paras: [
        "Windows: Win + Shift + S abre el snip moderno. El Print Screen clásico copia la pantalla al portapapeles — pega en un editor y guarda. Snipping Tool / Snip & Sketch añade leyendas y formas simples.",
        "macOS: Cmd + Shift + 3/4 como arriba; manteniendo Control la captura va al portapapeles en lugar de a un archivo.",
      ],
      lists: [
        {
          intro: "Un mini ritual para una buena captura:",
          items: [
            "cerrar pestañas y notificaciones de más",
            "hacer zoom si importan etiquetas pequeñas",
            "capturar solo el área necesaria",
            "añadir una flecha/marco en el punto de acción",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Para páginas largas conviene un scroll-shot del navegador (DevTools / extensiones) o un Loom/screen recording corto — un solo frame no siempre encaja con el escenario.",
        },
      ],
    },
    {
      title: "Móvil: iOS y Android",
      level: 2,
      paras: [
        "iPhone con Face ID: botón lateral + subir volumen. Con Touch ID: botón lateral o Sleep/Wake + Home. La captura va a Fotos; luego márcala.",
        "Android: suele ser power + bajar volumen; algunas marcas usan un gesto con el borde de la palma o un ítem del Control Center. Los gestos exactos dependen de la skin — revisa la ayuda del dispositivo.",
      ],
      lists: [
        {
          intro: "Tras la captura:",
          items: [
            "recortar el exceso",
            "difuminar chats y datos personales",
            "no publicar mensajes ajenos sin consentimiento",
          ],
        },
      ],
    },
    {
      title: "Editores y herramientas en la nube",
      level: 2,
      paras: [
        "Las herramientas de terceros añaden nube, plantillas de flechas, captura de vídeo. Nombres y planes cambian; lo que importa son las funciones: región, anotaciones, blur, acceso de equipo.",
        "Para docs internas a menudo bastan las integradas del SO. Si subes una captura a la nube — revísala por secretos.",
      ],
      lists: [
        {
          intro: "Cuándo merece la pena el software:",
          items: [
            "guías diarias con un estilo compartido de flechas",
            "screen recording + frames en una sola herramienta",
            "una librería compartida de screenshots para el equipo",
          ],
        },
      ],
    },
    {
      title: "Cierre",
      level: 2,
      paras: [
        "Un screenshot es una forma rápida de mostrar la UI. Empieza con atajos integrados, recorta y anota lo que importa, oculta datos personales. Para flujos complejos un vídeo corto de pantalla gana a diez frames ilegibles.",
      ],
    },
  ],
};
