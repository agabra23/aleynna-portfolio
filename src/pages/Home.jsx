import React from "react";

const Home = () => {
  return (
    <div className="mx-[50px] md:mx-[130px] lg:mx-[200px] 2xl:mx-[340px] font-garamond">
      <section className="font-garamond pt-[75px] lg:pb-[150px] pb-[100px] border-b border-b-black/40">
        <h2 className="font-helvetica md:text-5xl text-4xl lg:text-8xl font-bold text-center">
          Aleynna Quinones
        </h2>
        <p className="text-xl lg:text-4xl mt-5 lg:mt-12">
          Is a UX Designer dedicated to solving problems through the creation of
          digital experiences that seamlessly integrate innovation, empathy, and
          intuitive design.
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
      <section>Work 1</section>
      <section>Work 2</section>
    </div>
  );
};

export default Home;
