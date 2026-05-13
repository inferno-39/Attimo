import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <Container className="py-28 text-center space-y-10">
      <div className="space-y-3">
        <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">404</p>
        <h1 className="font-serif text-display-xl text-graphite text-balance">Этого Attimo уже нет или он ещё не вышел</h1>
        <p className="font-sans text-[15px] text-stone max-w-xl mx-auto">
          То, что вы ищете, возможно уже ушло в частную коллекцию или ещё остывает на столе огранке. Откройте каталог заново
          или пришлите запрос студии приватным письмом.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Button href="/catalog">В каталог</Button>
        <Button href="/contact" variant="outline">
          Связаться
        </Button>
      </div>
    </Container>
  );
}
