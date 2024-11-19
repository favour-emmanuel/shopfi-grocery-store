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

export interface category {
  image?: string;
  id: string;
  title: string;
  products: product[];
}

export interface product {
  productImage: string;
  productIitle: string;
  productDesc: string;
  productId: string;
  productQty: string;
  availability?: boolean;
  productReview: string;
  productPrice: string;
  productDiscount?: string;
}

export const productCategories: category[] = [
  {
    image: "./product-images/category-1-removebg-preview.png",
    id: "1",
    title: "Frozen Foods",
    products: [
      {
        productImage: "./product-images/froz1.jpg",
        productIitle: "Ergonomic Linen Pants",
        productDesc: "",
        productId: "1",
        productQty: "4",
        availability: false,
        productReview: "",
        productPrice: "$50.00",
        productDiscount: "$49.00",
      },
      {
        productImage: "./product-images/froz2.jpg",
        productIitle: "Grapefruit fun facts",
        productDesc: "",
        productId: "1",
        productQty: "8",
        availability: false,
        productReview: "",
        productPrice: "$60.00",
      },
      {
        productImage: "./product-images/froz3.jpg",
        productIitle: "Dried Star Anise",
        productDesc: "",
        productId: "1",
        productQty: "5",
        availability: false,
        productReview: "",
        productPrice: "$15.00",
      },
    ],
  },
  {
    image: "./product-images/category-2-removebg-preview.png",
    id: "2",
    title: "Meat and Fish",
    products: [
      {
        productImage: "./product-images/froz1.jpg",
        productIitle: "Ergonomic Linen Pants",
        productDesc: "",
        productId: "1",
        productQty: "4",
        availability: false,
        productReview: "",
        productPrice: "$50.00",
        productDiscount: "$49.00",
      },
      {
        productImage: "./product-images/froz2.jpg",
        productIitle: "Grapefruit fun facts",
        productDesc: "",
        productId: "1",
        productQty: "8",
        availability: false,
        productReview: "",
        productPrice: "$60.00",
      },
      {
        productImage: "./product-images/froz3.jpg",
        productIitle: "Dried Star Anise",
        productDesc: "",
        productId: "1",
        productQty: "5",
        availability: false,
        productReview: "",
        productPrice: "$15.00",
      },
    ],
  },

  {
    image: "./product-images/category-3-removebg-preview.png",
    id: "3",
    title: "Milk and Diary",
    products: [
      {
        productImage: "./product-images/froz1.jpg",
        productIitle: "Ergonomic Linen Pants",
        productDesc: "",
        productId: "1",
        productQty: "4",
        availability: false,
        productReview: "",
        productPrice: "$50.00",
        productDiscount: "$49.00",
      },
      {
        productImage: "./product-images/froz2.jpg",
        productIitle: "Grapefruit fun facts",
        productDesc: "",
        productId: "1",
        productQty: "8",
        availability: false,
        productReview: "",
        productPrice: "$60.00",
      },
      {
        productImage: "./product-images/froz3.jpg",
        productIitle: "Dried Star Anise",
        productDesc: "",
        productId: "1",
        productQty: "5",
        availability: false,
        productReview: "",
        productPrice: "$15.00",
      },
    ],
  },

  {
    image: "./product-images/category-4-removebg-preview.png",
    id: "4",
    title: "Beverages",
    products: [
      {
        productImage: "./product-images/froz1.jpg",
        productIitle: "Ergonomic Linen Pants",
        productDesc: "",
        productId: "1",
        productQty: "4",
        availability: false,
        productReview: "",
        productPrice: "$50.00",
        productDiscount: "$49.00",
      },
      {
        productImage: "./product-images/froz2.jpg",
        productIitle: "Grapefruit fun facts",
        productDesc: "",
        productId: "1",
        productQty: "8",
        availability: false,
        productReview: "",
        productPrice: "$60.00",
      },
      {
        productImage: "./product-images/froz3.jpg",
        productIitle: "Dried Star Anise",
        productDesc: "",
        productId: "1",
        productQty: "5",
        availability: false,
        productReview: "",
        productPrice: "$15.00",
      },
    ],
  },

  {
    image: "./product-images/category-5-removebg-preview.png",
    id: "5",
    title: "Vegatables",
    products: [
      {
        productImage: "./product-images/froz1.jpg",
        productIitle: "Ergonomic Linen Pants",
        productDesc: "",
        productId: "1",
        productQty: "4",
        availability: false,
        productReview: "",
        productPrice: "$50.00",
        productDiscount: "$49.00",
      },
      {
        productImage: "./product-images/froz2.jpg",
        productIitle: "Grapefruit fun facts",
        productDesc: "",
        productId: "1",
        productQty: "8",
        availability: false,
        productReview: "",
        productPrice: "$60.00",
      },
      {
        productImage: "./product-images/froz3.jpg",
        productIitle: "Dried Star Anise",
        productDesc: "",
        productId: "1",
        productQty: "5",
        availability: false,
        productReview: "",
        productPrice: "$15.00",
      },
    ],
  },
  {
    image: "./product-images/category-6-removebg-preview.png",
    id: "6",
    title: "Fruits",
    products: [
      {
        productImage: "./product-images/froz1.jpg",
        productIitle: "Ergonomic Linen Pants",
        productDesc: "",
        productId: "1",
        productQty: "4",
        availability: false,
        productReview: "",
        productPrice: "$50.00",
        productDiscount: "$49.00",
      },
      {
        productImage: "./product-images/froz2.jpg",
        productIitle: "Grapefruit fun facts",
        productDesc: "",
        productId: "1",
        productQty: "8",
        availability: false,
        productReview: "",
        productPrice: "$60.00",
      },
      {
        productImage: "./product-images/froz3.jpg",
        productIitle: "Dried Star Anise",
        productDesc: "",
        productId: "1",
        productQty: "5",
        availability: false,
        productReview: "",
        productPrice: "$15.00",
      },
    ],
  },
  {
    image: "./product-images/category-6-removebg-preview.png",
    id: "6",
    title: "Fruits",
    products: [
      {
        productImage: "./product-images/froz1.jpg",
        productIitle: "Ergonomic Linen Pants",
        productDesc: "",
        productId: "1",
        productQty: "4",
        availability: false,
        productReview: "",
        productPrice: "$50.00",
        productDiscount: "$49.00",
      },
      {
        productImage: "./product-images/froz2.jpg",
        productIitle: "Grapefruit fun facts",
        productDesc: "",
        productId: "1",
        productQty: "8",
        availability: false,
        productReview: "",
        productPrice: "$60.00",
      },
      {
        productImage: "./product-images/froz3.jpg",
        productIitle: "Dried Star Anise",
        productDesc: "",
        productId: "1",
        productQty: "5",
        availability: false,
        productReview: "",
        productPrice: "$15.00",
      },
    ],
  },
  {
    image: "./product-images/category-6-removebg-preview.png",
    id: "6",
    title: "Fruits",
    products: [
      {
        productImage: "./product-images/froz1.jpg",
        productIitle: "Ergonomic Linen Pants",
        productDesc: "",
        productId: "1",
        productQty: "4",
        availability: false,
        productReview: "",
        productPrice: "$50.00",
        productDiscount: "$49.00",
      },
      {
        productImage: "./product-images/froz2.jpg",
        productIitle: "Grapefruit fun facts",
        productDesc: "",
        productId: "1",
        productQty: "8",
        availability: false,
        productReview: "",
        productPrice: "$60.00",
      },
      {
        productImage: "./product-images/froz3.jpg",
        productIitle: "Dried Star Anise",
        productDesc: "",
        productId: "1",
        productQty: "5",
        availability: false,
        productReview: "",
        productPrice: "$15.00",
      },
    ],
  },
];

