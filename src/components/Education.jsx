import React from "react";

const Education = ({ val }) => {
  return (
    <div className="w-[20vw] h-[25vw] px-6 py-6 rounded-lg border-[1px] border-zinc-800 flex-shrink-0 max-sm:w-[80vw] max-sm:h-full max-sm:m-auto relative group">
      <div className="flex flex-col items-center  h-[12vw]  max-sm:h-[80%]">
        <h2 className="text-4xl font-bold mb-3 text-purple-400 max-sm:text-3xl">
          {val.courseName}
        </h2>
        <p className="text-2xl mb-2 text-zinc-200">{val.university}</p>
        <p className="text-lg text-center text-zinc-400">{val.college}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-5 pt-4 border-t border-zinc-700">
        <div className="flex flex-col items-center">
          <p className="text-lg text-zinc-400">CGPA</p>
          <p className="text-2xl font-semibold text-emerald-400">{val.cgpa}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg text-zinc-400">Year</p>
          <p className="text-2xl text-zinc-300">{val.year}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
};

export default Education;
