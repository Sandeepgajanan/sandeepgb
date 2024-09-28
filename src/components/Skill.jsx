import React, { useState } from "react";
import { motion } from "framer-motion";

const Skill = ({ val }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex-shrink-0">
      <div
        className="w-24 h-24 max-sm:w-16 max-sm:h-16 rounded-full border-[1px] border-zinc-800 p-5 max-sm:p-3 overflow-hidden relative shadow-xl shadow-[#ffffff63] mb-16 max-sm:mb-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={val.img} alt="Skill" className="w-full h-full object-cover" />
      </div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            exit: { duration: 0.2 },
          }}
          className="absolute -top-[40%] left-[20%] transform -translate-x-1/2 mb-2 px-5 py-3  whitespace-nowrap bg-gradient-to-r from-purple-500 to-indigo-500 text-xl  max-sm:hidden rounded-md text-zinc-100"
        >
          {val.text}
        </motion.div>
      )}
    </div>
  );
};

export default Skill;
