import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-0 flex justify-between items-center gap-[10px] mx-[30px] md:max-xl:mx-[60px] lg:mx-[130px] font-helvetica py-[5vh]">
      <div className="flex flex-col gap-5">
        <h6 className="text-lg font-medium">Let's Connect!</h6>
        <ul className="flex justify-start items-center gap-[30px]">
          <li className="border-b-2 border-transparent hover:border-black">
            <a
              href="https://www.linkedin.com/in/aleynna-quinones"
              target="_blank"
              className="text-inherit no-underline"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li className="border-b-2 border-transparent hover:border-black">
            <a
              href="mailto:aleynnaquinones@gmail.com"
              className="text-inherit no-underline"
            >
              <AiOutlineMail size={24} />
            </a>
          </li>
        </ul>
      </div>
      <div className="md:flex flex-col items-center hidden">
        <p className="font-helvetica font-thin text-sm text-center">
          Portfolio developed by Andrew Gabra.
        </p>
        <p className="font-helvetica font-thin text-sm text-center">
          &#169;{` ${new Date().getFullYear()}`}
        </p>
      </div>
      <div className="flex flex-col">
        <div className="text-3xl md:text-4xl flex gap-[10px] justify-end">
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
        <div className="md:hidden flex flex-col items-end">
          <p className="text-right font-helvetica font-thin text-sm">
            Portfolio developed by
            <br />
            Andrew Gabra.
          </p>
          <p className="font-helvetica font-thin text-sm text-right">
            &#169;{` ${new Date().getFullYear()}`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
