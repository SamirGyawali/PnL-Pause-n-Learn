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
];

export default function ProjectListTable() {
  return (
    <div className="w-full max-w-9xl mx-auto py-4">
      {/* Header */}
      <div className="grid grid-cols-4 px-4 py-2 font-inter-regular text-sm uppercase text-gray-900 border-b border-neutral-700">
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
            className="grid grid-cols-4 px-4 py-4 cursor-pointer"
            whileHover={{
              scale: 1.01,
              backgroundColor: "rgba(193, 236, 242, 0.4)",
            }}
            transition={{
              duration: 0.35,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <p className="font-inter-regular text-gray-700">{item.title}</p>
            <p className=" font-inter-light text-gray-600">{item.category}</p>
            <p className="font-inter-light text-gray-600">{item.client}</p>
            <p className="font-inter-light text-gray-600">{item.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
