import { productCategories } from "../data/data";
import PopularOnStoreCard from "./PopularOnStoreCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PopularOnStore = () => {
  const bgColors = [
    "bg-[#E5F0E2]",
    "bg-[#F3E0E4]",
    "bg-[#F5F0ED]",
    "bg-[#E6F1E0]",
    "bg-[#F3E3D6]",
    "bg-[#F7E9E8]",
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="lg:py-24 py-16 lg:px-16 px-10">
      <div className="w-full text-center">
        <h3 className="text-appGreen text-lg my-2">Shop By Category</h3>
        <h1 className="text-5xl font-medium my-3">
          Popular on the Shofi store.
        </h1>
      </div>

      <Carousel
        responsive={responsive}
        draggable={true}
        swipeable={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="bg-blue-600"
        itemClass="flex gap-8 w-full bg-red-300"
      >
        {productCategories.map((Category, index) => (
          <div key={Category.id} className="flex">
            <PopularOnStoreCard
              title={Category.title}
              image={Category.image}
              bgColor={bgColors[index % bgColors.length]}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularOnStore;
