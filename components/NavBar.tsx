import { FiSearch } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import CustomButton from "./CustomButton";
import { navLinks } from "@/constants";

const NavBar = () => {
  return (
    <nav className="absolute left-0 right-0 top-5 z-40 flex justify-between items-center mx-[84px]">
      <div>
        <h1 className="text-2xl font-bold">Vidmoo</h1>
      </div>

      <ul className="hidden md:flex gap-7 uppercase">
        {navLinks.map((link, i) => (
          <li
            key={i}
            className="px-1 cursor-pointer hover:border-b-[1px] hover:border-b-primary-theme hover:font-semibold hover:text-primary-theme"
          >
            {link}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex gap-7">
        <div className="flex gap-2 items-center">
          <FiSearch />
          <div className="border-[1px] border-white h-[60%] mx-3" />
          <BsGlobe2 />
          {/* IMPLEMENT GOOGLE TRANSLATE TO SPANISH */}
          EN
          <IoIosArrowDown />
        </div>

        <CustomButton title="sign in" containerStyles="px-[20px] py-[5px]" />
      </div>

      <div className="block md:hidden">
        <MdMenu size={28} />
      </div>
    </nav>
  );
};

export default NavBar;
