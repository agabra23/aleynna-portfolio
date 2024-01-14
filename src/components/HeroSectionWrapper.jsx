const HeroSectionWrapper = ({ children }) => {
  return (
    <section className="font-garamond  max-w-full">
      <div className="mx-auto max-w-screen-xl">
        <div className="border-b border-b-black/40 flex-col items-center mx-[4vw] px-[1vw] pb-[15vh] pt-[10vh]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionWrapper;
