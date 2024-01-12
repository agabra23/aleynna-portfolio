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
      <div className="grid grid-cols-[1fr_1fr] justify-center grid-rows-[auto,min-content] grid-flow-col gap-y-2 gap-x-[10px] mb-[30px] md:mb-0 place-items-center md:flex-1">
        <div className="min-w-[50px] max-w-[150px]">
          <img className="h-auto object-cover" src={imageSrc1} alt={cap1} />
        </div>
        <p className="uppercase text-center font-helvetica text-[16px] md:text-lg max-[390px]:text-[10px] font-thin">
          {cap1}
        </p>

        <div className="min-w-[50px] max-w-[150px]">
          <img className="h-auto object-cover" src={imageSrc2} alt={cap2} />
        </div>
        <p className="uppercase text-center font-helvetica text-[16px] md:text-lg max-[390px]:text-[10px] font-thin">
          {cap2}
        </p>
      </div>
      <div className="md:flex-1 flex flex-col gap-[30px]">
        <h4 className="md:text-2xl text-xl font-medium font-helvetica">
          {heading}
        </h4>
        <ul className="list-inside list-disc pl-3 text-[16px] md:text-lg">
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
