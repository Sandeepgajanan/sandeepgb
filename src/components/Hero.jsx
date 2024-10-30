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
        duration: 0.5

      })
      .from(scrollRef.current, {
        y: 0,
        opacity: 0,
        duration: 0.6,
      },)
      tl.to(scrollRef.current, {
        y: 15,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })

  });

  return (
    <div className=" max-w-screen-xl mx-auto w-full h-[90vh] flex flex-col  justify-center max-sm:pt-14 ">
      <h1 ref={headingRef} className="text-[6vw] leading-[7vw] text-center uppercase font-[var] z-10 text-white  max-sm:text-[9vw] max-sm:leading-[10vw] max-sm:tracking-wide select-none">
        I'm an engineer <br /> without engineering
      </h1>

      <p ref={paragraphRef} className="text-center text-xl mb-12  max-sm:mt-12 opacity-90 max-sm:text-xl max-sm:w-[70%] mx-auto max-sm:leading-[6vw] z-10 select-none">
        Crafting digital experiences with creativity and precision
      </p>

      <div ref={scrollRef} className="flex justify-center max-sm:mt-12">
          <div className="text-gray-400 rotate-90 text-sm tracking-[0.2em] whitespace-nowrap select-none">
            SCROLL
          </div>
       
      </div>


    </div>
  );
};

export default Hero;
