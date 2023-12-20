import React from "react";

const NavBar = () => {
  return (
    <nav className="mx-[30px] md:mx-[130px] font-helvetica py-[30px] md:py-[50px]">
      <div className="text-3xl md:text-5xl flex gap-[8px] md:gap-[12px]">
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
    </nav>
  );
};

export default NavBar;
