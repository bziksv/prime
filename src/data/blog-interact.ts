export type BlogChecklistItem = {
  id: string;
  label: string;
};

export type BlogQuizQuestion = {
  id: string;
  question: string;
  options: string[];
  /** index in options */
  correct: number;
  explain: string;
};

export type BlogInteractConfig = {
  checklist: {
    title: string;
    lead: string;
    items: BlogChecklistItem[];
  };
  quiz: {
    title: string;
    lead: string;
    questions: BlogQuizQuestion[];
  };
  /** Insert quiz after section whose title includes this */
  quizAfterTitleIncludes: string;
  /** Insert checklist after section whose title includes this */
  checklistAfterTitleIncludes: string;
};

export const blogInteractBySlug: Record<string, BlogInteractConfig> = {
  "semanticheskoe-yadro": {
    quizAfterTitleIncludes: "Потребности пользователя",
    checklistAfterTitleIncludes: "Шаг 4",
    checklist: {
      title: "Чеклист сбора семантического ядра",
      lead: "Отмечайте шаги по ходу работы — прогресс сохранится в этом браузере.",
      items: [
        { id: "markers", label: "Собрать маркерные запросы по услугам и продуктам" },
        { id: "wordstat", label: "Расширить ядро в Wordstat / Key Collector" },
        { id: "clean", label: "Вычистить мусор, дубли и нецелевые формулировки" },
        { id: "types", label: "Разметить типы: коммерческие / информационные / гео" },
        { id: "cluster", label: "Кластеризовать запросы по смыслу и интенту" },
        { id: "map", label: "Привязать кластеры к посадочным / структуре сайта" },
        { id: "priority", label: "Приоритизировать: что в работу в первую очередь" },
      ],
    },
    quiz: {
      title: "Мини-тест: типы запросов",
      lead: "Проверьте себя — 4 коротких вопроса по материалу выше.",
      questions: [
        {
          id: "q1",
          question: "Запрос «купить окна ПВХ Воронеж» — это в первую очередь…",
          options: [
            "Информационный",
            "Коммерческий + геозависимый",
            "Витальный (брендовый)",
            "Общий без интента",
          ],
          correct: 1,
          explain:
            "Есть явное намерение купить и город — коммерция + гео. Такие ключи обычно ведут на посадочные услуг/каталога.",
        },
        {
          id: "q2",
          question: "Запрос «как выбрать семантическое ядро» ближе к…",
          options: [
            "Транзакционному (купить)",
            "Навигационному (найти сайт)",
            "Информационному",
            "Витальному",
          ],
          correct: 2,
          explain:
            "Человек ищет знание, а не заказ. Под такие запросы — статьи, гайды, FAQ.",
        },
        {
          id: "q3",
          question: "Зачем кластеризовать ядро?",
          options: [
            "Чтобы увеличить частотность ключей",
            "Чтобы сгруппировать близкие запросы под одну посадочную",
            "Чтобы убрать все низкочастотники",
            "Чтобы заменить Title на H1",
          ],
          correct: 1,
          explain:
            "Кластер = группа запросов с общим интентом. Их логично закрывать одной страницей, а не плодить дубли.",
        },
        {
          id: "q4",
          question: "Что разумнее сделать первым при сборе СЯ?",
          options: [
            "Сразу писать тексты под все ключи",
            "Собрать маркеры и расширить выдачу, затем чистить и группировать",
            "Купить ссылки под ЧАЧастые запросы",
            "Закрыть сайт от индексации",
          ],
          correct: 1,
          explain:
            "Сначала маркеры и расширение, потом чистка и кластеры — иначе тексты пишутся «в молоко».",
        },
      ],
    },
  },
};

export function getBlogInteract(slug: string): BlogInteractConfig | null {
  return blogInteractBySlug[slug] ?? null;
}
