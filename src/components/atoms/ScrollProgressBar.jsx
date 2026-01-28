import React from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "motion/react";

const ScrollProgressBar = ({ targetRef }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className={`w-[90px] h-[5px] bg-neutral-300 overflow-hidden rounded-full cursor-pointer`}
    >
      <motion.div className="h-full bg-neutral-900 rounded-full" style={{ width }} />
    </div>
  );
};

export default ScrollProgressBar;
