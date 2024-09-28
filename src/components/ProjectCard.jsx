import React from "react";

const Projectcard = ({ val }) => {
  return (
    <div className="relative group w-72 h-80   rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
      <img
        src={val.image}
        alt={val.title}
        className="w-full h-full object-cover transition-all duration-300 group-hover:blur-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70  flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{val.title}</h2>
          <p className="text-sm text-gray-200 mb-4">{val.description}</p>
          <div className="flex flex-wrap gap-2">
            {val.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded"
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
          className="text-center text-white bg-purple-600 py-2 rounded hover:bg-purple-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Projectcard;
