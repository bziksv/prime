import "../styles/prime-select.css";

const SYNC = "prime-select-sync";

const parseRgb = (value: string) => {
  const m = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!m) return null;
  return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]) };
};

const isLightBg = (bg: string) => {
  const rgb = parseRgb(bg);
  if (!rgb) return false;
  const luma = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
  return luma > 0.55;
};

const labelTextFor = (select: HTMLSelectElement): string => {
  if (select.getAttribute("aria-label")) {
    return select.getAttribute("aria-label")!.trim();
  }
  if (select.id) {
    const byFor = document.querySelector(`label[for="${CSS.escape(select.id)}"]`);
    if (byFor?.textContent?.trim()) return byFor.textContent.trim();
  }
  const wrapLabel = select.closest("label");
  if (wrapLabel) {
    const clone = wrapLabel.cloneNode(true) as HTMLElement;
    clone.querySelectorAll("select, input, textarea, button").forEach((el) => el.remove());
    const t = clone.textContent?.trim();
    if (t) return t;
  }
  const first = select.options[0]?.textContent?.trim();
  return first || "Выберите значение";
};

const enhanceSelect = (select: HTMLSelectElement) => {
  if (select.dataset.primeSelect === "off") return;
  if (select.closest("[data-prime-select-ui]")) return;

  let wrap = select.parentElement as HTMLElement | null;
  const alreadyWrapped =
    !!wrap &&
    (wrap.classList.contains("prime-select") || wrap.classList.contains("w-select"));

  if (!alreadyWrapped) {
    wrap = document.createElement("div");
    wrap.className = "prime-select";
    select.parentNode?.insertBefore(wrap, select);
    wrap.appendChild(select);
  } else {
    wrap.classList.add("prime-select");
  }

  wrap.setAttribute("data-prime-select-ui", "1");
  select.classList.add("prime-select__native");
  select.setAttribute("tabindex", "-1");
  select.setAttribute("aria-hidden", "true");

  const cs = getComputedStyle(select);
  const light = isLightBg(cs.backgroundColor);
  if (light) wrap.classList.add("prime-select--light");

  const menuId = `${select.id || `prime-select-${Math.random().toString(36).slice(2, 8)}`}-listbox`;
  const triggerId = select.id ? `${select.id}-trigger` : `${menuId}-trigger`;

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.id = triggerId;
  trigger.className = "prime-select__trigger";
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-controls", menuId);
  trigger.setAttribute("aria-label", labelTextFor(select));
  if (select.required) trigger.setAttribute("aria-required", "true");
  trigger.style.padding = cs.padding;
  trigger.style.borderRadius = cs.borderRadius;
  trigger.style.border = cs.border;
  trigger.style.background = cs.backgroundColor;
  trigger.style.color = cs.color;
  trigger.style.font = cs.font;
  trigger.style.minHeight = cs.height === "auto" ? "" : cs.height;
  trigger.style.boxShadow = cs.boxShadow;

  if (select.id) {
    document.querySelectorAll(`label[for="${CSS.escape(select.id)}"]`).forEach((label) => {
      label.setAttribute("for", triggerId);
    });
  }

  const menu = document.createElement("ul");
  menu.id = menuId;
  menu.className = "prime-select__menu";
  menu.hidden = true;
  menu.setAttribute("role", "listbox");
  menu.setAttribute("tabindex", "-1");

  const optionButtons = () =>
    [...menu.querySelectorAll<HTMLButtonElement>(".prime-select__option")];

  const sync = () => {
    const opt = select.options[select.selectedIndex];
    const label = opt?.textContent?.trim() || "";
    trigger.textContent = label;
    trigger.classList.toggle("is-placeholder", !select.value);
    trigger.setAttribute("aria-invalid", select.validity.valid ? "false" : "true");
    optionButtons().forEach((btn) => {
      const active = btn.dataset.value === select.value;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
  };

  const focusOption = (index: number) => {
    const buttons = optionButtons();
    if (!buttons.length) return;
    const i = ((index % buttons.length) + buttons.length) % buttons.length;
    buttons[i]?.focus();
  };

  const selectValue = (value: string) => {
    select.value = value;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    select.dispatchEvent(new Event("input", { bubbles: true }));
    sync();
    close();
    trigger.focus();
  };

  [...select.options].forEach((opt) => {
    const li = document.createElement("li");
    li.setAttribute("role", "presentation");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "prime-select__option";
    btn.setAttribute("role", "option");
    btn.dataset.value = opt.value;
    btn.textContent = opt.textContent;
    btn.disabled = opt.disabled;
    btn.addEventListener("click", () => selectValue(opt.value));
    li.appendChild(btn);
    menu.appendChild(li);
  });

  const close = () => {
    wrap.classList.remove("is-open");
    menu.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
  };

  const open = (focusIndex?: number) => {
    document.querySelectorAll(".prime-select.is-open").forEach((el) => {
      if (el === wrap) return;
      el.classList.remove("is-open");
      const m = el.querySelector<HTMLElement>(".prime-select__menu");
      const t = el.querySelector<HTMLElement>(".prime-select__trigger");
      if (m) m.hidden = true;
      if (t) t.setAttribute("aria-expanded", "false");
    });
    wrap.classList.add("is-open");
    menu.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    const buttons = optionButtons();
    const activeIdx = buttons.findIndex((b) => b.dataset.value === select.value);
    focusOption(focusIndex ?? (activeIdx >= 0 ? activeIdx : 0));
  };

  trigger.addEventListener("click", () => {
    if (menu.hidden) open();
    else close();
  });

  trigger.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (menu.hidden) open(e.key === "ArrowUp" ? optionButtons().length - 1 : 0);
      else focusOption(e.key === "ArrowDown" ? 0 : optionButtons().length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (menu.hidden) open();
      else close();
    } else if (e.key === "Escape") {
      close();
    }
  });

  menu.addEventListener("keydown", (e) => {
    const buttons = optionButtons();
    const current = buttons.indexOf(document.activeElement as HTMLButtonElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusOption(current + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusOption(current - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusOption(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusOption(buttons.length - 1);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
      trigger.focus();
    } else if (e.key === "Tab") {
      close();
    }
  });

  select.addEventListener("invalid", (e) => {
    e.preventDefault();
    sync();
    trigger.focus();
  });

  wrap.addEventListener(SYNC, sync);
  wrap.append(trigger, menu);
  sync();

  document.addEventListener("click", (e) => {
    if (!wrap.contains(e.target as Node)) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && wrap.classList.contains("is-open")) {
      close();
      trigger.focus();
    }
  });
};

export function initPrimeSelects(root: ParentNode = document) {
  root.querySelectorAll<HTMLSelectElement>("select").forEach(enhanceSelect);

  root.querySelectorAll("form").forEach((form) => {
    form.addEventListener("reset", () => {
      queueMicrotask(() => {
        form.querySelectorAll<HTMLElement>("[data-prime-select-ui]").forEach((wrap) => {
          wrap.dispatchEvent(new Event(SYNC));
        });
      });
    });
  });
}
