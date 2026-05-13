import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "font-sans min-h-[132px] w-full resize-none rounded-none border border-line bg-transparent px-0 py-3 text-[15px] text-graphite",
        "placeholder:text-ash/80 outline-none",
        "focus:border-graphite transition-colors duration-480",
        className,
      )}
      {...props}
    />
  ),
);

TextArea.displayName = "TextArea";
