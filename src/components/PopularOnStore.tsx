import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "react-multi-carousel/lib/styles.css";
// import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

import { productCategories } from "../data/data";
import PopularOnStoreCard from "./PopularOnStoreCard";

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
    <div className="lg:py-24 py-16 lg:px-16 px-6">
      <div className="w-full text-center">
        <h3 className="text-appGreen text-lg my-2">Shop By Category</h3>
        <h1 className="text-5xl font-medium my-3">
          Popular on the Shofi store.
        </h1>
      </div>
      <Swiper
        direction={"horizontal"}
        freeMode={true}
        mousewheel={true}
        scrollbar={{ draggable: true }}
        spaceBetween={10}
        // slidesPerView={5}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        // modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper flex justify-center w-full"
      >
        {productCategories.map((Category, index) => (
          <SwiperSlide>
            <div
              key={Category.id}
              className="flex justify-center w-full mt-9 mb-14"
            >
              <PopularOnStoreCard
                title={Category.title}
                image={Category.image}
                bgColor={bgColors[index % bgColors.length]}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularOnStore;
