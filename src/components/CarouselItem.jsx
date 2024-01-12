import React from "react";

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className="flex justify-start items-center min-w-[200px] h-full rounded-3xl">
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
  );
}
