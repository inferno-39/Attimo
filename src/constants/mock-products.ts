import type { Product } from "@/types/product";

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

/** Реалистичные placeholder-данные под editorial / ювелирную эстетику */
export const mockProducts: Product[] = [
  {
    id: "p-neve",
    slug: "neve-luce",
    name: "Neve Luce",
    subtitle: "Кольцо · ручная шлифовка",
    description:
      "Матовое золото и холодный бриллиант — две искры холста снега и первого утреннего света. Создавали для того, чтобы вы перенесли звук шагов по тихому городу после сильного снегопада.",
    priceRub: 184000,
    material: "18K золото, бриллиант",
    featured: true,
    catalogCategory: "rings",
    collectionId: "neve",
    availability: "limited",
    emotionalLead:
      "Кольцо для тех утренних минут, когда город ещё белый, а вы — единственный звук шагов на снегу.",
    storyQuote: "Inspired by snowlight and the hush after a storm — a ring that keeps the cold morning honest.",
    storyBody:
      "Neve Luce родился из желания удержать на пальце то самое «после снегопада»: чистый воздух, тишина и ощущение, что время на секунду стало мягче. Мы оставили поверхность матовой, чтобы свет не кричал, а скользил.",
    craftsmanshipTitle: "Огранка и посадка",
    craftsmanshipBody:
      "Бриллиант подобран под низкий блеск: он живёт внутри кольца, а не на рекламе витрины. Золото 750 пробы, ручная шлифовка и финишная полировка только в зонах, которые касаются кожи.",
    craftsmanshipImageUrl: u("1515564615256-cef770033f9f", 1800),
    sizes: "Размер подбирается после слепка · EU 50–58",
    careInstructions:
      "Не носите при работе с абразивами. Храните в бархатном мешке из комплекта. Раз в 12–18 месяцев — сервисный осмотр в ателье.",
    leadTime: "10–14 недель",
    images: [
      { url: u("1617038260897-dd50e7f5e5c2"), alt: "Кольцо Neve Luce на мраморе" },
      { url: u("1573408309883-9379c8366fcd", 1400), alt: "Кольцо крупным планом" },
    ],
  },
  {
    id: "p-silenzio",
    slug: "silenzio",
    name: "Silenzio",
    subtitle: "Серьги · лёгкая дуга",
    description:
      "Дуги тонких пластин, которые почти не касаются кожи. Для минут перед важными словами — когда звук стихает, но чувство остаётся.",
    priceRub: 128000,
    material: "18K палладиевое золото",
    featured: true,
    catalogCategory: "earrings",
    collectionId: "silenzio",
    availability: "made-to-order",
    emotionalLead: "Серьги для паузы перед словами, которые меняют всё — без блеска и без давления.",
    storyQuote: "For the breath you take before saying what matters — silence made metal.",
    storyBody:
      "Silenzio — про лёгкость и доверие коже. Дуга почти не ощущается весе; важен ритуал надевания и то, как свет ложится на палладированное золото в сумерках.",
    craftsmanshipTitle: "Пластина и изгиб",
    craftsmanshipBody:
      "Каждая дуга выверена вручную: нет штампа, только изгиб, который держит форму и не спорит с ухом. Крепление — закрытый замок с микрокликом.",
    craftsmanshipImageUrl: u("1611599554322-afc09c5cae31", 1600),
    sizes: "Пара · высота дуги 22 мм",
    careInstructions: "Снимайте перед сном и душем. Протирайте мягкой сухой салфеткой без средств.",
    leadTime: "8–12 недель",
    images: [
      { url: u("1611599554322-afc09c5cae31"), alt: "Серьги Silenzio" },
      { url: u("1522312346379-d9712c972364", 1400), alt: "Серьги в студийном свете" },
    ],
  },
  {
    id: "p-memoria",
    slug: "memoria-cordis",
    name: "Memoria Cordis",
    subtitle: "Кулон · гравировка по запросу",
    description:
      "Классический медальон без лишней сказки: внутреннее пространство для даты или инициалов того момента, который вы бережно храните.",
    priceRub: 96200,
    material: "18K розовое золото",
    featured: false,
    catalogCategory: "pendants",
    collectionId: "memoria",
    availability: "made-to-order",
    emotionalLead: "Медальон как пустая страница дневника — вы решаете, какую дату оставить внутри.",
    storyQuote: "A quiet vessel for the date only you need to remember.",
    storyBody:
      "Memoria Cordis не кричит о сентиментальности: внутреннее поле остаётся для гравировки по вашему сценарию — инициалы, координаты, маленький символ.",
    craftsmanshipTitle: "Гравировка",
    craftsmanshipBody:
      "Гравировка выполняется после финальной примерки: шрифт и глубина согласуются с вами. Золото розовое 750, матовый периметр, полированное «окно» внутри.",
    craftsmanshipImageUrl: u("1578507065273-0379d4c5d5c9", 1600),
    sizes: "Подвеска 18 × 14 мм · цепь 45 см (кастом)",
    careInstructions: "Избегайте цепочки при резких натяжениях. Храните цепь и кулон раздельно в футляре.",
    leadTime: "6–10 недель",
    images: [
      { url: u("1573408309883-9379c8366fcd"), alt: "Кулон Memoria Cordis" },
      { url: u("1617038260897-dd50e7f5e5c2", 1200), alt: "Розовое золото крупно" },
    ],
  },
  {
    id: "p-luna-tratta",
    slug: "luna-tratta",
    name: "Luna Tratta",
    subtitle: "Браслет · плоская цепь",
    description:
      "Ритм звеньев напоминает прилив на тёмной воде — спокойный, размеренный, неотложный только для вас. Носится ежедневно и ночью как второй слой памяти.",
    priceRub: 156800,
    material: "18K белое золото",
    featured: true,
    catalogCategory: "bracelets",
    collectionId: "luna",
    availability: "in-stock",
    emotionalLead: "Цепь как прилив: ровный, тихий, постоянный — на запястье, которое помнит.",
    storyQuote: "Rhythm without noise — gold that follows your wrist like tide follows moon.",
    storyBody:
      "Luna Tratta — про ежедневную роскошь без демонстрации. Плоские звенья собираются вручную; замок интегрирован так, чтобы не ломать линию.",
    craftsmanshipTitle: "Звенья и замок",
    craftsmanshipBody:
      "Каждое звено проходит контроль посадки; замок с двойным фиксатором. Белое золото 750, финиш сатин на плоскостях и микрополировка на гранях.",
    craftsmanshipImageUrl: u("1515562149617-da6fba7e9246", 1800),
    sizes: "Длина 17 / 18 / 19 см · звено 8,5 мм",
    careInstructions: "Носите отдельно от часов с жёстким корпусом. Раз в год — профилактика замка в ателье.",
    leadTime: "Готов к отгрузке · индивидуальная длина — +4 недели",
    images: [
      { url: u("1515562149617-da6fba7e9246"), alt: "Браслет Luna Tratta" },
      { url: u("1522312346379-d9712c972364", 1400), alt: "Цепь на ткани" },
    ],
  },
  {
    id: "p-aurora-quiet",
    slug: "aurora-quiet",
    name: "Aurora Quieta",
    subtitle: "Колье · огранённые камни",
    description:
      "Низкий блеск, высокое качество огранки — свет живёт не на поверхности, а глубже, как утро в маленьком отеле с видом на сад.",
    priceRub: 248000,
    material: "18K жёлтое золото, сапфиры",
    featured: false,
    catalogCategory: "necklaces",
    collectionId: "aurora",
    availability: "made-to-order",
    emotionalLead: "Колье для света, который не кричит — только углубляется, когда вы наклоняетесь.",
    storyQuote: "Sapphires that hold morning inside them — quiet, deep, yours.",
    storyBody:
      "Aurora Quieta — линия огранки под низкий блеск: камни дышат внутри золота. Каждая вставка закреплена под микроскопом.",
    craftsmanshipTitle: "Огранка и инкрустация",
    craftsmanshipBody:
      "Сапфиры подобраны в партию по тону; закрепка скрыта. Жёлтое золото 750 с тёплым финишем, чтобы не уходить в холодный «витринный» жёлтый.",
    craftsmanshipImageUrl: u("1515564615256-cef770033f9f", 1800),
    sizes: "Длина 42 / 45 см · центральный камень 6 мм",
    careInstructions: "Избегайте ударов по камню. Храните в подвесном футляре. Чистка только в ателье.",
    leadTime: "12–18 недель",
    images: [
      { url: u("1515564615256-cef770033f9f"), alt: "Колье Aurora Quieta" },
      { url: u("1567016566571-ec50cc83acec", 1400), alt: "Сапфиры крупно" },
    ],
  },
  {
    id: "p-velo-mano",
    slug: "velo-mano",
    name: "Velo Mano",
    subtitle: "Кольца-компаньоны",
    description:
      "Два минимальных кольца собираются в одну историю только когда хотят — симметрия дружбы, партнёрства или договорённости между вами двумя.",
    priceRub: 210000,
    material: "18K платина",
    featured: false,
    catalogCategory: "sets",
    collectionId: "velo",
    availability: "made-to-order",
    emotionalLead: "Два кольца — одна тишина между вами. Носятся вместе или по отдельности.",
    storyQuote: "Two rings, one quiet agreement — friendship, love, or a promise kept in metal.",
    storyBody:
      "Velo Mano про симметрию без зеркального китча: профили разные, но ритм один. Платина 950, плотность и холодный финиш.",
    craftsmanshipTitle: "Пара как проект",
    craftsmanshipBody:
      "Кольца полируются парами, чтобы микрорельеф совпадал при носке рядом. Внутренняя гравировка — по запросу.",
    craftsmanshipImageUrl: u("1578507065273-0379d4c5d5c9", 1600),
    sizes: "Размеры двух колец · EU 48–62",
    careInstructions: "Платина устойчива; избегайте контакта с белым золотом других изделий в одном футляре.",
    leadTime: "10–16 недель",
    images: [
      { url: u("1578507065273-0379d4c5d5c9"), alt: "Кольца Velo Mano" },
      { url: u("1617038260897-dd50e7f5e5c2", 1200), alt: "Платина на коже" },
    ],
  },
];
