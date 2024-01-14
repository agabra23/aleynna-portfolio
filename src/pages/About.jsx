import React from "react";
import Blobs from "../assets/BLOBS.png";
import Resume from "../assets/Aleynna-Quinones-Resume-2024.pdf";
import { useLayoutEffect } from "react";

import selfies from "../assets/selfies.png";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="pb-[50px] pt-[75px] mx-[50px] md:mx-[130px] lg:mx-[200px] xl:mx-[340px] font-garamond max-w-full flex flex-col md:flex-row-reverse md:gap-[50px] gap-[30px] items-center md:justify-center">
      <div className="relative flex justify-center items-center min-w-[90px] md:min-w-[200px] max-w-[200px] md:max-w-[350px]">
        <img
          className="relative z-10 "
          src={selfies}
          alt="Aleynna Quiñones Selfies"
        />
        <img
          className="absolute scale-150 z-0"
          src={Blobs}
          role="presentation"
        />
      </div>

      <div className="flex flex-col gap-[10px] md:gap-[30px] items-start md:max-w-[450px]">
        <h4 className="font-helvetica font-normal md:text-2xl text-xl">
          A little bit about me
        </h4>
        <p className="font-garamond text-[16px] md:text-lg">
          Hi! My name’s Aleynna (pronounced uh-lay-nuh), and I’m based in
          Boston, MA. I’m currently a senior studying UX Design at Lesley
          University, and I’m eager to expand my knowledge through internship
          and job opportunities for Summer 2024!
        </p>
        <p className="font-garamond text-[16px] md:text-lg">
          My background lies in visual art, specifically painting, graphite
          drawing, and digital art . After leaving college (unfinished) in 2019,
          I spent several years trying to “find my way,” and in late 2022, I
          discovered a passion for UX Design.
        </p>
        <p className="font-garamond text-[16px] md:text-lg">
          Throughout my life, I’ve been a natural problem solver and an
          inherently curious individual, always eager to learn and create
          understanding for myself and others. The field of UX Design has become
          a perfect fit, allowing me to leverage both my creative and analytical
          abilities.
        </p>
        <p className="font-garamond text-[16px] md:text-lg">
          I am enthusiastic about designing interfaces that are not only
          intuitive and purposeful, but also polished and visually appealing. UX
          Design has opened a pathway for me to merge my artistic inclinations
          with a methodical approach, creating meaningful and user-friendly
          experiences.
        </p>
        <a href={Resume} target="_blank">
          <button className="border-2 border-black rounded-full px-6 py-3 mt-5 hover:bg-black hover:text-offwhite cursor-pointer transition-colors duration-200 font-helvetica text-[16px]">
            My Resumé
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
