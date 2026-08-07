import type { BlogPost } from "../../../data/blog";

/** EN overlay for excel-google-tablitsy — same structure as RU JSON. */
export const excelGoogleTablitsyEn: BlogPost = {
  slug: "excel-google-tablitsy",
  title: "Excel and Google Sheets for SEO: core cleanup and formulas",
  date: "2019-05-24",
  category: "SEO",
  cover: "/images/blog/excel-google-tablitsy/cover-en.webp",
  excerpt:
    "How to process semantics in Excel and Google Sheets: strip links and pluses, spaces, duplicates, negatives, sorts, and useful formulas without Key Collector.",
  lead: [
    "Building a semantic core is also spreadsheet routine: Wordstat exports, competitor lists, frequencies, cluster tags. Excel and Google Sheets cover 80% of daily cleanup if you know a few moves.",
    "Below — operations you most often need with the core: from “remove hyperlinks” to finding duplicates and negatives. Formulas are shown in Excel’s Russian locale where relevant; in Google Sheets function names are usually English (TRIM, UNIQUE, IF).",
  ],
  faq: [
    {
      q: "Excel or Google Sheets?",
      a: "For collaboration and sharing, Sheets is easier. For heavy files and complex pivots — often Excel. The operation logic is the same.",
    },
    {
      q: "Do spreadsheets replace Key Collector?",
      a: "No. KC and peers speed collection and frequencies. Spreadsheets — cleanup, merges, filters, and reports on already exported data.",
    },
    {
      q: "Why are there links in cells after Wordstat?",
      a: "Browser copy-paste pulls hyperlinks. Remove them or paste “values only” / via Wordstat Assistant.",
    },
    {
      q: "How to remove duplicate queries fast?",
      a: "In Sheets — UNIQUE; in Excel — “Remove duplicates” or conditional formatting + filter. Normalize case and spaces first.",
    },
    {
      q: "What does TRIM / СЖПРОБЕЛЫ do?",
      a: "Trims edge spaces and collapses repeats inside the string. In Sheets — TRIM.",
    },
    {
      q: "Must you memorize every formula?",
      a: "No. Keep a cheat sheet: TRIM, FIND/REPLACE, IF, COUNTIF, VLOOKUP/XLOOKUP, UNIQUE.",
    },
    {
      q: "Is color fill for clusters OK?",
      a: "Yes as a work mark. For reports a separate “cluster” column is better — easier to filter and pivot.",
    },
    {
      q: "Does this speed up TOP?",
      a: "Spreadsheets save time preparing the core. Cluster ranks build after on-site work planned over months (TOP guide 2–6 months) — not from a cell formula.",
    },
  ],
  sections: [
    {
      title: "Why an SEO needs spreadsheets",
      level: 2,
      paras: [
        "The core, negatives, URL map, ranks, writer briefs — all live well in one filtered file. A sheet doesn’t replace a crawler and webmaster panels, but it kills copy-paste chaos.",
        "Agree on columns: query, frequency, cluster, target URL, status, comment. That makes it easier to join semantics with landings and an effectiveness report.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "cleaning a Wordstat export;",
            "dedupe and normalization;",
            "negatives;",
            "sort by frequency;",
            "merging lists and tagging clusters.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Basic cleanup: links, characters, spaces",
      level: 2,
      paras: [
        "After Wordstat copy-paste, remove hyperlinks: right-click the range → “Remove hyperlinks” (in Sheets — unlink / paste without formatting). Otherwise filters and formulas behave oddly.",
        "Special characters like “+” from search operators — remove via Find and Replace (Ctrl/Cmd+H): find `+`, replace with empty. Extra spaces — `=TRIM(A2)` (Excel RU locale: `=СЖПРОБЕЛЫ(A2)`), then paste values on top.",
      ],
      lists: [
        {
          intro: "Cleanup order:",
          items: [
            "paste without links;",
            "replace junk characters;",
            "TRIM / СЖПРОБЕЛЫ;",
            "lowercase when needed;",
            "only then — duplicates and negatives.",
          ],
        },
      ],
    },
    {
      title: "Sorting, duplicates, and lookalike phrases",
      level: 2,
      paras: [
        "Two columns “query | frequency”: select both and sort by frequency or alphabetically by query. Easier to cut the long-tail or find head candidates for a cluster.",
        "Duplicates: conditional formatting “duplicate values” or “Remove duplicates”. In Google Sheets `=UNIQUE(A2:A)` is handy. Normalize the string before dedupe — otherwise “Buy windows” and “buy  windows” stay different.",
      ],
      lists: [
        {
          intro: "List quality check:",
          items: [
            "no blank rows inside the range;",
            "frequency as a number, not text;",
            "duplicates removed after TRIM;",
            "a separate column for the original phrasing if you need history.",
          ],
        },
      ],
    },
    {
      title: "Negatives and filtering",
      level: 2,
      paras: [
        "Keep a “negatives” sheet and tag the core: `=IF(COUNTIF(negatives!A:A,\"*\"&A2&\"*\"),\"minus\",\"ok\")` — a simplified scheme; in practice substring search or a script is common. In Sheets, FILTER and REGEXMATCH help.",
        "Don’t negative brand and important modifiers blindly. Cross-check the audience anti-persona: another city, “free”, a rival brand — typical candidates.",
      ],
      lists: [
        {
          intro: "Negatives workflow:",
          items: [
            "a separate negatives dictionary;",
            "tag first, don’t silently delete;",
            "review disputed phrases;",
            "export a clean list into clustering.",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Color, clusters, and extra formulas",
      level: 2,
      paras: [
        "Color fill helps visually, but at scale a “cluster” / “intent” column is better. Excel can sort “by color”; in Sheets a filter on a label column is more reliable.",
        "Useful formulas: IF, CONCAT/&, VLOOKUP/XLOOKUP to pull URLs, date diffs/TODAY for task deadlines, COUNTIF to check cluster size. Don’t complicate the file until it’s unopenable — prefer several sheets.",
      ],
      lists: [
        {
          intro: "Cheat sheet:",
          items: [
            "TRIM — spaces;",
            "UNIQUE / remove duplicates;",
            "FIND+REPLACE — character cleanup;",
            "IF / FILTER — negatives and slices;",
            "XLOOKUP — query→URL join.",
          ],
        },
      ],
      links: [
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
      ],
    },
    {
      title: "A work rhythm without a formula cult",
      level: 2,
      paras: [
        "Make an agency/team file template and copy it per project. Document 5–7 mandatory cleanup steps — a beginner shouldn’t reinvent the process every time.",
        "Spreadsheets speed core prep. Next come landings, tech, and content: TOP for priority phrases planned 2–6 months after work starts — not “after UNIQUE”.",
      ],
      lists: [
        {
          intro: "End-of-session outcome:",
          items: [
            "a clean list without links and duplicates;",
            "negatives agreed;",
            "clusters and URLs filled;",
            "file shared with the team and permissions.",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Core cleanup in spreadsheets takes hours/days. That’s a prep stage, not a TOP-10 date.",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "effektivnost-seo",
    "tselevaya-auditoriya",
    "programmy-seo",
    "samostoyatelnoe-seo",
  ],
};
