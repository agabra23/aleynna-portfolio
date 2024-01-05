import React from "react";

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
  return (
    <div className="py-[60px] md:py-[110px] mx-[50px] md:mx-[130px] lg:mx-[200px] 2xl:mx-[340px] font-helvetica max-w-full flex flex-col gap-[75px] md:gap-[110px] items-center lg:items-start">
      <div className="flex flex-col gap-[40px]">
        <h4 className="text-[30px] font-normal text-center lg:text-left">
          Acrylic Painting
        </h4>
        <div className="flex flex-wrap justify-center lg:justify-start gap-x-[175px] gap-y-[75px] md:gap-y-[150px]">
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <img
              className="object-cover max-w-[430px] h-auto align-middle rounded-[25px]"
              src={DS_2}
              alt=""
            />
            <h6 className="font-thin text-[16px] text-center uppercase">
              Dear Somebody #2
            </h6>
          </div>
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <img
              className="object-cover max-w-[430px] h-auto align-middle rounded-[25px]"
              src={DS_1}
              alt=""
            />
            <h6 className="font-thin text-[16px] text-center uppercase">
              Dear Somebody #1
            </h6>
          </div>
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <img
              className="object-cover max-w-[430px] h-auto align-middle rounded-[25px]"
              src={GC}
              alt=""
            />
            <h6 className="font-thin text-[16px] text-center uppercase">
              Guilty Conscience
            </h6>
          </div>
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <img
              className="object-cover max-w-[430px] h-auto align-middle rounded-[25px]"
              src={MG}
              alt=""
            />
            <h6 className="font-thin text-[16px] text-center uppercase">
              The Male Gaze
            </h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[40px]">
        <h4 className="text-[30px] font-normal text-center lg:text-left">
          Graphite and Color Pencil
        </h4>
        <div className="flex flex-wrap justify-center lg:justify-start gap-x-[175px] gap-y-[75px] md:gap-y-[150px]">
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <img
              className="object-cover max-w-[430px] h-auto align-middle rounded-[25px]"
              src={FO}
              alt=""
            />
            <h6 className="font-thin text-[16px] text-center uppercase">
              Frank Ocean
            </h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[40px]">
        <h4 className="text-[30px] font-normal text-center lg:text-left">
          Digital Art
        </h4>
        <div className="flex flex-wrap justify-center lg:justify-start gap-x-[175px] gap-y-[75px] md:gap-y-[150px]">
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <img
              className="object-cover max-w-[430px] h-auto align-middle rounded-[25px]"
              src={PDT}
              alt=""
            />
            <h6 className="font-thin text-[16px] text-center uppercase">
              Please Do Not Touch The Artwork
            </h6>
          </div>
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <img
              className="object-cover max-w-[430px] h-auto align-middle rounded-[25px]"
              src={IC}
              alt=""
            />
            <h6 className="font-thin text-[16px] text-center uppercase">
              My Inner Child
            </h6>
          </div>
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <img
              className="object-cover max-w-[430px] h-auto align-middle rounded-[25px]"
              src={WII}
              alt=""
            />
            <h6 className="font-thin text-[16px] text-center uppercase">
              What Is It
            </h6>
          </div>
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <img
              className="object-cover max-w-[430px] h-auto align-middle rounded-[25px]"
              src={IMH}
              alt=""
            />
            <h6 className="font-thin text-[16px] text-center uppercase">
              In My Head
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
