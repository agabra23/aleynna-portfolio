import React from "react";

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className="flex justify-center items-center min-w-[200px] h-full hover-scale-90 hover-shadow-md rounded-3xl">
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
  );
}
