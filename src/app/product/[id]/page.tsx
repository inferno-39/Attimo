import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import {
  ProductHero,
  StorySection,
  CraftsmanshipSection,
  ProductTabs,
  RelatedProducts,
} from "@/components/product/detail";
import { mockProducts } from "@/constants/mock-products";
import { editorialDefaults } from "@/lib/product-editorial";
import { getProductById, listRelatedProducts } from "@/services/product-service";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return mockProducts.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return {};

  return {
    title: `${product.name} · Attimo`,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  const editorial = editorialDefaults(product);
  const related = await listRelatedProducts(product.slug, 3);

  return (
    <article className="bg-canvas">
      <ProductHero product={product} editorial={editorial} />

      <section className="pb-section md:pb-28">
        <Container size="wide" className="border-t border-line/50 pt-12 md:pt-16">
          <ProductTabs product={product} editorial={editorial} />
        </Container>
      </section>

      <StorySection editorial={editorial} />
      <CraftsmanshipSection editorial={editorial} productName={product.name} />
      <RelatedProducts products={related} />
    </article>
  );
}
