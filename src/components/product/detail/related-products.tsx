import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types/product";

type RelatedProductsProps = {
  products: Product[];
};

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-line/50 bg-ivory/20 py-section md:py-28">
      <Container size="wide" className="space-y-14 md:space-y-16">
        <SectionTitle eyebrow="Рекомендуем" title="В том же настроении" description="Подборка близких по ритму изделий — без давления «докупить»." />
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} variant="catalog" />
          ))}
        </div>
      </Container>
    </section>
  );
}
