import React from "react";

const Workcard = ({ val }) => {
  return (
    <div className="w-80 h-80 relative bg-purple-600 p-3 transform rotate-6 rounded-sm transition-all duration-300 hover:scale-105 hover:rotate-3 max-sm:w-64 max-sm:h-64">
      <div className="w-full h-full rounded-lg p-8 flex flex-col justify-between text-center -rotate-6 bg-zinc-900 group max-sm:p-4">
        <h2 className="text-4xl font-bold text-white mb-2 max-sm:text-2xl">
          {val.company}
        </h2>
        <h3 className="text-2xl font-semibold text-purple-300 mb-2 max-sm:text-xl">
          {val.role}
        </h3>
        <p className="text-xl text-gray-400 mb- max-sm:text-lg">
          {val.duration}
        </p>
        <p className="text-xl capitalize text-gray-300 max-sm:text-lg">
          {val.description}
        </p>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-500 rounded-tl-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 max-sm:w-12 max-sm:h-12"></div>
      </div>
    </div>
  );
};

export default Workcard;
