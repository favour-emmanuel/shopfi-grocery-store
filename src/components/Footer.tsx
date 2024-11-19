import { Link } from "react-router-dom";
import logo from "../assets/images/logo-black.svg";
import { footerItems, socialIcons } from "../data/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <>
      <div className="lg:mt-14 bg-[#F4F7F9] lg:px-14 lg:py-20 py-10 px-6">
        {/* footer bottom */}
        <div className="flex flex-col lg:flex-row md:flex-row justify-between ">
          <div>
            <div className="lg:w-[8rem] w-[6.8rem] mb-7">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <p className="w-full max-w-[20rem] my-1">
              We are a team of designers and developers that create high quality
              Website
            </p>
            <div className="flex gap-3 items-center mt-7">
              {socialIcons.map((icon, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="border border-[#D9DBDE] p-3 rounded-full flex justify-center items-center hover:bg-appGreen hover:text-white cursor-pointer hover:duration-300"
                >
                  <Icon icon={icon.icon} />
                </div>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:mt-0 mt-8">
            {footerItems.map((category, index) => (
              <div key={index} className="lg:my-0 my-4">
                <h3 className="text-xl font-medium my-2">{category.title}</h3>
                <ul className="">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      {item.icon && (
                        <Icon icon={item.icon} className="text-xl" />
                      )}
                      <a
                        href="#"
                        className="my-1 flex items-center hover:text-appGreen hover:duration-300"
                      >
                        {item.label}
                      </a>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
