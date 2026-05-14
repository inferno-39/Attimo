import { Button } from "@/components/ui/button";

type EmptyCatalogStateProps = {
  onReset: () => void;
};

export function EmptyCatalogState({ onReset }: EmptyCatalogStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-28 text-center md:py-36">
      <p className="font-sans text-caption-wide uppercase tracking-[0.28em] text-ash">Пустой взгляд</p>
      <h2 className="mt-6 max-w-md font-serif text-display-lg text-graphite text-balance">
        Под этим фильтром пока тишина
      </h2>
      <p className="mt-6 max-w-lg font-sans text-[15px] leading-relaxed text-stone">
        Сузили выбор слишком строго — или линия уже ушла в частные коллекции. Снимите фильтры и посмотрите весь
        доступный выпуск.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Button type="button" onClick={onReset} className="px-10">
          Сбросить фильтры
        </Button>
        <Button href="/contact" variant="outline" className="px-10">
          Запросить консьерж
        </Button>
      </div>
    </div>
  );
}
