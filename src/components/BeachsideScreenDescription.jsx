import React from "react";

const BeachsideScreenDescription = ({
  imageSrc1,
  imageSrc2,
  cap1,
  cap2,
  heading,
  bullets,
  p1,
  reverse,
}) => {
  return (
    <div
      className={`bg-white rounded-3xl p-9 md:flex gap-[60px] items-center justify-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="grid grid-cols-[1fr_max_1fr] justify-center grid-rows-[auto,min-content] grid-flow-col gap-y-2 gap-x-[10px] mb-[30px] md:mb-0 place-items-center md:flex-1">
        <div className="min-w-[50px] max-w-[150px]">
          <img className="h-auto object-cover" src={imageSrc1} alt={cap1} />
        </div>
        <p className="uppercase text-center font-helvetica text-sm md:text-lg max-[390px]:text-[10px] font-thin">
          {cap1}
        </p>

        <svg
          className="md:w-6 -rotate-90 col-span-1 row-span-2 hidden md:block"
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

        <div className="min-w-[50px] max-w-[150px]">
          <img className="h-auto object-cover" src={imageSrc2} alt={cap2} />
        </div>
        <p className="uppercase text-center font-helvetica text-sm md:text-lg max-[390px]:text-[10px] font-thin">
          {cap2}
        </p>
      </div>
      <div className="md:flex-1 flex flex-col gap-[15px]">
        <h4 className="text-2xl font-medium font-helvetica">{heading}</h4>
        <ul className="list-inside list-disc pl-3">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        {p1}
      </div>
    </div>
  );
};

export default BeachsideScreenDescription;
