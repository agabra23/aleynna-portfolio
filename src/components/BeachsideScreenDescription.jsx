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
      className={`md:flex ${
        reverse ? "flex-row-reverse" : ""
      } gap-[30px] items-center justify-center w-full md:max-w-[1000px] `}
    >
      <div
        className={`flex justify-center ${
          reverse ? "md:justify-start" : "md:justify-end"
        } gap-[10px] mb-[30px] md:mb-0`}
      >
        <div className="flex flex-col gap-[10px]">
          <div className=" max-w-[200px]">
            <img
              className="border border-black/20 h-auto object-cover"
              src={imageSrc1}
              alt={cap1}
            />
          </div>
          <p className="uppercase text-center font-helvetica text-[16px] md:text-lg max-[390px]:text-[10px] font-thin">
            {cap1}
          </p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="max-w-[200px]">
            <img
              className="border border-black/20 h-auto object-cover"
              src={imageSrc2}
              alt={cap2}
            />
          </div>
          <p className="uppercase text-center font-helvetica text-[16px] md:text-lg max-[390px]:text-[10px] font-thin">
            {cap2}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[10px] md:max-w-[40%] mb-[30px] md:mb-0">
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
