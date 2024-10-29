import { projectdata } from "../constants";
import ProjectCard from "./ProjectCard";
import Heading from "./Heading";

const Projects = () => {
  return (
    <section className="w-full h-screen flex flex-col py-5 max-sm:py-3 ">
      <Heading text={"Featured Projects"} />
      <p className="text-gray-400 mb-4  text-center">← Scroll to see more →</p>
      <div className="mt-10 flex flex-nowrap gap-8 overflow-x-auto w-full px-5 max-sm:snap-x max-sm:snap-mandatory max-sm:mt-2" id="projects">
        {projectdata.map((item, index) => (
          <ProjectCard val={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
