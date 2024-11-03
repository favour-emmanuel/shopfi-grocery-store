import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import PopularOnStore from "../components/PopularOnStore";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularOnStore />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
