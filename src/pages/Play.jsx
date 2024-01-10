import React from "react";
import { useLayoutEffect } from "react";

import DS_1 from "../assets/DS1.png";
import DS_2 from "../assets/DS2.png";
import FO from "../assets/FO.png";
import GC from "../assets/GC.png";
import MG from "../assets/MG.png";
import PDT from "../assets/PDT.png";
import WII from "../assets/WII.png";
import IMH from "../assets/IMH.png";
import IC from "../assets/IC.png";

const Play = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="py-[135px] md:py-[110px] mx-[50px] md:mx-[130px] lg:mx-[200px] xl:mx-[340px] font-helvetica max-w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[175px]">
        <h4 className="md:col-span-2 mb-10 text-[30px] text-center md:text-left">
          Acrylic Painting
        </h4>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={DS_2} alt="Dear Somebody #2" />
          <p className="font-helvetica font-thin text-[16px] md:text-lg text-center">
            Dear Somebody #2
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={DS_2} alt="Dear Somebody #2" />
          <p className="font-helvetica font-thin text-[16px] md:text-lg text-center">
            Dear Somebody #2
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={DS_2} alt="Dear Somebody #2" />
          <p className="font-helvetica font-thin text-[16px] md:text-lg text-center">
            Dear Somebody #2
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={DS_2} alt="Dear Somebody #2" />
          <p className="font-helvetica font-thin text-[16px] md:text-lg text-center">
            Dear Somebody #2
          </p>
        </div>
        <h4 className="md:col-span-2 mb-10 text-[30px] text-center md:text-left">
          Graphite and Color Pencil
        </h4>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={DS_2} alt="Dear Somebody #2" />
          <p className="font-helvetica font-thin text-[16px] md:text-lg text-center">
            Dear Somebody #2
          </p>
        </div>

        <h4 className="md:col-span-2 mb-10 text-[30px] text-center md:text-left">
          Acrylic Painting
        </h4>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={DS_2} alt="Dear Somebody #2" />
          <p className="font-helvetica font-thin text-[16px] md:text-lg text-center">
            Dear Somebody #2
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={DS_2} alt="Dear Somebody #2" />
          <p className="font-helvetica font-thin text-[16px] md:text-lg text-center">
            Dear Somebody #2
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={DS_2} alt="Dear Somebody #2" />
          <p className="font-helvetica font-thin text-[16px] md:text-lg text-center">
            Dear Somebody #2
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={DS_2} alt="Dear Somebody #2" />
          <p className="font-helvetica font-thin text-[16px] md:text-lg text-center">
            Dear Somebody #2
          </p>
        </div>
      </div>
    </div>
  );
};

export default Play;
