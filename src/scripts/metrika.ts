/** Яндекс.Метрика: счётчик и цели (идентификаторы как в кабинете). */

export const YM_COUNTER_ID = 29086155;

/**
 * Цели в кабинете Метрики (счётчик 29086155).
 * На сайте сейчас бьются только form + audit*.
 * Остальные — зарезервированы под виджеты (CallbackKiller, обучение, SendPulse).
 */
export const ymGoals = {
  /** Заявка с формы — все lead-формы сайта */
  form: "zajavka_s_formy",
  /** Аудит: бесплатный мини-аудит */
  auditFree: "zajavka_na_besplatnyj_audit",
  /** Аудит: комплексный платный */
  auditPaid: "zajavka_na_platnyj_audit",
  /** CallbackKiller — заказ звонка (виджет пока не подключён) */
  cbkCall: "CBK_CALL",
  /** Заявка на бесплатное обучение (формы нет) */
  trainFree: "zajavka_na_obuchenije_besplatnoje",
  /** Заявка на платное обучение (формы нет) */
  trainPaid: "zajavka_na_obuchenije_platnoje",
  /** Подписка с блога SendPulse (виджет пока не подключён) */
  blogSub: "SendpulseBlog",
} as const;

export type YmGoalId = (typeof ymGoals)[keyof typeof ymGoals];

type YmFn = (counterId: number, method: string, ...args: unknown[]) => void;

declare global {
  interface Window {
    ym?: YmFn;
  }
}

/** Безопасно вызывает reachGoal (если счётчик ещё не загрузился — no-op). */
export function reachGoal(target: string): void {
  if (!target || typeof window === "undefined") return;
  try {
    window.ym?.(YM_COUNTER_ID, "reachGoal", target);
  } catch {
    /* ignore */
  }
}

/** Несколько целей подряд (например общая заявка + тип аудита). */
export function reachGoals(targets: Array<string | undefined | null>): void {
  const seen = new Set<string>();
  for (const t of targets) {
    if (!t || seen.has(t)) continue;
    seen.add(t);
    reachGoal(t);
  }
}

/** Маппинг поля type/focus аудита → цель Метрики. */
export function auditGoalFromType(type: string): string | undefined {
  const t = type.toLowerCase();
  if (!t) return undefined;
  if (t.includes("беспл") || t.includes("мини")) return ymGoals.auditFree;
  if (t.includes("платн") || t.includes("комплекс")) return ymGoals.auditPaid;
  return undefined;
}
