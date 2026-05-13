import {
  Hero,
  CollectionSection,
  StorySection,
  GallerySection,
  Testimonials,
  Newsletter,
} from "@/components/sections";
import { listProducts } from "@/services/product-service";

export default async function HomePage() {
  const featured = await listProducts(true);

  return (
    <>
      <Hero />
      <CollectionSection products={featured.length ? featured : await listProducts(false)} />
      <StorySection />
      <GallerySection />
      <Testimonials />
      <Newsletter />
    </>
  );
}
