"use client";

import { cn } from "@/utils/cn";
import type { CatalogCategoryId } from "@/types/product";
import type { CatalogFilters } from "@/lib/catalog-query";
import type { PricePresetId } from "@/constants/catalog-filters";
import { CATALOG_CATEGORY_OPTIONS, PRICE_PRESETS } from "@/constants/catalog-filters";
import type { Product } from "@/types/product";
import { uniqueCollections, uniqueMaterials } from "@/lib/catalog-query";

type FilterBarProps = {
  products: Product[];
  filters: CatalogFilters;
  onChange: (next: CatalogFilters) => void;
};

export function FilterBar({ products, filters, onChange }: FilterBarProps) {
  const materials = ["all", ...uniqueMaterials(products)];
  const collections = [{ id: "all", label: "Все линии" }, ...uniqueCollections(products)];

  const set = (patch: Partial<CatalogFilters>) => onChange({ ...filters, ...patch });

  return (
    <div className="space-y-10 border-b border-line/40 pb-12 md:space-y-12 md:pb-14">
      <div>
        <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">Категория</p>
        <div className="-mx-1 overflow-x-auto overflow-y-visible px-1 scrollbar-none pb-1 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
          <div className="flex min-w-max flex-nowrap gap-2 sm:flex-wrap sm:min-w-0 md:gap-3">
          {CATALOG_CATEGORY_OPTIONS.map((opt) => {
            const active = filters.category === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => set({ category: opt.value as CatalogCategoryId | "all" })}
                className={cn(
                  "rounded-full border px-5 py-2.5 min-h-[44px] font-sans text-[11px] uppercase tracking-[0.18em] transition-all duration-480 ease-out touch-manipulation sm:min-h-0 sm:py-2",
                  active
                    ? "border-graphite bg-graphite text-canvas"
                    : "border-line/90 bg-transparent text-stone hover:border-graphite/40 hover:text-graphite",
                )}
              >
                {opt.label}
              </button>
            );
          })}
          </div>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <FilterSelect
          label="Материал"
          value={filters.material}
          options={materials.map((m) => ({
            value: m,
            label: m === "all" ? "Все материалы" : m,
          }))}
          onChange={(material) => set({ material })}
        />
        <FilterSelect
          label="Коллекция"
          value={filters.collection}
          options={collections.map((c) => ({ value: c.id, label: c.label }))}
          onChange={(collection) => set({ collection })}
        />
        <FilterSelect
          label="Бюджет"
          value={filters.price}
          options={PRICE_PRESETS.map((p) => ({ value: p.value, label: p.label }))}
          onChange={(price) => set({ price: price as PricePresetId })}
        />
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "font-sans w-full min-h-[48px] cursor-pointer appearance-none rounded-none border-0 border-b border-line bg-transparent py-3 pr-10 text-[13px] tracking-[0.03em] text-graphite touch-manipulation",
            "outline-none transition-colors duration-480 focus:border-graphite hover:border-graphite/80",
          )}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-ash" aria-hidden>
          ▾
        </span>
      </div>
    </label>
  );
}
