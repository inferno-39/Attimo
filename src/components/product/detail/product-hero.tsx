import { Container } from "@/components/layout/container";
import type { Product } from "@/types/product";
import type { EditorialResolved } from "@/lib/product-editorial";
import { ProductGallery } from "@/components/product/detail/product-gallery";
import { ProductInfo } from "@/components/product/detail/product-info";
import { ProductActions } from "@/components/product/detail/product-actions";

type ProductHeroProps = {
  product: Product;
  editorial: EditorialResolved;
};

export function ProductHero({ product, editorial }: ProductHeroProps) {
  return (
    <section className="pt-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:pt-8 sm:pb-section md:pt-10 lg:pt-12">
      <Container size="wide">
        <div className="grid gap-8 sm:gap-10 lg:gap-16 xl:gap-20 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)] lg:items-start">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)] self-start w-full">
            <ProductGallery images={product.images} productName={product.name} />
          </div>
          <div className="flex flex-col justify-center gap-8 sm:gap-10 lg:min-h-[min(68vh,720px)] lg:py-6 xl:py-10">
            <ProductInfo product={product} editorial={editorial} />
            <ProductActions productSlug={product.slug} />
          </div>
        </div>
      </Container>
    </section>
  );
}
