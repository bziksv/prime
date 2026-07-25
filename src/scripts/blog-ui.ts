import { blogSearchIndex } from "../data/blog";
import { initBlogArticleInteract } from "./blog-article-interact";
import {
  formatReadingTime,
  formatViews,
  recordBlogView,
  searchBlog,
  sharePost,
  shareUrl,
} from "./blog-smart";

function qs<T extends Element>(sel: string, root: ParentNode = document): T | null {
  return root.querySelector(sel) as T | null;
}

function qsa<T extends Element>(sel: string, root: ParentNode = document): T[] {
  return [...root.querySelectorAll(sel)] as T[];
}

function whereLabel(matchedIn: string[]): string {
  const map: Record<string, string> = {
    title: "заголовок",
    heading: "раздел",
    excerpt: "анонс",
    body: "текст",
  };
  if (!matchedIn.length) return "";
  return matchedIn.map((m) => map[m] ?? m).join(" · ");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderList(
  hits: ReturnType<typeof searchBlog>,
  grid: HTMLElement,
  empty: HTMLElement,
  query: string,
) {
  if (!hits.length) {
    grid.innerHTML = "";
    grid.hidden = true;
    empty.hidden = false;
    empty.textContent = query
      ? `Ничего не нашли по «${query}». Попробуйте «семантика», «аудит» или «структура».`
      : "В этой рубрике пока нет статей.";
    return;
  }

  empty.hidden = true;
  grid.hidden = false;
  grid.innerHTML = hits
    .map(({ doc, snippet, matchedIn, score }) => {
      const where = query ? whereLabel(matchedIn) : "";
      const scoreHint =
        query && score > 0
          ? `<span class="b-card__match">${where || "совпадение"}</span>`
          : "";
      return `<a href="/blog/${doc.slug}/" class="b-card" data-slug="${doc.slug}" data-category="${escapeHtml(doc.category)}">
        <div class="b-card__media"><img src="${doc.cover}" alt="" loading="lazy" /></div>
        <div class="b-card__body">
          <div class="b-card__meta">
            <span class="b-card__cat">${escapeHtml(doc.category)}</span>
            <span class="b-meta-chip">${formatReadingTime(doc.readingMinutes)}</span>
            <span class="b-meta-chip">${formatViews(doc.baseViews)} просм.</span>
          </div>
          <h3>${escapeHtml(doc.title)}</h3>
          <p class="b-card__snippet">${snippet}</p>
          ${scoreHint}
          <span class="b-read">
            Читать
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        </div>
      </a>`;
    })
    .join("");
}

function pluralArticles(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "статья";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "статьи";
  return "статей";
}

type MigrateSort =
  | "relevance"
  | "title-asc"
  | "title-desc"
  | "words-asc"
  | "words-desc"
  | "date-asc"
  | "date-desc";

type MigrateRow = {
  slug: string;
  title: string;
  href: string;
  words: number;
  date: string;
  category: string;
  score: number;
};

function initMigrateArticles() {
  const root = qs<HTMLElement>("[data-migrate-articles]");
  if (!root) return;

  const input = qs<HTMLInputElement>("[data-migrate-search]", root);
  const clearBtn = qs<HTMLButtonElement>("[data-migrate-search-clear]", root);
  const sortSelect = qs<HTMLSelectElement>("[data-migrate-sort]", root);
  const tbody = qs<HTMLElement>("[data-migrate-tbody]", root);
  const empty = qs<HTMLElement>("[data-migrate-empty]", root);
  const countEl = qs<HTMLElement>("[data-migrate-count]", root);
  const status = qs<HTMLElement>("[data-migrate-status]", root);
  const sortBtns = qsa<HTMLButtonElement>("[data-migrate-sort-btn]", root);
  const table = qs<HTMLTableElement>(".b-migrate__table", root);
  if (!input || !sortSelect || !tbody || !empty || !table) return;

  const wordsBySlug = new Map<string, number>();
  qsa<HTMLElement>("tr[data-slug]", tbody).forEach((tr) => {
    const slug = tr.dataset.slug;
    if (!slug) return;
    wordsBySlug.set(slug, Number(tr.dataset.words || "0"));
  });

  let query = "";
  let sort = (sortSelect.value as MigrateSort) || "title-asc";

  const syncSortButtons = () => {
    sortBtns.forEach((btn) => {
      const key = btn.dataset.migrateSortBtn;
      btn.classList.remove("is-asc", "is-desc");
      if (key === "title" && sort === "title-asc") btn.classList.add("is-asc");
      if (key === "title" && sort === "title-desc") btn.classList.add("is-desc");
      if (key === "words" && sort === "words-asc") btn.classList.add("is-asc");
      if (key === "words" && sort === "words-desc") btn.classList.add("is-desc");
    });
  };

  const buildRows = (): MigrateRow[] => {
    const limit = blogSearchIndex.length;
    const hits = searchBlog(blogSearchIndex, query, { limit });
    const scoreBySlug = new Map(hits.map((h) => [h.doc.slug, h.score]));

    let rows: MigrateRow[];
    if (query.trim()) {
      const qNorm = query.trim().toLowerCase().replace(/ё/g, "е");
      const bySlug = new Map<string, MigrateRow>();
      for (const h of hits) {
        bySlug.set(h.doc.slug, {
          slug: h.doc.slug,
          title: h.doc.title,
          href: `/blog/${h.doc.slug}/`,
          words: wordsBySlug.get(h.doc.slug) ?? 0,
          date: h.doc.date,
          category: h.doc.category,
          score: h.score,
        });
      }
      // прямое попадание в slug/путь, если умный поиск не поднял
      for (const doc of blogSearchIndex) {
        if (bySlug.has(doc.slug)) continue;
        const hay = `${doc.slug} /blog/${doc.slug}/`.toLowerCase().replace(/ё/g, "е");
        if (hay.includes(qNorm.replace(/\s+/g, "-")) || hay.includes(qNorm.replace(/\s+/g, ""))) {
          bySlug.set(doc.slug, {
            slug: doc.slug,
            title: doc.title,
            href: `/blog/${doc.slug}/`,
            words: wordsBySlug.get(doc.slug) ?? 0,
            date: doc.date,
            category: doc.category,
            score: 0.3,
          });
        }
      }
      rows = [...bySlug.values()];
    } else {
      rows = blogSearchIndex.map((doc) => ({
        slug: doc.slug,
        title: doc.title,
        href: `/blog/${doc.slug}/`,
        words: wordsBySlug.get(doc.slug) ?? 0,
        date: doc.date,
        category: doc.category,
        score: scoreBySlug.get(doc.slug) ?? 0,
      }));
    }

    const effectiveSort =
      sort === "relevance" && !query.trim() ? "title-asc" : sort;

    rows.sort((a, b) => {
      switch (effectiveSort) {
        case "relevance":
          return b.score - a.score || a.title.localeCompare(b.title, "ru");
        case "title-desc":
          return b.title.localeCompare(a.title, "ru");
        case "words-asc":
          return a.words - b.words || a.title.localeCompare(b.title, "ru");
        case "words-desc":
          return b.words - a.words || a.title.localeCompare(b.title, "ru");
        case "date-asc":
          return a.date.localeCompare(b.date) || a.title.localeCompare(b.title, "ru");
        case "date-desc":
          return b.date.localeCompare(a.date) || a.title.localeCompare(b.title, "ru");
        case "title-asc":
        default:
          return a.title.localeCompare(b.title, "ru");
      }
    });

    return rows;
  };

  const render = () => {
    const rows = buildRows();
    if (!rows.length) {
      tbody.innerHTML = "";
      table.hidden = true;
      empty.hidden = false;
    } else {
      table.hidden = false;
      empty.hidden = true;
      tbody.innerHTML = rows
        .map(
          (a) => `<tr data-slug="${escapeHtml(a.slug)}" data-title="${escapeHtml(a.title)}" data-words="${a.words}" data-date="${escapeHtml(a.date)}" data-category="${escapeHtml(a.category)}">
            <td><a href="${escapeHtml(a.href)}">${escapeHtml(a.title)}</a></td>
            <td><a class="b-migrate__path" href="${escapeHtml(a.href)}">${escapeHtml(a.href)}</a></td>
            <td><span class="b-migrate__words">${a.words.toLocaleString("ru-RU")}</span></td>
          </tr>`,
        )
        .join("");
    }

    if (countEl) countEl.textContent = String(rows.length);
    if (clearBtn) clearBtn.hidden = !query.trim();
    syncSortButtons();

    if (status) {
      if (query.trim()) {
        status.textContent =
          rows.length === 0
            ? `Нет совпадений по «${query.trim()}»`
            : `Нашли ${rows.length} · умный поиск по заголовкам, разделам и тексту`;
      } else {
        status.textContent = `${rows.length} ${pluralArticles(rows.length)} · умный поиск и сортировка без пагинации`;
      }
    }
  };

  input.addEventListener("input", () => {
    query = input.value;
    if (query.trim() && sortSelect.value === "title-asc") {
      sort = "relevance";
      sortSelect.value = "relevance";
    }
    render();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      input.value = "";
      query = "";
      render();
      input.blur();
    }
  });

  clearBtn?.addEventListener("click", () => {
    input.value = "";
    query = "";
    input.focus();
    render();
  });

  sortSelect.addEventListener("change", () => {
    sort = (sortSelect.value as MigrateSort) || "title-asc";
    render();
  });

  sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.migrateSortBtn;
      if (key === "title") {
        sort = sort === "title-asc" ? "title-desc" : "title-asc";
      } else if (key === "words") {
        sort = sort === "words-desc" ? "words-asc" : "words-desc";
      } else {
        return;
      }
      sortSelect.value = sort;
      render();
    });
  });

  render();
}

