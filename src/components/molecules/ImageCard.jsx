import React from "react";
import { motion } from "framer-motion";

const ImageCard = ({ cardStyle, data, onClick }) => {
  return (
    <>
      <motion.div
        className="absolute rounded-xl overflow-hidden cursor-pointer"
        style={{
          ...cardStyle,
        }}
        whileHover="hover"
        onClick={onClick}
      >
        <motion.img
          src={data.image}
          variants={{ hover: { scale: 1.03 } }}
          className="w-full h-full object-cover block transition-transform duration-600 ease-out"
        />
        <div className="overlay absolute inset-0 p-2 flex justify-start items-end">
          <motion.p
            initial={{ opacity: 0, x: -15, y: 10 }}
            variants={{ hover: { x: 0, y: 0, opacity: 1 } }}
            transition={{
              duration: 0.6,
            }}
            className="text-white font-medium text-lg text-left bg-black/30 backdrop-blur-[0.5rem] px-3 py-2 rounded-lg tracking-wide"
          >
            {data.meta}
            <span className="text-sm block font-ibm-mono-regular tracking-widest">
              2025 JUNE
            </span>
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default ImageCard;
