import { Container } from "@/components/layout/container";
import { ProductSkeleton } from "@/components/catalog/product-skeleton";

export default function CatalogLoading() {
  return (
    <div className="bg-canvas">
      <div className="border-b border-line/50 bg-ivory/25">
        <Container size="wide" className="py-section md:py-28">
          <div className="max-w-xl animate-pulse space-y-4">
            <div className="h-3 w-24 bg-mist/80" />
            <div className="h-12 w-full max-w-md bg-mist/70" />
            <div className="h-4 w-full max-w-lg bg-mist/50" />
          </div>
        </Container>
      </div>
      <Container size="wide" className="py-section md:py-28">
        <div className="grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}
