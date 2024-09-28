import React, { useEffect, useRef } from "react";
import { loaderlines } from "../constants";
import gsap from "gsap";

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";
    body.style.height = "100vh";
    body.style.position = "fixed";
    body.style.width = "100%";
    const tl = gsap.timeline();
    const lines = loaderRef.current.querySelectorAll("h1");

    tl.fromTo(
      lines,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.5 }
    );

    lines.forEach((line, index) => {
      tl.to(
        line,
        {
          opacity: 0,
          y: -20,
          duration: 0.2,
        },
        `+=${index * 0.1}`
      );
    });

    tl.to(loaderRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
    }).eventCallback("onComplete", () => {
      body.style.overflow = "";
      body.style.height = "";
      body.style.position = "";
      body.style.width = "";
    });

    return () => {
      body.style.overflow = "";
      body.style.height = "";
      body.style.position = "";
      body.style.width = "";
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="loader w-full h-screen top-0 bg-zinc-800 z-[99] pointer-events-none flex flex-col items-center justify-center fixed"
    >
      {loaderlines.map((item, index) => (
        <h1
          className="font-bold uppercase text-[7vw] loadercolor font-[ff] opacity-0 max-sm:text-[9vw] loader-text"
          key={index}
        >
          {item}
        </h1>
      ))}
    </div>
  );
};

export default Loader;
