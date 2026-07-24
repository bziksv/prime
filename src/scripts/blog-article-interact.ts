/** Interactive bits for blog articles: progress, TOC spy, checklist, quiz */

function qs<T extends Element>(sel: string, root: ParentNode = document): T | null {
  return root.querySelector(sel) as T | null;
}

function qsa<T extends Element>(sel: string, root: ParentNode = document): T[] {
  return [...root.querySelectorAll(sel)] as T[];
}

export function initBlogArticleInteract(root: HTMLElement) {
  initReadProgress(root);
  initTocSpy(root);
  initChecklist(root);
  initQuiz(root);
}

function initReadProgress(root: HTMLElement) {
  const shell = qs<HTMLElement>("[data-read-progress]");
  const bar = qs<HTMLElement>("[data-read-bar]");
  const leftEl = qs<HTMLElement>("[data-read-left]");
  const body = qs<HTMLElement>(".b-post__body", root) ?? root;
  if (!shell || !bar) return;

  const minutes = Number(root.dataset.readingMinutes || "1");

  const update = () => {
    const rect = body.getBoundingClientRect();
    const total = Math.max(body.scrollHeight - window.innerHeight, 1);
    const scrolled = Math.min(Math.max(-rect.top, 0), total);
    const pct = Math.round((scrolled / total) * 100);
    bar.style.width = `${pct}%`;
    shell.classList.toggle("is-visible", pct > 2 && pct < 99);
    shell.hidden = false;
    if (leftEl) {
      const leftMin = Math.max(1, Math.ceil(minutes * (1 - pct / 100)));
      leftEl.textContent =
        pct >= 98 ? "Готово" : `Ещё ~${leftMin} мин чтения · ${pct}%`;
    }
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initTocSpy(root: HTMLElement) {
  const toc = qs<HTMLElement>(".b-toc", root);
  if (!toc) return;
  const links = qsa<HTMLAnchorElement>("a[href^='#']", toc);
  const sections = links
    .map((a) => {
      const id = a.getAttribute("href")?.slice(1);
      const el = id ? document.getElementById(id) : null;
      return el ? { a, el } : null;
    })
    .filter(Boolean) as { a: HTMLAnchorElement; el: HTMLElement }[];

  if (!sections.length) return;

  const setActive = (id: string) => {
    links.forEach((a) => {
      const on = a.getAttribute("href") === `#${id}`;
      a.classList.toggle("is-active", on);
    });
  };

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]?.target?.id) setActive(visible[0].target.id);
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.1, 0.25, 0.5],
    },
  );

  sections.forEach(({ el }) => io.observe(el));
}

function initChecklist(root: HTMLElement) {
  const box = qs<HTMLElement>("[data-blog-checklist]", root);
  if (!box) return;

  const key = box.dataset.storageKey || "blog-checklist";
  const items = qsa<HTMLInputElement>("[data-checklist-item]", box);
  const doneEl = qs<HTMLElement>("[data-checklist-done]", box);
  const bar = qs<HTMLElement>("[data-checklist-bar]", box);
  const reset = qs<HTMLButtonElement>("[data-checklist-reset]", box);

  const load = (): Record<string, boolean> => {
    try {
      return JSON.parse(localStorage.getItem(key) || "{}") as Record<string, boolean>;
    } catch {
      return {};
    }
  };

  const save = (state: Record<string, boolean>) => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  };

  const paint = () => {
    const state = load();
    let done = 0;
    items.forEach((input) => {
      const id = input.dataset.checklistItem!;
      input.checked = Boolean(state[id]);
      if (input.checked) done += 1;
      input.closest(".b-checklist__item")?.classList.toggle("is-done", input.checked);
    });
    if (doneEl) doneEl.textContent = String(done);
    if (bar) bar.style.width = `${Math.round((done / Math.max(items.length, 1)) * 100)}%`;
  };

  items.forEach((input) => {
    input.addEventListener("change", () => {
      const state = load();
      const id = input.dataset.checklistItem!;
      state[id] = input.checked;
      save(state);
      paint();
    });
  });

  reset?.addEventListener("click", () => {
    save({});
    paint();
  });

  paint();
}

function initQuiz(root: HTMLElement) {
  const box = qs<HTMLElement>("[data-blog-quiz]", root);
  if (!box) return;

  const checkBtn = qs<HTMLButtonElement>("[data-quiz-check]", box);
  const resetBtn = qs<HTMLButtonElement>("[data-quiz-reset]", box);
  const scoreEl = qs<HTMLElement>("[data-quiz-score]", box);
  const questions = qsa<HTMLFieldSetElement>("[data-quiz-q]", box);

  const lock = (locked: boolean) => {
    questions.forEach((fs) => {
      qsa<HTMLInputElement>("input[type=radio]", fs).forEach((inp) => {
        inp.disabled = locked;
      });
    });
  };

  checkBtn?.addEventListener("click", () => {
    let correct = 0;
    let answered = 0;
    questions.forEach((fs) => {
      const right = Number(fs.dataset.correct);
      const chosen = qs<HTMLInputElement>("input[type=radio]:checked", fs);
      const explain = qs<HTMLElement>("[data-quiz-explain]", fs);
      fs.classList.remove("is-correct", "is-wrong");
      if (!chosen) {
        if (explain) explain.hidden = true;
        return;
      }
      answered += 1;
      const val = Number(chosen.value);
      const ok = val === right;
      if (ok) correct += 1;
      fs.classList.add(ok ? "is-correct" : "is-wrong");
      if (explain) explain.hidden = false;
    });

    if (!answered) {
      if (scoreEl) {
        scoreEl.hidden = false;
        scoreEl.textContent = "Отметьте хотя бы один ответ";
      }
      return;
    }

    lock(true);
    if (checkBtn) checkBtn.hidden = true;
    if (resetBtn) resetBtn.hidden = false;
    if (scoreEl) {
      scoreEl.hidden = false;
      const pct = Math.round((correct / questions.length) * 100);
      scoreEl.textContent =
        correct === questions.length
          ? `Отлично: ${correct} из ${questions.length}`
          : `Результат: ${correct} из ${questions.length} (${pct}%)`;
    }
  });

  resetBtn?.addEventListener("click", () => {
    questions.forEach((fs) => {
      fs.classList.remove("is-correct", "is-wrong");
      qsa<HTMLInputElement>("input[type=radio]", fs).forEach((inp) => {
        inp.checked = false;
        inp.disabled = false;
      });
      const explain = qs<HTMLElement>("[data-quiz-explain]", fs);
      if (explain) explain.hidden = true;
    });
    if (checkBtn) checkBtn.hidden = false;
    if (resetBtn) resetBtn.hidden = true;
    if (scoreEl) scoreEl.hidden = true;
  });
}
