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
    <div className="py-[50px] md:py-[110px] mx-[50px] md:mx-[130px] lg:mx-[200px] xl:mx-[340px] font-garamond max-w-full flex flex-col md:flex-row-reverse md:gap-[55px] gap-[30px] items-center">
      <div className="relative flex justify-center items-center min-w-[90px] max-w-[200px] md:max-w-[350px]">
        <img
          className="relative z-10 h-auto"
          src={selfies}
          alt="Aleynna Quiñones Selfies"
        />
        <img
          className="absolute scale-150 z-0 h-auto"
          src={Blobs}
          role="presentation"
        />
      </div>

      <div className="flex flex-col gap-5 lg:gap-10 items-start">
        <h4 className="font-helvetica font-normal text-2xl lg:text-3xl">
          A little bit about me
        </h4>
        <p className="font-garamond text-[16px] lg:text-xl">
          Hi! My name’s Aleynna (pronounced uh-lay-nuh), and I’m based in
          Boston, MA. I’m currently a senior studying UX Design at Lesley
          University, and I’m eager to expand my knowledge through internship
          and job opportunities for Summer 2024!
        </p>
        <p className="font-garamond text-[16px] lg:text-xl">
          My background lies in visual art, specifically painting, graphite
          drawing, and digital art. After leaving college (unfinished) in 2019,
          I spent several years trying to “find my way,” and in late 2022, I
          discovered a passion for UX Design.
        </p>
        <p className="font-garamond text-[16px] lg:text-xl">
          Throughout my life, I’ve been a natural problem solver and an
          inherently curious individual, always eager to learn and create
          understanding for myself and others. The field of UX Design has become
          a perfect fit, allowing me to leverage both my creative and analytical
          abilities.
        </p>
        <p className="font-garamond text-[16px] lg:text-xl">
          I am enthusiastic about designing interfaces that are not only
          intuitive and purposeful, but also polished and visually appealing. UX
          Design has opened a pathway for me to merge my artistic inclinations
          with a methodical approach, creating meaningful and user-friendly
          experiences.
        </p>
        <a href={Resume} target="_blank">
          <button className="border-2 border-black rounded-full py-2 px-8 hover:bg-black hover:text-offwhite cursor-pointer transition-colors duration-200 md:text-xl">
            My Resumé
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
