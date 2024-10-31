export interface nav {
  title: string;
  path: string;
  icons?: string;
  subMneus?: { title: string; path: string }[];
}

export const navItems: nav[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
    subMneus: [
      { title: "Shop", path: "/shop" },
      { title: "Cart", path: "/cart" },
      { title: "Wishlist", path: "/wishlist" },
    ],
  },
  {
    title: "Pages",
    path: "/pages",
    subMneus: [
      { title: "About", path: "/about" },
      { title: "Login", path: "/login" },
      { title: "Register", path: "/register" },
      { title: "Profile", path: "/profile" },
      { title: "Checkout", path: "/checkout" },
    ],
  },
  {
    title: "Coupons",
    path: "/coupons",
  },
  {
    title: "Blog",
    path: "/blog",
    subMneus: [
      { title: "Blog Standard", path: "/blog" },
      { title: "Blog Details", path: "/blog-details" },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
