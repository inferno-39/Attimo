import {
  Hero,
  PhilosophySection,
  EditorialCollectionsSection,
  CraftStorySection,
  FeaturedProductsSection,
  EditorialGallerySection,
  Testimonials,
  Newsletter,
} from "@/components/sections";
import { listProducts } from "@/services/product-service";

export default async function HomePage() {
  const featured = await listProducts(true);
  const products = featured.length ? featured : await listProducts(false);

  return (
    <>
      <Hero />
      <PhilosophySection />
      <EditorialCollectionsSection />
      <CraftStorySection />
      <FeaturedProductsSection products={products} />
      <EditorialGallerySection />
      <Testimonials />
      <Newsletter />
    </>
  );
}
