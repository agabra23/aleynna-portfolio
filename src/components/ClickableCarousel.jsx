import React, { useState } from "react";
import { cardArray } from "./carousel-config";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ClickableCarousel = () => {
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
    <div className="max-w-[1000px] max-h-[100vw] h-[800px] w-full mx-auto flex relative">
      {/* Left Arrow */}
      <div className="self-center text-xl rounded-full p-2 bg-black/20 text-offwhite cursor-pointer transition-all duration-500 hover:bg-black/50">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div
        style={{ backgroundImage: `url(${cardArray[curr].imgUrl})` }}
        className=" w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500"
      ></div>

      {/* Right Arrow */}
      <div className="self-center text-xl rounded-full p-2 bg-black/20 text-offwhite cursor-pointer transition-all duration-500 hover:bg-black/50">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="absolute -bottom-[30px] left-1/2 -translate-x-1/2 py-[10px] flex justify-center items-center gap-2">
        {cardArray.map((_, i) => (
          <div
            key={i}
            className={`bg-black/20 p-1 rounded-full transition-all duration-500 cursor-pointer hovers:cale-105 hover:bg-black/50
                ${curr === i ? "scale-105 bg-black/50" : ""}
              `}
            onClick={() => setCurr(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ClickableCarousel;
