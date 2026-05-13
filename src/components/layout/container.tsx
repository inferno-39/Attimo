import type { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

export function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
