import React from "react";
import Skill from "./Skill";
import { skilldata } from "../constants";
import Heading from "./Heading";
const Skills = () => {
  return (
    <div
      data-scroll-section
      data-scroll
      data-scroll-speed="-0.1"
      className="w-full h-full"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <Heading text={"Tech skills"} />
        <div className="py-20 flex gap-16 flex-wrap items-center justify-center max-sm:py-10 max-sm:gap-8">
          {skilldata.map((item, index) => (
            <Skill key={index} val={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;