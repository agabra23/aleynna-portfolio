import React, { Children } from "react";

const Section = ({ children }) => {
  return (
    <section className="font-garamond  max-w-full">
      <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg min-[1050px]:max-w-[1050px] ">
        <div className="border-b border-b-black/40 flex-col items-center mx-[4vw] py-[5vh]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
