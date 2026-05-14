import type { Product } from "@/types/product";
import type { EditorialResolved } from "@/lib/product-editorial";
import { availabilityLabel } from "@/lib/product-editorial";
import { formatPriceRub } from "@/lib/format-price";
import { cn } from "@/utils/cn";

type ProductInfoProps = {
  product: Product;
  editorial: EditorialResolved;
  className?: string;
};

function availabilityTone(a: EditorialResolved["availability"]) {
  switch (a) {
    case "in-stock":
      return "border-gold/45 bg-ivory/80 text-graphite";
    case "limited":
      return "border-graphite/25 bg-mist/50 text-graphite";
    default:
      return "border-line bg-canvas text-stone";
  }
}

export function ProductInfo({ product, editorial, className }: ProductInfoProps) {
  return (
    <header className={cn("space-y-8", className)}>
      <div className="space-y-4">
        <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">{product.slug}</p>
        <h1 className="font-serif text-display-lg text-balance text-graphite md:text-[clamp(2.1rem,3.8vw,3.15rem)]">
          {product.name}
        </h1>
        {product.subtitle ? (
          <p className="font-sans text-title-md uppercase tracking-[0.12em] text-stone">{product.subtitle}</p>
        ) : null}
      </div>

      <p className="font-serif text-serif-lead leading-[1.65] text-stone sm:leading-[1.7] max-w-md text-pretty">
        {editorial.emotionalLead}
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <p className="font-serif text-[1.75rem] tracking-tight text-graphite sm:text-[2rem]">
          {formatPriceRub(product.priceRub)}
        </p>
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em]",
            availabilityTone(editorial.availability),
          )}
        >
          {availabilityLabel(editorial.availability)}
        </span>
      </div>

      {product.material ? (
        <p className="font-sans text-[12px] uppercase tracking-[0.2em] text-ash max-w-sm">{product.material}</p>
      ) : null}
    </header>
  );
}
