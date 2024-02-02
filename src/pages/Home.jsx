import React from "react";
import Beach2 from "../assets/BlueDetails.png";
import Beach1 from "../assets/BlueLogin.png";
import HomeImg from "../assets/Home.png";
import MatchImg from "../assets/Match.png";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import Section from "../components/Section";
import HeroSectionWrapper from "../components/HeroSectionWrapper";

const Home = () => {
  const navigator = useNavigate();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="relative -z-10 font-garamond max-w-full">
      <HeroSectionWrapper>
        <div className="max-w-max mx-auto">
          <h2 className="font-helvetica [855px]:text-7xl text-7xl font-bold max-w-max">
            Hi! I’m Aleynna Quiñones.
          </h2>
          <p className="text-3xl md:text-3xl mt-[10px] max-w-[1000px]">
            UX Designer and visual artist.
          </p>
          <div className="flex flex-col max-w-max gap-[15px] mt-12 lg:mt-16">
            <div className="text-xl lg:text-2xl font-thin mb-4">
              <h5 className="font-helvetica text-[16px] md:text-lg">
                I LOVE...
              </h5>
              <p className="text-[16px] lg:text-xl">
                painting, lifting heavy weights, and hanging out with my two
                cats.
              </p>
            </div>
            <div className="text-xl md:text-2xl font-thin">
              <h5 className="font-helvetica text-[16px] md:text-lg">
                CURRENTLY...
              </h5>
              <p className="text-[16px] lg:text-xl">
                a junior at Lesley University seeking Summer 2024 internship
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
        </div>
      </HeroSectionWrapper>
      <Section>
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-[30px] lg:gap-[65px] mb-[50px]">
          <div className="flex items-center lg:items-start flex-col gap-[10px]">
            <h6 className="uppercase text-center md:text-left font-thin font-helvetica text-[16px] md:text-lg">
              Small Business App
            </h6>
            <h3 className="text-center md:text-left leading-none font-helvetica text-[30px] lg:text-4xl font-bold ">
              BeachSide SnackShop
            </h3>
            <p className="text-center md:text-left md:text-lg text-[16px] font-thin max-w-md">
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
          <div className="flex max-w-full">
            <img
              className="min-w-[120px] max-w-[250px] h-auto"
              src={Beach1}
              alt="Snackshop Home"
            />
            <img
              className="hidden min-[340px]:block min-w-[120px] max-w-[250px] h-auto"
              src={Beach2}
              alt="Snackshop Menu"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-[30px] lg:gap-[65px]">
          <div className="text-center md:text-left flex items-center lg:items-start flex-col gap-[10px] lg:gap-[15px]">
            <h6 className="uppercase text-center md:text-left font-thin font-helvetica text-[16px] md:text-lg">
              Social Media App
            </h6>
            <h3 className="text-center md:text-left leading-none font-helvetica text-[30px] lg:text-4xl font-bold">
              Connection Café
            </h3>
            <p className="text-center md:text-left md:text-lg text-[16px] font-thin max-w-md">
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
          <div className="flex  max-w-full">
            <img
              className="min-w-[120px] max-w-[250px] h-auto"
              src={HomeImg}
              alt="Cafe Home"
            />
            <img
              className="hidden min-[340px]:block min-w-[120px] max-w-[250px] h-auto"
              src={MatchImg}
              alt="Cafe Menu"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
