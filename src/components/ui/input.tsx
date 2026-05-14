import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "font-sans min-h-[48px] w-full rounded-none border border-line bg-transparent px-0 py-3.5 text-body-readable text-graphite",
        "placeholder:text-ash/80 outline-none ring-0",
        "focus:border-graphite transition-colors duration-480",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
