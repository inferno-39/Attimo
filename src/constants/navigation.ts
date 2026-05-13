export type NavLink = {
  href: string;
  label: string;
};

export const mainNavLinks: NavLink[] = [
  { href: "/catalog", label: "Изделия" },
  { href: "/about", label: "О бренде" },
  { href: "/contact", label: "Контакты" },
];

export const utilityNavLinks: NavLink[] = [
  { href: "/wishlist", label: "Избранное" },
  { href: "/cart", label: "Корзина" },
];
