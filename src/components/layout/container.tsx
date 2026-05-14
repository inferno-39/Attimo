import type { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

type Size = "default" | "wide";

export function Container({
  children,
  className,
  size = "default",
}: PropsWithChildren<{ className?: string; size?: Size }>) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-7 md:px-10 lg:px-12",
        size === "wide" ? "max-w-editorial xl:px-16 2xl:px-20" : "max-w-[1200px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
