import heroImg from "../assets/images/hero-img.png";
import textImg from "../assets/images/today's-special.png";
import shape1 from "../assets/images/shape-1.png";
import shape2 from "../assets/images/shape-2.png";
import shape3 from "../assets/images/shape-3.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full bg-appGray relative lg:py-[6rem] overflow-hidden flex flex-col lg:flex-row lg:gap-y-0 gap-y-28 lg:gap-x-10  justify-between ">
      <div className="w-full lg:py-0 py-14 lg:px-14 px-5 max-w-[46rem]">
        <div className="relative">
          <img
            src={shape1}
            alt=""
            className="absolute lg:top-[-5rem] top-[-3rem] left-28 lg:left-[6rem] lg:my-4"
          />
          <img src={textImg} alt="" />
          <img
            src={shape2}
            alt=""
            className="absolute lg:left-[29rem] right-4"
          />
          <img
            src={shape3}
            alt=""
            className="absolute lg:top-[18rem] lg:left-[22rem] right-4 top-[15rem] left-[15rem]"
          />
        </div>
        <h1 className="text-appBlack my-2 w-full font-semibold lg:text-8xl text-6xl">
          The Online Grocery Store
        </h1>

        <Link to={"/shop"}>
          <button className="w-full lg:my-10 my-[2rem] max-w-[12rem] py-3.5 px-2.5 rounded-full bg-appGreen text-white hover:bg-[#557950]">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="relative lg:py-0 py-20 lg:my-0 my-16 ">
        <img
          src={heroImg}
          alt=""
          className="absolute lg:right-[-10rem] right-[-2.8rem] lg:max-w-[45rem] bottom-0  max-w-[38rem] "
        />
      </div>
    </div>
  );
};

export default Hero;
