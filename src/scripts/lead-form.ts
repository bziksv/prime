import { auditGoalFromType, reachGoals, ymGoals } from "./metrika";

type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  site: string;
  brand: string;
  crm: string;
  region: string;
  tariff: string;
  style: string;
  message: string;
  page: string;
  source: string;
  company: string;
};

const regionLabels: Record<string, string> = {
  region: "Регионы РФ",
  capital: "Москва / СПб",
  multi: "Несколько регионов",
};

const tariffLabels: Record<string, string> = {
  t3: "Т-3",
  t5: "Т-5",
  t10: "Т-10",
  t20: "Т-20",
  t50: "Т-50",
  consult: "Консультация",
};

type FormCopy = {
  required: string;
  name: string;
  phone: string;
  email: string;
  select: string;
  agree: string;
};

function formCopy(): FormCopy {
  const lang = (document.documentElement.lang || "ru").toLowerCase();
  if (lang.startsWith("es")) {
    return {
      required: "Completa los campos obligatorios.",
      name: "Indica tu nombre.",
      phone: "Indica tu teléfono.",
      email: "Indica un email válido.",
      select: "Elige una opción.",
      agree: "Marca el consentimiento al tratamiento de datos personales.",
    };
  }
  if (lang.startsWith("en")) {
    return {
      required: "Please fill in the required fields.",
      name: "Enter your name.",
      phone: "Enter your phone number.",
      email: "Enter a valid email.",
      select: "Please choose an option.",
      agree: "Please accept personal data processing consent.",
    };
  }
  return {
    required: "Заполните обязательные поля.",
    name: "Укажите имя.",
    phone: "Укажите телефон.",
    email: "Укажите корректный email.",
    select: "Выберите вариант из списка.",
    agree: "Нужно согласие на обработку персональных данных.",
  };
}

export type BindLeadFormOptions = {
  form: HTMLFormElement;
  hint?: HTMLElement | null;
  successMessage?: string;
  source?: string;
  errorColor?: string;
  successColor?: string;
  /**
   * Цель(и) Метрики после успешной отправки.
   * По умолчанию — zajavka_s_formy; для аудита можно передать резолвер.
   */
  metrikaGoals?:
    | string
    | string[]
    | ((payload: LeadPayload) => string | string[] | undefined);
  /** Runs after a successful submit and form.reset(). */
  onSuccess?: () => void;
};

function field(fd: FormData, key: string): string {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim() : "";
}

function ensureHoneypot(form: HTMLFormElement): void {
  if (form.querySelector('input[name="company"]')) return;
  const input = document.createElement("input");
  input.type = "text";
  input.name = "company";
  input.autocomplete = "off";
  input.tabIndex = -1;
  input.setAttribute("aria-hidden", "true");
  input.style.cssText =
    "position:absolute;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none";
  form.appendChild(input);
}

function clearFieldErrors(form: HTMLFormElement): void {
  form.querySelectorAll<HTMLElement>("[aria-invalid='true']").forEach((el) => {
    el.removeAttribute("aria-invalid");
    el.classList.remove("is-invalid");
  });
}

function markInvalid(el: HTMLElement): void {
  el.setAttribute("aria-invalid", "true");
  el.classList.add("is-invalid");
}

function isEmptyControl(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean {
  if (el instanceof HTMLInputElement && (el.type === "checkbox" || el.type === "radio")) {
    return !el.checked;
  }
  return !String(el.value || "").trim();
}

function messageForField(
  el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  copy: FormCopy,
): string {
  const name = (el.getAttribute("name") || "").toLowerCase();
  if (el instanceof HTMLInputElement && el.type === "checkbox" && name === "agree") {
    return copy.agree;
  }
  if (name === "name") return copy.name;
  if (name === "phone") return copy.phone;
  if (name === "email" || (el instanceof HTMLInputElement && el.type === "email")) {
    return copy.email;
  }
  if (el instanceof HTMLSelectElement) return copy.select;
  return copy.required;
}

/** Custom validation instead of native browser bubbles. */
function validateLeadForm(
  form: HTMLFormElement,
): { ok: true } | { ok: false; message: string; focus?: HTMLElement } {
  const copy = formCopy();
  clearFieldErrors(form);

  const required = Array.from(
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]"),
  ).filter((el) => !el.disabled && el.type !== "hidden");

  const invalid: HTMLElement[] = [];
  let message = copy.required;

  for (const el of required) {
    if (isEmptyControl(el)) {
      markInvalid(el);
      if (!invalid.length) message = messageForField(el, copy);
      invalid.push(el);
      continue;
    }
    if (el instanceof HTMLInputElement && el.type === "email" && el.value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())) {
        markInvalid(el);
        if (!invalid.length) message = copy.email;
        invalid.push(el);
      }
    }
  }

  form.querySelectorAll<HTMLInputElement>('input[type="email"]:not([required])').forEach((el) => {
    if (el.disabled || !el.value.trim()) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())) {
      markInvalid(el);
      if (!invalid.length) message = copy.email;
      invalid.push(el);
    }
  });

  if (!invalid.length) return { ok: true };
  return { ok: false, message, focus: invalid[0] };
}

