/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
import SlideChangerBtn from "./SlideChangerBtn";
import Navbar from "./Layouts/Navbar";
const HeaderLeft = ({ image, prevSlide, nextSlide }) => {
  return (
    <div className="relative  w-full h-full  md:h-full   ">
      <div className="w-full h-full">
        <div
          className={twMerge(
            "w-full h-[20rem] md:h-full  bg-no-repeat bg-cover hover:cursor-pointer   "
          )}
          style={image}
        >
          <SlideChangerBtn
            changeState={"md:hidden absolute bottom-0  "}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
