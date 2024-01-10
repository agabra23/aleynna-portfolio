import React from "react";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
  return (
    <div className="overflow-hidden relative h-full bg-offwhite w-full">
      <div className="flex relative left-0 justify-center bg-offwhite items-center gap-3 w-[200%] h-full animate-slider">
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            />
          );
        })}
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            />
          );
        })}
      </div>
    </div>
  );
}
