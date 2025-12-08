import React from "react";
import {motion} from "framer-motion";

const FounderStatement = () => {
  return (
    <div className="mt-5 mx-7 p-8 border-l-2 md:border-l-0 md:border-t-2 sm:border-t-black/50 flex flex-col md:flex-row-reverse justify-between">
      <motion.p className="text-4xl lg:text-6xl p-7 sm:max-w-[60%] font-inter-light"
      initial={{opacity:0, y:30}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.6, ease:"easeOut"}}
      >
        Life moves fast, and we often forget to live skillfully. It's time to
        Pause & Learn to find inner harmony, remember Who We Are, and awaken a
        shift in consciousness.
      </motion.p>
      <p className="flex flex-col items-start">
        <span className="text-md font-ibm-mono-semibold text-neutral-600 sm:whitespace-nowrap tracking-tight">
          ANKUR MEHETHA & MANJARI MEHETHA
        </span>
        <span className="text-sm font-ibm-mono-semibold text-neutral-400 tracking-wide">
          FOUNDERS | VISIONERIES
        </span>
      </p>
    </div>
  );
};

export default FounderStatement;
