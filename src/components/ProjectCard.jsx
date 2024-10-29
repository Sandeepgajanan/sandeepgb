import React from "react";

const ProjectCard = ({ val }) => {
  return (
      <div className="w-72 h-[25vw] rounded-lg flex flex-col justify-between flex-shrink-0 bg-zinc-800/50 p-6 max-sm:h-[85vw] max-sm:w-full max-sm:snap-center">
        <div>
          <h2 className="text-3xl font-bold mb-5">{val.title}</h2>
          <p className="text-lg leading-none mb-5 ">{val.description}</p>
          <div className="flex flex-wrap gap-2">
            {val.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-[1.2vw] bg-purple-500/20 px-3 py-1 rounded-full font-medium max-sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <a
          href={val.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center text-white bg-purple-600 py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 max-sm:py-2 max-sm:text-sm"
        >
          View Project →
        </a>
      </div>
  );
};

export default ProjectCard;
