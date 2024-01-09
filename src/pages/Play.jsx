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
    <div className="py-[135px] md:py-[110px] mx-[50px] md:mx-[130px] lg:mx-[200px] xl:mx-[340px] font-helvetica max-w-full flex flex-col gap-[75px] md:gap-[110px] items-center">
      <div className="flex-col flex items-center gap-[185px]">
        <div className=" flex flex-wrap gap-x-[175px] gap-y-[75px] justify-center">
          <div className="relative flex-col flex gap-[20px] basis-[300px]">
            <h4 className="absolute left-1/2 w-max -translate-x-1/2 text-center min-[1175px]:text-left min-[1175px]:translate-x-0 min-[1175px]:left-0 -top-[75px] font-normal text-[30px] lg:self-start">
              Acrylic Painting
            </h4>
            <img className="object-cover" src={DS_2} alt="" />
            <h6 className="uppercase text-[16px] font-thin text-center">
              Dear Somebody #2
            </h6>
          </div>
          <div className="flex-col flex gap-[20px] basis-[300px]">
            <img className="object-cover" src={DS_1} alt="" />
            <h6 className="uppercase text-[16px] font-thin text-center">
              Dear Somebody #1
            </h6>
          </div>
          <div className="flex-col flex gap-[20px] basis-[300px]">
            <img className="object-cover" src={GC} alt="" />
            <h6 className="uppercase text-[16px] font-thin text-center">
              Guilty Conscience
            </h6>
          </div>
          <div className="flex-col flex gap-[20px] basis-[300px]">
            <img className="object-cover" src={MG} alt="" />
            <h6 className="uppercase text-[16px] font-thin text-center">
              The Male Gaze
            </h6>
          </div>
        </div>
        <div className=" flex flex-wrap gap-x-[175px]">
          <div className="relative flex-col flex gap-[20px] basis-[300px]">
            <h4 className="absolute left-1/2 w-max -translate-x-1/2 text-center min-[1175px]:text-left min-[1175px]:translate-x-0 min-[1175px]:left-0 -top-[75px] font-normal text-[30px] lg:self-start">
              Graphite and Color Pencil
            </h4>
            <img className="object-cover" src={FO} alt="" />
            <h6 className="uppercase text-[16px] font-thin text-center">
              Frank Ocean
            </h6>
          </div>
        </div>
        <div className=" flex flex-wrap gap-x-[175px] gap-y-[75px] justify-center">
          <div className="relative flex-col flex gap-[20px] basis-[300px]">
            <h4 className="absolute left-1/2 w-max -translate-x-1/2 text-center min-[1175px]:text-left min-[1175px]:translate-x-0 min-[1175px]:left-0 -top-[75px] font-normal text-[30px] lg:self-start">
              Digital Art
            </h4>
            <img className="object-cover" src={PDT} alt="" />
            <h6 className="uppercase text-[16px] font-thin text-center">
              Please Don't Touch The Artwork
            </h6>
          </div>
          <div className="flex-col flex gap-[20px] basis-[300px]">
            <img className="object-cover" src={WII} alt="" />
            <h6 className="uppercase text-[16px] font-thin text-center">
              What Is It
            </h6>
          </div>
          <div className="flex-col flex gap-[20px] basis-[300px]">
            <img className="object-cover" src={IMH} alt="" />
            <h6 className="uppercase text-[16px] font-thin text-center">
              In My Head
            </h6>
          </div>
          <div className="flex-col flex gap-[20px] basis-[300px]">
            <img className="object-cover" src={IC} alt="" />
            <h6 className="uppercase text-[16px] font-thin text-center">
              My Inner Child
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
