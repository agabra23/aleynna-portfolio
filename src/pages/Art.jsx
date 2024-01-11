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

const Art = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="p7-[75px] pb-[50px] md:py-[110px] mx-[50px] md:mx-[130px] lg:mx-[200px] xl:mx-[340px] font-helvetica max-w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[175px]">
        <h4 className="md:col-span-2 mb-10 text-center md:text-left leading-none font-helvetica text-[30px] lg:text-4xl font-semibold">
          Acrylic Painting
        </h4>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={DS_2} alt="Dear Somebody #2" />
          <p className="font-helvetica font-thin text-[16px] md:text-xl text-center uppercase">
            Dear Somebody #2
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={DS_1} alt="Dear Somebody #1" />
          <p className="font-helvetica font-thin text-[16px] md:text-xl text-center uppercase">
            Dear Somebody #1
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={GC} alt="Guilty Conscience" />
          <p className="font-helvetica font-thin text-[16px] md:text-xl text-center uppercase">
            Guilty Conscience
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={MG} alt="The Male Gaze" />
          <p className="font-helvetica font-thin text-[16px] md:text-xl text-center uppercase">
            The Male Gaze
          </p>
        </div>
        <h4 className="md:col-span-2 mb-10 text-center md:text-left leading-none font-helvetica text-[30px] lg:text-4xl font-semibold">
          Graphite and Color Pencil
        </h4>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={FO} alt="Frank Ocean" />
          <p className="font-helvetica font-thin text-[16px] md:text-xl text-center uppercase">
            Frank Ocean
          </p>
        </div>

        <h4 className="md:col-span-2 mb-10 text-center md:text-left leading-none font-helvetica text-[30px] lg:text-4xl font-semibold">
          Digital Art
        </h4>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={PDT} alt="Please Don't Touch The Artwork" />
          <p className="font-helvetica font-thin text-[16px] md:text-xl text-center uppercase">
            Please Don't Touch The Artwork
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={WII} alt="What Is It?" />
          <p className="font-helvetica font-thin text-[16px] md:text-xl text-center uppercase">
            What Is It?
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mb-[75px] md:mb-[150px]">
          <img src={IMH} alt="In My Head" />
          <p className="font-helvetica font-thin text-[16px] md:text-xl text-center uppercase">
            In My Head
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={IC} alt="My Inner Child" />
          <p className="font-helvetica font-thin text-[16px] md:text-xl text-center uppercase">
            My Inner Child
          </p>
        </div>
      </div>
    </div>
  );
};

export default Art;
