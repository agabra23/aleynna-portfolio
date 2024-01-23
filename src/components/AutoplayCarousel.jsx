import React from "react";
import { autoCardDetails } from "./carousel-config.jsx";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel({ slides, gap = "0px" }) {
  return (
    <div className="max-w-full overflow-hidden bg-offwhite ">
      <div
        className={`flex py-2 w-min animate-slider gap-[${gap}] items-center`}
      >
        {Object.keys(slides).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={slides[detailKey].imgUrl}
              imgTitle={slides[detailKey].title}
            />
          );
        })}
        {Object.keys(slides).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={slides[detailKey].imgUrl}
              imgTitle={slides[detailKey].title}
            />
          );
        })}
      </div>
    </div>
  );
}
