import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { navItems } from "../data/data";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <nav className="bg-appGreen text-white py-5 lg:px-8 px-7 flex justify-between items-center">
      {/* drawer */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="bg-[#7C9E77] py-2.5 px-3 rounded-md">
          <Icon icon="pepicons-pop:menu" className="text-xl" />
        </div>
        <div className="lg:w-[8rem]">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
      {/* nav menu item */}
      <div className="hidden relative lg:flex items-center gap-5 h-12 ">
        {navItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={item.path} className="flex items-center gap-1 text-base">
              {item.title}
              {item.subMneus && (
                <span className="text-base">
                  <Icon icon="fluent:chevron-down-20-filled" />
                </span>
              )}
            </Link>
            {item.subMneus && activeIndex === index && (
              <>
                <div className="absolute top-full  bg-white px-4 py-3 shadow-md  w-52  ease-in-out duration-300">
                  {item.subMneus.map((subItem, index) => (
                    <div
                      key={index}
                      className="block text-black hover:text-appGreen hover:duration-200 hover:ease-in-out"
                    >
                      <Link to={subItem.path}>{subItem.title}</Link>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {/* icons */}
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <div className="bg-[#7C9E77] h-12 w-12 flex justify-center items-center rounded-full">
            <Icon icon="octicon:person-24" className="text-lg" />
          </div>
          <div className="text-[16px]">
            <h3 className=" mb-0">hello</h3>
            <Link to={"/login"} className="font-medium">
              Login
            </Link>
          </div>
        </div>
        <div className="bg-[#7C9E77] h-11 w-11 flex justify-center items-center rounded-full cursor-pointer">
          <Icon icon="icon-park-outline:like" className="text-lg" />
        </div>
        <div className="bg-[#7C9E77] h-11 w-11 flex justify-center items-center rounded-full cursor-pointer">
          <Icon icon="solar:bag-4-linear" className="text-lg" />
        </div>
        <div className="bg-[#7C9E77] h-11 w-11 flex justify-center items-center rounded-full cursor-pointer">
          <Icon icon="tdesign:search" className="text-lg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
