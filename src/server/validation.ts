import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(8, "Пароль не короче 8 символов"),
  name: z.string().min(1, "Укажите имя").max(120),
});

export const orderItemSchema = z.object({
  productId: z.string().min(1),
  quantity: z.number().int().positive().max(99),
});

export const createOrderSchema = z.object({
  items: z.array(orderItemSchema).min(1, "Корзина пуста"),
});

export const wishlistBodySchema = z.object({
  productId: z.string().min(1),
});

export const productsQuerySchema = z.object({
  featured: z.enum(["true", "false"]).optional(),
  category: z.string().optional(),
  collection: z.string().optional(),
  material: z.string().optional(),
  sort: z.enum(["featured", "price-asc", "price-desc", "name-asc"]).optional(),
});

export type ProductsQuery = z.infer<typeof productsQuerySchema>;
