"use client";

import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { CollectionCard } from "@/components/product/collection-card";

const COLLECTIONS = [
  {
    href: "/catalog",
    src: "https://images.unsplash.com/photo-1617038260897-dd50e7f5e5c2?auto=format&fit=crop&w=1600&q=85",
    alt: "Крупный план кольца",
    title: "Neve Luce",
    subtitle: "Кольцо · снег и свет",
    aspectClassName: "aspect-[4/5] min-h-[320px] md:min-h-[480px]",
  },
  {
    href: "/catalog",
    src: "https://images.unsplash.com/photo-1515562149617-da6fba7e9246?auto=format&fit=crop&w=1600&q=85",
    alt: "Цепь и металл",
    title: "Luna Tratta",
    subtitle: "Браслет · ритм",
    aspectClassName: "aspect-[16/11] min-h-[220px]",
  },
  {
    href: "/catalog",
    src: "https://images.unsplash.com/photo-1611599554322-afc09c5cae31?auto=format&fit=crop&w=1400&q=85",
    alt: "Серьги",
    title: "Silenzio",
    subtitle: "Серьги · тишина перед словами",
    aspectClassName: "aspect-[4/3] min-h-[200px] md:min-h-[260px]",
  },
] as const;

export function EditorialCollectionsSection() {
  return (
    <AnimatedSection className="border-b border-line/50 bg-ivory/30">
      <Container size="wide" className="py-section md:py-30">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-start">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Коллекции"
              title="То, что мы выносим наружу редко и неспешно"
              description="Каждая линия — короткая серия. Мы не гоним объём: важнее сохранить темп, в котором металл и камень не теряют голос."
            />
          </div>
          <div className="flex flex-col gap-8 lg:col-span-7">
            <div className="lg:pl-4">
              <CollectionCard {...COLLECTIONS[0]} />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <CollectionCard {...COLLECTIONS[1]} />
              <CollectionCard {...COLLECTIONS[2]} />
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
