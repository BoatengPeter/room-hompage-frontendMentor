import ShopNowBtn from "./ShopNowBtn";
import SlideChangerBtn from "./SlideChangerBtn";

const HeaderRight = ({ header, text, prevSlide, nextSlide }) => {
  return (
    <div className="relative w-full flex flex-col justify-between bg-White  ">
      <div className="mx-auto px-6  py-4  lg:px-16">
        <h1 className="text-VeryDarkGray font-bold text-xl mb-3 leading-tight">
          {header}
        </h1>
        <p className="text-sm lg:text-base text-DarkGray mb-3 tracking-wide">
          {text}
        </p>
        <ShopNowBtn />
      </div>

      <SlideChangerBtn
        changeState={"hidden md:flex md:w-32   "}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </div>
  );
};

export default HeaderRight;
