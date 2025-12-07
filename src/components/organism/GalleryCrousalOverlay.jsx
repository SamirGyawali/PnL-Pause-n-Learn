import React from "react";
import Button from "../atoms/button";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const blurOverlayVariant = {
  initial: { opacity: 0, filter: "blur(20px)" },
  final: { opacity: 1, filter: "blur(0px)" },
};

const whiteContainerVariant = {
  initial: { opacity: 0, scale: 0.97 },
  final: { opacity: 1, scale: 1 },
};
const GalleryCrousalOverlay = ({ onClose }) => {
  // revieve the function def, and call it at onClick event
  return (
    <motion.div
      className="fixed inset-0 bg-[rgba(1,1,1,0.32)] backdrop-blur-[20px] w-screen md:p-2 flex items-end md:items-center justify-center z-100"
      variants={blurOverlayVariant}
      initial="inital"
      animate="final"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="w-full h-[95dvh] max-w-[160vh] bg-[rgb(255,255,255)] rounded-2xl p-3 backdrop-blur-[20px] md:h-[92%]"
        variants={whiteContainerVariant}
        initial="initial"
        animate="final"
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Button icon={<X />} onClick={onClose} />
        Here will be the images crousal.
      </motion.div>
    </motion.div>
  );
};

export default GalleryCrousalOverlay;