export interface SocialMedia {
  icon: string;
  link: string;
}
export const socialIcons: SocialMedia[] = [
  { icon: "uim:facebook-f", link: "" },
  {
    icon: "entypo-social:twitter",
    link: "",
  },
  {
    icon: "bxl:linkedin",
    link: "",
  },
  {
    icon: "mdi:vimeo",
    link: "",
  },
];

export interface footerItem {
  label: string;
  icon?: string;
}

export interface footerData {
  title: string;
  items: footerItem[];
}

export const footerItems: footerData[] = [
  {
    title: "My Account",
    items: [
      { label: "My Account" },
      { label: "Track Orders" },
      { label: "Shipping" },
      { label: "Wishlist" },
      { label: "Order History" },
      { label: "Returns" },
    ],
  },

  {
    title: "Information",
    items: [
      { label: "Our Story" },
      { label: "Careers" },
      { label: "Privacy Policy" },
      { label: "Terms & Condition" },
      { label: "Latest News" },
      { label: "Contact" },
    ],
  },

  {
    title: "Talk To Us",
    items: [
      { label: "Got Questions ? Call Us" },
      { icon: "mage:phone-call", label: "+670 412 98 762" },
      { icon: "iconamoon:email-light", label: "shopfi@yahoo.com" },
      { icon: "ep:location", label: "Hollow str. Chevron, Lagos 1245" },
    ],
  },
];

export interface sideMenuBar {
  image: string;
  title: string;
  id: string;
  submenus?: { title: string; path: string }[];
}

export const sideMenuBarData: sideMenuBar[] = [
  {
    image: "./product-images/category-1-removebg-preview.png",
    id: "1",
    title: "Frozen Foods",
    submenus: [{ title: "Baby Food", path: "" }],
  },
];
