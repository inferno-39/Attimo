"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/utils/cn";

type ProductActionsProps = {
  productSlug: string;
  className?: string;
};

export function ProductActions({ productSlug, className }: ProductActionsProps) {
  const reduce = usePrefersReducedMotion();
  const [cartState, setCartState] = useState<"idle" | "loading" | "done">("idle");
  const [wishState, setWishState] = useState<"idle" | "on">("idle");

  const addToCart = () => {
    if (cartState === "loading") return;
    setCartState("loading");
    window.setTimeout(() => {
      setCartState("done");
      window.setTimeout(() => setCartState("idle"), 2200);
    }, 700);
  };

  const toggleWish = () => {
    setWishState((s) => (s === "on" ? "idle" : "on"));
  };

  return (
    <div className={cn("space-y-6 pb-[max(0.5rem,env(safe-area-inset-bottom))]", className)}>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Button
          className="min-h-[48px] min-w-[min(100%,200px)] px-10"
          disabled={cartState === "loading"}
          onClick={addToCart}
          aria-busy={cartState === "loading"}
        >
          {cartState === "loading" ? "Сохраняем…" : cartState === "done" ? "В корзине" : "Добавить в корзину"}
        </Button>
        <Button
          type="button"
          variant="outline"
          className={cn("min-h-[48px] min-w-[min(100%,200px)] px-10", wishState === "on" && "border-gold/60 bg-ivory/40")}
          onClick={toggleWish}
          aria-pressed={wishState === "on"}
        >
          {wishState === "on" ? "В избранном" : "В избранное"}
        </Button>
      </div>

      <AnimatePresence>
        {cartState === "done" ? (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: reduce ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[13px] text-stone max-w-md"
          >
            Объект «{productSlug}» отложен в корзину. Менеджер ателье свяжется для уточнения размера и срока.
          </motion.p>
        ) : null}
      </AnimatePresence>

      <div className="border-t border-line/60 pt-8 space-y-3">
        <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-graphite">Салон</p>
        <p className="font-sans text-[14px] text-stone leading-relaxed max-w-lg">
          Персональная примерка в тихой комнате с естественным светом. Разметка без размера — после мастер-слепков;
          сообщите при записи, если изделие подарочное.
        </p>
        <Button href="/contact" variant="ghost" className="px-0 underline-offset-8 border-0 lowercase">
          запросить приватный сеанс
        </Button>
      </div>
    </div>
  );
}
