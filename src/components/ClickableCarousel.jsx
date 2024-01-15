import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ClickableCarousel = ({ desiredWidth = "250px", slides = [] }) => {
  const [curr, setCurr] = useState(0);

  const nextSlide = () => {
    const isLastSlide = curr === slides.length - 1;
    const newIndex = isLastSlide ? 0 : curr + 1;
    setCurr(newIndex);
  };
  const prevSlide = () => {
    const isFirstSlide = curr === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : curr - 1;
    setCurr(newIndex);
  };

  return (
    <div className="flex justify-center max-w-full gap-[10px]">
      {/* Left Arrow */}

      <div
        onClick={prevSlide}
        className="self-center text-xl rounded-full border-2 border-black p-2 bg-transparent text-black cursor-pointer transition-all duration-500 hover:bg-black hover:text-offwhite"
      >
        <BsChevronLeft size={15} />
      </div>

      {/* Component */}

      <div className="duration-500 relative">
        {typeof slides[curr] === "function" ? slides[curr]() : slides[curr]}

        {/* Dots */}

        <div
          className={`absolute left-1/2 -translate-x-1/2 py-[10px] flex justify-center gap-2 items-center w-full max-w-[${desiredWidth}]`}
        >
          {slides.map((_, i) => (
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
        <BsChevronRight className="translate-x-0" size={15} />
      </div>
    </div>
  );
};

export default ClickableCarousel;
