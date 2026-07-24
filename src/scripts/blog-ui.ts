import { blogSearchIndex } from "../data/blog";
import { initBlogArticleInteract } from "./blog-article-interact";
import {
  bumpView,
  formatReadingTime,
  formatViews,
  getDisplayViews,
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
      const views = getDisplayViews(doc.slug, doc.baseViews);
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
            <span class="b-meta-chip" data-views-for="${doc.slug}">${formatViews(views)} просм.</span>
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
  if (!input || !grid || !empty) return;

  if (kbd) {
    const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
    kbd.textContent = isMac ? "⌘K" : "Ctrl K";
  }

  const params = new URLSearchParams(location.search);
  let category: string | null = "all";
  let query = params.get("q")?.trim() ?? "";
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

  const run = () => {
    const filtering = Boolean(query) || (category !== null && category !== "all");
    const hits = searchBlog(docs, query, {
      category: category === "all" ? null : category,
      limit: 50,
    });

    const listHits =
      filtering || !featuredSlug
        ? hits
        : hits.filter((h) => h.doc.slug !== featuredSlug);

    if (featured) featured.classList.toggle("is-hidden", filtering);
    renderList(listHits, grid, empty, query);

    if (
      !filtering &&
      listHits.length === 0 &&
      featured &&
      !featured.classList.contains("is-hidden")
    ) {
      empty.hidden = true;
      grid.hidden = true;
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
    run();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      input.value = "";
      query = "";
      run();
      input.blur();
    }
  });

  clearBtn?.addEventListener("click", () => {
    input.value = "";
    query = "";
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
      run();
    });
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
  bumpView(slug);

  const viewsEl = qs<HTMLElement>("[data-blog-views]", root);
  if (viewsEl) {
    viewsEl.textContent = formatViews(getDisplayViews(slug, baseViews));
  }

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
initArticle();
