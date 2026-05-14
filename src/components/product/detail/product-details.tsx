"use client";

import type { Product } from "@/types/product";
import type { EditorialResolved } from "@/lib/product-editorial";
import { availabilityLabel } from "@/lib/product-editorial";
import { formatPriceRub } from "@/lib/format-price";

type Row = { label: string; value: string };

type ProductDetailsProps = {
  product: Product;
  editorial: EditorialResolved;
  className?: string;
};

export function ProductDetails({ product, editorial, className }: ProductDetailsProps) {
  const rows: Row[] = [
    { label: "Изделие", value: product.name },
    ...(product.material ? [{ label: "Материал", value: product.material }] : []),
    { label: "Размеры и посадка", value: editorial.sizes },
    { label: "Цена", value: formatPriceRub(product.priceRub) },
    { label: "Наличие", value: availabilityLabel(editorial.availability) },
    { label: "Референс", value: product.slug },
  ];

  return (
    <dl className={className}>
      <div className="grid gap-0 divide-y divide-line/70 border-y border-line/70">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-10 sm:items-baseline">
            <dt className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">{row.label}</dt>
            <dd className="font-sans text-[15px] text-graphite leading-relaxed">{row.value}</dd>
          </div>
        ))}
      </div>
    </dl>
  );
}
