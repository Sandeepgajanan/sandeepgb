import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full h-screen flex items-center justify-center  max-sm:flex-col">
      <div className="z-[10] relative w-[65vw] heading ">
        <h1 className="text-[11vw] select-none leading-[9vw] text-center uppercase   max-sm:text-[16vw] max-sm:leading-[13vw] ">
          I'm an engineer <br /> without a degree in engineering
        </h1>
      </div>

      <div className="h-16 hidden max-sm:block mt-10">
        <img
          className="h-full object-cover"
          src="https://img.icons8.com/?size=100&id=g34sfj4NMisg&format=png&color=000000"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Hero;
