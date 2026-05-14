import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/common/fade-in";
import type { EditorialResolved } from "@/lib/product-editorial";

type StorySectionProps = {
  editorial: EditorialResolved;
};

export function StorySection({ editorial }: StorySectionProps) {
  return (
    <section className="bg-ivory/35 border-y border-line/40">
      <Container size="wide" className="py-section md:py-28">
        <div className="mx-auto max-w-4xl text-center space-y-10 md:space-y-12">
          <FadeIn>
            <blockquote className="font-serif text-[1.35rem] leading-snug text-graphite sm:text-[1.65rem] md:text-[clamp(1.5rem,2.8vw,2.25rem)] text-balance tracking-tight">
              «{editorial.storyQuote}»
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-[15px] md:text-[16px] leading-[1.85] text-stone text-pretty">
              {editorial.storyBody}
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
