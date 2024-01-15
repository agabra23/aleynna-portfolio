import React, { useState } from "react";
import { cardArray } from "./carousel-config";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ClickableCarousel = ({ desiredWidth = "250px" }) => {
  const [curr, setCurr] = useState(0);

  const nextSlide = () => {
    const isLastSlide = curr === cardArray.length - 1;
    const newIndex = isLastSlide ? 0 : curr + 1;
    setCurr(newIndex);
  };
  const prevSlide = () => {
    const isFirstSlide = curr === 0;
    const newIndex = isFirstSlide ? cardArray.length - 1 : curr - 1;
    setCurr(newIndex);
  };

  //   return (
  //     <div className="max-w-[1000px] h-[580px] w-full mx-auto py-[30px] relative">
  //       <div
  //         style={{ backgroundImage: `url(${cardArray[curr].imgUrl})` }}
  //         className="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500"
  //       ></div>

  //       {/* Left Arrow */}
  //       <div className="absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 text-xl rounded-full p-2 bg-black/20 text-offwhite cursor-pointer transition-all duration-500 hover:bg-black/50">
  //         <BsChevronCompactLeft onClick={prevSlide} size={10} />
  //       </div>

  //       {/* Right Arrow */}
  //       <div className="absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 text-xl rounded-full p-2 bg-black/20 text-offwhite cursor-pointer transition-all duration-500 hover:bg-black/50">
  //         <BsChevronCompactRight onClick={nextSlide} size={10} />
  //       </div>
  //     </div>
  //   );
  return (
    <div className="flex justify-center">
      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="self-center text-xl rounded-full border-2 border-black p-2 bg-transparent text-black cursor-pointer transition-all duration-500 hover:bg-black hover:text-offwhite"
      >
        <BsChevronLeft size={20} />
      </div>
      <div
        // style={{ backgroundImage: `url(${cardArray[curr].imgUrl})` }}
        className="duration-500 relative"
      >
        <img
          className={`max-w-[${desiredWidth}]`}
          src={cardArray[curr].imgUrl}
          alt=""
        />

        <div className="absolute left-1/2 -translate-x-1/2 py-[10px] flex justify-center items-center gap-2">
          {cardArray.map((_, i) => (
            <div
              key={i}
              className={` p-1 rounded-full border border-black transition-all duration-500 cursor-pointer hover:scale-105 hover:bg-black`}
              onClick={() => setCurr(i)}
              style={{
                opacity: `${curr === i ? 1 : 0.4}`,
                backgroundColor: `${curr === i ? "black" : ""}`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="self-center text-xl rounded-full border-2 border-black p-2 bg-transparent text-black cursor-pointer transition-all duration-500 hover:bg-black hover:text-offwhite"
      >
        <BsChevronRight className="translate-x-0" size={20} />
      </div>
    </div>
  );
};

export default ClickableCarousel;
