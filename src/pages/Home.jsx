import React from "react";
import Beach2 from "../assets/Beach2.png";
import Beach1 from "../assets/Beach1.png";
import HomeImg from "../assets/Home.png";
import MatchImg from "../assets/Match.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  return (
    <div className="relative z-0 mx-[50px] md:mx-[130px] lg:mx-[200px] 2xl:mx-[340px] font-garamond max-w-full">
      <section className="font-garamond pt-[75px] lg:pb-[150px] pb-[100px] border-b border-b-black/40">
        <h2 className="font-helvetica md:text-5xl text-4xl lg:text-8xl font-bold text-center">
          Aleynna Quinones
        </h2>
        <p className="text-xl lg:text-4xl mt-5 lg:mt-12">
          Is a UX Designer{" "}
          <span className="lg:border-b-2 border-b border-b-black inline-block leading-5 lg:leading-9">
            dedicated to solving problems
          </span>{" "}
          through the creation of digital experiences that seamlessly integrate{" "}
          <span className="lg:border-b-2 border-b border-b-black inline-block leading-5 lg:leading-9">
            innovation, empathy, and intuitive design
          </span>
          .
        </p>
        <div className="flex flex-col md:flex-row gap-[15px] md:gap-28 mt-12 lg:mt-16">
          <div className="md:max-w-[300px]">
            <h5 className="font-helvetica text-xl lg:text-3xl font-normal">
              SHE ALSO LOVES...
            </h5>
            <p className="mt-3 text-[16px] lg:text-2xl">
              painting, lifting heavy weights, and hanging out with her two
              cats.
            </p>
          </div>
          <div className="md:max-w-[300px]">
            <h5 className="font-helvetica text-xl lg:text-3xl">CURRENTLY...</h5>
            <p className="mt-3 text-[16px] lg:text-2xl">
              a senior at Lesley University seeking Summer 2024 internship
              opportunities, lets chat.
            </p>
          </div>
        </div>
      </section>
      <section className="font-garamond pt-[100px] lg:pb-[150px] pb-[100px] border-b border-b-black/40">
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-[30px] lg:gap-[65px] mb-[75px] lg:mb-[145px]">
          <div className="text-center md:text-left flex items-center lg:items-start flex-col gap-[10px] lg:gap-[15px]">
            <h6 className="text-center md:text-left font-thin font-helvetica text-[20px] lg:text-[24px]">
              ACADEMIC PROJECT
            </h6>
            <h3 className="text-center md:text-left leading-none font-helvetica text-[30px] lg:text-[64px] font-bold">
              Connection
              <br />
              Café
            </h3>
            <p className="text-center md:text-left text-[24px] lg:text-[24px] font-thin">
              Write Something Else
            </p>
            <button
              onClick={() => navigator("/connection-cafe")}
              className="hover:bg-black hover:text-offwhite transition-colors duration-200 font-helvetica font-normal px-12 py-3 rounded-full border-2 border-solid border-black"
            >
              Learn More
            </button>
          </div>
          <div className="flex gap-[15px] lg:max-w-[calc(100%-415px)] max-w-full">
            <img
              className="min-w-[90px] max-w-[200px] h-auto"
              src={HomeImg}
              alt="Snackshop Home"
            />
            <img
              className="min-w-[90px] max-w-[200px] h-auto"
              src={MatchImg}
              alt="Snackshop Menu"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-[30px] lg:gap-[65px]">
          <div className="flex items-center lg:items-start flex-col gap-[10px] lg:gap-[15px]">
            <h6 className="text-center md:text-left font-thin font-helvetica text-[20px] lg:text-[24px]">
              ACADEMIC PROJECT
            </h6>
            <h3 className="text-center md:text-left leading-none font-helvetica text-[30px] lg:text-[64px] font-bold">
              BeachSide
              <br />
              SnackShop
            </h3>
            <p className="text-center md:text-left text-[24px] lg:text-[24px] font-thin">
              Write Something Else
            </p>
            <button
              onClick={() => navigator("/beachside-snackshop")}
              className="hover:bg-black hover:text-offwhite transition-colors duration-200  font-helvetica font-normal px-12 py-3 rounded-full border-2 border-solid border-black"
            >
              Learn More
            </button>
          </div>
          <div className="flex gap-[15px] lg:max-w-[calc(100%-415px)] max-w-full">
            <img
              className="min-w-[90px] max-w-[200px] h-auto"
              src={Beach1}
              alt="Snackshop Home"
            />
            <img
              className="min-w-[90px] max-w-[200px] h-auto"
              src={Beach2}
              alt="Snackshop Menu"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
