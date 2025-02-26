import { Icon } from "@iconify/react/dist/iconify.js";
import { sideMenuBarData } from "../data/data";
import { useState } from "react";

const SideMenuBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const bgColors = [
    "bg-[#E5F0E2]",
    "bg-[#F3E0E4]",
    "bg-[#F5F0ED]",
    "bg-[#E6F1E0]",
    "bg-[#F3E3D6]",
    "bg-[#F7E9E8]",
  ];

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="hidden md:block bg-white cursor-pointer ml-8 px-6 py-3.5 w-full mt-1.5 border border-appBlack/10 shadow-sm absolute z-50 max-w-[18rem]">
      {sideMenuBarData.map((menu, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          className="flex justify-between items-center border-b border-b-black/10 relative"
        >
          {/* Main Menu Content */}
          <div className="flex items-center my-3 gap-3">
            <img
              src={menu.image}
              alt=""
              className={`h-10 w-10 object-cover flex justify-center items-center rounded-full ${
                bgColors[index % bgColors.length]
              }`}
            />
            <h2>{menu.title}</h2>
          </div>

          <div>
            <span>
              {menu.submenus && <Icon icon="meteor-icons:chevron-right" />}
            </span>
          </div>

          {/* Submenu */}
          {menu.submenus && activeIndex === index && (
            <div className="px-4 py-3 shadow-md bg-white w-[14rem] transition-all z-50 duration-1000 absolute left-[15.9rem] top-0 ml-2">
              {/* Use absolute positioning to place it outside the main menu */}
              {menu.submenus.map((submenu, subIndex) => (
                <div
                  key={subIndex}
                  className="mb-1 hover:text-appGreen hover:h-5 "
                >
                  <h2>{submenu.title}</h2>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideMenuBar;
