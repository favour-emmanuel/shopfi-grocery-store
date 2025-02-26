import { useState } from "react";
import Tabs from "./Tabs";
import { productCategories } from "../data/data";

const featureTabs = [
  "All Products",
  "Frozen Foods",
  "Meat and Fish",
  "Milk and Dry",
];

const FeaturedProducts = () => {
  const [tab, setTab] = useState("frozen foods");

  const handleTabChange = (title: string) => {
    setTab(title);
  };
  return (
    <div className="lg:py-16 py-10 lg:px-16 px-10">
      <h3 className="text-appGreen text-lg my-2">All Product Shop</h3>
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-medium my-3">Featured Products</h1>
        <div className="">
          <Tabs
            active={tab === "All Products"}
            selectedTab={() => handleTabChange}
            count="8"
          >
            All Products
          </Tabs>
        </div>
        {productCategories
          .find((t) => t.id === tab)
          ?.products.map((product) => (
            <div key={product.productId}>
              <h3>{product.productIitle}</h3>
              <p>{product.productDesc}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
