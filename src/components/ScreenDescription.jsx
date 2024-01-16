import React from "react";

const ScreenDescription = ({
  imageSrc1,
  imageSrc2,
  cap1,
  cap2,
  p1,
  p2,
  reverse,
  heading,
}) => {
  return (
    // <div className="flex-1 md:flex gap-[60px] items-center justify-center w-full md:max-w-[1000px] ">
    //   <div className="grid grid-cols-2 justify-center grid-rows-[auto,min-content] grid-flow-col gap-y-2 gap-x-[10px] mb-[30px] md:mb-0 place-items-center md:flex-1">
    //     <div className="min-w-[50px] max-w-[150px]">
    //       <img className="h-auto object-cover" src={imageSrc1} alt={cap1} />
    //     </div>
    //     <p className="uppercase text-center font-helvetica text-[16px] md:text-lg max-[390px]:text-[10px] font-thin self-start">
    //       {cap1}
    //     </p>
    //     <div className="min-w-[50px] max-w-[150px]">
    //       <img className="h-auto object-cover" src={imageSrc2} alt={cap2} />
    //     </div>
    //     <p className="uppercase text-center font-helvetica text-[16px] md:text-lg max-[390px]:text-[10px] font-thin self-start">
    //       {cap2}
    //     </p>
    //   </div>
    //   <div className="md:flex-1">
    //     <p className="text-[16px] md:text-lg font-thin mb-[10px]">{p1}</p>
    //     <p className="text-[16px] md:text-lg font-thin">{p2}</p>
    //   </div>
    // </div>
    <div
      className={`flex-1 md:flex ${
        reverse ? "flex-row-reverse" : ""
      } gap-[30px] items-center justify-center w-full md:max-w-[1000px] `}
    >
      <div
        className={`flex justify-center ${
          reverse ? "md:justify-start" : "md:justify-end"
        } gap-[10px] mb-[30px] md:mb-0`}
      >
        <div className="max-w-[200px] flex-1">
          <img
            className="h-auto object-cover w-full"
            src={imageSrc1}
            alt={cap1}
          />
        </div>

        <div className="max-w-[200px] flex-1">
          <img
            className="h-auto object-cover w-full"
            src={imageSrc2}
            alt={cap2}
          />
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:max-w-[40%]">
        <h6 className="font-helvetica text-2xl md:text-xl mb-[10px]">
          {heading}
        </h6>
        <p className="text-[16px] md:text-lg font-thin mb-[10px]">{p1}</p>
        <p className="text-[16px] md:text-lg font-thin">{p2}</p>
      </div>
    </div>
  );
};

export default ScreenDescription;
