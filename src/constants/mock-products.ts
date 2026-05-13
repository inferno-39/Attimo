import type { Product } from "@/types/product";

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

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
    images: [{ url: u("1617038260897-dd50e7f5e5c2"), alt: "Золотое кольцо на холодном мраморе" }],
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
    images: [{ url: u("1611599554322-afc09c5cae31"), alt: "Изогнутые металлические серьги в студийном свете" }],
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
    images: [{ url: u("1573408309883-9379c8366fcd"), alt: "Кулон со стеклянной поверхностью рядом с кожей" }],
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
    images: [{ url: u("1515562149617-da6fba7e9246"), alt: "Плоская звенья браслета в мягком свете" }],
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
    images: [{ url: u("1515564615256-cef770033f9f"), alt: "Ювелирный ритуал: аккуратное касание мастера" }],
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
    images: [{ url: u("1578507065273-0379d4c5d5c9"), alt: "Пара простых колец на тёмной подложке" }],
  },
];
