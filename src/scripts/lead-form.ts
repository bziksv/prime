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

export type BindLeadFormOptions = {
  form: HTMLFormElement;
  hint?: HTMLElement | null;
  successMessage?: string;
  source?: string;
  errorColor?: string;
  successColor?: string;
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

  ensureHoneypot(form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
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
