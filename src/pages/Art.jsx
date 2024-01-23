import React from "react";
import { useLayoutEffect } from "react";

import Section from "../components/Section";
import { artCards } from "../components/carousel-config";
import ClickableCarousel from "../components/ClickableCarousel";

const Art = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="relative -z-10 font-garamond max-w-full">
      <Section>
        <div className="md:grid md:grid-cols-[1fr_1fr] flex flex-col justify-center md:gap-x-[50px]">
          <div className="flex flex-col justify-center md:mb-0 mb-[30px]">
            <h2 className=" mb-[10px] font-helvetica font-normal md:text-2xl text-xl">
              Some of my artwork
            </h2>
            <p className="text-[16px] md:text-lg font-thin">
              I fell in love with visual art as a senior in high school {"("}
              with no prior knowledge or interest in art at all{")"}. I've
              utilized it as a form of self-expression and therapy for myself.
              Painting and graphite drawings will always have my heart, but
              dabbling in digital art is fun too {":)"}
            </p>
          </div>
          <div className="mb-[30px]">
            <ClickableCarousel slides={artCards} desiredWidth="500px" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Art;
