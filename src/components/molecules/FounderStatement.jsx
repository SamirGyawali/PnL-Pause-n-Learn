import React from "react";

const FounderStatement = () => {
  return (
    <div className="mt-5 mx-7 p-8 border-l-2 md:border-l-0 md:border-t-2 sm:border-t-black/50 flex flex-col md:flex-row-reverse justify-between">
      <p className="text-4xl lg:text-6xl p-7 sm:max-w-[60%] font-inter-light">
        Life moves fast, and we often forget to live skillfully. It's time to
        Pause and Learn — to find inner harmony, remember Who We Are, and awaken
        a shift in consciousness.
      </p>
      <p className="flex flex-col items-start">
        <span className="text-xl font-mono sm:whitespace-nowrap">
          Ankur Mehetha & Manjari Mehetha
        </span>
        <span className="text-xl opacity-50 font-medium">
          Founders | Visionaries
        </span>
      </p>
    </div>
  );
};

export default FounderStatement;
