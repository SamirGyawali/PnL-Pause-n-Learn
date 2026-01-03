import React from "react";
import { hover, motion } from "framer-motion";

const NewsItem = ({ data }) => {
  return (
    <div
      className="w-[85vw] sm:w-[400px] md:w-[500px] shrink-0 cursor-pointer group hover:cursor-pointer"
      key={data.id}
    >
      <div className="w-full h-[calc(100%-4rem)] rounded-2xl overflow-hidden">
        <motion.img
          src={data.image}
          whileHover="hover" // announce the state
          variants={{ hover: { scale: 1.04 } }} // perform animation
          transition={{ duration: 0.3, ease: "easeOut" }}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <p className="font-inter-regular text-lg p-1 group-hover:underline">
          {data.title}
        </p>
        <span className="font-ibm-mono-semibold text-neutral-400 text-md">
          January 2, 2022
        </span>
      </div>
    </div>
  );
};

export default NewsItem;
