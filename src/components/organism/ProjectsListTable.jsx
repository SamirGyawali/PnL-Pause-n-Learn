import { motion } from "framer-motion";
import { useState } from "react";


const BackgroundDiv = {
  initial: { top: "-100%" },
  hovered: { top: "0%" },
  crossedDown: { top: "100%" },
  crossedUp: { top: "-100%" },
};

const TextVariants = {
  initial: { color: "#374151" },
  hovered: { color: "#374151" }, // change it to white for the darker color
  crossedDown: { color: "#374151" },
  crossedUp: { color: "#374151" },
};

const YearVariants = {
  initial: { x: 0 },
  hovered: { x: -7 },
};

export default function ProjectListTable({data}) {
  const [hoverIndex, setHoverIndex] = useState(null);

  const getRowState = (i) => {
    if (hoverIndex === null) return "initial";
    if (i === hoverIndex) return "hovered";
    if (i < hoverIndex) return "crossedDown"; // row before hovered → move down
    if (i > hoverIndex) return "crossedUp"; // row after hovered → move up
  };

  return (
    <div className="w-full max-w-9xl mx-auto py-4">
      <div className="grid grid-cols-4 px-4 py-2 text-sm uppercase text-gray-900 border-b border-sky-500">
        <p>Project</p>
        <p>Category</p>
        <p>Client</p>
        <p>Year</p>
      </div>

      {data.map((item, i) => (
        <motion.div
          key={item.id}
          className="grid grid-cols-4 px-3 py-3 cursor-pointer relative overflow-hidden"
          initial="initial"
          animate={getRowState(i)} // final state of animation
          whileHover="hovered"
          onHoverStart={() => setHoverIndex(i)}
          onHoverEnd={() => setHoverIndex(null)}
        >
          <motion.div
            className="absolute left-0 w-full h-full bg-sky-100 z-0"
            variants={BackgroundDiv}
            transition={{ duration: 0.4, ease: "circOut" }}
          />

          <motion.p className="relative z-10" variants={TextVariants}>
            {item.title}
          </motion.p>
          <motion.p className="relative z-10" variants={TextVariants}>
            {item.category}
          </motion.p>
          <motion.p className="relative z-10" variants={TextVariants}>
            {item.client}
          </motion.p>
          <motion.p
            className="relative z-10"
            variants={YearVariants}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            {item.year}
          </motion.p>
          {/* div for border for animation */}
          <motion.div
            className="seperator-border absolute bottom-0 left-0 h-[1px] w-full bg-sky-300 origin-left"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: i * 0.09,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
