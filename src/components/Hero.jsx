import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(headingRef.current, {
      y: 200,
      opacity: 0,
      duration: 1.6,
      delay: 3.8,
    })
      .from(paragraphRef.current, {
        y: 0,
        opacity: 0,
        duration:0.5

      })
      .from(scrollRef.current, {
        y: 0,
        opacity: 0,
        duration: 0.6,
      },)
      
  });

  return (
    <div className="bg-zinc-900 w-full h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <h1 ref={headingRef} className="text-[6vw] leading-[7vw] text-center uppercase font-[var] z-10 text-white mb-8 max-sm:text-[8vw] max-sm:leading-[9vw] select-none">
        I'm an engineer <br /> without engineering
      </h1>

      <p ref={paragraphRef} className="text-center text-xl mb-12 opacity-90 max-sm:text-base z-10 select-none">
        Crafting digital experiences with creativity and precision
      </p>

      <div ref={scrollRef} className="absolute bottom-10 animate-bounce">
        <div className="w-8 h-14 border-2 border-gray-400 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>

    
    </div>
  );
};

export default Hero;
