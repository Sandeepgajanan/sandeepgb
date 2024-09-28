import React from "react";
import Education from "./Education";
import { edudata } from "../constants";
import Heading from "./Heading";
const Educations = () => {
  return (
    <div
      data-scroll-section
      data-scroll
      data-scroll-speed="0.1"
      className="w-full min-h-screen max-w-screen-xl mx-auto py-16 px-4"
    >
      <Heading text={"Educational Journey"} />
      <div className="flex flex-wrap justify-center gap-8 max-sm:flex-col">
        {edudata.map((item, index) => (
          <div key={index} className="relative">
            <Education val={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
