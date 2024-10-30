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
        start: "top 0%",
        end: "bottom -100%",
        pin: true,
        scrub: 3,
        ease: "power3.inOut",
      },
    });
  })

  return (
    <section className="max-w-screen-xl mx-auto detail w-full h-screen flex items-center justify-center">
      <div className="expand text-zinc-700 text-center">
        {aboutcontent.map((item, index) => (
          <h1
            key={index}
            className="font-[var] tracking-wider text-[7vw] leading-[7vw] pt-1 sm:text-[3vw] sm:leading-normal sm:pt-0"
          >
            {item}
          </h1>
        ))}
      </div>
    </section>
  );
};

export default About;
