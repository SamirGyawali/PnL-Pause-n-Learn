import { motion } from "framer-motion";

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

const BackgroundDivVariant = {
  rest: { opacity: 0, scale: 0.99 },
  hovered: { opacity: 0.8, scale: 1 },
};

const TextVariants = {
  rest: { color: "#374151" }, // gray-700
  hovered: { color: "#ffffff" },
};

export default function ProjectListTable() {
  return (
    <div className="w-full max-w-9xl mx-auto py-4">
      {/* Header */}
      <div
        className="
          grid grid-cols-4
          px-4 py-2
          font-inter-regular
          text-sm
          uppercase
          text-gray-900
          border-b border-neutral-700
        "
      >
        <p>Project</p>
        <p>Category</p>
        <p>Client</p>
        <p>Year</p>
      </div>

      {/* Rows */}
      <div className="divide-y divide-neutral-200">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            className="
              grid grid-cols-4
              px-4 py-4
              cursor-pointer
              relative overflow-hidden
            "
            initial="rest"
            whileHover="hovered"
            animate="rest"
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-green-400/90 z-0"
              variants={BackgroundDivVariant}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            />

            <motion.p
              className="relative z-10 font-inter-regular"
              variants={TextVariants}
            >
              {item.title}
            </motion.p>
            <motion.p
              className="relative z-10 font-inter-light"
              variants={TextVariants}
            >
              {item.category}
            </motion.p>
            <motion.p
              className="relative z-10 font-inter-light"
              variants={TextVariants}
            >
              {item.client}
            </motion.p>
            <motion.p
              className="relative z-10 font-inter-light"
              variants={TextVariants}
            >
              {item.year}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
