import React from "react";
import HomeImg from "../assets/Home.png";
import MatchImg from "../assets/Match.png";

const Cafe = () => {
  return (
    <div className="relative -z-10 mx-[50px] md:mx-[130px] lg:mx-[200px] 2xl:mx-[340px] font-garamond max-w-full">
      <section className="font-garamond pt-[75px] lg:pb-[150px] pb-[50px] border-b border-b-black/40 max-w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[30px] md:gap-[65px] max-w-full">
          <div className="flex justify-center gap-[15px] lg:max-w-[calc(100%-415px)] max-w-full mb-[30px]">
            <img
              className="min-w-[90px] max-w-[200px] h-auto"
              src={HomeImg}
              alt="Cafe Home"
            />
            <img
              className="min-w-[90px] max-w-[200px] h-auto"
              src={MatchImg}
              alt="Cafe Menu"
            />
          </div>
          <div className="text-center md:text-left flex items-center md:items-start flex-col gap-[10px] lg:gap-[15px]">
            <h6 className="text-center md:text-left font-thin font-helvetica text-[20px] lg:text-[24px]">
              ACADEMIC PROJECT
            </h6>
            <h3 className="text-center md:text-left leading-none font-helvetica text-[30px] lg:text-[64px] font-bold">
              Connection
              <br />
              Café
            </h3>
            <p className="text-center md:text-left text-[16px] lg:text-[24px] font-thin">
              Encouraging in-person and digital interactions through a love for
              podcasts.
            </p>
          </div>
        </div>
      </section>
      <section className="font-garamond pt-[50px] lg:p-[110px] pb-[50px] border-b border-b-black/40">
        <ul className="grid grid-cols-2 gap-y-[40px] md:flex md:justify-between md:gap-[50px]">
          <li>
            <h6 className="font-helvetica font-normal text-2xl mb-2">Role</h6>
            <p className="text-lg font-garamond font-thin">UX Researcher</p>
            <p className="text-lg font-garamond font-thin">UX Designer</p>
          </li>
          <li className="text-right md:text-left">
            <h6 className="font-helvetica font-normal text-2xl mb-2">Team</h6>
            <p className="text-lg font-garamond font-thin">
              Aleynna Quiñones, Alexa Sciacca, Elizabeth Leifheit, Amine Mena
            </p>
          </li>
          <li>
            <h6 className="font-helvetica font-normal text-2xl mb-2">
              Timeline
            </h6>
            <p className="text-lg font-garamond font-thin">8 Weeks</p>
          </li>
          <li className="text-right md:text-left">
            <h6 className="font-helvetica font-normal text-2xl mb-2">Tools</h6>
            <p className="text-lg font-garamond font-thin">Figma</p>
            <p className="text-lg font-garamond font-thin">GetFloorPlan</p>
          </li>
        </ul>
      </section>
      <section className="font-garamond pt-[50px] lg:pb-[150px] pb-[50px] border-b border-b-black/40 flex flex-col gap-[30px] md:flex-row md:gap-[50px]">
        <div>
          <h6 className="font-thin font-helvetica text-[20px] lg:text-[24px] md:w-max">
            Project Overview
          </h6>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="font-helvetica font-normal text-2xl mb-[10px]">
              The Spoken Word On-Demand Audio Space
            </h4>
            <p className="text-[16px] font-thin">
              This project aims to find and address a problem in the Spoken Word
              On-Demand Audio space, with a specific focus on improving the
              overall experience for adult podcast listeners.
            </p>
          </div>
          <div>
            <h4 className="font-helvetica font-normal text-2xl mb-[10px]">
              Increase human connection between adult podcast listeners
            </h4>
            <p className="text-[16px] font-thin">
              We discovered that adult podcast listeners seek human connection
              and fresh perspectives. They desire a way to share their favorite
              podcasts and newfound knowledge beyond their phones, and connect
              with like-minded individuals who share similar interests.
            </p>
          </div>
          <div>
            <h4 className="font-helvetica font-normal text-2xl mb-[10px]">
              The Connection Café
            </h4>
            <p className="text-[16px] font-thin">
              The proposed solution, the Connection Café, provides a seamless
              integration of the physical and digital world. Its goal is to
              improve community mental health by facilitating in-person
              interactions through encouraging users to meet face-to-face in the
              café, hosting live podcast events, and providing equipment to
              record their own podcasts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cafe;
