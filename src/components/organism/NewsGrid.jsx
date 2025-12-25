import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide11 from "../../assets/slide11.jpg";
import Button from "../atoms/button";
import { MoveRight } from "lucide-react";

// fetch the news data over here

const news = [
  {
    id: 1,
    title: "The Celestial dance",
    meta: "2022 • Retreat at Himalayas",
    image: slide1,
  },
  {
    id: 2,
    title: "The Celestial dance",
    meta: "2023 • Dance",
    image: slide2,
  },
  {
    id: 3,
    title: "The Celestial dance",
    meta: "2024 • Fair Education",
    image: slide3,
  },
  {
    id: 4,
    title: "The Celestial dance",
    meta: "PROJECT • Pause",
    image: slide11,
  },
  {
    id: 5,
    title: "Harbin Opera House",
    meta: "PROJECT • Unlearn",
    image: slide11,
  },
  {
    id: 6,
    title: "The Celestial dance",
    meta: "PROJECT • one",
    image: slide3,
  },
  {
    id: 7,
    title: "Harbin Opera House",
    meta: "PROJECT • two",
    image: slide1,
  },
  {
    id: 8,
    title: "Shenzhen Bay Culture Dance",
    meta: "PROJECT • three",
    image: slide1,
  },
  {
    id: 9,
    title: "Shenzhen Bay Culture Dance",
    meta: "PROJECT • four",
    image: slide2,
  },
  {
    id: 10,
    title: "The Celestial dance",
    meta: "PROJECT • one",
    image: slide3,
  },
  {
    id: 11,
    title: "Harbin Opera House",
    meta: "PROJECT • two",
    image: slide1,
  },
  {
    id: 12,
    title: "Shenzhen Bay Culture Dance",
    meta: "PROJECT • three",
    image: slide1,
  },
  {
    id: 13,
    title: "Shenzhen Bay Culture Dance",
    meta: "PROJECT • four",
    image: slide2,
  },
];

const parentContainerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const NewsGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <motion.div className="window mt-4 flex w-full overflow-x-hidden gap-2 rounded-2xl">
        {/* need to do some animateion tweaks here for launcing effect */}
        {news.map((item, index) => (
          <motion.div
            className="w-[85vw] sm:w-[400px] md:w-[500px] shrink-0 cursor-pointer group hover:cursor-pointer"
            custom={index}
            key={item.id}
            animate={{
              x: `calc(-${currentIndex * 305.33}% - ${currentIndex * 36}px)`,
            }}
            transition={{ ease: "easeIn", duration: 1.3 }}
          >
            <img
              src={item.image}
              alt="image"
              className="object-cover w-full h-[calc(100%-4rem)] rounded-2xl"
            />
            <div>
              <p className="font-inter-regular text-lg p-1 group-hover:underline">
                {item.title}
              </p>
              <span className="font-ibm-mono-semibold text-neutral-400 text-md">
                January 2, 2022
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex flex-row-reverse">
        <Button
          icon={
            <MoveRight
              size={21}
              onClick={() => setCurrentIndex((prev) => prev + 1)}
            />
          }
        />
      </div>
    </>
  );
};

export default NewsGrid;
