import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const [mobileOpened, setMobileOpened] = useState(false);
  const navigator = useNavigate();
  const location = useLocation();
  const popUpRef = useRef(null);

  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const isLinkActive = (path) => path === location.pathname;

  const mobileClickHandler = (path) => {
    navigator(path);
    setMobileOpened(!mobileOpened);
  };

  const closePopUp = () => {
    setShowProjectDetails(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        closePopUp();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="flex justify-between mx-[30px] md:max-xl:mx-[60px] lg:mx-[130px] font-helvetica py-[30px] md:py-[50px]">
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
              strokeWidth="6"
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
      <ul className="hidden md:flex justify-end items-center gap-10 text-2xl">
        <li
          className={`cursor-pointer hover:underline font-thin ${
            isLinkActive("/") && "underline"
          }`}
          onClick={() => navigator("/")}
        >
          HOME
        </li>
        <li
          ref={popUpRef}
          className={`relative flex items-center gap-2 cursor-pointer font-thin hover:underline ${
            isLinkActive("/beachside-snackshop") && "underline"
          } ${isLinkActive("/connection-cafe") && "underline"}`}
        >
          <span onClick={() => setShowProjectDetails(!showProjectDetails)}>
            PROJECTS
          </span>
          <svg
            className="hover:scale-125 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            width=".8em"
            height=".8em"
            viewBox="0 0 17 13"
            fill="none"
            onClick={() => setShowProjectDetails(!showProjectDetails)}
          >
            <path d="M1 1.5L8.5 10.5L16 1.5" stroke="black" strokeWidth="2" />
          </svg>
          <div
            className={`${
              showProjectDetails ? "visible opacity-100" : "invisible opacity-0"
            } transition-all duration-300 ease-in-out text-[24px] font-thin absolute shadow-custom top-12 -translate-x-10 z-10 bg-white p-[35px] rounded-[25px]`}
          >
            <p
              onClick={() => {
                navigator("/connection-cafe");
                setShowProjectDetails(false);
              }}
              className="uppercase hover:underline cursor-pointer"
            >
              Connection Café
            </p>
            <p
              onClick={() => {
                navigator("/beachside-snackshop");
                setShowProjectDetails(false);
              }}
              className="uppercase mt-[20px] hover:underline cursor-pointer"
            >
              Beachside Snackshop
            </p>
          </div>
        </li>
        <li
          className={`cursor-pointer font-thin hover:underline ${
            isLinkActive("/about") && "underline"
          }`}
          onClick={() => navigator("/about")}
        >
          ABOUT
        </li>
        <li
          className={`cursor-pointer font-thin hover:underline ${
            isLinkActive("/play") && "underline"
          }`}
          onClick={() => navigator("/play")}
        >
          PLAY
        </li>
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
          <li
            className={`cursor-pointer ${isLinkActive("/play") && "underline"}`}
            onClick={() => mobileClickHandler("/")}
          >
            HOME
          </li>
          <li
            onClick={() => mobileClickHandler("/")}
            className={`flex items-center gap-2 cursor-pointer relative ${
              isLinkActive("/beachside-snackshop") && "underline"
            }`}
          >
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
          <li
            onClick={() => mobileClickHandler("/about")}
            className={`cursor-pointer ${
              isLinkActive("/about") && "underline"
            }`}
          >
            ABOUT
          </li>
          <li
            onClick={() => mobileClickHandler("/play")}
            className={`cursor-pointer ${isLinkActive("/play") && "underline"}`}
          >
            PLAY
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
