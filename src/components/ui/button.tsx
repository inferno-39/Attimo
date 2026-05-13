import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type Ref,
} from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

type Variant = "primary" | "ghost" | "outline" | "link";

type BaseProps = {
  variant?: Variant;
};

export type ButtonProps = BaseProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
  );

const base =
  "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-6 py-2.5 text-caption-wide uppercase tracking-[0.2em]";
const motion =
  "font-sans text-[11px] transition-all duration-480 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold/80 disabled:pointer-events-none disabled:opacity-40";

const variants: Record<Variant, string> = {
  primary:
    "bg-graphite text-canvas hover:bg-graphite/90 shadow-sm hover:shadow-md border border-graphite",
  ghost: "bg-transparent text-graphite hover:bg-mist/60 border border-transparent",
  outline:
    "bg-transparent border border-graphite text-graphite hover:bg-graphite hover:text-canvas",
  link: "bg-transparent underline-offset-[6px] hover:underline text-graphite px-1 border-0",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const cls = cn(base, motion, variants[variant], className);
    if ("href" in props && props.href) {
      const { href, ...anchorProps } = props;
      return (
        <Link ref={ref as Ref<HTMLAnchorElement>} href={href} className={cls} {...anchorProps} />
      );
    }
    const { disabled, ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        disabled={disabled}
        className={cls}
        {...buttonProps}
      />
    );
  },
);

Button.displayName = "Button";
