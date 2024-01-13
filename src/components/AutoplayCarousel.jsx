import React from "react";
import { autoCardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
  return (
    // <div className="overflow-hidden relative h-full bg-offwhite w-full">
    //   <div className="flex relative -translate-x-0 left-0 justify-between bg-offwhite items-center gap-3 w-[200%] h-full animate-slider">
    //     {Object.keys(cardDetails).map((detailKey, index) => {
    //       return (
    //         <CarouselItem
    //           key={index}
    //           imgUrl={cardDetails[detailKey].imgUrl}
    //           imgTitle={cardDetails[detailKey].title}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>

    <div className="max-w-full overflow-hidden bg-offwhite ">
      <div className="flex py-2 w-min animate-slider">
        {Object.keys(autoCardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={autoCardDetails[detailKey].imgUrl}
              imgTitle={autoCardDetails[detailKey].title}
            />
          );
        })}
        {Object.keys(autoCardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={autoCardDetails[detailKey].imgUrl}
              imgTitle={autoCardDetails[detailKey].title}
            />
          );
        })}
      </div>
    </div>
  );
}
