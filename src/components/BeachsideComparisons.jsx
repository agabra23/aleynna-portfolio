import React from "react";

const BeachsideComparisons = ({ pinkImages, blueImages }) => {
  const arrow = (
    <svg
      className="md:w-6"
      width="20px"
      height="100%"
      viewBox="0 0 23 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Arrow 1"
        d="M10.4393 30.0607C11.0251 30.6464 11.9749 30.6464 12.5607 30.0607L22.1066 20.5147C22.6924 19.9289 22.6924 18.9792 22.1066 18.3934C21.5208 17.8076 20.5711 17.8076 19.9853 18.3934L11.5 26.8787L3.01472 18.3934C2.42893 17.8076 1.47919 17.8076 0.893399 18.3934C0.307612 18.9792 0.307612 19.9289 0.893399 20.5147L10.4393 30.0607ZM10 6.55671e-08L10 29L13 29L13 -6.55671e-08L10 6.55671e-08Z"
        fill="black"
      />
    </svg>
  );

  return (
    <div className="grid grid-cols-4 grid-rows-[1fr_max_1fr] gap-x-[10px] gap-y-[15px] md:gap-x-[25px] justify-items-center flex-1">
      {pinkImages.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index}>{arrow}</div>
      ))}
      {blueImages.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default BeachsideComparisons;
