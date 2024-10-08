import React, { useState } from "react";
import { projectdata } from "../constants";
import ProjectCard from "./ProjectCard";
import Heading from "./Heading";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="w-full min-h-screen py-5">
      <Heading text={"My Projects"} />
      <div className="flex flex-col items-center justify-center">
        <ProjectCard val={projectdata[activeIndex]} />

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
