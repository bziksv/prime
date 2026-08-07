import type { BlogPost } from "../../../data/blog";

/** EN overlay for json — same structure as RU JSON. */
export const jsonEn: BlogPost = {
  slug: "json",
  title: "JSON: what it is, how to open it, and where it’s used",
  date: "2020-03-26",
  category: "Digital marketing",
  cover: "/images/blog/json/cover-en.webp",
  excerpt:
    "What JSON is: a text format for data exchange, object and array syntax, Ajax, parse vs eval safety, and how to open a .json file.",
  lead: [
    "JSON (JavaScript Object Notation) is a text format for exchanging structured data between programs and languages. It comes from the JavaScript ecosystem but doesn’t depend on the language: Python, PHP, Go, mobile apps, and APIs all read it.",
    "JSON shows up in APIs, configs, and feeds — learn the syntax, how to open a file, and why you mustn’t feed a foreign response into `eval`. Old IE version lists and outdated editors are skipped as noise.",
  ],
  faq: [
    {
      q: "Is JSON a programming language?",
      a: "No. It’s a data format: objects, arrays, strings, numbers, booleans, null. You don’t write programs in it — you exchange data with it.",
    },
    {
      q: "How is it different from XML?",
      a: "Usually more compact and simpler for JS/APIs. XML is stronger with schemas and mixed markup content. For web APIs today, JSON is more common.",
    },
    {
      q: "How do I open a .json file?",
      a: "Any text editor or IDE with highlighting. In a browser — an extension/viewer or paste into an online validator. For production, an editor with a formatter is better.",
    },
    {
      q: "Can I parse JSON with eval?",
      a: "Not in real projects. Use `JSON.parse` / the language’s built-in parsers. `eval` executes code and opens XSS/injection risks.",
    },
    {
      q: "What is JSON5?",
      a: "An extension with comments and looser syntax. Handy in human configs; for API exchange you usually stay with strict JSON.",
    },
  ],
  sections: [
    {
      title: "Where JSON is used",
      level: 2,
      paras: [
        "Web classic: the browser requests data from the server (Ajax / `fetch`), gets JSON, and updates the page without a full reload — feed, catalog, cart, dashboard.",
        "Also: REST/GraphQL responses, front-end configs, local settings storage, exchange between microservices and a mobile client.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "site and mobile app APIs;",
            "loading blocks without a full reload;",
            "exports and integrations;",
            "dev-tool configs.",
          ],
        },
      ],
      links: [
        {
          label: "HTTP headers",
          href: "/en/blog/http-zagolovki/",
        },
      ],
    },
    {
      title: "Syntax: objects and arrays",
      level: 2,
      paras: [
        "Two frames: object `{ \"key\": value }` and array `[ value1, value2 ]`. Object keys are quoted strings. Values: string, number, `true`/`false`, `null`, nested object or array.",
        "Store phones and leading zeros as strings: `\"84959000000\"`, not numbers — or you lose the format. Strict JSON doesn’t allow a trailing comma after the last element.",
        "Spaces and line breaks help humans; over the wire you often send a compact one-liner — same meaning.",
      ],
      lists: [
        {
          intro: "Common beginner mistakes:",
          items: [
            "single quotes instead of double;",
            "comma after the last field;",
            "`//` comments in strict JSON;",
            "numbers where a string is needed (phone, SKU).",
          ],
        },
      ],
      notes: [
        {
          title: "Example",
          text: '`{"name":"Anna","tags":["seo","content"],"active":true}` — an object with an array and a boolean. Nest another object as a key value — you get a tree of any depth.',
          kind: "tip",
        },
      ],
    },
    {
      title: "Ajax, API, and security",
      level: 2,
      paras: [
        "The client requests a URL; the server responds with a JSON body and a header like `Content-Type: application/json`. In modern JS, `fetch` + `response.json()` is enough — no `eval`.",
        "Historical same-origin workarounds (JSONP, injecting `<script>`) widened the attack surface. For new projects — CORS and plain JSON over HTTPS.",
        "Never execute foreign JSON as code. Parse with a built-in parser and validate fields on the server if data goes into a DB or affects permissions.",
      ],
      lists: [
        {
          intro: "Security rules:",
          items: [
            "only `JSON.parse` / language equivalent;",
            "don’t trust client fields without checks;",
            "HTTPS for sensitive responses;",
            "don’t put secrets in public front-end JSON.",
          ],
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
      ],
    },
    {
      title: "How to open and edit .json",
      level: 2,
      paras: [
        "The file is plain UTF-8 text. VS Code, Cursor, Notepad++, Sublime, or a system text editor is enough. IDEs highlight brackets and flag syntax errors.",
        "Heavy all-in-one tools like old XML editors aren’t required. For a quick check, use the editor’s formatter and online validators — don’t paste production secrets there.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "an editor with JSON highlighting;",
            "pretty-print for reading;",
            "validation before shipping a feed/config;",
            "diff in git, not blind edits on the server.",
          ],
        },
      ],
      links: [
        {
          label: "YML file for Market",
          href: "/en/blog/yml-fayl/",
        },
      ],
    },
  ],
  closing: [
    "JSON is a universal text container for objects and arrays between browser, server, and services. Learn the syntax, open files in a proper editor, and parse only with safe tools — no `eval` and no outdated JSONP tricks.",
  ],
  related: [
    "yml-fayl",
    "http-zagolovki",
    "parsing-python",
    "parsing",
    "bezopasnost-sayta",
    "protokol-http",
  ],
};
