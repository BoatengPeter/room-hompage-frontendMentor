import { useState } from "react";
import HeaderLeft from "../HeaderLeft";
import HeaderRight from "../HeaderRight";
import { rooms } from "../../../Data/rooms";

const Header = () => {
  const [currenIndex, setCurrentIndex] = useState(0);
  const previous = () => {
    const firstSlide = currenIndex === 0;
    const newIndex = firstSlide ? rooms.length - 1 : currenIndex - 1;
    setCurrentIndex(newIndex);
  };
  const next = () => {
    const isLastSlide = currenIndex === rooms.length - 1;
    const newIndex = isLastSlide ? 0 : currenIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" grid grid-cols-1  md:grid-cols-[1fr,0.7fr] w-full   md:h-[30rem]">
      <HeaderLeft
        // image={`bg-[url('${rooms[currenIndex].desktopRoom}')]`}
        image={{
          backgroundImage: `url(${rooms[currenIndex].desktopRoom})`,
        }}
        prevSlide={previous}
        nextSlide={next}
      />
      <HeaderRight
        header={rooms[currenIndex].header}
        text={rooms[currenIndex].text}
        prevSlide={previous}
        nextSlide={next}
      />
    </div>
  );
};

export default Header;
