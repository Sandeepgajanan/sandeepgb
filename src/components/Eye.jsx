import React, { useEffect, useState, useRef } from "react";

const Eye = ({ title = "play" }) => {
  const [rotate, setRotate] = useState(0);
  const eyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (eyeRef.current) {
        const eyeRect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle - 180);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={eyeRef}
      className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 max-sm:h-[40vw] max-sm:w-[40vw] "
    >
      <div className="relative w-[60%] h-[60%] rounded-full bg-zinc-900 -mt-6 max-sm:w-[70%] max-sm:h-[70%] ">
        <div
          style={{
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          }}
          className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.8vw]"
        >
          <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100 max-sm:w-[3vw] max-sm:h-[3vw] max-sm:bg-white max-sm:shadow-md max-sm:shadow-indigo-300"></div>
        </div>
        <div>
          <h3 className="text-zinc-100 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] uppercase font-medium max-sm:text-xs max-sm:font-bold max-sm:tracking-wider max-sm:text-whitemax-sm:bg-opacity-30 max-sm:px-2 max-sm:py-1 max-sm:rounded-full">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Eye;
