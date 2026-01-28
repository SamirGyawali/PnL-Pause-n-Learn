import React, { useRef } from "react";
import { motion } from "framer-motion";
import slide11 from "../../assets/slide11.jpg";
import ScrollProgressBar from "../atoms/ScrollProgressBar";

const EachBlog = () => {
  const ref = useRef();
  return (
    <div className="min-w-screen min-h-screen bg-sky-100 p-12 relative">
      <div className="absolute inset-0 min-w-screen h-[78vh] p-12"></div>
      <div className="flex flex-col items-center">
        <div className="mt-15 mb-55 max-h-[575px] aspect-[16/9] relative flex flex-col items-center">
          <img
            src={slide11}
            alt=""
            className="w-full h-full object-cover rounded-4xl"
          />
          <motion.div
            className="p-4 absolute -bottom-20 bg-neutral-600/75 backdrop-blur-[0.5rem] rounded-4xl text-3xl font-inter-light text-white text-center max-w-[600px] hover:cursor-grab"
            drag
            dragDirectionLock
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
            dragElastic={0.1}
            whileDrag={{ cursor: "grabbing" }}
          >
            <span className="px-4 py-2 text-[13px] font-ibm-mono-regular bg-neutral-500 rounded-3xl tracking-wide hover:bg-neutral-300 hover:text-black transition-all duration-300 ease-in">
              PUBLICATION
            </span>
            <p className="p-6 pb-0">
              To whom has this thought arisen?” -to me.
            </p>
            <span className="text-sm font-ibm-mono-regular tracking-widest text-white">
              <span>3 MIN READ</span>
              <span>5 DECEMBER, 2025</span>
            </span>
          </motion.div>
        </div>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <div
          className="bg-green-500 max-w-[830px] flex flex-col h-[200vh]"
          ref={ref}
        >
          hello
        </div>
        <div className="flex fixed items-center top-[35%] left-12 z-100">
          <div className="relative rotate-90">
            <ScrollProgressBar targetRef={ref} />
          </div>
          <div className="flex flex-col gap-2 justify-start">
            <div>Gallery</div>
            <div>Share</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachBlog;
