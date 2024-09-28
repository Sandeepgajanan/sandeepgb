import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { aboutcontent } from "../constants";
import Eye from "./Eye";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useEffect(() => {
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
      color: "#e94560",
      stagger: 0.8,
      scrollTrigger: {
        trigger: ".ex",
        scroller: "body",
        start: "top 60%",
        end: "bottom bottom",
        scrub: 2,
        ease: "power3.inOut",
      },
    });
  }, []);

  return (
    <section
      className="detail w-full h-screen select-none  max-sm:h-[90vh] max-sm:py-5 max-sm:px-3"
      data-scroll-section
      data-scroll
      data-scroll-speed="-0.2"
    >
      <div className="ex max-w-screen-lg mx-auto h-full w-full flex items-center justify-between pb-10 max-sm:flex-col max-sm:justify-start max-sm:gap-16">
        <Eye />

        <div className="expand text-[#fff] text-center ">
          {aboutcontent.map((item, index) => (
            <h1
              key={index}
              className="font-[ff] text-[3vw] max-sm:text-[6.5vw] max-sm:leading-[6vw] max-sm:pt-1"
            >
              {item}
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
