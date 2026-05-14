"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/container";
import type { Product } from "@/types/product";
import type { CatalogSortId } from "@/constants/catalog-filters";
import { FilterBar } from "@/components/catalog/filter-bar";
import { SortDropdown } from "@/components/catalog/sort-dropdown";
import { ProductGrid } from "@/components/catalog/product-grid";
import { EmptyCatalogState } from "@/components/catalog/empty-catalog-state";
import {
  filterProducts,
  getDefaultCatalogFilters,
  sortProducts,
  type CatalogFilters,
} from "@/lib/catalog-query";

type CatalogExperienceProps = {
  products: Product[];
};

export function CatalogExperience({ products }: CatalogExperienceProps) {
  const [filters, setFilters] = useState<CatalogFilters>(() => getDefaultCatalogFilters());
  const [sort, setSort] = useState<CatalogSortId>("featured");

  const visible = useMemo(() => {
    const f = filterProducts(products, filters);
    return sortProducts(f, sort);
  }, [products, filters, sort]);

  const reset = () => {
    setFilters(getDefaultCatalogFilters());
    setSort("featured");
  };

  return (
    <section className="bg-canvas">
      <Container size="wide" className="py-section md:py-28">
        <div className="flex flex-col gap-8 border-b border-line/40 pb-10 sm:gap-10 sm:pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:pb-14">
          <p className="max-w-md font-sans text-body-readable text-stone lg:max-w-lg">
            Фильтры не кричат о продаже — они лишь помогают сузить взгляд. Материалы и линии отражают реальный выпуск
            ателье.
          </p>
          <SortDropdown value={sort} onChange={setSort} className="lg:shrink-0" />
        </div>

        <div className="pt-12 md:pt-14">
          <FilterBar products={products} filters={filters} onChange={setFilters} />
        </div>

        <div className="pt-16 md:pt-20">
          {visible.length === 0 ? (
            <EmptyCatalogState onReset={reset} />
          ) : (
            <ProductGrid products={visible} />
          )}
        </div>
      </Container>
    </section>
  );
}
