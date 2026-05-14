import { cn } from "@/utils/cn";
import type { CatalogSortId } from "@/constants/catalog-filters";
import { SORT_OPTIONS } from "@/constants/catalog-filters";

type SortDropdownProps = {
  value: CatalogSortId;
  onChange: (v: CatalogSortId) => void;
  className?: string;
};

export function SortDropdown({ value, onChange, className }: SortDropdownProps) {
  return (
    <label className={cn("group relative inline-flex min-w-[min(100%,220px)] flex-col gap-2", className)}>
      <span className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">Сортировка</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as CatalogSortId)}
          className={cn(
            "font-sans w-full min-h-[48px] cursor-pointer appearance-none rounded-none border-0 border-b border-line bg-transparent py-3 pr-10 text-[13px] tracking-[0.04em] text-graphite touch-manipulation",
            "outline-none transition-colors duration-480 focus:border-graphite hover:border-graphite/80",
          )}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-ash transition-transform duration-480 group-focus-within:translate-y-[-40%]"
          aria-hidden
        >
          ▾
        </span>
      </div>
    </label>
  );
}