function initIndex() {
  const root = qs<HTMLElement>("[data-blog-index]");
  if (!root) return;

  const docs = blogSearchIndex;
  const input = qs<HTMLInputElement>("[data-blog-search]", root);
  const clearBtn = qs<HTMLButtonElement>("[data-blog-search-clear]", root);
  const grid = qs<HTMLElement>("[data-blog-grid]", root);
  const empty = qs<HTMLElement>("[data-blog-empty]", root);
  const status = qs<HTMLElement>("[data-blog-status]", root);
  const featured = qs<HTMLElement>("[data-blog-featured]", root);
  const chips = qsa<HTMLButtonElement>("[data-blog-cat]", root);
  const kbd = qs<HTMLElement>(".b-search__kbd", root);
  const moreWrap = qs<HTMLElement>("[data-blog-more]", root);
  const moreBtn = qs<HTMLButtonElement>("[data-blog-more-btn]", root);
  const moreMeta = qs<HTMLElement>("[data-blog-more-meta]", root);
  if (!input || !grid || !empty) return;

  const PAGE_SIZE = 24;

  if (kbd) {
    const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
    kbd.textContent = isMac ? "⌘K" : "Ctrl K";
  }

  const params = new URLSearchParams(location.search);
  let category: string | null = "all";
  let query = params.get("q")?.trim() ?? "";
  let visible = PAGE_SIZE;
  const catParam = params.get("cat");

  if (query) input.value = query;

  if (catParam && docs.some((d) => d.category === catParam)) {
    category = catParam;
    chips.forEach((c) => {
      const on = (c.dataset.blogCat ?? "") === catParam;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  const featuredSlug = featured?.dataset.slug ?? docs[0]?.slug;

  const syncUrl = () => {
    const url = new URL(location.href);
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    if (category && category !== "all") url.searchParams.set("cat", category);
    else url.searchParams.delete("cat");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  };

  const resetVisible = () => {
    visible = PAGE_SIZE;
  };

  const run = () => {
    const filtering = Boolean(query) || (category !== null && category !== "all");
    const hits = searchBlog(docs, query, {
      category: category === "all" ? null : category,
      limit: docs.length,
    });

    const listHits =
      filtering || !featuredSlug
        ? hits
        : hits.filter((h) => h.doc.slug !== featuredSlug);

    const shown = listHits.slice(0, visible);
    const hasMore = listHits.length > shown.length;

    if (featured) featured.classList.toggle("is-hidden", filtering);
    renderList(shown, grid, empty, query);

    if (
      !filtering &&
      listHits.length === 0 &&
      featured &&
      !featured.classList.contains("is-hidden")
    ) {
      empty.hidden = true;
      grid.hidden = true;
    }

    if (moreWrap && moreBtn) {
      moreWrap.hidden = !hasMore || listHits.length === 0;
      moreBtn.disabled = !hasMore;
      if (moreMeta) {
        moreMeta.textContent = hasMore
          ? `Показано ${shown.length} из ${listHits.length}`
          : listHits.length > 0
            ? `Все ${listHits.length} ${pluralArticles(listHits.length)}`
            : "";
      }
    }

    if (status) {
      if (query) {
        status.textContent =
          hits.length === 0
            ? "Нет результатов"
            : `Нашли ${hits.length} · умный поиск по заголовкам, разделам и тексту`;
      } else if (category && category !== "all") {
        status.textContent = `Рубрика «${category}» · ${hits.length}`;
      } else {
        status.textContent = `${docs.length} ${pluralArticles(docs.length)} · поиск по смыслу, опечаткам и синонимам`;
      }
    }
    if (clearBtn) clearBtn.hidden = !query;
    syncUrl();
  };

  input.addEventListener("input", () => {
    query = input.value;
    resetVisible();
    run();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      input.value = "";
      query = "";
      resetVisible();
      run();
      input.blur();
    }
  });

  clearBtn?.addEventListener("click", () => {
    input.value = "";
    query = "";
    resetVisible();
    input.focus();
    run();
  });

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      category = chip.dataset.blogCat ?? "all";
      chips.forEach((c) => {
        const on = c === chip;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-pressed", on ? "true" : "false");
      });
      resetVisible();
      run();
    });
  });

  moreBtn?.addEventListener("click", () => {
    visible += PAGE_SIZE;
    run();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });

  run();
}

