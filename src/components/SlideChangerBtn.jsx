import { twMerge } from "tailwind-merge";
import left from "../../assets/images/icon-angle-left.svg";
import right from "../../assets/images/icon-angle-right.svg";
const SlideChangerBtn = ({ changeState, prevSlide, nextSlide }) => {
  return (
    <div className={twMerge("flex w-28  ", changeState)}>
      <div
        className="bg-Black w-full p-5 hover:bg-DarkGray focus:bg-DarkGray cursor-pointer "
        onClick={prevSlide}
      >
        <img src={left} alt="icon-left" />
      </div>
      <div
        className="bg-Black w-full p-5 hover:bg-DarkGray focus:bg-DarkGray cursor-pointer"
        onClick={nextSlide}
      >
        <img src={right} alt="icon-left" />
      </div>
    </div>
  );
};

export default SlideChangerBtn;
