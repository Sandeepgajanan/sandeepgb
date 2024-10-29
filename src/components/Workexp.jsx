import React from "react";
import { wrkdata } from "../constants";
import Workcard from "./Workcard";
import Heading from "./Heading";
const Workexp = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Heading text={"Career Journey"} />
      <div className="flex flex-wrap justify-center items-center w-full max-w-4xl gap-12 max-sm:gap-4">
        {wrkdata.map((item, index) => (
          <div key={index}>
            <Workcard val={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workexp;
