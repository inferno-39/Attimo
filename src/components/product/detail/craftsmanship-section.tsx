import Image from "next/image";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/common/fade-in";
import type { EditorialResolved } from "@/lib/product-editorial";

type CraftsmanshipSectionProps = {
  editorial: EditorialResolved;
  productName: string;
};

export function CraftsmanshipSection({ editorial, productName }: CraftsmanshipSectionProps) {
  return (
    <section className="py-section md:py-28">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <FadeIn className="relative aspect-[4/5] min-h-[320px] w-full overflow-hidden bg-mist/30 sm:min-h-[400px]">
            <Image
              src={editorial.craftsmanshipImageUrl}
              alt={`Мастерство · ${productName}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </FadeIn>
          <div className="space-y-6 lg:pl-4">
            <FadeIn>
              <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Материалы и ремесло</p>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h2 className="font-serif text-display-lg text-graphite text-balance">{editorial.craftsmanshipTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.8] text-stone max-w-xl text-pretty">
                {editorial.craftsmanshipBody}
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="font-sans text-[13px] uppercase tracking-[0.16em] text-ash max-w-md leading-relaxed">
                Эксклюзивный выпуск без массового тиража. Каждое изделие сопровождается паспортом ателье и
                возможностью сервисного ухода в течение жизни владения.
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