function initArticle() {
  const root = qs<HTMLElement>("[data-blog-article]");
  if (!root) return;

  const slug = root.dataset.slug!;
  const baseViews = Number(root.dataset.baseViews || "0");
  const viewsEl = qs<HTMLElement>("[data-blog-views]", root);
  const viewsWrap = qs<HTMLElement>("[data-blog-views-wrap]", root);

  // Don't SSR the seed number — it flashes then jumps after POST. Show only the live total.
  void recordBlogView(slug).then((views) => {
    const n = views ?? (baseViews > 0 ? baseViews : null);
    if (n == null) return;
    if (viewsEl) viewsEl.textContent = formatViews(n);
    if (viewsWrap) viewsWrap.hidden = false;
  });

  const shareNative = qs<HTMLButtonElement>("[data-share-native]", root);
  const shareStatus = qs<HTMLElement>("[data-share-status]", root);
  const title = root.dataset.title || document.title;
  const url = root.dataset.url || location.href;

  shareNative?.addEventListener("click", async () => {
    const result = await sharePost({
      title,
      text: title,
      url,
    });
    if (shareStatus) {
      shareStatus.textContent =
        result === "copied"
          ? "Ссылка скопирована"
          : result === "native"
            ? "Отправлено"
            : "Не удалось поделиться";
      shareStatus.hidden = false;
      window.setTimeout(() => {
        shareStatus.hidden = true;
      }, 2200);
    }
  });

  qsa<HTMLAnchorElement>("[data-share]", root).forEach((a) => {
    const net = a.dataset.share as "tg" | "vk" | undefined;
    if (!net) return;
    a.href = shareUrl(net, url, title);
  });

  initBlogArticleInteract(root);
}

initIndex();
initMigrateArticles();
initArticle();
