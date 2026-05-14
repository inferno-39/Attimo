import { cn } from "@/utils/cn";

type Align = "left" | "center";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  className?: string;
  /** Тёмный фон (например блок рассылки) */
  surface?: "light" | "dark";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  surface = "light",
}: SectionTitleProps) {
  const dark = surface === "dark";

  return (
    <div
      className={cn(
        "space-y-5",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-sans text-caption-wide uppercase tracking-[0.28em]",
            dark ? "text-canvas/55" : "text-ash",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-serif text-display-lg text-balance md:text-[clamp(2.25rem,4.2vw,3.25rem)]",
          dark ? "text-canvas" : "text-graphite",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-xl font-sans text-body-readable text-pretty md:leading-[1.75]",
            dark ? "text-canvas/72" : "text-stone",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
