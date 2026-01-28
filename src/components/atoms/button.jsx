import React from "react";
import { motion } from "framer-motion";

const Button = ({ label, icon, onClick, className }) => {
  return (
    <button
      className={`px-2.5 py-1.5 bg-neutral-400/20 rounded-lg flex gap-2 items-center hover:cursor-pointer hover:bg-neutral-400/30 w-fit group cursor-pointer ${className}`}
      onClick={onClick}
    >
      {label ? (
        <span className="relative overflow-hidden inline-block">
          <span className="text-[11px] sm:text-[13px] font-ibm-mono-regular block translate-y-0 group-hover:-translate-y-full transition duration-500 ease-in-out">
            {label}
          </span>
          <span className="text-[11px] sm:text-[13px] font-ibm-mono-regular absolute left-0 top-0 translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
            {label}
          </span>
        </span>
      ) : null}
      {icon ? <span className="-translate-y-[1.5px]">{icon}</span> : null}
    </button>
  );
};

export const SliderButton = ({
  upperLabel,
  lowerLabel,
  isActive,
  setIsActive,
  className
}) => {
  return (
    <div
      className={`h-[30px] w-[40px] flex flex-col items-center justify-center overflow-hidden cursor-pointer rounded-lg ${className}`}
      onClick={() => setIsActive(!isActive)}
    >
      <motion.div
        className="slider relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <span className="block w-full h-full bg-[#169edd] text-black flex justify-center items-center">
          {upperLabel}
        </span>
        <span className="block w-full h-full bg-[#141414] text-[#a0f700] flex justify-center items-center absolute top-[100%]">
          {lowerLabel}
        </span>
      </motion.div>
    </div>
  );
};

export default Button;
