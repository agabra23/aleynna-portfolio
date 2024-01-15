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
import Section from "../components/Section";
import { artCards } from "../components/carousel-config";
import ClickableCarousel from "../components/ClickableCarousel";

const Art = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="relative -z-10 font-garamond max-w-full">
      <Section>
        <div className="md:grid md:grid-cols-[1fr_1fr] flex flex-col justify-center md:gap-x-[50px]">
          <div className="flex flex-col justify-center md:mb-0 mb-[30px]">
            <h2 className=" mb-[10px] font-helvetica font-normal md:text-2xl text-xl">
              Some of my artwork
            </h2>
            <p className="text-[16px] md:text-lg font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quidem molestias et asperiores. Libero ea aspernatur ullam, dicta
              consequatur ipsam?
            </p>
          </div>
          <div className="mb-[30px]">
            <ClickableCarousel slides={artCards} desiredWidth="500px" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Art;
