import React from "react";
import Beach2 from "../assets/Beach2.png";
import Beach1 from "../assets/Beach1.png";
import HomeImg from "../assets/Home.png";
import MatchImg from "../assets/Match.png";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

const Home = () => {
  const navigator = useNavigate();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="relative -z-10 mx-[50px] md:mx-[130px] lg:mx-[200px] xl:mx-[340px] font-garamond max-w-full">
      <section className="font-garamond pt-[75px] lg:pb-[150px] pb-[100px] border-b border-b-black/40">
        <h2 className="font-helvetica [855px]:text-5xl text-4xl font-bold">
          Hi! I’m Aleynna Quiñones.
        </h2>
        <p className="text-xl md:text-2xl mt-[10px] max-w-[1000px]">
          I'm a UX Designer{" "}
          <span className="font-semibold  break-words">
            dedicated to solving problems
          </span>{" "}
          through the creation of digital experiences that seamlessly integrate{" "}
          <span className="font-semibold  break-words">
            innovation, empathy, and intuitive design
          </span>
          .
        </p>
        <div className="flex flex-col  gap-[15px] mt-12 lg:mt-16">
          <div className="text-xl lg:text-2xl font-thin mb-4">
            <h5 className="font-helvetica text-[16px] md:text-lg">
              I ALSO LOVE...
            </h5>
            <p className="text-[16px] lg:text-xl">
              painting, lifting heavy weights, and hanging out with my two cats.
            </p>
          </div>
          <div className="text-xl md:text-2xl font-thin">
            <h5 className="font-helvetica text-[16px] md:text-lg">
              CURRENTLY...
            </h5>
            <p className="text-[16px] lg:text-xl">
              a senior at Lesley University seeking Summer 2024 internship
              opportunities.{" "}
              <a
                href="https://www.linkedin.com/in/aleynna-quinones"
                target="_blank"
                className="appearance-auto underline cursor-pointer text-[#0057D7]"
              >
                Let's chat!
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="font-garamond pt-[100px] lg:pb-[150px] pb-[100px] border-b border-b-black/40">
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-[30px] lg:gap-[65px] mb-[75px] lg:mb-[145px]">
          <div className="text-center md:text-left flex items-center lg:items-start flex-col gap-[10px] lg:gap-[15px]">
            <h6 className="uppercase text-center md:text-left font-thin font-helvetica text-[16px] md:text-lg">
              ACADEMIC PROJECT
            </h6>
            <h3 className="text-center md:text-left leading-none font-helvetica text-[30px] lg:text-4xl font-bold">
              Connection Café
            </h3>
            <p className="text-center md:text-left md:text-lg text-[16px] font-thin">
              Encouraging in-person and digital interactions through a love for
              podcasts.
            </p>
            <button
              onClick={() => navigator("/connection-cafe")}
              className="text-[16px] hover:bg-black hover:text-offwhite transition-colors duration-200  font-helvetica font-normal px-6 py-3 mt-5 rounded-full border-2 border-solid border-black"
            >
              Learn More
            </button>
          </div>
          <div className="flex gap-[15px] lg:max-w-[calc(100%-415px)] max-w-full">
            <img
              className="min-w-[90px] md:min-[120px] max-w-[200px] h-auto"
              src={HomeImg}
              alt="Cafe Home"
            />
            <img
              className="min-w-[90px] md:min-[120px] max-w-[200px] h-auto"
              src={MatchImg}
              alt="Cafe Menu"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-[30px] lg:gap-[65px]">
          <div className="flex items-center lg:items-start flex-col gap-[10px] lg:gap-[15px]">
            <h6 className="uppercase text-center md:text-left font-thin font-helvetica text-[16px] md:text-lg">
              GOOGLE UX CERTIFICATE Project
            </h6>
            <h3 className="text-center md:text-left leading-none font-helvetica text-[30px] lg:text-4xl font-bold">
              BeachSide SnackShop
            </h3>
            <p className="text-center md:text-left md:text-lg text-[16px] font-thin">
              Order food online and track your delivery in real-time for a
              simple and efficient dining experience.
            </p>
            <button
              onClick={() => navigator("/beachside-snackshop")}
              className="text-[16px] hover:bg-black hover:text-offwhite transition-colors duration-200  font-helvetica font-normal px-6 py-3 mt-5 rounded-full border-2 border-solid border-black"
            >
              Learn More
            </button>
          </div>
          <div className="flex gap-[15px] lg:max-w-[calc(100%-415px)] max-w-full">
            <img
              className="min-w-[90px] md:min-[120px] max-w-[200px] h-auto"
              src={Beach1}
              alt="Snackshop Home"
            />
            <img
              className="min-w-[90px] md:min-[120px] max-w-[200px] h-auto"
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
