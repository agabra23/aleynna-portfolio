import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [mobileOpened, setMobileOpened] = useState(false);
  return (
    <nav className=" flex justify-between mx-[30px] md:max-xl:mx-[60px] lg:mx-[130px] font-helvetica py-[30px] md:py-[50px]">
      <div className="text-3xl md:text-5xl flex gap-[8px] md:gap-[12px] relative z-20">
        <h1 className="font-bold">AQ</h1>
        <div className="flex items-center">
          <svg
            width=".8em"
            height=".8em"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19.5406" cy="21.0424" r="3.38238" fill="black" />
            <circle cx="36.4478" cy="21.0424" r="3.38238" fill="black" />
            <circle
              cx="28.1814"
              cy="28.1814"
              r="25.1814"
              stroke="black"
              strokeWidth="8"
            />
            <path
              d="M14.6533 35.6958C20.6722 45.5145 36.1104 45.9155 41.7079 35.6958"
              stroke="black"
              strokeWidth="6"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>
      <ul className="hidden md:flex justify-end items-center gap-10">
        <li className="cursor-pointer">HOME</li>
        <li className="flex items-center gap-2 cursor-pointer">
          <span>PROJECTS</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width=".8em"
            height=".8em"
            viewBox="0 0 17 13"
            fill="none"
          >
            <path d="M1 1.5L8.5 10.5L16 1.5" stroke="black" strokeWidth="2" />
          </svg>
        </li>
        <li className="cursor-pointer">ABOUT</li>
        <li className="cursor-pointer">PLAY</li>
      </ul>
      <div
        onClick={() => setMobileOpened(!mobileOpened)}
        className="md:hidden flex items-center text-2xl cursor-pointer relative z-20"
      >
        {mobileOpened ? (
          <span className="">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 4.10448L3.60448 0.5L11.5 8.39552L19.3955 0.5L23 4.10448L14.9328 12L23 19.8955L19.3955 23.5L11.5 15.4328L3.60448 23.5L0 19.8955L7.89552 12L0 4.10448Z"
                fill="black"
              />
            </svg>
          </span>
        ) : (
          <FaBars />
        )}
      </div>
      <div
        className={`absolute bg-offwhite top-0 left-0 ${
          mobileOpened ? "" : "translate-x-full"
        } transition-all z-10 h-screen w-full flex flex-col justify-center items-center`}
      >
        <ul className="flex flex-col justify-start items-center gap-[70px] text-2xl">
          <li className="cursor-pointer">HOME</li>
          <li className="flex items-center gap-2 cursor-pointer relative">
            <span>PROJECTS</span>
            <svg
              className="absolute right-0 translate-x-7"
              xmlns="http://www.w3.org/2000/svg"
              width=".8em"
              height=".8em"
              viewBox="0 0 17 13"
              fill="none"
            >
              <path d="M1 1.5L8.5 10.5L16 1.5" stroke="black" strokeWidth="2" />
            </svg>
          </li>
          <li className="cursor-pointer">ABOUT</li>
          <li className="cursor-pointer">PLAY</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
