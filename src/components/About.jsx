import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { aboutcontent } from "../constants";

import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const allH1 = document.querySelectorAll(".expand h1");
    allH1.forEach((elem) => {
      let clutter = "";
      const allH1Text = elem.textContent;
      const splittedText = allH1Text.split("");
      splittedText.forEach((char) => {
        clutter += `<span>${char}</span>`;
      });
      elem.innerHTML = clutter;
    });
    gsap.to(".expand h1 span", {
      color: "white",
      stagger: 2,
      duration: 0.5,
      scrollTrigger: {
        trigger: "section",
        start: "top 30%",
        end: "bottom -80%",
        pin:true,
        scrub: 3,
        ease: "power3.inOut",
 
      },
    });
  })

  return (
    <section className="detail w-full h-screen  max-sm:h-fit max-sm:pb-5 ">

        <div className="expand text-zinc-700 text-center">
          {aboutcontent.map((item, index) => (
            <h1
              key={index}
              className="font-[var] text-[3vw] tracking-wider max-sm:text-[7vw]  max-sm:leading-[7vw]  max-sm:pt-1"
            >
              {item}
            </h1>
          ))}
        </div>
      
    </section>
  );
};

export default About;
