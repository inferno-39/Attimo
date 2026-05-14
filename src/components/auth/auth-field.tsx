import type { ReactNode } from "react";

export function AuthField({
  htmlFor,
  label,
  children,
  hint,
  error,
}: {
  htmlFor: string;
  label: string;
  children: ReactNode;
  hint?: string;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block font-sans text-caption-wide uppercase tracking-[0.22em] text-stone"
      >
        {label}
      </label>
      {children}
      {hint ? <p className="font-sans text-[12px] text-ash/90 leading-relaxed">{hint}</p> : null}
      {error ? (
        <p className="font-sans text-[12px] text-graphite/80 leading-relaxed" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
