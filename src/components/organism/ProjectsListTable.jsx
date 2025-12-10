import { motion } from "framer-motion";
import { useState } from "react";

export const projects = [
  {
    id: 1,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
  },
  {
    id: 2,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
  },
  {
    id: 3,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
  },
  {
    id: 4,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
  },
  {
    id: 5,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
  },
  {
    id: 6,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
  },
  {
    id: 7,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
  },
  {
    id: 8,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
  },
  {
    id: 9,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
  },
  {
    id: 10,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
  },
  {
    id: 11,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
  },
  {
    id: 12,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
  },
  {
    id: 13,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
  },
  {
    id: 14,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
  },
  {
    id: 15,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
  },
  {
    id: 16,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
  },
];

const BackgroundDiv = {
  initial: { top: "-100%" },
  hovered: { top: "0%" },
  crossedDown: { top: "100%" },
  crossedUp: { top: "-100%" },
};

const TextVariants = {
  initial: { color: "#374151" },
  hovered: { color: "#ffffff" },
  crossedDown: { color: "#374151" },
  crossedUp: { color: "#374151" },
};

export default function ProjectListTable() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const getRowState = (i) => {
    if (hoverIndex === null) return "initial";
    if (i === hoverIndex) return "hovered";
    if (i < hoverIndex) return "crossedDown"; // row before hovered → move down
    if (i > hoverIndex) return "crossedUp"; // row after hovered → move up
  };

  return (
    <div className="w-full max-w-9xl mx-auto py-4">
      <div className="grid grid-cols-4 px-4 py-2 text-sm uppercase text-gray-900 border-b border-neutral-700">
        <p>Project</p>
        <p>Category</p>
        <p>Client</p>
        <p>Year</p>
      </div>

      <div className="divide-y divide-neutral-200">
        {projects.map((item, i) => (
          <motion.div
            key={item.id}
            className="grid grid-cols-4 px-4 py-4 cursor-pointer relative overflow-hidden"
            initial="initial"
            animate={getRowState(i)}
            whileHover="hovered"
            onHoverStart={() => setHoverIndex(i)}
            onHoverEnd={() => setHoverIndex(null)}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <motion.div
              className="absolute left-0 w-full h-full bg-green-400/90 z-0"
              variants={BackgroundDiv}
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
            <motion.p className="relative z-10" variants={TextVariants}>
              {item.year}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
