import { PrismaClient, ProductAvailability } from "@prisma/client";
import { mockProducts } from "../constants/mock-products";
import type { Product } from "../types/product";

const prisma = new PrismaClient();

function uiAvailabilityToPrisma(a: Product["availability"]): ProductAvailability {
  switch (a) {
    case "in-stock":
      return "IN_STOCK";
    case "limited":
      return "LIMITED";
    default:
      return "MADE_TO_ORDER";
  }
}

async function main() {
  const categories = [
    { slug: "rings", title: "Кольца" },
    { slug: "earrings", title: "Серьги" },
    { slug: "pendants", title: "Кулоны" },
    { slug: "bracelets", title: "Браслеты" },
    { slug: "necklaces", title: "Колье" },
    { slug: "sets", title: "Комплекты" },
  ];

  for (const c of categories) {
    await prisma.category.upsert({
      where: { slug: c.slug },
      create: { title: c.title, slug: c.slug },
      update: { title: c.title },
    });
  }

  const collections = [
    { slug: "neve", title: "Neve Luce", description: "Снег, свет и холодное утро на коже." },
    { slug: "silenzio", title: "Silenzio", description: "Тишина перед словами, которые имеют вес." },
    { slug: "memoria", title: "Memoria Cordis", description: "Медальон как тихий сосуд памяти." },
    { slug: "luna", title: "Luna Tratta", description: "Ритм цепи — как прилив без суеты." },
    { slug: "aurora", title: "Aurora Quieta", description: "Свет камня без витринного крика." },
    { slug: "velo", title: "Velo Mano", description: "Два кольца — одна договорённость." },
  ];

  for (const col of collections) {
    await prisma.collection.upsert({
      where: { slug: col.slug },
      create: { title: col.title, slug: col.slug, description: col.description },
      update: { title: col.title, description: col.description },
    });
  }

  for (const p of mockProducts) {
    const storyParts = [p.storyQuote, p.storyBody].filter(Boolean);
    const story = storyParts.length ? storyParts.join("\n\n") : null;
    const stock = p.availability === "in-stock" ? 2 : 0;

    const category = p.catalogCategory
      ? await prisma.category.findUnique({ where: { slug: p.catalogCategory } })
      : null;
    const collection = p.collectionId
      ? await prisma.collection.findUnique({ where: { slug: p.collectionId } })
      : null;

    await prisma.product.upsert({
      where: { slug: p.slug },
      create: {
        slug: p.slug,
        title: p.name,
        shortDescription: p.subtitle ?? null,
        fullDescription: p.description,
        story,
        emotionalLead: p.emotionalLead ?? null,
        storyQuote: p.storyQuote ?? null,
        storyBody: p.storyBody ?? null,
        craftsmanshipTitle: p.craftsmanshipTitle ?? null,
        craftsmanshipBody: p.craftsmanshipBody ?? null,
        craftsmanshipImageUrl: p.craftsmanshipImageUrl ?? null,
        sizes: p.sizes ?? null,
        careInstructions: p.careInstructions ?? null,
        leadTime: p.leadTime ?? null,
        availability: uiAvailabilityToPrisma(p.availability ?? "made-to-order"),
        priceCents: p.priceRub * 100,
        material: p.material ?? null,
        stock,
        isFeatured: Boolean(p.featured),
        categoryId: category?.id,
        collectionId: collection?.id,
        images: {
          create: p.images.map((img, i) => ({
            url: img.url,
            alt: img.alt,
            sortOrder: img.sortOrder ?? i,
          })),
        },
      },
      update: {
        title: p.name,
        shortDescription: p.subtitle ?? null,
        fullDescription: p.description,
        story,
        emotionalLead: p.emotionalLead ?? null,
        storyQuote: p.storyQuote ?? null,
        storyBody: p.storyBody ?? null,
        craftsmanshipTitle: p.craftsmanshipTitle ?? null,
        craftsmanshipBody: p.craftsmanshipBody ?? null,
        craftsmanshipImageUrl: p.craftsmanshipImageUrl ?? null,
        sizes: p.sizes ?? null,
        careInstructions: p.careInstructions ?? null,
        leadTime: p.leadTime ?? null,
        availability: uiAvailabilityToPrisma(p.availability ?? "made-to-order"),
        priceCents: p.priceRub * 100,
        material: p.material ?? null,
        stock,
        isFeatured: Boolean(p.featured),
        categoryId: category?.id,
        collectionId: collection?.id,
        images: {
          deleteMany: {},
          create: p.images.map((img, i) => ({
            url: img.url,
            alt: img.alt,
            sortOrder: img.sortOrder ?? i,
          })),
        },
      },
    });
  }

  await prisma.user.upsert({
    where: { email: "concierge@attimo.studio" },
    create: {
      email: "concierge@attimo.studio",
      name: "Attimo Concierge",
      role: "ADMIN",
      password: null,
    },
    update: { name: "Attimo Concierge", role: "ADMIN" },
  });

  console.log("Seed completed: categories, collections, products, demo admin user.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
