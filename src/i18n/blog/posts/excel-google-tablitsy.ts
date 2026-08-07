import type { BlogPost } from "../../../data/blog";

/** EN overlay for excel-google-tablitsy — same structure as RU JSON. */
export const excelGoogleTablitsyEn: BlogPost = {
  slug: "excel-google-tablitsy",
  title: "Excel and Google Sheets for SEO: keyword cleanup and formulas",
  date: "2019-05-24",
  category: "SEO",
  cover: "/images/blog/excel-google-tablitsy/cover-en.webp",
  excerpt:
    "How to process keywords in Excel and Google Sheets: strip links and plus signs, fix spaces, remove duplicates, build negatives, sort, and use useful formulas — without Key Collector.",
  lead: [
    "Building a keyword set is also spreadsheet work: Wordstat exports, competitor lists, frequencies, cluster tags. Excel and Google Sheets cover about 80% of daily cleanup if you know a few moves.",
    "The operations you’ll use most often on the keyword set — from “remove hyperlinks” to finding duplicates and negatives. Formulas below use Excel’s Russian locale where it matters; in Google Sheets the function names are usually English (TRIM, UNIQUE, IF).",
  ],
  faq: [
    {
      q: "Should I use Excel or Google Sheets?",
      a: "For collaboration and sharing, Sheets is easier. For heavy files and complex pivots, Excel often wins. The operation logic is the same.",
    },
    {
      q: "Do spreadsheets replace Key Collector?",
      a: "No. Key Collector and similar tools speed collection and frequency pulls. Spreadsheets are for cleanup, merges, filters, and reports on data you’ve already exported.",
    },
    {
      q: "Why are there links in cells after Wordstat?",
      a: "Browser copy-paste pulls hyperlinks. Remove them, or paste values only / use Wordstat Assistant.",
    },
    {
      q: "How do I remove duplicate queries fast?",
      a: "In Sheets, use UNIQUE. In Excel, use Remove Duplicates or conditional formatting plus a filter. Normalize case and spaces first.",
    },
    {
      q: "What does TRIM / СЖПРОБЕЛЫ do?",
      a: "It trims edge spaces and collapses repeats inside the string. In Sheets, that’s TRIM.",
    },
    {
      q: "Must I memorize every formula?",
      a: "No. Keep a cheat sheet: TRIM, FIND/REPLACE, IF, COUNTIF, VLOOKUP/XLOOKUP, UNIQUE.",
    },
    {
      q: "Is color fill for clusters OK?",
      a: "Yes as a working mark. For reports, a separate “cluster” column is better — easier to filter and pivot.",
    },
    {
      q: "Does this speed up rankings?",
      a: "Spreadsheets save time preparing the keyword set. Cluster ranks build after on-site work over months (ranking timeline of 2–6 months) — not from a cell formula.",
    },
  ],
  sections: [
    {
      title: "Why an SEO needs spreadsheets",
      level: 2,
      paras: [
        "The keyword set, negatives, URL map, ranks, and writer briefs all live well in one filtered file. A sheet doesn’t replace a crawler or webmaster tools, but it kills copy-paste chaos.",
        "Agree on columns: query, frequency, cluster, target URL, status, comment. That makes it easier to join keywords with landings and an effectiveness report.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "cleaning a Wordstat export",
            "dedupe and normalization",
            "negatives",
            "sort by frequency",
            "merging lists and tagging clusters",
          ],
        },
      ],
      links: [
        {
          label: "Keyword set",
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
        "After a Wordstat copy-paste, remove hyperlinks: right-click the range → Remove hyperlinks (in Sheets, unlink / paste without formatting). Otherwise filters and formulas behave oddly.",
        "Special characters like “+” from search operators — remove via Find and Replace (Ctrl/Cmd+H): find `+`, replace with empty. Extra spaces — `=TRIM(A2)` (Excel RU locale: `=СЖПРОБЕЛЫ(A2)`), then paste values on top.",
      ],
      lists: [
        {
          intro: "Cleanup order:",
          items: [
            "paste without links",
            "replace junk characters",
            "TRIM / СЖПРОБЕЛЫ",
            "lowercase when needed",
            "only then run duplicates and negatives",
          ],
        },
      ],
    },
    {
      title: "Sorting, duplicates, and lookalike phrases",
      level: 2,
      paras: [
        "Two columns “query | frequency”: select both and sort by frequency or alphabetically by query. It’s easier to cut the long tail or find head candidates for a cluster.",
        "Duplicates: conditional formatting for duplicate values, or Remove Duplicates. In Google Sheets, `=UNIQUE(A2:A)` is handy. Normalize the string before dedupe — otherwise “Buy windows” and “buy  windows” stay different.",
      ],
      lists: [
        {
          intro: "List quality check:",
          items: [
            "no blank rows inside the range",
            "frequency as a number, not text",
            "duplicates removed after TRIM",
            "a separate column for the original phrasing if you need history",
          ],
        },
      ],
    },
    {
      title: "Negatives and filtering",
      level: 2,
      paras: [
        "Keep a “negatives” sheet and tag the keyword set: `=IF(COUNTIF(negatives!A:A,\"*\"&A2&\"*\"),\"minus\",\"ok\")` — a simplified approach; in practice substring search or a script is common. In Sheets, FILTER and REGEXMATCH help.",
        "Don’t negative brand and important modifiers blindly. Cross-check the audience anti-persona: another city, “free”, a rival brand — typical candidates.",
      ],
      lists: [
        {
          intro: "Negatives workflow:",
          items: [
            "a separate negatives dictionary",
            "tag first, don’t silently delete",
            "review disputed phrases",
            "export a clean list into clustering",
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
        "Color fill helps visually, but at scale a “cluster” / “intent” column is better. Excel can sort by color; in Sheets a filter on a label column is more reliable.",
        "Useful formulas: IF, CONCAT/&, VLOOKUP/XLOOKUP to pull URLs, date diffs/TODAY for task deadlines, COUNTIF to check cluster size. Don’t complicate the file until it won’t open — prefer several sheets.",
      ],
      lists: [
        {
          intro: "Cheat sheet:",
          items: [
            "TRIM — spaces",
            "UNIQUE / remove duplicates",
            "FIND+REPLACE — character cleanup",
            "IF / FILTER — negatives and slices",
            "XLOOKUP — query→URL join",
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
        "Make an agency or team file template and copy it per project. Document five to seven mandatory cleanup steps — a beginner shouldn’t reinvent the process every time.",
        "Spreadsheets speed keyword prep. Next come landings, tech, and content: ranking for priority phrases is planned 2–6 months after work starts — not “after UNIQUE.”",
      ],
      lists: [
        {
          intro: "End-of-session outcome:",
          items: [
            "a clean list without links and duplicates",
            "negatives agreed",
            "clusters and URLs filled",
            "file shared with the team and permissions set",
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
          text: "Keyword cleanup in spreadsheets takes hours or days. That’s a prep stage, not a top-10 date.",
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
