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

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "prime-select__trigger";
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");
  trigger.style.padding = cs.padding;
  trigger.style.borderRadius = cs.borderRadius;
  trigger.style.border = cs.border;
  trigger.style.background = cs.backgroundColor;
  trigger.style.color = cs.color;
  trigger.style.font = cs.font;
  trigger.style.minHeight = cs.height === "auto" ? "" : cs.height;
  trigger.style.boxShadow = cs.boxShadow;

  const menu = document.createElement("ul");
  menu.className = "prime-select__menu";
  menu.hidden = true;
  menu.setAttribute("role", "listbox");

  const sync = () => {
    const opt = select.options[select.selectedIndex];
    const label = opt?.textContent?.trim() || "";
    trigger.textContent = label;
    trigger.classList.toggle("is-placeholder", !select.value);
    menu.querySelectorAll<HTMLButtonElement>(".prime-select__option").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.value === select.value);
    });
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
    btn.addEventListener("click", () => {
      select.value = opt.value;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      sync();
      close();
      trigger.focus();
    });
    li.appendChild(btn);
    menu.appendChild(li);
  });

  const close = () => {
    wrap.classList.remove("is-open");
    menu.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
  };

  const open = () => {
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
  };

  trigger.addEventListener("click", () => {
    if (menu.hidden) open();
    else close();
  });

  wrap.addEventListener(SYNC, sync);
  wrap.append(trigger, menu);
  sync();

  document.addEventListener("click", (e) => {
    if (!wrap.contains(e.target as Node)) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
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
