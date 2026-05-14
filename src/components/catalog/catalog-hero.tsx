import { Container } from "@/components/layout/container";

export function CatalogHero() {
  return (
    <section className="border-b border-line/50 bg-ivory/25">
      <Container size="wide" className="py-section md:py-28 lg:py-32">
        <div className="max-w-4xl">
          <p className="font-sans text-caption-wide uppercase tracking-[0.3em] text-ash">Каталог</p>
          <h1 className="mt-8 font-serif text-display-xl text-graphite text-balance md:mt-10 md:text-[clamp(2.85rem,5vw,3.75rem)]">
            Изделия без спешки витрины
          </h1>
          <p className="mt-6 font-serif text-serif-lead text-stone/95">
            Collections crafted to preserve meaningful moments.
          </p>
          <p className="mt-6 max-w-2xl font-sans text-body-readable text-stone md:mt-8">
            Каждая позиция — короткая серия или единичный выпуск. Здесь нет «акций» и гонки за объёмом: только металл,
            камень и время, которое вы готовы подарить своему моменту.
          </p>
        </div>
      </Container>
    </section>
  );
}
