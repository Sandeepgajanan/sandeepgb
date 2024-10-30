import React from "react";

const Heading = ({ text }) => {
  return (
    <div>
      <h2 className="text-4xl max-sm:text-2xl font-[var] text-center mb-4 text-purple-400 uppercase tracking-wider">
        {text}
      </h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
    </div>
  );
};

export default Heading;
