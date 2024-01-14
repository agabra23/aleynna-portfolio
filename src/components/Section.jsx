import React, { Children } from "react";

const Section = ({ children }) => {
  return (
    <section className="font-garamond  max-w-full">
      <div className="mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] min-[1050px]:max-w-[1050px] border-b border-b-black/40 flex-col items-center px-[4vw] py-[5vh]">
        {children}
      </div>
    </section>
  );
};

export default Section;