async function postLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch("/api/lead.php", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  let data: { ok?: boolean; error?: string } = {};
  try {
    data = (await res.json()) as { ok?: boolean; error?: string };
  } catch {
    /* ignore */
  }
  if (!res.ok || !data.ok) {
    return {
      ok: false,
      error: data.error || "Не удалось отправить. Позвоните или напишите на info@prime-ltd.su",
    };
  }
  return { ok: true };
}

function resolveMetrikaGoals(
  opts: BindLeadFormOptions,
  payload: LeadPayload,
): string[] {
  const raw = opts.metrikaGoals;
  if (typeof raw === "function") {
    const v = raw(payload);
    if (!v) return [ymGoals.form];
    return Array.isArray(v) ? v : [v];
  }
  if (Array.isArray(raw)) return raw.length ? raw : [ymGoals.form];
  if (typeof raw === "string" && raw) return [raw];
  return [ymGoals.form];
}

/** Wire a CTA form to the PHP lead endpoint. */
export function bindLeadForm(opts: BindLeadFormOptions): void {
  const {
    form,
    hint,
    successMessage = "Спасибо! Заявка принята — свяжемся с вами.",
    source = "site",
    errorColor = "#c2410c",
    successColor = "var(--primary, #1496ad)",
    onSuccess,
  } = opts;

  // Kill native HTML5 bubbles ("Заполните это поле.") — styled hints instead.
  form.noValidate = true;
  ensureHoneypot(form);

  if (hint) {
    hint.setAttribute("role", "status");
    hint.setAttribute("aria-live", "polite");
  }

  const clearOnEdit = (e: Event) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (!form.contains(t)) return;
    if (t.matches("input, select, textarea")) {
      t.removeAttribute("aria-invalid");
      t.classList.remove("is-invalid");
    }
  };
  form.addEventListener("input", clearOnEdit);
  form.addEventListener("change", clearOnEdit);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');

    const check = validateLeadForm(form);
    if (!check.ok) {
      if (hint) {
        hint.hidden = false;
        hint.textContent = check.message;
        hint.style.color = errorColor;
      }
      check.focus?.focus();
      return;
    }

    if (btn) btn.disabled = true;

    const fd = new FormData(form);
    const regionRaw = field(fd, "region");
    const tariffRaw = field(fd, "tariff");
    const payload: LeadPayload = {
      name: field(fd, "name"),
      phone: field(fd, "phone"),
      email: field(fd, "email"),
      service: field(fd, "service") || field(fd, "type") || field(fd, "focus"),
      site: field(fd, "site"),
      brand: field(fd, "brand"),
      crm: field(fd, "crm"),
      region: regionLabels[regionRaw] || regionRaw,
      tariff: tariffLabels[tariffRaw] || tariffRaw,
      style: field(fd, "style"),
      message: field(fd, "message"),
      page: location.pathname,
      source,
      company: field(fd, "company"),
    };

    try {
      const result = await postLead(payload);
      if (hint) {
        hint.hidden = false;
        hint.textContent = result.ok
          ? successMessage
          : result.error || "Ошибка отправки";
        hint.style.color = result.ok ? successColor : errorColor;
      }
      if (result.ok) {
        reachGoals(resolveMetrikaGoals(opts, payload));
        clearFieldErrors(form);
        form.reset();
        onSuccess?.();
      }
    } catch {
      if (hint) {
        hint.hidden = false;
        hint.textContent =
          "Не удалось отправить. Позвоните или напишите на info@prime-ltd.su";
        hint.style.color = errorColor;
      }
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}

export { auditGoalFromType, ymGoals };
