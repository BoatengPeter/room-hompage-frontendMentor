import logo from "../../../assets/images/logo.svg";
import hamburgerMenu from "../../../assets/images/icon-hamburger.svg";
import NavSmallScreens from "./NavSmallScreens";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <>
      <nav className="flex pt-8 px-5 items-center ">
        <div className="md:hidden order-1 " onClick={() => setIsopen(!isOpen)}>
          <img src={hamburgerMenu} alt="icon-menu" className="w-full" />
        </div>

        <div className=" mx-auto   md:mx-0">
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <ul className="hidden md:flex text-White text-base lowercase ml-12 items-center gap-5">
          <li className="hover:border-b-2">
            <a href="#"> Home</a>
          </li>
          <li className="hover:border-b-2">
            <a href="#"> Shop</a>
          </li>
          <li className="hover:border-b-2">
            <a href="#"> About</a>
          </li>
          <li className="hover:border-b-2 ">
            <a href="#"> Contact</a>
          </li>
        </ul>
      </nav>
      {isOpen && <NavSmallScreens handleCloseNav={() => setIsopen(!isOpen)} />}
    </>
  );
};

export default Navbar;
