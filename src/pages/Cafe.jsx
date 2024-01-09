import React from "react";
import HomeImg from "../assets/Home.png";
import MatchImg from "../assets/Match.png";
import Mockup1 from "../assets/Mockup1.png";
import Mockup2 from "../assets/Mockup2.png";
import Mockup3 from "../assets/Mockup3.png";

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
            <h6 className="uppercase text-center md:text-left font-thin font-helvetica text-[20px] lg:text-[24px]">
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
        <ul className="grid grid-cols-2 gap-y-[40px] md:flex md:justify-evenly md:gap-[50px]">
          <li>
            <h6 className="font-helvetica font-normal text-2xl mb-2">Role</h6>
            <p className="text-lg font-garamond font-thin">UX Researcher</p>
            <p className="text-lg font-garamond font-thin">UX Designer</p>
          </li>
          <li className="text-right md:text-left md:max-w-[300px] md:min-w-[150px]">
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
          <h6 className="uppercase font-thin font-helvetica text-[20px] lg:text-[24px] md:w-max">
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
      <section className="font-garamond pt-[50px] lg:pb-[150px] pb-[50px] border-b border-b-black/40 flex flex-col gap-[30px] md:flex-row md:gap-[50px]">
        <div className="md:grid md:grid-cols-4 md:gap-x-[40px]">
          <h6 className="uppercase font-thin font-helvetica text-[20px] lg:text-[24px] mb-[30px]">
            Our Solution
          </h6>
          <div className="mb-[20px] col-span-3">
            <h4 className="mb-[10px] text-2xl font-medium font-helvetica">
              The Connection Café physical space
            </h4>
            <p className="font-thin text-[16px]">
              A versatile space where{" "}
              <span className="font-semibold">
                digital interaction meets in-person interaction.
              </span>
            </p>
          </div>
          <div className="md:col-span-4 md:flex-row bg-white p-9 rounded-3xl flex flex-col gap-5 mb-[20px]">
            <img
              className="object-cover md:max-w-[325px] md:min-w-[100px] h-auto"
              src={Mockup1}
              alt=""
            />
            <img
              className="object-cover md:max-w-[325px] md:min-w-[100px] h-auto"
              src={Mockup2}
              alt=""
            />
            <img
              className="object-cover md:max-w-[325px] md:min-w-[100px] h-auto"
              src={Mockup3}
              alt=""
            />
          </div>
          <div></div>
          <div className="mb-[30px] col-span-3">
            <h4 className="mb-[10px] text-2xl font-medium font-helvetica">
              Visitors can...
            </h4>
            <ul className="list-disc list-inside pl-3">
              <li className="leading-7">
                <span className="font-semibold">
                  Check in to the café using the QR code
                </span>{" "}
                on the wall where they can get in contact with other visitors at
                the café (more on this below)
              </li>
              <li className="leading-7">
                Grab <span className="font-semibold">food and drink</span> at
                the counter
              </li>
              <li className="leading-7">
                Check out the{" "}
                <span className="font-semibold">daily top 5 podcasts</span>{" "}
                posted next to the menu
              </li>
              <li className="leading-7">
                <span className="font-semibold">Record their own podcasts</span>{" "}
                in soundproof booths with rented equipment
              </li>
              <li className="leading-7">
                Watch <span className="font-semibold">live podcast shows</span>{" "}
                on weekend evenings
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cafe;
