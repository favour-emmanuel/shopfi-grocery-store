import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="lg:mt-14 bg-[#F4F7F9] lg:px-16 px-10">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <div className="lg:w-[8rem] w-[6.8rem]">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <p>
            We are a team of designers and developers that create high quality
            Website
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
