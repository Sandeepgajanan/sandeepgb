import React, { useState } from "react";
import { projectdata } from "../constants";
import Projectcard from "./Projectcard";
import Heading from "./Heading";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      data-scroll-section
      data-scroll
      data-scroll-speed="0.1"
      id="projects"
      className="w-full min-h-screen "
    >
      <Heading text={"My Projects"} />
      <div className="flex flex-col items-center justify-center">
        <Projectcard val={projectdata[activeIndex]} />

        <div className="flex justify-center mt-8">
          {projectdata.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeIndex ? "bg-purple-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
