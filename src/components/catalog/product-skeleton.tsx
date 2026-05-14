import { cn } from "@/utils/cn";

export function ProductSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse", className)}>
      <div className="aspect-[4/5] w-full bg-mist/60" />
      <div className="mt-8 space-y-3">
        <div className="h-4 w-[66%] bg-mist/70" />
        <div className="h-3 w-[45%] bg-mist/50" />
        <div className="h-3 w-[32%] bg-mist/40" />
      </div>
    </div>
  );
}
