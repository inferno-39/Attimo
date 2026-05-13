import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ProductGallery } from "@/components/product/product-gallery";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/common/fade-in";
import { mockProducts } from "@/constants/mock-products";
import { getProductById } from "@/services/product-service";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return mockProducts.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description.slice(0, 160),
  };
}

function formatPrice(rub: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(rub);
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  return (
    <Container className="py-16 lg:py-22">
      <div className="grid gap-16 lg:grid-cols-[1.07fr_0.93fr] items-start">
        <FadeIn>
          <ProductGallery images={product.images} productName={product.name} />
        </FadeIn>
        <div className="space-y-10 lg:pt-6">
          <FadeIn delay={0.06}>
            <p className="font-sans text-caption-wide uppercase tracking-[0.24em] text-ash">{product.slug}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-display-lg text-graphite">{product.name}</h1>
          </FadeIn>
          {product.subtitle ? (
            <FadeIn delay={0.12}>
              <p className="font-sans text-title-md uppercase tracking-[0.12em] text-stone">{product.subtitle}</p>
            </FadeIn>
          ) : null}
          <FadeIn delay={0.14}>
            <p className="font-serif text-[1.85rem] text-graphite">{formatPrice(product.priceRub)}</p>
          </FadeIn>
          {product.material ? (
            <FadeIn delay={0.16}>
              <p className="font-sans text-[13px] uppercase tracking-[0.18em] text-ash">{product.material}</p>
            </FadeIn>
          ) : null}
          <FadeIn delay={0.18}>
            <p className="font-sans text-[15px] leading-relaxed text-stone">{product.description}</p>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-wrap gap-4 pt-2">
            <Button className="px-10">Добавить в корзину</Button>
            <Button variant="outline" className="px-10">
              В избранное
            </Button>
          </FadeIn>
          <FadeIn delay={0.22} className="border-t border-line/70 pt-10 space-y-3">
            <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-graphite">Услуга салона</p>
            <p className="font-sans text-[14px] text-stone leading-relaxed max-w-lg">
              Персональная примерка в тихой комнате с естественным светом. Разметка без размера возможна после
              мастер-слепков — сообщите при записи, если объект подарочный или с интимной символикой.
            </p>
            <Button href="/contact" variant="ghost" className="px-0 underline-offset-8 border-0 lowercase">
              запросить приватный сеанс
            </Button>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}
