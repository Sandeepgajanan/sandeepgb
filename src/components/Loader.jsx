import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  const loaderlines = ["Hello", "Welcome", "I'm Sandeep"];
  const loaderRef = useRef(null);

  useGSAP(() => {
    const body = document.body;
    body.style.overflow = "hidden";
    body.style.height = "100vh";
    body.style.position = "fixed"; 
    body.style.width = "100%";

    const tl = gsap.timeline();
    const lines = loaderRef.current.querySelectorAll("h1");


    lines.forEach(line => {

      const text = line.textContent;
      line.textContent = '';
      const characters = text.split('');
      characters.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        line.appendChild(span);
      });
    });

    // Animate each character
    lines.forEach((line, i) => {
      const chars = line.querySelectorAll('span');
      tl.fromTo(chars, {
        opacity: 0,
        y: 20,
        rotateX: -90
      }, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out"
      },);
    });

    // Exit animation
    tl.to(loaderRef.current, {
      y: "-100%",
      duration: 1.3,
      ease: "power4.inOut",
      onComplete: () => {
        loaderRef.current.style.display = "none";
        body.style.overflow = "";
        body.style.height = "";
        body.style.position = "";
        body.style.width = "";
      }
    });

    return () => {
      body.style.overflow = "";
      body.style.height = "";
      body.style.position = "";
      body.style.width = "";
      tl.kill();
    };
  });

  return (
    <div
      ref={loaderRef}
      className="loader w-full h-screen top-0 bg-zinc-900 z-[99] pointer-events-none flex flex-col items-center justify-center fixed"
    >
      {loaderlines.map((item, index) => (
        <h1
          key={index}
          className="text-[5vw] tracking-wider font-[var] max-sm:text-[8vw] mb-4">
          {item}
        </h1>
      ))}
    </div>
  );
};

export default Loader;
