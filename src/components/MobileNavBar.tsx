import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navItems } from "../data/data";
import { FC, useState } from "react";

type mobileMenu = {
  isOpen: boolean;
  closeMobileMenu: () => void;
};

const MobileNavBar: FC<mobileMenu> = ({ isOpen, closeMobileMenu }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  if (!isOpen) {
    return null;
  }

  const mobileStyles = isOpen ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`md:hidden fixed z-10 right-0 left-0 bottom-0 top-0 w-full bg-black opacity-80 h-screen transform ${mobileStyles} transition-all duration-300`}
    >
      <div className=" bg-gray-400 fixed right-0 z-[1000] duration-300 w-full max-w-[26rem] h-screen px-8 py-5">
        <div className="flex justify-between">
          <div className="lg:w-[8rem] w-[6.8rem]">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          {/* close icon */}
          <div
            className="bg-appGray p-3 cursor-pointer"
            onClick={closeMobileMenu}
          >
            <Icon icon="weui:close-outlined" />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-y-3">
          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleMouseEnter(index)}
              className="flex items-center gap-3"
            >
              <Link
                to={item.path}
                className="flex justify-between w-full items-center text-base"
              >
                {item.title}
                {item.subMneus && (
                  <span className="text-base bg-appGray p-2">
                    <Icon icon="meteor-icons:chevron-right" />
                  </span>
                )}
              </Link>
              {item.subMneus && activeIndex === index && (
                <>
                  <div className="absolute top-full px-4 py-3 shadow-md bg-white w-52 transition-all z-50  duration-1000">
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
      </div>
    </div>
  );
};

export default MobileNavBar;
